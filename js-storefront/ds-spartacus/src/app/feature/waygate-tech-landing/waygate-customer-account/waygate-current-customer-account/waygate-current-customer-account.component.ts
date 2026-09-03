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
  CurrencyService,
  GlobalMessageService,
  GlobalMessageType,
  ProductsSearchState,
  TranslationService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import {
  SalesArea,
  CustomerAccount,
} from '../../../../core/customer-account/store/customer-account.model';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';

@Component({
  standalone: false,
  selector: 'ds-waygate-current-customer-account',
  templateUrl: './waygate-current-customer-account.component.html',
  styleUrls: ['./waygate-current-customer-account.component.scss'],
})
export class WaygateCurrentCustomerAccountComponent implements OnInit {
  @Output() closeSlider = new EventEmitter<boolean>();

  showChangeLegalEntity: boolean = false;
  legalEntities: SalesArea[];
  selectedCustomerAccount;
  activeCustomerAccount$: Observable<any>;
  activeCustomerAccountCopy: CustomerAccount;
  updatedLegalEntityObj: SalesArea[];
  isAnotherAccountSelected: boolean = false;
  tempLegalEntities: SalesArea[];
  constructor(
    private customerAccService: CustomerAccountService,
    private cd: ChangeDetectorRef,
    protected store: Store<ProductsSearchState>,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private currencyService: CurrencyService,
    private router: Router,
    private productCategoriesService: ProductCategoriesService
  ) {}

  ngOnInit(): void {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((res: any) => {
      this.activeCustomerAccountCopy = res;
      this.legalEntities = res.salesAreaObjectDataList;
      this.tempLegalEntities = this.legalEntities
      if (res.currency) {
        this.currencyService.setActive(res.currency.isocode);
      }
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  legalEntityToggle() {
    this.showChangeLegalEntity = !this.showChangeLegalEntity;
  }

  changeCustAccount(event) {
    this.isAnotherAccountSelected = true;
    this.legalEntities = event.salesAreaObjectDataList;
      this.tempLegalEntities = this.legalEntities
    this.selectedCustomerAccount = event;
    this.legalEntityToggle();
  }

  getLegalEntityRadioBtnLabel(entity) {
    let label =
      entity.salesAreaName + ' (' + entity.salesAreaId.split('_')[1] + ')';
    if (entity.address?.formattedAddress) {
      label = label + ' | ' + entity.address?.formattedAddress;
    }
    return label;
  }

  addRemoveFromFavourite(alreadyFav: boolean) {
    if (alreadyFav) {
      this.customerAccService.removeCustomerAccFromFav(
        this.activeCustomerAccountCopy
      );
    } else {
      this.customerAccService.addCustomerAccToFav(
        this.activeCustomerAccountCopy
      );
    }

    if (!this.isAnotherAccountSelected) {
      // Update NgRx Store
      this.customerAccService.updateCurrentCustomerAccount({
        ...this.activeCustomerAccountCopy,
        favorite: !alreadyFav,
      });
    }
  }

  onLegalEntityRadioChange(event, salesArea) {
    
    let legalEntities = this.legalEntities
      
   
     legalEntities =  legalEntities.map((item: any) => {
      const isActive = item?.salesAreaId == salesArea?.salesAreaId;
      const _item = {
        ...item,
        active: isActive,
      };
      return _item;
     })
          this.tempLegalEntities = legalEntities
   this.updatedLegalEntityObj = this.tempLegalEntities.filter((item: any) => item?.active);
  }

  onUpdateBtnClick() {
    this.productCategoriesService.setQuickOrderParts('');
    if (!this.isAnotherAccountSelected) {
      this.selectedCustomerAccount = this.activeCustomerAccountCopy;
    }
    this.updateLegalEntity();
  }

  updateLegalEntity() {
    // Update NgRx Store
    this.customerAccService.updateCurrentCustomerAccount({
      ...this.selectedCustomerAccount,
      selectedSalesArea: this.updatedLegalEntityObj[0],
    });

    this.customerAccService
      .updateSalesArea(
        this.updatedLegalEntityObj[0].salesAreaId,
        this.activeCustomerAccountCopy.uid
      )
      .subscribe((res: any) => {
        this.customerAccService.updateAvaiableProductLine(
          res?.visibleCategories || []
        );
        if (res?.visibleCategories.length == 1) {
          this.customerAccService.setProductLineForUser(
            res?.visibleCategories[0]
          );
        }
        const salesId =
          this.updatedLegalEntityObj[0].salesAreaId.split('_') || [];
        this.legalEntityToggle();
        this.cd.detectChanges();
        this.globalMessageService.add(
          this.getTranslatedText(
            'customer-account.waygateCustAccChangeSuccess'
          ),
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
        this.customerAccService.refreshPostCustomAccSwitch(salesId[1]);
        this.closeSlider.emit();
      });
  }

  getLegalEntityFromUid(uid) {
    return this.legalEntities.filter((res) => res.salesAreaId == uid);
  }

  getActiveSalesAreaName(region: any) {
    if (!!region) {
      const salesId = region.salesAreaId.split('_')[1];
      const salesname = region.salesAreaName;
      const countryCode = region.address?.country?.isocode;
      return !!countryCode
        ? salesId + ' - ' + salesname + ' - ' + countryCode
        : salesId + ' - ' + salesname;
    }
  }

  close() {
    this.closeSlider.emit();
  }
}
