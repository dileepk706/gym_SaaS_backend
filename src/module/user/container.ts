import UserController from '@/module/user/interfaces/user.controller.js';
import { DependencyContainer } from 'tsyringe';

export default function registerUserModule(container: DependencyContainer) {
  container.registerSingleton('IUserController', UserController);
}
