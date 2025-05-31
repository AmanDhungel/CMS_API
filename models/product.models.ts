import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quatity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
    validate: {
      validator: (value: boolean) => {
        return typeof value === "boolean";
      },
      message: "inStock should be a boolean",
    },
  },
  isProductNew: {
    type: Boolean,
    default: true,
    validate: {
      validator: (value: boolean) => {
        return typeof value === "boolean";
      },
      message: "isProductNew should be a boolean",
    },
  },
  sold: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Product", productSchema);
