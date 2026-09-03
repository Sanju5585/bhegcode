import { Component, Input } from '@angular/core';
import { Item } from '../../../cart';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { RmaService } from '../../../rma/rma-services/rma.service';
import { Observable, Subscription } from 'rxjs';
import { ActiveCartFacade } from '@spartacus/cart/base/root';

@Component({
  selector: 'app-returns-cart-item-list',
  standalone: false,
  templateUrl: './returns-cart-item-list.component.html',
  styleUrl: './returns-cart-item-list.component.scss',
})
export class ReturnsCartItemListComponent {
  public cart$: Observable<any> = this.activeCartFacade.getActive();
  allPlants: any[] = [];
  @Input()
  cart: any;
  @Input()
  hazardStatus;
  @Input()
  distinctPlantList;
  selectedItems: Item[] = [];
  checkAllList: any[] = [];
  private _items: Item[] = [];
  checkAll = false;
  productLine: string;
  createRMANativationPath: string;
  items;
  showSpinner: boolean;
  selectedProducts = [];
  cartId: string;
  itemsCountExAccessories;
  cartSubscription: Subscription;
  constructor(
    private activeCartFacade: ActiveCartFacade,
    private router: Router,
    private custAccService: CustomerAccountService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private launchDialogService: LaunchDialogService,
    private rmaService: RmaService
  ) {}
  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.createRMANativationPath = `/${this.productLine}/create-rma`;
      //this.createRMANativationPath = '/rma-form';
    });
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
  }
  getHazardStatus() {
    this.rmaService
      .getHazardCompleteness(OCC_USER_ID_CURRENT)
      .subscribe((hazardStatus) => (this.hazardStatus = hazardStatus));
  }
  checkAllEntries(event: any) {
    const checkValue = event.target.checked;
    this.selectedProducts = [];
    if (checkValue) {
      this.selectedProducts = this.cart.returnsCartData;
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  openDeleteDialog() {
    if (this.selectedProducts?.length <= 0) {
      this.globalMessageService.add(
        this.getTranslatedText('rma-cart.selectRmaEntries'),
        GlobalMessageType.MSG_TYPE_WARNING,
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
      DS_DIALOG.RETURNS_CART_DELETE_DIALOG,
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
  checkedProduct(event) {
    this.selectedProducts = this.selectedProducts.filter(
      (product) => product.cartEntryNumber != event.entry.cartEntryNumber
    );
    if (event.status === true) {
      this.selectedProducts.push(event.entry);
    }
  }
  clearCartResponse() {
    this.globalMessageService.add(
      this.getTranslatedText('rma-cart.rmaCartCleared'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION,
      5000
    );
    window.scrollTo(0, 0);
  }
  addnewItem() {
    this.router.navigate([this.createRMANativationPath]);
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
}
