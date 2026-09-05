import sharp from 'sharp';
import fs from 'node:fs';
const path=process.argv[2];
const data=await sharp(path,{failOn:'warning'}).rotate().raw().toBuffer({resolveWithObject:true});
if(data.info.width<300||data.info.height<300)throw Error('Image is too small');
console.log(`DECODED ${data.info.width}x${data.info.height} | ${fs.statSync(path).size} bytes`);
