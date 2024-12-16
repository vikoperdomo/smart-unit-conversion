import { MESSAGES } from '../constants'; // Add this import
import { convertTemperature } from '../utils/temperatureUtils';
import { convertVolume } from '../utils/volumeUtils';
import {
  isValidTemperatureUnit,
  isValidVolumeUnit,
} from '../utils/validationUtils';
import { ConversionRequest, ValidationResult } from '../types/conversion';

/**
 * Validates a student's unit conversion response.
 *
 * @param request - The conversion request object containing input, input unit, target unit, and student response.
 * @returns ValidationResult object containing the status, authoritative answer, and explanation.
 */
export function validateConversion(
  request: ConversionRequest,
): ValidationResult {
  const { input, inputUnit, targetUnit, studentResponse } = request;

  const isTemperature =
    isValidTemperatureUnit(inputUnit) && isValidTemperatureUnit(targetUnit);
  const isVolume =
    isValidVolumeUnit(inputUnit) && isValidVolumeUnit(targetUnit);

  if (!isTemperature && !isVolume) {
    throw new Error('Invalid input or target unit');
  }

  const authoritativeAnswer = isTemperature
    ? convertTemperature(input, inputUnit, targetUnit)
    : convertVolume(input, inputUnit, targetUnit);

  const roundedAnswer = Math.round(authoritativeAnswer * 10) / 10;
  const roundedStudentResponse = Math.round(studentResponse * 10) / 10;

  return roundedAnswer === roundedStudentResponse
    ? {
        status: 'correct',
        authoritativeAnswer,
        explanation: 'The student response matches the authoritative answer.',
      }
    : {
        status: 'incorrect',
        authoritativeAnswer,
        explanation:
          'The student response does not match the authoritative answer.',
      };
}
