import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { LAUNCH_CALLER, LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'app-waygate-complete-order',
  templateUrl: './waygate-complete-order.component.html',
  styleUrls: ['./waygate-complete-order.component.scss'],
})
export class WaygateCompleteOrderComponent {
  earliestShipDate;

  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    // this.launchDialogService.data$.subscribe((data) => {
    //   this.earliestShipDate = data.earliestShipDate
    // })
  }

  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
