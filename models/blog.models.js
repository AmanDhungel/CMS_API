import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9\s]+$/.test(value);
      },
      message: "Title should not contain any special character",
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length > 100;
      },
      message: "Description should not contain any special character",
    },
  },
  exercpt: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9\s]+$/.test(value);
      },
      message: "Excerpt should not contain any special character",
    },
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return value.every((tag) => /^[a-zA-Z0-9\s]+$/.test(tag));
      },
      message: "Tags should not contain any special character",
    },
  },
  Author: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9\s]+$/.test(value);
      },
      message: "Author should not contain any special character",
    },
  },
  image: {
    type: [String],
    required: true,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);
