import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [FooterNavigationComponent],
  imports: [
    CommonModule,
    I18nModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FooterNavigationComponent: {
          component: FooterNavigationComponent,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class FooterModule {}
