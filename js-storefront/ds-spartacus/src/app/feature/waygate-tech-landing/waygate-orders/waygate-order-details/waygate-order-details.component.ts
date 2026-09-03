import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import saveAs from 'file-saver';
import moment from 'moment';
import { Observable, Subscription, combineLatest, of } from 'rxjs';
import { map, switchMap, take, filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { CartActions } from '@spartacus/cart/base/core';
import { Actions, ofType } from '@ngrx/effects';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { SAP_ORDER_STATUS } from '../../../../shared/models/status/order-status.model';
import { AccessRoleType } from '../../../../shared/services/user-role.service';
import { LandingPagesService } from '../../../landing/landing-pages.service';
import { OrderTrackingService } from '../../../order-tracking/order-tracking.service';
import { MyProfileService } from '../../../user/my-profile/service/my-profile.service';
import { ProductType } from '../../../../shared/models/cartType.models';

@Component({
  standalone: false,
  selector: 'app-waygate-order-details',
  templateUrl: './waygate-order-details.component.html',
  styleUrls: ['./waygate-order-details.component.scss'],
})
export class WaygateOrderDetailsComponent implements OnInit, OnDestroy {
  breadcrumbs: any[];
  state: string;
  soldToAddress: any;
  orderId: string;
  orderStatus = 'Blocked';
  ordersDetails$: Observable<any>;
  params: any;
  disableButton: boolean = false;
  orderNotFound: boolean = false;
  isLoading: boolean = true;
  documents$: Observable<any>;
  orderInquiries = [
    {
      code: 'GovernmentUser',
      name: 'waygate-order.governamentUser',
    },
    {
      code: 'QuotesOrdersReturn',
      name: 'waygate-order.quotesOrderReturns',
    },
    {
      code: 'CalibrationRepair',
      name: 'waygate-order.calibrationAndRepairs',
    },
    {
      code: 'Shipping',
      name: 'waygate-order.shipping',
    },
    {
      code: 'Invoicing',
      name: 'waygate-order.invoicing',
    },
  ];

  detailsSubmenu = [
    {
      label: 'waygate-order.orderSummryBtn',
      value: 'summary',
    },
    {
      label: 'waygate-order.orderDocBtn',
      value: 'documents',
    },
    {
      label: 'waygate-order.orderInquiryBtn',
      value: 'inquiry',
    },
    {
      label: 'waygate-order.itemsOrdered',
      value: 'items',
    },
  ];
  selectedMenu: string = 'summary';
  inquiryForm: FormGroup;
  userType: any;
  user$: Observable<any>;
  successResponse: boolean;
  errorResponse: boolean;
  documents: any[] = [];
  gettingDocs: boolean;
  productLine: string;
  orderTrackingSubscription: Subscription;
  showRepeatOrderLoader: boolean;
  bulkUploadList = [];
  currencySymbol: any;
  activeCustomerNumber!: string;
  activeSalesRegion!: string;
  orderCustomerNumber!: string;
  orderSalesRegion!: string;
  currency: any;
  details: any;
  cartId: any;
  profile: any;
  userRoles = AccessRoleType;
  //pendingRepeatOrder: boolean = false;
  //isRepeatOrderFlow: boolean = false  
  showAddressSelection = false;
  bulkUploadSelection = [];
  validatedProductsList = [];
  selectedProductType: ProductType.Typ3 | 'NON_FILM' | null = null;


  constructor(
    private windowRef: WindowRef,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private orderTrackingService: OrderTrackingService,
    private formBuilder: FormBuilder,
    private launchDialogService: LaunchDialogService,
    private userAccountFacade: UserAccountFacade,
    private authService: AuthService,
    private customerAccService: CustomerAccountService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    private multiCartFacade: MultiCartFacade,
    private activeCartFacade: ActiveCartFacade,
    private landingPageService: LandingPagesService,
    private profileService: MyProfileService,
    private actions$: Actions,
    private location: Location
  ) {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          url: `/${this.productLine}/my-orders`,
          name: 'My Orders',
        },
        {
          name: 'Order Details',
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
    this.inquiryForm = this.formBuilder.group({
      enquiryType: new FormControl(null, Validators.required),
      inquiryDetails: new FormControl(null, Validators.required),
    });
    this.windowRef.nativeWindow.scrollTo(0, 0);
    this.activateRoute.params.subscribe((params: any) => {
      this.orderId = params.orderId;
      this.breadcrumbs = [
        {
          url: `/${this.productLine}/my-orders`,
          name: 'order-tracking.pageTitle',
        },
        {
          url: `/${this.productLine}/my-orders/${this.orderId}`,
          name: 'order-tracking.orderDetails',
        },
      ];
    });

    this.profileService.getProfileData().subscribe((profile) => {
      this.profile = profile;
    });
    combineLatest(this.activateRoute.params, this.activateRoute.queryParams)
      // .pipe(take(1))
      .subscribe((allParams: any) => {
        this.params = {
          ...this.params,
          ...allParams[1],
          pageNumber: allParams[1]?.pageNumber || 0,
          status: allParams[1]?.status || SAP_ORDER_STATUS.ALL,
          fromDate:
            allParams[1]?.fromDate ||
            moment(
              new Date(
                new Date().getFullYear() - 2,
                new Date().getMonth(),
                new Date().getDate()
              )
            ).format('DD-MMM-YYYY'),
          toDate:
            allParams[1]?.toDate || moment(new Date()).format('DD-MMM-YYYY'),
          pageSize: allParams[1]?.pageSize || 10,
          sortBy: allParams[1]?.sortBy || 'OrderDsc',
          isRefreshedFlag: allParams[1]?.isRefreshedFlag || false,
          customerNumber: allParams[1]?.customerNumber || null,
          searchByValue: allParams[0]?.orderId,
        };
        this.state = allParams[1]?.state ? allParams[1]?.state : 'summary';
        this.getDetails();
      });
    this.activateRoute.queryParams.subscribe((params: any) => {
      this.state = params?.state ? params?.state : 'summary';
    });
  }

  ngOnInit() {
    const storedUrl = localStorage.getItem('storedUrl');
    if(storedUrl){
      localStorage.removeItem('storedUrl');
    }
    this.customerAccService
      .getCurrentCustomerAccount()
      .subscribe((activeAccount: any) => {
        this.currency = activeAccount?.currency?.isocode;
        this.currencySymbol = activeAccount?.currency?.symbol;
        this.activeSalesRegion =
          activeAccount?.selectedSalesArea?.salesAreaId.split('_')[1];
        this.activeCustomerNumber = activeAccount?.uid?.replace(
          /^0+(?=\d)/,
          ''
        );
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
    this.updateLangForOptions(this.breadcrumbs, 'name');
    this.updateLangForOptions(this.orderInquiries, 'name');
    this.updateLangForOptions(this.detailsSubmenu, 'label');

    setTimeout(() => {
      this.detailsSubmenu = [...this.detailsSubmenu];
    }, 500);
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  changeState(state) {
    this.state = state;
  }
  getClass = (orderStatus) => {
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };

  getDetails() {
    this.orderTrackingSubscription = this.orderTrackingService.emitOrderDetail
      .pipe(take(1))
      .subscribe((response) => {
        if (
          !response ||
          (response && this.params.searchByValue !== response?.code)
        ) {
          this.fetchDeatilsFromApi();
        } else {
          if (response && 'soldTo' in response) {
            this.fetchAllDocuments(response.soldTo);
          }
          this.details = response;
          let custDetail = response.soldTo.split('-');
          this.orderSalesRegion = response.salesRegion;
          this.orderCustomerNumber =
            custDetail[custDetail.length - 1].trim(' ');
          this.ordersDetails$ = of(response);
          this.isLoading = false;
        }
      });
  }

  fetchDeatilsFromApi() {
    this.isLoading = true;
    this.ordersDetails$ = this.orderTrackingService
      .getOrders(this.params)
      .pipe(map((orderListing: any) => orderListing?.orderData[0]));

    this.ordersDetails$.subscribe((data) => {
      
   if (!data) {
      this.orderNotFound = true;
      this.isLoading = false;
      console.log("order not found");
      this.globalMessageService.add(
        "Sorry, we couldn't find your order.",
        GlobalMessageType.MSG_TYPE_ERROR,
        500000
      );

      return {};
    }
      if (data) {
        this.orderNotFound = false;
        this.details = data;
        this.orderTrackingService.emitOrderDetail.next(this.details);
        let custDetail = data?.soldTo?.split('-');
        this.orderCustomerNumber = custDetail[custDetail.length - 1].trim(' ');
        this.orderSalesRegion = data.salesRegion;
        if (data && 'soldTo' in data) {
          this.fetchAllDocuments(data.soldTo);
        }
        this.isLoading = false;
      }
    });
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }
  activateState(status, step) {
    switch (status) {
      case 'Received':
        return step < 2;
      case 'Processing':
        return step < 3;
      case 'Shipped':
        return step < 4;
      case 'ShippedInvoiced':
        return step < 5;

      case 'Blocked':
        return step < 3;
    }
  }
  fetchAllDocuments(soldToString) {
    let soldToList = soldToString.split('-');
    let soldTo = soldToList[soldToList?.length - 1].trim(' ');
    this.gettingDocs = false;
    this.documents = null;
    this.documents$ = this.orderTrackingService.getAllDocuments(
      this.params?.searchByValue,
      soldTo
    );
    this.documents$.subscribe(
      (documents) => {
        this.gettingDocs = true;
        this.documents = documents;
      },
      (error) => {
        this.gettingDocs = true;
        this.documents = null;
      }
    );
  }
  downloadDocument(orderNumber, fileName, fileType, soldToString) {
    let soldToList = soldToString.split('-');
    let soldTo = soldToList[soldToList?.length - 1].trim(' ');
    this.orderTrackingService
      .downloadDocument(orderNumber, fileName, fileType, soldTo)
      .subscribe((res) => {
        if (res !== null && res !== undefined) {
          if (fileType.toUpperCase() == 'DOC' || fileType == 'docx') {
            const blob = new Blob([res], { type: 'application/msword' });
            const file = new File([blob], fileName + '.doc', {
              type: 'application/msword',
            });
            saveAs(file);
          } else if (fileType == 'JPG' || fileType == 'jpg') {
            const blob = new Blob([res], { type: 'application/jpeg' });
            const file = new File([blob], fileName + '.jpg', {
              type: 'application/jpeg',
            });
            saveAs(file);
          } else if (fileType == 'PNG' || fileType == 'png') {
            const blob = new Blob([res], { type: 'application/png' });
            const file = new File([blob], fileName + '.png', {
              type: 'application/png',
            });
            saveAs(file);
          } else if (fileType.toUpperCase() == 'XLS') {
            const blob = new Blob([res], {
              type: 'application/vnd.ms-excel',
            });
            const file = new File([blob], fileName + '.xls', {
              type: 'application/vnd.ms-excel',
            });
            if (res instanceof Blob) {
              console.log('Valid Blob');
            }
            saveAs(file);
          } 
          else if (fileType == 'xlsx') {
            const blob = new Blob([res], {
              type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            const file = new File([blob], fileName + '.xlsx', {
              type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            saveAs(file);
          } 
          else if (fileType == 'HTM' || fileType == 'htm') {
            const blob = new Blob([res], {
              type: 'application/htm',
            });
            const file = new File([blob], fileName + '.htm', {
              type: 'application/htm',
            });
            saveAs(file);
          } else {
            const blob = new Blob([res], { type: 'application/pdf' });
            const file = new File([blob], fileName + '.pdf', {
              type: 'application/pdf',
            });
            saveAs(file);
          }
        }
      });
  }
  submitToCSR(order) {
    this.disableButton = true;
    let soldToList = order?.soldTo.split('-');
    let soldTo = soldToList[soldToList?.length - 1].trim(' ');
    this.orderTrackingService
      .submitInquiryToCSR(
        soldToList[0].trim(),
        order?.orderDate,
        this.inquiryForm.value?.enquiryType,
        this.inquiryForm.value?.inquiryDetails,
        order?.code,
        order?.purchaseOrderNumber,
        order?.productLine,
        soldTo,
        this.inquiryForm.value.inquiryEmail
          ? this.inquiryForm.value.inquiryEmail.toLowerCase()
          : '',
        ''
      )
      .subscribe(
        (response) => {
          this.successResponse = true;
          setTimeout(() => {
            this.successResponse = false;
          }, 7000);
          this.disableButton = false;
          this.inquiryForm.reset();
        },
        (error) => {
          this.errorResponse = true;
          setTimeout(() => {
            this.errorResponse = false;
          }, 7000);
        }
      );
  }
  backLink() {
    this.location.back();
  }
  shareDetail() {
    const componentData = {
      userType: this.userType,
    };
    const shareOrderDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SHARE_ORDER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (shareOrderDialog) {
      shareOrderDialog.pipe(take(1)).subscribe((value) => {});
    }
  }
  clearForm() {
    this.inquiryForm.reset();
  }

  ngOnDestroy() {
    this.orderTrackingSubscription.unsubscribe();
  }

  repeatOrder() {
    if (
      this.activeCustomerNumber == this.orderCustomerNumber &&
      this.activeSalesRegion == this.orderSalesRegion
    ) {
      this.showRepeatOrderLoader = true;
      
      const hasFilmProduct = this.details?.lineData?.some((item: any) => {
        return item?.productHeirarchy?.startsWith('FILD');
      });
      const isFilmProduct = this.selectedProductType === ProductType.Typ3;   

if (hasFilmProduct) {  
this.bulkUploadSelection = this.details.lineData.map((item, index) => ({
        key: index,
        partNum: item.partNumber,
        description: item.description,
        quantity: item.qty,
        ecaCode: ''
      }));
      
      this.showAddressSelection = true;
      this.showRepeatOrderLoader = false;
      return;
}

      this.bulkUploadList = this.details.lineData?.map((element, i) => {
        return {
          lineNo: i,
          partNum: element.partNumber,
          description: element.description,
          status: 'Validated',
          quantity: +element.qty,
        };
      });

      let param = {
        callingsourceinfo: 'Cart Validate Page',
        cartDetailTable_length: 50,
        bulkUploadList: this.bulkUploadList,
        currencyIso: this.currency,
        currencySymbol: this.currencySymbol,
      };
      this.landingPageService.addBulkOrder('current', param).subscribe(
        (res: any) => {
          this.showRepeatOrderLoader = false;
          // if ('newCartData' in res && res?.newCartData?.totalUnitCount) {
          this.multiCartFacade.loadCart({
            //cartId: this.cartId,
            cartId: 'current',
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
                window.location.href = `/${this.productLine}/cart`;
              },
              (e) => {
                this.globalMessageService.add(
                  this.getTranslatedText('quickorder.errorAddingToCart'),
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
              }
            );
          // } else {
          //   this.showRepeatOrderLoader = false;
          //   this.globalMessageService.add(
          //     'There is an error occured while adding these products into cart',
          //     GlobalMessageType.MSG_TYPE_ERROR,
          //     5000
          //   );
          // }
        },
        (error) => {
          this.showRepeatOrderLoader = false;
        }
      );
    }
  }
 
onSubmitRepeatOrder() {
  const bulkUploadList = this.bulkUploadSelection.map((item, i) => ({
    lineNo: i,
    partNum: item.partNum,
    description: item.description,
    status: 'Validated',
    quantity: +item.quantity,
    ecaCode: item.ecaCode
  }));

  let param = {
    callingsourceinfo: 'Repeat Order',
    cartDetailTable_length: 50,
    bulkUploadList,
    currencyIso: this.currency,
    currencySymbol: this.currencySymbol,
  };

  this.showRepeatOrderLoader = true;

  this.landingPageService.addBulkOrder(this.cartId, param).subscribe(() => {
    this.multiCartFacade.loadCart({
      cartId: this.cartId,
      userId: this.userType,
      extraData: { active: true },
    });

    this.actions$
      .pipe(ofType(CartActions.LOAD_CART_SUCCESS), take(1))
      .subscribe(() => {
        window.location.href = `/${this.productLine}/cart`;
      });
  });
}
}
