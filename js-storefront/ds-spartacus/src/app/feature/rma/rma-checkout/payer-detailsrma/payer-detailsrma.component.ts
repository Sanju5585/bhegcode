import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import moment from 'moment';
import { TranslationService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { BuyCheckoutService } from '../../../checkout/buy-checkout/service/buy-checkout.service';
import { CheckoutDetailModel } from '../../../checkout/guest-checkout/guest-buy.model';
import { GuestBuyCheckoutService } from '../../../checkout/guest-checkout/services/guest-buy-checkout.service';
@Component({
  standalone: false,
  selector: 'app-payer-detailsrma',
  templateUrl: './payer-detailsrma.component.html',
  styleUrls: ['./payer-detailsrma.component.scss'],
})
export class PayerDetailsrmaComponent implements OnInit {
  @Output() setShippinglData: EventEmitter<any> = new EventEmitter();
  @Input() rmaPayerAddress;
  @Input() rmaCollectList;
  @Input() rmaPrePayAddList;
  @Input() inkoTerm;
  @Input() rmaData;
  checkoutDetailModel: CheckoutDetailModel;
  INCOTERMS_LIST = ['CPT', 'DAP', 'CIP', 'DDP'];
  showShipping: boolean = true;
  selectedAddress: any = [];
  minDate = new Date();
  props: any;
  ShipName: any = '';
  shipContact: any = '';
  shipNotimail: any = '';
  carrier: any = '';
  payeredAddress: string = '';
  incoTermUrl = environment.incoTermsUrl;

  error = {
    ShipName: '',
    shipContact: '',
    shipNotimail: '',
    shipCarrierMsg: '',
    alternateContact: '',
    alternateEmail: '',
    shipAccountNo: '',
    payeredAddress: '',
  };
  ShipAlternateName: string = '';
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
  isDisabledAddAddress: boolean = true;
  deliveryOption = 'collect';
  userAddressList$: Observable<any>;
  userAddressList: any;
  isChangeBtnDisabled: boolean = true;
  currentCartSubscription: Subscription;
  cartId: any;
  constructor(
    private chkService: GuestBuyCheckoutService,
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private buyCheckoutService: BuyCheckoutService,
    private translate: TranslationService,
    private activeCartFacade: ActiveCartFacade
  ) {
    this.checkoutDetailModel = new CheckoutDetailModel();
    this.minDate.setDate(this.minDate.getDate() + 5);
  }

  ngOnInit(): void {
    this.currentCartSubscription = this.activeCartFacade
      .getActiveCartId()
      .subscribe((cartId) => {
        this.cartId = cartId;
        this.getUserAddressList();
      });
    this.defaultDrpDwn();
    this.chkService.getValidation().subscribe((payer) => {
      if (payer) {
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
    if (event.target.value == 'collect') {
      this.deliveryOption = 'collect';
      this.showCarrierText = true;
      drpDwnArr = this.rmaCollectList.map((val) => {
        return { label: val.name, value: val.code };
      });
      this.populateDrpDwn(drpDwnArr);
    }
    if (event.target.value == 'prepayadd') {
      this.deliveryOption = 'prepay';
      this.rmaCollect = '';
      this.showCarrierText = false;
      drpDwnArr = this.rmaPrePayAddList.map((val) => {
        return { label: val.name, value: val.code };
      });
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
      if (this.rmaCollect === '') {
        this.error.shipAccountNo = this.getTranslatedText(
          'errors.shippingAccountNumber'
        );
      }
    }
    if (!this.rmaPayerAddress) {
      this.payeredAddress = this.getTranslatedText('errors.payerAddress');
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
    if (!this.carrier && this.showShipping) {
      this.error.shipCarrierMsg = this.getTranslatedText('errors.shipCarrier');
      window.scrollTo({ top: 800, behavior: 'smooth' });
    } else {
      this.error.shipCarrierMsg = '';
    }

    if (this.showShipping) {
      if (
        this.ShipName &&
        this.shipContact &&
        this.shipNotimail &&
        this.carrier &&
        this.rmaPayerAddress
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
        this.rmaPayerAddress
      ) {
        this.commonData();
      } else {
        this.checkoutDetailModel = undefined;
        this.setShippinglData.emit(this.checkoutDetailModel);
      }
    }
  }
  getUserAddressList() {
    this.userAddressList$ = this.addressModelService.getPayerAddressList(
      this.cartId
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      if (res.addresses.length <= 1) {
        this.isChangeBtnDisabled = true;
      } else {
        this.isChangeBtnDisabled = false;
      }
    });
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
    this.checkoutDetailModel.deliveryOptions = this.deliveryOption;
    this.checkoutDetailModel.deliveryAccount = this.rmaCollect
      ? this.rmaCollect.trim()
      : '';
    this.setShippinglData.emit(this.checkoutDetailModel);
  }

  onChange(e, field) {
    if (field === 'ShipName') {
      this.error.ShipName = '';
      this.ShipName = e.target.value;
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
      this.ShipAlternateName = e.target.value;
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
      this.deliveryPoint = e.target.value;
    }
    if (field === 'rmaCollectText') {
      this.error.shipAccountNo = '';
      this.rmaCollect = e.target.value;
      const pattern = /^([a-zA-Z0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.shipAccountNo = this.getTranslatedText('errors.validAcNo');
      } else {
        this.error.shipAccountNo = '';
      }
    }
  }

  onDateChange(e) {
    this.shippingDate = moment(e).format('DD-MM-YYYY');
  }

  getSelectedAddress() {
    this.addressModelService.getAddress().subscribe((value) => {
      if (value) {
        this.setPayerAddress(value);
      }
    });
  }

  setPayerAddress(data) {
    if (data.flag == 'payer') {
      this.rmaPayerAddress = data.res;
      if (this.rmaPayerAddress) this.payeredAddress = '';
      this.launchDialogService.closeDialog(undefined);
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
    this.addressModelService.setAddAddressFlag('payer');
    this.isSubmitted = false;
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
    this.addressModelService.setAddAddressFlag(null);
  }
}
