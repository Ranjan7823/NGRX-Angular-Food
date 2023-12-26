import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProductRoutingModule } from './product.routing';
import { CategoriesComponent } from './components/categories/categories.component';
import { RestuarntitemsComponent } from './components/restuarntitems/restuarntitems.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { SelectFoodComponent } from './components/select-item/select-item.component';
import { FormsModule } from '@angular/forms';
//import { ProductRoutingModule } from './product.routing';


//export const metaReducers: MetaReducer<any>[] = [productReducer];
@NgModule({
  declarations: [
    ProductContainerComponent,
    CategoriesComponent,
    RestuarntitemsComponent,
    CreateOrderComponent,
    SelectFoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
})
export class ProductModule { }
