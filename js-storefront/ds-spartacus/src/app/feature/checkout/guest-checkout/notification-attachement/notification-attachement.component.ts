import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';
import { TranslationService } from '@spartacus/core';
import {
  FileProgressLayouts,
  FileSizes,
} from '../../../../shared/models/fileSize.model';

@Component({
  standalone: false,
  selector: 'ds-notification-attachement',
  templateUrl: './notification-attachement.component.html',
  styleUrls: ['./notification-attachement.component.scss'],
})
export class NotificationAttachementComponent implements OnInit {
  isformValid: boolean;
  @Input()
  checkoutCartId: string;
  upload_url: string;
  delete_url: string;
  files = [];
  readonly layouts = FileProgressLayouts;
  readonly ALLOWED_EXTENSIONS = ['pdf', 'jpg'];
  @Output() NotificationDetailsEvent = new EventEmitter<any>();
  @Output() notiValEvent = new EventEmitter<any>();
  notificationDetails: any = {};
  invoiceMail: string = '';
  orderAck: string = '';
  error = {
    invoiceMail: '',
    orderAck: '',
  };
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };

  constructor(
    private guestBuyCheckout: GuestBuyCheckoutService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.guestBuyCheckout.currentMessage.subscribe((message) => {
      if (message === 'valid') {
        this.onSubmit();
      }
    });
    this.upload_url =
      'users/anonymous/dscheckout/' +
      this.checkoutCartId +
      '/false/uploadOrderAttachment';
    this.delete_url =
      'users/anonymous/dscheckout/' +
      this.checkoutCartId +
      '/false/removeOrderAttach';
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
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
  onSubmit() {
    this.isformValid = true;

    if (this.invoiceMail === '') {
      this.error.invoiceMail = this.getTranslatedText('errors.invoiceMail');
      this.isformValid = true;
    }
    if (this.orderAck === '') {
      this.error.orderAck = this.getTranslatedText('errors.orderAck');
      this.isformValid = true;
    }
    if (this.error.orderAck != '') {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
      this.notiValEvent.emit(false);
      return;
    } else {
      this.notiValEvent.emit(true);
    }

    if (this.error.invoiceMail != '') {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
      this.notiValEvent.emit(false);
      return;
    } else {
      this.notiValEvent.emit(true);
    }

    if (this.isformValid) {
      this.guestBuyCheckout.setNotificationValidation('valid');
      this.notificationDetails = {
        invoiceMail: this.invoiceMail.toLowerCase(),
        orderAck: this.orderAck.toLowerCase(),
      };

      this.NotificationDetailsEvent.emit(this.notificationDetails);
    }
  }
  onChange(e, field) {
    const emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
    if (field === 'invoiceMail') {
      this.error.invoiceMail = '';
      this.invoiceMail = e.target.value;
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.invoiceMail = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.invoiceMail = '';
      }
    }
    if (field === 'orderAck') {
      this.error.orderAck = '';
      this.orderAck = e.target.value;
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.orderAck = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.orderAck = '';
      }
    }
  }
}
