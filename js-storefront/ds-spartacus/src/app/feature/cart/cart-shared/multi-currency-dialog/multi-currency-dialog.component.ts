import { Component, Input, OnInit } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { take } from 'rxjs/operators';
import { TranslationService } from '@spartacus/core';

@Component({
  selector: 'ds-multi-currency-dialog',
  standalone: false,
  templateUrl: './multi-currency-dialog.component.html',
  styleUrl: './multi-currency-dialog.component.scss'
})
export class MultiCurrencyDialogComponent implements OnInit{

  currentCart: any;
  activeCartCurrency: string = "";

  constructor(
    private launchDialogService: LaunchDialogService,
    protected activeCartFacade: ActiveCartFacade,
    private translate: TranslationService,
  ) {}

  ngOnInit(): void {
    this.activeCartFacade.getActive().subscribe((data: any) => {
      this.currentCart = data;
      this.activeCartCurrency = this.currentCart?.currencyIso;
    });
  }

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }

  addToCartProceed(){
    const componentData = {
      currentCart: this.currentCart
    };

    const saveCartModalRef = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );

    saveCartModalRef.pipe(take(1)).subscribe((value) => {
      let sval = value?.instance?.launchDialogService?._dialogClose._value;
      if(sval == this.getTranslatedText('buyCart.dismissAfterSave')){
        this.dismissModal("Cart saved, Now proceed to add to cart");
      }
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
