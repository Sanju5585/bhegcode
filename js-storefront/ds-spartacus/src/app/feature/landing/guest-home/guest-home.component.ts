import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPagesService } from '../landing-pages.service';
import {
  AuthService,
  HttpErrorModel,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { environment } from '../../../../environments/environment';
import { ProductCategory } from '../../../core/product-catalog/model/product-categories.model';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { SalesArea } from '../../../core/customer-account/store/customer-account.model';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { druckGuestSalesId } from '../../../shared/products-constants';

@Component({
  standalone: false,
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss'],
})
export class GuestHomeComponent implements OnInit {
  user$: Observable<any>;
  registerUrl: string = environment.registerUrl;
  orderNumber = '';
  purchaseNumber = '';
  customerNumber = '';
  guestErrorMessages: any;
  error = {
    customerNumber: '',
    purchaseNumber: '',
    orderNumber: '',
  };
  productCategories$: Observable<ProductCategory[] | HttpErrorModel>;
  updatedLegalEntityObj: any;
  guestSalesAreas$: Observable<SalesArea[]>;
  activeSalesArea$: Observable<SalesArea>;
  legalEntities: SalesArea[];
  selectedItem: boolean = true;
  allProductsLine = AllProductLine;
  productLine: string;
  druckGuestSalesId = druckGuestSalesId;
  constructor(
    private landingPageService: LandingPagesService,
    private router: Router,
    private productCatService: ProductCategoriesService,
    private custAccService: CustomerAccountService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade
  ) {}

  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.productCatService.loadDefaultProductCategories(
            OCC_USER_ID_CURRENT
          );
          return this.userAccountFacade.get();
        } else {
          this.loadWaygate();
          this.productCatService.loadDefaultProductCategories(
            OCC_USER_ID_ANONYMOUS
          );
          return of(undefined);
        }
      })
    );

    this.guestSalesAreas$ = this.custAccService.getGuestSalesAreas();
    this.activeSalesArea$ = this.custAccService.getCurrentGuestSalesArea();

    this.guestSalesAreas$.subscribe((res) => {
      this.legalEntities = res;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  routeToPLP(route: string) {
    this.router.navigateByUrl(route);
  }

  trackStatus() {
    if (
      this.orderNumber === '' &&
      this.purchaseNumber === '' &&
      this.customerNumber === ''
    ) {
      this.error.orderNumber = this.guestErrorMessages.error.orderNumberError;
      this.error.customerNumber =
        this.guestErrorMessages.error.cstmrNumberError;
      this.error.purchaseNumber =
        this.guestErrorMessages.error.purchaseNumberError;
    } else if (
      (this.orderNumber === '' || this.purchaseNumber === '') &&
      this.customerNumber === ''
    ) {
      this.error.customerNumber =
        this.guestErrorMessages.error.cstmrNumberError;
    } else if (
      this.orderNumber === '' &&
      this.purchaseNumber === '' &&
      this.customerNumber !== ''
    ) {
      this.error.orderNumber = this.guestErrorMessages.error.orderNumberError;
      this.error.purchaseNumber =
        this.guestErrorMessages.error.purchaseNumberError;
    } else {
      this.error.orderNumber = '';
      this.error.customerNumber = '';
      this.error.purchaseNumber = '';
      this.landingPageService.sendTrackData({
        customerNumber: this.customerNumber,
        orderNumber: this.orderNumber,
        purchaseNumber: this.purchaseNumber,
      });
      this.router.navigateByUrl('/quick-status');
    }
  }
  onChange(event, order) {
    if (order === 'orderNumber') {
      this.orderNumber = event.target.value;
      this.purchaseNumber = '';
      this.error.orderNumber = '';
      this.error.purchaseNumber = '';
    } else if (order === 'customerNumber') {
      this.customerNumber = event.target.value;
      this.error.customerNumber = '';
    } else {
      this.purchaseNumber = event.target.value;
      this.orderNumber = '';
      this.error.orderNumber = '';
      this.error.purchaseNumber = '';
    }
  }
  reset() {
    this.orderNumber = '';
    this.purchaseNumber = '';
    this.customerNumber = '';
    this.error.orderNumber = '';
    this.error.customerNumber = '';
    this.error.purchaseNumber = '';
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onUpdateBtnClick(value, selectedItem) {
    this.selectedItem = true;
    if (selectedItem == 'nexus') {
      this.selectedItem = false;
    }

    (this.updatedLegalEntityObj = this.getLegalEntityFromUid(value)[0]),
      (this.updatedLegalEntityObj = {
        ...this.updatedLegalEntityObj,
        active: true,
      });
    this.custAccService.updateGuestSalesArea(this.updatedLegalEntityObj);
    this.custAccService.refreshPostGuestSalesAreaSwitch();
    this.globalMessageService.add(
      this.getTranslatedText('customer-account.companyChangedSuccess'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
  }

  loadWaygate() {
    let param =
      '{"active":true,"address":{"country":{"isocode":"US"},"formattedAddress":"Skaneateles, NY","id":"8822995582999","town":"Skaneateles, NY"},"salesAreaId":"1800_GE_GE","salesAreaName":"Waygate Technologies USA, LP"}';
    this.custAccService.updateGuestSalesArea(JSON.parse(param));
  }

  changeThroughRouting(account, value) {
    this.selectedItem = true;
    if (value == 'nexus' || value == 'panametrics') {
      this.selectedItem = false;
    }
    (this.updatedLegalEntityObj = this.getLegalEntityFromUid(account)[0]),
      (this.updatedLegalEntityObj = {
        ...this.updatedLegalEntityObj,
        active: true,
      });
    this.custAccService.updateGuestSalesArea(this.updatedLegalEntityObj);
  }

  getLegalEntityFromUid(uid) {
    return Object.values(this.legalEntities).filter(
      (val) => val.salesAreaId == uid
    );
  }

  routeToPLPWaygate(account, value) {
    if (value === AllProductLine.waygate) {
      this.router.navigate([
        '/',
        value,
        '/categories/ECOM_LVL1_00000001/Waygate-Technologies',
      ]);
    } else if (value === AllProductLine.bently) {
      this.router.navigate([
        '/',
        value,
        '/categories/ECOM_LVL1_00000006/Bently-Nevada',
      ]);
    } else if (value === AllProductLine.druck) {
      this.router.navigate([
        '/',
        value,
        '/categories/ECOM_LVL1_00000008/Druck',
      ]);
    } else if (value === AllProductLine.panametrics) {
      this.router.navigate([
        '/',
        value,
        '/categories/ECOM_LVL1_00000002/Panametrics',
      ]);
    }
    this.changeThroughRouting(account, value);
  }

  routeToPLPNexus(account, value) {
    this.router.navigate(['/Nexus-Controls/c/ECOM_LVL1_00000007']);
    this.changeThroughRouting(account, value);
  }

  routeToPLPPanametric(account, value) {
    this.router.navigate(['/Panametrics/c/ECOM_LVL1_00000002']);
    this.changeThroughRouting(account, value);
  }
  navigateTo(value, selectedItem) {
    this.selectedItem = selectedItem;
    // if (selectedItem == 'nexus'|| selectedItem == 'panametrics') {
    //   this.selectedItem = false;
    // }
    (this.updatedLegalEntityObj = this.getLegalEntityFromUid(value)[0]),
      (this.updatedLegalEntityObj = {
        ...this.updatedLegalEntityObj,
        active: true,
      });
    this.custAccService.updateGuestSalesArea(this.updatedLegalEntityObj);
    //  this.custAccService.refreshPostGuestSalesAreaSwitch();
    this.globalMessageService.add(
      this.getTranslatedText('customer-account.companyChangedSuccess'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
    this.changeRouteThroughCompany(selectedItem);
  }
  changeRouteThroughCompany(company) {
    if (company == 'waygate') {
      this.router.navigate(['/Waygate-Technologies/c/ECOM_LVL1_00000001']);
      //this.waygateText = false;
    }

    if (company == 'nexus') {
      this.router.navigate(['/Nexus-Controls/c/ECOM_LVL1_00000007']);
      //this.nexusText = false;
    }

    if (company == 'panametrics') {
      this.router.navigate(['/Panametrics/c/ECOM_LVL1_00000002']);
      // this.nexusText = false;
    }
  }
}
