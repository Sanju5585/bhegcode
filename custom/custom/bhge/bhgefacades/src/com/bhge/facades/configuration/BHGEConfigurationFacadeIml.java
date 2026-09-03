package com.bhge.facades.configuration;

import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.facades.product.data.BHGEProductAccessData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.KBKeyData;
import de.hybris.platform.sap.productconfig.facades.impl.ConfigurationFacadeImpl;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

public class BHGEConfigurationFacadeIml extends ConfigurationFacadeImpl {


    private static final Logger LOG = Logger.getLogger(BHGEConfigurationFacadeIml.class);

    @Resource
    private ProductService productService;

    private List<BHGEProductAccessStrategy> strategiesList = new LinkedList();

    public List<BHGEProductAccessStrategy> getStrategiesList() {
        return this.strategiesList;
    }

    public void setStrategiesList(final List<BHGEProductAccessStrategy> strategiesList)
    {
        this.strategiesList = strategiesList;
    }


    @Override
    public ConfigurationData getConfiguration(final KBKeyData kbKey, final boolean forceReset) {
        LOG.info("Inside of BHGEConfigurationFacadeIml: getConfiguration");

        ConfigurationData configurationDataResult = super.getConfiguration(kbKey,forceReset);
        
        final ProductModel productModel = productService.getProductForCode(configurationDataResult.getKbKey().getProductCode());
       
		if (productModel != null) {
			BHGEProductAccessData accessData = new BHGEProductAccessData();

			for (final BHGEProductAccessStrategy splittingStrategy : getStrategiesList()) {
				accessData = splittingStrategy.isProductAccessible(productModel, accessData);
			}
			
			if (Objects.nonNull(accessData) && accessData.isIsZeroBuy()) {
				LOG.info("BHGEConfigurationFacadeIml: product is Zero Buy");
				configurationDataResult.setIsZeroBuy(accessData.isIsZeroBuy());
			}

		}
       

        
        return configurationDataResult;
    }


}
