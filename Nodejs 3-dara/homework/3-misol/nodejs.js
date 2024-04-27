import fs, { read } from 'fs'


function readfile() {

    const time = new Date()
    let hour = time.getHours()
    let minuts = time.getMinutes()
    let vaqt = '\n'+'Sana: ' + time.toDateString() + '\n' + 'Vaqt: ' + hour + ' : ' + minuts

    fs.readFileSync('./my_nodejs_files/hello_world.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('hi')
            throw err
        }
    })
    
    fs.appendFile('./my_nodejs_files/hello_world.txt', vaqt, (err) => {
        if (err) {
            console.log('hi')
            throw err
        }
        console.log('Sana yozildi.')
    })
}

readfile()

