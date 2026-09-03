import { Injectable } from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { User, UserAccountFacade } from '@spartacus/user/account/root';
import { environment } from '../../../../../environments/environment';
import { ApiService } from '../../../../core/http/api.service';
@Injectable({
  providedIn: 'root',
})
export class BuyCheckoutService {
  private $ordercode = new BehaviorSubject(null);
  private $payInfo = new BehaviorSubject(null);
  private $saveCardInfo = new BehaviorSubject(null);
  private $cartData = new BehaviorSubject(null);
  private guestSalesArea: string = '';
  user$: Observable<User | undefined>;
  userType = '';
  userFirstName: string;
  snapPayKeyValue: string;
  userLastName: string;
  private poMap: any[] = [];
  constructor(
    private apiService: ApiService,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private http: HttpClient
  ) {
    this.user$ = this.authService.isUserLoggedIn().pipe(
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
          this.userFirstName = res.firstName;
          this.userLastName = res.lastName;
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  getOrderConfirmationData(orderCode, guestSalesAreaCode?) {
    const params = ['users', this.userType, 'dsOrders', orderCode];
    const apiParams = {
      guestSalesArea: guestSalesAreaCode ? guestSalesAreaCode : '',
    };
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, apiParams);
  }

  bindDefaultAddress(cartId) {
    const params = ['users', this.userType, 'dscheckout', cartId, 'choose'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }

  placeOrder(cartId, param) {
    const params = [
      'users',
      this.userType,
      'dscheckout',
      cartId,
      'updateAndPlaceOrder',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.http.post(apiUrl, param, { responseType: 'text' });
  }

  getsnapPayKey() {
    const params = ['users', this.userType, 'dscheckout', 'snapPayKey'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.http.get(apiUrl, { responseType: 'text' });
  }

  selectAddress(checkoutCartId) {
    const params = [
      'users',
      this.userType,
      'dscheckout',
      checkoutCartId,
      'ship-address',
      'select',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, {});
  }

  requsetDateForNonFilm(cartId, shipDateNonFilm) {
    let param;
    const params = [
      'users',
      this.userType,
      'dscheckout',
      cartId,
      'updateRequestedDateNonFilm',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    param = new HttpParams()
      .set('isShipComplete', 'true')
      .set('reqDelDateNonFilm', shipDateNonFilm);
    return this.apiService.postData(apiUrl, param);
  }

  requsetDateForFilm(cartId, shipDateFilm) {
    const params = [
      'users',
      this.userType,
      'dscheckout',
      cartId,
      'updateRequestedDeliveryDateFilm',
    ];
    let param;
    param = new HttpParams().set('reqDelDateFilm', shipDateFilm);
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  saveCreditCard(param, orderCode) {
    const params = ['users', this.userType, 'dsOrders', orderCode, 'savecard'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  sendData(value) {
    this.$ordercode.next(value);
  }

  receiveData(): Observable<any> {
    return this.$ordercode.asObservable();
  }
  sendSaveCardInfo(value) {
    this.$saveCardInfo.next(value);
  }

  receiveSaveCardInfo(): Observable<any> {
    return this.$saveCardInfo.asObservable();
  }
  sendPaymentTYpe(value) {
    this.$payInfo.next(value);
  }

  receivePaymentTYpe(): Observable<any> {
    return this.$payInfo.asObservable();
  }
  setGuestSalesArea(value) {
    this.guestSalesArea = value;
  }

  getGuestSalesArea() {
    return this.guestSalesArea;
  }

  sendCartData(value) {
    this.$cartData.next(value);
  }

  getCartData(): Observable<any> {
    return this.$cartData.asObservable();
  }

  initSnapPayKey(): void {
    this.getsnapPayKey().subscribe({
      next: token => {
        this.snapPayKeyValue = token;
      }
    })
  }

  generategetRequestIDHmac(data, companyId, currencyCode) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const nonce = uuidv4();
    const customerDetails = JSON.stringify({
      customername: data.firstName,
      addressline1: data.address,
      addressline2: '',
      city: data.city,
      state: data.state,
      zipcode: data.zip,
      country: data.country,
      pnone: data.phoneNumber,
      email: data.email,
    });
    const contentToEncode = JSON.stringify({
      accountid: environment.snapPayApi.accountId,
      transactionType: environment.snapPayApi.transactionType,
      customerid: companyId,
      userid: environment.snapPayApi.userId,
      language: 'en-US',
      companycode: companyId,
      currencycode: currencyCode,
      paymentmethod: environment.snapPayApi.paymentMode,
      transactionamount: environment.snapPayApi.transactionAmount,
      openiniframe: 'N',
      redirecturl: '#',
      customer: customerDetails,
    });
    const md5hash = CryptoJS.MD5(contentToEncode).toString(CryptoJS.enc.Base64);
    const secretKey = this.snapPayKeyValue;
    const signatureRawData =
      environment.snapPayApi.accountId +
      'POST' +
      environment.snapPayApi.getRequestID +
      timestamp +
      nonce +
      md5hash;
    const hmac = CryptoJS.HmacSHA256(signatureRawData, secretKey);
    const signature = CryptoJS.enc.Base64.stringify(hmac);
    const HmacData =
      environment.snapPayApi.accountId +
      ':' +
      signature +
      ':' +
      nonce +
      ':' +
      timestamp;
    const HmacData64String = btoa(HmacData);
    return HmacData64String;
  }

  // for placing order of quote checkout
  placeQuoteOrder(cartId, paramss) {
    const param = {
      fields: 'DEFAULT',
      ...paramss,
    };
    const params = ['users', this.userType, 'quote', cartId, 'create'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  setPo(ecaCode: string, ecaPONumber: string, entryNumber) {
    const index = this.poMap.findIndex(
      (item) => item.entryNumber === entryNumber
    );
    if (index != -1) {
      this.poMap[index] = {
        ...this.poMap[index],
        ecaCode,
        ecaPONumber,
      };
    } else this.poMap.push({ ecaCode, ecaPONumber, entryNumber });
  }

  getAllPo() {
    return this.poMap;
  }

  clearAllPo() {
    this.poMap = [];
  }
}
