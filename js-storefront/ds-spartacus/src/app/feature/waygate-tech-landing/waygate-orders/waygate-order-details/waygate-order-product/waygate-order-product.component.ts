import { Component, Input } from '@angular/core';

import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { OrderStatusName } from '../../../../../shared/models/status/order-status.model';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';

@Component({
  standalone: false,
  selector: 'app-waygate-order-product',
  templateUrl: './waygate-order-product.component.html',
  styleUrls: ['./waygate-order-product.component.scss'],
})
export class WaygateOrderProductComponent {
  @Input() product;
  @Input() userType;
  @Input() productType;
  @Input() currency;
  breakUp = false;
  breakUpMenu = false;
  constructor(private launchDialogService: LaunchDialogService) {}

  getClass = (orderStatus) => {
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };
  togglePriceBreakup() {
    this.breakUpMenu = !this.breakUpMenu;
  }
  closeMenu(event) {
    this.breakUp = false;
  }
  /**
   * @description conpaire the selected status and if it is shipped the return true otherwise false
   * @returns boolean true/false
   */

  get statusIsShipped(): boolean {
    return [OrderStatusName.SHIPPED, OrderStatusName.INVOICED].includes(
      this.product?.status
    )
      ? true
      : false;
  }

  getPrice(price, qty) {
    return Number(price / qty);
  }
  getUnitBasePrice(product) {
    if (product?.discountPrice) {
      if (product?.qty > 1) {
        return Number(product?.discountPrice / product.qty).toFixed(2);
      } else {
        return Number(product?.discountPrice).toFixed(2);
      }
    }
  }

  getTotalPrice(totalPrice) {
    return Number(totalPrice).toFixed(2);
  }

  public openModal() {
    const componentdata = {
      item: this.product,
      userType: this.userType,
    };
    const viewConfigModal = this.launchDialogService.openDialog(
      DS_DIALOG.CONFIGURATOR_OVERVIEW_MODAL,
      undefined,
      undefined,
      componentdata
    );
    if (viewConfigModal) {
      viewConfigModal.pipe(take(1)).subscribe(() => {});
    }
  }
  getTrackingLink(courier: string, trackingNumber: string): string {
    const text = courier?.toLowerCase();
    switch (true) {
      case text?.includes('ups'):
        return `http://www.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;
      case text?.includes('fedex'):
        return `https://www.fedex.com/wtrk/track/?trknbr=${trackingNumber}`;
      case text?.includes('dhl'):
        return `https://www.dhl.com/in-en/home/tracking.html?tracking-id=${trackingNumber}`;
      default:
        return;
    }
  }
  getCurrency(curr) {
    return curr.split(' ')?.[0];
  }
}
