import { Component } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DecisionType } from '../../../../../shared/models/cartType.models';

@Component({
  selector: 'app-waygate-duplicate-eca-modal',
  standalone: false,
  templateUrl: './waygate-duplicate-eca-modal.component.html',
  styleUrl: './waygate-duplicate-eca-modal.component.scss',
})
export class WaygateDuplicateEcaModalComponent {
  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data: any) => {});
  }

  onClose(reason) {
    this.launchDialogService.closeDialog(reason);
  }

  increaseQty() {
    this.launchDialogService.closeDialog(DecisionType.IncreaseQty);
  }

  changeEca() {
    this.launchDialogService.closeDialog(DecisionType.ChangeEca);
  }
}
