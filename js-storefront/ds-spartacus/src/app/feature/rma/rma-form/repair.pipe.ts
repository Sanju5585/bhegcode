import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'offerings',
})
export class OfferingsrPipe implements PipeTransform {
  transform(items: any[], ...args: any): any {
    if (!items || !args) return items;
    return items.filter((item) => item.category == args);
  }
}
