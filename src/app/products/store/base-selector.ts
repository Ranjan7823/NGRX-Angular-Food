import {createFeatureSelector} from '@ngrx/store';
import { ProductState} from './reducers/product.reducer';

export const selectProduct= createFeatureSelector<ProductState>('product');
