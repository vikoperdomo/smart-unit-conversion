import { validateConversion } from '../../src/services/conversionService';
import * as temperatureUtils from '../../src/utils/temperatureUtils';
import * as volumeUtils from '../../src/utils/volumeUtils';

describe('validateConversion', () => {
  test('Valid temperature conversion', () => {
    const mockConvertTemperature = jest
      .spyOn(temperatureUtils, 'convertTemperature')
      .mockReturnValue(310.93);

    const result = validateConversion({
      input: 100,
      inputUnit: 'Celsius',
      targetUnit: 'Kelvin',
      studentResponse: 310.9,
    });

    expect(result.status).toBe('correct');
    expect(result.authoritativeAnswer).toBeCloseTo(310.93, 2);
    expect(result.explanation).toBe(
      'The student response matches the authoritative answer.',
    );
    expect(mockConvertTemperature).toHaveBeenCalledWith(
      100,
      'Celsius',
      'Kelvin',
    );
  });

  test('Valid volume conversion', () => {
    const mockConvertVolume = jest
      .spyOn(volumeUtils, 'convertVolume')
      .mockReturnValue(3.785);

    const result = validateConversion({
      input: 1,
      inputUnit: 'gallons',
      targetUnit: 'liters',
      studentResponse: 3.8,
    });

    expect(result.status).toBe('correct');
    expect(result.authoritativeAnswer).toBeCloseTo(3.785, 2);
    expect(result.explanation).toBe(
      'The student response matches the authoritative answer.',
    );
    expect(mockConvertVolume).toHaveBeenCalledWith(1, 'gallons', 'liters');
  });

  test('Invalid input and target units', () => {
    expect(() =>
      validateConversion({
        input: 100,
        inputUnit: 'invalidUnit' as any,
        targetUnit: 'invalidUnit' as any,
        studentResponse: 123,
      }),
    ).toThrow('Invalid input or target unit');
  });

  test('Incorrect volume conversion', () => {
    const mockConvertVolume = jest
      .spyOn(volumeUtils, 'convertVolume')
      .mockReturnValue(3.785);

    const result = validateConversion({
      input: 1,
      inputUnit: 'gallons',
      targetUnit: 'liters',
      studentResponse: 4.0,
    });

    expect(result.status).toBe('incorrect');
    expect(result.authoritativeAnswer).toBeCloseTo(3.785, 2);
    expect(result.explanation).toBe(
      'The student response does not match the authoritative answer.',
    );
    expect(mockConvertVolume).toHaveBeenCalledWith(1, 'gallons', 'liters');
  });

  test('Incorrect temperature conversion', () => {
    const mockConvertTemperature = jest
      .spyOn(temperatureUtils, 'convertTemperature')
      .mockReturnValue(310.93);

    const result = validateConversion({
      input: 100,
      inputUnit: 'Celsius',
      targetUnit: 'Kelvin',
      studentResponse: 320.0,
    });

    expect(result.status).toBe('incorrect');
    expect(result.authoritativeAnswer).toBeCloseTo(310.93, 2);
    expect(result.explanation).toBe(
      'The student response does not match the authoritative answer.',
    );
    expect(mockConvertTemperature).toHaveBeenCalledWith(
      100,
      'Celsius',
      'Kelvin',
    );
  });
});
