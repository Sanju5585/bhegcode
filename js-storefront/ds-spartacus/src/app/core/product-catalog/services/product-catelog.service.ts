import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';
import { CustomerAccountService } from '../../customer-account/customer-account.service';
import { ApiService } from '../../http/api.service';
import {
  AnonymousActions,
  BuyActions,
  ReturnActions,
} from '../model/product-catelog.model';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';

@Injectable({
  providedIn: 'root',
})
export class ProductCatelogService {
  constructor(
    private apiService: ApiService,
    private occEndpointsService: OccEndpointsService,
    private custAccService: CustomerAccountService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions
  ) {}

  getBuyAction(product) {
    // Buy Only Action
    if (
      product?.productAccessData?.isBuy &&
      !product?.productAccessData?.isCatalogOnly &&
      !product?.productAccessData?.isobsolete
    ) {
      if (product?.configurable) {
        return BuyActions.CONFIGURE;
      } else if (
        product?.productAccessData?.showListPrice &&
        product?.price?.value > 0
      ) {
        return BuyActions.BUY;
      } else {
        return BuyActions.CHECK_PRICE;
      }
    }

    // Buy not true
    if (
      !product?.productAccessData?.isBuy &&
      !product?.productAccessData?.isCatalogOnly &&
      !product?.productAccessData?.isobsolete
    ) {
      if (product?.productAccessData?.isBuyPresentInOtherSalesArea) {
        return BuyActions.SWITCH_CUSTOMER;
      } else {
        return BuyActions.CONTACT_CUSTOMER_CARE;
      }
    }

    // Catelog Only
    if (product?.productAccessData?.isCatalogOnly) {
      return BuyActions.CONTACT_CUSTOMER_CARE;
    }

    // Obsolete or Replacement
    if (product?.productAccessData?.isobsolete) {
      if (product?.productAccessData?.isBuyPresentInOtherSalesArea) {
        return BuyActions.SWITCH_CUSTOMER;
      } else if (product?.replacementProductStatus) {
        return BuyActions.REPLACEMENT;
      } else {
        return BuyActions.OBSOLETE;
      }
    }

    return BuyActions.CONTACT_CUSTOMER_CARE;
  }

  getReturnsAction(product) {
    // Returns Only
    if (product?.productAccessData?.isService) {
      return ReturnActions.RETURN;
    } else if (product?.productAccessData?.isServicePresentInOtherSalesArea) {
      // Switch Customer Account
      return ReturnActions.SWITCH_CUSTOMER;
    } else {
      // Contact Customer Care
      return ReturnActions.CONTACT_CUSTOMER_CARE;
    }
  }

  getAnonymousActions(product) {
    if (product?.isAnonymousBuy) {
      if (product?.price?.value <= 0 || product?.price?.value == undefined) {
        return AnonymousActions.CHECK_PRICE;
      }
      return AnonymousActions.BUY;
    } else if (product?.isAnonymousQuote) {
      return AnonymousActions.QUOTE;
    } else if (product?.isAnonymousObsolete) {
      return AnonymousActions.OBSOLETE;
    } else if (product?.isAnonymousCatalog) {
      return AnonymousActions.CATALOG_ONLY;
    }
    return AnonymousActions.CONTACT_CUSTOMER_CARE;
  }

  checkPrice(productCode: string, isGuest: boolean) {
    let apiUrl = '';
    const apiParams: any = {
      productCode,
    };

    if (isGuest) {
      apiUrl = `/users/${OCC_USER_ID_ANONYMOUS}/search/checkRealTimePrice`;
      const activeSalesArea =
        this.custAccService.getGuestActiveSalesAreaFromStorage();
      apiParams.guestSalesArea = activeSalesArea.salesAreaId;
    } else {
      apiUrl = `/users/${OCC_USER_ID_CURRENT}/search/checkRealTimePrice`;
    }
    const url = this.occEndpointsService.buildUrl(apiUrl);
    return this.apiService.postData(url, {}, { params: apiParams });
  }

  // ---Space for Return Sevice

  saveCartType(cartId, cartType, userType): Observable<any> {
    const API_URL = this.occEndpointsService.buildUrl(
      `users/${userType}/carts/${cartId}`
    );
    const apiOptions = {
      params: {
        cartType: cartType,
        fields: 'DEFAULT',
      },
    };
    if (cartType === CommerceTypes.QUOTE) {
      apiOptions['params']['isQuote'] = 'true';
    }
    return this.apiService.putData_options(API_URL, {}, apiOptions);
  }

  saveSwitchAndReloadCart(currentCartCode, currentCartName, switchToCartType) {
    let activeCartId;
    let url = this.occEndpointsService.buildUrl(
      `users/${OCC_USER_ID_CURRENT}/carts/${currentCartCode}/save`
    );
    // Saving current Cart
    return this.apiService.patchData(
      url,
      {},
      {
        params: {
          saveCartName: currentCartName,
          saveCartDescription: '',
        },
      }
    );
  }

  clearCart(cartId, userType, switchToCartType) {
    let activeCartId;
    // Delete current cart
    this.multiCartFacade.deleteCart(cartId, userType);
    return this.actions$.pipe(
      take(1),
      switchMap((res) => {
        return this.actions$.pipe(
          take(1),
          ofType(CartActions.DELETE_CART_SUCCESS)
        );
      }),
      switchMap((res) => {
        // On Delete Cart Success create new Cart
        sessionStorage.setItem('quoteCartType', '');
        sessionStorage.setItem('isRfqCart', '');
        this.multiCartFacade.createCart({
          userId: userType,
          // oldCartId: this.cartId,
          extraData: {
            active: true,
          },
        });
        return this.actions$.pipe(ofType(CartActions.CREATE_CART_SUCCESS));
      }),
      switchMap((successCart: any) => {
        // On Create cart success Update cart type
        if (successCart.payload?.cartId) {
          activeCartId = successCart.payload.cartId;
          return this.saveCartType(
            successCart.payload.cartId,
            switchToCartType,
            userType
          );
        } else {
          return of({ error: false });
        }
      }),
      switchMap((val: any) => {
        // Load newly created cart
        if (val === null) {
          this.multiCartFacade.loadCart({
            userId: userType,
            cartId: activeCartId,
            extraData: {
              active: true,
            },
          });
          return this.actions$.pipe(ofType(CartActions.LOAD_CART_SUCCESS));
        } else {
          return of({ error: false });
        }
      })
    );
  }

  createCartWithType(userType, switchToCartType) {
    let activeCartId;
    // Create new cart
    this.multiCartFacade.createCart({
      userId: userType,
      // oldCartId: this.cartId,
      extraData: {
        active: true,
      },
    });
    return this.actions$.pipe(
      // take(1),
      ofType(CartActions.CREATE_CART_SUCCESS),
      switchMap((successCart: any) => {
        // On Create cart success Update cart type
        if (successCart.payload?.cartId) {
          activeCartId = successCart.payload.cartId;
          return this.saveCartType(
            successCart.payload.cartId,
            switchToCartType,
            userType
          );
        } else {
          return of({ error: false });
        }
      }),
      switchMap((val: any) => {
        // Load newly created cart
        if (val === null) {
          this.multiCartFacade.loadCart({
            userId: userType,
            cartId: activeCartId,
            extraData: {
              active: true,
            },
          });
          return this.actions$.pipe(ofType(CartActions.LOAD_CART_SUCCESS));
        } else {
          return of({ error: false });
        }
      })
    );
  }

  getGuestSalesAreaFromCatelog(code, userType, mode) {
    let urlParam;
    let apiParams: any = {};
    if (mode == 'PLP') {
      // /{baseSiteId}/users/{userId}/getGuestSalesOrgforCategory/{categoryCode}
      urlParam = ['users', userType, 'getGuestSalesOrgforCategory'];
      apiParams = {
        categoryCode: code,
      };
    } else if (mode == 'PDP') {
      // /{baseSiteId}/users/{userId}/getGuestSalesOrgforProduct/{productCode}
      urlParam = ['users', userType, 'getGuestSalesOrgforProduct'];
      apiParams = {
        productCode: code,
      };
    }
    const url = this.apiService.constructUrl(urlParam);
    return this.apiService.getData(url, apiParams);
  }

  updateGuestSalesAreaFromCatCode(code, mode) {
    // Auto-update Guest Sales Area if URL is changed to non-selected Guest Sales Area
    const activeSalesArea =
      this.custAccService.getGuestActiveSalesAreaFromStorage();

    // this.getGuestSalesAreaFromCatelog(
    //   code,
    //   OCC_USER_ID_ANONYMOUS,
    //   mode
    // ).subscribe((data: any) => {
    //   if (activeSalesArea.salesAreaId !== data.salesAreaId) {
    //     let isPdp = false;
    //     if (mode == 'PDP') {
    //       isPdp = true;
    //     }
    //     const updatedLegalEntityObj = {
    //       ...data,
    //       active: true,
    //     };
    //     this.custAccService.updateGuestSalesArea(updatedLegalEntityObj);
    //     this.custAccService.refreshPostGuestSalesAreaSwitch(isPdp);
    //   }
    // });
  }
}
