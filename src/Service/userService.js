import bcrypt from "bcryptjs";
import userRepository from "../Repository/userRepository.js";

export const createUser = async (userData) => {
  const { username, password, role } = userData;

  // Use your custom repo method
  const existingUser = await userRepository.findUserByUsername(username);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    username,
    password: hashedPassword,
    role: role || "Employee",
  };

  return await userRepository.createUser(newUser);
};
