import { createSoftware } from "../Service/softwareService.js";

export const handleCreateSoftware = async (req, res) => {
  try {
    const userRole = req.user.role; // assuming role is attached to req.user by auth middleware
    const software = await createSoftware(req.body, userRole);

    res.status(201).json({
      message: "Software created successfully",
      data: software,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Failed to create software",
    });
  }
};
