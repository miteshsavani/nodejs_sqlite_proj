import express from "express";
import * as userController from '../controller/user.js';
const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
    console.log(`The ${req.method} request on ${req.baseUrl}`);
    next();
})

userRoutes.get('/', userController.getAllUsers);
userRoutes.post('/', userController.createUser);
userRoutes.get('/:id', userController.getUser);
userRoutes.patch('/:id', userController.updateUserInfo);
userRoutes.delete('/:id', userController.deleteUser);


export default userRoutes;