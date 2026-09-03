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
  invoiceContact: string;
  invoicePhone: string;
  soaContact: any;
  soaPhone: any;
  orderConfirmationNum: any;
  orderConfirmationName: any;
  invoiceContactName: any;
  invoiceContact1Num: any;
}

export class CheckoutPaymentModel {
  costCenterId: string;
  endCustomerOrderNumber: string;
  endUserNumber: string;
  googleCaptcha: string;
  paymentType: string;
  purchaseOrderNumber: string;
}
export class CreditCardPaymentInfoModel {
  companyCode?: string;
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  lastName?: string;
}
export class SnapPayPaymentInfo {
  isNewCard?: boolean;
  ccType?: string;
  ccNumber?: string;
  ccName?: string;
  ccValidTru?: string;
  merchantid?: string;
  token?: string;
}
