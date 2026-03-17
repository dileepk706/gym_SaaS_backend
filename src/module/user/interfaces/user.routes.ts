import { Router } from 'express';
import { container } from '@/config/container.js';
import IUserController from '@/module/user/domain/interfaces/user.controller.interface.js';
import asyncHandler from '@/shared/middleware/async_handler.js';
import { createUserSchema } from '@/module/user/application/dtos/create-user.dto.js';
import { processRequestBody } from '@/shared/middleware/validation.js';
import type { ModuleRouteConfig } from '@/routes/route.types.js';

const userRouter = Router();

const getController = () => container.resolve<IUserController>('IUserController');

userRouter.post(
  '/',
  processRequestBody(createUserSchema),
  asyncHandler(getController().createUser),
);

userRouter.get('/', asyncHandler(getController().getAllUsers));

export const userRouteConfig: ModuleRouteConfig = {
  basePath: '/user',
  router: userRouter,
  group: 'public',
};

export default userRouter;
