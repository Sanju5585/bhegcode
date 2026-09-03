import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { PlaceorderModel } from '../../../../checkout/buy-checkout/buy-checkout.model';
import { GuestBuyCheckoutService } from '../../../../checkout/guest-checkout/services/guest-buy-checkout.service';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';

@Component({
  standalone: false,
  selector: 'app-waygate-compliance-questions',
  templateUrl: './waygate-compliance-questions.component.html',
  styleUrls: ['./waygate-compliance-questions.component.scss'],
})
export class WaygateComplianceQuestionsComponent {
  @Output() setComplianceData: EventEmitter<any> = new EventEmitter();
  @Output() isComplianceValid: EventEmitter<any> = new EventEmitter();
  @Input() isQuote: boolean;

  radiobtnbuy: any;
  govtAgencyFlagVal: string;
  nuclearOpportFlagVal: string;
  planToExportFlagVal: string;
  isBuyerFlagVal: string;
  submitted: boolean = false;
  $subscription: Subscription;

  buyCheckoutModel: PlaceorderModel;
  exportAddress = '';
  productLine: any;
  allProductLine = AllProductLine
  constructor(
    private chkService: GuestBuyCheckoutService,
    public sanitizer: DomSanitizer,
    public custAccService: CustomerAccountService
  ) {
    this.custAccService.getProductLine().subscribe((productLine: any) => {
      this.productLine = productLine
    })
  }
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
  exportAddressVal() {
    if (
      this.planToExportFlagVal == 'true' &&
      this.exportAddress.trim()?.length != 0
    )
      this.isComplianceValid.emit(true);
    else {
      this.isComplianceValid.emit(false);
    }
  }
  handleChange(e, field) {
    this[field] = e.target.value;
    if (field === 'planToExportFlagVal') {
      this.planToExportFlagVal = e.target.value;
      if (this.planToExportFlagVal == 'false') {
        this.exportAddress = '';
        this.isComplianceValid.emit(true);
      } else if (
        this.planToExportFlagVal == 'true' &&
        this.exportAddress.trim()?.length != 0
      ) {
        this.isComplianceValid.emit(true);
      } else {
        this.isComplianceValid.emit(false);
      }
    }
  }
  onSubmit() {
    if (
      [
        this.govtAgencyFlagVal,
        this.isBuyerFlagVal,
        this.nuclearOpportFlagVal,
        this.planToExportFlagVal,
      ].includes(undefined)
    ) {
      this.submitted = true;
      this.isComplianceValid.emit(false);
    } else if (
      this.planToExportFlagVal == 'true' &&
      this.exportAddress.trim()?.length == 0
    ) {
      this.submitted = true;
      this.isComplianceValid.emit(false);
    } else {
      this.submitted = false;
      this.isComplianceValid.emit(true);
    }
    this.buyCheckoutModel.govtAgencyFlagVal = this.govtAgencyFlagVal
      ? this.govtAgencyFlagVal.trim()
      : '';
    this.buyCheckoutModel.nuclearOpportFlagVal = this.nuclearOpportFlagVal
      ? this.nuclearOpportFlagVal.trim()
      : '';
    this.buyCheckoutModel.planToExportFlagVal = this.planToExportFlagVal
      ? this.planToExportFlagVal.trim()
      : '';
    this.buyCheckoutModel.isBuyerFlagVal = this.isBuyerFlagVal
      ? this.isBuyerFlagVal.trim()
      : '';
    this.buyCheckoutModel.googleCaptcha = '';
    let exprotValue = this.exportAddress;
    const rmaexportPattern = /^[\p{L}\p{N}\wÁ-ÿa-zA-Z0-9 ,+-。:/#*&!_.%;・()@]+$/u;
    if (exprotValue && !exprotValue.match(rmaexportPattern)) {
      exprotValue = '';
    }
    this.buyCheckoutModel.exportAddress = exprotValue;
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
    // }
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.chkService.setValidation(false);
  }
}
