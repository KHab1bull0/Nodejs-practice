import express from 'express'
import fs from 'node:fs'
import dotenv from '../CRUD with evs pattern/node_modules/dotenv/lib/main'
import path from 'path'


dotenv.config()
const app = express()

app.use(express.json())
const longPath = process.cwd()


const readFile = (path) => {
    return fs.readFileSync(path, 'utf-8', (err, data) => {
        if (err) return 'File not readed'
        else return data
    })
}

const writeFile = (path, data) => {
    fs.writeFileSync(path, data)
    return true
}


const checkBook = (book, books) => {
    let bool = false

    books.forEach((item, index) => {
        if (item.title == book.title && item.author == book.author && item.year == book.year) {
            bool = true
        }
    })
    return bool
}



// Home page   METHOD  => (GET)      ---------------------------------------------
app.get('/', (req, res) => {
    res.status(200).json({
        data: "ok"
    })
})


// Books    METHOD  => (GET)         ---------------------------------------------
app.get('/books', (req, res) => {

    const dir = path.join(longPath, './books.json')
    const booksJson = readFile(dir)
    res.send(booksJson)
})


// Post to books    METHOD  => (POST)  ------------------------------------------
app.post('/books', (req, res) => {

    const body = req.body
    const dir = path.join(longPath, 'books.json')

    const books = JSON.parse(readFile(dir))

    if (typeof body === 'object') {
        if (body.title && body.title.length > 3) {
            if (body.author && body.author.length > 3) {
                if (body.year && body.year.length == 4) {

                    if (checkBook(body, books)) {
                        res.send('We alrady have this book')
                    } else {
                        books.push({
                            id: books.length + 1,
                            title: body.title,
                            author: body.author,
                            year: body.year
                        })

                        if (writeFile(dir, JSON.stringify(books))) {
                            res.status(201).send('Successjully added')
                        } else {
                            res.send('Error adding information')
                        }
                    }
                } else {
                    res.send('Kitob yilini kiritmadingiz')
                }
            } else {
                res.send('Kitob muallifini kirtmadingiz')
            }
        } else {
            res.send('Kitob nomini kiritmadingiz')
        }
    }
})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const { title, author, year } = req.body;

    const dir = path.join(longPath, 'books.json')
    const books = JSON.parse(readFile(dir))

    const oldBook = books.find((item) => item.id == +bookId);
    if (!oldBook) {
        return res.status(404).json({ message: "There is no such book" });
    }

    if (!title || !author || !year) {
        return res.status(400).json({ message: "Data Not Found" });
    }

    books.forEach((item) => {
        if (item.id == bookId) {
            item.title = title || oldUser.title;
            item.author = author || oldUser.author;
            item.year = year || oldUser.year;
        }
    });

    if (writeFile(dir, JSON.stringify(books))) {
        res.status(200).send('Successjully updated')
    } else {
        res.send('Error adding information')
    }

});


app.delete('/books/:id', (req, res) => {

    const { id } = req.params
    const dir = path.join(longPath, 'books.json')
    const books = JSON.parse(readFile(dir))

    const oldBook = books.find((item) => item.id == +id);
    if (!oldBook) {
      return res.status(404).json({ message: "There is no such book" });
    }
    books.splice(id - 1, 1);
    writeFile(dir, JSON.stringify(books))
    return res.status(200).send("Successfully deleted");

});


app.delete('/books', (req, res) => {

    const dir = path.join(longPath, 'books.json')
    let books = JSON.parse(readFile(dir))
    books = []
    writeFile(dir, JSON.stringify(books))
    return res.status(200).send("All data successfully deleted");

});


const port = process.env.PORT || 3001
app.listen(port, (err) => {
    if (err) throw err
    else console.log(`Server running on ${port}`)
})