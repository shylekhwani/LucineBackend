import { submitAccessRequest, getAllRequestsService, getRequestByIdService, updateRequestStatusService, getCurrentUserRequestsService } from "../Service/requestService.js";
import AppDataSource from "../Config/data-source.js";
import userSchema from "../Schema/userSchema.js";
import softwareSchema from "../Schema/softwareSchema.js";

export const createRequestController = async (req, res) => {
  try {
    const { softwareId, accessType, reason } = req.body;

    const userRepo = AppDataSource.getRepository(userSchema);
    const softwareRepo = AppDataSource.getRepository(softwareSchema);

    const user = await userRepo.findOneBy({ id: req.user.id });
    const software = await softwareRepo.findOneBy({ id: softwareId });

    if (!software) {
      return res.status(404).json({ success: false, message: "Software not found" });
    }

    const newRequest = await submitAccessRequest({ user, software, accessType, reason });

    res.status(201).json({ success: true, data: newRequest });
  } catch (err) {
    console.error("Request creation error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllController = async (req, res) => {
    try {
      const requests = await getAllRequestsService();
      res.json({ success: true, data: requests });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
};

export const getByIdController = async (req, res) => {
    try {
      const request = await getRequestByIdService(req.params.id);
      res.json({ success: true, data: request });
    } catch (err) {
      res.status(404).json({ success: false, message: err.message });
    }
};

export const updateStatusController = async (req, res) => {
    try {
      const { status } = req.body;
      const updated = await updateRequestStatusService(req.params.id, status);
      res.json({ success: true, data: updated });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
};

export const getCurrentRequestsController = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("User ID:", userId); // Debugging line
    const myRequests = await getCurrentUserRequestsService(userId);

    res.status(200).json({
      success: true,
      data: myRequests,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching user requests",
      error: err.message,
    });
  }
};