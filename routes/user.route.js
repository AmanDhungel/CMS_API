import express from "express";

import { Login, createUser, refreshAccessToken, getUser } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", Login);
userRouter.post("/refresh", refreshAccessToken);
userRouter.get("/", verifyToken, getUser);

export default userRouter;