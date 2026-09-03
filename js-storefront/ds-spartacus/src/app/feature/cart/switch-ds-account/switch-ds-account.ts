import { Component, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-switch-ds-account-dialog',
  templateUrl: './switch-ds-account.html',
  styleUrls: ['./switch-ds-account.scss'],
})
export class SwitchCustomerDialogComponent implements OnInit {
  productAccessData;
  props: any;
  selectedSalesAreaId: any = '';
  accDisableBtn: boolean = true;

  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.productAccessData = data?.productAccessData;
      let salesAreaArr = [];
      this.productAccessData.salesAreas.forEach((element) => {
        salesAreaArr.push({
          label: element.customerSalesOrgName + ' ' + element.salesOrgUid,
          value: element.customerSalesOrgUid,
        });
      });

      this.props = {
        itemGroups: [
          {
            items: salesAreaArr,
          },
        ],
      };
    });
  }

  closeModal(reason?: any): void {
    if (!this.accDisableBtn) {
      this.launchDialogService.closeDialog(reason);
    }
  }

  onSalesAreaChange(event) {
    this.selectedSalesAreaId = event.detail;
    this.accDisableBtn = false;
  }
  closeModalPopup(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
