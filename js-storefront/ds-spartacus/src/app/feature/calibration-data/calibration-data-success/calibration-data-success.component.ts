import { Component, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'app-calibration-data-success',
  templateUrl: './calibration-data-success.component.html',
  styleUrls: ['./calibration-data-success.component.scss'],
})
export class CalibrationDataSuccessComponent implements OnInit {
  constructor(private launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {}

  closeModal() {
    this.launchDialogService.closeDialog('');
  }
}
