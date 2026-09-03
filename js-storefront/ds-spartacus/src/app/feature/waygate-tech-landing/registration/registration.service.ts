import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private apiService: ApiService) {}

  getRegFormFieldsData(Plurl) {
    const params = [Plurl, 'registerUser', 'details'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }

  sAPCustomerNumberValidation(formData, productLine) {
    const urlSeg = [productLine, 'registerUser', 'SAPCustomerNumberValidation'];
    const apiUrl = this.apiService.constructUrl(urlSeg);
    return this.apiService.postData(apiUrl, formData);
  }

  fetchSSOForEmail(
    email: string,
    fname: string,
    lname: string,
    productLine: string
  ) {
    const urlSeg = [productLine, 'registerUser', 'fetchSSOForEmail'];
    let param;
    param = new HttpParams()
      .set('email', email)
      .set('fname', fname)
      .set('lname', lname);
    const apiUrl = this.apiService.constructUrl(urlSeg);
    return this.apiService.getData(apiUrl, param);
  }

  processRequest(param, productLine) {
    const params = [productLine, 'registerUser', 'processRequest'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  calculateInputwidth(input) {
    if (input.length < 10) {
      return '100px';
    } else {
      return '160px';
    }
  }

  hideCommonHeaderFooter() {
    const header = document.getElementById('cx-header') as HTMLElement;
    if (header) header.style.display = 'none';

    const footer1 = document.querySelector(
      'cx-storefront>footer'
    ) as HTMLElement;
    if (footer1) footer1.style.display = 'none';

    const footer2 = document.querySelector(
      'cx-storefront.stop-navigating:after'
    ) as HTMLElement;
    if (footer2) footer2.style.display = 'none';

    const breadcrumb = document.querySelector('cx-breadcrumb') as HTMLElement;
    if (breadcrumb) breadcrumb.style.display = 'none';
  }

  showCommonHeaderFooter() {
    const header = document.getElementById('cx-header') as HTMLElement;
    if (header) header.style.display = 'block';

    const footer1 = document.querySelector(
      'cx-storefront>footer'
    ) as HTMLElement;
    if (footer1) footer1.style.display = 'block';

    const footer2 = document.querySelector(
      'cx-storefront.stop-navigating:after'
    ) as HTMLElement;
    if (footer2) footer2.style.display = 'block';

    const breadcrumb = document.querySelector('cx-breadcrumb') as HTMLElement;
    if (breadcrumb) breadcrumb.style.display = 'block';
  }

  uploadKYCAttachment(productLine, file) {
    const formData = new FormData();
    formData.append('file', file);
    const urlSeg = [productLine, 'registerUser', 'uploadKYCAttachment'];
    const apiUrl = this.apiService.constructUrl(urlSeg);
    return this.apiService.postData(apiUrl, formData, { responseType: 'text' });
  }
  uploadOSAttachment(productLine, file) {
    const formData = new FormData();
    formData.append('file', file);
    const urlSeg = [productLine, 'registerUser', 'uploadOSAttachment'];
    const apiUrl = this.apiService.constructUrl(urlSeg);
    return this.apiService.postData(apiUrl, formData, { responseType: 'text' });
  }

  verifyEmailConfirmation(productLine: string, userId: string, token: string) {
    const params = [productLine, 'registerUser', 'emailConfirmation', userId];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postQueryData(apiUrl, null, { token: token });
  }

  cancelRegistration(productLine: string, userId: string, token: string) {
    const params = [productLine, 'registerUser', 'cancelRequest', userId];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postQueryData(apiUrl, null, { token: token });
  }

  resendEmailConfirmation(productLine: string, userId: string, token: string) {
    const params = [productLine, 'registerUser',productLine, 'resendEmail',userId];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, null);
  }
}
