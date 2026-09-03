import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  ProductActions,
  ProductScope,
  ProductService,
  TranslationService,
} from '@spartacus/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { ProductDetailService } from '../services/product-detail.services';
import { MyFavoritesService } from '../../my-favorites/my-favorites.service';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { BuyActions } from '../../../core/product-catalog/model/product-catelog.model';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { SpinnerOverlayService } from '../../../shared/components/spinner-overlay/spinner-overlay.service';
import {
  GtmEvents,
  StoreTypeEnum,
  ItemListTypeEnum,
} from '../../../shared/enums/gtm.enum';
import { Discounts } from '../../../shared/models/discounts.model';
import { GTMDataLayer } from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-custom-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss'],
})
export class ProductIntroComponent implements OnInit, OnDestroy {
  product$: Observable<any>;
  openMenu = false;
  userType: string;
  loggedIn: boolean;
  obsoleteProductMsg = true;
  count = 1;
  favStatus: boolean = false;
  currentBuyAction;
  buyActions = BuyActions;
  productCode;
  isPriceAvailable: boolean = true;
  product: any;

  constructor(
    private currentProductService: CurrentProductService,
    private auth: AuthService,
    private globalMessageService: GlobalMessageService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private productCatService: ProductCatelogService,
    private actions$: Actions,
    private productService: ProductService,
    private productDetailsService: ProductDetailService,
    private spinnerService: SpinnerOverlayService,
    private breadcrumbService: BreadcrumbService,
    private myFavouritesService: MyFavoritesService,
    private custAccountService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    // this.productDetailsService.getCode().subscribe((code) => {
    //   this.productCode = code;
    // });
    // this.currentProductService.getProduct(ProductScope.DETAILS);
    /* this.product$ = this.actions$.pipe(
      ofType(ProductActions.LOAD_PRODUCT_SUCCESS),
      map((action: ProductActions.LoadProductSuccess) => action.payload)
    ); */
    // this.actions$
    //   .pipe(
    //     ofType(ProductActions.LOAD_PRODUCT_SUCCESS),
    //     map((action: ProductActions.LoadProductSuccess) => action.payload)
    //   )
    //   .subscribe((res: any) => {
    //     if (res?.productAccessData) {
    //       this.product$ = of(res);
    //       this.cd.detectChanges();
    //     }
    //   });

    this.product$ = this.currentProductService.getProduct(ProductScope.DETAILS);
    this.product$?.subscribe((response) => {
      this.product = response;
      this.productCode = response?.code;
      if (
        (response !== null && response['errorCode'] === '400') ||
        response?.nonEcommerceFlag ||
        response?.nonEcommerceFlag != undefined
      ) {
        this.globalMessageService.add(
          this.getTranslatedText('pdp.productNotAccessible'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
        this.router.navigate(['/page-not-found']);
      }
      if (response !== null && response !== undefined) {
        const viewItemDataLayer: GTMDataLayer = {
          event: GtmEvents.ViewItem,
          store: StoreTypeEnum.Dsstore,
          ecommerce: {
            currency: this.product?.listPrice?.currencyIso || '',
            value: this.product?.yourPrice?.value || '',
            items: [
              {
                item_id: this.product?.code,
                item_name: this.product?.name,
                index: 0,
                item_brand: this.gtmService.getItemBrand(),
                item_category: this.product?.breadCrumbs[0].name || '',
                item_category2: this.product?.breadCrumbs[1].name || '',
                item_category3: this.product?.breadCrumbs[2].name || '',
                item_category4: this.product?.breadCrumbs[3].name || '',
                item_category5: this.product?.breadCrumbs[4].name || '',
                item_list_id: ItemListTypeEnum.ProductDetail,
                item_list_name: ItemListTypeEnum.ProductDetail,
                price: this.product?.yourPrice?.value,
              },
            ],
          },
        };
        if (
          this.product &&
          this.product?.estShipData &&
          this.product?.estShipData[0]?.stockQty
        ) {
          viewItemDataLayer.ecommerce.items[0].quantity = Number(
            this.product?.estShipData[0]?.stockQty
          );
        }
        this.gtmService.sendEvent(viewItemDataLayer);
        if (response.price.value == 0) {
          this.isPriceAvailable = false;
        }
        this.spinnerService.hide();
        this.currentBuyAction = this.productCatService.getBuyAction(response);
        // this.favStatus = response['favouritesFlag'];
        this.renderBreadcrumbs(response.breadCrumbs);
        this.cd.detectChanges();
      }

      this.productService.isLoading(this.productCode).subscribe((res) => {
        if (res) {
          this.spinnerService.show();
        } else {
          this.spinnerService.hide();
        }
      });

      this.auth.isUserLoggedIn().subscribe((success) => {
        if (success) {
          this.loggedIn = true;
          this.userType = 'current';
        } else {
          this.loggedIn = false;
          this.userType = 'anonymous';
          if (this.userType == OCC_USER_ID_ANONYMOUS && this.productCode) {
            this.custAccountService.disableChangeAccount.next(true);
            this.productCatService.updateGuestSalesAreaFromCatCode(
              this.productCode,
              'PDP'
            );
          }
        }
      });
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getTotalDiscounts(discounts) {
    let totalDisc = 0;
    for (const disc of discounts) {
      totalDisc += disc.value;
    }
    return totalDisc.toFixed(2);
  }

  getDiscountName(code) {
    return Discounts[code];
  }

  openBreakup() {
    this.openMenu = !this.openMenu;
  }

  closeMenu(event) {
    this.openMenu = false;
  }

  closeObsolete() {
    this.obsoleteProductMsg = false;
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  ngOnDestroy() {
    this.count = 1;
    this.custAccountService.disableChangeAccount.next(false);
  }

  onFavoriteClick(product) {
    if (this.favStatus == false) {
      this.myFavouritesService
        .addtowhishlist({ productCodes: product.code })
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productAddedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favStatus = true;
          this.cd.detectChanges();
        });
    } else {
      this.myFavouritesService
        .removeFromWishlist([product.code])
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productRemovedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favStatus = false;
          this.cd.detectChanges();
        });
    }
  }

  renderBreadcrumbs(breadcrumbs: []) {
    const breadcrumb: any = [];
    if (breadcrumbs?.length <= 0) {
      return;
    }
    let title = '';
    breadcrumbs?.forEach((el: any) => {
      if (el.categoryCode) {
        breadcrumb.push({
          label: el.name,
          link: el.url,
        });
      } else {
        title = el.name;
      }
    });
    this.breadcrumbService.setBreadCrumbs(breadcrumb);
    this.breadcrumbService.setBreadcrumbTitle(
      title || breadcrumb.slice(-1)?.label
    );
  }
}
