import { ProductService } from './../../services/product.service';
import { ProductType } from '../../model/Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList!: ProductType[];
  constructor(private productService: ProductService ) {

  }
  ngOnInit(): void {
    this.showProduct()
  }
  showProduct(){
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })
  }
  onRemoveItem(id: number){
    const confirm = window.confirm('ban co muon xoa khong')
    if(confirm){
      this.productService.removeProduct(id).subscribe(()=>{
        this.productList = this.productList.filter(item => item.id !== id);
      })
    }
  }
}
