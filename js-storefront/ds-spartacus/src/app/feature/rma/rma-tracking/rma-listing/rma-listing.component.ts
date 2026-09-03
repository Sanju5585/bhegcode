import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { RmaTrackingService } from '../rma-tracking.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  Product,
  TranslationService,
} from '@spartacus/core';
import { SAP_RMA_AWAITING_PROCESSING_ORDER } from '../../../../shared/models/status/rma-status.model';
import { saveAs } from 'file-saver';
import { RmaService } from '../../rma-services/rma.service';
import { Actions, ofType } from '@ngrx/effects';
import { take, concatMap, startWith, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { LaunchDialogService } from '@spartacus/storefront';
import {
  RMASearchParams,
  StatusType,
} from '../../../../shared/models/status/status.model';
import { DateRange } from '@angular/material/datepicker';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { DateFormats } from '../../../../shared/components/date-range-picker/date-range-picker.component';
import { SpinnerOverlayService } from '../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { StatusTile } from '../../../../shared/components/status-tiles/status-tiles.component';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';
import { RmaStatusTypes } from '../../../../shared/models/status/rma-status.model';

const PAGE_SIZE = 50;

@Component({
  standalone: false,
  selector: 'app-rma-listing',
  templateUrl: './rma-listing.component.html',
  styleUrls: ['./rma-listing.component.scss'],
})
export class RmaListingComponent implements OnInit {
  searchParams: RMASearchParams = {
    orderType: 'CP_DET',
    customerAddedFlag: false,
    customerDeletedFlag: false,
    fromDate: null,
    toDate: null,
    rmaStatus: null,
    isRefreshedFlag: null,
    searchByValue: null,
    sortBy: 'sortByrmaCreatedDSC',
    pageSize: 20,
    pageNumber: 0,
    productLinesList: null,
    customerNumber: null,
  };
  @Input() orderNo: any;
  @Input() loading: boolean = false;
  @Input() product: Product;
  tableData;
  showSpinner: boolean = false;
  public toMinDate;
  public fromMaxDate;
  public changeDate: boolean = false;
  public fromMax;
  public noData;
  public dataSource = [];
  rmaTiles: StatusTile[];
  firstStatusType: StatusType;
  fromDate: DateFormats = new DateFormats();
  toDate: DateFormats = new DateFormats();
  public dateRange: boolean;
  searchTerm = '';
  currentUser: any;
  isRefreshedFlag: any;
  warrantyCLaimInformation: any;
  manufacturingYear: any;
  displayedColumns = [
    'Order',
    'Order Status',
    'PO Number',
    'PO Date',
    'Return to loacation',
    'Order Created',
    'Last Updated',
    'reOrderBtn',
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
  showProdLine: boolean = false;
  buttonDirection: boolean = false;
  buttonDirection2: boolean = false;
  selectedAcc: string;
  rmaEntry: RmaEntry;
  completeRmaNumberInput: boolean = false;
  public sortConditions: any = [
    // { name: 'Ascending- PO Date' },
    // { name: 'Descending- PO Date' },
    { name: 'Ascending- Order Created' },
    { name: 'Descending- Order Created' },
    { name: 'Ascending- Last Updated' },
    { name: 'Descending- Last Updated' },
  ];
  selectedProdLine: any = [];
  custAccUpdated: boolean;
  productLines: any = [];
  selectedCustomer: any = [];
  // selectedAcc: string;
  selectedProductLineToBeRemove: any = [];
  selectedcustomerToBeRemove: any = [];
  index: any;
  customerSelected: string;
  orderNumber: any;
  customerAccData: any;
  counter: number = 0;
  productLineData: any;
  productLine: string;
  currentlyLoading: boolean = false;
  rmaSalesAreaId;
  selectedSalesAreaId: any = '';
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
  userType;

  constructor(
    private rmaService: RmaService,
    private activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    public datepipe: DatePipe,
    public rmaTrackingService: RmaTrackingService,
    public router: Router,
    private route: ActivatedRoute,
    private launchDialogService: LaunchDialogService,
    protected globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    private spinnerOverlayService: SpinnerOverlayService,
    private actions$: Actions,
    private customerAccService: CustomerAccountService,
    private authService: AuthService,
    private productCatService: ProductCatelogService,
    public sanitizer: DomSanitizer
  ) {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((data) => {
      this.salesAreaObjectDataList = data?.salesAreaObjectDataList;
    });
    this.dateRange = false;
    this.rmaTiles = [
      {
        rmaStatus: RmaStatusTypes.TOTAL,
        statusType: StatusType.RMA,
      },
      {
        rmaStatus: RmaStatusTypes.SUBMITTED,
        statusType: StatusType.RMA,
        colorTheme: 'submitt',
        tooltip: this.getTranslatedText('rma-tracking.atleast1notprogressed'),
      },
      {
        rmaStatus: RmaStatusTypes.PROGRESS,
        statusType: StatusType.RMA,
        colorTheme: 'order-blocked',
        tooltip: this.getTranslatedText('rma-tracking.atleast1notShipped'),
      },
      {
        rmaStatus: RmaStatusTypes.EVALUATING,
        statusType: StatusType.RMA,
        colorTheme: 'pending',
        tooltip: this.getTranslatedText('rma-tracking.atleast1notprocessed'),
      },
      {
        rmaStatus: RmaStatusTypes.PROCESSING,
        statusType: StatusType.RMA,
        colorTheme: 'process',
        tooltip: this.getTranslatedText('rma-tracking.atleast1notshipped'),
      },
      {
        rmaStatus: RmaStatusTypes.SHIPPED,
        statusType: StatusType.RMA,
        colorTheme: 'ship',
        tooltip: this.getTranslatedText('rma-tracking.itemsBeenInvoiced'),
      },
      {
        rmaStatus: RmaStatusTypes.INVOICED,
        statusType: StatusType.RMA,
        colorTheme: 'closed',
        tooltip: this.getTranslatedText('rma-tracking.itemsHaveShipped'),
      },
    ];
  }
  cart$: Observable<any> = this.activeCartFacade.getActive();
  quantity$: Observable<number> = this.activeCartFacade.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  ngOnInit(): void {
    // this.tableData = this.route.data.pipe(map((data) => data.filter));

    this.rmaTrackingService.emitRmaDetail.subscribe((res) => {
      this.orderNumber = res;
      // let custDetail = this.orderDetail.soldTo.split(' ')
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('rma-tracking.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.fromMax = new Date();
    this.fromMaxDate = this.fromMax.setMonth(this.fromMax.getMonth() - 12);
    this.toMinDate = new Date();
    this.rmaTrackingService.emitTileStatus.next('All RMA');
    this.dataSource = [];
    this.firstStatusType = StatusType.RMA;
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
        this.rmaTrackingService.emitTileStatus.next(params.status);
        this.searchParams.rmaStatus = params.status;
      }
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
        this.searchParams.searchByValue = this.searchTerm;
      }
      // if (params.productLine) {
      //   this.selectedProdLine = params.productLine
      //   this.searchParams.productLinesList = this.selectedProdLine
      // }
      // if (params.custAcc) {
      //   this.selectedAcc = params.custAcc;
      //   this.searchParams.customerNumber = this.selectedAcc;
      // }
      this.refreshList(false);
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  loadMoreOrders() {
    // on reaching bottom load previous 6 month order
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
      // check if current page is equal to the last page then don't make a call
      this.rmaTrackingService
        .getRefreshOrders(this.searchParams)
        .subscribe((res: any) => {
          // var res;
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
            if (
              res.rmaHeaderStatusDetails &&
              res.rmaHeaderStatusDetails.length
            ) {
              this.tableData = this.tableData.concat(
                res.rmaHeaderStatusDetails
              );
              //this.tableData = [...this.tableData, res.orderData]
            }
            this.currentlyLoading = false;
          } else {
            this.isLoadMoreInProgress = false;
            this.currentlyLoading = false;
            this.globalMessageService.add(
              this.getTranslatedText('rma-tracking.issueWhileLoading'),
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
    localStorage.setItem('lineItemRmaNumber', element.rmaNumber);
    // this.router.navigate(["/order-tracking/detail",element]);
    this.rmaService.rmaNumber = element.rmaNumber;
    this.rmaTrackingService.emitRmaDetail.next(element);
    this.router.navigate(['rma-details', element.rmaNumber]);
  }
  onTileClick(e: StatusTile) {
    this.searchParams.pageNumber = 0;
    this.rmaTrackingService.emitTileStatus.next(e.rmaStatus?.status);
    if (e.rmaStatus.status == 'All RMA') {
      this.statusFilter = '';
      this.statusFilterTxt = '';
      this.searchParams.rmaStatus = null;
      this.setRoute({ status: null });
    } else {
      this.searchParams.rmaStatus = e.rmaStatus?.status;
      this.setRoute({ status: this.searchParams.rmaStatus });
      this.statusFilterTxt = e.rmaStatus?.status;
    }
    // this.refreshList(false);
  }

  getDateRange(e: any) {
    this.searchParams.pageNumber = 0;
    this.fromDate = e.from;
    this.toDate = e.to;
    if (this.toDate < this.fromDate) {
      this.dateRange = false;
    } else {
      this.dateRange = true;
    }
    (this.searchParams.fromDate = this.datepipe.transform(
      this.fromDate.date,
      'dd-MM-yyyy'
    )),
      (this.searchParams.toDate = this.datepipe.transform(
        this.toDate.date,
        'dd-MM-yyyy'
      )),
      this.setRoute({
        fromDate: this.datepipe.transform(this.fromDate.date, 'dd-MM-yyyy'),
        toDate: this.datepipe.transform(this.toDate.date, 'dd-MM-yyyy'),
      });
  }

  clearDateRange() {
    this.searchParams.pageNumber = 0;
    this.changeDate = true;
    //this.refreshDate=true;
    this.fromMax = new Date();
    this.fromMaxDate = this.fromMax.setMonth(this.fromMax.getMonth() - 12);
    this.toMinDate = new Date();

    this.fromDate = new DateFormats();
    this.toDate = new DateFormats();
    // document.querySelector('label .date-range-text').innerHTML =
    //   'Select date range';
    this.dateRange = false;
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.fromDate;
    delete params.toDate;
    this.router.navigate([], { queryParams: params });
    // this.refreshDate=false;
    // this.refreshList(false);
  }

  clearSearchTerm() {
    this.searchParams.pageNumber = 0;
    this.searchTerm = '';
    this.searchParams.searchByValue = '';
    this.searchFieldUpdated = false;
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.searchTerm;
    this.router.navigate([], { queryParams: params });
    // this.refreshList(false);
  }
  clearStatus() {
    this.searchParams.pageNumber = 0;
    this.statusFilter = '';
    this.statusFilterTxt = '';
    // this.refreshList(false);
    this.rmaTrackingService.emitTileStatus.next('All RMA');
    this.searchParams.searchByValue = '';
    var snapshot = this.route.snapshot;
    const params: any = { ...snapshot.queryParams };
    delete params.status;
    this.router.navigate([], { queryParams: params });
  }
  clearAll() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.statusFilterTxt = '';
    this.searchFieldUpdated = false;
    this.selectedProdLine = [];
    this.selectedCustomer = [];
    this.custAccUpdated = false;
    (this.searchParams.orderType = 'CP_DET'),
      (this.searchParams.customerAddedFlag = false),
      (this.searchParams.customerDeletedFlag = false),
      (this.searchParams.fromDate = null),
      (this.searchParams.toDate = null),
      (this.searchParams.rmaStatus = null),
      (this.searchParams.isRefreshedFlag = null),
      (this.searchParams.searchByValue = null),
      (this.searchParams.sortBy = 'sortByrmaCreatedDSC'),
      (this.searchParams.pageSize = 20),
      (this.searchParams.pageNumber = 0),
      (this.searchParams.productLinesList = null),
      (this.searchParams.customerNumber = null),
      // this.sortBy = null;
      this.clearDateRange();
    this.router.navigate(['rma-tracking']);
    this.rmaTrackingService.emitTileStatus.next('All RMA');
    this.refreshList(false);
  }

  modelChange() {
    this.searchParams.pageNumber = 0;
    if (this.searchTerm.trim().length > 0) {
      this.searchFieldUpdated = true;
      this.searchTerm = testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, this.searchTerm),
        REGULAR_PATTERN.alphaNumeric
      );
      // this.refreshList(false);
      this.searchParams.searchByValue = this.searchTerm;
      this.setRoute({ searchTerm: this.searchTerm });
    }
  }

  searchTermChanged() {
    this.searchFieldUpdated = false;
    this.statusFilter = '';
  }
  // decreasing(sortByDsc) {
  //   this.sortBy = sortByDsc;
  //   // this.refreshList(false);
  //   this.setRoute({ sortBy: sortByDsc });
  // }
  orderAlignment(event) {
    if (event.$ngOptionLabel == 'Ascending- PO Date') {
      this.setSortBy('sortByrmaPoDSC');
    } else if (event.$ngOptionLabel == 'Descending- PO Date') {
      this.setSortBy('sortByrmaPOASC');
    } else if (event.$ngOptionLabel == 'Ascending- Order Created') {
      this.setSortBy('sortByrmaCreatedASC');
    } else if (event.$ngOptionLabel == 'Descending- Order Created') {
      this.setSortBy('sortByrmaCreatedDSC');
    } else if (event.$ngOptionLabel == 'Ascending- Last Updated') {
      this.setSortBy('sortBylastUpdatedASC');
    } else if (event.$ngOptionLabel == 'reOrderBtn') {
      this.setSortBy('sortBylastUpdatedBtnASC');
    } else {
      this.setSortBy('sortBylastUpdatedDSC');
    }
  }
  setSortBy(sortName) {
    this.sortBy = sortName;
    // this.refreshList(false);
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
    this.rmaTrackingService.getDetailsinXLSFormat(this.searchParams).subscribe(
      (res) => {
        if (res !== null && res !== undefined) {
          const currentDate = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
          let fileName = 'RmaList_' + currentDate;
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
      this.getTranslatedText('rma-tracking.issueWhileDownloading'),
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
    this.searchParams.pageNumber = 0;
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }
  refreshList(refresh) {
    // this.isRefreshedFlag = refresh
    this.searchParams.pageNumber = 0;
    this.isLoadMoreInProgress = true;
    this.noData = false;
    this.searchParams = Object.assign(this.searchParams, {
      isRefreshedFlag: null,
    });
    this.rmaTrackingService
      .getRefreshOrders(this.searchParams)
      .subscribe((res: any) => {
        this.resData = res;
        if (this.counter == 0) {
          this.productLineData = this.resData?.productLines;
          if (this.productLineData) {
            for (let i = 0; i < this.resData.productLines.length; i++) {
              this.productLines.push(this.resData.productLines[i].name);
            }
            this.customerAccData = this.resData?.customerAccounts.map((x) => {
              return { name: x.name, id: x.number };
            });
            this.counter++;
          }
        }
        this.tableData = res.rmaHeaderStatusDetails;
        if (res.rmaHeaderStatusDetails?.length > 0) {
          const data = res.rmaStatusCount;
          if (res.pagination !== undefined) {
            this.currentPage = res.pagination.currentPage;
            this.totalPages = res.pagination.totalPages;
            this.totalOrders_excel = res.pagination.totalResults;
          } else {
            this.currentPage = 0;
            this.totalPages = 0;
            this.totalOrders_excel = 0;
          }
          this.rmaTiles = [
            {
              rmaStatus: RmaStatusTypes.TOTAL,
              statusType: StatusType.RMA,
              statusCount: data.allRmaCount,
            },
            {
              rmaStatus: RmaStatusTypes.SUBMITTED,
              statusType: StatusType.RMA,
              colorTheme: 'pending',
              statusCount: data.rmaSubmittedCount,
              tooltip: this.getTranslatedText(
                'rma-tracking.atleast1notprogressed'
              ),
            },
            {
              rmaStatus: RmaStatusTypes.PROGRESS,
              statusType: StatusType.RMA,
              colorTheme: 'awaiting',
              statusCount: data.awaitingGoodsCount,
              tooltip: this.getTranslatedText(
                'rma-tracking.atleast1notShipped'
              ),
            },
            {
              rmaStatus: RmaStatusTypes.EVALUATING,
              statusType: StatusType.RMA,
              colorTheme: 'evaluating',
              statusCount: data.evaluatingCount,
              tooltip: this.getTranslatedText(
                'rma-tracking.atleast1notprocessed'
              ),
            },
            {
              rmaStatus: RmaStatusTypes.PROCESSING,
              statusType: StatusType.RMA,
              colorTheme: 'process',
              statusCount: data.processingCount,
              tooltip: this.getTranslatedText(
                'rma-tracking.atleast1notshipped'
              ),
            },
            {
              rmaStatus: RmaStatusTypes.SHIPPED,
              statusType: StatusType.RMA,
              colorTheme: 'shipping',
              statusCount: data.inShippingCount,
              tooltip: this.getTranslatedText('rma-tracking.itemsBeenInvoiced'),
            },
            {
              rmaStatus: RmaStatusTypes.INVOICED,
              statusType: StatusType.RMA,
              colorTheme: 'invoice',
              statusCount: data.completeCount,
              tooltip: this.getTranslatedText('rma-tracking.itemsHaveShipped'),
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
    this.searchParams.pageNumber = 0;
    this.searchParams.productLinesList = this.selectedProdLine;
    this.setRoute({ productLine: this.selectedProdLine });
  }
  selectedProductLine(e) {
    this.selectedProductLineToBeRemove.push(e);
  }
  clearProductLine(prodLine) {
    this.searchParams.pageNumber = 0;
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

  createRMA() {
    this.router.navigate([`/${this.productLine}/returns/cart`]);
  }
  reOrderRMA() {
    this.loading = true;
    this.router.navigate([`/${this.productLine}/returns/cart`]);
  }
  displaycolor(status) {
    if (status === 'RMA SUBMITTED') {
      return 'rmasubmitted';
    }
    if (status === 'IN SHIPPING') {
      return 'inshipping';
    }
    if (status === 'AWAITING GOODS') {
      return 'Awaiting';
    }
    if (status === 'EVALUATING') {
      return 'evaluating';
    }
    if (status === 'PROCESSING') {
      return 'processing';
    }
    if (status === 'COMPLETE') {
      return 'complete';
    }
    return status;
  }

  //**Repeat RMA LIne Item Start**//
  selectRepeatRma(element) {
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          if (this.userType === OCC_USER_ID_CURRENT) {
            this.rmaCartId = activeCart.code;
          } else if (this.userType === OCC_USER_ID_ANONYMOUS) {
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
                .createReorderRmaEntry(OCC_USER_ID_CURRENT, element.rmaNumber)
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
      .createReorderRmaEntry(OCC_USER_ID_CURRENT, element.rmaNumber)
      .subscribe(
        (success: any) => {
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
    //this.spinnerOverlayService.show();
    this.rmaService.rmaNumber = element.rmaNumber;
    this.productErrorCode = success?.productErrorCodes;
    this.rmaSalesAreaId = localStorage.getItem('rmaSalesAreaId');

    if (
      success &&
      element.salesOrg == this.rmaSalesAreaId &&
      this.productErrorCode.length === 0
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
              if (URL.indexOf('rma-tracking') != -1) {
                this.router.navigate(['rma', 'cart']);
              }
            });
        }
      });
      for (let i = 0; i < element.rmaItemStatusDetails.length; i++) {
        this.warrantyCLaimInformation =
          element.rmaItemStatusDetails[i].warrantyCLaimInformation;
        this.manufacturingYear =
          element.rmaItemStatusDetails[i].manufacturingYear;
      }
      this.rmaService.warrantyCLaimInformation = this.warrantyCLaimInformation;
      this.rmaService.manufacturingYear = this.manufacturingYear;
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
    this.rmaDsSwitchCart = true;
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
    const componentData = {
      productAccessData: {
        salesAreas: [salesArea],
      },
    };
    const switchCustomerModal = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchCustomerModal) {
      switchCustomerModal.pipe(take(1)).subscribe((value) => {
        if (value != 'close' || value != 'cancel') {
          const salesArea =
            typeof value == 'string'
              ? value
              : value?.instance?.selectedSalesAreaId;
          this.customerAccService
            .updateSalesArea(salesArea, salesArea.split('_')[0])
            .subscribe((res: any) => {
              this.customerAccService.rmaDsSwitchCartFlag =
                this.rmaDsSwitchCart;
              this.customerAccService.updateAvaiableProductLine(
                res?.visibleCategories || []
              );
              this.customerAccService.refreshPostCustomAccSwitch();
              this.globalMessageService.add(
                this.getTranslatedText('buyCart.DSSuccess'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION
              );
            });
        }
      });
    }
  }

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
    const switchCartModal = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchCartModal) {
      switchCartModal.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.repeatRMAEntry(element);
        }
      });
    }
  }
  //**Repeat RMA LIne Item End**//

  openMessageModal(currentCartType, switchToCartType, cartId, element, cart) {
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const repeatRMAUpdateModal = this.launchDialogService.openDialog(
      DS_DIALOG.REPEAT_RMA_UPDATE_MESSAGE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (repeatRMAUpdateModal) {
      repeatRMAUpdateModal.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.repeatRMASuccess(element, cart);
        } else {
          this.spinnerOverlayService.hide();
        }
      });
    }
  }

  // check the "Awaiting Purchase Order status for each product in line items"
  checkProcessingAwaitngPurOder(element) {
    return element?.rmaItemStatusDetails?.some(
      (checkStatus) =>
        checkStatus.rmaStatus ===
        SAP_RMA_AWAITING_PROCESSING_ORDER.AWAITINGPURCHASEORDER
    );
  }
}
