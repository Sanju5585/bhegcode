import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  LaunchDialogService,
  SearchBoxComponentService,
  SearchBoxConfig,
  SearchResults,
} from '@spartacus/storefront';
import { exhaustMap, Observable, Subject, takeUntil } from 'rxjs';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { ItemListTypeEnum, GtmEvents } from '../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
  GTMCartType,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import {
  AuthService,
  ProductScope,
  ProductService,
  WindowRef,
} from '@spartacus/core';
import { OfflineSearchService } from '../../../core/product-catalog/services/offline-search.service';
import { ApiService } from '../../../core/http/api.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { HttpParams } from '@angular/common/http';
import { SpinnerOverlayService } from '../../../shared/components/spinner-overlay/spinner-overlay.service';
import { error } from 'console';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';

@Component({
  standalone: false,
  selector: 'app-waygate-search-dialog',
  templateUrl: './waygate-search-dialog.component.html',
  styleUrls: ['./waygate-search-dialog.component.scss'],
})
export class WaygateSearchDialogComponent implements OnInit, AfterViewInit {
  DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
    minCharactersBeforeRequest: 3,
    displayProducts: true,
    displaySuggestions: false,
    displayProductImages: true,
  };
  zeroscenario: boolean = true;
  completeLongPartNumberValid: boolean = false;
  isDummyProduct: boolean = false;
  onlyBaseProductValid: boolean = false;
  dummyText: string = '';
  actualProductCode: string = '';
  longPartNumber: string = '';
  productIsBuyValue: boolean = false;
  productName: string = '';
  @ViewChild('searchInputWaygate') searchInputWaygate: ElementRef;
  results$: Observable<SearchResults> =
    this.searchBoxComponentService.getResults(this.DEFAULT_SEARCH_BOX_CONFIG);
  searchQuery: string;
  productLine: string;
  userType: any;
  cartId: any;
  private readonly addToCart$ = new Subject<void>();
  private readonly destroy$ = new Subject<void>();
  allProductLine = AllProductLine;
  product: any;
  constructor(
    protected launchDialogService: LaunchDialogService,
    private searchBoxComponentService: SearchBoxComponentService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private custAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private productService: ProductService,
    private offlineService: OfflineSearchService,
    private auth: AuthService,
    private apiService: ApiService,
    private activeCartFacade: ActiveCartFacade,
    private winRef: WindowRef,
    private cdr: ChangeDetectorRef,
    private spinnerOverLayService: SpinnerOverlayService
  ) {}
  ngOnInit() {
    (window as any).isSearchOpen = true;
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.auth.isUserLoggedIn().subscribe((success) => {
      if (success) {
        this.userType = 'current';
      } else {
        this.userType = 'anonymous';
      }
    });

    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
    this.addToCart$
      .pipe(
        exhaustMap(() => {
          let urlParams = [
            'users',
            this.userType,
            'carts',
            this.cartId,
            'longNumberEntry',
          ];
          let url = this.apiService.constructUrl(urlParams);
          let params = new HttpParams().set('longNumber', this.longPartNumber);
          return this.apiService.postData(url, {}, { params });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res) => {
          this.winRef.location.href = `/${this.productLine}/cart`;
          this.launchDialogService.closeDialog('go to product');
          this.pushEventToGtm();
        },
        error: (error) => console.log(error),
      });
  }
  ngAfterViewInit(): void {
    this.searchInputWaygate.nativeElement.focus();
  }
  search(event) {
    this.searchQuery = event.target.value;

    this.zeroscenario = true;
    this.completeLongPartNumberValid = false;
    this.isDummyProduct = false;
    this.onlyBaseProductValid = false;
    const sanitizedQuery = testRegex(
      event.target.value,
      REGULAR_PATTERN.alphaNumeric
    );
    if (sanitizedQuery.length > 2) {
      this.searchBoxComponentService.search(
        this.sanitizer.sanitize(SecurityContext.HTML, sanitizedQuery),
        this.DEFAULT_SEARCH_BOX_CONFIG
      );
      this.cdr.detectChanges();
    } else {
      this.searchBoxComponentService.clearResults();
      this.cdr.detectChanges();
    }
  }
  goToPage() {
    this.router.navigate([
      `/${this.productLine}/search/${encodeURIComponent(this.searchQuery)}`,
    ]);
  }
  closeDialog(reason, product?) {
    console.log(product);
    
  (window as any).isSearchOpen = false;  

    this.gtmSelectItemEvent(product);
    this.launchDialogService.closeDialog(reason);
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
        price: product?.discountPrice ? +product?.discountPrice : '',
      });

      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.Search,
        item_list_name: ItemListTypeEnum.Search,
        items: producitem,
      };
      let selectItemDataLayer: GTMDataLayer = {
        event: GtmEvents.SelectItem,
        store: this.gtmService.getItemBrand(),
        ecommerce: purchaseEcommerceEcommerce,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
  validatePartNumber() {
    this.dummyText = this.searchQuery;
    this.zeroscenario = false;
    this.completeLongPartNumberValid = false;
    this.isDummyProduct = false;
    this.onlyBaseProductValid = false;
    this.productIsBuyValue = false;
    let urlParams = ['users', this.userType, 'products', 'validatePartNo'];
    let url = this.apiService.constructUrl(urlParams);

    this.apiService
      .getData(url, {
        productCode: this.dummyText,
      })
      .subscribe((res) => {
        this.product = res;
        if (res['dummyProduct'] === true) {
          this.isDummyProduct = true;
          this.actualProductCode = this.dummyText;
        } else if (
          res['baseProductValid'] === true &&
          res['configurationValid'] === false
        ) {
          this.onlyBaseProductValid = true;
          this.actualProductCode = res['actualProductCode'];
          this.longPartNumber = res['code'];
          this.productName = res['name'];
        } else if (
          res['baseProductValid'] === true &&
          res['configurationValid'] === true
        ) {
          this.completeLongPartNumberValid = true;
          this.productIsBuyValue = res['productAccessData']['isBuy'];
          this.longPartNumber = res['code'];
          this.actualProductCode = res['actualProductCode'];
        }
      });
  }
  navigateTo() {
    this.router.navigate([
      '/',
      this.productLine,
      'product',
      this.actualProductCode,
      this.productName,
    ]);

    this.launchDialogService.closeDialog('go to product');
  }
  addToCart(longPartNumber) {
    this.longPartNumber = longPartNumber;
    this.addToCart$.next();
  }
  searchOffline(product?) {
    this.offlineService.toggleFlag();

    this.productService
      .get(this.searchQuery, ProductScope.DETAILS)
      .subscribe((data: any) => {
        if (data.dummyProduct === false) {
          this.router.navigate([
            '/',
            this.productLine,
            'product',
            data.actualProductCode,
            data.name,
          ]);
        } else {
          this.router.navigate([
            this.productLine,
            'partplaceholder',
            data.name,
          ]);
        }

        this.gtmSelectItemEvent(product);
        this.launchDialogService.closeDialog('go to product');
      });
  }
  pushEventToGtm() {
    let price = 0;
    const eventData: Ecommerce = {
      currency: this.product?.price?.currencyIso,
      value: price ? price : '',
      items: [
        {
          item_id: this.product.actualProductCode,
          quantity: 1,
          item_name: this.product.name,
          price: this.product.configurable
            ? ''
            : this.product?.priceAvailabilityData?.yourPrice?.value,
          discount: this.product.configurable
            ? ''
            : this.product?.priceAvailabilityData?.discountPercentage,
          item_brand: this.gtmService.getItemBrand(),
          index: 0,
        },
      ],
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: this.gtmService.getItemBrand(),
      ecommerce: eventData,
      vcBaseProductCode: this.product?.code,
      vcPrice: this.product?.priceAvailabilityData?.yourPrice?.value,
      vcBaseProductName: this.product?.name,
      vcPosition: 'Seach Dialog Add to Cart',
      commerceType: GTMCartType.BUY_CART,
    };
    this.gtmService.sendEvent(event);
  }
}
