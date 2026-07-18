import express from "express";
import { handleRefreshToken } from "../controller/refreshTokenController.js";

const refreshRouter = express.Router();
refreshRouter.get("/", handleRefreshToken);

export default refreshRouter;
