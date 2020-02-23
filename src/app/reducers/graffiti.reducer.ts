import {Action, createReducer, on} from '@ngrx/store';
import {IGraffiti} from '../components/graffiti/graffiti.component';
import {GraffitiActions} from '../actions';

export const graffitiFeatureKey = 'graffiti';

export interface State {
  graffitis: IGraffiti[];
}

export const initialState: State = {
  graffitis: [],
};

const graffitiReducer = createReducer(
  initialState,
  on(GraffitiActions.addGraffitiSuccess, (state, {graffiti}) => {
    return {...state, graffitis: [...state.graffitis, graffiti]};
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return graffitiReducer(state, action);
}
