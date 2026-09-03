import { Injectable } from '@angular/core';
import {  RouterStateSnapshot, UrlTree } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { QuickOrderService } from '../../feature/waygate-tech-landing/quick-order/quick-order.service';
import { DS_DIALOG } from '../../core/dialog/dialog.config';

@Injectable({
  providedIn: 'root',
})

export class WaygateNavigateAwayGuard {
  navigationFlag: boolean;
  constructor(
    private launchDialogService: LaunchDialogService,
    private quickOrderService: QuickOrderService
  ) {
    this.quickOrderService.getNavigation().subscribe((flag) => {
      this.navigationFlag = flag;
    });
  }

  canDeactivate(
    nextState: RouterStateSnapshot):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>{
    if (this.navigationFlag) {
      return true;
    }
    const quickOrderDialog = this.launchDialogService.openDialog(
      DS_DIALOG.QUICK_ORDER_ROUTE_GAURD,
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
