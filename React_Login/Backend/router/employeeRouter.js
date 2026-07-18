import express from "express";
import {
  createNewEmployee,
  deleteEmployee,
  getAllEmployees,
  updateEmployee,
} from "../controller/employeeController.js";
const employeeRouter = express.Router();

employeeRouter.get("/", getAllEmployees);
employeeRouter.post("/", createNewEmployee);
employeeRouter.put("/", updateEmployee);
employeeRouter.delete("/", deleteEmployee);

export default employeeRouter;
