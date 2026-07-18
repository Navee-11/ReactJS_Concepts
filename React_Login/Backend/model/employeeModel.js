import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const employeeModel =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default employeeModel;
