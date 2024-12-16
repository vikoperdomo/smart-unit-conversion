import { MESSAGES } from '../constants';

/**
 * Converts a temperature value from one unit to another.
 *
 * @param input - The temperature value to be converted.
 * @param fromUnit - The unit of the input value.
 * @param toUnit - The target unit for conversion.
 * @returns The converted temperature value.
 */
export function convertTemperature(
  input: number,
  fromUnit: 'Kelvin' | 'Celsius' | 'Fahrenheit' | 'Rankine',
  toUnit: 'Kelvin' | 'Celsius' | 'Fahrenheit' | 'Rankine',
): number {
  if (fromUnit === toUnit) return input;

  let inKelvin: number;
  switch (fromUnit) {
    case 'Celsius':
      inKelvin = input + 273.15;
      break;
    case 'Fahrenheit':
      inKelvin = (input + 459.67) * (5 / 9);
      break;
    case 'Rankine':
      inKelvin = input * (5 / 9);
      break;
    case 'Kelvin':
      inKelvin = input;
      break;
    default:
      throw new Error(MESSAGES.INVALID_UNIT(fromUnit));
  }

  switch (toUnit) {
    case 'Celsius':
      return inKelvin - 273.15;
    case 'Fahrenheit':
      return inKelvin * (9 / 5) - 459.67;
    case 'Rankine':
      return inKelvin * (9 / 5);
    case 'Kelvin':
      return inKelvin;
    default:
      throw new Error(MESSAGES.INVALID_UNIT(toUnit));
  }
}
