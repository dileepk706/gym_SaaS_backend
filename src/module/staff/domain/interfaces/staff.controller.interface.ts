import { Request, Response } from 'express';

interface IStaffController {
  createStaffUser(req: Request, res: Response): Promise<any>;
}

export default IStaffController;
