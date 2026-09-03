import { ChangeDetectorRef, Component } from '@angular/core';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { Observable, Subscription, take } from 'rxjs';
import { RmaService } from '../../rma/rma-services/rma.service';
import {
  CommerceTypes,
  HazardDetails,
} from '../../../shared/models/commerceTypes.model';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-returns-cart',
  standalone: false,
  templateUrl: './returns-cart.component.html',
  styleUrl: './returns-cart.component.scss',
})
export class ReturnsCartComponent {
  public cart$: Observable<any> = this.activeCartFacade.getActive();
  allPlants: any[] = [];
  itemsCountExAccessories;
  cartSubscription: Subscription;
  cartId: string;
  distinctPlantList: any[] = [];
  userType = OCC_USER_ID_CURRENT;
  hazardDetails = HazardDetails;
  hazardStatus: any;
  isHazardous: boolean | null = null;
  declarationCheck: boolean = false;
  showHazardousOptions: boolean = true;
  constructor(
    private activeCartFacade: ActiveCartFacade,
    private rmaService: RmaService,
    private multiCartFacade: MultiCartFacade,
    private launchDialogService: LaunchDialogService,
    private cRef: ChangeDetectorRef,
    public routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    this.getHazardStatus();
    this.cartSubscription = this.cart$.subscribe((cart) => {
      this.itemsCountExAccessories = 0;
      this.allPlants = [];
      this.cartId = cart?.code;
      cart.returnsCartData?.map((item) => {
        this.allPlants.push({
          siteId: item?.returnLocationId,
          siteName: item?.returnLocation,
        });
        if (!item.parentEntryNumber) {
          this.itemsCountExAccessories++;
        }
      });
      this.distinctPlantList = [
        ...new Set(this.allPlants.map((item) => item.siteId)),
      ];
    });
  }
  getHazardStatus() {
    this.rmaService
      .getHazardCompleteness(OCC_USER_ID_CURRENT)
      .subscribe((hazardStatus: string) => {
        this.hazardStatus = hazardStatus;
        this.cRef.detectChanges();
      });
  }

  printScreen() {
    window.print();
  }

  saveCart(cart) {
    const componentData = {
      currentCart: cart,
    };
    const saveCartModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (saveCartModal) {
      saveCartModal.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.setCartType();
        }
      });
    }
  }

  setCartType() {
    const obj = {
      fields: 'DEFAULT',
      cartType: CommerceTypes.RETURNS,
    };
    this.rmaService
      .changeCartType(OCC_USER_ID_CURRENT, obj)
      .subscribe((success) => {
        this.loadCart();
      });
  }
  loadCart() {
    this.multiCartFacade.loadCart({
      userId: OCC_USER_ID_CURRENT,
      cartId: this.cartId,
      extraData: {
        active: true,
      },
    });
  }

  onChange(event) {
    this.declarationCheck = event.target.checked;
    this.cRef.detectChanges();
  }
  openHazardousDialog(event) {
    const hazardousData = {};

    const hazardousDialog = this.launchDialogService.openDialog(
      DS_DIALOG.HAZARDOUS_FORM,
      undefined,
      undefined,
      hazardousData
    );
    if (hazardousDialog) {
      hazardousDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {
        if (value != undefined) {
          if (value == 'confirm-hazardous-order') {
            this.isHazardous = true;
            this.getHazardStatus();
          } else if (value == 'close-hazardous-order') {
            this.isHazardous = null;
            this.hazardStatus = null;
            this.showHazardousOptions = false;
            this.declarationCheck = false;
            this.cRef.detectChanges();

            setTimeout(() => {
              this.showHazardousOptions = true;
              this.declarationCheck = false;
              this.cRef.detectChanges();
            }, 0);
          }
        }
        this.cRef.detectChanges();
      });
    }
  }

  handleChange(event) {
    this.declarationCheck = false;
    const value = event.target.value.replace(/'/g, '');
    if (value === 'Yes') {
      // this.isHazardous = true;
      this.openHazardousDialog(event);
    } else if (value === 'No') {
      this.isHazardous = false;
      this.hazardStatus = HazardDetails.COMPLETE;
    }

    this.cRef.detectChanges();
  }
}
