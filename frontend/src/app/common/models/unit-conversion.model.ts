export interface UnitConversionRequest {
    input?: number;
    inputUnit: string;
    targetUnit: string;
    studentResponse?: number;
}

export interface UnitConversionResponse {
    status: 'correct' | 'incorrect' | 'invalid';
    authoritativeAnswer: number;
    explanation: string;
}
