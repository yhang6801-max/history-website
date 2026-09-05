import assert from 'node:assert/strict'
import { writeFile } from 'node:fs/promises'
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
try {
  const page = await browser.newPage()
  const base = process.env.BASE_URL || 'http://127.0.0.1:5174'
  for (const id of ['julius-caesar', 'joseph-stalin', 'confucius']) {
    await page.goto(base + '/people/' + id)
    await page.locator('h1').waitFor()
    await page.evaluate(() => document.fonts.ready)
    for (const width of [1440, 320]) {
      await page.setViewportSize({ width, height: 900 })
      for (const selector of ['.person-detail__section:nth-child(4) p', '.person-detail__timeline li:nth-child(4)']) {
        const toggle = name => page.locator('.language-bar').getByRole('button', { name, exact: true }).click()
        await toggle('English')
        const element = page.locator(selector)
        await element.evaluate(el => {
          const rect = el.getBoundingClientRect()
          const top = document.querySelector('.language-bar').getBoundingClientRect().bottom + 12
          scrollTo(0, scrollY + rect.top + rect.height * 0.3 - top)
        })
        const fraction = () => element.evaluate(el => {
          const rect = el.getBoundingClientRect()
          return (document.querySelector('.language-bar').getBoundingClientRect().bottom + 12 - rect.top) / rect.height
        })
        const original = await fraction()
        const links = await page.locator('.person-detail__sources a, .person-detail__image-attribution a').evaluateAll(nodes => nodes.map(a => a.href))
        await toggle('简体中文')
        assert.ok(Math.abs(await fraction() - original) < 0.04, id + ' ' + width + ' Chinese ' + selector)
        assert.deepEqual(await page.locator('.person-detail__sources a, .person-detail__image-attribution a').evaluateAll(nodes => nodes.map(a => a.href)), links)
        await toggle('English')
        assert.ok(Math.abs(await fraction() - original) < 0.04, id + ' ' + width + ' English ' + selector)
        assert.equal(new URL(page.url()).pathname, '/people/' + id)
      }
    }
    console.log('PASS ' + id + ': desktop/narrow reading position, stable URL and source/credit links')
  }
  await writeFile('node_modules/.cache/bilingual-qa/batch-reading-results.json', JSON.stringify({ people: 3, widths: [1440, 320], anchors: ['biography paragraph', 'timeline event'], passed: true }))
} finally { await browser.close() }
