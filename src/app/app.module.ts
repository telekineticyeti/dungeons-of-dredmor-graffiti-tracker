import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraffitiComponent } from './components/graffiti/graffiti.component';

@NgModule({
  declarations: [
    AppComponent,
    GraffitiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
