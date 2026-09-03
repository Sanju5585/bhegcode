import { Component, Input } from '@angular/core';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { map, Observable, take } from 'rxjs';
import { RmaService } from '../../../../rma/rma-services/rma.service';
import { Actions, ofType } from '@ngrx/effects';
import { GlobalMessageService, GlobalMessageType, OCC_USER_ID_CURRENT, TranslationService } from '@spartacus/core';
import { CartActions } from '@spartacus/cart/base/core';

@Component({
  selector: 'app-returns-cart-delete-dialog',
  standalone: false,
  templateUrl: './returns-cart-delete-dialog.component.html',
  styleUrl: './returns-cart-delete-dialog.component.scss'
})
export class ReturnsCartDeleteDialogComponent {
  @Input()
  cartId: any;

  @Input()
  totalCartItems: any;

  @Input()
  selectedProducts: [] = [];

  @Input()
  selectedItemsCount: any;

  cartLoaded$: Observable<boolean> = this.activeCartFacade.isStable();

  deleteCart = false;
  reason: string;

  constructor(
    private launchDialogService: LaunchDialogService,
    private activeCartFacade: ActiveCartFacade,
    private rmaService: RmaService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.cartId = data?.cartId;
      this.totalCartItems = data?.totalCartItems;
      this.selectedProducts = data?.selectedProducts;
      this.selectedItemsCount = data?.selectedItemsCount;
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  closeModal(reason?: any): void {
    this.reason = reason;
    if (reason == 'delete') {
      this.deleteSelectedItems(this.selectedProducts);
    } else {
      this.launchDialogService.closeDialog(reason);
    }
  }

  deleteSelectedItems(selectedItems) {
    if (this.totalCartItems <= this.selectedItemsCount) {
      this.multiCartFacade.deleteCart(this.cartId, OCC_USER_ID_CURRENT);
      this.actions$
        .pipe(
          ofType(CartActions.DELETE_CART_SUCCESS),
          map((action: CartActions.CartRemoveEntrySuccess) => action.payload)
        )
        .pipe(take(1))
        .subscribe((cartResponse: any) => {
          this.actions$
            .pipe(
              ofType(CartActions.LOAD_CART_SUCCESS),
              map(
                (action: CartActions.CartRemoveEntrySuccess) => action.payload
              )
            )
            .pipe(take(1))
            .subscribe((cartResponse: any) => {
              // updating number of cart based on deletion
              localStorage.setItem(
                'numberOfCart',
                cartResponse.cart.totalUnitCount
              );
            });
          this.multiCartFacade.createCart({
            userId: OCC_USER_ID_CURRENT,

            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
            .subscribe((res) => {
              this.activeCartFacade
                .getActiveCartId()
                .pipe(take(1))
                .subscribe((cartId) => {});
            });
        });
      this.reason = 'clearCart';
      this.launchDialogService.closeDialog('clearCart');
    } else {
      this.rmaService
        .deleteSelectedItems(OCC_USER_ID_CURRENT, selectedItems)
        .subscribe((success) => {
          this.multiCartFacade.loadCart({
            userId: OCC_USER_ID_CURRENT,
            cartId: this.cartId,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(
              ofType(CartActions.LOAD_CART_SUCCESS),
              map(
                (action: CartActions.CartRemoveEntrySuccess) => action.payload
              )
            )
            .pipe(take(1))
            .subscribe((cartResponse: any) => {
              // updating number of cart based on deletion
              localStorage.setItem(
                'numberOfCart',
                cartResponse.cart.totalUnitCount
              );
              this.launchDialogService.closeDialog(true);
              this.selectedProducts = [];
              this.globalMessageService.add(
                this.getTranslatedText('rma-cart.rmaCartRemoved'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION,
                5000
              );
            });
        });
    }
  }
}
