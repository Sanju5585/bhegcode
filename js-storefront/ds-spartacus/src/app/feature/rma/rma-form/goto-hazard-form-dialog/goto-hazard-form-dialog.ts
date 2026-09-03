import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'ds-goto-hazard-form-dialog',
  templateUrl: './goto-hazard-form-dialog.html',
  styleUrls: ['./goto-hazard-form-dialog.scss'],
})
export class GoToHazardousFormDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;
  reason: any;

  constructor(
    protected launchDialogService: LaunchDialogService,
    private router: Router,
   // private dialogRef: MatDialogRef<GoToHazardousFormDialogComponent>
  ) {}

  ngOnInit() {}

  closeModal(reason?: boolean): void {
    this.launchDialogService.closeDialog(reason);
  }
}
