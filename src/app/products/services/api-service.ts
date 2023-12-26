import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndPointURL } from './end-point';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<any> {
    return this.http.get(EndPointURL.GetAllFoodCategory);
  }
  getItemsByRestaBYCategoryName(name: string | number): Observable<any> {
    return this.http.get(EndPointURL.GetRestaurantServingByCategoryId + '?categoryId=' + name);
  }
  GetFoodItemOfRestaurantByCategory(restaurantID:number,categoryId: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId='+ restaurantID+'&categoryId='+categoryId)
  }
  GetAllCartItemsByCustomerId(customerId:number,restaurantID: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetCartItemsByCustomerIdForRestaurant?customerId='+ customerId+'&restaurantId='+restaurantID)
  }
  
  GetRestaurantByRestaurantId(name: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantByRestaurantId?restaurantID='+ name)
  }
  placeOrder(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder", obj);
  }


  addToCart(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddToCart", obj);
  }
  UpdateCartQuantity(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/UpdateCartQuantity", obj);
  }
}
