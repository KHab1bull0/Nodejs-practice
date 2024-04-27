const os = require('os')

function checkMemory(check){
    
    if(check === 'check-memory'){
        
        const tbayt = os.totalmem()
        
        const tkilobayt = tbayt / 1024
        const tmegamayt = tkilobayt / 1024
        console.log("Total memory: ",tmegamayt, 'MB')
        
        const bayt = os.freemem()
        const kilobayt = bayt / 1024
        const megabayt = kilobayt / 1024
        console.log("Free memory: ",Math.floor(megabayt), 'MB')
        
    } else {
        console.log("No command provided")
    }
}

const check = process.argv[2]

checkMemory(check)


