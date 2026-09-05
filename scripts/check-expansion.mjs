import assert from 'node:assert/strict'
import fs from 'node:fs'
import { registerHooks } from 'node:module'
registerHooks({resolve(s,c,n){return /\.(webp|svg)$/.test(s)?{url:new URL(s,c.parentURL).href,shortCircuit:true}:n(s,c)},load(u,c,n){return /\.(webp|svg)$/.test(u)?{format:'module',source:'export default '+JSON.stringify(u),shortCircuit:true}:n(u,c)}})
const {historicalPeople}=await import('../src/data/historicalPeople.ts')
const {getLocalizedPerson}=await import('../src/data/personTranslations.ts')
const plan=JSON.parse(fs.readFileSync('docs/expansion-plan.json','utf8'))
const saved=plan.planned.filter(id=>fs.existsSync('src/data/additions/'+id+'.ts'))
assert.deepEqual(historicalPeople.map(p=>p.id),[...saved,...plan.ids])
assert.equal(new Set(historicalPeople.map(p=>p.id)).size,historicalPeople.length)
let sections=0,events=0
for(const person of historicalPeople.slice(0,saved.length)) {
 const zh=getLocalizedPerson(person,'zh-CN')
 assert.equal(zh.isFallback,false,person.id)
 for(const text of [zh.name,zh.summary,zh.imageNotes,zh.imageChanges])assert.match(text,/[\u4e00-\u9fff]/)
 assert.equal(zh.sections.length,person.sections.length)
 zh.sections.forEach((s,i)=> {assert.ok(s.title.trim());assert.equal(s.paragraphs.length,person.sections[i].paragraphs.length);s.paragraphs.forEach((p,j)=>{assert.match(p,/[\u4e00-\u9fff]/);for(const year of person.sections[i].paragraphs[j].match(/\b\d{3,4}\b/g)||[])assert.ok(p.includes(year),person.id+' '+year)})})
 zh.timeline.forEach((e,i)=>{assert.match(e.event,/[\u4e00-\u9fff]/);assert.deepEqual(e.date.match(/\d+/g),person.timeline[i].date.match(/\d+/g));assert.doesNotMatch(e.date,/[a-z]/i)})
 assert.ok(person.sources.length>=2)
 for(const s of person.sources)assert.ok(s.title.trim()&&s.publisher.trim()&&new URL(s.url).protocol==='https:')
 assert.ok(fs.existsSync('docs/research/'+person.id+'.md'))
 sections+=person.sections.length;events+=person.timeline.length
}

// The current user-authorized replacements are checked against a pre-edit hash baseline.
// This gate compares all fields, including images, for every retained person.
await import('../test/image-rights-data.mjs')
console.log('PASS '+saved.length+' prefix people / '+historicalPeople.length+' total; '+sections+' sections / '+events+' events; current order, bilingual content and unchanged retained people')
