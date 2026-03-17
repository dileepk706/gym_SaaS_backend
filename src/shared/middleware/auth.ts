import type { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

/**
 * Authentication middleware — validates JWT / session tokens.
 *
 * TODO: Replace the stub implementation with real JWT verification
 *       (e.g. using `jsonwebtoken` or an OAuth provider SDK).
 */
export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: 'Authentication required. Please provide a valid token.',
    });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    // TODO: Replace with real JWT verification
    // const decoded = jwt.verify(token, env.JWT_SECRET);
    // req.user = decoded;

    if (!token) {
      throw new Error('Invalid token');
    }

    next();
  } catch {
    res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: 'Invalid or expired token.',
    });
  }
};

/**
 * Admin authorization middleware — must be applied AFTER `authenticate`.
 *
 * Checks that the authenticated user has admin-level privileges.
 *
 * TODO: Implement real role checking once the user model supports roles.
 */
export const authorizeAdmin = (req: Request, _res: Response, next: NextFunction): void => {
  // TODO: Replace with real role checking
  // if (req.user?.role !== 'admin') {
  //   return res.status(httpStatus.FORBIDDEN).json({
  //     success: false,
  //     message: 'Admin access required.',
  //   });
  // }

  next();
};
