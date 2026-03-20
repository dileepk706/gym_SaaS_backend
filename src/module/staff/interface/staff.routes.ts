import { Router } from 'express';
import { container } from '@/config/container.js';
import type { ModuleRouteConfig } from '@/routes/route.types.js';
import IStaffFcade from '@/module/staff/domain/interfaces/staff.controller.interface.js';
import asyncHandler from '@/shared/middleware/async_handler.js';
import { processRequestBody } from '@/shared/middleware/validation.js';
import { createStaffSchema } from '@/module/staff/application/dtos/create-staff-dto.js';

const staffRoutes = Router();

const getController = () => container.resolve<IStaffFcade>('IStaffController');

staffRoutes.post(
  '/',
  processRequestBody(createStaffSchema),
  asyncHandler(getController().createStaffUser),
);

export const staffRouteConfig: ModuleRouteConfig = {
  basePath: '/staff',
  router: staffRoutes,
  group: 'protected',
};
