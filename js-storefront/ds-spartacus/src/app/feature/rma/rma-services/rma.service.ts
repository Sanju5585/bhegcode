import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OCC_CART_ID_CURRENT, OccEndpointsService } from '@spartacus/core';
import { RmaStatusService } from '../rma-status/rma-status.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { ApiService } from '../../../core/http/api.service';
import { RmaEntry } from '../../../shared/models/rma/rma.model';
@Injectable({
  providedIn: 'root',
})
export class RmaService {
  rmaCartId$: Observable<string> = this.activeCartFacade.getActiveCartId();
  rmaCartId: string;
  cartEntryNumber: any;
  public rmaNumber: any;
  warrantyCLaimInformation: any;
  manufacturingYear: any;
  rmaSalesOrg: any;
  createReorderRmaEntry$: Observable<string>;
  constructor(
    private apiService: ApiService,
    private activeCartFacade: ActiveCartFacade,
    private occEndpointsService: OccEndpointsService,
    private http: HttpClient
  ) {
    this.rmaCartId$.subscribe((rmaCartId) => {
      this.rmaCartId = rmaCartId || OCC_CART_ID_CURRENT;
    });
  }

  public rmaEntryData = new BehaviorSubject<RmaEntry>(new RmaEntry());
  getRmaEntryData = this.rmaEntryData.asObservable();

  sendRmaEntry(entry: RmaEntry) {
    this.rmaEntryData.next(entry);
  }

  serviceOfferings(userType, payload: any) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/ServiceOffering`
    );
    const apiOptions = {
      params: {
        fields: 'DEFAULT',
      },
    };
    return this.apiService.putData_options(API_URL, payload, apiOptions);
  }

  createRmaEntry(userType, payload: RmaEntry) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/${this.rmaCartId}/rmaForm`
    );
    return this.apiService.putData(API_URL, payload);
  }
  createReorderRmaEntry(userType, orderNumber) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/myReturns/${this.rmaCartId}/reOrderRMA/${orderNumber}`
      // {baseSiteId}/users/{userId}/myReturns/{cartId}/reOrderRMA/{rmaNumber}
    );
    const apiOptions = {
      fields: 'DEFAULT',
    };
    return this.apiService.getData(API_URL, apiOptions);
  }
  createReorderLineItemRmaEntry(userType, cartId, orderNumber, entryNumber) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/myReturns/${cartId}/reOrderRMA/${orderNumber}/${entryNumber}`
      // {baseSiteId}/users/{userId}/myReturns/{cartId}/reOrderRMA/{rmaNumber}
    );
    const apiOptions = {
      fields: 'DEFAULT',
    };

    return this.apiService.getData(API_URL, apiOptions);
  }
  getAccessories(userType, payload) {
    const apiParams = ['users', userType, 'rma', 'accessories'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.putData(API_URL, payload);
  }

  editRma(userType, entryNumber) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/${this.rmaCartId}/editRMA/${entryNumber}`
    );
    const apiOptions = {
      fields: 'DEFAULT',
    };
    return this.apiService.getData(API_URL, apiOptions);
  }

  getHazardCompleteness(userType) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/hazardCompleteness`
    );
    return this.http.get(API_URL, { responseType: 'text' });
  }

  cloneRma(userType, entryNumber) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/${this.rmaCartId}/cloneRmaForm/${entryNumber}`
    );
    const apiOptions = {
      fields: 'DEFAULT',
    };
    return this.apiService.getData(API_URL, apiOptions);
  }

  partSearch(userType, searchObj) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/rma-form/partSearch`
    );
    let apiOptions = new HttpParams();
    Object.keys(searchObj).forEach(
      (key) =>
        searchObj[key] && (apiOptions = apiOptions.append(key, searchObj[key]))
    );
    // const apiOptions = searchObj
    return this.apiService.getData(API_URL, apiOptions);
  }

  autoComplete(userType, searchObj) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/autocomplete`
    );
    let apiOptions = new HttpParams();
    Object.keys(searchObj).forEach(
      (key) =>
        searchObj[key] && (apiOptions = apiOptions.append(key, searchObj[key]))
    );
    return this.apiService.getData(API_URL, apiOptions);
  }

  getHazardInfo() {
    let url = this.occEndpointsService.buildUrl('users/current/rma/hazardInfo');
    return this.apiService.getData(url);
  }

  saveHazardInfo(hazardInfo) {
    let url = this.occEndpointsService.buildUrl('users/current/rma/hazardInfo');
    return this.apiService.putData(url, hazardInfo);
  }

  changeCartType(userType, params) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/carts/${this.rmaCartId}`
    );
    let apiOptions = new HttpParams();
    Object.keys(params).forEach(
      (key) => params[key] && (apiOptions = apiOptions.append(key, params[key]))
    );
    return this.apiService.putData_options(API_URL, null, apiOptions);
  }
  deleteSelectedItems(userType, selectedItems) {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/rma/${this.rmaCartId}/entries`,
      { queryParams: selectedItems }
    );
    return this.apiService.deleteData(API_URL);
  }
}

// getUrl
