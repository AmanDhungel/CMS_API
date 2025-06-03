import Borrow from "../models/borrow.models.js";

const createBorrow = async (req, res) => {
    try {
        const val = await Borrow.create([req.body], { runValidators: true });
        res.send(val).status(201);
    } catch (error) {
        res.send(error).status(400);
    }
};

const updateBorrow = async (req, res) => {
    try {
        const val = await Borrow.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true
        })
        if (!val) {
            return res.status(404).json({ message: "Borrow not found" });
        }
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
}

const getBorrow = async (req, res) => {
    try {
        const val = await Borrow.find();
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
};

const getBorrowById = async (req, res) => {
    try {
        const val = await Borrow.findById(req.params.id);
        res.send(val).status(200);
    } catch (error) {
        res.send(error).status(400);
    }
}

const deleteBorrow = async (req, res) => {
    try {
        const deletedBorrow = await Borrow.findByIdAndDelete(req.params.id);
        if (!deletedBorrow) {
            return res.status(404).json({ message: "Borrow not found" });
        }
        res.status(200).json(deletedBorrow);
    } catch (error) {
        res
            .status(400)
            .json({ error: error instanceof Error ? error.message : error });
    }
}

export { createBorrow, updateBorrow, getBorrow, getBorrowById, deleteBorrow };