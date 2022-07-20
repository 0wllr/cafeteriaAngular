import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {

  constructor(private role:RolesService, private router:ActivatedRoute) { }

  editRole = new FormGroup({
    name:new FormControl(''),
  });

  message:boolean = false;

  ngOnInit(): void {
    this.role.getRoleById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.editRole = new FormGroup({
        name:new FormControl(result['name']),
      });
    });
  }

  UpdateData(){

    this.role.updateRole(this.router.snapshot.params['id'], this.editRole.value).subscribe((result)=>{
      console.log(result);
      this.message=true;
      this.editRole.reset({});
    })

  }
  removeMessage(){
    this.message=false;
  }
}
