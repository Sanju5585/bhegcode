import { Component, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'app-approval-criteria-modal',
  templateUrl: './approval-criteria-modal.component.html',
  styleUrls: ['./approval-criteria-modal.component.scss'],
})
export class ApprovalCriteriaModalComponent implements OnInit {
  ruleList!: any[];
  constructor(protected launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.ruleList = data?.ruleList;
    });
  }

  closeModal(): void {
    this.launchDialogService.closeDialog('');
  }
}
