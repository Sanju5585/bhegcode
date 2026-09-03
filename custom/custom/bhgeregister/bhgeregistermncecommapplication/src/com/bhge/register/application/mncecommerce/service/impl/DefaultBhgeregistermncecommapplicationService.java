/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.application.mncecommerce.service.impl;

import de.hybris.platform.catalog.model.CatalogUnawareMediaModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.core.jco.exceptions.BackendRuntimeException;
import de.hybris.platform.servicelayer.exceptions.SystemException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import org.apache.commons.collections4.CollectionUtils;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;


import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityResponse;
import com.bhge.core.scpi.rfc.registration.BHGEZSoldToValidationRequest;
import com.bhge.core.scpi.rfc.registration.BHGEZSoldToValidationResponse;
import com.bhge.core.scpi.rfc.registration.BHGEZSoldtoValidationRequestItem;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.register.application.mncecommerce.constants.BhgeregistermncecommapplicationConstants;
import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGERegisterRuleData;
import com.bhgeregister.dto.BHGESoldtoData;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;


public class DefaultBhgeregistermncecommapplicationService implements BhgeregistermncecommapplicationService
{
	private static final Logger LOG = LoggerFactory.getLogger(DefaultBhgeregistermncecommapplicationService.class);
	private static final String SCPI_ZHYB_ECOM_REGISTRATION_OFS_ENDPOINT_URL = "SCPI_ZHYB_ECOM_REGISTRATION_OFS_ENDPOINT";
	private static final String SCPI_ZHYB_ECOM_REGISTRATION_ENDPOINT_URL = "SCPI_ZHYB_ECOM_REGISTRATION_ENDPOINT";
	private static final String SCPI_ZHYB_ECOM_REGISTRATION_VS_ENDPOINT_URL = "SCPI_ZHYB_ECOM_REGISTRATION_VS_ENDPOINT";
	

	public static final String EMPTY_VALUE = "";
	private MediaService mediaService;
	private ModelService modelService;
	private FlexibleSearchService flexibleSearchService;
	private SAPJcoContainer sapJcoContainer;
	private BaseSiteService baseSiteService;
	
	@Autowired
	SCPIConnector scpiConnector;
	
	
	final String OFS = Config.getParameter("register.appName.OFS");
	final String DSS = Config.getParameter("register.appName.DSS");
	final String FPT = Config.getParameter("register.appName.FPT");
	

	@Override
	public String getHybrisLogoUrl(final String logoCode)
	{
		final MediaModel media = mediaService.getMedia(logoCode);

		// Keep in mind that with Slf4j you don't need to check if debug is enabled, it
		// is done under the hood.
		LOG.debug("Found media [code: {}]", media.getCode());

		return media.getURL();
	}

	@Override
	public void createLogo(final String logoCode)
	{
		final Optional<CatalogUnawareMediaModel> existingLogo = findExistingLogo(logoCode);

		final CatalogUnawareMediaModel media = existingLogo.isPresent() ? existingLogo.get()
				: modelService.create(CatalogUnawareMediaModel.class);
		media.setCode(logoCode);
		media.setRealFileName("sap-hybris-platform.png");
		modelService.save(media);

		mediaService.setStreamForMedia(media, getImageStream());
	}

	private final static String FIND_LOGO_QUERY = "SELECT {" + CatalogUnawareMediaModel.PK + "} FROM {"
			+ CatalogUnawareMediaModel._TYPECODE + "} WHERE {" + CatalogUnawareMediaModel.CODE + "}=?code";

	private Optional<CatalogUnawareMediaModel> findExistingLogo(final String logoCode)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FIND_LOGO_QUERY);
		fQuery.addQueryParameter("code", logoCode);

		try
		{
			return Optional.of(flexibleSearchService.searchUnique(fQuery));
		}
		catch (final SystemException e)
		{
			return Optional.empty();
		}
	}

	private InputStream getImageStream()
	{
		return DefaultBhgeregistermncecommapplicationService.class
				.getResourceAsStream("/bhgeregistermncecommapplication/sap-hybris-platform.png");
	}

	private void handleException(final Exception exception)
	{
		LOG.error("Register Exception - " + exception.getMessage());
		exception.printStackTrace();
	}

	/**
	 *
	 */
	@Override
	public BHGERegisterResponse executeSAPLookup(final List<BHGERegisterRequest> registerRequestList, final String store)
	{
		try
		{
			// final bhge
			baseSiteService.setCurrentBaseSite(baseSiteService.getBaseSiteForUID("bhge"), true);
			
			BHGEZSoldToValidationRequest soldToValidationRequestXml = prepareRequestforCustNum(registerRequestList, store);
			
			String scpiEndpointUrl = null;
			if (store.equalsIgnoreCase(FPT))
			{
				scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_VS_ENDPOINT_URL,
						flexibleSearchService);
			}
			

			if (store.equalsIgnoreCase(DSS))
			{
				scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_ENDPOINT_URL,
						flexibleSearchService);
			}
			
			if (store.equalsIgnoreCase(OFS))
			{
				scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_OFS_ENDPOINT_URL,
						flexibleSearchService);
			}
			
			final BHGEZSoldToValidationResponse soldToValidationResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(
					scpiEndpointUrl, soldToValidationRequestXml, BHGEZSoldToValidationResponse.class);						
			if (null != soldToValidationResponse) {
				return processSoldToValidationResponse(soldToValidationResponse);
			}			 
			else
			{
				return null;
			}
		}
		catch (final Exception exc)
		{
			handleException(exc);
		}
		return null;
	}
	
	//*****protected String prepareRequestforCustNum(final List<BHGERegisterRequest> registerRequestList, final String store)
	protected BHGEZSoldToValidationRequest prepareRequestforCustNum(final List<BHGERegisterRequest> registerRequestList, final String store)
	{
		LOG.debug("Inside Register prepareRequestforCustNum: START - ");
		String requestXml = null;
		  BHGEZSoldToValidationRequest soldToValidationRequest = new BHGEZSoldToValidationRequest();
		  List<BHGEZSoldtoValidationRequestItem> listsoldToValidationRequestItem = new ArrayList<>();
		  List<BHGEZSoldtoValidationRequestItem> listMessage = new ArrayList<>();
		  List<BHGEZSoldtoValidationRequestItem> listSales = new ArrayList<>();
		  if (registerRequestList != null && registerRequestList.size() > 0)
			{
				for (int ict = 0; ict < registerRequestList.size(); ict++)
				{
					BHGEZSoldtoValidationRequestItem soldToValidationRequestItem = new BHGEZSoldtoValidationRequestItem();
					loadCustomerRecords(registerRequestList.get(ict), soldToValidationRequestItem, store);
					listsoldToValidationRequestItem.add(soldToValidationRequestItem);
					
					soldToValidationRequest.getInputDetails().setItems(listsoldToValidationRequestItem);
					
					
					
					if (store.equalsIgnoreCase(Config.getParameter("register.appName.FPT")))
					{
					BHGEZSoldtoValidationRequestItem tmessage = new BHGEZSoldtoValidationRequestItem();
					loadMessageRecords(registerRequestList.get(ict), tmessage, store);
					listMessage.add(tmessage);
					soldToValidationRequest.getMessageTables().setItems(listMessage);
					
					BHGEZSoldtoValidationRequestItem tsalesarea = new BHGEZSoldtoValidationRequestItem();
					loadSaleAreaRecords(registerRequestList.get(ict), tsalesarea, store);
					listSales.add(tsalesarea);
					soldToValidationRequest.gettSalesArea().setItems(listSales);
					}
					
					/****************************Added for OFS store**********************************/
					
					if (store.equalsIgnoreCase(Config.getParameter("register.appName.OFS")))
					{
					BHGEZSoldtoValidationRequestItem tmessage = new BHGEZSoldtoValidationRequestItem();
					loadMessageRecords(registerRequestList.get(ict), tmessage, store);
					listMessage.add(tmessage);
					soldToValidationRequest.getMessageTables().setItems(listMessage);
					
					BHGEZSoldtoValidationRequestItem tsalesarea = new BHGEZSoldtoValidationRequestItem();
					loadSaleAreaRecords(registerRequestList.get(ict), tsalesarea, store);
					listSales.add(tsalesarea);
					//soldToValidationRequest.gettSalesArea().setItems(listSales);
					}
					
					
				}
			}
		  requestXml = scpiConnector.toXML(soldToValidationRequest);
		  LOG.debug("Inside Register prepareRequestforCustNum: CLOSE - " + requestXml);
		  return soldToValidationRequest;
		  //return requestXml;
	}
	
	private void loadSaleAreaRecords(final BHGERegisterRequest registerRequest,
			final BHGEZSoldtoValidationRequestItem soldToValidationRequestItem, final String store)
	{
		if (store.equalsIgnoreCase(Config.getParameter("register.appName.FPT")))
		{
			if (registerRequest.getFptCustomerAccNumber() != null)
			{
				soldToValidationRequestItem.setCustNo(StringUtils.EMPTY);
				soldToValidationRequestItem.setAttribute5(StringUtils.EMPTY);
				soldToValidationRequestItem.setSalesOrg(StringUtils.EMPTY);
				soldToValidationRequestItem.setDistribution(StringUtils.EMPTY);
				soldToValidationRequestItem.setDivision(StringUtils.EMPTY);
				soldToValidationRequestItem.setCountry(StringUtils.EMPTY);
				soldToValidationRequestItem.setRegion(StringUtils.EMPTY);
			}
		}
		
		if (store.equalsIgnoreCase(Config.getParameter("register.appName.OFS")))
		{
			if (registerRequest.getOfsCustomerAccNumber() != null)
			{
				/*
				soldToValidationRequestItem.setCustNo(StringUtils.EMPTY);
				soldToValidationRequestItem.setAttribute5(StringUtils.EMPTY);
				soldToValidationRequestItem.setSalesOrg(StringUtils.EMPTY);
				soldToValidationRequestItem.setDistribution(StringUtils.EMPTY);
				soldToValidationRequestItem.setDivision(StringUtils.EMPTY);
				soldToValidationRequestItem.setCountry(StringUtils.EMPTY);
				soldToValidationRequestItem.setRegion(StringUtils.EMPTY);
				*/
			}
		}
	}
	
	private void loadMessageRecords(final BHGERegisterRequest registerRequest,
			final BHGEZSoldtoValidationRequestItem soldToValidationRequestItem, final String store)
	{
		
		
		
		if (store.equalsIgnoreCase(Config.getParameter("register.appName.OFS")))
		{
			if (registerRequest.getOfsCustomerAccNumber() != null)
			{
				soldToValidationRequestItem.setType(StringUtils.EMPTY);
				soldToValidationRequestItem.setId(StringUtils.EMPTY);
				soldToValidationRequestItem.setNumber(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessage(StringUtils.EMPTY);
				soldToValidationRequestItem.setLogNo(StringUtils.EMPTY);
				soldToValidationRequestItem.setLogMsgNo(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV1(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV2(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV3(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV4(StringUtils.EMPTY);
				soldToValidationRequestItem.setParameter(StringUtils.EMPTY);
				soldToValidationRequestItem.setRow(StringUtils.EMPTY);
				soldToValidationRequestItem.setField(StringUtils.EMPTY);
				soldToValidationRequestItem.setSystem(StringUtils.EMPTY);
			}
			
			
		}

		if (store.equalsIgnoreCase(Config.getParameter("register.appName.FPT")))
		{
			if (registerRequest.getFptCustomerAccNumber() != null)
			{
				soldToValidationRequestItem.setType(StringUtils.EMPTY);
				soldToValidationRequestItem.setId(StringUtils.EMPTY);
				soldToValidationRequestItem.setNumber(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessage(StringUtils.EMPTY);
				soldToValidationRequestItem.setLogNo(StringUtils.EMPTY);
				soldToValidationRequestItem.setLogMsgNo(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV1(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV2(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV3(StringUtils.EMPTY);
				soldToValidationRequestItem.setMessageV4(StringUtils.EMPTY);
				soldToValidationRequestItem.setParameter(StringUtils.EMPTY);
				soldToValidationRequestItem.setRow(StringUtils.EMPTY);
				soldToValidationRequestItem.setField(StringUtils.EMPTY);
				soldToValidationRequestItem.setSystem(StringUtils.EMPTY);
			}
			
			
		}
		


	}
	
	private void loadCustomerRecords(final BHGERegisterRequest registerRequest, final BHGEZSoldtoValidationRequestItem soldToValidationRequestItem, final String store)
	{
		if (store.equalsIgnoreCase(Config.getParameter("register.appName.DSS")))
		{
			if (registerRequest.getCustomerNumber() != null)
			{
				soldToValidationRequestItem.setCustNo(registerRequest.getCustomerNumber());
			}
		}
		
		
		  if(store.equalsIgnoreCase(Config.getParameter("register.appName.DAM")))
		 { 
			  if (registerRequest.getDamCustomerAccNumber() != null) 
			  {
				  soldToValidationRequestItem.setCustNo(registerRequest.getCustomerNumber());
		     } 
		  }
		  
		  if (store.equalsIgnoreCase(Config.getParameter("register.appName.OFS")))
			{
				if (registerRequest.getOfsCustomerAccNumber() != null)
				{
					soldToValidationRequestItem.setCustNo(registerRequest.getOfsCustomerAccNumber());
				}
			}
		 
		if (store.equalsIgnoreCase(Config.getParameter("register.appName.FPT")))
		{
			if (registerRequest.getFptCustomerAccNumber() != null)
			{
				soldToValidationRequestItem.setCustNo(registerRequest.getFptCustomerAccNumber());
				soldToValidationRequestItem.setContactId(StringUtils.EMPTY);
				soldToValidationRequestItem.setEmailId(StringUtils.EMPTY);
				soldToValidationRequestItem.setSso(StringUtils.EMPTY);
				soldToValidationRequestItem.setFirstName(StringUtils.EMPTY);
				soldToValidationRequestItem.setLastName(StringUtils.EMPTY);
				soldToValidationRequestItem.setInsertFlag(StringUtils.EMPTY);
				soldToValidationRequestItem.setServiceIndicator(StringUtils.EMPTY);
				soldToValidationRequestItem.setSrcSystem(registerRequest.getSrcSystem());
				soldToValidationRequestItem.setUserEvent(registerRequest.getUserEvent());
			}
		}

		if (registerRequest.getEmail() != null)
		{
			soldToValidationRequestItem.setEmailId(registerRequest.getEmail());
		}
		if (registerRequest.getUserId() != null)
		{
			//soldToValidationRequestItem.setSso(registerRequest.getUserId());
			int maxLength=Integer.parseInt(Config.getParameter("register.sso.maxlenght"));
			String inputSSO=registerRequest.getUserId();

			if (inputSSO.length() <= maxLength) {

				soldToValidationRequestItem.setSso(inputSSO);
			}
			else{
				soldToValidationRequestItem.setSso(inputSSO.substring(0, maxLength));
			}

		}
		if (registerRequest.getFirstName() != null)
		{
			soldToValidationRequestItem.setFirstName(registerRequest.getFirstName());
		}
		if (registerRequest.getLastName() != null)
		{
			soldToValidationRequestItem.setLastName(registerRequest.getLastName());
		}
		if (registerRequest.getSapContactId() != null)
		{
			soldToValidationRequestItem.setContactId(registerRequest.getSapContactId());
		}
		if (registerRequest.getInsertFlag() != null)
		{
			soldToValidationRequestItem.setInsertFlag(registerRequest.getInsertFlag());
		}
		if (registerRequest.getServiceFlag() != null)
		{
			soldToValidationRequestItem.setServiceIndicator(registerRequest.getServiceFlag());
		}
	}
		
	protected BHGERegisterResponse processSoldToValidationResponse(final BHGEZSoldToValidationResponse soldToValidationResponse)
	{
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		BHGEZSoldtoValidationRequestItem messageTables = soldToValidationResponse.getMessageTable();
		BHGEZSoldtoValidationRequestItem salesTable = soldToValidationResponse.gettSalesArea();
		final List ruleMessageList = new ArrayList<>();
		final int ruleRecordCount = Objects.nonNull(messageTables) ? (CollectionUtils.isNotEmpty(messageTables.getItems()) ? messageTables.getItems().size() : 0) : 0;
		final int ruleRecordCountSalesTable = Objects.nonNull(salesTable) ? (CollectionUtils.isNotEmpty(salesTable.getItems()) ? salesTable.getItems().size() : 0) : 0;
		LOG.info("Register SAP Rule Count - " + ruleRecordCount + " & SAP Sales Count - " + ruleRecordCountSalesTable);
		if (ruleRecordCount > 0)
		{
			for (int iCount = 0; iCount < ruleRecordCount; iCount++)
			{
				final BHGERegisterRuleData ruleDataSet = new BHGERegisterRuleData();
				ruleDataSet.setRuleCode(messageTables.getItems().get(iCount).getNumber());
				ruleDataSet.setRuleMessage(
						cleanupAttribVal(messageTables.getItems().get(iCount).getMessage()));
				ruleDataSet
						.setRuleStatus(cleanupAttribVal(messageTables.getItems().get(iCount).getId()));
				LOG.info("ruleDataSet  - " + iCount + " # " + ruleDataSet.getRuleCode() + " # " + ruleDataSet.getRuleMessage() + " # "
						+ ruleDataSet.getRuleStatus());
				ruleMessageList.add(ruleDataSet);
			}
			registerResponse.setRuleMessageList(ruleMessageList);
		}
		String salesOrg = null;
		String salesDistrib = null;
		String salesDiv = null;
		String soldtoVal = null;
		final List<String> Saleslist = new ArrayList<>();
		final Map<String, BHGESoldtoData> soldtoMap = new HashMap();
		BHGESoldtoData soldtoData;
		if (ruleRecordCountSalesTable > 0)
		{
			registerResponse.setCountry(salesTable.getItems().get(0).getCountry());
			registerResponse.setRegion(salesTable.getItems().get(0).getRegion());
			for (int jCount = 0; jCount < ruleRecordCountSalesTable; jCount++)
			{
				salesOrg = salesTable.getItems().get(jCount).getSalesOrg();
				salesDistrib = salesTable.getItems().get(jCount).getDistribution();
				salesDiv = salesTable.getItems().get(jCount).getDivision();
				soldtoVal = salesTable.getItems().get(jCount).getCustNo();
				LOG.debug("Register Sales Area Setup - " + salesOrg + "_" + salesDistrib + "_" + salesDiv + " & " + soldtoVal);
				if(null != soldtoVal && StringUtils.isNotEmpty(soldtoVal))
				{
					if (soldtoMap.get(soldtoVal) == null)
					{
						soldtoData = new BHGESoldtoData();
						soldtoMap.put(soldtoVal, soldtoData);
			        }
					if (soldtoMap.get(soldtoVal).getSalesareaList() == null)
					{
						soldtoMap.get(soldtoVal).setSalesareaList(new ArrayList());
					}
					soldtoMap.get(soldtoVal).getSalesareaList().add(salesOrg + "_" + salesDistrib + "_" + salesDiv);
				}
				//registerResponse.setLegalEntityList(soldtoMap.get(soldtoVal).getSalesareaList());
			}
		}
		registerResponse.setSoldtoData(soldtoMap);

		LOG.info("Register SAP Country - " + registerResponse.getCountry() + " & SAP Region - " + registerResponse.getRegion());
		return registerResponse;
	}

	@Override
	public BHGERegisterResponse executeSAPLookup(final List<BHGERegisterRequest> registerRequestList)
	{
		try
		{
			// final bhge
						baseSiteService.setCurrentBaseSite(baseSiteService.getBaseSiteForUID("bhge"), true);
						String soldToValidationRequestXml = prepareRequest(registerRequestList);
						//String scpiEndpointUrl = scpiConnector.getSCPIConnection("UserRegistration");
						BHGERegisterRequest request = (BHGERegisterRequest)registerRequestList.get(0);
						String scpiEndpointUrl = null;
						//ofs changes start here
						if(request.getSrcSystem() == "OFS" && request.getSrcSystem() != null) {
							scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_OFS_ENDPOINT_URL,
									flexibleSearchService);
						}
						//ofs changes end here
						
						else {
							scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_ENDPOINT_URL,
									flexibleSearchService);
						}
						
						
						final BHGEZSoldToValidationResponse soldToValidationResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
								soldToValidationRequestXml, BHGEZSoldToValidationResponse.class);
						if(null != soldToValidationResponse)
						{
							return processSoldToValidationResponse(soldToValidationResponse);
						}
						else
						{
							return null;
						}
		}
		catch (final Exception exc)
		{
			handleException(exc);
		}
		return null;
	}

	/**
	 *
	 */
	@Override
	public BHGERegisterResponse executeSAPSalesArea(final List<BHGERegisterRequest> registerRequestList)
	{
		try
		{
			// final bhge
						baseSiteService.setCurrentBaseSite(baseSiteService.getBaseSiteForUID("bhge"), true);
						String soldToValidationRequestXml = prepareRequest(registerRequestList);
						//String scpiEndpointUrl = scpiConnector.getSCPIConnection("UserRegistration");
						BHGERegisterRequest request = (BHGERegisterRequest)registerRequestList.get(0);
						String scpiEndpointUrl = null;
						
						//ofs changes start here
						LOG.info("Value of product line "+request.getProductLine());
						if(request.getSrcSystem() != null && request.getSrcSystem() == "OFS") {
							scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_OFS_ENDPOINT_URL,
									flexibleSearchService);
						}
						//ofs changes end here
						else {
							scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_REGISTRATION_ENDPOINT_URL,
									flexibleSearchService);
						}
						
						BHGEZSoldToValidationResponse soldToValidationResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, soldToValidationRequestXml, BHGEZSoldToValidationResponse.class);				
						if(null != soldToValidationResponse)
						{
							return processSalesarea(soldToValidationResponse);
						}
						else
						{
							return null;
						}
		}
		catch (final Exception exc)
		{
			handleException(exc);
		}
		return null;
	}
	
	protected String prepareRequest(final List<BHGERegisterRequest> registerRequestList)
	{
		LOG.debug("Inside Register prepareRequest:soldToValidation START - ");
		String requestXml = null;
		  BHGEZSoldToValidationRequest soldToValidationRequest = new BHGEZSoldToValidationRequest();
		  List<BHGEZSoldtoValidationRequestItem> listsoldToValidationRequestItem = new ArrayList<>();
		  if (registerRequestList != null && registerRequestList.size() > 0)
			{
				for (int ict = 0; ict < registerRequestList.size(); ict++)
				{
					BHGEZSoldtoValidationRequestItem soldToValidationRequestItem = new BHGEZSoldtoValidationRequestItem();
					loadCustomerRecords(registerRequestList.get(ict), soldToValidationRequestItem);
					listsoldToValidationRequestItem.add(soldToValidationRequestItem);
				}
			}
		  soldToValidationRequest.getInputDetails().setItems(listsoldToValidationRequestItem);
		  requestXml = scpiConnector.toXML(soldToValidationRequest);
		  LOG.debug("Inside Register prepareRequest:soldToValidation CLOSE - " + requestXml);
		  return requestXml;
	}
	
	protected BHGERegisterResponse processSalesarea(final BHGEZSoldToValidationResponse soldToValidationResponse)
	{
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		BHGEZSoldtoValidationRequestItem messageTables = soldToValidationResponse.getMessageTable();
		BHGEZSoldtoValidationRequestItem salesTable = soldToValidationResponse.gettSalesArea();
		final List ruleMessageList = new ArrayList<>();
		final int ruleRecordCount = Objects.nonNull(messageTables) ? (CollectionUtils.isNotEmpty(messageTables.getItems()) ? messageTables.getItems().size() : 0) : 0;
		final int ruleRecordCountSalesTable = Objects.nonNull(salesTable) ? (CollectionUtils.isNotEmpty(salesTable.getItems()) ? salesTable.getItems().size() : 0) : 0;
		LOG.info("Register SAP Rule Count - " + ruleRecordCount + " & SAP Sales Count - " + ruleRecordCountSalesTable);
		final Map<String, BHGESoldtoData> soldtoMap = new HashMap();
		String soldtoVal;
		BHGESoldtoData soldtoData;
		if (ruleRecordCount > 0)
		{
			String ruleStatus;
			for (int iCount = 0; iCount < ruleRecordCount; iCount++)
			{
				ruleStatus = cleanupAttribVal(messageTables.getItems().get(iCount).getId());
				soldtoVal = cleanupAttribVal(messageTables.getItems().get(iCount).getMessageV1());
				LOG.debug("Register Soldto Validation - " + soldtoVal + " & " + ruleStatus);
				if (soldtoMap.get(soldtoVal) == null)
				{
					soldtoData = new BHGESoldtoData();
					soldtoMap.put(soldtoVal, soldtoData);
				}
				if (soldtoMap.get(soldtoVal).getSoldtoStatus() == null || !"ERROR".equals(soldtoMap.get(soldtoVal).getSoldtoStatus()))
				{
					soldtoMap.get(soldtoVal).setSoldtoStatus(ruleStatus);
				}
			}
		}
		String salesOrg = null;
		String salesDistrib = null;
		String salesDiv = null;
		if (ruleRecordCountSalesTable > 0)
		{
			for (int jCount = 0; jCount < ruleRecordCountSalesTable; jCount++)
			{
				salesOrg = salesTable.getItems().get(jCount).getSalesOrg();
				salesDistrib = salesTable.getItems().get(jCount).getDistribution();
				salesDiv = salesTable.getItems().get(jCount).getDivision();
				soldtoVal = salesTable.getItems().get(jCount).getCustNo();
				LOG.debug("Register Sales Area Setup - " + salesOrg + "_" + salesDistrib + "_" + salesDiv + " & " + soldtoVal);
				if (soldtoMap.get(soldtoVal) == null)
				{
					soldtoData = new BHGESoldtoData();
					soldtoMap.put(soldtoVal, soldtoData);
				}
				if (soldtoMap.get(soldtoVal).getSalesareaList() == null)
				{
					soldtoMap.get(soldtoVal).setSalesareaList(new ArrayList());
				}
				soldtoMap.get(soldtoVal).getSalesareaList().add(salesOrg + "_" + salesDistrib + "_" + salesDiv);
			}
		}
		registerResponse.setSoldtoData(soldtoMap);
		LOG.debug("Inside Register processSalesarea: CLOSE");
		return registerResponse;
	}

	private void loadCustomerRecords(final BHGERegisterRequest registerRequest, final BHGEZSoldtoValidationRequestItem soldToValidationRequestItem)
	{
		if (registerRequest.getCustomerNumber() != null)
		{
			soldToValidationRequestItem.setCustNo(registerRequest.getCustomerNumber());
		}
		if (registerRequest.getEmail() != null)
		{
			soldToValidationRequestItem.setEmailId(registerRequest.getEmail());
		}
		if (registerRequest.getUserId() != null) {

			int maxLength=Integer.parseInt(Config.getParameter("register.sso.maxlenght"));
			String inputSSO=registerRequest.getUserId();

			if (inputSSO.length() <= maxLength) {

				soldToValidationRequestItem.setSso(inputSSO);
			}
			else{
				soldToValidationRequestItem.setSso(inputSSO.substring(0, maxLength));
			}
		}
		if (registerRequest.getFirstName() != null)
		{
			soldToValidationRequestItem.setFirstName(registerRequest.getFirstName());
		}
		if (registerRequest.getLastName() != null)
		{
			soldToValidationRequestItem.setLastName(registerRequest.getLastName());
		}
		if (registerRequest.getSapContactId() != null)
		{
			soldToValidationRequestItem.setContactId(registerRequest.getSapContactId());
		}
		if (registerRequest.getInsertFlag() != null)
		{
			soldToValidationRequestItem.setInsertFlag(registerRequest.getInsertFlag());
		}
		if (registerRequest.getServiceFlag() != null)
		{
			soldToValidationRequestItem.setServiceIndicator(registerRequest.getServiceFlag());
		}
		if (registerRequest.getSrcSystem() != null)
		{
			soldToValidationRequestItem.setSrcSystem(registerRequest.getSrcSystem());
			soldToValidationRequestItem.setUserEvent(EMPTY_VALUE);
	}
	}

	protected String cleanupAttribVal(final String fieldValue)
	{
		return (StringUtils.isNotBlank(fieldValue) && StringUtils.isNotEmpty(fieldValue)) ? fieldValue.trim() : "";
	}

	
	public void setMediaService(final MediaService mediaService)
	{
		this.mediaService = mediaService;
	}

	
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

	/**
	 * @param sapJcoContainer
	 *           the sapJcoContainer to set
	 */
	public void setSapJcoContainer(final SAPJcoContainer sapJcoContainer)
	{
		this.sapJcoContainer = sapJcoContainer;
	}

	/**
	 * @param baseSiteService
	 *           the baseSiteService to set
	 */
	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}

}
