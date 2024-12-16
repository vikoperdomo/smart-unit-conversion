import { convertTemperature } from '../../src/utils/temperatureUtils';

describe('convertTemperature', () => {
  test('Convert Celsius to Kelvin', () => {
    const result = convertTemperature(100, 'Celsius', 'Kelvin');
    expect(result).toBeCloseTo(373.15, 2);
  });

  test('Convert Fahrenheit to Rankine', () => {
    const result = convertTemperature(84.2, 'Fahrenheit', 'Rankine');
    expect(result).toBeCloseTo(543.87, 2);
  });

  test('Convert Rankine to Kelvin', () => {
    const result = convertTemperature(543.87, 'Rankine', 'Kelvin');
    expect(result).toBeCloseTo(302.15, 2);
  });

  test('Same unit conversion (Celsius to Celsius)', () => {
    const result = convertTemperature(25, 'Celsius', 'Celsius');
    expect(result).toBe(25);
  });

  test('Invalid fromUnit', () => {
    expect(() =>
      convertTemperature(100, 'invalidUnit' as any, 'Celsius'),
    ).toThrow('Invalid unit: invalidUnit');
  });

  test('Invalid toUnit', () => {
    expect(() =>
      convertTemperature(100, 'Kelvin', 'invalidUnit' as any),
    ).toThrow('Invalid unit: invalidUnit');
  });

  test('Convert Kelvin to Celsius', () => {
    const result = convertTemperature(373.15, 'Kelvin', 'Celsius');
    expect(result).toBeCloseTo(100, 2);
  });

  test('Convert Kelvin to Fahrenheit', () => {
    const result = convertTemperature(373.15, 'Kelvin', 'Fahrenheit');
    expect(result).toBeCloseTo(212, 2);
  });
});
