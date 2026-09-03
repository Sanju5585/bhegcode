import { Component, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { ApiService } from '../../../../../../core/http/api.service';

@Component({
  standalone: false,
  selector: 'app-configurator-overview-modal',
  templateUrl: './configurator-overview-modal.component.html',
  styleUrls: ['./configurator-overview-modal.component.scss'],
})
export class ConfiguratorOverviewModalComponent implements OnInit {
  entry: any;
  userType: any;
  overview: any;
  cartId: any;
  modalIsOpen = false;
  reason: any;
  orderId: any;
  productname: string;

  constructor(
    private launchDialogService: LaunchDialogService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.launchDialogService.data$.subscribe((data) => {
      this.entry = data?.item;
      this.cartId = data?.cartId;
      this.userType = data?.userType;
    });
    if (this.cartId) {
      this.loadConfigOnCartPage();
    }
    if (this.entry.orderNum) {
      this.loadConfigOnOrderSummaryPage();
    }
  }

  loadConfigOnCartPage() {
    const apiParams = [
      'users',
      this.userType,
      'carts',
      this.cartId,
      'entries',
      this.entry.entryNumber,
      'ccpconfigurator',
    ];
    const params = { expMode: false };
    const url = this.apiService.constructUrl(apiParams);
    this.apiService.getData(url, params).subscribe((res) => {
      this.overview = res;
      this.productname = this.entry.product.name;
    });
  }
  loadConfigOnOrderSummaryPage() {
    const apiParams = [
      'users',
      this.userType,
      'orders',
      this.entry.orderNum,
      'entries',
      this.entry.entryNumber,
      'ccpconfigurator',
      'configurationOverview',
    ];
    const url = this.apiService.constructUrl(apiParams);
    this.apiService.getData(url).subscribe((res) => {
      this.overview = res;
      this.productname = this.entry.description;
    });
  }

  close(reason?: any): void {
    this.reason = reason;
    this.launchDialogService.closeDialog(this.reason);
  }
}
