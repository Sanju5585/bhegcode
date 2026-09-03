import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/http/api.service';
import { TranslateService } from '../../shared/services/translate.service';
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
  equipmentTileStatus = new BehaviorSubject<any>('All Orders');

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
  public getPartNumber;
  public getPartName;

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
    endCustomerID: '',
    productLinesSelected: [],
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
    pendingRMA: 0,
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
        this.isSearchLoading = false;
        this.isCustomerModified = false;
        setTimeout(() => {
          this.isFetchingMel = false;
          this.fetchAPI = '';
        }, 2000);

        if (res['equipmentData']) {
          this.totalEquipmentData.push(...res['equipmentData']);
        }
        this.totalEquipmentCount = this.totalEquipmentData.length; // this.getTotalEquipmentCount();
        this.noRecordsFound = true ? this.totalEquipmentCount == 0 : false;
      });
  }

  getEquipmentList(filters) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.myEquipmentList,
    ]);
    return this.apiService.getData(url, filters);
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
    }
  }

  public equipmentHistoryLookUp(inParams) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.equipmentHistoryLookUp,
    ]);
    return this.apiService.postData(url, inParams);
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
    });
  }

  /**
   * @author Kailas
   * @description Download calibration PDF file.
   * @returns Observable
   */
  downloadCalibrationPDF(probeSerialNumber, probeType) {
    const urlParam = [
      'users',
      'current',
      'dsPanCal',
      'downloadCalibrationDataSheetPDF',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      ProbeSerialNumber: probeSerialNumber,
      ProbeType: probeType,
      fields: 'DEFAULT',
    };
    return this.apiService.getData_PDF(apiUrl, apiParams);
  }

  getProductfamily() {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.fetchProductfamily,
    ]);
    return this.apiService.getData(url);
  }

  getProbeType(userType?) {
    const url = this.apiService.constructUrl([
      'users',
      userType ?? 'current',
      environment.apis.fetchCalibrationProbType,
    ]);
    return this.apiService.getData(url);
  }

  getModelType(userType?) {
    const url = this.apiService.constructUrl([
      'users',
      userType ?? 'current',
      environment.apis.fetchModelType,
    ]);
    return this.apiService.getData(url);
  }

  public addNewEquipment(inParams) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.addEquipment,
    ]);
    return this.apiService.postData(url, inParams);
  }

  archiveEquipment(inParams) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.addEquipment,
    ]);
    return this.apiService.postData(url, inParams);

    //return this.apiService.putData(environment.apis.addEquipment, [eqInfo]);
  }

  invokeMELPartSerialLookup(inParams) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.MELPartSearchLookup,
    ]);
    return this.apiService.getData(url, inParams);
  }

  searchResults(ProbeSerialNumber, probeType, productFamily, usertype?) {
    const urlParam = [
      'users',
      usertype ?? 'current',
      'dsPanCal',
      'searchCalibrationData',
    ];

    const apiUrl = this.apiService.constructUrl(urlParam);

    const apiParams = {
      ProbeSerialNumber: ProbeSerialNumber,
      ProbeType: probeType,
      ProductFamily: productFamily,
      fields: 'DEFAULT',
    };

    return this.apiService.getData(apiUrl, apiParams);
  }
  getEndcustomer() {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.fetchEndcustomer,
    ]);
    return this.apiService.getData(url);
  }

  msePartAutoSearch(searchTerm) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.msePartAutoSearchList,
    ]);

    const apiParams = {
      term: searchTerm,
      filter: 'ALL',
      fields: 'DEFAULT',
    };
    return this.apiService.getData(url, apiParams);
  }
  searchCertificates(caliberationNumber, searchType) {
    const urlParam = [
      'users',
      'current',
      'wygate-data',
      'search',
      'certificates',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      caliberationNumber: caliberationNumber,
      searchType: searchType,
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadCertificatePDF(batchId, caliberationType) {
    let certicateURL;
    let apiParams;
    if (caliberationType === 'BATCH') {
      certicateURL = 'film-confirmity-certificate';
      apiParams = {
        batchNumber: batchId,
      };
    } else if (caliberationType === 'FABRICATION') {
      certicateURL = 'chemistry-confirmity-certificate';
      apiParams = {
        fabricationNumber: batchId,
      };
    }
    const urlParam = ['users', 'current', 'wygate-data', 'print', certicateURL];
    const apiUrl = this.apiService.constructUrl(urlParam);
    return this.apiService.getData_PDF(apiUrl, apiParams);
  }

  downloadFilmidentificationPDF(batchId, lang) {
    const urlParam = [
      'users',
      'current',
      'wygate-data',
      'print',
      lang,
      'film-identification-test-results',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      batchNumber: batchId,
    };
    return this.apiService.getData_PDF(apiUrl, apiParams);
  }

  searchDruckCalibrationData(productFamily, serialNumber) {
    const urlParam = [
      'users',
      'current',
      'dsDruck',
      'searchDruckCalibrationData',
    ];
    const apiParams = {
      ProductFamily: productFamily,
      SerialNumber: serialNumber,
    };
    const apiUrl = this.apiService.constructUrl(urlParam);

    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadDruckCalibrationData(productLine, docId) {
    const urlParam = [
      'users',
      'current',
      'dsDruck',
      'downloadDruckCalibrationData',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      productLine: productLine,
      MediaId: docId,
      fields: 'DEFAULT',
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadDruckCalibrationDataBlob(url) {
    return this.apiService.download_PDF(url);
  }
}
