import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  SecurityContext,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TranslationService } from '@spartacus/core';
import { SharedCartService } from '../../../cart/cart-shared/shared-cart.service';
import { Actions, ofType } from '@ngrx/effects';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { map, take } from 'rxjs/operators';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DomSanitizer } from '@angular/platform-browser';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';

export interface Item {
  quantity?: any;
  productType?: string;
  product?: any;
  entryNumber?: any;
  totalPrice?: any;
  quoteCartEntryType?: string;
  estShipData?: any;
  selectedLegalEntity?: any;
  entryNotes?: any;
}
@Component({
  standalone: false,
  selector: 'ds-guest-quote-cart-product',
  templateUrl: './guest-quote-cart-product.component.html',
  styleUrls: ['./guest-quote-cart-product.component.scss'],
})
export class GuestQuoteCartProductComponent implements OnInit {
  @Input() quantityControl: FormControl = new FormControl('', [
    Validators.required,
  ]);
  @Input() item: Item;
  @Input() entryNum = 1;
  isexpandProductDesc = false;
  maxQuantity: number = 9999;
  @Input() expanded: boolean;
  @Input()
  userType: string;

  @Input()
  cart;

  @Input()
  selectAll;

  @Output()
  selectedEntry: EventEmitter<any> = new EventEmitter();

  newItem: Item;

  quantityForm = new FormGroup({
    quantity: new FormControl(1),
  });
  showCheckAvalabilityAction = false;
  showAvailabilityLoader = false;
  selectedLegalEntity: any = {
    code: '0',
    name: 'Select',
  };
  cartId = '';
  cartNumber = 0;

  showCommentsNotSavedErr = false;
  commentsSaved = false;
  commentError = false;
  savingComments = false;
  showCommentsInput = false;
  favMsg: any;
  constructor(
    private sharedCartService: SharedCartService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private translate: TranslationService,
    private cRef: ChangeDetectorRef,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.cartId = this.cart.guid;
    this.quantityForm.controls.quantity.setValue(this.item.quantity);

    this.quantityForm.valueChanges.subscribe((res: any) => {
      this.updateQuantity();
    });
    this.newItem = Object.assign({}, this.item);
    if (this.newItem.entryNotes) {
      this.showCommentsInput = true;
    }
  }

  updateQuantity() {
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      defaultPlant: this.selectedLegalEntity.plant,
    };
    this.sharedCartService
      .checkAvailability(this.cartId, this.newItem.entryNumber, Obj)
      .subscribe(
        (res: any) => {
          if (res) {
            this.multiCartFacade.loadCart({
              cartId: this.cartId,
              userId: this.userType,
              extraData: {
                active: true,
              },
            });
          }
        },
        (error: any) => {
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
        }
      );
  }

  onCommentsInputBlur(event) {
    if (!this.commentsSaved && this.newItem.entryNotes?.length >= 0) {
      this.showCommentsNotSavedErr = true;
    }
  }

  onSaveCommentsMouseDown(event) {
    if (event.which == 1) {
      event.preventDefault();
      this.saveComments();
    }
  }

  saveComments() {
    this.newItem.entryNotes = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.newItem.entryNotes),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    this.newItem.entryNotes = this.newItem.entryNotes
      ?.substring(0, 204)
      ?.replace(/&#34|&#10/g, '');

    //commented due to auto save functionality....
    // if (!this.newItem.entryNotes || this.newItem.entryNotes?.length <= 0) {
    //   this.commentError = true;
    //   return false;
    // } else {
    //   this.commentError = false;
    // }
    this.savingComments = true;
    const Obj = {
      quantity: this.quantityForm.value.quantity,
      entryNotes: this.newItem.entryNotes,
      defaultPlant: this.selectedLegalEntity.plant,
    };
    this.sharedCartService
      .addCartItemComments(this.cartId, this.newItem.entryNumber, Obj)
      .subscribe(
        (res: any) => {
          //  if (res) {
          this.commentsSaved = true;
          this.showCommentsNotSavedErr = false;
          this.savingComments = false;
          this.cRef.detectChanges();
          this.multiCartFacade.loadCart({
            cartId: this.cartId,
            userId: this.userType,
            extraData: {
              active: true,
            },
          });
        },
        (error) => {
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  openDeleteDialog() {
    const componentData = {
      userType: this.userType,
      cartId: this.cartId,
      cart: this.cart,
    };
    const cartDeleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CART_DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (cartDeleteDialog) {
      cartDeleteDialog.pipe(take(1)).subscribe((value) => {
        if (value?.instance?.reason == 'delete' || value == 'delete') {
          this.deleteCartItem();
        }
      });
    }
  }

  deleteCartItem() {
    this.multiCartFacade.removeEntry(
      this.userType,
      this.cartId,
      // this.cartNumber,
      this.item.entryNumber
    );

    this.actions$
      .pipe(
        ofType(CartActions.CART_REMOVE_ENTRY_SUCCESS),
        map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
      )
      .pipe(take(1))
      .subscribe(
        () => {
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe(
              (s) => {
                this.globalMessageService.add(
                  this.getTranslatedText('quote-cart.error.removeMsg'),
                  GlobalMessageType.MSG_TYPE_CONFIRMATION,
                  5000
                );
                window.scrollTo(0, 0);
              },
              (error) => {
                this.globalMessageService.add(
                  error,
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
                window.scrollTo(0, 0);
              }
            );
        },
        (error) => {
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  checkEntry(event: any) {
    event.stopPropagation();
    const checkValue = event.target.checked;
    this.selectedEntry.emit({
      entryNumber: this.item.entryNumber,
      checked: checkValue,
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
