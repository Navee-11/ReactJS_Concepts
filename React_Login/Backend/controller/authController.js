import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handlelogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  const foundUser = await userModel.findOne({ userName: user });
  if (!foundUser) return res.sendStatus(401);
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const roles = Object.values(foundUser.roles).filter(Boolean);
    //create JWT
    const accessToken = jwt.sign(
      {
        UserInfo: { userName: foundUser.userName, roles: roles },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" },
    );
    const refreshToken = jwt.sign(
      { userName: foundUser.userName },
      process.env.REFRESH_TOKEN_SECRET,
    );
    console.log(refreshToken);
    //save the refreshToken with the current user
    foundUser.refreshToken = refreshToken;

    const result = await foundUser.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 100,
    });
    res.json({ roles, accessToken });
  } else {
    res.sendStatus(401);
  }
};
