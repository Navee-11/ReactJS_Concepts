import express from "express";
import handleLogout from "../controller/logoutController.js";

const logoutRouter = express.Router();
logoutRouter.get("/", handleLogout);

export default logoutRouter;
