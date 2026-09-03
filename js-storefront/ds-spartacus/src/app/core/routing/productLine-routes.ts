import { Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { CartNotEmptyGuard } from '../../feature/cart';
import { AccessDeniedComponent } from '../../feature/user/access-denied/access-denied.component';
import { DashboardComponent } from '../../feature/waygate-tech-landing/dashboard/dashboard.component';
import { RegisterProgressPageComponent } from '../../feature/waygate-tech-landing/registration/register-progress-page/register-progress-page.component';
import { RegistrationComponent } from '../../feature/waygate-tech-landing/registration/registration.component';
import { WayagteMainStructureComponent } from '../../feature/waygate-tech-landing/wayagte-main-structure/wayagte-main-structure.component';
import { WaygateCalibrationDataComponent } from '../../feature/waygate-tech-landing/waygate-calibration-data/waygate-calibration-data.component';
import { WaygateCartDetailComponent } from '../../feature/waygate-tech-landing/waygate-cart/waygate-cart-detail/waygate-cart-detail.component';
import { WaygateCartCheckoutComponent } from '../../feature/waygate-tech-landing/waygate-checkout/waygate-cart-checkout/waygate-cart-checkout.component';
import { WaygateOrderConfirmationComponent } from '../../feature/waygate-tech-landing/waygate-checkout/waygate-cart-checkout/waygate-order-confirmation/waygate-order-confirmation.component';
import { WaygateContactusComponent } from '../../feature/waygate-tech-landing/waygate-contactus/waygate-contactus.component';
import { WaygateLandingComponent } from '../../feature/waygate-tech-landing/waygate-landing/waygate-landing.component';
import { WaygateListingComponent } from '../../feature/waygate-tech-landing/waygate-listing/waygate-listing.component';
import { WaygateManageAccountComponent } from '../../feature/waygate-tech-landing/waygate-manage-account/waygate-manage-account.component';
import { WaygateMyFavouritesComponent } from '../../feature/waygate-tech-landing/waygate-my-favourites/waygate-my-favourites.component';
import { WaygateOrderDetailsComponent } from '../../feature/waygate-tech-landing/waygate-orders/waygate-order-details/waygate-order-details.component';
import { WaygateOrdersComponent } from '../../feature/waygate-tech-landing/waygate-orders/waygate-orders.component';
import { WaygateProductDetailsComponent } from '../../feature/waygate-tech-landing/waygate-product-details/waygate-product-details.component';
import { GuestUserOrderDetailsComponent } from '../../feature/waygate-tech-landing/waygate-track-order/guest-user-order-details/guest-user-order-details.component';
import { WaygateTrackOrderComponent } from '../../feature/waygate-tech-landing/waygate-track-order/waygate-track-order.component';
import { WaygateViewCartDetailsComponent } from '../../feature/waygate-tech-landing/waygate-view-cart-details/waygate-view-cart-details.component';
import { WaygateViewCartComponent } from '../../feature/waygate-tech-landing/waygate-view-cart/waygate-view-cart.component';
import {
  commonCmsPageLabel,
  quickOrderCmsPageLabel,
  cartCheckoutCmsPageLabel,
  returnsCheckoutCmsPageLabel,
} from '../../shared/enums/availableProductList.enum';
import { AnonymousUserGaurd } from '../../shared/guards/anonymous-user.guard';
import { CSRAuthGuard } from '../../shared/guards/csr-auth.guard';
import { CustomLoginGuard } from '../../shared/guards/login.guard';
import { ProductLineGuard } from '../../shared/guards/product-line.guard';
import { UserRoleGuard } from '../../shared/guards/user-role.guard';
import { WaygateNavigateAwayGuard } from '../../shared/guards/waygate-navigate-away.guard';
import { QuickOrderComponent } from '../../feature/waygate-tech-landing/quick-order/quick-order.component';
import { ManageUserRoleComponent } from '../../feature/waygate-tech-landing/manage-user-role/manage-user-role.component';
import { QuoteCartComponent } from '../../feature/waygate-tech-landing/quote-cart/quote-cart.component';
import { RegistrationEmailConfirmationComponent } from '../../feature/waygate-tech-landing/registration/registration-email-confirmation/registration-email-confirmation.component';
import { WaygateRmaListingComponent } from '../../feature/waygate-tech-landing/waygate-returns/waygate-rma-listing/waygate-rma-listing.component';
import { WaygateRmaDetailsComponent } from '../../feature/waygate-tech-landing/waygate-returns/waygate-rma-details/waygate-rma-details.component';
import { QuoteConfirmationComponent } from '../../feature/waygate-tech-landing/quote-confirmation/quote-confirmation.component';
import { MyQuotesComponent } from '../../feature/waygate-tech-landing/my-quotes/my-quotes.component';
import { QuoteDetailsComponent } from '../../feature/waygate-tech-landing/my-quotes/quote-details/quote-details/quote-details.component';
import { WaygateDummyProductComponent } from '../../feature/waygate-tech-landing/waygate-dummy-product/waygate-dummy-product.component';
import { QuoteNavigateAwayGuard } from '../../shared/guards/quote-navigate-away.guard';
import { WaygateCreateRmaContainerComponent } from '../../feature/waygate-tech-landing/waygate-returns/waygate-create-rma/waygate-create-rma-container/waygate-create-rma-container.component';
import { RmaCheckoutConfirmationComponent } from '../../feature/waygate-tech-landing/waygate-checkout/waygate-cart-checkout/rma-checkout-confirmation/rma-checkout-confirmation.component';
import { ReturnsCartComponent } from '../../feature/waygate-tech-landing/returns-cart/returns-cart.component';
import { MyInvoicesComponent } from '../../feature/waygate-tech-landing/my-invoices/my-invoices.component';
import { InvoicesCheckoutComponent } from '../../feature/waygate-tech-landing/my-invoices/invoices-checkout/invoices-checkout.component';
import { OrderDetailsGuard } from '../../shared/guards/order-details.guard';
import { WaygateHelpResourcesComponent } from '../../feature/waygate-help-resources/waygate-help-resources.component';

export const productLineRoutes: Routes = [];

for (let pageLabelKey in commonCmsPageLabel) {
  const productLineRoute = {
    path: pageLabelKey,
    component: WayagteMainStructureComponent,
    data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
    canActivate: [CmsPageGuard, ProductLineGuard],
    children: [
      {
        path: '',
        component: WaygateLandingComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'categories/:cCode/:cName',
        component: WaygateListingComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'search/:searchInput',
        component: WaygateListingComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'product/:pCode/:pName',
        component: WaygateProductDetailsComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'partplaceholder/:dummyCode',
        component: WaygateDummyProductComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'quick-order',
        component: QuickOrderComponent,
        data: { pageLabel: quickOrderCmsPageLabel[pageLabelKey] },
        canActivate: [CustomLoginGuard],
        canDeactivate: [WaygateNavigateAwayGuard],
      },
      {
        path: 'track-order',
        component: WaygateTrackOrderComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'track-order/details/:orderId',
        component: GuestUserOrderDetailsComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'my-orders',
        component: WaygateOrdersComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-orders/:orderId',
        component: WaygateOrderDetailsComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [
          CmsPageGuard,
          OrderDetailsGuard,
          UserRoleGuard,
          CustomLoginGuard
        ],
      },
      {
        path: 'my-returns',
        component: WaygateRmaListingComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-returns/:orderId',
        component: WaygateRmaDetailsComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'create-rma',
        component: WaygateCreateRmaContainerComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'rma-summary/:id',
        component: RmaCheckoutConfirmationComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'cart',
        component: WaygateCartDetailComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
        canDeactivate: [QuoteNavigateAwayGuard],
      },
      {
        path: 'checkout',
        component: WaygateCartCheckoutComponent,
        data: { pageLabel: cartCheckoutCmsPageLabel[pageLabelKey] },
        canActivate: [
          CmsPageGuard,
          UserRoleGuard,
          CustomLoginGuard,
          CartNotEmptyGuard,
        ],
        canDeactivate: [QuoteNavigateAwayGuard],
      },
      {
        path: 'returns/checkout',
        component: WaygateCartCheckoutComponent,
        data: { pageLabel: returnsCheckoutCmsPageLabel[pageLabelKey] },
        canActivate: [
          CmsPageGuard,
          UserRoleGuard,
          CustomLoginGuard,
          CartNotEmptyGuard,
        ],
        canDeactivate: [QuoteNavigateAwayGuard],
      },
      {
        path: 'order-summary/:id',
        component: WaygateOrderConfirmationComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'manage-account',
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
        component: WaygateManageAccountComponent,
      },
      {
        path: 'saved-carts',
        component: WaygateViewCartComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'saved-carts/:cartId',
        component: WaygateViewCartDetailsComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-favorites',
        component: WaygateMyFavouritesComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'calibration-data',
        component: WaygateCalibrationDataComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard],
      },
      {
        path: 'register',
        component: RegistrationComponent,
        // data: {pageLabel: '/waygateHomepage'},
        canActivate: [AnonymousUserGaurd],
      },
      {
        path: 'register/progress-page',
        component: RegisterProgressPageComponent,
        canActivate: [AnonymousUserGaurd],
      },
      {
        path: 'register/emailConfirmation',
        component: RegistrationEmailConfirmationComponent,
        canActivate: [AnonymousUserGaurd],
      },
      {
        path: 'register/cancel',
        component: RegistrationEmailConfirmationComponent,
        canActivate: [AnonymousUserGaurd],
      },
      {
        path: 'register/resendEmail',
        component: RegistrationEmailConfirmationComponent,
        canActivate: [AnonymousUserGaurd],
      },
      {
        path: 'contactus',
        component: WaygateContactusComponent,
        // canActivate: [AnonymousUserGaurd],
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'feedback',
        component: WaygateContactusComponent,
        // canActivate: [AnonymousUserGaurd],
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { pageLabel: '/waygateHomepage' },
        canActivate: [
          CmsPageGuard,
          UserRoleGuard,
          CustomLoginGuard,
          CSRAuthGuard,
        ],
      },
      {
        path: 'manageuser',
        component: ManageUserRoleComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [
          CmsPageGuard,
          UserRoleGuard,
          CustomLoginGuard,
          CSRAuthGuard,
        ],
      },
      {
        path: 'returns/cart',
        component: ReturnsCartComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'quote/cart',
        component: QuoteCartComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'quote-confirmation/:id',
        component: QuoteConfirmationComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-quotes',
        component: MyQuotesComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-quotes/:quoteId',
        component: QuoteDetailsComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-invoices',
        component: MyInvoicesComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-invoices/success',
        component: MyInvoicesComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'my-invoices/checkout',
        component: InvoicesCheckoutComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
        canActivate: [CmsPageGuard, UserRoleGuard, CustomLoginGuard],
      },
      {
        path: 'access-denied',
        component: AccessDeniedComponent,
        data: { pageLabel: '/waygateHomepage' },
        canActivate: [CmsPageGuard],
      },
      {
        path: 'help-resources',
        component: WaygateHelpResourcesComponent,
        data: { pageLabel: commonCmsPageLabel[pageLabelKey] },
      },
    ],
  };
  productLineRoutes.push(productLineRoute);
}
