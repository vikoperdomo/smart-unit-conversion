export type TemperatureUnit = 'Kelvin' | 'Celsius' | 'Fahrenheit' | 'Rankine';
export type VolumeUnit =
  | 'liters'
  | 'tablespoons'
  | 'cubic-inches'
  | 'cups'
  | 'cubic-feet'
  | 'gallons';

export interface ConversionRequest {
  input: number;
  inputUnit: TemperatureUnit | VolumeUnit;
  targetUnit: TemperatureUnit | VolumeUnit;
  studentResponse: number;
}

export interface ValidationResult {
  status: 'correct' | 'incorrect' | 'invalid';
  authoritativeAnswer?: number;
  explanation: string;
}
