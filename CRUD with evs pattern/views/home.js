import  Router  from "express";

export const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    res.status(200).send('OK')
})



export default {
    homeRouter
}


