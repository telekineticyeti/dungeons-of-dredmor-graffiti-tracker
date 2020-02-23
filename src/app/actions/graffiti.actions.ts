import {createAction, props} from '@ngrx/store';
import {IGraffiti} from '../components/graffiti/graffiti.component';

export const addGraffiti = createAction('[Graffiti] add Graffiti');

export const addGraffitiSuccess = createAction(
  '[Graffiti] add Graffiti Success',
  props<{graffiti: IGraffiti[]}>(),
);

export const addGraffitiFailure = createAction(
  '[Graffiti] add Graffiti Failure',
  props<{error: any}>(),
);

export const removeGraffiti = createAction('[Graffiti] remove Graffiti');

export const removeGraffitiSuccess = createAction(
  '[Graffiti] remove Graffiti Success',
  props<{graffiti: IGraffiti[]}>(),
);

export const removeGraffitiFailure = createAction(
  '[Graffiti] remove Graffiti Failure',
  props<{error: any}>(),
);
