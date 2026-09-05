import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';import {registerHooks} from 'node:module';
registerHooks({resolve(s,c,n){return /\.(svg|webp)$/.test(s)?{url:new URL(s,c.parentURL).href,shortCircuit:true}:n(s,c)},load(u,c,n){return /\.(svg|webp)$/.test(u)?{format:'module',source:'export default '+JSON.stringify(u),shortCircuit:true}:n(u,c)}});
const {historicalPeople,getHistoricalPersonById}=await import('../src/data/historicalPeople.ts');const {getLocalizedPerson}=await import('../src/data/personTranslations.ts');
const before=JSON.parse(fs.readFileSync('docs/four-person-replacement/baseline.json','utf8'));
const priorAudit=JSON.parse(fs.readFileSync('docs/four-person-replacement/image-audit.json','utf8'));
const currentAudit=JSON.parse(fs.readFileSync('docs/current-image-audit-2026-09-05.json','utf8'));
const replacements={euclid:'stephen-hawking',archimedes:'mahatma-gandhi','zu-chongzhi':'winston-churchill','alexander-the-great':'joseph-stalin'};
const removed=['erwin-schrodinger','albert-einstein','qian-xuesen'];
const hash=p=>crypto.createHash('sha256').update(JSON.stringify(p)).digest('hex');
const approvedEnglishHashes={'yang-chen-ning':'5d1d8b22833f58a80262787f8b2bd4afeb8f360b676a020e492f98dd9c2c4c64'};
assert.equal(historicalPeople.length,37);assert.equal(new Set(historicalPeople.map(p=>p.id)).size,37);
assert.deepEqual(historicalPeople.map(p=>p.id),before.map(p=>replacements[p.id]||p.id).filter(id=>!removed.includes(id)));assert.equal(historicalPeople[12].id,'pierre-de-fermat');
assert.deepEqual(currentAudit.summary,{people:37,images:37,A:37,B:0,C:0});
assert.deepEqual(currentAudit.records.map(record=>record.id),historicalPeople.map(person=>person.id));
assert.deepEqual(currentAudit.records.map(record=>record.position),Array.from({length:37},(_,index)=>index+1));
for(const id of [...removed,...Object.keys(replacements),'liu-hui','luo-guanzhong','shi-naian','wu-chengen','cao-xueqin'])assert.equal(getHistoricalPersonById(id),undefined,id+' must not alias');
function digits(text){text=text.replaceAll('Salt March','Salt march');const months=['January','February','March','April','May','June','July','August','September','October','November','December'];for(const [i,m] of months.entries())text=text.replaceAll(m,String(i+1));return (text.replaceAll('six-volume','6-volume').match(/\d+/g)||[]).sort((a,b)=>Number(a)-Number(b));}
let retained=0;for(const p of historicalPeople){const zh=getLocalizedPerson(p,'zh-CN');if(!Object.values(replacements).includes(p.id)){const old=before.find(b=>b.id===p.id);assert.equal(hash(p),approvedEnglishHashes[p.id]??old.enHash,p.id+' English and image match approved content');assert.equal(hash(zh),old.zhHash,p.id+' Chinese and image unchanged');retained++;}
assert.ok(p.imageAttribution?.title&&p.imageAttribution?.author&&p.imageAttribution?.changes);assert.ok(new URL(p.imageAttribution.sourceUrl));assert.ok(new URL(p.imageAttribution.licenseUrl));assert.equal(zh.isFallback,false);assert.match(zh.imageNotes,/[\u4e00-\u9fff]/);assert.match(zh.imageChanges,/[\u4e00-\u9fff]/);
assert.equal(p.sections.length,zh.sections.length);assert.equal(p.timeline.length,zh.timeline.length);
const record=currentAudit.records.find(record=>record.id===p.id);const prior=priorAudit.find(record=>record.id===p.id);assert.ok(record&&prior,p.id+' audit record');
for(const key of ['localFile','localSha256','sourcePage','sourceEvidenceFile','sourceEvidenceSha256','licenseName','licenseUrl'])assert.equal(record[key],prior[key],p.id+' '+key);
assert.equal(record.classification,'A',p.id+' current classification');assert.equal(crypto.createHash('sha256').update(fs.readFileSync(record.localFile)).digest('hex'),record.localSha256,p.id+' local hash');assert.equal(crypto.createHash('sha256').update(fs.readFileSync(record.sourceEvidenceFile)).digest('hex'),record.sourceEvidenceSha256,p.id+' evidence hash');
assert.equal(p.imageAttribution.sourceUrl,record.sourcePage,p.id+' source page');assert.equal(p.imageAttribution.licenseUrl,record.licenseUrl,p.id+' license link');assert.ok(String(p.image).replaceAll('\\','/').endsWith('/'+record.localFile.split('/').at(-1)),p.id+' runtime image');
p.sections.forEach((s,i)=>{assert.ok(s.title.trim());assert.equal(s.paragraphs.length,zh.sections[i].paragraphs.length);s.paragraphs.forEach((s,j)=>{assert.ok(s.trim()&&zh.sections[i].paragraphs[j].trim());if(Object.values(replacements).includes(p.id))assert.deepEqual(digits(s),digits(zh.sections[i].paragraphs[j]),p.id+' paragraph digits');})});
p.timeline.forEach((e,i)=>{assert.deepEqual(e.date.match(/\d+/g),zh.timeline[i].date.match(/\d+/g));if(Object.values(replacements).includes(p.id))assert.deepEqual(digits(e.event),digits(zh.timeline[i].event),p.id+' event digits')});
}assert.equal(retained,33);
console.log('PASS 37 unique IDs; authorized removals absent; exact four historical replacements retained; Fermat retained; Chen Ning Yang display name and all other approved people/images intact; bilingual fields, paragraph/event digits and image credits complete; old URLs not aliased.');
