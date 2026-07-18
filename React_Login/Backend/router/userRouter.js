import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
} from "../controller/userController.js";
// import verifyJWT from "../controller/verifyJWT.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.delete("/", deleteUser);
userRouter.get("/:id", getUser);

export default userRouter;
