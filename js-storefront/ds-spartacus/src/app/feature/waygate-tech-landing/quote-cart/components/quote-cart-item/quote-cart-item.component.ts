import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SecurityContext,
} from '@angular/core';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { map, Subscription, take } from 'rxjs';
import { ProductType } from '../../../../../shared/models/cartType.models';
import { Item } from '../../../../cart';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import moment from 'moment';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import {
  TranslationService,
  GlobalMessageType,
  GlobalMessageService,
} from '@spartacus/core';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../../core/generic-validator/regular-expressions';
import { DomSanitizer } from '@angular/platform-browser';
import { GTMDataLayer } from '../../../../../shared/models/googleTagManager.model';
import {
  GtmEvents,
  ItemListTypeEnum,
} from '../../../../../shared/enums/gtm.enum';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import { SpinnerOverlayService } from '../../../../../shared/components/spinner-overlay/spinner-overlay.service';

@Component({
  standalone: false,
  selector: 'ds-quote-cart-item',
  templateUrl: './quote-cart-item.component.html',
  styleUrls: ['./quote-cart-item.component.scss'],
})
export class QuoteCartItemComponent implements OnInit, OnDestroy {
  @Input() checkAll;
  @Input() entryNum;
  @Input() item;
  @Input() cart;
  selectedSalesArea: string;
  @Input() quantityControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  @Output() selectedEntry: EventEmitter<any> = new EventEmitter();

  @Output()
  updateCart: EventEmitter<any> = new EventEmitter();
  @Input() productOpen: boolean;
  @Input() userType: string;

  subscriptions: Subscription[] = [];
  showCheckAvalabilityAction: boolean;
  breakUpMenu: boolean;
  breakUp: boolean;
  productLine: AllProductLine;
  showAvailabilityLoader: boolean = false;
  quantityForm = new FormGroup({
    quantity: new FormControl(1),
  });
  maxQuantity: number = 9999;
  quantity: number = 1;
  disableCheckAvailablity: boolean = true;
  minDate;
  defaultDate;
  additionalDetail: boolean = true;
  public productType = ProductType;
  contactUsUrl: string;
  newItem: Item;
  isPartialShipment: boolean;
  modifiedquantity: boolean = false;
  modifiedDate: boolean = false;
  cartId: string;
  selectedLegalEntity?: any;
  checkAvailabilityError: boolean;
  showReqShipError = false;
  errorEntries = [];
  msgText: string;
  savingComments = false;
  commentsSaved = false;
  showCommentsNotSavedErr = false;

  constructor(
    private customerAccService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    private sharedCartService: SharedCartService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private cRef: ChangeDetectorRef,
    public elRef: ElementRef,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer,
    private gtmService: GoogleTagManagerService,
    private spinnerOverlayService: SpinnerOverlayService
  ) {}

  ngOnInit(): void {
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.selectedSalesArea =
        res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });
    this.subscriptions.push(
      this.customerAccService
        .getProductLine()
        .subscribe((productLine: AllProductLine) => {
          this.productLine = productLine;
          this.contactUsUrl = `/${productLine}/contactus`;
          // if (this.productLine) {
          //   this.leadTimeTooltipVisibilityFlag = this.showLeadtTimeTooltip();
          // }
        })
    );
    this.calculateShipDate();

    this.productOpen = true;
    this.cartId = this.cart.code;
    this.quantityForm.controls.quantity.setValue(this.item.quantity);

    this.subscriptions.push(
      this.quantityForm.valueChanges.subscribe((res: any) => {
        if (!Number.isInteger(res.quantity)) {
          this.quantityForm.controls.quantity.setValue(
            Math.floor(res.quantity)
          );
        }
        if (res.quantity != this.item.quantity) {
          this.modifiedquantity = true;
          this.showCheckAvalabilityAction = true;
          this.sharedCartService.setvalidation(true);
          this.sharedCartService.setCheckAvailabilityFlag(this.item, true);
          //this.msgText = this.getTranslatedText('quoteCart.clickCheckAvailablity');
          const obj = {
            availibility: this.showCheckAvalabilityAction,
            lineNo: this.item.entryNumber + 1,
          };
          this.sharedCartService.emitCheckAvailability(obj);
        }
      })
    );
    this.newItem = Object.assign({}, this.item);
    this.newItem.availabilityDetails =
      this.newItem?.availabilityDetails?.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t.plant === obj.plant)
      );
    this.msgText = '';

    this.msgText = '';
    if (this.newItem?.stockAvailability === false) {
      this.msgText =
        this.msgText + this.getTranslatedText('quoteCart.noShippingDate');
    }

    if (this.newItem?.splitByAvailability === true) {
      this.msgText =
        this.msgText + this.getTranslatedText('quoteCart.splitAvailablity');
    }
    this.selectedLegalEntity = this.newItem?.availabilityDetails?.find(
      (element) => element.plant === this.newItem['plant']
    );
    if (this.newItem.entryNotes) {
      this.additionalDetail = false;
    }

    this.msgText = '';
    this.subscriptions.push(
      this.sharedCartService.isCheckAvailabilityCheck$.subscribe((res) => {
        if (res.length > 0) {
          if (this.findProductFromCartItems(res).length > 0) {
            this.msgText = this.getTranslatedText(
              'quoteCart.clickCheckAvailablity'
            );
          }
        }
      })
    );
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

  findProductFromCartItems(items) {
    return items.filter((el) => {
      return (
        el.product.code == this.newItem.product.code &&
        el.entryNumber == this.newItem.entryNumber
      );
    });
  }

  // For calculting productline logics
  calculateShipDate() {
    let tomorrowDay: number;
    const productLine = this.productLine;
    const entries = this.item;
    const shipDate = entries.estShipData?.slice(-1)[0]?.shipDate;
    const lead = entries.leadTime;

    this.handleWaygateDateLogic(entries, shipDate);
  }

  handleWaygateDateLogic(entries, shipDate) {
    if (entries.estShipData?.length > 1) {
      this.defaultDate = new Date(shipDate);
      this.minDate = new Date(entries.estShipData?.slice(-2)[0]?.shipDate);
    } else {
      this.defaultDate = new Date(shipDate);
      this.minDate = new Date(shipDate);
    }
  }

  getLeadTime(lead: string): number {
    return Number(lead);
  }

  checkEntry(event: any) {
    const checkValue = event.target.checked;
    this.selectedEntry.emit({
      entryNumber: this.item.entryNumber,
      checked: checkValue,
    });
  }

  gtmSelectItemEvent(item) {}

  togglePriceBreakup() {
    this.breakUpMenu = !this.breakUpMenu;
  }
  closeMenu() {}

  checkAvailability() {
    this.quantityUpdate();
  }

  quantityUpdate() {
    this.showAvailabilityLoader = true;
    let reqDate = this.newItem.customerRequestedDate;
    if (!!reqDate) {
      reqDate = moment(reqDate, 'YYYY/MM/DD').format('YYYY-MM-DD');
    }
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      defaultPlant: this.selectedLegalEntity?.plant,
      reqDate: reqDate,
    };
    const checkAvailabilityObj = {
      availibility: false,
      lineNo: null,
    };
    this.sharedCartService.updateProceedButtonFlag(false);
    this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
    this.sharedCartService.setCheckAvailabilityFlag([], false);
    this.subscriptions.push(
      this.sharedCartService
        .checkAvailability(this.cartId, this.newItem.entryNumber, Obj)
        .subscribe({
          next: (res: any) => {
            if (res) {
              this.multiCartFacade.loadCart({
                cartId: this.cartId,
                userId: this.userType,
                extraData: {
                  active: true,
                },
              });
              this.subscriptions.push(
                this.actions$
                  .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
                  .pipe(take(1))
                  .subscribe({
                    next: (r) => {
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
            } else {
              this.checkAvailabilityError = true;
            }
            this.cRef.detectChanges();
          },
          error: (error: any) => {
            this.showAvailabilityLoader = false;
            this.checkAvailabilityError = true;
            this.cRef.detectChanges();
            this.globalMessageService.add(
              error,
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          },
        })
    );

    this.multiCartFacade.loadCart({
      cartId: this.cartId,
      userId: this.userType,
      extraData: {
        active: true,
      },
    });

    this.subscriptions.push(
      this.actions$
        .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
        .pipe(take(1))
        .subscribe({
          next: (r) => {
            this.updateCart.emit(true);
            this.cRef.detectChanges();
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

  onQualityChange(count: any) {
    this.quantity = count;
    this.disableCheckAvailablity = false;
  }

  getInt(product) {
    if (!!product) {
      const defaultPlant = this.newItem?.availabilityDetails?.find(
        (plant) => plant.isDefaultPlant
      );
      if (defaultPlant) {
        return parseInt(defaultPlant.actualStockQty);
      }
    }
  }

  checkStockAvailablity(product) {
    const qty = this.quantityForm.get('quantity').value;
    let stockAvailable = false;
    if (!!product) {
      const defaultPlant = this.newItem?.availabilityDetails?.find(
        (plant) => plant.isDefaultPlant
      );
      if (defaultPlant) {
        stockAvailable = defaultPlant.actualStockQty >= qty;
      }
    }
    return stockAvailable;
  }

  getShipDate(entry) {
    const defaultPlant = this.newItem?.availabilityDetails?.find(
      (plant) => plant.isDefaultPlant
    );
    if (defaultPlant) {
      return moment(defaultPlant.committedDate).format('D MMMM, YYYY');
    }
  }

  onDateChange(e) {
    this.showCheckAvalabilityAction = true;
    this.sharedCartService.setvalidation(true);
    this.modifiedDate = true;
    this.sharedCartService.setCheckAvailabilityFlag(this.item, true);
    this.newItem.customerRequestedDate = moment(e).format('YYYY/MM/DD');
  }

  additionalDetailToggle() {
    this.additionalDetail = !this.additionalDetail;
  }

  saveComments() {
    this.newItem.entryNotes = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.newItem.entryNotes),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    const comments = document.createElement('textarea');
    comments.innerHTML = this.newItem.entryNotes;
    this.newItem.entryNotes = comments.textContent.replace(REGULAR_PATTERN.alphaNumeric, '');
    this.newItem.entryNotes = this.newItem.entryNotes
      ?.substring(0, 204)
      ?.replace(/&#34|&#10/g, '');

    this.savingComments = true;
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      entryNotes: this.newItem.entryNotes,
      defaultPlant: this.selectedLegalEntity?.plant,
    };
    this.subscriptions.push(
      this.sharedCartService
        .addCartItemComments(this.cartId, this.newItem.entryNumber, Obj)
        .subscribe({
          next: (res: any) => {
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
      this.subscriptions.push(
        deleteCartModal.pipe(take(1)).subscribe((value) => {
          if (value == 'delete') {
            this.deleteCartItem(entryNum, this.cart);
          }
        })
      );

      this.subscriptions.push(
        this.launchDialogService.dialogClose
          .pipe(take(2))
          .subscribe((value) => {
            if (value == 'delete') {
              this.deleteCartItem(entryNum, this.cart);
            }
          })
      );
    }
  }

  deleteCartItem(entryNum, cart) {
    const temp_cart = cart;
    //added removefromcart event
    const removeFromCartDataLayer: GTMDataLayer = {
      event: GtmEvents.RemoveFromCart,
      store: this.gtmService.getItemBrand(),
      ecommerce: {
        currency: this.item.listPrice?.currencyIso,
        value: this.item.totalPrice?.formattedValue,
        items: [
          {
            item_id: this.item.product.code,
            item_name: this.item.product.name,
            index: entryNum,
            item_brand: this.gtmService.getItemBrand(),
            item_list_id: ItemListTypeEnum.Cart,
            item_list_name: ItemListTypeEnum.Cart,
            price: this.item.totalPrice?.formattedValue,
            quantity: this.item.quantity,
          },
        ],
      },
    };
    this.gtmService.sendEvent(removeFromCartDataLayer);
    //ended removefromcart event
    this.multiCartFacade.removeEntry(this.userType, this.cartId, entryNum);
    this.spinnerOverlayService.show('Loading Cart');

    this.subscriptions.push(
      this.actions$
        .pipe(
          ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
          map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
        )
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.selectedEntry.emit({
              entryNumber: this.item.entryNumber,
              checked: false,
            });
            const checkAvailabilityObj = {
              availibility: false,
              lineNo: null,
            };
            this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
            this.subscriptions.push(
              this.actions$
                .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
                .pipe(take(1))
                .subscribe({
                  next: (s) => {
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe);
  }
}
