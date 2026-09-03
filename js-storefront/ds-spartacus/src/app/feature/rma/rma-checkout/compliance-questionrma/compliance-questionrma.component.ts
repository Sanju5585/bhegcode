import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PlaceorderModel } from '../../../checkout/buy-checkout/buy-checkout.model';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { GuestBuyCheckoutService } from '../../../checkout/guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-compliance-questionrma',
  templateUrl: './compliance-questionrma.component.html',
  styleUrls: ['./compliance-questionrma.component.scss'],
})
export class ComplianceQuestionrmaComponent implements OnInit {
  @Output() setComplianceData: EventEmitter<any> = new EventEmitter();
  radiobtnbuy: any;
  radiobtnbuy1: any;
  radiobtnbuy2: any;
  radiobtnbuy3: any;
  submitted: boolean = false;
  conplianceModel: PlaceorderModel;
  rmaExportAddress;
  constructor(
    private chkService: GuestBuyCheckoutService,
    public sanitizer: DomSanitizer
  ) {
    this.conplianceModel = new PlaceorderModel();
  }
  ngOnInit(): void {
    this.chkService.getValidation().subscribe((notification) => {
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
      if (this.radiobtnbuy2 == 'false') this.rmaExportAddress = '';
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
      window.scrollTo({ top: 2000, behavior: 'smooth' });
    }
    if (
      this.radiobtnbuy &&
      this.radiobtnbuy1 &&
      this.radiobtnbuy2 &&
      this.radiobtnbuy3
    ) {
      this.conplianceModel.govtAgencyFlagVal = this.radiobtnbuy
        ? this.radiobtnbuy.trim()
        : '';
      this.conplianceModel.nuclearOpportFlagVal = this.radiobtnbuy1
        ? this.radiobtnbuy1.trim()
        : '';
      this.conplianceModel.planToExportFlagVal = this.radiobtnbuy2
        ? this.radiobtnbuy2.trim()
        : '';
      this.conplianceModel.isBuyerFlagVal = this.radiobtnbuy3
        ? this.radiobtnbuy3.trim()
        : '';
      this.conplianceModel.googleCaptcha = '';
      let rmaExprotValue = this.rmaExportAddress;
      const rmaexportPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
      if (rmaExprotValue && !rmaExprotValue.match(rmaexportPattern)) {
        this.rmaExportAddress = '';
      }
      this.conplianceModel.exportAddress = rmaExprotValue;
      this.conplianceModel.ndays = '';
      this.conplianceModel.ndaysOfWeek = [];
      this.conplianceModel.nthDayOfMonth = '';
      this.conplianceModel.nweeks = '';
      this.conplianceModel.requestedHdrDeliveryDate = '';
      this.conplianceModel.replenishmentStartDate = '';
      this.conplianceModel.replenishmentRecurrence = '';
      this.conplianceModel.replenishmentOrder = false;
      this.conplianceModel.securityCode = '';
      this.conplianceModel.termsCheck = true;
      this.setComplianceData.emit(this.conplianceModel);
    }
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
  }
}
