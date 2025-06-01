import express from "express";
import { createCustomer, getCustomer, getCustomerById } from "../controller/customer.controller.js";
const customerRouter = express.Router();

customerRouter.post("/", createCustomer);
customerRouter.get("/", getCustomer);
customerRouter.get("/:id", getCustomerById);

export default customerRouter;

