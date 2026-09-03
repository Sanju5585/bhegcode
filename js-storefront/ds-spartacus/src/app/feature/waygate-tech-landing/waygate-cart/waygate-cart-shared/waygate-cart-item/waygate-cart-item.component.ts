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
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import moment from 'moment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {
  MultiCartFacade,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { SpinnerOverlayService } from '../../../../../shared/components/spinner-overlay/spinner-overlay.service';
import {
  GtmEvents,
  ItemListTypeEnum,
} from '../../../../../shared/enums/gtm.enum';
import { ProductType } from '../../../../../shared/models/cartType.models';
import { Discounts } from '../../../../../shared/models/discounts.model';
import {
  GTMDataLayer,
  EcommerceItem,
  Ecommerce,
} from '../../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { ApiService } from '../../../../../core/http/api.service';
import { HttpParams } from '@angular/common/http';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { UserTypes } from '../../../../../core/auth/ds-auth.service';

export interface Item {
  // couponDiscount?: number;
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
  availableQuantity?: any;
  yourPriceDiscount?: any;
  leadTime?: any;
  fullyConfigurePartNumber?: any;
  referenceNumber?: any;
  tagInformation?: any;
  parentEntryNumber?: any;
  accessoryEntryNumbers?: any;
  longConfigEntry?: any;
  ecaCode?: any;
}

export interface CartItemComponentOptions {
  isSaveForLater?: boolean;
  optionalBtn?: any;
}

@Component({
  standalone: false,
  selector: 'app-waygate-cart-item',
  templateUrl: './waygate-cart-item.component.html',
  styleUrls: ['./waygate-cart-item.component.scss'],
})
export class WaygateCartItemComponent implements OnInit {
  customerReferenceNumber: any;
  tagContainerCheck: boolean = true;
  tagInformation: any;
  selectedSalesArea: string;
  @Input() compact = false;
  @Input() item: Item;
  @Input() readonly = false;
  @Input() quantityControl: FormControl = new FormControl('', [
    Validators.required,
  ]);

  @Output() view = new EventEmitter<any>();

  @Input() promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  @Output()
  updateCart: EventEmitter<any> = new EventEmitter();
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
  @Output() requestedShipmentDate = new EventEmitter<{
    date: Date;
    disabled: boolean;
  }>();
  cartId = '';
  minDate: Date = new Date();
  defaultDate: Date = new Date();
  quantityForm = new FormGroup({
    quantity: new FormControl(1),
  });
  maxQuantity: number = 9999;
  quantity: number = 1;
  disableCheckAvailablity: boolean = true;
  showCheckAvalabilityAction = false;
  checkAvailabilityError = false;
  showAvailabilityLoader = false;
  selectedLegalEntity: any = {
    code: '0',
    name: 'Select',
  };
  showCommentsInput = false;
  additionalDetail: boolean = true;
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
  breakUpMenu = false;
  productLine: any;
  public productType = ProductType;
  isPartialShipment: boolean;
  modifiedquantity: boolean = false;
  modifiedDate: boolean = false;
  isRomado: boolean = false;
  isShortTime: boolean = false;
  standardLeadTime: number;
  msgTextForShip: string;
  isQuoteOrderConvertFlow: boolean = false;
  @Output()
  selectedEntry: EventEmitter<any> = new EventEmitter();
  temp_cart: any;
  contactUsUrl: string;
  leadTimeTooltipVisibilityFlag: boolean = false;
  isChannelPartner: boolean;
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
    private customerAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private router: Router,
    private apiService: ApiService,
    protected winRef: WindowRef
  ) {
    this.renderer.listen(document, 'click', this.bodyClick.bind(this));
  }

  setDefaultDate() {
    const productLine = this.productLine;
    let tomorrowDay: number;
    tomorrowDay = new Date().getDate() + 1;
    if (this.cart) {
      if (
        this.item?.productType === this.productType.Typ3 &&
        this.cart.longestLeadTimeFilm !== undefined
      ) {
        this.defaultDate = new Date(this.cart.longestLeadTimeFilm);
        this.minDate = new Date(this.cart.longestLeadTimeFilm);
        this.requestedShipmentDate.emit({
          date: this.minDate,
          disabled: this.isRomado,
        });
      } else if (this.cart.longestLeadTime !== undefined) {
        this.defaultDate = new Date(this.cart.longestLeadTime);
        switch (productLine) {
          case AllProductLine.bently:
            this.minDate = new Date();
            this.minDate.setDate(tomorrowDay);
            this.requestedShipmentDate.emit({
              date: this.minDate,
              disabled: this.isRomado,
            });
            break;
          default:
            this.minDate = new Date(
              this.item.estShipData?.slice(-1)[0]?.shipDate
            );
            this.requestedShipmentDate.emit({
              date: new Date(this.item.estShipData?.slice(-1)[0]?.shipDate),
              disabled: this.isRomado,
            });
        }
      }
    }
  }
  saveCustomerReferenceNumber() {
    const params = [
      'users',
      this.userType,
      'carts',
      this.cartId,
      'entries',
      this.newItem.entryNumber,
      'updateReferenceNumber',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const Obj = {
      referenceNUmber: this.customerReferenceNumber,
    };
    this.apiService.putData_options(apiUrl, Obj).subscribe((success) => {});
  }
  saveTagInformation() {
    const params = [
      'users',
      this.userType,
      'carts',
      this.cartId,
      'entries',
      this.newItem.entryNumber,
      'updateTagInfo',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const Obj = {
      tagInformation: this.tagInformation,
    };
    this.apiService.putData_options(apiUrl, Obj).subscribe((success) => {});
  }
  tagContainerToggle() {
    this.tagContainerCheck = !this.tagContainerCheck;
  }

  ngOnInit() {
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
       if (res) {
        this.selectedSalesArea =
        res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });

    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });

    this.customerAccService
      .getProductLine()
      .subscribe((productLine: AllProductLine) => {
        this.productLine = productLine;
        this.contactUsUrl = `/${productLine}/contactus`;
        if (this.productLine) {
          this.leadTimeTooltipVisibilityFlag = this.showLeadtTimeTooltip();
        }
      });
    this.isPartialShipment = !this.cart?.isShipCompleteOrder;
    if (!this.isPartialShipment) {
      this.setDefaultDate();
    } else {
      this.calculateShipDate();
    }

    this.sharedCartService.isShipmentPrefernce$.subscribe(
      (shipmentPrefernce) => {
        if (shipmentPrefernce) {
          this.isPartialShipment = shipmentPrefernce;
        }
      }
    );

    this.customerReferenceNumber = this.item.referenceNumber;
    this.tagInformation = this.item.tagInformation;
    this.cartNumber = this.entryNum++;
    this.productOpen = true;
    this.cartId = this.userType === 'current' ? this.cart.code : this.cart.guid;
    this.quantityForm.controls.quantity.setValue(this.item.quantity);

    this.quantityForm.valueChanges.subscribe((res: any) => {
      if (!Number.isInteger(res.quantity)) {
        this.quantityForm.controls.quantity.setValue(Math.floor(res.quantity));
      }
      if (res.quantity != this.item.quantity) {
        this.modifiedquantity = true;
        this.showCheckAvalabilityAction = true;
        this.sharedCartService.setvalidation(true);
        this.sharedCartService.setCheckAvailabilityFlag(this.item, true);
        //this.msgText = this.getTranslatedText('buyCart.clickCheckAvailablity');
        const obj = {
          availibility: this.showCheckAvalabilityAction,
          lineNo: this.item.entryNumber + 1,
        };
        this.sharedCartService.emitCheckAvailability(obj);
      }
    });
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
        this.msgText + this.getTranslatedText('buyCart.noShippingDate');
    }

    if (this.newItem?.splitByAvailability === true) {
      this.msgText =
        this.msgText + this.getTranslatedText('buyCart.splitAvailablity');
    }
    this.selectedLegalEntity = this.newItem?.availabilityDetails?.find(
      (element) => element.plant === this.newItem['plant']
    );
    if (this.newItem.entryNotes) {
      this.additionalDetail = false;
    }

    this.deliveryGroupNumber = this.newItem.deliveryGroupNumber
      ? this.newItem.deliveryGroupNumber
      : '';

    this.msgText = '';
    this.sharedCartService.isCheckAvailabilityCheck$.subscribe((res) => {
      if (res.length > 0) {
        if (this.findProductFromCartItems(res).length > 0) {
          this.msgText = this.getTranslatedText(
            'buyCart.clickCheckAvailablity'
          );
        }
      }
    });
    if ([AllProductLine.bently].includes(this.productLine)) {
      this.requestedShipmentDate.emit({
        date: this.minDate,
        disabled: this.isRomado,
      });
    }
    this.isQuoteOrderConvertFlow = JSON.parse(
      sessionStorage.getItem('isQuoteToOrder')
    );
  }

  // For calculting productline logics
  calculateShipDate() {
    let tomorrowDay: number;
    const productLine = this.productLine;
    const entries = this.item;
    const shipDate = entries.estShipData?.slice(-1)[0]?.shipDate;
    const lead = entries.leadTime;

    switch (productLine) {
      case AllProductLine.bently:
        tomorrowDay = new Date().getDate() + 1;
        this.standardLeadTime = lead;
        this.defaultDate = new Date(shipDate);
        this.minDate = new Date();
        this.minDate.setDate(tomorrowDay);
        break;

      // We can make PL adjustment if necesary here
      // case AllProductLine.waygate:
      //   this.handleWaygateDateLogic(entries, shipDate);
      //   break;

      default:
        this.handleWaygateDateLogic(entries, shipDate);
    }

    this.requestedShipmentDate.emit({
      date: this.minDate,
      disabled: this.isRomado,
    });
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

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  ngOnDestroy() {
    this.showReqShipError = false;
    this.modifiedquantity = false;
    this.modifiedDate = false;
    this.sharedCartService.setCheckAvailabilityFlag([], false);
    const checkAvailabilityObj = {
      availibility: false,
      lineNo: null,
    };
    this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
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

  viewItem() {
    this.view.emit();
  }

  onDateChange(e) {
    const entries = this.item;
    this.standardLeadTime = entries.leadTime * 7;
    let estimatShip = new Date(entries.estShipData?.slice(-2)[0]?.shipDate);
    const normalFunc = () => {
      this.showCheckAvalabilityAction = true;
      this.sharedCartService.setvalidation(true);
      this.modifiedDate = true;
      this.sharedCartService.setCheckAvailabilityFlag(this.item, true);
      this.newItem.customerRequestedDate = moment(e).format('YYYY/MM/DD');
    };

    if ([AllProductLine.bently].includes(this.productLine)) {
      const diffInDays = Math.round(
        (e.getTime() - this.minDate.getTime()) / (1000 * 3600 * 24)
      );
      if (diffInDays < 7) {
        this.showCheckAvalabilityAction = false;
        this.isRomado = true;
        this.isShortTime = false;
        this.msgTextForShip = this.getTranslatedText('buyCart.RomadoRequest');
      } else if (7 <= diffInDays && e.getTime() < estimatShip.getTime()) {
        this.isRomado = false;
        this.isShortTime = true;
        this.msgTextForShip = this.getTranslatedText(
          'buyCart.StandardLeadTime'
        );
        normalFunc();
      } else {
        this.isRomado = false;
        this.isShortTime = false;
        normalFunc();
      }
      // normalFunc();
      this.requestedShipmentDate.emit({
        date: e,
        disabled: this.isRomado,
      });
    } else if ([AllProductLine.druck].includes(this.productLine)) {
      const diffInDays = Math.round(
        (e.getTime() - this.minDate.getTime()) / (1000 * 3600 * 24)
      );
      if (7 <= diffInDays && diffInDays <= this.standardLeadTime) {
        this.isRomado = false;
        this.isShortTime = true;
        this.msgTextForShip = this.getTranslatedText(
          'buyCart.StandardLeadTime'
        );
        normalFunc();
      } else {
        normalFunc();
      }
      this.requestedShipmentDate.emit({
        date: e,
        disabled: this.isRomado,
      });
    } else {
      normalFunc();
    }
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
    if (this.item.hasOwnProperty('accessoryEntryNumbers')) {
      let urlParams = ['users', 'current', 'carts', this.cart.code, 'entries'];
      let url = this.apiService.constructUrl(urlParams);
      const params = new HttpParams().set('entryNumber', this.item.entryNumber);

      this.apiService.deleteData(url, { params }).subscribe((res) => {
        this.winRef.location.href = `/${this.productLine}/cart`;
      });
    } else {
      const deleteCartModal = this.launchDialogService.openDialog(
        DS_DIALOG.CART_DELETE_DIALOG,
        undefined,
        undefined,
        componentData
      );

      if (deleteCartModal) {
        deleteCartModal.pipe(take(1)).subscribe((value) => {
          if (value == 'delete') {
            this.deleteCartItem(entryNum, this.cart);
          }
        });

        this.launchDialogService.dialogClose
          .pipe(take(2))
          .subscribe((value) => {
            if (value == 'delete') {
              this.deleteCartItem(entryNum, this.cart);
            }
          });
      }
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

    this.actions$
      .pipe(
        ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
        map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
      )
      .pipe(take(1))
      .subscribe(
        () => {
          this.selectedEntry.emit({
            entryNumber: this.item.entryNumber,
            checked: false,
          });
          const checkAvailabilityObj = {
            availibility: false,
            lineNo: null,
          };
          this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
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
  additionalDetailToggle() {
    this.additionalDetail = !this.additionalDetail;
  }

  checkAvailability() {
    if (this.newItem.customerRequestedDate) {
      if (
        [AllProductLine.waygate, AllProductLine.panametrics].includes(
          this.productLine
        )
      ) {
        this.sharedCartService.onEarlyShipmentService(false, this.cartId);
        if ([AllProductLine.waygate].includes(this.productLine)) {
          this.sharedCartService.updateEalryShipmentCheckboxState(true);
        }
      }
    }
    if (
      !this.isPartialShipment &&
      (!this.modifiedquantity || this.modifiedDate) &&
      this.cart.entries.length > 1
    ) {
      const componentdata = {};
      const completeOrderDialog = this.launchDialogService.openDialog(
        DS_DIALOG.COMPLETE_ORDER,
        undefined,
        undefined,
        componentdata
      );
      if (completeOrderDialog) {
        completeOrderDialog
          .pipe(take(1))
          //   console.log('1', value);
          // });
          // this.launchDialogService.dialogClose
          //   .pipe(take(1))
          .subscribe((v) => {
            console.log(
              '2',
              v?.instance?.launchDialogService?._dialogClose._value
            );
            const value = v?.instance?.launchDialogService?._dialogClose._value;
            if (value != undefined) {
              // if (completeOrderDialog) {
              //   completeOrderDialog.subscribe((value) => {});
              //   this.launchDialogService.dialogClose.subscribe((value) => {
              //     if (value != undefined) {
              if (value == 'confirm-complete-order') {
                this.isPartialShipment = false;
                this.confirmShipment();
              } else if (value == 'close-complete-order') {
                this.isPartialShipment = true;
                this.sharedCartService.updateisShipmentPrefernce(
                  this.isPartialShipment
                );
                this.cart.isShipCompleteOrder = false;
                this.newItem.customerRequestedDate = '';
                const Obj = {
                  endCustomerNumber: null,
                  guestConfirmEmail: null,
                  guestEmail: null,
                  isEndCustomerChanged: false,
                  shipmentMethod: false,
                };
                this.sharedCartService
                  .updateShipmentType(this.cartId, Obj)
                  .subscribe((res) => {
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
                          this.updateCart.emit(true);
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
                  });
                // window.location.reload();
              }
            }
            this.cRef.detectChanges();
          });
      }
    } else if (!this.isPartialShipment && this.modifiedquantity) {
      this.quantityUpdate();
    } else {
      this.isPartialShipment = true;
      this.showAvailabilityLoader = true;
      this.partialShipment();
    }
  }

  partialShipment() {
    this.showAvailabilityLoader = true;
    const checkAvailabilityObj = {
      availibility: false,
      lineNo: null,
    };
    this.sharedCartService.updateProceedButtonFlag(false);
    this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
    this.sharedCartService.setCheckAvailabilityFlag([], false);
    let reqDate = this.newItem.customerRequestedDate;
    if (!!reqDate) {
      reqDate = moment(reqDate, 'YYYY/MM/DD').format('YYYY-MM-DD');
    }
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      defaultPlant: this.selectedLegalEntity?.plant,
      reqDate: reqDate,
      productLine:this.productLine
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
          this.updateCart.emit(true);
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
  }

  confirmShipment() {
    this.showAvailabilityLoader = true;
    const Obj = {
      endCustomerNumber: null,
      guestConfirmEmail: null,
      guestEmail: null,
      isEndCustomerChanged: false,
      shipmentMethod: !this.isPartialShipment,
    };
    this.isPartialShipment = false;
    this.sharedCartService
      .updateShipmentType(this.cartId, Obj)
      .subscribe((res) => {
        // update check availablity
        const checkAvailabilityObj = {
          availibility: false,
          lineNo: null,
        };

        this.sharedCartService.updateProceedButtonFlag(false);
        this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
        this.sharedCartService.setCheckAvailabilityFlag([], false);
        let reqDate = this.newItem.customerRequestedDate;
        if (!!reqDate) {
          reqDate = moment(reqDate, 'YYYY/MM/DD').format('YYYY-MM-DD');
        }
        const Obj = {
          quantity: this.quantityForm.value.quantity,
          defaultPlant: this.selectedLegalEntity?.plant,
          reqDate: reqDate,
          productLine:this.productLine
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
              this.updateCart.emit(true);
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
      });
  }

  //quantity change

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
      productLine:this.productLine
    };
    const checkAvailabilityObj = {
      availibility: false,
      lineNo: null,
    };
    this.sharedCartService.updateProceedButtonFlag(false);
    this.sharedCartService.emitCheckAvailability(checkAvailabilityObj);
    this.sharedCartService.setCheckAvailabilityFlag([], false);
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
          this.updateCart.emit(true);
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
    const comments = document.createElement('textarea');
    comments.innerHTML = this.newItem.entryNotes;
    this.newItem.entryNotes = comments.textContent.replace(REGULAR_PATTERN.alphaNumeric, '');
    this.newItem.entryNotes = this.newItem.entryNotes
      ?.substring(0, 204)
      ?.replace(/&#34|&#10/g, '');
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
      defaultPlant: this.selectedLegalEntity?.plant,
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

  getShipDate(entry) {
    const defaultPlant = this.newItem?.availabilityDetails?.find(
      (plant) => plant.isDefaultPlant
    );
    if (defaultPlant) {
      return moment(defaultPlant.committedDate).format('D MMMM, YYYY');
    }
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
  increaseQuantity(count: any) {
    this.quantity = count;
    this.disableCheckAvailablity = false;
  }

  decreaseQuantity(count: any) {
    this.quantity = count;
    this.disableCheckAvailablity = false;
  }
  quantityAdded(count: any) {
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

  //Google Analytics
  gtmSelectItemEvent(Item) {
    if (Item) {
      let producitem: EcommerceItem[] = [];
      producitem.push({
        item_id: Item.product?.code,
        item_name: Item.product?.name,
        discount: Item?.discountPercentage ? +Item?.discountPercentage : '',
        index: 0,
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
        store: this.gtmService.getItemBrand(),
        ecommerce: purchaseEcommerceEcommerce,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
  public openModal(item) {
    const configureurl =
      '/configure/vc/cartEntry/entityKey/' + item.entryNumber;
    const componentdata = {
      item: item,
      cart: this.cart,
      userType: this.userType,
      cartId: this.cartId,
    };
    const viewConfigModal = this.launchDialogService.openDialog(
      DS_DIALOG.CONFIGURATOR_OVERVIEW_MODAL,
      undefined,
      undefined,
      componentdata
    );
    if (viewConfigModal) {
      viewConfigModal.pipe(take(1)).subscribe((value) => {
        console.log('closing the overview');
      });
      this.launchDialogService.dialogClose.subscribe((value) => {
        if (value == 'update configuration') {
          this.router.navigate([configureurl], {
            queryParams: {
              forceReload: true,
              resolveIssues: false,
            },
          });
        }
      });
    }
  }

  showLeadtTimeTooltip() {
    return (
      this.item?.fullyConfigurePartNumber &&
      (this.productLine == AllProductLine.bently ||
        this.productLine == AllProductLine.panametrics ||
        this.productLine == AllProductLine.druck)
    );
  }

  calculateCouponDiscount(coupon: number, discount: number): number {
    if (coupon > discount) {
      return coupon - discount;
    } else {
      return coupon;
    }
  }

  openAddressModel(isAddNewCartEntry: boolean = false){
    const componentData = {
      cartItem: this.item,
      cartItemPage: true,
      isAddNewCartEntry: isAddNewCartEntry
    };
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_ADDRESS_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {});
    }
  }
}
