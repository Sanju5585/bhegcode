import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import { TranslationService } from '@spartacus/core';

@Component({
  standalone: false,
  selector: 'ds-checkout-fileupload',
  templateUrl: './checkout-fileupload.component.html',
  styleUrls: ['./checkout-fileupload.component.scss'],
})
export class CheckoutFileuploadComponent implements OnInit {
  @Output() setAttachment: EventEmitter<any> = new EventEmitter();
  @Input() dynamicId;
  @Input() fileCheck;
  @Input() locationList;
  @Input() cartTotal;
  readonly ALLOWED_EXTENSIONS = ['pdf', 'jpg'];
  readonly layouts = FileProgressLayouts;
  cartId;
  uploadUrl;
  deletUrl;
  files = [];
  fileCheckArr = [];
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  attachment;

  constructor(
    private activeCartFacade: ActiveCartFacade,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (this.cartId) {
        this.uploadUrl =
          'users/current/dscheckout/' + this.cartId + '/uploadPOAttachment';
        this.deletUrl =
          'users/current/dscheckout/' + this.cartId + '/removePOAttach';
      }
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  selectedPoFiles(file, index) {
    let i = index.charAt(index.length - 1);
    // let j=index.slice(-1);
    if (index == 'poUpload0') {
      this.uploadParams = {
        entryNumber: 1,
        fields: 'DEFAULT',
        returnLocation: this.locationList[i].returnLocationId.toString(),
      };
    } else if (index == 'poUpload1') {
      this.uploadParams = {
        entryNumber: 1,
        fields: 'DEFAULT',
        returnLocation: this.locationList[i].returnLocationId.toString(),
      };
    } else {
      this.uploadParams = {
        entryNumber: 1,
        fields: 'DEFAULT',
        returnLocation: 'DEFAULT',
      };
    }

    this.files = file;
    this.fileCheckArr.push(this.files);
    this.setAttachment.emit(this.files);
    // if (this.dynamicId == 'poUpload0')
    //   this.setAttachment.emit(this.fileCheckArr);
    // if (this.dynamicId == 'poUpload1')
    //   this.setAttachment.emit(this.fileCheckArr);
    this.attachment = '';
  }

  deletedFiles(event, index) {
    let i = index.charAt(index.length - 1);
    // let j=index.slice(-1);
    if (index == 'poUpload0') {
      this.deleteParams = {
        returnLocation: this.locationList[i].returnLocationId.toString(),
      };
    } else if (index == 'poUpload1') {
      this.deleteParams = {
        returnLocation: this.locationList[i].returnLocationId.toString(),
      };
    } else {
      this.deleteParams = {
        returnLocation: 'DEFAULT',
      };
    }
    this.deletUrl =
      'users/current/dscheckout/' + this.cartId + '/removePOAttach';
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
      this.attachment = '';
    }
  }

  ngDoCheck() {
    if (this.fileCheck) {
      if (this.files.length == 0 && this.cartTotal > 0)
        this.attachment = this.getTranslatedText('labels.pleaseSelectAttachment');
      else this.attachment = '';
    }
  }
}
