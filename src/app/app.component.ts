import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from './reducers/graffiti.reducer';
import {GraffitiActions} from './actions';
import {IGraffiti} from './components/graffiti/graffiti.component';
import {Observable, Subscription} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {GraffitiService} from './services/graffiti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public tag: string = '';
  public GraffitiSubscription: Subscription;
  private graffiti$: Observable<State>;

  public GraffitiList: IGraffiti[] = [];

  constructor(private store: Store<{graffitis}>, private service: GraffitiService) {
    this.graffiti$ = store.pipe(select('graffitis'));

    // store.select('graffitis').subscribe(graf => (this.GraffitiList2 = graf));
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

  public addGraffiti(): void {
    const newGraffiti: IGraffiti = {tag: this.tag};
    this.store.dispatch(GraffitiActions.addGraffiti({payload: newGraffiti}));
  }
}
