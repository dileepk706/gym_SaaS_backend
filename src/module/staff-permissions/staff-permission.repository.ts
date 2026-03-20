import { injectable } from 'tsyringe';

export interface IStaffPermissionRepository {
  createStaffPermission(data: any): Promise<any>;
}

@injectable()
class StaffPermissionRepository implements IStaffPermissionRepository {
  createStaffPermission = async (data: any): Promise<any> => {
    return data;
  };
}

export default StaffPermissionRepository;
