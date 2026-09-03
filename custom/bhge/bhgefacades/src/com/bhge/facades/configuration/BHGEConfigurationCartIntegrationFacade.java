package com.bhge.facades.configuration;

import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryWsDTO;

public interface BHGEConfigurationCartIntegrationFacade {
	
	CartModificationData addVCConfigurationToCart(final ProductConfigOrderEntryWsDTO entry, final String mediaPK) throws CommerceCartModificationException;

	CartModificationData updateProductConfigurationInCart(final String productCode, final String configId, final String mediaPK);

}
