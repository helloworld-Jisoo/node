const fs = require('fs');
const data = []; // save chunk in the array
const readStream = fs.createReadStream('./file.txt', {
  highWaterMark: 8, // 64kbytes(Default)
  //encoding: 'utf-8',
})
.once('data',chunk => {
  //console.log(chunk);
  data.push(chunk);
  console.count('data');
})
.on('end', ()=>{
  console.log(data.join(''));
})
.on('error', error => {
  console.log(error);
})