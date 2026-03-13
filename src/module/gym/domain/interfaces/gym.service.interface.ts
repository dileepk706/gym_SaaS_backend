import GymEntitie from '@/module/gym/domain/entities/gym.entity.js';

export interface IGymService {
  getGymById(id: number): Promise<GymEntitie | null>;
}
