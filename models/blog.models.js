import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  exercpt: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true,
  },
  Author: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    required: true,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);
