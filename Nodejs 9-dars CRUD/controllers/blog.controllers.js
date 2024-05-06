import { writeFile, readFile } from "../helper/func.js"


export const blogGet = (req, res) => {

    const blogJson = readFile('blogs.json')
    res.send(blogJson)
}

export const blogPost = (req, res) => {

    const { title, slug, content, tags } = req.body
    const db = readFile('blogs.json')


    const blog = {
        title: title || '',
        slug: slug || '',
        content: content || '',
        tags: tags || ''
    }
    console.log(db.length)

    if (!db.length) {
        blog.id = db.length + 1
    } else {
        blog.id = db[db.length - 1].id + 1
    }

    db.push(blog)

    if (writeFile('blogs.json', db)) {
        res.status(201).send("Data qo'shildi.")
    } else {
        res.send('Filega yozilmadi.')
    }
}

export const blogPutOne = (req, res) => {
    const id = req.params.id || 1
    const reqBody = req.body
    const blogsJson = readFile('blogs.json')
    const blogs = blogsJson.find(elem => elem.id === +id)

    if (blogs) {
        blogsJson.forEach(elem => {
            if (elem.id === blogs.id) {
                elem.title = reqBody.title || elem.title,
                    elem.slug = reqBody.slug || elem.slug,
                    elem.content = reqBody.content || elem.content,
                    elem.tags = reqBody.tags || elem.tags
            }
        })

        if (writeFile("blogs.json", blogsJson)) {
            res.status(201).send('Updated')
        } else {
            res.send(`Filega yozishda xato`)
        }
    } else {
        res.status(200).send("Id topilmadi")
    }
}

export const blogDeleteOne = (req, res) => {
    const id = +req.params.id || 1
    let index

    const blogs = readFile("blogs.json")
    blogs.forEach((elem, i) => {
        if (elem.id == id) {
            index = i
        }
    })

    blogs.splice(index, 1)
    if (writeFile('blogs.json', blogs)) {
        res.send('Deleted')
    } else {
        res.send('Filega yozishda xato')
    }
}