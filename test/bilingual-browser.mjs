import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { registerHooks } from 'node:module'
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
const base = process.env.BASE_URL || 'http://127.0.0.1:5174'
const out = path.resolve('node_modules/.cache/bilingual-qa')
await mkdir(out, { recursive: true })
const launch = { headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) }
const browser = await chromium.launch(launch)
const results = []
const errors = []
const translatedNames = Object.fromEntries(historicalPeople.map(person => [person.id, [person.name, getLocalizedPerson(person, 'zh-CN').name]]))

function ok(label) { results.push(label); console.log('PASS ' + label) }
async function setLanguage(page, lang) {
  await page.locator('.language-bar button').filter({ hasText: lang === 'en' ? 'English' : '简体中文' }).click()
  await page.waitForFunction((lang) => document.documentElement.lang === lang, lang)
}
async function noOverflow(page, label) {
  const dimensions = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }))
  assert.ok(dimensions.scroll <= dimensions.width, label + ': ' + JSON.stringify(dimensions))
}
async function ready(page) {
  await page.locator('h1').waitFor()
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(Array.from(document.images).map((img) => img.decode().catch(() => {})))
  })
}
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'zh-CN' })
  const page = await context.newPage()
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto(base)
  await ready(page)
  assert.equal(await page.locator('html').getAttribute('lang'), 'en')
  assert.equal(await page.locator('h1').innerText(), 'Historical Figures')
  assert.equal(await page.locator('.person-card').count(), 40)
  const expectedOrder = historicalPeople.map(p => '/people/' + p.id)
  const checkOrder = async () => assert.deepEqual(await page.locator('.person-card-link').evaluateAll(nodes => nodes.map(a => a.getAttribute('href'))), expectedOrder)
  await checkOrder()
  ok('First visit defaults to English even with a Chinese browser locale')
  await page.evaluate(() => { window.__documentMarker = 'same-document' })
  await setLanguage(page, 'zh-CN')
  assert.equal(await page.locator('h1').innerText(), '历史人物')
  assert.equal(await page.evaluate(() => window.__documentMarker), 'same-document')
  assert.equal(await page.locator('.person-card__notice').count(), 0)
  for (const [id, names] of Object.entries(translatedNames)) {
    assert.equal(await page.locator('a[href="/people/' + id + '"] h2').innerText(), names[1])
  }
  await checkOrder()
  ok('Immediate switch without reload; all 40 translated cards and zero fallback notices')
  await page.reload()
  await ready(page)
  assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN')
  await checkOrder()
  ok('Forty cards retain the expected order in both languages and after reload')
  await page.getByRole('link', { name: '设置', exact: true }).click()
  await page.getByRole('heading', { name: '项目背后' }).waitFor()
  await page.getByRole('link', { name: '语言', exact: true }).click()
  await page.getByRole('heading', { name: '语言', exact: true }).waitFor()
  await page.locator('.settings__content button').filter({ hasText: 'English' }).click()
  assert.equal(await page.locator('h1').innerText(), 'Language')
  await page.locator('.settings__content button').filter({ hasText: '简体中文' }).click()
  await page.getByRole('link', { name: '版权', exact: true }).click()
  await page.getByRole('heading', { name: '版权与致谢' }).waitFor()
  ok('Reload, settings navigation, redirect and settings language controls retain/sync language')

  await page.goto(base + '/people/napoleon-bonaparte')
  await ready(page)
  const originalUrl = page.url()
  assert.equal(await page.locator('h1').innerText(), '拿破仑·波拿巴')
  assert.equal(await page.locator('.person-detail__section').count(), 7)
  assert.equal(await page.locator('.person-detail__timeline li').count(), 9)
  assert.equal(await page.locator('.translation-notice').count(), 0)
  const zhLinks = await page.locator('.person-detail__sources a, .person-detail__image-attribution a').evaluateAll((links) => links.map((a) => ({ text: a.textContent, href: a.href, target: a.target })))
  const zhDates = await page.locator('.person-detail__timeline-date').allTextContents()
  await setLanguage(page, 'en')
  const enLinks = await page.locator('.person-detail__sources a, .person-detail__image-attribution a').evaluateAll((links) => links.map((a) => ({ text: a.textContent, href: a.href, target: a.target })))
  const imageSourceHref = historicalPeople.find((person) => person.id === 'napoleon-bonaparte').imageAttribution.sourceUrl
  assert.deepEqual(enLinks.map(({ href, target }) => ({ href, target })), zhLinks.map(({ href, target }) => ({ href, target })))
  assert.deepEqual(enLinks.filter(({ href }) => href !== imageSourceHref).map(({ text }) => text), zhLinks.filter(({ href }) => href !== imageSourceHref).map(({ text }) => text))
  assert.equal(enLinks.find(({ href }) => href === imageSourceHref)?.text, messages.en.imageSource)
  assert.equal(zhLinks.find(({ href }) => href === imageSourceHref)?.text, messages['zh-CN'].imageSource)
  assert.deepEqual(await page.locator('.person-detail__timeline-date').allTextContents(), zhDates)
  assert.ok(zhLinks.every((a) => a.target === '_blank'))
  ok('Pilot has 7 bilingual sections and 9 events; dates, source titles and credit URLs stay identical while the source label localizes')

  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 })
    for (const selector of ['.person-detail__section:nth-child(4) p', '.person-detail__timeline li:nth-child(4)']) {
      await setLanguage(page, 'en')
      await page.locator(selector).evaluate((element) => {
        const rect = element.getBoundingClientRect()
        const readingTop = document.querySelector('.language-bar').getBoundingClientRect().bottom + 12
        window.scrollTo(0, scrollY + rect.top + rect.height * 0.3 - readingTop)
      })
      const position = () => page.locator(selector).evaluate((element) => {
        const rect = element.getBoundingClientRect()
        const readingTop = document.querySelector('.language-bar').getBoundingClientRect().bottom + 12
        return (readingTop - rect.top) / rect.height
      })
      const before = await position()
      await setLanguage(page, 'zh-CN')
      assert.ok(Math.abs(await position() - before) < 0.04, 'reading position ' + width + ' ' + selector)
      assert.equal(page.url(), originalUrl)
      await setLanguage(page, 'en')
      assert.ok(Math.abs(await position() - before) < 0.04, 'reverse reading position ' + width + ' ' + selector)
    }
  }
  ok('Desktop and mobile preserve URL, paragraph and timeline reading position in both directions')

  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 })
    for (const language of ['en', 'zh-CN']) {
      await setLanguage(page, language)
      for (const route of ['/', '/people/napoleon-bonaparte', '/people/julius-caesar', '/people/joseph-stalin', '/people/albert-einstein', '/people/du-fu', '/people/srinivasa-ramanujan', '/people/nicolaus-copernicus', '/people/galileo-galilei', '/people/stephen-hawking', '/settings/about', '/settings/copyright', '/settings/language', '/people/missing-person', '/missing']) {
        await page.goto(base + route)
        await ready(page)
        await noOverflow(page, width + ' ' + language + ' ' + route)
        assert.equal(await page.locator('html').getAttribute('lang'), language)
        assert.equal(await page.locator('img').evaluateAll((images) => images.every((img) => img.naturalWidth > 0)), true)
        const person = historicalPeople.find(person => person.id === route.split('/').pop())
        const translatedName = translatedNames[person?.id]
        if (translatedName) {
          assert.equal(await page.locator('h1').innerText(), translatedName[language === 'en' ? 0 : 1])
          assert.equal(await page.locator('.person-detail__biography').getAttribute('lang'), language)
          assert.equal(await page.locator('.translation-notice').count(), 0)
          assert.equal(await page.locator('.person-detail__section').count(), person.sections.length)
          assert.equal(await page.locator('.person-detail__timeline li').count(), person.timeline.length)
          if (language === 'zh-CN') {
            assert.equal(await page.locator('.person-detail__timeline').innerText().then(text => text.includes('BCE')), false)
          }
        }
        if (route === '/people/du-fu') {
          assert.equal(await page.locator('h1').innerText(), language === 'en' ? 'Du Fu' : '杜甫')
          assert.equal(await page.locator('.person-detail__biography').getAttribute('lang'), language)
          assert.equal(await page.locator('.translation-notice').count(), 0)
          assert.equal(await page.locator('.person-detail__section').count(), 5)
          assert.equal(await page.locator('.person-detail__timeline li').count(), 6)
        }
        if (route === '/settings/language') {
          assert.ok((await page.locator('.settings__content').innerText()).includes(messages[language].pilotNote))
        }
        if (process.env.SCREENSHOTS === '1' && width !== 320 && ['/', '/people/napoleon-bonaparte', '/settings/about', '/settings/language'].includes(route)) {
          await page.screenshot({ path: path.join(out, width + '-' + language + '-' + (route.replaceAll('/', '_') || 'home') + '.png'), fullPage: true })
        }
      }
    }
  }
  ok('90 route/language/viewport combinations have no horizontal overflow; portraits, translated content and not-found states work')
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto(base)
  await setLanguage(page, 'zh-CN')
  const cards = await page.locator('.person-card-link').evaluateAll((links) => links.map((a) => a.getAttribute('href')))
  for (const href of cards) {
    await page.goto(base + href)
    await ready(page)
    const person = historicalPeople.find(person => href === '/people/' + person.id)
    const expected = getLocalizedPerson(person, 'zh-CN')
    assert.equal(expected.isFallback, false, person.id)
    assert.equal(await page.locator('h1').innerText(), expected.name)
    assert.equal(await page.locator('.person-detail__summary').innerText(), expected.summary)
    assert.equal(await page.locator('.translation-notice').count(), 0)
    assert.equal(await page.locator('.person-detail__biography').getAttribute('lang'), 'zh-CN')
    assert.deepEqual(await page.locator('.person-detail__section p').allTextContents(), expected.sections.flatMap(section => section.paragraphs))
    assert.deepEqual(await page.locator('.person-detail__timeline-date').allTextContents(), expected.timeline.map(entry => entry.date))
    assert.equal(await page.locator('.person-detail__timeline li').count(), expected.timeline.length)
    const links = await page.locator('.person-detail__sources a').evaluateAll((nodes) => nodes.map((a) => a.href))
    assert.ok(links.length > 0 && links.every((href) => href.startsWith('https://')))
  }
  await page.goto(base)
  await page.locator('.person-card-link').first().click()
  await page.getByRole('heading', { name: '詹姆斯·克拉克·麦克斯韦' }).waitFor()
  await page.goBack()
  await page.getByRole('heading', { name: '历史人物', exact: true }).waitFor()
  await page.goForward()
  await page.getByRole('heading', { name: '詹姆斯·克拉克·麦克斯韦' }).waitFor()
  ok('All 40 person routes render with sources; card navigation and browser Back/Forward work')

  const second = await context.newPage()
  await second.goto(base + '/settings/about')
  await ready(second)
  assert.equal(await second.locator('html').getAttribute('lang'), 'zh-CN')
  await setLanguage(page, 'en')
  await second.waitForFunction(() => document.documentElement.lang === 'en')
  ok('New tab retains choice and existing tabs synchronize')
  await context.close()

  const blocked = await browser.newContext()
  await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError') } }))
  const blockedPage = await blocked.newPage()
  await blockedPage.goto(base)
  await ready(blockedPage)
  assert.equal(await blockedPage.locator('html').getAttribute('lang'), 'en')
  await setLanguage(blockedPage, 'zh-CN')
  assert.equal(await blockedPage.locator('h1').innerText(), '历史人物')
  await blockedPage.getByRole('status').waitFor()
  ok('Blocked storage still permits switching and shows a translated persistence warning')
  await blocked.close()

  const profile = path.join(out, 'browser-profile')
  let persistent = await chromium.launchPersistentContext(profile, launch)
  let persistentPage = await persistent.newPage()
  await persistentPage.goto(base)
  await ready(persistentPage)
  await setLanguage(persistentPage, 'zh-CN')
  await persistent.close()
  persistent = await chromium.launchPersistentContext(profile, launch)
  persistentPage = await persistent.newPage()
  await persistentPage.goto(base + '/people/napoleon-bonaparte')
  await ready(persistentPage)
  assert.equal(await persistentPage.locator('html').getAttribute('lang'), 'zh-CN')
  assert.equal(await persistentPage.locator('h1').innerText(), '拿破仑·波拿巴')
  await persistent.close()
  ok('Closing and relaunching the browser with its saved profile preserves Chinese')
  assert.deepEqual(errors, [])
  ok('No uncaught application errors')
} finally {
  await browser.close()
  await writeFile(path.join(out, 'results.json'), JSON.stringify({ results, errors }, null, 2))
}
