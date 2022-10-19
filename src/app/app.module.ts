import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppcalComponent } from './appcal/appcal.component';

@NgModule({
  imports: [
    BrowserModule,
],
  declarations: [
    AppComponent,
    AppcalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
