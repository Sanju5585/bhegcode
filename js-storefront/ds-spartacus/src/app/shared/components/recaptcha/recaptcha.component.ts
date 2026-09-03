import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'ds-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: [],
})
export class RecaptchaComponent implements OnInit {
  siteKey;
  constructor() {}

  ngOnInit(): void {
    this.siteKey = environment.siteKey;
  }
}
