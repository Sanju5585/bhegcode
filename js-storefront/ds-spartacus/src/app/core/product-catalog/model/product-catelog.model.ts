export enum BuyActions {
  BUY = 'buyOnlyProduct',
  CHECK_PRICE = 'checkPrice',
  OBSOLETE = 'obsoleteProduct',
  REPLACEMENT = 'replacementProductAvailable',
  SWITCH_CUSTOMER = 'switchCustomer',
  CONTACT_CUSTOMER_CARE = 'contactCustomerCare',
  CONFIGURE = 'configureProduct',
}

export enum ReturnActions {
  RETURN = 'returnOnlyProduct',
  SWITCH_CUSTOMER = 'switchCustomer',
  CONTACT_CUSTOMER_CARE = 'contactCustomerCare',
}

export enum AnonymousActions {
  BUY = 'guestBuy',
  CHECK_PRICE = 'guestCheckPrice',
  RETURN = 'guestReturn',
  QUOTE = 'guestQuote',
  OBSOLETE = 'guestObsolete',
  CATALOG_ONLY = 'guestCatalogOnly',
  CONTACT_CUSTOMER_CARE = 'guestContactCustomerCare',
}
