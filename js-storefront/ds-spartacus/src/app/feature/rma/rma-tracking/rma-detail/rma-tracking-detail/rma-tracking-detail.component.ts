import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  GlobalMessageService,
  GlobalMessageType,
  AuthService,
  TranslationService,
  OCC_USER_ID_ANONYMOUS,
} from '@spartacus/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { RmaTrackingService } from '../../rma-tracking.service';
import { Location } from '@angular/common';
import { ShareRmaDilogComponent } from '../share-rma-dilog/share-rma-dilog.component';
import { switchMap, take, concatMap, startWith, map } from 'rxjs/operators';
import { RmaService } from '../../../rma-services/rma.service';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { Actions, ofType } from '@ngrx/effects';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';
import { environment } from '../../../../../../environments/environment';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { ProductCatelogService } from '../../../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import { SpinnerOverlayService } from '../../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';
import {
  SAP_RMA_STATUS,
  RmaStatusTypes,
  RmaStatusIndex,
  SAP_RMA_AWAITING_PROCESSING_ORDER,
} from '../../../../../shared/models/status/rma-status.model';
import { StatusType } from '../../../../../shared/models/status/status.model';
import { CommonService } from '../../../../../shared/services/common.service';

//import { ORDER_TRACKING_RESPONSE } from './order-details.model';

@Component({
  standalone: false,
  selector: 'ds-rma-tracking-detail',
  templateUrl: './rma-tracking-detail.component.html',
  styleUrls: ['./rma-tracking-detail.component.scss'],
})
export class RmaTrackingDetailComponent implements OnInit {
  public infoMsg = false;
  user$: Observable<unknown>;
  userType = '';
  myprofile: FormGroup;
  myprofiledetails: FormGroup;
  myprofilenotify: FormGroup;
  personaldetail: FormGroup;
  iconTypes = ICON_TYPE;
  expandAll = false;
  fullResponse: any;
  rmaTrackingResponse: any;
  orderStatus = StatusType.ORDER;
  // currentOrderStatusId = OrderStatusIndex.SUBMITTED;
  orderIdToBeTracked: any;
  orderInquiries: any;
  inquiryForm: FormGroup;
  inquiryFormSubmitted: boolean = false;
  displayFormHideMessage: boolean = true;
  cartId: any;
  cartShopping$: Observable<any> = this.activeCartFacade.getActiveCartId();
  displayContentsOnLoad: boolean = false;
  getResponseOnRefresh: any;
  pageRefreshSubscription: Subscription;
  rmaEntryNumber: any;
  rmaSalesAreaId;
  activeCustomerAccount$: Observable<any>;
  salesAreaObjectDataList: any = [];
  productErrorCode: any;
  productErrorCodes: any;
  rmaDsSwitchCart: boolean = false;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  currentCartType: CommerceTypes;
  cartitem: any;
  totalNumberOfCart;
  rmaCartId;
  rmaUserType;
  rmaProcessingStatus: boolean = false;

  @ViewChild('categoryOne', { read: ElementRef }) categoryOne: ElementRef;
  @ViewChild('categoryTwo', { read: ElementRef }) categoryTwo: ElementRef;
  @ViewChild('categoryThree', { read: ElementRef }) categoryThree: ElementRef;
  @ViewChild('categoryFour', { read: ElementRef }) categoryFour: ElementRef;
  @ViewChild('defaultOpen', { read: ElementRef }) defaultOpen: ElementRef;
  modalRef: any;
  // accessibility = ACCESSIBILITY;

  constructor(
    protected globalMessageService: GlobalMessageService,
    private rmaTrackingService: RmaTrackingService,
    private activatedRoute: ActivatedRoute,
    private rmaService: RmaService,
    private renderer: Renderer2,
    private elRef: ElementRef,
    private router: Router,
    private formBuilder: FormBuilder,
    protected activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    private commonService: CommonService,
    private location: Location,
    protected launchDialogService: LaunchDialogService,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    private spinnerOverlayService: SpinnerOverlayService,
    private actions$: Actions,
    private customerAccService: CustomerAccountService,
    private productCatService: ProductCatelogService,
    public sanitizer: DomSanitizer
  ) {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((data) => {
      this.salesAreaObjectDataList = data?.salesAreaObjectDataList;
    });
  }

  openTab(evt, prodName, elementReference: ElementRef) {
    let i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName('tabcontent');
    tabcontent = this.elRef.nativeElement.querySelectorAll('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    // tablinks = document.getElementsByClassName('tablinks');
    tablinks = this.elRef.nativeElement.querySelectorAll('.tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    // document.getElementById(prodName).style.display = 'block';
    this.renderer.setStyle(elementReference, 'display', 'block');
    evt.currentTarget.className += ' active';

    this.resetInquiryForm();
  }
  cart$: Observable<any> = this.activeCartFacade.getActive();
  quantity$: Observable<number> = this.activeCartFacade.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  ngOnInit(): void {
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
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {}
    );
    this.fetchOrderId();
    this.getCartId();
    let breadcrumb;
    if (this.userType === 'current') {
      breadcrumb = [
        {
          label: 'My RMA',
          link: '/rma-tracking',
        },
      ];
    } else {
      breadcrumb = [
        {
          label: 'My RMA',
        },
      ];
    }
    this.getRmaData();
    this.breadCrumbService.setBreadCrumbs(breadcrumb);
    this.breadCrumbService.setBreadcrumbTitle(
      ' RMA # ' +
        (this.rmaTrackingResponse?.rmaStatus === 'RMA SUBMITTED'
          ? this.getTranslatedText('rma-tracking.pending')
          : this.orderIdToBeTracked)
    );

    if (this.userType == 'current') {
      this.inquiryForm = this.formBuilder.group({
        orderInquiry: new FormControl('', Validators.required),
        inquiryDesc: new FormControl('', Validators.required),
      });
    } else {
      this.inquiryForm = this.formBuilder.group({
        orderInquiry: new FormControl('', Validators.required),
        inquiryDesc: new FormControl('', Validators.required),
        inquiryEmail: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ]),
      });
    }
    this.fetchInquiryTypes();
    this.updateLangForOptions(this.orderInquiries, 'name');
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
  get f() {
    return this.inquiryForm.controls;
  }

  ngAfterViewInit() {
    //document.getElementById('defaultOpen').click();
    if (this.defaultOpen !== undefined) {
      this.defaultOpen.nativeElement.click();
    }
  }

  fetchOrderId() {
    this.activatedRoute.paramMap.subscribe((value: any) => {
      this.orderIdToBeTracked = value.params.id;
    });
  }

  fetchOrderTrackingDetails() {
    this.rmaTrackingService.emitRmaDetail.subscribe(
      (data) => {
        if (data === undefined) {
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.issueFetching'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.router.navigate(['/rma-tracking']);
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
        this.displayContentsOnLoad = true;
        this.rmaService.rmaNumber = this.rmaTrackingResponse?.rmaNumber;
        this.rmaService.rmaSalesOrg = this.rmaTrackingResponse?.salesOrg;
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
      this.pageRefreshSubscription =
        this.rmaTrackingService.emitRmaDetail.subscribe((data) => {
          if (data && data !== undefined) {
            this.fetchOrderTrackingDetails();
          } else if (data?.length !== 0 && data !== undefined) {
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
      searchByValue: this.orderIdToBeTracked,
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

  fetchOrderStatus(statusResponse) {
    let status = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_RMA_STATUS.RMA_SUBMITTED:
          status = RmaStatusTypes.SUBMITTED.statusName;
        case SAP_RMA_STATUS.AWAITING_ORDERS:
          status = RmaStatusTypes.PROGRESS.statusName;
          break;
        case SAP_RMA_STATUS.EVALUATING:
          status = RmaStatusTypes.EVALUATING.statusName;
          break;
        case SAP_RMA_STATUS.PROCESSING:
          status = RmaStatusTypes.PROCESSING.statusName;
          break;
        case SAP_RMA_STATUS.SHIPPED:
          status = RmaStatusTypes.SHIPPED.statusName;
          break;
        case SAP_RMA_STATUS.SHIPPED_INVOICED:
          status = RmaStatusTypes.INVOICED.statusName;
          break;
        case SAP_RMA_STATUS.BLOCKED:
          status = RmaStatusTypes.BLOCKED.statusName;
          break;
      }
    }

    return status;
  }

  fetchOrderStatusColor(statusResponse) {
    let color = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_RMA_STATUS.RMA_SUBMITTED:
          color = '#00BF6F';
          break;
        case SAP_RMA_STATUS.AWAITING_ORDERS:
          color = '#E12D39';
          break;
        case SAP_RMA_STATUS.EVALUATING:
          color = '#147D64';
          break;
        case SAP_RMA_STATUS.PROCESSING:
          color = '#299BA3';
          break;
        case SAP_RMA_STATUS.SHIPPED:
          color = '#ED9D22';
          break;
        case SAP_RMA_STATUS.SHIPPED_INVOICED:
          color = '#3EBD93';
          break;
        case SAP_RMA_STATUS.BLOCKED:
          color = '#E12D39';
          break;
      }
    }
    return color;
  }

  checkWhetherBlocked(statusResponse) {
    return statusResponse !== null &&
      statusResponse !== undefined &&
      statusResponse.toUpperCase() === SAP_RMA_STATUS.BLOCKED
      ? true
      : false;
  }

  checkRMAProcessingStatus(statusResponse) {
    return statusResponse !== null &&
      statusResponse !== undefined &&
      statusResponse.toUpperCase() === SAP_RMA_STATUS.PROCESSING &&
      this.rmaProcessingStatus
      ? true
      : false;
  }

  setBubbleOrderStatus() {
    return StatusType.RMA;
  }

  setBubbleOrderStatusId(statusResponse) {
    let statusId: number;
    if (statusResponse !== undefined && statusResponse !== null) {
      let statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_RMA_STATUS.RMA_SUBMITTED:
          statusId = RmaStatusIndex.SUBMITTED;
          break;
        case SAP_RMA_STATUS.AWAITING_ORDERS:
          statusId = RmaStatusIndex.PROGRESS;
          break;
        case SAP_RMA_STATUS.EVALUATING:
          statusId = RmaStatusIndex.EVALUATING;
          break;
        case SAP_RMA_STATUS.PROCESSING:
          statusId = RmaStatusIndex.PROCESSING;
          break;
        case SAP_RMA_STATUS.SHIPPED:
          statusId = RmaStatusIndex.SHIPPED;
          break;
        case SAP_RMA_STATUS.SHIPPED_INVOICED:
          statusId = RmaStatusIndex.INVOICED;
          break;
        case SAP_RMA_STATUS.BLOCKED:
          statusId = RmaStatusIndex.BLOCKED;
          break;
      }
    }
    return statusId;
  }

  getCartId() {
    this.cartShopping$ = this.activeCartFacade.getActiveCartId();
    this.cartShopping$.subscribe((data) => {
      this.cartId = data;
    });
  }

  repeatThisOrder() {
    // this.orderTrackingService.repeatOrder(this.orderIdToBeTracked, this.cartId)
    // .subscribe(
    //   (data) => {
    //     if (data !== undefined) {
    //       this.activeCartFacade.getActiveCartId().subscribe((res) => {
    //         this.multiCartFacade.loadCart({
    //           userId: 'current',
    //           cartId: res,
    //           extraData: {
    //             active: true,
    //           },
    //         });
    //       });
    //       if (
    //         data['nonCatalogProductList'] !== undefined &&
    //         data['nonCatalogProductList'].length > 0
    //       ) {
    //         this.globalMessageService.add(
    //           data['nonCatalogProductList'][0],
    //           GlobalMessageType.MSG_TYPE_ERROR,
    //           9000
    //         );
    //       }
    //       this.router.navigate(['/cart']);
    //     }
    //   },
    //   (error) => {
    //     this.globalMessageService.add(
    //       'There was some issue while repeating your order',
    //       GlobalMessageType.MSG_TYPE_ERROR,
    //       5000
    //     );
    //     window.scrollTo(0, 0);
    //   }
    // );
  }

  fetchInquiryTypes() {
    // this.orderTrackingService.getInquiryTypes()
    // .subscribe((response) => {
    //   if (response != undefined && response != null) {
    this.orderInquiries = [
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
      // {
      //   code: 'QUOTES_ORDER',
      //   name: 'Quotes, Order',
      // },
      {
        code: 'Shipping',
        name: 'waygate-order.shipping',
      },
      {
        code: 'Invoicing',
        name: 'waygate-order.invoicing',
      },
    ];
    //   }
    // });
  }

  submitInquiry(customerPO, poDate) {
    this.inquiryFormSubmitted = true;
    this.inquiryForm.value.inquiryDesc = testRegex(
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        this.inquiryForm.value.inquiryDesc
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
    this.rmaTrackingService
      .submitInquiryToCSR(
        this.rmaTrackingResponse?.rmaNumber,
        this.rmaTrackingResponse?.purchaseOrderNumber,
        this.rmaTrackingResponse?.rmaCreatedDate,
        this.rmaTrackingResponse?.customerAcct,
        this.rmaTrackingResponse?.productLine,
        this.inquiryForm.value.orderInquiry ? 'CalibrationRepair' : '',
        this.rmaTrackingResponse?.name,
        this.inquiryForm.value.inquiryDesc,
        this.inquiryForm.value.inquiryEmail
          ? this.inquiryForm.value.inquiryEmail.toLowerCase()
          : '',
        token
      )
      .subscribe(
        (response) => {
          this.displayFormHideMessage = false;
          this.inquiryForm.reset();
        },
        (error) => {
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.issuePostingQuery'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  anotherQuery() {
    this.displayFormHideMessage = true;
    this.inquiryFormSubmitted = false;
  }

  getBlockText(blockText) {
    if (blockText) {
      let blockTextArr = blockText.split('|');
      blockTextArr = blockTextArr.filter(Boolean);
      return blockTextArr.join(', ');
    }
    return '';
  }

  resetInquiryForm() {
    this.inquiryFormSubmitted = false;
    this.inquiryForm.reset();
    this.displayFormHideMessage = true;
  }
  reOrderrRMA() {
    this.router.navigate(['/rma/cart']);
  }

  //**Repeat RMA LIne Item Start**//
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
                  this.orderIdToBeTracked
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
      .createReorderRmaEntry(OCC_USER_ID_CURRENT, this.orderIdToBeTracked)
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
              if (URL.indexOf('rma-details') != -1) {
                this.router.navigate(['rma', 'cart']);
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
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const repeatRmaUpdateMessageDialog = this.launchDialogService.openDialog(
      DS_DIALOG.REPEAT_RMA_UPDATE_MESSAGE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (repeatRmaUpdateMessageDialog) {
      repeatRmaUpdateMessageDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.repeatRMASuccess(element, cart);
        } else {
          this.spinnerOverlayService.hide();
        }
      });
    }
  }
  //**Repeat RMA LIne Item End**//

  checkUserEnabled(flagName) {
    // return this.userRoleService.checkUserRoleEnabled(flagName);
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
  backLink() {
    this.location.back();
  }
  ngOnDestroy(): void {
    this.pageRefreshSubscription?.unsubscribe();
  }
}
