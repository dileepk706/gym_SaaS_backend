import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import IGymController from '@/module/gym/domain/interfaces/gym.controller.interface.js';
import { IGymService } from '@/module/gym/domain/interfaces/gym.service.interface.js';

@injectable()
class GymController implements IGymController {
  constructor(@inject('IGymService') private readonly gymService: IGymService) {}

  async getGymById(req: Request, res: Response): Promise<void> {
    const gym = await this.gymService.getGymById(parseInt(req.params.id as string));

    res.status(200).json({
      success: true,
      data: gym,
    });
  }
}

export default GymController;
