import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {GraffitiComponent} from './components/graffiti/graffiti.component';
import {GraffitiReducer} from './reducers/graffiti.reducer';
import {GraffitiEffects} from './effects/graffiti.effects';

@NgModule({
  declarations: [AppComponent, GraffitiComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({graffitis: GraffitiReducer}),
    EffectsModule.forRoot([GraffitiEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
