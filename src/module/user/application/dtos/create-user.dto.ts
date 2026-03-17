import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must be less than 255 characters'),
  email: z.string().min(1, 'Email is required').max(255, 'Email must be less than 255 characters'),
  password: z.string().min(1, 'Password is required'),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
