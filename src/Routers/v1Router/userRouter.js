import express from 'express'

import { registerUser, loginController } from '../../Controllers/userController.js';



const userRouter = express.Router();

// userRouter.get('/profile', getAllProfile);

userRouter.post('/register', registerUser);

userRouter.post('/login', loginController);

// userRouter.delete('/:id', isAuthenticated, deleteUser);

// // userRouter.post('/forgot-password', passwordResetController); // Handles the request for generating a reset token

// // userRouter.post('/reset-password', confirmPasswordResetController ); // Handles the actual password reset process

export default userRouter;