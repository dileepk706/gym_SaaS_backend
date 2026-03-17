import { Router } from 'express';
import { container } from '@/config/container.js';
import GymController from '@/module/gym/interfaces/gym.controller.js';
import type { ModuleRouteConfig } from '@/routes/route.types.js';

const gymRouter: Router = Router();

const getController = () => container.resolve<GymController>('IGymController');

gymRouter.get('/:id', (req, res) => getController().getGymById(req, res));

/**
 * Gym module route configuration.
 *
 * Group: 'protected' — all gym routes require authentication.
 * The auth middleware is applied automatically by the central router.
 */
export const gymRouteConfig: ModuleRouteConfig = {
  basePath: '/gym',
  router: gymRouter,
  group: 'protected',
};

export default gymRouter;
