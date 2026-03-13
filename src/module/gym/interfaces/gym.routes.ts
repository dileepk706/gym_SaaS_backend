import { Router } from 'express';
import { container } from '@/config/container.js';
import GymController from '@/module/gym/interfaces/gym.controller.js';

const gymRouter: Router = Router();

const getController = () => container.resolve<GymController>('IGymController');

gymRouter.get('/:id', (req, res) => getController().getGymById(req, res));

export default gymRouter;
