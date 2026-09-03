package com.bhge.core.pricing.handler.impl;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;

import jakarta.annotation.Resource;

import com.bhge.core.pricing.handler.BHGEVCPricingHandler;
import com.bhge.facades.data.InventoryRequestData;
import com.bhge.facades.data.InventoryRequestProductData;
import de.hybris.platform.sap.productconfig.runtime.interf.ConfigModelFactory;
import de.hybris.platform.sap.productconfig.runtime.interf.model.impl.PriceModelImpl;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;

import com.google.common.base.Preconditions;

import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.PricingDocumentResult;
import de.hybris.platform.sap.productconfig.runtime.cps.pricing.impl.PricingHandlerImpl;
import de.hybris.platform.sap.productconfig.runtime.interf.model.PriceModel;
import de.hybris.platform.sap.productconfig.runtime.interf.model.PriceSummaryModel;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;

public class BHGEVCPricingHandlerImpl extends PricingHandlerImpl implements BHGEVCPricingHandler {

	private static final Logger LOG = Logger.getLogger(BHGEVCPricingHandlerImpl.class);

	
	@Resource
	private BaseStoreService baseStoreService;

	@Resource(name = "sapProductConfigModelFactory")
	private ConfigModelFactory configModelFactory;

	@Override
	protected PriceSummaryModel preparePriceSummary(final PricingDocumentResult pricingDocumentResult,
			final PricingDocumentResult originalPricingDocumentResult) {

		LOG.info("Entered into BHGEPricingHandlerImpl for discount calcualtion :preparePriceSummary ");
		final PriceSummaryModel priceSummary = getConfigModelFactory().createInstanceOfPriceSummaryModel();
		priceSummary.setBasePrice(getBasePrice(pricingDocumentResult));
		priceSummary.setSelectedOptionsPrice(getSelectedOptionsPrice(pricingDocumentResult));
		priceSummary.setCurrentTotalPrice(getCurrentTotalPrice(pricingDocumentResult));
		priceSummary.setCurrentTotalSavings(getCurrentTotalSavings(pricingDocumentResult));
		return priceSummary;
	}
	
	protected PriceModel getCurrentTotalSavings(final PricingDocumentResult pricingDocumentResult) {
		LOG.info("BHGEPricingHandlerImpl -- getConditionTypesForDiscountPrice() " + getConditionTypesForDiscountPrice());
		final PriceModel discountPrice =  getPriceForConditionTypes(getConditionTypesForDiscountPrice(), pricingDocumentResult);
		LOG.info("BHGEPricingHandlerImpl -- Discount price " + discountPrice.getPriceValue());
		if (discountPrice != null && discountPrice.getPriceValue().compareTo(BigDecimal.ZERO) != 0) {
			final BigDecimal pricaValue = discountPrice.getPriceValue().abs();
			LOG.info("BHGEPricingHandlerImpl -- Discount price after converting " + pricaValue);
			discountPrice.setPriceValue(pricaValue);
		}
		return discountPrice;
		
	}
	
	
	public Collection<String> getConditionTypesForDiscountPrice() {
		return getSAPConfiguration().getSapproductconfig_conditiontypes_discountprice_cps();
	}
	
	protected SAPConfigurationModel getSAPConfiguration() {
		Preconditions.checkNotNull(baseStoreService, "No baseStoreService available");
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		Preconditions.checkNotNull(baseStore, "No baseStore available");
		final SAPConfigurationModel sapConfiguration = baseStore.getSAPConfiguration();
		Preconditions.checkNotNull(sapConfiguration, "No SAPConfiguration available");
		return sapConfiguration;

	}

	@Override
	public PriceSummaryModel getVCPriceSummary(final InventoryRequestData requestData) {

		final PriceModel yumuPrice = new PriceModelImpl();
		final PriceModel zumuPrice = new PriceModelImpl();
		final PriceModel discountValue = new PriceModelImpl();
		LOG.info("BHGEVCPricingHandlerImpl : Inside of getVCPriceSummary");
		final PriceSummaryModel priceSummaryModel = configModelFactory.createInstanceOfPriceSummaryModel();

		final List<InventoryRequestProductData> requestProductDataList = requestData.getProductRequestList();

		for (InventoryRequestProductData requestProductData : requestProductDataList) {
			
			LOG.info("BHGEVCPricingHandlerImpl : config base price, YUMU price is : " + requestProductData.getBasePrice());
			if (requestProductData.getBasePrice() != null) {
				yumuPrice.setPriceValue(BigDecimal.valueOf(requestProductData.getBasePrice()));
				yumuPrice.setCurrency(requestData.getCurrency());
				
				priceSummaryModel.setBasePrice(yumuPrice);
				priceSummaryModel.setSelectedOptionsPrice(yumuPrice);
			} else {
				LOG.info("BHGEVCPricingHandlerImpl : config base price, YUMU price is null, setting as Zero");
				priceSummaryModel.setBasePrice(PriceModel.NO_PRICE);
				priceSummaryModel.setSelectedOptionsPrice(PriceModel.NO_PRICE);
			}
			
			
			LOG.info("BHGEVCPricingHandlerImpl : config price after discount, ZUMU price is  : " + requestProductData.getDiscountPrice());
			if (requestProductData.getDiscountPrice() != null && NumberUtils.isNumber(requestProductData.getDiscountPrice())) {
				zumuPrice.setPriceValue(BigDecimal.valueOf(Double.parseDouble(requestProductData.getDiscountPrice())));
				zumuPrice.setCurrency(requestData.getCurrency());
				
				priceSummaryModel.setCurrentTotalPrice(zumuPrice);
			}  else {
				LOG.info("BHGEVCPricingHandlerImpl : discount price, ZUMU price is null, setting as Zero");
				priceSummaryModel.setCurrentTotalPrice(PriceModel.NO_PRICE);
			}

			if(yumuPrice.getPriceValue() != null && zumuPrice.getPriceValue() != null){
				LOG.info("BHGEVCPricingHandlerImpl : YUMU and ZUMU price is not null, calculating discount and yumu value is " + yumuPrice.getPriceValue() 
				+ " and zumu value is " + zumuPrice.getPriceValue());
				discountValue.setPriceValue(yumuPrice.getPriceValue().subtract(zumuPrice.getPriceValue()));
				discountValue.setCurrency(requestData.getCurrency());
				
				priceSummaryModel.setCurrentTotalSavings(discountValue);
			} else {
				priceSummaryModel.setCurrentTotalSavings(PriceModel.NO_PRICE);
			}
			
		}
		return priceSummaryModel;
	}


}
