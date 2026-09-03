package com.bhge.core.order.service;

import java.util.List;
import java.util.Map;

import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;

import de.hybris.platform.sap.productconfig.facades.ConfigurationData;

public interface BHGEPriceAvailabilityCheckService {
    public InventoryRequestData getInventoryCheckDataForWS(final String guestSalesArea, InventoryRequestData requestData, List<InventoryRequestProductData> inventoryRequestProductDataList, String productLine,
    		final ConfigurationData vcConfigData,String ecaCode);

    public InventoryRequestData getVCQuickOrderInventoryCheckDataForWS(final String guestSalesArea, InventoryRequestData requestData, List<InventoryRequestProductData> inventoryRequestProductDataList, String productLine,
                                                           final Map<Integer, ConfigurationData> vcQuickOrderConfigDataMap);

}
