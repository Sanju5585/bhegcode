import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SavedCartService } from '../../saved-cart/service/saved-cart.service';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import moment from 'moment';
import { CartType, ProductType } from '../../../shared/models/cartType.models';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { ItemListTypeEnum, GtmEvents } from '../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
@Component({
  standalone: false,
  selector: 'app-waygate-view-cart-details',
  templateUrl: './waygate-view-cart-details.component.html',
  styleUrls: ['./waygate-view-cart-details.component.scss'],
})
export class WaygateViewCartDetailsComponent implements OnInit {
  breadcrumbs: any[] = [];
  breakUpMenu = -1;
  showToggle: boolean;
  isSavecartCollapsed: boolean = false;
  data;
  public cartType = CartType;
  public productType = ProductType;
  nonFilmProduct: any[] = [];
  filmProduct: any[] = [];
  $subscription: Subscription;
  savedTime: string;
  commerceType: String;
  productLine: string;
  preventFlag: boolean = false;
  page: number = 0;
  pageSize: number = 100;
  type: string;
  sortCode: string = 'desc';
  loadingFlag: boolean = false;
  Msg: string = '';
  viewcartData: any;
  constructor(
    private savedCartService: SavedCartService,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService,
    private activatedRoute: ActivatedRoute,
    private customerAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.translate
        .translate('savedCart.saveCartTitle')
        .subscribe((res: string) => {
          this.breadcrumbs = [
            {
              url: `/${this.productLine}/saved-carts`,
              name: res,
            },
            {},
          ];
        });
    });
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('savedCart.saveCartTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.getCartCode();
  }
  getCartCode() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params?.cartId) {
        this.cartDetails(params?.cartId);
        this.breadcrumbs[1] = {
          name: params?.cartId,
        };
      }
    });
  }

  toggleButton() {
    this.showToggle = !this.showToggle;
  }

  cartDetails(cartId) {
    this.savedCartService.ViewCartDetail(cartId).subscribe(
      (data: any) => {
        this.data = data;
        this.commerceType = this.data.commerceType;
        this.getForamtedDate(this.data);
        if (this.data?.cartType == 'HYBRID') this.filmOrNonFilm(this.data);
        if (this.data?.locationMap.length > 1) this.locationWiseRMA(this.data);
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  getForamtedDate(data: any) {
    this.savedTime = moment(data?.saveTime).format('MMM Do YYYY, h:mm a');
  }

  filmOrNonFilm(items) {
    if (items.entries.length > 0) {
      for (let item of items.entries) {
        if (
          item.productType == this.productType.Typ1 ||
          item.productType == this.productType.Typ2
        ) {
          this.nonFilmProduct.push(item);
        } else if (item.productType == this.productType.Typ3) {
          this.filmProduct.push(item);
        }
      }
    }
  }

  locationWiseRMA(items) {
    if (items.locationMap.length > 1) {
      this.nonFilmProduct = items.returnsCartData.filter(
        (x) => x.returnLocationId == items.locationMap[0].key
      );
      this.filmProduct = items.returnsCartData.filter(
        (x) => x.returnLocationId == items.locationMap[1].key
      );
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  openPopup(type) {
    const viewSalesAreaDialog = this.launchDialogService.openDialog(
      DS_DIALOG.VIEW_SALES_AREA_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (viewSalesAreaDialog) {
      viewSalesAreaDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.savedCartService.setValidation({
      data: this.data,
      type: type,
      commerceType: this.commerceType,
    });
  }

  ngOnDestroy() {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }

  togglePriceBreakup(i) {
    if (this.breakUpMenu == i) {
      this.breakUpMenu = -1;
    } else this.breakUpMenu = i;
  }
  viewBreakUp(i) {
    return `#breakup${i}`;
  }

  getPositiveSilverClause(value) {
    if (value) {
      return Math.abs(value).toFixed(2);
    }
    return 0;
  }
  navigate() {
    this.router.navigate([`/${this.productLine}/saved-carts`]);
  }
  //Google Analytics
  gtmSelectItemEvent(entry) {
    if (entry) {
      let producitem: EcommerceItem[] = [];
      producitem.push({
        item_id: entry?.product?.code,
        item_name: entry?.product?.name,
        discount: entry?.discountPercentage ? +entry?.discountPercentage : '',
        index: 0,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.SavedCart,
        item_list_name: ItemListTypeEnum.SavedCart,
        price: entry?.discountPrice ? +entry?.discountPrice : '',
      });

      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.SavedCart,
        item_list_name: ItemListTypeEnum.SavedCart,
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

  filterData(page, pageSize, type, sortCode) {
    if (this.preventFlag) this.loadingFlag = true;
    else this.loadingFlag = false;
    this.viewcartData = [];
    this.savedCartService
      .getSavedCarts(page, pageSize, type, sortCode)
      .subscribe(
        (data: any) => {
          this.loadingFlag = true;
          if (data.saveCartsList.length > 0)
            this.viewcartData = data.saveCartsList;
          else this.Msg = this.getTranslatedText('savedCart.errors.recordMsg');
        },
        (error) => {
          this.loadingFlag = true;
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            10000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  openDeletePopup(code, name) {
    const componentData = {
      name: name,
    };
    const deleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (deleteDialog) {
      deleteDialog.pipe(take(1)).subscribe((value) => {
        console.log(value);
        if (value == 'delete' || value?.instance?.reason == 'delete') {
          this.deleteCart(code);
        }
      });
    }
  }

  deleteCart(cartId) {
    this.savedCartService.deleteSavedCart(cartId).subscribe(
      (res) => {
        this.preventFlag = true;
        this.globalMessageService.add(
          this.getTranslatedText('savedCart.cartDeleteSuccess'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        window.scrollTo(0, 0);
        this.router.navigate([`${this.productLine}/saved-carts`]);
        this.type = 'All';
        this.filterData(this.page, this.pageSize, this.type, this.sortCode);
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }
}
