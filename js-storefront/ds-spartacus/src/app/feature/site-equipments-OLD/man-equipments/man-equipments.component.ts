import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { SiteEquipmentsService } from '../services/site-equipments.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../../shared/services/main.service';
// import { JoyrideService } from 'ngx-joyride';

declare const $: any;

const headers = [
  {
    title: 'Items NOT added in My Equipment List',
    i18: 'bhge.ng.site.equipment.manel.item_not_list',
    value: 'itemsNotInMEL',
    var: 'itemsNotInMEL',
    tooltip:
      'Click this button to see only the items that are not already in my Equipment List',
    i18_tooltip: 'bhge.ng.site.equipment.manel.items_not_in_list.tooltip',
  },
  {
    title: 'Total Items',
    i18: 'bhge.ng.site.equipment.mel.total_items',
    value: 'totalItems',
    var: 'totalItems',
    tooltip:
      'Based on our records, the items below were sold to your account or serviced for your account.',
    i18_tooltip: 'bhge.ng.site.equipment.manel.all_items.tooltip',
  },
];

@Component({
  standalone: false,
  selector: 'app-man-equipments',
  templateUrl: './man-equipments.component.html',
  styleUrls: ['./man-equipments.component.css'],
})
export class ManEquipmentsComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  subscriptions: any;

  public headers: any = headers;
  public eqList: any = [];
  public eqHeader: any = {};
  public alertPopup: any = {};
  public searchInput: string;
  public isStickyHeader: boolean;
  public isStickyLabel: boolean;

  @ViewChild('scrollLoader', { static: true }) scrollLoader: ElementRef;

  constructor(
    public mainService: MainService,
    public eqService: SiteEquipmentsService,
    private router: ActivatedRoute
  ) {
    // private readonly joyrideService: JoyrideService
    const manDetail = this.router.snapshot.data['manDetail'];
    this.eqList = manDetail['equipmentData'] || [];
    this.eqHeader =
      manDetail['manElPageCountData'] || this.eqService.defaultManElPageCount;
    if (this.router.snapshot.paramMap.get('addAll')) {
      this.addAllToMel();
    }
  }

  loadManEl() {
    this.eqService.manFilters.refreshFlag = false;
    this.eqService.getManEquipment().subscribe((res) => {
      this.eqService.manFilters.isSearchDone = this.eqService.isSearchLoading
        ? true
        : false;
      this.eqService.isSearchLoading = false;

      if (this.eqService.manFilters.pageNumber > 0) {
        this.eqList.push(...res['equipmentData']);
        document.body.scrollTop = document.body.scrollTop - 10;
      } else {
        this.eqList = res['equipmentData'] || [];
        this.eqHeader = res['manElPageCountData'] || {};
      }
    });
  }

  ngOnInit() {
    this.mainService.breadCrumbs = [];
    const breadCrumbs = [
      { name: 'Home', path: '/home', isExternalLink: true },
      {
        name: 'My Equipment',
        path: '/site-equipment/',
        queryParam: { isReload: true },
      },
      { name: 'All Items In Our Records', path: '/site-equipment/manEL' },
    ];
    this.mainService.breadCrumbs.push(...breadCrumbs);
    this.mainService.setTitle('BH Digital Solutions Store | My Equipment');
    if (this.eqService.manFilters.searchBy) {
      this.searchInput = this.eqService.manFilters.searchBy;
      this.eqService.manFilters.isSearchDone = true;
    }
  }

  ngAfterViewInit() {
    this.subscriptions = this.mainService.pageScroll.subscribe(() => {
      this.isStickyHeader = window.pageYOffset >= 170 ? true : false;
      this.isStickyLabel =
        this.isStickyHeader && window.pageYOffset >= 250 ? true : false;

      // auto load data on scroll
      const rect = this.scrollLoader.nativeElement.getBoundingClientRect();
      if (
        rect.bottom <= window.innerHeight &&
        this.eqService.manFilters.pageIndex < this.eqList.length
      ) {
        const totalProducts =
          this.eqHeader[this.eqService.manFilters.filterBy || 'totalItems'];
        if (
          this.eqService.manFilters.pageIndex + 5 >= this.eqList.length &&
          totalProducts > this.eqList.length
        ) {
          this.eqService.manFilters.pageIndex += 5;
          // Load page 2
          this.eqService.manFilters.pageNumber++;
          this.eqService.manFilters.refreshFlag = false;
          this.loadManEl();
        } else {
          this.eqService.manFilters.pageIndex =
            this.eqService.manFilters.pageNumber + 5 < this.eqList.length
              ? this.eqService.manFilters.pageIndex + 5
              : this.eqList.length;
        }
      }
    });
  }

  ngOnDestroy() {
    this.mainService.breadCrumbs = [];
    this.eqService.manFilters.pageIndex = 10;
    this.subscriptions.unsubscribe();
  }

  filterManEl(header) {
    this.eqService.manFilters.filterBy = header['value'];
    this.eqService.manFilters.refreshFlag = true;
    this.eqService.manFilters.pageNumber = 0;
    this.eqService.manFilters.pageIndex = 10;
    this.eqService.isSearchLoading = true;

    this.loadManEl();
  }

  addAllToMel() {
    let req = [];
    let rawList = [];
    for (let i of this.eqList) {
      if (!i.thereInMELFlag) {
        i.isLoading = true;
        rawList.push(i);
        req.push({
          partNumber: i.partNumber,
          serialNumber: i.serialNumber,
          addUpdateFlag: 'CP_ALL',
        });
      }
    }
    if (req.length == 0) {
      return;
    }
    this.eqService.addToMel(req).subscribe((res) => {
      if (res && Array.isArray(res)) {
        for (let i = 0; i < res.length; i++) {
          rawList[i].isLoading = false;
          if (res[i]['responseType'] == 'S') {
            rawList[i].thereInMELFlag = !rawList[i].thereInMELFlag;
          }
        }
        // Add header
        this.eqService.manFilters.refreshFlag = true;
        this.eqService.getManEquipment().subscribe((res: any) => {
          this.eqHeader = res['manElPageCountData'] || {};
          this.eqList = res['equipmentData'] || [];
        });
        this.mainService.showMessage(
          req.length + ' equipment added to My Equipment List',
          'success'
        );
      }
    });
  }

  addRemoveMel(info, flag) {
    info.isLoading = true;
    let req = {
      partNumber: info.partNumber,
      serialNumber: info.serialNumber,
      addUpdateFlag: flag,
    };
    if (info.thereInMELFlag) {
      req['removeFlag'] = true;
    }
    this.eqService.addToMel([req]).subscribe((res) => {
      if (res && res[0] && res[0]['responseType'] == 'S') {
        info.isLoading = false;
        this.eqHeader['itemsNotInMEL'] = info.thereInMELFlag
          ? this.eqHeader['itemsNotInMEL'] + 1
          : this.eqHeader['itemsNotInMEL'] - 1;
        info.thereInMELFlag = !info.thereInMELFlag;

        // Reload MAN El list
        this.eqService.manFilters.refreshFlag = true;
        this.eqService.getManEquipment().subscribe((res: any) => {});
      }
    });
  }

  confirmModal(obj) {
    this.alertPopup = {};
    if (obj.type == 'ADD_ALL') {
      const req = [];
      for (const i of this.eqList) {
        if (!i.thereInMELFlag) {
          i.isLoading = true;
          req.push({
            partNumber: i.partNumber,
            serialNumber: i.serialNumber,
            addUpdateFlag: 'CP_ALL',
          });
        }
      }
      this.alertPopup.message =
        'Do you want to add ' +
        req.length +
        ' items from the below list to My Equipment?';
    } else {
      this.alertPopup.message =
        obj.params.status == 'CP_REMOVE'
          ? 'Remove from My Equipment List?'
          : 'Add to My Equipment List?';
    }
    this.alertPopup.type = obj.type;
    this.alertPopup.params = obj.params;
    $('#actionConfirmModal').modal('show');
  }

  userConfirmed() {
    if (this.alertPopup.type == 'ADD_ALL') {
      this.addAllToMel();
    } else {
      this.addRemoveMel(
        this.alertPopup.params['eq'],
        this.alertPopup.params['status']
      );
    }
  }

  onCancelClick() {
    if (this.alertPopup.type == 'ADD_ALL') {
      for (const i of this.eqList) {
        if (!i.thereInMELFlag) {
          i.isLoading = false;
        }
      }
    }
  }

  handelSearchText(e, btnClick = false) {
    if (
      e.key == 'Enter' ||
      (e.key == 'Search' && !this.eqService.manFilters.isSearchDone)
    ) {
      /* this.eqService.addMelFilterBubble({
        type: 'search',
        searchBy: this.searchInput,
        title: 'Search: ' + this.searchInput
      }); */
      if (!this.searchInput || this.searchInput == '') {
        return;
      }
      this.eqService.isSearchLoading = true;
      this.eqService.manFilters.isSearchDone = false;
      this.eqService.manFilters.searchBy = this.searchInput;
      this.eqService.manFilters.refreshFlag = true;
      this.eqService.manFilters.pageNumber = 0;
      this.eqService.manFilters.pageIndex = 10;

      this.loadManEl();
    } else if (e.key == 'Search' && this.eqService.manFilters.isSearchDone) {
      // this.removeBubbles({type: 'search'});
      this.searchInput = '';
      this.eqService.isSearchLoading = false;
      this.eqService.manFilters.searchBy = this.searchInput;
      this.eqService.manFilters.refreshFlag = true;
      this.eqService.manFilters.pageNumber = 0;
      this.eqService.manFilters.pageIndex = 10;

      this.loadManEl();
    }
  }
}
