import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

  constructor(private role:RolesService) { }

  addRole = new FormGroup({
    name:new FormControl(''),
    value:new FormControl(''),
    stock:new FormControl('')
  });

  message:boolean = false;

  ngOnInit(): void {
  }

  SaveData(){
      this.role.addRole(this.addRole.value).subscribe((result)=>{
        //console.log (result);
        this.message=true;
        this.addRole.reset({});
      });
  }
  removeMessage(){
      this.message=false;
  }
}
