const EventEmitter = require('events');
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(callback){
    this.emit('log', 'started...'); // 나 자신을 호출해야 하므로 this
    callback();
    this.emit('log', 'ended!');
 }
}

// 외부에서 쓸 수 있도록 
module.exports.Logger = Logger; 
