import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  AnonymousConsentsModule,
  AuthModule,
  CostCenterOccModule,
  ExternalRoutesModule,
  I18nModule,
  ProductModule,
  ProductOccModule,
  UserModule,
  UserOccModule,
} from '@spartacus/core';
import {
  AnonymousConsentManagementBannerModule,
  AnonymousConsentsDialogModule,
  BannerCarouselModule,
  BannerModule,
  BreadcrumbModule,
  CategoryNavigationModule,
  CmsParagraphModule,
  ConsentManagementModule,
  FooterNavigationModule,
  HamburgerMenuModule,
  HomePageEventModule,
  IconModule,
  LinkModule,
  LoginRouteModule,
  LogoutModule,
  MyAccountV2Module,
  MyCouponsModule,
  MyInterestsModule,
  NavigationEventModule,
  NavigationModule,
  NotificationPreferenceModule,
  PageTitleModule,
  PaymentMethodsModule,
  PDFModule,
  ProductCarouselModule,
  ProductDetailsPageModule,
  ProductFacetNavigationModule,
  ProductImagesModule,
  ProductIntroModule,
  ProductListingPageModule,
  ProductListModule,
  ProductPageEventModule,
  ProductReferencesModule,
  ProductSummaryModule,
  ProductTabsModule,
  ScrollToTopModule,
  SearchBoxModule,
  SiteContextSelectorModule,
  SpinnerModule,
  StockNotificationModule,
  TabParagraphContainerModule,
  VideoModule,
} from '@spartacus/storefront';
import { CartBaseFeatureModule } from './features/cart/cart-base-feature.module';
import { CartSavedCartFeatureModule } from './features/cart/cart-saved-cart-feature.module';
import { WishListFeatureModule } from './features/cart/wish-list-feature.module';
import { CartQuickOrderFeatureModule } from './features/cart/cart-quick-order-feature.module';
import { CartImportExportFeatureModule } from './features/cart/cart-import-export-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { PersonalizationFeatureModule } from './features/tracking/personalization-feature.module';
import { TagManagementFeatureModule } from './features/tracking/tag-management-feature.module';
import { PdfinvoicesModuleFeatureModule } from './features/pdf-invoices/pdfinvoices-module-feature.module';
import { RequestedDeliveryDateModuleFeatureModule } from './features/requested-delivery-date/requested-delivery-date-module-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { AsmFeatureModule } from './features/asm/asm-feature.module';
import { AsmCustomer360FeatureModule } from './features/asm/asm-customer360-feature.module';
import { S4omFeatureModule } from './features/s4om/s4om-feature.module';
import { CdsFeatureModule } from './features/cds/cds-feature.module';
import { CdcFeatureModule } from './features/cdc/cdc-feature.module';
import { EstimatedDeliveryDateFeatureModule } from './features/estimated-delivery-date/estimated-delivery-date-feature.module';
import { ProductMultiDimensionalListFeatureModule } from './features/product-multi-dimensional/product-multi-dimensional-list-feature.module';
import { ProductMultiDimensionalSelectorFeatureModule } from './features/product-multi-dimensional/product-multi-dimensional-selector-feature.module';
import { UserFeatureModule } from './features/user/user-feature.module';
import { OrganizationUserRegistrationFeatureModule } from './features/organization/organization-user-registration-feature.module';
import { OrganizationAdministrationFeatureModule } from './features/organization/organization-administration-feature.module';
import { OrganizationAccountSummaryFeatureModule } from './features/organization/organization-account-summary-feature.module';
import { OrganizationUnitOrderFeatureModule } from './features/organization/organization-unit-order-feature.module';
import { OrganizationOrderApprovalFeatureModule } from './features/organization/organization-order-approval-feature.module';
import { ProductConfiguratorFeatureModule } from './features/product-configurator/product-configurator-feature.module';
import { EpdVisualizationFeatureModule } from './features/epd-visualization/epd-visualization-feature.module';
import { DigitalPaymentsFeatureModule } from './features/digital-payments/digital-payments-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { QualtricsFeatureModule } from './features/qualtrics/qualtrics-feature.module';
import { ProductFutureStockFeatureModule } from './features/product/product-future-stock-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { ProductBulkPricingFeatureModule } from './features/product/product-bulk-pricing-feature.module';
import { PickupInStoreFeatureModule } from './features/pickup-in-store/pickup-in-store-feature.module';
import { RouterModule } from '@angular/router';
import { AddToWishListModule } from '../feature/cart/add-to-wishlist/add-to-wish-list.module';
import { CheckoutRootModule } from '@spartacus/checkout/base/root';
import { CheckoutModule } from '../feature/checkout/checkout.module';
import { SpinnerOverlayModule } from '../shared/components/spinner-overlay/spinner-overlay.module';
import { CoreModule } from '../core/core.module';
import { OrderTrackingModule } from '../feature/order-tracking/order-tracking.module';
import { RmaModule } from '../feature/rma/rma.module';
import { SiteLoginModule } from '../feature/header/site-login/site-login.module';
import { ProductListingModule } from '../feature/product-listing/product-listing.module';
import { SiteEquipmentsModule } from '../feature/site-equipments/site-equipments.module';
import { MyFavoritesModule } from '../feature/my-favorites/my-favorites.module';
import { LoginFormModule } from '../feature/user/login-form/login-form.module';
import { MiniCartModule } from '../feature/header/mini-cart/mini-cart.module';
import { NavigationMenuModule } from '../feature/header/navigation-menu/navigation-menu.module';
import { FooterModule } from '../feature/footer/footer.module';
import { ProductDetailsModule } from '../feature/product-details/product-details.module';
import { CartComponentModule } from '../feature/cart/cart.module';
import { SavedCartModule } from '../feature/saved-cart/saved-cart.module';
import { SearchboxModule } from '../feature/header/searchbox/searchbox.module';
import { ContactUsModule } from '../feature/contact-us/contact-us.module';
import { LinksModule } from '../feature/links/links.module';
import { MyProfileModule } from '../feature/user/my-profile/my-profile.module';
import { FeedbackModule } from '../feature/feedback/feedback.module';
import { GuestQuoteModule } from '../feature/quote/guest-quote.module';
import { LandingPagesModule } from '../feature/landing/landing-pages.module';
import { CalibrationDataModule } from '../feature/calibration-data/calibration-data.module';
import { AddToCartModule } from '../feature/cart';
import { NotificationsModule } from '../feature/notifications/notifications.module';
import { TrainingDocsModule } from '../feature/training-docs/training-docs.module';
import { WaygateTechModule } from '../feature/waygate-tech-landing/waygate-tech.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    HamburgerMenuModule,
    SiteContextSelectorModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    ScrollToTopModule,
    PageTitleModule,
    VideoModule,
    PDFModule,
    UserModule,
    UserOccModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    MyAccountV2Module,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    AnonymousConsentsModule.forRoot(),
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    ProductModule.forRoot(),
    ProductOccModule,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ProductListModule,
    SearchBoxModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    CostCenterOccModule,
    NavigationEventModule,
    HomePageEventModule,
    ProductPageEventModule,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    CartSavedCartFeatureModule,
    WishListFeatureModule,
    CartQuickOrderFeatureModule,
    CartImportExportFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
    PersonalizationFeatureModule,
    TagManagementFeatureModule,
    PdfinvoicesModuleFeatureModule,
    RequestedDeliveryDateModuleFeatureModule,
    OrganizationUserRegistrationFeatureModule,
    OrganizationAdministrationFeatureModule,
    OrganizationAccountSummaryFeatureModule,
    OrganizationUnitOrderFeatureModule,
    OrganizationOrderApprovalFeatureModule,
    ProductConfiguratorFeatureModule,
    StoreFinderFeatureModule,
    AsmFeatureModule,
    AsmCustomer360FeatureModule,
    S4omFeatureModule,
    EpdVisualizationFeatureModule,
    DigitalPaymentsFeatureModule,
    CdsFeatureModule,
    CdcFeatureModule,
    SmartEditFeatureModule,
    EstimatedDeliveryDateFeatureModule,
    QualtricsFeatureModule,
    ProductMultiDimensionalListFeatureModule,
    ProductMultiDimensionalSelectorFeatureModule,
    ProductFutureStockFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,
    ProductBulkPricingFeatureModule,
    PickupInStoreFeatureModule,

    RouterModule,

    // Basic Cms Components
    HamburgerMenuModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    // User Core,
    // User UI,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    // Anonymous Consents Core,
    AnonymousConsentsModule.forRoot(),
    // Anonymous Consents UI,
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    // Product Core,
    ProductModule.forRoot(),
    ProductOccModule,
    // Product UI,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ProductListModule,
    SearchBoxModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    // Cart Core,
    // Cart UI,
    AddToWishListModule,
    CostCenterOccModule,
    // Checkout Core
    CheckoutRootModule,
    CheckoutModule,
    // Order,
    // Page Events,
    NavigationEventModule,
    HomePageEventModule,
    // CartPageEventModule,
    ProductPageEventModule,
    // External routes,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    UserOccModule,
    IconModule,
    SpinnerModule,
    I18nModule,
    SpinnerOverlayModule,
    CartBaseFeatureModule,
    CartSavedCartFeatureModule,
    WishListFeatureModule,
    CartQuickOrderFeatureModule,
    CartImportExportFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
    PersonalizationFeatureModule,
    TagManagementFeatureModule,
    OrganizationAdministrationFeatureModule,
    OrganizationAccountSummaryFeatureModule,
    OrganizationUnitOrderFeatureModule,
    OrganizationUserRegistrationFeatureModule,
    OrganizationOrderApprovalFeatureModule,
    ProductConfiguratorFeatureModule,
    StoreFinderFeatureModule,
    S4omFeatureModule,
    EpdVisualizationFeatureModule,
    DigitalPaymentsFeatureModule,
    SmartEditFeatureModule,
    QualtricsFeatureModule,
    ProductFutureStockFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,
    ProductBulkPricingFeatureModule,
    PickupInStoreFeatureModule,
    CoreModule,
    OrderTrackingModule,
    RmaModule,
    SiteLoginModule,
    ProductListingModule,
    ProductFacetNavigationModule,
    SiteEquipmentsModule,
    MyFavoritesModule,
    LoginFormModule,
    MiniCartModule,
    NavigationMenuModule,
    FooterModule,
    ProductDetailsModule,
    CartComponentModule,
    // GuestBuyCheckoutModule,
    // BuyCheckoutModule,
    SavedCartModule,
    SearchboxModule,
    ContactUsModule,
    LinksModule,
    FeedbackModule,
    MyProfileModule,
    GuestQuoteModule,
    LandingPagesModule,
    CheckoutModule,
    // CartDetailsModule,
    CalibrationDataModule,
    NotificationsModule,
    TrainingDocsModule,
    AddToCartModule,
    WaygateTechModule,
    // DialogModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SpinnerModule, I18nModule],
})
export class SpartacusFeaturesModule {}
