import { Blog } from "../models/blog.models.js";


const createBlog = async (req, res) => {
  try {
    const val = await Blog.create({ ...req.body }, { runValidators: true });
    res.send(val).status(201);
  } catch (error) {
    res.send(error).status(400);
  }
};

const getBlog = async (_, res) => {
  try {
    const val = await Blog.find();
    res.send(val).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
};

const getBlogById = async (req, res) => {
  try {
    const val = await Blog.findById(req.params.id);
    res.send(val).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
};

const UpdateBlog = async (req, res) => {
  try {
    const val = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    res.send(val).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
};


const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(deletedBlog);
  } catch (error) {
    res
      .status(400)
      .json({ error: error instanceof Error ? error.message : error });
  }
};

export { createBlog, getBlog, getBlogById, deleteBlog, UpdateBlog };
