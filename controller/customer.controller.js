import Customer from "../models/customer.models.js";

const getCustomer = async (req, res) => {
    try {
        const val = await Customer.find();
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
}

const createCustomer = async (req, res) => {
    try {
        const val = await Customer.create(req.body, { runValidators: true });
        res.send(val).status(201);
    } catch (error) {
        res.send(error).status(400);
    }
}

const getCustomerById = async (req, res) => {
    try {
        const val = await Customer.findById(req.params.id);
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
}

const updateCustomer = async (req, res) => {
    try {
        const val = await Customer.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true
        })
        if (!val) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json(deletedCustomer);
    } catch (error) {
        res
            .status(400)
            .json({ error: error instanceof Error ? error.message : error });
    }
}


export { getCustomer, createCustomer, getCustomerById }