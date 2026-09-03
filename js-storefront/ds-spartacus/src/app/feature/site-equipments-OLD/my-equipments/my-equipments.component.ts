import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  HostListener,
  Renderer2,
} from '@angular/core';
import { SiteEquipmentsService } from '../services/site-equipments.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../shared/services/main.service';
// import { JoyrideService } from 'ngx-joyride';

declare const $: any;
const eqHeaders: any = [
  {
    status: 'Pinned Items',
    translate: 'bhge.ng.site.equipment.mel.Pinned.items',
    tooltip: 'Your list of items, which you want to manage on this site.',
    var: 'pinnedItems',
    i18_tooltip: 'bhge.ng.site.equipment.mel.items.pinnedItems.tooltip',
  },
  //  {
  //   status: 'Items Past Due',
  //   translate: 'bhge.ng.site.equipment.mel.service_due.past',
  //   tooltip: 'Items that have passed their service due dates',
  //   var: 'itemsServiceWasDue',
  //   i18_tooltip: 'bhge.ng.site.equipment.mel.items.past.due.tooltip'
  // }, {
  //   status: 'Items Due in 1 Month',
  //   translate: 'bhge.ng.site.equipment.mel.service_due.onemonth',
  //   tooltip: 'Your service due date is less than 1 month from now',
  //   var: 'itemsDueServicein1Month',
  //   i18_tooltip: 'bhge.ng.site.equipment.mel.items.due.month.tooltip'
  // },
  {
    status: 'Items Due in 3 Months',
    translate: 'bhge.ng.site.equipment.mel.service_due.quarter',
    tooltip: 'Your service due date is less than 3 months from now',
    var: 'itemsDueServiceinQuarter',
    i18_tooltip: 'bhge.ng.site.equipment.mel.items.due.quarter.tooltip',
  },
  {
    status: 'Archived Items',
    translate: 'bhge.ng.site.equipment.mel.archived.items',
    tooltip:
      'You can Archive items that you do not want to see anymore. They can be found in the ARCHIVED ITEMS list if you need to look at them',
    var: 'archivedItems',
    i18_tooltip: 'bhge.ng.site.equipment.mel.items.archived.tooltip',
  },
  {
    status: 'Total Items',
    translate: 'bhge.ng.site.equipment.mel.total_items',
    tooltip:
      'List of all items in our master database for your account.  This list starts with the records that have been updated in the last 3 years, either as a new purchase, a return, or a new entry that you created in this website.  You can change this date range using the Last Modified filter.',
    var: 'totalItems',
    i18_tooltip: 'bhge.ng.site.equipment.mel.all.items.tooltip',
  },
];

@Component({
  standalone: false,
  selector: 'app-my-equipments',
  templateUrl: './my-equipments.component.html',
  styleUrls: ['./my-equipments.component.css'],
  host: { class: 'page-tour-fix' },
})
export class MyEquipmentsComponent implements OnInit, AfterViewInit, OnDestroy {
  public eqHeaders: any = eqHeaders;
  // public fromDate: any;
  // public toDate: any;
  public isStickyHeader: boolean;
  public searchInput: string;
  public subscriptions: any;
  public staticImage: any =
    '/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg';
  public selectedProductRow: any = 0;
  public groupByFilterApplied: boolean = false;

  public groupByFilter: any = '';
  public hideDateFilter: boolean = true;
  public fromDate: Date = new Date();
  public toDate: Date = new Date();
  public arrCustomers: any = [];
  public selectedCustomer: any = '';
  public showCustomersInfo: boolean = false;
  public showEndCustFilter: boolean = false;
  public mulTimelSelectAll: boolean = false;
  public multiMelSelect: boolean = false;
  public arrSelEqList: any = [];
  public hideProductLine: boolean = false;
  public productLine: any = [];
  public selectedProductLine: boolean = false;
  public isShown: boolean = false; // hidden by default
  public archiveValue: any = 'A';
  public pinnedValue: any = 'P';
  public showArchiveModal: boolean = false;
  public eqSelected: any = '';
  public groupByValueSelected: any = '';
  public indxSelected: any = '';
  public selectedOptionValue: any = '';
  public eqMultiSelected: any = '';
  public groupByMultiSelected: any = '';
  public classSelected: any = '';
  public defaultSelectedCustomer: any = {
    id: 0,
    name: 'Select a Customer',
  };
  public confirmedArchive: boolean = false;
  public archiveText: boolean = false;
  public pinnedItemsCheck: boolean = false;
  public sortByFilterApplied: boolean = false;
  public sortByFilter: any = '';
  public showModalMultiSelect: boolean = false;
  public isActive1 = false;
  public isActive2 = false;
  public isActive3 = false;
  public disabledClass: boolean = true;
  public viewDetailsUrl: string = '';
  public siteTourStepsData: any = {
    step1: {
      title: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step1.title'
      ),
      text: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step1.content'
      ),
    },
    step2: {
      title: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step2.title'
      ),
      text: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step2.content'
      ),
    },
    filterTourSteps: [
      {
        title: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step4.title'
        ),
        text: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step4.content'
        ),
      },
      {
        title: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step5.title'
        ),
        text: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step5.content'
        ),
      },
      {
        title: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step6.title'
        ),
        text: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step6.content'
        ),
      },
      {
        title: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step3.title'
        ),
        text: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step3.content'
        ),
      },
      {
        title: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step7.title'
        ),
        text: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step7.content'
        ),
      },
      {
        title: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step7.title'
        ),
        text: this.eqService.getTooltipText(
          'bhge.ng.site.equipment.mel.site.tour.step7.content'
        ),
      },
    ],
    step8: {
      title: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step8.title'
      ),
      text: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step8.content'
      ),
    },
    step9: {
      title: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step9.title'
      ),
      text: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step9.content'
      ),
    },
    step10: {
      title: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step10.title'
      ),
      text: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step10.content'
      ),
    },
    step11: {
      title: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step11.title'
      ),
      text: this.eqService.getTooltipText(
        'bhge.ng.site.equipment.mel.site.tour.step11.content'
      ),
    },
  };

  public siteTourSteps: any = [
    'step1',
    'step2',
    'step3',
    'step4',
    'step5',
    'step6',
    'step7',
    'step8',
    'step9',
    'step10',
    'step11',
  ];

  @ViewChild('scrollLoader', { static: true }) scrollLoader: ElementRef;
  @ViewChild('endCustomerDropdown') endCustomerDropdown;
  @ViewChild('endCustomerDropdownButton') endCustomerDropdownButton;
  @ViewChild('endCustomerSortButton') endCustomerSortButton;

  constructor(
    private mainService: MainService,
    private render: Renderer2,
    public eqService: SiteEquipmentsService,
    private elm: ElementRef,
    private datePipe: DatePipe,
    public route: ActivatedRoute,
    public routeChange: Router
  ) {
    // private readonly joyrideService: JoyrideService
    document.addEventListener('click', this.bodyClick.bind(this));
    this.fromDate.setFullYear(this.toDate.getFullYear() - 3);
    this.eqService.melFilters.fromDate = this.datePipe.transform(
      this.fromDate,
      'dd-MM-yyyy'
    );
    this.eqService.melFilters.toDate = this.datePipe.transform(
      this.toDate,
      'dd-MM-yyyy'
    );
    if (this.eqService.melFilters.groupBy.toLowerCase() == 'default') {
      this.groupByFilterApplied = false;
    } else {
      this.groupByFilterApplied = true;
    }
    if (this.eqService.melFilters.sortBy.toLowerCase() == 'sortbyservicedue') {
      this.sortByFilterApplied = false;
    } else {
      this.sortByFilterApplied = true;
    }
    this.route.queryParams.subscribe((qeury: any) => {
      if (qeury.isReload) {
        routeChange.navigateByUrl('/site-equipment');
      }
    });
  }

  ngOnInit() {
    this.mainService.breadCrumbs = [];
    const breadCrumbs = [
      { name: 'Home', path: '/home', isExternalLink: true },
      { name: 'My Equipment', path: '/site-equipment' },
    ];
    this.mainService.breadCrumbs.push(...breadCrumbs);
    this.mainService.setTitle('BH Digital Solutions Store | My Equipment');
    this.filterByDate();
    this.arrCustomers = [this.defaultSelectedCustomer];
    if (this.arrCustomers.length == 1) {
      this.fetchCustomersInfo();
    }
    this.selectedCustomer = this.arrCustomers[0];
    if (this.eqService.melFilters.searchBy) {
      this.searchInput = this.eqService.melFilters.searchBy;
      this.eqService.melFilters.isSearchDone = true;
    }
  }
  @HostListener('document:click', ['$event'])
  mouseClick(event) {
    if (
      this.isShown &&
      this.endCustomerSortButton.nativeElement.contains(event.target)
    ) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }
  ngAfterViewInit() {
    this.subscriptions = this.mainService.pageScroll.subscribe(() => {
      this.isStickyHeader = window.pageYOffset >= 170 ? true : false;

      // auto load data on scroll
      const rect = this.scrollLoader.nativeElement.getBoundingClientRect();
      const totalProducts =
        this.eqService.melPageHeader[
          this.eqService.melFilters.filterBy || 'totalItems'
        ];
      if (
        rect.bottom <= window.innerHeight &&
        totalProducts > this.eqService.totalEquipmentCount &&
        !this.eqService.fetchAPI
      ) {
        this.eqService.melFilters.pageNumber++;
        this.eqService.reloadData.next();
      }
    });
    this.isShown = false;
  }

  ngOnDestroy() {
    this.eqService.melFilters.pageIndex = 10;
    this.subscriptions.unsubscribe();
  }

  /**
   * @author Sumeet Roy
   * @description archive equipment & increase the count in header
   * @param eq Object
   */
  archiveEquipmentonfirmation(eq, groupByValue, indx, selectedOption) {
    this.showArchiveModal = true;
    this.eqSelected = eq;
    this.groupByValueSelected = groupByValue;
    this.indxSelected = indx;
    this.selectedOptionValue = selectedOption;
    if (eq.status.toLowerCase() == 'active') {
      this.archiveText = true;
    } else {
      this.archiveText = false;
    }
    if (eq.pinned == 'X') {
      this.pinnedItemsCheck = true;
    } else {
      this.pinnedItemsCheck = false;
    }
  }
  archiveEquipment(eq, groupByValue, indx, selectedOption) {
    eq.archiving = false;
    const data = eq;
    data.addUpdateFlag = 'CP_UPDATE';
    data.removeFlag = data.rawRemoveFlag = true;
    data.selectedOption = selectedOption;
    if (data.status.toLowerCase() == 'active') {
      data.rawRemoveFlag = true;
    } else {
      data.rawRemoveFlag = false;
    }
    this.arrSelEqList = [];
    this.arrSelEqList.push(data);
    this.eqService.archiveEquipment(this.arrSelEqList).subscribe((res) => {
      if (res && res[0]['responseType'] && res[0]['responseType'] == 'S') {
        eq.archiving = false;

        if (selectedOption == this.pinnedValue) {
          if (eq.pinned == 'X') {
            this.mainService.showMessage('Un Pinned Successfully', 'success');
          } else {
            this.mainService.showMessage('Pinned Successfully', 'success');
          }
        } else {
          if (data.rawRemoveFlag) {
            eq.status = null;
            // this.eqService.melPageHeader['totalItems']--;
            // this.eqService.melPageHeader['archivedItems']++;
            this.mainService.showMessage('Archived Successfully', 'success');
          } else {
            eq.status = 'ACTIVE';
            // this.eqService.melPageHeader['totalItems']++;
            // this.eqService.melPageHeader['archivedItems']--;
            this.mainService.showMessage('Retrieved Successfully', 'success');
          }
          this.eqService.melPageEquipments[groupByValue].splice(indx, 1);
        }

        this.showArchiveModal = false;
        const filters = { ...this.eqService.melFilters };
        this.eqService.melFilters.refreshFlag = true;
        this.eqService.melFilters.pageNumber = 0;
        this.eqService.totalEquipmentCount = 0;
        this.eqService.totalEquipmentData = [];
        this.eqService.reloadData.next();
      } else if (
        res &&
        res[0]['responseType'] &&
        res[0]['responseType'] == 'E'
      ) {
        eq.archiving = false;
        this.mainService.showMessage(res[0]['message'], 'error');
      }
    });
  }

  filterByDate() {
    this.eqService.addMelFilterBubble({
      type: 'date',
      fromDate: this.datePipe.transform(this.fromDate, 'dd-MM-yyyy'),
      toDate: this.datePipe.transform(this.toDate, 'dd-MM-yyyy'),
      title:
        this.datePipe.transform(this.fromDate, 'dd MMM yyyy') +
        ' - ' +
        this.datePipe.transform(this.toDate, 'dd MMM yyyy'),
    });
  }

  handelSearchText(e, btnClick = false) {
    if (
      e.key == 'Enter' ||
      (e.key == 'Search' && !this.eqService.melFilters.isSearchDone)
    ) {
      if (!this.searchInput || this.searchInput == '') {
        return;
      }
      this.eqService.addMelFilterBubble({
        type: 'search',
        searchBy: this.searchInput,
        title: 'Search: ' + this.searchInput,
      });
    } else if (e.key == 'Search' && this.eqService.melFilters.isSearchDone) {
      this.removeBubbles({ type: 'search' });
    }
  }

  removeBubbles(info) {
    switch (info.type) {
      case 'search':
        this.searchInput = '';
        break;
      case 'date':
        this.fromDate = this.toDate = null;
        break;
      case 'endCustomer':
        this.selectedCustomer = this.defaultSelectedCustomer;
        break;
      case 'product_line':
        ({
          type: 'product_line',
          id: info.id,
          name: info.id,
        });
    }
    this.eqService.removeFilterBubble(info);
  }

  filterMelList(type) {
    // this.eqService.melFilters.filterBy = (type == this.eqService.melFilters.filterBy || type == 'totalItems') ? '' : type;
    this.eqService.melFilters.filterBy = type;
    this.eqService.melFilters.pageNumber = 0;
    this.eqService.melFilters.pageIndex = 10;
    this.eqService.totalEquipmentCount = 0;
    this.eqService.totalEquipmentData = [];
    this.eqService.reloadData.next();
    this.arrSelEqList = [];
    this.classSelected = '';
    this.multiMelSelect = false;
    this.archiveText = false;
    this.pinnedItemsCheck = false;
  }

  onTabClick(index) {
    if (this.selectedProductRow == -1) {
      this.selectedProductRow = index;
    } else {
      this.selectedProductRow = -1;
    }
  }

  changeGroupBy(groupByParam) {
    if (groupByParam.toLowerCase() == 'default') {
      this.groupByFilterApplied = false;
      this.selectedProductRow = 0;
    } else {
      this.groupByFilterApplied = true;
      this.selectedProductRow = -1;
    }
    this.eqService.melFilters.pageNumber = 0;
    this.eqService.totalEquipmentCount = 0;
    this.eqService.totalEquipmentData = [];
    this.eqService.reloadData.next();
  }
  changeSortBy(groupByParam) {
    if (groupByParam.toLowerCase() == 'sortbyservicedue') {
      this.sortByFilterApplied = false;
      this.selectedProductRow = 0;
    } else {
      this.sortByFilterApplied = true;
      this.selectedProductRow = 0;
    }
    this.eqService.melFilters.pageNumber = 0;
    this.eqService.totalEquipmentCount = 0;
    this.eqService.totalEquipmentData = [];
    this.eqService.reloadData.next();
  }
  onGroupByTabClick(event, index) {
    if (this.selectedProductRow == index) {
      this.selectedProductRow = -1;
    } else {
      this.selectedProductRow = index;
    }
    const targetEl = event.target as Element;
    targetEl.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  changeProductType(param) {
    this.eqService.melFilters.pageNumber = 0;
    this.eqService.totalEquipmentCount = 0;
    this.eqService.totalEquipmentData = [];
    this.eqService.reloadData.next();
  }

  getEndCustomer(eq) {
    if (<Number>eq.endCustomer == 0 || eq.endCustomer == '') {
      return '';
    } else if (eq.endCustomerName.indexOf('& 0000') !== -1) {
      return eq.endCustomerName;
    }
    return eq.endCustomerName + ' & ' + eq.endCustomer;
  }

  onFavouritesClick(partNum, isFav) {
    if (!isFav) {
      this.eqService.addToFavourite(partNum).subscribe((res) => {
        if (res || res == 'true') {
          this.mainService.showMessage(
            'Material added to favourites',
            'success'
          );
        } else {
          this.mainService.showMessage(
            'Not able to add material to favourites',
            'error'
          );
        }
      });
    } else {
      this.eqService.removeFromFavourite(partNum).subscribe((res) => {
        if (res || res == 'true') {
          this.mainService.showMessage(
            'Material removed from favourites',
            'success'
          );
        } else {
          this.mainService.showMessage(
            'Not able to remove material from favourites',
            'error'
          );
        }
      });
    }
  }

  returnZero() {
    return 0;
  }

  isServicePast(serviceDate) {
    if (!serviceDate) {
      return false;
    }
    const currentDate = new Date().setHours(0, 0, 0, 0);
    serviceDate = new Date(serviceDate).setHours(0, 0, 0, 0);
    if (currentDate > serviceDate) {
      return true;
    }
    return false;
  }

  startSiteTour() {
    /* this.joyrideService.startTour(
      {
        // steps: ['firstStep', 'filter0', 'filter1', 'filter2', 'filter3', 'filter4', 'addAllEquipment@site-equipment/manEL' ],
        steps: this.siteTourSteps,
        themeColor: '#A0A0A0',
        stepDefaultPosition: 'right'
      }
    ); */
  }

  private fetchCustomersInfo() {
    this.eqService.fetchCustomersData().subscribe((result: any) => {
      if (result && result.length > 0) {
        this.arrCustomers = [];
        for (const eachCust of result) {
          this.arrCustomers.push({
            id: eachCust.customerNumber,
            name: eachCust.customerName + ' & ' + eachCust.customerNumber,
          });
        }
      }
    });
  }

  onCustomerSelect(cust: any, event) {
    this.selectedCustomer = cust;
    this.eqService.melFilters.endCustomerID = cust.id;
    this.showCustomersInfo = false;
    // this.removeBubbles({type: 'endCustomer'});
    this.eqService.addMelFilterBubble({
      type: 'endCustomer',
      title: cust.name,
      id: cust.id,
    });
    event.preventDefault();
  }

  productLineFilter(selectedProductLine, pLine) {
    if (selectedProductLine) {
      this.eqService.addMelFilterBubble({
        type: 'product_line',
        title: pLine.name,
        id: pLine.id,
        raw: pLine,
      });
      //this.selectedProductLine =false;
    } else {
      this.eqService.removeFilterBubble({
        type: 'product_line',
        id: pLine.id,
        name: pLine.name,
      });
      //   this.selectedProductLine =false;
    }
  }

  bodyClick() {
    if (
      this.endCustomerDropdownButton &&
      !this.endCustomerDropdownButton.nativeElement.contains(event.target) &&
      this.endCustomerDropdown &&
      !this.endCustomerDropdown.nativeElement.contains(event.target)
    ) {
      this.showCustomersInfo = false;
    }
  }

  getEquipmentGroupByCount(param) {
    let eqCount = '';
    if (this.eqService.melFilters.groupBy.toLowerCase() == 'product') {
      eqCount = this.eqService.filteredEquipmentPartCount[param];
    } else if (
      this.eqService.melFilters.groupBy.toLowerCase() == 'endcustomer'
    ) {
      eqCount = this.eqService.endCustomerEqCount[param];
    }
    return eqCount;
  }

  getEquipmentMetaData(eqArray) {
    let returnVal = '';
    if (this.eqService.melFilters.groupBy.toLowerCase() == 'product') {
      returnVal = eqArray[0].partNumber + ' - ' + eqArray[0].partName;
    } else if (
      this.eqService.melFilters.groupBy.toLowerCase() == 'endcustomer'
    ) {
      if (<Number>eqArray[0].endCustomer == 0) {
        returnVal = 'Others';
      } else {
        returnVal = eqArray[0].endCustomer + ' - ' + eqArray[0].endCustomerName;
      }
    }

    if (returnVal) {
      return returnVal;
    }
    return '';
  }

  onNext() {
    setTimeout(() => {
      $('.joyride-step__holder').get(0).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }, 700);
  }
  onMultiSelectMel(eq, groupedEq, indx, e) {
    if (e.target.checked) {
      //  eq.archiving = true;
      const data = eq;
      data.addUpdateFlag = 'CP_UPDATE';
      data.selectedOption = '0';
      data.indx = indx;
      data.removeFlag = data.rawRemoveFlag = true;
      if (data.status.toLowerCase() == 'active') {
        data.rawRemoveFlag = true;
      } else {
        data.rawRemoveFlag = false;
      }
      this.disabledClass = false;
      this.arrSelEqList.push(data);
    } else {
      this.arrSelEqList.splice(eq.indx, 1);
      this.disabledClass = true;
    }
  }
  multiSelectServiceConfirmation(eq, groupByValue) {
    this.showModalMultiSelect = true;
    this.eqMultiSelected = eq;
    this.groupByMultiSelected = groupByValue;

    if (this.multiMelSelect) {
      this.arrSelEqList[0].forEach((result, i) => {
        if (result.status.toLowerCase() == 'active') {
          this.archiveText = true;
        }

        if (result.pinned == 'X') {
          this.pinnedItemsCheck = true;
        }
      });
    } else {
      this.arrSelEqList.forEach((result, i) => {
        if (result.status.toLowerCase() == 'active') {
          this.archiveText = true;
        }

        if (result.pinned == 'X') {
          this.pinnedItemsCheck = true;
        }
      });
    }
    if (this.arrSelEqList.length == 0) {
      this.showModalMultiSelect = false;
      this.mainService.showMessage('Please select equipment Items');
    }
  }
  redirectUrl(partnumber, serialNumber) {
    if (partnumber) {
      partnumber = partnumber.replace('/', '+');
    }
    if (partnumber)
      location.href = '/site-equipment/' + partnumber + '/' + serialNumber;
  }
  multiSelectService(eq, groupByValue) {
    let data: any = '';
    if (this.multiMelSelect) {
      this.arrSelEqList[0].forEach((result, i) => {
        result.selectedOption = eq;
      });
      data = this.arrSelEqList[0];
    } else {
      this.arrSelEqList.forEach((result, i) => {
        result.selectedOption = eq;
        if (result.status.toLowerCase() == 'active') {
          this.archiveText = true;
        }
        if (result.pinned == 'X') {
          this.pinnedItemsCheck = true;
        }
      });
      data = this.arrSelEqList;
    }

    this.eqService.archiveEquipment(data).subscribe((res) => {
      let successLength = 0;
      let failLength = 0;
      res.forEach((result, i) => {
        if (result.responseType == 'S') {
          successLength = successLength + 1;
        }
        if (result.responseType == 'F') {
          failLength = failLength + 1;
        }
      });
      if (res && res[0]['responseType'] && res[0]['responseType'] == 'S') {
        if (eq == this.pinnedValue) {
          if (!this.pinnedItemsCheck) {
            this.mainService.showMessage(
              successLength +
                ' Pinned Successfully ' +
                failLength +
                ' are failed',
              'success'
            );
          } else {
            this.mainService.showMessage(
              successLength +
                ' Un Pinned Successfully ' +
                failLength +
                ' are failed',
              'success'
            );
          }
        } else {
          if (this.archiveText) {
            this.mainService.showMessage(
              successLength +
                ' Archived Successfully ' +
                failLength +
                ' are failed',
              'success'
            );
          } else {
            this.mainService.showMessage(
              successLength +
                ' Retrived Successfully ' +
                failLength +
                ' are failed',
              'success'
            );
          }
          this.arrSelEqList.forEach((result, i) => {
            this.eqService.melPageEquipments[groupByValue].splice(
              result.indx,
              1
            );
          });
          this.showModalMultiSelect = false;
        }

        const filters = { ...this.eqService.melFilters };
        this.eqService.melFilters.refreshFlag = true;
        this.eqService.melFilters.pageNumber = 0;
        this.eqService.totalEquipmentCount = 0;
        this.eqService.totalEquipmentData = [];
        this.eqService.reloadData.next();
        this.mulTimelSelectAll = false;
        this.multiMelSelect = false;
        this.arrSelEqList = [];
        this.classSelected = '';
      } else if (
        res &&
        res[0]['responseType'] &&
        res[0]['responseType'] == 'E'
      ) {
        eq.archiving = false;
        this.mainService.showMessage(res[0]['message'], 'error');
      }
    });
  }
  public melMultiCheckAll() {
    if (!this.isShown && this.classSelected == '') {
      this.isShown = !this.isShown;
      this.mulTimelSelectAll = false;
    } else {
      this.classSelected = '';
      this.arrSelEqList = [];
      this.eqService.melPageEquipments.default.forEach((result, i) => {
        result.addedChecked = false;
      });
      this.isActive1 = false;
      (this.isActive2 = false), (this.isActive3 = false);
      this.disabledClass = true;
    }
  }

  public multiSelectAll(value, e) {
    switch (value) {
      case 'all':
        this.arrSelEqList = [];
        this.multiMelSelect = true;
        const data = this.eqService.totalEquipmentData;
        data.forEach((result, i) => {
          result.addUpdateFlag = 'CP_UPDATE';
          result.removeFlag = result.rawRemoveFlag = true;
          result.selectedOption = '0';
          result.addedChecked = true;
        });
        this.eqService.melPageEquipments.default.forEach((result, i) => {
          result.addedChecked = true;
        });
        this.arrSelEqList.push(data);
        this.classSelected = value;
        this.isActive1 = true;
        (this.isActive2 = false), (this.isActive3 = false);
        break;
      case 'pinned':
        this.arrSelEqList = [];
        this.eqService.melPageEquipments.default.forEach((result, i) => {
          if (result.pinned == 'X') {
            result.addUpdateFlag = 'CP_UPDATE';
            result.removeFlag = result.rawRemoveFlag = true;
            result.selectedOption = '0';
            result.addedChecked = true;
            this.arrSelEqList.push(result);
          } else {
            result.addedChecked = false;
          }
        });
        this.classSelected = value;
        this.isActive1 = false;
        (this.isActive2 = true), (this.isActive3 = false);
        break;
      case 'notpinned':
        this.arrSelEqList = [];
        this.eqService.melPageEquipments.default.forEach((result, i) => {
          if (result.pinned == '') {
            result.addUpdateFlag = 'CP_UPDATE';
            result.removeFlag = result.rawRemoveFlag = true;
            result.selectedOption = '0';
            result.addedChecked = true;
            this.arrSelEqList.push(result);
          } else {
            result.addedChecked = false;
          }
        });
        this.classSelected = value;
        this.isActive1 = false;
        (this.isActive2 = false), (this.isActive3 = true);
        break;
    }
    this.isShown = false;
    this.archiveText = false;
    this.pinnedItemsCheck = false;
    this.disabledClass = false;
  }
}
