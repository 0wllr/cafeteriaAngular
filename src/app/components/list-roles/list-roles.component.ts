import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  constructor(private role:RolesService) { }
  roleData: any=[];
  ngOnInit(): void {
    this.role.getAllRoles().subscribe((allData)=>{
      console.log(allData);
      this.roleData=allData;
   } );
  }
}
