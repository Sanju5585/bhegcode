package com.bhge.facades.productconfig.populator;

import de.hybris.platform.commercefacades.order.data.CartRestorationData;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartRestoration;
import de.hybris.platform.sap.productconfig.services.populators.ConfigurationProductInfoModelPopulator;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.sap.productconfig.facades.populator.ConfigurationCartRestorationPopulator;

import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;
import de.hybris.platform.sap.productconfig.services.impl.CPQConfigurableChecker;
import de.hybris.platform.sap.productconfig.services.intf.ProductConfigurationOrderIntegrationService;
import de.hybris.platform.sap.productconfig.services.strategies.lifecycle.intf.ConfigurationAbstractOrderIntegrationStrategy;
import de.hybris.platform.servicelayer.model.ModelService;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import java.beans.ConstructorProperties;

public class BHGEConfigurationCartRestorationPopulator extends ConfigurationCartRestorationPopulator implements Populator<CommerceCartRestoration, CartRestorationData> {

    private static final Logger LOG = Logger.getLogger(BHGEConfigurationCartRestorationPopulator.class);


    @ConstructorProperties({
            "configurationAbstractOrderIntegrationStrategy", "cpqConfigurableChecker", "configurationProductInfoModelPopulator", "configurationPricingOrderIntegrationService", "modelService"
    })
    public BHGEConfigurationCartRestorationPopulator(ConfigurationAbstractOrderIntegrationStrategy configurationAbstractOrderIntegrationStrategy, CPQConfigurableChecker cpqConfigurableChecker, ConfigurationProductInfoModelPopulator configurationProductInfoModelPopulator, ProductConfigurationOrderIntegrationService configurationPricingOrderIntegrationService, ModelService modelService) {
        super(configurationAbstractOrderIntegrationStrategy, cpqConfigurableChecker, configurationProductInfoModelPopulator, configurationPricingOrderIntegrationService, modelService);
    }

    @Override
    public void populate(final CommerceCartRestoration source, final CartRestorationData target)
    {
        if (source != null)
        {
            LOG.info("Inside Custom Populator for config product in saved cart scenario");
            for (final CommerceCartModification modification : source.getModifications())
            {
                if(modification.getEntry().getOrder().getCommerceType() != null &&
                        StringUtils.equalsIgnoreCase(modification.getEntry().getOrder().getCommerceType().getCode(),"BUY")) {
                    LOG.info("36 Buy Cart id: "+ modification.getEntry().getOrder().getCode());
                    final AbstractOrderEntryModel entry = modification.getEntry();
                    if (isUpdateRequired(modification.getStatusCode(), entry.getProduct())) {

                        final ConfigModel configModel = getConfigurationAbstractOrderIntegrationStrategy()
                                .getConfigurationForAbstractOrderEntry(entry);
                        addConfigAttributesToCartEntry(configModel, entry);
                    }
                }
            }
        }
    }
}