import 'reflect-metadata';
import { container } from 'tsyringe';
import registerGymModule from '@/module/gym/gym.container.js';

const registerDependencies = () => {
  registerGymModule(container);
};

export default registerDependencies;
export { container };
