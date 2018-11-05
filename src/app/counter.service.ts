


export class CounterService {

  counter:number = 0;

  onIncrement() {
    this.counter++;
    console.log("counter: " + this.counter);
  }

}
