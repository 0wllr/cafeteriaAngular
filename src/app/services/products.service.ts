import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('http://127.0.0.1:8000/api/products');

  }

  AddProduct(data:any){
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/api/products',data);
  }

  deleteProduct(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/products/${id}`)
  }

  getProductById(id:number){
    return this.http.get(`http://127.0.0.1:8000/api/products/${id}`)

  }
  updateProduct(id:number,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/products/${id}`,data)
  }
}
