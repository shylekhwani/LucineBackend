import { createSoftware, getAllSoftwareService } from "../Service/softwareService.js";

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

export const getAllSoftwareController = async (req, res) => {
  try {
    const softwares = await getAllSoftwareService();
    res.status(200).json({
      success: true,
      data: softwares,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch software list',
      error: error.message,
    });
  }
};
