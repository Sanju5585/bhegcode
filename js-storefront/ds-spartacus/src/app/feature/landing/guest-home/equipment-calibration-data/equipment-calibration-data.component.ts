import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-equipment-calibration-data',
  templateUrl: './equipment-calibration-data.component.html',
  styleUrls: ['./equipment-calibration-data.component.scss'],
})
export class EquipmentCalibrationDataComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  viewCalibration() {
    this.router.navigate(['/calibration-data']);
  }
  viewLogin() {
    this.router.navigate(['/login']);
  }
}
