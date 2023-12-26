import { Component, OnInit } from '@angular/core';
import { ProductActionService } from '../../services/product.action.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit{
  constructor(private actionService: ProductActionService){}

  ngOnInit(){
    console.log('--App-component')
    this.actionService.loadInitProduct();
    this.actionService.getInitProductData().subscribe(data=>{
      console.log('Data--',data);
    })
  }
}
