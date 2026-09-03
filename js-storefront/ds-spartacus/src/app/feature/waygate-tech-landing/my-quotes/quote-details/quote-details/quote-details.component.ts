import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, concatMap, Observable, of, share, Subscription, switchMap, take } from 'rxjs';
import moment from 'moment';
import { AuthService, OCC_USER_ID_ANONYMOUS, TranslationService, WindowRef } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { Location } from '@angular/common';
import { AccessRoleType } from '../../../../../shared/services/user-role.service';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { MyProfileService } from '../../../../user/my-profile/service/my-profile.service';
import { MyQuotesService } from '../../my-quotes.service';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
} from '@spartacus/core';
import { Actions, ofType } from '@ngrx/effects';
import { LaunchDialogService } from '@spartacus/storefront';
import { CartActions } from '@spartacus/cart/base/core';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { saveAs } from 'file-saver';
import { QuoteCartService } from '../../../quote-cart/quote-cart.service';

@Component({
  selector: 'app-quote-details',
  standalone: false,
  templateUrl: './quote-details.component.html',
  styleUrl: './quote-details.component.scss'
})
export class QuoteDetailsComponent implements OnInit, OnDestroy {
  breadcrumbs: any[];
  user$: Observable<any>;
  productLine: string;
  inquiryForm: FormGroup;
  quoteId: string;
  profile: any;
  params: any;
  state: string;
  quoteCurrency: string;
  showRepeatOrderLoader: boolean;
  quotesDetails$: Observable<any>;
  successResponse: boolean;
  errorResponse: boolean;
  userType: any;
  details: any;
  userRoles = AccessRoleType;
  activeSalesRegion!: string;
  activeCustomerNumber!: string;
  documents: any[] = [];
  documents$: Observable<any>;
  gettingDocs: boolean;
  cartId: any;
  soldToAddress: any;
  currencySymbol: any;
  quoteCode: any;
  currency: any;
  quoteStatus: string;
  quoteTrackingSubscription: Subscription;
  activeCustomerName: string;
  currentUserType;
  
  email: string;
  orderInquiries = [
    {
      code: 'GovernmentUser',
      name: 'GOVERNMENT USER',
    },
    {
      code: 'QuotesOrdersReturn',
      name: 'QUOTES ORDER RETURNS',
    },
    {
      code: 'CalibrationRepair',
      name: 'CALIBRATION AND REPAIRS',
    },
    {
      code: 'Shipping',
      name: 'Shipping',
    },
    {
      code: 'Invoicing',
      name: 'Invoicing',
    },
  ];
  constructor(
    private windowRef: WindowRef,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userAccountFacade: UserAccountFacade,
    private authService: AuthService,
    private customerAccService: CustomerAccountService,
    private profileService: MyProfileService,
    private multiCartFacade: MultiCartFacade,
    private activeCartFacade: ActiveCartFacade,
    private location: Location,
    private myQuoteService: MyQuotesService,
    private router: Router,
    private actions$: Actions,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private translate: TranslationService,
    private quoteCartService : QuoteCartService,

  ) {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          url: `/${this.productLine}/my-quotes`,
          name: 'My Quotes',
        },
        {
          name: 'Quote Details',
        },
      ];
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
    this.user$.subscribe((res) => {
      if (res) 
        {this.currentUserType = OCC_USER_ID_CURRENT;
          this.email = res.email ;
        }
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
    this.inquiryForm = this.formBuilder.group({
      enquiryType: new FormControl(null, Validators.required),
      inquiryDetails: new FormControl(null, Validators.required),
    });
    this.windowRef.nativeWindow.scrollTo(0, 0);
    this.activateRoute.params.subscribe((params: any) => {
      this.quoteId = params.quoteId;
      this.breadcrumbs = [
        {
          url: `/${this.productLine}/my-quotes`,
          name: 'my-quotes.myQuotes',
        },
        {
          url: `/${this.productLine}/my-quotes/${this.quoteId}`,
          name: 'quote-details.pageTitle',
        },
      ];
    });

    this.profileService.getProfileData().subscribe((profile) => {
      this.profile = profile;
    });
    combineLatest(this.activateRoute.params, this.activateRoute.queryParams)
      .subscribe((allParams: any) => {
        this.params = {
          ...this.params,
          ...allParams[1],
          pageNum: allParams[1]?.pageNumber || 0,
          pageSize: allParams[1]?.pageSize || 10,
          quoteNumber: this.quoteId
        };
        this.state = allParams[1]?.state ? allParams[1]?.state : 'summary';
        this.getDetails();
      });
    this.activateRoute.queryParams.subscribe((params: any) => {
      this.state = params?.state ? params?.state : 'summary';
    });
    this.updateLangForOptions(this.breadcrumbs, 'name');
  }

  ngOnInit() {
    this.customerAccService
      .getCurrentCustomerAccount()
      .subscribe((activeAccount: any) => {
        this.currency = activeAccount?.currency?.isocode;
        this.currencySymbol = activeAccount?.currency?.symbol;
        this.activeSalesRegion =
          activeAccount?.selectedSalesArea?.salesAreaName;
        this.activeCustomerNumber = activeAccount?.uid;
        this.activeCustomerName = activeAccount?.name;
        if ('addresses' in activeAccount) {
          this.soldToAddress =
            activeAccount?.addresses[0]?.formattedAddress
              .split(',')
              .join(',<br>') || '';
        }
      });
    this.user$.subscribe((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        this.userType = 'current';
      } else {
        this.userType = 'anonymous';
      }
    });

    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  changeState(state) {
    this.state = state;
  }
  getClass = (orderStatus) => {
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };

  getAddress = (address) => {
    return address.replace(/;+/gm, '<br>');
  }
  getDetails() {
    this.quoteTrackingSubscription = this.myQuoteService.emitQuoteDetail
      .pipe(take(1))
      .subscribe((response) => {
        if (
          !response ||
          (response && this.params.searchByValue !== response?.code)
        ) {
          this.fetchDetailsFromApi();
        } else {
          // if (response && 'soldTo' in response) {
          //   this.fetchAllDocuments(response.soldTo);
          // }
          this.details = response;
          this.quoteStatus = response.quoteStatus;
          this.quoteCode = response.quoteCode;
          this.quoteCurrency = response.currency;
          this.quotesDetails$ = of(response);
        }
      });
  }

  goToQuoteDetailPage(quoteDetail) {
    this.myQuoteService.emitQuoteDetail.next(quoteDetail);
    this.router.navigate([
      '/',
      this.productLine,
      'my-quotes',
      quoteDetail.quoteCode,
    ]);
  }

  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    switchSame?: boolean
  ) {
    const componentdata = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
      switchSame: switchSame,
    };
    const switchCartModel = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (switchCartModel) {
      switchCartModel.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
           //add quote to cart 
          this.navigateToCartPage(this.quoteId  );
        }
      });
    }
  }

  acceptQuote() {
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          let cartId;
          if (this.currentUserType === OCC_USER_ID_CURRENT) {
            cartId = activeCart.code;
          } else if (this.currentUserType === OCC_USER_ID_ANONYMOUS) {
            cartId = activeCart.guid;
          }
          if (activeCart.entries?.length > 0) {
            this.openSwitchCartModal(
              activeCart.commerceType,
              "QuoteToOrder",
              cartId
            );
            return of({ modal: true });
          } else {
           //add quote to cart 
           this.navigateToCartPage(this.quoteId  );
          }
        })
      )
      .subscribe(
        (val) => {
          if (val === null) {
            //add quote to cart 
           this.navigateToCartPage(this.quoteId  );
          }
        },
        (error) => {}
      );

  }

  navigateToCartPage(quoteId){
    this.myQuoteService.acceptQuote(quoteId).subscribe({
      next: (cart: any) => {
        if (cart) {
          sessionStorage.setItem('isQuoteToOrder', "true");
          this.multiCartFacade.loadCart({
            cartId: cart.code,
            userId: OCC_USER_ID_CURRENT,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe({
              next: (r) => {
                window.location.href = `${this.productLine}/cart`;
              },
              error: (error) => {
                this.globalMessageService.add(
                  error,
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
                window.scrollTo(0, 0);
                
                sessionStorage.setItem('isQuoteToOrder', "false");
              },
            });
        }
      },
      error: (error) => {
        sessionStorage.setItem('isQuoteToOrder', "false");
        console.log(error);
      },
    });
  }

  fetchDetailsFromApi() {
    this.quotesDetails$ = this.myQuoteService
      .getQuotes(this.params, this.productLine)
      .pipe(share());
    this.quotesDetails$.subscribe((data) => {
      if(data){
        this.details = data?.quoteResponse[0]; 
        this.quoteCode = this.details?.quoteCode;
        this.quoteStatus = this.details?.quoteStatus;
        this.quoteCurrency = this.details?.currency;
        this.quotesDetails$ = of(data?.quoteResponse[0]);
        this.myQuoteService.emitQuoteDetail.next( this.details);
      }
      else{
        this.globalMessageService.add(
          this.getTranslatedText('quoteCart.quoteLoadError'),
    
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
      
      // if (data && 'soldTo' in data) {
      //   this.fetchAllDocuments(data.soldTo);
      // }
    });
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }

  backLink() {
    this.location.back();
  }
  ngOnDestroy() {
    this.quoteTrackingSubscription.unsubscribe();
  }


  activateState(status, step) {
    switch (status) {
      case 'Submitted':
        return step < 2;
      case 'Open':
        return step < 2;
      case 'InProcess':
        return step < 3;
      case 'Closed':
        return step < 4;
      case 'Blocked':
        return step < 3;
      case 'Accepted':
        return step < 4;
         case 'Completed':
        return step < 4;
      case 'Expired':
        return step < 4;
      case 'Rejected':
        return step < 4;
    }
  }


  downloadQuote(){
    this.quoteCartService.downloadDocument(this.quoteId,this.email).subscribe(
      (res) => {
        if (res !== null && res !== undefined) {
          const currentDate = moment(new Date()).format('D-MMM-yyyy');
          let fileName = 'QuoteDetail_' + this.quoteId + '_'+ currentDate;
          const blob = new Blob([res], { type: 'application/pdf' });
          const file = new File([blob], fileName + '.pdf', {
            type: 'application/pdf',
          });
          saveAs(file);
        } else {
          this.displayDownloadError();
        }
      },
      (error) => {
        this.displayDownloadError();
      }
    );
  }
  displayDownloadError() {
    this.globalMessageService.add(
      this.getTranslatedText('quoteCart.downloadError'),

      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    window.scrollTo(0, 0);
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}

