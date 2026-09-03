import { Component } from '@angular/core';
import { RouterState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { CmsService, StorageSyncType, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { RegisterUrl } from '../../../shared/enums/availableProductList.enum';
import { CommonService } from '../../../shared/services/common.service';

enum BannerTypeEnum {
  outageBanner = 'OutageBannerComponent',
}
@Component({
  standalone: false,
  selector: 'app-wayagte-main-structure',
  templateUrl: './wayagte-main-structure.component.html',
  styleUrls: ['./wayagte-main-structure.component.scss'],
})
export class WayagteMainStructureComponent {
  currentSalesArea: any;
  outageBannerComponent$: Observable<any> =
    this.cmsService.getComponentData<any>(BannerTypeEnum.outageBanner);
  salesAreaOutageBannerComponent$: Observable <any>
  showOutageBanner = true;
  showHeader = true;
  orderData: any[] = [];
  showSAOutageBanner: boolean = true;
  constructor(
    private cmsService: CmsService,
    private commonService: CommonService,
    protected winRef: WindowRef,
    private store: Store<{ router: RouterState }>,
    private custAccountService: CustomerAccountService
  ) {
    this.custAccountService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.currentSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
        this.salesAreaOutageBannerComponent$ = this.cmsService.getComponentData<any>(
          this.currentSalesArea + "_" + BannerTypeEnum.outageBanner
        );
      }
      
      if (this.currentSalesArea) {
        this.custAccountService.setDisclaimerBannerMessage(
          this.currentSalesArea
        );
      }
    });
    this.store.select('router').subscribe((routerState: any) => {
      let currentUrl = routerState?.router?.state?.url;
      if (
        currentUrl &&
        Object.values(RegisterUrl).some((val) => val === currentUrl)
      ) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    });
    // if (this.showHeader) {
    this.getNotifications();
    // }
    this.showOutageBanner = this.getOutageBannerDisplayFromStorage()
      ? false
      : true;

    // If banner message is closed for more than 7 days, show the outage message
    if (!this.showOutageBanner) {
      const bannerDate = this.getOutageBannerDisplayFromStorage();
      const timeDifference =
        new Date().getTime() - new Date(bannerDate).getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      if (daysDifference >= 7) {
        this.showOutageBanner = true;
        this.removeOutageBannerDisplayFromStorage();
      }
    }
  }

  getNotifications() {
    this.custAccountService
      .getCurrentCustomerAccount()
      .pipe(take(2))
      .subscribe((res: any) => {
        if (res && res.uid) {
          this.custAccountService.verifyAndFetchNotification(res?.uid);
        }
      });
  }

  closeOutageBanner() {
    this.showOutageBanner = false;
    this.setOutageBannerDisplayToStorage(new Date().toString());
  }

    closeSAOutageBanner() {
    this.showSAOutageBanner = false;
  }

  setOutageBannerDisplayToStorage(showHideBanner: string) {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    this.commonService.persistToStorage(
      'outage-banner',
      showHideBanner,
      storage
    );
  }
  getOutageBannerDisplayFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.readFromStorage(storage, 'outage-banner');
  }

  removeOutageBannerDisplayFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.removeFromStorage(storage, 'outage-banner');
  }
}
