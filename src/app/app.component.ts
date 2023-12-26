import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OnlineFoodApp';
  //constructor(private actionService: ProductActionService){}

  ngOnInit(){
    // console.log('--App-component')
    // this.actionService.loadInitProduct();
    // this.actionService.getInitProductData().subscribe(data=>{
    //   console.log('Data--',data);
    // })
  }
}
