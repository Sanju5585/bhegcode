import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'rmaAccessory',
})
export class RmaAccessoryPipe implements PipeTransform {
  transform(items: any, args: number): any {
    if (!items && !args) return items;
    return items?.filter((item) => item.parentEntryNumber == args);
  }
}
