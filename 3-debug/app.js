function sayhello(){
  console.log("hello🙋‍♀️")
}

function calculate(x,y){
  console.log('calculating...');
  const result = x+y;
  console.log('result: ' + result);
  sayhello();
  return result;
}

calculate(1,2);

const stop = 4;
console.log('......👉looping👉.....');
for(let i = 0; i<10; i++){
console.log('count',i);
if(i===stop){
  break;
}
}
