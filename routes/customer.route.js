import express from "express";
import { createCustomer, deleteCustomer, getCustomer, getCustomerById } from "../controller/customer.controller.js";
const customerRouter = express.Router();

customerRouter.post("/", createCustomer);
customerRouter.get("/", getCustomer);
customerRouter.get("/:id", getCustomerById);
customerRouter.delete("/:id", deleteCustomer);

export default customerRouter;

