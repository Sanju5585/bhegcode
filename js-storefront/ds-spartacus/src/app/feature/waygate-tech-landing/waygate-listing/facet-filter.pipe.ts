import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'facetFilter',
})
export class FacetFilterPipe implements PipeTransform {
  transform(facets: any[], priority: number, selectedFacets): any[] {
    let minusFactor = 0;
    if (selectedFacets > 0) {
      minusFactor = 1;
    }
    if (!facets || !priority) return facets;
    else {
      return facets.filter((facet) =>
        facet.priority > 9000
          ? facet.priority >= priority - minusFactor
          : facet?.priority < 9000
      );
    }
  }
}
