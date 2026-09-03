import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'customNumber',
})
export class CustomNumber implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}
  transform(value, currency): any {
    let newValue;
    newValue =
      currency == 'JPY'
        ? '1.0-0' //)
        : '1.2-2'; //);
    // console.log(newValue);
    return (
      currency +
      ' ' +
      this.currencyPipe.transform(value, currency, 'symbol-narrow', newValue)
    );
  }
}
