import { DependencyContainer } from 'tsyringe';

import GymController from '@/module/gym/interfaces/gym.controller.js';
import GymService from '@/module/gym/application/services/gym.services.js';
import GymRepositoryImpl from '@/module/gym/infrastructure/repository/gym.repository.js';

const registerGymModule = (container: DependencyContainer) => {
  container.registerSingleton('IGymController', GymController);
  container.registerSingleton('IGymService', GymService);
  container.registerSingleton('IGymRepositoryImpl', GymRepositoryImpl);
};

export default registerGymModule;
