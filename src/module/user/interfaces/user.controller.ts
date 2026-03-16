import IUserController from '@/module/user/domain/interfaces/user.controller.interface.js';
import { ApiError } from '@/shared/middleware/error_handler.js';
import { NextFunction, Request, Response } from 'express';

export default class UserController implements IUserController {
  constructor() {}

  async createUser(req: Request, res: Response, next: NextFunction) {
    throw new ApiError('User created successfully', 352, false);
  }
}

// service & I ,
// repository & I,
// test errors
