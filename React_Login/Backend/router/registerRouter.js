import { handleNewUser } from "../controller/registerController.js";
import express from "express";

const registerRouter = express.Router();
registerRouter.post("/", handleNewUser);

export default registerRouter;
