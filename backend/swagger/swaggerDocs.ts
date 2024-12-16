const swaggerDefinition = {
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
    {
      url: 'https://your-production-domain.com',
      description: 'Production server',
    },
  ],
  components: {
    schemas: {
      ConversionRequest: {
        type: 'object',
        required: ['input', 'inputUnit', 'targetUnit', 'studentResponse'],
        properties: {
          input: { type: 'number', description: 'Input value to convert' },
          inputUnit: {
            type: 'string',
            description: 'Input unit',
            example: 'Fahrenheit',
          },
          targetUnit: {
            type: 'string',
            description: 'Target unit',
            example: 'Rankine',
          },
          studentResponse: {
            type: 'number',
            description: "Student's response",
            example: 543.94,
          },
        },
      },
      ValidationResult: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            description: 'Validation result (correct/incorrect/invalid)',
          },
          authoritativeAnswer: {
            type: 'number',
            description: 'Authoritative answer',
          },
          explanation: {
            type: 'string',
            description: 'Explanation of the result',
          },
        },
      },
    },
  },
  paths: {
    '/api/convert': {
      post: {
        summary: "Validate a student's unit conversion response",
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ConversionRequest' },
            },
          },
        },
        responses: {
          200: {
            description: 'Validation result',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ValidationResult' },
              },
            },
          },
          400: {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { error: { type: 'string' } },
                },
              },
            },
          },
          500: { description: 'Internal server error' },
        },
      },
    },
  },
};

export default swaggerDefinition;
