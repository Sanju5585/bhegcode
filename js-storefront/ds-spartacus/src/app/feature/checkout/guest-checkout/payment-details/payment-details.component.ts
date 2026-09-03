import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';
import {
  FileProgressLayouts,
  FileSizes,
} from '../../../../shared/models/fileSize.model';

@Component({
  standalone: false,
  selector: 'ds-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {
  poNumber: string = '';
  isformValid: boolean;
  @Input()
  checkoutCartId: string;
  error = {
    poNumber: '',
  };
  @Input() paymentTerms;

  upload_url: string;
  readonly layouts = FileProgressLayouts;
  delete_url: string;
  readonly ALLOWED_EXTENSIONS = ['pdf', 'jpg'];
  @Output() paymentDetailsEvent = new EventEmitter<any>();
  paymentType: string = 'ACCOUNT';
  files = [];

  constructor(
    private guestBuyCheckout: GuestBuyCheckoutService,
    private translate: TranslationService
  ) {}
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  ngOnInit(): void {
    this.guestBuyCheckout.currentMessage.subscribe((message) => {
      if (message === 'valid') {
        this.onSubmit();
      }
    });

    this.upload_url =
      'users/anonymous/dscheckout/' +
      this.checkoutCartId +
      '/uploadPOAttachment';
    this.delete_url =
      'users/anonymous/dscheckout/' + this.checkoutCartId + '/removePOAttach';
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onSubmit() {
    this.isformValid = true;
    if (this.poNumber === '') {
      this.error.poNumber = this.getTranslatedText('errors.poNumber');
      this.isformValid = false;
    }
    if (this.isformValid) {
      this.guestBuyCheckout.setpaymentValidation('valid');
      let paymentDetails = {
        paymentType: this.paymentType,
        purchaseOrderNumber: this.poNumber,
      };
      this.paymentDetailsEvent.emit(paymentDetails);
    }
  }
  onChange(e, field) {
    if (field === 'poNumber') {
      this.error.poNumber = '';
      this.poNumber = e.target.value;
      const poRegx = '^[a-zA-Z0-9- ]+$';
      if (e.target.value && !e.target.value.match(poRegx)) {
        this.error.poNumber = this.getTranslatedText('errors.PoNumberInvalid');
      } else {
        this.error.poNumber = '';
      }
    }
    if (field === 'payment-type') {
      this.paymentType = e.target.value;
    }
  }
  getFileSize(fileSize) {
    if (Math.round((fileSize / 1024) * 1000) / 1000 >= 1024.0) {
      return (Math.round(fileSize / 1024) / 1024).toFixed(2) + FileSizes.KB;
    }
    if (Math.round((fileSize / 1024) * 1000) / 1000 < 1024.0) {
      return (
        (Math.round((fileSize / 1024) * 1000) / 1000).toFixed() + FileSizes.KB
      );
    }
  }
  selectedFiles(event) {
    this.files = event;
  }
  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }
}
