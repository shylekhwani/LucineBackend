import express from "express";

import { isAuthenticated } from "../../Middlewares/authValidation.js";
import { createRequestController, getAllController, getByIdController, updateStatusController } from "../../Controllers/requestController.js";

const requestRouter = express.Router();

requestRouter.post("/create", isAuthenticated, createRequestController);
requestRouter.get("/", isAuthenticated, getAllController);
requestRouter.get("/:id", isAuthenticated, getByIdController);
requestRouter.patch("/:id/status", isAuthenticated, updateStatusController);

export default requestRouter;
