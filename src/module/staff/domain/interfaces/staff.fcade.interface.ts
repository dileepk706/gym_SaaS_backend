import { StaffDto } from '@/module/staff/application/dtos/create-staff-dto.js';

interface IStaffFcade {
  createStaffUser(staff: StaffDto): Promise<any>;
}

export default IStaffFcade;
