import {Action, createReducer, on} from '@ngrx/store';
import {IGraffiti} from '../components/graffiti/graffiti.component';
import {GraffitiActions} from '../actions';

export const graffitiFeatureKey = 'graffiti';

export interface State {
  graffitis: IGraffiti[];
}

export const initialState: State = {
  graffitis: []
};

const graffitiReducer = createReducer(
  initialState,
  on(GraffitiActions.addGraffiti, (state, graffiti) => {
    return {...state, graffitis: [...state.graffitis, graffiti]};
  }),
  on(GraffitiActions.addGraffitiSuccess, (state, {payload}) => {
    return {...state, graffitis: [...state.graffitis, payload]};
  }),
  on(GraffitiActions.loadGraffitis, state => state),
  on(GraffitiActions.loadGraffitisSuccess, (state, {payload}) => {
    return {...state, graffitis: payload};
  })
);

export function GraffitiReducer(state: State | undefined, action: Action) {
  return graffitiReducer(state, action);
}
