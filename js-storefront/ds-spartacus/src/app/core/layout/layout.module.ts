import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConfig } from '@spartacus/storefront';
import { ConfigModule, provideConfig } from '@spartacus/core';

export const layoutConfig: LayoutConfig = {
  layoutSlots: {
    header: {
      lg: {
        slots: [
          'SiteLogo',
          'SearchBox',
          // 'CustomerAccountSlot',
          // 'SiteContext', Commented to remove Language selector
          'MiniCart',
          'SiteLogin',
          'SiteLinks',
          'SiteRegister',
        ],
      },
      slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
    },
    navigation: {
      slots: ['NavigationBar'],
    },
    LandingPage2Template: {
      pageFold: 'Section2B',
      slots: [
        'Section1',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'Section5',
      ],
    },
    SearchResultsListPageTemplate: {
      md: {
        slots: [
          'Section2',
          'ProductLeftRefinements',
          'SearchResultsListSlot',
          // 'Section4',
        ],
      },
      xs: {
        slots: ['ProductLeftRefinements', 'SearchResultsListSlot'],
      },
    },
    // CartPageTemplate: {
    //   md: {
    //     slots: [
    //       'TopContent',
    //       // 'Section4',
    //     ],
    //   },
    //   xs: {
    //     slots: ['TopContent'],
    //   },
    // },
    ProductListPageTemplate: {
      md: {
        slots: [
          'VSCategorySlot',
          // 'Section2',
          'ProductLeftRefinements',
          'ProductListSlot',
        ],
      },
    },
    ProductGridPageTemplate: {
      slots: ['ProductLeftRefinements', 'ProductGridSlot'],
    },
    ProductDetailsPageTemplate: {
      md: {
        slots: ['Summary', 'Tabs', 'Section4'],
      },
    },
    footer: {
      slots: ['Footer'],
    },
    AccountPageTemplate: {
      slots: [],
    },
    ErrorPageTemplate: {
      slots: ['PageNotFound'],
    },
    LoginPageTemplate: {
      slots: ['LeftContentSlot'],
    },
    CartPageTemplate: {
      slots: ['TopContent'],
    },
    MultiStepCheckoutSummaryPageTemplate: {
      slots: [],
    },
    VariantConfigurationTemplate: {
      header: {
        lg: {
          slots: [
            'PreHeader',
            'VariantConfigExitButton',
            /* 'MiniCart', */
          ],
        },
        xs: {
          slots: [
            'PreHeader',
            'VariantConfigExitButton',
            /* 'MiniCart', */
          ],
        },
      },

      navigation: {
        lg: { slots: [] },
        slots: ['VariantConfigMenu'],
      },

      lg: {
        slots: [
          'VariantConfigHeader',
          'VariantConfigMenu',
          'VariantConfigContent',
          'VariantConfigBottombar',
          'VariantConfigVariantCarousel',
        ],
      },

      slots: [
        'VariantConfigHeader',
        'VariantConfigContent',
        'VariantConfigBottombar',
        'VariantConfigVariantCarousel',
      ],
    },
  },
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideConfig(layoutConfig)],
})
export class CustomLayoutModule {}
