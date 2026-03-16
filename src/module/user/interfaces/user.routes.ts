import { Router } from 'express';
import { container } from '@/config/container.js';
import IUserController from '@/module/user/domain/interfaces/user.controller.interface.js';
import asyncHandler from '@/shared/middleware/async_handler.js';

const userRouter = Router();

const getController = () => container.resolve<IUserController>('IUserController');

userRouter.get('/', asyncHandler(getController().createUser));

export default userRouter;
