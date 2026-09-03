/**
 *
 */
package com.bhge.facades.order.impl;

import de.hybris.platform.b2b.services.B2BOrderService;
//import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.order.data.OrderHistoryViewData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.BHGESalesOrderAttachmentData;
//import com.hybris.ge.edge.core.model.ContactusSettingsModel;
import com.bhge.core.sap.service.BHGEInvoiceSoaService;
import com.bhge.core.serviceprovider.service.BHGEServiceProviderService;
import com.bhge.facades.order.BHGEB2BOrderDataFetch;
import com.bhge.facades.order.BHGEB2BOrderFacade;
import com.bhge.facades.order.attachments.BHGESalesOrderAttachmentsData;
import com.bhge.facades.order.data.BHGEOrderHistoryData;


public class DefaultBHGEB2BOrderDataFetch implements BHGEB2BOrderDataFetch
{
	@Resource
	private BHGEServiceProviderService bhgeServiceProviderService;

	@Resource
	private B2BOrderService b2bOrderService;
	@Resource(name = "b2bOrderFacade")
	private BHGEB2BOrderFacade bhgeB2BOrderFacade;

	private final static Logger LOG = Logger.getLogger(DefaultBHGEB2BOrderDataFetch.class);

	@Resource(name = "bhgeInvoiceSoaService")
	private BHGEInvoiceSoaService bhgeInvoiceSoaService;

	// public ArrayList<OrderHistoryViewData> getOrderDataDTO(String
	// orderNumbers){
	public ArrayList<OrderHistoryViewData> getOrderDataDTO(final SearchPageData<BHGEOrderHistoryData> searchPageData)
	{
		try
		{

			final ArrayList<OrderHistoryViewData> orderDataListDTO = new ArrayList<OrderHistoryViewData>();

			for (int i = 0; i < searchPageData.getResults().size(); i++)
			{

				final OrderModel order = b2bOrderService.getOrderForCode(searchPageData.getResults().get(i).getCode());

				for (final AbstractOrderEntryModel entries : order.getEntries())
				{

					orderDataListDTO.add(orderData(entries, searchPageData, i));
				}

			}
			return orderDataListDTO;

		}
		catch (final Exception ee)
		{
			LOG.error("Exception occurred in DefaultGEEdgeB2BORderDataFetch File" + ee);
			return null;
		}

	}

	public ArrayList<OrderHistoryViewData> getOrderDataDTOWS(final List<BHGEOrderHistoryData> orderHistoryData,
			final String pageFlag, final List<String> multipleSoldToId)
	{
		try
		{
			final ArrayList<OrderHistoryViewData> orderDataListDTO = new ArrayList<OrderHistoryViewData>();
			if (null != orderHistoryData && orderHistoryData.size() > 0)
			{

				for (final BHGEOrderHistoryData orderData : orderHistoryData)
				{
					final ArrayList<OrderHistoryViewData> entryData = bhgeB2BOrderFacade.getLineItem(orderData.getCode(), pageFlag,
							multipleSoldToId);
					for (final OrderHistoryViewData entries : entryData)
					{
						orderDataListDTO.add(orderDataWS(entries, orderData));
					}
				}

			}
			return orderDataListDTO;
		}
		catch (final Exception e)
		{
			LOG.error("Exception occured in DefaultGEEdgeB2BOrderDataFetch " + e);
		}
		return null;
	}

	public OrderHistoryViewData orderDataWS(final OrderHistoryViewData entryData, final BHGEOrderHistoryData orderData)
	{
		final SimpleDateFormat df = new SimpleDateFormat("dd-MMM-yyyy");
		if (null != orderData && null != entryData)
		{
			entryData.setOrderNum(orderData.getCode());
			entryData
					.setCustomerPO(StringUtils.isBlank(orderData.getPurchaseOrderNumber()) ? " " : orderData.getPurchaseOrderNumber());
			entryData.setOrderDate((orderData.getPlaced() == null) ? " " : df.format(orderData.getPlaced().getTime()).toString());
			entryData.setSoldToName(StringUtils.isBlank(orderData.getSoldTo()) ? " " : orderData.getSoldTo());
		}
		return entryData;
	}

	public OrderHistoryViewData orderData(final AbstractOrderEntryModel entries,
			final SearchPageData<BHGEOrderHistoryData> searchPageData, final int i)
	{

		final SimpleDateFormat df = new SimpleDateFormat("dd-MMM-yyyy");
		final OrderHistoryViewData orderHistoryViewData = new OrderHistoryViewData();

		orderHistoryViewData.setOrderNum(searchPageData.getResults().get(i).getCode());

		orderHistoryViewData.setLineNumber((entries.getEntryNumber() == null) ? " " : entries.getEntryNumber().toString());
		orderHistoryViewData
				.setPartNumber(StringUtils.isBlank(entries.getProduct().getCode()) ? " " : entries.getProduct().getCode());
		orderHistoryViewData.setDescription(
				StringUtils.isBlank(entries.getProduct().getDescription()) ? " " : entries.getProduct().getDescription());

		orderHistoryViewData.setQty((entries.getQuantity() == null) ? " " : entries.getQuantity().toString());
		orderHistoryViewData.setStatus((entries.getQuantityStatus() == null) ? " " : entries.getQuantityStatus().toString());
		orderHistoryViewData.setShipDate(
				(entries.getNamedDeliveryDate() == null) ? " " : df.format(entries.getNamedDeliveryDate().getTime()).toString());
		orderHistoryViewData.setShipTo((entries.getDeliveryAddress() == null) ? " " : entries.getDeliveryAddress().toString());

		orderHistoryViewData.setCourier("XYZ");
		orderHistoryViewData.setTrackingNumber("1234");

		orderHistoryViewData.setCustomerPO(StringUtils.isBlank(searchPageData.getResults().get(i).getPurchaseOrderNumber()) ? " "
				: searchPageData.getResults().get(i).getPurchaseOrderNumber());
		orderHistoryViewData.setOrderDate((searchPageData.getResults().get(i).getPlaced() == null) ? " "
				: df.format(searchPageData.getResults().get(i).getPlaced().getTime()).toString());
		orderHistoryViewData.setSoldToName(StringUtils.isBlank(searchPageData.getResults().get(i).getSoldTo()) ? " "
				: searchPageData.getResults().get(i).getSoldTo());

		return orderHistoryViewData;
	}

	@Override
	public ArrayList<OrderHistoryViewData> getOrderDataExcelDTO(final String orderNumbers)
	{

		final ArrayList<OrderHistoryViewData> orderDataListDTO = new ArrayList<OrderHistoryViewData>();

		String[] orders;
		final String delimiter = ",";
		orders = orderNumbers.split(delimiter);
		OrderEntryData orderEntryData = new OrderEntryData();

		try
		{
			final SimpleDateFormat df = new SimpleDateFormat("dd-MMM-yyyy");

			for (int i = 0; i < orders.length; i++)
			{
				final OrderHistoryViewData orderHistoryViewData = new OrderHistoryViewData();
				orderEntryData = new OrderEntryData();
				final OrderModel order = b2bOrderService.getOrderForCode(orders[i]);
				if (null != order)
				{
					for (final AbstractOrderEntryModel entries : order.getEntries())
					{

						orderHistoryViewData.setOrderNum(orders[i]);

						orderHistoryViewData
								.setLineNumber((entries.getEntryNumber() == null) ? " " : entries.getEntryNumber().toString());
						orderHistoryViewData.setPartNumber(
								StringUtils.isBlank(entries.getProduct().getCode()) ? " " : entries.getProduct().getCode());
						orderHistoryViewData.setDescription(
								StringUtils.isBlank(entries.getProduct().getDescription()) ? " " : entries.getProduct().getDescription());

						orderHistoryViewData.setQty((entries.getQuantity() == null) ? " " : entries.getQuantity().toString());
						orderHistoryViewData
								.setStatus((entries.getQuantityStatus() == null) ? " " : entries.getQuantityStatus().toString());
						orderHistoryViewData.setShipDate(
								(entries.getNamedDeliveryDate() == null) ? " " : df.format(entries.getNamedDeliveryDate()).toString());
						orderHistoryViewData
								.setShipTo((entries.getDeliveryAddress() == null) ? " " : entries.getDeliveryAddress().toString());

						orderHistoryViewData.setCourier("XYZ");
						orderHistoryViewData.setTrackingNumber("1234");

						orderHistoryViewData.setCustomerPO(StringUtils.isBlank(order.getPonum()) ? " " : order.getPonum());
						orderHistoryViewData.setOrderDate((order.getDate() == null) ? " " : df.format(order.getDate()).toString());
						orderHistoryViewData.setSoldToName(
								StringUtils.isBlank(order.getSoldToForCart().getUid()) ? " " : order.getSoldToForCart().getUid());

						orderDataListDTO.add(orderHistoryViewData);
					}
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Exception in Order History While Viewing Data" + ExceptionUtils.getStackTrace(e));

		}

		return orderDataListDTO;
	}

	/**
	 * This method will get all the applicable attachment numbers for the given sales order number from SAP using RFC
	 *
	 */
	@Override
	public BHGESalesOrderAttachmentsData getAttachmentsListForOrder(final String orderNo, final String customerNumber)
	{
		return bhgeInvoiceSoaService.getAttachmentsListForOrder_SCPI(orderNo, customerNumber);
	}
	
	
	@Override
	public BHGESalesOrderAttachmentData getAttachmentsListForOrderNew(final String orderNo, final String customerNumber, String flag, String fileName, String fileType)
	{
		return bhgeInvoiceSoaService.getAttachmentsListForOrderNew_SCPI(orderNo, customerNumber, flag, fileName, fileType);
	}


	/*
	 * @Override public List<List<ContactusSettingsModel>> getContactusListForOrder(final String orderNo){ return
	 * geedgeInvoiceSoaService.getContactusListForOrder(orderNo);
	 *
	 * }
	 */

	/**
	 * below methods will get the attached files from SAP for the given document number and type
	 * This method logic is changed now. JCO specific code is removed and Calling SCPI specific method
	 * Change Date - 1st Sept 2020
	 * Reason : Cloud Move + SCPI
	 */
	public String getAttachmentPDF(final String docNumber, final String docType, final String customerNumber)
	{
		if (StringUtils.isNotBlank(docNumber) && StringUtils.isNotBlank(docType))
		{
			return bhgeInvoiceSoaService.getOrderDoc_SCPI(docNumber.trim(), docType, customerNumber);
		}
		return null;
	}
	
	// Added for changes to the order attachments rfc - download order documents start
	/**
	 * @throws UnsupportedEncodingException 
	 *
	 */
	@Override
	public BHGESalesOrderAttachmentData getNewAttachmentPDF(String orderNumber, String flag, String fileName, String fileType,
			String customerNumber) throws UnsupportedEncodingException {
		if(StringUtils.isNotBlank(orderNumber) && StringUtils.isNotBlank(fileName) && StringUtils.isNotBlank(fileType)) {
			return bhgeInvoiceSoaService.getOrderDocsNew_SCPI(orderNumber, flag, fileName, fileType, customerNumber);
		}
		return null;
	}
	
	// Added for changes to the order attachments rfc - download order documents end

	@Override
	public String getInvoicePDF(final String invoiceID, final String customerNumber)
	{

		final String pdfContent = bhgeInvoiceSoaService.getOrderDoc_SCPI(invoiceID, BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE,
				customerNumber);
		return pdfContent;
	}

	@Override
	public String getSOAPDF(final String orderNo, final String customerNumber)
	{

		final String pdfContent = bhgeInvoiceSoaService.getOrderDoc_SCPI(orderNo, BhgeCoreConstants.SAP_SOA_NUMBER_SOURCE,
				customerNumber);

		return pdfContent;
	}

	public ArrayList<OrderHistoryViewData> getLineItem(final String orderNo, final String pageFlag)
	{

		final OrderModel order = b2bOrderService.getOrderForCode(orderNo);

		final ArrayList<OrderHistoryViewData> orderDataList = new ArrayList<OrderHistoryViewData>();

		for (final AbstractOrderEntryModel entries : order.getEntries())
		{

			try
			{
				final OrderHistoryViewData orderHistoryViewData = new OrderHistoryViewData();
				orderHistoryViewData.setLineNumber((entries.getEntryNumber() == null) ? " " : entries.getEntryNumber().toString());
				orderHistoryViewData
						.setPartNumber(StringUtils.isBlank(entries.getProduct().getCode()) ? " " : entries.getProduct().getCode());
				orderHistoryViewData.setDescription(
						StringUtils.isBlank(entries.getProduct().getDescription()) ? " " : entries.getProduct().getDescription());
				orderHistoryViewData.setQty((entries.getQuantity() == null) ? " " : entries.getQuantity().toString());
				orderHistoryViewData.setStatus((entries.getQuantityStatus() == null) ? " " : entries.getQuantityStatus().toString());
				orderHistoryViewData.setCourier("XYZ");
				final SimpleDateFormat df = new SimpleDateFormat("dd-MMM-yyyy");

				orderHistoryViewData.setShipDate(
						(entries.getNamedDeliveryDate() == null) ? " " : df.format(entries.getNamedDeliveryDate().getTime()));
				orderHistoryViewData
						.setShipTo((entries.getDeliveryAddress() == null) ? " " : entries.getDeliveryAddress().toString());
				orderHistoryViewData.setTrackingNumber("trackingNumber");
				if (bhgeServiceProviderService.validServiceProvider("XYZ") == true)
				{
					orderHistoryViewData.setUrl(bhgeServiceProviderService.getSiteURL("trackingNumber", "XYZ"));
				}
				else
				{
					orderHistoryViewData.setUrl(null);
				}
				orderDataList.add(orderHistoryViewData);
			}
			catch (final Exception e)
			{
				LOG.error("Exception in Order History While getting Line Item" + ExceptionUtils.getStackTrace(e));

			}
		}

		return orderDataList;
	}

	


}
