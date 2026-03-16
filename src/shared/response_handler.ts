import { Response } from 'express';

export const responseHandler = (res: Response, data: any, message: string, statusCode: number) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
