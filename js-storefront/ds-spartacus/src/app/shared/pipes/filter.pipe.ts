import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'filter',
})
export class CustomerFilter implements PipeTransform {
  transform(items: any[], args: string): any {
    if (!args || args.length == 0) {
      return items;
    }
    args = args.toLowerCase();
    return items.filter(
      (item) =>
        item.number.indexOf(args) !== -1 ||
        item.name.toLowerCase().indexOf(args) !== -1
    );
  }
}
