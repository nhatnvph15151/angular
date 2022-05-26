import { ProductType } from './model/Product';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: ProductType[] = [
    {
      id: 1,
      name: "Product A",
      price: 123,
      status: true
    },
    {
      id: 2,
      name: "Product B",
      price: 1234,
      status: true
    },
    {
      id: 3,
      name: "Product C",
      price: 1235,
      status: true
    }
  ]
  onHandleAdd(product:any){
    this.productList.push(product)
  }
}
