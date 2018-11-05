import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()

export class UsersService {

  activeUsers = [ 'Max', 'Anna', 'John'];
  inactiveUsers = [ 'Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onIncrement();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onIncrement();
  }


  // statusUpdated = new EventEmitter<string>();

  constructor(private counterService: CounterService) {}

}
