import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
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
  WindowRef,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

import {
  ActiveCartFacade,
  ConsignmentEntry,
  MultiCartFacade,
  PromotionLocation,
} from '@spartacus/cart/base/root';
import { CartActions, SelectiveCartService } from '@spartacus/cart/base/core';
import {
  CartItemComponentOptions,
  Item,
} from '../waygate-cart-item/waygate-cart-item.component';
import {
  CartType,
  ProductType,
} from '../../../../../shared/models/cartType.models';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { SpinnerOverlayService } from '../../../../../shared/components/spinner-overlay/spinner-overlay.service';
import {
  ItemListTypeEnum,
  GtmEvents,
} from '../../../../../shared/enums/gtm.enum';
import { EndUserAddress } from '../../../../../shared/models/address-models';
import { GTMDataLayer } from '../../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { ApiService } from '../../../../../core/http/api.service';
import { HttpParams } from '@angular/common/http';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'app-waygate-cart-item-list',
  templateUrl: './waygate-cart-item-list.component.html',
  styleUrls: ['./waygate-cart-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaygateCartItemListComponent implements OnInit {
  @Input() readonly = false;

  @Input() hasHeader = true;

  @Input()
  cart$: Observable<any>;

  @Input()
  userType: string;

  @Input() options: CartItemComponentOptions = {
    isSaveForLater: false,
    optionalBtn: null,
  };

  @Input() isPartialShipment: boolean = false;
  @Output() deleteCartItems: EventEmitter<any> = new EventEmitter();
  private _items: Item[] = [];
  form: FormGroup;
  showToggle: boolean = true;

  public cartType = CartType;
  endUserAddress: EndUserAddress;
  public productType = ProductType;
  nonFilmProduct: any[] = [];
  filmProduct: any[] = [];
  item: any;

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
      // Whenver the cart is loading, we disable the complete form.
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
  @Input() profileType: string;
  isEndUserType: boolean;
  cartId = '';
  checkAll = false;
  private _cart;
  selectedItems: Item[] = [];
  selectedMultipleItems: any = [];
  checkAllList: any[] = [];
  cartEntryList: any;
  isEnduserAddress: boolean = false;
  isShipmentPartial = false;
  saveAs: any;
  currentItemsLength;
  dateAndDisabledEvent: { date: Date; disabled: boolean };
  isShowBtnScrollTop: boolean = false;
  isShowBtnScrollbottom: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    this.isShowBtnScrollTop =
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    this.isShowBtnScrollbottom =
      window.document.body.scrollHeight - window.innerHeight - window.scrollY >
      50;
    const { target } = e;
    if (target.clientHeight * 2 + target.scrollTop < target.scrollHeight) {
      this.isShowBtnScrollbottom = true;
    } else {
      this.isShowBtnScrollbottom = false;
    }
  }
  isChannelPartner: boolean;
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
    private gtmService: GoogleTagManagerService,
    protected winRef: WindowRef,
    private apiService: ApiService,
    private customerAccService: CustomerAccountService
  ) {
    if (this.items.length > 0) {
      this.currentItemsLength = this.items.length;
      this.setFilmAndNonFlimItems();
    }
  }

  ngOnInit() {
    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });

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
      store: this.gtmService.getItemBrand(),
      ecommerce: {
        currency: this.cart.entries[0]?.basePrice.currencyIso,
        value: totalValue,
        items: viewcartItemsData,
      },
    };
    this.gtmService.sendEvent(viewCartDataLayer);

    const lookupData: any[] = [];
    this.cart.entries.forEach((itemEl, index) => {
      lookupData.push({
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
      const lookup: GTMDataLayer = {
        event: GtmEvents.PriceLookupVC,
        store: this.gtmService.getItemBrand(),
        vcBaseProductCode: itemEl?.fullyConfigurePartNumber,
        vcConfigId: itemEl?.configId,
        vcPrice: itemEl?.totalPrice?.value,
        vcBaseProductName: itemEl?.product?.name,
        vcPosition: 'Cart Page',
        ecommerce: {
          currency: this.cart.entries[0]?.basePrice.currencyIso,
          value: totalValue,
          items: lookupData,
        },
      };
      this.gtmService.sendEvent(lookup);
    });

    this.cart$.subscribe((res) => {
      this.cart = res;
      this.endUserAddress = res?.enduserAddress;
    });
    this.isEndUserType = this.profileType !== CustomerType.Type1;
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

  removeDialog() {
    if (this.selectedItems.length != this.cart.entries.length) {
      this.openDeleteDialog();
    } else if (this.selectedItems.length == this.cart.entries.length) {
      this.openClearCartDialog();
    }
  }
  openDeleteDialog() {
    let accFlag = false;
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (this.selectedItems[i].hasOwnProperty('accessoryEntryNumbers')) {
        accFlag = true;
        break;
      }
    }
    if (accFlag === true) {
      let urlParams = ['users', 'current', 'carts', this.cart.code, 'entries'];
      let url = this.apiService.constructUrl(urlParams);
      let entryNumbers = [];
      for (let i = 0; i < this.selectedItems.length; i++) {
        entryNumbers.push(this.selectedItems[i].entryNumber);
      }
      const params = new HttpParams().set(
        'entryNumber',
        entryNumbers.join(',')
      );

      this.apiService.deleteData(url, { params }).subscribe((res) => {
        this.customerAccService.getProductLine().subscribe((productLine) => {
          this.winRef.location.href = `/${productLine}/cart`;
        });
      });
    } else {
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
  }

  deleteCartItem() {
    this.deleteCartItems.emit(true);
    this.selectedItems.sort((a, b) => (a.entryNumber < b.entryNumber ? 1 : -1));
    this.selectedItems.forEach((itemEl) => {
      this.multiCartFacade.removeEntry(
        this.userType,
        this.cartId,
        itemEl.entryNumber
      );
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
        sessionStorage.setItem('isQuoteToOrder', 'false');
      }
    });
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
      totalValue += itemEl?.netSellingPrice?.value * itemEl?.quantity;
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
    this.multiCartFacade.deleteCart(this.cartId, this.userType);
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
  setCartEntryList(e) {
    this.cartEntryList = e;
  }
  scrollCartEntryIntoView(index) {
    const elementToScrollInto = this.cartEntryList.find(
      (el) => el.cartNumber === index
    );
    elementToScrollInto.elRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
  checkEnduserAddress(value) {
    this.isEnduserAddress = value;
  }

  dateAndDisabledChange(event: { date: Date; disabled: boolean }) {
    this.dateAndDisabledEvent = event;
  }

  scrollTop() {
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToSummary() {
    this.isShowBtnScrollbottom = !this.isShowBtnScrollbottom;
    window.scrollTo(0, window.document.body.scrollHeight - window.innerHeight);
  }
}
