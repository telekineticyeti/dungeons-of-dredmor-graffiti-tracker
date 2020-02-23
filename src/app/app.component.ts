import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './reducers';
import {addGraffiti, addGraffitiSuccess} from './actions/graffiti.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private store: Store<State>) {}

  public addGrafiti(tag: string): void {
    console.log('asdf');
    // this.store.dispatch(new addGraffitiSuccess({tag}))
  }
}
