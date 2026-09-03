package com.bhge.facades.productconfig.populator;

import de.hybris.platform.converters.ConfigurablePopulator;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.order.model.AbstractOrderEntryProductInfoModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;
import de.hybris.platform.sap.productconfig.services.populators.ConfigurationProductInfoModelPopulator;
import org.apache.log4j.Logger;

import java.util.Collection;
import java.util.List;

public class BHGEConfigurationProductInfoModelPopulator extends ConfigurationProductInfoModelPopulator implements ConfigurablePopulator<ConfigModel, List<AbstractOrderEntryProductInfoModel>, AbstractOrderEntryModel> {

    private static final Logger LOG = Logger.getLogger(BHGEConfigurationProductInfoModelPopulator.class);
    @Override
    public void populate(final ConfigModel source, final List<AbstractOrderEntryProductInfoModel> target, final Collection<AbstractOrderEntryModel> options) {
        LOG.info("Inside BHGECustomConfigurationProductInfoModelPopulator !!");
        LOG.info("ConfigModel ID: " + source.getId());
        LOG.info("Target size before population: " + target.size());
    }
}
