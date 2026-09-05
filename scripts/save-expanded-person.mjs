import fs from 'node:fs'
import assert from 'node:assert/strict'
const input = JSON.parse(fs.readFileSync(0,'utf8').replace(/^\uFEFF/,''))
const plan=JSON.parse(fs.readFileSync('docs/expansion-plan.json','utf8'))
assert.ok(plan.planned.includes(input.id))
const file='src/data/additions/'+input.id+'.ts'
assert.ok(!fs.existsSync(file),'Already saved: do not regenerate '+input.id)
const paragraph = value => Array.isArray(value) ? value : [value]
const person={id:input.id,name:input.name,lifespan:input.lifespan,summary:input.summary,
 sections:input.sections.map(s=>({title:s[0],paragraphs:paragraph(s[2])})),
 timeline:input.events.map(e=>({date:e[0],event:e[1]})),
 sources:input.sources.map(s=>({title:s[0],publisher:s[1],url:s[2]})),
 imageNotes:'No verified portrait is displayed. This is the project’s neutral silhouette, not an image of '+input.name+'.',
 imageChanges:'Existing project placeholder used without modification.'}
const zh={name:input.zhName,summary:input.zhSummary,
 sections:input.sections.map(s=>({title:s[1],paragraphs:paragraph(s[3])})),timelineEvents:input.events.map(e=>e[2]),
 imageNotes:'此处未展示经核验的肖像，使用项目已有的中性剪影占位图，并非'+input.zhName+'本人的形象。',
 imageChanges:'使用项目已有占位图，未作修改。'}
assert.ok(input.sources.length>=2)
assert.ok(input.review?.trim())
for(let i=0;i<person.sections.length;i++) {
 assert.equal(person.sections[i].paragraphs.length,zh.sections[i].paragraphs.length)
 person.sections[i].paragraphs.forEach((p,j)=> {assert.ok(p.trim() && zh.sections[i].paragraphs[j].trim());for(const year of p.match(/\b\d{3,4}\b/g)||[])assert.ok(zh.sections[i].paragraphs[j].includes(year),input.id+' missing '+year)})
}
fs.writeFileSync(file,"import placeholder from '../../assets/people/placeholder.svg'\nimport type { HistoricalPerson } from '../../types/historicalPerson'\nimport type { PersonTranslation } from '../personTranslations'\n\nexport const person: HistoricalPerson = {\n  image: placeholder,\n  ..."+JSON.stringify(person,null,2)+"\n}\n\nexport const zh: PersonTranslation = "+JSON.stringify(zh,null,2)+'\n')
fs.writeFileSync('docs/research/'+input.id+'.md','# '+input.name+' / '+input.zhName+'\n\n'+input.review+'\n\n'+input.sources.map(s=>'- ['+s[0]+']('+s[2]+') — '+s[1]).join('\n')+'\n\n图片：项目已有占位图。Commons 图片获取返回 fetch failed 后未更换下载路径重试；未接入未经核验的外部肖像或许可。\n')
const saved=plan.planned.filter(id=>fs.existsSync('src/data/additions/'+id+'.ts'))
const imports=saved.map((id,i)=>"import { person as p"+i+", zh as z"+i+" } from './additions/"+id+".ts'").join('\n')
fs.writeFileSync('src/data/additionalPeople.ts',imports+"\nimport type { HistoricalPerson } from '../types/historicalPerson'\nimport type { PersonTranslation } from './personTranslations'\nexport const additionalPeople: readonly HistoricalPerson[] = ["+saved.map((_,i)=>'p'+i).join(',')+"]\nexport const additionalTranslations: Readonly<Record<string, { 'zh-CN': PersonTranslation }>> = {\n"+saved.map((id,i)=>"  '"+id+"': { 'zh-CN': z"+i+' },').join('\n')+'\n}\n')
const messages='src/i18n/messages.ts'
fs.writeFileSync(messages,fs.readFileSync(messages,'utf8').replace(/All \d+ biographies are available/,'All '+(20+saved.length)+' biographies are available').replace(/全部 \d+ 位人物均已提供/,'全部 '+(20+saved.length)+' 位人物均已提供'))
console.log('SAVED '+input.id+' | '+person.sections.length+' sections / '+person.timeline.length+' events | total '+(20+saved.length))
