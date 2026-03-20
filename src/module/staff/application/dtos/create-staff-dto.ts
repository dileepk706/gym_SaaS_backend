import { z } from 'zod';

export const createStaffSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.email('Invalid email address').optional(),
  phone: z.string().min(10, 'Phone must be at least 10 characters').optional(),
  check_in_code: z.number().optional(),
  role_id: z.uuid('Invalid role id'),
});

export type CreateStaffDto = z.infer<typeof createStaffSchema>;

export type StaffDto = CreateStaffDto & {
  tenant_id: string;
  gym_id: string;
  user_id: string;
};
