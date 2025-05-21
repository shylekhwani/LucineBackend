import express from 'express'

import { registerUser, loginController } from '../../Controllers/userController.js';



const userRouter = express.Router();

userRouter.post('/register', registerUser);

userRouter.post('/login', loginController);


export default userRouter;