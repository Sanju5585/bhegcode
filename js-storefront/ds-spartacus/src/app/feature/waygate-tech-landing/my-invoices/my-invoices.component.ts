import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { MultiCartFacade, ActiveCartFacade } from '@spartacus/cart/base/root';
import {
  TranslationService,
  GlobalMessageService,
  AuthService,
  OCC_USER_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  GlobalMessageType,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import moment from 'moment';
import { Observable, share, take, concatMap, of } from 'rxjs';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { MyInvoicesService } from './my-invoices.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-my-invoices',
  standalone: false,
  templateUrl: './my-invoices.component.html',
  styleUrl: './my-invoices.component.scss',
})
export class MyInvoicesComponent {
  breadcrumbs: any[] = [];
  pageSizes = [10, 20, 50, 100];
  cart$: Observable<any>;
  startRange = 1;
  totalCount = 0;
  currentPageSize = 10;
  endRange = this.currentPageSize;
  totalPages: number;
  currentPage: number = 1;
  selectedNotificationId = -1;
  currentUserType;
  userLoggedIn$: Observable<boolean>;
  selectAll = false;
  indeterminate = false;
  monthOptions = [
    {
      label: 'my-invoices.3Months',
      value: 3,
    },
    {
      label: 'my-invoices.6Months',
      value: 6,
    },
    {
      label: 'my-invoices.12Months',
      value: 12,
    },
    {
      label: 'my-invoices.24Months',
      value: 24,
    },
  ];
  orderTiles = [
    {
      label: 'my-invoices.all',
      value: '',
    },
    {
      label: 'my-invoices.open',
      value: 'Open',
    },
    {
      label: 'my-invoices.overDue',
      value: 'Past Due',
    },
    {
      label: 'my-invoices.paid',
      value: 'Paid',
    },
    {
      label: 'my-invoices.creditNote',
      value: 'Credit Note',
    },
  ];

  selectedTile = '';
  selectedMonth: number = 24;
  selectedAccount = '';
  selectedQuoteId: any;
  noData: boolean;
  params: any;
  resData: any;
  orderList: any;
  orderData: any;
  myInvoicesData$: Observable<any>;
  activeCustomerAccount$: Observable<CustomerAccount>;
  customerAccountName: string;
  b2bUnits: any[];
  activeList: any;
  productLine: string;
  paymentList: any[] = [];
  calculatedInvoicePayment: any;
  currentUrl: string;
  openBox = true;
  searchControl = new FormControl(null);
  currencySelected: string;
  multipleCurrencies: boolean = false;
  constructor(
    private customerAccService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    private translationService: TranslationService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private myInvoicesService: MyInvoicesService,
    protected activeCartFacade: ActiveCartFacade,
    private authService: AuthService,
    protected globalMessageService: GlobalMessageService,
  ) {}

  ngOnInit() {
    this.userLoggedIn$ = this.authService.isUserLoggedIn();
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          name: 'my-invoices.myInvoices',
          url: `/${this.productLine}/my-invoices`,
        },
      ];
    });
    this.updateLangForOptions(this.breadcrumbs, 'name');
    this.updateLangForOptions(this.monthOptions, 'label');
    this.updateLangForOptions(this.orderTiles, 'label');
    this.getAccountList();
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    this.searchControl.valueChanges
      .pipe(debounceTime(1000)) // Delay for 500 milliseconds
      .subscribe((searchValue) => {
        if (searchValue != this.params?.invoiceNumber) {
          this.search();
        }
      });
    this.activateRoute.queryParams.subscribe((params: any) => {
      // In this block we are are finding the which period are selected like 3, 6, 12 or 24 months
      if (params?.fromDate && params?.toDate) {
        const differenceInMonth = moment(params?.toDate).diff(
          moment(params?.fromDate),
          'months',
          true
        );
        const isExist = this.monthOptions.some(
          (option) => option.value === differenceInMonth
        );

        this.selectedMonth = isExist ? differenceInMonth : this.selectedMonth;
      }
      this.params = {
        ...this.params,
        ...params,
        pageNum: params?.pageNum || 0,
        invoiceNumber: params?.invoiceNumber || '',
        fromDate:
          params?.fromDate ||
          moment(new Date())
            .subtract(this.selectedMonth, 'months')
            .format('yyyy-MM-DD'),
        toDate: params?.toDate || moment(new Date()).format('yyyy-MM-DD'),
        pageSize: params?.pageSize || 10,
        invoiceStatus: params?.invoiceStatus || '',
        customer: params?.customer || this.activeList?.uid,
        sortBy: params?.sortBy || 'datedesc',
      };

      this.searchControl.setValue(this.params.invoiceNumber, {
        emitEvent: false,
      });
      this.selectedTile = this.params.invoiceStatus
        ? this.params.invoiceStatus
        : '';
      this.getOrders();
    });
    setTimeout(() => {
      this.monthOptions = [...this.monthOptions];
      this.orderTiles = [...this.orderTiles];
    }, 500);
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translationService.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  /**
   * @description This function call api/store to get account list ,
   * @returns void
   */
  getAccountList(): void {
    console.log('sss');
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((activeList) => {
      this.activeList = activeList;
      this.params = {
        ...this.params,
        customer: this.params?.customer || this.activeList?.uid,
      };
    });
  }

  search() {
    this.setRoute({
      invoiceNumber: this.searchControl.value,
      pageNum: 0,
    });
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }

  getTranslatedText(key) {
    let message;
    this.translationService.translate(key).subscribe((res) => {
      message = res;
      return res;
    });
    return message;
  }

  createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
      newArr.push(i);
    }
    return newArr;
  }

  getPageArray() {
    return this.createArray(this.totalPages);
  }

  pageSizeChanged(event) {
    this.currentPageSize = parseInt(event?.target?.value);
    this.setRoute({ pageSize: this.currentPageSize, pageNum: 0 });
  }

  pageSelected(pageNo) {
    if (1 <= pageNo) {
      this.currentPage = parseInt(pageNo);
      this.setRoute({ pageNum: this.currentPage - 1 });
    }
  }

  getOrders() {
    this.params = {
      ...this.params,
      // customer: '0000057964',
      // company: '1800',
    };
    this.selectAll = false;
    this.paymentList = [];
    this.noData = false;
    this.myInvoicesData$ = this.myInvoicesService
      .getInvoices(this.params, this.productLine)
      .pipe(share());
    this.myInvoicesData$.subscribe((myInvoicesData: any) => {
      // this.customerAccountName = myInvoicesData.quoteResponse[0].b2bUnit;
      this.multipleCurrencies = myInvoicesData?.invoiceResponse?.some(
        (invoice) =>
          invoice.currency !== myInvoicesData?.invoiceResponse[0]?.currency
      );
      this.totalCount = myInvoicesData?.pagination?.totalResults;
      this.startRange =
        myInvoicesData?.pagination?.currentPage *
          myInvoicesData?.pagination?.pageSize +
        1;
      this.endRange = Math.min(
        this.startRange + myInvoicesData?.pagination?.pageSize - 1,
        myInvoicesData?.pagination?.totalResults
      );
      this.totalPages = myInvoicesData?.pagination?.totalPages;
      this.currentPage = myInvoicesData?.pagination?.currentPage + 1;
      this.currentPageSize = myInvoicesData?.pagination?.pageSize;
    });
  }

  clearAll() {
    this.router.navigate([], {
      relativeTo: this.activateRoute,
      queryParams: {},
      replaceUrl: true,
    });
  }

  downloadXls() {
    this.params = {
      ...this.params,
      excludeDefaultSoldTo: this.params?.customerNumber ? true : false,
      searchTerm: this.searchControl.value,
    };
    // this.orderTrackingService.getDetailsinXLSFormat(this.params).subscribe(
    //   (res) => {
    //     if (res !== null && res !== undefined) {
    //       const currentDate = moment(new Date()).format('D-MMM-yyyy');
    //       let fileName = 'OrdersList_' + currentDate;
    //       const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
    //       const file = new File([blob], fileName + '.xlsx', {
    //         type: 'application/vnd.ms.excel',
    //       });
    //       saveAs(file);
    //     } else {
    //     }
    //   },
    //   (error) => {}
    // );
  }

  sort(sortCode) {
    this.setRoute({ sortBy: sortCode, pageNum: 0 });
  }

  /**
   * @description this will update the selected status and change the route with selected status, call api
   * @returns void
   */
  onStatusChange(): void {
    this.setRoute({
      invoiceStatus: this.selectedTile,
      pageNum: 0,
    });
  }

  /**
   * @description this will update the selected month and change the route with selected status, call api
   * @returns void
   */
  onMonthChange(): void {
    this.setRoute({
      fromDate: moment(new Date())
        .subtract(this.selectedMonth, 'months')
        .format('yyyy-MM-DD'),
      toDate: moment(new Date()).format('yyyy-MM-DD'),
      pageNum: 0,
    });
  }

  /**
   * @description this will update the selected account and change the route with selected status, call api
   * @returns void
   */
  onAccountChange(event): void {
    console.log(event);
    this.params.customer = event;
    this.setRoute({
      customer: this.params?.customer,
      pageNum: 0,
    });
  }

  /**
   * @description This function will sort line items by asending
   * @param items Array of line items
   * @returns Array of line items
   */
  getSortedLineItems(items) {
    return items.sort((a, b) => {
      const currentRecordDate = moment(a.orderDate, 'yyyy-MM-DD');
      const nextRecordDate = moment(b.orderDate, 'yyyy-MM-DD');
      return currentRecordDate.diff(nextRecordDate);
    });
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
          // this.navigateToCartPage(this.selectedQuoteId);
          this.closeMsg();
        }
      });
    }
  }
  toggleSelectAll(event, invoiceResponse) {
    this.selectAll = event.target.checked;
    this.indeterminate = false;
    if (this.selectAll) {
      this.paymentList = invoiceResponse.filter(
        (order) =>
          order.invoiceStatus != 'Paid' ||
          order?.paymentStatus != 'TRANSACTION_INITIATED'
      );
      this.checkPaymentsValue();
    } else {
      this.paymentList = [];
      this.checkPaymentsValue();
    }
  }

  getCheckboxState(order) {
    return this.paymentList?.find(
      (o) => o.invoiceNumber === order.invoiceNumber
    )
      ? true
      : false;
  }
  
  downloadInvoice(orderData){
    let invPayload = {
      "InvoiceNumber": orderData.invoiceNumber,
      "customerNumber": orderData.customer
    }

    this.myInvoicesService
      .fetchInvoiceAttachment(invPayload)
      .subscribe((res: Blob) => {
        if (res !== null && res !== undefined){
          const blob = new Blob([res], { type: 'application/pdf' });
          const file = new File(
            [blob],
            orderData.invoiceNumber + '.pdf',
            {
              type: 'application/pdf',
            }
          );

          saveAs(file);
        } else{
          this.globalMessageService.add(
            this.getTranslatedText('my-invoices.error.loadingmsg'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('my-invoices.error.loadingmsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      });
  }
  

  onCheckboxChange(event, invoice, invoiceResponse) {
    console.log('currencySelected', this.currencySelected);
    if (event.target.checked) {
      this.currencySelected = invoice.currency;
      this.paymentList.push(invoice);
      this.checkPaymentsValue();
    } else {
      this.currencySelected = undefined;
      this.paymentList = this.paymentList.filter(
        (o) => o.invoiceNumber !== invoice.invoiceNumber
      );
      this.checkPaymentsValue();
    }
    const allValidInvoicesLength = invoiceResponse.filter(
      (order) =>
        order.invoiceStatus != 'Paid' ||
        order?.paymentStatus != 'TRANSACTION_INITIATED'
    )?.length;
    if (this.paymentList.length === allValidInvoicesLength) {
      this.selectAll = true;
      this.indeterminate = false;
    } else if (this.paymentList.length === 0) {
      this.selectAll = false;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
      this.selectAll = false;
    }
    console.log(this.paymentList);
  }
  proceedToPay() {
    console.log('proceedToPay', this.paymentList);

    this.myInvoicesService
      .invoicePaymentPage(this.paymentList)
      .subscribe((data) => {
        const navigationExtras: NavigationExtras = {
          state: {
            data: { ...data, selectedInvoices: this.calculatedInvoicePayment },
          },
        };

        this.router.navigate(
          ['/' + this.productLine, 'my-invoices', 'checkout'],
          navigationExtras
        );
      });
  }
  calculateSelectedAmount() {
    return this.paymentList?.reduce((a, c) => a + c?.amount, 0);
  }
  checkPaymentsValue() {
    this.myInvoicesService
      .calculateInvoiceAmount(this.paymentList)
      .subscribe((data) => {
        console.log('data', data);
        this.calculatedInvoicePayment = data;
      });
  }
  closeMsg() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/' + this.productLine, 'my-invoices'])
      );
  }
  isInvoiceInitiated(invoices) {
    return invoices?.filter(
      (invoice: any) => invoice?.paymentStatus == 'TRANSACTION_INITIATED'
    )?.length > 0
      ? true
      : false;
  }
  closeModal() {
    this.openBox = false;
  }
}
