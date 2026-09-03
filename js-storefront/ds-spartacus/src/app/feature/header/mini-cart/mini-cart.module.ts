import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { CustomerAccountComponentModule } from '../customer-account/customer-account.module';
import { MiniCartDetailsComponent } from './mini-cart-detail/mini-cart-details/mini-cart-details.component';
import { MiniCartComponent } from './mini-cart.component';
import { SpinnerModule } from '@spartacus/storefront';
import { SpinnerOverlayModule } from '../../../shared/components/spinner-overlay/spinner-overlay.module';
import { ClickOutsideDirectiveModule } from '../../../shared/directives/click-outside.directive';
import { RmaPipesModule } from '../../../shared/pipes/rma-pipes/rma-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    I18nModule,
    CustomerAccountComponentModule,
    MediaModule,
    ClickOutsideDirectiveModule,
    RmaPipesModule,
    SpinnerModule,
    SpinnerOverlayModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['mini-cart'],
        },
      },
    }),
  ],
  providers: [
    provideConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: MiniCartComponent,
        },
      },
    } as CmsConfig),
  ],
  declarations: [MiniCartComponent, MiniCartDetailsComponent],
  exports: [MiniCartComponent, MiniCartDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MiniCartModule {}
