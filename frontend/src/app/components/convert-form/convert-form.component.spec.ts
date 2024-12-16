import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConvertFormComponent } from './convert-form.component';

describe('ConvertFormComponent', () => {
  let component: ConvertFormComponent;
  let fixture: ComponentFixture<ConvertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConvertFormComponent,
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
