import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConvertFormComponent } from '../../components/convert-form/convert-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, ConvertFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
