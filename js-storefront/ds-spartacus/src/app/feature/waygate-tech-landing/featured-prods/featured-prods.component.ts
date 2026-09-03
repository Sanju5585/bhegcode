import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  CmsService,
  ContentSlotData,
  ConverterService,
  GlobalMessageService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  PRODUCT_NORMALIZER,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, combineLatest, fromEvent, of, pipe } from 'rxjs';
import { switchMap, take, withLatestFrom, zipWith } from 'rxjs/operators';
import { ApiService } from '../../../core/http/api.service';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ItemListTypeEnum, GtmEvents } from '../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  GTMDataLayer,
  EcommerceItem,
} from '../../../shared/models/googleTagManager.model';
import {
  productsContentSlot,
  productByCategoryDisplayFlag,
} from '../../../shared/products-constants';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';

export enum DsProductDetails {
  DSPRODUCTSFEATURED = 'FEATURED',
}
@Component({
  standalone: false,
  selector: 'app-featured-prods',
  templateUrl: './featured-prods.component.html',
  styleUrls: ['./featured-prods.component.scss'],
})
export class FeaturedProdsComponent implements OnInit {
  user$: Observable<unknown>;
  loggedIn: boolean;
  dsProductDetails = DsProductDetails;
  user: any;
  componentArraylist: any = [];
  productListItem: any = [];
  totalCards: number;
  currentPage: number = 1;
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string = '25%';
  pagePosition: string = '0%';
  timer: any;
  productsAPI: boolean = false;
  wayGateUrl = '/waygate';
  contentSlot$: Observable<ContentSlotData>;
  activeSalesArea: string;
  customerAccount: string;
  componentLoad: boolean = false;
  showLoading: boolean = false;
  selectedCategory = '';
  categories = [];
  productLine: string;
  slotPosition: string;
  iscontentAvailableFromSlot = false;
  isProductsDisplayAsPerCategory = false;
  productLine$: Observable<any>;
  userType = '';
  @HostListener('window:resize') windowResize() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.populatePagePosition();
    }
  }
  allProductLine = AllProductLine;

  constructor(
    private cmsService: CmsService,
    private apiService: ApiService,
    private windowRef: WindowRef,
    private cref: ChangeDetectorRef,
    private converterService: ConverterService,
    private userAccountFacade: UserAccountFacade,
    private authService: AuthService,
    private router: Router,
    private gtmService: GoogleTagManagerService,
    private custAccService: CustomerAccountService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.productLine$ = this.custAccService.getProductLine();
    this.user$ = this.authService.isUserLoggedIn();
    combineLatest([this.user$, this.productLine$])
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.loggedIn = response[0] as boolean;
          this.productLine = response[1];
          if (this.loggedIn) {
            this.userType = 'current';
          } else {
            this.userType = 'anonymous';
          }
          this.slotPosition = productsContentSlot[this.productLine];
          //if slot is know and got usertype then only api need to call
          if (this.slotPosition && this.userType) {
            this.productsAPI = true;
            this.componentLoad = true;
            this.callContentSlotAndApi();
          }
        },
        (error) => {
          window.scrollTo(0, 0);
        }
      );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  callContentSlotAndApi() {
    this.showLoading = true;
    this.cmsService
      .getContentSlot(this.slotPosition)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.componentArraylist = data?.components ?? [];
          if (this.componentArraylist.length > 0) {
            this.iscontentAvailableFromSlot = true;
            this.componentArraylist.forEach((component) => {
              this.cmsService.getComponentData(component?.uid).subscribe(
                (res: any) => {
                  if (
                    res?.componentType ===
                    this.dsProductDetails.DSPRODUCTSFEATURED
                  ) {
                    if (res?.productCodes) {
                      this.getFeaturedProducts(res, this.loggedIn);
                      // Removing this because of DE154288. Timeout is taking time to load Products
                      // setTimeout(() => {
                      // }, 5000);
                    }
                  }
                },
                (error) => this.hideLoader()
              );
            });
          } else {
            this.iscontentAvailableFromSlot = false;
          }
        },
        (error) => this.hideLoader()
      );
  }
  ngAfterViewInit(): void {
    if (this.windowRef?.nativeWindow?.innerWidth >= 992) {
      this.scrollProducts();
    } else {
      //products will be swappble before 992px
      this.swapCards();
    }
  }

  getFeaturedProducts(res, user) {
    const userType = user ? OCC_USER_ID_CURRENT : OCC_USER_ID_ANONYMOUS;
    let apiParams;
    let productCodeList = res?.productCodes?.split(' ').toString();
    console.log('featured component', userType, productCodeList);
    if (userType === OCC_USER_ID_ANONYMOUS) {
      const activeSalesArea =
        this.custAccService.getGuestActiveSalesAreaFromStorage();
      if (activeSalesArea?.saleAreaId) {
        this.activeSalesArea = activeSalesArea?.saleAreaId;
      } else if (this.productLine) {
        this.activeSalesArea =
          this.custAccService.getGuestSalesIdFromProductLine(this.productLine);
      }
      apiParams = {
        fields: 'FULL',
        guestSalesArea: this.activeSalesArea,
        productCodeList: productCodeList,
      };
    } else {
      this.custAccService.getCurrentCustomerAccount().subscribe((res: any) => {
        this.customerAccount = res?.uid || '';
        this.activeSalesArea = res.selectedSalesArea?.salesAreaId.split('_')[1];
      });
      apiParams = { fields: 'FULL', productCodeList: productCodeList };
    }
    let urlParams = ['users', userType, 'products', 'productList'];
    let url = this.apiService.constructUrl(urlParams);
    if (this.productsAPI) {
      this.isProductsDisplayAsPerCategory =
        productByCategoryDisplayFlag[this.productLine];
      this.apiService.getData(url, apiParams).subscribe(
        (data: any) => {
          this.categories = this.isProductsDisplayAsPerCategory
            ? [...new Set(data.map((product) => product.breadCrumbs[2]?.name))]
            : [];
          this.productsAPI = false;
          this.componentLoad = false;
          this.productListItem = data;
          this.selectedCategory = this.isProductsDisplayAsPerCategory
            ? this.categories[0]
            : '';
          this.productListItem = this.productListItem.map((product) =>
            this.converterService.convert(product, PRODUCT_NORMALIZER)
          );
          this.totalCards = this.isProductsDisplayAsPerCategory
            ? this.getProductsBYCategory(this.categories[0])?.length
            : this.productListItem.length;
          // this.totalCards = this.productListItem.length;
          this.cardsPerPage = this.getCardsPerPage();
          this.initializeSlider();
          this.hideLoader();
          this.pushAddToCartEvent();
        },
        (error) => this.hideLoader()
      );
    }
  }
  initializeSlider() {
    if (this.windowRef.isBrowser()) {
      this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
      if (this.windowRef.nativeWindow.innerWidth <= 991.98) {
        this.overflowWidth = `calc(${this.totalPages * 130}% + ${
          this.totalPages * 30
        }px)`;
        this.cardWidth = `calc((${70 / this.totalPages}% - ${
          this.cardsPerPage * 30
        }px) / ${this.cardsPerPage})`;
      } else {
        this.overflowWidth = `calc(${this.totalPages * 100}% + ${
          this.totalPages * 30
        }px)`;
        this.cardWidth = `calc((${100 / this.totalPages}% - ${
          this.cardsPerPage * 30
        }px) / ${this.cardsPerPage})`;
      }
      if (this.productLine == AllProductLine.bently) {
        if (this.windowRef.nativeWindow.innerWidth > 576)
          this.cardWidth = '100%';
      }
    }
  }
  getCardsPerPage() {
    if (this.windowRef.isBrowser()) {
      if (this.productLine == AllProductLine.bently) {
        if (this.windowRef.nativeWindow.innerWidth > 576) return 1;
      }

      if (this.windowRef.nativeWindow.innerWidth <= 576) {
        return 1;
      } else if (
        this.windowRef.nativeWindow.innerWidth > 576 &&
        this.windowRef.nativeWindow.innerWidth < 992
      ) {
        return 2;
      } else {
        return 3;
      }
    }
  }

  populatePagePosition() {
    if (this.windowRef.isBrowser()) {
      if (this.windowRef.nativeWindow.innerWidth <= 991.98) {
        this.pagePosition = `calc(${-90 * (this.currentPage - 1)}% + ${
          this.totalPages == this.currentPage &&
          this.currentPage > 1 &&
          this.totalCards % this.cardsPerPage != 0
            ? (this.cardsPerPage - (this.totalCards % this.cardsPerPage)) * 25
            : 0
        }% - ${
          this.totalPages == this.currentPage &&
          this.currentPage > 1 &&
          this.totalCards % this.cardsPerPage != 0
            ? 7.5 * (this.totalCards % this.cardsPerPage)
            : 15 * (this.currentPage - 1)
        }px)`;
      } else {
        this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% + ${
          this.totalPages == this.currentPage &&
          this.currentPage > 1 &&
          this.totalCards % this.cardsPerPage != 0 &&
          this.totalCards % this.cardsPerPage >= this.cardsPerPage
            ? (this.cardsPerPage - (this.totalCards % this.cardsPerPage)) * 25
            : 0
        }% - ${
          this.totalPages == this.currentPage &&
          this.currentPage > 1 &&
          this.totalCards % this.cardsPerPage != 0 &&
          this.totalCards % this.cardsPerPage >= this.cardsPerPage
            ? 7.5 * (this.totalCards % this.cardsPerPage)
            : 30 * (this.currentPage - 1)
        }px)`;
      }
    }
  }

  scrollProducts() {
    this.timer = setInterval(() => {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      } else {
        this.currentPage = 1;
      }
      this.populatePagePosition();
      this.cref.detectChanges();
    }, 5000);
  }

  changePage(incrementor) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  stopMovement() {
    clearTimeout(this.timer);
  }
  startMovement() {
    // this.scrollProducts();
  }

  getProductsBYCategory(name) {
    if (name) {
      return this.productListItem?.filter(
        (product) => product?.breadCrumbs[2]?.name == name
      );
    } else {
      return this.productListItem;
    }
  }

  tabClickForCategory(category: string, index: number) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.totalCards = this.getProductsBYCategory(
      this.categories[index]
    )?.length;
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    this.populatePagePosition();
    this.cref.detectChanges();
  }

  dispalyCategoryFromUI(cat) {
    const text = cat?.toLowerCase();
    switch (true) {
      case text?.includes('visual'):
        return this.getTranslatedText('waygate.visual');
      case text?.includes('ultrasonic'):
        return this.getTranslatedText('waygate.ultrasound');
      case text?.includes('film'):
        return this.getTranslatedText('waygate.filmProducts');
      case text?.includes('radiography'):
        return this.getTranslatedText('waygate.radiography');
      case text?.includes('generators'):
        return this.getTranslatedText('waygate.digitalImaging');
      default:
        return cat;
    }
  }

  hideLoader() {
    this.showLoading = false;
  }

  pushAddToCartEvent() {
    const item: Ecommerce = {
      item_list_id: ItemListTypeEnum.FeaturedProducts,
      item_list_name: ItemListTypeEnum.FeaturedProducts,
      items: this.productListItem.map((product, index) => {
        return {
          item_id: product?.code,
          item_name: product?.name,
          coupon: '',
          discount: product?.discountPercentage
            ? Number(product?.discountPercentage)
            : '',
          index: index,
          affiliation: this.gtmService.getItemBrand(),
          item_brand: this.gtmService.getItemBrand(),
          item_category: product?.breadCrumbs[0]?.name || '',
          item_category2: product?.breadCrumbs[1]?.name || '',
          item_category3: product?.breadCrumbs[2]?.name || '',
          item_category4: product?.breadCrumbs[3]?.name || '',
          item_category5: product?.breadCrumbs[4]?.name || '',
          item_list_id: ItemListTypeEnum.FeaturedProducts,
          item_list_name: ItemListTypeEnum.FeaturedProducts,
          quantity: 1,
        };
      }),
    };

    const eventData: GTMDataLayer = {
      event: GtmEvents.ViewItemList,
      store: this.gtmService.getItemBrand(),
      ecommerce: item,
    };
    this.gtmService.sendEvent(eventData);
  }

  //Google Analytics
  gtmSelectItemEvent(product) {
    if (product) {
      let producitem: EcommerceItem[] = [];

      producitem.push({
        item_id: product?.code,
        item_name: product?.name,
        discount: product?.discountPercentage || '',
        index: 0,
        item_brand: this.gtmService.getItemBrand(),
        item_category: product?.breadCrumbs[0]?.name || '',
        item_category2: product?.breadCrumbs[1]?.name || '',
        item_category3: product?.breadCrumbs[2]?.name || '',
        item_category4: product?.breadCrumbs[3]?.name || '',
        item_category5: product?.breadCrumbs[4]?.name || '',
        item_list_id: ItemListTypeEnum.SavedCart,
        item_list_name: ItemListTypeEnum.FeaturedProducts,
        price: product?.discountPrice ? +product?.discountPrice : '',
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.FeaturedProducts,
        item_list_name: ItemListTypeEnum.FeaturedProducts,
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

  swapCards() {
    if (this.windowRef.nativeWindow.innerWidth < 991.98) {
      fromEvent<TouchEvent>(document, 'touchstart')
        .pipe(
          zipWith(
            fromEvent<TouchEvent>(document, 'touchend').pipe(
              withLatestFrom(fromEvent<TouchEvent>(document, 'touchmove'))
            )
          )
        )
        .subscribe(([touchstart, [_, touchmove]]) => {
          const xDiff =
            touchstart.touches[0].clientX - touchmove.touches[0].clientX;
          if (
            Math.abs(xDiff) > 0.3 * document.body.clientWidth &&
            touchstart.timeStamp <= touchmove.timeStamp
          ) {
            if (xDiff > 0) {
              if (this.currentPage != this.totalPages) {
                console.log('right swipe');
                this.changePage(+1);
              }
            } else {
              if (this.currentPage != 1) {
                this.changePage(-1);
                console.log('left swipe');
              }
            }
          }
        });
    }
  }
}
