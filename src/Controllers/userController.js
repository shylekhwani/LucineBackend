import { createUser, loginUser } from "../Service/userService.js";

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

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });

    res.status(200).json({
      message: "Login successful",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};