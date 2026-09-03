import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ActiveCartFacade,
  Cart,
  OrderEntry,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import { AuthService } from '@spartacus/core';
import {
  LaunchDialogService,
  SearchBoxComponentService,
} from '@spartacus/storefront';
import { ICON_TYPE } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { GtmEvents, StoreTypeEnum } from '../../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'cx-added-to-cart-dialog',
  templateUrl: './added-to-cart-dialog.component.html',
  styleUrls: ['./added-to-cart-dialog.component.scss'],
})
export class AddedToCartDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;

  entry$: Observable<OrderEntry>;
  cart$: Observable<Cart>;
  loaded$: Observable<boolean>;
  increment: boolean;
  orderPromotions$: Observable<PromotionResult[]>;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  quantity = 0;
  modalIsOpen = false;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;

  form: FormGroup = new FormGroup({});

  private quantityControl$: Observable<FormControl>;
  user$: Observable<any>;
  constructor(
    protected launchDialogService: LaunchDialogService,
    protected cartService: ActiveCartFacade, // protected promotionService: PromotionService
    private searchBoxComponentService: SearchBoxComponentService,
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private gtmService: GoogleTagManagerService
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
    this.launchDialogService.data$.subscribe((data) => {
      this.entry$ = data?.entry$;
      this.cart$ = data?.cart$;
      this.loaded$ = data?.loaded$;
      this.quantity = data?.quantity;
      this.increment = data?.increment;
    });
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
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
    this.searchBoxComponentService.clearResults();
  }

  checkMinOrderQty(cart: any) {
    if (cart?.isMinOrderQtyProductExists) {
      return true;
    }
    return false;
  }
  //Google Analytics
  gtmSelectItemEvent(entry) {
    if (entry) {
      let producitem: EcommerceItem[] = [];
      producitem.push({
        item_id: entry?.product?.code,
        item_name: entry?.product?.name,
        discount: entry?.discountPercentage ? +entry?.discountPercentage : '',
        index: entry?.entryNumber || 0,
        item_brand: this.gtmService.getItemBrand(),
        price: entry?.discountPrice ? +entry?.discountPrice : '',
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        items: producitem,
      };
      let selectItemDataLayer: GTMDataLayer = {
        event: GtmEvents.SelectItem,
        store: StoreTypeEnum.Dsstore,
        ecommerce: purchaseEcommerceEcommerce,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
}
