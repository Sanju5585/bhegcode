package com.bhge.facades.order;

import java.util.List;
import java.util.Map;

import com.bhge.core.data.BHGEVCProductSummaryData;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import com.bhge.facades.user.data.BHGEBulkUploadEntryData;

import com.ds.dsocc.common.dto.BHGEVCConfigurationWsDTO;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;


public interface BHGEPriceAvailabilityFacade
{
    public InventoryRequestData getPriceAndAvailability(final InventoryRequestData requestData, final String guestSalesArea, String productLine,
    		final ConfigurationData vcConfigData, String ecaCode);

    void populateAvailabilityAndPrice(final InventoryRequestData requestData,List<InventoryRequestProductData> inventoryProductRequestList, List<BHGEBulkUploadEntryData> validatedBulkUploadList, String productLine);

    void fetchAndPopulatePriceAvailabilityDetailsForFavourites(List<ProductData> productDataList, int quantity, String productLine,String ecaCode);

    InventoryRequestData getVCQuickOrderPriceAndAvailability(InventoryRequestData requestData, String guestSalesArea, String productLine, Map<Integer, ConfigurationData> vcLongConfigDataMap);

    BHGEVCProductSummaryData getVCPriceAndAvailabilitySummary(BHGEVCConfigurationWsDTO configurationWsDTO, BHGEVCProductSummaryData bhgeVCProductSummaryData);
}
