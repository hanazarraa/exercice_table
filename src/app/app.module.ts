import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, jqxGridModule, jqxCheckBoxModule, jqxButtonModule, jqxPanelModule,jqxListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AppComponent ]

})
export class AppModule { }
