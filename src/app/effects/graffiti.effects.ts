import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map, switchMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {GraffitiActions} from '../actions';
import {GraffitiService} from '../services/graffiti.service';
import {IGraffiti} from '../components/graffiti/graffiti.component';

@Injectable()
export class GraffitiEffects {
  constructor(private actions$: Actions, private storageService: GraffitiService) {}

  LoadGraffitis$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GraffitiActions.loadGraffitis),
      mergeMap(() =>
        this.storageService.getTags().pipe(
          map((data: IGraffiti[]) => {
            return GraffitiActions.loadGraffitisSuccess({payload: data});
          }),
          catchError((error: Error) => {
            return of(GraffitiActions.loadGraffitisFailure(error));
          })
        )
      )
    )
  );

  CreateGraffitiTag$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GraffitiActions.addGraffiti),
      mergeMap(({payload}) =>
        this.storageService.addTag([payload]).pipe(
          map(() => GraffitiActions.addGraffitiSuccess({payload})),
          catchError(error => of(GraffitiActions.addGraffitiFailure(error)))
        )
      )
    )
  );
}
