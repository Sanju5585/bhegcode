import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthService,
  HttpErrorModel,
  SiteContextActions,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';

@Component({
  standalone: false,
  selector: 'ds-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss'],
})
export class CustomerAccountComponent implements OnInit {
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  showSlider: boolean = false;
  activeSalesArea: any;
  currentCustomerAccount$: Observable<CustomerAccount>;
  favCustomerAccounts$: Observable<CustomerAccount[] | HttpErrorModel>;
  recentCustomerAccounts$: Observable<CustomerAccount[] | HttpErrorModel>;
  disabelChangeAcc = false;
  rmaSalesAreaId;
  previousURL: string;
  constructor(
    private authService: AuthService,
    private customerAccService: CustomerAccountService,
    private cRef: ChangeDetectorRef,
    private store: Store,
    private router: Router
  ) {}
  salesAreaData;

  ngOnInit(): void {
    // disable change account for checkout and confirmation page
    this.customerAccService.disableChangeAccount.subscribe((data) => {
      if (data) {
        this.disabelChangeAcc = true;
      } else {
        this.disabelChangeAcc = false;
      }
      this.cRef.detectChanges();
    });
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.previousURL = localStorage.getItem('prevURL');
        this.customerAccService.loadFavCustomerAccounts();
        this.favCustomerAccounts$ =
          this.customerAccService.getFavCustomerAccounts();

        this.customerAccService.loadRecentCustomerAccounts();
        this.recentCustomerAccounts$ =
          this.customerAccService.getRecentCustomerAccounts();

        this.currentCustomerAccount$ =
          this.customerAccService.getCurrentCustomerAccount();

        this.customerAccService.removeGuestActiveFromStorage();

        this.currentCustomerAccount$.subscribe((res: any) => {
          this.rmaSalesAreaId =
            res.selectedSalesArea?.salesAreaId.split('_')[1];
          localStorage.setItem('rmaSalesAreaId', this.rmaSalesAreaId);
          if (res.currency) {
            this.store.dispatch(
              new SiteContextActions.SetActiveCurrency(res?.currency?.isocode)
            );
          }
        });
      }
    });
  }

  openSlider() {
    this.showSlider = !this.showSlider;
  }

  getSelectedLegalEntity(legalEntities) {
    return legalEntities.filter((en) => en['active'] === true)[0];
  }
}
