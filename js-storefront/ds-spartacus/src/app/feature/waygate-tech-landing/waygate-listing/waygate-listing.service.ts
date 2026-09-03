import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ConverterService,
  OccEndpointsService,
  PRODUCT_NORMALIZER,
} from '@spartacus/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';

@Injectable({
  providedIn: 'root',
})
export class WaygateListingService {
  activeSalesArea: any;

  constructor(
    private occEndpointsService: OccEndpointsService,
    private http: HttpClient,
    private custAccService: CustomerAccountService,
    private converterService: ConverterService
  ) {
    this.activeSalesArea =
      this.custAccService.getGuestActiveSalesAreaFromStorage();
  }
  getProducts(userType, params) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/products/search`
    );
    let up;
    if (userType == 'current') {
      up = {
        fields: 'FULL',
        ...params,
      };
    } else {
      up = {
        fields: 'FULL',
        guestSalesArea: this.activeSalesArea?.salesAreaId || '1800_GE_GE',
        ...params,
      };
    }
    const apiOptions = {
      params: this.clean(up),
    };

    return this.http.get(API_URL, apiOptions);
  }
  getBreadcrumbs(userType, categoryCode) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/breadcrumb/${categoryCode}`
    );
    return this.http.get(API_URL);
  }
  clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }
}
