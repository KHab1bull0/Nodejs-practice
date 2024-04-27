import fs from 'node:fs'
import path from 'node:path'

// console.log(path)

const dirname = path.dirname(process.argv[1])
const newpath = path.join(dirname, 'docs')


let filepath = path.join(newpath, '/docs/READme.md')
console.log(filepath)


fs.mkdirSync(newpath, { recursive: true }, (err) => {
    if (err) {
        throw err
    }
});
console.log('"docs" katalogi yaratildi.');


fs.writeFile(filepath, '', (err, data)=>{
    if(err){
        throw err
    }
    console.log('File yaratildi.', data)
})