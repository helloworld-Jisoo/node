const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};

emitter.on('jisoo', callback1);

emitter.on('jisoo', (args)=>{
  console.log('second callback - ', args);
})

emitter.emit('jisoo', {message: 1});
emitter.emit('jisoo', {message: 2});
//emitter.removeListener('jisoo', callback1);
emitter.removeAllListeners();
emitter.emit('jisoo', {message: 3});


