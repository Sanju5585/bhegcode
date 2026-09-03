import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Actions, ofType } from '@ngrx/effects';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import moment from 'moment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CartDeleteDilogComponent } from '../cart-delete-dilog/cart-delete-dilog.component';
import { SharedCartService } from '../shared-cart.service';
import {
  MultiCartFacade,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { SpinnerOverlayService } from '../../../../shared/components/spinner-overlay/spinner-overlay.service';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../../shared/enums/gtm.enum';
import { Discounts } from '../../../../shared/models/discounts.model';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
export interface Item {
  productType?: string;
  product?: any;
  quantity?: any;
  basePrice?: any;
  totalPrice?: any;
  netPrice?: any;
  updateable?: boolean;
  entryNumber?: any;
  listPrice?: any;
  customerRequestedDate?: any;
  selectedLegalEntity?: any;
  availabilityDetail?: any;
  splitByAvailability?: boolean;
  stockAvailability?: boolean;
  isQtyAvailable?: boolean;
  discountDetails?: any;
  deliveryGroupNumber?: any;
  entryNotes?: any;
  salesConversion?: any;
  salesUnit?: any;
  availableAt?: any;
  expressAdder?: any;
  quoteCartEntryType?: string;
  plantAvailableAt?: any;
  expressAdderPercent?: any;
  availabilityDetails?: any;
  estimatedShipDates?: any;
  silverClausePricePercentage?: any;
  silverClausePrice?: any;
  estShipData?: any;
  netSellingPrice?: any;
  subTotalListPrice?: any;
  discountPercentage?: any;
  minOrderQtyError?: any;
}

export interface CartItemComponentOptions {
  isSaveForLater?: boolean;
  optionalBtn?: any;
}

@Component({
  standalone: false,
  selector: 'ds-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() compact = false;
  @Input() item: Item;
  @Input() readonly = false;
  @Input() quantityControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  @Output() view = new EventEmitter<any>();

  @Input() promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  // TODO: evaluate whether this is generic enough
  @Input() options: CartItemComponentOptions = {
    isSaveForLater: false,
    optionalBtn: null,
  };
  @Input()
  userType: string;

  @Input()
  cart;

  @Input() entryNum = 0;
  @Input() totalEntries;
  @Input() productOpen;

  @Input()
  checkAll: boolean;

  @ViewChild('viewBreakupLink')
  viewBreakupLink;

  @ViewChild('breakupContent')
  breakupContent;

  newItem: Item;
  appliedProductPromotions$: Observable<PromotionResult[]>;
  breakUp = false;
  cartNumber = 0;

  cartId = '';
  minDate = new Date();

  quantityForm = new FormGroup({
    quantity: new FormControl(1),
  });
  showCheckAvalabilityAction = false;
  checkAvailabilityError = false;
  showAvailabilityLoader = false;
  selectedLegalEntity: any = {
    code: '0',
    name: 'Select',
  };
  showCommentsInput = false;
  consEntryErrorIndex = '';
  consEntryErrorSubscription: any;
  showReqShipError = false;
  savingComments = false;

  deliGrpEntryErrorSubscription: any;
  showDeliGrpError = false;
  deliGrpErrorType = '';
  errorEntries = [];
  commentError = false;

  isPartialSubscription: any;
  isShipmentPartial = false;
  deliveryGroupNumber = '';
  deliveryGroupLoader = false;
  showDiffPlantWarning = false;

  msgText = '';
  commentsSaved = false;
  showCommentsNotSavedErr = false;
  maxQuantity: number = 9999;
  breakUpMenu = false;
  @Output()
  selectedEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    private launchDialogService: LaunchDialogService,
    private globalMessageService: GlobalMessageService,
    private multiCartFacade: MultiCartFacade,
    private sharedCartService: SharedCartService,
    private actions$: Actions,
    private cRef: ChangeDetectorRef,
    private renderer: Renderer2,
    public elRef: ElementRef,
    private translate: TranslationService,
    private spinnerOverlayService: SpinnerOverlayService,
    public sanitizer: DomSanitizer,
    private gtmService: GoogleTagManagerService
  ) {
    this.renderer.listen(document, 'click', this.bodyClick.bind(this));
  }

  ngOnInit() {
    this.cartNumber = this.entryNum++;
    this.productOpen = true;
    this.cartId = this.userType === 'current' ? this.cart.code : this.cart.guid;
    this.quantityForm.controls.quantity.setValue(this.item.quantity);

    this.quantityForm.valueChanges.subscribe((res: any) => {
      if (!Number.isInteger(res.quantity)) {
        this.quantityForm.controls.quantity.setValue(Math.floor(res.quantity));
      }
      if (res.quantity != this.item.quantity) {
        this.showCheckAvalabilityAction = true;
        this.sharedCartService.setvalidation(true);
        this.msgText = this.getTranslatedText('buyCart.clickCheckAvailablity');
        const obj = {
          availibility: this.showCheckAvalabilityAction,
          lineNo: this.item.entryNumber + 1,
        };
        this.sharedCartService.emitCheckAvailability(obj);
      }
    });
    this.newItem = Object.assign({}, this.item);
    this.newItem.availabilityDetails = this.newItem.availabilityDetails?.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t.plant === obj.plant)
    );
    this.msgText = '';

    this.msgText = '';
    if (this.newItem?.stockAvailability === false) {
      this.msgText =
        this.msgText + this.getTranslatedText('buyCart.noShippingDate');
    }

    if (this.newItem?.splitByAvailability === true) {
      this.msgText =
        this.msgText + this.getTranslatedText('buyCart.splitAvailablity');
    }
    this.selectedLegalEntity = this.newItem.availabilityDetails?.find(
      (element) => element.plant === this.newItem['plant']
    );
    // this.newItem.availabilityDetails?.forEach((element) => {
    //   if (element.isDefaultPlant === true) {
    //     this.selectedLegalEntity = element;
    //   } // this code is commented due to 'plant' flag is used to check availabilityDetails
    // });
    if (this.newItem.entryNotes) {
      this.showCommentsInput = true;
    }

    this.deliveryGroupNumber = this.newItem.deliveryGroupNumber
      ? this.newItem.deliveryGroupNumber
      : '';
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  ngOnDestroy() {
    this.showReqShipError = false;
    this.cRef.detectChanges();
  }

  isProductOutOfStock(product: any) {
    // TODO Move stocklevelstatuses across the app to an enum
    return (
      product &&
      product.stock &&
      product.stock.stockLevelStatus === 'outOfStock'
    );
  }

  removeItem() {
    this.quantityControl.setValue(0);
    this.quantityControl.markAsDirty();
  }

  viewItem(item) {
    this.view.emit();
    this.gtmSelectItemEvent(item);
  }

  onDateChange(e) {
    this.showCheckAvalabilityAction = true;
    this.sharedCartService.setvalidation(true);
    this.newItem.customerRequestedDate = moment(e).format('YYYY/MM/DD');
  }

  onLegalEntitySelect(e, item) {
    if (e.plant != this.selectedLegalEntity.plant && !e.defaultPlant) {
      this.showDiffPlantWarning = true;
    } else {
      this.showDiffPlantWarning = false;
    }
    this.showCheckAvalabilityAction = true;
    this.sharedCartService.setvalidation(true);
    this.msgText = this.getTranslatedText('buyCart.clickCheckAvailablity');
    const obj = {
      availibility: this.showCheckAvalabilityAction,
      lineNo: item.entryNumber + 1,
    };
    this.sharedCartService.emitCheckAvailability(obj);
  }

  openDeleteDialog(entryNum) {
    const componentData = {
      cart: this.cart,
      userType: this.userType,
      cartId: this.cartId,
    };
    const deleteCartModal = this.launchDialogService.openDialog(
      DS_DIALOG.CART_DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (deleteCartModal) {
      deleteCartModal.pipe(take(1)).subscribe((value) => {
        if (value == 'delete') {
          this.deleteCartItem(entryNum);
        }
      });
    }
  }

  deleteCartItem(entryNum) {
    this.multiCartFacade.removeEntry(this.userType, this.cartId, entryNum);
    this.spinnerOverlayService.show('Loading Cart');

    this.actions$
      .pipe(
        ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
        map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
      )
      .pipe(take(1))
      .subscribe(
        () => {
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe(
              (s) => {
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

  toggleProduct() {
    this.productOpen = !this.productOpen;
  }

  // validateCheckAvailability() {
  //   const duplicateEntries = this.checkForDuplicateCartEntries(this.newItem);
  //   if (duplicateEntries.length > 0) {
  //     this.openMergeCartItemDialog(duplicateEntries);
  //     return;
  //   } else {
  //     this.checkAvailability();
  //   }
  // }

  checkAvailability() {
    this.showAvailabilityLoader = true;
    const checkAvailabilityObj = {
      availibility: false,
      lineNo: null,
    };
    this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      defaultPlant: this.selectedLegalEntity.plant,
    };
    this.sharedCartService
      .checkAvailability(this.cartId, this.newItem.entryNumber, Obj)
      .subscribe(
        (res: any) => {
          if (res) {
            this.multiCartFacade.loadCart({
              cartId: this.cartId,
              userId: this.userType,
              extraData: {
                active: true,
              },
            });
            this.actions$
              .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
              .pipe(take(1))
              .subscribe(
                (r) => {
                  this.showAvailabilityLoader = false;
                  this.showCheckAvalabilityAction = false;
                  this.sharedCartService.setvalidation(false);
                  if (this.errorEntries.length > 0) {
                    for (const e of this.errorEntries) {
                      if (e == this.item.entryNumber) {
                        this.errorEntries.splice(
                          this.errorEntries.indexOf(e),
                          1
                        );
                      }
                    }
                  }

                  this.showReqShipError = false;
                  this.cRef.detectChanges();
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
          } else {
            this.checkAvailabilityError = true;
          }
          this.cRef.detectChanges();
        },
        (error: any) => {
          this.showAvailabilityLoader = false;
          this.checkAvailabilityError = true;
          this.cRef.detectChanges();
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  checkForDuplicateCartEntries(cartItem) {
    const duplicateEntries = [];
    for (const en of this.cart.entries) {
      if (cartItem.entryNumber != en.entryNumber) {
        if (
          cartItem.customerRequestedDate == en.customerRequestedDate &&
          cartItem.selectedPlant?.code == this.selectedLegalEntity?.code
        ) {
          duplicateEntries.push(en.entryNumber);
        }
      }
    }
    return duplicateEntries;
  }

  // openMergeCartItemDialog(duplicateEntries) {
  //   if (!this.mergeCartItemModalRef) {
  //     this.mergeCartItemModalRef.componentInstance.duplicateEntries =
  //       duplicateEntries;
  //     this.mergeCartItemModalRef.componentInstance.cartItem = this.newItem;

  //     this.mergeCartItemModalRef.result
  //       .then((value) => {
  //         if (value) {
  //           // Merge API Call
  //         } else {
  //         }
  //         this.mergeCartItemModalRef = null;
  //       })
  //       .catch(() => {
  //         // this  callback is called when modal is closed with Esc key or clicking backdrop
  //         this.mergeCartItemModalRef = null;
  //         this.cRef.detectChanges();
  //       });
  //   }
  // }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.uid === c2.uid : c1 === c2;
  }

  getDiscountName(code) {
    let discountName = Discounts[code];
    if (code.indexOf('Action') > -1) {
      discountName = 'Coupon';
    }
    return discountName;
  }

  closeMenu(event) {
    this.breakUp = false;
  }

  getTotalDiscounts(basePrice, netPrice) {
    let totalDisc = '';
    if (basePrice && netPrice) {
      totalDisc =
        basePrice.formattedValue[0] +
        (basePrice.value - netPrice.value).toFixed(2);
    }
    return totalDisc;
  }

  splitEntry() {
    this.actions$
      .pipe(ofType(CartActions.LOAD_CART_SUCCESS), take(1))
      .subscribe(
        (success) => {},
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

  checkEntry(event: any) {
    const checkValue = event.target.checked;
    this.selectedEntry.emit({
      entryNumber: this.item.entryNumber,
      checked: checkValue,
    });
  }

  onCommentsInputBlur(event) {
    if (!this.commentsSaved && this.newItem.entryNotes?.length >= 0) {
      this.showCommentsNotSavedErr = true;
    }
  }

  onSaveCommentsMouseDown(event) {
    if (event.which == 1) {
      event.preventDefault();
      this.saveComments();
    }
  }

  saveComments() {
    this.newItem.entryNotes = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.newItem.entryNotes),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    this.newItem.entryNotes = this.newItem.entryNotes
      ?.substring(0, 204)
      ?.replace(/&#34|&#10/g, '');

    //commented due to auto save functionality....
    // if (!this.newItem.entryNotes || this.newItem.entryNotes?.length <= 0) {
    //   this.commentError = true;
    //   return;
    // } else {
    //   this.commentError = false;
    // }

    this.savingComments = true;
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      entryNotes: this.newItem.entryNotes,
      defaultPlant: this.selectedLegalEntity.plant,
    };
    this.sharedCartService
      .addCartItemComments(this.cartId, this.newItem.entryNumber, Obj)
      .subscribe(
        (res: any) => {
          //  if (res) {
          this.commentsSaved = true;
          this.showCommentsNotSavedErr = false;
          this.savingComments = false;
          this.cRef.detectChanges();
          this.multiCartFacade.loadCart({
            cartId: this.cartId,
            userId: this.userType,
            extraData: {
              active: true,
            },
          });
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

  onDeliveryGroupInputBlur() {
    const oldDeliGroup = this.newItem.deliveryGroupNumber;
    if (this.deliveryGroupNumber.length <= 0) {
      this.showDeliGrpError = true;
      this.deliGrpErrorType = '100';
      return;
    }
    this.newItem.deliveryGroupNumber = this.deliveryGroupNumber;

    let errors: any = {};

    if (!errors || errors.entryNumbers.length <= 0) {
    }

    if (errors?.entryNumbers.length > 0) {
      errors.entryNumbers.push(this.newItem.entryNumber);
      this.deliveryGroupNumber = oldDeliGroup;
      this.newItem.deliveryGroupNumber = this.deliveryGroupNumber;
    }

    if (errors.entryNumbers.length <= 0) {
      const cartInput = {
        entries: [this.newItem],
      };
      this.deliveryGroupLoader = true;
    }
  }

  getShipDate(dt) {
    if (typeof dt.shipDate === 'string' || dt.shipDate instanceof String) {
      if (
        dt.shipDate.toLowerCase() == 'no estimate available' ||
        dt.shipDate.indexOf('estimate') > -1
      ) {
        return this.getTranslatedText('buyCart.noEstimateAvailable');
      }
    }
    if (dt.shipDate == '01-Jan-2100') {
      return this.getTranslatedText('buyCart.noEstimateAvailable');
    }
    return moment(dt.shipDate).format('D MMMM, YYYY');
  }

  getEarliestPossibleDate(avail) {
    if (
      moment(avail.committedDate).format('DD-MM-YYYY') ==
      moment(this.item.customerRequestedDate).format('DD-MM-YYYY')
    ) {
      return false;
    }
    return true;
  }

  findProductFromCartItems(items) {
    return items.filter((el) => {
      return (
        el.product.code == this.newItem.product.code &&
        el.entryNumber == this.newItem.entryNumber
      );
    });
  }

  bodyClick() {
    if (
      this.viewBreakupLink &&
      !this.viewBreakupLink.nativeElement.contains(event.target) &&
      this.breakupContent &&
      !this.breakupContent.nativeElement.contains(event.target)
    ) {
      this.breakUp = false;
      this.cRef.detectChanges();
    }
  }

  togglePriceBreakup() {
    this.breakUpMenu = !this.breakUpMenu;
  }

  getPositiveSilverClause(value) {
    if (value) {
      return Math.abs(value).toFixed(2);
    }
    return 0;
  }

  //Google Analytics
  gtmSelectItemEvent(Item) {
    if (Item) {
      let producitem: EcommerceItem[] = [];
      producitem.push({
        item_id: Item.product?.code,
        item_name: Item.product?.name,
        discount: Item?.discountPercentage ? +Item?.discountPercentage : '',
        index: Item?.entryNumber > -1 ? Item?.entryNumber : 0,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.Cart,
        item_list_name: ItemListTypeEnum.Cart,
        price: Item?.discountPrice ? +Item?.discountPrice : '',
        quantity: Item.quantity,
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.Cart,
        item_list_name: ItemListTypeEnum.Cart,
        items: producitem,
      };
      let selectItemDataLayer: GTMDataLayer = {
        event: GtmEvents.SelectItem,
        store: StoreTypeEnum.Dsstore,
        ecommerce: purchaseEcommerceEcommerce,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
}
