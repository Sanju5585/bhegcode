import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacetService } from '../../../product-listing/product-facet-navigation/services/facet.service';

@Component({
  selector: 'app-waygate-listing-filter-sort',
  standalone: false,
  templateUrl: './waygate-listing-filter-sort.component.html',
  styleUrl: './waygate-listing-filter-sort.component.scss'
})
export class WaygateListingFilterSortComponent implements OnInit {
  @Input() toggleMarging: boolean = false;
  @Input() facetsList;
  @Input() selectedFilters;
  @Input() currentPriority;
  @Input() filtersList;
  sortList: any[];
  @Output()
  onSortSelect: EventEmitter<any> = new EventEmitter();
  constructor(
    private facetService: FacetService,) {

  }
  ngOnInit(): void {
    if (this.facetService.setSortList.length == 0) {
      this.sortList = JSON.parse(JSON.stringify(this.filtersList));
      const index = this.sortList.findIndex(obj => obj.code === 'name-desc');
      if (index !== -1) {
        this.sortList.splice(index, 1);
      }
    }
    else {
      this.sortList = JSON.parse(JSON.stringify(this.facetService.setSortList));
    }

  }
  getqueryParams(sortType) {
    if (sortType == 'name-asc') {
      const index = this.sortList.findIndex(obj => obj.code === 'name-asc');
      const sortListRemovedIndex = this.filtersList.findIndex(obj => obj.code === 'name-desc');
      if (index !== -1) {
        this.sortList[index] = this.filtersList[sortListRemovedIndex];
      }
    } else {
      const index = this.sortList.findIndex(obj => obj.code === 'name-desc');
      const sortListRemovedIndex = this.filtersList.findIndex(obj => obj.code === 'name-asc');
      if (index !== -1) {
        this.sortList[index] = this.filtersList[sortListRemovedIndex];
      }
    }

    this.facetService.setSortList = this.sortList;
    this.facetService.filterSliderSource.next(false);
    this.onSortSelect.emit(sortType);
  }

}




