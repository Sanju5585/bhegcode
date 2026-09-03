import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/http/api.service';


@Injectable({
  providedIn: 'root'
})
export class HelpResourcesService {


constructor(private apiService: ApiService) {}


  getFAQs() {
    const params = ['faqs'];
    const apiUrl = this.apiService.constructUrl(params);

    return this.apiService.getData(apiUrl);
  }

  
getResources() {
  const params = ['resources'];
  const apiUrl = this.apiService.constructUrl(params);

  return this.apiService.getData(apiUrl);
}

searchFAQs(keyword: string) {
  const params = ['faqs', 'search'];
  const apiUrl = this.apiService.constructUrl(params);

  const apiParams = {
    keyword: keyword
  };

  return this.apiService.getData(apiUrl, apiParams);
}

searchResources(keyword: string) {
  const params = ['resources', 'search'];
  const apiUrl = this.apiService.constructUrl(params);

  const apiParams = {
    keyword: keyword
  };

  return this.apiService.getData(apiUrl, apiParams);
}

}
