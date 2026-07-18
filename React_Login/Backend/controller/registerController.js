import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";

export const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  const duplicate = await userModel.findOne({ userName: user });
  if (duplicate) return res.sendStatus(409);
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const result = await userModel.create({
      userName: user,
      password: hashedPwd,
    });
    console.log(result);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
