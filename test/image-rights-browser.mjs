import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { registerHooks } from 'node:module'

registerHooks({
  resolve(specifier, context, next) {
    return /\.(svg|webp)$/.test(specifier)
      ? { url: new URL(specifier, context.parentURL).href, shortCircuit: true }
      : next(specifier, context)
  },
  load(url, context, next) {
    return /\.(svg|webp)$/.test(url)
      ? { format: 'module', source: 'export default ' + JSON.stringify(url), shortCircuit: true }
      : next(url, context)
  },
})

const { historicalPeople } = await import('../src/data/historicalPeople.ts')
const { getLocalizedPerson } = await import('../src/data/personTranslations.ts')
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')

const base = process.env.BASE_URL || 'http://127.0.0.1:5174'
const requestedIds = (process.env.AUDIT_IDS || '').split(',').map((id) => id.trim()).filter(Boolean)
const selectedPeople = requestedIds.length
  ? requestedIds.map((id) => {
      const person = historicalPeople.find((candidate) => candidate.id === id)
      assert.ok(person, 'Unknown AUDIT_IDS entry: ' + id)
      return person
    })
  : historicalPeople
const widths = [1440, 320]
const languages = ['en', 'zh-CN']
const imageTimeoutMs = Number(process.env.AUDIT_IMAGE_TIMEOUT_MS || 8000)
const pageTimeoutMs = Number(process.env.AUDIT_PAGE_TIMEOUT_MS || 20000)
const batchSize = Number(process.env.AUDIT_BATCH_SIZE || 5)
const batchTimeoutMs = Number(process.env.AUDIT_BATCH_TIMEOUT_MS || 120000)
const runLabel = (process.env.AUDIT_RUN_LABEL || (requestedIds.length ? requestedIds.join('_') : 'full')).replace(/[^a-z0-9_-]+/gi, '-')
const outputDirectory = path.resolve('node_modules/.cache/image-rights-browser')
const outputPath = path.join(outputDirectory, runLabel + '.json')
fs.mkdirSync(outputDirectory, { recursive: true })

const state = {
  runLabel,
  startedAt: new Date().toISOString(),
  base,
  people: selectedPeople.map((person) => person.id),
  widths,
  languages,
  settings: { imageTimeoutMs, pageTimeoutMs, batchSize, batchTimeoutMs },
  completed: [],
  errors: [],
}

function save() {
  fs.writeFileSync(outputPath, JSON.stringify({ ...state, updatedAt: new Date().toISOString() }, null, 2) + '\n')
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error)
}

async function within(promise, timeoutMs, label) {
  let timer
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(label + ' timed out after ' + timeoutMs + 'ms')), timeoutMs)
      }),
    ])
  } finally {
    clearTimeout(timer)
  }
}

async function waitForImage(locator, context) {
  await locator.scrollIntoViewIfNeeded({ timeout: Math.min(imageTimeoutMs, 5000) })
  const source = await locator.getAttribute('src')
  try {
    const result = await locator.evaluate((image, timeoutMs) => new Promise((resolve, reject) => {
      const finish = () => {
        if (image.complete && image.naturalWidth > 0) {
          resolve({ complete: image.complete, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight, currentSrc: image.currentSrc })
          return true
        }
        return false
      }
      if (finish()) return
      const timer = setTimeout(() => {
        cleanup()
        reject(new Error('image load timed out'))
      }, timeoutMs)
      const onLoad = () => {
        if (finish()) cleanup()
      }
      const onError = () => {
        cleanup()
        reject(new Error('image load error'))
      }
      const cleanup = () => {
        clearTimeout(timer)
        image.removeEventListener('load', onLoad)
        image.removeEventListener('error', onError)
      }
      image.addEventListener('load', onLoad)
      image.addEventListener('error', onError)
    }), imageTimeoutMs)
    assert.ok(result.complete && result.naturalWidth > 0, 'image did not complete')
    return result
  } catch (error) {
    throw new Error(context + '; image=' + (source || '<missing>') + '; ' + errorMessage(error))
  }
}

async function withPage(browserContext, details, task) {
  const page = await browserContext.newPage()
  page.setDefaultTimeout(Math.min(pageTimeoutMs, 10000))
  page.setDefaultNavigationTimeout(Math.min(pageTimeoutMs, 15000))
  const pageErrors = []
  page.on('pageerror', (error) => pageErrors.push(error.message))
  try {
    const result = await within(task(page), pageTimeoutMs, 'page ' + JSON.stringify(details))
    assert.deepEqual(pageErrors, [], 'uncaught page errors: ' + pageErrors.join(' | '))
    return result
  } finally {
    await page.close().catch(() => {})
  }
}

async function checkHomepage(browserContext, width, language) {
  await withPage(browserContext, { stage: 'homepage', width, language }, async (page) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(base)
    await page.locator('.person-card').first().waitFor()
    await page.locator('.language-bar').getByRole('button', { name: language === 'en' ? 'English' : '简体中文', exact: true }).click()
    assert.deepEqual(
      await page.locator('.person-card-link').evaluateAll((links) => links.map((link) => link.getAttribute('href'))),
      historicalPeople.map((person) => '/people/' + person.id),
    )
    assert.equal(await page.locator('.person-card__credits').count(), 0)
    assert.ok(!(await page.locator('main').innerText()).includes(language === 'en' ? 'Image credits' : '图片来源与署名'))
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'homepage overflow')
    for (const person of selectedPeople) {
      await waitForImage(page.locator('.person-card-link[href="/people/' + person.id + '"] img'), 'homepage ' + person.id + ' ' + language + ' ' + width + 'px')
    }
  })
}

async function checkPerson(browserContext, person, width, language) {
  const context = { stage: 'detail', person: person.id, language, width }
  await withPage(browserContext, context, async (page) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(base + '/people/' + person.id)
    await page.locator('h1').waitFor()
    assert.equal(new URL(page.url()).pathname, '/people/' + person.id)
    if (await page.locator('html').getAttribute('lang') !== language) {
      await page.locator('.language-bar').getByRole('button', { name: language === 'en' ? 'English' : '简体中文', exact: true }).click()
    }
    const expected = getLocalizedPerson(person, language)
    const image = page.locator('.person-detail__image')
    const loaded = await waitForImage(image, person.id + ' ' + language + ' ' + width + 'px')
    assert.deepEqual([loaded.naturalWidth, loaded.naturalHeight], [900, 1200])
    const block = page.locator('#image-credits')
    const text = await block.innerText()
    for (const value of [person.imageAttribution.title, person.imageAttribution.author, person.imageAttribution.credit, expected.imageNotes, expected.imageChanges].filter(Boolean)) {
      assert.ok(text.includes(value), person.id + ' credit text missing: ' + value)
    }
    const hrefs = await block.locator('a').evaluateAll((links) => links.map((link) => link.href))
    assert.ok(hrefs.includes(new URL(person.imageAttribution.sourceUrl).href), person.id + ' source')
    assert.ok(hrefs.includes(new URL(person.imageAttribution.licenseUrl).href), person.id + ' license')
    assert.equal(await page.locator('html').getAttribute('lang'), language)
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), person.id + ' overflow')
  })
}

const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH })
try {
  const browserContext = await browser.newContext()
  for (const width of widths) {
    for (const language of languages) {
      try {
        await checkHomepage(browserContext, width, language)
        state.completed.push({ stage: 'homepage', language, width })
      } catch (error) {
        state.errors.push({ stage: 'homepage', language, width, error: errorMessage(error) })
      }
      save()

      for (let offset = 0; offset < selectedPeople.length; offset += batchSize) {
        const batch = selectedPeople.slice(offset, offset + batchSize)
        const deadline = Date.now() + batchTimeoutMs
        for (const person of batch) {
          if (Date.now() >= deadline) {
            state.errors.push({ stage: 'batch-timeout', person: person.id, language, width, error: 'batch exceeded ' + batchTimeoutMs + 'ms before this item' })
            save()
            continue
          }
          try {
            await checkPerson(browserContext, person, width, language)
            state.completed.push({ stage: 'detail', person: person.id, language, width })
          } catch (error) {
            state.errors.push({ stage: 'detail', person: person.id, language, width, error: errorMessage(error) })
          }
          save()
        }
      }
      console.log('DONE ' + selectedPeople.length + ' portraits/credits, ' + width + 'px ' + language + '; errors=' + state.errors.length)
    }
  }
  await browserContext.close()
} finally {
  await browser.close()
}

state.finishedAt = new Date().toISOString()
save()
console.log(JSON.stringify({ outputPath, completed: state.completed.length, errors: state.errors }, null, 2))
if (state.errors.length) process.exitCode = 1
