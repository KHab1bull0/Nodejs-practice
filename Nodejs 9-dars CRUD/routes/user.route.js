import { Router } from "express";
import { userLogin, userRegister, userProfile, allUser, userDelete, userUpdate, deleteAll } from "../controllers/user.controllers.js";
export const user = Router()


user.post('/register', userRegister)

user.post('/login', userLogin)

user.get('/profile/:username', userProfile)

user.put('/profile/:username', userUpdate)

user.delete('/profile/:id', userDelete)

user.get('/profile', allUser)

user.delete('/profile', deleteAll)