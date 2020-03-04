import {createAction, props} from '@ngrx/store';
import {IGraffiti} from '../models/graffiti.model';

/**
 * Load Graffitis
 */
export const loadGraffitis = createAction('[Graffiti] load Graffiti');

export const loadGraffitisSuccess = createAction(
  '[Graffiti] load Graffiti Success',
  props<{payload: IGraffiti[]}>()
);

export const loadGraffitisFailure = createAction(
  '[Graffiti] load Graffiti Failure',
  props<Error>()
);

/**
 * Add Graffiti
 */
export const addGraffiti = createAction('[Graffiti] add Graffiti', props<{payload: IGraffiti[]}>());

export const addGraffitiSuccess = createAction(
  '[Graffiti] add Graffiti Success',
  props<{payload: IGraffiti[]}>()
);

export const addGraffitiFailure = createAction('[Graffiti] add Graffiti Failure', props<Error>());

/**
 * Remove Graffiti
 */
export const removeGraffiti = createAction(
  '[Graffiti] remove Graffiti',
  props<{payload: IGraffiti}>()
);

export const removeGraffitiSuccess = createAction(
  '[Graffiti] remove Graffiti Success',
  props<{payload: IGraffiti}>()
);

export const removeGraffitiFailure = createAction(
  '[Graffiti] remove Graffiti Failure',
  props<Error>()
);

/**
 * Remove all Graffiti
 */
export const removeAllGraffiti = createAction('[Graffiti] remove all Graffiti');

export const removeAllGraffitiSuccess = createAction('[Graffiti] remove all Graffiti Success');

export const removeAllGraffitiFailure = createAction(
  '[Graffiti] remove all Graffiti Failure',
  props<Error>()
);

/**
 * Import & Export
 */
export const loadSampleGraffitis = createAction('[Graffiti] load sample Graffitis');

export const loadSampleGraffitisSuccess = createAction(
  '[Graffiti] load sample Graffiti Success',
  props<{payload: IGraffiti[]}>()
);

export const loadSampleGraffitisFailure = createAction(
  '[Graffiti] load sample Graffiti Failure',
  props<Error>()
);
