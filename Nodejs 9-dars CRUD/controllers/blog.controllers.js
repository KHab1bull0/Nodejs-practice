import { writeFile, readFile, validBlog, validComment } from "../helper/func.js"

export const blogGet = (req, res) => {

    const blogJson = readFile('blogs.json');
    res.send(blogJson);
}

export const blogPost = (req, res) => {

    const reqBody = req.body;
    const blogJson = readFile('blogs.json');

    const result = validBlog(reqBody)

    if (!result.error) {

        const check = blogJson.find((blog) => blog.title == reqBody.title)
        if (!check) {
            if (!blogJson.length) {
                reqBody.id = blogJson.length + 1;
            } else {
                reqBody.id = blogJson[blogJson.length - 1].id + 1;
            }
            req.body.comments = []
            blogJson.push(reqBody);

            if (writeFile('blogs.json', blogJson)) {
                res.status(201).send("Data qo'shildi.");
            } else {
                res.send('Filega yozilmadi.');
            }
        } else {
            res.status(400).send('This blog alredy exist')
        }

    } else {
        res.status(400).send('Valid error')
    }

}

export const blogPutOne = (req, res) => {
    const id = req.params.id || 1;
    const reqBody = req.body;
    const blogsJson = readFile('blogs.json');
    const blogs = blogsJson.find(elem => elem.id === +id);

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
            res.status(201).send('Updated');
        } else {
            res.send(`Filega yozishda xato`);
        }
    } else {
        res.status(200).send("This blog is not exist");
    }
}

export const blogDeleteOne = (req, res) => {
    const id = +req.params.id || 1;
    let index;
    let check = 0
    const blogs = readFile("blogs.json");
    if (blogs.length) {
        blogs.forEach((elem, i) => {
            if (elem.id == id) {
                index = i;
                check = 1
            }
        })
        if (check) {
            blogs.splice(index, 1)
            if (writeFile('blogs.json', blogs)) {
                res.send('Blog deleted');
            } else {
                res.send('Filega yozishda xato');
            }
        } else {
            res.status(400).send('This blog is not exist')
        }

    } else {
        res.status(400).send('Blog database is empty')
    }

}



export const blogComment = (req, res) => {
    const blogId = +req.params.id || 1;
    const userComment = req.body;

    const validResult = validComment(userComment);

    if (!validComment.error) {
        let check = 0
        const blogsJson = readFile('blogs.json');
        const userJson = readFile('users.json')

        const user = userJson.find((user) => user.id == req.body.id)
        if (user) {

            if (blogsJson.length) {
                blogsJson.forEach((blog) => {
                    if (blog.id === blogId) {
                        blog.comments.push(req.body)
                        check = 1
                    }
                })

                if (check) {
                    if (writeFile('blogs.json', blogsJson)) {
                        res.status(200).send("Comment qo'shildi.");
                    }
                }
            } else {
                res.status(400).send("This blog is not exist")
            }
        } else {
            res.status(400).send("This user is not exist")
        }


    } else {
        res.status(400).send(validResult.error.details.message)
    }
}