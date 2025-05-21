import express from 'express';
import userRouter from './userRouter.js';
import softwareRouter from './softwareRouter.js';
import requestRouter from './requestRouter.js';


const v1Router = express.Router();

v1Router.use('/users', userRouter);

v1Router.use('/softwares', softwareRouter);

v1Router.use('/requests', requestRouter);

export default v1Router;