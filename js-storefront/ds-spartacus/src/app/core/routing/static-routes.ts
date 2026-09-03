import { Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { CalibrationDataComponent } from '../../feature/calibration-data/calibration-data.component';
import {
  CartDetailsComponent,
  CartNotEmptyGuard,
  OrderSummaryComponent,
} from '../../feature/cart';
import { CheckoutComponent } from '../../feature/checkout/checkout/checkout.component';
import { ChooseBrandComponent } from '../../feature/choose-brand/choose-brand.component';
import { ContactUsComponent } from '../../feature/contact-us/contact-us.component';
import { FeedbackComponent } from '../../feature/feedback/feedback/feedback.component';
import { LandingPagesComponent } from '../../feature/landing/landing-pages.component';
import { PartWithErrorComponent } from '../../feature/landing/loggedin-home/part-with-error/part-with-error.component';
import { MyFavoritesComponent } from '../../feature/my-favorites/my-favorites.component';
import { DetailedNotificationPageComponent } from '../../feature/notifications/detailed-notification-page/detailed-notification-page.component';
import { OrderTrackingDetailComponent } from '../../feature/order-tracking/order-tracking-detail/order-tracking-detail.component';
import { OrderTrackingListComponent } from '../../feature/order-tracking/order-tracking-list/order-tracking-list.component';
import { GuestQuoteCartComponent } from '../../feature/quote/guest-quote-cart/guest-quote-cart.component';
import { GuestQuoteCheckoutComponent } from '../../feature/quote/guest-quote-checkout/guest-quote-checkout.component';
import { HazardInfoContainerComponent } from '../../feature/rma/hazard-info/hazard-info-container/hazard-info-container.component';
import { RmaCartContainerComponent } from '../../feature/rma/rma-cart/rma-cart-container/rma-cart-container.component';
import { RmaCheckoutdetailsComponent } from '../../feature/rma/rma-checkout/rma-checkoutdetails/rma-checkoutdetails.component';
import { RmaConfirmationComponent } from '../../feature/rma/rma-checkout/rma-confirmation/rma-confirmation.component';
import { RmaFormContainerComponent } from '../../feature/rma/rma-form/rma-form-container/rma-form-container.component';
import { RmaStatusComponent } from '../../feature/rma/rma-status/rma-status/rma-status.component';
import { RmaTrackingDetailComponent } from '../../feature/rma/rma-tracking/rma-detail/rma-tracking-detail/rma-tracking-detail.component';
import { RmaListingComponent } from '../../feature/rma/rma-tracking/rma-listing/rma-listing.component';
import { SampleComponent } from '../../feature/sample/sample.component';
import { ViewCartDetailComponent } from '../../feature/saved-cart/view-cart-detail/view-cart-detail.component';
import { ViewCartComponent } from '../../feature/saved-cart/view-cart/view-cart.component';
import { AddEquipmentToWatchlistComponent } from '../../feature/site-equipments/add-equipment-to-watchlist/add-equipment-to-watchlist.component';
import { EquipmentDetailsComponent } from '../../feature/site-equipments/equipment-details/equipment-details.component';
import { MyEquipmentsComponent } from '../../feature/site-equipments/my-equipments/my-equipments.component';
import { SearchPrivateFolderComponent } from '../../feature/site-equipments/search-private-folder/search-private-folder.component';
import { UpdateEquipmentDetailsComponent } from '../../feature/site-equipments/update-equipment-details/update-equipment-details.component';
import { TrainingDocsComponent } from '../../feature/training-docs/training-docs.component';
import { AccessDeniedComponent } from '../../feature/user/access-denied/access-denied.component';
import { MyProfileComponent } from '../../feature/user/my-profile/my-profile/my-profile.component';
import { ProductDeniedComponent } from '../../feature/user/product-denied/product-denied.component';
import { ReactivateComponent } from '../../feature/user/reactivate/reactivate.component';
import { SsoRedirectComponent } from '../../feature/user/sso-redirect/sso-redirect.component';
import { LoggedInHomeGuard } from '../../shared/guards/loggedIn-home.guard';
import { CustomLoginGuard } from '../../shared/guards/login.guard';
import { UserRoleGuard } from '../../shared/guards/user-role.guard';
import { DSAuthGuard } from '../auth/ds-auth.guard';
import { LinkComponent } from '../../feature/links/link/link.component';
import { ConfirmEmailComponent } from '../../feature/user/confirm-email/confirm-email.component';
import { WaygateHelpResourcesComponent } from '../../feature/waygate-help-resources/waygate-help-resources.component';

/**
 * Demonstrates static routes and CMS based routes.
 */
export const staticRoutes: Routes = [
  {
    path: 'sample-page',
    component: SampleComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard],
  },
  {
    path: 'rma-form',
    component: RmaFormContainerComponent,
    data: { pageLabel: '/rma-form' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'rma-form/hazard-info',
    component: HazardInfoContainerComponent,
    data: { pageLabel: '/rma-hazard' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'my-favorites',
    component: MyFavoritesComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'my-orders',
    component: OrderTrackingListComponent,
    data: { pageLabel: 'order-history' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'rma-tracking',
    component: RmaListingComponent,
    data: { pageLabel: 'rma-status' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'order-details/:id',
    component: OrderTrackingDetailComponent,
    data: { pageLabel: 'order-detail' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'rma-details/:id',
    component: RmaTrackingDetailComponent,
    data: { pageLabel: 'rma-details' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'cart',
    component: CartDetailsComponent,
    data: { pageLabel: '/cart' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'spa_redirect',
    component: SsoRedirectComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [DSAuthGuard, CmsPageGuard],
  },
  {
    path: 'dshome/account/reactivate/:site/:id',
    component: ReactivateComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'dshome/account/reactivate/:site/:id/:name',
    component: ReactivateComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'confirm-email/:email/:token',
    component: ConfirmEmailComponent,
    // canActivate: [CmsPageGuard],
  },
  {
    path: 'cancel/:email/:token',
    component: ConfirmEmailComponent,
    // canActivate: [CmsPageGuard],
  },
  {
    path: 'resend-email/:email',
    component: ConfirmEmailComponent,
    // canActivate: [CmsPageGuard],
  },
  /* {
    path: 'redirect_uri',
    component: SsoRedirectComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard, DSAuthGuard],
  }, */
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard],
  },
  {
    path: 'page-not-found',
    component: ProductDeniedComponent,
    data: { pageLabel: '/not-found' },
    canActivate: [CmsPageGuard],
  },
  {
    path: 'bently-nevada',
    redirectTo: 'cordant',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { pageLabel: '/cartCheckout' },
    canActivate: [CmsPageGuard, UserRoleGuard, CartNotEmptyGuard],
  },
  {
    path: 'order-summary/:id',
    component: OrderSummaryComponent,
    data: { pageLabel: '/order-confirmation' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'rma/cart',
    component: RmaCartContainerComponent,
    data: { pageLabel: '/rma-cart' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'rma/checkout',
    component: RmaCheckoutdetailsComponent,
    data: { pageLabel: '/rmaCheckout' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'saved-carts',
    component: ViewCartComponent,
    data: { pageLabel: '/saved-carts' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  // {
  //   path: 'saved-carts',
  //   component: WaygateViewCartComponent,
  //   data: { pageLabel: '/saved-carts' },
  //   canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  // },
  {
    path: 'saved-cart/details',
    component: ViewCartDetailComponent,
    data: { pageLabel: '/saved-carts-details' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'rma-confirmation/:id',
    component: RmaConfirmationComponent,
    data: { pageLabel: '/rma-confirmation' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'quick-status',
    component: RmaStatusComponent,
    data: { pageLabel: '/rma-status' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'quick-status/order/:id',
    component: OrderTrackingDetailComponent,
    data: { pageLabel: 'order-detail' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'quick-status/rma/:id',
    component: RmaTrackingDetailComponent,
    data: { pageLabel: 'rma-details' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'order-confirmation/:id',
    component: OrderSummaryComponent,
    data: { pageLabel: '/order-confirmation' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    data: { pageLabel: '/contactus' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },  
  {
    path: 'help-resources',
    component: WaygateHelpResourcesComponent,
    data: { pageLabel: '/helpResources' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'list-of-portals',
    component: LinkComponent,
    data: { pageLabel: '/listOfPortals' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    data: { pageLabel: '/contactus' },
    canActivate: [CmsPageGuard, UserRoleGuard],
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    data: { pageLabel: '/my-profile' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'quote/cart', // quote-cart
    component: GuestQuoteCartComponent, // quote-cart
    data: { pageLabel: '/quote-cart' }, // quote-cart
    canActivate: [CmsPageGuard, UserRoleGuard], // quote-cart
  },
  {
    path: 'quote/checkout', // quote-cart
    component: GuestQuoteCheckoutComponent, // quote-cart
    data: { pageLabel: '/quote-checkout' }, // quote-cart
    canActivate: [CmsPageGuard, UserRoleGuard], // quote-cart
  },
  {
    path: 'homepage',
    component: LandingPagesComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard, UserRoleGuard, LoggedInHomeGuard],
  },
  {
    path: 'home',
    component: LandingPagesComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard, UserRoleGuard, LoggedInHomeGuard],
  },
  {
    path: '',
    component: LandingPagesComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard, UserRoleGuard, LoggedInHomeGuard],
  },
  {
    path: 'bulk-order',
    component: PartWithErrorComponent,
    data: { pageLabel: '/bulk-order' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'add-equipment-to-watchlist',
    component: AddEquipmentToWatchlistComponent,
    data: { pageLabel: '/add-equipment' },
    canActivate: [CmsPageGuard, CustomLoginGuard],
  },
  /*{
    path: 'add-equipment',
    component: AddEquipmentComponent,
    data: { pageLabel: '/add-equipment' },
    canActivate: [CmsPageGuard],
  },*/
  {
    path: 'equipment-details',
    component: EquipmentDetailsComponent,
    data: { pageLabel: '/equipment-details' },
    canActivate: [CmsPageGuard, CustomLoginGuard],
  },
  {
    path: 'update-equipment-details',
    component: UpdateEquipmentDetailsComponent,
    data: { pageLabel: '/equipment-details' },
    canActivate: [CmsPageGuard],
  },
  {
    path: 'calibration-data',
    component: CalibrationDataComponent,
    data: { pageLabel: '/equipment-details' },
    canActivate: [CmsPageGuard],
  },
  {
    path: 'my-equipments',
    component: MyEquipmentsComponent,
    data: { pageLabel: '/calibration-data' },
    canActivate: [CmsPageGuard, CustomLoginGuard],
  },
  {
    path: 'detailed-notification-page',
    component: DetailedNotificationPageComponent,
    data: { pageLabel: '/calibration-data' },
    canActivate: [CmsPageGuard, CustomLoginGuard],
  },
  {
    path: 'search-private-folder',
    component: SearchPrivateFolderComponent,
    data: { pageLabel: '/private-folder-search' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
  {
    path: 'training-docs',
    component: TrainingDocsComponent,
    data: { pageLabel: '/training-document' },
    canActivate: [CmsPageGuard],
  },
  {
    path: 'choose-brand',
    component: ChooseBrandComponent,
    data: { pageLabel: '/waygateHomepage' },
    canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
  },
];
