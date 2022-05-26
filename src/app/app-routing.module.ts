import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: "", component: ProductComponent },
  {path :"add", component: ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
