import { Request, Response } from 'express';

export default interface IGymController {
  getGymById: (req: Request, res: Response) => void;
}
