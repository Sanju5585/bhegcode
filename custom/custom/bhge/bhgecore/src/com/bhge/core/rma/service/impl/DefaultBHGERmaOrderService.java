package com.bhge.core.rma.service.impl;

import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.daos.UserDao;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.cronjob.BHGERMAAttachmentJob;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.model.BHGERmaEquipSerialNumberModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.rma.service.BHGERmaFormService;
import com.bhge.core.rma.service.BHGERmaOrderService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.registration.BHGEZSoldToValidationResponse;
import com.bhge.core.scpi.rfc.rma.create.ZHYBRMACreateRequest;
import com.bhge.core.scpi.rfc.rma.create.ZHYBRMACreateRequestItem;
import com.bhge.core.scpi.rfc.rma.create.ZHYBRMACreateResponse;
import com.bhge.core.scpi.rfc.rma.create.ZHYBRMAHeaderData;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.bhge.facades.rma.data.BHGERmaFormData;
import com.bhge.facades.rma.data.RMAOrderRFCData;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;
import com.sap.conn.jco.JCoField;
import com.sap.conn.jco.JCoFieldIterator;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoStructure;
import com.sap.conn.jco.JCoTable;


public class DefaultBHGERmaOrderService implements BHGERmaOrderService
{


	protected ModelService modelService;
	public SessionService sessionService;

	private static final Logger LOG = Logger.getLogger(DefaultBHGERmaOrderService.class);

	private static final String BUY = "BUY";
	private static final String RETURNS = "RETURNS";
	public static final String ZHYB_RMA_CREATE = "ZHYB_RMA_CREATE";

	public static final String ZHYB_MAT_ACCESSORIES = "ZHYB_MAT_ACCESSORIES";
	private static final String SCPI_ZHYB_ECOM_RMA_CREATE_ENDPOINT_URL = "SCPI_ZHYB_ECOM_RMA_CREATE_ENDPOINT";

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "baseSiteService")
	private BaseSiteService siteService;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "bhgeRmaFormService")
	public BHGERmaFormService bhgeRmaFormService;

	@Resource(name = "bhgeHazardousInfoReversePopulator")
	private Populator bhgeHazardousInfoReversePopulator;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;
	
	@Autowired
	SCPIConnector scpiConnector;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "userDao")
	private UserDao userDao;




	public SessionService getSessionService()
	{
		return sessionService;
	}

	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}



	public ModelService getModelService()
	{
		return modelService;
	}

	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}





	/*
	 * @Override public RMAOrderRFCData generateSAPResponseForRMA(final AbstractOrderModel orderModel) { try { final
	 * JCoConnection connection = sapJcoContainer.getRFCConnection(); RMAOrderRFCData result = new RMAOrderRFCData(); if
	 * (connection != null && !connection.isBackendOffline()) { LOG.info("Connection fetched ...."); final JCoFunction
	 * function = prepareRequest(connection, orderModel);
	 * LOG.info("++++++++++++++++++++++++++RMA Status Request:++++++++++++++++++++++++++++ " + function.toXML());
	 * connection.execute(function); LOG.info("--------------------------Fast Order Response:-------------------------- "
	 * + function.toXML()); result = processResponse(function); } return result; } catch (final Exception exc) {
	 * LOG.info("SAP CALL EXCEPTION :" + exc.getMessage()); exc.printStackTrace(); } return null; }
	 */
	
	@Override
	public RMAOrderRFCData generateSAPResponseForRMA(final AbstractOrderModel orderModel)
	{
		RMAOrderRFCData result = new RMAOrderRFCData();
		try
		{
			//final JCoFunction function = prepareRequest(orderModel);
			final ZHYBRMACreateRequest rmaCreateRequest = prepareRequest(orderModel);
			String rmaCreateRequestXml = scpiConnector.toXML(rmaCreateRequest);
			LOG.info("++++++++++++++++++++++++++RMA Create Request:++++++++++++++++++++++++++++ " + rmaCreateRequestXml);
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_ECOM_RMA_CREATE_ENDPOINT_URL,
						flexibleSearchService);
			ZHYBRMACreateResponse rmaCreateResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, rmaCreateRequestXml, ZHYBRMACreateResponse.class);
			result = processResponse(rmaCreateResponse);
			return result;
		}
		catch (final Exception exc)
		{
			LOG.info("SAP CALL EXCEPTION :" + exc.getMessage());
			exc.printStackTrace();
			result.setErrorNumber(exc.getMessage());
		}
		return result;
	}

	protected JCoFunction prepareRequest(final JCoConnection connection, final AbstractOrderModel orderModel)
			throws BackendException
	{
		LOG.info("Inside prepareRequest - RMA Status");
		final JCoFunction function = setFunctionAndDefault(connection);
		LOG.info(function);
		final JCoFieldIterator iter = function.getTableParameterList().getFieldIterator();
		final JCoFieldIterator iter2 = function.getImportParameterList().getFieldIterator();
		Map<Map<String, String>, Map<String, String>> responseList = null;
		if (StringUtils.equals(Config.getParameter("current.env"), "local"))
		{
			//responseList = mockService(orderModel);
			responseList = sapHeaderDetails(orderModel);
		}
		else
		{
			responseList = sapHeaderDetails(orderModel);
		}
		for (final Map.Entry<Map<String, String>, Map<String, String>> entrylist : responseList.entrySet())
		{
			{
				while (iter2.hasNextField())
				{
					final JCoField a = iter2.nextField();
					if (a.getName().equals(BhgeCoreConstants.RMA_HEADERDATA_TABLE) && a.isStructure())
					{
						final JCoStructure structure = a.getStructure();
						for (final Map.Entry<String, String> entry : entrylist.getKey().entrySet())
						{
							valueSetterForStruct(entry.getValue(), structure, entry.getKey());
						}
						LOG.info("RMA Create HEADER - Data Model Print 07.A - " + orderModel.getReqHeaderDeliveryDate());
						structure.setValue(BhgeCoreConstants.HEADER_DELIVERY_DATE_ORDER_CREATE, orderModel.getReqHeaderDeliveryDate());
					}
				}
				while (iter.hasNextField())
				{
					final JCoField f = iter.nextField();
					final JCoTable table = f.getTable();
					if (f.getName().equals(BhgeCoreConstants.RMA_ITEMDATA_TABLE) && f.isTable())
					{

						int entryCounter = 1;
						for (final AbstractOrderEntryModel orderEntry : orderModel.getEntries())
						{
							LOG.info("	RMA Create LINE - Data Model Print 01 - " + orderEntry.getEntryNumber() + " | "
									+ orderEntry.getPartNumber() + " | " + orderEntry.getQuantity());

							table.appendRow();
							table.setValue(BhgeCoreConstants.MATERIAL_NUM_RMA_ORDER_CREATE,
									checkNullForString(orderEntry.getPartNumber()));

							table.setValue(BhgeCoreConstants.LINE_ITEM,
									BHGESAPJCoUtils.addLeadingZeros(String.valueOf(entryCounter), 4));
							table.setValue(BhgeCoreConstants.QUANTITY, orderEntry.getQuantity());
							String serialNumber = "";
							if (orderEntry.getBhgeRmaEquipSerialNumber() != null)
							{
								for (final BHGERmaEquipSerialNumberModel entry : orderEntry.getBhgeRmaEquipSerialNumber())
								{
									LOG.info("		RMA Create LINE - Data Model Print 01.A - " + entry.getSerialNumber());
									if (StringUtils.isNotBlank(entry.getSerialNumber()))
									{
										serialNumber += BHGESAPJCoUtils.isNumericData(entry.getSerialNumber())
												? BHGESAPJCoUtils.addLeadingZeros(entry.getSerialNumber(), 18)+", "
												: entry.getSerialNumber()+", ";
									}
								}

								String finalSerialNumber= Optional.ofNullable(serialNumber.trim())
										.filter(str -> str.length() != 0)
										.map(str -> str.substring(0, str.length() -1))
										.orElse(serialNumber);
								//serialNumber = serialNumber.substring(0, serialNumber.lastIndexOf(","));
								table.setValue(BhgeCoreConstants.SERIAL_NUM_RMA_ORDER_CREATE, checkNullForString(finalSerialNumber));
							}
							LOG.info("		RMA Create LINE - Data Model Print 01.B - " + orderEntry.getSimilarPart());
							if (orderEntry.getSimilarPart() != null)
							{
								table.setValue(BhgeCoreConstants.SIMILAR_PART_RMA_ORDER_CREATE,
										checkBooleanValues(orderEntry.getSimilarPart()));
							}
							if (orderModel.getBhgeHazardousInfo() != null)
							{
								LOG.info("		RMA Create LINE - Data Model Print 01.C - "
										+ orderModel.getBhgeHazardousInfo().getDeclerationB());
								table.setValue(BhgeCoreConstants.HAZARDOUS_PART_ORDER_CREATE,
										checkBooleanValues(orderModel.getBhgeHazardousInfo().getDeclerationA()));
							}

							if (orderEntry.getBhgeServiceOfferings().isEmpty())
							{
								if (orderEntry.getProblemDescLong() != null && !orderEntry.getProblemDescLong().isEmpty())
								{
									table.setValue(BhgeCoreConstants.PROBLEM_DESCRIPTION,
											checkNullForString((orderEntry.getProblemDescLong())));
								}
							}


							if (orderEntry.getBhgeServiceOfferings() != null)
							{
								for (final BHGEServiceOfferingsModel serviceEntry : orderEntry.getBhgeServiceOfferings())
								{
									if (serviceEntry != null)
									{

										LOG.info("			RMA Create LINE - Data Model Print 02.A - " + serviceEntry.getOfferingCode()
												+ " | " + serviceEntry.getOfferingType());

										if (serviceEntry.getOfferingCode() != null && serviceEntry.getOfferingType() != null)
										{
											if ("SRV1".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
											{
												table.setValue(BhgeCoreConstants.OFFERING1_RMA_ORDER_CREATE,
														checkNullForString(serviceEntry.getOfferingCode()));
											}
											else if ("SRV2".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
											{
												table.setValue(BhgeCoreConstants.OFFERING2_RMA_ORDER_CREATE,
														checkNullForString(serviceEntry.getOfferingCode()));
											}
											else if ("SRV3".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
											{
												table.setValue(BhgeCoreConstants.OFFERING3_RMA_ORDER_CREATE,
														checkNullForString(serviceEntry.getOfferingCode()));
											}
											else if ("SRV4".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
											{
												table.setValue(BhgeCoreConstants.OFFERING4_RMA_ORDER_CREATE,
														checkNullForString(serviceEntry.getOfferingCode()));
											}
											else if ("SRV5".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
											{
												table.setValue(BhgeCoreConstants.OFFERING5_RMA_ORDER_CREATE,
														checkNullForString(serviceEntry.getOfferingCode()));
											}
										}

										LOG.info("			RMA Create LINE - Data Model Print 02.B - " + serviceEntry.getOfferingText()
												+ " | " + serviceEntry.getOtherDetails());
										if (serviceEntry.getOfferingText() != null && !serviceEntry.getOfferingText().isEmpty())
										{
											table.setValue(BhgeCoreConstants.OFFERING_TEXT,
													checkNullForString(serviceEntry.getOfferingText()));
										}
										if (serviceEntry.getOtherDetails() != null && !serviceEntry.getOtherDetails().isEmpty())
										{
											table.setValue(BhgeCoreConstants.TIL_DETAILS_RMA_ORDER_CREATE,
													checkNullForString(serviceEntry.getOtherDetails()));
										}
										if (serviceEntry.getProblemDescLong() != null && !serviceEntry.getProblemDescLong().isEmpty())
										{
											table.setValue(BhgeCoreConstants.PROBLEM_DESCRIPTION,
													checkNullForString((serviceEntry.getProblemDescLong())));
										}
									}
								}
							}


							LOG.info("		RMA Create LINE - Data Model Print 03.A - " + orderEntry.getProductDetails() + " | "
									+ orderEntry.getProblemDescLong() + " | " + orderEntry.getLineNotes() + " | "
									+ orderEntry.getOtherDetails());
							if (orderEntry.getOtherDetails() != null && !orderEntry.getOtherDetails().isEmpty())
							{
								table.setValue(BhgeCoreConstants.TIL_DETAILS_RMA_ORDER_CREATE,
										checkNullForString(orderEntry.getOtherDetails()));
							}
							table.setValue(BhgeCoreConstants.PRODUCT_DETAILS, checkNullForString(orderEntry.getProductDetails()));
							table.setValue(BhgeCoreConstants.LINE_NOTES, orderEntry.getLineNotes());
							if (orderEntry.getBhgeAdditionalInfo() != null)

							{
								final SimpleDateFormat date = new SimpleDateFormat("yyyy");
								LOG.info("RMA Create LINE - Data Model Print 03.B - "
										+ orderEntry.getBhgeAdditionalInfo().getManufactureYear() + " | "
										+ orderEntry.getBhgeAdditionalInfo().getIsAccessoryPresent() + " | "
										+ orderEntry.getBhgeAdditionalInfo().getAccessoriesNotes() + " | "
										+ orderEntry.getBhgeAdditionalInfo().getManufactureYear());
								if (orderEntry.getBhgeAdditionalInfo().getWarrantyInfoLong() != null
										&& !orderEntry.getBhgeAdditionalInfo().getWarrantyInfoLong().isEmpty())
								{
									table.setValue(BhgeCoreConstants.UNDER_WARRANTY_RMA_ORDER_CREATE,
											checkNullForString(orderEntry.getBhgeAdditionalInfo().getWarrantyInfoLong()));
								}
								if (orderEntry.getBhgeAdditionalInfo().getManufactureYear() != null)
								{
									table.setValue(BhgeCoreConstants.MFG_YEAR_RMA_ORDER_CREATE,
											date.format(orderEntry.getBhgeAdditionalInfo().getManufactureYear()));
								}
								table.setValue(BhgeCoreConstants.ISACCESSORY_PRESENT,
										checkBooleanValues(orderEntry.getBhgeAdditionalInfo().getIsAccessoryPresent()));
								table.setValue(BhgeCoreConstants.ACCESSORIES_NOTES,
										orderEntry.getBhgeAdditionalInfo().getServiceNotesLong());
							}
							entryCounter++;
						}
					}
				}
			}
			LOG.info("-------------------RMA  Request------------------- " + function.toXML());
		}
		return function;
	}
	
	
	protected ZHYBRMACreateRequest prepareRequest(final AbstractOrderModel orderModel)
			throws BackendException
	{
		LOG.info("Inside prepareRequest - RMA Status");
		final ZHYBRMACreateRequest rmaCreateRequest = new ZHYBRMACreateRequest();
		ZHYBRMAHeaderData rmaHeaderDetail = new ZHYBRMAHeaderData();		
		if (StringUtils.equals(Config.getParameter("current.env"), "local"))
		{
			//responseList = mockService(orderModel);
			rmaHeaderDetail = sapHeaderDetails(orderModel, rmaHeaderDetail);
		}
		else
		{
			rmaHeaderDetail = sapHeaderDetails(orderModel, rmaHeaderDetail);
		}
		if(null != rmaHeaderDetail)
		{
			LOG.info("RMA Create HEADER - Data Model Print 07.A - " + orderModel.getReqHeaderDeliveryDate());
			rmaHeaderDetail.setHeaderDeliveryDate(null != orderModel.getReqHeaderDeliveryDate() ? new SimpleDateFormat("yyyy-MM-dd").format(orderModel.getReqHeaderDeliveryDate()) : null);
			rmaCreateRequest.setRmaHeaderData(rmaHeaderDetail);
			
			int entryCounter = 1;
			for (final AbstractOrderEntryModel orderEntry : orderModel.getEntries())
			{
				final ZHYBRMACreateRequestItem rmaItemData = new ZHYBRMACreateRequestItem();
				LOG.info("	RMA Create LINE - Data Model Print 01 - " + orderEntry.getEntryNumber() + " | "
						+ orderEntry.getPartNumber() + " | " + orderEntry.getQuantity());

				rmaItemData.setMaterial(checkNullForString(orderEntry.getPartNumber()));

				rmaItemData.setLineItem(BHGESAPJCoUtils.addLeadingZeros(String.valueOf(entryCounter), 4));
				rmaItemData.setQuantity(null != orderEntry.getQuantity() ? orderEntry.getQuantity().toString() : null);
				String serialNumber = "";
				if (orderEntry.getBhgeRmaEquipSerialNumber() != null)
				{
					for (final BHGERmaEquipSerialNumberModel entry : orderEntry.getBhgeRmaEquipSerialNumber())
					{
						LOG.info("		RMA Create LINE - Data Model Print 01.A - " + entry.getSerialNumber());
						if (StringUtils.isNotBlank(entry.getSerialNumber()))
						{
							serialNumber += BHGESAPJCoUtils.isNumericData(entry.getSerialNumber())
									? BHGESAPJCoUtils.addLeadingZeros(entry.getSerialNumber(), 18)+", "
									: entry.getSerialNumber()+", ";
						}
					}

					String finalSerialNumber= Optional.ofNullable(serialNumber.trim())
							.filter(str -> str.length() != 0)
							.map(str -> str.substring(0, str.length() -1))
							.orElse(serialNumber);
					//serialNumber = serialNumber.substring(0, serialNumber.lastIndexOf(","));
					rmaItemData.setSerialNum(checkNullForString(finalSerialNumber));
				}
				LOG.info("		RMA Create LINE - Data Model Print 01.B - " + orderEntry.getSimilarPart());
				if (orderEntry.getSimilarPart() != null)
				{
					rmaItemData.setSimilarPart(checkBooleanValues(orderEntry.getSimilarPart()));
				}
				if (orderModel.getBhgeHazardousInfo() != null)
				{
					LOG.info("		RMA Create LINE - Data Model Print 01.C - "
							+ orderModel.getBhgeHazardousInfo().getDeclerationB());
					rmaItemData.setHazardousPart(checkBooleanValues(orderModel.getBhgeHazardousInfo().getDeclerationA()));
				}

				if (orderEntry.getBhgeServiceOfferings().isEmpty())
				{
					if (orderEntry.getProblemDescLong() != null && !orderEntry.getProblemDescLong().isEmpty())
					{
						rmaItemData.setProblemDescription(checkNullForString((orderEntry.getProblemDescLong())));
					}
				}


				if (orderEntry.getBhgeServiceOfferings() != null)
				{
					for (final BHGEServiceOfferingsModel serviceEntry : orderEntry.getBhgeServiceOfferings())
					{
						if (serviceEntry != null)
						{

							LOG.info("			RMA Create LINE - Data Model Print 02.A - " + serviceEntry.getOfferingCode()
									+ " | " + serviceEntry.getOfferingType());

							if (serviceEntry.getOfferingCode() != null && serviceEntry.getOfferingType() != null)
							{
								if ("SRV1".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
								{
									rmaItemData.setOffering1(checkNullForString(serviceEntry.getOfferingCode()));
								}
								else if ("SRV2".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
								{
									rmaItemData.setOffering2(checkNullForString(serviceEntry.getOfferingCode()));
								}
								else if ("SRV3".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
								{
									rmaItemData.setOffering3(checkNullForString(serviceEntry.getOfferingCode()));
								}
								else if ("SRV4".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
								{
									rmaItemData.setOffering4(checkNullForString(serviceEntry.getOfferingCode()));
								}
								else if ("SRV5".equalsIgnoreCase(serviceEntry.getOfferingType().toString()))
								{
									rmaItemData.setOffering5(checkNullForString(serviceEntry.getOfferingCode()));
								}
							}

							LOG.info("			RMA Create LINE - Data Model Print 02.B - " + serviceEntry.getOfferingText()
									+ " | " + serviceEntry.getOtherDetails());
							if (serviceEntry.getOfferingText() != null && !serviceEntry.getOfferingText().isEmpty())
							{
								rmaItemData.setOfferingText(checkNullForString(serviceEntry.getOfferingText()));
							}
							if (serviceEntry.getOtherDetails() != null && !serviceEntry.getOtherDetails().isEmpty())
							{
								rmaItemData.setTilDetails(checkNullForString(serviceEntry.getOtherDetails()));
							}
							if (serviceEntry.getProblemDescLong() != null && !serviceEntry.getProblemDescLong().isEmpty())
							{
								rmaItemData.setProblemDescription(checkNullForString((serviceEntry.getProblemDescLong())));
							}
						}
					}
				}


				LOG.info("		RMA Create LINE - Data Model Print 03.A - " + orderEntry.getProductDetails() + " | "
						+ orderEntry.getProblemDescLong() + " | " + orderEntry.getLineNotes() + " | "
						+ orderEntry.getOtherDetails());
				if (orderEntry.getOtherDetails() != null && !orderEntry.getOtherDetails().isEmpty())
				{
					rmaItemData.setTilDetails(checkNullForString(orderEntry.getOtherDetails()));
				}
				rmaItemData.setProductDetails(checkNullForString(orderEntry.getProductDetails()));
				rmaItemData.setLineNotes(orderEntry.getLineNotes());
				if (orderEntry.getBhgeAdditionalInfo() != null)

				{
					final SimpleDateFormat date = new SimpleDateFormat("yyyy");
					LOG.info("RMA Create LINE - Data Model Print 03.B - "
							+ orderEntry.getBhgeAdditionalInfo().getManufactureYear() + " | "
							+ orderEntry.getBhgeAdditionalInfo().getIsAccessoryPresent() + " | "
							+ orderEntry.getBhgeAdditionalInfo().getAccessoriesNotes() + " | "
							+ orderEntry.getBhgeAdditionalInfo().getManufactureYear());
					if (orderEntry.getBhgeAdditionalInfo().getWarrantyInfoLong() != null
							&& !orderEntry.getBhgeAdditionalInfo().getWarrantyInfoLong().isEmpty())
					{
						rmaItemData.setWarrantyClaimInfo(checkNullForString(orderEntry.getBhgeAdditionalInfo().getWarrantyInfoLong()));
					}
					if (orderEntry.getBhgeAdditionalInfo().getManufactureYear() != null)
					{
						rmaItemData.setMfgYear(date.format(orderEntry.getBhgeAdditionalInfo().getManufactureYear()));
					}
					rmaItemData.setIsAccessoryPresent(checkBooleanValues(orderEntry.getBhgeAdditionalInfo().getIsAccessoryPresent()));
					rmaItemData.setAccessoriesNotes(orderEntry.getBhgeAdditionalInfo().getServiceNotesLong());
				}
				entryCounter++;
				rmaCreateRequest.getRmaItemData().getItems().add(rmaItemData);
			}			
		}
		return rmaCreateRequest;
	}

	@Override
	public Boolean generateHazardPdf(final AbstractOrderModel cart) throws Exception
	{
		final DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
		final String strDate = dateFormat.format(cart.getDate());
		final BHGERmaFormData rmaFormData = new BHGERmaFormData();
		rmaFormData.setCartDate(strDate);
		rmaFormData.setUserName(cart.getUser().getName());
		rmaFormData.setCartCode(cart.getCode());
		final BHGEHazardousInfoData bhgeHazardousInfoData = new BHGEHazardousInfoData();
		bhgeHazardousInfoReversePopulator.populate(cart.getBhgeHazardousInfo(), bhgeHazardousInfoData);
		rmaFormData.setHazardousInfo(bhgeHazardousInfoData);
		final File file = bhgeRmaFormService.generateHazardPdf(cart, rmaFormData);
		final InputStream stream = new FileInputStream(file);
		final MultipartFile multipartFileToSend = new MockMultipartFile("file",StringEscapeUtils.escapeHtml4(file.getName()), MediaType.APPLICATION_PDF_VALUE,
				stream);
		return uploadHazardFile(multipartFileToSend, cart);
	}

	@Override
	public Boolean uploadHazardFile(final MultipartFile file, final AbstractOrderModel cart)
	{
		final BHGEAdditionalInfoModel additionalInfoModel = null;
		final List<MediaModel> additioanalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{

				mediaModel = bhgeRmaFormService.uploadAdditionalFile(file);
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}
			cart.setHazardInfoDocs(mediaModel);
			modelService.save(cart);
			return true;

		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Rma from." + ExceptionUtils.getStackTrace(e));
			return false;
		}
	}

	@Override
	public Boolean uploadCheckoutFile(final MultipartFile file, final AbstractOrderModel cart)
	{
		final BHGEAdditionalInfoModel additionalInfoModel = null;
		final List<MediaModel> additioanalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != file) && ((!file.isEmpty())))
			{
				LOG.info("Media Generated for before CheckoutPDF: ");
				mediaModel = bhgeRmaFormService.uploadAdditionalFile(file);
				LOG.info("Media Generated for CheckoutPDF: "+mediaModel);
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}
			final Collection<MediaModel> mediaModelList = Arrays.asList(mediaModel);
			cart.setRmaAttachment(mediaModelList);
			modelService.save(cart);
			return true;

		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Rma from." + ExceptionUtils.getStackTrace(e));
			return false;
		}
	}

	@Override
	public Boolean generateCheckoutPdf(final AbstractOrderModel cart) throws Exception
	{
		final DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
		final BHGERmaFormData rmaFormData = new BHGERmaFormData();
		final File file = bhgeRmaFormService.generateCheckoutPdf(cart);
		final InputStream stream = new FileInputStream(file);
		final MultipartFile multipartFileToSend = new MockMultipartFile("file", file.getName(), MediaType.APPLICATION_PDF_VALUE,
				stream);
		return uploadCheckoutFile(multipartFileToSend, cart);
	}
	
	
	//Added for spartacus migration
	@Override
	public Boolean generateCheckoutPdfForWs(final AbstractOrderModel cart) throws Exception
	{
		final DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
		final BHGERmaFormData rmaFormData = new BHGERmaFormData();
		final File file = bhgeRmaFormService.generateCheckoutPdfForWs(cart);
		final InputStream stream = new FileInputStream(file);
		final MultipartFile multipartFileToSend = new MockMultipartFile("file", StringEscapeUtils.escapeHtml4(file.getName()), MediaType.APPLICATION_PDF_VALUE,
				stream);
		return uploadCheckoutFile(multipartFileToSend, cart);
	}

	@Override
	public void rfcFailureEmail(final AbstractOrderModel entry)
	{
		try
		{
			if (entry != null)
			{

				LOG.info("RFC Fail Email generation start");
				final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
				final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
				// Get the date today using Calendar object.
				final Date today = Calendar.getInstance().getTime();
				final String reportDate = df.format(today);
				final String SoldToId = entry.getSoldToForCart().getUid();
				model.setOrderID(entry.getCode());
				model.setErrorCode("BackendException in RMA Order Batch Submission");
				//model.setErrorDescription(entry.getCode() + "has no entries");
				model.setErrorDescription(entry.getCode() + " ERROR : " +entry.getConnectivityerror());
				String email = "";
				if (entry.getUser() instanceof CustomerModel && ((CustomerModel) entry.getUser()).getType() != null
						&& CustomerType.GUEST.getCode().equals(((CustomerModel) entry.getUser()).getType().getCode()))
				{
					final UserModel customer = userDao.findUserByUID(entry.getUser().getUid());
					email = ((CustomerModel) customer).getContactEmail();
				}
				else
				{
					email = userProfileService.findCurrentUserProfile(entry.getUser().getUid()).getEmail();
				}
				model.setCurrentUserEmail(email);
				model.setCurrentSoldToId(SoldToId);
				model.setErrorTime(reportDate);
				model.setErrorType("Order Submission Error");
				model.setRequestParameterToSAP("Order with OrderID" + entry.getCode());
				model.setResponseParameterFromSAP("No Response");
				//model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
				//model.setStatus(Boolean.FALSE);
				model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
				model.setStatus(Boolean.TRUE);
				model.setCartType(entry.getCartType());
				model.setCommerceType(entry.getCommerceType());
				modelService.save(model);
				//Email Trigger

				final String templateCodeCriticalError = "CriticalErrorMailTemplate";
				final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
				final String to = Config.getParameter("bhge.register.email.failure.technical");
				LOG.info(to);
				final String orderId = entry.getCode();
				String userSSO=entry.getUser().getUid();
				sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);
				LOG.info("RFC Fail Email generation end");
			}
		}
		catch (final Exception e)
		{
			getStackTrace(e);
			handleSAPException(entry, e);
			LOG.error("exception occured during the RFC call to submit RMA order" + e.getMessage());
		}
	}

	private void handleSAPException(final AbstractOrderModel order, final Exception exception)
	{
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
		final String SoldToId = order.getSoldToForCart().getUid();
		model.setErrorCode("BackendException in Order Batch Submission");
		final String exceptionMsg = exception.getMessage();
		model.setOrderID(order.getCode());
		model.setErrorDescription(exceptionMsg + "with" + order.getCode());
		String email = "";
		if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
				&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
		{
			final UserModel customer = userDao.findUserByUID(order.getUser().getUid());
			email = ((CustomerModel) customer).getContactEmail();
		}
		else
		{
			email = userProfileService.findCurrentUserProfile(order.getUser().getUid()).getEmail();
		}
		model.setCurrentUserEmail(email);
		model.setCurrentSoldToId(SoldToId);
		model.setErrorTime(reportDate);
		model.setErrorType("Order Submission Error");
		model.setRequestParameterToSAP("Order with OrderID" + order.getCode());
		model.setResponseParameterFromSAP("BackendException Object" + exception.toString());

		//model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
		//model.setStatus(Boolean.FALSE);
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
		model.setStatus(Boolean.TRUE);
		model.setCartType(order.getCartType());
		model.setCommerceType(order.getCommerceType());
		modelService.save(model);
		//Email Trigger
		final String templateCodeCriticalError = "CriticalErrorMailTemplate";
		final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
		final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
		final String orderId = order.getCode();
		final String userSSO= order.getUser().getUid();
		sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);
		//Email Trigger End
		order.setStatus(OrderStatus.ERROR);
		modelService.save(order);
	}

	public static String getStackTrace(final Throwable e)
	{
		final Writer writer = new StringWriter();
		final PrintWriter printWriter = new PrintWriter(writer);
		//e.printStackTrace(printWriter);
		LOG.error("Error Message" +  org.apache.commons.lang3.exception.ExceptionUtils.getStackTrace(e));
		final String s = writer.toString();
		return s;
	}

	public void sendEmail(final String templateCode, final String subject, final String to, final BHGERfcCallErrorModel model,
			final String orderId, final  String userSSO)
	{

		final RendererTemplateModel templateModel = rendererService.getRendererTemplateForCode(templateCode);

		bhgeEmailService.orderSubmissionFailureEmail(templateModel, subject, to, model, orderId,userSSO);
	}

	protected RMAOrderRFCData processResponse(final JCoFunction function)
	{
		LOG.debug("RMA Response: " + function.toXML());
		return processRMAResponse(function);
	}
	
	protected RMAOrderRFCData processResponse(final ZHYBRMACreateResponse rmaCreateResponse)
	{
		return processRMAResponse(rmaCreateResponse);
	}

	private RMAOrderRFCData processRMAResponse(final JCoFunction function)
	{
		final RMAOrderRFCData orderRfcData = new RMAOrderRFCData();
		final String outcome = null;
		final Map<String, String> response = prepareOrderHistoryItemData(function);
		if (response == null || response.isEmpty())
		{
			orderRfcData.setErrorNumber(processRMAHeaderResponse(function));
		}
		else
		{
			for (final Map.Entry<String, String> result : response.entrySet())
			{
				if ("RMA_Number".equals(result.getKey()))
				{
					orderRfcData.setRmaNumber(result.getValue());
				}
				if ("RMA_Flag".equals(result.getKey()))
				{
					orderRfcData.setRfcStatusFlag(result.getValue());
				}
			}

		}
		return orderRfcData;
	}
	
	private RMAOrderRFCData processRMAResponse(final ZHYBRMACreateResponse rmaCreateResponse)
	{
		final RMAOrderRFCData orderRfcData = new RMAOrderRFCData();
		final String outcome = null;
		final Map<String, String> response = prepareOrderHistoryItemData(rmaCreateResponse);
		if (response == null || response.isEmpty())
		{
			orderRfcData.setErrorNumber(processRMAHeaderResponse(rmaCreateResponse));
		}
		else
		{
			for (final Map.Entry<String, String> result : response.entrySet())
			{
				if ("RMA_Number".equals(result.getKey()))
				{
					orderRfcData.setRmaNumber(result.getValue());
				}
				if ("RMA_Flag".equals(result.getKey()))
				{
					orderRfcData.setRfcStatusFlag(result.getValue());
				}
			}

		}
		return orderRfcData;
	}

	private Map<String, String> prepareOrderHistoryItemData(final JCoFunction function)
	{
		final String rmaNumber = function.getExportParameterList().getString(BhgeCoreConstants.RMA_FORM_RMA_NUMBER);
		final String rmaflag = function.getExportParameterList().getString(BhgeCoreConstants.RMA_ORDER_CREATE_FLAG);
		Map<String, String> resp = null;
		if (!rmaNumber.isEmpty())
		{
			resp = new HashMap<>();
			resp.put("RMA_Number", rmaNumber);
			resp.put("RMA_Flag", rmaflag);
		}
		return resp;

	}
	
	private Map<String, String> prepareOrderHistoryItemData(final ZHYBRMACreateResponse rmaCreateResponse)
	{
		final String rmaNumber = rmaCreateResponse.getRmaNumber();
		final String rmaflag = rmaCreateResponse.getFlag();
		Map<String, String> resp = null;
		if (!rmaNumber.isEmpty())
		{
			resp = new HashMap<>();
			resp.put("RMA_Number", rmaNumber);
			resp.put("RMA_Flag", rmaflag);
		}
		return resp;

	}

	private String processRMAHeaderResponse(final JCoFunction function)
	{
		final JCoTable messageTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_MESSAGETABLE);
		final String message = function.getExportParameterList().getString(BhgeCoreConstants.RMA_ORDER_CREATE_FLAG);//messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE);
		return message;
	}
	
	private String processRMAHeaderResponse(final ZHYBRMACreateResponse rmaCreateResponse)
	{
		final String message = rmaCreateResponse.getFlag();
		return message;
	}

	public Map<Map<String, String>, Map<String, String>> sapHeaderDetails(final AbstractOrderModel orderModel)
	{
		final Map<Map<String, String>, Map<String, String>> responseList = new HashMap<>();
		String custNum = null;
		String salesOrg = null;
		String disChannel = null;
		String division = null;
		String[] strArray = null;
		String sold = null;

		if (orderModel.getSoldToForCart() != null)
		{
			sold = orderModel.getSoldToForCart().getUid();
		}

		if (sold != null && !sold.isEmpty())
		{
			strArray = sold.split("_");
			LOG.info("Array Length" + strArray.length);
		}
		else
		{
			LOG.info("SoldTo is null");
		}

		if (strArray != null)
		{
			custNum = strArray[0];
			salesOrg = strArray[1];
			disChannel = strArray[2];
			division = strArray[3];
		}

		LOG.info("RMA Create HEADER - Data Model Print 01 - " + custNum + " | " + salesOrg + " | " + division + " | " + disChannel);

		final String NOTIF_TYPE = checkNullForString("Z6");
		final Map<String, String> headerItemList = new HashMap<>();
		headerItemList.put(BhgeCoreConstants.NOTIF_TYPE, NOTIF_TYPE);
		headerItemList.put(BhgeCoreConstants.CUSTOMER, checkNullForString(custNum));
		headerItemList.put(BhgeCoreConstants.SALES_AREA_ORG, checkNullForString(salesOrg));
		headerItemList.put(BhgeCoreConstants.DIVISION, checkNullForString(division));
		headerItemList.put(BhgeCoreConstants.DIST_CHANNEL, checkNullForString(disChannel));

		LOG.info("RMA Create HEADER - Data Model Print 02 - " + orderModel.getShipToContactName() + " | "
				+ orderModel.getShippingConatct2Name());

		headerItemList.put(BhgeCoreConstants.SHIPCONTACT1NAME_ORDER_CREATE, checkNullForString(orderModel.getShipToContactName()));
		headerItemList.put(BhgeCoreConstants.SHIPCONTACT2NAME_ORDER_CREATE,
				checkNullForString(orderModel.getShippingConatct2Name()));
		if (orderModel.getSoldToForCart() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 02.A - " + orderModel.getSoldToForCart().getUid());

			headerItemList.put(BhgeCoreConstants.BILL_TO_PARTY,
					checkNullForString(BHGESAPJCoUtils.addLeadingZeros(custNum, 10)));
		}
		if (orderModel.getDeliveryAddress() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 02.B - " + orderModel.getDeliveryAddress().getSapCustomerID());

			if (orderModel.getDeliveryAddress().getSapCustomerID() != null)
			{
				headerItemList.put(BhgeCoreConstants.SHIP_TO_PARTY,
						checkNullForString(BHGESAPJCoUtils.addLeadingZeros(orderModel.getDeliveryAddress().getSapCustomerID(), 10)));
			}
			else
			{
				String sapSaveMessge = "";
				if (null != orderModel.getDeliveryAddress() && null != orderModel.getDeliveryAddress().getSaveForFuture()
						&& orderModel.getDeliveryAddress().getSaveForFuture().booleanValue())
				{

					sapSaveMessge = "User has indicated that they want to save this Ship-to record. Add as a Ship-to in the SAP customer master.";
				}
				else
				{
					sapSaveMessge = "User does not need to re-use this Ship-to record.";
				}

				headerItemList.put(BhgeCoreConstants.SHIP_TO_ADDR_ORDER_CREATE,
						processAddressText(orderModel.getDeliveryAddress()) + " " + sapSaveMessge);
			}
		}

		if (orderModel.getRMAEndUserAddress() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 02.C - " + orderModel.getRMAEndUserAddress().getSapCustomerID());
			if (orderModel.getRMAEndUserAddress().getSapCustomerID() != null)
			{
				headerItemList.put(BhgeCoreConstants.END_CUST_REF_NUM_ORDER_CREATE,
						checkNullForString(BHGESAPJCoUtils.addLeadingZeros(orderModel.getRMAEndUserAddress().getSapCustomerID(), 10)));

			}

			else
			{
				LOG.info("TEST FLAG" + orderModel.getDeliveryAddress());
				String sapSaveMessge = "";
				if (null != orderModel.getRMAEndUserAddress().getSaveForFuture()
						&& orderModel.getRMAEndUserAddress().getSaveForFuture().booleanValue())
				{

					sapSaveMessge = "User has indicated that they want to save this End User record. Add as a Ship-to or End User partner in the SAP customer master";
				}
				else
				{
					sapSaveMessge = "User does not need to re-use this End User record";
				}

				String endUserAddress = processAddressText(orderModel.getRMAEndUserAddress()) + " " + sapSaveMessge;
				if (StringUtils.isNotBlank(orderModel.getEndUserCategory()))
				{
					endUserAddress = "End User Category - " + orderModel.getEndUserCategory() + " & End User Details - "
							+ endUserAddress;
				}
				else
				{
					endUserAddress = "End User Details - " + endUserAddress;
				}
				headerItemList.put(BhgeCoreConstants.END_CUST_DETAILS_ORDER_CREATE, endUserAddress);
			}
		}
		LOG.info("RMA Create HEADER - Data Model Print 03 - " + orderModel.getShippingConatct2Number() + " | "
				+ orderModel.getShipToContactPhone() + " | " + orderModel.getIsGovernment());
		headerItemList.put(BhgeCoreConstants.SHIPCONTACT2NUM, checkNullForString(orderModel.getShippingConatct2Number()));
		headerItemList.put(BhgeCoreConstants.SHIPCONTACT1NUM, checkNullForString(orderModel.getShipToContactPhone()));
		headerItemList.put(BhgeCoreConstants.ISGOVERNMENT_ORDER_CREATE, checkBooleanValues(orderModel.getIsGovernment()));
		if (orderModel.getShippingCarrierMethod() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 03.A - " + orderModel.getShippingCarrierMethod().toString());
			headerItemList.put(BhgeCoreConstants.CARRIERNAME_ORDER_CREATE,
					checkNullForString(orderModel.getShippingCarrierMethod().getCode()));
		}
		LOG.info("RMA Create HEADER - Data Model Print 04 - " + orderModel.getShippingChargeMethod() + " | "
				+ orderModel.getShippingRemarks() + " | " + orderModel.getDeliveryPoint() + " | " + orderModel.getDeliveryAccountNum()
				+ " | " + orderModel.getExportAddressText());
		if (orderModel.getShippingChargeMethod() != null)
		{
			headerItemList.put(BhgeCoreConstants.SHIPPING_METHOD_ORDER_CREATE,
					checkNullForString(orderModel.getShippingChargeMethod().getCode()));
		}
		headerItemList.put(BhgeCoreConstants.USERCOMMENTS_ORDER_CREATE, checkNullForString(orderModel.getShippingRemarks()));
		headerItemList.put(BhgeCoreConstants.DELIVERY_PT_ORDER_CREATE, checkNullForString(orderModel.getDeliveryPoint()));
		headerItemList.put(BhgeCoreConstants.DELIVERY_ACC_NUM_ORDER_CREATE, checkNullForString(orderModel.getDeliveryAccountNum()));
		headerItemList.put(BhgeCoreConstants.EXPORT_ADD_TEXT_ORDER_CREATE, checkNullForString(orderModel.getExportAddressText()));

		LOG.info("RMA Create HEADER - Data Model Print 05 - " + orderModel.getShipNotificationEmail() + " | "
				+ orderModel.getInvoiceEmail() + " | " + orderModel.getOrderConfirmationEMail() + " | "
				+ orderModel.getPurchaseOrderNumber() + " | " + orderModel.getAlternateContactEmail());
		headerItemList.put(BhgeCoreConstants.SHIPPING_MAIL_ORDER_CREATE, checkNullForString(orderModel.getShipNotificationEmail()));
		headerItemList.put(BhgeCoreConstants.INVOICE_MAIL_ORDER_CREATE, checkNullForString(orderModel.getInvoiceEmail()));
		headerItemList.put(BhgeCoreConstants.ORDER_CONF_MAIL_ORDER_CREATE,
				checkNullForString(orderModel.getOrderConfirmationEMail()));
		headerItemList.put(BhgeCoreConstants.PURCHASE_ORD_NUM_ORDER_CREATE,
				checkNullForString(orderModel.getPurchaseOrderNumber()));
		headerItemList.put(BhgeCoreConstants.ALTERNATE_CONT_MAIL_ORDER_CREATE,
				checkNullForString(orderModel.getAlternateContactEmail()));
		LOG.info("RMA Create HEADER - Data Model Print 06 - " + orderModel.getIsNuclear() + " | " + orderModel.getIsExport() + " | "
				+ orderModel.getIsBuyer());
		headerItemList.put(BhgeCoreConstants.IS_NUCLEAR_ORDER_CREATE, checkBooleanValues(orderModel.getIsNuclearOppurtunity()));
		if (StringUtils.isNotBlank(orderModel.getExportAddressText()))
		{
			headerItemList.put(BhgeCoreConstants.EXPORT_ORDER_ORDER_CREATE, checkBooleanValues(Boolean.TRUE));
		}
		if (StringUtils.isNotBlank(orderModel.getSpecialDiscountCode()))
		{
			headerItemList.put(BhgeCoreConstants.RMA_CREATE_CSR_FLAG, checkBooleanValues(Boolean.TRUE));
			headerItemList.put(BhgeCoreConstants.RMA_CREATE_CSR_HELP_TEXT, orderModel.getSpecialDiscountCode());
		}


		for (final AbstractOrderEntryModel orderEntry : orderModel.getEntries())
		{
			if (orderEntry.getPlanningSite() != null && !orderEntry.getPlanningSite().isEmpty())
			{
				LOG.info("RMA Create HEADER - Data Model Print 06.A - " + orderEntry.getPlanningSite());
				headerItemList.put(BhgeCoreConstants.REPAIR_PLANT, checkNullForString(orderEntry.getPlanningSite()));
			}
			if (orderEntry.getReturnToSiteCode() != null)
			{
				LOG.info("RMA Create HEADER - Data Model Print 06.B - " + orderEntry.getReturnToSiteCode());
				if (!orderEntry.getReturnToSiteCode().toString().equals(orderEntry.getPlanningSite()))
				{
					headerItemList.put(BhgeCoreConstants.RETUN_TO_SITE_ORDER_CREATE,
							checkNullForString(orderEntry.getReturnToSiteCode().toString()));
				}
			}
		}
		headerItemList.put(BhgeCoreConstants.IS_GOV_BUYER_ORDER_CREATE, checkBooleanValues(orderModel.getIsBuyer()));
		if (orderModel.getBhgeHazardousInfo() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 06.C - " + orderModel.getBhgeHazardousInfo().getDeclerationA());
			headerItemList.put(BhgeCoreConstants.HAZARDOUS_PART_ORDER_CREATE,
					checkBooleanValues(orderModel.getBhgeHazardousInfo().getDeclerationA()));
		}
		final Map<String, String> lineItemList = new HashMap<>();
		responseList.put(headerItemList, lineItemList);
		return responseList;
	}
	
	
	
	public ZHYBRMAHeaderData sapHeaderDetails(final AbstractOrderModel orderModel, final ZHYBRMAHeaderData rmaHeaderDetail)
	{
		final Map<Map<String, String>, Map<String, String>> responseList = new HashMap<>();
		String custNum = null;
		String salesOrg = null;
		String disChannel = null;
		String division = null;
		String[] strArray = null;
		String sold = null;
		String shipToContactName = null;
		String shipToContact2Name=null;
		int maxShipToContactNameLength = 35;

		if (orderModel.getSoldToForCart() != null)
		{
			sold = orderModel.getSoldToForCart().getUid();
		}

		if (sold != null && !sold.isEmpty())
		{
			strArray = sold.split("_");
			LOG.info("Array Length" + strArray.length);
		}
		else
		{
			LOG.info("SoldTo is null");
		}

		if (strArray != null)
		{
			custNum = strArray[0];
			salesOrg = strArray[1];
			disChannel = strArray[2];
			division = strArray[3];
		}

		LOG.info("RMA Create HEADER - Data Model Print 01 - " + custNum + " | " + salesOrg + " | " + division + " | " + disChannel);

		final String NOTIF_TYPE = checkNullForString("Z6");
		final Map<String, String> headerItemList = new HashMap<>();
		rmaHeaderDetail.setNotifyType(NOTIF_TYPE);
		rmaHeaderDetail.setCustomer(checkNullForString(custNum));
		rmaHeaderDetail.setSalesAreaOrg(checkNullForString(salesOrg));
		rmaHeaderDetail.setDivision(checkNullForString(division));
		rmaHeaderDetail.setDistChannel(checkNullForString(disChannel));

		LOG.info("RMA Create HEADER - Data Model Print 02 - " + orderModel.getShipToContactName() + " | "
				+ orderModel.getShippingConatct2Name());

		if (orderModel.getShipToContactName() != null) {

			if (orderModel.getShipToContactName().length() >= maxShipToContactNameLength) {
				shipToContactName = orderModel.getShipToContactName().substring(0, maxShipToContactNameLength);
			}
		}
		else{
			shipToContactName="";
		}
		rmaHeaderDetail.setShipConact1Name(shipToContactName);

		if (orderModel.getShippingConatct2Name() != null) {

			if (orderModel.getShippingConatct2Name().length() >= maxShipToContactNameLength) {
				shipToContact2Name = orderModel.getShippingConatct2Name().substring(0, maxShipToContactNameLength);
			}
		}
		else{
			shipToContact2Name="";
		}

		rmaHeaderDetail.setShipConact2Name(shipToContact2Name);
		
		final AddressModel soldToAddress = getBillToAddress(orderModel);
		if (null != soldToAddress && null != soldToAddress.getSapCustomerID())
		{
			//LOG.info("Billing address is "+soldToAddress.getSapCustomerID());
			rmaHeaderDetail.setBillToParty(BHGESAPJCoUtils.addLeadingZeros(soldToAddress.getSapCustomerID(), 10));
		}
		else if (orderModel.getSoldToForCart() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 02.A - " + orderModel.getSoldToForCart().getUid());
			rmaHeaderDetail.setBillToParty(checkNullForString(BHGESAPJCoUtils.addLeadingZeros(custNum, 10)));
		}
		if(orderModel.getPayerAddress()!= null)
		{
			rmaHeaderDetail.setPayer(BHGESAPJCoUtils.addLeadingZeros(orderModel.getPayerAddress().getSapCustomerID(), 10));
		}
		if (orderModel.getDeliveryAddress() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 02.B - " + orderModel.getDeliveryAddress().getSapCustomerID());

			if (orderModel.getDeliveryAddress().getSapCustomerID() != null)
			{

				rmaHeaderDetail.setShipToParty(checkNullForString(BHGESAPJCoUtils.addLeadingZeros(orderModel.getDeliveryAddress().getSapCustomerID(), 10)));
			}
			else
			{
				String sapSaveMessge = "";
				if (null != orderModel.getDeliveryAddress().getSaveForFuture()
						&& orderModel.getDeliveryAddress().getSaveForFuture().booleanValue())
				{

					sapSaveMessge = "User has indicated that they want to save this Ship-to record. Add as a Ship-to in the SAP customer master.";
				}
				else
				{
					sapSaveMessge = "User does not need to re-use this Ship-to record.";
				}

				rmaHeaderDetail.setShipToAdd(processAddressText(orderModel.getDeliveryAddress()) + " " + sapSaveMessge);
			}
		}

		if (orderModel.getRMAEndUserAddress() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 02.C - " + orderModel.getRMAEndUserAddress().getSapCustomerID());
			if (orderModel.getRMAEndUserAddress().getSapCustomerID() != null)
			{
				rmaHeaderDetail.setEndCustRefNum(checkNullForString(BHGESAPJCoUtils.addLeadingZeros(orderModel.getRMAEndUserAddress().getSapCustomerID(), 10)));
			}

			else
			{
				LOG.info("TEST FLAG" + orderModel.getDeliveryAddress());
				String sapSaveMessge = "";
				if (null != orderModel.getRMAEndUserAddress().getSaveForFuture()
						&& orderModel.getRMAEndUserAddress().getSaveForFuture().booleanValue())
				{

					sapSaveMessge = "User has indicated that they want to save this End User record. Add as a Ship-to or End User partner in the SAP customer master";
				}
				else
				{
					sapSaveMessge = "User does not need to re-use this End User record";
				}

				String endUserAddress = processAddressText(orderModel.getRMAEndUserAddress()) + " " + sapSaveMessge;
				if (StringUtils.isNotBlank(orderModel.getEndUserCategory()))
				{
					endUserAddress = "End User Category - " + orderModel.getEndUserCategory() + " & End User Details - "
							+ endUserAddress;
				}
				else
				{
					endUserAddress = "End User Details - " + endUserAddress;
				}
				rmaHeaderDetail.setEndCustDetails(endUserAddress);
			}
		}
		LOG.info("RMA Create HEADER - Data Model Print 03 - " + orderModel.getShippingConatct2Number() + " | "
				+ orderModel.getShipToContactPhone() + " | " + orderModel.getIsGovernment());
		rmaHeaderDetail.setShipConact2Num(checkNullForString(orderModel.getShippingConatct2Number()));
		rmaHeaderDetail.setShipConact1Num(checkNullForString(orderModel.getShipToContactPhone()));
		rmaHeaderDetail.setIsGovernment(checkBooleanValues(orderModel.getIsGovernment()));
		if (orderModel.getShippingCarrierMethod() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 03.A - " + orderModel.getShippingCarrierMethod().toString());
			rmaHeaderDetail.setCarrierName(checkNullForString(orderModel.getShippingCarrierMethod().getCode()));
		}
		LOG.info("RMA Create HEADER - Data Model Print 04 - " + orderModel.getShippingChargeMethod() + " | "
				+ orderModel.getShippingRemarks() + " | " + orderModel.getDeliveryPoint() + " | " + orderModel.getDeliveryAccountNum()
				+ " | " + orderModel.getExportAddressText());
		if (orderModel.getShippingChargeMethod() != null)
		{
			//rmaHeaderDetail.setShippingMethod(orderModel.getShippingChargeMethod().getCode());
			rmaHeaderDetail.setShippingMethod(setShippingMethod(checkNullForString(orderModel.getShippingChargeMethod().getCode())));
		}
		rmaHeaderDetail.setUserComments(checkNullForString(orderModel.getShippingRemarks()));
		rmaHeaderDetail.setDeliveryPt(checkNullForString(orderModel.getDeliveryPoint()));
		rmaHeaderDetail.setDeliveryAccName(checkNullForString(orderModel.getDeliveryAccountNum()));
		rmaHeaderDetail.setExpostAddText(checkNullForString(orderModel.getExportAddressText()));

		LOG.info("RMA Create HEADER - Data Model Print 05 - " + orderModel.getShipNotificationEmail() + " | "
				+ orderModel.getInvoiceEmail() + " | " + orderModel.getOrderConfirmationEMail() + " | "
				+ orderModel.getPurchaseOrderNumber() + " | " + orderModel.getAlternateContactEmail());
		rmaHeaderDetail.setShippingMail(checkNullForString(orderModel.getShipNotificationEmail()));
		rmaHeaderDetail.setInvoiceMail(checkNullForString(orderModel.getInvoiceEmail()));
		rmaHeaderDetail.setOrderConfMail(checkNullForString(orderModel.getOrderConfirmationEMail()));
		rmaHeaderDetail.setPurchaseOrdNum(checkNullForString(orderModel.getPurchaseOrderNumber()));
		rmaHeaderDetail.setAlternateContMail(checkNullForString(orderModel.getAlternateContactEmail()));
		LOG.info("RMA Create HEADER - Data Model Print 06 - " + orderModel.getIsNuclear() + " | " + orderModel.getIsExport() + " | "
				+ orderModel.getIsBuyer());
		rmaHeaderDetail.setNuclearOrder(checkBooleanValues(orderModel.getIsNuclearOppurtunity()));
		if (StringUtils.isNotBlank(orderModel.getExportAddressText()))
		{
			rmaHeaderDetail.setExportOrder(checkBooleanValues(Boolean.TRUE));
		}
		if (StringUtils.isNotBlank(orderModel.getSpecialDiscountCode()))
		{
			rmaHeaderDetail.setCsrFlag(checkBooleanValues(Boolean.TRUE));
			rmaHeaderDetail.setCsrHelpText(orderModel.getSpecialDiscountCode());
		}

		//TODO: Panacal new changes
		rmaHeaderDetail.setInvoiceContactName(orderModel.getInvoiceContactName());
		rmaHeaderDetail.setInvoiceContact1Num(orderModel.getInvoiceContact1Num());
		rmaHeaderDetail.setOrderConfirmationName(orderModel.getOrderConfirmationName());
		rmaHeaderDetail.setOrderConfirmationNum(orderModel.getOrderConfirmationNum());


		for (final AbstractOrderEntryModel orderEntry : orderModel.getEntries())
		{
			if (orderEntry.getPlanningSite() != null && !orderEntry.getPlanningSite().isEmpty())
			{
				LOG.info("RMA Create HEADER - Data Model Print 06.A - " + orderEntry.getPlanningSite());
				rmaHeaderDetail.setRepairPlant(checkNullForString(orderEntry.getPlanningSite()));
			}
			if (orderEntry.getReturnToSiteCode() != null)
			{
				LOG.info("RMA Create HEADER - Data Model Print 06.B - " + orderEntry.getReturnToSiteCode());
				if (!orderEntry.getReturnToSiteCode().toString().equals(orderEntry.getPlanningSite()))
				{
					rmaHeaderDetail.setReturnToSite(checkNullForString(orderEntry.getReturnToSiteCode().toString()));
				}
			}
		}
		rmaHeaderDetail.setIsGovBuyer(checkBooleanValues(orderModel.getIsBuyer()));
		if (orderModel.getBhgeHazardousInfo() != null)
		{
			LOG.info("RMA Create HEADER - Data Model Print 06.C - " + orderModel.getBhgeHazardousInfo().getDeclerationA());
			rmaHeaderDetail.setHazardousPart(checkBooleanValues(orderModel.getBhgeHazardousInfo().getDeclerationA()));
		}
		return rmaHeaderDetail;
	}

	private AddressModel getBillToAddress(final AbstractOrderModel order) {
		AddressModel billToAddress = null;
		final String soldTo=BHGESAPJCoUtils.addLeadingZeros(order.getSoldToForCart().getUid(), 10);
		LOG.info("SoldTo address "+soldTo );
		
		if (order.getUser() instanceof GEEdgeCustomerModel && order.getSoldToForCart() != null)
			{
				final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) order.getSoldToForCart().getAddresses();
				final List<AddressModel> listOfBillToAddress=new ArrayList<>();
				for (final AddressModel address : listOfSoldToAddress)
				{
					if (address.getBillingAddress())
					{
						listOfBillToAddress.add(address);
						LOG.info("Billing address "+listOfBillToAddress.size());
					}
				}
				if (listOfBillToAddress.size()>1){
					for (final AddressModel addr : listOfBillToAddress){
						if (addr.getSapCustomerID().equals(soldTo))
						{
							//LOG.info("SAP customer Id "+addr.getSapCustomerID());
							billToAddress=addr;
							break;
						}
					}
						
				}
				
				if(billToAddress==null && CollectionUtils.isNotEmpty(listOfBillToAddress)){
					billToAddress=listOfBillToAddress.get(0);
				}
			}
		
		return billToAddress;
	}
	
	@Override
	public String generateRMAFileName(String folder, String originalFileName, String fileExtension, String rmaNumber)
	{
		String shortFileName = StringUtils.substring(originalFileName, 0, Config.getInt("RMAAttachmentFileNameLength", 65));
		if(!shortFileName.toLowerCase().endsWith("." + fileExtension.toLowerCase())){
			shortFileName += "." + fileExtension;
		}
		String SAPFileName = folder + "-" + rmaNumber + "_" + shortFileName;
		return SAPFileName;
	}

	private String processAddressText(final AddressModel addressModelData)
	{
		final StringBuffer addressData = new StringBuffer();

		boolean ifDataPresent = false;

		if (StringUtils.isNotBlank(addressModelData.getCompany()))
		{
			addressData.append(addressModelData.getCompany());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getLine1()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getLine1());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getLine2()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getLine2());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getTown()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getTown());
			ifDataPresent = true;
		}
		if (addressModelData.getRegion() != null)
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getRegion().getIsocodeShort());
			ifDataPresent = true;
		}
		if (StringUtils.isNotBlank(addressModelData.getPostalcode()))
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getPostalcode());
			ifDataPresent = true;
		}
		if (addressModelData.getCountry() != null)
		{
			if (ifDataPresent)
			{
				addressData.append(", ");
			}
			addressData.append(addressModelData.getCountry().getIsocode());
			ifDataPresent = true;
		}
		if (ifDataPresent)
		{
			addressData.append(".");
		}

		return addressData.toString();
	}

	public String getSoldTo()
	{
		final SalesAreaData salesArea = (SalesAreaData) sessionService.getAttribute("defaultSalesAreaData");
		if (null != salesArea)
		{
			return salesArea.getB2bUnitUid();
		}
		return null;
	}

	protected JCoFunction setFunctionAndDefault(final JCoConnection connection) throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("RMA Tracking RFC: Setting the Default Input parameters");
		}
		final String rmaFunction = Config.getString(ZHYB_RMA_CREATE, ZHYB_RMA_CREATE);
		final JCoFunction function = connection.getFunction(rmaFunction);
		if (LOG.isDebugEnabled())
		{
			LOG.debug("New Function" + function.getImportParameterList());
		}
		return function;
	}


	private void valueSetterForStruct(final String inputValue, final JCoStructure structure, final String key)
	{
		final String constant3 = null;
		try
		{
			//constant3 = (String) BhgeCoreConstants.class.getField(key).get(null);
			if (checkNull(key))
			{
				structure.setValue(key, inputValue);
			}
		}
		catch (IllegalArgumentException | SecurityException e)// IllegalAccessException | NoSuchFieldException | )
		{
			LOG.info("Exception:");
		}
	}

	private boolean checkNull(final String input)
	{
		if (!input.isEmpty() && input != null)
		{
			return true;
		}
		else
		{
			return false;
		}
	}


	private String checkNullForString(final String checkvalue)
	{
		if (checkvalue != null && !checkvalue.isEmpty())
		{
			return checkvalue;
		}
		else
		{
			return "";
		}
	}
	
	private String setShippingMethod(final String checkvalue)
	{
		if (checkvalue != null && !checkvalue.isEmpty())
		{
			return checkvalue.substring(0,1);
		}
		else
		{
			return "";
		}
	}

	private String checkBooleanValues(final Boolean checkvalue)
	{
		if (checkvalue != null && checkvalue == true)
		{
			return "X";
		}
		else
		{
			return "";
		}
	}
}
