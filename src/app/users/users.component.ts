import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList:any=[]
constructor(){
  fetch('https://dummyjson.com/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res=>this.userList=res?.users);
}
}
