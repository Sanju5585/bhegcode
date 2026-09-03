import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import * as fromCustomerAccountActions from '../actions/customer-account.action';
import { LoggerService, OccEndpointsService } from '@spartacus/core';
import { from, of } from 'rxjs';
import { CustomerAccountService } from '../../customer-account.service';
import { CustomerAccount } from '../customer-account.model';
import { DsAppState } from '../../../../store/app.reducer';
import { ApiService } from '../../../http/api.service';

@Injectable()
export class CustomerAccountEffects {
  protected logger = inject(LoggerService);
  fetchCurrentCustomerAccount = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerAccountActions.GET_CUST_ACCOUNT),
      switchMap(() => {
        let url = this.occEndpointsService.buildUrl('users/current/myprofile');
        return this.apiService.getData(url);
      }),
      map((res) => {
        return {
          ...res['orgUnit'],
          ...res['recentSalesArea'],
        };
      }),
      map((custAccount) => {
        return fromCustomerAccountActions.SetCustomerAccount(custAccount);
      })
    )
  );

  fetchFavCustomerAccounts = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerAccountActions.LOAD_FAV_CUST_ACCOUNTS),
      switchMap(() => {
        let url = this.occEndpointsService.buildUrl(
          'users/current/favouriteSoldtoUnit'
        );
        return this.apiService.getData(url);
      }),
      map((res) => {
        return fromCustomerAccountActions.LoadFavCustomerAccountsSuccess({
          payload: res['b2bUnits'],
        });
      }),
      catchError((err) => {
        return from([
          fromCustomerAccountActions.LoadFavCustomerAccountsFail({
            payload: {
              error: err,
            },
          }),
        ]);
      })
    )
  );

  // @Effect({ dispatch: false })
  addCustomerAccToFavourites = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerAccountActions.ADD_FAV_CUST_ACCOUNT),
      switchMap((payLoad: CustomerAccount) =>
        this.custAccService.addCustomerAcctoFav(payLoad).pipe(
          map((customerAccount: any) => customerAccount),
          catchError((errorRentals) => of(null))
        )
      )
    )
  );

  // @Effect({ dispatch: false })
  removeCustomerAccFromFavourites = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerAccountActions.REMOVE_FAV_CUST_ACCOUNT),
      switchMap((payLoad: CustomerAccount) =>
        this.custAccService.removeCustomerAcctoFav(payLoad).pipe(
          map((customerAccount: any) => customerAccount),
          catchError((errorRentals) => of(null))
        )
      )
    )
  );

  fetchRecentCustomerAccounts = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerAccountActions.LOAD_RECENT_CUST_ACCOUNTS),
      switchMap(() => {
        let url = this.occEndpointsService.buildUrl(
          'users/current/getRecentSoldto'
        );
        return this.apiService.getData(url);
      }),
      map((res) => {
        return fromCustomerAccountActions.LoadRecentCustomerAccountsSuccess({
          payload: res['b2bUnits'],
        });
      }),
      tap((r) => {
        const selectedCustomer = Object.values(r.payload).filter(
          (val) => val['active'] === true
        );
        this.store.dispatch(
          fromCustomerAccountActions.SetCustomerAccount({
            payload: selectedCustomer[0],
          })
        );
      }),
      catchError((err) => {
        return from([
          fromCustomerAccountActions.LoadRecentCustomerAccountsFail({
            payload: {
              error: err,
            },
          }),
        ]);
      })
    )
  );

  fetchGuestSalesAreas = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerAccountActions.LOAD_GUEST_SALES_AREA),
      switchMap(() => {
        let url = this.occEndpointsService.buildUrl(
          'users/anonymous/getSalesOrgforGuestUser/undefined'
        );
        return this.apiService.getData(url);
      }),
      map((res) => {
        const activeSalesArea =
          this.custAccService.getGuestActiveSalesAreaFromStorage();
        if (
          activeSalesArea &&
          !(
            Object.keys(activeSalesArea).length === 0 &&
            activeSalesArea.constructor === Object
          )
        ) {
          res['salesAreaObjects'].forEach((el) => {
            el.active = false;
            if (activeSalesArea.salesAreaId == el.salesAreaId) {
              el.active = activeSalesArea.active;
            }
          });
        }
        return fromCustomerAccountActions.LoadGuestSalesAreasSuccess({
          payload: res['salesAreaObjects'],
        });
      }),
      catchError((err) => {
        return from([
          fromCustomerAccountActions.LoadGuestSalesAreasFail({
            payload: {
              error: err,
            },
          }),
        ]);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<DsAppState>,
    private occEndpointsService: OccEndpointsService,
    private apiService: ApiService,
    private custAccService: CustomerAccountService
  ) {}
}
