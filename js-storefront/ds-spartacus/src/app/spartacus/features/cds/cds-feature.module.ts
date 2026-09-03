import { NgModule } from '@angular/core';
import { CdsConfig, CdsModule } from '@spartacus/cds';
import {
  cdsTranslationChunksConfig,
  cdsTranslations,
} from '@spartacus/cds/assets';
import { I18nConfig, provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [CdsModule.forRoot()],
  providers: [
    provideConfig(<I18nConfig>{
      i18n: {
        resources: cdsTranslations,
        chunks: cdsTranslationChunksConfig,
      },
    }),
    provideConfig(<CdsConfig>{
      cds: {
        tenant: 'TENANT_PLACEHOLDER',
        baseUrl: 'https://localhost:9002',
        endpoints: {
          strategyProducts:
            '/strategy/${tenant}/strategies/${strategyId}/products',
        },
        merchandising: {
          defaultCarouselViewportThreshold: 80,
        },
        profileTag: {
          allowInsecureCookies: true,
        },
      },
    }),
  ],
})
export class CdsFeatureModule {}
