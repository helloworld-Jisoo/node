// 계획
//? 1. 사용자가 원하는 폴더의 이름을 받아온다.
const fs=require('fs');
const path = require('path');
const os = require('os');

const forder= process.argv[2]

const workingDir = path.join(os.homedir(),"Pictures",forder);

if(!forder || !fs.existsSync(workingDir)){
  console.error("Please enter forder name in pictures");
  return;
}
//? 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
const videoDir= path.join(workingDir,'videoDir');
const capturedDir= path.join(workingDir,'capturedDir');
const duplicateDir= path.join(workingDir,'duplicateDir');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicateDir) && fs.mkdirSync(duplicateDir);

//? 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4 or mov / png or aae / IMG_1234(IMG_E1234)

fs.promises
.readdir(workingDir)
.then(processFiles)
.catch(console.log);


function processFiles(files){
  files.forEach(file => {
    // logic here
    if(isVideoFile(file)){
     move(file,videoDir);
    } else if(isCapturedFile(file)){
      move(file,capturedDir);
    } else if(isDuplicatedFile(files,file)){
  move(file,duplicateDir);
    }
  })
}

// ruturn !!변수 = 변수를 boolean으로 만들어줌. 있으면 true, 없으면 false.

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files,file) {
// IMG_XXXX -> IMG_EXXX
// IMG 로 시작하는 경우에만 
if(!file.startsWith('IMG') || file.startsWith('IMG_E')){
  return false;
} 

// IMG_E file 있는지 확인
const edited = `IMG_E${file.split('_')[1]}`; // [1] = 두번째 받아오기.. E다음 
const found = files.find(f => f.includes(edited)); // files 안에 edited 된 이름이 있는지 없는지 확인
return !!found;
}
// targetDir 로 옮기기
function move(file, targetDir) {
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir,file);
  console.info(`move${file} to ${path.basename(targetDir)}`);
  fs.promises
  .rename(oldPath, newPath)
  .catch(console.error);
}