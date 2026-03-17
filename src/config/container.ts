import { container } from 'tsyringe';
import registerGymModule from '@/module/gym/gym.container.js';
import registerUserModule from '@/module/user/container.js';
import pool from '@/database/connection.js';
import { Pool } from 'pg';

const registerDependencies = () => {
  container.registerInstance(Pool, pool);
  registerGymModule(container);
  registerUserModule(container);
};

export default registerDependencies;
export { container };
