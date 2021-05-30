function hello(){
  console.log(this);
  console.log(this === global);
}

hello();

class A{
  constructor(num){
    this.num = num;
  }

  memberFunction(){
    console.log('---class---');
      console.log(this); // class에서 this = 자기자신
  console.log(this === global);

  }
}

const a = new A(1);
a.memberFunction();

console.log('---golbal scope---');
console.log(this);

console.log(this===module.exports);