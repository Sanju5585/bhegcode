import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  SecurityContext,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';
import {
  GlobalMessageService,
  GlobalMessageType,
  AuthService,
} from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OrderTrackingService } from '../order-tracking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ShareOrderDilogComponent } from './share-order-dilog/share-order-dilog.component';
import { TranslationService } from '@spartacus/core';
import { switchMap, take } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { environment } from '../../../../environments/environment';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import {
  SAP_ORDER_STATUS,
  OrderStatusTypes,
  OrderStatusIndex,
} from '../../../shared/models/status/order-status.model';
import { StatusType } from '../../../shared/models/status/status.model';

@Component({
  standalone: false,
  selector: 'vs-order-tracking-detail',
  templateUrl: './order-tracking-detail.component.html',
  styleUrls: ['./order-tracking-detail.component.scss'],
})
export class OrderTrackingDetailComponent implements OnInit {
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
  orderTrackingResponse: any;
  orderStatus = StatusType.ORDER;
  getResponseOnRefresh: any;
  pageRefreshSubscription: Subscription;

  orderIdToBeTracked: any;
  orderInquiries: any;
  inquiryForm: FormGroup;
  inquiryFormSubmitted: boolean = false;
  displayFormHideMessage: boolean = true;
  cartId: any;
  favMsg: any;
  cartShopping$: Observable<any> = this.activeCartFacade.getActiveCartId();
  displayContentsOnLoad: boolean = false;

  @ViewChild('categoryOne', { read: ElementRef }) categoryOne: ElementRef;
  @ViewChild('categoryTwo', { read: ElementRef }) categoryTwo: ElementRef;
  @ViewChild('categoryThree', { read: ElementRef }) categoryThree: ElementRef;
  @ViewChild('categoryFour', { read: ElementRef }) categoryFour: ElementRef;
  @ViewChild('defaultOpen', { read: ElementRef }) defaultOpen: ElementRef;
  custDetail: any;
  CustName: any;
  modalRef: any;
  guestOrderDetail: any;
  authorizationAmt: any;
  authorizationDate: any;
  settlementAmt: any;
  settlementDate: any;
  plannedShipDate: any;
  isOrderShipped: boolean = false;
  incoTerm: any;
  guestIncoTerm: any;
  poNumber: string;
  constructor(
    protected globalMessageService: GlobalMessageService,
    protected launchDialogService: LaunchDialogService,
    private orderTrackingService: OrderTrackingService,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private elRef: ElementRef,
    private translate: TranslationService,
    private router: Router,
    private formBuilder: FormBuilder,
    protected activeCartFacade: ActiveCartFacade,
    private location: Location,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private breadCrumbService: BreadcrumbService,
    private cRef: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    private translationService: TranslationService,
  ) {}

  openTab(evt, prodName, elementReference: ElementRef) {
    let i, tabcontent, tablinks;

    tabcontent = this.elRef.nativeElement.querySelectorAll('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = this.elRef.nativeElement.querySelectorAll('.tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    this.renderer.setStyle(elementReference, 'display', 'block');
    evt.currentTarget.className += ' active';

    this.resetInquiryForm();
  }

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
      this.translationService
      .translate('order-tracking.pageTitle')
      .subscribe((res: string) => {
        breadcrumb = [
          {
            label: res,
            link: '/my-orders',
          },
        ];
      })
    } else {
      this.translationService
      .translate('order-tracking.pageTitle')
      .subscribe((res: string) => {
        breadcrumb = [
          {
            label: res,
          },
        ];
      })
    }
    this.breadCrumbService.setBreadCrumbs(breadcrumb);
    this.breadCrumbService.setBreadcrumbTitle(
      'Order # ' + this.orderIdToBeTracked
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
    this.getOrderData();
    this.updateLangForOptions(this.orderInquiries, 'name');
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  getOrderData() {
    // Get data on page refresh
    if (this.userType === 'current') {
      this.pageRefreshSubscription =
        this.orderTrackingService.emitOrderDetail.subscribe((data) => {
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

  get f() {
    return this.inquiryForm.controls;
  }

  ngAfterViewInit() {
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
    this.orderTrackingService.emitOrderDetail.subscribe(
      (response) => {
        if (response === undefined) {
          this.globalMessageService.add(
            this.getTranslatedText('order-tracking.error.ordermsg'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.router.navigate(['/my-orders']);
          return;
        }
        this.fullResponse = response;
        this.orderTrackingResponse = response['lineData']?.sort((a, b) =>
          a.lineNumber > b.lineNumber ? 1 : -1
        );
        this.custDetail = this.fullResponse?.soldTo.split('-');
        let name = '';
        if (this.custDetail.length > 2) {
          for (let i = 0; i < this.custDetail.length - 1; i++) {
            if (i == 0) {
              name = this.custDetail[i] + '-';
            } else {
              name += this.custDetail[i];
            }
          }
          this.CustName = name.trim();
        } else {
          this.CustName = this.custDetail[0] + this.custDetail[1];
        }
        if (
          this.fullResponse.orderStatus === 'Shipped' ||
          this.fullResponse.orderStatus === 'Shipped & Invoiced'
        ) {
          this.isOrderShipped = true;
        } else {
          this.isOrderShipped = false;
        }
        this.setOrderTrackingData(response);
      },
      (error) => {
        this.displayContentsOnLoad = false;
        this.globalMessageService.add(
          this.getTranslatedText('order-tracking.error.ordermsg'),

          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
    this.orderTrackingService.emitGuestOrderDetail.subscribe((res) => {
      this.guestOrderDetail = res;
      if (!this.guestOrderDetail) {
        this.orderTrackingService
          .getOrderTrackingDetails(this.orderIdToBeTracked)
          .subscribe(
            (data) => {
              this.orderTrackingResponse = data['lineData']?.sort((a, b) =>
                a.lineNumber > b.lineNumber ? 1 : -1
              );
              this.displayContentsOnLoad = true;
              this.setOrderTrackingData(data);
            },
            (error) => {
              this.displayContentsOnLoad = false;
              this.globalMessageService.add(
                this.getTranslatedText('order-tracking.error.ordermsg'),

                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
              this.router.navigate(['/home']);
              window.scrollTo(0, 0);
            }
          );
      }
    });
  }

  setOrderTrackingData(response) {
    this.orderTrackingResponse = response['lineData']?.sort((a, b) =>
      a.lineNumber > b.lineNumber ? 1 : -1
    );
    this.poNumber = this.orderTrackingResponse[0].customerPO;
    this.plannedShipDate = this.orderTrackingResponse[0]?.geFromDate
      ? this.orderTrackingResponse[0]?.geFromDate
      : this.orderTrackingResponse[0]?.reqShipDate;
    if (this.poNumber === 'CREDIT CARD ORDER') {
      this.authorizationAmt = this.orderTrackingResponse[0].authAmt;
    } else {
      this.authorizationAmt = '';
    }
    this.authorizationDate =
      this.orderTrackingResponse[0]?.authDate &&
      this.orderTrackingResponse[0]?.authDate !== '0000-00-00'
        ? this.getOrderTrackingFormatedDate(
            this.orderTrackingResponse[0].authDate
          )
        : '';
    if (this.orderTrackingResponse[0]) {
      this.settlementAmt =
        this.orderTrackingResponse[0]?.settlAmt !== '0.0'
          ? this.orderTrackingResponse[0].settlAmt
          : '';
      this.settlementDate =
        this.orderTrackingResponse[0]?.settlDate &&
        this.orderTrackingResponse[0].settlDate !== '0000-00-00'
          ? this.getOrderTrackingFormatedDate(
              this.orderTrackingResponse[0].settlDate
            )
          : '';
    } else {
      this.settlementAmt = '';
      this.settlementDate = '';
    }
    this.incoTerm =
      this.orderTrackingResponse[0]?.incoTerm !== null
        ? this.orderTrackingResponse[0].incoTerm
        : '';

    this.guestIncoTerm = response?.incoterm !== null ? response.incoterm : '';
    this.displayContentsOnLoad = true;
    this.cRef.detectChanges();
  }
  getDataOnPageRefresh() {
    const parms = {
      pageNumber: 0,
      searchTerm: this.orderIdToBeTracked,
      pageSize: 1,
      customerNumber:
        this.custDetail?.this.custDetail[this.custDetail.length - 1].trim(' '),
    };
    this.orderTrackingService.getRefreshOrders(parms).subscribe((response) => {
      this.getResponseOnRefresh = response;
      this.orderTrackingService.emitOrderDetail.next(
        this.getResponseOnRefresh?.orderData[0]
      );
      this.fetchOrderTrackingDetails();
    });
  }

  fetchOrderStatus(statusResponse) {
    let status = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          status = OrderStatusTypes.SUBMITTED.statusName;
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          status = OrderStatusTypes.PROGRESS.statusName;
          break;
        case SAP_ORDER_STATUS.SHIPPED:
          status = OrderStatusTypes.SHIPPED.statusName;
          break;
        case SAP_ORDER_STATUS.SHIPPED_INVOICED:
          status = OrderStatusTypes.INVOICED.statusName;
          break;
        case SAP_ORDER_STATUS.BLOCKED:
          status = OrderStatusTypes.BLOCKED.statusName;
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
        case SAP_ORDER_STATUS.ORDER_SUBMITTED:
          color = '#506C65';
          break;
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          color = '#CB6E17';
          break;
        case SAP_ORDER_STATUS.SHIPPED:
          color = '#044E54';
          break;
        case SAP_ORDER_STATUS.SHIPPED_INVOICED:
          color = '#506C65';
          break;
        case SAP_ORDER_STATUS.BLOCKED:
          color = '#E12D39';
          break;
      }
    }
    return color;
  }

  checkWhetherBlocked(statusResponse) {
    return statusResponse !== null &&
      statusResponse !== undefined &&
      statusResponse.toUpperCase() === SAP_ORDER_STATUS.BLOCKED
      ? true
      : false;
  }

  setBubbleOrderStatus() {
    return StatusType.ORDER;
  }

  setBubbleOrderStatusId(statusResponse) {
    let statusId: number;
    if (statusResponse !== undefined && statusResponse !== null) {
      let statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_ORDER_STATUS.ORDER_SUBMITTED:
          statusId = OrderStatusIndex.RECEIVED;
          break;
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          statusId = OrderStatusIndex.PROGRESS;
          break;
        case SAP_ORDER_STATUS.SHIPPED:
          statusId = OrderStatusIndex.SHIPPED;
          break;
        case SAP_ORDER_STATUS.SHIPPED_INVOICED:
          statusId = OrderStatusIndex.INVOICED;
          break;
        case SAP_ORDER_STATUS.BLOCKED:
          statusId = OrderStatusIndex.BLOCKED;
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
    this.orderTrackingService.repeatOrder(this.orderIdToBeTracked, this.cartId);
  }

  fetchInquiryTypes() {
    this.orderTrackingService.getInquiryTypes();

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
    const customerNumber =
      this.custDetail[this.custDetail.length - 1].trim(' ');
    let name = '';
    let custName;
    if (this.custDetail.length > 2) {
      for (let i = 0; i < this.custDetail.length - 1; i++) {
        if (i == 0) {
          name = this.custDetail[i] + '-';
        } else {
          name += this.custDetail[i];
        }
      }
      custName = name.trim();
    } else {
      custName = this.custDetail[0].trim(' ');
    }
    this.orderTrackingService
      .submitInquiryToCSR(
        custName,
        this.fullResponse?.orderDate,
        this.inquiryForm.value.orderInquiry,
        this.inquiryForm.value.inquiryDesc,
        this.fullResponse?.code,
        this.fullResponse?.purchaseOrderNumber,
        this.fullResponse?.productLine,
        customerNumber,
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
            this.getTranslatedText('order-tracking.error.postingmsg'),
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

  checkUserEnabled(flagName) {}
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
  backLink() {
    this.location.back();
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  getOrderTrackingFormatedDate(date) {
    const authDate = new Date(date);
    return (
      authDate.getDate() +
      ' ' +
      authDate.toLocaleDateString('en-US', { month: 'short' }) +
      ' ' +
      authDate.getFullYear()
    );
  }
  ngOnDestroy(): void {
    this.pageRefreshSubscription?.unsubscribe();
  }
}
