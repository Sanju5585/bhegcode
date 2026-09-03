import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Observable, retry, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  getStatusCount(param) {
    const params = ['csr', 'fetchCounts'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl, param);
  }

  getCustomerList(params) {
    const urlParams = ['csr', 'fetchRequestlist'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData(apiUrl, params);
  }

  getCustomerDetail(accessRequestId) {
    const urlParams = ['csr', 'fetchRequestorDetails'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData(apiUrl, {
      requestAccessId: accessRequestId,
    });
  }

  updateStatus(params) {
    const urlParams = ['csr', 'processWorklist'];
    const apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postQueryData(apiUrl, null, params);
  }

  getDetailsinXLSFormat(params): Observable<any> {
    const urlParams = ['csr', 'downloadlist'];
    const apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData_Excel(apiUrl, params);
  }

  getRequestDetailsinXLSFormat(mediaCode: {
    mediaCode: string;
  }): Observable<HttpResponse<Blob>> {
    const urlParams = ['csr', 'downloadAttachment'];
    const apiUrl = this.apiService.constructUrl(urlParams);

    return this.http
      .get<Blob>(apiUrl + `?mediaCode=${mediaCode.mediaCode}`, {
        observe: 'response',
        responseType: 'blob' as 'json',
      })
      .pipe(retry(1));
  }
}
