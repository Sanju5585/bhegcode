import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import {
  FacetService,
  ProductFilterType,
} from '../../../../../product-listing';

@Component({
  standalone: false,
  selector: 'app-wayagte-product-type-facet',
  templateUrl: './wayagte-product-type-facet.component.html',
  styleUrls: ['./wayagte-product-type-facet.component.scss'],
})
export class WayagteProductTypeFacetComponent {
  productFilterType = ProductFilterType;
  selectedArrayLength: number = 2;
  selectedQuery: any;
  //by default both should be selected
  facet = {
    filterValues: [
      {
        count: 1,
        name: this.getTranslatedText('waygate.BuyableProducts'),
        selected: true,
        filterCode: this.productFilterType.BUY,
      },
      {
        count: 1,
        name: this.getTranslatedText('waygate.ReturnableProducts'),
        selected: true,
        filterCode: this.productFilterType.RETURN,
      },
    ],
  };

  constructor(
    private translate: TranslationService,
    protected facetService: FacetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((query: any) => {
      this.selectedQuery = query?.query || '';
      if (
        query?.filter === this.productFilterType.BUY ||
        query?.filter === this.productFilterType.RETURN
      ) {
        this.facet.filterValues.forEach((item) => {
          if (item.filterCode === query?.filter) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
        this.facetService.setSelectedProductFilter(query?.filter);
      } else {
        this.facet.filterValues.forEach((item) => (item.selected = true));
        this.facetService.setSelectedProductFilter(this.productFilterType.ALL);
      }
      this.selectedArrayLength = this.facet.filterValues.filter(
        (item) => item.selected
      ).length;
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  linkClicked(i) {
    this.facet.filterValues[i].selected = !this.facet.filterValues[i].selected;
    const newSelectedArr = this.facet.filterValues.filter(
      (item) => item.selected
    );
    this.selectedArrayLength = newSelectedArr.length;
    if (newSelectedArr.length == 2) {
      this.facetService.setSelectedProductFilter(this.productFilterType.ALL);
      this.router.navigate([], {
        queryParams: this.facetService.getLinkParams(
          this.selectedQuery,
          this.productFilterType.ALL
        ),
      });
    } else if (newSelectedArr.length == 1) {
      this.facetService.setSelectedProductFilter(newSelectedArr[0]?.filterCode);
      this.router.navigate([], {
        queryParams: this.facetService.getLinkParams(
          this.selectedQuery,
          newSelectedArr[0]?.filterCode
        ),
      });
    }
  }
}
