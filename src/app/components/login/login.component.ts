import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    email:null,
    password:null
  }

  constructor(private backend:BackendService, private token:TokenService, private router:Router, private Auth:AuthService) { }
  public error:any = [];
  ngOnInit(): void {
  }

  submitLogin(){
    //console.log(this.form);
    return this.backend.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }
  handleResponse(data:any){
    console.log(data.token);
    this.token.handle(data.token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/products')
  }
  handleError(error:any){
    this.error= error.error.error;
  }

}
