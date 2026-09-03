import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { SiteEquipmentsService } from '../site-equipments.service';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Subscription } from 'rxjs';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import moment from 'moment';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';
import { ProductReturnService } from '../../../core/product-catalog/services/product-return.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { DateFormats } from '../../../shared/components/date-range-picker/date-range-picker.component';
import { StatusTile } from '../../../shared/components/status-tiles/status-tiles.component';
import {
  EquipmentStatusTypes,
  EquipmentStatusNameDisplay,
} from '../../../shared/models/status/my-equipment-status.model';
import { StatusType } from '../../../shared/models/status/status.model';
import { MainService } from '../../../shared/services/main.service';

export interface PeriodicElement {
  position: number;
  serialNumber: string;
  partNumber: number;
  partName: string;
  endCustomer: string;
  siteLocation: string;
  lastDate: string;
}

@Component({
  standalone: false,
  selector: 'app-my-equipments',
  templateUrl: './my-equipments.component.html',
  styleUrls: ['./my-equipments.component.scss'],
})
export class MyEquipmentsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'select',
    'serialNumber',
    'partNumber',
    'partName',
    'endCustomer',
    'location',
    'lastServiceDate',
    'calButton',
    'quickMenu',
  ];
  selection = new SelectionModel<PeriodicElement>(true, []);

  watchList;
  tableData: any;
  productFamilyResponse: any;
  probeListResponse: any;
  productList: any;
  public toMinDate;
  public fromMaxDate;
  public changeDate: boolean = false;
  public fromMax;
  public fromMinDate;
  customDateLabel;
  endCustomersResponse: any;
  public noRecordsFound: boolean = false;
  melPageCountData = {};

  public defaultFromDate: Date = new Date();
  public defaultToDate: Date = new Date();

  eqStatusTiles: StatusTile[];
  firstStatusType: StatusType;
  fromDate: DateFormats = new DateFormats();
  toDate: DateFormats = new DateFormats();
  public dateRange: boolean;
  public dataSource: any;
  probeSerialNumber: number;
  probeType: string;

  public arrSelEqList: any = [];
  public showArchiveModal: boolean = false;
  statusFilter = '';
  statusFilterTxt: any = '';
  searchTerm = '';
  public searchParams;

  params: { searchTerm: any; pageSize: number };
  selectedProdLine: any = [];
  custAccUpdated: boolean;
  productLines: any = [];
  selectedAcc: string;
  endCustomerRefresh: boolean;
  endCustomerName: string;
  fromDateFormatted: any;
  toDateFormatted: any;
  itemsInWatchlist: any;
  itemsInWatchListLbl: string;
  equipmentStatusLabel: string;
  productTypeForm = new FormControl();
  productLinesClear: boolean = false;
  mulitplEqSelection: any = [[]];
  currentlyLoading: boolean = false;
  racordTableList: boolean = false;
  showSpinner: boolean = false;
  index: any;
  selectedProductLineToBeRemove: any = [];
  displayProductLineSelected = [];
  productFamilyDisplay = [];
  private createRmaSubscripton: Subscription;
  public isStickyHeader: boolean;
  public isShown: boolean = false;
  full: boolean = true;
  itemsInWatchlistOption: boolean = false;
  loadMoreLoader: boolean = false;
  groupByEquipmentList = [];
  defaultAccordionState = false;
  groupByContainer = false;
  dateRangeFlag = true;
  monthsDiff: any;
  serialFlag;
  userDetails;
  productLine: string;
  showCustomerFiles: boolean = false;
  @ViewChild('equipmentSwitchCustomer')
  equipmentSwitchCustomerElement: ElementRef<any>;
  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute,
    public eqService: SiteEquipmentsService,
    private translate: TranslationService,
    protected globalMessageService: GlobalMessageService,
    private breadCrumbService: BreadcrumbService,
    private returnProdService: ProductReturnService,
    private multiCartFacade: MultiCartFacade,
    private mainService: MainService,
    protected launchDialogService: LaunchDialogService,
    private customerAccService: CustomerAccountService,
    private userAccountFacade: UserAccountFacade,
    public sanitizer: DomSanitizer
  ) {
    this.searchParams = {
      MANorMELflag: 'CP_ALL',
      fromDate: '',
      toDate: '',
      searchBy: '',
      filterBy: 'pinnedItems',
      pageNumber: 0,
      pageSize: 50,
      pageIndex: 10,
      isSearchDone: false,
      endCustomerID: '',
      productLinesSelected: [],
      refreshFlag: true,
      itemsInWatchlist: '',
      groupBy: '',
    };
    this.searchParams.productLinesSelected = [];
    this.endCustomerRefresh = true;
    this.eqStatusTiles = [
      {
        equipmentStatus: EquipmentStatusTypes.pinnedItems,
        statusType: StatusType.EQUIPMENT,
      },
      {
        equipmentStatus: EquipmentStatusTypes.itemsDueServiceinQuarter,
        statusType: StatusType.EQUIPMENT,
      },
      {
        equipmentStatus: EquipmentStatusTypes.pendingRMA,
        statusType: StatusType.EQUIPMENT,
      },
      {
        equipmentStatus: EquipmentStatusTypes.totalItems,
        statusType: StatusType.EQUIPMENT,
      },
      {
        equipmentStatus: EquipmentStatusTypes.archivedItems,
        statusType: StatusType.EQUIPMENT,
      },
    ];
  }
  propsProducts: any;
  /*propsProducts = {
    itemGroups: [
      {
        items: [],
      },
    ],
  }*/

  endCustomers = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  groupBy = {
    itemGroups: [
      {
        items: [
          {
            label: 'mySiteEquipment.noGrouping',
            value: 'default',
          },
          {
            label: 'mySiteEquipment.partName',
            value: 'product',
          },
          {
            label: 'mySiteEquipment.endCustomer',
            value: 'endCustomer',
          },
        ],
      },
    ],
  };

  sortBy = {
    itemGroups: [
      {
        items: [
          {
            label: 'mySiteEquipment.serviceDueDate',
            value: 'sortByServiceDue',
          },
          {
            label: 'mySiteEquipment.lastServiceDate',
            value: 'sortByLastUpdated',
          },
        ],
      },
    ],
  };

  watchListOption = {
    itemGroups: [
      {
        items: [
          {
            label: 'mySiteEquipment.itemsNOtINWatchlist',
            value: 'false',
          },
          {
            label: 'mySiteEquipment.itemsInWatchlist',
            value: 'true',
          },
        ],
      },
    ],
  };
  ngOnDestroy(): void {
    this.createRmaSubscripton?.unsubscribe();
  }

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('mySiteEquipment.myEquipment')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadCrumbs([
          {
            label: res,
            link: '/my-equipments',
          },
        ])
      );
    this.translate
      .translate('mySiteEquipment.mySavedEquipment')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.translate
      .translate('mySiteEquipment.lastModified')
      .subscribe((res: string) => (this.customDateLabel = res));

    let productList = [];
    this.watchList = false;
    this.eqService.melFilters.refreshFlag = true;
    this.eqService.melFilters.pageNumber = 0;
    this.eqService.totalEquipmentCount = 0;
    this.eqService.totalEquipmentData = [];
    this.searchParams.filterBy = sessionStorage.getItem('filterBy')
      ? sessionStorage.getItem('filterBy')
      : this.searchParams.filterBy;
    this.eqService.equipmentTileStatus.next(
      sessionStorage.getItem('filterBy')
        ? sessionStorage.getItem('filterBy')
        : this.searchParams.filterBy
    );
    this.refreshEquipmentList(this.searchParams, true, false);
    this.firstStatusType = StatusType.EQUIPMENT;
    this.dateRangeDisplay();
    this.eqService.getProductfamily().subscribe((res) => {
      this.productFamilyResponse = res;
      if (res) {
        this.propsProducts = this.productFamilyResponse.map((x) => {
          return { name: x.attributeValue, id: x.attributeId };
        });
      }
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });

    // To check private folder access
    this.userAccountFacade.get().subscribe((res: any) => {
      this.userDetails = res;
      if (res?.isPrivateFolderExists) {
        this.showCustomerFiles = this.userDetails?.isPrivateFolderExists;
      } else {
        this.showCustomerFiles = false;
      }
    });
    this.groupBy.itemGroups.forEach((group) => {
      this.updateLangForOptions(group.items, 'label');
    });
    this.sortBy.itemGroups.forEach((group) => {
      this.updateLangForOptions(group.items, 'label');
    });
    this.watchListOption.itemGroups.forEach((group) => {
      this.updateLangForOptions(group.items, 'label');
    });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  dateRangeDisplay() {
    if (
      this.searchParams.filterBy == 'pinnedItems' ||
      this.searchParams.filterBy == 'itemsDueServiceinQuarter' ||
      this.searchParams.filterBy == 'pendingRMA'
    ) {
      this.fromMax = new Date();
      this.fromMaxDate = this.fromMax;
      this.fromMinDate = this.fromMax.setMonth(this.fromMax.getMonth());
      this.toMinDate = new Date();
      this.dateRangeFlag = true;
    } else {
      this.fromMax = new Date();
      this.fromMaxDate = this.fromMax.setMonth(this.fromMax.getMonth() - 36);
      this.toMinDate = new Date();
      this.dateRangeFlag = false;
    }
  }
  refreshEquipmentList(filters, loadingFlag, dataListFlag) {
    this.racordTableList = dataListFlag;
    this.currentlyLoading = loadingFlag;

    let endCustomerList = [];
    this.eqService.getEquipmentList(filters).subscribe(
      (res: any) => {
        this.melPageCountData = res.melPageCountData;
        this.endCustomersResponse = res;
        if (res) {
          this.currentlyLoading = false;
          this.loadMoreLoader = false;
          this.dataSource = res.equipmentData;
          this.groupByContainer = true;
          this.groupByEquipmentList = res.groupByEquipmentList;
          this.noRecordsFound = true ? this.dataSource.length == 0 : false;
          this.racordTableList = true ? this.dataSource.length > 0 : false;
          if (this.endCustomerRefresh == true) {
            let keys = ['endCustomerName', 'endCustomer'];
            let filteredValues = this.dataSource.filter(
              (
                (s) => (o) =>
                  ((k) => !s.has(k) && s.add(k))(
                    keys.map((k) => o[k]).join('|')
                  )
              )(new Set())
            );
            filteredValues.forEach((customers) => {
              endCustomerList.push({
                label: customers.endCustomerName,
                value: customers.endCustomer,
              });
            });
            this.endCustomers = {
              itemGroups: [
                {
                  items: endCustomerList,
                },
              ],
            };
          }
        } else {
          this.racordTableList = false;
          this.currentlyLoading = false;
          this.noRecordsFound = true;
        }
        if (this.dataSource) {
          this.eqStatusTiles = [
            {
              equipmentStatus: EquipmentStatusTypes.pinnedItems,
              statusType: StatusType.EQUIPMENT,
              statusCount: res.melPageCountData.pinnedItems,
              tooltip: this.getTranslatedText(
                'mySiteEquipment.watchListToolitp'
              ),
            },
            {
              equipmentStatus: EquipmentStatusTypes.itemsDueServiceinQuarter,
              statusType: StatusType.EQUIPMENT,
              statusCount: res.melPageCountData.itemsDueServiceinQuarter,
              tooltip: this.getTranslatedText(
                'mySiteEquipment.serviceDueToolip'
              ),
            },
            {
              equipmentStatus: EquipmentStatusTypes.pendingRMA,
              statusType: StatusType.EQUIPMENT,
              statusCount: res.melPageCountData.rmaItems,
              tooltip: this.getTranslatedText('mySiteEquipment.pendingRMA'),
            },
            {
              equipmentStatus: EquipmentStatusTypes.totalItems,
              statusType: StatusType.EQUIPMENT,
              statusCount: res.melPageCountData.totalItems,
              tooltip: this.getTranslatedText('mySiteEquipment.allItemsToolip'),
            },
            {
              equipmentStatus: EquipmentStatusTypes.archivedItems,
              statusType: StatusType.EQUIPMENT,
              statusCount: res.melPageCountData.archivedItems,
              tooltip: this.getTranslatedText(
                'mySiteEquipment.archivedItemsToolip'
              ),
            },
          ];
        }
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('mySiteEquipment.failedToLoadList'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  addNewEquipmentData() {
    this.router.navigate(['/add-equipment-to-watchlist']);
  }

  getDateRange(e: any) {
    this.fromDate = e.from;

    this.toDate = e.to;
    if (this.toDate < this.fromDate) {
      this.dateRange = false;
    } else {
      this.dateRange = true;
    }
    (this.searchParams.fromDate = this.datepipe.transform(
      this.fromDate.date,
      'yyyy-MM-dd'
    )),
      (this.searchParams.toDate = this.datepipe.transform(
        this.toDate.date,
        'yyyy-MM-dd'
      ));

    this.fromDateFormatted = this.datepipe.transform(
      this.fromDate.date,
      'yyyy-MM-dd'
    );
    this.toDateFormatted = this.datepipe.transform(
      this.toDate.date,
      'yyyy-MM-dd'
    );
    this.fromMinDate = this.fromDateFormatted;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  openEquipmentDetails(partNumber, serialNumber, customerNumber) {
    this.router.navigate(['/equipment-details'], {
      queryParams: {
        partNumber: partNumber,
        serialNumber: serialNumber,
        customer: customerNumber,
      },
    });
  }

  downloadCalibrationPDF(serialNumber, probeType) {
    let timestamp = new Date().getTime();
    this.serialFlag = serialNumber;
    this.eqService.downloadCalibrationPDF(serialNumber, probeType).subscribe(
      (res: Blob) => {
        if (res !== null && res !== undefined) {
          this.serialFlag = '';
          const blob = new Blob([res], { type: 'application/pdf' });
          const file = new File(
            [blob],
            'CalibrationData' + timestamp + '.pdf',
            {
              type: 'application/pdf',
            }
          );
          var fileURL = window.URL.createObjectURL(file);
          window.open(fileURL, '_blank');
        } else {
          this.serialFlag = '';
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      },
      (error) => {
        this.serialFlag = '';
        this.globalMessageService.add(
          this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  onTileClick(e: StatusTile) {
    this.currentlyLoading = true;
    this.noRecordsFound = false;
    this.loadMoreLoader = false;
    this.groupByContainer = false;
    this.searchParams.pageSize = 50;
    this.mulitplEqSelection[0] = [];
    this.eqService.equipmentTileStatus.next(e.equipmentStatus?.status);
    this.searchParams.status = e.orderStatus?.status;
    if (e.equipmentStatus?.status == 'pinnedItems') {
      this.searchParams.filterBy = 'pinnedItems';
      this.equipmentStatusLabel = EquipmentStatusNameDisplay.pinnedItems;
      this.itemsInWatchlistOption = false;
      this.dateRangeDisplay();
    } else if (e.equipmentStatus?.status == 'itemsDueServiceinQuarter') {
      this.searchParams.filterBy = 'itemsDueServiceinQuarter';
      this.equipmentStatusLabel =
        EquipmentStatusNameDisplay.itemsDueServiceinQuarter;
      this.itemsInWatchlistOption = true;
      this.dateRangeDisplay();
    } else if (e.equipmentStatus?.status == 'pendingRMA') {
      this.searchParams.filterBy = 'pendingRMA';
      this.equipmentStatusLabel = EquipmentStatusNameDisplay.pendingRMA;
      this.itemsInWatchlistOption = true;
    } else if (e.equipmentStatus?.status == 'totalItems') {
      this.searchParams.filterBy = 'totalItems';
      this.equipmentStatusLabel = EquipmentStatusNameDisplay.totalItems;
      this.itemsInWatchlistOption = true;
      this.dateRangeDisplay();
    } else if (e.equipmentStatus?.status == 'archivedItems') {
      this.searchParams.filterBy = 'archivedItems';
      this.equipmentStatusLabel = EquipmentStatusNameDisplay.archivedItems;
      this.itemsInWatchlistOption = false;
      this.dateRangeDisplay();
    } else {
      delete this.searchParams.filterBy;
    }
    sessionStorage.setItem('filterBy', this.searchParams.filterBy);
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  getProductFamilySelect(event) {
    this.noRecordsFound = false;
    this.productLinesClear = true;
    for (let i = 0; i < event.detail.length; i++) {
      const index = this.searchParams.productLinesSelected.indexOf(
        event.detail[i].label
      );
      const index1 = this.productFamilyDisplay.indexOf({
        label: event.detail[i].label,
        value: event.detail[i].value,
      });
      if (index > -1) {
        this.searchParams.productLinesSelected.splice(index, 1);
        this.productFamilyDisplay.splice(index1, 1);
      } else {
        this.searchParams.productLinesSelected.push(event.detail[i].label);
        this.productFamilyDisplay.push({
          label: event.detail[i].label,
          value: event.detail[i].value,
        });
      }
    }
    this.endCustomerRefresh = true;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  clearProductLine(prodLine, productValue) {
    for (let i = 0; i < this.searchParams.productLinesSelected.length; i++) {
      if (this.searchParams.productLinesSelected[i] == prodLine) {
        this.index = this.searchParams.productLinesSelected.indexOf(prodLine);
        if (this.index > -1) {
          this.searchParams.productLinesSelected.splice(this.index, 1);
          this.productFamilyDisplay.splice(this.index, 1);
          if (this.searchParams.productLinesSelected.length == 0) {
            this.searchParams.productLinesSelected = [];
            this.productFamilyDisplay = [];
          }
        }
      }
    }
    let getProdValElement = document.querySelector(
      '[data-key="' + productValue + '"]'
    );
    let getCheckElement = getProdValElement.querySelector('.bh-checkbox');
    getCheckElement.removeAttribute('checked');
    getProdValElement.classList.remove('selected');
    this.endCustomerRefresh = true;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  getCustomerID(event) {
    this.searchParams.endCustomerID = event.detail.value;
    this.endCustomerName = event.detail.label;
    this.endCustomerRefresh = true;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  searchInput(event) {
    this.searchTerm = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
      REGULAR_PATTERN.alphaNumeric
    );
    if (this.searchTerm.trim().length > 0) {
      this.searchParams.searchBy = this.searchTerm;
      this.refreshEquipmentList(this.searchParams, true, false);
    }
  }

  sortBySelect(event) {
    this.searchParams.sortBy = event.detail.value;

    this.endCustomerRefresh = true;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  groupBySelect(event) {
    this.groupByContainer = false;
    this.searchParams.groupBy = event.detail.value;
    this.endCustomerRefresh = true;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  getWatchListOption(event) {
    this.searchParams.itemsInWatchlist = event.detail.value;
    this.itemsInWatchListLbl = event.detail.label;
    this.endCustomerRefresh = true;
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  clearEquipmentType() {
    this.noRecordsFound = false;
    this.equipmentStatusLabel = '';
    this.searchParams.filterBy = '';
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['filterBy'];
    this.router.navigate([], { queryParams: params });
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  clearProductType() {
    this.noRecordsFound = false;
    this.searchParams.productLinesSelected = '';
    this.productLinesClear = false;
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['productLinesSelected'];
    this.router.navigate([], { queryParams: params });
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  clearSearchTerm() {
    this.noRecordsFound = false;
    this.searchTerm = '';
    this.searchParams.searchBy = '';
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['searchBy'];
    this.router.navigate([], { queryParams: params });
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  clearDateRange() {
    this.changeDate = true;
    this.noRecordsFound = false;
    this.fromMinDate = this.fromMax.setMonth(this.fromMax.getMonth());
    this.fromMaxDate = new Date();
    this.dateRange = false;
    this.searchParams.fromDate = '';
    this.searchParams.toDate = '';
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['fromDate'];
    delete params['toDate'];
    this.router.navigate([], { queryParams: params });
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  clearWatchListOptions() {
    this.noRecordsFound = false;
    this.itemsInWatchlist = '';
    this.searchParams.itemsInWatchlist = '';
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['itemsInWatchlist'];
    this.router.navigate([], { queryParams: params });
    this.refreshEquipmentList(this.searchParams, true, false);
  }
  clearCustomer() {
    this.noRecordsFound = false;
    this.endCustomerName = '';
    this.searchParams.endCustomerID = '';
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['endCustomerID'];
    this.router.navigate([], { queryParams: params });
    this.refreshEquipmentList(this.searchParams, true, false);
  }

  archiveAddToWatchEquipment(element, actionType) {
    let selectedOption;
    let pinned;
    let removeFlag;
    let inactiveFlag;
    let thereInMELFlag;
    let archiving;
    let rawRemoveFlag;
    let manElFlag;
    let favourites;

    if (actionType == 'watchList') {
      selectedOption = 'P';
      pinned = '';
      removeFlag = true;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = 'Y';
      favourites = true;
      status = element.status;
    }

    if (actionType == 'archive') {
      selectedOption = 'A';
      pinned = 'X';
      removeFlag = true;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = 'Y';
      favourites = false;
      status = 'ACTIVE';
    }

    if (actionType == 'restore') {
      selectedOption = 'A';
      pinned = element.pinned;
      removeFlag = true;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = '';
      favourites = false;
      status = 'INACTIVE';
    }

    if (actionType == 'remove') {
      selectedOption = 'P';
      pinned = 'X';
      removeFlag = false;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = '';
      favourites = false;
      status = element.status;
    }

    let inParams = [
      [
        {
          addUpdateFlag: 'CP_UPDATE',
          additionalInfo: element.additionalInfo,
          assetNumber: element.assetNumber,
          endCustomer: element.endCustomer,
          endCustomerName: element.endCustomerName,
          favourites: favourites,
          htsCode: element.htsCode,
          inactiveFlag: inactiveFlag,
          lastServiceDate: element.lastServiceDate,
          location: element.location,
          partName: element.partName,
          partNumber: element.partNumber,
          pinned: pinned,
          removeFlag: removeFlag,
          selectedOption: selectedOption,
          serialNumber: element.serialNumber,
          serviceHistoryDetails: [],
          serviceInterval: element.serviceInterval,
          status: status,
          thereInMELFlag: thereInMELFlag,
        },
      ],
    ];

    this.eqService.addNewEquipment(inParams).subscribe(
      (res: any) => {
        if (res) {
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.success'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );
          window.scrollTo(0, 0);
          this.refreshEquipmentList(this.searchParams, true, false);
        } else {
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.failed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('mySiteEquipment.updateFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    this.mulitplEqSelection[0] = [];
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    this.mulitplEqSelection[0] = this.dataSource;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.mulitplEqSelection[0] = [];
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  updateCheckedList(element, selectedOption) {
    let serviceDueDateFormatted, lastServiceDateFormatted;
    if (element.serviceDueDate === null) {
      serviceDueDateFormatted = element.serviceDueDate;
    } else {
      serviceDueDateFormatted = moment(element.serviceDueDate).format(
        'YYYY-MM-DD'
      );
    }
    if (element.lastServiceDate === null) {
      lastServiceDateFormatted = element.lastServiceDate;
    } else {
      lastServiceDateFormatted = moment(element.lastServiceDate).format(
        'YYYY-MM-DD'
      );
    }

    let elementObject = {
      addUpdateFlag: 'CP_UPDATE',
      additionalInfo: element.additionalInfo,
      assetNumber: element.assetNumber,
      endCustomer: element.endCustomer,
      endCustomerName: element.endCustomerName,
      favourites: true,
      htsCode: element.htsCode,
      inactiveFlag: true,
      lastServiceDate: lastServiceDateFormatted,
      location: element.location,
      nextServiceDueInMonths: element.nextServiceDueInMonths,
      partName: element.partName,
      partNumber: element.partNumber,
      pinned: '',
      removeFlag: true,
      selectedOption: selectedOption,
      serialNumber: element.serialNumber,
      serviceDueDate: serviceDueDateFormatted,
      serviceHistoryDetails: [],
      serviceInterval: element.serviceInterval,
      status: element.status,
      thereInMELFlag: true,
    };
    const newData = { ...elementObject };

    this.mulitplEqSelection[0].push(newData);
    const ids = this.mulitplEqSelection[0].map((o) => o.serialNumber);
    const filteredArray = this.mulitplEqSelection[0].filter(
      ({ serialNumber }, index) => !ids.includes(serialNumber, index + 1)
    );

    this.mulitplEqSelection[0] = filteredArray;
  }

  archiveMultiple(actionType) {
    let updatedObjArray = [];
    if (actionType == 'add') {
      updatedObjArray = this.mulitplEqSelection[0].map(function (el) {
        var obj = Object.assign({}, el);
        obj.selectedOption = 'P';
        obj.pinned = '';
        obj.removeFlag = true;
        obj.inactiveFlag = false;
        obj.thereInMELFlag = false;
        obj.favourites = true;
        return obj;
      });
    }

    if (actionType == 'remove') {
      updatedObjArray = this.mulitplEqSelection[0].map(function (el) {
        var obj = Object.assign({}, el);
        obj.selectedOption = 'P';
        obj.pinned = 'X';
        obj.removeFlag = false;
        obj.inactiveFlag = false;
        obj.thereInMELFlag = false;
        obj.favourites = false;
        return obj;
      });
    }

    if (actionType == 'archive') {
      updatedObjArray = this.mulitplEqSelection[0].map(function (el) {
        var obj = Object.assign({}, el);
        obj.selectedOption = 'A';
        obj.pinned = 'X';
        obj.removeFlag = true;
        obj.inactiveFlag = false;
        obj.thereInMELFlag = false;
        obj.favourites = false;
        return obj;
      });
    }

    let updatedArray = [];
    updatedArray.push(updatedObjArray);
    this.eqService.addNewEquipment(updatedArray).subscribe(
      (res: any) => {
        if (res) {
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.success'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );
          window.scrollTo(0, 0);
          this.refreshEquipmentList(this.searchParams, true, false);
          this.mulitplEqSelection[0] = [];
        } else {
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.failed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
          this.mulitplEqSelection[0] = [];
        }
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('mySiteEquipment.updateFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
        this.mulitplEqSelection[0] = [];
      }
    );
  }

  createNewRma(productData, serialNumber) {
    const updatedProduct = {
      ...productData,
      serialNumber,
      similar: false,
    };
    this.createRmaSubscripton = this.returnProdService
      .rmaValidateAndRedirect(updatedProduct)
      .subscribe((val: any) => {
        if (!val?.modal) {
          this.multiCartFacade.reloadCart(val, {
            active: true,
          });
          this.returnProdService.selectRmaProduct(updatedProduct);
          this.router.navigate([`/${this.productLine}/returns/cart`]);
        }
      });
  }

  returnProduct(productData, serialNumber) {
    const updatedProduct = {
      ...productData,
      serialNumber,
      similar: false,
    };
    this.returnProdService.selectRmaProduct(updatedProduct);
    this.router.navigate(['/', this.productLine, 'create-rma']);
  }

  loadMoreEquipments() {
    let value = this.searchParams.pageSize + 49;
    if (
      this.dataSource.length >= this.searchParams.pageSize &&
      this.loadMoreLoader == false
    ) {
      this.searchParams.pageSize = ++value;
      this.loadMoreLoader = true;
      this.refreshEquipmentList(this.searchParams, false, true);
    }
  }

  backClick() {
    this.router.navigate(['/']);
  }

  viewCalibrationData() {
    this.router.navigate(['/calibration-data']);
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  switchDsCustomer(productAccessData) {
    const componentData = {
      productAccessData: productAccessData,
    };
    const switchDsCustomerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchDsCustomerDialog) {
      switchDsCustomerDialog.pipe(take(1)).subscribe((value) => {
        if (value != 'close' || value != 'cancel') {
          const salesArea =
            typeof value == 'string'
              ? value
              : value?.instance?.selectedSalesAreaId;
          this.customerAccService
            .updateSalesArea(salesArea, salesArea.split('_')[0])
            .subscribe((res: any) => {
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

  toggleAccordian(event, index) {
    const element = event.target;
    element.classList.toggle('active');
    if (this.groupByEquipmentList[index].isActive) {
      this.groupByEquipmentList[index].isActive = false;
    } else {
      this.groupByEquipmentList[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  getselectedProdLine() {
    this.searchParams.productLinesSelected = this.selectedProdLine;
    this.noRecordsFound = false;
    this.refreshEquipmentList(this.searchParams, true, false);
  }
  selectedProductLine(e) {
    this.selectedProductLineToBeRemove.push(e);
  }
  clearProductLines(prodLine) {
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params['productLine'];
    this.noRecordsFound = false;
    for (let i = 0; i < this.selectedProdLine.length; i++) {
      if (this.selectedProdLine[i] == prodLine) {
        this.index = this.selectedProdLine.indexOf(prodLine);
        if (this.index > -1) {
          this.selectedProdLine.splice(this.index, 1);
          if (this.selectedProdLine.length == 0) {
            this.selectedProdLine = [];
            this.refreshEquipmentList(this.searchParams, true, false);
          } else {
            this.searchParams.productLinesSelected = this.selectedProdLine;
            this.refreshEquipmentList(this.searchParams, true, false);
          }
        }
        for (let k = 0; k < this.selectedProductLineToBeRemove.length; k++) {
          if (this.selectedProductLineToBeRemove[k].value.name == prodLine) {
            this.selectedProductLineToBeRemove[k].selected = false;
            const filteredItems = this.selectedProdLine.filter(function (item) {
              return item !== prodLine;
            });
            this.selectedProdLine = filteredItems;
          }
        }
      }
    }
    this.searchParams.pageNumber = 0;
  }

  findserviceDueDate(serviceDueDate) {
    let currentDate = new Date();
    let dueDate = new Date(serviceDueDate);
    let diff = Math.floor(dueDate.getTime() - currentDate.getTime());
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    this.monthsDiff = Math.floor(days);
    if (this.monthsDiff <= 90 && this.monthsDiff >= 0) {
      return true;
    } else {
      return false;
    }
  }

  redirectToBynder() {
    this.router.navigate(['/search-private-folder']);
    const bynderUrl = environment.bynderUrl;
    window.open(bynderUrl, '_blank');
  }
}
