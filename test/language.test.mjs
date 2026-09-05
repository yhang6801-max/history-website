import assert from 'node:assert/strict'
import { registerHooks } from 'node:module'
import test from 'node:test'
import plan from '../docs/expansion-plan.json' with { type: 'json' }

// Node 24 strips TypeScript; portraits only need stable URLs for data tests.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (/\.(webp|svg)$/.test(specifier)) return { url: new URL(specifier, context.parentURL).href, shortCircuit: true }
    return nextResolve(specifier, context)
  },
  load(url, context, nextLoad) {
    if (/\.(webp|svg)$/.test(url)) return { format: 'module', source: 'export default ' + JSON.stringify(url), shortCircuit: true }
    return nextLoad(url, context)
  },
})
const { historicalPeople } = await import('../src/data/historicalPeople.ts')
const { getLocalizedPerson, personTranslations } = await import('../src/data/personTranslations.ts')
const { messages } = await import('../src/i18n/messages.ts')
const { readLanguage, languageStorageKey } = await import('../src/i18n/language.ts')

test('initial language ignores browser locale, accepts only supported saved values, and survives blocked storage', () => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')
  try {
    for (const [saved, expected] of [[null, 'en'], ['fr', 'en'], ['zh', 'en'], ['en', 'en'], ['zh-CN', 'zh-CN']]) {
      Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: (key) => { assert.equal(key, languageStorageKey); return saved } } })
      assert.equal(readLanguage(), expected)
    }
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { throw new Error('blocked') } })
    assert.equal(readLanguage(), 'en')
  } finally {
    if (descriptor) Object.defineProperty(globalThis, 'localStorage', descriptor)
    else delete globalThis.localStorage
  }
})

test('all public messages have complete Chinese counterparts', () => {
  function check(en, zh) {
    assert.deepEqual(Object.keys(zh).sort(), Object.keys(en).sort())
    for (const key of Object.keys(en)) {
      if (typeof en[key] === 'string') assert.ok(typeof zh[key] === 'string' && zh[key].trim(), key)
      else check(en[key], zh[key])
    }
  }
  check(messages.en, messages['zh-CN'])
})

const completedIds = plan.ids.filter(id => plan.currentIds.includes(id))
const { formatPersonDate } = await import('../src/data/personDates.ts')

const allIds = plan.currentIds

test('all 37 bilingual people retain identity, paragraph/event structure, dates and credits', () => {
  assert.equal(historicalPeople.length, 37)
  assert.deepEqual(historicalPeople.map(p => p.id), allIds)
  assert.equal(new Set(allIds).size, 37)
  assert.deepEqual(Object.keys(personTranslations).sort(), [...allIds].sort())
  for (const id of allIds) {
    const person = historicalPeople.find((p) => p.id === id)
    const zh = getLocalizedPerson(person, 'zh-CN')
    assert.equal(zh.isFallback, false, id)
    assert.equal(zh.contentLanguage, 'zh-CN', id)
    assert.match(zh.name, /[\u4e00-\u9fff]/)
    assert.match(zh.summary, /[\u4e00-\u9fff]/)
    assert.equal(zh.sections.length, person.sections.length, id)
    assert.equal(zh.timeline.length, person.timeline.length, id)
    zh.sections.forEach((section, index) => {
      assert.match(section.title, /[\u4e00-\u9fff]/)
      assert.equal(section.paragraphs.length, person.sections[index].paragraphs.length)
      section.paragraphs.forEach((p) => assert.match(p, /[\u4e00-\u9fff]/))
    })
    zh.timeline.forEach((entry) => assert.match(entry.event, /[\u4e00-\u9fff]/))
    assert.equal(zh.id, person.id)
    assert.equal(zh.image, person.image)
    assert.equal(zh.lifespan, formatPersonDate(person.lifespan, 'zh-CN'))
    assert.deepEqual(zh.timeline.map((e) => e.date), person.timeline.map((e) => formatPersonDate(e.date, 'zh-CN')))
    assert.equal(zh.sources, person.sources)
    assert.equal(zh.imageAttribution, person.imageAttribution)
    assert.equal(zh.imageNotesLanguage, 'zh-CN')
    assert.equal(zh.imageChangesLanguage, 'zh-CN')
  }
})

test('English stays intact; completed people do not fall back and future missing content still does', () => {
  for (const person of historicalPeople) {
    const en = getLocalizedPerson(person, 'en')
    for (const field of ['name', 'summary', 'lifespan', 'sections', 'sources', 'imageAttribution']) assert.equal(en[field], person[field])
    assert.deepEqual(en.timeline, person.timeline)
    assert.equal(en.isFallback, false)
    const zh = getLocalizedPerson(person, 'zh-CN')
    assert.equal(zh.isFallback, false, person.id)
    assert.equal(zh.contentLanguage, 'zh-CN', person.id)
  }
  const unknown = { ...historicalPeople[0], id: 'untranslated-example' }
  const fallback = getLocalizedPerson(unknown, 'zh-CN')
  assert.equal(fallback.isFallback, true)
  assert.equal(fallback.contentLanguage, 'en')
  assert.equal(fallback.summary, unknown.summary)
})

test('incomplete translations still fall back as a whole without blanks', () => {
  const person = historicalPeople[0]
  const translations = personTranslations[person.id]
  const original = translations['zh-CN']
  try {
    for (const invalid of [
      { ...original, name: '' },
      { ...original, summary: ' ' },
      { ...original, sections: [] },
      { ...original, timelineEvents: [''] },
      { ...original, sections: original.sections.map((s, i) => i === 0 ? { ...s, paragraphs: [''] } : s) },
    ]) {
      translations['zh-CN'] = invalid
      const result = getLocalizedPerson(person, 'zh-CN')
      assert.equal(result.isFallback, true)
      assert.equal(result.name, person.name)
      assert.equal(result.sections, person.sections)
      assert.deepEqual(result.timeline, person.timeline)
    }
  } finally { translations['zh-CN'] = original }
})

test('era labels localize without changing numbers or English/fallback data', () => {
  for (const value of ['100 BCE', '100–44 BCE', '356–323 BCE', '336–335 BCE']) {
    assert.equal(formatPersonDate(value, 'en'), value)
    const zh = formatPersonDate(value, 'zh-CN')
    assert.match(zh, /^公元前 /)
    assert.deepEqual(zh.match(/\d+/g), value.match(/\d+/g))
  }
  assert.equal(formatPersonDate('1879–1955', 'zh-CN'), '1879–1955')
  assert.equal(formatPersonDate('unrecognized date', 'zh-CN'), 'unrecognized date')
})

test('each new paragraph and timeline event retains explicit source years', () => {
  for (const id of allIds.filter(id => id !== "napoleon-bonaparte")) {
    const person = historicalPeople.find((p) => p.id === id)
    const zh = getLocalizedPerson(person, 'zh-CN')
    const enTexts = [...person.sections.flatMap((s) => s.paragraphs), ...person.timeline.map((e) => e.event)]
    const zhTexts = [...zh.sections.flatMap((s) => s.paragraphs), ...zh.timeline.map((e) => e.event)]
    enTexts.forEach((source, index) => {
      const years = source.match(/\b\d{3,4}\b/g) || []
      for (const year of years) assert.ok(zhTexts[index].includes(year), id + ' paragraph/event ' + index + ' missing ' + year)
    })
  }
})

test('the preceding batch has 40 complete sections and 53 events; date qualifications remain explicit', () => {
  const batchIds = ['confucius', 'qin-shi-huang', 'emperor-taizong-of-tang', 'emperor-wu-of-han', 'hongwu-emperor', 'yongle-emperor', 'sun-yat-sen', 'li-bai']
  assert.equal(batchIds.length, 8)
  const batch = batchIds.map(id => historicalPeople.find(p => p.id === id))
  assert.equal(batch.reduce((n, p) => n + p.sections.length, 0), 40)
  assert.equal(batch.reduce((n, p) => n + p.timeline.length, 0), 53)
  const labels = {
    '551–479 BCE (traditional dates)': '公元前 551–479（传统纪年）',
    'Late 6th century BCE': '公元前 6 世纪晚期',
    'Early 5th century BCE': '公元前 5 世纪早期',
    'After his lifetime': '去世后',
    'During his reign': '在位期间',
    '2nd century BCE': '公元前 2 世纪',
    'Late 2nd century BCE': '公元前 2 世纪晚期',
    'Early 8th century': '8 世纪早期',
    '740s': '740 年代',
    '13th century': '13 世纪',
  }
  for (const [en, zh] of Object.entries(labels)) {
    assert.equal(formatPersonDate(en, 'en'), en)
    assert.equal(formatPersonDate(en, 'zh-CN'), zh)
    assert.deepEqual(zh.match(/\d+/g), en.match(/\d+/g))
  }
  for (const person of batch) {
    const zh = getLocalizedPerson(person, 'zh-CN')
    for (const label of [zh.lifespan, ...zh.timeline.map(e => e.date)]) assert.doesNotMatch(label, /[a-z]/i)
  }
})


test('the current trailing seven retain 35 sections and 49 events with key qualifications intact', () => {
  const batchIds = ['du-fu', 'lu-xun', 'yang-chen-ning', 'george-washington', 'abraham-lincoln', 'isaac-newton', 'marie-curie']
  const batch = batchIds.map(id => historicalPeople.find(p => p.id === id))
  assert.equal(batchIds.length, 7)
  assert.equal(batch.reduce((n, p) => n + p.sections.length, 0), 35)
  assert.equal(batch.reduce((n, p) => n + p.timeline.length, 0), 49)
  assert.equal(historicalPeople.filter(p => completedIds.includes(p.id)).reduce((n, p) => n + p.sections.length, 0), 95)
  assert.equal(historicalPeople.filter(p => completedIds.includes(p.id)).reduce((n, p) => n + p.timeline.length, 0), 130)
  assert.equal(formatPersonDate('Around 760', 'zh-CN'), '约 760')
  const newton = personTranslations['isaac-newton']['zh-CN']
  assert.match(newton.sections[1].paragraphs[0], /儒略历.*1642.*格里高利历.*1643/)
  const lincoln = personTranslations['abraham-lincoln']['zh-CN']
  assert.match(lincoln.sections[2].paragraphs[0], /叛乱地区/)
  assert.match(lincoln.sections[3].paragraphs[0], /经定罪者.*犯罪惩罚.*保留例外/)
  const curie = personTranslations['marie-curie']['zh-CN']
  assert.match(curie.sections[4].paragraphs[0], /而非发现 X 射线本身/)
  for (const person of batch) {
    const zh = getLocalizedPerson(person, 'zh-CN')
    for (const label of [zh.lifespan, ...zh.timeline.map(e => e.date)]) assert.doesNotMatch(label, /[a-z]/i)
  }
})


test('new uncertain date labels preserve their qualifications', () => {
  const labels = {'Active around 300 BCE':'约 公元前 300 年活跃','Around 287 BCE':'约 公元前 287','c. 287–212 BCE':'约 公元前 287–212','Dates uncertain':'生卒年不详','3rd century':'3 世纪'}
  for (const [en, zh] of Object.entries(labels)) { assert.equal(formatPersonDate(en,'zh-CN'),zh); assert.equal(formatPersonDate(en,'en'),en) }
})
