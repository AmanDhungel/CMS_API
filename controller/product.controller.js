import Product from "../models/product.models";

const getProduct = async (req, res) => {
  try {
    const val = await Product.find();
    res.send(val).status(200).message("success");
  } catch (error) {
    res.send(error).status(400);
  }
};

const createProduct = async (req, res) => {
  try {
    const val = await Product.create(req.body, { runValidators: true });
    res.send(val).status(201).json({ message: "success" });
  } catch (error) {
    res.send(error).status(400);
  }
};

const getProductById = async (req, res) => {
  try {
    const val = await Product.findById(req.params.id);
    res.send(val).status(200).json({ message: "success" });
  } catch (error) {
    res.send(error).status(400);
  }
};

const updateProduct = async (req, res) => {
  try {
    const val = await Product.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    if (!val) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.send(val).status(200).json({ message: "success" });
  } catch (error) {
    res.send(error).status(400);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res
      .status(400)
      .json({ error: error });
  }
};

export { getProduct, createProduct, getProductById, updateProduct, deleteProduct }; 