import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleManagementService {
  constructor(private apiService: ApiService) {}

  // Get Users List
  getUserList(params): Observable<any> {
    const urlParams = ['usermanage', 'getusers'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData(apiUrl, params);
  }

  // Update User
  updateStatus(params): Observable<any> {
    const urlParams = ['usermanage', 'updateuser'];
    const apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postQueryData(apiUrl, null, params);
  }

  // Download User List
  getDetailsinXLSFormat(params): Observable<any> {
    const urlParams = ['usermanage', 'downloadusers'];
    const apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData_Excel(apiUrl, params);
  }

  //Get Customer Account
  getAccount(params): Observable<any>{
    const urlParams = ['usermanage','getB2bUnits']
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData(apiUrl, params);
  }
}
