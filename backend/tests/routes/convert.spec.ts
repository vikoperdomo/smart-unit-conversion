import request from 'supertest';
import app from '../../src/app';
import * as conversionService from '../../src/services/conversionService';

describe('POST /api/convert', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Valid temperature conversion', async () => {
    const response = await request(app).post('/api/convert').send({
      input: 84.2,
      inputUnit: 'Fahrenheit',
      targetUnit: 'Rankine',
      studentResponse: 543.94,
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('correct');
    expect(response.body.authoritativeAnswer).toBeCloseTo(543.87, 2);
    expect(response.body.explanation).toBe(
      'The student response matches the authoritative answer.',
    );
  });

  test('Invalid input unit', async () => {
    const response = await request(app).post('/api/convert').send({
      input: 100,
      inputUnit: 'dog',
      targetUnit: 'Celsius',
      studentResponse: 45.32,
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid input or target unit');
  });

  test('Unexpected server error', async () => {
    jest
      .spyOn(conversionService, 'validateConversion')
      .mockImplementation(() => {
        throw new Error('Unexpected error');
      });

    const response = await request(app).post('/api/convert').send({
      input: 100,
      inputUnit: 'Celsius',
      targetUnit: 'Fahrenheit',
      studentResponse: 212,
    });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Unexpected error occurred');
  });
});
