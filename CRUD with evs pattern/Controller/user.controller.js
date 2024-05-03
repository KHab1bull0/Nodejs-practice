import path from 'node:path'
import fs from 'node:fs'


const  readFile =  () => {
    const dir = path.join(process.cwd(), "Database", "users.json")
    try {
        return JSON.parse(fs.readFileSync(dir, 'utf-8'))
    } catch {
        return false
    }
}


const writeFile = (data) => {
    const dir = path.join(process.cwd(), "Database", "users.json")
    try {
        fs.writeFileSync(dir, JSON.stringify(data))
        return true
    } catch {
        return false
    }
}


export const getAll =  (req, res) => {
    const file = readFile()

    if (file == '') {
        return res.send("Database is empty")
    }
    if (file == false) {
        return res.send('File not found')
    }

    res.status(200).send(file)
}


export const postOne = (req, res) => {
    const { name, age, adress } = req.body

    if (!name || !age || !adress) {
        res.status(400).send("Malumot to'liq emas")
    }
    let dataJson = readFile()
    const body = {
        id: dataJson.length + 1,
        name,
        age,
        adress
    }

    if (dataJson == "") {
        const arr = []
        arr.push(body)
        if (writeFile(arr)) {
            res.status(200).send('Data added')
        } else {
            res.status(500).send("Can't write this data")
        }
    } else {
        dataJson.push(body)
        
        if (writeFile(dataJson)) {
            res.status(200).send('Data added')
        } else {
            res.status(500).send("Can't write this data")
        }
    }
}


export const putOne = (req, res) => {

    const id = +req.params.id || 1
    const { name, age, adress } = req.body
    const users = readFile()

    if (name || age || adress) {
        users.forEach(user => {
            if (user.id == id) {
                user.name = name || user.name
                user.age = age || user.age
                user.adress == adress || user.adress
            }
        })

        writeFile(users)
        res.status(200).send("Data successfully updated")
    } else {
        res.status(400).send("Bad request")
    }
}

export const deleteOne = (req, res) => {
    const id = +req.params.id || 1

    let users = readFile()
    const user = users.find((user) => user.id === id)


    if (user) {
        let index = 1
        users.forEach((person, i) => {
            if (person.id === user.id && person.name === user.name && person.age === user.age) {
                index = i
            }
        })

        users.splice(index, 1)

        if (writeFile(users)) {
            res.status(200).send("User deleted")
        } else {
            res.send('Error')
        }
    } else {
        res.send("There is not such user")
    }
}


export const deleteAll = (req, res) => {
    writeFile([])
    res.status(200).send("All data successfully deleted")
}
