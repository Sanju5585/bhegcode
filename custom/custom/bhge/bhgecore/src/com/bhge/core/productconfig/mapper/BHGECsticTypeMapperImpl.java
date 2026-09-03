package com.bhge.core.productconfig.mapper;

import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import de.hybris.platform.sap.productconfig.facades.CsticData;
import de.hybris.platform.sap.productconfig.facades.UiType;
import de.hybris.platform.sap.productconfig.facades.impl.CsticTypeMapperImpl;
import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.CsticModel;
import de.hybris.platform.sap.productconfig.runtime.interf.services.impl.ClassificationSystemCPQAttributesContainer;
import de.hybris.platform.servicelayer.config.ConfigurationService;

public class BHGECsticTypeMapperImpl extends CsticTypeMapperImpl {
    private static final Logger LOG = Logger.getLogger(BHGECsticTypeMapperImpl.class);

    private static final String MAX_LENGTH = "bhge.vc.cstic.max.length";

    @Resource
    private ConfigurationService configurationService;


    @Override
    public CsticData mapCsticModelToData(final ConfigModel configModel, final CsticModel model, final String prefix,
                                         final Map<String, ClassificationSystemCPQAttributesContainer> nameMap) {
    	
        final CsticData data = super.mapCsticModelToData(configModel, model, prefix, nameMap);
        LOG.info("BHGECsticTypeMapperImpl :: Max length for the cstic name :" + model.getName() +" and cstic maxlength :" + model.getTypeLength());
        int customMaxLength = configurationService.getConfiguration().getInt(MAX_LENGTH);
        if (data.getName().equals(model.getName()) && data.getType().equals(UiType.STRING) 
        		&& model.isMultivalued()) {
        	data.setMaxlength(customMaxLength);
        }
        LOG.info("BHGECsticTypeMapperImpl :: custom max lenth is :" + customMaxLength);
        return data;
    }


}
