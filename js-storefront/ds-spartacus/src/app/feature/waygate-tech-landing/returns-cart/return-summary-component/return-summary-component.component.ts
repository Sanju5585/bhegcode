import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { HazardDetails } from '../../../../shared/models/commerceTypes.model';
import {
  DSAuthService,
  UserTypes,
} from '../../../../core/auth/ds-auth.service';
import {
  AccessRoleType,
  UserRoleService,
} from '../../../../shared/services/user-role.service';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';
import { Observable, of, switchMap, take } from 'rxjs';
import { SALES_AREA } from '../../../../shared/models/status/order-status.model';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { GtmEvents, ItemListTypeEnum } from '../../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  GTMCartType,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';

@Component({
  selector: 'app-return-summary-component',
  standalone: false,
  templateUrl: './return-summary-component.component.html',
  styleUrl: './return-summary-component.component.scss',
})
export class ReturnSummaryComponentComponent {
  @Input()
  cart: any;
  @Input()
  declarationCheck;
  @Input()
  hazardStatus;

  @Input() isHazardous: boolean | null;
  hazardDetails = HazardDetails;
  currentUserAccess$ = this.userRoleService.currentUserRole;
  userRoleEnum = AccessRoleType;
  userType;
  user$: Observable<unknown>;
  restrictedSalesArea: boolean = true;

  productLine: string;
  salesArea_6210;
  constructor(
    private router: Router,
    private userRoleService: UserRoleService,
    private dsAuthService: DSAuthService,
    private custAccService: CustomerAccountService,
    protected authService: AuthService,
    private cdRef: ChangeDetectorRef,
    private globalMessageService: GlobalMessageService,
    private userAccountFacade: UserAccountFacade,
    private launchDialogService: LaunchDialogService,
    private googleTagManagerService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
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
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
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
    // this.userType = this.dsAuthService.getUserTypeFromStorage();
    this.custAccService.disclaimerBannerState.subscribe((salesArea) => {
      if (salesArea) {
        this.salesArea_6210 = salesArea;
      }
    });
  }

  checkRolesForCheckout(roles) {
    if (this.userType == UserTypes.INTERNAL) {
      if (roles.indexOf(this.userRoleEnum.ADMIN) > -1) {
        return true;
      } else if (
        roles.indexOf(this.userRoleEnum.RMA) > -1 &&
        roles.indexOf(this.userRoleEnum.ORDER_TRACK) > -1
      ) {
        return true;
      } else if (
        roles.indexOf(this.userRoleEnum.RMA) > -1 &&
        roles.indexOf(this.userRoleEnum.VIEW_ONLY) > -1
      ) {
        return true;
      }
      return false;
    } else if (this.userType == UserTypes.EXTERNAL) {
      if (
        roles.indexOf(this.userRoleEnum.ADMIN) > -1 ||
        roles.indexOf(this.userRoleEnum.ORDER_TRACK) > -1 ||
        roles.indexOf(this.userRoleEnum.VIEW_ONLY) > -1
      ) {
        return true;
      }
      return false;
    }
  }

  checkDisable() {
    if (
      this.isHazardous === null ||
      !this.declarationCheck ||
      this.hazardStatus === HazardDetails.PARTIAL ||
      !this.checkIfAccessoryIncomplete()
    ) {
      return true;
    }
    return false;
  }

  checkIfAccessoryIncomplete() {
    for (let el of this.cart.returnsCartData) {
      if (!el.offeringList || el.offeringList.length <= 0) {
        return false;
      }
    }
    return true;
  }

  goToCheckout() {
    if (this.checkDisable()) {
      return;
    }
    if (this.salesArea_6210 == SALES_AREA.SALES_AREA_6210) {
      this.showDisclaimerMessage();
    } else {
      this.setGTMTagsForCheckoutBegin();
      this.router.navigate([`/${this.productLine}/returns/checkout`]);
    }
  }

  showDisclaimerMessage() {
    const componentdata = {};
    const disclaimerBannerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.COMMON_DISCLAIMER_MESSAGE,
      undefined,
      undefined,
      componentdata
    );
    if (disclaimerBannerDialog) {
      disclaimerBannerDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {
        if (value) {
          this.setGTMTagsForCheckoutBegin();
          this.router.navigate([`/${this.productLine}/returns/checkout`]);
        }
      });
    }
  }

  setGTMTagsForCheckoutBegin() {
    let items: any[] = [];
    if (this.cart?.entries?.length > 0) {
      this.cart?.entries?.forEach((item, i) => {
        let eachitem: any = {
          item_id: item?.product?.code,
          item_name: item?.product?.name,
          coupon: '',
          discount: +item?.discountPercentage ? +item?.discountPercentage : '',
          index: i,
          item_brand: this.googleTagManagerService.getItemBrand(),
          affiliation: this.googleTagManagerService.getItemBrand(),
          item_list_id: ItemListTypeEnum.Cart,
          item_list_name: ItemListTypeEnum.Cart,
          price: item?.netSellingPrice?.value,
          quantity: item?.quantity,
        };
        items.push(eachitem);
      });
    }

    let checkoutBeginEcommerce: Ecommerce = {
      currency: this.cart?.currencyIso,
      value: this.cart?.totalPrice?.value ? this.cart?.totalPrice?.value : '',
      coupon: this.cart?.appliedCouponCodes
        ? this.cart?.appliedCouponCodes[0]
        : '',
      items: items,
    };

    let checkoutBeginDataLayer: GTMDataLayer = {
      store: this.googleTagManagerService.getItemBrand(),
      ecommerce: checkoutBeginEcommerce,
      event: GtmEvents.BeginCheckout,
      commerceType: GTMCartType.RMA_CART,
    };

    this.googleTagManagerService.sendEvent(checkoutBeginDataLayer);
  }
}
