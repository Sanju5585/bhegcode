package com.bhge.facades.order.populators;

import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BHGEVCOrderEntryPopulator implements Populator<AbstractOrderEntryModel, OrderEntryData> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEVCOrderEntryPopulator.class);


    @Override
    public void populate(final AbstractOrderEntryModel source, final OrderEntryData target) throws ConversionException {

        LOG.info("Inside BHGEVCOrderEntryPopulator to populate the vc fields for cart entry {}", source.getPk());

        final AbstractOrderModel abstractOrder = source.getOrder();
        if (abstractOrder!= null && abstractOrder instanceof CartModel) {
            if (source.getProduct().getSapConfigurable() && StringUtils.isNotEmpty(source.getVcFullyConfigurepartNumber())) {
                LOG.info("Fully configure part number" + source.getVcFullyConfigurepartNumber());
                target.setFullyConfigurePartNumber(source.getVcFullyConfigurepartNumber());
            }
            
            if (source.getReferenceNumber() != null) {
                target.setReferenceNumber(source.getReferenceNumber());
            }
            
            if (source.getTagInformation() != null) {
                target.setTagInformation(source.getTagInformation());
            }
            
            if (source.getAccessoryEntriesNumber() != null) {
                target.setAccessoryEntryNumbers(source.getAccessoryEntriesNumber());
            }
            
            if (source.getDummyPartNumber() != null) {
                target.setDummyPartNumber(source.getDummyPartNumber());
            }
            
            if (source.getDummyProductDescription() != null) {
                target.setDummyProductDescription(source.getDummyProductDescription());
            }
            if (source.getLongConfigEntry() != null) {
                target.setLongConfigEntry(source.getLongConfigEntry());
            }
            

        }

    }

}
