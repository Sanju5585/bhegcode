import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyQuotesService {
  
  emitQuoteDetail = new BehaviorSubject<any>(null);
  constructor(public apiService: ApiService) {}

  getQuotes(params, productline) {
    const urlParams = ['users', 'current', 'quote', productline, 'my-quotes'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(apiUrl, params);
  }

  acceptQuote(quoteId: string) {
    const urlParams = ['users', 'current', 'quote', quoteId, 'acceptQuote'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(
      apiUrl,
      {},
      { 'Content-Type': 'application/json' }
    );
  }
}
