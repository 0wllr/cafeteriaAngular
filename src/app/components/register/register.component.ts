import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public form={
    name:null,
    email:null,
    password:null,
    password_confirmation:null
  }

  constructor(private backend:BackendService) { }

  public error:any = [];

  ngOnInit(): void {
  }

  submitRegister(){
    return this.backend.register(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
  }
  handleError(error:any){
    this.error= error.error.errors;
  }

}
