import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
    UnitConversionRequest,
    UnitConversionResponse
} from '../common/models/unit-conversion.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:3000/api';

    /**
     * Constructor for ApiService.
     * @param http - HttpClient to handle HTTP requests.
     */
    constructor(private http: HttpClient) {}

    /**
     * Sends a POST request to convert units based on the input data.
     * @param data - The data containing input value, input unit, target unit, and student response.
     * @returns An Observable of the UnitConversionResponse.
     */
    convertUnits(data: UnitConversionRequest): Observable<UnitConversionResponse> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        if (!data || !data.inputUnit || !data.targetUnit) {
            throw new Error('Invalid data');
        }
        return this.http.post<UnitConversionResponse>(`${this.baseUrl}/convert`, data, { headers });
    }
}
