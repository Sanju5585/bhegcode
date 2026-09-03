import { inject } from '@angular/core';
import { FeatureToggles, OccConfig } from '@spartacus/core';

export function defaultOccCartConfigFactory(): OccConfig {
  const featureToggles = inject(FeatureToggles);
  return {
    backend: {
      occ: {
        endpoints: {
          /* eslint-disable max-len */
          carts:
            'users/${userId}/carts?fields=carts(FULL,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,commerceType,returnsCartData,isShipCompleteOrder,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name)',
          cart: 'users/${userId}/carts/${cartId}?fields=FULL,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,commerceType,returnsCartData,isShipCompleteOrder,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user',
          createCart:
            'users/${userId}/carts?fields=FULL,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,commerceType,returnsCartData,isShipCompleteOrder,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user',
          addEntries: 'users/${userId}/carts/${cartId}/dsentries',
          updateEntries:
            'users/${userId}/carts/${cartId}/entries/${entryNumber}',
          removeEntries:
            'users/${userId}/carts/${cartId}/entries/${entryNumber}',
          addEmail: 'users/${userId}/carts/${cartId}/email',
          deleteCart: 'users/${userId}/carts/${cartId}',
          cartVoucher: 'users/${userId}/carts/${cartId}/vouchers',
          saveCart: 'users/${userId}/carts/${cartId}/save',
          // tslint:enable
        },
      },
    },
  };
}
