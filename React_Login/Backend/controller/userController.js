import userModel from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users.length > 0) {
      return res.status(204).json({ message: "No users found" });
    }
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  if (!req.body?.id) {
    return res.status(400).json({ message: "ID is required" });
  }
  try {
    const user = await userModel.findById(req.body.id);
    if (!user) {
      return res
        .status(204)
        .json({ message: `No user matches id ${req.body.id}` });
    }
    const result = await user.deleteOne(); //no filter is needed because document itself is the target
    // const result = await userModel.deleteOne({ _id: req.body.id }); //filter is needed because we are calling on the model
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  if (!req.params?.id) {
    return res.status(400).json({ message: "UserID is required" });
  }
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res
        .status(204)
        .json({ message: `No employee matches id ${req.params.id}` });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
