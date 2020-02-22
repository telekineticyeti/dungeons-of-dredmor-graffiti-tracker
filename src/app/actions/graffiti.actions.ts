import { createAction, props } from '@ngrx/store';

export const loadGraffitis = createAction(
  '[Graffiti] Load Graffitis'
);

export const loadGraffitisSuccess = createAction(
  '[Graffiti] Load Graffitis Success',
  props<{ data: any }>()
);

export const loadGraffitisFailure = createAction(
  '[Graffiti] Load Graffitis Failure',
  props<{ error: any }>()
);
