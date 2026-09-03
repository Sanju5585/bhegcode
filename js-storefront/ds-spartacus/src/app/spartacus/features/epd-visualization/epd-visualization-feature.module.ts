import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import {
  epdVisualizationTranslationChunksConfig,
  epdVisualizationTranslations,
} from '@spartacus/epd-visualization/assets';
import {
  EPD_VISUALIZATION_FEATURE,
  EpdVisualizationConfig,
  EpdVisualizationRootModule,
} from '@spartacus/epd-visualization/root';
import { environment } from '../../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [EpdVisualizationRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [EPD_VISUALIZATION_FEATURE]: {
          module: () =>
            import('@spartacus/epd-visualization').then(
              (m) => m.EpdVisualizationModule
            ),
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: epdVisualizationTranslations,
        chunks: epdVisualizationTranslationChunksConfig,
      },
    }),
    provideConfig(<EpdVisualizationConfig>{
      epdVisualization: {
        ui5: {
          bootstrapUrl: 'https://ui5.sap.com/1.108/resources/sap-ui-core.js',
        },

        apis: {
          baseUrl: environment.occBaseUrl || 'http://localhost:4200',
        },
      },
    }),
  ],
})
export class EpdVisualizationFeatureModule {}
