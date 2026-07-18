import employeeModel from "../model/employeeModel.js";

export const getAllEmployees = async (req, res) => {
  const employees = await employeeModel.find();
  if (!employees.length)
    return res.status(204).json({ message: "No employee found" });
  res.json(employees);
};

export const createNewEmployee = async (req, res) => {
  if (!req.body?.firstName || !req.body?.lastName) {
    return res
      .status(400)
      .json({ message: "First and Last Names are required" });
  }
  try {
    const employee = await employeeModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res.status(201).json(employee);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEmployee = async (req, res) => {
  if (!req.body?.id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }
  try {
    // const employee = await employeeModel.findOne({ _id: req.body.id });
    const employee = await employeeModel.findById(req.body.id);
    if (!employee) {
      return res
        .status(404)
        .json({ message: "No employee matches with the given ID" });
    }
    employee.firstName = req.body?.firstName || employee.firstName;
    employee.lastName = req.body?.lastName || employee.lastName;
    const result = await employee.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (req, res) => {
  if (!req.body?.id)
    return res.status(400).json({ message: "Employee ID is required" });

  try {
    const employee = await employeeModel.findById(req.body.id);
    if (!employee) {
      return res
        .status(404)
        .json({ message: "No employee matches with the given ID" });
    }
    const result = await employee.deleteOne();

    // const result = await employeeModel.findByIdAndDelete(req.body.id);
    res.json(result); //result contains below object after successful deletion
    /* {
  acknowledged: true,
  deletedCount: 1
} */
  } catch (error) {
    console.log(error);
  }
};

export const getEmployee = async (req, res) => {
  if (!req.params?.id) {
    return res.status(400).json({ message: "Employee ID is required" });
  }
  try {
    // const employee = employeeModel.findById(req.params.id);
    // const employee = employeeModel.findOne({ _id: req.params.id });
    if (!employee) {
      return res
        .status(404)
        .json({ message: `No employee matches id ${req.params.id}` });
    }
    res.status(204).json(employee);
  } catch (error) {
    console.log(error);
  }
};
