import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { PlaceorderModel } from '../buy-checkout.model';
import { GuestBuyCheckoutService } from '../../guest-checkout/services/guest-buy-checkout.service';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-compliance-question',
  templateUrl: './compliance-question.component.html',
  styleUrls: ['./compliance-question.component.scss'],
})
export class ComplianceQuestionComponent implements OnInit {
  @Output() setComplianceData: EventEmitter<any> = new EventEmitter();
  radiobtnbuy: any;
  radiobtnbuy1: any;
  radiobtnbuy2: any;
  radiobtnbuy3: any;
  submitted: boolean = false;
  $subscription: Subscription;

  buyCheckoutModel: PlaceorderModel;
  exportAddress;

  constructor(
    private chkService: GuestBuyCheckoutService,
    public sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.buyCheckoutModel = new PlaceorderModel();
    this.$subscription = this.chkService
      .getValidation()
      .subscribe((notification) => {
        if (notification) {
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
    if (
      this.radiobtnbuy == undefined ||
      this.radiobtnbuy1 == undefined ||
      this.radiobtnbuy2 == undefined ||
      this.radiobtnbuy3 == undefined
    ) {
      // window.scrollTo({ top: 2000, behavior: 'smooth' });
    }
    if (
      this.radiobtnbuy &&
      this.radiobtnbuy1 &&
      this.radiobtnbuy2 &&
      this.radiobtnbuy3
    ) {
      this.buyCheckoutModel.govtAgencyFlagVal = this.radiobtnbuy
        ? this.radiobtnbuy.trim()
        : '';
      this.buyCheckoutModel.nuclearOpportFlagVal = this.radiobtnbuy1
        ? this.radiobtnbuy1.trim()
        : '';
      this.buyCheckoutModel.planToExportFlagVal = this.radiobtnbuy2
        ? this.radiobtnbuy2.trim()
        : '';
      this.buyCheckoutModel.isBuyerFlagVal = this.radiobtnbuy3
        ? this.radiobtnbuy3.trim()
        : '';
      this.buyCheckoutModel.googleCaptcha = '';
      let exportValue = this.exportAddress;
      const exportPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/ ]+$/;
      if (exportValue && !exportValue.match(exportPattern)) {
        exportValue = '';
      }
      this.buyCheckoutModel.exportAddress = exportValue;
      this.buyCheckoutModel.ndays = '';
      this.buyCheckoutModel.ndaysOfWeek = [];
      this.buyCheckoutModel.nthDayOfMonth = '';
      this.buyCheckoutModel.nweeks = '';
      this.buyCheckoutModel.requestedHdrDeliveryDate = '';
      this.buyCheckoutModel.replenishmentStartDate = '';
      this.buyCheckoutModel.replenishmentRecurrence = '';
      this.buyCheckoutModel.replenishmentOrder = false;
      this.buyCheckoutModel.securityCode = '';
      this.buyCheckoutModel.termsCheck = true;
      this.setComplianceData.emit(this.buyCheckoutModel);
    }
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.chkService.setValidation(false);
  }
}
