import { inject, injectable } from 'tsyringe';
import IStaffService from '@/module/staff/domain/interfaces/staff.service.interface.js';
import { StaffDto } from '@/module/staff/application/dtos/create-staff-dto.js';
import IStaffFcade from '@/module/staff/domain/interfaces/staff.fcade.interface.js';

@injectable()
class StaffFcade implements IStaffFcade {
  constructor(@inject('IStaffService') private readonly staffService: IStaffService) {}

  createStaffUser = async (staff: StaffDto): Promise<any> => {
    // create user
    // create staff
    // create staff permission
    // if staff deletes permisions also delated
    // if any permision deleted , delete the record from staff table

    const result = await this.staffService.create(staff);

    return result;
  };
}

export default StaffFcade;
