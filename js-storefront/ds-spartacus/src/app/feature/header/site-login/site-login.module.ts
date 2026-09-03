import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { SiteLoginComponent } from './site-login.component';
import { ClickOutsideDirectiveModule } from '../../../shared/directives/click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    MediaModule,
    ClickOutsideDirectiveModule,
    ConfigModule.withConfig({
      cmsComponents: {
        LoginComponent: {
          component: SiteLoginComponent,
        },
      },
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          userData: ['siteLogin'],
        },
      },
    }),
  ],
  providers: [],
  declarations: [SiteLoginComponent],
  exports: [SiteLoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SiteLoginModule {}
