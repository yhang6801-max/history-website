import fs from 'node:fs';import crypto from 'node:crypto';import {registerHooks} from 'node:module';
registerHooks({resolve(s,c,n){return /\.(svg|webp)$/.test(s)?{url:new URL(s,c.parentURL).href,shortCircuit:true}:n(s,c)},load(u,c,n){return /\.(svg|webp)$/.test(u)?{format:'module',source:'export default '+JSON.stringify(u),shortCircuit:true}:n(u,c)}});
const {historicalPeople}=await import('../src/data/historicalPeople.ts'); const {getLocalizedPerson}=await import('../src/data/personTranslations.ts');
const hash=p=>crypto.createHash('sha256').update(JSON.stringify(p)).digest('hex');
const path='docs/four-person-replacement/baseline.json';if(!fs.existsSync(path))fs.writeFileSync(path,JSON.stringify(historicalPeople.map(p=>({id:p.id,enHash:hash(p),zhHash:hash(getLocalizedPerson(p,'zh-CN'))})),null,2)+'\n');
console.log('Saved baseline for '+historicalPeople.length+' people, including images and translations.');
