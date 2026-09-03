import { Component } from '@angular/core';
import { LAUNCH_CALLER, LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'app-waygate-out-of-stock-message',
  standalone: false,
  templateUrl: './waygate-out-of-stock-message.component.html',
  styleUrl: './waygate-out-of-stock-message.component.scss',
})
export class WaygateOutOfStockMessageComponent {
  oosProducts: any;
  constructor(private launchDialogService: LaunchDialogService) {}
  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.oosProducts = data?.oosEntries.join(', ');
      console.log(this.oosProducts);
    });
  }

  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
