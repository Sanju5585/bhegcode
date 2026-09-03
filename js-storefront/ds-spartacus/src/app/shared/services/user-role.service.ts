import { Injectable } from '@angular/core';
import {
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
} from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  userRoleInfo = new BehaviorSubject({});
  currentUserRole = new BehaviorSubject('');

  constructor(private apiService: ApiService) {}

  checkUserRoleEnabled(flagName) {
    return this.userRoleInfo.pipe(switchMap((res) => of(res[flagName])));
  }

  getCurrentB2BSalesArea(userType) {
    const urlParams = ['users', userType, 'userRoleOfB2BUnit'];
    const apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.getData(apiUrl)
  }

  getCurrentUserRole(userType) {
    if (userType == OCC_USER_ID_CURRENT) {
      const urlParams = ['users', userType, 'userRole'];
      const apiUrl = this.apiService.constructUrl(urlParams);
      this.apiService.getData(apiUrl).subscribe((res: any) => {
        this.currentUserRole.next(res);
      });
    } else if (userType == OCC_USER_ID_ANONYMOUS) {
      this.currentUserRole.next(AccessRoleType.GUEST);
    }
  }
}

export enum ACCESSIBILITY {
  SELLABILITYFLAG = 'sellabilityFlag',
  QUOTABILITYFLAG = 'quotabilityFlag',
}

export enum AccessRoleType {
  ADMIN = 'UG_ADMIN_ORDER_STORE',
  ORDER_TRACK = 'UG_ORDER_TRACKING',
  RMA = 'UG_RMA_AUTHORITY',
  VIEW_ONLY = 'UG_VIEW_STORE',
  GUEST = 'ANONYMOUS',
}
