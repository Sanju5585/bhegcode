import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import {
  CartItemComponentOptions,
  Item,
} from '../cart-item/cart-item.component';
import { SaveCartModelComponent } from '../save-cart-model/save-cart-model.component';
import { SharedCartService } from '../shared-cart.service';
import {
  ActiveCartFacade,
  ConsignmentEntry,
  MultiCartFacade,
  PromotionLocation,
} from '@spartacus/cart/base/root';
import { CartActions, SelectiveCartService } from '@spartacus/cart/base/core';
import {
  CartType,
  ProductType,
} from '../../../../shared/models/cartType.models';
import { SpinnerOverlayService } from '../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../../shared/enums/gtm.enum';
import { GTMDataLayer } from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
@Component({
  standalone: false,
  selector: 'ds-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemListComponent implements OnInit {
  @Input() readonly = false;

  @Input() hasHeader = true;

  @Input()
  userType: string;

  @Input() options: CartItemComponentOptions = {
    isSaveForLater: false,
    optionalBtn: null,
  };
  @Output() deleteCartItems: EventEmitter<any> = new EventEmitter();

  private _items: Item[] = [];
  form: FormGroup;
  showToggle: boolean = true;

  public cartType = CartType;
  public productType = ProductType;
  nonFilmProduct: any[] = [];
  filmProduct: any[] = [];

  @Input('items')
  // TODO: currently we're getting a new array of items if the cart changes.
  // pretty annoying as it forces a repaint on the screen,
  // which is noticable in the UI.
  set items(items: Item[]) {
    this.resolveItems(items);
    this.createForm();
  }
  get items(): Item[] {
    return this._items;
  }

  @Input() promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  @Input('cartIsLoading') set setLoading(value: boolean) {
    if (!this.readonly) {
      // Whenver the cart is loading, we disable the complete form
      // to avoid any user interaction with the cart.
      value
        ? this.form.disable({ emitEvent: false })
        : this.form.enable({ emitEvent: false });
    }
  }

  @Input('cart')
  set cart(cart) {
    this.resolveCart(cart);
  }
  get cart() {
    return this._cart;
  }

  cartId = '';
  checkAll = false;
  private _cart;
  selectedItems: Item[] = [];
  isShipmentPartial = false;
  saveAs: any;
  currentItemsLength;

  constructor(
    protected activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private globalMessageService: GlobalMessageService,
    private multiCartFacade: MultiCartFacade,
    private sharedCartService: SharedCartService,
    private actions$: Actions,
    private datepipe: DatePipe,
    public elRef: ElementRef,
    private translate: TranslationService,
    private spinnerOverlayService: SpinnerOverlayService,
    protected vcr: ViewContainerRef,
    private gtmService: GoogleTagManagerService
  ) {
    if (this.items.length > 0) {
      this.currentItemsLength = this.items.length;
      this.setFilmAndNonFlimItems();
    }
  }

  ngOnInit() {
    this.cartId = this.userType === 'current' ? this.cart.code : this.cart.guid;
    const viewcartItemsData: any[] = [];
    let totalValue = 0;
    this.cart.entries.forEach((itemEl, index) => {
      viewcartItemsData.push({
        item_id: itemEl?.product?.code,
        item_name: itemEl?.product?.name,
        index: index,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.Cart,
        item_list_name: ItemListTypeEnum.Cart,
        price: itemEl?.totalPrice?.value,
        quantity: itemEl?.quantity,
      });
      totalValue += itemEl?.totalPrice?.value * itemEl?.quantity;
    });
    const viewCartDataLayer: GTMDataLayer = {
      event: GtmEvents.ViewCart,
      store: StoreTypeEnum.Dsstore,
      ecommerce: {
        currency: this.cart.entries[0]?.basePrice.currencyIso,
        value: totalValue,
        items: viewcartItemsData,
      },
    };
    this.gtmService.sendEvent(viewCartDataLayer);
  }
  ngOnChanges() {
    if (
      this.items.length > 0 &&
      this.items.length !== this.currentItemsLength
    ) {
      this.filmProduct = [];
      this.nonFilmProduct = [];
      this.setFilmAndNonFlimItems();
    }
  }
  setFilmAndNonFlimItems() {
    for (let item of this.items) {
      if (item.productType == this.productType.Typ3) {
        this.filmProduct.push(item);
      } else {
        this.nonFilmProduct.push(item);
      }
    }
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  /**
   * The items we're getting form the input do not have a consistent model.
   * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
   */
  private resolveItems(items: Item[]): void {
    if (items.every((item) => item.hasOwnProperty('orderEntry'))) {
      this._items = items.map((consignmentEntry) => {
        const entry = Object.assign(
          {},
          (consignmentEntry as ConsignmentEntry).orderEntry
        );
        entry.quantity = consignmentEntry.quantity;
        return entry;
      });
    } else {
      this._items = items;
    }
  }

  private createForm(): void {
    this.form = new FormGroup({});
    this._items.forEach((item) => {
      const { code } = item.product;
      const group = new FormGroup({
        entryNumber: new FormControl((<any>item).entryNumber),
        quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
      });
      if (!item.updateable || this.readonly) {
        group.disable();
      }
      this.form.addControl(code, group);
    });
  }

  removeEntry(item: Item): void {
    if (this.options.isSaveForLater) {
      this.activeCartFacade.removeEntry(item);
    } else {
      this.activeCartFacade.removeEntry(item);
    }
    delete this.form.controls[item.product.code];
  }

  getControl(item: Item): Observable<FormGroup> {
    return this.form.get(item.product.code)?.valueChanges.pipe(
      // tslint:disable-next-line:deprecation
      startWith(null),
      map((value) => {
        if (value && this.activeCartFacade && this.options.isSaveForLater) {
          this.activeCartFacade.updateEntry(value.entryNumber, value.quantity);
        } else if (value) {
          this.activeCartFacade.updateEntry(value.entryNumber, value.quantity);
        }
      }),
      map(() => <FormGroup>this.form.get(item.product.code))
    );
  }
  openDeleteDialog() {
    if (this.selectedItems.length > 0) {
      const componentData = {
        cart: this.cart,
        userType: this.userType,
        cartId: this.cartId,
      };
      const deleteCartDialog = this.launchDialogService.openDialog(
        DS_DIALOG.CART_DELETE_DIALOG,
        undefined,
        this.vcr,
        componentData
      );
      deleteCartDialog.pipe(take(1)).subscribe((value) => {
        if (value?.instance?.reason == 'delete' || value == 'delete') {
          this.deleteCartItem();
        }
      });
    } else {
      this.globalMessageService.add(
        this.getTranslatedText('buyCart.selectProduct'),
        GlobalMessageType.MSG_TYPE_WARNING,
        5000
      );
      window.scrollTo(0, 0);
    }
  }

  deleteCartItem() {
    this.deleteCartItems.emit(true);
    this.selectedItems.sort((a, b) => (a.entryNumber < b.entryNumber ? 1 : -1));
    const removedItemsData: any[] = [];
    let totalValue = 0;
    this.selectedItems.forEach((itemEl) => {
      this.multiCartFacade.removeEntry(
        this.userType,
        this.cartId,
        itemEl.entryNumber
      );
      removedItemsData.push({
        item_id: itemEl?.product?.code,
        item_name: itemEl?.product?.name,
        index: itemEl.entryNumber,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.Cart,
        item_list_name: ItemListTypeEnum.Cart,
        price: itemEl?.totalPrice?.value,
        quantity: itemEl?.quantity,
      });
      totalValue += itemEl.netSellingPrice.value * itemEl.quantity;
      const removeFromCartDataLayer: GTMDataLayer = {
        event: GtmEvents.RemoveFromCart,
        store: StoreTypeEnum.Dsstore,
        ecommerce: {
          currency: itemEl.basePrice.currencyIso,
          value: totalValue,
          items: removedItemsData,
        },
      };
      this.gtmService.sendEvent(removeFromCartDataLayer);
      this.selectedItems = [];
    });

    this.spinnerOverlayService.show('Loading Cart');

    let callBackCount = 0;
    this.actions$
      .pipe(
        ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
        map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
      )
      // .pipe(take(1))
      .subscribe(
        () => {
          callBackCount++;
          if (callBackCount >= this.selectedItems?.length) {
            this.actions$
              .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
              .pipe(take(1))
              .subscribe(
                (s) => {
                  this.selectedItems = [];
                  this.spinnerOverlayService.hide();
                  this.globalMessageService.add(
                    this.getTranslatedText('buyCart.itemRemovedSuccess'),
                    GlobalMessageType.MSG_TYPE_CONFIRMATION,
                    5000
                  );
                  window.scrollTo(0, 0);
                },
                (error) => {
                  this.spinnerOverlayService.hide();
                  this.globalMessageService.add(
                    error,
                    GlobalMessageType.MSG_TYPE_ERROR,
                    5000
                  );
                  window.scrollTo(0, 0);
                }
              );
          }
        },
        (error) => {
          this.spinnerOverlayService.hide();
          callBackCount = 0;
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  openClearCartDialog() {
    const componentData = {
      userType: this.userType,
    };
    const deleteCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CART_DELETE_DIALOG,
      undefined,
      this.vcr,
      componentData
    );
    deleteCartDialog.pipe(take(1)).subscribe((value) => {
      if (value?.instance?.reason == 'delete' || value == 'delete') {
        this.clearCart();
      }
    });
  }

  clearCart() {
    const removedItemsData: any[] = [];
    let totalValue = 0;
    this.cart.entries.forEach((itemEl, index) => {
      this.multiCartFacade.deleteCart(this.cartId, this.userType);
      removedItemsData.push({
        item_id: itemEl?.product?.code,
        item_name: itemEl?.product?.name,
        index: index,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.Cart,
        item_list_name: ItemListTypeEnum.Cart,
        price: itemEl?.totalPrice?.value,
        quantity: itemEl?.quantity,
      });
      totalValue += itemEl.netSellingPrice.value * itemEl.quantity;
    });

    const removeFromCartDataLayer: GTMDataLayer = {
      event: GtmEvents.RemoveFromCart,
      store: StoreTypeEnum.Dsstore,
      ecommerce: {
        currency: this.cart.entries[0]?.basePrice.currencyIso,
        value: totalValue,
        items: removedItemsData,
      },
    };
    this.gtmService.sendEvent(removeFromCartDataLayer);
    this.actions$
      .pipe(ofType(CartActions.DELETE_CART_SUCCESS))
      .pipe(take(1))
      .subscribe((r) => {
        this.globalMessageService.add(
          this.getTranslatedText('buyCart.itemRemovedSuccess'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        window.scrollTo(0, 0);
        sessionStorage.setItem('quoteCartType', '');
        sessionStorage.setItem('isRfqCart', '');
        this.multiCartFacade.createCart({
          userId: this.userType,
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
          .subscribe((res: any) => {
            this.multiCartFacade.loadCart({
              userId: this.userType,
              cartId: res.payload.cartId,
              extraData: {
                active: true,
              },
            });
            // this.activeCartFacade
            //   .getActive()
            //   .pipe(take(1))
            //   .subscribe((activeCart) => {
            //     this.cartId = activeCart.code;
            //     this.multiCartFacade.loadCart({
            //       userId: this.userType,
            //       cartId: this.cartId,
            //       extraData: {
            //         active: true,
            //       },
            //     });
            //   });
          });
      });

    this.actions$
      .pipe(ofType(CartActions.DELETE_CART_FAIL))
      .pipe(take(1))
      .subscribe(
        (r) => {
          this.globalMessageService.add(
            this.getTranslatedText('buyCart.clearCartFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        },
        (error) => {
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  downloadCart() {
    this.sharedCartService.downloadCart(this.cartId).subscribe((res) => {
      // const currentDate = this.datepipe.transform(new Date(), 'yyyyMMdd')
      let fileName = this.cartId;
      const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
      const file = new File([blob], fileName + '.xls', {
        type: 'application/vnd.ms.excel',
      });
      saveAs(file);
    });
  }

  openSaveCartModal() {
    const componentData = {
      currentCart: this.cart,
    };
    const saveCartModalRef = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    saveCartModalRef.pipe(take(1)).subscribe((value) => {});
    // let modalInstance: any;
    // this.saveCartModalRef = this.modalService.open(SaveCartModelComponent, {
    //   centered: true,
    //   size: 'lg',
    //   windowClass: 'create-saved-cart-dialog-container',
    // });
    // modalInstance = this.saveCartModalRef.componentInstance;
    // modalInstance.currentCart = this.cart;
  }
  toggleButton() {
    this.showToggle = !this.showToggle;
  }
  private resolveCart(cartData) {
    this._cart = Object.assign({}, cartData);
  }

  onEntryCheck(e) {
    if (e.checked) {
      this.selectedItems.push(this._items[e.entryNumber]);
    } else {
      this.selectedItems = this.selectedItems.filter(
        (item) => item.entryNumber !== e.entryNumber
      );
    }
  }

  printPage() {
    window.print();
  }
}
