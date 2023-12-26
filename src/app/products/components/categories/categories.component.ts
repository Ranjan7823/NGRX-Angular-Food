import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../../services/api-service';
// import { CoreService } from 'src/app/services/core-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private service: CoreService, private routes:Router) {}
  categoryList: any = [];
  ngOnInit(): void {
    this.getAllCategoryItem();
  }
  getAllCategoryItem() {
    this.service.getAllCategory().subscribe((res) => {
      if (res) {
        this.categoryList = res.data;
      }
    });
  }
  onClickCategory(catId:string | Number){
    this.routes.navigate(['/restaurant-items',catId]);
  }
}
