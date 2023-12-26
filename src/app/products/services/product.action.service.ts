import { Injectable} from '@angular/core';
//import { AppState } from '../store/app-state';
import { Store, select } from '@ngrx/store';
import * as productAction from '../store/actions/product.action';
import { Observable } from 'rxjs';
import * as selector from '../store/selectors/product.selector';
import { AppState } from 'src/app/core/store/app.state';
//import { AppState } from 'src/app/store/app-state';

@Injectable({providedIn:'root'})

export class ProductActionService {

    constructor(private store: Store<AppState>){}

    public loadInitProduct=(): void=>this.store.dispatch(productAction.loadAllCategoryData());
    public getInitProductData=():Observable<any>=>this.store.pipe(select(selector.getInitProductData));
}