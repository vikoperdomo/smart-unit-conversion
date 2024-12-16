import { createLogger, format, transports } from 'winston';

/**
 * Centralized logger utility using Winston.
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp, stack }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}${stack ? `\n${stack}` : ''}`;
    }),
  ),
  transports: [new transports.Console()],
});

export default logger;
