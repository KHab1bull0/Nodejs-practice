import { Router, json } from "express";
import { blogGet, blogPost, blogPutOne, blogDeleteOne, blogComment } from "../controllers/blog.controllers.js";

export const blog = Router()


blog.get('/blog', blogGet )

blog.post('/blog', blogPost)

blog.put('/blog/:id', blogPutOne)

blog.delete('/blog/:id', blogDeleteOne)

blog.post('/blog/:id', blogComment)