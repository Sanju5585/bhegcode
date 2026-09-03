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

@Component({
  standalone: false,
  selector: 'ds-current-customer-account',
  templateUrl: './current-customer-account.component.html',
  styleUrls: ['./current-customer-account.component.scss'],
})
export class CurrentCustomerAccountComponent implements OnInit {
  @Output() closeSlider = new EventEmitter<boolean>();

  showChangeLegalEntity: boolean = false;
  legalEntities: SalesArea[];
  selectedCustomerAccount;
  activeCustomerAccount$: Observable<any>;
  activeCustomerAccountCopy: CustomerAccount;
  updatedLegalEntityObj: SalesArea[];
  isAnotherAccountSelected: boolean = false;

  constructor(
    private customerAccService: CustomerAccountService,
    private cd: ChangeDetectorRef,
    protected store: Store<ProductsSearchState>,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private currencyService: CurrencyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((res: any) => {
      this.activeCustomerAccountCopy = res;
      this.legalEntities = res.salesAreaObjectDataList;
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
    this.legalEntityToggle();
    this.legalEntities = event.salesAreaObjectDataList;
    this.selectedCustomerAccount = event;
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

  onLegalEntityRadioChange(event) {
    const evtTarget = event.target;
    document
      .getElementById('change-legal-entity-action')
      .classList.add('selected-btn');
    if (evtTarget.checked) {
      this.updatedLegalEntityObj = this.getLegalEntityFromUid(evtTarget.value);
    }
  }

  onUpdateBtnClick() {
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
        const salesId =
          this.updatedLegalEntityObj[0].salesAreaId.split('_') || [];
        this.legalEntityToggle();
        this.cd.detectChanges();
        this.globalMessageService.add(
          this.getTranslatedText(
            'customer-account.custACCandSalesChangeSuccess'
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
}
