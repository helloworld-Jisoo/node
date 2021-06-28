const fs = require('fs');

// 모든 API는 3가지 형태로 제공됨
// 1. rename(...., callback(error, data)) - 비동기
// 2. try {renameSync(....)} catch(e){ } - blocking, NO CALLBACK, 문제시 ERROR, 끝날때까지 다음줄로 넘어가지 않음.
// 3. promise.rename.then().catch(0)

try {
  fs.renameSync('./text.txt','./text-new.txt');
} catch (error) {
  console.error(error);
}

// async -> callback
fs.rename('./text-new.txt', './text.txt',(error) => {
  console.log(error);
})
console.log('hello');

fs.promises
.rename('./text.txt','./text-new.txt')
.then(()=> console.log('Done!'))
.catch(console.error);