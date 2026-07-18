import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  roles: {
    User: { type: Number, default: 2001 },
    Editor: Number,
    Admin: Number,
  },
  password: { type: String, required: true },
  refreshToken: String,
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
