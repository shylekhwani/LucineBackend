import { createUser } from "../Service/userService.js";

export const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Failed to register user",
    });
  }
};
