import {createAction, props} from '@ngrx/store';
import {IGraffiti} from '../components/graffiti/graffiti.component';

/**
 * Load Graffitis
 */
export const loadGraffitis = createAction('[Graffiti] load Graffiti');

export const loadGraffitisSuccess = createAction(
  '[Graffiti] load Graffiti Success',
  props<{payload: IGraffiti[]}>(),
);

export const loadGraffitisFailure = createAction(
  '[Graffiti] load Graffiti Failure',
  props<Error>(),
);

/**
 * Add Graffiti
 */
export const addGraffiti = createAction('[Graffiti] create Graffiti', props<IGraffiti>());

export const addGraffitiSuccess = createAction(
  '[Graffiti] add Graffiti Success',
  props<{payload: IGraffiti}>(),
);

export const addGraffitiFailure = createAction('[Graffiti] add Graffiti Failure', props<Error>());

/**
 * Remove Graffiti
 */
export const removeGraffiti = createAction('[Graffiti] remove Graffiti');

export const removeGraffitiSuccess = createAction(
  '[Graffiti] remove Graffiti Success',
  props<{payload: IGraffiti}>(),
);

export const removeGraffitiFailure = createAction(
  '[Graffiti] remove Graffiti Failure',
  props<Error>(),
);
