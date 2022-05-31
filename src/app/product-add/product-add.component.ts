import { ProductType } from './../model/Product';
import { ProductService } from './../services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
product :ProductType= {
  name:"",
  price :0 ,
  status: true
}
  constructor(
    private productService:ProductService,
    private router :Router ,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    this.productService.addProduct(this.product).subscribe(data =>{
      console.log('them thanh cong') 
      setTimeout(()=>{
        // redirect về product list
        this.router.navigateByUrl('')
      },2000)
    })
  }
}
