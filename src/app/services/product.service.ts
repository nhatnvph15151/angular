import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:3001/products';
  constructor(private http: HttpClient ) {}

  getProduct (id:number):Observable<ProductType>{
    return this.http.get<ProductType>(`${this.API_URL}/${id}`)
  }
  getProducts():Observable<ProductType[]>{
    return this.http.get<ProductType[]>(this.API_URL)
  }
  removeProduct(id:number):Observable<ProductType>{
    return this.http.delete<ProductType>(`${this.API_URL}/${id}`)
  }
  addProduct(product:any):Observable<ProductType> {
    return this.http.post<ProductType>(`${this.API_URL}`,product)
  }
  updateProduct(product: ProductType){
    return this.http.put<ProductType>(`${this.API_URL}/${product.id}`,product)
  }
  
  
}
