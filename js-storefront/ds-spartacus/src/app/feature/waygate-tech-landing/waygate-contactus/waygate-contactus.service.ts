import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class WaygateContactUsService {
  constructor(private apiService: ApiService) {}

  getContactUs(userType, productLine, reqType) {
    const apiParams = ['users', userType, productLine, 'contactus', reqType];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }

  saveContactUsDetails(detailsObj, userType, productLine, selectedCustType) {
    let apiParams = [];

    if (selectedCustType == 0) {
      apiParams = ['users', userType, 'contactus'];
    } else {
      apiParams = ['users', userType, productLine, 'contactus'];
    }
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.postData(API_URL, detailsObj);
  }

  getCountries() {
    const apiParams = ['dscountries'];
    const url = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(url);
  }

  getRegion(countryCode) {
    const params = ['dscountries', countryCode, 'dsregions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: countryCode };
    return this.apiService.getData(apiUrl, apiParams);
  }

  getJobRoles() {
    return this.apiService.getData('assets/job-roles.json');
  }

  getAreaOfInterest() {
    return this.apiService.getData('assets/area-of-interest.json');
  }
}
