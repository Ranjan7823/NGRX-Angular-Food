import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { ProductState, productReducer } from 'src/app/products/store/reducers/product.reducer';
//import { ProductState, productReducer } from 'src/app/store/reducers/product.reducer';

export interface AppState {
    product:ProductState
}
export const reducer: ActionReducerMap <AppState>={
    product:productReducer
}