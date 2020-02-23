import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGraffitis from './graffiti.reducer';

export interface GraffitiState {
  [fromGraffitis.graffitiFeatureKey]: fromGraffitis.State;
}

export interface State {
  graffitisFeatureKey: GraffitiState;
}

// export const reducers: ActionReducerMap<State> = {

// };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
