import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteCartService {
  userType: string = 'current';
  constructor(private apiService: ApiService) {}

  applyToAllShipDate(cartId: string, reqDate: string) {
    const params = [
      'users',
      this.userType,
      'carts',
      cartId,
      'updateHeaderReqDate',
    ];
    const apiUrl = this.apiService.constructUrl(params);

    return this.apiService.putData_options(`${apiUrl}?reqDate=${reqDate}`, {});
  }

  downloadDocument(quoteId,emailID) {
    const urlParam = [
      'users',
      emailID, 
      'quote',
      quoteId,
      'downloadQuotePDF'
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    return this.apiService.getData_Cache_PDF(apiUrl);
  }
}
