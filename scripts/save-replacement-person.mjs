import fs from 'node:fs';import assert from 'node:assert/strict';import ts from 'typescript';
const input=JSON.parse(fs.readFileSync(process.argv[2],'utf8').replace(/^\uFEFF/,''));
const mapping={'stephen-hawking':'euclid','mahatma-gandhi':'archimedes','winston-churchill':'zu-chongzhi','joseph-stalin':'alexander-the-great'};
assert.equal(input.replaces,mapping[input.id]);assert.ok(fs.existsSync('src/assets/people/'+input.id+'.webp'));
const paragraphs=p=>Array.isArray(p)?p:[p];
const person={id:input.id,name:input.name,lifespan:input.lifespan,summary:input.summary,sections:input.sections.map(s=>({title:s[0],paragraphs:paragraphs(s[2])})),timeline:input.events.map(e=>({date:e[0],event:e[1]})),sources:input.sources.map(s=>({title:s[0],publisher:s[1],url:s[2]})),imageAttribution:input.imageAttribution};
const zh={name:input.zhName,summary:input.zhSummary,sections:input.sections.map(s=>({title:s[1],paragraphs:paragraphs(s[3])})),timelineEvents:input.events.map(e=>e[2]),imageNotes:input.imageNotesZh,imageChanges:input.imageChangesZh};
assert.ok(person.sections.length>=4&&person.timeline.length>=6&&person.sources.length>=2);for(let i=0;i<person.sections.length;i++){assert.equal(person.sections[i].paragraphs.length,zh.sections[i].paragraphs.length);person.sections[i].paragraphs.forEach((p,j)=>{assert.ok(p.trim()&&zh.sections[i].paragraphs[j].trim());for(const n of p.match(/\b\d+\b/g)||[])assert.ok(zh.sections[i].paragraphs[j].includes(n),input.id+' missing '+n)})}
const file='src/data/additions/'+input.id+'.ts';assert.ok(!fs.existsSync(file),'Already saved; inspect rather than overwrite');
fs.writeFileSync(file,"import portrait from '../../assets/people/"+input.id+".webp'\nimport type { HistoricalPerson } from '../../types/historicalPerson'\nimport type { PersonTranslation } from '../personTranslations'\nexport const person: HistoricalPerson = { image: portrait, ..."+JSON.stringify(person,null,2)+" }\nexport const zh: PersonTranslation = "+JSON.stringify(zh,null,2)+'\n');
if(input.id!=='joseph-stalin'){const registry='src/data/additionalPeople.ts';fs.writeFileSync(registry,fs.readFileSync(registry,'utf8').replaceAll(input.replaces,input.id));}
else {
 const file='src/data/historicalPeople.ts';let text=fs.readFileSync(file,'utf8');const ast=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true);let range;
 function walk(n){if(ts.isObjectLiteralExpression(n)&&n.properties.some(p=>ts.isPropertyAssignment(p)&&p.name.getText(ast)==='id'&&p.initializer.getText(ast)==="'alexander-the-great'"))range=[n.getStart(ast),n.end];else ts.forEachChild(n,walk)}walk(ast);assert.ok(range);
 text=text.slice(0,range[0])+'stalinPerson'+text.slice(range[1]);text=text.replace(/import alexanderTheGreatImage[^\r\n]*\r?\n/,"import { person as stalinPerson } from './additions/joseph-stalin.ts'\n");fs.writeFileSync(file,text);
 const tr='src/data/personTranslations.ts';text=fs.readFileSync(tr,'utf8').replace(/import \{ alexanderZh \}[^\r\n]*/,"import { zh as stalinZh } from './additions/joseph-stalin.ts'").replace("'alexander-the-great': { 'zh-CN': alexanderZh }","'joseph-stalin': { 'zh-CN': stalinZh }");fs.writeFileSync(tr,text);
}
fs.writeFileSync('docs/research/'+input.id+'.md','# '+input.name+' / '+input.zhName+'\n\n'+input.review+'\n\n'+input.sources.map(s=>'- ['+s[0]+']('+s[2]+') — '+s[1]).join('\n')+'\n\n图片证据见 ../four-person-replacement/；仅限记录所列用途及依据。\n');
console.log('SAVED '+input.id+' | '+person.sections.length+' sections / '+person.timeline.length+' events; bilingual numeric correspondence checked.');
