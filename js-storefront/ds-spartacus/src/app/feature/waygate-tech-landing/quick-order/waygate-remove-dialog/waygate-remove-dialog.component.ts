import { Component, Input, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { QuickOrderProductsComponent } from '../quick-order-products/quick-order-products.component';

@Component({
  standalone: false,
  selector: 'app-waygate-remove-dialog',
  templateUrl: './waygate-remove-dialog.component.html',
  styleUrls: ['./waygate-remove-dialog.component.scss'],
})
export class WaygateRemoveDialogComponent implements OnInit {
  @Input() dataToDelete: boolean;
  reason: string;

  constructor(protected launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {}

  closeModal(reason?: any): void {
    this.reason = reason;
    if (reason) {
      this.launchDialogService.closeDialog(true);
    } else {
      this.launchDialogService.closeDialog(false);
    }
  }
}
