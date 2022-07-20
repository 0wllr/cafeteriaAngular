import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url="http://127.0.0.1:8000/api/products"
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('http://127.0.0.1:8000/api/products');

  }
}
