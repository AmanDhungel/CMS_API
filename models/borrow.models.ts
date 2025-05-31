import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  borrowDate: {
    type: Date,
    default: Date.now,
  },
});

const Borrow = mongoose.model("Borrow", borrowSchema);

export default Borrow;
