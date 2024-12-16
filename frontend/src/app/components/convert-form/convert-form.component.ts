import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../services/api.service';
import {
  UNITS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from '../../common/constants/unit-conversion.constants';
import { UnitConversionRequest } from '../../common/models/unit-conversion.model';

@Component({
  selector: 'app-convert-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './convert-form.component.html',
  styleUrls: ['./convert-form.component.scss'],
})
export class ConvertFormComponent {
  /**
   * Holds the form data for unit conversion.
   */
  formData: UnitConversionRequest = {
    input: undefined,
    inputUnit: '',
    targetUnit: '',
    studentResponse: undefined,
  };

  /**
   * Contains the available units for conversion.
   */
  units = UNITS;

  /**
   * Indicates whether the form is currently submitting data.
   */
  isLoading = false;

  /**
   * Constructor for ConvertFormComponent.
   * @param apiService - Service to handle API requests.
   * @param snackBar - Angular Material service to show notifications.
   */
  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {}

  /**
   * Validates the form data and sends the conversion request.
   * If validation fails, a snackbar notification is displayed.
   */
  onSubmit(): void {
    if (
      this.formData.input === undefined ||
      !this.formData.inputUnit ||
      !this.formData.targetUnit ||
      this.formData.studentResponse === undefined
    ) {
      this.showSnackbar(ERROR_MESSAGES.requiredFields, 'error');
      return;
    }

    this.isLoading = true;
    this.apiService.convertUnits(this.formData).subscribe(
      (response) => {
        this.isLoading = false;
        this.showSnackbar(
          `${SUCCESS_MESSAGES.conversionSuccess}: ${response.explanation}`,
          'success'
        );
      },
      (error) => {
        this.isLoading = false;
        this.showSnackbar(
          `${ERROR_MESSAGES.conversionFailed}: ${
            error.error?.error || 'Unknown error'
          }`,
          'error'
        );
      }
    );
  }

  /**
   * Displays a snackbar notification with the specified message and type.
   * @param message - The message to display in the snackbar.
   * @param type - The type of notification ('success' or 'error').
   */
  private showSnackbar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar',
    });
  }
}
