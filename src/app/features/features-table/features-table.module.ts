import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesTableComponent } from './features-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FeatureFormModule } from '../feature-form/feature-form.module';

@NgModule({
  declarations: [FeaturesTableComponent],
  imports: [
    CommonModule,
    AgGridModule,
    ButtonModule,
    PanelModule,
    DynamicDialogModule,
    FeatureFormModule,
  ],
  exports: [FeaturesTableComponent],
})
export class FeaturesTableModule {}
