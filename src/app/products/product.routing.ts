import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RestuarntitemsComponent } from './components/restuarntitems/restuarntitems.component';
import { SelectFoodComponent } from './components/select-item/select-item.component';

const routes: Routes = [
  { path: '', component: ProductContainerComponent },
  { path: 'food-category', component: CategoriesComponent },
  {
    path: 'restaurant-items/:categoryname',
    component: RestuarntitemsComponent,
  },
  {
    path: 'select-items/:restaurantId/:categoryId',
    component: SelectFoodComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
