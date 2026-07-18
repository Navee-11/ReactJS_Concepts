import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;
  const foundUser = await userModel.findOne({ refreshToken: refreshToken });
  if (!foundUser) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.userName !== decoded.userName)
      return res.sendStatus(403);
    const accessToken = jwt.sign(
      {
        userName: decoded.userName,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30s" },
    );
    res.json({ accessToken });
  });
};
