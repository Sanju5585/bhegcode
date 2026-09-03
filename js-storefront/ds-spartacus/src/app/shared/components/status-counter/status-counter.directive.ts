import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  standalone: false,
  // tslint:disable-next-line: directive-selector
  selector: '[vsStatusCounter]',
})
export class StatusCounterDirective {
  private originalNumber: number;
  private totalTime = 2000;
  private steps = 20;
  private counterEml: any;

  @Input()
  set vsStatusCounter(num) {
    this.originalNumber = num;
    // wait for few time & then run the counter
    setTimeout(() => {
      this.counterEml = this.elm.nativeElement.querySelector('.counter-number');
      this.run();
    }, 1000);
  }

  constructor(private elm: ElementRef) {}

  /**
   * @author Aneesh Nair
   * @description increase the number in a certain interval
   */
  private run() {
    const jumpSize = Math.abs(this.originalNumber) / this.steps;
    let tempValue = 0;
    const interval = setInterval(() => {
      tempValue += jumpSize;
      this.counterEml.innerHTML = Math.floor(tempValue);
      if (tempValue >= this.originalNumber) {
        this.counterEml.innerHTML = this.originalNumber;
        clearInterval(interval);
      }
    }, this.totalTime / this.steps);
  }
}
