import express from "express";

import { Login, createUser, refreshAccessToken } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.post("/login", Login);
userRouter.post("/refresh", refreshAccessToken);

export default userRouter;