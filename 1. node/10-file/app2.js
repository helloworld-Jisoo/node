const fs = require('fs').promises;

// read a file
fs.readFile('./text-new.txt', 'utf8')
.then(data => console.log(data))
.catch(console.error);

// write a file -> promise<void> 아무것도 return 되지않음.
fs.writeFile('./text-new.txt', 'Hello world!')
.catch(console.error);

fs.appendFile('./text-new.txt', 'Yo!')
//.then(()=> 
//! promise(비동기) 이기 때문에 순서가 중요하다면 then 안에서 실행
// copy (비동기이기 때문에) append 후에 file을 copy 하고 싶을 시, 
//fs.copyFile('./text-new.txt', './text-copy.txt'))
.catch(console.error);


// copy 
fs.copyFile('./text-new.txt', './text-copy.txt')
.catch(console.error);

// folder
fs.mkdir('sub-folder')
.catch(console.error);

 fs.readdir('./')
.then(console.log)
.catch(console.error);