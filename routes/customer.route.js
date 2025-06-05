import express from "express";
import { createCustomer, deleteCustomer, updateCustomer, getCustomer, getCustomerById } from "../controller/customer.controller.js";
const customerRouter = express.Router();

customerRouter.post("/", createCustomer);
customerRouter.get("/", getCustomer);
customerRouter.get("/:id", getCustomerById);
customerRouter.delete("/:id", deleteCustomer);
customerRouter.delete("/:id", updateCustomer);

export default customerRouter;

