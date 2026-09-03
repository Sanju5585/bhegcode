import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
} from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import {
  DSAuthService,
  UserTypes,
} from '../../../../core/auth/ds-auth.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';

export enum CUSTOMER_ACCOUNT_TAB_TYPES {
  RECENTS = 'recents-tab',
  FAVOURITES = 'favourites-tab',
  SEARCH = 'search-tab',
}

@Component({
  standalone: false,
  selector: 'ds-change-customer-account',
  templateUrl: './change-customer-account.component.html',
  styleUrls: ['./change-customer-account.component.scss'],
})
export class ChangeCustomerAccountComponent implements OnInit {
  tabs = [
    {
      label: this.getTranslatedText('customer-account.recents'),
      icon: 'history',
      key: CUSTOMER_ACCOUNT_TAB_TYPES.RECENTS,
    },
    {
      label: this.getTranslatedText('customer-account.favorites'),
      icon: 'star_border',
      key: CUSTOMER_ACCOUNT_TAB_TYPES.FAVOURITES,
    },
  ];
  custAccountTabType = CUSTOMER_ACCOUNT_TAB_TYPES;
  activeTab = CUSTOMER_ACCOUNT_TAB_TYPES.RECENTS;

  favCustomerAccounts$ = this.customerAccService.getFavCustomerAccounts();
  recentCustomerAccounts$ = this.customerAccService.getRecentCustomerAccounts();
  custAccountResults$: Observable<any>;
  searchSubject = new Subject();
  custAccountSearching = false;
  custSearchFlag = false;

  @Output()
  changeCustAccount: EventEmitter<any> = new EventEmitter();

  constructor(
    private customerAccService: CustomerAccountService,
    private translate: TranslationService,
    private dsAuthService: DSAuthService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const userType = this.dsAuthService.getUserTypeFromStorage();
    if (userType == UserTypes.INTERNAL) {
      this.tabs[2] = {
        label: this.getTranslatedText('customer-account.search'),
        icon: 'search',
        key: CUSTOMER_ACCOUNT_TAB_TYPES.SEARCH,
      };
    }
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
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onActiveTabChange(event) {
    this.activeTab = event.detail.key;
    this.custAccountSearching = false;
  }

  onKeyUpSearch(event) {
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
}
