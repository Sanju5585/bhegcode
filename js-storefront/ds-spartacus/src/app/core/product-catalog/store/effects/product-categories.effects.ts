import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  LoggerService,
  WindowRef,
} from '@spartacus/core';
import { from, Subscription } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DefaultProductCode } from '../../model/product-categories.model';
import { ProductCategoriesService } from '../../services/product-categories.service';

import * as fromProductCategoriesAction from '../actions/product-categories.action';
import { CustomerAccountService } from '../../../customer-account/customer-account.service';
import { ApiService } from '../../../http/api.service';

@Injectable()
export class ProductCategoriesEffects {
  protected logger = inject(LoggerService);
  salesAreaCheckSubscription: Subscription;
  fetchProductCategories = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductCategoriesAction.FETCH_ALL_CATEGORIES),
      map(
        (action: fromProductCategoriesAction.FetchAllProductCategories) =>
          action.payload
      ),
      switchMap((payload) => {
        let url = '';
        let apiParams = {};
        url = this.occEndpointsService.buildUrl(
          `/users/${payload}/${DefaultProductCode}`
        );

        if (payload == OCC_USER_ID_ANONYMOUS) {
          const activeSalesArea =
            this.custAccService.getGuestActiveSalesAreaFromStorage();
          apiParams = {
            ...apiParams,
            guestSalesArea: activeSalesArea?.salesAreaId,
          };
        }
        return this.apiService.getData(url, apiParams);
      }),

      map((res: any) => {
        // res['categories'] = res?.categories.sort((a, b) =>
        //   a.code > b.code ? 1 : -1
        // );
        //var index = res?.categories.map(function (x) { return x.name; }).indexOf('Nexus Controls');
        //res?.categories.splice(index,1);
        let panametrics = res?.categories.find((x) => x.name === 'Panametrics');
        let filteredData = res?.categories.filter((x) => {
          return x.name !== 'Panametrics';
        });
        res['categories'] = filteredData.splice(0, filteredData.length);
        res['categories'].splice(1, 0, panametrics);
        return new fromProductCategoriesAction.FetchAllProductCategoriesSuccess(
          {
            ...res['categories'],
          }
        );
      }),
      catchError((err) => {
        return from([
          new fromProductCategoriesAction.FetchAllProductCategoriesFail({
            error: err,
          }),
        ]);
      })
    )
  );

  setQuickOrderParts = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductCategoriesAction.SET_QUICK_ORDER_PARTS),
      map(
        (action: fromProductCategoriesAction.SetQuickOrderParts) =>
          action.payload
      ),
      map((payload) => {
        console.log('Setting Quick Order Parts', payload);
        this.winRef.nativeWindow.localStorage.setItem(
          'quickOrderParts',
          payload
        );
        return payload;
      }),
      map(
        (res: any) =>
          new fromProductCategoriesAction.SetQuickOrderPartsInStore(res)
      )
    )
  );

  setVCQuickOrderPartsAndPrices = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromProductCategoriesAction.SET_VC_PRODUCTS_AND_PRICES_FOR_QUICK_ORDER
      ),
      map(
        (
          action: fromProductCategoriesAction.SetVCProductsAndPricesForQuickOrder
        ) => action.payload
      ),
      map(
        (res: any) =>
          new fromProductCategoriesAction.SetVCProductsAndPricesForQuickOrderSuccess(
            res
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private occEndpointsService: OccEndpointsService,
    private apiService: ApiService,
    private custAccService: CustomerAccountService,
    private productCatService: ProductCategoriesService,
    private winRef: WindowRef
  ) {
    const quickOrderParts =
      this.winRef.nativeWindow.localStorage.getItem('quickOrderParts');
    if (quickOrderParts) {
      this.productCatService.setQuickOrderParts(quickOrderParts);
    }
    this.salesAreaCheckSubscription =
      this.custAccService.getSalesAreaData.subscribe((data) => {
        if (data) {
          this.productCatService.loadDefaultProductCategories(
            OCC_USER_ID_ANONYMOUS
          );
        }
      });
  }
  ngOnDestroy(): void {
    this.salesAreaCheckSubscription?.unsubscribe();
  }
}
