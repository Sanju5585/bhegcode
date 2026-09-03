import { Component } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DecisionType } from '../../../shared/models/cartType.models';

@Component({
  selector: 'app-waygate-carttype-conflict-dialog',
  standalone: false,
  templateUrl: './waygate-carttype-conflict-dialog.component.html',
  styleUrl: './waygate-carttype-conflict-dialog.component.scss',
})
export class WaygateCartTypeConflictDialogComponent {
  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data: any) => {});
  }

  onClose(reason) {
    this.launchDialogService.closeDialog(reason);
  }

  cancel() {
    this.launchDialogService.closeDialog(DecisionType.Cancel);
  }

  continue() {
    this.launchDialogService.closeDialog(DecisionType.SaveAndContinue);
  }
}
