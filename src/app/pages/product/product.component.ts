import { ProductService } from './../../services/product.service';
import { ProductType } from '../../model/Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList!: any;
  productDetail!: ProductType ;
  constructor(private productService: ProductService ) {
  this.showProduct()
  }
  ngOnInit(): void {
  }
  showProduct(){
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })
  }
}
