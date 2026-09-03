import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18NEXT_HTTP_BACKEND_CLIENT,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
  WindowRef,
} from '@spartacus/core';
import { defaultB2bOccConfig } from '@spartacus/setup';

import { defaultCmsContentProviders, mediaConfig } from '@spartacus/storefront';
import { CustomLayoutModule } from '../core/layout/layout.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [CustomLayoutModule],
  providers: [
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(defaultB2bOccConfig),
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          prefix: '/occ/v2/',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        baseSite: [environment.occBaseSite],
        currency: ['USD'],
        language: ['en', 'de', 'es', 'fr', 'pt', 'ru', 'ja', 'zh', 'ko'],
      },
    }),
    {
      provide: I18NEXT_HTTP_BACKEND_CLIENT,
      useFactory: (win: WindowRef) => {
        return (_options, url, _payload, callback) => {
          const origin = win.location?.origin || '';
          const resolved = /^https?:\/\//i.test(url)
            ? url
            : `${origin}${url.startsWith('/') ? url : '/' + url}`;
          fetch(resolved)
            .then(async (res) => {
              callback(null, {
                status: res.status,
                data: await res.text(),
              });
            })
            .catch((error) => callback(error, { status: 0, data: null }));
        };
      },
      deps: [WindowRef],
    },
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
        backend: {
          loadPath: '/assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '2211.36',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
