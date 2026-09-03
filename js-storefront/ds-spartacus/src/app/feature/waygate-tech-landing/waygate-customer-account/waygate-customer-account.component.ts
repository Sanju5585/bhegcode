import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthService,
  HttpErrorModel,
  SiteContextActions,
} from '@spartacus/core';
import { Observable, take } from 'rxjs';
import { CustomerAccount } from '../../../core/customer-account/store/customer-account.model';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';

@Component({
  standalone: false,
  selector: 'ds-waygate-customer-account',
  templateUrl: './waygate-customer-account.component.html',
  styleUrls: ['./waygate-customer-account.component.scss'],
})
export class WaygateCustomerAccountComponent implements OnInit {
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  @Output() closeMenu = new EventEmitter<any>();
  showSlider: boolean = false;
  activeSalesArea: any;
  currentCustomerAccount$: Observable<CustomerAccount>;
  favCustomerAccounts$: Observable<CustomerAccount[] | HttpErrorModel>;
  recentCustomerAccounts$: Observable<CustomerAccount[] | HttpErrorModel>;
  disabelChangeAcc = false;
  rmaSalesAreaId;
  previousURL: string;
  favList: any;
  otherList: any;
  activeList: any;
  b2bUnits: any[];
  legalEntities: any;
  allProductLine = AllProductLine;
b2bUnit: string;
salesOrg: string;
commerceType: string;
productLine: string;

  constructor(
    private authService: AuthService,
    private customerAccService: CustomerAccountService,
    private cRef: ChangeDetectorRef,
    private store: Store,
    private router: Router,
    private launchDialogService: LaunchDialogService

  ) {}
  salesAreaData;

  ngOnInit(): void {
    // disable change account for checkout and confirmation page
    
this.customerAccService.getProductLine().subscribe((pl) => {
  this.productLine = pl;
});

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
          
  if (res?.uid) {
    const parts = res.uid.split('_');
    this.b2bUnit = parts[0];
    this.salesOrg = parts[1];
  }

  if (res?.commerceType) {
    this.commerceType = res.commerceType;
  } else {
    this.commerceType = 'BUY';
  }

          if (res.currency) {
            this.store.dispatch(
              new SiteContextActions.SetActiveCurrency(res?.currency?.isocode)
            );
          }
        });
        this.favCustomerAccounts$.subscribe((res: any) => {
          this.favList = res;
        });
        this.recentCustomerAccounts$.subscribe((res: any) => {
          this.otherList = res;
        });
        this.currentCustomerAccount$.subscribe((res: any) => {
          this.activeList = res;
        });
        const favList =
          null !== this.favList ? Object.values(this.favList) : '';
        const otherList =
          null !== this.otherList ? Object.values(this.otherList) : '';
        this.b2bUnits = [this.activeList, ...favList, ...otherList];
        const uniqueEntries = [];
        const encounteredNames = new Set();
        this.b2bUnits.forEach((entry) => {
          if (!encounteredNames.has(entry.uid)) {
            uniqueEntries.push(entry);
            encounteredNames.add(entry.uid);
          }
        });
        this.b2bUnits = uniqueEntries;
        if (this.b2bUnits?.length > 1) {
          this.disabelChangeAcc = false;
        } else {
          this.legalEntities = this.b2bUnits[0]?.salesAreaObjectDataList;
          if (this.legalEntities?.length > 1) {
            this.disabelChangeAcc = false;
          } else {
            this.disabelChangeAcc = true;
          }
        }
      }
    });
  }

  openSlider() {
    this.showSlider = !this.showSlider;
    this.closeMenu.emit(true);
    this.customerAccService.openSlider();
  }

  getSelectedLegalEntity(legalEntities) {
    return legalEntities.filter((en) => en['active'] === true)[0];
  }

onResetCartClick() {
  
  this.closeMenu.emit(true);  
  this.showSlider = false;

  this.currentCustomerAccount$
  .pipe(take(1))
  .subscribe((res: any) =>{


    let b2bUnit = '';
    let salesOrg = '';

   
  if (res?.uid) {
    b2bUnit = res.uid.split('_')[0];
  }

  if (res?.selectedSalesArea?.salesAreaId) {
    salesOrg = res.selectedSalesArea.salesAreaId.split('_')[1];
  }


    const commerceType = res?.commerceType || 'BUY';

    this.customerAccService.getProductLine().subscribe((pl) => {

      this.customerAccService.resetCartData = {
        b2bUnit,
        salesOrg,
        commerceType,
        productLine: pl,
      };

      const dialog = this.launchDialogService.openDialog(
        DS_DIALOG.DELETE_ALL_CARTS_DIALOG
      );
      
    if (dialog) {
        dialog.pipe(take(1)).subscribe((result) => {
        console.log('Dialog closed with:', result);        
        });
      }


    });
  });

}



}
