import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {GraffitiReducer} from './reducers/graffiti.reducer';
import {GraffitiEffects} from './effects/graffiti.effects';
import {MaterialModule} from './material.module';
import {GraffitiListComponent} from './components/graffiti-list/graffiti-list.component';
import {GraffitiDetailsComponent} from './components/graffiti-details/graffiti-details.component';

@NgModule({
  declarations: [AppComponent, GraffitiListComponent, GraffitiDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({graffitis: GraffitiReducer}),
    EffectsModule.forRoot([GraffitiEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
