import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Discounts } from '../../../../shared/models/discounts.model';
import {
  SAP_ORDER_STATUS,
  OrderStatusTypes,
} from '../../../../shared/models/status/order-status.model';
@Component({
  standalone: false,
  selector: 'vs-order-tracking-product',
  templateUrl: './order-tracking-product.component.html',
  styleUrls: ['./order-tracking-product.component.scss'],
})
export class OrderTrackingProductComponent implements OnInit {
  @Input() productItem: any;
  @Input() indexNo;
  @Input() productOpen;
  breakUp = false;
  user$: Observable<unknown>;
  userType = '';

  constructor(
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    public sanitized: DomSanitizer
  ) {}

  ngOnInit(): void {
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
      (error) => {}
    );
  }
  addedValues = [];
  toggleProduct() {
    this.productOpen = !this.productOpen;
  }

  fetchOrderStatusColor(statusResponse) {
    let color = '';
    if (statusResponse !== undefined) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_ORDER_STATUS.ORDER_SUBMITTED:
          color = '#506C65';
          break;
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          color = '#CB6E17';
          break;
        case SAP_ORDER_STATUS.SHIPPED:
          color = '#044E54';
          break;
        case SAP_ORDER_STATUS.SHIPPED_INVOICED:
          color = '#506C65';
          break;
        case SAP_ORDER_STATUS.BLOCKED:
          color = '#E12D39';
          break;
      }
    }
    return color;
  }

  fetchOrderStatus(statusResponse) {
    let status = '';
    if (statusResponse !== undefined) {
      const stringObj = statusResponse.toUpperCase();

      switch (stringObj) {
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          status = OrderStatusTypes.PROGRESS.statusName;
          break;
        case SAP_ORDER_STATUS.SHIPPED:
          status = OrderStatusTypes.SHIPPED.statusName;
          break;
        case SAP_ORDER_STATUS.SHIPPED_INVOICED:
          status = OrderStatusTypes.INVOICED.statusName;
          break;
        case SAP_ORDER_STATUS.BLOCKED:
          status = OrderStatusTypes.BLOCKED.statusName;
          break;
      }
    }
    return status;
  }
  openViewBreakup() {
    this.breakUp = true;
  }
  closeMenu(event) {
    this.breakUp = false;
  }
  getDiscountName(code) {
    return Discounts[code];
  }
  getTotalDiscounts(discounts?, adders?) {
    let totalDisc = 0;
    let totalAdds = 0;
    for (const disc of discounts) {
      totalDisc += disc.value;
    }
    for (const adds of adders) {
      totalAdds += adds.value;
    }
    return (
      (discounts[0]?.formattedValue[0] || adders[0]?.formattedValue[0]) +
      ((totalAdds || 0) - (totalDisc || 0)).toFixed(2)
    );
  }
}
