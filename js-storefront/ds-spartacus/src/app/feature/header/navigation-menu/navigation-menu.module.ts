import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { IconModule, MediaModule, SpinnerModule } from '@spartacus/storefront';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { NavigationMenuComponent } from './navigation-menu.component';
import { WaygateTechModule } from '../../waygate-tech-landing/waygate-tech.module';
import { ClickOutsideDirectiveModule } from '../../../shared/directives/click-outside.directive';
import { NotificationsModule } from '../../notifications/notifications.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    IconModule,
    I18nModule,
    NotificationsModule,
    WaygateTechModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['navigation-menu'],
        },
      },
      cmsComponents: {
        CategoryNavigationComponent: {
          component: NavigationMenuComponent,
        },
      },
    }),
    MediaModule,
    ClickOutsideDirectiveModule,
    SpinnerModule,
  ],
  providers: [],
  declarations: [NavigationMenuComponent, CategoryMenuComponent],
  exports: [NavigationMenuComponent, CategoryMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NavigationMenuModule {}
