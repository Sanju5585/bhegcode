import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { QuoteCartService } from '../../quote-cart.service';
import moment from 'moment';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { take } from 'rxjs';
import { CartType } from '../../../../../shared/models/cartType.models';

@Component({
  standalone: false,
  selector: 'ds-quote-cart-actions',
  templateUrl: './quote-cart-actions.component.html',
  styleUrl: './quote-cart-actions.component.scss',
})
export class QuoteCartActionsComponent implements OnInit {
  @Output() quoteType: EventEmitter<any> = new EventEmitter();
  @Input() cart;
  @Output() updateCart: EventEmitter<any> = new EventEmitter();
  @Input() userType: string;
  isPartialShipment: boolean = false;
  isShipmentSelectionDisabled: boolean = false;
  minDate: Date = new Date();
  defaultDate;
  newDate: string;

  constructor(
    private quoteCartService: QuoteCartService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private globalMessageService: GlobalMessageService,
    private cRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getMinDate(this.cart);
  }

  handleChange(ev) {
    const quoteTy = ev === 'standard' ? true : false;
    this.quoteType.emit(quoteTy);
  }

  getMinDate(cart) {
    this.minDate =
      cart?.entries.length > 1
        ? new Date(
            this.minDate.setDate(
              new Date().getDate() +
                (cart.cartType === CartType.Typ1
                  ? cart.largestFilmLeadtime
                  : cart.largestNonFilmLeadtime)
            )
          )
        : new Date(this.cart?.entries[0]?.estShipData?.slice(-1)[0]?.shipDate);
  }

  applyToAll() {
    if (this.newDate)
      this.quoteCartService
        .applyToAllShipDate(this.cart.code, this.newDate)
        .subscribe({
          next: (res) => {
            this.multiCartFacade.loadCart({
              cartId: this.cart.code,
              userId: this.userType,
              extraData: {
                active: true,
              },
            });
            this.actions$
              .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
              .pipe(take(1))
              .subscribe({
                next: (r) => {
                  this.updateCart.emit(true);
                  this.cRef.detectChanges();
                },
                error: (error) => {
                  this.globalMessageService.add(
                    error,
                    GlobalMessageType.MSG_TYPE_ERROR,
                    5000
                  );
                  window.scrollTo(0, 0);
                },
              });
          },
        });
  }

  dateChange(ev) {
    this.newDate = moment(ev).format('YYYY-MM-DD');
  }
}
