import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private apiService: ApiService) {}

  // function to get contact details
  getContactUsDetails() {
    const apiParams = ['users', 'current', 'contactus'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }
  getContactUsDetailssecond() {
    const apiParams = ['users', 'current', 'staticContactus'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }

  // function to save contact details
  saveContactUsDetails(detailsObj) {
    let param = {
      areaOfInterest: detailsObj.areaOfIntrest,
      city: detailsObj.city,
      companyName: detailsObj.companyName,
      country: detailsObj.country,
      email: detailsObj.companyEmail,
      firstName: detailsObj.firstName,
      lastName: detailsObj.lastName,
      mktoPersonNotes: detailsObj.requestDetails,
      optIn: detailsObj.communicationPef,
      phoneNum: detailsObj.phoneNumber,
      postalCode: detailsObj.postalCode,
      state: detailsObj.state,
      title: detailsObj.jobRole,
    };
    const apiParams = ['users', 'anonymous', 'contactus'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.postData(API_URL, param);
  }

  // functions to get country list
  /* getCountries() {
    const apiParams = ['countries'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  } */

  // functions to get country list
  getNewCountries() {
    const apiParams = ['dscountries'];
    const url = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(url);
  }

  //function to get state list
  /* getRegion(countryCode) {
    const params = ['countries', countryCode, 'regions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: countryCode };
    return this.apiService.getData(apiUrl, apiParams);
  } */

  //function to get state list
  getNewRegion(countryCode) {
    const params = ['dscountries', countryCode, 'dsregions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: countryCode };
    return this.apiService.getData(apiUrl, apiParams);
  }

  // function to get job roles
  getJobRoles() {
    return this.apiService.getData('assets/job-roles.json');
  }

  // function to get area of interests
  getAreaOfInterest() {
    return this.apiService.getData('assets/area-of-interest.json');
  }

  // function to get messages
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/contactUs.json');
  }
}
