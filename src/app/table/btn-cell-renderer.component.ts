import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'btn-cell-renderer',
  template: `
    <button (click)="btnEditHandler(); $event.stopPropagation()">Edit</button>
    <button (click)="btnArchiveHandler(); $event.stopPropagation()">
      Archive
    </button>
  `,
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnEditHandler() {
    this.params.clicked(this.params.data, 'edit');
  }

  btnArchiveHandler() {
    this.params.clicked(this.params.data, 'archive');
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
