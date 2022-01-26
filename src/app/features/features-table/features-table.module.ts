import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesTableComponent } from './features-table.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FeatureFormModule } from '../feature-form/feature-form.module';
import { TableModule } from '../../table/table.module';

@NgModule({
  declarations: [FeaturesTableComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PanelModule,
    DynamicDialogModule,
    FeatureFormModule,
  ],
  exports: [FeaturesTableComponent],
})
export class FeaturesTableModule {}
