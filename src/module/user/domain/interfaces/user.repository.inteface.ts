import { CreateUserDto } from '@/module/user/application/dtos/create-user.dto.js';
import UserEntity from '@/module/user/domain/entites/user.entity.js';

export default interface IUserRepository {
  createUser(user: CreateUserDto): Promise<UserEntity>;
  getAllUsers(): Promise<UserEntity[]>;
}
