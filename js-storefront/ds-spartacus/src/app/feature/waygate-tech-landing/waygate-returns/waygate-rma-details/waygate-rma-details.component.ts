import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core';
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
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import saveAs from 'file-saver';
import moment from 'moment';
import { Observable, Subscription, combineLatest, of } from 'rxjs';
import { map, switchMap, take, filter, concatMap } from 'rxjs/operators';
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
import { RmaTrackingService } from '../../../rma/rma-tracking/rma-tracking.service';
import { SAP_RMA_AWAITING_PROCESSING_ORDER } from '../../../../shared/models/status/rma-status.model';
import { RmaService } from '../../../rma/rma-services/rma.service';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
import { SpinnerOverlayService } from '../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { RepeatRMAUpdateMessageComponent } from '../../../cart/rma-update-message-cart/repeat-rma-message-cart-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  standalone: false,
  selector: 'app-waygate-rma-details',
  templateUrl: './waygate-rma-details.component.html',
  styleUrls: ['./waygate-rma-details.component.scss'],
})
export class WaygateRmaDetailsComponent implements OnInit, OnDestroy {
  breadcrumbs: any[];
  state: string;
  soldToAddress: any;
  orderId: string;
  orderStatus = 'Blocked';
  ordersDetails$: Observable<any>;
  params: any;
  documents$: Observable<any>;
  orderInquiries = [
    {
      code: 'QuotesOrdersReturn',
      name: 'buyCart.return',
    },
    {
      code: 'Shipping',
      name: 'waygate-order.shipping',
    },
    {
      code: 'Invoicing',
      name: 'notifications.invoice',
    },
    {
      code: 'CalibrationRepair',
      name: 'rma-tracking.others',
    },
    // {
    //   code: 'Invoicing',
    //   name: 'Invoicing',
    // },
  ];
 
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
  rmaTrackingResponse: any;
  orderIdToBeTracked: any;
  disableButton: boolean = false;
  displayContentsOnLoad: boolean = false;
  rmaProcessingStatus: boolean = false;
  fullResponse: any;
  pageRefreshSubscription: Subscription;
  getResponseOnRefresh: any;
  fullDocumentsResponse: any;
  downloadLoader = [];
  downloadAllLoader: boolean;
  displayFormHideMessage: boolean = true;
  inquiryFormSubmitted: boolean = false;
  rmaUserType;
  rmaCartId;
  currentCartType: CommerceTypes;
  rmaSalesAreaId;
  productErrorCode: any;
  productErrorCodes: any;
  cartitem: any;
  rmaDsSwitchCart: boolean = false;
  salesAreaObjectDataList: any = [];
  activeCustomerAccount$: Observable<any>;

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
    private location: Location,
    public rmaTrackingService: RmaTrackingService,
    private rmaService: RmaService,
    public sanitizer: DomSanitizer,
    private spinnerOverlayService: SpinnerOverlayService,
    private productCatService: ProductCatelogService,
    private dialog: MatDialog
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
          url: `/${this.productLine}/my-returns`,
          name: 'waygate-returns.pageTitle',
        },
        {
          url: `/${this.productLine}/my-returns/${this.orderId}`,
          name: 'waygate-returns.rmaDetails',
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
        // this.getDetails();
      });
    this.activateRoute.queryParams.subscribe((params: any) => {
      this.state = params?.state ? params?.state : 'summary';
    });
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((data) => {
      this.salesAreaObjectDataList = data?.salesAreaObjectDataList;
    });
  }

  ngOnInit() {
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
    this.fetchOrderId();

    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
    // this.fetchReturnsData();
    this.getRmaData();
    if (this.userType === 'current') {
      this.fetchAllDocuments();
    }
    this.updateLangForOptions(this.orderInquiries, 'name');
    this.updateLangForOptions(this.breadcrumbs, 'name');
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

  toCamelCase(status: string) {
    if (status == 'COMPLETE') {
      return 'Completed';
    } else if (status == 'IN SHIPPING') {
      return 'Shipped';
    } else if (status == 'RMA SUBMITTED') {
      return 'RMA Created';
    } else if (status == 'AWAITING GOODS') {
      return 'Awaiting Customer Products';
    } else if (status == 'PROCESSING') {
      return 'Processing';
    } else if (status == 'EVALUATING') {
      return 'Evaluating';
    } else {
      return status;
    }
  }

  // fetchReturnsData(): void {
  //   this.rmaTrackingService.emitRmaDetail.subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.returnsData = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching returns data', error);
  //     }
  //   );
  // }
  fetchOrderId() {
    this.activateRoute.paramMap.subscribe((value: any) => {
      this.orderIdToBeTracked = value.params.id;
      console.log('orderid', this.orderIdToBeTracked);
    });
  }

  fetchOrderTrackingDetails() {
    this.rmaTrackingService.emitRmaDetail.pipe(take(1)).subscribe(
      (data) => {
        if (!data) {
          this.displayContentsOnLoad = false;
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.issueFetching'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.router.navigate(['/',this.productLine,'my-returns']);
          return;
        }
        this.fullResponse = data;
        this.rmaTrackingResponse = data;
        this.rmaTrackingResponse.rmaItemStatusDetails['rmaSummaryStatus'] =
          data['rmaStatus'];
        this.rmaProcessingStatus =
          this.rmaTrackingResponse?.rmaItemStatusDetails?.some(
            (item) =>
              item.rmaStatus ===
              SAP_RMA_AWAITING_PROCESSING_ORDER.AWAITINGPURCHASEORDER
          );

        this.rmaService.rmaNumber = this.rmaTrackingResponse?.rmaNumber;
        this.rmaService.rmaSalesOrg = this.rmaTrackingResponse?.salesOrg;
  
        if (this.userType === 'current') {
          this.fetchAllDocuments();
        }
        setTimeout(() => {
          this.displayContentsOnLoad = true;
        }, 300);
      },
      (error) => {
        this.displayContentsOnLoad = false;
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.issueFetching'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  getRmaData() {
    // Get data on page refresh
    if (this.userType === 'current') {
      this.pageRefreshSubscription = this.rmaTrackingService.emitRmaDetail
        .pipe(take(1))
        .subscribe((data) => {
          if (data && Object.keys(data).length > 0) {
            this.fetchOrderTrackingDetails();
          } else {
            this.getDataOnPageRefresh();
          }
        });
    } else {
      this.fetchOrderTrackingDetails();
    }
  }

  getDataOnPageRefresh() {
    const parms = {
      pageNumber: 0,
      searchByValue: this.orderId,
      pageSize: 1,
      orderType: 'CP_DET',
      fromDate: '',
      toDate: '',
      customerAddedFlag: false,
      customerDeletedFlag: false,
      rmaStatus: '',
      isRefreshedFlag: '',
      sortBy: '',
    };
    this.rmaTrackingService.getRefreshOrders(parms).subscribe((response) => {
      this.getResponseOnRefresh = response;
      this.rmaTrackingService.emitRmaDetail.next(
        this.getResponseOnRefresh?.rmaHeaderStatusDetails[0]
      );
      this.fetchOrderTrackingDetails();
    });
  }
  changeState(state) {
    this.state = state;
  }
  getClass = (orderStatus) => {
    if (orderStatus == 'AWAITING GOODS') {
      orderStatus = 'AWAITING';
    } else if (orderStatus == 'RMA SUBMITTED') {
      orderStatus = 'RMA';
    } else if (orderStatus == 'IN SHIPPING') {
      orderStatus = 'IN';
    }
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
            // this.fetchAllDocuments(response.soldTo);
          }
          this.details = response;
          let custDetail = response.soldTo.split('-');
          this.orderSalesRegion = response.salesRegion;
          this.orderCustomerNumber =
            custDetail[custDetail.length - 1].trim(' ');
          this.ordersDetails$ = of(response);
        }
      });
  }

  fetchDeatilsFromApi() {
    this.ordersDetails$ = this.orderTrackingService
      .getOrders(this.params)
      .pipe(map((orderListing: any) => orderListing?.orderData[0]));

    this.ordersDetails$.subscribe((data) => {
      this.details = data;
      let custDetail = data.soldTo.split('-');
      this.orderCustomerNumber = custDetail[custDetail.length - 1].trim(' ');
      this.orderSalesRegion = data.salesRegion;
      if (data && 'soldTo' in data) {
        // this.fetchAllDocuments(data.soldTo);
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
      case 'RMA':
        return step < 2;
      case 'AWAITING':
        return step < 3;
      case 'EVALUATING':
        return step < 4;
      case 'PROCESSING':
        return step < 5;
      case 'IN':
        return step < 6;
      case 'COMPLETE':
        return step < 7;

      case 'Blocked':
        return step < 4;
    }
  }
  // fetchAllDocuments(soldToString) {
  //   let soldToList = soldToString.split('-');
  //   let soldTo = soldToList[soldToList?.length - 1].trim(' ');
  //   this.gettingDocs = false;
  //   this.documents = null;
  //   this.documents$ = this.orderTrackingService.getAllDocuments(
  //     this.params?.searchByValue,
  //     soldTo
  //   );
  //   this.documents$.subscribe(
  //     (documents) => {
  //       this.gettingDocs = true;
  //       this.documents = documents;
  //     },
  //     (error) => {
  //       this.gettingDocs = true;
  //       this.documents = null;
  //     }
  //   );
  // }

  fetchAllDocuments() {
    if (!this.rmaTrackingResponse?.rmaNumber || !this.rmaTrackingResponse?.customerAcct) {
      return;
    }
  
    this.documents = null;
    this.rmaTrackingService
      .getAllDocuments(
        this.rmaTrackingResponse.rmaNumber,
        this.rmaTrackingResponse.customerAcct
      )
      .subscribe(
        (response) => {
          this.fullDocumentsResponse = response;
        },
        (error) => {
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.issueWhileFetching'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  generateFileName(document) {
    return document.documentNamingType + '_' + document.documentName;
  }

  displayDownloadError(document) {
    this.globalMessageService.add(
      this.getTranslatedText('rma-tracking.issueDownloading') +
        this.generateFileName(document),
      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    window.scrollTo(0, 0);
  }

  // downloadDocument(orderNumber, fileName, fileType, soldToString) {
  //   let soldToList = soldToString.split('-');
  //   let soldTo = soldToList[soldToList?.length - 1].trim(' ');
  //   this.orderTrackingService
  //     .downloadDocument(orderNumber, fileName, fileType, soldTo)
  //     .subscribe((res) => {
  //       if (res !== null && res !== undefined) {
  //         if (fileType == 'PDF') {
  //           const blob = new Blob([res], { type: 'application/pdf' });
  //           const file = new File([blob], fileName + '.pdf', {
  //             type: 'application/pdf',
  //           });
  //           saveAs(file);
  //         } else if (fileType == 'DOC' || fileType == 'docx') {
  //           const blob = new Blob([res], { type: 'application/msword' });
  //           const file = new File([blob], fileName + '.doc', {
  //             type: 'application/msword',
  //           });
  //           saveAs(file);
  //         } else if (fileType == 'JPG' || fileType == 'JPG') {
  //           const blob = new Blob([res], { type: 'application/jpeg' });
  //           const file = new File([blob], fileName + '.jpg', {
  //             type: 'application/jpeg',
  //           });
  //           saveAs(file);
  //         } else if (fileType == 'PNG' || fileType == 'PNG') {
  //           const blob = new Blob([res], { type: 'application/png' });
  //           const file = new File([blob], fileName + '.png', {
  //             type: 'application/png',
  //           });
  //           saveAs(file);
  //         } else if (fileType == 'XLS' || fileType == 'xlsx') {
  //           const blob = new Blob([res], {
  //             type: 'application/vnd.ms-excel',
  //           });
  //           const file = new File([blob], fileName + '.xlsx', {
  //             type: 'application/vnd.ms-excel',
  //           });
  //           saveAs(file);
  //         } else if (fileType == 'HTM' || fileType == 'htm') {
  //           const blob = new Blob([res], {
  //             type: 'application/htm',
  //           });
  //           const file = new File([blob], fileName + '.htm', {
  //             type: 'application/htm',
  //           });
  //           saveAs(file);
  //         } else {
  //           const blob = new Blob([res], { type: 'application/pdf' });
  //           const file = new File([blob], fileName + '.pdf', {
  //             type: 'application/pdf',
  //           });
  //           saveAs(file);
  //         }
  //       }
  //     });
  // }

  downloadDocument(docNumber, fileName, fileType, custAct) {
    // this.downloadLoader[index] = true;
    // let docNumber = this.rmaTrackingResponse?.rmaNumber;
    // //let docType = fileName
    // let fileName = this.fullDocumentsResponse.fileName;
    // let fileType = this.fullDocumentsResponse.fileType;
    // let custAct = this.rmaTrackingResponse?.customerAcct;

    this.rmaTrackingService
      .downloadDocument(docNumber, fileName, fileType, custAct)
      .subscribe(
        (res) => {
          // this.downloadLoader[index] = false;
          let count = 0;
          this.downloadLoader.map((element, index) => {
            if (element === true) {
              count++;
            }
          });
          if (count > 0 && this.downloadAllLoader === true) {
          } else {
            this.downloadAllLoader = false;
          }
          if (res !== null && res !== undefined) {
            // let fileName = docfileName;
            if (fileType.toLowerCase() == 'pdf') {
              const blob = new Blob([res], { type: 'application/pdf' });
              const file = new File([blob], fileName + '.pdf', {
                type: 'application/pdf',
              });
              saveAs(file);
            } else if (
              fileType.toLowerCase() == 'doc' ||
              fileType.toLowerCase() == 'docx'
            ) {
              const blob = new Blob([res], { type: 'application/msword' });
              const file = new File([blob], fileName + '.doc', {
                type: 'application/msword',
              });
              saveAs(file);
            } else if (
              fileType.toLowerCase() == 'jpg' ||
              fileType.toLowerCase() == 'jpeg'
            ) {
              const blob = new Blob([res], { type: 'application/jpeg' });
              const file = new File([blob], fileName + '.jpg', {
                type: 'application/jpeg',
              });
              saveAs(file);
            } else if (fileType.toLowerCase() == 'png') {
              const blob = new Blob([res], { type: 'application/png' });
              const file = new File([blob], fileName + '.png', {
                type: 'application/png',
              });
              saveAs(file);
            } else if (
              fileType.toLowerCase() == 'xls'
            ) {
              const blob = new Blob([res], {
                type: 'application/vnd.ms-excel',
              });
              const file = new File([blob], fileName + '.xls', {
                type: 'application/vnd.ms-excel',
              });
              saveAs(file);
            } 
            else if (
              fileType == 'xlsx'
            ) {
              const blob = new Blob([res], {
                type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              });
              const file = new File([blob], fileName + '.xlsx', {
                type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              });
              saveAs(file);
            }else if (fileType.toLowerCase() == 'htm') {
              const blob = new Blob([res], {
                type: 'application/htm',
              });
              const file = new File([blob], fileName + '.htm', {
                type: 'application/htm',
              });
              saveAs(file);
            }
          } else {
            this.displayDownloadError(document);
          }
        },
        (error) => {
          this.downloadAllLoader = false;
          // this.downloadLoader[index] = false;
          this.displayDownloadError(document);
        }
      );
  }
  // submitToCSR(order) {
  //   let soldToList = order?.soldTo.split('-');
  //   let soldTo = soldToList[soldToList?.length - 1].trim(' ');
  //   this.orderTrackingService
  //     .submitInquiryToCSR(
  //       soldToList[0].trim(),
  //       order?.orderDate,
  //       this.inquiryForm.value?.enquiryType,
  //       this.inquiryForm.value?.inquiryDetails,
  //       order?.code,
  //       order?.purchaseOrderNumber,
  //       order?.productLine,
  //       soldTo,
  //       this.inquiryForm.value.inquiryEmail
  //         ? this.inquiryForm.value.inquiryEmail.toLowerCase()
  //         : '',
  //       ''
  //     )
  //     .subscribe(
  //       (response) => {
  //         this.successResponse = true;
  //         setTimeout(() => {
  //           this.successResponse = false;
  //         }, 7000);
  //         this.inquiryForm.reset();
  //       },
  //       (error) => {
  //         this.errorResponse = true;
  //         setTimeout(() => {
  //           this.errorResponse = false;
  //         }, 7000);
  //       }
  //     );
  // }

  submitInquiry(customerPO, poDate) {
    this.inquiryFormSubmitted = true;
    this.inquiryForm.value.inquiryDesc = testRegex(
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        this.inquiryForm.value.inquiryDetails
      ),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    if (this.inquiryForm.valid) {
      if (this.userType === 'current') {
        this.submitInquiryRequest('');
      } else {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(environment.siteKey, { action: '' })
            .then((token) => {
              this.submitInquiryRequest(token);
            });
        });
      }
    }
  }

  submitInquiryRequest(token) {
    this.disableButton = true;
    this.rmaTrackingService
      .submitInquiryToCSR(
        this.rmaTrackingResponse?.rmaNumber,
        this.rmaTrackingResponse?.purchaseOrderNumber,
        this.rmaTrackingResponse?.rmaCreatedDate,
        this.rmaTrackingResponse?.customerAcct,
        this.rmaTrackingResponse?.productLine,
        this.inquiryForm.value.enquiryType ? this.inquiryForm.value.enquiryType :'CalibrationRepair',
        this.rmaTrackingResponse?.name,
        this.inquiryForm.value.inquiryDesc,
        this.inquiryForm.value.inquiryEmail
          ? this.inquiryForm.value.inquiryEmail.toLowerCase()
          : '',
        token
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
          window.scrollTo(0, 0);
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
    const shareRMADialog = this.launchDialogService.openDialog(
      DS_DIALOG.SHARE_RMA_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (shareRMADialog) {
      shareRMADialog.pipe(take(1)).subscribe((value) => {});
    }
  }
  clearForm() {
    this.inquiryForm.reset();
  }

  ngOnDestroy() {
    this.pageRefreshSubscription.unsubscribe();
  }

  repeatOrder() {
    if (
      this.activeCustomerNumber == this.orderCustomerNumber &&
      this.activeSalesRegion == this.orderSalesRegion
    ) {
      this.showRepeatOrderLoader = true;
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
      this.landingPageService.addBulkOrder(this.cartId, param).subscribe(
        (res: any) => {
          this.showRepeatOrderLoader = false;
          // if ('newCartData' in res && res?.newCartData?.totalUnitCount) {
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
                window.location.href = `/${this.productLine}/cart`;
              },
              (e) => {
                this.globalMessageService.add(
                  'There is an error occured while adding these products into cart',
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

  isSalesAreaMatching(element): boolean {
    const currentSalesAreaId = localStorage.getItem('rmaSalesAreaId');
    return element.salesOrg === currentSalesAreaId;
  }
  
  selectRepeatRma(element) {
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          if (this.rmaUserType === OCC_USER_ID_CURRENT) {
            this.rmaCartId = activeCart.code;
          } else if (this.rmaUserType === OCC_USER_ID_ANONYMOUS) {
            this.rmaCartId = activeCart.guid;
          }
          if (activeCart.entries?.length > 0) {
            if (activeCart?.commerceType !== CommerceTypes.RETURNS) {
              this.currentCartType = CommerceTypes.RETURNS;
              this.rmaCartId = activeCart.code;
              this.openSwitchCartModal(
                activeCart.commerceType,
                this.currentCartType,
                this.rmaCartId,
                element
              );
            } else if (activeCart?.commerceType == CommerceTypes.RETURNS) {
              this.currentCartType = CommerceTypes.RETURNS;
              this.rmaCartId = activeCart.code;
              this.spinnerOverlayService.show();
              this.rmaService
                .createReorderRmaEntry(
                  OCC_USER_ID_CURRENT,
                  this.rmaTrackingResponse.rmaNumber
                )
                .subscribe(
                  (success) => {
                    this.rmaSalesAreaId =
                      localStorage.getItem('rmaSalesAreaId');
                    this.rmaService.rmaNumber = element.rmaNumber;
                    this.productErrorCode = success;
                    this.productErrorCodes =
                      this.productErrorCode?.productErrorCodes;
                    if (
                      success !== null &&
                      element.salesOrg == this.rmaSalesAreaId &&
                      this.productErrorCodes.length !== 0
                    ) {
                      this.spinnerOverlayService.hide();
                      this.globalMessageService.add(
                        this.getTranslatedText(
                          'rma-tracking.error.productErrorMessage'
                        ),
                        GlobalMessageType.MSG_TYPE_ERROR,
                        5000
                      );
                      window.scrollTo(0, 0);
                    } else {
                      this.spinnerOverlayService.hide();
                      this.openMessageModal(
                        activeCart.commerceType,
                        this.currentCartType,
                        this.rmaCartId,
                        element,
                        success
                      );
                    }
                  },
                  (error) => {
                    this.spinnerOverlayService.hide();
                    this.globalMessageService.add(
                      this.getTranslatedText('rma-tracking.error.errorMessage'),
                      GlobalMessageType.MSG_TYPE_ERROR,
                      5000
                    );
                    window.scrollTo(0, 0);
                  }
                );
            } else {
              this.repeatRMAEntry(element);
            }
            return of({ modal: true });
          } else {
            this.rmaCartId = activeCart.code;
            return this.productCatService.saveCartType(
              this.rmaCartId,
              CommerceTypes.RETURNS,
              OCC_USER_ID_CURRENT
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          this.repeatRMAEntry(element);
        }
      });
  }

  repeatRMAEntry(element) {
    this.currentCartType = CommerceTypes.RETURNS;
    this.spinnerOverlayService.show();
    this.rmaService
      .createReorderRmaEntry(
        OCC_USER_ID_CURRENT,
        this.rmaTrackingResponse.rmaNumber
      )
      .subscribe(
        (success: any) => {
          // updating number of cart based on product addition in cart
          this.repeatRMASuccess(element, success);
        },
        (error) => {
          this.spinnerOverlayService.hide();
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.error.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  repeatRMASuccess(element, success) {
    this.spinnerOverlayService.show();
    this.rmaService.rmaNumber = element.rmaNumber;
    this.productErrorCode = success?.productErrorCodes;
    this.rmaSalesAreaId = localStorage.getItem('rmaSalesAreaId');
    if (
      success &&
      element.salesOrg == this.rmaSalesAreaId &&
      this.productErrorCode.length === 0 &&
      (this.cartitem === 0 ||
        this.cartitem === null ||
        this.cartitem === undefined)
    ) {
      this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
        if (cartId) {
          this.multiCartFacade.loadCart({
            userId: OCC_USER_ID_CURRENT,
            cartId: cartId,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe((r) => {
              this.spinnerOverlayService.hide();
              const URL = this.router.url;
              console.log('url', this.router.url);
              if (URL.indexOf('my-returns') != -1) {
                this.router.navigate(['/',this.productLine,'returns','cart']);
              }
            });
        }
      });
    } else if (
      success !== null &&
      element.salesOrg == this.rmaSalesAreaId &&
      this.productErrorCode.length !== 0
    ) {
      this.spinnerOverlayService.hide();
      this.globalMessageService.add(
        this.getTranslatedText('rma-tracking.error.productErrorMessage'),
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
      window.scrollTo(0, 0);
    } else {
      this.spinnerOverlayService.hide();
      this.switchDsCustomer(element);
    }
  }

  // This is a switch customer model
  switchDsCustomer(rma) {
    const salesOrgUid = rma?.salesOrg;

    const eligibleSalesArea = this.salesAreaObjectDataList.find(
      (element) => element.salesAreaId.split('_')[1] == salesOrgUid
    );
    const salesArea = {
      customerSalesOrgName: eligibleSalesArea?.salesAreaName,
      customerSalesOrgUid: eligibleSalesArea?.salesAreaId,
      customerSoldToUid: eligibleSalesArea?.salesAreaId.split('_')[0],
      salesOrgUid: eligibleSalesArea?.salesAreaId.split('_')[1],
      salesOrg: eligibleSalesArea?.salesAreaId.split('_').slice(1).join('-'),
    };
    const productAccessData = {
      salesAreas: [salesArea],
    };
    const componentData = {
      productAccessData,
    };

    this.rmaDsSwitchCart = true;
    const rmaSwitchCustomerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (rmaSwitchCustomerDialog) {
      rmaSwitchCustomerDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.customerAccService
            .updateSalesArea(value, value.split('_')[0])
            .subscribe((res: any) => {
              this.customerAccService.rmaDsSwitchCartFlag =
                this.rmaDsSwitchCart;
              this.customerAccService.updateAvaiableProductLine(
                res?.visibleCategories || []
              );
              this.customerAccService.refreshPostCustomAccSwitch();
              this.globalMessageService.add(
                this.getTranslatedText('buyCart.salesAreaSuccess'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION
              );
            });
        }
      });
    }
  }

  //return cart Modal
  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    element
  ) {
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };

    const rmaSwitchCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (rmaSwitchCartDialog) {
      rmaSwitchCartDialog.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.repeatRMAEntry(element);
        }
      });
    }
  }

  openMessageModal(currentCartType, switchToCartType, cartId, element, cart) {
    const dialogRef = this.dialog.open(RepeatRMAUpdateMessageComponent, {
      data: {
        currentCartType,
        switchToCartType,
        currentCartCode: cartId,
      },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        this.repeatRMASuccess(element, cart);
      } else {
        this.spinnerOverlayService.hide();
      }
    });
  }
}