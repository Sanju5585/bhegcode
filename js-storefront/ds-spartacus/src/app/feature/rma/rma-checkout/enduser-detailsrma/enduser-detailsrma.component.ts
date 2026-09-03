import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { GuestBuyCheckoutService } from '../../../checkout/guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-enduser-detailsrma',
  templateUrl: './enduser-detailsrma.component.html',
  styleUrls: ['./enduser-detailsrma.component.scss'],
})
export class EnduserDetailsrmaComponent implements OnInit {
  @Output() checkEnduserAddress: EventEmitter<any> = new EventEmitter();
  @Output() EnduserType: EventEmitter<any> = new EventEmitter();
  @Input() rmaEndUserAddress;
  @Input() customerAccount;
  @Input() enduserTypeArray;
  errorMsg: string = '';
  $subscription: Subscription;
  $enduserSubscription: Subscription;
  enduserdata: boolean = true;
  endUserCategory: string = '';
  error = {
    endUserCategory: '',
  };
  endUserItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  constructor(
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private checkoutService: GuestBuyCheckoutService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.getSelectedAddress();
    this.checkForPlaceOrder();

    var endusers = [];

    this.enduserTypeArray?.forEach((enduser) => {
      endusers.push({
        label: enduser.value,
        value: enduser.key,
      });
    });
    this.endUserItems = {
      itemGroups: [
        {
          items: endusers,
        },
      ],
    };
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  checkForPlaceOrder() {
    this.$subscription = this.checkoutService
      .getValidation()
      .subscribe((value) => {
        if (value) {
          this.enduserTypeValidation(value);
        }

        if (value && this.rmaEndUserAddress?.length == 0) {
          this.errorMsg = this.getTranslatedText('errors.endUserAddress');
          window.scrollTo({ top: 2500, behavior: 'smooth' });
          this.checkEnduserAddress.emit(false);
          return;
        } else if (value && this.rmaEndUserAddress?.length > 0) {
          this.checkEnduserAddress.emit(true);
        } else {
          this.errorMsg = '';
        }
      });
  }

  getEnduserType(e) {
    this.endUserCategory = e.target.value;
    this.EnduserType.emit({ endUserCategory: this.endUserCategory });
    if (this.endUserCategory) this.error.endUserCategory = '';
  }

  enduserTypeValidation(value) {
    if (
      value &&
      (this.endUserCategory == '' || this.endUserCategory == undefined)
    ) {
      this.error.endUserCategory = this.getTranslatedText('errors.enduserType');
    } else {
      this.error.endUserCategory = '';
    }
  }

  getSelectedAddress() {
    this.$enduserSubscription = this.addressModelService
      .getAddress()
      .subscribe((value) => {
        if (value) {
          this.setEndAddress(value);
        } else {
          this.rmaEndUserAddress = [];
        }
      });
  }

  setEndAddress(data) {
    if (data.flag == 'enduser') {
      this.rmaEndUserAddress = data.res;
      this.checkEnduserAddress.emit(true);
      this.errorMsg = '';
      this.launchDialogService.closeDialog(undefined);
    }
  }

  openAddressModel() {
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.ADDRESS_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.addressModelService.setAddAddressFlag('enduser');
  }

  ngOnDestroy() {
    this.addressModelService.setAddAddressFlag(null);
    this.addressModelService.setAddress(null);
    this.$enduserSubscription.unsubscribe();
  }
}
