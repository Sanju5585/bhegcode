import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'facetSort',
})
export class FacetSortPipe implements PipeTransform {
  transform(value: any[]): any {
    if (!value) return value;
    return value.sort((a, b) => b.selected - a.selected);
  }
}
