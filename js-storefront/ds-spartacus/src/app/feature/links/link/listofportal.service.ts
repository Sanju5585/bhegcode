import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class ListofportalService {
  constructor(private apiService: ApiService) {}

  getLinkData() {
    const urlParam = ['listOfPortals'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      fields: 'DEFAULT',
    };
    return this.apiService.getData(apiUrl, apiParams);
  }
  // function to get messages
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/link.json');
  }
}
