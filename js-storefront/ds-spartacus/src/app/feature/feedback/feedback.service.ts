import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private deleteAfterSubmit: boolean;
  constructor(private apiService: ApiService) {}
  feedbackDetails(param, userType, cartId) {
    const params = ['users', userType, cartId, 'add-support-ticket'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/feedback.json');
  }
  setVal(val: boolean) {
    this.deleteAfterSubmit = val;
  }
  getVal() {
    return this.deleteAfterSubmit;
  }
}
