import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'rmaProduct',
})
export class RmaProductPipe implements PipeTransform {
  transform(items: any, args?: any): any {
    if (!items && !args) return items;
    if (!args) return items?.filter((item) => !item.parentEntryNumber);
    if (args)
      return items?.filter(
        (item) => !item.parentEntryNumber && item?.returnLocationId == args
      );
  }
}
