import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorModel, TranslationService, WindowRef } from '@spartacus/core';
import { OrderTrackingService } from '../../order-tracking/order-tracking.service';
import moment from 'moment';
import { Observable, combineLatest } from 'rxjs';
import saveAs from 'file-saver';
import { debounceTime, share } from 'rxjs/operators';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';
import { SAP_ORDER_STATUS } from '../../../shared/models/status/order-status.model';
import { FormControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-waygate-orders',
  templateUrl: './waygate-orders.component.html',
  styleUrls: ['./waygate-orders.component.scss'],
})
export class WaygateOrdersComponent {
  breadcrumbs: any[] = [];
  pageSizes = [10, 20, 50, 100];

  startRange = 1;
  totalCount = 0;
  currentPageSize = 10;
  endRange = this.currentPageSize;
  totalPages: number;
  currentPage: number = 1;
  selectedNotificationId = -1;

  monthOptions = [
    {
      label: 'waygate-order.3Months',
      value: 3,
    },
    {
      label: 'waygate-order.6Months',
      value: 6,
    },
    {
      label: 'waygate-order.12Months',
      value: 12,
    },
    {
      label: 'waygate-order.24Months',
      value: 24,
    },
  ];
  orderTiles = [
    {
      label: 'waygate-order.inProgress',
      value: SAP_ORDER_STATUS.ORDER_IN_PROGRESS,
    },
    {
      label: 'waygate-order.received',
      value: SAP_ORDER_STATUS.ORDER_SUBMITTED,
    },
    {
      label: 'waygate-order.blocked',
      value: SAP_ORDER_STATUS.BLOCKED,
    },
    {
      label: 'waygate-order.shipped',
      value: SAP_ORDER_STATUS.SHIPPED,
    },
    {
      label: 'waygate-order.shipped&Invoiced',
      value: SAP_ORDER_STATUS.SHIPPED_INVOICED,
    },
    {
      label: 'waygate-order.all',
      value: SAP_ORDER_STATUS.ALL,
    },
  ];

  selectedTile = SAP_ORDER_STATUS.ALL;
  selectedMonth: number = 24;
  selectedAccount: number;

  noData: boolean;
  params: any;
  resData: any;
  orderList: any;
  orderData: any;
  searchTerm: any;
  ordersData$: Observable<any>;
  activeCustomerAccount$: Observable<CustomerAccount>;

  b2bUnits: any[];
  activeList: any;
  productLine: string;
  timeout: number;
  searchControl = new FormControl('');

  constructor(
    private customerAccService: CustomerAccountService,
    private translationService: TranslationService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private orderTrackingService: OrderTrackingService,
    private winRef: WindowRef
  ) {}

  ngOnInit() {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.breadcrumbs = [
        {
          name: 'waygate-order.myOrders',
          url: `/${this.productLine}/my-orders`,
        },
      ];
    });
    this.updateLangForOptions(this.breadcrumbs, 'name');
    this.updateLangForOptions(this.monthOptions, 'label');
    this.updateLangForOptions(this.orderTiles, 'label');
    this.getAccountList();
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
        pageNumber: params?.pageNumber || 0,
        status: params?.status || SAP_ORDER_STATUS.ALL,
        searchByValue: params?.searchByValue || null,
        fromDate:
          params?.fromDate ||
          moment(new Date())
            .subtract(this.selectedMonth, 'months')
            .format('DD-MMM-YYYY'),
        toDate: params?.toDate || moment(new Date()).format('DD-MMM-YYYY'),
        pageSize: params?.pageSize || 10,
        sortBy: params?.sortBy || 'byDateDsc',
        isRefreshedFlag: params?.isRefreshedFlag || false,
        orderStatus: params?.orderStatus || SAP_ORDER_STATUS.ALL,
        customerNumber: params?.customerNumber || null,
      };
      if (this.params.customerNumber != null) {
        this.selectedAccount = this.params.customerNumber;
      }
      this.searchControl.setValue(this.params.searchByValue);
      this.selectedTile = this.params.status
        ? this.params.status
        : SAP_ORDER_STATUS.ALL;
      if (this.params?.orderStatus == SAP_ORDER_STATUS.ALL) {
        delete this.params['orderStatus'];
      }
      this.getOrders();
    });
    setTimeout(() => {
      this.monthOptions = [...this.monthOptions];
      this.orderTiles = [...this.orderTiles];
    }, 500);
    this.searchControl.valueChanges
      .pipe(debounceTime(1000)) // Delay for 500 milliseconds
      .subscribe((searchValue) => {
        if (searchValue != this.params?.searchByValue) this.search();
      });
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
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((activeList) => {
      this.activeList = activeList;
    });
  }
  getSearchInput() {
    this.winRef.nativeWindow.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.search(), 700);
  }

  search() {
    this.setRoute({
      searchByValue: this.searchControl.value,
      pageNumber: 0,
    });
  }
  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }
  async getTranslatedText(key) {
    let message;
    await this.translationService.translate(key).subscribe((res) => {
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
    this.setRoute({ pageSize: this.currentPageSize, pageNumber: 0 });
  }
  pageSelected(pageNo) {
    if (1 <= pageNo) {
      this.currentPage = parseInt(pageNo);
      this.setRoute({ pageNumber: this.currentPage - 1 });
    }
  }

  getOrders(refresh?) {
    this.params = {
      ...this.params,
      isRefreshedFlag: refresh ? true : false,
      excludeDefaultSoldTo: this.params?.customerNumber ? true : false,
    };
    this.noData = false;
    this.ordersData$ = this.orderTrackingService
      .getOrders(this.params)
      .pipe(share());
    this.ordersData$.subscribe((orderData: any) => {
      this.b2bUnits = orderData?.customerAccounts.map((account) => {
        if (!this.selectedAccount && account.uid == this.activeList?.uid) {
          this.selectedAccount = account.uid;
        }
        return {
          id: account.uid,
          label: `${account.name}-${account.number}`,
        };
      });
      this.b2bUnits = [...this.b2bUnits];
      this.totalCount = orderData?.pagination?.totalResults;
      this.startRange =
        orderData?.pagination?.currentPage * orderData?.pagination?.pageSize +
        1;
      this.endRange = Math.min(
        this.startRange + orderData?.pagination?.pageSize - 1,
        orderData?.pagination?.totalResults
      );
      this.params.isRefreshedFlag = false;
      this.totalPages = orderData?.pagination?.totalPages;
      this.currentPage = orderData?.pagination?.currentPage + 1;
      this.currentPageSize = orderData?.pagination?.pageSize;
    });
  }
  getClass = (orderStatus) => {
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };
  clearAll() {
    this.router.navigate([], {
      relativeTo: this.activateRoute,
      queryParams: {},
      replaceUrl: true,
    });
  }
  refresh() {
    this.router.navigate([], {
      relativeTo: this.activateRoute,
      queryParams: {
        isRefreshedFlag: true,
      },
      replaceUrl: true,
    });
  }
  downloadXls() {
    this.params = {
      ...this.params,
      excludeDefaultSoldTo: this.params?.customerNumber ? true : false,
      searchTerm: this.searchControl.value,
    };
    this.orderTrackingService.getDetailsinXLSFormat(this.params).subscribe(
      (res) => {
        if (res !== null && res !== undefined) {
          const currentDate = moment(new Date()).format('D-MMM-yyyy');
          let fileName = 'OrdersList_' + currentDate;
          const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
          const file = new File([blob], fileName + '.xlsx', {
            type: 'application/vnd.ms.excel',
          });
          saveAs(file);
        } else {
        }
      },
      (error) => {}
    );
  }
  sort(sortCode) {
    this.setRoute({ sortBy: sortCode, pageNumber: 0 });
  }
  /**
   * @description this will update the selected status and change the route with selected status, call api
   * @returns void
   */
  onStatusChange(): void {
    this.setRoute({
      status: this.selectedTile,
      orderStatus: this.selectedTile,
      pageNumber: 0,
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
        .format('DD-MMM-YYYY'),
      toDate: moment(new Date()).format('DD-MMM-YYYY'),
      pageNumber: 0,
    });
  }
  /**
   * @description this will update the selected account and change the route with selected status, call api
   * @returns void
   */
  onAccountChange(): void {
    this.setRoute({
      customerNumber: this.selectedAccount,
      pageNumber: 0,
    });
  }
  /**
   * @description This function will sort line items by asending
   * @param items Array of line items
   * @returns Array of line items
   */
  getSortedLineItems(items) {
    return items.sort((a, b) => {
      const currentRecordDate = moment(a.orderDate, 'DD-MMM-YYYY');
      const nextRecordDate = moment(b.orderDate, 'DD-MMM-YYYY');
      return currentRecordDate.diff(nextRecordDate);
    });
  }
  /**
   * @description conpaire the selected status and if it is all the return true otherwise false
   * @returns boolean true/false
   */
  get statusIsAll(): boolean {
    return SAP_ORDER_STATUS.ALL == this.params?.status ? true : false;
  }
  /**
   * @description conpaire the selected status and if it is promissed the return true otherwise false
   * @returns boolean true/false
   */
  get statusIsPromised(): boolean {
    return [
      SAP_ORDER_STATUS.ORDER_IN_PROGRESS,
      SAP_ORDER_STATUS.ORDER_SUBMITTED,
      SAP_ORDER_STATUS.BLOCKED,
    ].includes(this.params?.status)
      ? true
      : false;
  }
  /**
   * @description conpaire the selected status and if it is shipped the return true otherwise false
   * @returns boolean true/false
   */
  get statusIsShipped(): boolean {
    return [
      SAP_ORDER_STATUS.SHIPPED,
      SAP_ORDER_STATUS.SHIPPED_INVOICED,
    ].includes(this.params?.status)
      ? true
      : false;
  }

  goToOrderDeatilPage(orderDetails) {
    this.orderTrackingService.emitOrderDetail.next(orderDetails);
    this.router.navigate([
      '/',
      this.productLine,
      'my-orders',
      orderDetails.code,
    ]);
  }

  notificationBellIconClick(i) {
    if (this.selectedNotificationId == i) {
      this.selectedNotificationId = -1;
    } else {
      this.selectedNotificationId = i;
    }
  }
}
