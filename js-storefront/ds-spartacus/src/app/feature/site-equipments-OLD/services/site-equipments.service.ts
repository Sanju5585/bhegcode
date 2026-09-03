import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { TranslateService } from '../../../shared/services/translate.service';
// import { urlPathJoin } from '@spartacus/core';

interface MelFilterbubble {
  type: string;
  fromDate?: string;
  toDate?: string;
  searchBy?: string;
  filterBy?: string;
  title: string;
  id?: string;
  raw?: boolean;
}

declare const ACC: any;

@Injectable({
  providedIn: 'root',
})
export class SiteEquipmentsService implements Resolve<any> {
  public isCustomerModified: boolean = true;
  public melPageEquipments: any = [];
  public totalEquipmentData: any = [];
  public melPageHeader: any = {};
  public reloadData: Subject<any> = new Subject();
  public melFilterBubbles: any = [];
  public isSearchLoading: boolean;
  public equipmentPartCount: any = {};
  public filteredEquipmentPartCount: any = {};
  public endCustomerEqCount: any = {};
  public totalEquipmentCount: any = 0;
  public defaultFromDate: Date = new Date();
  public defaultToDate: Date = new Date();
  public noRecordsFound: boolean = false;
  public sapError: boolean = false;
  public isFetchingMel: boolean = false;
  public fetchAPI: any = '';
  public productLines: any = '';
  public sortBy: any = [
    {
      id: 0,
      value: 'Items due',
      paramName: 'sortByServiceDue',
    },
    {
      id: 1,
      value: 'Last updated',
      paramName: 'sortByLastUpdated',
    },
  ];
  public groupBy: any = [
    {
      id: 0,
      value: 'No Grouping',
      paramName: 'default',
    },
    {
      id: 1,
      value: 'Product',
      paramName: 'product',
    },
    {
      id: 2,
      value: 'End Customer',
      paramName: 'endCustomer',
    },
  ];
  /*   public productType: any = [{
    id: 0,
    value: 'All Products',
    paramName: ''
  },
  {
    id: 1,
    value: 'Buyable',
    paramName: 'BUY'
  },
  {
    id: 2,
    value: 'Returnable',
    paramName: 'RETURN'
  }] */
  public melFilters: any = {
    MANorMELflag: 'CP_ALL',
    fromDate: this.datePipe.transform(this.defaultFromDate, 'dd-MM-yyyy'),
    toDate: this.datePipe.transform(this.defaultToDate, 'dd-MM-yyyy'),
    searchBy: '',
    filterBy: 'pinnedItems',
    pageNumber: 0,
    pageSize: 100,
    pageIndex: 10,
    isSearchDone: false,
    groupBy: this.groupBy[0].paramName,
    endCustomerID: '',
    productLinesSelected: [],
    sortBy: this.sortBy[0].paramName,
    // brFlag: this.productType[0].paramName
  };
  public manFilters: any = {
    MANorMELflag: 'CP_LIST',
    pageNumber: 0,
    pageSize: 100,
    pageIndex: 10,
    refreshFlag: true,
    filterBy: 'itemsNotInMEL',
    searchBy: '',
    isSearchDone: false,
  };

  public defaultMelPageCount: any = {
    totalItems: 0,
    itemsDueServicein1Month: 0,
    itemsDueServiceinQuarter: 0,
    archivedItems: 0,
    itemsServiceWasDue: 0,
    pinnedItems: 0,
  };

  public defaultManElPageCount: any = {
    totalItems: 0,
    itemsNotInMEL: 0,
  };

  constructor(
    private apiService: ApiService,
    private datePipe: DatePipe,
    private ts: TranslateService
  ) {
    this.melFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setFullYear(this.defaultToDate.getFullYear() - 3),
      'dd-MM-yyyy'
    );
    if (this.isFetchingMel && this.fetchAPI) {
      return;
    }
    this.fetchAPI = '';
    this.isFetchingMel = true;
    this.reloadData
      .pipe(
        switchMap(
          (obs) => (this.fetchAPI = this.getEquipmentList(this.melFilters))
        )
      )
      .subscribe((res: any) => {
        this.melFilters.isSearchDone = this.isSearchLoading ? true : false;

        this.setProductLines = res['productLines'] ? res['productLines'] : [];

        this.isSearchLoading = false;
        this.isCustomerModified = false;
        setTimeout(() => {
          this.isFetchingMel = false;
          this.fetchAPI = '';
        }, 2000);

        if (this.melFilters.pageNumber == 0) {
          this.melPageEquipments = res['groupByEquipmentData'];
          this.melPageHeader =
            res['melPageCountData'] || this.defaultMelPageCount;
          this.equipmentPartCount =
            res['equipmentPartCount'] || this.equipmentPartCount;
          this.filteredEquipmentPartCount =
            res['equipmentFilteredPartCount'] ||
            this.filteredEquipmentPartCount;
          this.endCustomerEqCount =
            res['equipmentEndCustomerCount'] || this.endCustomerEqCount;
          if (this.isCustomerModified) {
            this.setProductLines = res['productLines']
              ? res['productLines']
              : null;
          }
        } else {
          //this.melPageEquipments.push(...res['groupByEquipmentData']);
          this.spreadEuipmentData(res['groupByEquipmentData']);
          document.body.scrollTop = document.body.scrollTop - 10;
        }
        if (res['equipmentData']) {
          this.totalEquipmentData.push(...res['equipmentData']);
        }
        this.totalEquipmentCount = this.totalEquipmentData.length; // this.getTotalEquipmentCount();
        this.noRecordsFound = true ? this.totalEquipmentCount == 0 : false;
        this.sapError = true
          ? res['timeoutException'] ||
            res['executionException'] ||
            res['interruptedException']
          : false;
      });
  }

  public invokeMELPartSerialLookup(inParams) {
    return this.apiService.getData(
      environment.apis.MELPartSearchLookup,
      inParams
    );
  }

  public addEquipmentHistory(reqBody: any) {
    return this.apiService.putData(
      environment.apis.addEquipmentHistory,
      reqBody
    );
  }

  public deleteEquipmentHistory(reqBody: any) {
    return this.apiService.putData(
      environment.apis.addEquipmentHistory,
      reqBody
    );
  }

  public equipmentHistoryLookUp(inParams) {
    return this.apiService.putData(
      environment.apis.equipmentHistoryLookUp,
      inParams
    );
  }

  fetchCustomersData() {
    return this.apiService.getData(environment.apis.getCustomers);
  }

  public addEquipments(reqBody: any) {
    return this.apiService.putData(environment.apis.addEquipment, reqBody);
  }

  getEquipmentList(filters) {
    /*
    https://api.cd8zy6g-bakerhugh1-d1-public.model-t.cc.commerce.ondemand.com
    /occ/v2/bhge/users/212695810
    /mySiteEquipment
    /fetchEquipmentsForCustomer
    ?MANorMELflag=CP_ALL&fields=DEFAULT&filterBy=totalItems&fromDate=05-04-2018&pageNumber=0&pageSize=100&refreshFlag=true&toDate=05-04-2021
    */
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.myEquipmentList,
    ]);
    return this.apiService.getData(url, filters);
  }

  getManEquipment() {
    return this.apiService.getData(
      environment.apis.manEquipmentList,
      this.manFilters
    );
  }

  getFavourite(parms) {
    return this.apiService.getData(
      environment.apis.getFavourites + '?pageSize=' + parms
    );
  }
  getFavouriteSearch(parmsText, parmsSize) {
    return this.apiService.getData(
      environment.apis.getFavourites +
        '?pageSize=' +
        parmsSize +
        '&text=' +
        parmsText
    );
  }
  removeAllFavourite(params) {
    return this.apiService.postData(environment.apis.removeSingleFavs, params);
  }
  leavenote(params) {
    return this.apiService.postData(environment.apis.leaveanote, params);
  }
  addToFavourite(param) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = new HttpParams({
      fromObject: {
        'productCodes[]': param,
        CSRFToken: ACC['config']['CSRFToken'],
      },
    });
    return this.apiService.postData(environment.apis.addToFavList, data);
  }

  removeFromFavourite(param) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = new HttpParams({
      fromObject: {
        'productCodes[]': param,
        CSRFToken: ACC['config']['CSRFToken'],
      },
    });
    return this.apiService.postData(environment.apis.removeSingleFavs, data);
  }

  /**
   * @author Sumeet Roy
   * @description Load equipment list from server.
   * @returns Observable
   */

  resolve(route: ActivatedRouteSnapshot) {
    // For MAN equipment page
    if (route.routeConfig.path.search('manEL') !== -1) {
      this.manFilters.refreshFlag = true;
      this.manFilters.pageNumber = 0;
      return this.getManEquipment();
    }
    // for MY equipment page
    return Observable.create((observer) => {
      if (
        (this.melPageEquipments && this.totalEquipmentCount == 0) ||
        route.queryParams['isReload'] == 'true'
      ) {
        const filters = { ...this.melFilters };
        filters.refreshFlag = true;
        this.getEquipmentList(filters).subscribe((res: any) => {
          if (res['groupByEquipmentData']) {
            this.melPageEquipments = res['groupByEquipmentData'];
          }
          if (res['equipmentData']) {
            this.totalEquipmentData.push(...res['equipmentData']);
          }
          this.melPageHeader =
            res['melPageCountData'] || this.defaultMelPageCount;
          this.equipmentPartCount =
            res['equipmentPartCount'] || this.equipmentPartCount;
          this.filteredEquipmentPartCount =
            res['equipmentFilteredPartCount'] ||
            this.filteredEquipmentPartCount;
          this.endCustomerEqCount =
            res['equipmentEndCustomerCount'] || this.endCustomerEqCount;
          this.totalEquipmentCount = this.totalEquipmentData.length; // this.getTotalEquipmentCount();
          this.noRecordsFound = true ? this.totalEquipmentCount == 0 : false;
          this.sapError = true
            ? res['timeoutException'] ||
              res['executionException'] ||
              res['interruptedException']
            : false;
          this.productLines = res['productLines'] || this.productLines;
          observer.next({});
          observer.complete();
        });
      } else {
        observer.next({});
        observer.complete();
      }
    });
  }

  spreadEuipmentData(newDataObj) {
    for (let [key, value] of Object.entries(newDataObj)) {
      if (this.melPageEquipments.hasOwnProperty(key)) {
        this.melPageEquipments[key].push(...newDataObj[key]);
      } else {
        this.melPageEquipments[key] = newDataObj[key];
      }
    }
  }

  archiveEquipment(eqInfo) {
    return this.apiService.putData(environment.apis.addEquipment, [eqInfo]);
  }

  addToMel(req) {
    return this.apiService.putData(environment.apis.addEquipment, req);
  }

  addMelFilterBubble(filter: MelFilterbubble, isReload = true) {
    switch (filter.type) {
      case 'date':
        this.melFilters.fromDate = filter.fromDate;
        this.melFilters.toDate = filter.toDate;
        this.melFilterBubbles = this.melFilterBubbles.filter(
          (f) => f.type != 'date'
        );
        break;
      case 'search':
        this.melFilters.searchBy = filter.searchBy;
        this.isSearchLoading = true;
        this.melFilterBubbles = this.melFilterBubbles.filter(
          (f) => f.type != 'search'
        );
        break;
      case 'endCustomer':
        this.melFilters.endCustomerID = filter.id;
        this.melFilterBubbles = this.melFilterBubbles.filter(
          (f) => f.type != 'endCustomer'
        );
        break;
      case 'product_line':
        this.melFilters.productLinesSelected.push(filter.title);
        this.isCustomerModified = false;
        break;
    }
    this.melFilterBubbles.push(filter);
    this.melFilters.pageNumber = 0;
    this.melFilters.pageIndex = 10;
    this.totalEquipmentCount = 0;
    this.totalEquipmentData = [];
    this.reloadData.next(undefined);
  }

  removeFilterBubble(chips, refresh = true) {
    switch (chips.type) {
      case 'date':
        this.melFilters.fromDate = '';
        this.melFilters.toDate = '';
        this.melFilterBubbles = this.melFilterBubbles.filter(
          (f) => f.type != 'date'
        );
        break;
      case 'search':
        this.melFilters.searchBy = '';
        this.melFilterBubbles = this.melFilterBubbles.filter(
          (f) => f.type != 'search'
        );
        break;
      case 'endCustomer':
        this.melFilters.endCustomerID = '';
        this.melFilterBubbles = this.melFilterBubbles.filter(
          (f) => f.type != 'endCustomer'
        );
        break;
      case 'product_line':
        this.melFilters.productLinesSelected =
          this.melFilters.productLinesSelected.filter(
            (name) => name != chips.name
          );
        this.melFilterBubbles = this.melFilterBubbles.filter((filter) => {
          if (filter.title != chips.name) {
            return true;
          }
          filter.raw.selected = false;
          return false;
        });
        break;
    }
    this.melFilters.pageNumber = 0;
    this.melFilters.pageIndex = 10;
    this.totalEquipmentCount = 0;
    this.totalEquipmentData = [];
    this.reloadData.next(undefined);
  }

  getTotalEquipmentCount() {
    let totalCount: number = 0;
    const keys = Object.values(this.melPageEquipments);
    for (const key of keys) {
      totalCount += (<any>key).length;
    }
    return totalCount;
  }

  /**
   * @todo Need a separate API to fetch equipment details by part,serial number
   * @author Sumeet Roy
   * @description Find equipment details by part & serial number
   * @param partNumber string
   * @param serialNumber string
   * @returns Observable
   */
  getEquipmentDetail(partNumber, serialNumber, isReload?) {
    return Observable.create((observer) => {
      if (this.totalEquipmentCount > 0 && !isReload) {
        for (let i of this.totalEquipmentData) {
          if (i.partNumber == partNumber && i.serialNumber == serialNumber) {
            observer.next(i);
            return;
          }
        }
      } else {
        const lookupParams = {
          partNumber: partNumber,
          serialNumber: serialNumber,
        };

        this.equipmentHistoryLookUp(lookupParams).subscribe((res: any) => {
          observer.next(res[0]);
        });
      }
      // observer.error('DATA_NOT_FOUND');

      // If part number not found in the list
    });
  }

  public switchSalesArea(code, url, type) {
    ACC.common.switchSalesArea(code, url, type);
  }

  public createRMA(code, name, serialNum?) {
    ACC.common.createRMA(code, name, serialNum);
  }

  public onBuyBtnClick(event, code, name) {
    ACC.product.bindToAddToCartForm();
    ACC.product.addToCart(event, code, name);
  }

  public checkPriceBtnClick(productUrl) {
    window.location.href = productUrl;
  }

  public getTooltipText(param) {
    return this.ts.translate[param];
  }
  set setProductLines(tempPLines) {
    if (!tempPLines) {
      this.productLines = [];
      return;
    }
    const tempProductLines = this.productLines;
    this.productLines = [];
    for (let i = 0; i < tempPLines.length; i++) {
      let tempIndex = 0;

      // check if already exists or not
      let isSelected = tempProductLines.filter((o, index) => {
        if (o.name == tempPLines[i]) {
          tempIndex = index;
          return true;
        }
      });

      if (isSelected.length > 0) {
        tempProductLines.splice(tempIndex, 1);
        this.productLines.push(isSelected[0]);
      } else {
        this.productLines.push({ name: tempPLines[i], id: i });
      }
    }
    for (let i of tempProductLines) {
      if (i.selected) {
        this.removeFilterBubble({
          type: 'product_line',
          name: i.name,
        });
      }
    }
    // this.productLines = [];
    // let index = 0;
    // for (let i of tempPLines) {
    //   this.productLines.push({name: i, id: index});
    //   index++;
    // }
  }
}
