import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { RmaService } from '../../rma-services/rma.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions, CartConfigService } from '@spartacus/cart/base/core';
import { OccCartAdapter } from '@spartacus/cart/base/occ';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import {
  NONFILM,
  FILM,
  HazardDetails,
  CartTypes,
  CommerceTypes,
} from '../../../../shared/models/commerceTypes.model';

@Component({
  standalone: false,
  selector: 'ds-rma-cart-container',
  templateUrl: './rma-cart-container.component.html',
  host: { class: 'RmaCartPageTemplate' },
  styleUrls: ['./rma-cart-container.component.scss'],
})
export class RmaCartContainerComponent implements OnInit, OnDestroy {
  public cart$: Observable<any> = this.activeCartFacade.getActive();
  selectAll: boolean = false;
  selectedProducts = [];
  readonly NON_FILM = NONFILM;
  readonly A_FILM = FILM;
  hazardStatus: any;
  hazardDetails = HazardDetails;
  cartTypes = CartTypes;
  distinctPlantList: any[] = [];
  allPlants: any[] = [];
  expandFilm = false;
  expandNonFilm = false;
  cartId: string;
  loggedIn = false;
  cartSubscription: Subscription;
  itemsCountExAccessories;
  userType = OCC_USER_ID_CURRENT;

  constructor(
    private activeCartFacade: ActiveCartFacade,
    private rmaService: RmaService,
    private multiCartFacade: MultiCartFacade,
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    protected authService: AuthService,
    private globalMessageService: GlobalMessageService,
    private actions$: Actions,
    private occCartAdapter: OccCartAdapter,
    private productCatService: ProductCatelogService,
    protected cartConfig: CartConfigService
  ) {}

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('rma-cart.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    // .unsubscribe();

    this.getHazardStatus();

    this.cartSubscription = this.cart$.subscribe((cart) => {
      this.itemsCountExAccessories = 0;
      this.allPlants = [];
      this.cartId = cart?.code;
      cart.returnsCartData?.map((item) => {
        // item.availableSites.map((site) => this.allPlants.push(site))
        this.allPlants.push({
          siteId: item?.returnLocationId,
          siteName: item?.returnLocation,
        });
        if (!item.parentEntryNumber) {
          this.itemsCountExAccessories++;
        }
      });
      this.distinctPlantList = [
        ...new Set(this.allPlants.map((item) => item.siteId)),
      ];
    });

    /* this.cartId$.subscribe((cartId) => {
      this.cartId = cartId;
    }); */
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  getHazardStatus() {
    this.rmaService
      .getHazardCompleteness(OCC_USER_ID_CURRENT)
      .subscribe((hazardStatus) => (this.hazardStatus = hazardStatus));
  }

  checkAll(event, entries) {
    this.selectAll = event.target.checked;
    if (this.selectAll) this.selectedProducts = entries;
    else this.selectedProducts = [];
  }

  checkedProduct(event) {
    this.selectedProducts = this.selectedProducts.filter(
      (product) => product.cartEntryNumber != event.entry.cartEntryNumber
    );
    if (event.status === true) {
      this.selectedProducts.push(event.entry);
    }
  }

  allSelected(entries) {
    if (this.selectedProducts?.length === entries?.length) return true;
    else return false;
  }

  openDeleteDialog() {
    if (this.selectedProducts?.length <= 0) {
      this.globalMessageService.add(
        this.getTranslatedText('rma-cart.selectRmaEntries'),
        GlobalMessageType.MSG_TYPE_CONFIRMATION,
        5000
      );
      return;
    }
    const componentData = {
      cartId: this.cartId,
      totalCartItems: this.itemsCountExAccessories,
      selectedProducts: this.deleteSelected(),
      selectedItemsCount: this.selectedProducts.length,
    };
    const rmaCartDeleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_CART_DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (rmaCartDeleteDialog) {
      rmaCartDeleteDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          if (value == 'clearCart' || value?.instance?.reason == 'clearCart') {
            this.clearCartResponse();
          }
          if (value?.instance?.reason != 'close') this.selectedProducts = [];
        }
      });
    }
  }

  deleteSelected(cartLength?) {
    let entries = this.selectedProducts.map(
      (product) => product.cartEntryNumber
    );
    let selectedItems = {
      entryNumber: entries.join(','),
    };
    return selectedItems;
  }

  loadCart() {
    this.multiCartFacade.loadCart({
      userId: OCC_USER_ID_CURRENT,
      cartId: this.cartId,
      extraData: {
        active: true,
      },
    });
  }

  saveCart(cart) {
    const componentData = {
      currentCart: cart,
    };
    const saveCartModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (saveCartModal) {
      saveCartModal.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.setCartType();
        }
      });
    }
    // this.saveCartModalRef = this.modalService.open(SaveCartModelComponent, {
    //   centered: true,
    //   size: 'lg',
    //   windowClass: 'create-saved-cart-dialog-container',
    // });
  }

  clearCartResponse() {
    this.globalMessageService.add(
      this.getTranslatedText('rma-cart.rmaCartCleared'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION,
      5000
    );
    window.scrollTo(0, 0);
  }

  setCartType() {
    const obj = {
      fields: 'DEFAULT',
      commerceType: CommerceTypes.RETURNS,
    };
    this.rmaService
      .changeCartType(OCC_USER_ID_CURRENT, obj)
      .subscribe((success) => {
        this.loadCart();
      });
  }

  printScreen() {
    window.print();
  }

  addNewItem() {
    this.router.navigate(['rma-form']);
  }

  goToHazardInfo() {
    this.router.navigate(['rma-form/hazard-info']);
  }

  isNullLocation(location) {
    return location.indexOf('null') >= 0;
  }
}
