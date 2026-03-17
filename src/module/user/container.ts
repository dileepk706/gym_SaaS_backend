import UserController from '@/module/user/interfaces/user.controller.js';
import { DependencyContainer } from 'tsyringe';
import UserRepository from '@/module/user/infrastructure/repository/user.respository.js';
import UserService from '@/module/user/application/services/user.services.js';

export default function registerUserModule(container: DependencyContainer) {
  container.registerSingleton('IUserController', UserController);
  container.registerSingleton('IUserRepository', UserRepository);
  container.registerSingleton('IUserServices', UserService);
}
