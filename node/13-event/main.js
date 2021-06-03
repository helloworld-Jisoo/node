const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', (event)=>{
  console.log(event);
})

emitter.log(()=>{
  console.log('..........doing something');
})

//! EventEmitter는 한번 객체를 만들면 그 객체 내에서 발생하는 이벤트에 한해서 들을 수 있음
//! 여러 EventEmitter를 만들면 다른 객체에서 발생하는 이벤트는 서로 호환 안됨.