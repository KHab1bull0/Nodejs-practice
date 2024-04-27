import fs from 'node:fs'
import path from 'path'

const newpath = process.argv[2]
const fileName = path.basename(newpath)


fs.readFile(fileName, 'utf-8', (err, data)=>{
    if(err){
        if (err.code === 'ENOENT') {
            console.error(`Xato: ${fileName} nomli fayl topilmadi.`);
        } 
        
    } else {
        console.log(data)
    }
})