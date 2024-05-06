import exp from 'node:constants'
import fs from 'node:fs'
import path from 'node:path'

export const readFile = (file) => {
    const pathname = path.join(process.cwd(), "database", file)
    return JSON.parse(fs.readFileSync(pathname, 'utf-8'))
}

export const writeFile = (file, data) => {
    const pathname = path.join(process.cwd(), "database", file)
    fs.writeFileSync(pathname, JSON.stringify(data))
    return 1
}
import Joi from "joi";

export const validUser = (body) => {

    const validBody = Joi.object({
        username: Joi.string().min(3),
        password: Joi.string().min(4),
        fullname: Joi.string().min(7),
        age: Joi.number().min(10),
        email: Joi.string(),
        gender: Joi.string()
    })

    const result = validBody.validate(body);
    return result
}