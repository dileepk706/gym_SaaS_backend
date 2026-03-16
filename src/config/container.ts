import 'reflect-metadata';
import { container } from 'tsyringe';
import registerGymModule from '@/module/gym/gym.container.js';
import registerUserModule from '@/module/user/container.js';

const registerDependencies = () => {
  registerGymModule(container);
  registerUserModule(container);
};

export default registerDependencies;
export { container };
