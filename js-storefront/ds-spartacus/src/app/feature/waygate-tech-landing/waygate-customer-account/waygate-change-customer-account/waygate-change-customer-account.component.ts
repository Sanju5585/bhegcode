import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
  TranslationService,
} from '@spartacus/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, mergeMap } from 'rxjs/operators';
import { DSAuthService } from '../../../../core/auth/ds-auth.service';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import {
  CustomerAccount,
  SalesArea,
} from '../../../../core/customer-account/store/customer-account.model';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ApiService } from '../../../../core/http/api.service';
import { ProductLineHomePageURL } from '../../../../shared/enums/availableProductList.enum';
import { MyProfileService } from '../../../user/my-profile/service/my-profile.service';

@Component({
  standalone: false,
  selector: 'ds-waygate-change-customer-account',
  templateUrl: './waygate-change-customer-account.component.html',
  styleUrls: ['./waygate-change-customer-account.component.scss'],
})
export class WaygateChangeCustomerAccountComponent implements OnInit {
  favCustomerAccounts$ = this.customerAccService.getFavCustomerAccounts();
  recentCustomerAccounts$ = this.customerAccService.getRecentCustomerAccounts();
  activeCustomerAccount$ = this.customerAccService.getCurrentCustomerAccount();
  activeCustomerAccountCopy: CustomerAccount;
  custAccountResults$: Observable<any>;
  searchSubject = new Subject();
  custAccountSearching = false;
  hideb2b = false;
  custSearchFlag = false;
  selectedItemIndex: number = -1;
  @Output() closeSlider = new EventEmitter<boolean>();
  favList: any;
  otherList: any;
  b2bUnits: any;
  activeList: any;
  updatedLegalEntityObj: SalesArea[];
  activeRegionName: boolean = false;
  activeRegion: any;
  activeRegionCode: any;
  accountSelected: boolean = false;
  isAnotherAccountSelected: boolean = false;
  legalEntities: SalesArea[];
  showChangeLegalEntity: boolean = false;
  selectedCustomerAccount;
  productLine: string;
  userType: string;
  @Output()
  changeCustAccount: EventEmitter<any> = new EventEmitter();

  constructor(
    private customerAccService: CustomerAccountService,
    private translate: TranslationService,
    private dsAuthService: DSAuthService,
    public sanitizer: DomSanitizer,
    private occEndpointsService: OccEndpointsService,
    private apiService: ApiService,
    private ref: ChangeDetectorRef,
    private profile: MyProfileService,
    private globalMessageService: GlobalMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.userType = this.dsAuthService.getUserTypeFromStorage();
    this.custAccountResults$ = this.searchSubject.pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter((searchKey: any) => searchKey.length >= 3),
      debounceTime(1000),
      // distinctUntilChanged(), this line commented due to search creteria only works with more than 3 characetrs
      // but searched text removes means list was not getting cleared
      mergeMap((searchKey: any) => {
        this.custAccountSearching = false;
        this.custSearchFlag = false;
        return this.customerAccService.searchCustomerAccount(searchKey);
      })
    );
    this.favCustomerAccounts$.subscribe((res: any) => {
      this.favList = res;
    });
    this.recentCustomerAccounts$.subscribe((res: any) => {
      this.otherList = res;
    });
    this.activeCustomerAccount$.subscribe((res: any) => {
      this.activeList = res;
    });
    this.activeCustomerAccountCopy = this.activeList;
    this.legalEntities = this.activeList?.salesAreaObjectDataList;
    this.updatedLegalEntityObj = this.legalEntities.filter(
      (item) => item.active
    );
    const favList = null !== this.favList ? Object.values(this.favList) : '';
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
    // this.b2bUnits.sort((a, b) => {
    //   if (a.active && !b.active) {
    //     return -1;
    //   } else if (!a.active && b.active) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
  }
  reverseStateAndTown(address: string): string {
    const addressParts = address
      .split(', ')
      .filter((part) => part.trim() !== '');
    if (addressParts.length >= 3) {
      const temp = addressParts[addressParts.length - 2];
      addressParts[addressParts.length - 2] =
        addressParts[addressParts.length - 3];
      addressParts[addressParts.length - 3] = temp;
    }
    return addressParts.join(', ');
  }
  getActiveSalesAreaName(b2bUnit) {
    let selectedSalesAreaName = null;
    if (!!b2bUnit && b2bUnit.salesAreaObjectDataList?.length > 0) {
      const activeSalesArea = b2bUnit.salesAreaObjectDataList.find(
        (item) => item.active
      );
      if (activeSalesArea) {
        selectedSalesAreaName = activeSalesArea.salesAreaName;
      }
    }
    return selectedSalesAreaName;
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onKeyUpSearch(event) {
    this.hideb2b = true;
    this.showChangeLegalEntity = !this.showChangeLegalEntity;
    event.target.value = testRegex(
      event.target.value,
      REGULAR_PATTERN.alphaNumeric
    );
    event.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      event.target?.value
    );
    if (event.target?.value?.length >= 3) {
      this.custAccountSearching = true;
    }
    if (
      this.custAccountResults$ &&
      (event.keyCode == 13 ||
        event.keyCode == 9 ||
        event.keyCode == 20 ||
        event.keyCode == 44 ||
        event.keyCode == 18 ||
        event.keyCode == 91 ||
        event.keyCode == 45 ||
        event.keyCode == 46 ||
        event.keyCode == 35 ||
        event.keyCode == 36 ||
        event.keyCode == 192 ||
        event.keyCode == 173 ||
        event.keyCode == 174 ||
        event.keyCode == 175 ||
        event.keyCode == 120)
    ) {
      this.custAccountSearching = false;
    }
    if (event.target?.value?.length == 0 && this.custAccountResults$) {
      this.custAccountSearching = false;
      this.custSearchFlag = true;
    }
    if (event.target.value) {
      this.searchSubject.next(event);
    } else {
      this.custSearchFlag = true;
      this.custAccountSearching = false;
    }
  }

  selectAccount(account) {
    this.changeCustAccount.emit(account);
  }

  searchB2B(account) {
    this.profile.getSalesAreaForSoldTo(account.uid).subscribe(
      (success) => {
        if (success) {
          let bhBusinessArray: any = success;
          let salesAreaList: SalesArea[] = [];
          for (const unit of bhBusinessArray) {
            salesAreaList.push({
              active: unit?.active,
              address: unit?.SalesAreaAddress,
              salesAreaName: unit?.baseStoreName,
              salesAreaId: unit?.soldToId,
            })
          }
          account.salesAreaObjectDataList = salesAreaList;
          this.changeCustAccount.emit(account);
        }
      }
    );
  }

  selectB2bUnit(event: any, b2bUnit: any, results: any) {
    if (!!results) {
      results.b2bUnits.forEach((unit) => {
        if (unit.uid === b2bUnit.uid) {
          unit.active = true;
          this.activeCustomerAccountCopy = unit;
          this.selectedCustomerAccount = unit;
        } else {
          unit.active = false;
        }
      });
    } else {
      this.b2bUnits.forEach((unit) => {
        if (unit.uid === b2bUnit.uid) {
          unit.active = true;
          this.activeCustomerAccountCopy = unit;
          this.selectedCustomerAccount = unit;
        } else {
          unit.active = false;
        }
      });
    }
    this.isAnotherAccountSelected = true;
  }

  addRemoveFromFavourite(b2bUnit: any) {
    if (!!b2bUnit) {
      this.activeCustomerAccountCopy = b2bUnit;
      if (b2bUnit?.favorite) {
        this.customerAccService.removeCustomerAccFromFav(
          this.activeCustomerAccountCopy
        );
        this.globalMessageService.add(
          this.getTranslatedText(
            'customer-account.custAccandSalesRemovefromFav'
          ),
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
        this.closeSlider.emit();
      } else {
        this.customerAccService.addCustomerAccToFav(
          this.activeCustomerAccountCopy
        );
        this.globalMessageService.add(
          this.getTranslatedText('customer-account.custAccandSalesAddtoFav'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
        this.closeSlider.emit();
      }
    }
    if (!this.isAnotherAccountSelected) {
      // Update NgRx Store
      this.customerAccService.updateCurrentCustomerAccount({
        ...this.activeCustomerAccountCopy,
        favorite: !b2bUnit.favList,
      });
    }
    this.closeSlider.emit();
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
      selectedSalesArea: this.updatedLegalEntityObj,
    });

    this.customerAccService
      .updateSalesArea(
        this.updatedLegalEntityObj[0].salesAreaId,
        this.activeCustomerAccountCopy.uid
      )
      .subscribe((res: any) => {
        const salesId =
          this.updatedLegalEntityObj[0]?.salesAreaId.split('_') || [];
        this.showChangeLegalEntity = !this.showChangeLegalEntity;
        this.customerAccService.updateAvaiableProductLine(
          res?.visibleCategories || []
        );
        this.ref.detectChanges();
        this.globalMessageService.add(
          this.getTranslatedText(
            'customer-account.waygateCustAccChangeSuccess'
          ),
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
        if (res?.visibleCategories && res?.visibleCategories.length > 1) {
          this.router.navigate(['/choose-brand']);
        } else if (
          res?.visibleCategories &&
          res?.visibleCategories.length == 1
        ) {
          this.customerAccService.setProductLine(res?.visibleCategories[0]);
          this.router.navigate([
            ProductLineHomePageURL[res?.visibleCategories[0]],
          ]);
        } else {
          this.customerAccService.setProductLine('');
          this.router.navigate(['/homepage']);
        }
        // }
        this.closeSlider.emit();
      });
  }

  onLegalEntityRadioChange(event, salesArea) {
    if (!!salesArea) {
      this.updatedLegalEntityObj = this.legalEntities.filter((item) => {
        const isActive = item?.salesAreaId === salesArea?.salesAreaId;
        item.active = isActive;
        return isActive;
      });
    }
  }
}
