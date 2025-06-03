import express from "express";
import cors from "cors";
import blogRouter from "./routes/blog.route.js";
import userRouter from "./routes/user.route.js";
import customerRouter from "./routes/customer.route.js";
import borrowRouter from "./routes/borrow.route.js";
import productRouter from "./routes/product.route.js";
import { connectDB } from "./lib/connectDB.js";

const app = express();
app.use(express.json());

app.use(cors())

connectDB();
app.use("/blog", blogRouter);
app.use("/user", userRouter);
app.use("/customer", customerRouter);
app.use("/borrow", borrowRouter);
app.use("/product", productRouter);


app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
