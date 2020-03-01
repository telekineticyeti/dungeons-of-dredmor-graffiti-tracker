import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from './reducers/graffiti.reducer';
import {GraffitiActions} from './actions';
import {IGraffiti} from './models/graffiti.model';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {GraffitiService} from './services/graffiti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tag: string = '';
  public GraffitiSubscription: Subscription;
  private graffiti$: Observable<State>;

  public GraffitiList: IGraffiti[] = [];

  constructor(private store: Store<{graffitis}>) {
    this.graffiti$ = store.pipe(select('graffitis'));
  }

  public ngOnInit(): void {
    this.GraffitiSubscription = this.graffiti$
      .pipe(
        map(x => {
          this.GraffitiList = x.graffitis;
        })
      )
      .subscribe();
    this.store.dispatch(GraffitiActions.loadGraffitis());
  }

  public addGraffiti(savedGraffiti: IGraffiti): void {
    const newGraffiti: IGraffiti = savedGraffiti;
    this.store.dispatch(GraffitiActions.addGraffiti({payload: newGraffiti}));
  }

  public removeGraffiti(target: IGraffiti): void {
    this.store.dispatch(GraffitiActions.removeGraffiti({payload: target}));
  }
}
