import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe(data => {
      console.log("data",data)
      this.users = data
    });
  }

  
}
