import { Component, Input, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'app-part-delete-popup',
  templateUrl: './part-delete-popup.component.html',
  styleUrls: ['./part-delete-popup.component.scss'],
})
export class PartDeletePopupComponent implements OnInit {
  @Input() multipleParts: boolean;
  reason: any;

  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {}

  closeModal(reason?: any): void {
    this.reason = reason;
    this.launchDialogService.closeDialog(reason);
  }
}
