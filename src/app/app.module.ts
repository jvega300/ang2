import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './comunes/header.component';
import { FooterComponent }  from './comunes/footer.component';




@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
