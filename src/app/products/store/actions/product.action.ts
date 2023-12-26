import { createAction, props } from '@ngrx/store';

export const loadAllCategoryData = createAction('[Category Data]');
export const loadAllCategoryDataSuccess = createAction(
  '[Category Data Success]',
  props<{ payload: any }>()
);
export const loadAllCategoryDataFailed = createAction(
  '[Category Data Failed]',
  props<{ payload: Error }>()
);
