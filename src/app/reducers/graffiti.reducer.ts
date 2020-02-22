import { Action, createReducer, on } from '@ngrx/store';


export const graffitiFeatureKey = 'graffiti';

export interface State {

}

export const initialState: State = {

};

const graffitiReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return graffitiReducer(state, action);
}
