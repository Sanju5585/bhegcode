
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  occBaseSite: 'bhge',
  occBaseUrl:
    // Same-origin so the Angular proxy forwards OCC. Target is set in proxy.conf.json
    // (local Hybris https://localhost:9002). Do not set this to a CCv2 URL in the browser.
    // 'https://api.c3zpgfs3oq-cranecoaz1-d1-public.model-t.cc.commerce.ondemand.com',
    // 'https://api.cd8zy6g-bakerhugh1-d1-public.model-t.cc.commerce.ondemand.com',
    // 'https://localhost:9002',
    'http://localhost:4200',
  occPrefix: '/occ/v2/',
  /*
   * Temporary API definitions, to be removed once APIs are rebuilt on OCC
   */
  translate_path: '/_ui/rma-app/src/assets/languages/',
  languages: {
    English: 'en',
    Deutsch: 'de',
    Русский: 'ru',
    Français: 'fr',
  },
  language_symbol: '@',
  maxRecordLoad: 20,
  useOkta: true,
  apiUrl: 'http://localhost:4200',
  siteKey: '6Lfd8H4UAAAAAF2gXm7dczCAkuFmoQUm3v5k-yrW',
  bynderAppUrl: 'https://bakerhughessandbox.getbynder.com',
  registerUrl:
    'https://registerstaging.bakerhughes.com/register/user/setup?registerMnCStore=true',
  //'https://bhgeregister.cd8zy6g-bakerhugh1-d1-public.model-t.cc.commerce.ondemand.com/register/user/setup?registerMnCStore=true',
  accessRegistrationUrl:
    'https://registerstaging.bakerhughes.com/login?termsAgreeCheck=true&selfRegister=true',
  //'https://bhgeregister.cd8zy6g-bakerhugh1-d1-public.model-t.cc.commerce.ondemand.com/login?termsAgreeCheck=true&selfRegister=true',
  incoTermsUrl: 'https://iccwbo.org/resources-for-business/incoterms-rules/',
  bynderUrl: 'https://bakerhughessandbox.getbynder.com/media',
  apis: {
    msePartAutoSearchList: 'mySiteEquipment/MSEAutocomplete',
    MSESerialNoSearchResult: 'mySiteEquipment/MSEPartSearch',
    MSEPartSearchResult: 'mySiteEquipment/MSEPartSearch',
    MELPartSearchLookup: 'mySiteEquipment/MSEPartSerialLookup',
    equipmentHistoryLookUp: 'mySiteEquipment/melEquipmentLookup',
    addEquipmentHistory: 'mySiteEquipment/addServiceHistory',
    getCustomers: 'mySiteEquipment/getCustomerNameandNumber',
    deleteHazardAttachment: 'rma/removeHazardInfoFiles',

    hazardFileUploadURL: '/myReturns/uploadHazardFormAttachments',
    testURL: '../assets/test.json',
    offeringMatrix: '/rma/ServiceOffering',
    saveRMAForm: '/rma/rmaForm',
    partSearchResult: '/_ui/rma-app/src/assets/partSearchResult.json',
    partAutoSearchList: '/rma-form/autocomplete',

    fileUploadURL: '/myReturns/uploadAdditionalFile',
    salesAreaSwitchAPI: '/engage/switchSalesArea',
    rmaInquiry: '/myReturns/rmaEnquiry',
    getRMADetails: '/rma/RMADetails',

    customerAccount: '/assets/apis/customer-account.json',
    rmaAttachments: '/_ui/rma-app/src/assets/apis/rmaDocuments.json?',
    filterRmaList: '/_ui/rma-app/src/assets/apis/rma-list-item.json',
    shareRmaStatus: '/myReturns/shareRMA',
    orderStatusTrack: '/_ui/rma-app/src/assets/apis/order-status.json',
    orderInquiry: '/_ui/rma-app/src/assets/apis/orderInquiry.json',
    orderShare: '/orderHistory/shareOrderMail',
    orderAttachments: '/_ui/rma-app/src/assets/apis/attachments.json?orderNo=',
    quickOrderStatus: '/orderHistory/quickOrderStatus/',
    downloadOrder: '/orderHistory/downloadAttachment',
    toggleCustomerFavorite: '/myReturns/favourites/',

    rmaUploadDocument: '/myReturns/uploadRMAFile',
    checkoutService: '/_ui/rma-app/src/assets/apis/checkout.json',
    savedCartsService: 'rma/savedCarts',
    // savedCartsService: 'https://localhost:4200/assets/apis/savedCarts.json',
    processCheckout: '/rma/processCheckout',
    checkoutCartInfo: '/_ui/rma-app/src/assets/apis/checkout-cartInfo.json',
    checkoutFormSubmit: '/rma/placeOrder',
    checkoutDocumentUpload: '/rma/uploadCartAttachments',
    getHazardInfo: '/_ui/rma-app/src/assets/apis/hazardInfo.json',
    saveHazardInfo: '/rma/hazardInfo',
    rmaQuickStatus: '/myReturns/fetchRMAStatusForGuest',
    orderQuickStatus: '/orderHistory/quickOrders',
    getAccessories: '/_ui/rma-app/src/assets/apis/accessoriesList.json',
    saveAccessories: '/rma/saveAccessories',
    serialNoSearchResult: '/rma-form/partSearch',
    deleteAttachment: 'rma/removeAttachment',

    mandatoryAccessory: '/_ui/rma-app/src/assets/apis/mandatory_accessory.json',
    quickRMADetail: '/myReturns/quickOrders',
    addEquipment: '/mySiteEquipment/addToMySiteEquipment',

    myEquipmentList: 'mySiteEquipment/fetchEquipmentsForCustomer',
    manEquipmentList: '/mySiteEquipment/fetchEquipmentsForCustomer',
    //myEquipmentList: '/_ui/rma-app/src/assets/apis/my_eq_list.json',
    //manEquipmentList: '/_ui/rma-app/src/assets/apis/man_el.json',
    getFavourites: '/getfavourites',
    removeSingleFavs: '/my-account/removeFromWishlist',
    leaveanote: '/my-account/updateLeaveNote',
    addToFavList: '/my-account/addToWishlist',
    removeFromFavList: '/my-account/removeFromWishlist',
    // orderConfirmationDetail:'/occ/v2/{baseSiteId}/users/{userId}/dsOrders/{orderCodes}',
    orderConfirmationDetail: '../assets/order-confirmation.json',
    downloadCalibrationPDF: 'dsPanCal/downloadCalibrationDataSheetPDF',
    fetchProductfamily: 'dsPanCal/fetchCalibrationProductFamily',
    fetchCalibrationProbType: 'dsPanCal/fetchCalibrationSensorType',
    fetchModelType: 'dsPanCal/fetchCalibrationSensorModelType',
    fetchEndcustomer: 'mySiteEquipment/getCustomerNameandNumber',
    getAllNotifications: 'dsNotifications/myNotifications',
    flagNotifications: 'dsNotifications/flagNotification',
    markasReadNotifications: 'dsNotifications/markasReadNotifications',
    dismissNotifications: 'dsNotifications/dismissNotifications',
    searchNotifications: 'dsNotifications/searchNotificationsBySerialNo',
    dismissAllNotifications: 'dsNotifications/dismissAllNotifications',
  },
  isNewCalibration: true,
  snapPayApi: {
    getRequestID:
      'https://restapi-stage.snappayglobal.com/api/Interop/GetRequestID',
    accountId: '1002551165',
    userId: 'ECOMM',
    transactionType: 'I',
    transactionAmount: '0',
    paymentMode: 'CC',
    hppFormSrc:
      'https://stage.snappayglobal.com/Areas/Interop/Scripts/HPPForm.js',
    customerId: '1000',
    currencyCode: 'USD',
    usMerchantId: '526263750881',
    cnMerchantId: '82666060017',
    yes: 'Y',
    no: 'N',
    redirectionUrl: '#',
    companyCode: '1800',
    snapPayUrl: 'https://stage.snappayglobal.com/Interop/HostedPaymentPage',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
