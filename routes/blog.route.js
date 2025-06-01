import express from "express";
import {
    createBlog,
    deleteBlog,
    getBlog,
    getBlogById
} from "../controller/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/", createBlog);
blogRouter.get("/", getBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;

