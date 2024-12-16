import { convertVolume } from '../../src/utils/volumeUtils';

describe('convertVolume', () => {
  test('Convert liters to gallons', () => {
    const result = convertVolume(10, 'liters', 'gallons');
    expect(result).toBeCloseTo(2.64172, 5);
  });

  test('Convert tablespoons to cubic-inches', () => {
    const result = convertVolume(50, 'tablespoons', 'cubic-inches');
    expect(result).toBeCloseTo(45.117, 3);
  });

  test('Unsupported fromUnit', () => {
    expect(() => convertVolume(10, 'invalidUnit' as any, 'liters')).toThrow(
      'Unsupported conversion from invalidUnit',
    );
  });

  test('Unsupported toUnit', () => {
    expect(() => convertVolume(10, 'liters', 'invalidUnit' as any)).toThrow(
      'Unsupported conversion to invalidUnit',
    );
  });

  test('Same unit conversion (liters to liters)', () => {
    const result = convertVolume(10, 'liters', 'liters');
    expect(result).toBe(10);
  });
});
