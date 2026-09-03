import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ApiService } from '../../../core/http/api.service';
import { observeOn, switchMap, take } from 'rxjs/operators';
import {
  DeliveryAddress,
  EndUserAddress,
} from '../../../shared/models/address-models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SharedCartService {
  maxSavedCartErrorNotification = new BehaviorSubject(false);
  private readonly isCheckAvailabilitySource = new Subject<any>();
  isCheckAvailability$ = this.isCheckAvailabilitySource.asObservable();
  private validateMessage = new BehaviorSubject('');
  private guestEmailAddress = new BehaviorSubject('');
  private readonly isCheckAvailabilityCheck = new BehaviorSubject<[]>([]);
  isCheckAvailabilityCheck$ = this.isCheckAvailabilityCheck.asObservable();

  public readonly isShipmentPrefernceSource = new BehaviorSubject(false);
  isShipmentPrefernce$ = this.isShipmentPrefernceSource.asObservable();

  public proceedButtonClicked = new BehaviorSubject(false);
  proceedButtonClicked$ = this.proceedButtonClicked.asObservable();

  private $validationvalue = new BehaviorSubject(false);
  currentMessage = this.validateMessage.asObservable();
  getGuestEmailAddress = this.guestEmailAddress.asObservable();

  private disableEarlyShipmentCheckbox = new BehaviorSubject(false);
  earlyShipmentCheckboxState = this.disableEarlyShipmentCheckbox.asObservable();

  private soldToAddress$ = new BehaviorSubject({});
  soldToAddress = this.soldToAddress$.asObservable();

  private shippingAddress$ = new BehaviorSubject({});
  shippingAddress = this.shippingAddress$.asObservable();

  private endUserAddress$ = new BehaviorSubject({});
  endUserAddress = this.endUserAddress$.asObservable();

  private shippingContactDetails$ = new BehaviorSubject<any>({});
  shippingContactDetails = this.shippingContactDetails$.asObservable();

  private isChinaApac$ = new BehaviorSubject<boolean>(false);
  isChinaApac = this.isChinaApac$.asObservable();

  user$: Observable<unknown>;
  userType = '';
  validationvalue: any;
  constructor(
    private apiService: ApiService,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,    
    private http: HttpClient,
    private globalMessageService: GlobalMessageService
  ) {
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  setGuestEmailAddress(email: string) {
    this.guestEmailAddress.next(email);
  }
  validateForm(validateMsg: string) {
    this.validateMessage.next(validateMsg);
  }

  saveGuestEmail(cartId, param) {
    const params = ['users', this.userType, 'dscheckout', cartId, 'guest'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, param);
  }

  public addCartItemComments(cartId, entryNumber, comment) {
    const params = [
      'users',
      this.userType,
      'carts',
      cartId,
      'entries',
      entryNumber,
      'updateCartEntryNotes',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const Obj = {
      entryNotes: comment.entryNotes,
    };
    return this.apiService.putData_options(apiUrl, Obj);
  }

  public updateShipmentType(cartId, Obj) {
    const params = [
      'users',
      this.userType,
      'carts',
      cartId,
      'changeshipmentmethod',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.putData_options(apiUrl, Obj);
  }

  public checkAvailability(cartId, entryNumber, Obj) {
    const params = [
      'users',
      this.userType,
      'carts',
      cartId,
      'entries',
      entryNumber,
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.putData_options(apiUrl, Obj);
  }

  public downloadCart(cartId) {
    const params = ['users', this.userType, 'carts', cartId, 'export'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData_Excel(apiUrl);
  }

  emitCheckAvailability(flag) {
    this.isCheckAvailabilitySource.next(flag);
  }
  setvalidation(params: boolean) {
    this.$validationvalue.next(params);
  }

  setSoldToAddress(address) {
    return this.soldToAddress$.next(address);
  }
  setShippingAddress(address: DeliveryAddress) {
    return this.shippingAddress$.next(address);
  }
  setEnduserAddress(address: EndUserAddress) {
    return this.endUserAddress$.next(address);
  }

  getvalidation(): Observable<any> {
    return this.$validationvalue.asObservable();
  }

  setShippingContactDetails(details: any) {
    this.shippingContactDetails$.next(details);
  }

  setChinaApac(isChinaApac: boolean) {
    return this.isChinaApac$.next(isChinaApac);
  }
  //set validation for DS

  setCheckAvailabilityFlag(item, addItemFLag) {
    this.isCheckAvailabilityCheck.pipe(take(1)).subscribe((res: any) => {
      if (item.length <= 0) {
        return this.isCheckAvailabilityCheck.next([]);
      }
      if (addItemFLag) {
        res.push(item);
        res = res.filter(
          (element, index, array) =>
            index ===
            array.findIndex(
              (el) =>
                el.product.code === element.product.code &&
                el.entryNumber == element.entryNumber
            )
        );
        this.isCheckAvailabilityCheck.next(res);
      } else {
        res = res.filter((element, index) => {
          return element.product.code != item.product.code;
        });
        this.isCheckAvailabilityCheck.next(res);
      }
    });
  }

  updateProceedButtonFlag(flag) {
    this.proceedButtonClicked.next(flag);
  }

  updateisShipmentPrefernce(itemFlag) {
    this.isShipmentPrefernceSource.next(itemFlag);
  }

  updateEalryShipmentCheckboxState(flag) {
    this.disableEarlyShipmentCheckbox.next(flag);
  }

  // Early shipment service for checkbox
  onEarlyShipmentService(checked: boolean, cartId) {
    const urlParams = [
      'users',
      this.userType,
      'carts',
      cartId,
      checked.toString(),
    ];
    const apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService
      .patchData(apiUrl, null)
      .subscribe({ next: () => {}, error: () => {} });
  }

  //Phone numbers restricted to 16 character from manage account for both the RMA & buy
  formatPhoneNumberTo16Char(currentUrl, PhoneNum) {
    if (currentUrl && PhoneNum.length > 16) {
      return PhoneNum.slice(0, 16);
    }
    return PhoneNum;
  }

  
getBudgetaryPDF(customFileName: string, cartID:string) {
  const params = [
    'users',
    'current',
     cartID,
    'downloadBudgetoryQuotePDF'
  ];

  let apiUrl = this.apiService.constructUrl(params);
  apiUrl = apiUrl.split('?')[0];

  apiUrl += `?customFileName=${customFileName}`;

  return this.http.get(apiUrl, {
    responseType: 'blob'
  });
}



getBudgetaryExcel(customFileName: string, cartID: string) {
  const params = [
    'users',
    'current',
    cartID,
    'downloadBudgetoryQuoteExcel'
  ];

  let apiUrl = this.apiService.constructUrl(params);
  apiUrl = apiUrl.split('?')[0];

  apiUrl += `?customFileName=${customFileName}`;

  return this.http.get(apiUrl, {
    responseType: 'blob'
  });
}




}
