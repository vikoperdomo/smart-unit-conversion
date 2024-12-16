import { Request, Response } from 'express';
import { errorHandler } from '../../src/middleware/logger';
import logger from '../../src/utils/logger';

jest.mock('../../src/utils/logger');

describe('Middleware - errorHandler', () => {
  test('Handles errors in production', () => {
    const req = {} as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
    const next = jest.fn();

    process.env.NODE_ENV = 'production';

    const error = new Error('Test error');
    errorHandler(error, req, res, next);

    expect(logger.error).toHaveBeenCalledWith('[Error] Test error', {
      stack: null,
    });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Something went wrong!',
      details: null,
    });
  });

  test('Handles errors in development', () => {
    const req = {} as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;
    const next = jest.fn();

    process.env.NODE_ENV = 'development';

    const error = new Error('Test error');
    errorHandler(error, req, res, next);

    expect(logger.error).toHaveBeenCalledWith('[Error] Test error', {
      stack: error.stack,
    });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Something went wrong!',
      details: error.stack,
    });
  });
});
