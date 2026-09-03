import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FileProgressLayouts } from '../../../../../shared/models/fileSize.model';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-euc-form',
  standalone: false,
  templateUrl: './upload-euc-form.component.html',
  styleUrl: './upload-euc-form.component.scss',
})
export class UploadEucFormComponent implements OnInit, OnChanges {
  @Input() endUserAddress;
  @Input() soldAddress;
  @Input() isChinaOrder: boolean;
  @Input() isChina: boolean;
  @Input() isApac: boolean;
  @Input() cart$: Observable<any>;

  @Output() eucFormValid: EventEmitter<any> = new EventEmitter(true);
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  showIcon: boolean = true;
  readonly layouts = FileProgressLayouts;
  files = [];
  fileName: string;
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  deletUrl;
  uploadUrl;
  eucUploadError: boolean = false;
  cartData: any;
  cartEndUserAddress = [];
  distinctAddress = [];
  constructor(private activeCartFacade: ActiveCartFacade) {}

  ngOnChanges(changes: SimpleChanges) {
    let isEndSoldSame: boolean;
    const currentEnd =
      changes['endUserAddress'] && changes['endUserAddress'].currentValue;

    if (this.isOrderForChina)
      if (this.files.length === 0)
        if (currentEnd && currentEnd.formattedAddress) {
          isEndSoldSame =
            currentEnd.formattedAddress === this.soldAddress.formattedAddress;
            
          if (isEndSoldSame) {
            this.eucFormValid.emit(true);
            this.eucUploadError = true;
          } else {
            this.eucFormValid.emit(false);
            this.eucUploadError = false;
          }
        } else {
          this.cart$.subscribe((res: any) => {
            this.cartData = res;
          });

          this.cartEndUserAddress = this.cartData?.entries.map(e=> e.enduserAddress?.formattedAddress);

          this.distinctAddress = [...new Set(this.cartEndUserAddress)];
          
          if(this.distinctAddress.length == 1){
            isEndSoldSame = (this.distinctAddress[0] === this.soldAddress.formattedAddress) ? true : false ;
          } else{
            isEndSoldSame = false;
          }          

          if (isEndSoldSame) {
            this.eucFormValid.emit(true);
            this.eucUploadError = true;
          } else {
            this.eucFormValid.emit(false);
            this.eucUploadError = false;
          }
        }
  }

  ngOnInit(): void {
    this.getCartId();
    if (this.isOrderForChina) {
    } else {
      this.eucFormValid.emit(true);
      this.eucUploadError = true;
    }
  }

  getCartId() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      if (cartId) {
        this.uploadUrl =
          'users/current/dscheckout/' + cartId + '/true/uploadOrderAttachment';
        this.deletUrl =
          'users/current/dscheckout/' + cartId + '/true/removeOrderAttach';
      }
    });
  }

  selectedFiles(event) {
    this.files = event;
    this.eucFormValid.emit(true);
    this.eucUploadError = true;
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
    this.eucFormValid.emit(false);
    this.eucUploadError = false;
  }

  get isOrderForChina(): boolean {
    return this.isChinaOrder;
  }
}
