import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { OCC_USER_ID_ANONYMOUS, ProductSearchService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { SalesArea } from '../../../../core/customer-account/store/customer-account.model';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-guest-customer-acc',
  templateUrl: './guest-customer-acc.component.html',
  styleUrls: ['./guest-customer-acc.component.scss'],
})
export class GuestCustomerAccComponent implements OnInit, OnDestroy {
  guestSalesAreas$: Observable<SalesArea[]>;
  activeSalesArea$: Observable<SalesArea>;

  cartLoadingSubscription: Subscription;
  activeSalesAreaSubscription: Subscription;
  disabelChangeAcc = false;

  @Output()
  openSlider: EventEmitter<any> = new EventEmitter();

  constructor(
    private custAccountService: CustomerAccountService,
    private multiCartFacade: MultiCartFacade,
    private activeCartFacade: ActiveCartFacade,
    private customerAccService: CustomerAccountService,
    private cRef: ChangeDetectorRef,
    private productSearchService: ProductSearchService,
    private router: Router,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    // disable change account for checkout and confirmation page
    this.customerAccService.disableChangeAccount.subscribe((data) => {
      if (data) {
        this.disabelChangeAcc = true;
      } else {
        this.disabelChangeAcc = false;
      }
      this.cRef.detectChanges();
    });
    this.custAccountService.loadGuestSalesAreas();
    this.guestSalesAreas$ = this.custAccountService.getGuestSalesAreas();
    this.activeSalesArea$ = this.custAccountService.getCurrentGuestSalesArea();
    this.activeSalesAreaSubscription = this.activeSalesArea$.subscribe(
      (res) => {
        if (
          res &&
          !(Object.keys(res).length === 0 && res.constructor === Object)
        ) {
          this.custAccountService.setGuestActiveSalesAreaToStorage({
            ...res,
            active: true,
          });
          this.customerAccService.getSalesAreaData.next(true);
          const catCode = this.router.url.split('/').reverse()[0];

          // Reload PLP
          if (catCode.indexOf('ECOM') > -1) {
            this.productSearchService.search(
              ':relevance:allCategories:' + catCode,
              { pageSize: 50 }
            );
          } else {
            this.productSearchService.search(
              ':relevance:allCategories:ECOM_LVL0_00000000',
              { pageSize: 50 }
            );
          }
        }
      }
    );
    this.cartLoadingSubscription = this.activeCartFacade
      .getActiveCartId()
      .pipe(take(1))
      .subscribe((res: any) => {
        if (!res) {
          this.multiCartFacade.createCart({
            userId: OCC_USER_ID_ANONYMOUS,
          });

          this.actions$
            .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
            .subscribe((cartResponse: any) => {
              if (cartResponse?.payload?.cartId) {
                this.multiCartFacade.loadCart({
                  cartId: cartResponse?.payload?.cartId,
                  userId: OCC_USER_ID_ANONYMOUS,
                  extraData: {
                    active: true,
                  },
                });
              }
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.cartLoadingSubscription?.unsubscribe();
    this.activeSalesAreaSubscription?.unsubscribe();
  }

  changeDSCompany() {
    this.openSlider.emit();
  }
}
