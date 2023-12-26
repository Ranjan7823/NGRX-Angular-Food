import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../services/api-service';
//import { CoreService } from 'src/app/services/core-service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss']
})
export class SelectFoodComponent {
  categoryId: number = 0;
  restaurantId: number = 0;
  foodItems:any [] = [];
  restaurantInfo: any;
  custid: number = 1;
  cartItems: any []= [];
  address: string = '';
  totalAmount: number =0;
  constructor(private activate: ActivatedRoute,private router: Router, private master: CoreService) {
    this.activate.params.subscribe((res: any)=>{
      
      this.categoryId = res.categoryId; 
      this.restaurantId = res.restaurantId; 
      this.getFood();
      this.GetRestaurantByRestaurantId();
    })
    
    const loggedData = localStorage.getItem('zomatoUser');
    // debugger;
    // if(loggedData != null) {
    //   const data = JSON.parse(loggedData);
    //   this.custid = data.userId;
    //   this.GetAllCartItemsByCustomerId();
    // }

  }

  getFood() {
    this.master.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res:any)=>{
      this.foodItems = res.data;
    })
  }
  GetRestaurantByRestaurantId() {
    this.master.GetRestaurantByRestaurantId(this.restaurantId).subscribe((res:any)=>{
      this.restaurantInfo = res.data;
    })
  }
  addToCart(item: any){
    const obj = {
      "customerId": 1,//this.custid,
      "itemId": item.itemID,
      "quantity": 1
    }
    this.master.addToCart(obj).subscribe((res:any)=>{
      if(res.result) {
        alert(res.message)
        this.GetAllCartItemsByCustomerId();
      } else {
        alert(res.message)
      }
    })
  }
  GetAllCartItemsByCustomerId() {
    this.master.GetAllCartItemsByCustomerId(this.custid, this.restaurantId).subscribe((res:any)=>{
      this.cartItems = res.data;
      this.totalAmount = this.cartItems.reduce(function (acc, obj) { return acc + obj.price * obj.quantity; }, 0);
    })
  }
  
  decreaseQuantity(item: any) {
    item.quantity = item.quantity - 1; 
    const obj = {
      "customerId": this.custid,
      "itemId": item.itemID,
      "quantity":  item.quantity
    }
    this.master.UpdateCartQuantity(obj).subscribe((res:any)=>{
      if(res.result) {
        alert(res.message)
        this.GetAllCartItemsByCustomerId();
      } else {
        alert(res.message)
      }
    })
  }
  placeOrder(){
    const itemObj = {
      "userId": this.custid,
      "totalAmount": this.totalAmount,
      "restaurantId": this.restaurantId,
      "deliveryAddress": this.address
    }; 
    this.master.placeOrder(itemObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Order Placed');
        this.GetAllCartItemsByCustomerId();
      } else {
        alert(res.message)
      }
    })
  }
  
}
