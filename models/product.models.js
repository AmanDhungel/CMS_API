import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true },
  description: { type: String, required: true },
  inStock: {
    type: Boolean,
    default: true,
    validate: {
      validator: (value) => typeof value === "boolean",
      message: "inStock should be a boolean",
    },
  },
  isProductNew: {
    type: Boolean,
    default: true,
    validate: {
      validator: (value) => typeof value === "boolean",
      message: "isProductNew should be a boolean",
    },
  },
  category: {
    type: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    required: true,
    validate: {
      validator: (value) => value.length > 0,
      message: "Category should not be empty",
    },
  },
  sold: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", productSchema);

export default Product;