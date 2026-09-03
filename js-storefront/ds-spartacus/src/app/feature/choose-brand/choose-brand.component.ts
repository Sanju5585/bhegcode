import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, OccEndpointsService, WindowRef } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../core/customer-account/store/customer-account.model';
import { ApiService } from '../../core/http/api.service';
import {
  AllProductLine,
  ProductLineStorageKey,
  ProductLineHomePageURL,
} from '../../shared/enums/availableProductList.enum';

@Component({
  standalone: false,
  selector: 'app-choose-brand',
  templateUrl: './choose-brand.component.html',
  styleUrls: ['./choose-brand.component.scss'],
})
export class ChooseBrandComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<any>();
  availableProductLines = [];
  productLine = AllProductLine;
  customerAct: CustomerAccount;
  currentSalesArea: any;
  showSlider: boolean = false;
  disabelChangeAcc: boolean = false;
  constructor(
    protected router: Router,
    private custAccountService: CustomerAccountService,
    private occEndpointsService: OccEndpointsService,
    private apiService: ApiService,
    private auth: AuthService,
    private winRef: WindowRef
  ) {
    this.winRef.nativeWindow.history.pushState(
      null,
      null,
      this.winRef.nativeWindow.location.href
    );
    this.winRef.nativeWindow.onpopstate = () => {
      if (this.router.url == '/choose-brand') {
        return this.winRef.nativeWindow.history.forward();
      }
      return;
    };
  }

  ngOnInit() {
    if (this.winRef.localStorage.getItem(ProductLineStorageKey.productLine)) {
      this.winRef.localStorage.removeItem(ProductLineStorageKey.productLine);
    }
    this.custAccountService.setProductLine('');
    this.custAccountService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.currentSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
      } else {
        this.currentSalesArea = '';
      }
      if (this.currentSalesArea) {
        this.custAccountService.setDisclaimerBannerMessage(
          this.currentSalesArea
        );
      }
    });
    this.auth.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        this.custAccountService
          .getMyProfile()
          .pipe(
            map((res) => {
              return {
                ...res['orgUnit'],
                ...res['recentSalesArea'],
                ...{ visibleCategories: res['visibleCategories'] },
              };
            })
          )
          .subscribe((customerAccount: any) => {
            if (customerAccount?.visibleCategories.length > 0) {
              this.disabelChangeAcc = true;
              this.availableProductLines = customerAccount?.visibleCategories;
              if (customerAccount?.visibleCategories.length == 1) {
                this.custAccountService.setProductLine(
                  this.availableProductLines[0]
                );
                this.router.navigate([
                  ProductLineHomePageURL[this.availableProductLines[0]],
                ]);
              }
            } else {
              this.disabelChangeAcc = false;
            }

            this.custAccountService.updateAvaiableProductLine(
              this.availableProductLines
            );
          });
      }
    });
  }
  openSlider() {
    this.showSlider = !this.showSlider;
    this.closeMenu.emit(true);
    this.custAccountService.openSlider();
  }

  routeToRedirect(brand: string) {
    this.custAccountService.setProductLineForUser(brand);
    this.custAccountService.setProductLine(brand);
    this.router.navigate([ProductLineHomePageURL[brand]]);
  }
}
