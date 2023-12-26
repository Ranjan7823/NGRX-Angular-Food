import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../services/api-service';
//import { CoreService } from 'src/app/services/core-service';

@Component({
  selector: 'app-restuarntitems',
  templateUrl: './restuarntitems.component.html',
  styleUrls: ['./restuarntitems.component.scss'],
})
export class RestuarntitemsComponent {
  items: any[] = [];
  quantity: number = 0;
  orderObj: any = {
    orderId: 0,
    userId: 0,
    orderDate: new Date(),
    totalAmount: 0,
    restaurantId: 0,
    orderNo: 'string',
    zomatoOrderItems: [],
  };
  selectedFoodItem: any;
  categoryId: number = 0;
  constructor(
    private activeRoutes: ActivatedRoute,
    private route: Router,
    private coreService: CoreService
  ) {

    this.activeRoutes.params.subscribe((routes: any)=>{
      this.categoryId=routes.categoryname;
      this.loadFoodItemsByCategory(this.categoryId)
    })
  }
  getDetailItem(item: any){
    this.route.navigate(['/select-items',item.restaurantID,this.categoryId])

  }

  loadFoodItemsByCategory(name: string| number) {
    this.coreService.getItemsByRestaBYCategoryName(name).subscribe((res: any)=>{
      this.items = res.data;
    })
  }
}
