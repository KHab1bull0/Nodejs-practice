import fs from 'fs'
import path from 'path'


const paths = path.dirname(process.argv[1])

const arr = fs.readdirSync(paths, (err, data)=>{
    if(err){
        throw err
    }else{
        return data
    }
})

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}