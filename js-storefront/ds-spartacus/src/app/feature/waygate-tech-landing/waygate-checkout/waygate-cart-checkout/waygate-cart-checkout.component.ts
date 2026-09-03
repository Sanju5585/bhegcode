import {
  Component,
  ElementRef,
  Input,
  OnInit,
  SecurityContext,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ActiveCartFacade, PaymentType } from '@spartacus/cart/base/root';
import {
  AuthService,
  GlobalMessageService,
  TranslationService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import {
  PaymentTypeEnum,
  GtmEvents,
  ItemListTypeEnum,
} from '../../../../shared/enums/gtm.enum';
import {
  SoldToAddress,
  EndUserAddress,
  DeliveryAddress,
  PayerDeliveryAddress,
} from '../../../../shared/models/address-models';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
import {
  GTMDataLayer,
  EcommerceItem,
  Ecommerce,
  GTMCartType,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import {
  CreditCardPaymentInfoModel,
  SnapPayPaymentInfo,
} from '../../../checkout/buy-checkout/buy-checkout.model';
import { BuyCheckoutService } from '../../../checkout/buy-checkout/service/buy-checkout.service';
import { CustomerType } from '../../../../shared/models/customerType.model';
import { SharedCartService } from '../../../cart/cart-shared/shared-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ItcTradeModalComponent } from './itc-trade-modal/itc-trade-modal.component';
import {
  apacCountries,
  chinaCountry,
  salesOrgsForChinaApac,
} from '../../../../shared/products-constants';
import { DomSanitizer } from '@angular/platform-browser';
import { CartType } from '../../../../shared/models/cartType.models';
import { DSAuthService,UserTypes } from '../../../../core/auth/ds-auth.service';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
@Component({
  standalone: false,
  selector: 'app-waygate-cart-checkout',
  templateUrl: './waygate-cart-checkout.component.html',
  styleUrls: ['./waygate-cart-checkout.component.scss'],
})
export class WaygateCartCheckoutComponent {
  cart$: Observable<any>;
  stepIndex = 0;
  user$: Observable<unknown>;
  userType = '';
  public orderPreference: boolean = false;
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
  AllProductLine = AllProductLine;
  filmDate;
  nonFilmDate;
  customerAccount: any;
  payerCustomerAccount: any;
  agreeTerm: boolean = false;
  isEnduserAddress: boolean = false;
  isPaymentVal: boolean = false;
  isShippingAddressVal: boolean = false;
  isPayerAddressVal: boolean = false;
  isComplianceVal: boolean = false;
  isNotificationVal: boolean = false;
  isAddessDisable: boolean = false;
  isPayerDisabled: boolean = false;
  invoiceName: any;
  invoicePhone: any;
  orderAckName: any;
  orderAckPhone: any;
  userAddressList: any;
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
  breadcrumbs: any[] = [];
  cart: any;
  productLine: string;
  data: boolean = false;
  userId: any;
  userEmail: string = '';
  purchaseDataLayer: GTMDataLayer;
  customerUserType: string;
  isEndUserType: boolean;
  sameAsShipping: boolean;
  modalSubscription: Subscription[] = [];
  riskShip: boolean = false;
  sanctionedShip: boolean = false;
  riskEnd: boolean = false;
  sanctionedEnd: boolean = false;
  riskSold: boolean = false;
  sanctionedSold: boolean = false;
  isQuote: boolean = false;
  isRMA: boolean = false;
  selectedSalesArea: string;
  isEUCValid: boolean = true;
  isChinaApac: boolean = false;
  china = chinaCountry;
  apacCountries = apacCountries;
  salesOrgsForChinaApac = salesOrgsForChinaApac;
  isApac: boolean = false;
  isChina: boolean = false;
  userTypes;
  returnList: any[] = [];
  _cartType = CartType;
  constructor(
    private translationService: TranslationService,
    protected authService: AuthService,
    private dsAuthService: DSAuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private customerAccService: CustomerAccountService,
    private buyCheckoutService: BuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private addressModelService: AddressModelService,
    private router: Router,
    private productCatService: ProductCatelogService,
    private translate: TranslationService,
    private gtmService: GoogleTagManagerService,
    private sharedCartService: SharedCartService,
    private matDialog: MatDialog,
    public sanitizer: DomSanitizer
  ) {
    sessionStorage.setItem('count', 'first');
    this.ccPaymentInfo = new CreditCardPaymentInfoModel();
  }
  ngOnInit(): void {
    this.userTypes = this.dsAuthService.getUserTypeFromStorage();
    if (this.userTypes == UserTypes.INTERNAL) {
      console.log("User type "+ this.userTypes);
    }
    this.modalSubscription.push(
      this.sharedCartService.shippingAddress.subscribe((d) => {
        if (d) {
          this.riskShip = d['risk'];
          this.sanctionedShip = d['sanctioned'];
        }
      })
    );
    this.modalSubscription.push(
      this.sharedCartService.endUserAddress.subscribe((d) => {
        if (d) {
          this.riskEnd = d['risk'];
          this.sanctionedEnd = d['sanctioned'];
        }
      })
    );
    this.modalSubscription.push(
      this.sharedCartService.soldToAddress.subscribe((d) => {
        if (d) {
          this.riskSold = d['risk'];
          this.sanctionedSold = d['sanctioned'];
        }
      })
    );
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          url: `/${this.productLine}/cart`,
          name: 'saveForLaterItems.cartTitle',
        },
        {
          name: 'titles.checkoutpageTitle',
        },
      ];
    });
    this.customerAccService.disableChangeAccount.next(false);
    this.customerAccService.getCustomerUserType().subscribe((userType) => {
      this.customerUserType = userType;
      this.isEndUserType = this.customerUserType !== CustomerType.Type1; //chanel partner
      if (this.customerUserType === CustomerType.Type1) {
        this.isEnduserAddress = true;
      }
    });
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.selectedSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res: any) => {
        if (res) {
          this.userType = 'current';
          this.userEmail = res?.email;
        } else {
          this.userType = 'anonymous';
        }
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
        //this.getUserAddressList();
      });
    this.cart$ = this.activeCartFacade.getActive();
    this.cart$
      .pipe(
        tap((res: any) => {
          this.isQuote = res.commerceType === CommerceTypes.QUOTE;
          this.isRMA = res.commerceType === CommerceTypes.RETURNS;
        })
      )
      .subscribe((res) => {
        this.cart = res;
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
    this.updateLangForOptions(this.breadcrumbs, 'name');
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translationService.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  get isChinaApacOrder(): boolean {
    this.sharedCartService.setChinaApac(
      this.isChinaApac &&
        this.salesOrgsForChinaApac.includes(this.selectedSalesArea) &&
        !this.isQuote &&
        !this.isRMA
    );

    return (
      this.isChinaApac &&
      // this.customerUserType === CustomerType.Type2 &&
      this.salesOrgsForChinaApac.includes(this.selectedSalesArea) &&
      !this.isQuote &&
      !this.isRMA
    );
  }
  printPage() {
    window.print();
  }
  getDefaultAddress() {
    this.buyCheckoutService.bindDefaultAddress(this.cartId).subscribe(
      (res: any) => {
        this.returnList = res?.returnList;
        this.loadingFlag = true;
        this.soldToAddress = res?.defaultSoldToAddress;
        this.endUserAddress = res?.defaultEndUserAddress;
        this.shippingAddress = res?.defaultShiptToAddress;
        this.sharedCartService.setShippingAddress(res?.defaultShiptToAddress);
        this.sharedCartService.setEnduserAddress(res?.defaultEndUserAddress);
        this.sharedCartService.setSoldToAddress(res?.soldToAddress);
        this.payerAddress = res?.payerAddress;
        this.paymentTerm = res?.paymentTrms?.name
          ? res?.paymentTrms?.name
          : res?.paymentTrms?.code;
        this.inkoTerm =
          this.productLine === 'panametrics'
            ? res?.shipToIncoterm1 + ' - ' + res?.shipToIncotrmName
            : res?.shipToIncotrmName + '-' + res?.shipToIncoterm2;

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
        if (this.isRMA) {
          if (this.cart && this.cart?.totalReturnCartPrice?.value <= 0) {
            this.showCreditCard = false;
          }
        }
        if (this.showCreditCard) {
          this.setHppPaymentModel(res.billToAddress);
          this.merchatId = res.fiservMerchantId;
        }
        this.isChina =
          this.china.some(
            (country) =>
              country.isocode === this.soldToAddress.country['isocode']
          ) && this.salesOrgsForChinaApac.includes(this.selectedSalesArea);
        this.isApac =
          this.apacCountries.some(
            (country) =>
              country.isocode === this.soldToAddress.country['isocode']
          ) && ['1800', '6040'].includes(this.selectedSalesArea);
        this.isChinaApac =
          this.apacCountries.some(
            (country) =>
              country.isocode === this.soldToAddress.country['isocode']
          ) ||
          this.china.some(
            (country) =>
              country.isocode === this.soldToAddress.country['isocode']
          );
      },
      (error) => {
        this.loadingFlag = true;
        if (error) {
          this.getTranslatedText('errors.errorMessage');
        }
      }
    );
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
    this.ccPaymentInfo.email = data?.email ?? '';
    this.ccPaymentInfo.phoneNumber = data?.phone ?? '';
    this.ccPaymentInfo.firstName = this.userFirstName;
    this.ccPaymentInfo.lastName = this.userLastName;
  }
  checkEnduserAddress(value) {
    this.isEnduserAddress = value;
  }
  isComplianceValid(val) {
    this.isComplianceVal = val;
  }

  isEUCFormValid(val) {
    this.isEUCValid = val;
  }

  getComplianceInput(val) {
    if (!this.isQuote) {
      this.complianceModel = val;
      if (
        this.notificationModel &&
        this.accountModel &&
        this.complianceModel &&
        this.shippingmodel
      ) {
        //this.createReqDateForHybridCart();
        if (
          this.agreeTerm &&
          this.isEnduserAddress &&
          this.isShippingAddressVal &&
          this.isNotificationVal &&
          this.isComplianceVal &&
          this.isEUCValid
        ) {
          const placeOrder = () => {
            this.loadingFlag = false;
            let param = {
              checkoutDetails: {
                ...this.shippingmodel,
                ...this.notificationModel,
                orderPreference: this.orderPreference 
              },
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
                  orderPreference: this.orderPreference 
                },
                paymentType: this.accountModel,
                placeOrder: this.complianceModel,
                paymentInfo: this.snapPayPaymentInfo,
              };
              this.callPlaceOrder(param);
            } else {
              this.callPlaceOrder(param);
            }
          };

          if (
            this.riskShip ||
            this.sanctionedShip ||
            this.riskEnd ||
            this.sanctionedEnd ||
            this.riskSold ||
            this.sanctionedSold
          ) {
            this.modalSubscription.push(
              this.matDialog
                .open(ItcTradeModalComponent)
                .afterClosed()
                .subscribe((d) => {
                  if (!d.proceed) {
                    return;
                  }
                  placeOrder();
                })
            );
          } else {
            placeOrder();
          }
        }
      }
    } else {
      this.complianceModel = val;
      if (this.notificationModel && this.complianceModel) {
        if (
          this.agreeTerm &&
          this.isNotificationVal &&
          this.isEnduserAddress &&
          this.isComplianceVal
        ) {
          let notComObj = {};
          if (this.complianceModel.govtAgencyFlagVal === 'true') {
            notComObj['exportFlag'] = this.complianceModel.govtAgencyFlagVal; // exportFlag
            notComObj['exportAddress'] = this.complianceModel.exportAddress;
          }
          if (this.notificationModel.bhgeReview === 'true') {
            notComObj['csrReview'] = this.notificationModel.bhgeReview; //csrReview
            notComObj['csrReason'] = this.notificationModel.reason;
          }
          notComObj['quoteAckMail'] = this.notificationModel.orderAckMail;
          notComObj['soaContact'] = this.notificationModel.soaContact;
          notComObj['soaPhone'] = this.notificationModel.soaPhone;
          this.loadingFlag = false;
          this.buyCheckoutService
            .placeQuoteOrder(this.cartId, notComObj)
            .pipe(take(1))
            .subscribe({
              next: (res: any) => {
                if (res && res.code) {
                  this.isQuote = false;
                  this.productCatService
                    .createCartWithType(
                      OCC_USER_ID_CURRENT,
                      CommerceTypes.QUOTE
                    )
                    .subscribe((res) => {});

                  this.router.navigate([
                    `/${this.productLine}/quote-confirmation`,
                    res.code,
                  ]);
                }
              },
              error: (error) => {
                this.globalMessageService.remove(
                  GlobalMessageType.MSG_TYPE_ERROR
                );
                this.data = true;
                this.loadingFlag = true;
              },
            });
        }
      }
    }
  }
  isChecked(value) {
    this.agreeTerm = value;
  }
  getNoitificationInput(val) {
    this.notificationModel = val;
  }
  checkNotificationVal(value) {
    this.isNotificationVal = value;
  }
  getShippingInput(val) {
    this.shippingmodel = val;
  }
  getPaymentInput(val) {
    this.accountModel = val;
  }
  getPaymentInfo(val) {
    this.snapPayPaymentInfo = val;
  }
  isPaymentValid(val) {
    this.isPaymentVal = val;
  }
  getReqDate(val) {
    this.filmDate = val.filmDt;
    this.nonFilmDate = val.nonFilmDt;
  }
  checkShippingAddressVal(value) {
    this.isShippingAddressVal = value;
  }
  getTranslatedText(key) {
    let message;
    this.translationService.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  goToStep(step) {
    switch (step) {
      case 0:
        this.stepIndex = step;
        return;
      case 1:
        this.stepIndex = step;
        return;
      case 2:
        // if (!this.checkEquipmentValidation()) {
        this.stepIndex = step;
        // }
        return;
      case 3:
        // if (this.checkServiceOfferingValidation()) {
        this.stepIndex = step;
        // }
        return;
    }
  }
  //for order preference
  // handleChange(event: any): void {
  //   const selectedValue = event?.target?.value;
  //   this.orderPreference = selectedValue ;
  //   console.log('Is Order Preference :', this.orderPreference);
  // }
  
onOrderPreferenceReceived(value: any): void {
  this.orderPreference = value;
  console.log('Order Preference received in parent:', value);
}


  // separating below fn for US465610 US465611 US465613
  callPlaceOrder(paramVal: any) {
    this.cart$.pipe(take(1)).subscribe({
      next: (cart: any) => {
        const isRMA = cart?.commerceType === CommerceTypes.RETURNS;
        const orderCode = this.orderCode;
        if(cart?.cartType === CartType.Typ1){ //eca related change
            paramVal.ecaPoDetails = this.buyCheckoutService.getAllPo();
        }
        if (isRMA) {
          paramVal = {
            ...paramVal,
            returnPOList: {
              listOfReturnPO: [
                {
                  returnCustPoNum: this.accountModel.endCustomerOrderNumber,
                  returnLocation: this.returnList?.[0]?.returnLocationId ?? '',
                  returnPoNum: this.accountModel.purchaseOrderNumber
                }
              ]
            }
          }
        }
        this.buyCheckoutService
          .placeOrder(this.cartId, paramVal)
          .pipe(take(1))
          .subscribe({
            next: (code) => {
              if (!isRMA) {
                this.gtmPurchaseEvent(paramVal, code, isRMA);
              }
              this.gtmAddPaymentInfoEvent(paramVal);
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
                this.buyCheckoutService.sendData({
                  code: code,
                  cartId: this.cartId,
                  cardPayInfo: this.snapPayPaymentInfo,
                });
                this.gtmPurchaseEvent(paramVal, code, isRMA);
                this.gtmAddPaymentInfoEvent(paramVal);
                sessionStorage.setItem('count', 'second');
                this.newCartSubscription = this.productCatService
                  .createCartWithType(
                    OCC_USER_ID_CURRENT,
                    isRMA ? CommerceTypes.RETURNS : CommerceTypes.BUY
                  )
                  .subscribe((res) => {
                    if (res) {
                      this.currentFlag = false;
                      sessionStorage.setItem('count', 'second');
                      // this.router.navigate(['/waygate/order-summary', this.orderCode])
                    } else {
                      this.loadingFlag = true;
                    }
                    this.buyCheckoutService.clearAllPo();
                  });
                this.router.navigate([
                  `/${this.productLine}/${isRMA ? 'rma' : 'order'}-summary`,
                  code,
                ]);
              }
            },
            error: (error) => {
              this.globalMessageService.remove(
                GlobalMessageType.MSG_TYPE_ERROR
              );
              this.data = true;
              this.loadingFlag = true;
            },
          });
      },
    });
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
          checkoutDetails: { ...this.shippingmodel, ...this.notificationModel ,orderPreference: this.orderPreference },
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
  ngOnDestroy(): void {
    this.newCartSubscription?.unsubscribe();
    this.currentCartSubscription?.unsubscribe();
    window.removeEventListener('message', this.handlePostMessage);
    this.modalSubscription.forEach((d) => d.unsubscribe);
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
        store: this.gtmService.getItemBrand(),
        ecommerce: addPaymentInfoEcommerce,
        event: GtmEvents.AddPaymentInfo,
      };
      this.gtmService.sendEvent(addPaymentInfoDataLayer);
    }
  }

  gtmPurchaseEvent(paramVal, orderCode, isRMA: boolean) {
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
        shipping: this.cart?.shipmentCost?.value,
        currency: this.cart.currencyIso,
        payment_type: orderType,
        items: producitem,
      };
      let purchaseDataLayer = {
        store: this.gtmService.getItemBrand(),
        ecommerce: purchaseEcommerceEcommerce,
        event: GtmEvents.Purchase,
        commerceType: GTMCartType.BUY_CART,
        cartType: this.cartType,
      };
      this.gtmService.sendEvent(purchaseDataLayer);
    }
  }

  populateProduct(entry, index): EcommerceItem {
    let product: EcommerceItem;
    product = {
      item_id: entry?.product?.code,
      item_name: entry?.product?.name,
      discount: entry?.discountPercentage ? +entry?.discountPercentage : '',
      index: index,
      item_brand: this.gtmService.getItemBrand(),
      item_list_id: ItemListTypeEnum.Checkoutpage,
      item_list_name: ItemListTypeEnum.Checkoutpage,
      price: entry.discountPrice,
      quantity: entry?.quantity || 1,
    };
    return product;
  }
  onShippingAddressUpdated(updatedAddress) {
    this.shippingAddress = updatedAddress;
    if (this.sameAsShipping) {
      this.endUserAddress = { ...this.shippingAddress };
    }
  }
  onAddressUpdated(address: any) {
    this.endUserAddress = address;
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
