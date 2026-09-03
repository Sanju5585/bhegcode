import { Component, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
@Component({
  standalone: false,
  selector: 'app-guest-track-popup',
  templateUrl: './guest-track-popup.component.html',
  styleUrls: ['./guest-track-popup.component.scss'],
})
export class GuestTrackPopupComponent implements OnInit {
  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {}
  //on click of no btn or cross icon
  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
