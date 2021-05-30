console.log("loging....");
console.clear();

// log level
console.log('log'); // Develop
console.info('info'); // Information
console.warn('warn'); // Warning
console.error('error'); // Error, User error, System error

// assert (print only it's fault)
console.assert(2===3, 'not same!');
console.assert(3===3, 'same');

// print Object
const student = {name: 'Jisoo', age: 29, school: {name:'NCI'}};
console.log(student);
console.table(student);
console.dir(student,{Showhidden: true, colors: false, depth: 0}); 

// measuring time
console.time('for loop');
for(let i=0; i<10; i++){
  i++;
}
console.timeEnd('for loop');

// counting
function a(){
  console.count('a function');
}
a();
a();
console.countReset('a function');
a();

// trace
function f1(){
  f2();
}
function f2(){
  f3();
}
function f3(){
  console.log('f3');
  console.trace();
}
f1();