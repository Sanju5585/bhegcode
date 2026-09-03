import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import {
  AuthService,
  GlobalMessageType,
  GlobalMessageService,
  ProductScope,
  ProductActions,
  TranslationService,
} from '@spartacus/core';
import { switchMap, map } from 'rxjs/operators';
import { ProductDetailService } from '../services/product-detail.services';
import { Actions, ofType } from '@ngrx/effects';
import { UserAccountFacade } from '@spartacus/user/account/root';
@Component({
  standalone: false,
  selector: 'ds-custom-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss'],
})
export class ProductSummaryComponent implements OnInit {
  product$: Observable<any>;
  iconTypes = ICON_TYPE;
  view = 'pdp';
  public availableAt = '';
  currentUser: any;
  favStatus: boolean;
  product: any;
  showProduct;

  constructor(
    private currentProductService: CurrentProductService,
    public auth: AuthService,
    public userAccountFacade: UserAccountFacade,
    public pdpService: ProductDetailService,
    private globalMessageService: GlobalMessageService,
    private cd: ChangeDetectorRef,
    private actions$: Actions,
    private translate: TranslationService
  ) {}

  user$ = this.auth.isUserLoggedIn().pipe(
    switchMap((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        return this.userAccountFacade.get();
      } else {
        return of(undefined);
      }
    })
  );

  ngOnInit(): void {
    this.showProduct = false;
    /* this.product$ = this.actions$.pipe(
      ofType(ProductActions.LOAD_PRODUCT_SUCCESS),
      map((action: ProductActions.LoadProductSuccess) => action.payload)
    ); */

    this.actions$
      .pipe(
        ofType(ProductActions.LOAD_PRODUCT_SUCCESS),
        map((action: ProductActions.LoadProductSuccess) => action.payload)
      )
      .subscribe((res: any) => {
        if (res?.productAccessData) {
          this.showProduct = false;
          this.product = res;
          // this.favStatus = response['favouritesFlag'];
          this.cd.detectChanges();
          this.showProduct = true;
          this.cd.detectChanges();
        }
      });

    this.product$ = this.currentProductService.getProduct(ProductScope.DETAILS);

    this.product$.subscribe((response) => {
      if (response !== null && response !== undefined) {
        // showProduct and cd.detectChanges() is used to hard refresh component
        this.showProduct = false;
        this.product = response;
        // this.favStatus = response['favouritesFlag'];
        this.cd.detectChanges();
        this.showProduct = true;
        this.cd.detectChanges();
      }
    });

    this.cd.detectChanges();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onFavoriteClick(product) {
    this.favStatus = !this.favStatus; //display to end user - that the product has changed his fav status
    //make a call - POST/PUT API - to update the favorite status of the product
    // this.pdpService
    //   .updateProductFavouriteStatus(product)
    //   .pipe(debounceTime(500))
    //   .subscribe(
    //     (response) => {
    //       if (response !== undefined) {
    //         switch (response.toString()) {
    //           case 'true':
    //             this.favStatus = true
    //             this.cd.markForCheck()
    //             break
    //           case 'false':
    //             this.favStatus = false
    //             this.cd.markForCheck()
    //             break
    //           case 'maxlimitreached':
    //             this.favStatus = false
    //             this.cd.markForCheck()
    //             this.displayMaxFavAttainedMsg()
    //             break
    //         }
    //       }
    //     },
    //     (error) => {
    //       this.favStatus = !this.favStatus //revert the status which you had updated before the API call.
    //       // this.cd.markForCheck();
    //       this.globalMessageService.add(
    //         'There was an issue while trying to update your product to the Favorite List.',
    //         GlobalMessageType.MSG_TYPE_ERROR,
    //         5000
    //       )
    //       window.scrollTo(0, 0)
    //     }
    //   )
  }

  displayMaxFavAttainedMsg() {
    this.globalMessageService.add(
      this.getTranslatedText('pdp.maxItemsAdded'),
      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    window.scrollTo(0, 0);
  }
}
