import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ActiveCartFacade,
  Cart,
  OrderEntry,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import {
  ICON_TYPE,
  LaunchDialogService,
  SearchBoxComponentService,
} from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { filter, map, startWith, switchMap, take, tap } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { UserRoleService } from '../../../../shared/services/user-role.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  standalone: false,
  selector: 'app-waygate-checkout-modal',
  templateUrl: './waygate-checkout-modal.component.html',
  styleUrls: ['./waygate-checkout-modal.component.scss'],
})
export class WaygateCheckoutModalComponent implements OnInit {
  iconTypes = ICON_TYPE;
  entry$: Observable<OrderEntry>;
  cart$: Observable<any>;
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
  productLine: string;
  restrictedSalesArea: boolean = true;
  userType;
  hideCheckout;
  selectedSalesArea: string;
  cart: Cart;
  oosEntries: any = [];
  showWaygate: boolean = true;
  constructor(
    protected launchDialogService: LaunchDialogService,
    protected cartService: ActiveCartFacade, // protected promotionService: PromotionService
    private searchBoxComponentService: SearchBoxComponentService,
    private authService: AuthService,
    private globalMessageService: GlobalMessageService,
    private cdRef: ChangeDetectorRef,
    private userAccountFacade: UserAccountFacade,
    private userRoleService: UserRoleService,
    private customerAccService: CustomerAccountService,
    private router: Router,
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
                  this.close('Removed');
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
      this.oosEntries = data?.oosEntries;
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
    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
    this.userRoleService
      .getCurrentB2BSalesArea(this.userType)
      .subscribe((res) => {
        if (res === false) {
          this.restrictedSalesArea = false;
        } else {
          this.restrictedSalesArea = true;
        }
        this.cdRef.detectChanges();
      });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.selectedSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });
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

  close(reason?: any): void {
    if (reason === 'View Cart click') {
      this.launchDialogService.closeDialog(reason);
      this.searchBoxComponentService.clearResults();
      this.cart$.subscribe((cart: any) => {
        if (cart?.commerceType == 'GUESTRFQ') {
          window.location.href = '/quote/cart';
        } else if (cart?.commerceType == 'QUOTE') {
          window.location.href = `${this.productLine}/quote/cart`;
        } else {
          window.location.href = `${this.productLine}/cart`;
        }
      });
    }
    this.launchDialogService.closeDialog(reason);
    this.searchBoxComponentService.clearResults();
  }



  checkMinOrderQty(cart: any) {
    if (cart?.isMinOrderQtyProductExists) {
      return true;
    }
    return false;
  }
}
