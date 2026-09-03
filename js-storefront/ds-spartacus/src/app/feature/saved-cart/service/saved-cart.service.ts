import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class SavedCartService {
  private ismodelFlag = new BehaviorSubject(null);
  private $setData = new BehaviorSubject(null);
  showCartName = new BehaviorSubject(null);
  getCartName = this.showCartName.asObservable();

  constructor(private apiService: ApiService) {}

  getSavedCarts(page, pageSize, type, sortCode) {
    const params = ['users', 'current', 'savedCarts'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = {
      page: page,
      pageSize: pageSize,
      sortCode: sortCode,
      type: type,
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  deleteSavedCart(cartId) {
    const params = ['users', 'current', cartId, 'delete'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.deleteData(apiUrl);
  }

deleteAllCarts(b2bUnit, salesOrg, commerceType) {
  const params = ['users', 'current', 'deleteAllCarts'];
  let apiUrl = this.apiService.constructUrl(params);

  apiUrl = `${apiUrl}?b2bUnit=${b2bUnit}&salesOrg=${salesOrg}&commerceType=${commerceType}`;

  return this.apiService.deleteData(apiUrl);
}

  ViewCartDetail(cartId) {
    const params = ['users', 'current', cartId, 'viewSavedCart'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }

  restorCart(cartId, cartParams) {
    const params = ['users', 'current', cartId, 'restore'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, cartParams, {
      responseType: 'text' as 'json',
    });
  }

  getCurrentCart() {
    const params = ['users', 'current', 'carts', 'current'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }

  loadCurrentCart(cartId) {
    let param;
    param = new HttpParams()
      .set('fields', 'DEFAULT')
      .set('guestSalesArea', 'DEFAULT');
    const params = ['users', 'current', 'carts', cartId];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, param);
  }

  checkExistingName(requestParam, cartId) {
    let param;
    param = new HttpParams()
      .set('page', requestParam.page)
      .set('saveCartName', requestParam.saveCartName)
      .set('show', requestParam.show)
      .set('responseType', 'text as json');
    const params = ['users', 'current', 'carts', cartId, 'checkSaveCartName'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, param);
  }

  setValidation(value) {
    this.ismodelFlag.next(value);
  }

  getValidation(): Observable<any> {
    return this.ismodelFlag.asObservable();
  }

  setCartCode(value) {
    this.$setData.next(value);
  }

  getGetCode(): Observable<any> {
    return this.$setData.asObservable();
  }

  setCartName(name) {
    this.showCartName.next(name);
  }
}
