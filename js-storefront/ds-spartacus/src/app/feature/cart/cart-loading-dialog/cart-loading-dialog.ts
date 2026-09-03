import { Component, OnInit } from '@angular/core';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-cart-loading-dialog',
  templateUrl: './cart-loading-dialog.html',
  styleUrls: ['./cart-loading-dialog.scss'],
})
export class CartLoadingDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;

  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {}

  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
