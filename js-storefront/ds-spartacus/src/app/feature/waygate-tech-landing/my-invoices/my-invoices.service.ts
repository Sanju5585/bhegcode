import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class MyInvoicesService {
  constructor(public apiService: ApiService) {}

  public getInvoices(params: any, productline: string) {
    const urlParams = [
      'users',
      'current',
      'invoice',
      productline,
      'my-invoices',
    ];
    // const urlParams = [
    //   'users',
    //   'current',
    //   'orderHistory',
    //   'customerOrderStatus',
    // ];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(apiUrl, params);
  }

  public invoicePaymentPage(payload: any) {
    const urlParams = ['users', 'current', 'invoice', 'invoicePaymentPage'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(apiUrl, payload);
  }

  public calculateInvoiceAmount(payload: any[]) {
    const urlParams = ['users', 'current', 'invoice', 'calculateInvoiceAmount'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(apiUrl, payload);
  }
  public checkout(payload: any[]) {
    const urlParams = ['users', 'current', 'invoice', 'checkout'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(apiUrl, payload);
  }

  public saveCreditCard(payload: any) {
    const urlParams = ['users', 'current', 'invoice', 'savecard'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postData(apiUrl, payload, { responseType: 'text' });
  }

  public fetchInvoiceAttachment(payload: any) {
    const urlParams = ['users', 'current', 'invoice', 'fetchInvoiceAttachment'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData_PDF(apiUrl, payload);
  }

}
