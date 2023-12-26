import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductContainerComponent } from './products/container/product-container/product-container.component';
import { ProductModule } from './products/product.module';
import { ProductEffects } from './products/store/effects/product.effects';
import { productReducer } from './products/store/reducers/product.reducer';

//export const Module = [ProductModule];

//export const metaReducers: MetaReducer<any>[] = [productReducer];
@NgModule({
  declarations: [
    AppComponent,
    //ProductContainerComponent,
  ],
  imports: [
   // ...Module,
    ProductModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //StoreModule.forRoot(fromRoot.reducer),
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot({
      product: productReducer,
      //runtimeChecks: { stict: true, strictActionImmutability: true}
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
