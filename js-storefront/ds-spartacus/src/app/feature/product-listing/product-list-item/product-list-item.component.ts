import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { MyFavoritesService } from '../../my-favorites/my-favorites.service';
import { ViewModes } from '../product-view/product-view.component';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'cx-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent {
  @Input() product: any;
  @Input() userType: any;
  favStatus: boolean = false;
  constructor(
    private myFavouritesService: MyFavoritesService,
    private globalMessageService: GlobalMessageService,
    private cRef: ChangeDetectorRef,
    private gtmService: GoogleTagManagerService,
    private translate: TranslationService
  ) {}
  mode = ViewModes.List;
  isPriceNotFound = false;
  onFavoriteClick(product) {
    if (this.favStatus == false) {
      this.myFavouritesService
        .addtowhishlist({ productCodes: product.code })
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productAddedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favStatus = true;
          this.cRef.detectChanges();
        });
    } else {
      this.myFavouritesService
        .removeFromWishlist([product.code])
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productRemovedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favStatus = false;
          this.cRef.detectChanges();
        });
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  fetchCheckPriceProduct(event) {
    if (Object.keys(event.price).length > 0) {
      this.product = {
        ...this.product,
        ...event,
      };
    } else {
      this.isPriceNotFound = true;
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
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.ProductListing,
        item_list_name: ItemListTypeEnum.ProductListing,
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
