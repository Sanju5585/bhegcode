/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.impl;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import com.bhge.core.model.*;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.BHGEVCCPSConfigurationOrderEntryMapper;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.sap.productconfig.cpiorderexchange.cps.service.impl.CPSConfigurationOrderEntryMapper;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSCommerceExternalConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSExternalConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSExternalItem;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSExternalValue;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSFlatListContainer;
import de.hybris.platform.sap.productconfig.runtime.cps.model.runtime.CPSVariantCondition;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderItemConfigConditionModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderItemConfigHeaderModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderItemConfigHierarchyModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderItemConfigInstanceModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderItemConfigValueModel;
import de.hybris.platform.sap.sapcpiadapter.model.SAPCpiOutboundOrderModel;


public class BHGEVCCPSConfigurationOrderEntryMapperImpl extends CPSConfigurationOrderEntryMapper implements BHGEVCCPSConfigurationOrderEntryMapper {

	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCCPSConfigurationOrderEntryMapperImpl.class);
	private static final String CHARACTERISTIC_ID  = "ENG_APR_CATALOG";
	private static final String SALES_ACK_ID  = "SALES_ACKNOWLEDGEMENT";
	private static final String NOT_APR_CHARACTERISTIC_VALUE  = "NOT_APR";
	private static final String APRROVED_SALES_ACK_VALUE  = "APPROVED";

	@Override
	public int mapConfiguration(final AbstractOrderEntryModel entry, final SAPCpiOutboundOrderModel orderModel,
			final String entryNumber) {
		LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. mapConfiguration");
		final CPSCommerceExternalConfiguration externalCommerceConfiguration = readExternalConfigFromEntry(entry);
		final CPSExternalConfiguration externalConfiguration = externalCommerceConfiguration.getExternalConfiguration();
		final CPSFlatListContainer flatListContainer = createFlatListContainer(externalConfiguration);
		if(!isLongConfigEntry(entry)) {
			mapConfigurationHeader(externalConfiguration, orderModel, entryNumber);
			mapConfigInstances(orderModel, flatListContainer.getItems(), externalCommerceConfiguration.getUnitCodes(), entryNumber);
			mapConfigHierarchies(orderModel, flatListContainer.getSubItems(), entryNumber);
			mapConfigValues(orderModel, flatListContainer.getValues(), entryNumber);
			mapConfigConditions(orderModel, flatListContainer.getConditions(), entryNumber);
		} else {
			mapLongConfigConfigurationHeader(orderModel, entry, entryNumber, externalConfiguration);
			mapLongConfigConfigurationInstances(orderModel, entry, entryNumber);
			mapLongConfigConfigurationHierarchies(orderModel, entry, entryNumber);
			mapLongConfigEntryValues(orderModel, entry, entryNumber);
			mapLongConfigConditionsValues(orderModel, entry, entryNumber);
		}
		
		return flatListContainer.getItems().size();
	}
	
	@Override
	protected void mapConfigValues(final SAPCpiOutboundOrderModel orderModel, final List<CPSExternalValue> sourceValues,
			final String entryNumber) {
		
		final Set<SAPCpiOutboundOrderItemConfigValueModel> targetValues = new HashSet<>();
		LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. mapConfigValues");

		for (final CPSExternalValue sourceValue : sourceValues) {
			final SAPCpiOutboundOrderItemConfigValueModel targetValue = new SAPCpiOutboundOrderItemConfigValueModel();
			targetValue.setAuthor(sourceValue.getAuthor());
			final String characteristicId = sourceValue.getParentCharacteristic().getId();
			LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper, characteristicId is : {}", characteristicId);
			targetValue.setCharacteristicId(characteristicId);
			if (StringUtils.isNotEmpty(characteristicId) && characteristicId.equalsIgnoreCase(CHARACTERISTIC_ID)) {
				targetValue.setValueId(NOT_APR_CHARACTERISTIC_VALUE);
			} else if (StringUtils.isNotEmpty(characteristicId) && characteristicId.equalsIgnoreCase(SALES_ACK_ID)) {
				targetValue.setValueId(APRROVED_SALES_ACK_VALUE);
			}
			else {
				targetValue.setValueId(sourceValue.getValue());
			} 
			
			targetValue.setInstanceId(sourceValue.getParentCharacteristic().getParentItem().getId());
			
			targetValue.setConfigurationId(entryNumber);
			targetValue.setSapCpiOutboundOrder(orderModel);
			targetValues.add(targetValue);
		}
		orderModel.getProductConfigValues().addAll(targetValues);
	}
	
	@Override
	public CPSFlatListContainer getCPSFlatListContainer(final CPSCommerceExternalConfiguration externalCommerceConfiguration) {

		final CPSExternalConfiguration externalConfiguration = externalCommerceConfiguration.getExternalConfiguration();
		LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. CPSFlatListContainer");
		final CPSFlatListContainer flatListContainer = createFlatListContainer(externalConfiguration);
		return flatListContainer;
		
	}
	
	@Override
	public CPSCommerceExternalConfiguration getCPSExternalConfigByExternalConfiguration(final String externalConfiguration) {

		try {
			LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. getCPSExternalConfig for externalConfiguration {} ", externalConfiguration);
			return getObjectMapper().readValue(externalConfiguration, CPSCommerceExternalConfiguration.class);
		}
		catch (final IOException e) {
			throw new IllegalStateException("Parsing external configuration failed: expected JSON of CPSExternalConfiguration", e);
		}
	}

	protected void mapLongConfigConfigurationHeader(final SAPCpiOutboundOrderModel orderModel, final AbstractOrderEntryModel entry, final String entryNumber, 
			final CPSExternalConfiguration externalConfiguration) {
		final SAPCpiOutboundOrderItemConfigHeaderModel configHeader = new SAPCpiOutboundOrderItemConfigHeaderModel();
		BHGEKBInformationModel kbInfoModel = entry.getBhgeKBInformation();
		LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. mapLongConfigConfigurationHeader");
		if(Objects.nonNull(kbInfoModel)) {
			if(StringUtils.isNotEmpty(kbInfoModel.getKbName() )) {
				configHeader.setKbName(kbInfoModel.getKbName());
			} else if(externalConfiguration != null) {
				configHeader.setKbName(externalConfiguration.getKbKey().getName());
			}
			if(StringUtils.isNotEmpty(kbInfoModel.getKbVersion() )) {
				configHeader.setKbVersion(kbInfoModel.getKbVersion());
			} else if(externalConfiguration != null) {
				configHeader.setKbVersion(externalConfiguration.getKbKey().getVersion());
			}
			configHeader.setComplete("T".equalsIgnoreCase(kbInfoModel.getComplete()) ? Boolean.TRUE : Boolean.FALSE);
			configHeader.setConsistent("T".equalsIgnoreCase(kbInfoModel.getConsitent()) ? Boolean.TRUE : Boolean.FALSE);
			configHeader.setRootInstanceId(kbInfoModel.getRootId());
			configHeader.setCommerceLeading(true);
			configHeader.setConfigurationId(entryNumber);
			configHeader.setExternalItemId(entryNumber);
			configHeader.setSapCpiOutboundOrder(orderModel);
			orderModel.getProductConfigHeaders().add(configHeader);
		}
		
	}
	
	protected void mapLongConfigConfigurationInstances(final SAPCpiOutboundOrderModel orderModel, final AbstractOrderEntryModel entry, final String entryNumber) {
		
		final Set<SAPCpiOutboundOrderItemConfigInstanceModel> targetItems = new HashSet<>();
		
		List<BHGEConfigurationInstanceModel> configInstances = entry.getConfigurationInstance();

		for (final BHGEConfigurationInstanceModel configInstance : configInstances) {
			
			final SAPCpiOutboundOrderItemConfigInstanceModel targetItem = new SAPCpiOutboundOrderItemConfigInstanceModel();
			targetItem.setAuthor(configInstance.getAuthor());
			targetItem.setClassType(configInstance.getClassType());
			targetItem.setInstanceId(configInstance.getInstanceId());
			targetItem.setObjectKey(configInstance.getObjKey());
			targetItem.setObjectType(configInstance.getObjectType());
			targetItem.setQuantity(configInstance.getQuantity());
			targetItem.setQuantityUnit(configInstance.getQuantityUnit());
			
			targetItem.setComplete("T".equalsIgnoreCase(configInstance.getComplete()) ? Boolean.TRUE : Boolean.FALSE);
			targetItem.setConsistent("T".equalsIgnoreCase(configInstance.getConsistent()) ? Boolean.TRUE : Boolean.FALSE);
			
			targetItem.setConfigurationId(entryNumber);
			targetItem.setSapCpiOutboundOrder(orderModel);
			targetItems.add(targetItem);
		}
		orderModel.getProductConfigInstances().addAll(targetItems);
	}
	
	protected void mapLongConfigConfigurationHierarchies(final SAPCpiOutboundOrderModel orderModel, final AbstractOrderEntryModel entry, final String entryNumber) {
		
		final Set<SAPCpiOutboundOrderItemConfigHierarchyModel> targetItems = new HashSet<>();
		
		List<BHGEConfigurationPartModel>  configParts = entry.getConfigurationPart();

		for (final BHGEConfigurationPartModel configPart : configParts)
		{
			final SAPCpiOutboundOrderItemConfigHierarchyModel targetItem = new SAPCpiOutboundOrderItemConfigHierarchyModel();

			targetItem.setAuthor(configPart.getAuthor());
			targetItem.setClassType(configPart.getClassType());
			targetItem.setInstanceId(configPart.getInstanceId());
			targetItem.setObjectKey(configPart.getObjKey());
			targetItem.setObjectType(configPart.getObjType());
			targetItem.setParentId(configPart.getParentId());
			targetItem.setBomNumber(configPart.getPartOfNo());
			if("X".equalsIgnoreCase(configPart.getSalesRelevant())) {
				targetItem.setSalesRelevant(true);
			}
			targetItem.setConfigurationId(entryNumber);
			targetItem.setSapCpiOutboundOrder(orderModel);
			targetItems.add(targetItem);
		}
		orderModel.getProductConfigHierarchies().addAll(targetItems);
	}
	
	
	protected void mapLongConfigEntryValues(final SAPCpiOutboundOrderModel orderModel, final AbstractOrderEntryModel entry, final String entryNumber) {
		
		final Set<SAPCpiOutboundOrderItemConfigValueModel> targetValues = new HashSet<>();
		LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. mapLongConfigEntryValues");

		List<BHGEProductInfoModel> productInfoList=entry.getCpqentryinfo();
		for(BHGEProductInfoModel entryProductInfoModel : productInfoList) {
				final SAPCpiOutboundOrderItemConfigValueModel targetValue = new SAPCpiOutboundOrderItemConfigValueModel();
				LOG.info("BHGEVCCPSConfigurationOrderEntryMapper, mapLongConfigEntryValues config char name {} and config char value {}", entryProductInfoModel.getCpqCharacteristicName(), entryProductInfoModel.getCpqCharacteristicAssignedValues());
				targetValue.setCharacteristicId(entryProductInfoModel.getCpqCharacteristicName());
				targetValue.setValueId(entryProductInfoModel.getCpqCharacteristicAssignedValues());
				targetValue.setConfigurationId(entryNumber);
				targetValue.setAuthor(entryProductInfoModel.getAuthor());
				targetValue.setInstanceId(entryProductInfoModel.getInstanceId());
				targetValue.setSapCpiOutboundOrder(orderModel);
				targetValues.add(targetValue);

		}
		orderModel.getProductConfigValues().addAll(targetValues);
	}

	protected void mapLongConfigConditionsValues(final SAPCpiOutboundOrderModel orderModel, final AbstractOrderEntryModel entry, final String entryNumber) {

			final Set<SAPCpiOutboundOrderItemConfigConditionModel> targetConditions = new HashSet<>();

			LOG.info("Inside BHGEVCCPSConfigurationOrderEntryMapper .. mapLongConfigConditionsValues");

			List<BHGEVariantFactorModel> variantFactors = entry.getVariantFactors();
			for(BHGEVariantFactorModel variantFactor : variantFactors) {

				final SAPCpiOutboundOrderItemConfigConditionModel targetCondition = new SAPCpiOutboundOrderItemConfigConditionModel();
					LOG.info("BHGEVCCPSConfigurationOrderEntryMapper, mapLongConfigConditionsValues variant factor key "+ variantFactor.getVariantKey() + " variant factor value "+ variantFactor.getVariantFactor());
					targetCondition.setConditionKey(variantFactor.getVariantKey());
					targetCondition.setConditionFactor(variantFactor.getVariantFactor());
					targetCondition.setInstanceId(variantFactor.getInstanceId());
					targetCondition.setConfigurationId(entryNumber);
					targetCondition.setSapCpiOutboundOrder(orderModel);
					targetConditions.add(targetCondition);
			}
			orderModel.getProductConfigConditions().addAll(targetConditions);
		}

	private boolean isLongConfigEntry(final AbstractOrderEntryModel entry) {

		boolean longConfigEntry = false;
		if (Objects.nonNull(entry.getLongConfigEntry()) && entry.getLongConfigEntry()) {
			longConfigEntry = true;
		}
		return longConfigEntry;
	}


}