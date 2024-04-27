import os from 'node:os'


function osInfo(){
    const hostname = os.hostname()
    const username = os.userInfo().username

    console.log(`Hostname: [${hostname}], Username: [${username}]`)
}
osInfo()
