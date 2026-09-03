import { Component, ComponentRef, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { environment } from '../../../../../environments/environment';
import { BuyCheckoutService } from '../../../checkout/buy-checkout/service/buy-checkout.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { MyInvoicesService } from '../my-invoices.service';
import { TranslationService, WindowRef } from '@spartacus/core';
import { take } from 'rxjs';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'app-invoices-checkout',
  standalone: false,
  templateUrl: './invoices-checkout.component.html',
  styleUrl: './invoices-checkout.component.scss',
})
export class InvoicesCheckoutComponent implements OnDestroy {
  invoiceData: any;
  breadcrumbs: { name: string; url: string }[];
  productLine: string;
  newCard: boolean;
  snapPayPaymentInfo: any;
  cardSelected: boolean = false;
  cartId: any;
  // merchantId: any;
  ccPaymentInfo: any = {};
  currentSalesArea: any;
  userFirstName: any;
  userLastName: any;
  currentCurrencyCode: any;
  ccAgrees: any;
  termsAgrees: any;
  cardError = false;
  showBinLookupErr: boolean;
  showSavedCardError: boolean;
  showUnexpectedErr: boolean;
  showCardNotAllowedErr: boolean;

  binLokfailur: string = 'Credit Card is not valid !!';
  savedCardError: string = 'SavedCard is not Valid to use for placing an Order';
  showCardNotSaved: boolean;

  constructor(
    private router: Router,
    private customerAccService: CustomerAccountService,
    private buyCheckoutService: BuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private myInvoicesService: MyInvoicesService,
    private translationService: TranslationService,
    private launchDialogService: LaunchDialogService,
    private winRef: WindowRef
  ) {}
  ngOnInit() {
    const currentState = this.router.lastSuccessfulNavigation;
    console.log(currentState?.extras);

    this.invoiceData = currentState?.extras?.state['data'];

    if (!this.invoiceData) {
      this.router.navigate(['/' + this.productLine, 'my-invoices']);
    }
    this.userFirstName = this.buyCheckoutService.userFirstName;
    this.userLastName = this.buyCheckoutService.userLastName;
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          name: 'my-invoices.myInvoices',
          url: `/${this.productLine}/my-invoices`,
        },
        {
          name: 'my-invoices.payment',
          url: `/${this.productLine}/my-invoices/checkout`,
        },
      ];

      this.updateLangForOptions(this.breadcrumbs, 'name');
    });
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (this.cartId) {
        this.buyCheckoutService
          .bindDefaultAddress(this.cartId)
          .subscribe((chooseData: any) => {
            this.currentCurrencyCode =
              chooseData.cartData.currencyIso ||
              this.invoiceData?.selectedInvoices?.currencyIso;
            this.currentSalesArea =
              chooseData.cartData.saleaAreaID.split('_')[1];
            this.setHppPaymentModel(this.invoiceData?.defaultSoldToAddress);
          });
      }
    });
    if (
      this.winRef.nativeWindow.sessionStorage.getItem('binLokkupFailed') ===
      'true'
    ) {
      this.showBinLookupErr = true;
      // this.cardPayLoader = false;
      this.winRef.nativeWindow.sessionStorage.removeItem('binLokkupFailed');
    } else if (
      this.winRef.nativeWindow.sessionStorage.getItem('savedCardException') ===
      'true'
    ) {
      this.showSavedCardError = true;
      // this.cardPayLoader = false;
      this.winRef.nativeWindow.sessionStorage.removeItem('savedCardException');
    } else if (
      this.winRef.nativeWindow.sessionStorage.getItem('userClosedHppForm')
    ) {
      // this.cardPayLoader = false;
      this.winRef.nativeWindow.sessionStorage.removeItem('userClosedHppForm');
    } else if (
      this.winRef.nativeWindow.sessionStorage.getItem('unexpectedError')
    ) {
      this.showUnexpectedErr = true;
      // this.cardPayLoader = false;
      this.winRef.nativeWindow.sessionStorage.removeItem('unexpectedError');
    } else if (
      this.winRef.nativeWindow.sessionStorage.getItem('cardNotAllowedErr')
    ) {
      this.showCardNotAllowedErr = true;
      // this.cardPayLoader = false;
      this.winRef.nativeWindow.sessionStorage.removeItem('cardNotAllowedErr');
    }
    window.addEventListener('message', this.handlePostMessage.bind(this));
  }
  selectSavedCard(card: any) {
    this.cardSelected = true;
    this.snapPayPaymentInfo = card;
    this.newCard = false;
  }
  selectNewCard() {
    this.cardSelected = true;
    this.snapPayPaymentInfo = {};
    this.newCard = true;
  }
  setHppPaymentModel(data) {
    console.log(data);
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
  proceedToPay() {
    this.cardError = false;
    console.log(this.newCard);
    if (this.newCard) {
      this.openSnapPayForm();
      // this.openSaveCardPopup();
    } else {
      this.checkout(false);
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
    hpp.setAttribute('data-currencycode', this.currentCurrencyCode);
    hpp.setAttribute(
      'data-transactionamount',
      environment.snapPayApi.transactionAmount
    );
    hpp.setAttribute('data-merchantid', this.invoiceData?.fiservMerchantId);
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
        this.currentCurrencyCode
      )
    );
    hpp.type = 'text/javascript';
    hpp.async = true;
    hpp.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(hpp);
    console.log(hpp);
  }
  // for capturing snap pay form data
  handlePostMessage(event: MessageEvent) {
    console.log(event?.data?.data);
    if (event.data.type === 'resval') {
      let snapResData = event.data.data;
      if (
        this.currentSalesArea === '1720' &&
        snapResData.paymentmethodtype === 'AMEX'
      ) {
        // this.cardPayLoader = false;
        this.winRef.nativeWindow.sessionStorage.setItem(
          'cardNotAllowedErr',
          'true'
        );
        // this.cardError = true;
        window.location.reload();
      } else if (snapResData.transactionstatus === 'Y') {
        // this.cardError = false;
        this.snapPayPaymentInfo.isNewCard = true;
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
        console.log(this.snapPayPaymentInfo);
        this.checkout(true);
      } else if (
        snapResData.transactionstatus === 'N' &&
        snapResData.returnmessage === 'Transaction Failed. '
      ) {
        this.cardError = true;
        this.winRef.nativeWindow.sessionStorage.setItem(
          'unexpectedError',
          'true'
        );
        window.location.reload();
      } else if (snapResData.transactionstatus === 'N') {
        this.cardError = true;
        this.winRef.nativeWindow.sessionStorage.setItem(
          'userClosedHppForm',
          'true'
        );
        window.location.reload();
      } else {
        this.cardError = true;
        this.winRef.nativeWindow.sessionStorage.setItem(
          'unexpectedError',
          'true'
        );
        window.location.reload();
      }
    }
  }
  ccAgreeToggle(event) {
    this.ccAgrees = event.target.checked;
  }
  termsToggle(event) {
    this.termsAgrees = event.target.checked;
  }
  checkout(isNewCard?: any) {
    const data = {
      ...this.invoiceData,
      paymentInfo: { ...this.snapPayPaymentInfo, isNewCard: isNewCard },
      paymentTypeForm: {
        paymentType: 'card',
        costCenterId: '',
        purchaseOrderNumber: 'CREDIT CARD ORDER',
        endCustomerOrderNumber: '',
        endUserNumber: '',
        googleCaptcha: '',
      },
    };
    this.myInvoicesService.checkout(data).subscribe(
      (res: any) => {
        const code = res[0]?.message;
        console.log(code);
        if (code === this.binLokfailur) {
          if (this.snapPayPaymentInfo.isNewCard === true) {
            this.winRef.nativeWindow.sessionStorage.setItem(
              'binLokkupFailed',
              'true'
            );
            window.location.reload();
          }
        } else if (code === this.savedCardError) {
          this.winRef.nativeWindow.sessionStorage.setItem(
            'savedCardException',
            'true'
          );
          window.location.reload();
        } else if (code) {
          if (this.snapPayPaymentInfo.isNewCard === true) {
            this.winRef.nativeWindow.sessionStorage.setItem(
              'ccOrderPlaced',
              'true'
            );
            this.openSaveCardPopup();
          } else {
            this.navigateAway();
          }
        }
      },
      (error) => {
        this.cardError = true;
      }
    );
  }
  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translationService.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }
  openSaveCardPopup() {
    const saveModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_MODAL,
      undefined,
      undefined,
      {}
    );
    if (saveModal) {
      saveModal.pipe(take(1)).subscribe((componentRef: ComponentRef<any>) => {
        const instance = componentRef.instance;
        const reason = instance?.reason;
        if (reason === 'save') {
          this.myInvoicesService
            .saveCreditCard(this.snapPayPaymentInfo)
            .subscribe((res: any) => {
              if (res === 'success') {
                this.showCardNotSaved = false;
              } else if (res === 'error') {
                this.showCardNotSaved = true;
              }
              this.navigateAway();
            });
        } else if (reason === 'close') {
          // Handle the close action if needed
          console.log('closed');
          this.navigateAway();
        } else {
          console.log('something');
          this.navigateAway();
        }
      });
    }
  }

  navigateAway() {
    const navigationExtras: NavigationExtras = {
      state: {
        data: null,
      },
    };
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(
          ['/' + this.productLine, 'my-invoices', 'checkout'],
          navigationExtras
        )
      )
      .then(() =>
        this.router.navigate(['/' + this.productLine, 'my-invoices', 'success'])
      );
  }
  isInvoiceInitiated(invoices) {
    return invoices?.filter(
      (invoice: any) => invoice?.paymentStatus == 'TRANSACTION_INITIATED'
    )?.length > 0
      ? true
      : false;
  }
  ngOnDestroy(): void {
    window.removeEventListener('message', this.handlePostMessage);
  }
}
