import { Component, Input, OnChanges } from '@angular/core';
import { FacetValue } from '@spartacus/core';
import { FacetService } from '../../../../product-listing/product-facet-navigation/services/facet.service';

@Component({
  standalone: false,
  selector: 'app-waygate-facet',
  templateUrl: './waygate-facet.component.html',
  styleUrls: ['./waygate-facet.component.scss'],
})
export class WaygateFacetComponent implements OnChanges {
  @Input() facet;
  @Input() index;
  expand;
  selectedOne: boolean;

  constructor(private facetService: FacetService) {}
  ngOnChanges() {
    if (this.index < 3) {
      this.expand = true;
    }
    this.checkIfOneItemSelected(this.facet);
  }
  getLinkParams(value: FacetValue) {
   
    return this.facetService.getLinkParams(value.query?.query.value);
    
  }
  closeSlider(){
    this.facetService.filterSliderSource.next(false);
  }

  checkIfOneItemSelected(facet) {
    this.selectedOne = facet?.values.reduce((a, c) => a || c.selected, false);
  }
}
