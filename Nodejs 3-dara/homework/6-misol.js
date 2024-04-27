

import EventEmitter from "events";

class DataEmitter extends EventEmitter {}
const dataEmitter = new DataEmitter();


process.stdin.on('data', (data) => {
    const userInput = data.toString().trim()
    dataEmitter.emit('dataReceived', userInput)
});

dataEmitter.on('dataReceived', (data) => {

    console.log('Data: ', data)
    if(data == 'exit'){
        process.exit()
    }
});
