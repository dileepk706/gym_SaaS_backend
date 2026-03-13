import { injectable } from 'tsyringe';

import IGymRepositoryImpl from '@/module/gym/domain/interfaces/gym.repository.interface.js';
import GymEntitie from '@/module/gym/domain/entities/gym.entity.js';

@injectable()
class GymRepositoryImpl implements IGymRepositoryImpl {
  constructor() {}
  public async getGymById(id: number) {
    const gym: GymEntitie = {
      email: 'this.email',
      name: 'this.name',
      id,
    };
    return gym;
  }
}

export default GymRepositoryImpl;
