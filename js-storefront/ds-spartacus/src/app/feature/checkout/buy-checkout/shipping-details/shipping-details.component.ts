import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import moment from 'moment';
import { CheckoutDetailModel } from '../buy-checkout.model';
import { Subscription } from 'rxjs';
import { TranslationService } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { CalenderConfigService } from '../../../../shared/services/calender-config.service';
import { GuestBuyCheckoutService } from '../../guest-checkout/services/guest-buy-checkout.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss'],
})
export class ShippingDetailsComponent implements OnInit {
  @ViewChild('customerForm') form: any;
  @Input() sippingAddress;
  @Input() collectType;
  @Input() prePayAddType;
  @Input() inkoTerm;
  @Input() largestFilmLeadtime;
  @Input() largestNonFilmLeadtime;
  @Input() cartType;
  @Input() checkoutData;
  @Output() setModelData: EventEmitter<any> = new EventEmitter();
  @Output() setReqDate: EventEmitter<any> = new EventEmitter();
  @Output() checkShippingAddressVal: EventEmitter<any> = new EventEmitter();
  minDate = new Date();
  min1Date = new Date();
  showShipping: boolean = true;
  INCOTERMS_LIST = ['CPT', 'DAP', 'CIP', 'DDP'];
  props: any;
  drpDwnArr = [];
  shippingRemark: string;
  shippingDate: any;
  deliveryPoint: any;
  checkoutDetailModel: CheckoutDetailModel;
  loading: boolean = false;
  $subscription: Subscription;
  $subscriptionforSubmit: Subscription;
  carrierCode;
  checkoutMessages: any;
  incoTermUrl = environment.incoTermsUrl;
  showPrepay: boolean = true;
  filterWeekend = this.calenderConfigService.isFilterWeekend();
  constructor(
    private chkService: GuestBuyCheckoutService,
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private translate: TranslationService,
    private calenderConfigService: CalenderConfigService,
    public sanitizer: DomSanitizer
  ) {
    this.checkoutDetailModel = new CheckoutDetailModel();
  }

  ShipName: any = '';
  shipContact: any = '';
  shipNotimail: any = '';
  carrier: any = '';
  shipAddress: any = '';
  collect: any = '';
  showCarrierText: boolean = true;
  error = {
    ShipName: '',
    shipContact: '',
    shipNotimail: '',
    shipAddress: '',
    shipCarrier: '',
    shipAccountNo: '',
  };
  isSubmitted: boolean = false;
  deliveryOption = 'collect';
  hybridShippingDate;

  ngOnInit(): void {
    this.$subscriptionforSubmit = this.chkService
      .getValidation()
      .subscribe((shipping) => {
        if (shipping) {
          this.onSubmit();
        }
      });
    this.defaultDrpDwn();
    this.getSelectedAddress();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  ngOnChanges() {
    this.defaultDrpDwn();
    if (this.checkoutData?.cartData) {
      this.collect = this.checkoutData?.cartData?.deliveryAccount;
      this.carrierCode = this.checkoutData?.cartData?.deliveryCarrier;
      if (
        this.checkoutData?.cartData?.deliveryOptions == 'COLLECT' &&
        this.carrierCode
      )
        this.carrier = this.collectType.filter(
          (name) => name.code == this.carrierCode
        )[0].name;
      if (
        this.checkoutData?.cartData?.deliveryOptions == 'Prepay & Add' &&
        this.carrierCode
      )
        this.carrier = this.prePayAddType.filter(
          (name) => name.code == this.carrierCode
        )[0].name;
      this.ShipName = this.checkoutData?.cartData?.shipToContactName;
      this.shipContact = this.checkoutData?.cartData?.shipToContactPhone;
      this.shipNotimail = this.checkoutData?.cartData?.shipNotificationEmail;
    }
    this.checkRequestedShippingAndOrderReqDate();
    this.shippingMethodeShowNHide(this.checkoutData);
  }

  dateCalculation(res: any, minDate) {
    let endDate: Date;
    let noOfDaysToAdd = res;
    let count = 0;
    if (res > 0) {
      if (minDate.getDay() == 0 || minDate.getDay() == 6) {
        while (count <= noOfDaysToAdd) {
          endDate = new Date(minDate.setDate(minDate.getDate() + 1));
          if (endDate.getDay() != 0 && endDate.getDay() != 6) {
            count++;
          }
        }
      } else {
        while (count < noOfDaysToAdd) {
          endDate = new Date(minDate.setDate(minDate.getDate() + 1));
          if (endDate.getDay() != 0 && endDate.getDay() != 6) {
            count++;
          }
        }
      }
    } else {
      noOfDaysToAdd = 5;
      if (minDate.getDay() == 0 || minDate.getDay() == 6) {
        while (count <= noOfDaysToAdd) {
          endDate = new Date(minDate.setDate(minDate.getDate() + 1));
          if (endDate.getDay() != 0 && endDate.getDay() != 6) {
            count++;
          }
        }
      } else {
        while (count < noOfDaysToAdd) {
          endDate = new Date(minDate.setDate(minDate.getDate() + 1));
          if (endDate.getDay() != 0 && endDate.getDay() != 6) {
            count++;
          }
        }
      }
    }
    return endDate;
  }

  checkRequestedShippingAndOrderReqDate() {
    let reqMinDate = this.minDate;
    let reqMin1Date = this.min1Date;
    if (this.cartType == 'FILM') {
      let expectedTime = this.dateCalculation(
        Number(this.largestFilmLeadtime),
        reqMinDate
      );
      this.minDate.setDate(expectedTime.getDate());
    } else if (this.cartType == 'HYBRID') {
      let expectedTimefilmtime = this.dateCalculation(
        Number(this.largestFilmLeadtime),
        reqMinDate
      );
      this.minDate.setDate(expectedTimefilmtime.getDate());

      let expectedTime = this.dateCalculation(
        Number(this.largestNonFilmLeadtime),
        reqMin1Date
      );
      this.min1Date.setDate(expectedTime.getDate());
    } else {
      let expectedTime = this.dateCalculation(
        Number(this.largestNonFilmLeadtime),
        reqMinDate
      );
      this.minDate.setDate(expectedTime.getDate());
    }
  }
  shippingMethodeShowNHide(data) {
    this.INCOTERMS_LIST.forEach((element) => {
      if (element == data?.defaultSoldTo?.incoterms1) this.showShipping = false;
    });

    if (this.cartType != 'NONFILM') {
      this.showShipping = true;
      this.showPrepay = false;
      this.deliveryOption = 'prepay';
    }
  }

  defaultDrpDwn() {
    this.drpDwnArr = [];
    this.drpDwnArr = this.collectType.map((val) => {
      return { label: val.name, value: val.code };
    });

    this.populateDrpDwn(this.drpDwnArr);
  }

  populateDrpDwn(itemList) {
    this.props = {
      itemGroups: [
        {
          items: itemList,
        },
      ],
    };
  }

  getCarrier(event) {
    this.carrier = event.detail.label;
    this.carrierCode = event.detail.value;
    if (this.carrier) this.error.shipCarrier = '';
  }

  handleChange(event) {
    this.drpDwnArr = [];
    this.props = {};
    if (event.target.value == 'collect') {
      this.deliveryOption = 'collect';
      this.showCarrierText = true;
      this.drpDwnArr = this.collectType.map((val) => {
        return { label: val.name, value: val.code };
      });
      this.populateDrpDwn(this.drpDwnArr);
    }
    if (event.target.value == 'prepayadd') {
      this.deliveryOption = 'prepay';
      this.showCarrierText = false;
      this.collect = '';
      this.drpDwnArr = this.prePayAddType.map((val) => {
        return { label: val.name, value: val.code };
      });
      this.populateDrpDwn(this.drpDwnArr);
    }
  }

  getSelectedAddress() {
    this.$subscription = this.addressModelService
      .getAddress()
      .subscribe((data) => {
        if (data) {
          this.setAddress(data);
        }
      });
  }

  setAddress(data) {
    if (data.flag == 'shipping') {
      this.sippingAddress = data.res;
      if (this.sippingAddress) this.error.shipAddress = '';
      this.launchDialogService.closeDialog(undefined);
    }
  }

  onDateChange(e) {
    this.shippingDate = moment(e).format('DD-MM-YYYY');
  }

  hybridDateChange(e) {
    this.hybridShippingDate = moment(e).format('DD-MM-YYYY');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.ShipName === '' || this.ShipName === undefined) {
      this.error.ShipName = this.getTranslatedText('errors.shipContactName');
      // window.scrollTo({ top: 1000, behavior: 'smooth' });
    }
    if (this.shipContact === '' || this.shipContact === undefined) {
      this.error.shipContact = this.getTranslatedText('errors.shipContactNo');
      // window.scrollTo({ top: 1000, behavior: 'smooth' });
    }
    if (this.shipNotimail === '' || this.shipNotimail === undefined) {
      this.error.shipNotimail = this.getTranslatedText(
        'errors.shipNotificationEmail'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.showCarrierText) {
      if (
        (this.collect === '' || this.collect === undefined) &&
        this.showPrepay
      ) {
        this.error.shipAccountNo = this.getTranslatedText(
          'errors.shippingAccountNumber'
        );
        // window.scrollTo({ top: 1200, behavior: 'smooth' });
      }
    }

    if (
      !this.sippingAddress.shippingAddress &&
      this.sippingAddress.shippingAddress != undefined &&
      this.error.shipAddress != ''
    ) {
      this.error.shipAddress = this.getTranslatedText('errors.shippingAddress');
      // window.scrollTo({ top: 500, behavior: 'smooth' });
      return;
    } else {
      this.error.shipAddress = '';
    }

    if (!this.carrier && this.showShipping && this.showPrepay) {
      this.error.shipCarrier = this.getTranslatedText('errors.shipCarrier');
      // window.scrollTo({ top: 800, behavior: 'smooth' });
    } else {
      this.error.shipCarrier = '';
    }

    if (this.error.shipContact != '') {
      //  window.scrollTo({ top: 1000, behavior: 'smooth'});
      this.checkShippingAddressVal.emit(false);
      return;
    } else {
      this.checkShippingAddressVal.emit(true);
    }

    if (this.error.shipNotimail != '') {
      //  window.scrollTo({ top: 1200, behavior: 'smooth'});
      this.checkShippingAddressVal.emit(false);
      return;
    } else {
      this.checkShippingAddressVal.emit(true);
    }

    if (this.showShipping && this.showPrepay) {
      if (
        this.ShipName &&
        this.shipContact &&
        this.shipNotimail &&
        this.sippingAddress &&
        this.carrier
      ) {
        this.commonData();
      } else {
        this.checkoutDetailModel = undefined;
        this.setModelData.emit(this.checkoutDetailModel);
      }
    }
    if (this.showShipping && !this.showPrepay) {
      if (
        this.ShipName &&
        this.shipContact &&
        this.shipNotimail &&
        this.sippingAddress
      ) {
        this.commonData();
      } else {
        this.checkoutDetailModel = undefined;
        this.setModelData.emit(this.checkoutDetailModel);
      }
    }
    if (!this.showShipping) {
      if (
        this.ShipName &&
        this.shipContact &&
        this.shipNotimail &&
        this.sippingAddress
      ) {
        this.commonData();
      } else {
        this.checkoutDetailModel = undefined;
        this.setModelData.emit(this.checkoutDetailModel);
      }
    }
  }

  commonData() {
    this.checkoutDetailModel = new CheckoutDetailModel();
    this.checkoutDetailModel.shipToContactName = this.ShipName.trim();
    this.checkoutDetailModel.shipToContactPhone = this.shipContact.trim();
    this.checkoutDetailModel.shipNotificationEmail = this.shipNotimail
      .trim()
      .toLowerCase();
    let shippingRemarkValue = this.shippingRemark;
    const remarkPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/ ]+$/;
    if (shippingRemarkValue && !shippingRemarkValue.match(remarkPattern)) {
      shippingRemarkValue = '';
    }
    this.checkoutDetailModel.notes = shippingRemarkValue;
    if (this.showShipping && this.showPrepay)
      this.checkoutDetailModel.carrier = this.carrierCode.trim();
    if (this.cartType != 'HYBRID')
      this.checkoutDetailModel.requestedHdrDeliveryDate = this.shippingDate
        ? this.shippingDate
        : '';
    this.checkoutDetailModel.deliveryOptions = this.deliveryOption
      ? this.deliveryOption.trim()
      : '';
    this.checkoutDetailModel.deliveryAccount = this.collect
      ? this.collect.trim()
      : '';
    this.checkoutDetailModel.shipDeliveryPointOT = this.deliveryPoint
      ? this.deliveryPoint.trim()
      : '';
    this.setModelData.emit(this.checkoutDetailModel);
    if (this.cartType == 'HYBRID') this.sendReqDateForHybrid();
  }

  sendReqDateForHybrid() {
    this.setReqDate.emit({
      nonFilmDt: this.hybridShippingDate,
      filmDt: this.shippingDate,
    });
  }

  onChange(e, field) {
    if (field === 'ShipName') {
      this.error.ShipName = '';
      const ShipName = e.target as HTMLInputElement;
      this.ShipName = ShipName.value;
      this.ShipName = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.ShipName),
        REGULAR_PATTERN.alphaNumeric
      );
    }
    if (field === 'shipContact') {
      this.error.shipContact = '';
      this.shipContact = e.target.value;
      const pattern = REGULAR_PATTERN.phoneNumberRegex;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.shipContact = this.getTranslatedText(
          'errors.contactNoInvalid'
        );
      } else {
        this.error.shipContact = '';
      }
    }
    if (field === 'shipNotimail') {
      this.error.shipNotimail = '';
      this.shipNotimail = e.target.value;
      var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.shipNotimail = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.shipNotimail = '';
      }
    }
    if (field === 'deliveryPoint') {
      const deliveryPoint = e.target as HTMLInputElement;
      this.deliveryPoint = deliveryPoint.value;
      this.deliveryPoint = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.deliveryPoint),
        REGULAR_PATTERN.alphaNumeric
      );
    }
    if (field === 'collectText') {
      this.error.shipAccountNo = '';
      this.collect = e.target.value;
      const pattern = /^([a-zA-Z0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.shipAccountNo = this.getTranslatedText('errors.validAcNo');
      } else {
        this.error.shipAccountNo = '';
      }
    }
  }

  openAddress() {
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.ADDRESS_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.addressModelService.setAddAddressFlag('shipping');
    this.isSubmitted = false;
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.chkService.setValidation(false);
    this.$subscriptionforSubmit.unsubscribe();
    this.addressModelService.setAddAddressFlag(null);
  }
}
