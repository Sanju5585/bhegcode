import { OccConfig, ProductScope } from '@spartacus/core';
import { ConfiguratorProductScope } from '@spartacus/product-configurator/common';

export const DsOccProductConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          default:
            'users/${userId}/products/details?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType,errorCode,productAccessData',
          list: 'users/${userId}/products/details?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
          details: 'users/${userId}/products/details?fields=FULL',
          attributes: 'users/${userId}/products/details?fields=classifications',
          variants: 'users/${userId}/products/details?fields=FULL',
          price: 'users/${userId}/products/details?fields=FULL',
          stock: 'users/${userId}/products/details?fields=FULL',
          configurator: 'users/${userId}/products/details?fields=FULL',
          configuratorProductCard:
            'users/${userId}/products/details?fields=FULL',
        },
        productReviews: 'users/${userId}/products/details?fields=FULL',
        // Uncomment this when occ gets configured
        // productReferences:
        //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
        productReferences: 'users/${userId}/products/details?fields=FULL',
        /* eslint-enable */
        productSuggestions: 'users/${userId}/products/suggestions',
        productSearch:
          'users/${userId}/products/search?fields=products(code,description,url,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions,categories(FULL),productAccessData,hasAccessories,hybrisStatus,isAnonymousBuy,isAnonymousQuote,isEngineeringHold,materialStatus,obsoleteProductStatus),facets,breadcrumbs,pagination(FULL),sorts(DEFAULT),freeTextSearch,currentQuery',
      },
    },
    loadingScopes: {
      product: {
        list: {
          include: [ConfiguratorProductScope.CONFIGURATOR],
        },
        details: {
          include: [ProductScope.LIST, ProductScope.VARIANTS],
        },
      },
    },
  },
};
