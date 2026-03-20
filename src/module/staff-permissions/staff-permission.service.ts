import { injectable } from 'tsyringe';

export interface IStaffPermissionService {
  createStaffPermission(data: any): Promise<any>;
}

@injectable()
class StaffPermissionService implements IStaffPermissionService {
  createStaffPermission = async (data: any): Promise<any> => {
    return data;
  };
}

export default StaffPermissionService;
