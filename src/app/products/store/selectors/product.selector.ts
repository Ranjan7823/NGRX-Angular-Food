import { createSelector } from '@ngrx/store';
import { selectProduct } from '../base-selector';
import { ProductState } from '../reducers/product.reducer';

export const getInitProductData = createSelector(
  selectProduct,
  (state: ProductState) => state?.categoryData
);
