import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/product.action';

export interface ProductState {
  categoryData: any;
}
export const initialState: ProductState = {
  categoryData: [],
};

export const productReducer = createReducer(
    initialState,
  on(actions.loadAllCategoryDataSuccess, (state, { payload }) => ({
    ...state,
    categoryData: payload,
  }))
);

export function reducer(
  state: ProductState = initialState,
  action: Action
): ProductState {
  return productReducer(state, action);
}
