import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

import { CustomerAccount, MyWaygateSelectedAccount, SalesArea } from './store/customer-account.model';
import * as fromCustomerAccountAction from './store/actions/customer-account.action';
import * as fromCustomerAccountSelectors from './store/selectors/customer-account.selector';
import { ApiService } from '../http/api.service';
import {
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  ProductSearchService,
  ProductService,
  StorageSyncType,
  WindowRef,
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { ProductCategoriesService } from '../product-catalog/services/product-categories.service';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';

export const GUEST_ACTIVE_SALES_AREA_KEY = 'guest-active-salesArea';
import {
  wayagteGuestSalesId,
  bentlyGuestSalesId,
  panametricsGuestSalesId,
  druckGuestSalesId,
  reuterStokesGuestSalesId,
} from './../../shared/products-constants';
import { DsAppState } from '../../store/app.reducer';
import { CommonService } from '../../shared/services/common.service';
import { OrderTrackingService } from '../../feature/order-tracking/order-tracking.service';
import {
  AllProductLine,
  ProductLineHomePageURL,
  ProductLineStorageKey,
} from '../../shared/enums/availableProductList.enum';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { LandingPagesService } from '../../feature/landing/landing-pages.service';
import { UserAccountFacade } from '@spartacus/user/account/root';

@Injectable({
  providedIn: 'root',
})
export class CustomerAccountService {
  orderDetails: any;
  resetCartData: any;
  cartId: any;
  getCurrentCustomerAccount$: Observable<any>;
  updatedLegalEntityObj: any;
  selectedCustomerAccount: any;
  disableChangeAccount = new BehaviorSubject(false);
  getSalesAreaData = new BehaviorSubject(false);
  rmaDsSwitchCartFlag: any;
  sliderSource: BehaviorSubject<any> = new BehaviorSubject(null);
  cart$: Observable<any> = this.activeCartFacade.getActive();
  getSliderState = this.sliderSource.asObservable();
  notificationSliderSource = new BehaviorSubject(null);
  getNotificationSliderState = this.notificationSliderSource.asObservable();
  notificationData$ = new BehaviorSubject(null);
  disclaimerBannerComponentSource$ = new BehaviorSubject('');
  currentCartSubscription: Subscription;
  userType = '';
  user$: Observable<unknown>;
  disclaimerBannerState = this.disclaimerBannerComponentSource$.asObservable();
  constructor(
    private store: Store<DsAppState>,
    private apiService: ApiService,
    private occEndpointService: OccEndpointsService,
    protected winRef: WindowRef,
    private commonService: CommonService,
    private productSearchService: ProductSearchService,
    protected currentProductService: CurrentProductService,
    private multiCartFacade: MultiCartFacade,
    private productCatService: ProductCategoriesService,
    private orderTrackingService: OrderTrackingService,
    private activeCartFacade: ActiveCartFacade,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    protected authService: AuthService,
    private router: Router,
    private productService: ProductService,
    private actions$: Actions,
    private landingPagesService: LandingPagesService
  ) {}

  loadCurrentCustomerAccount(): Observable<boolean> {
    return this.store
      .select(fromCustomerAccountSelectors.isCustomerAccountLoaded)
      .pipe(
        tap((isLoaded) => {
          if (!isLoaded) {
            this.store.dispatch(
              fromCustomerAccountAction.GetCurrentCustomerAccount()
            );
          }
        })
      );
  }
  setProductLine(productLine: string) {
    this.winRef.nativeWindow.localStorage.setItem(
      ProductLineStorageKey.productLine,
      productLine
    );
    return this.store.dispatch(
      fromCustomerAccountAction.setProductLine({ payload: productLine })
    );
  }

  getProductLine() {
    return this.store.select(fromCustomerAccountSelectors.getProductLine);
  }

  setCustomerUserType(userType: string) {
    return this.store.dispatch(
      fromCustomerAccountAction.setCustomerUserType({ payload: userType })
    );
  }

  getCustomerUserType() {
    return this.store.select(fromCustomerAccountSelectors.getCustomerUserType);
  }

  setAccessCSRProductLines(accessProductLines: string[]) {
    return this.store.dispatch(
      fromCustomerAccountAction.setAccessCSRProductLines({
        payload: accessProductLines,
      })
    );
  }

  getAccessCSRProductLines() {
    return this.store.select(
      fromCustomerAccountSelectors.getAccessCSRProductLines
    );
  }

  getCurrentCustomerAccount(): Observable<CustomerAccount> {
    return this.store.select(
      fromCustomerAccountSelectors.fetchCurrentCustomerAccount
    );
  }

  updateCurrentCustomerAccount(custAccount: CustomerAccount) {
    return this.store.dispatch(
      fromCustomerAccountAction.UpdateCurrentCustomerAccount({
        payload: custAccount,
      })
    );
  }

  loadFavCustomerAccounts() {
    return this.store.dispatch(
      fromCustomerAccountAction.LoadFavCustomerAccounts()
    );
  }

  getFavCustomerAccounts() {
    return this.store.select(
      fromCustomerAccountSelectors.fetchFavCustomerAccounts
    );
  }

  addCustomerAccToFav(custAccount: CustomerAccount) {
    return this.store.dispatch(
      fromCustomerAccountAction.AddFavCustomerAccount({ payload: custAccount })
    );
  }

  removeCustomerAccFromFav(custAccount: CustomerAccount) {
    return this.store.dispatch(
      fromCustomerAccountAction.RemoveFavCustomerAccount({
        payload: custAccount,
      })
    );
  }

  loadRecentCustomerAccounts() {
    return this.store.dispatch(
      fromCustomerAccountAction.LoadRecentCustomerAccounts()
    );
  }

  getRecentCustomerAccounts() {
    return this.store.select(
      fromCustomerAccountSelectors.fetchRecentCustomerAccounts
    );
  }

  updateAvaiableProductLine(productLine: string[]) {
    this.setAvaiableProductLineToStorage(productLine);
    return this.store.dispatch(
      fromCustomerAccountAction.UpdateAvaiableProductLine({
        payload: productLine,
      })
    );
  }

  searchCustomerAccount(searchKey: string) {
    if (!searchKey) {
      return of([]);
    }
    let url = this.occEndpointService.buildUrl(
      '/users/current/searchSoldToUnit'
    );
    return this.apiService.getData(url, { customerAccountId: searchKey });
  }

  updateSalesArea(salesAreaId, soldToId) {
    const apiUrl = this.occEndpointService.buildUrl(
      '/users/current/updateSoldTo'
    );
    const apiParams = {
      salesAreaId,
      soldToUid: soldToId,
    };

    return this.apiService.putData_options(apiUrl, {}, { params: apiParams });
  }

  loadGuestSalesAreas() {
    return this.store.dispatch(fromCustomerAccountAction.LoadGuestSalesAreas());
  }

  getGuestSalesAreas() {
    return this.store.select(fromCustomerAccountSelectors.fetchGuestSalesAreas);
  }

  getCurrentGuestSalesArea() {
    return this.store.select(
      fromCustomerAccountSelectors.fetchCurrentGuestSalesArea
    );
  }

  updateGuestSalesArea(salesArea: SalesArea) {
    this.setGuestActiveSalesAreaToStorage(salesArea);
    return this.store.dispatch(
      fromCustomerAccountAction.UpateGuestSalesArea({ payload: salesArea })
    );
  }

  setAvaiableProductLineToStorage(productLine: string[]) {
    this.commonService.persistToStorage(
      ProductLineStorageKey.avaiableProductLine,
      productLine,
      this.commonService.getStorage(StorageSyncType.LOCAL_STORAGE, this.winRef)
    );
  }

  getAvaiableProductLineToFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.readFromStorage(
      storage,
      ProductLineStorageKey.avaiableProductLine
    );
  }

  setGuestActiveSalesAreaToStorage(salesArea: SalesArea) {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    this.commonService.persistToStorage(
      GUEST_ACTIVE_SALES_AREA_KEY,
      salesArea,
      storage
    );
  }

  getGuestActiveSalesAreaFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.readFromStorage(
      storage,
      GUEST_ACTIVE_SALES_AREA_KEY
    );
  }

  removeGuestActiveFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    this.commonService.removeFromStorage(storage, GUEST_ACTIVE_SALES_AREA_KEY);
  }

  refreshPostGuestSalesAreaSwitch(isGuestPdp?: any) {
    this.multiCartFacade.createCart({
      userId: OCC_USER_ID_ANONYMOUS,
      extraData: {
        active: true,
      },
    });
    this.actions$
      .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
      .subscribe((cartResponse: any) => {
        if (cartResponse?.payload?.cartId) {
          this.multiCartFacade.loadCart({
            cartId: cartResponse.payload.cartId,
            userId: OCC_USER_ID_ANONYMOUS,
            extraData: {
              active: true,
            },
          });
          this.loadGuestSalesAreas();
          this.productSearchService.search(
            ':relevance:allCategories:ECOM_LVL0_00000000',
            { pageSize: 50 }
          );
          this.currentProductService
            .getProduct()
            .subscribe((res) => {
              if (res) {
                // this.productService.reload(res.code)
              }
            })
            .unsubscribe();

          this.productCatService.loadDefaultProductCategories(
            OCC_USER_ID_ANONYMOUS
          );
          if (isGuestPdp) {
            window.location.reload();
          } else {
            this.refreshCurrentRoute();
          }
        }
      });
  }

  refreshPostCustomAccSwitch(isswitchAccount?: any) {
    // Update Cart
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
      }
    );
    this.cart$.subscribe((res) => {
      if (!res && this.userType === 'current') {
        this.multiCartFacade.createCart({
          userId: OCC_USER_ID_CURRENT,
          extraData: {
            active: true,
          },
        });
      }
    })

    this.actions$
      .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
      .subscribe((cartResponse: any) => {
        if (cartResponse?.payload?.cartId) {
          this.multiCartFacade.loadCart({
            cartId: cartResponse.payload.cartId,
            userId: OCC_USER_ID_CURRENT,
            extraData: {
              active: true,
            },
          });
          // storing number of cart in localstorage based on account
          localStorage.setItem(
            'numberOfCart',
            cartResponse.payload.cart.totalItems
          );
          this.loadFavCustomerAccounts();
          this.loadRecentCustomerAccounts();
          // Update PLP results
          this.productSearchService.search(
            ':relevance:allCategories:ECOM_LVL0_00000000',
            { pageSize: 50 }
          );
          //DE146739: Navigate to HomePage / WagatePage based on Sales Group.
          if (isswitchAccount != 'switchAccount') {
            this.getCurrentCustomerAccount()
              .pipe(take(1))
              .subscribe((cutmrAcount) => {
                // this.updateAvaiableProductLine(
                //   cutmrAcount?.visibleCategories || []
                // );
                // verify notification is exist if not fetch list here
                this.verifyAndFetchNotification(cutmrAcount?.uid);
                if (
                  cutmrAcount?.visibleCategories &&
                  cutmrAcount?.visibleCategories.length > 1
                ) {
                  window.location.href = '/choose-brand';
                } else if (
                  cutmrAcount?.visibleCategories &&
                  cutmrAcount?.visibleCategories.length == 1
                ) {
                  this.setProductLine(cutmrAcount?.visibleCategories[0]);
                  if (isswitchAccount != 'myWaygateSwitchAccount')
                    window.location.href =
                      ProductLineHomePageURL[cutmrAcount?.visibleCategories[0]];
                } else {
                  this.setProductLine('');
                  this.refreshCurrentRoute();
                }
              });
          }
        }
      });
  }

  refreshCurrentRoute() {
    this.router.navigate(['/homepage']).then((success) => {
      window.location.reload();
    });
  }

  routeWagatePage(route: string) {
    this.router.navigate(['/', route]);
  }
  public addCustomerAcctoFav(payload: any) {
    let url = this.occEndpointService.buildUrl(
      'users/current/addFavouriteSoldto'
    );
    const apiParams = { soldToUid: payload?.payload?.uid };
    return this.apiService.putData_options(url, {}, { params: apiParams });
  }
  public removeCustomerAcctoFav(payload: any) {
    let url = this.occEndpointService.buildUrl(
      'users/current/removeFavoriteSoldTo'
    );

    const apiParams = { soldToUid: payload?.payload?.uid };
    return this.apiService.deleteData(url, { params: apiParams });
  }
  public getMyProfile(): Observable<any> {
    return this.apiService.getData(
      this.occEndpointService.buildUrl('users/current/myprofile')
    );
  }

  openSlider() {
    this.sliderSource.next(true);
  }

  getGuestSalesIdFromProductLine(productLine: string) {
    if (productLine === AllProductLine.waygate) {
      return wayagteGuestSalesId;
    } else if (productLine === AllProductLine.bently) {
      return bentlyGuestSalesId;
    } else if (productLine === AllProductLine.panametrics) {
      return panametricsGuestSalesId;
    } else if (productLine === AllProductLine.druck) {
      return druckGuestSalesId;
    } else if (productLine === AllProductLine.reuterStokes) {
      return reuterStokesGuestSalesId;
    }
  }

  openNotifiactionSlider() {
    this.notificationSliderSource.next(true);
  }

  updateNotification(newValue) {
    this.notificationData$.next(newValue);
  }

  get notificationData() {
    return this.notificationData$.asObservable();
  }

  verifyAndFetchNotification(b2bUnit: string) {
    const orderData = JSON.parse(
      this.winRef.nativeWindow.sessionStorage.getItem(
        'notifications_' + b2bUnit
      )
    );
    if (!orderData) {
      this.fetchNotificationFromBackend(b2bUnit);
    } else {
      this.updateNotification(orderData);
    }
  }

  fetchNotificationFromBackend(b2bUnit: any) {
    this.orderTrackingService.getNotifications().subscribe((response: any) => {
      if (response) {
        this.updateNotification(response);
        sessionStorage.setItem(
          `notifications_${b2bUnit}`,
          JSON.stringify(response)
        );
      }
    });
  }
  setProductLineForUser(productLine: string) {
    const API_URL = this.occEndpointService.buildUrl(
      `/users/${OCC_USER_ID_CURRENT}/updateProductLine`
    );
    const params = new HttpParams().set('productLine', productLine);
    this.apiService.putData(API_URL, params).subscribe({
      next: (res) => {
        console.log('Product line updated successfully:', res);
        this.refreshCartPostBrandSelection(productLine);
      },
      error: (error) => {
        console.error('Failed to update product line:', error);
      },
    });
  }

  refreshCartPostBrandSelection(productLine: string) {
    // Update Cart
    this.multiCartFacade.createCart({
      userId: OCC_USER_ID_CURRENT,
      extraData: {
        active: true,
      },
    });
    this.actions$
      .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
      .subscribe((cartResponse: any) => {
        if (cartResponse?.payload?.cartId) {
          this.multiCartFacade.loadCart({
            cartId: cartResponse.payload.cartId,
            userId: OCC_USER_ID_CURRENT,
            extraData: {
              active: true,
            },
          });
          // storing number of cart in localstorage based on account
          localStorage.setItem(
            'numberOfCart',
            cartResponse.payload.cart.totalItems
          );
        }
      });
  }

  setDisclaimerBannerMessage(salsesArea) {
    this.disclaimerBannerComponentSource$.next(salsesArea);
  }

  fetchOrderDetails(orderNum, myWaygateCust, orderNumber, myWaygatesalesOrg) {
    console.log(`orderNum ${orderNum}, myWaygateCust ${myWaygateCust}, myWaygatesalesOrg $ {myWaygatesalesOrg} `)
    if (orderNum && myWaygateCust && myWaygatesalesOrg) {
      this.landingPagesService
        .orderStatus(orderNum, myWaygateCust, orderNumber)
        .pipe(take(1))
        .subscribe(
          (orderDetails: any) => {
            this.getCurrentCustomerAccount$ = this.getRecentCustomerAccounts();
            if (orderDetails?.orderData) {
              this.orderDetails = orderDetails?.orderData[0];
              this.getCurrentCustomerAccount$
                .pipe(take(2))
                .subscribe((response: any) => {
                  const recentCustomerAccounts = response;
                  if (Object.keys(recentCustomerAccounts).length > 0) {
                    const salesAreaList = this.getCurrentSalesArea(
                      recentCustomerAccounts[0]?.salesAreaObjectDataList
                    );
                    if (
                      recentCustomerAccounts[0]?.uid == myWaygateCust &&
                      salesAreaList?.salesAreaId?.split('_')[1] ==
                        myWaygatesalesOrg
                    ) {
                      this.orderRedirect(orderNum, this.orderDetails);
                    } else {
                      this.updateLegalEntity(
                        recentCustomerAccounts,
                        orderNum,
                        myWaygateCust,
                        myWaygatesalesOrg
                      );
                    }
                  }
                });
            }
          },
          (error) => {}
        );
    }
  }

  activateWhenSalesMatchesId(activeSalesArea, myWaygateCustSalesId: string) {
    return activeSalesArea?.map((activeSales) => {
      let activesalesID =
        activeSales?.salesAreaId.split('_')[0] +
        '_' +
        activeSales?.salesAreaId.split('_')[1];
      const activeMatch = activesalesID == myWaygateCustSalesId;
      return activeMatch ? { ...activeSales, active: true } : activeSales;
    });
  }

  getCurrentSalesArea(salesAreaList: SalesArea[]) {
    return salesAreaList?.find((area) => area.active);
  }

  updateLegalEntity(
    recentCustomerAccounts,
    orderNum,
    myWaygateCust,
    myWaygatesalesOrg
  ) {
    // Update NgRx Store
    console.log('Update Mywaygate details');
    this.updatedLegalEntityObj = Object.values(
      recentCustomerAccounts as Record<string, MyWaygateSelectedAccount>
    ).find((item) => item?.uid == myWaygateCust);
    let updateelectedSalesArea = this.activateWhenSalesMatchesId(
      this.updatedLegalEntityObj?.salesAreaObjectDataList,
      myWaygateCust + '_' + myWaygatesalesOrg
    );
    if (updateelectedSalesArea?.length > 0) {
      this.selectedCustomerAccount = updateelectedSalesArea?.find(
        (updateSales) => updateSales?.active
      );
    }
    let latestUpdateEntityObject = {
      active: true,
      addresses: this.updatedLegalEntityObj?.addresses,
      favorite: this.updatedLegalEntityObj?.favorite,
      name: this.updatedLegalEntityObj?.name,
      recent: this.updatedLegalEntityObj?.recent,
      salesAreaObjectDataList: updateelectedSalesArea,
      selectedSalesArea: this.selectedCustomerAccount,
      uid: myWaygateCust,
      visibleCategories: [AllProductLine.waygate],
    };
    this.updateCurrentCustomerAccount({
      ...latestUpdateEntityObject,
      selectedSalesArea: this.selectedCustomerAccount,
    });
    this.updateSalesArea(
      this.selectedCustomerAccount?.salesAreaId,
      myWaygateCust
    ).subscribe(
      (res: any) => {
        this.updateAvaiableProductLine([AllProductLine.waygate]);
        this.orderRedirect(orderNum, this.orderDetails);
        this.refreshPostCustomAccSwitch('myWaygateSwitchAccount');
        this.removeOrderDetailsFromStorage();
      },
      (error) => {}
    );

  }

  orderRedirect(code, orderDetails) {
    this.orderTrackingService.emitOrderDetail.next(orderDetails);
    const redirectUrl = `${AllProductLine.waygate}/my-orders`;
    this.router.navigate([redirectUrl, code]);
  }

  removeOrderDetailsFromStorage() {
    this.winRef.nativeWindow.localStorage.removeItem('mywagateOrderDetails');
  }
}