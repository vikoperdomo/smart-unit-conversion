import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

/**
 * Middleware to log incoming HTTP requests.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @param next - The next middleware function in the stack.
 */
export function log(req: Request, res: Response, next: NextFunction): void {
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    logger.info(
      `[HTTP] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`,
    );
  });

  next();
}

/**
 * Middleware to handle errors globally in the application.
 *
 * @param err - The error object.
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @param next - The next middleware function in the stack.
 */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const stack = process.env.NODE_ENV === 'production' ? null : err.stack;
  logger.error(`[Error] ${err.message}`, { stack });
  res.status(500).json({ error: 'Something went wrong!', details: stack });
}
