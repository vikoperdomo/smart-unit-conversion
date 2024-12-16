import path from 'path';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Unit Conversion API',
      version: '1.0.0',
      description: 'API documentation for the Unit Conversion project',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: [path.join(__dirname, '../src/routes/*.ts')],
};

export default swaggerOptions;
