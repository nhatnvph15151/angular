import { ProductType } from './../model/Product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: ProductType = {
    name: "",
    price: 0,
    status: true
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    }
  }
  onSubmit() {
   const id = +this.route.snapshot.paramMap.get('id')!;
   if(id){
     this.productService.updateProduct(this.product).subscribe(data =>{
       this.router.navigateByUrl('')
     })
   }
  }
}
