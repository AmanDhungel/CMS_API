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
      validator: (value) => {
        return typeof value === "boolean";
      },
      message: "inStock should be a boolean",
    },
  },
  isProductNew: {
    type: Boolean,
    default: true,
    validate: {
      validator: (value) => {
        return typeof value === "boolean";
      },
      message: "isProductNew should be a boolean",
    },
  },
  hasCategory: {
    type: Boolean,
    default: true,
    validate: {
      validator: (value) => {
        return typeof value === "boolean";
      },
      message: "hasCategory should be a boolean",
    },
  },
  Category: {
    type: [{
      name: String,
      price: Number
    }],
    validate: {
      validator: (value) => {
        return !this.hasCategory || value.length > 0;
      },
      message: "Has Category is False",
    },
  },

  sold: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
