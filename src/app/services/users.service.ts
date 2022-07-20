import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('http://127.0.0.1:8000/api/users');

  }

  deleteUser(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/users/${id}`)
  }

  getUserById(id:number){
    return this.http.get(`http://127.0.0.1:8000/api/users/${id}`)

  }
  updateUser(id:number,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/users/${id}`,data)
  }
}
