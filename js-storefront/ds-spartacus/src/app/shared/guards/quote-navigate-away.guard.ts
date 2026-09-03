import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DS_DIALOG } from '../../core/dialog/dialog.config';

@Injectable({
  providedIn: 'root',
})

export class QuoteNavigateAwayGuard implements CanDeactivate<any>{

  constructor(
    private launchDialogService: LaunchDialogService
  ) {
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot
  ):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>{

   if (JSON.parse(sessionStorage.getItem('isQuoteToOrder'))){
    if (!(nextState.url.includes("order-summary") || nextState.url.includes("/waygate/cart") || nextState.url.includes("waygate/checkout"))){
      const quickOrderDialog = this.launchDialogService.openDialog(
        DS_DIALOG.QUOTE_CONVERT_ROUTE_GUARD,
        undefined,
        undefined,
        nextState
      );
      return quickOrderDialog.pipe(take(1)).pipe(
        map((value: any) => {
          if (value?.instance?.reason == 'close') {
            return false;
          } else {
            return true;
          }
        })
      );
    }
    
   }
  }

}
