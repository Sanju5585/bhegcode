import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appCounter]',
})
export class CounterDirective {
  private originalNumber: number;
  private totalTime: number = 2000;
  private steps: number = 20;
  private counterEml: any;

  @Input()
  set appCounter(num) {
    this.originalNumber = num;
    // wait for few time & then run the counter
    setTimeout(() => {
      this.counterEml = this.elm.nativeElement.querySelector('.counter-number');
      this.run();
    }, 1000);
  }
  constructor(private elm: ElementRef) {}

  /**
   * @author Sumeet Roy
   * @description increase the number in a certain interval
   */
  private run() {
    let jumpSize = Math.abs(this.originalNumber) / this.steps;
    let tempValue = 0;
    let interval = setInterval(() => {
      tempValue += jumpSize;
      this.counterEml.innerHTML = Math.floor(tempValue);
      if (tempValue >= this.originalNumber) {
        this.counterEml.innerHTML = this.originalNumber;
        clearInterval(interval);
      }
    }, this.totalTime / this.steps);
  }
}
