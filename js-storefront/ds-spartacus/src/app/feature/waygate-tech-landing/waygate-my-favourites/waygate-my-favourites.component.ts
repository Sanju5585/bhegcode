import { Component, SecurityContext } from '@angular/core';
import { MyFavoritesService } from '../../my-favorites/my-favorites.service';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { concatMap, take } from 'rxjs/operators';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { LandingPagesService } from '../../landing/landing-pages.service';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { ItemListTypeEnum, GtmEvents } from '../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  EcommerceItem,
  GTMDataLayer,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-waygate-my-favourites',
  templateUrl: './waygate-my-favourites.component.html',
  styleUrls: ['./waygate-my-favourites.component.scss'],
})
export class WaygateMyFavouritesComponent {
  checkedSingleFav: boolean = false;
  noData: boolean = true;
  loadingFlag: boolean = false;
  full = true;
  isPriceNotFound = false;
  favouritesData: any;
  searchTerm: string = '';
  searchflag: boolean = true;
  indeterminateValue: any;
  pageNumber: any;
  totalPages: any;
  currentPage = 0;
  pageSize: 20;
  totalOrders_excel: any;
  favMsg: any;
  checkedCount: number = 0;
  partNumber;
  cartId;
  breadcrumbs: any[] = [];
  currency: any;
  currencySymbol: any;
  checkValidatedStatus: boolean;
  bulkUploadList: any = [];
  eventListData: any = [];
  breakUp = false;
  breakUpMenu = -1;
  productLine: string;
  constructor(
    private myfavouritedelete: MyFavoritesService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    public sanitizer: DomSanitizer,
    private activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    private productCatService: ProductCatelogService,
    private gtmService: GoogleTagManagerService,
    private actions$: Actions,
    private landingPageService: LandingPagesService,
    private router: Router,
    private customerAccService: CustomerAccountService
  ) {}
  ngOnInit(): void {
    // this.loadingFlag = true;
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.translate
        .translate('favorites.pageTitle')
        .subscribe((res: string) => {
          this.breadcrumbs = [
            {
              name: res,
              url: `/${this.productLine}/my-favorites`,
            },
          ];
        });
    });
    this.getFavoritesdata('');
    this.checkAll();
  }

  getFavoritesdata(searchTerm) {
    this.loadingFlag = true;
    this.myfavouritedelete
      .getFavourites(searchTerm, 0)
      .pipe(take(1))
      .subscribe(
        (code) => {
          this.currentPage = 0;
          this.favouritesData = code;
          this.totalPages = this.favouritesData.pagination.totalPages;
          this.loadingFlag = false;
        },
        (error) => {}
      );
  }
  /* checkbox selection all */
  selectAllchecbox(e) {
    this.checkedSingleFav = e.target.checked;
    this.favouritesData?.productList.map((code) => {
      if (
        code?.yourPrice?.value &&
        code?.productAccessData?.isPresentInAllowedProdPrincipal
      ) {
        code['checked'] = e.target.checked;
      }
    });
    this.checkAll();
  }
  /* single checkbox selection all */
  selectCheckbox(e, i) {
    this.favouritesData.productList[i]['checked'] = e.target.checked;
    if (e.target.checked) this.checkedCount++;
    else this.checkedCount--;
  }
  addToCart(type, data, index) {
    // this.partNumber = partNumber;
    let currentCartType = 'BUY';
    let userType = OCC_USER_ID_CURRENT;
    let selectedItemcode = [];
    let delectcheckall = document.getElementById('checkall');
    let ismultislecttrue = delectcheckall['isChecked'];
    if (type == 'all') {
      for (var i = 0; i < this.favouritesData.productList?.length; i++) {
        if (
          (this.favouritesData.productList[i]['checked'] == true ||
            ismultislecttrue == true) &&
          this.favouritesData.productList[i]?.yourPrice?.value &&
          this.favouritesData.productList[i]?.productAccessData
            ?.isPresentInAllowedProdPrincipal
        ) {
          selectedItemcode.push({
            productCode: this.favouritesData.productList[i].code,
            quantity: 1,
          });
        }
      }
    } else if (type == 'selected') {
      let obj = {
        productCode: this.favouritesData.productList[index].code,
        quantity: 1,
      };

      selectedItemcode.push(obj);
    }

    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          // let cartId = activeCart.code;
          this.cartId = activeCart.code;
          if (activeCart.entries?.length > 0) {
            this.uploadData(selectedItemcode);
          } else {
            return this.productCatService.saveCartType(
              this.cartId,
              currentCartType,
              userType
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          this.uploadData(selectedItemcode);
        }
      });
  }
  uploadData(selectedItemcode) {
    this.loadingFlag = true;
    this.landingPageService
      .createCopyPasteOrder(this.cartId, selectedItemcode, this.productLine)
      .subscribe(
        (res: any) => {
          this.landingPageService.sendBulkOrderList({
            data: res,
            cartId: this.cartId,
          });
          this.loadingFlag = false;

          if (res?.validatedBulkUploadList) {
            let currValidatePriceData = res?.validatedBulkUploadList;
            this.currency = res?.currencyISO;
            this.currencySymbol = res?.currencyFormattedValue;
            currValidatePriceData.forEach((element, i) => {
              if (
                (currValidatePriceData[i]?.status != 'Validated' &&
                  currValidatePriceData[i]?.status != 'Check Price') ||
                !currValidatePriceData[i]?.productAccessData
                  ?.isPresentInAllowedProdPrincipal
              ) {
                this.globalMessageService.add(
                  `Cannot add this part ${currValidatePriceData[i].partNum}`,
                  GlobalMessageType.MSG_TYPE_WARNING,
                  10000
                );
              } else {
                this.eventListData.push(currValidatePriceData[i]);
                this.bulkUploadList.push({
                  lineNo: i,
                  availableStock: currValidatePriceData[i].quantity,
                  partNum: currValidatePriceData[i].partNum,
                  description: currValidatePriceData[i].description,
                  price: currValidatePriceData[i]?.listPrice?.value,
                  status: 'Validated',
                  quantity: currValidatePriceData[i].quantity,
                  productSNo: currValidatePriceData[i].productSNo,
                  configurationflag: '',
                  actualQuantity: currValidatePriceData[i].quantity,
                  configurationValid:
                    currValidatePriceData[i].configurationValid,
                  showPrice:
                    currValidatePriceData[i].status === 'Validated'
                      ? true
                      : false,
                  disabled: currValidatePriceData[i]?.productAccessData?.isBuy
                    ? false
                    : true,
                });
              }
            });

            if (this.bulkUploadList.length > 0) {
              this.uploadContent();
            }
          } else {
            this.globalMessageService.add(
              this.getTranslatedText('loggedinHome.errorMessage'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
          }
        },
        (error) => {
          // this.showSpinner = false;
          this.globalMessageService.add(
            this.getTranslatedText('loggedinHome.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
        }
      );
  }
  uploadContent() {
    //this.showLoader = true;
    const unique = [];

    let param = {
      callingsourceinfo: 'Cart Validate Page',
      cartDetailTable_length: 50,
      bulkUploadList: this.bulkUploadList,
      currencyIso: this.currency,
      currencySymbol: this.currencySymbol,
    };
    this.landingPageService.addBulkOrder(this.cartId, param).subscribe(
      (res) => {
        this.multiCartFacade.loadCart({
          cartId: this.cartId,
          userId: 'current',
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
          .pipe(take(1))
          .subscribe(
            (r) => {
              this.pushEventToGtm(r);
              //this.showLoader = false;
              this.router.navigate([`/${this.productLine}/cart`]);
            },
            (e) => {
              this.globalMessageService.add(
                this.getTranslatedText('quickorder.errorAddingToCart'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            }
          );
      },
      (error) => {
        //this.showLoader = false;
      }
    );
  }
  /*Delete of favourites Data */
  DeleteFavorites(e, type, index) {
    var selectedItemcode = [];
    var delectcheckall = document.getElementById('checkall');
    var ismultislecttrue = delectcheckall['isChecked'];
    if (type == 'deleteselected') {
      for (var i = 0; i < this.favouritesData.productList?.length; i++) {
        if (
          this.favouritesData.productList[i]['checked'] == true ||
          ismultislecttrue == true
        ) {
          selectedItemcode.push(this.favouritesData.productList[i].code);
          this.globalMessageService.add(
            this.getTranslatedText('favorites.error.removeMsg'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            2000
          );
        }
      }
    } else {
      selectedItemcode.push(this.favouritesData.productList[index].code);
      this.globalMessageService.add(
        this.getTranslatedText('favorites.error.removeMsg'),
        GlobalMessageType.MSG_TYPE_CONFIRMATION,
        2000
      );
    }
    this.myfavouritedelete
      .removeFromWishlist(selectedItemcode)
      .pipe(take(1))
      .subscribe((code) => {
        this.pageNumber = 0;
        this.myfavouritedelete
          .getFavourites(this.searchTerm, this.pageNumber)
          .pipe(take(1))
          .subscribe(
            (code: any) => {
              this.favouritesData = code;
              this.currentPage = this.favouritesData.pagination.currentPage;
              this.totalPages = this.favouritesData.pagination.totalPages;
              this.loadingFlag = false;
            },
            (error) => {}
          );
      });
    this.getFavoritesdata('');
  }
  /* clear search */
  clearSearch() {
    this.searchflag = true;
    this.searchTerm = '';
    this.getFavoritesdata('');
  }
  /* search function */
  modelChange(e) {
    this.searchTerm = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.searchTerm.trim()),
      REGULAR_PATTERN.alphaNumeric
    );
    this.getFavoritesdata(this.searchTerm);
    this.searchflag = false;
    // this.loadingFlag = false;
  }
  /*indeterminate checkbox  function */
  checkAll() {
    this.indeterminateValue = false;
    this.checkedCount = 0;
    this.favouritesData?.productList.map((code) => {
      if (
        code?.yourPrice?.value &&
        code?.productAccessData?.isPresentInAllowedProdPrincipal
      ) {
        if (code.checked == true) {
          this.checkedCount++;
        }
      }
    });
    if (this.checkedCount == this.favouritesData?.productList?.length) {
      return true;
    } else {
      if (
        this.checkedCount > 0 &&
        this.checkedCount < this.favouritesData?.productList?.length
      ) {
        this.indeterminateValue = true;
        return false;
      }
      return false;
    }
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  togglePriceBreakup(i) {
    if (this.breakUpMenu == i) {
      this.breakUpMenu = -1;
    } else this.breakUpMenu = i;
  }

  pushEventToGtm(cartResponse) {
    let price = 0;

    const eventData: Ecommerce = {
      currency: this.currency,
      value: cartResponse?.payload?.cartData?.totalPrice?.value
        ? cartResponse?.payload?.cart?.totalPrice?.value
        : '',
      items: this.eventListData.map((product, index): EcommerceItem => {
        return {
          item_id: product.partNum,
          quantity: product.quantity,
          item_name: product.description,
          price: product.priceAvailabilityData.yourPrice.value,
          discount: product.priceAvailabilityData.discountPercentage,
          item_list_id: ItemListTypeEnum.MyFavourite,
          item_list_name: ItemListTypeEnum.MyFavourite,
          item_brand: this.gtmService.getItemBrand(),
          index: index,
        };
      }),
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: this.gtmService.getItemBrand(),
      ecommerce: eventData,
    };

    this.gtmService.sendEvent(event);
  }

  //Google Analytics
  gtmSelectItemEvent(product, indx) {
    if (product) {
      let producitem: EcommerceItem[] = [];
      producitem.push({
        item_id: product?.code,
        item_name: product?.name,
        discount: product?.discountPercentage
          ? +product?.discountPercentage
          : '',
        index: indx,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.MyFavourite,
        item_list_name: ItemListTypeEnum.MyFavourite,
        price: product?.discountPrice ? +product?.discountPrice : '',
        item_category: product?.parentCategoryName,
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.MyFavourite,
        item_list_name: ItemListTypeEnum.MyFavourite,
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
}
