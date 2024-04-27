
import fs from 'fs'


// async formatda ishlashi
function writeNumbers() {
    let numbers = '';

    for (let i = 0; i < 100; i++) {
        numbers += (Math.floor(Math.random() * 100)) + '\n';
    }

    fs.writeFile('./sonlar.txt', numbers, (err) => {
        if (err) {
            throw err;
        }
        console.log('Yozildi');
    });
}



function readNumber(){
    let arr = []
    fs.readFile('./sonlar.txt', 'utf-8', (err, data) => {
        if (err) {
            throw err
        } 
        arr =  data.split('\n')
        console.log(arr)
    })
}

writeNumbers()
readNumber()


// Sync formatdan ishlashi
function writeNumbersync() {
    let numbers = '';

    for (let i = 0; i < 100; i++) {
        numbers += (Math.floor(Math.random() * 100)) + '\n';
    }

    fs.writeFileSync('./sonlars.txt', numbers, (err) => {
        if (err) {
            throw err;
        }
        console.log('Yozildi');
    });
}


function readNumbersync(){
    let arr = []

    arr = fs.readFileSync('./sonlars.txt', 'utf-8', (err, data) => {
        if (err) {
            throw err
        } 
        return data
    }).split('\n')

    console.log(arr)
}


writeNumbersync()
readNumbersync()

