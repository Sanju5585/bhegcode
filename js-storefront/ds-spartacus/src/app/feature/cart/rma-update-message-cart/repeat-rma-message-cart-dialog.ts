import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  ActiveCartFacade,
  Cart,
  OrderEntry,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'cx-repeat-rma-message-cart-dialog',
  templateUrl: './repeat-rma-message-cart-dialog.html',
  styleUrls: ['./repeat-rma-message-cart-dialog.scss'],
})
export class RepeatRMAUpdateMessageComponent implements OnInit {
  iconTypes = ICON_TYPE;

  entry$: Observable<OrderEntry>;
  cart$: Observable<Cart>;
  loaded$: Observable<boolean>;
  increment: boolean;
  orderPromotions$: Observable<PromotionResult[]>;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  selectedSalesAreaId: any = '';

  quantity = 0;
  modalIsOpen = false;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;

  form: FormGroup = new FormGroup({});

  private quantityControl$: Observable<FormControl>;

  constructor(
    protected launchDialogService: LaunchDialogService,
    protected cartService: ActiveCartFacade,// protected promotionService: PromotionService
    public dialogRef: MatDialogRef<RepeatRMAUpdateMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  /**
   * Returns an observable formControl with the quantity of the cartEntry,
   * but also updates the entry in case of a changed value.
   * The quantity can be set to zero in order to remove the entry.
   */
  getQuantityControl(): Observable<FormControl> {
    if (!this.quantityControl$) {
      this.quantityControl$ = this.entry$.pipe(
        filter((e) => !!e),
        map((entry) => this.getFormControl(entry)),
        switchMap(() =>
          this.form.valueChanges.pipe(
            // tslint:disable-next-line:deprecation
            startWith(null),
            tap((valueChange) => {
              if (valueChange) {
                this.cartService.updateEntry(
                  valueChange.entryNumber,
                  valueChange.quantity
                );
                if (valueChange.quantity === 0) {
                  this.dismissModal('Removed');
                }
              } else {
                this.form.markAsPristine();
              }
            })
          )
        ),
        map(() => <FormControl>this.form.get('quantity'))
      );
    }
    return this.quantityControl$;
  }

  ngOnInit() {
    // this.orderPromotions$ = this.promotionService.getOrderPromotions(
    //   this.promotionLocation
    // );
  }

  private getFormControl(entry: OrderEntry): FormControl {
    if (!this.form.get('quantity')) {
      const quantity = new FormControl(entry.quantity, { updateOn: 'blur' });
      this.form.addControl('quantity', quantity);

      const entryNumber = new FormControl(entry.entryNumber);
      this.form.addControl('entryNumber', entryNumber);
    }
    return <FormControl>this.form.get('quantity');
  }

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
  closeModal(reason: any): void {
  this.dialogRef.close(reason);
  }
}
