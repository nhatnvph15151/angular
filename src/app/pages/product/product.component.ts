import { ProductType } from './../../model/Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('data') productList!: ProductType[];
  productDetail!: ProductType ;
  constructor() {
  }
  ngOnInit(): void {
  }
 ShowDetail( id : Number) {
   this.productDetail = this.productList.find(item => item.id === id)!
 }
}
