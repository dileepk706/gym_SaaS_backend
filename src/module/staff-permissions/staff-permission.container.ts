import StaffPermissionRepository, {
  IStaffPermissionRepository,
} from '@/module/staff-permissions/staff-permission.repository.js';
import StaffPermissionService, {
  IStaffPermissionService,
} from '@/module/staff-permissions/staff-permission.service.js';
import { DependencyContainer } from 'tsyringe';

export default function registerStaffPermissionModule(container: DependencyContainer) {
  container.registerSingleton<IStaffPermissionRepository>(
    'IStaffPermissionRepository',
    StaffPermissionRepository,
  );
  container.registerSingleton<IStaffPermissionService>(
    'IStaffPermissionService',
    StaffPermissionService,
  );
}
