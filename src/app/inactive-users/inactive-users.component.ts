
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit {

  users: string[];
  @Output() statusChanged = new EventEmitter();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
  
   onSetToActive(id:number) {
  	this.usersService.onSetToActive(id);
    this.statusChanged.emit();
  }

}
