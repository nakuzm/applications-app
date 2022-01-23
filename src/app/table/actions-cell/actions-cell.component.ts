import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions-cell',
  templateUrl: './actions-cell.component.html',
  styleUrls: ['./actions-cell.component.scss'],
})
export class ActionsCellComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  clickHandler(e: any, action: string) {
    e.stopPropagation();
    this.params.clicked(this.params.data, action);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
