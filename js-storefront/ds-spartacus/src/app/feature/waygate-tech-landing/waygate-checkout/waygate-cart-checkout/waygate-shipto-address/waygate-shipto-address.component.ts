import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { LaunchDialogService } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { TranslationService } from '@spartacus/core';
import { take } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../../shared/components/address-model/address-model.service';
import { CalenderConfigService } from '../../../../../shared/services/calender-config.service';
import { GuestBuyCheckoutService } from '../../../../checkout/guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-waygate-shipto-address',
  templateUrl: './waygate-shipto-address.component.html',
  styleUrls: ['./waygate-shipto-address.component.scss'],
})
export class WaygateShiptoAddressComponent {
  @Input() customerAccount;
  @Input() shippingAddress;
  @Output() checkShippingAddressVal: EventEmitter<any> = new EventEmitter();
  @Output() shippingAddressUpdated: EventEmitter<any> = new EventEmitter();
  minDate = new Date();
  min1Date = new Date();
  showShipping: boolean = true;
  INCOTERMS_LIST = ['CPT', 'DAP', 'CIP', 'DDP'];
  props: any;
  drpDwnArr = [];
  shippingRemark: string;
  shippingDate: any;
  deliveryPoint: any;
  // checkoutDetailModel: CheckoutDetailModel;
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
    private calenderConfigService: CalenderConfigService
  ) {
    // this.checkoutDetailModel = new CheckoutDetailModel();
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
  isDisabledAddAddressBuyCheckoutDetails: boolean = true;
  deliveryOption = 'collect';
  hybridShippingDate;
  ngOnInit(): void {
    this.$subscriptionforSubmit = this.chkService
      .getValidation()
      .subscribe((shipping) => {
        if (shipping) {
          // this.onSubmit();
        }
      });
    // this.defaultDrpDwn();
    this.getSelectedAddress();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  getCarrier(event) {
    this.carrier = event.detail.label;
    this.carrierCode = event.detail.value;
    if (this.carrier) this.error.shipCarrier = '';
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
      this.shippingAddress = data.res;
      if (this.shippingAddress) this.error.shipAddress = '';
      this.launchDialogService.closeDialog(undefined);
      this.shippingAddressUpdated.emit(this.shippingAddress);
    }
  }

  openAddress() {
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_ADDRESS_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {});
    }
    this.addressModelService.setAddAddressFlag('shipping');
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.chkService.setValidation(false);
    this.$subscriptionforSubmit.unsubscribe();
    this.addressModelService.setAddAddressFlag(null);
  }
}
