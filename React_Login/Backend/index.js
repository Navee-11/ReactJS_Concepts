import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongodb.js";
import employeeRouter from "./router/employeeRouter.js";
import userRouter from "./router/userRouter.js";
import registerRouter from "./router/registerRouter.js";
import authRouter from "./router/authRouter.js";
import verifyJWT from "./middlewares/verifyJWT.js";
import refreshRouter from "./router/refreshRouter.js";
import logoutRouter from "./router/logoutRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
//built-in middleware for parsing the body and json data from the request.Without this middleware, we cannot access the data from the request body. It is used to parse incoming requests with JSON payloads and is based on body-parser.
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

//Test route to check if the server is running or not
/* app.get("/", (req, res) => {
  res.status(200).send("Home route is working");
}); */

app.use("/api/register", registerRouter);
app.use("/api/auth", authRouter);
app.use("/api/refresh", refreshRouter);
app.use("/api/logout", logoutRouter);
// app.use("/api/employees", employeeRouter);
app.use(verifyJWT);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
