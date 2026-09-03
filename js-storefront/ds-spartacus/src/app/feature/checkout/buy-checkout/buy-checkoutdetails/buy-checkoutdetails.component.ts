import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { Subscription, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { BuyCheckoutService } from '../service/buy-checkout.service';
import { Observable } from 'rxjs';
import { CreditCardPaymentInfoModel } from '../buy-checkout.model';
import { SnapPayPaymentInfo } from '../buy-checkout.model';
import { ActiveCartFacade, PaymentType } from '@spartacus/cart/base/root';
import { ProductScope, ProductService } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import {
  DeliveryAddress,
  EndUserAddress,
  PayerDeliveryAddress,
  SoldToAddress,
} from '../../../../shared/models/address-models';
import {
  Ecommerce,
  EcommerceItem,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { environment } from '../../../../../environments/environment';
import {
  GtmEvents,
  ItemListTypeEnum,
  PaymentTypeEnum,
  StoreTypeEnum,
} from '../../../../shared/enums/gtm.enum';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
@Component({
  standalone: false,
  selector: 'ds-buy-checkoutdetails',
  templateUrl: './buy-checkoutdetails.component.html',
  styleUrls: ['./buy-checkoutdetails.component.scss'],
})
export class BuyCheckoutdetailsComponent implements OnInit, OnDestroy {
  public isAccountCollapsed = false;
  public isShippingCollapsed = false;
  public isNotificationCollapsed = false;
  public isPayerCollapsed = false;
  public isbilltoaddressCollapsed = false;
  public isComplianceCollapsed = false;
  public isPaymentCollapsed = false;
  userAddressList$: Observable<any>;
  public isEndUserDetailsCollapsed = false;
  @ViewChild('stickyMenu') menuElement: ElementRef;
  loading: boolean = false;
  loadingFlag: boolean = false;
  cardPayLoader: boolean = false;
  sticky: boolean = false;
  elementPosition: any;
  soldToAddress: SoldToAddress;
  endUserAddress: EndUserAddress;
  shippingAddress: DeliveryAddress;
  payerAddress: PayerDeliveryAddress;
  getPayerAddressList: any;
  paymentTerm: string;
  inkoTerm: string;
  largestFilmLeadtime: any;
  largestNonFilmLeadtime: any;
  collectList = [];
  prePayAddList = [];
  complianceModel: any;
  shippingmodel: any;
  payermodel: any;
  notificationModel: any;
  accountModel: any;
  cartId: any;
  cartType: any;
  orderCode;
  newCartSubscription: Subscription;
  currentCartSubscription: Subscription;
  currentFlag: boolean = true;
  invoiceMail: any;
  orderAckMail: any;
  checkoutData: any;
  payerCheckoutData: any;
  filmDate;
  nonFilmDate;
  customerAccount: any;
  payerCustomerAccount: any;
  agreeTerm: boolean = false;
  isEnduserAddress: boolean = false;
  isShippingAddressVal: boolean = false;
  isPayerAddressVal: boolean = false;
  isNotificationVal: boolean = false;
  isAddessDisable: boolean = false;
  isPayerDisabled: boolean = false;
  invoiceName: any;
  invoicePhone: any;
  orderAckName: any;
  orderAckPhone: any;
  userAddressList: any;
  data: boolean = false;
  showCreditCard: boolean = false;
  hidePurchaseOrder: boolean = false;
  ccPaymentInfo: CreditCardPaymentInfoModel;
  snapPayPaymentInfo = new SnapPayPaymentInfo();
  payInfo: any = {};
  merchatId: string;
  @Input() ccPaymentInfoForSnapPay;
  savedCards: any;
  binLokfailur: string = 'Credit Card is not valid !!';
  savedCardError: string = 'SavedCard is not Valid to use for placing an Order';
  showBinLookupErr: boolean = false;
  showUnexpectedErr: boolean = false;
  showSavedCardError: boolean = false;
  showCardNotAllowedErr: boolean = false;
  userFirstName: string;
  userLastName: string;
  currentCurrancyCode: string;
  currentSalesArea: string;
  cart$: Observable<any>;
  cart: any;
  user$: Observable<unknown>;
  userEmail: string = '';
  purchaseDataLayer: GTMDataLayer;
  constructor(
    private buyCheckoutService: BuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private addressModelService: AddressModelService,
    private router: Router,
    private productCatService: ProductCatelogService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    private breadCrumbService: BreadcrumbService,
    private productService: ProductService,
    private gtmService: GoogleTagManagerService,
    private userAccountFacade: UserAccountFacade,
    protected authService: AuthService
  ) {
    sessionStorage.setItem('count', 'first');
    this.ccPaymentInfo = new CreditCardPaymentInfoModel();
  }

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('titles.checkoutpageTitle')
      .subscribe((res: string) => {
        this.breadCrumbService.setBreadcrumbTitle(res);
      });
    this.currentCartSubscription = this.activeCartFacade
      .getActiveCartId()
      .subscribe((cartId) => {
        this.cartId = cartId;
        if (
          this.cartId &&
          this.currentFlag &&
          sessionStorage.getItem('count') == 'first'
        )
          this.getDefaultAddress();
        this.getUserAddressList();
      });
    this.userFirstName = this.buyCheckoutService.userFirstName;
    this.userLastName = this.buyCheckoutService.userLastName;
    if (sessionStorage.getItem('ccOrderPlaced') === 'true') {
      window.location.reload();
      sessionStorage.removeItem('ccOrderPlaced');
    }
    if (sessionStorage.getItem('binLokkupFailed') === 'true') {
      this.showBinLookupErr = true;
      this.cardPayLoader = false;
      sessionStorage.removeItem('binLokkupFailed');
    } else if (sessionStorage.getItem('savedCardException') === 'true') {
      this.showSavedCardError = true;
      this.cardPayLoader = false;
      sessionStorage.removeItem('savedCardException');
    } else if (sessionStorage.getItem('userClosedHppForm')) {
      this.cardPayLoader = false;
      sessionStorage.removeItem('userClosedHppForm');
    } else if (sessionStorage.getItem('unexpectedError')) {
      this.showUnexpectedErr = true;
      this.cardPayLoader = false;
      sessionStorage.removeItem('unexpectedError');
    } else if (sessionStorage.getItem('cardNotAllowedErr')) {
      this.showCardNotAllowedErr = true;
      this.cardPayLoader = false;
      sessionStorage.removeItem('cardNotAllowedErr');
    }
    window.addEventListener('message', this.handlePostMessage.bind(this));

    this.cart$ = this.activeCartFacade.getActive();
    this.cart$.subscribe((res) => {
      this.cart = res;
    });

    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );

    this.user$.subscribe((res: any) => {
      if (res) {
        this.userEmail = res?.email;
      }
    });
  }

  isChecked(value) {
    this.agreeTerm = value;
  }

  ngOnDestroy(): void {
    this.newCartSubscription?.unsubscribe();
    this.currentCartSubscription?.unsubscribe();
    window.removeEventListener('message', this.handlePostMessage);
  }

  ngAfterViewInit() {
    if (this.menuElement) {
      this.elementPosition = this.menuElement.nativeElement.offsetTop;
    }
  }

  getTranslatedText(key) {
    this.translate.translate(key).subscribe((res) => {
      this.globalMessageService.add(
        res,
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
    });
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  getDefaultAddress() {
    this.buyCheckoutService.bindDefaultAddress(this.cartId).subscribe(
      (res: any) => {
        this.loadingFlag = true;
        this.soldToAddress = res?.soldToAddress;
        this.endUserAddress = res?.defaultEndUserAddress;
        this.shippingAddress = res?.defaultShiptToAddress;
        this.payerAddress = res?.payerAddress;
        // if(this.payerAddress[0].length == null && this.payerAddress[0].length == undefined && this.payerAddress[0].length == 0){
        //   this.disablePayerAddress = false
        // }
        // else{
        //   this.disablePayerAddress = true
        // }
        this.paymentTerm = res?.paymentTrms?.name
          ? res?.paymentTrms?.name
          : res?.paymentTrms?.code;
        this.inkoTerm = res?.shipToIncotrmName + '-' + res?.shipToIncoterm2;
        this.collectList = res?.collectTypes;
        this.prePayAddList = res?.prepayAddTypes;
        this.cartType = res?.cartData?.cartType;
        this.invoiceName = res?.invoiceContact;
        this.invoicePhone = res?.invoicePhone;
        this.invoiceMail = res?.cartData?.invoiceEmail;
        this.orderAckName = res?.soaContact;
        this.orderAckPhone = res?.soaPhone;
        this.orderAckMail = res?.cartData?.orderConfirmation;
        this.checkoutData = res;
        this.payerCheckoutData = res;
        this.customerAccount = res?.defaultSoldTo?.uid;
        this.payerCustomerAccount = res.payerAddress?.sapCustomerID;
        this.largestFilmLeadtime = res?.cartData?.largestFilmLeadtime;
        this.largestNonFilmLeadtime = res?.cartData?.largestNonFilmLeadtime;
        this.buyCheckoutService.sendCartData({
          totalItems: res?.totalItems,
          totalEstimate: res?.totalPrice?.formattedValue,
          totalValue: res?.totalPrice?.value,
          totalDiscount: res?.cartData?.yourPriceDiscount
            ? res.cartData.yourPriceDiscount
            : '',
          totalSilverClausePrice: res?.cartData?.silverClauseTotal
            ? res.cartData.silverClauseTotal
            : '',
          cartData: res.cartData,
        });
        if (this.cartType) sessionStorage.setItem('cartType', this.cartType);
        this.showCreditCard = res?.showCreditCard ? res?.showCreditCard : false;
        this.hidePurchaseOrder = res?.hidePurchaseOrder
          ? res?.hidePurchaseOrder
          : false;
        this.savedCards = res?.savedCards;
        this.currentCurrancyCode = res.cartData.currencyIso;
        this.currentSalesArea = res.cartData.saleaAreaID.split('_')[1];
        if (this.showCreditCard) {
          this.setHppPaymentModel(res.billToAddress);
          this.merchatId = res.fiservMerchantId;
        }
      },
      (error) => {
        this.loadingFlag = true;
        if (error) {
          this.getTranslatedText('errors.errorMessage');
        }
      }
    );
  }

  getUserAddressList() {
    this.userAddressList$ = this.addressModelService.getPayerAddressList(
      this.cartId
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      if (res.addresses.length == 0) {
        this.isPayerDisabled = false;
      } else {
        this.isPayerDisabled = true;
      }
    });
  }
  setHppPaymentModel(data) {
    this.ccPaymentInfo.address = data?.line1 ?? '';
    this.ccPaymentInfo.companyCode = this.currentSalesArea;
    this.ccPaymentInfo.city = data?.town ?? '';
    this.ccPaymentInfo.state = data?.region?.isocodeShort ?? '';
    this.ccPaymentInfo.zip = data?.postalCode ?? '';
    if (this.ccPaymentInfo?.zip?.includes('-')) {
      this.ccPaymentInfo.zip = this.ccPaymentInfo.zip.split('-')[0];
    }
    this.ccPaymentInfo.country = data?.country?.isocode ?? '';
    this.ccPaymentInfo.phoneNumber = data?.phone ?? '';
    this.ccPaymentInfo.firstName = this.userFirstName;
    this.ccPaymentInfo.lastName = this.userLastName;
  }
  checkShippingAddressVal(value) {
    this.isShippingAddressVal = value;
  }

  checkPayerAddressVal(value) {
    this.isPayerAddressVal = value;
  }

  checkNotificationVal(value) {
    this.isNotificationVal = value;
  }
  checkEnduserAddress(value) {
    this.isEnduserAddress = value;
  }

  getShippingInput(val) {
    this.shippingmodel = val;
  }

  getPayerInput(val) {
    this.payermodel = val;
  }

  getNoitificationInput(val) {
    this.notificationModel = val;
  }

  getPaymentInput(val) {
    this.accountModel = val;
  }
  getPaymentInfo(val) {
    this.snapPayPaymentInfo = val;
  }
  getReqDate(val) {
    this.filmDate = val.filmDt;
    this.nonFilmDate = val.nonFilmDt;
  }

  getComplianceInput(val) {
    this.complianceModel = val;
    if (
      this.notificationModel &&
      this.accountModel &&
      this.complianceModel &&
      this.shippingmodel
    ) {
      this.createReqDateForHybridCart();
      if (
        this.agreeTerm &&
        this.isEnduserAddress &&
        this.isShippingAddressVal &&
        this.isNotificationVal
      ) {
        this.loadingFlag = false;
        let param = {
          checkoutDetails: { ...this.shippingmodel, ...this.notificationModel },
          paymentType: this.accountModel,
          placeOrder: this.complianceModel,
        };
        if (
          this.accountModel.paymentType === 'card' &&
          this.snapPayPaymentInfo.isNewCard
        ) {
          this.openSnapPayForm();
          this.loadingFlag = true;
          this.cardPayLoader = true;
        } else if (
          this.accountModel.paymentType === 'card' &&
          this.snapPayPaymentInfo.isNewCard === false
        ) {
          let param = {
            checkoutDetails: {
              ...this.shippingmodel,
              ...this.notificationModel,
            },
            paymentType: this.accountModel,
            placeOrder: this.complianceModel,
            paymentInfo: this.snapPayPaymentInfo,
          };
          this.callPlaceOrder(param);
        } else {
          this.callPlaceOrder(param);
        }
      }
    }
  }
  // separating below fn for US465610 US465611 US465613
  callPlaceOrder(paramVal: any) {
    this.buyCheckoutService
      .placeOrder(this.cartId, paramVal)
      .pipe(take(1))
      .subscribe(
        (code) => {
          this.loadingFlag = true;
          if (code.toString() === this.binLokfailur) {
            if (this.snapPayPaymentInfo.isNewCard === true) {
              sessionStorage.setItem('binLokkupFailed', 'true');
              window.location.reload();
            }
          } else if (code.toString() === this.savedCardError) {
            sessionStorage.setItem('savedCardException', 'true');
            window.location.reload();
          } else if (code) {
            this.orderCode = code;
            if (this.snapPayPaymentInfo.isNewCard === true) {
              sessionStorage.setItem('ccOrderPlaced', 'true');
            }
            this.router.navigate(['/order-summary', this.orderCode]);
            this.buyCheckoutService.sendData({
              code: code,
              cartId: this.cartId,
              cardPayInfo: this.snapPayPaymentInfo,
            });
            sessionStorage.setItem('count', 'second');
            this.gtmPurchaseEvent(paramVal, this.orderCode);
            this.gtmAddPaymentInfoEvent(paramVal);
            this.newCartSubscription = this.productCatService
              .createCartWithType(OCC_USER_ID_CURRENT, CommerceTypes.BUY)
              .subscribe((res) => {
                if (res) {
                  this.currentFlag = false;
                  sessionStorage.setItem('count', 'second');
                  // this.router.navigate(['/order-summary', this.orderCode])
                } else {
                  this.loadingFlag = true;
                }
              });
          }
        },
        (error) => {
          this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
          this.data = true;
          this.loadingFlag = true;
        }
      );
  }
  createReqDateForHybridCart() {
    if (this.cartType == 'HYBRID') {
      if (this.filmDate) {
        this.buyCheckoutService
          .requsetDateForFilm(this.cartId, this.filmDate)
          .subscribe(
            (res) => {},
            (error) => {
              this.getTranslatedText('errors.errorMessage');
            }
          );
      }
      if (this.nonFilmDate) {
        this.buyCheckoutService
          .requsetDateForNonFilm(this.cartId, this.nonFilmDate)
          .subscribe(
            (res) => {},
            (error) => {
              this.getTranslatedText('errors.errorMessage');
            }
          );
      }
    }
  }
  public openSnapPayForm() {
    let hppform = document.getElementById('snappay_hppform');
    if (hppform) {
      hppform.remove();
    }
    let hpp = document.createElement('script');
    hpp.id = 'snappay_hppform';
    hpp.src = environment.snapPayApi.hppFormSrc;
    hpp.setAttribute('data-target', '#snappayhppform_response');
    hpp.setAttribute('data-callback', 'ecommerce_callback');
    hpp.setAttribute('data-accountid', environment.snapPayApi.accountId);
    hpp.setAttribute('data-customerid', this.currentSalesArea);
    hpp.setAttribute('data-currencycode', this.currentCurrancyCode);
    hpp.setAttribute(
      'data-transactionamount',
      environment.snapPayApi.transactionAmount
    );
    hpp.setAttribute('data-merchantid', this.merchatId);
    hpp.setAttribute('data-paymentmode', environment.snapPayApi.paymentMode);
    hpp.setAttribute('data-cvvrequired', environment.snapPayApi.yes);
    hpp.setAttribute('data-enableemailreceipt', environment.snapPayApi.no);
    hpp.setAttribute(
      'data-redirectionurl',
      environment.snapPayApi.redirectionUrl
    );
    hpp.setAttribute(
      'data-transactionType',
      environment.snapPayApi.transactionType
    );
    hpp.setAttribute('data-companycode', this.currentSalesArea);
    hpp.setAttribute('data-userid', environment.snapPayApi.userId);
    hpp.setAttribute('data-openiniframe', environment.snapPayApi.no);
    hpp.setAttribute('data-snappayurl', environment.snapPayApi.snapPayUrl);
    hpp.setAttribute('data-firstname', this.userFirstName);
    hpp.setAttribute('data-lastname', this.userLastName);
    hpp.setAttribute('data-addressline1', this.ccPaymentInfo.address);
    hpp.setAttribute('data-city', this.ccPaymentInfo.city);
    hpp.setAttribute('data-state', this.ccPaymentInfo.state);
    hpp.setAttribute('data-zip', this.ccPaymentInfo.zip);
    hpp.setAttribute('data-country', this.ccPaymentInfo.country);
    hpp.setAttribute(
      'data-signature',
      this.buyCheckoutService.generategetRequestIDHmac(
        this.ccPaymentInfo,
        this.currentSalesArea,
        this.currentCurrancyCode
      )
    );
    hpp.type = 'text/javascript';
    hpp.async = true;
    hpp.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(hpp);
  }
  // for capturing snap pay form data
  handlePostMessage(event: MessageEvent) {
    if (event.data.type === 'resval') {
      let snapResData = event.data.data;
      if (
        this.currentSalesArea === '1720' &&
        snapResData.paymentmethodtype === 'AMEX'
      ) {
        this.cardPayLoader = false;
        sessionStorage.setItem('cardNotAllowedErr', 'true');
        window.location.reload();
      } else if (snapResData.transactionstatus === 'Y') {
        this.snapPayPaymentInfo.isNewCard = this.snapPayPaymentInfo.isNewCard;
        this.snapPayPaymentInfo.ccType = snapResData.paymentmethodtype;
        this.snapPayPaymentInfo.ccNumber = snapResData.paymentmethodlast4;
        this.snapPayPaymentInfo.ccName =
          snapResData.paymentmethodfirstname +
          ' ' +
          snapResData.paymentmethodlastname;
        this.snapPayPaymentInfo.ccValidTru =
          snapResData.paymentmethodexpirationyear +
          '' +
          snapResData.paymentmethodexpirationmonth.toString().padStart(2, '0');
        this.snapPayPaymentInfo.merchantid = snapResData.merchantid;
        this.snapPayPaymentInfo.token = snapResData.paymentmethodtoken;
        let param = {
          checkoutDetails: { ...this.shippingmodel, ...this.notificationModel },
          paymentType: this.accountModel,
          placeOrder: this.complianceModel,
          paymentInfo: this.snapPayPaymentInfo,
        };
        if (
          this.accountModel !== undefined &&
          this.snapPayPaymentInfo.isNewCard === true
        ) {
          this.callPlaceOrder(param);
        } else {
          this.getTranslatedText('errors.errorMessage');
        }
      } else if (
        snapResData.transactionstatus === 'N' &&
        snapResData.returnmessage === 'Transaction Failed. '
      ) {
        this.cardPayLoader = false;
        sessionStorage.setItem('unexpectedError', 'true');
        window.location.reload();
      } else if (snapResData.transactionstatus === 'N') {
        this.cardPayLoader = false;
        sessionStorage.setItem('userClosedHppForm', 'true');
        window.location.reload();
      } else {
        sessionStorage.setItem('unexpectedError', 'true');
        window.location.reload();
      }
    }
  }

  gtmAddPaymentInfoEvent(paramVal) {
    let producitem: EcommerceItem[] = [];
    if (this.cart) {
      this.cart?.entries.forEach((entry, index) => {
        producitem.push(this.populateProduct(entry, index));
      });
      let orderType: PaymentTypeEnum;
      if (paramVal?.paymentType?.paymentType == 'ACCOUNT') {
        orderType = PaymentTypeEnum.PO;
      } else if (paramVal?.paymentType?.paymentType == 'card') {
        orderType = PaymentTypeEnum.CreditCard;
      }

      let addPaymentInfoEcommerce: Ecommerce = {
        currency: this.cart.currencyIso,
        value: this.cart.totalPrice.value,
        payment_type: orderType,
        items: producitem,
      };

      let addPaymentInfoDataLayer: GTMDataLayer = {
        event: GtmEvents.AddPaymentInfo,
        store: StoreTypeEnum.Dsstore,
        ecommerce: addPaymentInfoEcommerce,
      };
      this.gtmService.sendEvent(addPaymentInfoDataLayer);
    }
  }

  gtmPurchaseEvent(paramVal, orderCode) {
    let producitem: EcommerceItem[] = [];
    if (this.cart) {
      this.cart?.entries.forEach((entry, index) => {
        producitem.push(this.populateProduct(entry, index));
      });
      let orderType: PaymentTypeEnum;
      if (paramVal.paymentType.paymentType == 'ACCOUNT') {
        orderType = PaymentTypeEnum.PO;
      } else if (paramVal.paymentType.paymentType == 'card') {
        orderType = PaymentTypeEnum.CreditCard;
      }
      let purchaseEcommerceEcommerce: Ecommerce = {
        transaction_id: orderCode,
        value: this.cart.totalPrice.value,
        tax: this.cart.totalTax.value,
        shipping: this.cart.shipmentCost.value,
        currency: this.cart.currencyIso,
        payment_type: orderType,
        items: producitem,
      };
      let purchaseDataLayer = {
        event: GtmEvents.Purchase,
        store: StoreTypeEnum.Dsstore,
        ecommerce: purchaseEcommerceEcommerce,
        cartType: this.cartType,
      };

      this.gtmService.sendEvent(purchaseDataLayer);
    }
  }

  populateProduct(entry, index): EcommerceItem {
    let product: EcommerceItem = {
      item_id: entry?.product?.code,
      item_name: entry?.product?.name,
      discount: entry?.discountPercentage ? +entry?.discountPercentage : '',
      index: index,
      item_brand: this.gtmService.getItemBrand(),
      item_list_id: ItemListTypeEnum.Checkoutpage,
      item_list_name: ItemListTypeEnum.Checkoutpage,
      price: entry.discountPrice,
      quantity: entry?.quantity || '',
    };
    return product;
  }
}
export function ecommerce_callback(err, data) {
  let snapPayResponse = JSON.parse(data.response);
  let resObj = { type: 'resval', data: snapPayResponse };
  this.window.postMessage(resObj, '*');
}
declare global {
  interface Window {
    ecommerce_callback: any;
  }
}
globalThis.ecommerce_callback = ecommerce_callback;
