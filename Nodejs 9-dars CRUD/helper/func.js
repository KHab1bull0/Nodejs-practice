import fs from 'node:fs'
import path from 'node:path'
import Joi from "joi";



export const readFile = (file) => {
    const pathname = path.join(process.cwd(), "database", file)
    return JSON.parse(fs.readFileSync(pathname, 'utf-8'))
}


export const writeFile = (file, data) => {
    const pathname = path.join(process.cwd(), "database", file)
    fs.writeFileSync(pathname, JSON.stringify(data))
    return 1
}


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


export const validComment = (body) => {

    const validcomment = Joi.object({
        userId: Joi.number().min(1),
        comments: Joi.string().min(5)
    })
    const result = validcomment.validate(body);
    return result
}


export const validBlog = (body) => {
    const validblog = Joi.object({
        title: Joi.string(),
        slug: Joi.string(),
        content: Joi.string(),
        tags: Joi.array()
    })

    const result = validblog.validate(body)
    return result
}