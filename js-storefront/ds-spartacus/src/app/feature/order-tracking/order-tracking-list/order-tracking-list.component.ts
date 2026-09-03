import {
  Component,
  OnInit,
  ViewEncapsulation,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { DatePipe } from '@angular/common';
import { OrderTrackingService } from '../order-tracking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { TranslationService } from '@spartacus/core';
import {
  SearchParams,
  StatusType,
} from '../../../shared/models/status/status.model';
import { StatusTile } from '../../../shared/components/status-tiles/status-tiles.component';
import {
  DateFormats,
  DateRange,
} from '../../../shared/components/date-range-picker/date-range-picker.component';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { OrderStatusTypes } from '../../../shared/models/status/order-status.model';
import { CommonService } from '../../../shared/services/common.service';
@Component({
  standalone: false,
  selector: 'app-order-tracking-list',
  templateUrl: './order-tracking-list.component.html',
  styleUrls: ['./order-tracking-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderTrackingListComponent implements OnInit {
  searchParams: SearchParams = {
    pageNumber: 0,
    status: null,
    searchTerm: null,
    fromDate: null,
    toDate: null,
    pageSize: 20,
    sortBy: 'CreateDsc',
    isRefreshedFlag: null,
    customerNumber: null,
  };

  tableData = [];
  public toMinDate;
  public fromMaxDate;
  public changeDate: boolean = false;
  public fromMax;
  public noData;
  public buttonDirection: boolean = false;
  public buttonDirection2: boolean = false;
  public dataSource = [];
  quoteTiles: StatusTile[];
  firstStatusType: StatusType;
  fromDate: DateFormats = new DateFormats();
  toDate: DateFormats = new DateFormats();
  public dateRange: boolean;
  searchTerm = '';
  currentUser: any;
  isRefreshedFlag: boolean;
  public sortConditions: any = [
    { name: 'Ascending- PO Date' },
    { name: 'Descending- PO Date' },
    { name: 'Ascending- Order Created' },
    { name: 'Descending- Order Created' },
    { name: 'Ascending- Last Updated' },
    { name: 'Descending- Last Updated' },
  ];
  displayedColumns = [
    'Order',
    'Order Status',
    'Payment Type',
    'PO Date',
    'Net Price',
    'Order Created',
    'Last Updated',
  ];
  statusFilter = '';
  statusFilterTxt: any = '';
  currentPage = 0;
  isLoadMoreInProgress = false;
  full: boolean = true;
  sortBy = 'OrderDsc';
  searchFieldUpdated: boolean = false;
  totalPages: any;
  totalOrders_excel: any;
  params: { searchTerm: any; pageSize: number };
  formattedFromDate: string;
  formattedToDate: string;
  resData: any;
  selectedProdLine: any = [];
  selectedCustomer: any = [];
  selectedAcc: string;
  customerAccData: any;
  custDetail: CustomerAccount;
  custAccUpdated: boolean;
  favMsg: any;
  selectedProductLineToBeRemove: any = [];
  selectedcustomerToBeRemove: any = [];
  counter: number = 0;
  productLineData: any;
  index: any;
  customerSelected: string;
  constructor(
    public datepipe: DatePipe,
    public orderTrackingService: OrderTrackingService,
    private commonService: CommonService,
    public router: Router,
    private translate: TranslationService,
    private route: ActivatedRoute,
    protected globalMessageService: GlobalMessageService,
    private customerAccService: CustomerAccountService,
    private breadCrumbService: BreadcrumbService,
    public sanitizer: DomSanitizer
  ) {
    this.dateRange = false;
    this.quoteTiles = [
      {
        orderStatus: OrderStatusTypes.TOTAL,
        statusType: StatusType.ORDER,
      },
      {
        orderStatus: OrderStatusTypes.SUBMITTED,
        statusType: StatusType.ORDER,
        colorTheme: 'progress',
        tooltip: this.getTranslatedText('order-tracking.error.progressmsg'),
      },
      {
        orderStatus: OrderStatusTypes.PROGRESS,
        statusType: StatusType.ORDER,
        colorTheme: 'pendingorder',
        tooltip: this.getTranslatedText('order-tracking.error.pendingmsg'),
      },
      {
        orderStatus: OrderStatusTypes.BLOCKED,
        statusType: StatusType.ORDER,
        colorTheme: 'order-blocked',
        tooltip: this.getTranslatedText('order-tracking.error.orderblockmsg'),
      },
      {
        orderStatus: OrderStatusTypes.SHIPPED,
        statusType: StatusType.ORDER,
        colorTheme: 'closed',
        tooltip: this.getTranslatedText('order-tracking.error.closedmsg'),
      },
      {
        orderStatus: OrderStatusTypes.INVOICED,
        statusType: StatusType.ORDER,
        colorTheme: 'order-invoiced',
        tooltip: this.getTranslatedText(
          'order-tracking.error.orderinvoicedmsg'
        ),
      },
    ];
    this.isRefreshedFlag;
  }

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('order-tracking.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );

    this.fromMax = new Date();
    this.fromMaxDate = this.fromMax.setMonth(this.fromMax.getMonth() - 12);
    this.toMinDate = new Date();
    this.orderTrackingService.emitTileStatusOrder.next('All Orders');
    this.dataSource = [];
    this.firstStatusType = StatusType.ORDER;
    this.route.queryParams.subscribe((params: any) => {
      this.searchParams = Object.assign(this.searchParams, params);
      if (params?.fromDate) {
        this.fromMax = new Date(params.fromDate);
        this.searchParams.fromDate = params?.fromDate;
      }
      if (params?.toDate) {
        this.toMinDate = new Date(params.toDate);
        this.searchParams.toDate = params?.toDate;
      }
      if (params.status) {
        this.orderTrackingService.emitTileStatusOrder.next(params.status);
        this.searchParams.orderStatus = params.status;
      }
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
        this.searchParams.searchTerm = this.searchTerm;
      }

      this.refreshList(false);
    });
  }
  currentlyLoading: boolean = false;

  loadMoreOrders() {
    if (this.isLoadMoreInProgress) {
      return;
    }
    if (this.currentlyLoading) {
      return;
    }

    this.currentlyLoading = true;
    this.formattedFromDate = this.datepipe.transform(
      this.fromDate.date,
      'dd-MMM-yyyy'
    );
    this.formattedToDate = this.datepipe.transform(
      this.toDate.date,
      'dd-MMM-yyyy'
    );

    this.searchParams.pageNumber = this.currentPage;
    this.searchParams.pageNumber++;
    if (this.searchParams.pageNumber <= this.totalPages - 1) {
      this.orderTrackingService
        .getRefreshOrders(this.searchParams)
        .subscribe((res: any) => {
          if (res !== null && res !== undefined) {
            this.isLoadMoreInProgress = false;
            if (res.pagination !== undefined) {
              this.currentPage = res.pagination.currentPage;
              this.totalPages = res.pagination.totalPages;
              this.totalOrders_excel = res.pagination.totalResults;
            } else {
              this.currentPage = 0;
              this.totalPages = 0;
              this.totalOrders_excel = 0;
            }
            if (res.orderData && res.orderData.length) {
              for (let i = 0; i < res.orderData.length; i++) {
                let PoValue = res.orderData[i].purchaseOrderNumber;
                if (
                  !PoValue.trim().toLowerCase().includes('po') &&
                  PoValue !== 'CREDIT CARD ORDER'
                ) {
                  res.orderData[i].purchaseOrderNumber =
                    'PO - ' + res.orderData[i].purchaseOrderNumber;
                }
              }
              this.tableData = this.tableData.concat(res.orderData);
            }
            this.currentlyLoading = false;
          } else {
            this.isLoadMoreInProgress = false;
            this.currentlyLoading = false;
            this.globalMessageService.add(
              this.getTranslatedText('order-tracking.error.loadingmsgorder'),

              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          }
        });
    } else {
      this.isLoadMoreInProgress = false;
      this.currentlyLoading = false;
    }
  }

  selectedOrder(element) {
    this.orderTrackingService.emitOrderDetail.next(element);
    this.router.navigate(['order-details', element.code]);
  }
  onTileClick(e: StatusTile) {
    this.orderTrackingService.emitTileStatusOrder.next(e.orderStatus?.status);
    this.statusFilterTxt = e.orderStatus?.status;
    this.searchParams.pageNumber = 0;
    this.searchParams.status = e.orderStatus?.status;
    if (e.orderStatus?.status == 'Order Received') {
      this.searchParams.orderStatus = 'Received';
    } else if (e.orderStatus?.status == 'Order In Progress') {
      this.searchParams.orderStatus = 'Processing';
    } else if (e.orderStatus?.status == 'Blocked') {
      this.searchParams.orderStatus = e.orderStatus?.status;
    } else if (e.orderStatus?.status == 'Shipped') {
      this.searchParams.orderStatus = e.orderStatus?.status;
    } else if (e.orderStatus?.status == 'Shipped & Invoiced') {
      this.searchParams.orderStatus = e.orderStatus?.status;
    } else {
      delete this.searchParams.orderStatus;
    }
    this.setRoute({ status: this.searchParams.orderStatus });
  }

  getDateRange(e: DateRange) {
    this.fromDate = e.from;
    this.toDate = e.to;
    if (this.toDate < this.fromDate) {
      this.dateRange = false;
    } else {
      this.dateRange = true;
    }
    (this.searchParams.fromDate = this.datepipe.transform(
      this.fromDate.date,
      'dd-MMM-yyyy'
    )),
      (this.searchParams.toDate = this.datepipe.transform(
        this.toDate.date,
        'dd-MMM-yyyy'
      )),
      this.setRoute({
        fromDate: this.datepipe.transform(this.fromDate.date, 'dd-MMM-yyyy'),
        toDate: this.datepipe.transform(this.toDate.date, 'dd-MMM-yyyy'),
      });
  }

  clearDateRange() {
    this.changeDate = true;
    this.fromMax = new Date();
    this.fromMaxDate = this.fromMax.setMonth(this.fromMax.getMonth() - 12);
    this.toMinDate = new Date();

    this.fromDate = new DateFormats();
    this.toDate = new DateFormats();
    this.dateRange = false;
    this.searchParams.fromDate = null;
    this.searchParams.toDate = null;
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.fromDate;
    delete params.toDate;
    this.router.navigate([], { queryParams: params });
  }

  clearSearchTerm() {
    this.searchTerm = '';
    this.searchFieldUpdated = false;
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.searchTerm;
    this.router.navigate([], { queryParams: params });
  }
  clearStatus() {
    this.statusFilter = '';
    this.statusFilterTxt = '';
    delete this.searchParams.orderStatus;
    this.orderTrackingService.emitTileStatusOrder.next('All Orders');
    this.searchParams.searchTerm = '';
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.status;
    this.router.navigate([], { queryParams: params });
  }
  clearAll() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.statusFilterTxt = '';
    this.selectedProdLine = [];
    this.selectedCustomer = [];
    this.custAccUpdated = false;
    this.searchFieldUpdated = false;
    this.searchParams.searchTerm = null;

    delete this.searchParams.orderStatus;
    this.clearDateRange();
    this.router.navigate(['my-orders']);
    this.orderTrackingService.emitTileStatusOrder.next('All Orders');
  }

  modelChange() {
    if (this.searchTerm.trim().length > 0) {
      this.searchFieldUpdated = true;
      this.searchTerm = testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, this.searchTerm),
        REGULAR_PATTERN.alphaNumeric
      );
      this.setRoute({ searchTerm: this.searchTerm });
    }
  }

  searchTermChanged() {
    this.searchFieldUpdated = false;
    this.statusFilter = '';
  }

  orderAlignment(event) {
    if (event.$ngOptionLabel == 'Ascending- PO Date') {
      this.setSortBy('PODateAsc');
    } else if (event.$ngOptionLabel == 'Descending- PO Date') {
      this.setSortBy('PODateDsc');
    } else if (event.$ngOptionLabel == 'Ascending- Order Created') {
      this.setSortBy('OrderAsc');
    } else if (event.$ngOptionLabel == 'Descending- Order Created') {
      this.setSortBy('OrderDsc');
    } else if (event.$ngOptionLabel == 'Ascending- Last Updated') {
      this.setSortBy('UpdateAsc');
    } else {
      this.setSortBy('UpdateDsc');
    }
  }
  setSortBy(sortName) {
    this.sortBy = sortName;
    this.setRoute({ sortBy: sortName });
  }

  displayStatus(statusCode) {
    if (statusCode === 'Received') {
      return this.getTranslatedText('track-order.orderReceivedHeader');
    }
    if (statusCode === 'Processing') {
      return this.getTranslatedText('track-order.orderStatusShipped');
    }
    return statusCode;
  }

  downloadXLS() {
    const formattedFromDate = this.datepipe.transform(
      this.fromDate.date,
      'dd-MMM-yyyy'
    );
    const formattedToDate = this.datepipe.transform(
      this.toDate.date,
      'dd-MMM-yyyy'
    );
    this.orderTrackingService
      .getDetailsinXLSFormat(this.searchParams)
      .subscribe(
        (res) => {
          if (res !== null && res !== undefined) {
            const currentDate = this.datepipe.transform(
              new Date(),
              'dd-MM-yyyy'
            );
            let fileName = 'OrderList_' + currentDate;
            const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
            const file = new File([blob], fileName + '.xlsx', {
              type: 'application/vnd.ms.excel',
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
      this.getTranslatedText('order-tracking.error.downloadmsg'),

      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    window.scrollTo(0, 0);
  }

  displaySearchTerm(searchTerm) {
    if (searchTerm.trim().length > 3) {
      return searchTerm.substring(0, 5) + '...';
    }
    return searchTerm;
  }
  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }
  refreshList(refresh) {
    this.isRefreshedFlag = refresh;
    this.isLoadMoreInProgress = true;
    this.noData = false;
    this.searchParams.pageNumber = 0;
    this.searchParams = Object.assign(this.searchParams, {
      isRefreshedFlag: refresh,
    });
    this.orderTrackingService
      .getRefreshOrders(this.searchParams)
      .subscribe((res: any) => {
        this.resData = res;
        if (this.counter == 0) {
          this.productLineData = this.resData.productLines;
          this.customerAccData = this.resData?.customerAccounts.map((x) => {
            return { name: x.name, id: x.uid };
          });
          this.counter++;
        }
        for (let i = 0; i < res.orderData.length; i++) {
          let PoValue = res.orderData[i].purchaseOrderNumber;
          if (
            !PoValue.trim().toLowerCase().includes('po') &&
            PoValue !== 'CREDIT CARD ORDER'
          ) {
            res.orderData[i].purchaseOrderNumber =
              'PO - ' + res.orderData[i].purchaseOrderNumber;
          }
        }
        this.tableData = res.orderData;
        if (res.orderData?.length > 0) {
          const data = res.dashboardData;
          if (res.pagination !== undefined) {
            this.currentPage = res.pagination.currentPage;
            this.totalPages = res.pagination.totalPages;
            this.totalOrders_excel = res.pagination.totalResults;
          } else {
            this.currentPage = 0;
            this.totalPages = 0;
            this.totalOrders_excel = 0;
          }
          this.quoteTiles = [
            {
              orderStatus: OrderStatusTypes.TOTAL,
              statusType: StatusType.ORDER,
              statusCount: data.totalProductOrderCount,
            },
            {
              orderStatus: OrderStatusTypes.SUBMITTED,
              statusType: StatusType.ORDER,
              colorTheme: 'progress',
              statusCount: data.count,
              tooltip: this.getTranslatedText(
                'order-tracking.error.progresscount'
              ),
            },
            {
              orderStatus: OrderStatusTypes.PROGRESS,
              statusType: StatusType.ORDER,
              colorTheme: 'pendingorder',
              statusCount: data.processingCount,
              tooltip: this.getTranslatedText(
                'order-tracking.error.pendingcount'
              ),
            },
            {
              orderStatus: OrderStatusTypes.BLOCKED,
              statusType: StatusType.ORDER,
              colorTheme: 'returned',
              statusCount: data.blkcount,
              tooltip: this.getTranslatedText(
                'order-tracking.error.returncount'
              ),
            },
            {
              orderStatus: OrderStatusTypes.SHIPPED,
              statusType: StatusType.ORDER,
              colorTheme: 'closed',
              statusCount: data.awaitingCount,
              tooltip: this.getTranslatedText(
                'order-tracking.error.closedcount'
              ),
            },
            {
              orderStatus: OrderStatusTypes.INVOICED,
              statusType: StatusType.ORDER,
              colorTheme: 'expired',
              statusCount: data.shippedCount,
              tooltip: this.getTranslatedText(
                'order-tracking.error.expiredcount'
              ),
            },
          ];
          this.isLoadMoreInProgress = false;
        } else {
          this.noData = true;
          this.isLoadMoreInProgress = false;
        }
      });
  }
  getselectedProdLine() {
    this.searchParams.productLinesList = this.selectedProdLine;
    this.setRoute({ productLine: this.selectedProdLine });
  }
  selectedProductLine(e) {
    this.selectedProductLineToBeRemove.push(e);
  }
  clearProductLine(prodLine) {
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.productLine;
    for (let i = 0; i < this.selectedProdLine.length; i++) {
      if (this.selectedProdLine[i] == prodLine) {
        this.index = this.selectedProdLine.indexOf(prodLine);
        if (this.index > -1) {
          this.selectedProdLine.splice(this.index, 1);
          if (this.selectedProdLine.length == 0) {
            this.selectedProdLine = [];
            this.router.navigate([], { queryParams: params });
          } else {
            this.setRoute({ productLine: this.selectedProdLine });
          }
        }
        for (let k = 0; k < this.selectedProductLineToBeRemove.length; k++) {
          if (this.selectedProductLineToBeRemove[k].value == prodLine) {
            this.selectedProductLineToBeRemove[k].selected = false;
          }
        }
      }
    }
    this.searchParams.pageNumber = 0;
  }
  getselectedcustomer() {
    this.searchParams.customerNumber = this.selectedCustomer;
    this.setRoute({ custAcc: this.selectedCustomer });
  }
  getselectedCustAcc(e) {
    this.selectedcustomerToBeRemove.push(e);
  }
  clearCustAcc(customerSelected) {
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.custAcc;
    for (let i = 0; i < this.selectedCustomer.length; i++) {
      if (this.selectedCustomer[i] == customerSelected) {
        this.index = this.selectedCustomer.indexOf(customerSelected);
        if (this.index > -1) {
          this.selectedCustomer.splice(this.index, 1);
          if (this.selectedCustomer.length == 0) {
            this.selectedCustomer = [];
            this.router.navigate([], { queryParams: params });
          } else {
            this.setRoute({ custAcc: this.selectedCustomer });
          }
        }
        for (let k = 0; k < this.selectedcustomerToBeRemove.length; k++) {
          if (this.selectedcustomerToBeRemove[k].value.id == customerSelected) {
            this.selectedcustomerToBeRemove[k].selected = false;
          }
        }
      }
    }
    this.searchParams.pageNumber = 0;
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  displaycolor(status) {
    if (status === 'Order Received') {
      return 'orderrecieved';
    }
    if (status === 'Order In Progress') {
      return 'orderinprogress';
    }
    if (status === 'Blocked') {
      return 'blocked';
    }
    if (status === 'Shipped') {
      return 'shipped';
    }
    if (status === 'Shipped & Invoiced') {
      return 'shippedinvoiced';
    }
    return status;
  }
}
