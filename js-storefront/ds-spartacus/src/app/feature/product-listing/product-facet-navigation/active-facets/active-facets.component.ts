import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb, TranslationService } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { FacetList, FilterFacetValue, ProductFilterType } from '../facet.model';
import { FacetService } from '../services/facet.service';

/**
 * Active facets render the applied facet values as a list of focusable buttons
 * which can be used to remove the applied facet value.
 */
@Component({
  standalone: false,
  selector: 'cx-active-facets',
  templateUrl: './active-facets.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ActiveFacetsComponent {
  /** Active facets which are applied to the product results. */
  facetList$: Observable<FacetList> = this.facetService.facetList$;

  /** Configurable icon which is used for the active facet close button */
  @Input() closeIcon = ICON_TYPE.CLOSE;

  activeProductType: FilterFacetValue;

  constructor(
    protected facetService: FacetService,
    private activatedRoute: ActivatedRoute,
    private translate: TranslationService
  ) {
    this.facetService.getSelectedProductFilter().subscribe((filter) => {
      if (filter == ProductFilterType.ALL) {
        this.activeProductType = {
          count: 1,
          name: this.getTranslatedText('plp.allProducts'),
          selected: true,
          filterCode: ProductFilterType.ALL,
        };
      } else if (filter == ProductFilterType.BUY) {
        this.activeProductType = {
          count: 1,
          name: this.getTranslatedText('plp.buyProducts'),
          selected: true,
          filterCode: ProductFilterType.BUY,
        };
      } else if (filter == ProductFilterType.RETURN) {
        this.activeProductType = {
          count: 1,
          name: this.getTranslatedText('plp.returnProducts'),
          selected: true,
          filterCode: ProductFilterType.RETURN,
        };
      }
    });
  }

  getLinkParams(facet: Breadcrumb) {
    return this.facetService.getLinkParams(facet.removeQuery?.query?.value);
  }

  /**
   * The focus key is used to persist the focus on the facet when the DOM is being
   * recreated. We only apply the focus key for the given _active_ facet when there
   * the original facets is not available. This happens for non multi-valued facets.
   *
   * With this approach, the we keep the focus, either at the facet list or on the
   * active facets.
   */
  getFocusKey(facetList: FacetList, facet: Breadcrumb) {
    return facetList.facets?.find((f) =>
      f.values?.find((val) => val.name === facet.facetValueName)
    )
      ? ''
      : facet.facetValueName;
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
