import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userRepository from "../Repository/userRepository.js";

export const createUser = async (userData) => {
  const {username, email, password, role } = userData;

  // Use your custom repo method
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    username,
    email,
    password: hashedPassword,
    role: role || "Employee",
  };

  return await userRepository.createUser(newUser);
};

export const loginUser = async ({ email, password }) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { token, user };
};