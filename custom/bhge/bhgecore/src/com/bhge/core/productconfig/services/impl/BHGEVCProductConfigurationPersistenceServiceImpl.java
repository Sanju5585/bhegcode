package com.bhge.core.productconfig.services.impl;



import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.sap.productconfig.services.impl.ProductConfigurationPersistenceServiceImpl;
import de.hybris.platform.sap.productconfig.services.model.ProductConfigurationModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BHGEVCProductConfigurationPersistenceServiceImpl extends ProductConfigurationPersistenceServiceImpl {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCProductConfigurationPersistenceServiceImpl.class);
	
	@Override
	public AbstractOrderEntryModel getOrderEntryByConfigId(final String configId, final boolean isDraft) {
		final ProductConfigurationModel productConfigurationModel = getProductConfigByConfigId(configId);
		LOG.info("Inside BHGEVCProductConfigurationPersistenceServiceImpl -- productConfigurationModel found {} for configId {} ", productConfigurationModel, configId);
		if (productConfigurationModel == null)
		{
			return null;
		}
		AbstractOrderEntryModel entryModel = getAbstractOrderEntryByConfigPk(productConfigurationModel.getPk().toString(), isDraft);
		LOG.info("Inside BHGEVCProductConfigurationPersistenceServiceImpl -- entry model {} found for configId {} ", entryModel, configId);
		return entryModel;

	}

}
