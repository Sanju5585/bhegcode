import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'selectedCategory',
})
export class SelectedCategoryPipe implements PipeTransform {
  constructor() {}
  transform(categories: any[], salesAreas: any[]): any {
    if (!categories) return [];
    else if (salesAreas?.length == 0 || !salesAreas)
      return categories.map((category) => category.value);
    else
      return categories
        .filter((category) => salesAreas.indexOf(category.value?.code) != -1)
        .map((category) => category.value);
  }
}
