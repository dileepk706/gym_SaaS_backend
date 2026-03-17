import IUserController from '@/module/user/domain/interfaces/user.controller.interface.js';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IUserService from '@/module/user/domain/interfaces/user.services.interface.js';
import { responseHandler } from '@/shared/response_handler.js';
import { CreateUserDto } from '@/module/user/application/dtos/create-user.dto.js';

@injectable()
class UserController implements IUserController {
  constructor(@inject('IUserServices') private readonly userService: IUserService) {}

  createUser = async (req: Request, res: Response) => {
    const user: CreateUserDto = {
      name: req.query.name as string,
      email: req.query.email as string,
      password: req.query.password as string,
    };
    const result = await this.userService.createUser(user);
    return responseHandler(res, result, 'User created successfully', 201);
  };

  getAllUsers = async (req: Request, res: Response) => {
    const result = await this.userService.getAllUsers();
    return responseHandler(res, result, 'Users fetched successfully', 200);
  };
}

export default UserController;

// service & I ,
// test errors
// create user entity
// create user dto
