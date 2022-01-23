import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ActionsCellComponent } from './actions-cell/actions-cell.component';

@NgModule({
  declarations: [ActionsCellComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([ActionsCellComponent]),
    ButtonModule,
    RippleModule,
  ],
})
export class TableModule {}
