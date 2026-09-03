import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageSyncType, WindowRef } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public getStorage(storageType: StorageSyncType, winRef: WindowRef): Storage {
    let storage: Storage;
    if (!winRef?.isBrowser()) {
      return;
    }
    switch (storageType) {
      case StorageSyncType.LOCAL_STORAGE: {
        storage = winRef.localStorage;
        break;
      }
      case StorageSyncType.SESSION_STORAGE: {
        storage = winRef.sessionStorage;
        break;
      }
      case StorageSyncType.NO_STORAGE: {
        storage = undefined;
        break;
      }

      default: {
        storage = winRef.sessionStorage;
      }
    }
    return storage;
  }

  public persistToStorage(
    configKey: string,
    value: any,
    storage: Storage
  ): void {
    if (value) {
      storage.setItem(configKey, JSON.stringify(value));
    }
  }

  public readFromStorage(storage: Storage, key: string): any {
    key = this.sanitizer.sanitize(SecurityContext.HTML, key);
    const storageValue = storage.getItem(key);
    if (!storageValue) {
      return;
    }
    return JSON.parse(storageValue);
  }

  public removeFromStorage(storage: Storage, key: string) {
    key = this.sanitizer.sanitize(SecurityContext.HTML, key);
    const storageValue = storage.getItem(key);
    if (!storageValue) {
      return;
    }
    storage.removeItem(key);
  }
}
