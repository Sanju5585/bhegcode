import { Component } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { Router } from '@angular/router';
import { MultiCartFacade, ActiveCartFacade } from '@spartacus/cart/base/root';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { SavedCartService } from '../../../saved-cart/service/saved-cart.service';
import { QuickOrderService } from '../../quick-order/quick-order.service';


@Component({
  selector: 'app-waygate-delete-all-carts-popup',
  standalone: false,
  templateUrl: './waygate-delete-all-carts-popup.component.html',
  styleUrl: './waygate-delete-all-carts-popup.component.scss'
})
export class WaygateDeleteAllCartsPopupComponent {
  
 b2bUnit: string;
  salesOrg: string;
  commerceType: string;
  productLine: string;
  navigationFlag:boolean;

  constructor(private launchDialogService: LaunchDialogService,      
  private customerAccService: CustomerAccountService,
  private savedCartService: SavedCartService,
  private multiCartFacade: MultiCartFacade,
  private activeCartFacade: ActiveCartFacade,
  private actions$: Actions,
  private router: Router,
  private quickOrderService: QuickOrderService,
  private globalMessageService: GlobalMessageService

    ) {}

  close(action: string) {
    this.launchDialogService.closeDialog(action);
  }


  onCancel() {
    console.log('Cancel clicked');
    this.close('cancel');
  }

  
  confirmResetCart() {    
    
    this.quickOrderService.setNavigation(true);
    const data = this.customerAccService.resetCartData;
    if(data){
    this.resetCartIfDataPresent();
    }else{
      this.close('deleteAllCartsConfirm');

    }
  
  }  

resetCartIfDataPresent() {
  const data = this.customerAccService.resetCartData;

  if (!data) return;

  const { b2bUnit, salesOrg, commerceType, productLine } = data;
  this.savedCartService
    .deleteAllCarts(b2bUnit, salesOrg, commerceType)
    .subscribe({
      next: () => {

        this.multiCartFacade.createCart({
          userId: 'current',
          extraData: { active: true },
        });

        this.actions$
          .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
          .subscribe((res: any) => {

            this.multiCartFacade.loadCart({
              userId: 'current',
              cartId: res.payload.cartId,
              extraData: { active: true },
            });
            
            this.router.navigate([`/${productLine}/cart`]).then(() => {
              this.globalMessageService.add(
                { key: 'savedCart.deleteAllSuccess' },
                GlobalMessageType.MSG_TYPE_CONFIRMATION
              );
              
              this.close('resetCartComplete'); 
              this.customerAccService.resetCartData = null;

            });
          });
      },

      
    });
} 

}
