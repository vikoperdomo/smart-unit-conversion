import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from '../swagger/swaggerDocs';
import convertRoutes from './routes/convert';
import { log, errorHandler } from './middleware/logger';
import logger from './utils/logger';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'local'}` });

// Constants
const DEFAULT_PORT = 3000;

// Initialize the Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(log);

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
logger.info(
  `Swagger UI available at http://localhost:${process.env.PORT || DEFAULT_PORT}/api-docs`,
);

// Routes
app.use('/api', convertRoutes);

// Global Error Handler
app.use(errorHandler);

// Start the server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || DEFAULT_PORT;
  app.listen(PORT, () => {
    logger.info(`Backend running on http://localhost:${PORT}`);
  });
} else {
  logger.info('Running in test environment; server not started.');
}

export default app;
