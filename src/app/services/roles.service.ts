import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  getAllRoles(){
    return this.http.get('http://127.0.0.1:8000/api/roles');

  }

  addRole(data:any){
    console.log(data);
    return this.http.post('http://127.0.0.1:8000/api/roles',data);
  }

  deleteRole(id:any){
    return this.http.delete(`http://127.0.0.1:8000/api/roles/${id}`)
  }

  getRoleById(id:number){
    return this.http.get(`http://127.0.0.1:8000/api/roles/${id}`)

  }
  updateRole(id:number,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/roles/${id}`,data)
  }
}
