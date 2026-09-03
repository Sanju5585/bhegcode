import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  constructor(private apiService: ApiService) {}
  //https://localhost:7002/occ/v2/bhge/users/current/my-account/getSalesAreaForSoldTo?SoldTo%20Id=0000138305&fields=DEFAULT

  getProfileData() {
    const apiParams = ['users', 'current', 'my-account', 'personal-details'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }
  postProfileData(data) {
    const apiParams = ['users', 'current', 'my-account', 'personal-details'];
    const API_URL = this.apiService.constructUrl(apiParams);
    const params = { fields: 'DEFAULT', responseType: 'text' as 'json' };
    return this.apiService.postData(API_URL, data, params);
  }
  getAccountData() {
    const apiParams = ['users', 'current', 'my-account', 'customer-account'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }
  postAccountData(data) {
    const apiParams = ['users', 'current', 'my-account', 'customer-account'];
    const API_URL = this.apiService.constructUrl(apiParams);
    const params = { fields: 'DEFAULT', responseType: 'text' as 'json' };
    return this.apiService.postData(API_URL, data, params);
  }
  getNotificationData() {
    const apiParams = ['users', 'current', 'my-account', 'notification'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }
  postNotificationData(data) {
    const apiParams = ['users', 'current', 'my-account', 'notification'];
    const API_URL = this.apiService.constructUrl(apiParams);
    const params = { fields: 'DEFAULT', responseType: 'text' as 'json' };
    return this.apiService.postData(API_URL, data, params);
  }
  getOrderData() {
    const apiParams = ['users', 'current', 'my-account', 'order-details'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }
  postOrderData(data) {
    const apiParams = ['users', 'current', 'my-account', 'order-details'];
    const API_URL = this.apiService.constructUrl(apiParams);
    const params = { fields: 'DEFAULT', responseType: 'text' as 'json' };
    return this.apiService.postData(API_URL, data, params);
  }
  getShipToData(salesArea) {
    const params = ['users', 'current', 'my-account', 'getShipToAddress'];
    const apiParams = { salesArea: salesArea };
    const API_URL = this.apiService.constructUrl(params);
    return this.apiService.getData(API_URL, apiParams);
  }
  postShipToData(data) {
    const apiParams = ['users', 'current', 'my-account', 'shipTo'];
    const API_URL = this.apiService.constructUrl(apiParams);
    const params = { fields: 'DEFAULT', responseType: 'text' as 'json' };
    return this.apiService.postData(API_URL, data, params);
  }
  getCurrency() {
    const apiParams = ['users', 'current', 'my-account', 'getCurrency'];
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL);
  }
  postCurrency(data) {
    const apiParams = ['users', 'current', 'my-account', 'setCurrency'];
    const API_URL = this.apiService.constructUrl(apiParams);
    const params = { fields: 'DEFAULT', responseType: 'text' as 'json' };
    return this.apiService.postData(API_URL, data, params);
  }
  getSalesAreaForSoldTo(soldToId) {
    const apiParams = [
      'users',
      'current',
      'my-account',
      'getSalesAreaForSoldTo',
    ];
    const params = { 'SoldTo Id': soldToId };
    const API_URL = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(API_URL, params);
  }
}
