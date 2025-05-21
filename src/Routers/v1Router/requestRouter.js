import express from "express";

import { isAuthenticated, isManager } from "../../Middlewares/authValidation.js";
import { createRequestController, getAllController, getByIdController, updateStatusController } from "../../Controllers/requestController.js";

const requestRouter = express.Router();

requestRouter.post("/create", isAuthenticated, createRequestController);
requestRouter.get("/", isAuthenticated, getAllController);
requestRouter.get("/:id", isAuthenticated, getByIdController);
requestRouter.patch("/:id/status", isAuthenticated, isManager, updateStatusController);

export default requestRouter;
