import { RoutesConfig, RoutingConfig } from '@spartacus/core';
import { AllProductLine } from '../../shared/enums/availableProductList.enum';

export const defaultStorefrontRoutesConfig: RoutesConfig = {
  home: {
    paths: [
      '',
      'home',
      'homepage',
      AllProductLine.waygate,
      AllProductLine.bently,
      AllProductLine.panametrics,
      AllProductLine.druck,
      AllProductLine.reuterStokes,
      'spa_redirect',
    ],
    protected: false,
  },
  notFound: { paths: ['not-found'], protected: false },

  // semantic links for login related pages
  login: {
    paths: ['login'],
    protected: false,
    authFlow: true,
  },
  register: {
    paths: ['login/register'],
    protected: false,
    authFlow: true,
  },
  forgotPassword: {
    paths: ['login/forgot-password'],
    protected: false,
    authFlow: true,
  },
  resetPassword: {
    paths: ['login/pw/change'],
    protected: false,
    authFlow: true,
  },
  activation: {
    paths: [
      'confirm-email/:email/:token',
      'confirm/:email/:token',
      'resend-email/:email',
    ],
    protected: false,
    authFlow: true,
  },
  logout: { paths: ['logout'], protected: false, authFlow: true },

  // plp routes
  search: { paths: ['search/:query'], protected: false },
  category: {
    paths: ['category/:categoryCode'],
    paramsMapping: { categoryCode: 'code' },
    protected: false,
  },
  brand: { paths: [':brandName/c/:brandCode'], protected: false },
  // pdp routes
  product: {
    paths: ['product/:productCode/:name'],
    paramsMapping: { productCode: 'code' },
    protected: false,
  },

  termsAndConditions: { paths: ['terms-and-conditions'], protected: false },
  coupons: { paths: ['my-account/coupons'], protected: false },
  couponClaim: {
    paths: ['my-account/coupon/claim/:couponCode'],
    paramsMapping: { couponCode: 'code' },
    protected: false,
  },
  myInterests: {
    paths: ['my-account/my-interests'],
    protected: false,
  },
  notificationPreference: {
    paths: ['my-account/notification-preference'],
    protected: false,
  },
  statusTracker: {
    paths: ['quick-status', 'quick-status/order/:id', 'quick-status/rma/:id'],
    protected: false,
  },
  otherPortals: {
    paths: ['list-of-portals'],
    protected: false,
  },
  feedback: {
    paths: ['feedback'],
    protected: false,
  },
  orderConfirmation: {
    paths: ['order-summary/:id'],
    protected: false,
  },
  calibrationData: {
    paths: ['calibration-data'],
    protected: false,
  },
  contactus: {
    paths: ['contactus'],
    protected: false,
  },
  quoteCart: {
    paths: ['quote/cart', 'quote/checkout'],
    protected: false,
  },
 returnsCart: {
    paths: ['returns/cart'],
    protected: false,
  },
  training: {
    paths: ['training-docs'],
    protected: false,
  },
  cart: {
    paths: ['cart'],
    protected: false,
  },
  helpResources: {
    paths: ['help-resources'],
    protected: false,
  },
};

export const defaultRoutingConfig: RoutingConfig = {
  routing: {
    routes: defaultStorefrontRoutesConfig,
  },
};
