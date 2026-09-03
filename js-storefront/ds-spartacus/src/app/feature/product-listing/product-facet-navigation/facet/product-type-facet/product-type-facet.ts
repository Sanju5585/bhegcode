import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { FocusDirective, ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import {
  FacetCollapseState,
  FilterFacet,
  FilterFacetValue,
  ProductFilterType,
} from '../../facet.model';
import { FacetService } from '../../services/facet.service';

@Component({
  standalone: false,
  selector: 'ds-product-type-facet',
  templateUrl: './product-type-facet.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTypeFacetComponent {
  protected _facet: FilterFacet = {
    category: true,
    multiSelect: true,
    name: 'Show Type',
    priority: 5000,
    topValueCount: 2,
    filterValues: [
      {
        count: 1,
        name: this.getTranslatedText('plp.allProducts'),
        selected: false,
        filterCode: ProductFilterType.ALL,
      },
      {
        count: 1,
        name: this.getTranslatedText('plp.buyProducts'),
        selected: false,
        filterCode: ProductFilterType.BUY,
      },
      {
        count: 1,
        name: this.getTranslatedText('plp.returnProducts'),
        selected: false,
        filterCode: ProductFilterType.RETURN,
      },
    ],
  };

  state$: Observable<FacetCollapseState>;

  /** configurable icon that is used to collapse the facet group  */
  @Input() expandIcon: ICON_TYPE = ICON_TYPE.EXPAND;
  @Input() collapseIcon: ICON_TYPE = ICON_TYPE.COLLAPSE;

  @HostBinding('class.multi-select') isMultiSelect: boolean;

  @ViewChildren('facetValue') values: QueryList<ElementRef<HTMLElement>>;

  @ViewChild(FocusDirective) keyboardFocus: FocusDirective;

  selectedFilter: string;

  @Input()
  set facet(value: FilterFacet) {
    this._facet = value;
    this.isMultiSelect = !!value.multiSelect;
    this.state$ = this.facetService.getState(value);
  }

  get facet(): FilterFacet {
    this.activatedRoute.queryParams.subscribe((params) => {
      let filterParam = params['filter'];
      this.selectedFilter = filterParam ? filterParam : ProductFilterType.ALL;
      this.facetService.setSelectedProductFilter(this.selectedFilter);
      this._facet.filterValues.forEach((el) => {
        if (el.filterCode == this.selectedFilter) {
          el.selected = true;
        } else {
          el.selected = false;
        }
      });
    });
    return this._facet;
  }

  constructor(
    protected facetService: FacetService,
    protected elementRef: ElementRef<HTMLElement>,
    protected cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private translate: TranslationService
  ) {}

  /**
   * Handles clicking the heading of the facet group, which means toggling
   * the visibility of the group (collapse / expand) and optionally focusing
   * the group.
   */
  toggleGroup(event: UIEvent) {
    const host: HTMLElement = this.elementRef.nativeElement;
    const isLocked = this.keyboardFocus?.isLocked;

    this.facetService.toggle(this.facet, this.isExpanded);

    if (!isLocked || this.isExpanded) {
      host.focus();
      // we stop propagating the event as otherwise the focus on the host will trigger
      // an unlock event from the LockFocus directive.
      event.stopPropagation();
    }
  }

  get isExpanded(): boolean {
    return this.values.first.nativeElement.offsetParent !== null;
  }

  openLink(event: KeyboardEvent) {
    (event.target as HTMLElement).click();
    event.preventDefault();
  }

  /**
   * Increases the number of visible values for the facet. This is delegated
   * to `facetService.increaseVisibleValues`.
   */
  increaseVisibleValues(): void {
    this.facetService.increaseVisibleValues(this.facet);
  }

  /**
   * Decreases the number of visible values for the facet. This is delegated
   * to `facetService.decreaseVisibleValues`.
   */
  decreaseVisibleValues(): void {
    this.facetService.decreaseVisibleValues(this.facet);
  }

  getLinkParams(value: FilterFacetValue) {
    return this.facetService.getLinkParams('', value.filterCode);
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
