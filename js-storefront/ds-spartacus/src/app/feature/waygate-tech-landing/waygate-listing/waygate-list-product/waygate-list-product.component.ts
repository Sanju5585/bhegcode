import { Component, Input } from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { ItemListTypeEnum, GtmEvents } from '../../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { MyFavoritesService } from '../../../my-favorites/my-favorites.service';

@Component({
  standalone: false,
  selector: 'app-waygate-list-product',
  templateUrl: './waygate-list-product.component.html',
  styleUrls: ['./waygate-list-product.component.scss'],
})
export class WaygateListProductComponent {
  @Input() product;
  user$: Observable<any>;
  favorite = false;
  productLine: string;
  constructor(
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private myFavoritesService: MyFavoritesService,
    private globalMessageService: GlobalMessageService,
    private customerAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private translate: TranslationService
  ) {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onFavoriteClick() {
    if (this.favorite == false) {
      this.myFavoritesService
        .addtowhishlist({ productCodes: this.product.code })
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productAddedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favorite = true;
        });
    } else {
      this.myFavoritesService
        .removeFromWishlist([this.product.code])
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productRemovedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favorite = false;
        });
    }
  }

  //Google Analytics
  gtmSelectItemEvent(product) {
    if (product) {
      let producitem: EcommerceItem[] = [];
      producitem.push({
        item_id: product?.code,
        item_name: product?.name,
        discount: product?.discountPercentage
          ? +product?.discountPercentage
          : '',
        index: 0,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.ProductListing,
        item_list_name: ItemListTypeEnum.ProductListing,
        price: product?.discountPrice ? +product?.discountPrice : '',
        item_category: product?.brandName.length
          ? product?.brandName[1].name
          : '',
        item_category2: product?.brandName.length
          ? product?.brandName[2].name
          : '',
        item_category3: product?.brandName.length
          ? product?.brandName[3].name
          : '',
        item_category4: product?.brandName.length
          ? product?.brandName[4].name
          : '',
        item_category5: product?.brandName.length
          ? product?.brandName[5].name
          : '',
        item_variant: '',
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.ProductListing,
        item_list_name: ItemListTypeEnum.ProductListing,
        items: producitem,
      };
      let selectItemDataLayer: GTMDataLayer = {
        store: this.gtmService.getItemBrand(),
        ecommerce: purchaseEcommerceEcommerce,
        event: GtmEvents.SelectItem,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
}
