export class Country {
  isocode: string;
  name: string;
}

export class Region {
  countryIso: string;
  isocode: string;
  isocodeShort: string;
  name: string;
}

export class endUser {
  cellphone: string;
  companyName: string;
  country: Country;
  defaultAddress: boolean;
  deliveryPoint: string;
  district: string;
  email: string;
  firstName: string;
  formattedAddress: string;
  id: string;
  isNuclear: boolean;
  lastName: string;
  line1: string;
  line2: string;
  phone: string;
  postalCode: string;
  region: Region;
  sapCustomerID: string;
  saveForFuture: string;
  shippingAddress: boolean;
  title: string;
  titleCode: string;
  town: string;
  visibleInAddressBook: boolean;
}

export class PlaceorderModel {
  exportAddress: string;
  googleCaptcha: string;
  govtAgencyFlagVal: string;
  isBuyerFlagVal: string;
  ndays: string;
  ndaysOfWeek: [];
  nthDayOfMonth: string;
  nuclearOpportFlagVal: string;
  nweeks: string;
  planToExportFlagVal: string;
  replenishmentOrder: boolean;
  replenishmentRecurrence: string;
  replenishmentStartDate: string;
  requestedHdrDeliveryDate: string;
  securityCode: string;
  termsCheck: boolean;
}

export class CheckoutDetailModel {
  alternateContactEmail: string;
  alternateContactName: string;
  alternateContactNumber: string;
  bhgeReview: string;
  carrier: string;
  deliveryAccount: string;
  deliveryOptions: string;
  endUserCategory: string;
  invEmail: string;
  notes: string;
  orderAckMail: string;
  reason: string;
  requestedHdrDeliveryDate: string;
  shipDeliveryPointOT: string;
  shipNotificationEmail: string;
  shipToContactName: string;
  shipToContactPhone: string;
}

export class CheckoutPaymentModel {
  costCenterId: string;
  endCustomerOrderNumber: string;
  endUserNumber: string;
  googleCaptcha: string;
  paymentType: string;
  purchaseOrderNumber: string;
}
