export class SoldToAddress {
  firstName: string;
  lastName: string;
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  constructor() {}
}
export class BillToAddress {
  id?: any;
  country?: {
    isocode?: string;
    name?: string;
  };
  defaultAddress?: boolean;
  firstName?: string;
  formattedAddress?: string;
  lastName?: string;
  line1?: string;
  line2?: string;
  companyName?: string;
  postalCode?: any;
  shippingAddress?: boolean;
  title?: string;
  componentAddress?: any;
  titleCode?: string;
  town?: string;
  city?: string;
  visibleInAddressBook?: boolean;
  region?: {
    countryIso?: string;
    isocode?: string;
    isocodeShort?: string;
    name?: string;
  };
}
export class DeliveryAddress {
  id?: any;
  country?: {
    isocode?: string;
    name?: string;
  };
  defaultAddress?: boolean;
  firstName?: string;
  formattedAddress?: string;
  lastName?: string;
  line1?: string;
  line2?: string;
  companyName?: string;
  postalCode?: any;
  shippingAddress?: boolean;
  title?: string;
  componentAddress?: any;
  titleCode?: string;
  town?: string;
  city?: string;
  visibleInAddressBook?: boolean;
  region?: {
    countryIso?: string;
    isocode?: string;
    isocodeShort?: string;
    name?: string;
  };
  risk?: boolean;
  sanctioned?: boolean;
}
export class PayerDeliveryAddress {
  id?: any;
  country?: {
    isocode?: string;
    name?: string;
  };
  defaultAddress?: boolean;
  firstName?: string;
  formattedAddress?: string;
  lastName?: string;
  line1?: string;
  line2?: string;
  companyName?: string;
  postalCode?: any;
  payerAddress?: boolean;
  title?: string;
  componentAddress?: any;
  titleCode?: string;
  town?: string;
  city?: string;
  visibleInAddressBook?: boolean;
  region?: {
    countryIso?: string;
    isocode?: string;
    isocodeShort?: string;
    name?: string;
  };
}
export class EndUserAddress {
  id?: any;
  country?: {
    isocode?: string;
    name?: string;
  };
  defaultAddress?: boolean;
  firstName?: string;
  formattedAddress?: string;
  lastName?: string;
  line1?: string;
  line2?: string;
  companyName?: string;
  postalCode?: any;
  shippingAddress?: boolean;
  componentAddress?: any;
  title?: string;
  titleCode?: string;
  town?: string;
  city?: string;
  visibleInAddressBook?: boolean;
  region?: {
    countryIso?: string;
    isocode?: string;
    isocodeShort?: string;
    name?: string;
  };
  risk?: boolean;
  sanctioned?: boolean;
}
