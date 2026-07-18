import express from "express";
import { handlelogin } from "../controller/authController.js";

const authRouter = express.Router();
authRouter.post("/", handlelogin);

export default authRouter;
