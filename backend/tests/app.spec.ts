import logger from '../src/utils/logger';

jest.mock('../src/utils/logger', () => ({
  info: jest.fn(),
  error: jest.fn(),
}));

describe('App', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it('should log the correct message in the test environment', () => {
    process.env.NODE_ENV = 'test';
    require('../src/app');

    expect(logger.info).toHaveBeenCalledWith(
      'Running in test environment; server not started.',
    );
  });

  it('should log the correct message when not in test environment', (done) => {
    process.env.NODE_ENV = 'development';
    const app = require('../src/app');
    const PORT = 3000;

    const server = app.listen(PORT, () => {
      try {
        expect(logger.info).toHaveBeenCalledWith(
          `Backend running on http://localhost:${PORT}`,
        );
        done();
      } catch (err) {
        done(err);
      } finally {
        server.close();
      }
    });
  });
});
