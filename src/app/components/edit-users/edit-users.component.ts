import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(private user:UsersService, private router:ActivatedRoute) { }

  editUser = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl('')
  });

  message:boolean = false;

  ngOnInit(): void {
      this.user.getUserById(this.router.snapshot.params['id']).subscribe((result:any)=>{
        console.log(result);
      this.editUser = new FormGroup({
        name:new FormControl(result['name']),
        email:new FormControl(result['email']),
        password:new FormControl(''),
        role:new FormControl(result['role'])
      });
    });
  }

  UpdateData(){

    this.user.updateUser(this.router.snapshot.params['id'], this.editUser.value).subscribe((result)=>{
      console.log(result);
      this.message=true;
      this.editUser.reset({});
    })

  }
  removeMessage(){
    this.message=false;
  }
}
