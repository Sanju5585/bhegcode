import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavoritesComponent } from './my-favorites.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
import {
  ListNavigationModule,
  MediaModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { AddToCartModule } from '../../feature/cart/add-to-cart/add-to-cart.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollContainerModule } from '../../shared/components/scroll-container/scroll-container.module';

@NgModule({
  declarations: [MyFavoritesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    MediaModule,
    SpinnerModule,
    ListNavigationModule,
    AddToCartModule,
    ScrollContainerModule,
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['favorites'],
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyFavoritesModule {}
