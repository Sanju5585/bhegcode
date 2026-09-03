package com.bhge.sap.orderfulfilment.sapcpiorderexchange.service;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.sap.productconfig.cpiorderexchange.ConfigurationOrderEntryMapper;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSCommerceExternalConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSFlatListContainer;

public interface BHGEVCCPSConfigurationOrderEntryMapper extends ConfigurationOrderEntryMapper {

	CPSCommerceExternalConfiguration getCPSExternalConfigByExternalConfiguration(String externalConfiguration);

	CPSFlatListContainer getCPSFlatListContainer(CPSCommerceExternalConfiguration externalCommerceConfiguration);

}
