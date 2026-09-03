import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'ds-compliance-question',
  templateUrl: './compliance-question.component.html',
  styleUrls: ['./compliance-question.component.scss'],
})
export class ComplianceQuestionComponent implements OnInit {
  @Output() complianceDetailsEvent = new EventEmitter<any>();
  radiobtnbuy: any;
  radiobtnbuy1: any;
  radiobtnbuy2: any;
  radiobtnbuy3: any;
  submitted: boolean = false;
  compliance: {};
  exportAddress;
  constructor(
    private guestBuyCheckout: GuestBuyCheckoutService,
    private chkService: GuestBuyCheckoutService
  ) {}
  ngOnInit(): void {
    this.guestBuyCheckout.currentMessage.subscribe((message) => {
      if (message === 'valid') {
        this.onSubmit();
      }
    });
  }

  handleChange(e, field) {
    if (field === 'radiobtnbuy') {
      this.radiobtnbuy = e.target.value;
    }
    if (field === 'radiobtnbuy1') {
      this.radiobtnbuy1 = e.target.value;
    }
    if (field === 'radiobtnbuy2') {
      this.radiobtnbuy2 = e.target.value;
      if (this.radiobtnbuy2 == 'false') this.exportAddress = '';
    }
    if (field === 'radiobtnbuy3') {
      this.radiobtnbuy3 = e.target.value;
    }
  }
  onSubmit() {
    this.submitted = true;

    this.compliance = {
      govtAgencyFlagVal: this.radiobtnbuy ? this.radiobtnbuy : '',
      nuclearOpportFlagVal: this.radiobtnbuy1 ? this.radiobtnbuy1 : '',
      planToExportFlagVal: this.radiobtnbuy2 ? this.radiobtnbuy2 : '',
      isBuyerFlagVal: this.radiobtnbuy3 ? this.radiobtnbuy3 : '',
      exportAddress: this.exportAddress ? this.exportAddress.trim() : '',
    };
    this.complianceDetailsEvent.emit(this.compliance);
    if (
      this.radiobtnbuy &&
      this.radiobtnbuy1 &&
      this.radiobtnbuy2 &&
      this.radiobtnbuy3
    )
      this.guestBuyCheckout.setcomplianceValidation('valid');
  }
}
