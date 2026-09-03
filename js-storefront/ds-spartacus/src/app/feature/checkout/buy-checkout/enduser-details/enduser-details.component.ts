import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { GuestBuyCheckoutService } from '../../guest-checkout/services/guest-buy-checkout.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';

@Component({
  standalone: false,
  selector: 'app-enduser-details',
  templateUrl: './enduser-details.component.html',
  styleUrls: ['./enduser-details.component.scss'],
})
export class EnduserDetailsComponent implements OnInit {
  @Output() checkEnduserAddress: EventEmitter<any> = new EventEmitter();
  @Input() endUserAddress;
  @Input() cartType;
  @Input() customerAccount;
  $enduserSubscription: Subscription;
  loading: boolean = false;
  errorMsg: string = '';
  $subscription: Subscription;
  checkoutMessages: any;
  endUserFlag: boolean = false;
  constructor(
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private checkoutService: GuestBuyCheckoutService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.getSelectedAddress();
    this.checkForPlaceOrder();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  checkForPlaceOrder() {
    this.$subscription = this.checkoutService
      .getValidation()
      .subscribe((value) => {
        if (value && !this.endUserAddress) {
          this.errorMsg = this.getTranslatedText('errors.endUserAddress');
          // window.scrollTo({ top: 2200, behavior: 'smooth' });
          this.checkEnduserAddress.emit(false);
          return;
        } else if (this.endUserAddress) {
          this.checkEnduserAddress.emit(true);
        } else if (value && this.endUserAddress) {
          this.checkEnduserAddress.emit(true);
        } else if (this.endUserAddress) {
          this.checkEnduserAddress.emit(true);
        } else {
          this.errorMsg = '';
        }
      });
  }

  getSelectedAddress() {
    this.$enduserSubscription = this.addressModelService
      .getAddress()
      .subscribe((value) => {
        if (value) {
          this.setEnduserAddress(value);
        }
      });
  }

  setEnduserAddress(data) {
    if (data.flag == 'enduser') {
      this.endUserAddress = data.res;
      this.checkEnduserAddress.emit(true);
      if (this.endUserAddress) this.errorMsg = '';
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
  ngOnChanges() {
    if (
      this.endUserAddress &&
      (this.cartType == 'HYBRID' || this.cartType == 'FILM')
    )
      this.endUserFlag = true;
    else this.endUserFlag = false;
  }
  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.addressModelService.setAddAddressFlag(null);
    this.addressModelService.setAddress(null);
    this.$enduserSubscription.unsubscribe();
  }
}
