import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
    })  
  }

}
