import {Router} from "express";

import {getAll, postOne, deleteAll, putOne, deleteOne } from '../Controller/user.controller.js'


export const user = Router()


user.get('/users', getAll) 
user.post('/users', postOne)
user.put('/users/:id', putOne)
user.delete('/users/:id', deleteOne)
user.delete('/users', deleteAll)


export default {
    user
}
