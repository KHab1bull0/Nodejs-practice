
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'
dotenv.config()


const webServer = http.createServer((req, res) => {

    if (req.method == 'GET') {

        if(req.url == '/' || req.url == '/home'){
            res.writeHead(200, { "content-type": "text/html" })
            const dir = path.join(process.cwd(), 'Public', 'home.html')

            fs.readFile(dir, 'utf-8', (err, data) => {
                if(err){
                    throw err
                } else {
                    res.write(data)
                    res.end()
                }
            })
        } else if(req.url == '/cars'){
            res.writeHead(200, { "content-type": "text/html" })
            const dir = path.join(process.cwd(), 'Public', 'html', 'cars.html')

            fs.readFile(dir, 'utf-8', (err, data) => {
                if(err){
                    throw err
                } else {
                    res.write(data)
                    res.end()
                }
            })
        } else if(req.url == '/price'){
            res.writeHead(200, { "content-type": "text/html" })
            const dir = path.join(process.cwd(), 'Public', 'html', 'price.html')

            fs.readFile(dir, 'utf-8', (err, data) => {
                if(err){
                    throw err
                } else {
                    res.write(data)
                    res.end()
                }
            })
        } else if(req.url == '/contact'){
            res.writeHead(200, { "content-type": "text/html" })
            const dir = path.join(process.cwd(), 'Public', 'html', 'contact.html')

            fs.readFile(dir, 'utf-8', (err, data) => {
                if(err){
                    throw err
                } else {
                    res.write(data)
                    res.end()
                }
            })
        } 

    } else {
        console.log('404 not found')
        res.writeHead(404)
        res.end('404 not found')
    }
})

const port = process.env.PORT || 3000

webServer.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
