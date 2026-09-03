import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationService } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { CheckoutDetailModel } from '../../../checkout/buy-checkout/buy-checkout.model';
import { environment } from '../../../../../environments/environment';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { BuyCheckoutService } from '../../../checkout/buy-checkout/service/buy-checkout.service';
import { GuestBuyCheckoutService } from '../../../checkout/guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-shipping-detailsrma',
  templateUrl: './shipping-detailsrma.component.html',
  styleUrls: ['./shipping-detailsrma.component.scss'],
})
export class ShippingDetailsrmaComponent implements OnInit {
  @Output() setShippinglData: EventEmitter<any> = new EventEmitter();
  @Output() checkRMAShippingAddressVal: EventEmitter<any> = new EventEmitter();
  @Input() rmaShippingAddress;
  @Input() rmaCollectList;
  @Input() rmaPrePayAddList;
  @Input() inkoTerm;
  @Input() rmaData;
  @Input() deliveryOption;

  checkoutDetailModel: CheckoutDetailModel;
  INCOTERMS_LIST = ['CPT', 'DAP', 'CIP', 'DDP'];
  showShipping: boolean = true;
  selectedAddress: any = [];
  minDate = new Date();
  props: any;
  ShipName: any = '';
  shipAccountNo: any = '';
  shipContact: any = '';
  shipNotimail: any = '';
  carrier: any = '';
  shipAddress: string = '';
  shippingValue: any;
  deliveryValue: any = '';
  incoTermUrl = environment.incoTermsUrl;

  error = {
    ShipName: '',
    shipContact: '',
    shipNotimail: '',
    shipCarrierMsg: '',
    alternateContact: '',
    alternateEmail: '',
    shipAccountNo: '',
    remarksMsg: '',
    deliveryPointMsg:'',
  };
  ShipAlternateName: any = '';
  shipAlternateContact: string = '';
  shipAlternatMail: string = '';
  shippingRemark: string = '';
  shippingDate: any;
  deliveryPoint: string = '';
  loadingFlag: boolean = true;
  carrierCode;
  rmaCollect: any = '';
  showCarrierText: boolean = true;
  isSubmitted: boolean = false;
  constructor(
    private chkService: GuestBuyCheckoutService,
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private buyCheckoutService: BuyCheckoutService,
    private translate: TranslationService,
    public sanitizer: DomSanitizer
  ) {
    this.checkoutDetailModel = new CheckoutDetailModel();
    this.minDate.setDate(this.minDate.getDate() + 5);
  }

  ngOnInit(): void {
    this.defaultDrpDwn();
    this.chkService.getValidation().subscribe((shipping) => {
      if (shipping) {
        this.onSubmit();
      }
    });

    this.getSelectedAddress();
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  ngOnChanges() {
    this.defaultDrpDwn();

    if (this.rmaData?.cartData) {
      this.showCarrierText =
        this.rmaData?.cartData.deliveryOptions == 'COLLECT' ? true : false;
      this.rmaCollect = this.rmaData?.cartData?.deliveryAccount;
      this.carrierCode = this.rmaData?.cartData?.deliveryCarrier;
      if (
        this.rmaData?.cartData?.deliveryOptions == 'COLLECT' &&
        this.carrierCode
      )
        this.carrier = this.rmaCollectList.filter(
          (name) => name.code == this.carrierCode
        )[0].name;
      if (
        this.rmaData?.cartData?.deliveryOptions == 'Prepay & Add' &&
        this.carrierCode
      )
        this.carrier = this.rmaPrePayAddList.filter(
          (name) => name.code == this.carrierCode
        )[0].name;
      this.ShipName = this.rmaData?.cartData?.shipToContactName;
      this.shipContact = this.rmaData?.cartData?.shipToContactPhone;
      this.shipNotimail = this.rmaData?.cartData?.shipNotificationEmail;
    }
    this.shippingMethodeShowNHide(this.rmaData);
  }

  shippingMethodeShowNHide(data) {
    this.INCOTERMS_LIST.forEach((element) => {
      if (element == data?.defaultSoldTo?.incoterms1) this.showShipping = false;
    });

    if (
      data?.cartData?.cartType == 'FILM' ||
      data?.cartData?.cartType == 'HYBRID'
    ) {
      this.showShipping = false;
    }
  }

  defaultDrpDwn() {
    let drpDwnArr = [];
    drpDwnArr = this.rmaCollectList.map((val) => {
      return { label: val.name, value: val.code };
    });

    this.populateDrpDwn(drpDwnArr);
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
    if (this.carrier) this.error.shipCarrierMsg = '';
  }

  handleChange(event) {
    let drpDwnArr = [];
    this.props = {};
    if (event.target.value == 'COLLECT') {
      this.deliveryOption = 'COLLECT';
      this.rmaCollect = this.rmaData?.cartData?.deliveryAccount;
      this.showCarrierText = true;
      drpDwnArr = this.rmaCollectList.map((val) => {
        return { label: val.name, value: val.code };
      });
      if (this.rmaData?.cartData?.deliveryOptions == 'COLLECT') {
        let selected = drpDwnArr.find((obj) => {
          return obj.value == this.rmaData?.cartData?.deliveryCarrier;
        });
        this.carrier = selected.label;
        this.carrierCode = selected.value;
        if (this.carrier) this.error.shipCarrierMsg = '';
      } else {
        this.carrier = drpDwnArr[0].label;
        this.carrierCode = drpDwnArr[0].value;
      }
      this.populateDrpDwn(drpDwnArr);
    }
    if (event.target.value == 'Prepay & Add') {
      this.deliveryOption = 'Prepay & Add';
      this.rmaCollect = '';
      this.showCarrierText = false;
      drpDwnArr = this.rmaPrePayAddList.map((val) => {
        return { label: val.name, value: val.code };
      });
      if (this.rmaData?.cartData?.deliveryOptions == 'Prepay & Add') {
        let selected = drpDwnArr.find((obj) => {
          return obj.value == this.rmaData?.cartData?.deliveryCarrier;
        });
        this.carrier = selected.label;
        this.carrierCode = selected.value;
        if (this.carrier) this.error.shipCarrierMsg = '';
      } else {
        this.carrier = drpDwnArr[0].label;
        this.carrierCode = drpDwnArr[0].value;
      }
      this.populateDrpDwn(drpDwnArr);
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.ShipName === '' || this.ShipName === undefined) {
      this.error.ShipName = this.getTranslatedText('errors.shipContactName');
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    }
    if (this.shipContact === '' || this.shipContact === undefined) {
      this.error.shipContact = this.getTranslatedText('errors.shipContactNo');
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    }
    if (this.shipNotimail === '' || this.shipNotimail === undefined) {
      this.error.shipNotimail = this.getTranslatedText(
        'errors.shipNotificationEmail'
      );
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.showCarrierText) {
      if (this.rmaCollect === '' || this.rmaCollect === undefined) {
        this.error.shipAccountNo = this.getTranslatedText(
          'errors.shippingAccountNumber'
        );
      }
    }
    if (!this.rmaShippingAddress) {
      this.shipAddress = this.getTranslatedText('errors.shippingAddress');
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
    if (!this.carrier && this.showShipping) {
      this.error.shipCarrierMsg = this.getTranslatedText('errors.shipCarrier');
      window.scrollTo({ top: 800, behavior: 'smooth' });
    } else {
      this.error.shipCarrierMsg = '';
    }

    if (this.error.shipContact != '') {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
      this.checkRMAShippingAddressVal.emit(false);
      return;
    } else {
      this.checkRMAShippingAddressVal.emit(true);
    }

     if (this.deliveryValue) {
      this.error.deliveryPointMsg = this.getTranslatedText('errors.remarksMsg');
      this.checkRMAShippingAddressVal.emit(false);
      return;
    } else {
      this.error.deliveryPointMsg = '';
      this.checkRMAShippingAddressVal.emit(true);
      
    }

    if (this.shippingValue) {
      this.error.remarksMsg = this.getTranslatedText('errors.remarksMsg');
      this.checkRMAShippingAddressVal.emit(false);
      return;
    } else {
      this.error.remarksMsg = '';
      this.checkRMAShippingAddressVal.emit(true);
    }

    if (this.error.shipNotimail != '') {
      window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkRMAShippingAddressVal.emit(false);
      return;
    } else {
      this.checkRMAShippingAddressVal.emit(true);
    }

    if (this.showShipping) {
      if (
        this.ShipName &&
        this.shipContact &&
        this.shipNotimail &&
        this.carrier &&
        this.rmaShippingAddress
      ) {
        this.commonData();
      } else {
        this.checkoutDetailModel = undefined;
        this.setShippinglData.emit(this.checkoutDetailModel);
      }
    }
    if (!this.showShipping) {
      if (
        this.ShipName &&
        this.shipContact &&
        this.shipNotimail &&
        this.rmaShippingAddress
      ) {
        this.commonData();
      } else {
        this.checkoutDetailModel = undefined;
        this.setShippinglData.emit(this.checkoutDetailModel);
      }
    }
  }

  commonData() {
    this.checkoutDetailModel = new CheckoutDetailModel();
    this.checkoutDetailModel.shipToContactName = this.ShipName?.trim();
    this.checkoutDetailModel.shipToContactPhone = this.shipContact?.trim();
    this.checkoutDetailModel.shipNotificationEmail = this.shipNotimail
      ?.trim()
      .toLowerCase();
    this.checkoutDetailModel.alternateContactName =
      this.ShipAlternateName?.trim();
    this.checkoutDetailModel.alternateContactNumber =
      this.shipAlternateContact?.trim();
    this.checkoutDetailModel.alternateContactEmail = this.shipAlternatMail
      ?.trim()
      .toLowerCase();
    this.checkoutDetailModel.notes = this.shippingRemark
      ? this.shippingRemark.trim()
      : '';
    if (this.showShipping)
      this.checkoutDetailModel.carrier = this.carrierCode.trim();
    this.checkoutDetailModel.requestedHdrDeliveryDate = this.shippingDate
      ? this.shippingDate
      : '';
    this.checkoutDetailModel.shipDeliveryPointOT = this.deliveryPoint
      ? this.deliveryPoint.trim()
      : '';
    this.checkoutDetailModel.deliveryOptions =
      this.deliveryOption == 'COLLECT' ? 'COLLECT' : 'PREPAY';
    this.checkoutDetailModel.deliveryAccount = this.rmaCollect
      ? this.rmaCollect.trim()
      : '';
    this.setShippinglData.emit(this.checkoutDetailModel);
  }

  onChange(e, field) {
    if (field === 'ShipName') {
      this.error.ShipName = '';
      this.ShipName = e.target.value;
      const shipPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
      if (e.target.value && !e.target.value.match(shipPattern)) {
        this.error.ShipName = this.getTranslatedText('errors.shipContactName');
      } else this.error.ShipName = '';
    }
    if (field === 'shipContact') {
      this.error.shipContact = '';
      this.shipContact = e.target.value;
      const pattern = /^([0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.shipContact = this.getTranslatedText('errors.validContact');
      } else this.error.shipContact = '';
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
    if (field === 'alternateName') {
      this.ShipAlternateName = '';
      this.ShipAlternateName = e.target.value;
      const altPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
      if (e.target.value && !e.target.value.match(altPattern)) {
        this.ShipAlternateName = '';
      } else this.ShipAlternateName = '';
    }
    if (field === 'alternateContact') {
      this.shipAlternateContact = e.target.value;
      const pattern = /^([0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.alternateContact = this.getTranslatedText(
          'errors.validContact'
        );
      } else this.error.alternateContact = '';
    }
    if (field === 'shipAlternateMail') {
      this.shipAlternatMail = e.target.value;
      var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.alternateEmail = this.getTranslatedText(
          'errors.emailInvalid'
        );
      } else {
        this.error.alternateEmail = '';
      }
    }
    if (field === 'deliveryPoint') {
       this.error.deliveryPointMsg = '';
      this.deliveryPoint = e.target.value;
      const deliveryPattern = /^[\u4e00-\u9fa5\wÁ-ÿa-zA-Z0-9.+-/%,;()@ ]+$/;
      if (this.deliveryPoint && !this.deliveryPoint.match(deliveryPattern)) {
        this.deliveryValue = this.deliveryPoint
        this.error.deliveryPointMsg = this.getTranslatedText('errors.remarksMsg');
      } else {
        this.deliveryValue = '';
      }
    }
    if (field === 'rmaCollectText') {
      this.error.shipAccountNo = '';
      this.rmaCollect = e.target.value;
      const pattern = /^([\wÁ-ÿa-zA-Z0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.shipAccountNo = this.getTranslatedText('errors.validAcNo');
      } else {
        this.error.shipAccountNo = '';
      }
    }
    if (field === 'shippingRemark') {
      this.error.remarksMsg = '';
      this.shippingRemark = e.target.value;
      this.validateInput(this.shippingRemark);
      this.checkoutDetailModel.notes = this.shippingRemark;
    }
  }

  onDateChange(e) {
    this.shippingDate = moment(e).format('DD-MM-YYYY');
  }

  getSelectedAddress() {
    this.addressModelService.getAddress().subscribe((value) => {
      if (value) {
        this.setShippingAddress(value);
      }
    });
  }

  setShippingAddress(data) {
    if (data.flag == 'shipping') {
      this.rmaShippingAddress = data.res;
      if (this.rmaShippingAddress) this.shipAddress = '';
      this.launchDialogService.closeDialog(undefined);
    }
  }
  validateInput(shippingRemark: string) {
    const reasonPattern = /^[\w\sÁ-ÿ.+-/%,;() ]+$/m;
    const lines = shippingRemark.split('\n');
    if (lines.length > 0) {
      lines?.forEach((item) => {
        if (item && !item?.match(reasonPattern)) {
          this.shippingValue = this.shippingRemark;
          this.error.remarksMsg = this.getTranslatedText('errors.remarksMsg');
        } else {
          this.shippingValue = '';
        }
      });
    }
  }

  openAddress() {
    const addressModal = this.launchDialogService.openDialog(
      DS_DIALOG.ADDRESS_DIALOG,
      undefined,
      undefined,
      {}
    );
    addressModal.pipe(take(1)).subscribe((value) => {});
    this.addressModelService.setAddAddressFlag('shipping');
    this.isSubmitted = false;
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
    this.addressModelService.setAddAddressFlag(null);
  }
}
