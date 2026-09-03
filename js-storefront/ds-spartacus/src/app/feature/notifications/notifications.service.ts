import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  public defaultFromDate: Date = new Date();
  public defaultToDate: Date = new Date();
  public getUpdatedCount: any;

  public melFilters: any = {
    MANorMELflag: 'CP_ALL',
    fields: 'DEFAULT',
    filterBy: 'totalItems',
    fromDate: this.datePipe.transform(this.defaultFromDate, 'yyyy-MM-dd'),
    refreshFlag: true,
    toDate: this.datePipe.transform(this.defaultToDate, 'yyyy-MM-dd'),
  };

  constructor(
    private apiService: ApiService,
    private datePipe: DatePipe
  ) {
    this.melFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
  }

  public getAllNotifications(filters) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.getAllNotifications,
    ]);
    return this.apiService.getData(url, filters);
  }

  flagNotifications(filters) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.flagNotifications,
    ]);
    return this.apiService.getData(url, filters);
  }

  markReadNotifications(filters) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.markasReadNotifications,
    ]);
    return this.apiService.getData(url, filters);
  }

  dismissedReadNotifications(filters) {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.dismissNotifications,
    ]);
    return this.apiService.getData(url, filters);
  }

  searchNotifications(SerialNumber) {
    const urlParam = [
      'users',
      'current',
      'dsNotifications',
      'searchNotificationsBySerialNo',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      fields: 'DEFAULT',
      serialNumber: SerialNumber,
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  dismissAllNotifications() {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      environment.apis.dismissAllNotifications,
    ]);
    return this.apiService.getData(url);
  }
}
