import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './complements/pipes/capitalizado.pipe';
import { DomSeguroPipe } from './complements/pipes/dom-seguro.pipe';
import { ContrasenaPipe } from './complements/pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID,
    useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
