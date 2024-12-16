const VOLUME_CONVERSION: Record<string, number> = {
  liters: 1,
  tablespoons: 67.628,
  'cubic-inches': 61.0237,
  cups: 4.22675,
  'cubic-feet': 0.0353147,
  gallons: 0.264172,
};

export function convertVolume(
  input: number,
  fromUnit: keyof typeof VOLUME_CONVERSION,
  toUnit: keyof typeof VOLUME_CONVERSION,
): number {
  if (!(fromUnit in VOLUME_CONVERSION)) {
    throw new Error(`Unsupported conversion from ${fromUnit}`);
  }
  if (!(toUnit in VOLUME_CONVERSION)) {
    throw new Error(`Unsupported conversion to ${toUnit}`);
  }

  if (fromUnit === toUnit) return input;

  const inputInLiters = input / VOLUME_CONVERSION[fromUnit];
  return inputInLiters * VOLUME_CONVERSION[toUnit];
}
