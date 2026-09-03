import { HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../core/http/api.service';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';

@Injectable({
  providedIn: 'root',
})
export class LandingPagesService {
  private $trackData = new BehaviorSubject(null);

  public $getOrderBulk = new BehaviorSubject(null);
  // recieveOrderId = this.getOrderBulk.asObservable();

  constructor(
    private apiService: ApiService,
    //private custAccService: CustomerAccountService
  ) {}

  sendBulkOrderList(value: any) {
    this.$getOrderBulk.next(value);
  }

  getBulkOrderList() {
    return this.$getOrderBulk.asObservable();
  }

  sendTrackData(value) {
    this.$trackData.next(value);
  }

  getTrackData(): Observable<any> {
    return this.$trackData.asObservable();
  }

  orderStatus(stausParam, customerid, statusName) {
    const param = ['users', 'current', 'orderHistory', 'quickOrders'];
    const apiUrl = this.apiService.constructUrl(param);

    let params;
    params = new HttpParams().set('customerNumber', customerid);
    if (statusName === 'purchaseNumber') {
      params = params.set('poNumber', stausParam);
    } else {
      params = params.set('orderNumber', stausParam);
    }
    return this.apiService.postData(apiUrl, params);
  }

  rmaOrderStatus(stausParam, customerid, statusName) {
    const param = ['users', 'current', 'myReturns', 'quickRmaStatus'];
    const apiUrl = this.apiService.constructUrl(param);

    let params;
    params = new HttpParams().set('customerNumber', customerid);
    if (statusName === 'purchaseNumber') {
      params = params.set('poNumber', stausParam);
    } else {
      params = params.set('rmaNumber', stausParam);
    }
    return this.apiService.postData(apiUrl, params);
  }

  orderStatusByPO(stausParam, customerid) {
    const param = ['users', 'current', 'orderHistory', 'quickOrders'];
    const apiUrl = this.apiService.constructUrl(param);
    let params;
    params = new HttpParams().set('customerNumber', customerid);
    params = params.set('poNumber', stausParam);
    return this.apiService.postData(apiUrl, params);
  }

  orderStatusByNumber(stausParam, customerid) {
    const param = ['users', 'current', 'orderHistory', 'quickOrders'];
    const apiUrl = this.apiService.constructUrl(param);
    let params;
    params = new HttpParams().set('customerNumber', customerid);
    params = params.set('orderNumber', stausParam);
    return this.apiService.postData(apiUrl, params);
  }

  rmaStatusByPO(stausParam, customerid) {
    const param = ['users', 'current', 'myReturns', 'quickRmaStatus'];
    const apiUrl = this.apiService.constructUrl(param);
    let params;
    params = new HttpParams().set('customerNumber', customerid);
    params = params.set('poNumber', stausParam);
    return this.apiService.postData(apiUrl, params);
  }

  rmaStatusByNumber(stausParam, customerid) {
    const param = ['users', 'current', 'myReturns', 'quickRmaStatus'];
    const apiUrl = this.apiService.constructUrl(param);
    let params;
    params = new HttpParams().set('customerNumber', customerid);
    params = params.set('rmaNumber', stausParam);
    return this.apiService.postData(apiUrl, params);
  }

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

  myCartDetails(page, pageSize, sortCode, type) {
    const params = ['users', 'current', 'savedCarts'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = {
      page,
      pageSize,
      sortCode,
      type,
    };
    return this.apiService.getData(apiUrl, apiParams);
  }
  recentOrder() {
    let param;
    param = new HttpParams()
      .set('sortBy', 'CreateDsc')
      .set('pageNumber', '0')
      .set('pageSize', '6');
    const params = ['users', 'current', 'orderHistory', 'customerOrderStatus'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  recentReturn() {
    let param;
    param = new HttpParams()
      .set('sortBy', 'sortBylastUpdatedDSC')
      .set('pageNumber', '0')
      .set('pageSize', '6')
      .set('customerAddedFlag', 'false')
      .set('customerDeletedFlag', 'false')
      .set('fromDate', 'null')
      .set('isRefreshedFlag', 'null')
      .set('poNumber', 'null')
      .set('rmaNumber', 'null')
      .set('rmaStatus', 'null')
      .set('searchByValue', 'null')
      .set('toDate', 'null')
      .set('type', 'null');
    const params = [
      'users',
      'current',
      'myReturns',
      'fetchRMAStatusForCustomer',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  priceAndAvailabilityCheck(requestObj) {
    const params = ['users', 'current', 'my-account', 'inventoryCheckWidget'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, requestObj);
  }

  filmCheck(partNumber) {
    const params = ['users', 'current', 'my-account', 'validateFilmPart'];
    let param;
    param = new HttpParams().set('partNum', partNumber);
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  shipToAddress(currentSalesArea) {
    const params = ['users', 'current', 'my-account', 'getShipToAddress'];
    let param;
    param = new HttpParams().set('salesArea', currentSalesArea);
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, param);
  }

  showendUserAddress(checkoutCartId) {
    const params = [
      'users',
      'current',
      'dscheckout',
      checkoutCartId,
      'addresses',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }

  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/guest-home.json');
  }

  createCopyPasteOrder(cartId, inputParam, productLine) {
    const params = [
      'users',
      'current',
      'bulkOrders',
      cartId,
      'copyPasteUpload',
    ];
    let param;
    let parameter = ''
    inputParam.forEach((element, index) => {
      // if (index == 0) {
      //   parameter = element.productCode + ',' + element.quantity + ';';
      // } else
        parameter =
          parameter + element.productCode + ',' + element.quantity + ';';
    });
    param = {
      csvInput: parameter,
    };
    let apiparams = new HttpParams().set('productLine', productLine);
    const apiUrl = this.apiService.constructUrl(params);

    return this.apiService.postData(apiUrl, param, { params: apiparams });
  }

  checkPrice(cartId, priceParams) {
    const params = [
      'users',
      'current',
      'bulkOrders',
      cartId,
      'validateBulkUploadEntryForPrice',
    ];
    let param;
    param = new HttpParams()
      .set('lineNo', priceParams.lineNo)
      .set('partNum', priceParams.partNum)
      .set('qty', priceParams.qty);
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, param);
  }

  validateCart(cartId, uploadParam) {
    const params = ['users', 'current', 'bulkOrders', cartId, 'validate'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, uploadParam);
  }

  addBulkOrder(cartId, uploadParam) {
    const params = ['users', 'current', 'bulkOrders', cartId, 'addbulk'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, uploadParam);
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
}
