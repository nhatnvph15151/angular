import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "product", component: ProductComponent },
  { path: "add", component: ProductAddComponent },
  { path: "edit/:id", component: ProductEditComponent },
  { path: "signup", component: SignUpComponent },
  { path: "signin", component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
