
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'
dotenv.config()


const webServer = http.createServer((req, res) => {
    console.log(req.url)

    if (req.method == 'GET') {
        res.writeHead(200, { "content-type": "text/html" })

        if (req.url == '/' || req.url == '/home') {
            const dir = path.join(process.cwd(), 'Public', 'home.html')
            fs.readFile(dir, 'utf-8', (err, data) => {

                if (err) {
                    res.end(`<h1 style="text-align: center"> ${err} </h1>`)
                } else {
                    res.end(data)
                }
            })
        } else if (req.url == '/about') {
            const dir = path.join(process.cwd(), 'Public', 'about.html')
            
            fs.readFile(dir, 'utf-8', (err, data) => {
                if (err) {
                    res.end(`<h1 style="text-align: center"> ${err} </h1>`)
                } else {
                    res.end(data)
                }
            })

        } else {
            const dir = path.join(process.cwd(), 'Public', '404.html')
            
            fs.readFile(dir, 'utf-8', (err, data) => {
                if (err) {
                    res.end("File o'qishda muammo bo'ldi ")
                } else {
                    res.write(data)
                    res.end()
                }
            })
        }
    }
})

const port = process.env.PORT || 3001

webServer.listen(port, () => {
    console.log('Server listening')
})

