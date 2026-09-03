import { Injectable } from '@angular/core';
import { GTMDataLayer } from '../models/googleTagManager.model';
import { GtmEvents, StoreType, StoreTypeEnum } from '../enums/gtm.enum';
import { NavigationEnd, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { AuthService } from '@spartacus/core';
import { AllProductLine } from '../enums/availableProductList.enum';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
@Injectable({
  providedIn: 'root',
})
export class GoogleTagManagerService {
  currentUrl: string;
  user: any;
  customerAccount: any;
  activeSalesArea: any;
  localActiveSalesArea: any;
  productLine: string;
  allProductLine = AllProductLine;
  customerCountry: any;
  constructor(
    private router: Router,
    protected userAccountFacade: UserAccountFacade,
    protected authService: AuthService,
    private custAccountService: CustomerAccountService
  ) {
    this.localActiveSalesArea =
      this.custAccountService.getGuestActiveSalesAreaFromStorage();
    this.getUser();
    this.getCustomerAccount();
    this.getProductLine();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
  getUser() {
    this.authService
      .isUserLoggedIn()
      .pipe(
        switchMap((isUserLoggedIn) => {
          if (isUserLoggedIn) {
            return this.userAccountFacade.get();
          } else {
            return of(undefined);
          }
        })
      )
      .subscribe((res: any) => {
        if (res) {
          this.user = res;
          console.log(this.user);
        }
      });
  }
  getCustomerAccount() {
    this.custAccountService
      .getCurrentCustomerAccount()
      .subscribe((res: any) => {
        if (res?.name && res?.uid) {
          this.customerAccount = `${res?.name}-${res?.uid}`;
          this.activeSalesArea =
            res?.selectedSalesArea?.salesAreaId.split('_')[1];
          this.customerCountry =
            res?.selectedSalesArea?.address?.country?.isocode;
        } else {
          this.customerAccount = 'Guest';
          this.activeSalesArea =
            this.localActiveSalesArea?.salesAreaId.split('_')[0];
          this.customerCountry =
            this.localActiveSalesArea?.address?.country?.isocode;
        }

        this.activeSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1] ||
          this.localActiveSalesArea?.salesAreaId.split('_')[0];
        this.customerCountry =
          res?.selectedSalesArea?.address?.country?.isocode;
      });
  }
  getProductLine() {
    this.custAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }
  sendEvent(gtmData: GTMDataLayer): void {
    globalThis.dataLayer = globalThis.dataLayer || [];
    gtmData = {
      ...gtmData,
      user_scope: this.user?.email ? 'Logged In' : 'Guest',
      customerAccount: this.customerAccount || 'Guest',
      customerCountry: this.customerCountry || 'Guest',
      sales_area:
        this.activeSalesArea ||
        this.localActiveSalesArea?.salesAreaId.split('_')[0],
    };
    // if (!Object.values(GtmEvents).includes(gtmData.event)) {
    globalThis.dataLayer.push(gtmData);
    // }
  }

  // getItemBrand(): StoreType | '' {
  //   let url = this.currentUrl.toLowerCase();
  //   if (url.includes('waygate')) {
  //     return StoreTypeEnum.Waygate;
  //   }
  //   if (url.includes('bently')) {
  //     return StoreTypeEnum.Bently_nevada;
  //   }
  //   if (url.includes('panametrics')) {
  //     return StoreTypeEnum.Panametrics;
  //   }
  //   if (url.includes('dsstore')) {
  //     return StoreTypeEnum.Dsstore;
  //   }
  //   if (url.includes('druck')) {
  //     return StoreTypeEnum.Druck;
  //   }
  //   if (url.includes('reuter')) {
  //     return StoreTypeEnum.ReuterStokes;
  //   }
  //   return '';
  // }

  getItemBrand(): StoreType | '' {
    if (this.productLine === this.allProductLine.waygate) {
      return StoreTypeEnum.Waygate;
    } else if (this.productLine === this.allProductLine.bently) {
      return StoreTypeEnum.Bently_nevada;
    } else if (this.productLine === this.allProductLine.panametrics) {
      return StoreTypeEnum.Panametrics;
    } else if (this.productLine === this.allProductLine.druck) {
      return StoreTypeEnum.Druck;
    } else if (this.productLine === this.allProductLine.reuterStokes) {
      return StoreTypeEnum.ReuterStokes;
    } else {
      return '';
    }
  }
}
