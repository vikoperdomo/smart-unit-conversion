import logger from '../../src/utils/logger';
import { transports } from 'winston';

describe('Logger Utility', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest
      .spyOn(transports.Console.prototype, 'log')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Logs a message without a stack trace', () => {
    const message = 'This is an info message';

    logger.info(message);

    expect(consoleSpy).toHaveBeenCalledTimes(1);

    const logCall = consoleSpy.mock.calls[0][0];

    expect(logCall).toContain('[INFO]: This is an info message');
  });

  test('Logs a message with a stack trace', () => {
    const error = new Error('This is an error');

    logger.error(error.message, { stack: error.stack });

    expect(consoleSpy).toHaveBeenCalledTimes(1);

    const logCall = consoleSpy.mock.calls[0][0];

    expect(logCall).toContain('[ERROR]: This is an error');
    expect(logCall).toContain(error.stack);
  });
});
