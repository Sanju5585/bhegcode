import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'rmaProductType',
})
export class RMAProductTypePipe implements PipeTransform {
  transform(items: any, args): any {
    if (!items || !args) return items;
    return items.filter((item) => args.indexOf(item.productType) !== -1);
  }
}
