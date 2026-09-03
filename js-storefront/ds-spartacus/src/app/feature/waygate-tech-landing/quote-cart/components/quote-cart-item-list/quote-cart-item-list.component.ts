import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith, Subscription, take } from 'rxjs';
import { CartItemComponentOptions, Item } from '../../../../cart';
import {
  ActiveCartFacade,
  ConsignmentEntry,
  MultiCartFacade,
} from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import {
  ItemListTypeEnum,
  GtmEvents,
} from '../../../../../shared/enums/gtm.enum';
import { GTMDataLayer } from '../../../../../shared/models/googleTagManager.model';
import { DatePipe } from '@angular/common';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import { SpinnerOverlayService } from '../../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { CartType } from '../../../../../shared/models/cartType.models';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { EndUserAddress } from '../../../../../shared/models/address-models';

@Component({
  standalone: false,
  selector: 'ds-quote-cart-item-list',
  templateUrl: './quote-cart-item-list.component.html',
  styleUrls: ['./quote-cart-item-list.component.scss'],
})
export class QuoteCartItemListComponent implements OnInit, OnDestroy {
  readonly = false;
  showToggle = false;
  public cartType = CartType;
  @Input() profileType: string;
  isEndUserType: boolean;

  @Input()
  cart$: Observable<any>;
  isEnduserAddress: boolean = false;
  endUserAddress: EndUserAddress;

  @Input('items')
  // TODO: currently we're getting a new array of items if the cart changes.
  // pretty annoying as it forces a repaint on the screen,
  // which is noticable in the UI.
  set items(items: any[]) {
    this.resolveItems(items);
    this.createForm();
  }
  get items(): any[] {
    return this._items;
  }
  private _items: any[] = [];

  @Input('cart')
  set cart(cart) {
    this.resolveCart(cart);
  }
  get cart() {
    return this._cart;
  }

  @Input() userType: string;
  options: CartItemComponentOptions = {
    isSaveForLater: false,
    optionalBtn: null,
  };

  @Output() deleteCartItems: EventEmitter<any> = new EventEmitter();
  @Output() updateCart: EventEmitter<any> = new EventEmitter();

  private _cart;

  selectedItems: any[] = [];
  checkAll: boolean = false;
  form: FormGroup;
  selectedMultipleItems: any = [];
  checkAllList: any[] = [];
  cartEntryList: any;
  subscriptions: Subscription[] = [];
  quoteType: boolean = true;

  constructor(
    private activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    protected vcr: ViewContainerRef,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    public elRef: ElementRef,
    private spinnerOverlayService: SpinnerOverlayService,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    this.cart$.subscribe((res) => {
      this.cart = res;
      this.endUserAddress = res?.enduserAddress;
    });
    this.isEndUserType = this.profileType !== CustomerType.Type1;
  }

  private resolveItems(items: any[]): void {
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

  getControl(item: any): Observable<FormGroup> {
    return this.form.get([item.product.code])?.valueChanges.pipe(
      // tslint:disable-next-line:deprecation
      startWith(null),
      map((value) => {
        if (value && this.activeCartFacade && this.options.isSaveForLater) {
          this.activeCartFacade.updateEntry(value.entryNumber, value.quantity);
        } else if (value) {
          this.activeCartFacade.updateEntry(value.entryNumber, value.quantity);
        }
      }),
      map(() => <FormGroup>this.form.get([item.product.code]))
    );
  }

  private resolveCart(cartData) {
    this._cart = Object.assign({}, cartData);
  }

  checkAllEntries(event: any) {
    const checkValue = event.target.checked;
    this.selectedItems = [];
    this.selectedMultipleItems = [];
    if (checkValue) {
      this.selectedItems = this.populateQuoteConvertRequest(this._items);

      if (this.checkAllList.length !== 0)
        this.selectedMultipleItems = this.checkAllList;
    }
  }

  populateQuoteConvertRequest(items): Item[] {
    const selectedItems: Item[] = [];
    items.forEach((item) => {
      selectedItems.push(item);
    });
    return selectedItems;
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

  scrollCartEntryIntoView(index) {
    const elementToScrollInto = this.cartEntryList.find(
      (el) => el.cartNumber === index
    );
    elementToScrollInto.elRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

  setCartEntryList(e) {
    this.cartEntryList = e;
  }

  removeDialog() {
    if (this.selectedItems.length != this.cart.entries.length) {
      this.openDeleteDialog();
    } else {
      this.openClearCartDialog();
    }
  }

  openDeleteDialog() {
    if (this.selectedItems.length > 0) {
      const componentData = {
        cart: this.cart,
        userType: this.userType,
        cartId: this.cart.code,
      };
      const deleteCartDialog = this.launchDialogService.openDialog(
        DS_DIALOG.CART_DELETE_DIALOG,
        undefined,
        this.vcr,
        componentData
      );
      this.subscriptions.push(
        deleteCartDialog.pipe(take(1)).subscribe((value) => {
          if (value?.instance?.reason == 'delete' || value == 'delete') {
            this.deleteCartItem();
          }
        })
      );
    } else {
      this.globalMessageService.add(
        this.getTranslatedText('quoteCart.selectProduct'),
        GlobalMessageType.MSG_TYPE_WARNING,
        5000
      );
      window.scrollTo(0, 0);
    }
  }

  getTranslatedText(key) {
    let message;
    this.subscriptions.push(
      this.translate.translate(key).subscribe((res) => {
        message = res;
      })
    );
    return message;
  }

  deleteCartItem() {
    this.deleteCartItems.emit(true);
    this.selectedItems.sort((a, b) => (a.entryNumber < b.entryNumber ? 1 : -1));
    this.selectedItems.forEach((itemEl) => {
      this.multiCartFacade.removeEntry(
        this.userType,
        this.cart.code,
        itemEl.entryNumber
      );
    });

    this.spinnerOverlayService.show('Loading Cart');

    let callBackCount = 0;
    this.subscriptions.push(
      this.actions$
        .pipe(
          ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
          map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
        )
        // .pipe(take(1))
        .subscribe({
          next: () => {
            callBackCount++;
            if (callBackCount >= this.selectedItems?.length) {
              this.subscriptions.push(
                this.actions$
                  .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
                  .pipe(take(1))
                  .subscribe({
                    next: (s) => {
                      this.selectedItems = [];
                      this.spinnerOverlayService.hide();
                      this.globalMessageService.add(
                        this.getTranslatedText('quoteCart.itemRemovedSuccess'),
                        GlobalMessageType.MSG_TYPE_CONFIRMATION,
                        5000
                      );
                      window.scrollTo(0, 0);
                    },
                    error: (error) => {
                      this.spinnerOverlayService.hide();
                      this.globalMessageService.add(
                        error,
                        GlobalMessageType.MSG_TYPE_ERROR,
                        5000
                      );
                      window.scrollTo(0, 0);
                    },
                  })
              );
            }
          },
          error: (error) => {
            this.spinnerOverlayService.hide();
            callBackCount = 0;
            this.globalMessageService.add(
              error,
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          },
        })
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
    this.subscriptions.push(
      deleteCartDialog.pipe(take(1)).subscribe((value) => {
        if (value?.instance?.reason == 'delete' || value == 'delete') {
          this.clearCart();
        }
      })
    );
  }

  clearCart() {
    const removedItemsData: any[] = [];
    let totalValue = 0;
    this.cart.entries.forEach((itemEl, index) => {
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
      store: this.gtmService.getItemBrand(),
      ecommerce: {
        currency: this.cart.entries[0]?.basePrice.currencyIso,
        value: totalValue,
        items: removedItemsData,
      },
    };
    this.gtmService.sendEvent(removeFromCartDataLayer);
    this.multiCartFacade.deleteCart(this.cart.code, this.userType);
    this.subscriptions.push(
      this.actions$
        .pipe(ofType(CartActions.DELETE_CART_SUCCESS))
        .pipe(take(1))
        .subscribe({
          next: (r) => {
            this.globalMessageService.add(
              this.getTranslatedText('quoteCart.itemRemovedSuccess'),
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
            this.subscriptions.push(
              this.actions$
                .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
                .subscribe({
                  next: (res: any) => {
                    this.multiCartFacade.loadCart({
                      userId: this.userType,
                      cartId: res.payload.cartId,
                      extraData: {
                        active: true,
                      },
                    });
                  },
                })
            );
          },
        })
    );

    this.subscriptions.push(
      this.actions$
        .pipe(ofType(CartActions.DELETE_CART_FAIL))
        .pipe(take(1))
        .subscribe({
          next: (r) => {
            this.globalMessageService.add(
              this.getTranslatedText('quoteCart.clearCartFailed'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          },
          error: (error) => {
            this.globalMessageService.add(
              error,
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          },
        })
    );
  }

  OnUpdateCart(ev) {
    this.updateCart.emit();
  }

  onQuoteType(ev) {
    this.quoteType = ev;
  }

  checkEnduserAddress(value) {
    this.isEnduserAddress = value;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe);
  }
}
