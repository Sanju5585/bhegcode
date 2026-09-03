import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../core/http/api.service';
@Injectable({
  providedIn: 'root',
})
export class GuestQuoteService {
  private quoteCartDetailsObj = new BehaviorSubject({});
  getQuoteCartDetails = this.quoteCartDetailsObj.asObservable();
  private isQuoteEnable = new BehaviorSubject(false);
  getIsQuoteEnable = this.isQuoteEnable.asObservable();

  constructor(private apiService: ApiService) {}
  //function to get country list
  getCountries() {
    const apiParams = ['dscountries'];
    const url = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(url);
  }

  //function to create quote
  createQuote(cartId) {
    const params = ['users', 'anonymous', 'quote', 'create'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { 'cart Id': cartId };
    return this.apiService.getData(apiUrl, apiParams);
  }
  //function to edit quote
  editQuote(quoteId) {
    const params = ['users', 'anonymous', 'quote', quoteId, 'edit'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { quoteCode: quoteId };
    return this.apiService.getData(apiUrl, apiParams);
  }

  setQuoteCartDetails(quoteCartObj: object) {
    this.quoteCartDetailsObj.next(quoteCartObj);
  }

  setIsQuoteEnable(isQuoteEnable: boolean) {
    this.isQuoteEnable.next(isQuoteEnable);
  }
  //function to get state list
  getRegion(countryCode) {
    const params = ['dscountries', countryCode, 'dsregions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: countryCode };
    return this.apiService.getData(apiUrl, apiParams);
  }
  //function for enduser details
  getEnduserdetails() {
    const params = ['users', 'anonymous', 'quote', 'endUserType'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }
  //submit form
  submitQuotequoteId(param, quoteId) {
    const params = ['users', 'anonymous', 'quote', 'submit'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiOptions = {
      params: {
        quoteId: quoteId,
      },
    };
    return this.apiService.postData(apiUrl, param, apiOptions);
  }
  //cancel quoteId
  cancelQuoteId(quoteId) {
    const params = ['users', 'anonymous', 'quote', 'cancel'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = new HttpParams().set('quoteId', quoteId);
    return this.apiService.postData(apiUrl, apiParams);
  }
  // function to get messages
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/quotecheckout.json');
  }
  getCartmessage() {
    return this.apiService.getData('/assets/i18n-assets/en/quote-cart.json');
  }
}
