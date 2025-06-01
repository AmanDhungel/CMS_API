import express from "express";
import cors from "cors";
import { verifyToken } from "./middleware/verifyToken";
import blogRouter from "./routes/blog.route";
import userRouter from "./routes/user.route";
import customerRouter from "./routes/customer.route";
import borrowRouter from "./routes/borrow.route";
import productRouter from "./routes/product.route";

const app = express();

app.use(express.json());
app.use(cors())
app.use(verifyToken())


app.use("/blog", blogRouter);
app.use("/user", userRouter);
app.use("/customer", customerRouter);
app.use("/borrow", borrowRouter);
app.use("/product", productRouter);


app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
