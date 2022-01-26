import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFormComponent } from './feature-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [FeatureFormComponent],
  exports: [FeatureFormComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    MultiSelectModule,
  ],
})
export class FeatureFormModule {}
