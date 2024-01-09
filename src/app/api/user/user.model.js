import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

let User;

try {
  // Try to retrieve the existing model
  User = mongoose.model("user");
} catch (e) {
  // If the model does not exist, define it
  const UserSchema = new Schema({
    name: String,
    email: String,
    role: String,
    password: String,
  });

  UserSchema.pre("save", async function (next) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  });

  User = model("user", UserSchema);
}

export { User };
