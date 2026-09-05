import assert from 'node:assert/strict'
import fs from 'node:fs'
import {registerHooks} from 'node:module'
registerHooks({resolve(s,c,n){return /\.(svg|webp)$/.test(s)?{url:new URL(s,c.parentURL).href,shortCircuit:true}:n(s,c)},load(u,c,n){return /\.(svg|webp)$/.test(u)?{format:'module',source:'export default '+JSON.stringify(u),shortCircuit:true}:n(u,c)}})
const {historicalPeople}=await import('../src/data/historicalPeople.ts')
const {getLocalizedPerson}=await import('../src/data/personTranslations.ts')
const people=historicalPeople.slice(0,20)
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH})
const errors=[];let checks=0
async function waitForImage(image,label){
 await image.scrollIntoViewIfNeeded({timeout:5000})
 const source=await image.getAttribute('src')
 return image.evaluate((element)=>new Promise((resolve,reject)=>{
  const finish=()=>{if(element.complete&&element.naturalWidth>0){resolve([element.naturalWidth,element.naturalHeight]);return true}return false}
  if(finish())return
  const timer=setTimeout(()=>{cleanup();reject(new Error('image load timeout'))},8000)
  const onLoad=()=>{if(finish())cleanup()}
  const onError=()=>{cleanup();reject(new Error('image load error'))}
  const cleanup=()=>{clearTimeout(timer);element.removeEventListener('load',onLoad);element.removeEventListener('error',onError)}
  element.addEventListener('load',onLoad);element.addEventListener('error',onError)
 }),{timeout:9000}).catch(error=>{throw new Error(label+' image='+(source||'<missing>')+': '+error.message)})
}
try {
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message))
 const base=process.env.BASE_URL || 'http://127.0.0.1:5174'
 for(const width of [1440,320]) {
  await page.setViewportSize({width,height:900})
  for(const lang of ['en','zh-CN']) {
   await page.goto(base);await page.locator('.person-card').first().waitFor()
   await page.locator('.language-bar').getByRole('button',{name:lang==='en'?'English':'简体中文',exact:true}).click()
   const cards=page.locator('.person-card-link');assert.equal(await cards.count(),37)
   for(const person of people) {
    const img=page.locator('a[href="/people/'+person.id+'"] img');assert.ok((await waitForImage(img,person.id+' card'))[0]>0)
   }
   for(const person of people) {
    await page.goto(base+'/people/'+person.id);await page.locator('h1').waitFor()
    const expected=getLocalizedPerson(person,lang)
    const img=page.locator('.person-detail__image');const dimensions=await waitForImage(img,person.id+' detail')
    assert.ok(dimensions[0]>0&&dimensions[1]>0)
    if(person.imageAttribution) {
     assert.deepEqual(dimensions,[900,1200])
     const block=page.locator('.person-detail__image-attribution');const text=await block.innerText()
     assert.ok(text.includes(expected.imageNotes),person.id+' notes');assert.ok(text.includes(expected.imageChanges),person.id+' edits');assert.ok(text.includes(person.imageAttribution.author),person.id+' author')
     const hrefs=await block.locator('a').evaluateAll(a=>a.map(x=>x.href))
     assert.ok(hrefs.includes(new URL(person.imageAttribution.sourceUrl).href),person.id+' source')
     assert.ok(hrefs.includes(new URL(person.imageAttribution.licenseUrl).href),person.id+' license')
    }
    assert.equal(await page.locator('html').getAttribute('lang'),lang)
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),person.id+' overflow')
    checks++
   }
   console.log('PASS 20 cards/details: '+width+'px '+lang+'; images decoded, notes and credits checked')
  }
 }
 assert.deepEqual(errors,[])
 fs.mkdirSync('node_modules/.cache/portrait-review',{recursive:true})
 fs.writeFileSync('node_modules/.cache/portrait-review/browser-results.json',JSON.stringify({checks,errors,connected:people.filter(p=>p.imageAttribution).length,visualReview:false},null,2))
} finally {await browser.close()}
