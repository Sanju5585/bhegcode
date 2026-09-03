import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../../core/http/api.service';
@Injectable({
  providedIn: 'root',
})
export class GuestBuyCheckoutService {
  private isValidateFlag = new BehaviorSubject(false);

  private validateMessage = new BehaviorSubject('');
  currentMessage = this.validateMessage.asObservable();
  private guestValidation = new BehaviorSubject('');
  getGuestValidation = this.guestValidation.asObservable();
  private paymentValidation = new BehaviorSubject('');
  getpaymentValidation = this.paymentValidation.asObservable();
  private shippingValidation = new BehaviorSubject('');
  getshippingValidation = this.shippingValidation.asObservable();
  private payerValidation = new BehaviorSubject('');
  getpayerValidation = this.payerValidation.asObservable();
  private notificationValidation = new BehaviorSubject('');
  getnotificationValidation = this.notificationValidation.asObservable();
  private endUserValidation = new BehaviorSubject('');
  getendUserValidation = this.endUserValidation.asObservable();
  private complianceValidation = new BehaviorSubject('');
  getcomplianceValidation = this.complianceValidation.asObservable();
  address: any;
  endUserCategory: any;
  constructor(private apiService: ApiService) {}

  setSoldToAddress(address) {
    this.address = address;
  }

  getSoldToAddress() {
    return this.address;
  }

  setEndUserCategory(endUserCategory) {
    this.endUserCategory = endUserCategory;
  }

  getEndUserCategory() {
    return this.endUserCategory;
  }

  public getCountries(_userId, _activeCartId) {
    const apiParams = ['dscountries'];
    const url = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(url);
  }

  public getRegion(_userId, _activeCartId, code) {
    const params = ['dscountries', code, 'dsregions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: code };
    return this.apiService.getData(apiUrl, apiParams);
  }

  getCheckoutData(_userId, _activeCartId, activeSalesArea) {
    const params = ['users', _userId, 'dscheckout', _activeCartId, 'choose'];
    const apiParams = { fields: 'DEFAULT', guestSalesArea: activeSalesArea };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, apiParams);
  }

  postShippingAddress(_userId, _activeCartId, address) {
    const params = [
      'users',
      _userId,
      'dscheckout',
      _activeCartId,
      'createShipAddress',
    ];
    const apiParams = { fields: 'DEFAULT' };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, address, apiParams);
  }

  postSoldToAddress(_userId, _activeCartId, address) {
    const params = [
      'users',
      _userId,
      'dscheckout',
      _activeCartId,
      'createSoldto-Address',
    ];
    const apiParams = { fields: 'DEFAULT' };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, address, apiParams);
  }

  postEndUserAddress(_userId, _activeCartId, address) {
    const params = [
      'users',
      _userId,
      'dscheckout',
      _activeCartId,
      'createEndUserAddress',
    ];
    const apiParams = { fields: 'DEFAULT' };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, address, apiParams);
  }
  postPlaceOrder(_userId, _activeCartId, data) {
    const params = [
      'users',
      _userId,
      'dscheckout',
      _activeCartId,
      'updateAndPlaceOrder',
    ];
    const apiParams = { fields: 'DEFAULT' };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, data, apiParams);
  }
  getOrderConfirmation(_userId, orderCodes) {
    const params = ['users', _userId, 'dsOrders', orderCodes];
    const apiParams = { fields: 'DEFAULT' };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, apiParams);
  }
  setValidation(value) {
    this.isValidateFlag.next(value);
  }

  getValidation(): Observable<any> {
    // Duplicate identifier 'isLoggedIn'.
    return this.isValidateFlag.asObservable();
  }
  setNotificationValidation(status: string) {
    this.notificationValidation.next(status);
  }
  setendUserValidation(status: string) {
    this.endUserValidation.next(status);
  }
  setshippingValidation(status: string) {
    this.shippingValidation.next(status);
  }
  setpayerValidation(status: string) {
    this.payerValidation.next(status);
  }
  setcomplianceValidation(status: string) {
    this.complianceValidation.next(status);
  }
  setpaymentValidation(status: string) {
    this.paymentValidation.next(status);
  }
  setGuestvalidation(status: string) {
    this.guestValidation.next(status);
  }
  validateForm(validateMsg: string) {
    this.validateMessage.next(validateMsg);
  }
  // function to get messages
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/checkOut.json');
  }
}
