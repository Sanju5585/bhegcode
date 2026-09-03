import { Component, Input, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'rma-ds-switch-ds-account-dialog',
  templateUrl: './rma-switch-ds-account.html',
  styleUrls: ['./rma-switch-ds-account.scss'],
})
export class RMASwitchCustomerDialogComponent implements OnInit {
  @Input()
  productAccessData;
  props: any;
  selectedSalesAreaId: any = '';
  rmaDisableBtn: boolean = true;

  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
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
  }

  closeModal(reason?: any): void {
    if (reason !== '') {
      this.launchDialogService.closeDialog(reason);
    }
  }

  onDSAccChange(event) {
    this.selectedSalesAreaId = event.detail;
    this.rmaDisableBtn = false;
  }
}
