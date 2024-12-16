export const UNITS = {
  TEMPERATURE: ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'] as const,
  VOLUME: [
    'liters',
    'tablespoons',
    'cubic-inches',
    'cups',
    'cubic-feet',
    'gallons',
  ] as const,
};

export const MESSAGES = {
  INVALID_CONVERSION: (from: string, to: string) =>
    `Unsupported conversion from ${from} to ${to}`,
  INVALID_UNIT: (unit: string) => `Invalid unit: ${unit}`,
};
