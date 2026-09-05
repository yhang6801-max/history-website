import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';import {registerHooks} from 'node:module';
registerHooks({resolve(s,c,n){return /\.(svg|webp)$/.test(s)?{url:new URL(s,c.parentURL).href,shortCircuit:true}:n(s,c)},load(u,c,n){return /\.(svg|webp)$/.test(u)?{format:'module',source:'export default '+JSON.stringify(u),shortCircuit:true}:n(u,c)}});
const {historicalPeople,getHistoricalPersonById}=await import('../src/data/historicalPeople.ts');const {getLocalizedPerson}=await import('../src/data/personTranslations.ts');
const before=JSON.parse(fs.readFileSync('docs/four-person-replacement/baseline.json','utf8'));
const replacements={euclid:'stephen-hawking',archimedes:'mahatma-gandhi','zu-chongzhi':'winston-churchill','alexander-the-great':'joseph-stalin'};
const hash=p=>crypto.createHash('sha256').update(JSON.stringify(p)).digest('hex');
assert.equal(historicalPeople.length,40);assert.equal(new Set(historicalPeople.map(p=>p.id)).size,40);
assert.deepEqual(historicalPeople.map(p=>p.id),before.map(p=>replacements[p.id]||p.id));assert.equal(historicalPeople[13].id,'pierre-de-fermat');
for(const id of [...Object.keys(replacements),'liu-hui','luo-guanzhong','shi-naian','wu-chengen','cao-xueqin'])assert.equal(getHistoricalPersonById(id),undefined,id+' must not alias');
function digits(text){text=text.replaceAll('Salt March','Salt march');const months=['January','February','March','April','May','June','July','August','September','October','November','December'];for(const [i,m] of months.entries())text=text.replaceAll(m,String(i+1));return (text.replaceAll('six-volume','6-volume').match(/\d+/g)||[]).sort((a,b)=>Number(a)-Number(b));}
let retained=0;for(const p of historicalPeople){const zh=getLocalizedPerson(p,'zh-CN');if(!Object.values(replacements).includes(p.id)){const old=before.find(b=>b.id===p.id);assert.equal(hash(p),old.enHash,p.id+' English and image unchanged');assert.equal(hash(zh),old.zhHash,p.id+' Chinese and image unchanged');retained++;}
assert.ok(p.imageAttribution?.title&&p.imageAttribution?.author&&p.imageAttribution?.changes);assert.ok(new URL(p.imageAttribution.sourceUrl));assert.ok(new URL(p.imageAttribution.licenseUrl));assert.equal(zh.isFallback,false);assert.match(zh.imageNotes,/[\u4e00-\u9fff]/);assert.match(zh.imageChanges,/[\u4e00-\u9fff]/);
assert.equal(p.sections.length,zh.sections.length);assert.equal(p.timeline.length,zh.timeline.length);
p.sections.forEach((s,i)=>{assert.ok(s.title.trim());assert.equal(s.paragraphs.length,zh.sections[i].paragraphs.length);s.paragraphs.forEach((s,j)=>{assert.ok(s.trim()&&zh.sections[i].paragraphs[j].trim());if(Object.values(replacements).includes(p.id))assert.deepEqual(digits(s),digits(zh.sections[i].paragraphs[j]),p.id+' paragraph digits');})});
p.timeline.forEach((e,i)=>{assert.deepEqual(e.date.match(/\d+/g),zh.timeline[i].date.match(/\d+/g));if(Object.values(replacements).includes(p.id))assert.deepEqual(digits(e.event),digits(zh.timeline[i].event),p.id+' event digits')});
}assert.equal(retained,36);
console.log('PASS 40 unique IDs; exact four replacements; Fermat retained; all 36 other people/images unchanged; bilingual fields, paragraph/event digits and image credits complete; old URLs not aliased.');
