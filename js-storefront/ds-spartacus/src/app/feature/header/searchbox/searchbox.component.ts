import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Optional,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  CmsSearchBoxComponent,
  PageType,
  RoutingService,
  WindowRef,
} from '@spartacus/core';
import {
  CmsComponentData,
  ICON_TYPE,
  SearchBoxComponentService,
  SearchBoxConfig,
  SearchBoxProductSelectedEvent,
  SearchBoxSuggestionSelectedEvent,
  SearchResults,
} from '@spartacus/storefront';
import { Observable, of, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { LaunchDialogService } from '@spartacus/storefront';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

const DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
  minCharactersBeforeRequest: 3,
  displayProducts: true,
  displaySuggestions: false,
  maxProducts: 4,
  maxSuggestions: 4,
  displayProductImages: true,
};

@Component({
  standalone: false,
  selector: 'cx-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  config: SearchBoxConfig;
  launchCheckFlag: boolean = false;
  showWaygate: boolean = false;

  /**
   * Sets the search box input field
   */
  @Input('queryText')
  set queryText(value: string) {
    if (value) {
      this.search(value);
    }
  }

  iconTypes = ICON_TYPE;

  /**
   * In some occasions we need to ignore the close event,
   * for example when we click inside the search result section.
   */
  private ignoreCloseEvent = false;
  chosenWord = '';
  public subscription: Subscription;

  addToCartForm = new FormGroup({
    quantity: new FormControl(1),
  });
  maxQuantity = 1000;
  customerAccount$: Observable<any> =
    this.custAccService.getCurrentCustomerAccount();

  @ViewChild('searchFocusInput') searchFocusInput: ElementRef;
  constructor(
    protected searchBoxComponentService: SearchBoxComponentService,
    public sanitizer: DomSanitizer,
    private cRef: ChangeDetectorRef,
    public router: Router,
    private custAccService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    @Optional()
    protected componentData: CmsComponentData<CmsSearchBoxComponent>,
    protected winRef: WindowRef,
    private gtmService: GoogleTagManagerService,
    protected routingService?: RoutingService
  ) {
    this.custAccService.getProductLine().subscribe((productLine) => {
      if (
        productLine == AllProductLine.waygate ||
        productLine == AllProductLine.bently ||
        productLine == AllProductLine.panametrics ||
        productLine == AllProductLine.druck ||
        productLine == AllProductLine.reuterStokes
      ) {
        this.showWaygate = true;
      } else {
        this.showWaygate = false;
      }
    });
  }

  /**
   * Returns the SearchBox configuration. The configuration is driven by multiple
   * layers: default configuration, (optional) backend configuration and (optional)
   * input configuration.
   */
  protected config$: Observable<SearchBoxConfig> = (
    this.componentData?.data$ || of({} as any)
  ).pipe(
    map((config) => {
      const isBool = (obj: SearchBoxConfig, prop: string): boolean =>
        obj?.[prop] !== 'false' && obj?.[prop] !== false;

      return {
        ...DEFAULT_SEARCH_BOX_CONFIG,
        ...config,
        displayProducts: isBool(config, 'displayProducts'),
        displayProductImages: isBool(config, 'displayProductImages'),
        displaySuggestions: isBool(config, 'displaySuggestions'),
        // we're merging the (optional) input of this component, but write the merged
        // result back to the input property, as the view logic depends on it.
        ...this.config,
      };
    }),
    tap((config) => {
      this.config = config;
    })
  );

  results$: Observable<SearchResults> = this.config$.pipe(
    switchMap((config) => this.searchBoxComponentService.getResults(config))
  );

  ngOnInit(): void {
    this.subscription = this.routingService
      .getRouterState()
      .pipe(filter((data: any) => !data.nextState))
      .subscribe((data) => {
        if (
          !(
            data.state.context?.id === 'search' &&
            data.state.context?.type === PageType.CONTENT_PAGE
          )
        )
          this.chosenWord = '';
      });
  }

  /**
   * Closes the searchBox and opens the search result page.
   */
  search(query: string): void {
    const sanitizedQuery = testRegex(query, REGULAR_PATTERN.alphaNumeric);
    this.searchBoxComponentService.search(
      this.sanitizer.sanitize(SecurityContext.HTML, sanitizedQuery),
      this.config
    );
    // force the searchBox to open
    this.open();
  }

  /**
   * Opens the type-ahead searchBox
   */
  open(): void {
    this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
  }

  /**
   * Dispatch UI events for Suggestion selected
   *
   * @param eventData the data for the event
   */
  dispatchSuggestionEvent(eventData: SearchBoxSuggestionSelectedEvent): void {
    this.searchBoxComponentService.dispatchSuggestionSelectedEvent(eventData);
  }

  /**
   * Dispatch UI events for Product selected
   *
   * @param eventData the data for the event
   */
  dispatchProductEvent(eventData: SearchBoxProductSelectedEvent): void {
    this.searchBoxComponentService.dispatchProductSelectedEvent(eventData);
  }

  /**
   * Closes the type-ahead searchBox.
   */
  close(event: UIEvent, force?: boolean): void {
    // Use timeout to detect changes
    setTimeout(() => {
      if ((!this.ignoreCloseEvent && !this.isSearchBoxFocused()) || force) {
        this.blurSearchBox(event);
      }
    });
  }

  protected blurSearchBox(event: UIEvent): void {
    this.searchBoxComponentService.toggleBodyClass(
      'searchbox-is-active',
      false
    );
    if (event && event.target) {
      (<HTMLElement>event.target).blur();
    }
  }

  // Check if focus is on searchbox or result list elements
  private isSearchBoxFocused(): boolean {
    return (
      this.getResultElements().includes(this.getFocusedElement()) ||
      this.winRef.document.querySelector('input[aria-label="search"]') ===
        this.getFocusedElement()
    );
  }

  /**
   * Especially in mobile we do not want the search icon
   * to focus the input again when it's already open.
   * */
  avoidReopen(event: UIEvent): void {
    if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
      this.close(event);
      event.preventDefault();
    }
  }

  // Return result list as HTMLElement array
  private getResultElements(): HTMLElement[] {
    return Array.from(
      this.winRef.document.querySelectorAll('.products > a, .suggestions > a')
    );
  }

  // Return focused element as HTMLElement
  private getFocusedElement(): HTMLElement {
    return <HTMLElement>this.winRef.document.activeElement;
  }

  updateChosenWord(chosenWord: string): void {
    this.chosenWord = this.sanitizer.sanitize(SecurityContext.HTML, chosenWord);
  }

  private getFocusedIndex(): number {
    return this.getResultElements().indexOf(this.getFocusedElement());
  }

  // Focus on previous item in results list
  focusPreviousChild(event: UIEvent) {
    event.preventDefault(); // Negate normal keyscroll
    const [results, focusedIndex] = [
      this.getResultElements(),
      this.getFocusedIndex(),
    ];
    // Focus on last index moving to first
    if (results.length) {
      if (focusedIndex < 1) {
        results[results.length - 1].focus();
      } else {
        results[focusedIndex - 1].focus();
      }
    }
  }

  // Focus on next item in results list
  focusNextChild(event: UIEvent) {
    this.open();
    event.preventDefault(); // Negate normal keyscroll
    const [results, focusedIndex] = [
      this.getResultElements(),
      this.getFocusedIndex(),
    ];
    // Focus on first index moving to last
    if (results.length) {
      if (focusedIndex >= results.length - 1) {
        results[0].focus();
      } else {
        results[focusedIndex + 1].focus();
      }
    }
  }

  /**
   * Opens the PLP with the given query.
   *
   * TODO: if there's a single product match, we could open the PDP.
   */
  launchSearchResult(
    event: UIEvent,
    query: string,
    launchCheck: boolean,
    e1: HTMLInputElement
  ): void {
    this.launchCheckFlag = launchCheck;
    const sanitizedQuery = this.sanitizer.sanitize(SecurityContext.HTML, query);
    if (!sanitizedQuery || sanitizedQuery.trim().length === 0) {
      return;
    }
    this.close(event);
    this.searchBoxComponentService.launchSearchPage(sanitizedQuery);
    e1.value = '';
    this.gotoProduct(launchCheck);
  }

  gotoProduct(launchCheck) {
    if (launchCheck) {
      this.results$.subscribe((results) => {
        let productUrl = '';
        if (results.products?.length === 1 && this.launchCheckFlag) {
          this.launchCheckFlag = false;
          productUrl = `/product/${encodeURIComponent(
            results.products[0].code
          )}/${encodeURIComponent(results.products[0].name)}`;
          this.router.navigateByUrl(productUrl);
        } else {
          this.launchCheckFlag = false;
        }
        this.cRef.detectChanges();
      });
    }
  }

  /* launchSearchResult(event: UIEvent, query: string, launchCheck: boolean): void {
    this.launchCheckFlag = launchCheck;

    if (!query || query.trim().length === 0) {
      return;
    }
    this.searchInput.nativeElement.value = '';
    this.searchQuery = this.searchInput.nativeElement.value;
    this.close(event);
    this.searchBoxComponentService.launchSearchPage(query);
    this.gotoProduct(launchCheck);
  } */

  /**
   * Disables closing the search result list.
   */
  disableClose(): void {
    this.ignoreCloseEvent = true;
  }

  preventDefault(ev: UIEvent): void {
    ev.preventDefault();
  }

  /**
   * Clears the search box input field
   */
  clear(el: HTMLInputElement): void {
    this.disableClose();
    el.value = '';
    this.searchBoxComponentService.clearResults();

    // Use Timeout to run after blur event to prevent the searchbox from closing on mobile
    setTimeout(() => {
      // Retain focus on input lost by clicking on icon
      el.focus();
      this.ignoreCloseEvent = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  openSearch() {
    this.searchFocusInput.nativeElement.blur();
    const searchDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_SEARCH,
      undefined,
      undefined,
      {}
    );
    if (searchDialog) {
      searchDialog.subscribe((value) => {});
    }
  }

  //Google analytics
  gtmSelectItemEvent(product) {
    let producitem: EcommerceItem[] = [];
    if (product) {
      producitem.push({
        item_id: product?.code,
        item_name: product?.name,
        discount: product?.discountPercentage
          ? +product?.discountPercentage
          : '',
        index: 0,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.Search,
        item_list_name: ItemListTypeEnum.Search,
        price: '', //discountPrice not available
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.Search,
        item_list_name: ItemListTypeEnum.Search,
        items: producitem,
      };
      let selectItemDataLayer: GTMDataLayer = {
        event: GtmEvents.SelectItem,
        store: StoreTypeEnum.Dsstore,
        ecommerce: purchaseEcommerceEcommerce,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
}
