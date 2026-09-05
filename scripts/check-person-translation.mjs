import assert from 'node:assert/strict'
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
const person = historicalPeople.find(p => p.id === process.argv[2])
assert.ok(person, 'Unknown person ID')
const zh = getLocalizedPerson(person, 'zh-CN')
assert.equal(zh.isFallback, false)
for (const text of [zh.name, zh.summary, zh.imageNotes, zh.imageChanges]) assert.match(text, /[\u4e00-\u9fff]/)
assert.equal(zh.sections.length, person.sections.length)
zh.sections.forEach((section, i) => {
  assert.match(section.title, /[\u4e00-\u9fff]/)
  assert.equal(section.paragraphs.length, person.sections[i].paragraphs.length)
  section.paragraphs.forEach((paragraph, j) => {
    assert.match(paragraph, /[\u4e00-\u9fff]/)
    for (const year of person.sections[i].paragraphs[j].match(/\b\d{3,4}\b/g) || []) assert.ok(paragraph.includes(year), 'Missing year: ' + year)
  })
})
assert.equal(zh.timeline.length, person.timeline.length)
zh.timeline.forEach((entry, i) => {
  assert.match(entry.event, /[\u4e00-\u9fff]/)
  assert.deepEqual(entry.date.match(/\d+/g), person.timeline[i].date.match(/\d+/g))
  assert.ok(!/[a-z]/i.test(entry.date), 'Untranslated date: ' + entry.date)
  for (const year of person.timeline[i].event.match(/\b\d{3,4}\b/g) || []) assert.ok(entry.event.includes(year), 'Missing event year: ' + year)
})
assert.ok(!/[a-z]/i.test(zh.lifespan), 'Untranslated lifespan')
assert.equal(zh.sources, person.sources)
assert.equal(zh.imageAttribution, person.imageAttribution)
assert.equal(zh.id, person.id)
console.log('PASS ' + person.id + ': ' + zh.sections.length + ' sections, ' + zh.timeline.length + ' events; complete fields, dates, years and shared credits')
