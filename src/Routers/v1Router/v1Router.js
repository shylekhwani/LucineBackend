import express from 'express';
import userRouter from './userRouter.js';
import softwareRouter from './softwareRouter.js';


const v1Router = express.Router();

v1Router.use('/users', userRouter);

v1Router.use('/softwares', softwareRouter);

export default v1Router;