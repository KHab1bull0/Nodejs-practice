import  express  from "express";
import dotenv from 'dotenv'
import fs from 'node:fs'
import  { homeRouter }  from "./views/home.js";
import  {user}  from "./Routes/users.route.js";

dotenv.config()
const app = express()
app.use(express.json())






app.use('/', homeRouter)
app.use('/', user)




const port = process.env.PORT || 3001
app.listen(port, (err) => {
    if(err) {
        throw err
    } else {
        console.log('Server is working')
    }
})