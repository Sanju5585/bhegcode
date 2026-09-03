import { Component, Input, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  @Input()
  name: any;
  reason: any;
  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {}

  closeModal(reason?: any): void {
    this.reason = reason;
    this.launchDialogService.closeDialog(this.reason);
  }
}
