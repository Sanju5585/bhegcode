/**
 *
 */
package com.bhge.core.rma.service.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.storesession.data.CurrencyData;
import de.hybris.platform.core.AbstractTenant;
import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import com.bhge.facades.rma.data.MaterialData;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.rma.service.BHGERmaServiceOffering;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.zmataccessories.ETMATAccessories;
import com.bhge.core.scpi.rfc.zmataccessories.ETMATAccessoryItem;
import com.bhge.core.scpi.rfc.zmataccessories.ITMATOfferingItem;
import com.bhge.core.scpi.rfc.zmataccessories.ZHYBMatAccessoriesRequest;
import com.bhge.core.scpi.rfc.zmataccessories.ZHYBMatAccessoriesResponse;
import com.bhge.core.scpi.rfc.zofferingprice.BHGEZOfferingPriceDataRequest;
import com.bhge.core.scpi.rfc.zofferingprice.BHGEZOfferingPriceDataRequestItem;
import com.bhge.core.scpi.rfc.zofferingprice.BHGEZOfferingPriceDataResponse;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.data.BHGERMAMultipleFormData;
import com.bhge.facades.rma.data.BHGERmaOfferingData;
import com.bhge.facades.rma.data.ErrorData;
import com.bhge.facades.rma.data.OfferDescriptionData;
import com.bhge.facades.rma.data.OfferingData;
import com.bhge.facades.rma.data.PricingData;
import com.bhge.facades.rma.data.WarrantyData;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;


/**
 * @author 1185137
 *
 */
public class BHGERmaServiceOfferingServiceImpl implements BHGERmaServiceOffering
{

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.service.BHGERmaServiceOffering#getServiceOffering(java.lang.String)
	 */

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "userService")
	public UserService userService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Autowired
	private SCPIConnector scpiConnector;

	private final static Logger LOG = Logger.getLogger(BHGERmaServiceOfferingServiceImpl.class);
	private static final String SCPI_ZHYB_OFF_PRC_DATA_ENDPOINT_URL = "SCPI_ZHYB_OFF_PRC_DATA_ENDPOINT";
	private static final String SCPI_ZHYB_MAT_ACCESSORIES_ENDPOINT_URL = "SCPI_ZHYB_MAT_ACCESSORIES_ENDPOINT";

	@Override
	public List<BHGERmaOfferingData> getServiceOffering(final List<RMAData> data, final boolean equipSearch,
			final String wildSearch, final String searchType)
	{
		final List<BHGERmaOfferingData> dataList = new ArrayList<>();
		final BHGERmaOfferingData offeringData = new BHGERmaOfferingData();
		final Map<String,List<MaterialData>> materialDataTable = new HashMap<>();
		final Map<String, List<WarrantyData>> warrantyTable = new HashMap<>();
		final Map<String, List<OfferingData>> offeringTable = new HashMap<>();
		final Map<String, List<PricingData>> pricingTable = new HashMap<>();
		final Map<String, List<ErrorData>> errorTable = new HashMap<>();

		final List<OfferDescriptionData> offerDescriptionDataTable = new ArrayList<>();

		for (final RMAData part : data)
		{

			try {
				LOG.info("(US563160 -InsideServiceOfferingMethod ===================================");
				final JaloSession currentSession = JaloSession.getCurrentSession();
				final AbstractTenant tenant = Registry.getCurrentTenant();
				final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_OFF_PRC_DATA_ENDPOINT_URL,
						flexibleSearchService);
				BHGEZOfferingPriceDataRequest offeringAndPricingRequest = new BHGEZOfferingPriceDataRequest();
				offeringAndPricingRequest = prepareRequest(offeringAndPricingRequest, part, equipSearch, wildSearch, searchType);
				LOG.info("===================== Service Offering RFC - START ===================" + java.time.LocalDateTime.now());
				Registry.setCurrentTenant(tenant);
				tenant.setActiveSessionForCurrentThread(currentSession);
				final BHGEZOfferingPriceDataResponse responseXML = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
						offeringAndPricingRequest, BHGEZOfferingPriceDataResponse.class);
				LOG.info("US563160 - ResponseXML value" + responseXML.getOfferingDataTable());
				LOG.info("===================== Service Offering RFC - END ===================" + java.time.LocalDateTime.now());
				LOG.info("US563160 - Serailno value" +part.getSerialNumber());
				LOG.info("US563160 - Material value" +part.getMaterialNumber());
				if( StringUtils.isNotBlank( part.getSerialNumber())) {
					LOG.info("US563160 - Inside serail no if");
					materialDataTable.put(part.getMaterialNumber(), prepareServiceOfferingData(responseXML.getMaterialDataInputTable()));
					offeringTable.put(part.getMaterialNumber(), prepareServiceOfferingData(responseXML.getOfferingDataTable(), responseXML.getOfferingTextTable()));
					pricingTable.put(part.getMaterialNumber(), preparePricingData(responseXML.getPricingTable()));
					offerDescriptionDataTable.addAll(prepareServiceOfferingDescription(responseXML.getOfferingDescriptionTable(), responseXML.getOfferingTextTable()));
					final List<WarrantyData> warrantyDataList = prepareWarrantyData(responseXML.getWarrantyTable());
					if (StringUtils.isEmpty(part.getMaterialNumber())) {
						warrantyTable.put("-", warrantyDataList);
					} else {
						warrantyTable.put(part.getMaterialNumber(), warrantyDataList);
					}
					errorTable.put(part.getMaterialNumber(), prepareErrorData(responseXML.getErrorTable()));
				}
				else if (StringUtils.isNotBlank(part.getMaterialNumber())) {
					LOG.info("US563160 - Inside materila no if");
					materialDataTable.put(part.getSerialNumber(), prepareServiceOfferingData(responseXML.getMaterialDataInputTable()));
					offeringTable.put(part.getSerialNumber(), prepareServiceOfferingData(responseXML.getOfferingDataTable(), responseXML.getOfferingTextTable()));
					pricingTable.put(part.getSerialNumber(), preparePricingData(responseXML.getPricingTable()));
					offerDescriptionDataTable.addAll(prepareServiceOfferingDescription(responseXML.getOfferingDescriptionTable(), responseXML.getOfferingTextTable()));
					final List<WarrantyData> warrantyDataList = prepareWarrantyData(responseXML.getWarrantyTable());
					if (StringUtils.isEmpty(part.getSerialNumber())) {
						warrantyTable.put("-", warrantyDataList);
					} else {
						warrantyTable.put(part.getSerialNumber(), warrantyDataList);
					}
					errorTable.put(part.getSerialNumber(), prepareErrorData(responseXML.getErrorTable()));
				}

			}
			catch( final Exception backEndException)
				{
					LOG.info("Inside getServiceOffering catch block with exception: " + backEndException.getMessage());
				}
			}

		offeringData.setOfferDescriptionDataTable(offerDescriptionDataTable);
		offeringData.setMaterialDataTable(materialDataTable);
		offeringData.setPricingDataTable(pricingTable);
		offeringData.setWarrantyDataTable(warrantyTable);
		offeringData.setOfferingsDataTable(offeringTable);
		offeringData.setErrorDescriptionDataTable(errorTable);
		sessionService.setAttribute("latestOfferingData", offeringData);

		dataList.add(offeringData);
		for(final BHGERmaOfferingData dataListItem : dataList){
			LOG.info("US563160 - OfferingData value" +dataListItem.getOfferingsDataTable());
			LOG.info("US563160 - MaterialData value" +dataListItem.getMaterialDataTable());
			LOG.info("US563160 - PricingData value" +dataListItem.getPricingDataTable());
			LOG.info("US563160 - WarrantyData value" +dataListItem.getWarrantyDataTable());
			LOG.info("US563160 - ErrorDescriptionData value" +dataListItem.getErrorDescriptionDataTable());
			LOG.info("US563160 - OfferDescriptionData value" +dataListItem.getOfferDescriptionDataTable());
		}
		LOG.info("US563160 - dataList value" +dataList);

		return dataList;
	}

	private List<MaterialData> prepareServiceOfferingData(BHGEZOfferingPriceDataRequestItem materialDataInputTable) {
		final List<MaterialData> materialDataList =new ArrayList<>();
		LOG.info("US563160 - Inside prepareServiceOfferingData method");
		if (materialDataInputTable != null && CollectionUtils.isNotEmpty(materialDataInputTable.getItems()))
		{
			LOG.info("US563160 - Inside prepareServiceOfferingData method" + materialDataInputTable.getItems());
			for (final BHGEZOfferingPriceDataRequestItem item : materialDataInputTable.getItems())
			{
				LOG.info("US563160 - Inside prepareServiceOfferingData for loop" + item.getRequestMaterialNumber() + " " + item.getRequestSerialNumber());
				final MaterialData  materialData= new MaterialData();
				materialData.setPartNumber(item.getRequestMaterialNumber());
				materialData.setSerialNumber(item.getRequestSerialNumber());
				materialDataList.add(materialData);
			}
		}
		LOG.info("US563160 - Inside prepareServiceOfferingData method materialDataList-"+ materialDataList);
		return materialDataList;
	}

	@Override
	public List<PricingData> getServiceOfferingForOffering(final List<RMAData> data, final String wildSearch,
			final String searchType)
	{
		try
		{
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = Registry.getCurrentTenant();
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_OFF_PRC_DATA_ENDPOINT_URL,
					flexibleSearchService);
			BHGEZOfferingPriceDataRequest offeringAndPricingRequest = new BHGEZOfferingPriceDataRequest();
			offeringAndPricingRequest = prepareRequestForOffering(offeringAndPricingRequest, data, wildSearch, searchType);
			LOG.info("===================== Service Offering RFC - START ===================" + java.time.LocalDateTime.now());
			Registry.setCurrentTenant(tenant);
			tenant.setActiveSessionForCurrentThread(currentSession);
			final BHGEZOfferingPriceDataResponse responseXML = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
					offeringAndPricingRequest, BHGEZOfferingPriceDataResponse.class);
			LOG.info("===================== Service Offering RFC - END ===================" + java.time.LocalDateTime.now());
			LOG.info("Response received successfully for Return RFC");

			return preparePricingDataOffering(responseXML.getPricingTable());

		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside getServiceOffering catch block with exception: " + backEndException.getMessage());
		}
		return null;

	}

	public List<BHGERmaOfferingData> getServiceOfferingsForAccessories(final List<RMAData> data, final boolean equipSearch,
			final String wildSearch, final String searchType)
	{

		final List<BHGERmaOfferingData> dataList = new ArrayList<>();
		final BHGERmaOfferingData offeringData = new BHGERmaOfferingData();

		final Map<String, List<WarrantyData>> warrantyTable = new HashMap<>();
		final Map<String, List<OfferingData>> offeringTable = new HashMap<>();
		final Map<String, List<PricingData>> pricingTable = new HashMap<>();
		final Map<String, List<ErrorData>> errorTable = new HashMap<>();

		final List<OfferDescriptionData> offerDescriptionDataTable = new ArrayList<>();

		try
		{
			final JaloSession currentSession = JaloSession.getCurrentSession();
			final AbstractTenant tenant = Registry.getCurrentTenant();
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_OFF_PRC_DATA_ENDPOINT_URL,
					flexibleSearchService);
			BHGEZOfferingPriceDataRequest offeringAndPricingRequest = new BHGEZOfferingPriceDataRequest();
			offeringAndPricingRequest = prepareRequestForOfferings(offeringAndPricingRequest, data, equipSearch, wildSearch,
					searchType);
			LOG.info("===================== Service Offering RFC - START ===================" + java.time.LocalDateTime.now());
			Registry.setCurrentTenant(tenant);
			tenant.setActiveSessionForCurrentThread(currentSession);
			final BHGEZOfferingPriceDataResponse responseXML = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
					offeringAndPricingRequest, BHGEZOfferingPriceDataResponse.class);
			LOG.info("===================== Service Offering RFC - END ===================" + java.time.LocalDateTime.now());

			offeringTable.put(BhgeCoreConstants.OFFERING, prepareServiceOfferingData(responseXML.getOfferingDataTable(),responseXML.getOfferingTextTable()));
			pricingTable.put(BhgeCoreConstants.PRICING, preparePricingData(responseXML.getPricingTable()));
			offerDescriptionDataTable.addAll(prepareServiceOfferingDescription(responseXML.getOfferingDescriptionTable(),responseXML.getOfferingTextTable()));
			final List<WarrantyData> warrantyDataList = prepareWarrantyData(responseXML.getWarrantyTable());
			warrantyTable.put(BhgeCoreConstants.WARRANTY, warrantyDataList);
			errorTable.put(BhgeCoreConstants.ERROR, prepareErrorData(responseXML.getErrorTable()));

		}
		catch (final Exception backEndException)
		{
			LOG.info("Inside getServiceOffering catch block with exception: " + backEndException.getMessage());
		}

		offeringData.setOfferDescriptionDataTable(offerDescriptionDataTable);
		offeringData.setPricingDataTable(pricingTable);
		offeringData.setWarrantyDataTable(warrantyTable);
		offeringData.setOfferingsDataTable(offeringTable);
		offeringData.setErrorDescriptionDataTable(errorTable);
		sessionService.setAttribute("latestOfferingData", offeringData);

		dataList.add(offeringData);

		return dataList;
	}

	@Override
	public Map<String, Set<String>> generateSAPResponseForAccessory(final String partNum, final List<String> serviceOfferings)
	{
		try
		{
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			final List<String> accessories = new ArrayList<String>();
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection fetched ....");
				final String requestXml = prepareAccessoriesRequest(partNum, serviceOfferings);
				final String scpiEndpointUrl = BHGECommonsUtil
						.getValueFromBHGEGlobalProperties(SCPI_ZHYB_MAT_ACCESSORIES_ENDPOINT_URL, flexibleSearchService);
				return processAccessoriesResponse(scpiEndpointUrl, requestXml);
			}
			return null;
		}
		catch (final Exception exc)
		{
			LOG.info("SAP CALL EXCEPTION :" + exc.getMessage());
			exc.printStackTrace();
		}
		return null;
	}

	/**
	 * Prepares request for offerings API
	 *
	 * @param offeringAndPricingRequest
	 * @param data
	 * @param equipSearch
	 * @param wildSearch
	 * @param searchType
	 * @return
	 * @throws BackendException
	 */
	protected BHGEZOfferingPriceDataRequest prepareRequest(BHGEZOfferingPriceDataRequest offeringAndPricingRequest,
			final RMAData data, final boolean equipSearch, final String wildSearch, final String searchType) throws BackendException
	{
		LOG.info("InsidePrepareRequestMethod ===================================");
		final List<BHGERMAMultipleFormData> dataList = new ArrayList<>();
		final BHGERMAMultipleFormData formData = new BHGERMAMultipleFormData();
		final String MATERIAL_NUM = StringUtils.isNotBlank(data.getMaterialNumber()) ? data.getMaterialNumber() : "";
		final String SERIAL_NUM = StringUtils.isNotBlank(data.getSerialNumber()) ? data.getSerialNumber() : "";
		final String SRV_OFF = StringUtils.isNotBlank(data.getSrvOff()) ? data.getSrvOff() : "";
		final String PLANT = StringUtils.isNotBlank(data.getPlant()) ? data.getPlant() : "";
		LOG.info("MATERIAL_NUM ==================================="+MATERIAL_NUM);
		LOG.info("SERIAL_NUM ==================================="+SERIAL_NUM);
		LOG.info("SRV_OFF ==================================="+SRV_OFF);
		LOG.info("PLANT ==================================="+PLANT);
		formData.setMATERIAL_NUM(MATERIAL_NUM);
		formData.setSERIAL_NUM(SERIAL_NUM);
		formData.setSRV_OFF(SRV_OFF);
		formData.setPLANT(PLANT);
		dataList.add(formData);
		LOG.info("DataListis ==================================="+dataList);
		offeringAndPricingRequest = setFunctionAndDefault(offeringAndPricingRequest, equipSearch);
		for (final BHGERMAMultipleFormData d : dataList)
		{

			final BHGEZOfferingPriceDataRequestItem itemValues = new BHGEZOfferingPriceDataRequestItem();
			//Setting blank values
			itemValues.setRequestMaterialNumber("");
			itemValues.setRequestSerialNumber("");
			itemValues.setRequestServiceOffering("");
			itemValues.setRequestPlant("");

			
			if ("yes".equalsIgnoreCase(wildSearch))
			{
				itemValues
						.setRequestMaterialNumber(fetchSearchPrefix(searchType) + d.getMATERIAL_NUM() + fetchSearchPostfix(searchType));
				itemValues.setRequestSerialNumber(fetchSearchPrefix(searchType) + d.getSERIAL_NUM() + fetchSearchPostfix(searchType));
			}
			else if (equipSearch)
			{
				itemValues
						.setRequestMaterialNumber(fetchSearchPrefix(searchType) + d.getMATERIAL_NUM() + fetchSearchPostfix(searchType));
				itemValues.setRequestSerialNumber(fetchSearchPrefix(searchType) + d.getSERIAL_NUM() + fetchSearchPostfix(searchType));
			}
			else
			{
				itemValues.setRequestMaterialNumber(d.getMATERIAL_NUM());
				itemValues.setRequestSerialNumber(d.getSERIAL_NUM());
			}
			LOG.info("ServiceOfferingSRV_OFF"+d.getSRV_OFF());
			LOG.info("ServiceOfferingPLANT"+d.getPLANT());
			itemValues.setRequestServiceOffering(d.getSRV_OFF());
			itemValues.setRequestPlant(d.getPLANT());
			offeringAndPricingRequest.getMaterialInputTable().getItems().add(itemValues);

		}
		return offeringAndPricingRequest;
	}

	/**
	 * Prepares request for offering API
	 *
	 * @param offeringAndPricingRequest
	 * @param list
	 * @param equipSearch
	 * @param wildSearch
	 * @param searchType
	 * @return
	 * @throws BackendException
	 */
	protected BHGEZOfferingPriceDataRequest prepareRequestForOfferings(BHGEZOfferingPriceDataRequest offeringAndPricingRequest,
			final List<RMAData> list, final boolean equipSearch, final String wildSearch, final String searchType)
			throws BackendException
	{
		final List<BHGERMAMultipleFormData> dataList = new ArrayList<>();
		for (final RMAData data : list)
		{
			final BHGERMAMultipleFormData formData = new BHGERMAMultipleFormData();
			final String MATERIAL_NUM = StringUtils.isNotBlank(data.getMaterialNumber()) ? data.getMaterialNumber() : "";
			final String SERIAL_NUM = StringUtils.isNotBlank(data.getSerialNumber()) ? data.getSerialNumber() : "";
			final String SRV_OFF = StringUtils.isNotBlank(data.getSrvOff()) ? data.getSrvOff() : "";
			final String PLANT = StringUtils.isNotBlank(data.getPlant()) ? data.getPlant() : "";
			formData.setMATERIAL_NUM(MATERIAL_NUM);
			formData.setSERIAL_NUM(SERIAL_NUM);
			formData.setSRV_OFF(PLANT);
			formData.setPLANT(PLANT);
			dataList.add(formData);
		}
		offeringAndPricingRequest = setFunctionAndDefault(offeringAndPricingRequest, equipSearch);
		for (final BHGERMAMultipleFormData d : dataList)
		{
			final BHGEZOfferingPriceDataRequestItem itemValues = new BHGEZOfferingPriceDataRequestItem();
			//Setting blank values
			itemValues.setRequestMaterialNumber("");
			itemValues.setRequestSerialNumber("");
			itemValues.setRequestServiceOffering("");
			itemValues.setRequestPlant("");
			
			if ("yes".equalsIgnoreCase(wildSearch))
			{
				itemValues
						.setRequestMaterialNumber(fetchSearchPrefix(searchType) + d.getMATERIAL_NUM() + fetchSearchPostfix(searchType));
				itemValues.setRequestSerialNumber(fetchSearchPrefix(searchType) + d.getSERIAL_NUM() + fetchSearchPostfix(searchType));
			}
			else if (equipSearch)
			{
				itemValues.setRequestMaterialNumber("%");
				itemValues.setRequestSerialNumber(fetchSearchPrefix(searchType) + d.getSERIAL_NUM() + fetchSearchPostfix(searchType));
			}
			else
			{
				itemValues.setRequestMaterialNumber(d.getMATERIAL_NUM());
				itemValues.setRequestSerialNumber(d.getSERIAL_NUM());
			}
			LOG.info("SERV_OFF value "+d.getSRV_OFF());
			LOG.info("PLANT value "+d.getPLANT());
			itemValues.setRequestServiceOffering(d.getSRV_OFF() != null ? d.getSRV_OFF() : "");
			itemValues.setRequestPlant(d.getPLANT() != null ? d.getPLANT() : "");
			offeringAndPricingRequest.getMaterialInputTable().getItems().add(itemValues);
		}
		return offeringAndPricingRequest;
	}

	private String fetchSearchPrefix(final String searchType)
	{
		String prefixVal = "";
		if (StringUtils.isNotBlank(searchType))
		{
			if ("2".equals(searchType.trim()) || "3".equals(searchType.trim()))
			{
				prefixVal = "%";
			}
		}
		return prefixVal;
	}

	private String fetchSearchPostfix(final String searchType)
	{
		String postfixVal = "";
		if (StringUtils.isNotBlank(searchType))
		{
			if ("2".equals(searchType.trim()) || "1".equals(searchType.trim()))
			{
				postfixVal = "%";
			}
		}
		return postfixVal;
	}

	/**
	 * Prepares request XML for offering API
	 *
	 * @param offeringAndPricingRequest
	 * @param datas
	 * @param wildSearch
	 * @param searchType
	 * @return
	 * @throws BackendException
	 */
	protected BHGEZOfferingPriceDataRequest prepareRequestForOffering(BHGEZOfferingPriceDataRequest offeringAndPricingRequest,
			final List<RMAData> datas, final String wildSearch, final String searchType) throws BackendException
	{
		final List<BHGERMAMultipleFormData> dataList = new ArrayList<>();
		for (final RMAData data : datas)
		{
			final BHGERMAMultipleFormData formData = new BHGERMAMultipleFormData();
			final String MATERIAL_NUM = StringUtils.isNotBlank(data.getMaterialNumber()) ? data.getMaterialNumber() : "";
			final String SERIAL_NUM = StringUtils.isNotBlank(data.getSerialNumber()) ? data.getSerialNumber() : "";
			final String SRV_OFF = StringUtils.isNotBlank(data.getSrvOff()) ? data.getSrvOff() : "";
			final String PLANT = StringUtils.isNotBlank(data.getPlant()) ? data.getPlant() : "";
			formData.setMATERIAL_NUM(MATERIAL_NUM);
			formData.setSERIAL_NUM(SERIAL_NUM);
			formData.setSRV_OFF(SRV_OFF);
			formData.setPLANT(PLANT);
			dataList.add(formData);
		}

		offeringAndPricingRequest = setFunctionAndDefaultForOffering(offeringAndPricingRequest, wildSearch, searchType);

		for (final BHGERMAMultipleFormData d : dataList)
		{
			final BHGEZOfferingPriceDataRequestItem itemValues = new BHGEZOfferingPriceDataRequestItem();
			//Setting blank values
			itemValues.setRequestMaterialNumber("");
			itemValues.setRequestSerialNumber("");
			itemValues.setRequestServiceOffering("");
			itemValues.setRequestPlant("");
			
			itemValues.setRequestMaterialNumber(d.getMATERIAL_NUM());
			itemValues.setRequestSerialNumber(d.getSERIAL_NUM());
			itemValues.setRequestServiceOffering(d.getSRV_OFF());
			itemValues.setRequestPlant(d.getPLANT());
			offeringAndPricingRequest.getMaterialInputTable().getItems().add(itemValues);
		}
		return offeringAndPricingRequest;
	}

	protected String prepareAccessoriesRequest(final String partNum, final List<String> serviceOfferings)
	{
		final ZHYBMatAccessoriesRequest request = new ZHYBMatAccessoriesRequest();

		final String MATERIAL_NUM = StringUtils.isNotBlank(partNum) ? partNum : null;
		final List<String> SRV_OFF = (serviceOfferings != null) ? serviceOfferings : null;

		final List<ITMATOfferingItem> items = new ArrayList<>();

		for (final String s : SRV_OFF)
		{
			final ITMATOfferingItem item = new ITMATOfferingItem();
			item.setMaterialNumber(MATERIAL_NUM);
			item.setServiceOffering(s);
			items.add(item);
		}

		request.getItMatOffering().setItems(items);

		final String requestXml = scpiConnector.toXML(request);
		LOG.info("++++++++++++++++++++++++++ RMA Accessories Request: ++++++++++++++++++++++++++++ " + requestXml);
		return requestXml;
	}

	protected BHGEZOfferingPriceDataRequest setFunctionAndDefault(final BHGEZOfferingPriceDataRequest request,
			final boolean equipSearch) throws BackendException
	{

		if (StringUtils.equals(Config.getParameter("current.env"), "local"))
		{
			request.setCustomerNumber("0000219286");
			request.setSalesOrganization("6180");
			request.setDistributionChannel("GE");
			request.setDivision("GE");
			request.setCurrency("USD");

		}
		else
		{
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			String[] salesAreaIds = null;
			String salesRegionId = null;
			String distributionChannel = null;
			String division = null;
			String custNum = null;
			String sapLanguageCode = null;
			final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
			CurrencyModel currency = null;
			if (null != defaultSoldToUnit)
			{
				final String salesAreaUid = defaultSoldToUnit.getUid();
				if (Objects.nonNull((salesAreaUid)))
				{
					salesAreaIds = salesAreaUid.split("_");
					custNum = salesAreaIds[0];
					salesRegionId = salesAreaIds[1];
					distributionChannel = salesAreaIds[2];
					division = salesAreaIds[3];
				}

				// Getting Currency from Current Customer (Sales Area)
				currency = defaultSoldToUnit.getCurrency();
				
				final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
				// If Currency is Null, get it from Base Store default currency
				if (null == currency)
				{
					if (null != baseStore && null != baseStore.getDefaultCurrency())
					{
						currency = baseStore.getDefaultCurrency();
					}
					else
					{
						currency = commonI18NService.getCurrentCurrency();
					}
				}
				String isoCode = baseStore != null && baseStore.getDefaultLanguage() != null ? baseStore.getDefaultLanguage().getIsocode() : "en";
				sapLanguageCode = getSAPLanguageSymbol(isoCode);
				
			}
			final int l = 10 - custNum.length();
			for (int i = 0; i < l; i++)
			{
				custNum = "0" + custNum;
			}
			request.setCustomerNumber(Config.getString("customer.account", custNum));
			request.setSalesOrganization(Config.getString("customer.account.org", salesRegionId));
			request.setDistributionChannel(distributionChannel);
			request.setDivision(division);
			if (currency != null)
			{
				request.setCurrency(currency.getIsocode());
			}
			if(sapLanguageCode != null)
			{
				LOG.info("SAPLanguageCodeIs ============" +sapLanguageCode);
				request.setLanguage(sapLanguageCode);
			}

		}

			request.setFlag("A");

		return request;
	}
	/**
	 * Language value based on current language for SAP request
	 * @param isoCode
	 * @return
	 */
	private String getSAPLanguageSymbol(String isoCode)
	{
		String sapLanguageCode;
		switch(isoCode)
		{
		 case "de":  sapLanguageCode = "D";
         break;
		 case "pt":  sapLanguageCode = "P";
         break;
		 case "fr":  sapLanguageCode = "F";
         break;
		 case "ru":  sapLanguageCode = "R";
         break;
		 case "zh":  sapLanguageCode = "1";
         break;
		 case "es":  sapLanguageCode = "S";
         break;
		 case "ja":  sapLanguageCode = "J";
         break;
		 case "en":  sapLanguageCode = "E";
         break;
		 default: sapLanguageCode = "E";
         break;
		}
		return sapLanguageCode;
	}

	protected BHGEZOfferingPriceDataRequest setFunctionAndDefaultForOffering(final BHGEZOfferingPriceDataRequest request,
			final String wildSearch, final String searchType) throws BackendException
	{

		if (StringUtils.equals(Config.getParameter("current.env"), "local"))
		{
			request.setCustomerNumber("0000219286");
			request.setSalesOrganization("6180");
			request.setDistributionChannel("GE");
			request.setDivision("GE");
			request.setCurrency("USD");
		}
		else
		{
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			String[] salesAreaIds = null;
			String salesRegionId = null;
			String distributionChannel = null;
			String division = null;
			String custNum = null;
			String sapLanguageCode = null;
			final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
			CurrencyModel currency = null;
			if (null != defaultSoldToUnit)
			{
				final String salesAreaUid = defaultSoldToUnit.getUid();
				if (Objects.nonNull((salesAreaUid)))
				{
					salesAreaIds = salesAreaUid.split("_");
					custNum = salesAreaIds[0];
					salesRegionId = salesAreaIds[1];
					distributionChannel = salesAreaIds[2];
					division = salesAreaIds[3];
				}

				// Getting Currency from Current Customer (Sales Area)
				currency = defaultSoldToUnit.getCurrency();
				final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
				// If Currency is Null, get it from Base Store default currency
				if (null == currency)
				{
					if (null != baseStore && null != baseStore.getDefaultCurrency())
					{
						currency = baseStore.getDefaultCurrency();
					}
					else
					{
						currency = commonI18NService.getCurrentCurrency();
					}
				}
				String isoCode = baseStore != null && baseStore.getDefaultLanguage() != null ? baseStore.getDefaultLanguage().getIsocode() : "en";
				sapLanguageCode = getSAPLanguageSymbol(isoCode);
			}
			final int l = 10 - custNum.length();
			for (int i = 0; i < l; i++)
			{
				custNum = "0" + custNum;
			}
			request.setCustomerNumber(Config.getString("customer.account", custNum));
			request.setSalesOrganization(Config.getString("customer.account.org", salesRegionId));
			request.setDistributionChannel(distributionChannel);
			request.setDivision(division);
			if (currency != null)
			{
				request.setCurrency(currency.getIsocode());
			}
			if(sapLanguageCode != null)
			{
				LOG.info("setFunctionAndDefaultForOffering SAPLanguageCodeIs ============" +sapLanguageCode);
				request.setLanguage(sapLanguageCode);
			}

		}

		request.setFlag("P");

		return request;
	}

	@Resource(name = "sessionService")
	private SessionService sessionService;

	public String getSoldTo()
	{
		final SalesAreaData salesArea = (SalesAreaData) sessionService.getAttribute("defaultSalesAreaData");
		if (null != salesArea)
		{
			return salesArea.getB2bUnitUid();
		}
		return null;
	}

	/**
	 * Populates offering data from response table
	 *
	 * @param responseOfferingTable
	 * @return
	 */
	protected List<OfferingData> prepareServiceOfferingData(final BHGEZOfferingPriceDataRequestItem responseOfferingTable,BHGEZOfferingPriceDataRequestItem responseOfferingTextTable)
	{
		final List<OfferingData> offerDataTable = new ArrayList<>();

		if (responseOfferingTable != null)
		{
			for (final BHGEZOfferingPriceDataRequestItem offerTable : responseOfferingTable.getItems())
			{
				final OfferingData offeringData = new OfferingData();
				final String plant = offerTable.getResponsePlanningPlant();
				offeringData.setServiceOffering(offerTable.getResponseServiceOffering());
				offeringData.setAlternatePlant(offerTable.getResponseAlternatePlant());
				offeringData.setDropShipPlant(offerTable.getResponseDropShipPlant());
				offeringData.setPlanningPlant(plant);
				if(null != offerTable.getResponseMaterialNumber()) {
					LOG.info("Inside Response prepareServiceOfferingData");
					offeringData.setPartNumber(offerTable.getResponseMaterialNumber());
				}
				if (null!=offerTable.getResponseSerialNumber())
				{
					LOG.info("Inside Response serial number prepareServiceOfferingData");
					offeringData.setSerialNumber(offerTable.getResponseSerialNumber());
				}
				if(responseOfferingTextTable != null && CollectionUtils.isNotEmpty(responseOfferingTextTable.getItems()))
				{
					for(BHGEZOfferingPriceDataRequestItem offerTextTable : responseOfferingTextTable.getItems())
					{
						if(offerTable.getResponseMaterialNumber() != null && offerTable.getResponseMaterialNumber().equalsIgnoreCase(offerTextTable.getResponseMaterialNumber()) && offerTable.getResponseServiceOffering() != null && offerTable.getResponseServiceOffering().equalsIgnoreCase(offerTextTable.getResponseServiceOffering())) 
						{
							offeringData.setOfferingText(offerTextTable.getRmaOfferingText());
							offeringData.setOfferingTextConfirmation(offerTextTable.getConfirmation());
						}
					}
					LOG.info("OfferingTextIs =========" +offeringData.getOfferingText());
				}
				
				offerDataTable.add(offeringData);
			}
		}
		return offerDataTable;
	}


	/**
	 * Populates offering description data from response table
	 *
	 * @param responseOfferingDescriptionTable
	 * @return
	 */
	protected List<OfferDescriptionData> prepareServiceOfferingDescription(
			final BHGEZOfferingPriceDataRequestItem responseOfferingDescriptionTable,BHGEZOfferingPriceDataRequestItem responseOfferingTextTable)
	{
		final List<OfferDescriptionData> offerDescriptionDataTable = new ArrayList<>();
		if (responseOfferingDescriptionTable != null)
		{
			for (final BHGEZOfferingPriceDataRequestItem offeringDescriptionTable : responseOfferingDescriptionTable.getItems())
			{
				final OfferDescriptionData offerDescription = new OfferDescriptionData();
				offerDescription.setServiceOffering(offeringDescriptionTable.getResponseServiceOffering());
				offerDescription.setServiceOfferingDescription(offeringDescriptionTable.getOfferingShortDescription());
				offerDescription.setServiceOfferingLongDesc(offeringDescriptionTable.getOfferingLongDescription());
				offerDescription.setCategory(offeringDescriptionTable.getOfferingCategory());
				if(responseOfferingTextTable != null && CollectionUtils.isNotEmpty(responseOfferingTextTable.getItems()))
				{
					for(BHGEZOfferingPriceDataRequestItem offerTextTable : responseOfferingTextTable.getItems())
					{
						LOG.info("OfferingDescTableMaterialNumber =========" +offerTextTable.getResponseMaterialNumber());
						LOG.info("OfferingDescTableServiceOffering =========" +offerTextTable.getResponseServiceOffering());
						if(offerDescription.getServiceOffering() != null && offerDescription.getServiceOffering().equalsIgnoreCase(offerTextTable.getResponseServiceOffering())) 
						{
							offerDescription.setOfferingText(offerTextTable.getRmaOfferingText());
							offerDescription.setOfferingTextConfirmation(offerTextTable.getConfirmation());
						}
					}
				}
				
				
				offerDescriptionDataTable.add(offerDescription);
			}
		}
		OfferDescriptionData offerDescription = new OfferDescriptionData(); // to be removed after actual implementation
		offerDescription.setServiceOffering("REP");
		offerDescription.setServiceOfferingDescription("REPAIR");
		offerDescriptionDataTable.add(offerDescription);

		offerDescription = new OfferDescriptionData(); // to be removed after actual implementation
		offerDescription.setServiceOffering("TES");
		offerDescription.setServiceOfferingDescription("NEW TEST CALIBRATION 3");
		offerDescriptionDataTable.add(offerDescription);
		return offerDescriptionDataTable;
	}

	/**
	 * Populates warranty data from response table
	 *
	 * @param responseWarrantyTable
	 * @return
	 */
	protected List<WarrantyData> prepareWarrantyData(final BHGEZOfferingPriceDataRequestItem responseWarrantyTable)
	{
		final List<WarrantyData> warrantyDataList = new ArrayList<>();
		if (responseWarrantyTable != null)
		{
			for (final BHGEZOfferingPriceDataRequestItem warrantyDataTable : responseWarrantyTable.getItems())
			{
				final WarrantyData warrantyData = new WarrantyData();
				warrantyData.setEquipmentNumber(warrantyDataTable.getWarrantyEquipmentNumber());
				if(null != warrantyDataTable.getResponseMaterialNumber()) {
					warrantyData.setPartNumber(warrantyDataTable.getResponseMaterialNumber());
				}
				warrantyData.setWarrantyText(warrantyDataTable.getWarrantyText());
				if(null != warrantyDataTable.getResponseSerialNumber()) {
					warrantyData.setPartSerialNumber(warrantyDataTable.getResponseSerialNumber());
				}
				warrantyData.setWarrantyDate(warrantyDataTable.getWarrantyDate());

				warrantyDataList.add(warrantyData);
			}
		}
		return warrantyDataList;
	}

	protected Map<String, Set<String>> processAccessoriesResponse(final String scpiEndpointUrl, final String accessoriesRequest)
	{
		final ZHYBMatAccessoriesResponse accessoriesResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
				accessoriesRequest, ZHYBMatAccessoriesResponse.class);
		LOG.info("++++++++++++++++++++++++++ RMA Accessories Response: ++++++++++++++++++++++++++++ "
				+ scpiConnector.toXML(accessoriesResponse));
		//final List<String> accessories = new ArrayList<>();
		final Map<String, Set<String>> accessoryMap = new HashMap<>();

		final ETMATAccessories accessories = accessoriesResponse.getAccessories();
		if (CollectionUtils.isNotEmpty(accessories.getItems()))
		{
			final List<ETMATAccessoryItem> accessoriesList = accessories.getItems();
			for (final ETMATAccessoryItem etmatAccessoryItem : accessoriesList)
			{

				final String service = etmatAccessoryItem.getServiceOffering();
				final String accessory = etmatAccessoryItem.getUpMaterial();

				if (MapUtils.isNotEmpty(accessoryMap) && accessoryMap.containsKey(accessory))
				{
					accessoryMap.get(accessory).add(service);
				}
				else
				{
					final Set<String> empty = new HashSet<>();
					accessoryMap.put(accessory, empty);
					accessoryMap.get(accessory).add(service);
				}

			}

		}
		return accessoryMap;
	}

	/**
	 * POpulates error data from response table
	 *
	 * @param responseErrorTable
	 * @return
	 */
	protected List<ErrorData> prepareErrorData(final BHGEZOfferingPriceDataRequestItem responseErrorTable)
	{
		final List<ErrorData> errorDataList = new ArrayList<>();
		if (responseErrorTable != null)
		{
			for (final BHGEZOfferingPriceDataRequestItem errorDataTable : responseErrorTable.getItems())
			{
				final ErrorData errorData = new ErrorData();
				errorData.setMaterialNumber(errorDataTable.getResponseMaterialNumber());
				errorData.setSerialNumber(errorDataTable.getResponseSerialNumber());
				errorData.setWerks(errorDataTable.getResponseWerks());
				errorData.setZsrvOff(errorDataTable.getResponseServiceOffering());
				errorData.setMessage(errorDataTable.getErrorMessage());
				errorDataList.add(errorData);
			}
		}
		return errorDataList;
	}

	/**
	 * Return list of pricing data on service offerings
	 *
	 * @param responsePriceTable
	 * @return
	 */
	protected List<PricingData> preparePricingData(final BHGEZOfferingPriceDataRequestItem responsePricingTable)
	{
		final List<PricingData> pricingDataList = new ArrayList<>();
		final DecimalFormat df = new DecimalFormat("0.00");
		if (responsePricingTable != null)
		{
			for (final BHGEZOfferingPriceDataRequestItem pricingDataTable : responsePricingTable.getItems())
			{
				final PricingData pricingData = new PricingData();
				final CurrencyData currency = new CurrencyData();
				currency.setName(pricingDataTable.getPricingCurrency());
				pricingData.setCurrency(currency);
				pricingData.setUnitPrice(pricingDataTable.getUnitPrice());
				if(null != pricingDataTable.getResponseMaterialNumber()) {
					pricingData.setPartNumber(pricingDataTable.getResponseMaterialNumber());
				}
				if(null != pricingDataTable.getResponseSerialNumber()){
					pricingData.setSerialNumber(pricingDataTable.getResponseSerialNumber());
				}
				pricingData.setPlant(pricingDataTable.getResponseWerks());
				pricingData.setServiceOffering(pricingDataTable.getResponseServiceOffering());

				final Double origPriceVal = new Double(pricingData.getUnitPrice());
				final Double discountVal = new Double(pricingDataTable.getDiscountPrice());
				double finalPriceVal;
				if (discountVal.doubleValue() < 0)
				{
					finalPriceVal = origPriceVal.doubleValue() * (-1.00 * discountVal.doubleValue() / 100);
				}
				else
				{
					finalPriceVal = origPriceVal.doubleValue() * (discountVal.doubleValue() / 100);
				}
				pricingData.setUnitDiscount(df.format(finalPriceVal));
				pricingDataList.add(pricingData);

			}
		}
		return pricingDataList;
	}

	/**
	 * Return list of pricing data on service offerings
	 *
	 * @param responsePriceTable
	 * @return
	 */
	protected List<PricingData> preparePricingDataOffering(final BHGEZOfferingPriceDataRequestItem responsePriceTable)
	{
		final List<PricingData> pricingDataList = new ArrayList<>();
		final DecimalFormat df = new DecimalFormat("0.00");
		if (responsePriceTable != null)
		{
			LOG.info("responsePriceTable size: "+responsePriceTable.getItems().size());
			for (final BHGEZOfferingPriceDataRequestItem pricingDataTable : responsePriceTable.getItems())
			{
				final PricingData pricingData = new PricingData();
				final CurrencyData currency = new CurrencyData();
				currency.setName(pricingDataTable.getPricingCurrency());
				pricingData.setCurrency(currency);
				LOG.info("UnitPrice: "+pricingDataTable.getUnitPrice());
				pricingData.setUnitPrice(pricingDataTable.getUnitPrice());
				pricingData.setPartNumber(pricingDataTable.getResponseMaterialNumber());
				pricingData.setPlant(pricingDataTable.getResponseWerks());
				LOG.info("ResponseServiceOffering: "+pricingDataTable.getResponseServiceOffering());
				pricingData.setServiceOffering(pricingDataTable.getResponseServiceOffering());

				final Double origPriceVal = new Double(pricingData.getUnitPrice());
				final Double discountVal = new Double(pricingDataTable.getDiscountPrice());
				double finalPriceVal;
				if (discountVal.doubleValue() < 0)
				{
					finalPriceVal = origPriceVal.doubleValue() * (-1.00 * discountVal.doubleValue() / 100);
				}
				else
				{
					finalPriceVal = origPriceVal.doubleValue() * (discountVal.doubleValue() / 100);
				}
				LOG.info("finalPriceVal for discount: "+df.format(finalPriceVal));
				pricingData.setUnitDiscount(df.format(finalPriceVal));
				pricingDataList.add(pricingData);

			}
		}
		LOG.info("PricingDataList size: "+pricingDataList.size());
		return pricingDataList;
	}

	@Override
	public List<String> getPartNumsForSearch(final String partNo, final String srNo)
	{

		LOG.info("Inside getPartNumsForSearch");
		//return rfcCallForPartNumber(partNo,srNo);
		return mockCallForPartNumber(partNo, srNo);


	}

	protected List<String> rfcCallForPartNumber(final String partNo, final String srNo)
	{

		List<String> partNums = new ArrayList<String>();

		final JCoConnection connection = sapJcoContainer.getRFCConnection();
		LOG.info("Connection fetched ....");
		try
		{
			if (connection != null && !connection.isBackendOffline())
			{
				LOG.info("Connection finalized ....");

				LOG.info("Condition Check 1 ....");
				final JCoFunction function = preparePartNoOrSrNoRequest(partNo, srNo, connection);
				LOG.debug("getPartNumsForSearch Request: " + function.toXML());
				LOG.info("getPartNumsForSearch Request: " + function.toXML());
				connection.execute(function);
				partNums = processPartNoResponse(function);
			}
		}
		catch (final BackendException e)
		{
			LOG.info("Issue with connection");
			return null;
		}
		return partNums;
	}

	protected List<String> mockCallForPartNumber(final String partNo, final String srNo)
	{

		LOG.info("Inside Part Number MockCall");
		final List<String> products = new ArrayList<String>();
		products.add("118-560-007");
		products.add("118-560-026");

		return products;

	}

	protected JCoFunction preparePartNoOrSrNoRequest(final String partNo, final String srNo, final JCoConnection connection)
			throws BackendException
	{


		LOG.info("Inside preparePartNoOrSrNoRequest");
		final JCoFunction function = setPartNoOrSrNoForSearch(partNo, srNo, connection);
		return function;
	}

	protected JCoFunction setPartNoOrSrNoForSearch(final String partNo, final String srNo, final JCoConnection connection)
			throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Setting the Default Input parameters for Part No search");
		}
		LOG.info("Inside setPartNoOrSrNoForSearch");
		final String partNoFunction = Config.getString("SAP_ORDER_HISTORY_FUNCTION", "Z_SORDER_HISTORY");
		final JCoFunction function = connection.getFunction(partNoFunction);
		if (!partNo.isEmpty() && !srNo.isEmpty())
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, partNo);
			function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, srNo);
		}
		else if (partNo.isEmpty() && !srNo.isEmpty())
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.CP_TYPE, srNo);
		}

		LOG.debug("New Function without CP TYPE" + function.getImportParameterList());

		return function;
	}

	protected List<String> processPartNoResponse(final JCoFunction function)
	{
		LOG.debug("Products for part number Response: " + function.toXML());
		processErrors(function);
		if (!processProductDataForPartNoOrSrNo(function).isEmpty())
		{
			return processProductDataForPartNoOrSrNo(function);
		}
		else
		{
			LOG.debug("No Part Number Found");
			return null;
		}
	}

	private void processErrors(final JCoFunction function)
	{
	}

	private List<String> processProductDataForPartNoOrSrNo(final JCoFunction function)
	{

		final List<String> partNumList = null;
		final JCoTable productDetailsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MT_SALES_ORDER_HEADER);
		final int productHeaderCount = productDetailsTable.getNumRows();

		if (productHeaderCount > 0)
		{
			for (int i = 0; i < productHeaderCount; i++)
			{
				final String partNum = productDetailsTable.getString(BhgeCoreConstants.GE_SALES_ORDER);
				if (StringUtils.isNotBlank(partNum))
				{
					partNumList.add(partNum);
				}
				productDetailsTable.nextRow();
			}
			return partNumList;
		}
		else
		{
			return null;
		}
	}

}
