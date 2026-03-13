import GymEntitie from '@/module/gym/domain/entities/gym.entity.js';

export default interface IGymRepositoryImpl {
  getGymById: (id: number) => Promise<GymEntitie | null>;
}
