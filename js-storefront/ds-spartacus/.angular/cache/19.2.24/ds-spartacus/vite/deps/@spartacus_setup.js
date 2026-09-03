import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/setup/fesm2022/spartacus-setup.mjs
var defaultB2bUserAccountOccEndpoints = {
  user: "orgUsers/${userId}"
};
var defaultB2bUserProfileOccEndpoints = {
  userUpdateProfile: "users/${userId}",
  userCloseAccount: "users/${userId}"
};
var defaultB2bCartOccEndpoints = {
  addEntries: "orgUsers/${userId}/carts/${cartId}/entries?quantity=${quantity}"
};
var defaultB2bOrderOccEndpoints = {
  placeOrder: "orgUsers/${userId}/orders?fields=FULL",
  scheduleReplenishmentOrder: "orgUsers/${userId}/replenishmentOrders?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType",
  reorder: "orgUsers/${userId}/cartFromOrder?orderCode=${orderCode}"
};
var defaultB2bOccConfig = {
  backend: {
    occ: {
      endpoints: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, defaultB2bUserAccountOccEndpoints), defaultB2bUserProfileOccEndpoints), defaultB2bCartOccEndpoints), defaultB2bOrderOccEndpoints)
    }
  }
};
export {
  defaultB2bOccConfig
};
//# sourceMappingURL=@spartacus_setup.js.map
