import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private user:UsersService) { }
  userData: any=[];
  ngOnInit(): void {
    this.user.getAllUsers().subscribe((allData)=>{
      console.log(allData);
      this.userData=allData;
    });
  }

}
