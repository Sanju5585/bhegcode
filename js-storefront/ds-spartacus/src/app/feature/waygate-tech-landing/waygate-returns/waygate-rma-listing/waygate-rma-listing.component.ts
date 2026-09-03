import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  Product,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { saveAs } from 'file-saver';
import { Actions, ofType } from '@ngrx/effects';
import { take, concatMap, startWith, map, debounceTime } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DateRange } from '@angular/material/datepicker';
import moment from 'moment';
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
import {
  AllProductLineNames,
  AllProductLine,
} from '../../../../shared/enums/availableProductList.enum';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';
import {
  RmaStatusTypes,
  SAP_RMA_AWAITING_PROCESSING_ORDER,
} from '../../../../shared/models/status/rma-status.model';
import {
  RMASearchParams,
  StatusType,
} from '../../../../shared/models/status/status.model';
import { RmaService } from '../../../rma/rma-services/rma.service';
import { RmaTrackingService } from '../../../rma/rma-tracking/rma-tracking.service';
import { RepeatRMAUpdateMessageComponent } from '../../../cart/rma-update-message-cart/repeat-rma-message-cart-dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

const PAGE_SIZE = 50;

@Component({
  selector: 'app-waygate-rma-listing',
  standalone: false,
  templateUrl: './waygate-rma-listing.component.html',
  styleUrl: './waygate-rma-listing.component.scss',
})
export class WaygateRmaListingComponent {
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
    pageSize: 10,
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
    'OrderNO',
    'POInfo',
    'Order Created',
    'Last Updated',
    'Order Status',
    'reOrderBtn',
  ];
  statusFilter = '';
  statusFilterTxt: any = '';
  isLoadMoreInProgress = false;
  full: boolean = true;
  sortBy = 'OrderDsc';
  searchFieldUpdated: boolean = false;
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
  selectedProdLine: any = ' ';
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
  breadcrumbs: any[] = [];
  productLine: any;
  pageSizes = [10, 20, 50, 100];
  startRange = 1;
  totalCount = 0;
  currentPage: number = 1;
  currentPageSize = 10;
  endRange = this.currentPageSize;
  totalPages: number;
  selectedProduct: string | null;
  selectedMonth: number = 12;
  selectedTile: any;

  monthOptions = [
    {
      label: 'waygate-returns.3Months',
      value: 3,
    },
    {
      label: 'waygate-returns.6Months',
      value: 6,
    },
    {
      label: 'waygate-returns.12Months',
      value: 12,
    },
  ];
  rmaTiles = [
    {
      label: 'waygate-returns.allRMA',
      rmaStatus: RmaStatusTypes.TOTAL,
      statusType: StatusType.RMA,
    },
    {
      label: 'waygate-returns.rmaSubmitted',
      rmaStatus: RmaStatusTypes.SUBMITTED,
      statusType: StatusType.RMA,
    },
    {
      label: 'waygate-returns.awaitingGoods',
      rmaStatus: RmaStatusTypes.PROGRESS,
      statusType: StatusType.RMA,
    },
    {
      label: 'waygate-returns.evaluating',
      rmaStatus: RmaStatusTypes.EVALUATING,
      statusType: StatusType.RMA,
    },
    {
      label: 'waygate-returns.processing',
      rmaStatus: RmaStatusTypes.PROCESSING,
      statusType: StatusType.RMA,
    },
    {
      label: 'waygate-returns.inShipping',
      rmaStatus: RmaStatusTypes.SHIPPED,
      statusType: StatusType.RMA,
    },
    {
      label: 'waygate-returns.Completed',
      rmaStatus: RmaStatusTypes.INVOICED,
      statusType: StatusType.RMA,
    },
  ];
  timeout: number;
  searchControl = new FormControl('');

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
    public sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private winRef: WindowRef
  ) {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((data) => {
      this.salesAreaObjectDataList = data?.salesAreaObjectDataList;
    });
    this.dateRange = false;
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
      this.breadcrumbs = [
        {
          name: 'waygate-returns.pageTitle',
          url: `/${this.productLine}/my-returns`,
        },
      ];
      this.selectedProduct = productLine ?? null;
    });
    this.updateLangForOptions(this.breadcrumbs, 'name');
    this.updateLangForOptions(this.monthOptions, 'label');
    this.updateLangForOptions(this.rmaTiles, 'label');
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
      const selectedStatus = this.searchParams.rmaStatus;
      if (selectedStatus) {
        this.selectedTile = this.rmaTiles.find(
          (tile) => tile.rmaStatus.status === selectedStatus
        );
      } else {
        this.selectedTile = this.rmaTiles[0];
      }
      if (params.searchTerm) {
        this.searchControl.setValue(params.searchTerm, { emitEvent: false });
        this.searchParams.searchByValue = this.searchControl.value;
      }
      if (params.productLine) {
        this.selectedProduct = params.productLine;
        this.searchParams.productLinesList =
          params.productLine === ' ' ? null : [params.productLine];
      } else {
        this.selectedProduct = ' ';
        this.searchParams.productLinesList = null;
      }

      // if (params.custAcc) {
      //   this.selectedAcc = params.custAcc;
      //   this.searchParams.customerNumber = this.selectedAcc;
      // }
      // this.selectedTile = RmaStatusTypes.TOTAL;
      this.refreshList(false);
    });
    setTimeout(() => {
      this.monthOptions = [...this.monthOptions];
      this.rmaTiles = [...this.rmaTiles];
    }, 500);

    this.searchControl.valueChanges
      .pipe(debounceTime(1000)) // Delay for 500 milliseconds
      .subscribe((searchValue) => {
        if (searchValue != this.params?.searchTerm) {
          this.modelChange();
        }
      });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
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

  onProductLineChange(event) {
    this.currentPage = 1;
    const selectedValue = event.value;
    this.selectedProduct = selectedValue;
    if (selectedValue === ' ') {
      this.searchParams.productLinesList = null;
    } else {
      this.searchParams.productLinesList = [selectedValue];
    }
    this.setRoute({
      productLine: selectedValue,
      pageNumber: 0,
    });
    this.refreshList(false);
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
              this.getTranslatedText('waygate-returns.issueWhileLoading'),
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
    this.router.navigate([
      '/',
      this.productLine,
      'my-returns',
      element.rmaNumber,
    ]);
  }

  onTileClick(e: StatusTile) {
    this.currentPage = 1;
    this.searchParams.pageNumber = 0;
    this.rmaTrackingService.emitTileStatus.next(e.rmaStatus?.status);
    if (e.rmaStatus.status == 'All RMA') {
      this.statusFilter = '';
      this.statusFilterTxt = '';
      this.searchParams.rmaStatus = null;
      this.setRoute({ status: null, pageNumber: 0 });
    } else {
      this.searchParams.rmaStatus = e.rmaStatus?.status;
      this.setRoute({ status: this.searchParams.rmaStatus, pageNumber: 0 });
      this.statusFilterTxt = e.rmaStatus?.status;
    }
    this.refreshList(false);
  }
  getSearchInput() {
    this.winRef.nativeWindow.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.modelChange(), 700);
  }
  modelChange() {
    this.searchParams.pageNumber = 0;
    const sanitizedTerm = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.searchControl.value),
      REGULAR_PATTERN.alphaNumeric
    );
    this.searchControl.setValue(sanitizedTerm, { emitEvent: false });
    this.searchParams.searchByValue = sanitizedTerm;
    if (sanitizedTerm.trim().length > 0) {
      this.searchFieldUpdated = true;
      this.setRoute({ searchTerm: sanitizedTerm });
    } else {
      this.searchFieldUpdated = false;
      this.searchParams.searchByValue = null;
      this.setRoute({ searchTerm: null });
      this.refreshList(false);
    }
  }

  searchTermChanged() {
    this.searchFieldUpdated = false;
    this.statusFilter = '';
  }

  sort(sortCode) {
    this.currentPage = 1;
    this.setRoute({ sortBy: sortCode, pageNumber: 0 });
  }

  onMonthChange(): void {
    this.currentPage = 1;
    this.setRoute({
      fromDate: moment(new Date())
        .subtract(this.selectedMonth, 'months')
        .format('DD-MM-YYYY'),
      toDate: moment(new Date()).format('DD-MM-YYYY'),
      pageNumber: 0,
    });
  }

  displayStatus(statusCode) {
    if (statusCode === 'Received') {
      return 'Order Received';
    }
    if (statusCode === 'Processing') {
      return 'Order In Progress';
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
      this.getTranslatedText('waygate-returns.issueWhileDownloading'),
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
    if (!('pageNumber' in queryParams)) {
      queryParams.pageNumber = this.currentPage - 1;
    }
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
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
    if (pageNo >= 1 && pageNo <= this.totalPages) {
      this.currentPage = parseInt(pageNo);
      this.setRoute({ pageNumber: this.currentPage - 1 });
    }
  }
  refreshList(refresh) {
    // this.isRefreshedFlag = refresh
    this.searchParams.pageNumber = this.currentPage - 1;
    this.isLoadMoreInProgress = true;
    this.noData = false;
    this.searchParams = Object.assign(this.searchParams, {
      isRefreshedFlag: null,
    });
    this.rmaTrackingService
      .getRefreshOrders(this.searchParams)
      .subscribe((res: any) => {
        this.resData = res;
        if (this.counter === 0) {
          this.productLineData = this.resData?.productLines;
          if (this.productLineData) {
            this.selectedProdLine = [
              {
                label: this.getTranslatedText(
                  'waygate-returns.allProductLines'
                ),
                value: ' ',
              },
              ...this.productLineData.map((line) => ({
                label: line.name,
                value: line.name,
              })),
            ];
            if (!this.selectedProduct) {
              this.selectedProduct = ' ';
              this.searchParams.productLinesList = null;
            }
            if (!this.selectedProduct || this.selectedProduct === '') {
              this.selectedProduct = ' ';
              this.searchParams.productLinesList = null;
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
          this.totalCount = this.resData?.pagination?.totalResults;
          this.startRange =
            this.resData?.pagination?.currentPage *
              this.resData?.pagination?.pageSize +
            1;
          this.endRange = Math.min(
            this.startRange + this.resData?.pagination?.pageSize - 1,
            this.resData?.pagination?.totalResults
          );
          // this.params.isRefreshedFlag = false;
          this.totalPages = this.resData?.pagination?.totalPages;
          this.currentPage = this.resData?.pagination?.currentPage + 1;
          this.currentPageSize = this.resData?.pagination?.pageSize;
          this.isLoadMoreInProgress = false;
        } else {
          this.noData = true;
          this.isLoadMoreInProgress = false;
        }
      });
  }

  // selectedProductLine(e) {
  //   this.selectedProductLineToBeRemove.push(e);
  // }
  // clearProductLine(prodLine) {
  //   this.searchParams.pageNumber = 0;
  //   var snapshot = this.route.snapshot;
  //   const params: any = { ...snapshot.queryParams };
  //   delete params.productLine;
  //   for (let i = 0; i < this.selectedProdLine.length; i++) {
  //     if (this.selectedProdLine[i] == prodLine) {
  //       this.index = this.selectedProdLine.indexOf(prodLine);
  //       if (this.index > -1) {
  //         this.selectedProdLine.splice(this.index, 1);
  //         if (this.selectedProdLine.length == 0) {
  //           this.selectedProdLine = [];
  //           this.router.navigate([], { queryParams: params });
  //         } else {
  //           this.setRoute({ productLine: this.selectedProdLine });
  //         }
  //       }
  //       for (let k = 0; k < this.selectedProductLineToBeRemove.length; k++) {
  //         if (this.selectedProductLineToBeRemove[k].value == prodLine) {
  //           this.selectedProductLineToBeRemove[k].selected = false;
  //         }
  //       }
  //     }
  //   }
  //   this.searchParams.pageNumber = 0;
  // }
  // getselectedcustomer() {
  //   this.searchParams.customerNumber = this.selectedCustomer;
  //   this.setRoute({ custAcc: this.selectedCustomer });
  // }
  // getselectedCustAcc(e) {
  //   this.selectedcustomerToBeRemove.push(e);
  // }
  // clearCustAcc(customerSelected) {
  //   var snapshot = this.route.snapshot;
  //   const params: any = { ...snapshot.queryParams };
  //   delete params.custAcc;
  //   for (let i = 0; i < this.selectedCustomer.length; i++) {
  //     if (this.selectedCustomer[i] == customerSelected) {
  //       this.index = this.selectedCustomer.indexOf(customerSelected);
  //       if (this.index > -1) {
  //         this.selectedCustomer.splice(this.index, 1);
  //         if (this.selectedCustomer.length == 0) {
  //           this.selectedCustomer = [];
  //           this.router.navigate([], { queryParams: params });
  //         } else {
  //           this.setRoute({ custAcc: this.selectedCustomer });
  //         }
  //       }
  //       for (let k = 0; k < this.selectedcustomerToBeRemove.length; k++) {
  //         if (this.selectedcustomerToBeRemove[k].value.id == customerSelected) {
  //           this.selectedcustomerToBeRemove[k].selected = false;
  //         }
  //       }
  //     }
  //   }
  //   this.searchParams.pageNumber = 0;
  // }

  createRMA() {
    this.router.navigate(['/', this.productLine, 'create-rma']);
  }
  reOrderRMA() {
    this.loading = true;
    this.router.navigate(['/rma/cart']);
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
                          'waygate-returns.error.productErrorMessage'
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
                      this.getTranslatedText(
                        'waygate-returns.error.errorMessage'
                      ),
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
            this.getTranslatedText('waygate-returns.error.errorMessage'),
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
              if (URL.indexOf('my-returns') != -1) {
                this.router.navigate([
                  '/',
                  this.productLine,
                  'returns',
                  'cart',
                ]);
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
        this.getTranslatedText('waygate-returns.error.productErrorMessage'),
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
            });
          this.globalMessageService.add(
            this.getTranslatedText('buyCart.DSSuccess'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
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
  // check the "Awaiting Purchase Order status for each product in line items"
  checkProcessingAwaitngPurOder(element) {
    return element?.rmaItemStatusDetails?.some(
      (checkStatus) =>
        checkStatus.rmaStatus ===
        SAP_RMA_AWAITING_PROCESSING_ORDER.AWAITINGPURCHASEORDER
    );
  }
}
