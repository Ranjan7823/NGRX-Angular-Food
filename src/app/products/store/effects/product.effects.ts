import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, switchMap, mergeMap, map, of } from 'rxjs';
//import { CoreService } from 'src/app/services/api-service';
//import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import * as poductAction from '../actions/product.action'
import { AppState } from 'src/app/core/store/app.state';
import { CoreService } from '../../services/api-service';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private service: CoreService,
    private store: Store<AppState>
  ) {}
  loadInitialProduct$=createEffect(()=>this.action$.pipe(
    ofType(poductAction.loadAllCategoryData),
    switchMap(()=>this.service.getAllCategory().pipe(
        map((data: any)=>poductAction.loadAllCategoryDataSuccess({payload: data})),
        catchError((error)=>of(poductAction.loadAllCategoryDataFailed({payload:error})))
    ))
  ));
  
}
