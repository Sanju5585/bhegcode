import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaygateLandingComponent } from './waygate-landing/waygate-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  ConfigModule,
  I18nModule,
  RoutingConfig,
  provideConfig,
  UrlModule,
  provideDefaultConfig,
  Config,
} from '@spartacus/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackPoStatusComponent } from './track-po-status/track-po-status.component';
import { ImageSliderComponent } from './image-slider/imageSlider.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { WaygateTechHqComponent } from './waygate-tech-hq/waygate-tech-hq.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { FeaturedProdsComponent } from './featured-prods/featured-prods.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { MatTabsModule } from '@angular/material/tabs';
import {
  DIALOG_TYPE,
  MediaModule,
  OutletModule,
  PageLayoutModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { WaygateHeaderComponent } from './waygate-header/waygate-header.component';
import { WaygateFooterComponent } from './waygate-footer/waygate-footer.component';
import { SearchboxModule } from '../header/searchbox/searchbox.module';
import { RouterModule } from '@angular/router';
import { MiniCartModule } from '../header/mini-cart/mini-cart.module';
// import { SiteLoginModule } from '../header/site-login/site-login.module';
// import { CustomerAccountComponentModule } from '../header/customer-account/customer-account.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LandingPagesModule } from '../landing/landing-pages.module';
import { WaygateMenuComponent } from './waygate-menu/waygate-menu.component';
import { SelectedCategoryPipe } from './waygate-menu/waygate.pipe';
import { WayagteMainStructureComponent } from './wayagte-main-structure/wayagte-main-structure.component';
import { WaygateBreadcrumbsComponent } from './waygate-breadcrumbs/waygate-breadcrumbs.component';
import { WaygateListingComponent } from './waygate-listing/waygate-listing.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WaygateGridProductComponent } from './waygate-listing/waygate-grid-product/waygate-grid-product.component';
import { WaygateListProductComponent } from './waygate-listing/waygate-list-product/waygate-list-product.component';
import { WaygateFacetsComponent } from './waygate-listing/waygate-facets/waygate-facets.component';
import { WaygateFacetComponent } from './waygate-listing/waygate-facets/waygate-facet/waygate-facet.component';
import { FacetSortPipe } from './waygate-listing/waygate-facets/facet-sort.pipe';
import { WaygateSearchDialogComponent } from './waygate-search-dialog/waygate-search-dialog.component';
import { WaygateProductDetailsComponent } from './waygate-product-details/waygate-product-details.component';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { QuickOrderPartsComponent } from './quick-order/quick-order-parts/quick-order-parts.component';
import { QuickOrderProductsComponent } from './quick-order/quick-order-products/quick-order-products.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AddToCartModule } from '../cart';
import { WaygateRemoveDialogComponent } from './quick-order/waygate-remove-dialog/waygate-remove-dialog.component';
import { FacetFilterPipe } from './waygate-listing/facet-filter.pipe';
import { WaygateRouterDialogComponent } from './quick-order/waygate-router-dialog/waygate-router-dialog.component';
import { WaygateMenuSecondaryComponent } from './waygate-menu-secondary/waygate-menu-secondary.component';
import { WaygateNavBarComponent } from './waygate-header/waygate-nav-bar/waygate-nav-bar.component';
import { WaygateAddToCartComponent } from './waygate-add-to-cart/waygate-add-to-cart.component';
import { WaygateCheckoutModalComponent } from './waygate-add-to-cart/waygate-checkout-modal/waygate-checkout-modal.component';
import { WaygateDatePicker } from './waygate-date-picker/waygate-date-picker.module';
import { WaygateOrdersComponent } from './waygate-orders/waygate-orders.component';
import { WaygateOrderDetailsComponent } from './waygate-orders/waygate-order-details/waygate-order-details.component';
import { WaygateCustomerAccountModule } from './waygate-customer-account/waygate-customer-account.module';
import { WaygateUserDetailsComponent } from './waygate-user-details/waygate-user-details.component';
import { WaygateCartCheckoutComponent } from './waygate-checkout/waygate-cart-checkout/waygate-cart-checkout.component';
import { WaygatePaymentComponent } from './waygate-checkout/waygate-cart-checkout/waygate-payment/waygate-payment.component';
import { WaygateShippingComponent } from './waygate-checkout/waygate-cart-checkout/waygate-shipping/waygate-shipping.component';
import { WaygateComplianceQuestionsComponent } from './waygate-checkout/waygate-cart-checkout/waygate-compliance-questions/waygate-compliance-questions.component';
import { WaygateNotificationsAttachmentsComponent } from './waygate-checkout/waygate-cart-checkout/waygate-notifications-attachments/waygate-notifications-attachments.component';
import { WaygateOrderSummaryComponent } from './waygate-checkout/waygate-cart-checkout/waygate-order-summary/waygate-order-summary.component';
import { WaygateEndCustomerAddressComponent } from './waygate-checkout/waygate-cart-checkout/waygate-end-customer-address/waygate-end-customer-address.component';
import { WaygateShiptoAddressComponent } from './waygate-checkout/waygate-cart-checkout/waygate-shipto-address/waygate-shipto-address.component';
import { WaygateSoldtoAddressComponent } from './waygate-checkout/waygate-cart-checkout/waygate-soldto-address/waygate-soldto-address.component';
import { WaygateAddressModalComponent } from './waygate-checkout/waygate-cart-checkout/waygate-address-modal/waygate-address-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { WaygateOrderConfirmationComponent } from './waygate-checkout/waygate-cart-checkout/waygate-order-confirmation/waygate-order-confirmation.component';
import { WaygateOrderProductComponent } from './waygate-orders/waygate-order-details/waygate-order-product/waygate-order-product.component';
import { WaygateCartDetailComponent } from './waygate-cart/waygate-cart-detail/waygate-cart-detail.component';
import { WaygateCartActionComponent } from './waygate-cart/waygate-cart-shared/waygate-cart-action/waygate-cart-action.component';
import { WaygateCartItemListComponent } from './waygate-cart/waygate-cart-shared/waygate-cart-item-list/waygate-cart-item-list.component';
import { CartDeleteDilogComponent } from '../cart/cart-shared/cart-delete-dilog/cart-delete-dilog.component';
import { SaveCartModelComponent } from '../cart/cart-shared/save-cart-model/save-cart-model.component';
import { WaygateCartOrderSummaryComponent } from './waygate-cart/waygate-cart-shared/waygate-cart-order-summary/waygate-cart-order-summary.component';
import { WaygateCartItemComponent } from './waygate-cart/waygate-cart-shared/waygate-cart-item/waygate-cart-item.component';
import { WaygateManageAccountComponent } from './waygate-manage-account/waygate-manage-account.component';
import { WaygateProfileComponent } from './waygate-manage-account/waygate-profile/waygate-profile.component';
import { WaygateCustomerAccountComponent } from './waygate-manage-account/waygate-customer-account/waygate-customer-account.component';
import { OrderSettingsComponent } from './waygate-manage-account/order-settings/order-settings.component';
import { WaygateNotificationEmailComponent } from './waygate-manage-account/waygate-notification-email/waygate-notification-email.component';
import { WaygateViewCartComponent } from './waygate-view-cart/waygate-view-cart.component';
import { WaygateViewCartDetailsComponent } from './waygate-view-cart-details/waygate-view-cart-details.component';
import { WaygateMyFavouritesComponent } from './waygate-my-favourites/waygate-my-favourites.component';
import { WaygateTrackOrderComponent } from './waygate-track-order/waygate-track-order.component';
import { WaygateCalibrationDataComponent } from './waygate-calibration-data/waygate-calibration-data.component';
import { GuestUserOrderDetailsComponent } from './waygate-track-order/guest-user-order-details/guest-user-order-details.component';
import { ConfigureProductModule } from './waygate-product-details/configure-product/configure-product.module';
import { ChooseBrandComponent } from '../choose-brand/choose-brand.component';
import { ChooseBrandListComponent } from './choose-brand-list/choose-brand-list.component';
import { ConfiguratorOverviewModalComponent } from './waygate-cart/waygate-cart-shared/waygate-cart-item/configurator-overview-modal/configurator-overview-modal.component';
// import { WaygateNotificationSliderComponent } from './waygate-header/waygate-notification-slider/waygate-notification-slider.component';
import { WaygateNotificationSliderComponent } from './waygate-header/waygate-notification-slider/waygate-notification-slider.component';
import { RegistrationModule } from '../waygate-tech-landing/registration/registration.module';
import { WayagteProductTypeFacetComponent } from './waygate-listing/waygate-facets/waygate-facet/wayagte-product-type-facet/wayagte-product-type-facet.component';
import { WaygateContactusComponent } from './waygate-contactus/waygate-contactus.component';
import { WaygateCompleteOrderComponent } from './waygate-cart/waygate-cart-shared/waygate-complete-order/waygate-complete-order.component';
import { PanametricsCalibrationDataComponent } from './waygate-calibration-data/panametrics-calibration-data/panametrics-calibration-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApprovalCriteriaModalComponent } from './dashboard/approval-criteria-modal/approval-criteria-modal.component';
import { DruckCalibrationComponent } from './waygate-calibration-data/druck-calibration/druck-calibration.component';
import { ProductConfigurationModule } from './product-configurator/product-configuration.module';
import { ConfiguratorPriceSummaryModule } from './waygate-product-details/configurator-price-summary/configurator-price-summary.module';
import { RequestDetailComponent } from './dashboard/request-detail/request-detail.component';
import { RejectModalComponent } from './dashboard/reject-modal/reject-modal.component';
import { DS_DIALOG } from '../../core/dialog/dialog.config';
import { DateRangePickerModule } from '../../shared/components/date-range-picker/date-range-picker.module';
import { QuantityCounterModule } from '../../shared/components/quantity-counter';
import { DsRecaptchaModule } from '../../shared/components/recaptcha/recaptcha.module';
import { ClickOutsideDirectiveModule } from '../../shared/directives/click-outside.directive';
import { RmaPipesModule } from '../../shared/pipes/rma-pipes/rma-pipes.module';
import { DatePickerModule } from '../../shared/components/date-picker/date-picker.module';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';
import { RelatedProdsComponent } from './related-prods/related-prods.component';
import { ManageUserRoleComponent } from './manage-user-role/manage-user-role.component';
import { WaygateHamburgerSliderComponent } from './waygate-header/waygate-hamburger-slider/waygate-hamburger-slider.component';
import { QuickLinkComponent } from './quick-link/quick-link.component';
import { QuoteCartComponent } from './quote-cart/quote-cart.component';
import { QuoteCartActionsComponent } from './quote-cart/components/quote-cart-actions/quote-cart-actions.component';
import { QuoteCartSummaryComponent } from './quote-cart/components/quote-cart-summary/quote-cart-summary.component';
import { QuoteCartItemListComponent } from './quote-cart/components/quote-cart-item-list/quote-cart-item-list.component';
import { QuoteCartItemComponent } from './quote-cart/components/quote-cart-item/quote-cart-item.component';
import { CustomQuantityCounterModule } from '../../shared/components/custom-quantity-counter/custom-quantity-counter.module';
import { SearchCustomerAccountComponent } from './manage-user-role/search-customer-account/search-customer-account.component';
import { ItcTradeModalComponent } from './waygate-checkout/waygate-cart-checkout/itc-trade-modal/itc-trade-modal.component';
import { WaygateListingFilterSortComponent } from './waygate-listing/waygate-listing-filter-sort/waygate-listing-filter-sort.component';
import { WaygateRmaListingComponent } from './waygate-returns/waygate-rma-listing/waygate-rma-listing.component';
import { WaygateRmaDetailsComponent } from './waygate-returns/waygate-rma-details/waygate-rma-details.component';
import { WaygateRmaProductComponent } from './waygate-returns/waygate-rma-details/waygate-rma-product/waygate-rma-product.component';
import { QuoteConfirmationComponent } from './quote-confirmation/quote-confirmation.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { QuoteDetailsComponent } from './my-quotes/quote-details/quote-details/quote-details.component';
import { WaygateDummyProductComponent } from './waygate-dummy-product/waygate-dummy-product.component';
import { WaygateQuoteRouterDialogComponent } from './waygate-checkout/waygate-confirm-navigation-modal/waygate-quote-router-dialog/waygate-quote-router-dialog.component';
import { WaygateCreateRmaContainerComponent } from './waygate-returns/waygate-create-rma/waygate-create-rma-container/waygate-create-rma-container.component';
import { WaygateRmaProductSearchComponent } from './waygate-returns/waygate-create-rma/waygate-rma-product-search/waygate-rma-product-search.component';
import { WaygateRmaOverviewDailogComponent } from './waygate-returns/waygate-create-rma/waygate-rma-overview-dailog/waygate-rma-overview-dailog.component';
import { WaygateRmaFindSimilarDailogComponent } from './waygate-returns/waygate-create-rma/waygate-rma-find-similar-dailog/waygate-rma-find-similar-dailog.component';
import { UploadEucFormComponent } from './waygate-checkout/waygate-cart-checkout/upload-euc-form/upload-euc-form.component';
import { WaygateReturnOfferingComponent } from './waygate-returns/waygate-create-rma/waygate-return-offering/waygate-return-offering.component';
import { WaygateRmaDocumentationComponent } from './waygate-returns/waygate-create-rma/waygate-rma-documentation/waygate-rma-documentation.component';
import { OfferingsrPipe } from '../../shared/pipes/rma-pipes/repair.pipe';
import { RmaCheckoutConfirmationComponent } from './waygate-checkout/waygate-cart-checkout/rma-checkout-confirmation/rma-checkout-confirmation.component';
import { ReturnsCartComponent } from './returns-cart/returns-cart.component';
import { ReturnSummaryComponentComponent } from './returns-cart/return-summary-component/return-summary-component.component';
import { ReturnsCartItemListComponent } from './returns-cart/returns-cart-item-list/returns-cart-item-list.component';
import { ReturnsCartItemComponent } from './returns-cart/returns-cart-item/returns-cart-item.component';
import { ReturnCartAccessoryComponent } from './returns-cart/return-cart-accessory/return-cart-accessory.component';
import { ReturnsCartDeleteDialogComponent } from './returns-cart/returns-cart-delete-dialog/returns-cart-delete-dialog/returns-cart-delete-dialog.component';
import { ReturnsHazardousFormComponent } from './returns-cart/returns-hazardous-form/returns-hazardous-form/returns-hazardous-form.component';
import { TariffComponent } from './tariff/tariff.component';
import { WaygateDisclaimerBannerMessageComponent } from './waygate-cart/waygate-disclaimer-banner-message/waygate-disclaimer-banner-message.component';

import { MyInvoicesComponent } from './my-invoices/my-invoices.component';
import { InvoicesCheckoutComponent } from './my-invoices/invoices-checkout/invoices-checkout.component';
import { WaygateDuplicateEcaModalComponent } from './waygate-checkout/waygate-cart-checkout/waygate-duplicate-eca-modal/waygate-duplicate-eca-modal.component';
import { WaygateQuickOrderAddressComponent } from './quick-order/waygate-quick-order-adress/waygate-quick-order-address.component';
import { SharedModule } from '../../shared';
import { EcaEcaMissingDialogComponentComponent } from './eca-eca-missing-dialog-component/eca-eca-missing-dialog-component.component';
import { WaygateCartTypeConflictDialogComponent } from './waygate-carttype-conflict-dialog/waygate-carttype-conflict-dialog.component';
import { WaygateOutOfStockMessageComponent } from './waygate-cart/waygate-out-of-stock-message/waygate-out-of-stock-message.component';
import { WaygateDeleteAllCartsPopupComponent } from './waygate-view-cart-details/waygate-delete-all-carts-popup/waygate-delete-all-carts-popup.component';
import { WhatsNewWidgetComponent } from './whats-new-widget/whats-new-widget.component';
import { WaygateHelpResourcesComponent } from '../waygate-help-resources/waygate-help-resources.component';
import { WhatsNewDialogComponent } from './whats-new-dialog/whats-new-dialog.component';

@NgModule({
  declarations: [
    WaygateLandingComponent,
    TrackPoStatusComponent,
    ImageSliderComponent,
    ShopCategoryComponent,
    WaygateTechHqComponent,
    NewArrivalsComponent,
    FeaturedProdsComponent,
    BestSellersComponent,
    WaygateHeaderComponent,
    WaygateFooterComponent,
    WaygateMenuComponent,
    SelectedCategoryPipe,
    WayagteMainStructureComponent,
    WaygateBreadcrumbsComponent,
    WaygateListingComponent,
    WaygateGridProductComponent,
    WaygateListProductComponent,
    WaygateFacetsComponent,
    WaygateFacetComponent,
    FacetSortPipe,
    WaygateSearchDialogComponent,
    WaygateProductDetailsComponent,
    QuickOrderComponent,
    QuickOrderPartsComponent,
    QuickOrderProductsComponent,
    WaygateRemoveDialogComponent,
    FacetFilterPipe,
    WaygateRouterDialogComponent,
    WaygateMenuSecondaryComponent,
    WaygateNavBarComponent,
    WaygateAddToCartComponent,
    ConfiguratorOverviewModalComponent,
    WaygateCheckoutModalComponent,
    WaygateOrdersComponent,
    WaygateOrderDetailsComponent,
    WaygateUserDetailsComponent,
    WaygateCartCheckoutComponent,
    WaygatePaymentComponent,
    WaygateShippingComponent,
    WaygateComplianceQuestionsComponent,
    WaygateNotificationsAttachmentsComponent,
    WaygateOrderSummaryComponent,
    WaygateEndCustomerAddressComponent,
    WaygateShiptoAddressComponent,
    WaygateSoldtoAddressComponent,
    WaygateAddressModalComponent,
    WaygateOrderConfirmationComponent,
    WaygateOrderProductComponent,
    WaygateCartOrderSummaryComponent,
    WaygateCartItemComponent,
    WaygateCartDetailComponent,
    WaygateCartActionComponent,
    WaygateCartItemListComponent,
    WaygateManageAccountComponent,
    WaygateProfileComponent,
    WaygateCustomerAccountComponent,
    OrderSettingsComponent,
    WaygateNotificationEmailComponent,
    WaygateViewCartComponent,
    WaygateViewCartDetailsComponent,
    WaygateMyFavouritesComponent,
    WaygateTrackOrderComponent,
    WaygateCalibrationDataComponent,
    WaygateNotificationSliderComponent,
    GuestUserOrderDetailsComponent,
    // WaygateRegistrationComponent,
    ChooseBrandComponent,
    ChooseBrandListComponent,
    WayagteProductTypeFacetComponent,
    DashboardComponent,
    RequestDetailComponent,
    RejectModalComponent,
    WaygateContactusComponent,
    WaygateCompleteOrderComponent,
    ApprovalCriteriaModalComponent,
    PanametricsCalibrationDataComponent,
    DruckCalibrationComponent,
    RelatedProdsComponent,
    ManageUserRoleComponent,
    WaygateHamburgerSliderComponent,
    QuickLinkComponent,
    QuoteCartComponent,
    QuoteCartActionsComponent,
    QuoteCartSummaryComponent,
    QuoteCartItemListComponent,
    QuoteCartItemComponent,
    SearchCustomerAccountComponent,
    ItcTradeModalComponent,
    WaygateListingFilterSortComponent,
    WaygateRmaListingComponent,
    WaygateRmaDetailsComponent,
    WaygateRmaProductComponent,
    QuoteConfirmationComponent,
    MyQuotesComponent,
    QuoteDetailsComponent,
    WaygateQuoteRouterDialogComponent,
    WaygateCreateRmaContainerComponent,
    WaygateRmaProductSearchComponent,
    WaygateRmaOverviewDailogComponent,
    WaygateRmaFindSimilarDailogComponent,
    UploadEucFormComponent,
    WaygateDummyProductComponent,
    WaygateQuoteRouterDialogComponent,
    UploadEucFormComponent,
    WaygateReturnOfferingComponent,
    WaygateRmaDocumentationComponent,
    OfferingsrPipe,
    RmaCheckoutConfirmationComponent,
    ReturnsCartComponent,
    ReturnSummaryComponentComponent,
    ReturnsCartItemListComponent,
    ReturnsCartItemComponent,
    ReturnCartAccessoryComponent,
    ReturnsCartDeleteDialogComponent,
    ReturnsHazardousFormComponent,
    TariffComponent,
    WaygateDisclaimerBannerMessageComponent,
    MyInvoicesComponent,
    WaygateOutOfStockMessageComponent,
    InvoicesCheckoutComponent,
    WaygateDuplicateEcaModalComponent,
    EcaEcaMissingDialogComponentComponent,
    WaygateCartTypeConflictDialogComponent,
    WaygateQuickOrderAddressComponent,
    WaygateDeleteAllCartsPopupComponent,
    WhatsNewWidgetComponent,
    WaygateHelpResourcesComponent,
    WhatsNewDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MediaModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    I18nModule,
    MatTabsModule,
    PageLayoutModule,
    OutletModule,
    SearchboxModule,
    MiniCartModule,
    RouterModule,
    ClickOutsideDirectiveModule,
    RmaPipesModule,
    FileUploadModule,
    // SiteLoginModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    LandingPagesModule,
    InfiniteScrollModule,
    SpinnerModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTooltipModule,
    AddToCartModule,
    ConfigureProductModule,
    QuantityCounterModule,
    WaygateDatePicker,
    DatePickerModule,
    DateRangePickerModule,
    WaygateCustomerAccountModule,
    NgSelectModule,
    // searchFilterPipeModule,
    WaygateCustomerAccountModule,
    DsRecaptchaModule,
    UrlModule,
    RegistrationModule,
    ProductConfigurationModule,
    ConfiguratorPriceSummaryModule,
    CustomQuantityCounterModule,
    SharedModule,
  ],
  providers: [
    provideDefaultConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: [
            'waygate',
            'navigation-menu',
            'waygate-registration',
            'quickOrder',
            'track-order',
            'waygate-order',
            'customer-account',
          ],
          cart: [
            'cartDetails',
            'cartItems',
            'orderCost',
            'voucher',
            'saveForLaterItems',
            'clearCart',
            'validation',
          ],
          ecacomponents: [
            'duplicateEca',
            'waygateQuickOrderAddress',
            'cartConflictDialog',
            'ecaMissingDialog',
          ],
        },
      },
    }),
    provideConfig({
      launch: {
        [DS_DIALOG.WAYGATE_SEARCH]: {
          inlineRoot: true,
          component: WaygateSearchDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.REMOVE_PRODUCTS]: {
          inlineRoot: true,
          component: WaygateRemoveDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.QUICK_ORDER_ROUTE_GAURD]: {
          inlineRoot: true,
          component: WaygateRouterDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.QUOTE_CONVERT_ROUTE_GUARD]: {
          inlineRoot: true,
          component: WaygateQuoteRouterDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CONFIGURATOR_OVERVIEW_MODAL]: {
          inlineRoot: true,
          component: ConfiguratorOverviewModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.WAYGATE_PDP_MODAL]: {
          inlineRoot: true,
          component: WaygateCheckoutModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CART_DELETE_DIALOG]: {
          inlineRoot: true,

          component: CartDeleteDilogComponent,

          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.SAVE_CART_DIALOG]: {
          inlineRoot: true,
          component: SaveCartModelComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.WAYGATE_ADDRESS_DIALOG]: {
          inlineRoot: true,
          component: WaygateAddressModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CSR_REQUEST_REJECT_ACTION]: {
          inlineRoot: true,
          component: RejectModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CSR_APPROVAL_CRITERIA_LIST]: {
          inlineRoot: true,
          component: ApprovalCriteriaModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.COMPLETE_ORDER]: {
          inlineRoot: true,
          component: WaygateCompleteOrderComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.HAZARDOUS_FORM]: {
          inlineRoot: true,
          component: ReturnsHazardousFormComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.RETURNS_CART_DELETE_DIALOG]: {
          inlineRoot: true,
          component: ReturnsCartDeleteDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.COMMON_DISCLAIMER_MESSAGE]: {
          inlineRoot: true,
          component: WaygateDisclaimerBannerMessageComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.WAYGATE_DUPLICATE_ECA_DIALOG]: {
          inlineRoot: true,
          component: WaygateDuplicateEcaModalComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.ECA_MISSING_DIALOG]: {
          inlineRoot: true,
          component: EcaEcaMissingDialogComponentComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.CART_TYPE_CONFLICT_DIALOG]: {
          inlineRoot: true,
          component: WaygateCartTypeConflictDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.OUT_OF_STOCK_MESSAGE]: {
          inlineRoot: true,
          component: WaygateOutOfStockMessageComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.DELETE_ALL_CARTS_DIALOG]: {
          inlineRoot: true,
          component: WaygateDeleteAllCartsPopupComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.WHATS_NEW_DIALOG]: {
          inlineRoot: true,
          component: WhatsNewDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
    provideConfig(<Config>{
      productConfigurator: {
        // addRetractOption: true,
        updateDebounceTime: {
          input: 3000,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [WaygateNavBarComponent],
})
export class WaygateTechModule {}
