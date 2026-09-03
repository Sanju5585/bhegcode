import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
} from '@spartacus/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { ApiService } from '../../core/http/api.service';
import { AllProductLine } from '../../shared/enums/availableProductList.enum';

@Injectable({
  providedIn: 'root',
})
export class MyFavoritesService {
  user$: Observable<unknown>;
  userType = '';
  productLine: string;
  constructor(
    private apiService: ApiService,
    private userAccountFacade: UserAccountFacade,
    private occEndpointsService: OccEndpointsService,
    private globalMessageService: GlobalMessageService,
    protected authService: AuthService,
    private custAccountServ: CustomerAccountService
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
    this.custAccountServ.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }
  addtowhishlist(productObj) {
    const params = ['users', this.userType, 'addToWishlist'];
    const apiUrl = this.occEndpointsService.buildUrl(
      `users/${this.userType}/addToWishlist`,
      { queryParams: productObj }
    );
    return this.apiService.postData(apiUrl, null);
  }
  getFavourites(value, current) {
    let apiparam;
    const params = ['users', this.userType, 'getfavourites'];
    const apiUrl = this.apiService.constructUrl(params);
    if (value) {
      apiparam =
        this.productLine === AllProductLine.bently
          ? {
              text: value,
              currentPage: current,
              pageSize: 20,
              productLine: AllProductLine.bently,
            }
          : { text: value, currentPage: current, pageSize: 20 };
    } else {
      apiparam =
        this.productLine === AllProductLine.bently
          ? {
              text: '',
              currentPage: current,
              pageSize: 20,
              productLine: AllProductLine.bently,
            }
          : { text: '', currentPage: current, pageSize: 20 };
    }

    return this.apiService.getData(apiUrl, apiparam);
  }
  removeFromWishlist(productid) {
    const params = ['users', this.userType, 'removeFromWishlist'];
    const apiUrl = this.apiService.constructUrl(params);
    let apiParam = productid;
    return this.apiService.postData(apiUrl, apiParam);
  }

  // function to get messages
  getMessages() {
    return this.apiService.getData('/assets/i18n-assets/en/favorites.json');
  }
}
