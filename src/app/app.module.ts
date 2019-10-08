import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimComponent } from './slim/slim.component';
import { TABComponent } from './tab/tab.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';


@NgModule({
  declarations: [
    AppComponent,
    SlimComponent,
    TABComponent,
    PersonneComponent,
    CalculComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
