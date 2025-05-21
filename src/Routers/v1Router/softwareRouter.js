import express from "express";
import { handleCreateSoftware, getAllSoftwareController } from "../../Controllers/softwareController.js";
import { isAdmin, isAuthenticated } from "../../Middlewares/authValidation.js";


const softwareRouter = express.Router();

softwareRouter.post("/create", isAuthenticated, isAdmin, handleCreateSoftware);

softwareRouter.get('/', getAllSoftwareController);

export default softwareRouter;
