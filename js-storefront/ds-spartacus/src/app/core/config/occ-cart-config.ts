import { NgModule } from '@angular/core';
import { ConfigModule, OccConfig } from '@spartacus/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            // tslint:disable:max-line-length
            /* carts:
              "users/${userId}/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,code,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name)",
            cart:
              "users/${userId}/carts/${cartId}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,code,entries(FULL),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user",
            */
            carts:
            'users/${userId}/carts?fields=FULL',
            cart: 'users/${userId}/carts/${cartId}?fields=FULL',
            createCart:
              'users/${userId}/carts?fields=FULL',
            addEntries: 'users/${userId}/carts/${cartId}/dsentries',
            updateEntries:
              'users/${userId}/carts/${cartId}/entries/${entryNumber}',
            removeEntries:
              'users/${userId}/carts/${cartId}/entries/${entryNumber}',
            addEmail: 'users/${userId}/carts/${cartId}/email',
            deleteCart: 'users/${userId}/carts/${cartId}',
            cartVoucher: 'users/${userId}/carts/${cartId}/vouchers',
            saveCart: 'users/${userId}/carts/${cartId}/save',
            getCheckoutDetails:
              'users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL),costCenter(FULL),purchaseOrderNumber,paymentType(FULL)',

            // tslint:enable
          },
        },
      },
    } as OccConfig),
  ],
})
export class CustomOccCartConfigModule {}

// Cart entries request query params
// totalPrice(formattedValue),product(FULL),basePrice(formattedValue,value),updateable
