import express from "express";
import dotenv from 'dotenv'
import { blog } from "./routes/blog.route.js";
import { user } from "./routes/user.route.js";

dotenv.config()
const app = express()
app.use(express.json())


app.use('/', blog)
app.use('/', user)



const port = process.env.POST || 3001
app.listen(port, (err) => {
    console.log(`Server is working Port => ${port}`)
})