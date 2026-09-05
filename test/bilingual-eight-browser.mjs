import assert from 'node:assert/strict'
import { registerHooks } from 'node:module'
import { mkdir, writeFile } from 'node:fs/promises'
registerHooks({
  resolve(specifier, context, next) {
    if (/\.(webp|svg)$/.test(specifier)) return { url: new URL(specifier, context.parentURL).href, shortCircuit: true }
    return next(specifier, context)
  },
  load(url, context, next) {
    if (/\.(webp|svg)$/.test(url)) return { format: 'module', source: 'export default ' + JSON.stringify(url), shortCircuit: true }
    return next(url, context)
  },
})
const { historicalPeople } = await import('../src/data/historicalPeople.ts')
const { getLocalizedPerson } = await import('../src/data/personTranslations.ts')
const { messages } = await import('../src/i18n/messages.ts')
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const batch = historicalPeople.slice(-20).slice(12)
const longest = [...batch].sort((a, b) => getLocalizedPerson(b, 'zh-CN').sections.flatMap(s => s.paragraphs).join('').length - getLocalizedPerson(a, 'zh-CN').sections.flatMap(s => s.paragraphs).join('').length)[0]
const samples = [...new Set([longest.id, 'du-fu', 'lu-xun', 'yang-chen-ning', 'isaac-newton', 'marie-curie'])]
const base = process.env.BASE_URL || 'http://127.0.0.1:5174'
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const errors = []
let layouts = 0
const bottomClamps = []
try {
  const context = await browser.newContext({ locale: 'zh-CN' })
  const page = await context.newPage()
  page.on('pageerror', error => errors.push(error.message))
  async function ready() {
    await page.locator('h1').waitFor()
    await page.evaluate(() => document.fonts.ready)
  }
  async function setLanguage(language) {
    await page.locator('.language-bar').getByRole('button', { name: language === 'en' ? 'English' : '简体中文', exact: true }).click()
    assert.equal(await page.locator('html').getAttribute('lang'), language)
  }
  await page.goto(base)
  await ready()
  assert.equal(await page.locator('html').getAttribute('lang'), 'en')
  await page.evaluate(() => { window.__batchMarker = 'same-document' })
  await setLanguage('zh-CN')
  assert.equal(await page.evaluate(() => window.__batchMarker), 'same-document')
  assert.equal(await page.locator('.person-card__notice').count(), 0)
  for (const person of historicalPeople) {
    assert.equal(await page.locator('a[href="/people/' + person.id + '"] h2').innerText(), getLocalizedPerson(person, 'zh-CN').name)
  }
  await page.setViewportSize({ width: 320, height: 900 })
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
  console.log('PASS homepage: 37 translated names, no fallback notices, default language and no reload')
  for (const id of samples) {
    await setLanguage('zh-CN')
    const person = batch.find(p => p.id === id)
    await page.goto(base + '/people/' + id)
    await ready()
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN')
    for (const width of [1440, 320]) {
      await page.setViewportSize({ width, height: 900 })
      for (const language of ['en', 'zh-CN']) {
        await setLanguage(language)
        const expected = getLocalizedPerson(person, language)
        assert.equal(await page.locator('h1').innerText(), expected.name)
        assert.equal(await page.locator('.person-detail__biography').getAttribute('lang'), language)
        assert.equal(await page.locator('.translation-notice').count(), 0)
        assert.deepEqual(await page.locator('.person-detail__timeline-date').allTextContents(), expected.timeline.map(e => e.date))
        const layout = await page.evaluate(() => ({
          pageFits: document.documentElement.scrollWidth <= innerWidth,
          textFits: Array.from(document.querySelectorAll('h1, .person-detail__section p, .person-detail__timeline li')).every(el => {
            if (el.scrollWidth > el.clientWidth + 1) return false
            const range = document.createRange()
            range.selectNodeContents(el)
            const text = range.getBoundingClientRect()
            for (let parent = el; parent; parent = parent.parentElement) {
              const style = getComputedStyle(parent)
              const bounds = parent.getBoundingClientRect()
              if (/hidden|clip/.test(style.overflowY) && (text.top < bounds.top - 1 || text.bottom > bounds.bottom + 1)) return false
              if (/hidden|clip/.test(style.overflowX) && (text.left < bounds.left - 1 || text.right > bounds.right + 1)) return false
            }
            return true
          }),
        }))
        assert.ok(layout.pageFits && layout.textFits, id + ' ' + width + ' ' + language)
        layouts++
      }
      for (const selector of ['.person-detail__section:nth-child(3) p', '.person-detail__timeline li:nth-child(3)']) {
        await setLanguage('en')
        const anchor = page.locator(selector)
        await anchor.evaluate(el => {
          const r = el.getBoundingClientRect()
          scrollTo(0, scrollY + r.top + r.height * 0.3 - document.querySelector('.language-bar').getBoundingClientRect().bottom - 12)
        })
        const position = () => anchor.evaluate(el => {
          const r = el.getBoundingClientRect()
          return (document.querySelector('.language-bar').getBoundingClientRect().bottom + 12 - r.top) / r.height
        })
        const before = await position()
        const links = () => page.locator('.person-detail__sources a, .person-detail__image-attribution a').evaluateAll(nodes => nodes.map(a => [a.textContent, a.href]))
        const originalLinks = await links()
        await setLanguage('zh-CN')
        const after = await position()
        if (Math.abs(after - before) >= 0.04) {
          const boundary = await anchor.evaluate((el, expectedFraction) => {
            const rect = el.getBoundingClientRect()
            const max = document.documentElement.scrollHeight - innerHeight
            const requested = scrollY + rect.top + rect.height * expectedFraction - document.querySelector('.language-bar').getBoundingClientRect().bottom - 12
            return { atBottom: Math.abs(scrollY - max) < 1, pastBottom: requested > max, visible: rect.bottom > 73 && rect.top < innerHeight }
          }, before)
          assert.ok(boundary.atBottom && boundary.pastBottom && boundary.visible, id + ': unexpected reading position change')
          bottomClamps.push({ id, width, selector })
        }
        const translatedLinks = await links()
        const imageSourceHref = person.imageAttribution.sourceUrl
        assert.deepEqual(translatedLinks.map(([, href]) => href), originalLinks.map(([, href]) => href))
        assert.deepEqual(translatedLinks.filter(([, href]) => href !== imageSourceHref), originalLinks.filter(([, href]) => href !== imageSourceHref))
        assert.equal(originalLinks.find(([, href]) => href === imageSourceHref)?.[0], messages.en.imageSource)
        assert.equal(translatedLinks.find(([, href]) => href === imageSourceHref)?.[0], messages['zh-CN'].imageSource)
        await setLanguage('en')
        assert.ok(Math.abs(await position() - after) < 0.04, id + ': reverse reading position')
        assert.equal(new URL(page.url()).pathname, '/people/' + id)
      }
    }
    console.log('PASS ' + id + ': desktop/narrow layout, translated dates, reading position and stable source URLs')
  }
  await setLanguage('zh-CN')
  await page.reload()
  await ready()
  assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN')
  await page.goto(base + '/settings/language')
  await ready()
  const text = await page.locator('.settings__content').innerText()
  assert.ok(text.includes('37') && !text.includes('其余人物暂以英文显示'))
  await page.goto(base + '/people/du-fu')
  await ready()
  assert.equal(await page.locator('.translation-notice').count(), 0)
  assert.equal(await page.locator('.person-detail__biography').getAttribute('lang'), 'zh-CN')
  assert.deepEqual(errors, [])
  console.log('Documented bottom clamps: ' + bottomClamps.length)
  console.log('PASS refresh/cross-page language memory, accurate final settings notice and completed Chinese content')
  await mkdir('node_modules/.cache/bilingual-qa', { recursive: true })
  await writeFile('node_modules/.cache/bilingual-qa/final-person-results.json', JSON.stringify({ samples, longestBiography: longest.id, layouts, widths: [1440, 320], bottomClamps, errors, passed: true }, null, 2))
} finally { await browser.close() }

