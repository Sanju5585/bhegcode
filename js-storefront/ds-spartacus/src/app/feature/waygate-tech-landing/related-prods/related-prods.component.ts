import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  AuthService,
  ConverterService,
  PRODUCT_NORMALIZER,
  WindowRef,
} from '@spartacus/core';
import { Observable, combineLatest, fromEvent } from 'rxjs';
import { take, withLatestFrom, zipWith } from 'rxjs/operators';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ItemListTypeEnum, GtmEvents } from '../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  GTMDataLayer,
  EcommerceItem,
} from '../../../shared/models/googleTagManager.model';

@Component({
  standalone: false,
  selector: 'app-related-prods',
  templateUrl: './related-prods.component.html',
  styleUrls: ['./related-prods.component.scss'],
})
export class RelatedProdsComponent implements OnInit {
  @Input() products: any = [];
  totalCards: number;
  currentPage: number = 1;
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string = '25%';
  pagePosition: string = '0%';
  timer: any;
  showLoading: boolean = false;
  productLine: string;
  productLine$: Observable<any>;
  user$: Observable<unknown>;
  @HostListener('window:resize') windowResize() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.populatePagePosition();
    }
  }

  constructor(
    private windowRef: WindowRef,
    private cref: ChangeDetectorRef,
    private converterService: ConverterService,
    private gtmService: GoogleTagManagerService,
    private custAccService: CustomerAccountService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productLine$ = this.custAccService.getProductLine();
    this.user$ = this.authService.isUserLoggedIn();
    combineLatest([this.productLine$])
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.productLine = response[0];
        },
        error: (error) => {
          window.scrollTo(0, 0);
        },
      });
    this.getRelatedProducts();
  }

  ngAfterViewInit(): void {
    if (this.windowRef?.nativeWindow?.innerWidth >= 992) {
      this.scrollProducts();
    } else {
      //products will be swappble before 992px
      this.swapCards();
    }
  }

  getRelatedProducts() {
    this.products = this.products.map((product) =>
      this.converterService.convert(product, PRODUCT_NORMALIZER)
    );
    this.totalCards = this.products.length;
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
    this.hideLoader();
    this.pushAddToCartEvent();
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
    }
  }

  getCardsPerPage() {
    if (this.windowRef.isBrowser()) {
      if (this.windowRef.nativeWindow.innerWidth <= 576) {
        return 1;
      } else if (
        this.windowRef.nativeWindow.innerWidth > 576 &&
        this.windowRef.nativeWindow.innerWidth < 992
      ) {
        return 2;
      } else {
        return 4;
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

  hideLoader() {
    this.showLoading = false;
  }

  pushAddToCartEvent() {
    const item: Ecommerce = {
      item_list_id: ItemListTypeEnum.FeaturedProducts,
      item_list_name: ItemListTypeEnum.FeaturedProducts,
      items: this.products.map((product, index) => {
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
          price: product?.yourPrice?.value || '',
          quantity: '',
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
                this.changePage(+1);
              }
            } else {
              if (this.currentPage != 1) {
                this.changePage(-1);
              }
            }
          }
        });
    }
  }
}
