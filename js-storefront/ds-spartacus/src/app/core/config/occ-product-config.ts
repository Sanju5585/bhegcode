import { NgModule } from '@angular/core';
import {
  ConfigModule,
  OccConfig,
  ProductScope,
  provideDefaultConfig,
} from '@spartacus/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorProductScope } from '@spartacus/product-configurator/common';

@NgModule({
  imports: [CommonModule],
  providers: [
    // provideDefaultConfig({
    //   backend: {
    //     occ: {
    //       endpoints: {
    //         carts:
    //           'users/${userId}/carts?fields=carts(FULL,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,commerceType,returnsCartData,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name)',
    //         cart: 'users/${userId}/carts/${cartId}?fields=FULL,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,commerceType,returnsCartData,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user',
    //         product: {
    //           default:
    //             'users/${userId}/products/details?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType,errorCode,productAccessData',
    //           list: 'users/${userId}/products/details?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
    //           details: 'users/${userId}/products/details?fields=FULL',
    //           attributes:
    //             'users/${userId}/products/details?fields=classifications',
    //           variants:
    //             'users/${userId}/products/details?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType',
    //           price: 'users/${userId}/products/details?fields=FULL',
    //           stock: 'users/${userId}/products/details?fields=FULL',
    //           configurator: 'users/${userId}/products/details?fields=FULL',
    //           configuratorProductCard:
    //             'users/${userId}/products/details?fields=FULL',
    //         },
    //         productReviews: 'users/${userId}/products/details?fields=FULL',
    //         // Uncomment this when occ gets configured
    //         // productReferences:
    //         //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
    //         productReferences: 'users/${userId}/products/details?fields=FULL',
    //         /* eslint-enable */
    //         productSuggestions: 'users/${userId}/products/suggestions',
    //         productSearch:
    //           'users/${userId}/products/search?fields=products(code,description,url,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions,categories(FULL),productAccessData,hasAccessories,hybrisStatus,isAnonymousBuy,isAnonymousQuote,isEngineeringHold,materialStatus,obsoleteProductStatus),facets,breadcrumbs,pagination(FULL),sorts(DEFAULT),freeTextSearch,currentQuery',
    //       },
    //     },
    //     loadingScopes: {
    //       product: {
    //         list: {
    //           include: [ConfiguratorProductScope.CONFIGURATOR],
    //         },
    //         details: {
    //           include: [ProductScope.LIST, ProductScope.VARIANTS],
    //         },
    //       },
    //     },
    //   },
    // }),
  ],
})
export class CustomOccProductConfigModule {}
