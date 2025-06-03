import express from "express";

import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProduct);
productRouter.get("/:id", getProductById);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;