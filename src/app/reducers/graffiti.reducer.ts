import {Action, createReducer, on} from '@ngrx/store';
import {GraffitiActions} from '../actions';
import {IGraffiti} from '../components/graffiti/graffiti.component';

export const graffitiFeatureKey = 'graffiti';

export interface State {
  graffitis: Array<IGraffiti>;
  loading: boolean;
}

export const initialState: State = {
  graffitis: [],
  loading: false,
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

export const getLoading = (state: State) => state.loading;
