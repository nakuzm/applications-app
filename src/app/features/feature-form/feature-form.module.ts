import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFormComponent } from './feature-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FeatureFormComponent],
  exports: [FeatureFormComponent],
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, ButtonModule],
})
export class FeatureFormModule {}
