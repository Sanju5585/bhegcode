import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class RmaStatusService {
  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient
  ) {}
  rmaStatusDetails(rmaStausParam) {
    const param = [
      'users',
      'anonymous',
      'myReturns',
      'fetchRMAStatusForGuestDS',
    ];
    const apiUrl = this.apiService.constructUrl(param);

    let params;
    params = new HttpParams().set(
      'customerNumber',
      rmaStausParam.customerNumber
    );
    params = params.set('googleCaptcha', rmaStausParam.googleCaptcha);
    if (rmaStausParam.rmaNumber) {
      params = params.set('rmaNumber', rmaStausParam.rmaNumber);
      params = params.set('orderNumber', rmaStausParam.rmaNumber);
    } else {
      params = params.set('poNumber', rmaStausParam.poNumber);
    }
    return this.apiService.postData(apiUrl, params);
  }
  quickOrderStatus(stausParam) {
    const param = ['users', 'anonymous', 'orderHistory', 'quickOrders'];
    const apiUrl = this.apiService.constructUrl(param);

    let params;
    params = new HttpParams().set('customerNumber', stausParam.customerNumber);
    params = params.set('googleCaptcha', stausParam.googleCaptcha);
    if (stausParam.rmaNumber) {
      params = params.set('rmaNumber', stausParam.rmaNumber);
      params = params.set('orderNumber', stausParam.rmaNumber);
    } else {
      params = params.set('poNumber', stausParam.poNumber);
    }
    return this.apiService.postData(apiUrl, params);
  }
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/rma-tracking.json');
  }
}
