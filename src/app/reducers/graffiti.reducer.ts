import {Action, createReducer, on} from '@ngrx/store';
import {IGraffiti} from '../models/graffiti.model';
import {GraffitiActions} from '../actions';
import {state} from '@angular/animations';

export const graffitiFeatureKey = 'graffiti';

export interface State {
  graffitis: IGraffiti[];
}

export const initialState: State = {
  graffitis: []
};

const graffitiReducer = createReducer(
  initialState,
  /**
   * Add a graffiti
   */
  on(GraffitiActions.addGraffitiSuccess, (state, {payload}) => {
    return {...state, graffitis: [...state.graffitis, ...payload]};
  }),
  /**
   * Load graffitis
   */
  on(GraffitiActions.loadGraffitisSuccess, (state, {payload}) => {
    return {...state, graffitis: payload};
  }),
  /**
   * Remove graffiti
   */
  on(GraffitiActions.removeGraffitiSuccess, (state, {payload}) => {
    return {...state, graffitis: state.graffitis.filter(graffiti => payload.tag !== graffiti.tag)};
  }),
  /**
   * Remove All graffitis
   */
  on(GraffitiActions.removeAllGraffitiSuccess, state => {
    return {...state, graffitis: []};
  }),
  /**
   * Sample graffiti
   */
  on(GraffitiActions.loadSampleGraffitisSuccess, (state, {payload}) => {
    return {...state, graffitis: payload};
  })
);

export function GraffitiReducer(state: State | undefined, action: Action) {
  return graffitiReducer(state, action);
}
