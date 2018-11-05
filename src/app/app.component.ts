
import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  counter: number;

  constructor(private counterService: CounterService) {
    this.counter = this.counterService.counter;
  }

  onStatusChanged() {
    this.counter = this.counterService.counter;
  }

}


