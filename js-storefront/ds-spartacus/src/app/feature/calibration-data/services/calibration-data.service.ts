import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class CalibrationDataService {
  user$: Observable<unknown>;
  userType = '';
  ProbeType: any;
  ProbeSerialNumber: any;
  batchId: any;
  fields: any;
  public getSerialNumber;
  lang;

  public getProbType;
  constructor(
    private apiService: ApiService,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade
  ) {
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {}
    );
  }

  /**
   * @author Jerin
   * @description get the productFamily.
   * @returns Observable
   */
  getProductfamily() {
    const url = this.apiService.constructUrl([
      'users',
      this.userType,
      environment.apis.fetchProductfamily,
    ]);
    return this.apiService.getData(url);
  }

  /**
   * @author Jerin
   * @description get the SensorType.
   * @returns Observable
   */
  getProbeType() {
    const url = this.apiService.constructUrl([
      'users',
      this.userType,
      environment.apis.fetchCalibrationProbType,
    ]);
    return this.apiService.getData(url);
  }

  public addEquipment(inputParams) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.addEquipment,
    ]);
    return this.apiService.postData(url, inputParams);
  }

  getModelType() {
    const url = this.apiService.constructUrl([
      'users',
      'anonymous',
      environment.apis.fetchModelType,
    ]);
    return this.apiService.getData(url);
  }

  searchResults(ProbeSerialNumber, probeType, productFamily) {
    const urlParam = [
      'users',
      'anonymous',
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

  SendCalibrationData(guestUserData) {
    const apiUrl = this.apiService.constructUrl([
      'users',
      'anonymous',
      'dsPanCal',
      'emailCalibrationDataSheetPDFToguestUser?ProbeSerialNumber=' +
        this.getSerialNumber +
        '&ProbeType=' +
        this.getProbType +
        '&fields=DEFAULT',
    ]);
    return this.apiService.postData(apiUrl, guestUserData);
  }

  // functions to get country list
  getCountries() {
    const apiParams = ['dscountries'];
    const url = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(url);
  }

  //function to get state list
  getRegion(countryCode) {
    const params = ['dscountries', countryCode, 'dsregions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: countryCode };
    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadCalibrationPDF(probeSerialNumber, probeType) {
    const urlParam = [
      'users',
      'anonymous',
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
  savePromotions(guestUserform) {
    const urlParam = [
      'users',
      'anonymous',
      'dsPanCal',
      'saveGuestUserForm?fields=DEFAULT',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);

    return this.apiService.postData(apiUrl, guestUserform);
  }

  searchCertificates(caliberationNumber, searchType) {
    const urlParam = [
      'users',
      'anonymous',
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

    const urlParam = [
      'users',
      'anonymous',
      'wygate-data',
      'print',
      certicateURL,
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    return this.apiService.getData_PDF(apiUrl, apiParams);
  }
  downloadFilmidentificationPDF(batchId, lang) {
    const urlParam = [
      'users',
      'anonymous',
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

  searchDruckCalibrationData(productFamily, serialNumber, userType?) {
    const urlParam = [
      'users',
      userType ?? 'anonymous',
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

  downloadDruckCalibrationData(productLine, docId, userType?) {
    const urlParam = [
      'users',
      userType ?? 'anonymous',
      'dsDruck',
      'downloadDruckCalibrationData',
    ];
    const apiParams = {
      ProductLine: productLine,
      MediaId: docId,
      fields: 'DEFAULT',
    };
    const apiUrl = this.apiService.constructUrl(urlParam);
    return this.apiService.getData(apiUrl, apiParams);
  }
}
