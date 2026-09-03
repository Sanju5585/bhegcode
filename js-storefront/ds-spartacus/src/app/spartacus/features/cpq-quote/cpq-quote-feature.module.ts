import { NgModule } from '@angular/core';
import { I18nConfig, provideConfig } from '@spartacus/core';
import {
  cpqquoteTranslationChunksConfig,
  cpqquoteTranslations,
} from '@spartacus/cpq-quote/assets';
import { CpqQuoteRootModule } from '@spartacus/cpq-quote/root';

@NgModule({
  declarations: [],
  imports: [CpqQuoteRootModule],
  providers: [
    provideConfig(<I18nConfig>{
      i18n: {
        resources: cpqquoteTranslations,
        chunks: cpqquoteTranslationChunksConfig,
      },
    }),
  ],
})
export class CpqQuoteFeatureModule {}
