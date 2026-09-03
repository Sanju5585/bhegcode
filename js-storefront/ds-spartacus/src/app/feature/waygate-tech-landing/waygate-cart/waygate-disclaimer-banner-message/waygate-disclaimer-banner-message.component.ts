import { Component } from '@angular/core';
import { LAUNCH_CALLER, LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'app-waygate-disclaimer-banner-message',
  standalone: false,
  templateUrl: './waygate-disclaimer-banner-message.component.html',
  styleUrl: './waygate-disclaimer-banner-message.component.scss',
})
export class WaygateDisclaimerBannerMessageComponent {
  constructor(private launchDialogService: LaunchDialogService) {}
  ngOnInit(): void {
  }

  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
