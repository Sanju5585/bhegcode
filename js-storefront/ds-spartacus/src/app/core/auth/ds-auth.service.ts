import { Injectable } from '@angular/core';
import { StorageSyncType, WindowRef } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';

export const USER_TYPE_KEY = 'user-type';

export enum UserTypes {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}

@Injectable({
  providedIn: 'root',
})
export class DSAuthService {
  private authErrorSource = new BehaviorSubject<any>({});
  authErrorError$ = this.authErrorSource.asObservable();

  constructor(
    private commonService: CommonService,
    protected winRef: WindowRef
  ) {}

  setAuthErrors(errorsObj: any) {
    this.authErrorSource.next(errorsObj);
  }

  setUserTypeToStorage(userType) {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    this.commonService.persistToStorage(USER_TYPE_KEY, userType, storage);
  }

  getUserTypeFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.readFromStorage(storage, USER_TYPE_KEY);
  }
}
