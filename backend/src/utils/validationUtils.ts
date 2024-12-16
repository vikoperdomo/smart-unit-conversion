import { UNITS } from '../constants';
import { TemperatureUnit, VolumeUnit } from '../types/conversion';

/**
 * Validates if a unit is a valid temperature unit.
 *
 * @param unit - The unit to validate.
 * @returns Boolean indicating validity.
 */
export function isValidTemperatureUnit(unit: string): unit is TemperatureUnit {
  return UNITS.TEMPERATURE.includes(unit as TemperatureUnit);
}

/**
 * Validates if a unit is a valid volume unit.
 *
 * @param unit - The unit to validate.
 * @returns Boolean indicating validity.
 */
export function isValidVolumeUnit(unit: string): unit is VolumeUnit {
  return UNITS.VOLUME.includes(unit as VolumeUnit);
}
