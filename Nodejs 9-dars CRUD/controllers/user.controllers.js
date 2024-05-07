import { readFile, writeFile, validUser } from "../helper/func.js";


export const userRegister = (req, res) => {
    const usersJson = readFile('users.json')
    
    const reqbody = req.body
    const result = validUser(reqbody)
    let len = usersJson.length
    if (!result.error) {
        const body = {
            id: len ? usersJson[len - 1].id + 1 : len + 1,
            username: reqbody.username,
            password: reqbody.password,
            fullname: reqbody.fullname,
            age: reqbody.age,
            email: reqbody.email,
            gender: reqbody.gender
        }

        const check = usersJson.find((user) =>
            user.username == reqbody.username
            && user.fullname == reqbody.fullname
            && user.email == reqbody.email)

        if (!check) {
            usersJson.push(body)

            if (writeFile('users.json', usersJson)) {
                res.send("User added.")
            } else {
                res.send('Error writing to file')
            }
        } else {
            res.status(404).send('User is already exist')
        }
    } else {
        res.status(400).send(result?.error?.details[0]?.message)
    }
}


export const userLogin = (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).send("The information is incomplete")
    }

    const userJson = readFile('users.json')

    const user = userJson.find(elem => elem.username == username && elem.password == password)

    if (user) {
        res.status(200).send(user)
    } else {
        res.status(400).send("Not registered")
    }
}


export const userProfile = (req, res) => {
    const username = req.params?.username || ''

    const userJson = readFile('users.json')

    const user = userJson.find(user => user.username == username)

    if (user) {
        delete user.password
        res.status(200).send(user)
    } else {
        res.status(404).send('User not found.')
    }
}



export const userUpdate = (req, res) => {
    const username = req.params?.username
    const reqbody = req.body

    // User malumotlarini validatsiya 
    const result = validUser(reqbody)
    // Json file ni o'qib olish
    const usersJson = readFile('users.json')
    // Validatsiyada hato bolsa qiymat true bo'ladi shunga ! qoyilgan.
    if (!result.error) {
        // Validatsiyadan yaxshi otdi endi yangi qo'shilmoqchi bo'lgan malumotlar databaseda borligini tekshirib topib olamiz.
        const check = usersJson.find((user) =>
            user.username == reqbody.username
            && user.fullname == reqbody.fullname
            && user.email == reqbody.email)
        // Bunday malumot bo'lsa bunday user mavjud deb jiqaradi bolmasa yangi 
        // qo'shilgan malumot tekshirilmasa databasedagi boshqa user malumotlari bilan
        //  bir xil bo'lib qoladi bu esa xato hisoblanadi ular unique bo'lishi kerak.
        // Agar bo'lsamasa qiymat false boladi va ! orqali qiymatni 
        // true ga o'zgartiramiza
        if (!check) {
            usersJson.forEach((user) => {
                if (user.username == username) {
                    user.username = reqbody.username || user.username,
                        user.password = reqbody.password || user.password,
                        user.fullname = reqbody.fullname || user.fullname,
                        user.age = reqbody.age || user.age,
                        user.email = reqbody.email || user.email,
                        user.gender = reqbody.gender || user.gender
                }
            })
            // Update bolgan userni  jsonga yozish
            if (writeFile('users.json', usersJson)) {
                res.send("User updated")
            } else {
                // jsonga yozishda muammo bolsa xato qaytaradi.
                res.send('Error writing to file')  
            }
        } else {
            res.status(404).send('User is already exist')
        }

    } else {
        res.status(400).send(result?.error?.details[0]?.message)
    }
}

export const userDelete = (req, res) => {
    const userId = +req.params.id
    const userJson = readFile('users.json')
    let index
    userJson.forEach((user, i) => {
        if (user.id == userId) {
            index = i
        }
    })

    userJson.splice(index, 1)
    if (writeFile('users.json', userJson)) {
        res.status(200).send('User deleted')
    }

}


export const allUser = (req, res) => {
    const userJson = readFile('users.json')

    res.status(200).send(userJson)
}


export const deleteAll = (req, res) => {
    writeFile('users.json', [])
    res.status(200).send("All data deleted")
}