import { CreateUserDto } from '@/module/user/application/dtos/create-user.dto.js';
import UserEntity from '@/module/user/domain/entites/user.entity.js';
import IUserRepository from '@/module/user/domain/interfaces/user.repository.inteface.js';
import { inject, injectable } from 'tsyringe';

@injectable()
class UserService {
  constructor(@inject('IUserRepository') private readonly userRepository: IUserRepository) {}

  createUser = async (user: CreateUserDto): Promise<UserEntity> => {
    return this.userRepository.createUser(user);
  };

  getAllUsers = async (): Promise<UserEntity[]> => {
    return this.userRepository.getAllUsers();
  };
}

export default UserService;
