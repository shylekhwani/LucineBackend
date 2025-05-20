import express from "express";
import { handleCreateSoftware } from "../../Controllers/softwareController.js";
import { isAdmin, isAuthenticated } from "../../Middlewares/authValidation.js";


const softwareRouter = express.Router();

softwareRouter.post("/create", isAuthenticated, isAdmin, handleCreateSoftware);

export default softwareRouter;
