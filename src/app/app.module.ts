import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AppStateModule } from './app-state/app-state.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { BtnCellRendererComponent } from './table/btn-cell-renderer.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent, BtnCellRendererComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([BtnCellRendererComponent]),
    AppStateModule,
    BrowserAnimationsModule,
    ToastModule,
  ],
  providers: [DialogService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
