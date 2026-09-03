/**
 *
 */
package com.bhge.core.sap.service.impl;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.AttachedData;
import com.bhge.core.data.BHGERmaAttachmentData;
import com.bhge.core.data.BHGESalesOrderAttachmentData;
import com.bhge.core.data.RmaErrorMessageData;
import com.bhge.core.data.SalesOrderAttachedData;
import com.bhge.core.data.SalesOrderErrorMessageData;
//import com.hybris.ge.edge.core.model.ContactusSettingsModel;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.service.BHGEInvoiceSoaService;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderItemRequest;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderPdfRequest;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZHYBOrderPdfResponse;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZOrderAttachmentDownloadRequest;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZOrderAttachmentDownloadRequest$Item;
import com.bhge.core.scpi.rfc.orderattachmentdownload.ZOrderAttachmentDownloadResponse;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcRequest$Item;
import com.bhge.core.scpi.rfc.rmaattachmentdownload.ZHYBRmaNotifDocAttcResponse;
import com.bhge.core.user.daos.impl.DefaultBHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.order.attachments.BHGESalesOrderAttachmentsData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoTable;

import de.hybris.platform.b2b.dao.impl.DefaultB2BOrderDao;
//import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commerceservices.customer.CustomerAccountService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.util.Config;



public class DefaultBHGEInvoiceSoaService implements BHGEInvoiceSoaService
{
	private final static Logger LOG = Logger.getLogger(BHGEInvoiceSoaService.class);

	// @Resource(name = "sapJcoContainer")
	// private SAPJcoContainer sapJcoContainer;
	private static final String CONTACTUS_SUPPORTTEAM_ORDER = "GEEdgeSupportTeamOrder";
	@Resource(name = "customerAccountService")
	private CustomerAccountService customerAccountService;

	@Resource(name = "baseStoreService")
	private BaseStoreService baseStoreService;

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "sessionService")
	private SessionService sessionService;
	
	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;


	@Resource
	private DefaultB2BOrderDao b2bOrderDao;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "userProfileDao")
	private DefaultBHGEUserProfileDao userProfileDao;
	
	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;

	@Override
	public JCoFunction prepareOrderAttachmentsRFCRequest(final String itemNo, final String itemType, String customerNumber,
			final JCoConnection jCoConnection)
	{
		JCoFunction jCoFunction = null;
		try
		{
			jCoFunction = jCoConnection.getFunction(Config.getString("SAP_ORDER_FUNCTION", "Z_S_ORDER_PDF"));
			if (jCoFunction == null)
			{
				LOG.error("Failed to get SAP JCO function for Order Attachments");
				return null;
			}
			// setting customer account number
			if (StringUtils.isNotBlank(customerNumber))
			{
				customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10); // Ensuring proper formatted sold to number
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_CUSTOMER_ACCOUNT_VALUE, customerNumber);
			}
			// setting SO number to get attachments list
			if (BhgeCoreConstants.SAP_SALES_ORDER_SOURCE.equals(itemType))
			{
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_SALES_ORDER_SOURCE, itemNo);

			}
			// setting Invoice number to get PDF
			else if (BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE.equals(itemType))
			{
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE, itemNo);

			}
			// setting SO# and IM_IDENTIFIER to get SOA PDF
			else if (BhgeCoreConstants.SAP_SOA_NUMBER_SOURCE.equals(itemType))
			{
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_SALES_ORDER_SOURCE, itemNo);
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_SOA_IM_IDENTIFIER,
						BhgeCoreConstants.SAP_SOA_IM_IDENTIFIER_VALUE);
			}
			// setting Delivery Note number to get PDF
			else if (BhgeCoreConstants.SAP_DELIVERY_NOTE_IDENTIFIER.equals(itemType))
			{
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_DELIVERY_NOTE_IDENTIFIER, itemNo);
			}
			// setting IDENTIFIER = PO ID and IDENTIFIER_VALUE = P
			else if (BhgeCoreConstants.SAP_PO_IDENTIFIER.equals(itemType))
			{
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_SALES_ORDER_SOURCE, itemNo);
				jCoFunction.getImportParameterList().setValue(BhgeCoreConstants.SAP_SOA_IM_IDENTIFIER,
						BhgeCoreConstants.SAP_PO_IDENTIFIER_VALUE);
			}
			else
			{
				return null;
			}

			return jCoFunction;

		}
		catch (final BackendException backEndException)
		{
			LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type "
					+ itemType + backEndException);
			handleAttachmentsException(backEndException, jCoFunction);
			return null;
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type "
					+ itemType + e);
			handleAttachmentsException(e, jCoFunction);
			return null;
		}
	}

	protected void handleAttachmentsException(final Exception exception, final JCoFunction function)
	{
		final List<String> requestParamToSAP = getRequestParamsToSAP(function);
		final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
		final UserModel user = userService.getCurrentUser();
		final String soldToID = ((soldTo == null) ? "No Soldto Found" : soldTo.getUid());
		final GEEdgeCustomerModel bhgeCustomerModel = userProfileService.findCurrentUserProfile(user.getUid());
		final String userEmail = bhgeCustomerModel == null ? "no_user_found" : bhgeCustomerModel.getEmail();

		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
		model.setErrorCode("Exception while Preparing Order Attachments RFC request");
		final String exceptionMsg = exception.getMessage();
		model.setErrorDescription(exceptionMsg);
		model.setCurrentUserEmail(userEmail);
		model.setCurrentSoldToId(soldToID);
		model.setErrorTime(reportDate);
		model.setErrorType("Order Attachments RFC Request Error");
		model.setRequestParameterToSAP("Order Document No. as " + requestParamToSAP.get(0).toString() + "Document Invoice No. as "
				+ requestParamToSAP.get(1).toString() + "Document Identifier as " + requestParamToSAP.get(2).toString());
		model.setResponseParameterFromSAP("Exception Object" + exception.toString());
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
		model.setStatus(Boolean.FALSE);
		modelService.save(model);
	}

	/**
	 * This method will get the list of documents available for the given order in SAP using the RFC call
	 *
	 */
	@Override
	public BHGESalesOrderAttachmentsData getAttachmentsListForOrder(final String orderID, final String customerNumber)
	{
		try
		{
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			if (connection != null && !connection.isBackendOffline())
			{
				final JCoFunction function = prepareOrderAttachmentsRFCRequest(orderID, BhgeCoreConstants.SAP_SALES_ORDER_SOURCE,
						customerNumber, connection);
				connection.execute(function);
				return processAttachmentsRFCResponse(function);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while getting the Attachments for the Sales Order: " + orderID + e);
		}
		return null;
	}


	/*
	 * @Override public List<List<ContactusSettingsModel>> getContactusListForOrder(final String orderID){
	 *
	 * final OrderModel order= b2bOrderDao.findOrderByCode(orderID); //final BaseStoreModel basestore =
	 * baseStoreService.getCurrentBaseStore(); List<ContactusSettingsModel> contactus = null;
	 * List<List<ContactusSettingsModel>> contactUsSettings= new ArrayList();
	 */
	/*
	 * if(order != null){ Already commented code for(AbstractOrderEntryModel orderEntry : order.getEntries()){ String
	 * platcode = orderEntry.getPlant(); if(platcode != null){ String basestorecode = platcode+"_BaseStore"; contactus =
	 * userProfileDao.getContactUsFromBaseStoreUid(basestorecode,"ordersupport"); if(contactus != null){
	 * contactUsSettings.add(contactus); } } } }
	 */
	/*
	 * if(order != null){ String platcode = order.getSoldToForCart().getUid().split("_")[1]; if(platcode != null){ String
	 * basestorecode = platcode+"_BaseStore"; contactus =
	 * userProfileDao.getContactUsFromBaseStoreUid(basestorecode,"ordersupport"); if(contactus != null){
	 * contactUsSettings.add(contactus); } } }
	 *
	 * return contactUsSettings; }
	 */


	protected BHGESalesOrderAttachmentsData processAttachmentsRFCResponse(final JCoFunction function)
	{
		if (null != function)
		{
			processAttachmentsRFCError(function);
			final BHGESalesOrderAttachmentsData attachmentsData = processAttachments(function);
			return attachmentsData;
		}
		return null;
	}

	private BHGESalesOrderAttachmentsData processAttachments(final JCoFunction function)
	{
		BHGESalesOrderAttachmentsData orderAttachments = null;
		if (null != function)
		{
			final List<String> soaList = getAttachmentsList(function, BhgeCoreConstants.T_ORDERLIST);
			final List<String> invoicesList = getAttachmentsList(function, BhgeCoreConstants.T_INVOICELIST);
			final List<String> customInvoicesList = getAttachmentsList(function, BhgeCoreConstants.T_CUSTOM_INVOICE);
			final List<String> deliveryNotesList = getAttachmentsList(function, BhgeCoreConstants.T_DELIVERY);
			final List<String> poList = getAttachmentsList(function, BhgeCoreConstants.T_PO);

			orderAttachments = new BHGESalesOrderAttachmentsData();
			orderAttachments.setSalesOrderAck(soaList);
			orderAttachments.setInvoices(invoicesList);
			orderAttachments.setCustomInvoices(customInvoicesList);
			orderAttachments.setDeliveryNotes(deliveryNotesList);
			orderAttachments.setPurchaseOrders(poList);
			addAttachmentDocDetails(orderAttachments);
		}
		return orderAttachments;
	}

	private BHGESalesOrderAttachmentsData addAttachmentDocDetails(final BHGESalesOrderAttachmentsData orderAttachments)
	{
		// Setting SOA Document Details
		orderAttachments.setSoaDocType(BhgeCoreConstants.SAP_SOA_NUMBER_SOURCE);
		orderAttachments.setSoaFileName(BhgeCoreConstants.SOA_FILENAME);

		// Setting Invoice Document Details
		orderAttachments.setInvDocType(BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE);
		orderAttachments.setInvFileName(BhgeCoreConstants.INV_FILENAME);

		// Setting Custom Invoice Document Details
		orderAttachments.setCustomInvDocType(BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE);
		orderAttachments.setCustomInvFileName(BhgeCoreConstants.CUSTOM_INV_FILENAME);

		// Setting Delivery Note Document Details
		orderAttachments.setDelNoteDocType(BhgeCoreConstants.SAP_DELIVERY_NOTE_IDENTIFIER);
		orderAttachments.setDelNoteFileName(BhgeCoreConstants.DEL_NOTE_FILENAME);

		// Setting PO Document Details
		orderAttachments.setPoDocType(BhgeCoreConstants.SAP_PO_IDENTIFIER);
		orderAttachments.setPoFileName(BhgeCoreConstants.PO_FILENAME);

		return orderAttachments;
	}

	private List<String> getAttachmentsList(final JCoFunction function, final String attachmentType)
	{
		final List<String> attachmentsList = new ArrayList<String>();
		if (null != function)
		{
			final JCoTable attachmentTable = function.getTableParameterList().getTable(attachmentType);
			if (attachmentTable.getNumRows() > 0)
			{
				for (int i = 0; i < attachmentTable.getNumRows(); i++)
				{
					final String soaFlag = attachmentTable.getString(BhgeCoreConstants.SOA_IDENTIFIER_FLAG);

					// If Document exists in SAP then add the Document number to the list
					if (StringUtils.isNotBlank(soaFlag) && BhgeCoreConstants.SOA_FLAG_VALUE.equals(soaFlag.trim()))
					{
						attachmentsList.add((String) attachmentTable.getValue(BhgeCoreConstants.SOA_ATTACHMENT_VBELN));
					}
					attachmentTable.nextRow();
				}
			}
		}
		return attachmentsList;
	}

	private void processAttachmentsRFCError(final JCoFunction function)
	{
		final JCoTable messageTable = function.getTableParameterList().getTable("T_MESSAGETABLE");
		final int numOfMessageRows = messageTable.getNumRows();

		if (numOfMessageRows > 0)
		{

			final UserModel user = userService.getCurrentUser();
			BHGESoldToData soldTo = null;
			GEEdgeCustomerModel bhgeCustomerModel = null;
			if (null != user && user instanceof GEEdgeCustomerModel)
			{
				soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
				bhgeCustomerModel = userProfileService.findCurrentUserProfile(user.getUid());
			}

			final String soldToID = ((soldTo == null) ? "No Soldto Found" : soldTo.getUid());
			final String userEmail = bhgeCustomerModel == null ? "no_user_found" : bhgeCustomerModel.getEmail();
			final List<String> requestParamToSAP = getRequestParamsToSAP(function);

			for (int i = 0; i < numOfMessageRows; i++)
			{
				final String messageType = messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_TYPE);
				final String message = messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE);
				if (messageType != null && messageType.equalsIgnoreCase("E"))
				{
					final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
					final DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
					final Date today = Calendar.getInstance().getTime();
					final String reportDate = df.format(today);

					model.setErrorCode(messageType + "with Order Document No." + requestParamToSAP.get(0).toString());
					model.setErrorDescription(message);
					model.setErrorType("Order Attachments RFC Error");

					model.setRequestParameterToSAP("Order Document No. as" + requestParamToSAP.get(0).toString()
							+ "Document Invoice No. as" + requestParamToSAP.get(1).toString() + "Document Identifier as"
							+ requestParamToSAP.get(2).toString());
					model.setResponseParameterFromSAP("Message Type: " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_TYPE)
							+ "Message Id: " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_ID) + "Message Number: "
							+ messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_NUMBER) + "Message: "
							+ messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE));
					model.setCurrentUserEmail(userEmail);
					model.setCurrentSoldToId(soldToID);
					model.setErrorTime(reportDate);
					model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
					model.setStatus(Boolean.FALSE);
					modelService.save(model);
				}
				messageTable.nextRow();
			}
		}
	}

	protected List<String> getRequestParamsToSAP(final JCoFunction function)
	{
		final List<String> requestParamsToSAP = new ArrayList<String>();
		if (null != function)
		{
			final String docOrdrNo = (String) function.getImportParameterList().getValue(BhgeCoreConstants.SAP_SALES_ORDER_SOURCE);
			final String docInvoiceNo = (String) function.getImportParameterList()
					.getValue(BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE);
			final String docIdentifier = (String) function.getImportParameterList()
					.getValue(BhgeCoreConstants.SAP_SOA_IM_IDENTIFIER);

			requestParamsToSAP.add(docOrdrNo);
			requestParamsToSAP.add(docInvoiceNo);
			requestParamsToSAP.add(docIdentifier);
		}
		return requestParamsToSAP;
	}

	/**
	 * This method will get the order document for the given document number and type from SAP using RFC.
	 * The method is changed now
	 * Date - 1st Sept 2020
	 * Reason : Cloud Move + SCPI.   
	 */
	@Override
	public String getOrderDoc_SCPI(final String docID, final String sapDocType, final String customerNumber)
	{
		try
		{
			LOG.info(" **************** ORDER ATTACHMENTS Download RFC - Order Attachment Type - "+sapDocType+ "************ ");
			final String rfcname = BhgeCoreConstants.Z_S_ORDER_PDF;
			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			LOG.debug("Making RFC call to get SOA document for " + docID + " " + sapDocType);
			if (null!= docID && null!= sapDocType && null!= customerNumber) {
				final ZOrderAttachmentDownloadRequest downloadorderttachmentreq = createOrderDownloadAttRequestforSCPI(docID, sapDocType,customerNumber);
				final ZOrderAttachmentDownloadResponse downloadorderttachmentres = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, downloadorderttachmentreq, ZOrderAttachmentDownloadResponse.class);
				if(null!=downloadorderttachmentres) {
					return processOrderDocRFCResponse(downloadorderttachmentres, downloadorderttachmentreq);
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while getting the Document for the Order: " + docID + " Type: " + sapDocType + e);
		}
		return null;
	}
	
	
	//Added for changes in order documents download attachment rfc - start
	@Override
	public BHGESalesOrderAttachmentData getOrderDocsNew_SCPI(String orderNumber, String flag, String fileName, String fileType,
			String customerNumber) throws UnsupportedEncodingException {
		LOG.info(" **************** New ORDER ATTACHMENTS Download RFC - Order Attachment Type - "+fileType+" ************ ");
		final String rfcname = BhgeCoreConstants.Z_S_ORDER_PDF;
		final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
		LOG.debug("Making RFC call to get new Order Attachments document for " + fileName + " " + fileType);
		if(StringUtils.isNotBlank(orderNumber) && StringUtils.isNotBlank(fileName) && StringUtils.isNotBlank(fileType) && StringUtils.isNotBlank(customerNumber)) {
			final ZHYBOrderPdfRequest orderPdfDownloadRequest = createOrderAttachmentDownloadRequestForSCPI(orderNumber, flag, fileType, fileName, customerNumber);
			final ZHYBOrderPdfResponse orderPdfDownloadResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, orderPdfDownloadRequest, ZHYBOrderPdfResponse.class);
			if(orderPdfDownloadResponse != null) {
				return processOrderAttachmentDownloadResponse(orderPdfDownloadResponse);
			}
		}
		return null;
	}
	
	
	/*
	 * Prepare the new order attachment download RFC request
	 */
	private ZHYBOrderPdfRequest createOrderAttachmentDownloadRequestForSCPI(String orderNumber, String flag, String fileType,
			String fileName, String customerNumber) {
		LOG.info(" Preparing request for ZHYBOrderPdfRequest ATTACHMENTS Download RFC ");
			
		ZHYBOrderPdfRequest request = new ZHYBOrderPdfRequest();
		try {
			if(StringUtils.isNotBlank(customerNumber)) {
				customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10);
				request.setCustomer(customerNumber);
			}

			if(StringUtils.isNotBlank(orderNumber)) {
				request.setSalesorder(orderNumber);
			}

			request.setImflag(flag);
			request.setFiletype(fileType);
			//request.setFilename(fileName);
			request.setFilename(URLDecoder.decode(fileName, StandardCharsets.UTF_8.name()).replaceAll("%20", " "));
		}
		catch(Exception e) {
			LOG.error("Exception in download order attachment RFC ZHYBOrderPdfRequest : " + e.getMessage());
		}
		LOG.info("Order Attachment download RFC ZHYBOrderPdfRequest request payload  :" + SCPIConnector.toXML(request));
		return request;
	}
	
	
	
	/*
	 * Process the response for the new Order attachment download RFC
	 */
	private BHGESalesOrderAttachmentData processOrderAttachmentDownloadResponse(ZHYBOrderPdfResponse orderPdfDownloadResponse) {
		LOG.info("Order Attachment Download RFC response payload ZHYBOrderPdfResponse : " + SCPIConnector.toXML(orderPdfDownloadResponse));
		final BHGESalesOrderAttachmentData attachmentData = new BHGESalesOrderAttachmentData();
		
		try {
			if(null != orderPdfDownloadResponse && null != orderPdfDownloadResponse.getEx_order_attc() 
					&& CollectionUtils.isNotEmpty(orderPdfDownloadResponse.getEx_order_attc().getItems())) {
				final List<SalesOrderAttachedData> data = prepareOrderAttachmentData(orderPdfDownloadResponse);
	   	   		final SalesOrderErrorMessageData errorMessage = prepareOrderattachmentdownloadErrorMessageDataRFC(orderPdfDownloadResponse);
	   	   		
	   	   		if(CollectionUtils.isNotEmpty(data)) {
	   	   			for(SalesOrderAttachedData attachedData : data) {
	   	   				String fileName = StringEscapeUtils.unescapeHtml4(attachedData.getFileName().replace("%", "%25"));
	   	   				attachedData.setFileName(fileName);
	   	   			}
	   	   			attachmentData.setFileData(data);
	   	   		}
		   	   	
		   	   	if (attachmentData.getFileData() == null)
		   		{
		   			attachmentData.setErrorMessage(errorMessage);
		   		}
		   	   	
			}
		}
		catch(Exception e) {
			LOG.error("Error processing the response for download order attachment RFC ZHYBOrderPdfResponse :  "+ e.getMessage());
			e.printStackTrace();
		}
		
		return attachmentData;
	}
	//Added for changes in order documents download attachment rfc - end
	

	

	protected String processOrderDocRFCResponse(final ZOrderAttachmentDownloadResponse downloadorderttachmentres, final ZOrderAttachmentDownloadRequest downloadorderttachmentreq)
	{
		String pdfHexString = "";
		if (null != downloadorderttachmentres && null!=downloadorderttachmentreq)
		{
			processAttachmentsRFCError_SCPI(downloadorderttachmentres, downloadorderttachmentreq);
			final BHGESalesOrderAttachmentsData attachmentsData = processOrderAttachments(downloadorderttachmentres);
			pdfHexString = processOrderDoc(attachmentsData);
		}
		return pdfHexString;
	}

	protected String processOrderDoc(final BHGESalesOrderAttachmentsData attachmentsData)
	{
		String pdfHexString = "";
		if (null != attachmentsData)
		{
			if(null!=attachmentsData.getExpdfdata() || attachmentsData.getExpdfdata()!="") {
				pdfHexString = attachmentsData.getExpdfdata();
			}
			LOG.debug("PDF Hex String: " + pdfHexString);
		}
		return pdfHexString;
	}

	/**
	 * Return current session sold-to UID Ex: 0000111111
	 *
	 * @return
	 */
	public String getSoldTo()
	{
		final BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
		if (null != soldto)
		{
			return soldto.getUid();
		}
		return null;
	}
	
	/**
	 * Changed for - SAP Cloud move
	 * This method will get the list of documents available for the given order in SAP using the RFC call via SCPI
	 *
	 */
	@Override
	public BHGESalesOrderAttachmentsData getAttachmentsListForOrder_SCPI(final String orderID, final String customerNumber)
	{
		LOG.info(" **************** ORDER ATTACHMENTS Download RFC ************ ");
		try
		{
			// SCPI Connectivity to be check prior to send a request.
			final String rfcname = BhgeCoreConstants.Z_S_ORDER_PDF;
			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			LOG.info("******** SCPI ORDER Attachment URL : "+scpiEndPoint+" ********************");
			if (scpiEndPoint != null ) {
				final ZOrderAttachmentDownloadRequest downloadorderttachmentreq = createOrderDownloadAttRequestforSCPI(orderID, BhgeCoreConstants.SAP_SALES_ORDER_SOURCE,customerNumber);
				final ZOrderAttachmentDownloadResponse downloadorderttachmentres = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, downloadorderttachmentreq, ZOrderAttachmentDownloadResponse.class);
				if(null!=downloadorderttachmentres) {
					return processOrderDownloadAttResponse(downloadorderttachmentres,downloadorderttachmentreq);
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while getting the Attachments for the Sales Order: " + orderID + e);
		}
		return null;
	}
	
	
	// Added for new Order Attachment RFC changes - start
	@Override
	public BHGESalesOrderAttachmentData getAttachmentsListForOrderNew_SCPI(final String orderID, final String customerNumber, String flag, String fileName, String fileType)
	{
		LOG.info(" **************** ORDER ATTACHMENTS Download RFC ************ ");
		try
		{
			// SCPI Connectivity to be check prior to send a request.
			final String rfcname = BhgeCoreConstants.Z_S_ORDER_PDF;
			final String scpiEndPoint = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			LOG.info("******** SCPI ORDER Attachment URL : "+scpiEndPoint+" ********************");
			if (scpiEndPoint != null ) {
				//final ZOrderAttachmentDownloadRequest downloadorderttachmentreq = createNewOrderDownloadAttRequestforSCPI(orderID, BhgeCoreConstants.SAP_SALES_ORDER_SOURCE,customerNumber);
				final ZHYBOrderPdfRequest orderAttachmentsRequest = createNewOrderDownloadAttRequestforSCPI(orderID, BhgeCoreConstants.SAP_SALES_ORDER_SOURCE, customerNumber, flag, fileName, fileType);
				final ZHYBOrderPdfResponse orderAttachmentsResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndPoint, orderAttachmentsRequest, ZHYBOrderPdfResponse.class);
				if(null!=orderAttachmentsResponse) {
					return processOrderDownloadAttResponse_New(orderAttachmentsResponse);
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while getting the Attachments for the Sales Order: " + orderID + e);
		}
		return null;
	}
	
	@Override
	public ZHYBOrderPdfRequest createNewOrderDownloadAttRequestforSCPI(final String itemNo, final String itemType, String customerNumber, String flag, String fileName, String fileType)
	{
		LOG.info(" **************** ORDER ATTACHMENTS Download RFC Creation Service ************ ");
		
		ZHYBOrderPdfRequest orderattachmentdownloadrequest = new ZHYBOrderPdfRequest();
		try
		{
			// setting customer account number
			if (StringUtils.isNotBlank(customerNumber))
			{
				customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10); // Ensuring proper formatted sold to number
				orderattachmentdownloadrequest.setCustomer(customerNumber);
			}
			// setting SO number to get attachments list
			if (BhgeCoreConstants.SAP_SALES_ORDER_SOURCE.equals(itemType))
			{
				orderattachmentdownloadrequest.setSalesorder(itemNo);
			}
			orderattachmentdownloadrequest.setImflag(flag);
			orderattachmentdownloadrequest.setFilename(fileName);
			orderattachmentdownloadrequest.setFiletype(fileType);
			
			// setting Invoice number to get PDF
//			else if (BhgeCoreConstants. .equals(itemType))
//			{
//				orderattachmentdownloadrequest.set
//			}
//			// setting SO# and IM_IDENTIFIER to get SOA PDF
//			else if (BhgeCoreConstants.SAP_SOA_NUMBER_SOURCE.equals(itemType))
//			{
//				orderattachmentdownloadrequest.setSalesorder(itemNo);
//				orderattachmentdownloadrequest.setImidentifier(BhgeCoreConstants.SAP_SOA_IM_IDENTIFIER_VALUE);
//			}
//			// setting Delivery Note number to get PDF
//			else if (BhgeCoreConstants.SAP_DELIVERY_NOTE_IDENTIFIER.equals(itemType))
//			{
//				orderattachmentdownloadrequest.setDiliverynumber(itemNo);
//			}
//			// setting IDENTIFIER = PO ID and IDENTIFIER_VALUE = P
//			else if (BhgeCoreConstants.SAP_PO_IDENTIFIER.equals(itemType))
//			{
//				orderattachmentdownloadrequest.setSalesorder(itemNo);
//				orderattachmentdownloadrequest.setImidentifier(BhgeCoreConstants.SAP_PO_IDENTIFIER_VALUE);
//			}
//			else
//			{
//				LOG.info("Order Attachments request payload:" + SCPIConnector.toXML(orderattachmentdownloadrequest));
//				return orderattachmentdownloadrequest;
//			}
			LOG.info("New Order Attachments RFC request payload: " + SCPIConnector.toXML(orderattachmentdownloadrequest));
			return orderattachmentdownloadrequest;

		}
		/*catch (final BackendException backEndException)
		{
			LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type " + itemType + backEndException);
			handleAttachmentsExceptionforSCPI(backEndException, orderattachmentdownloadrequest);
			return null;
		}*/
		catch (final Exception e)
		{
			LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type " + itemType + e);
			handleNewOrderAttachmentsExceptionforSCPI(e, orderattachmentdownloadrequest);
			return null;
		}
	}
	
	//Added for new Order RFC changes - end

	@Override
	public ZOrderAttachmentDownloadRequest createOrderDownloadAttRequestforSCPI(final String itemNo, final String itemType, String customerNumber)
	{
		LOG.info(" **************** ORDER ATTACHMENTS Download RFC Creation Service ************ ");
		ZOrderAttachmentDownloadRequest orderattachmentdownloadrequest = new ZOrderAttachmentDownloadRequest();
		try
		{
			// setting customer account number
			if (StringUtils.isNotBlank(customerNumber))
			{
				customerNumber = BHGESAPJCoUtils.addLeadingZeros(customerNumber, 10); // Ensuring proper formatted sold to number
				orderattachmentdownloadrequest.setCustomer(customerNumber);
			}
			// setting SO number to get attachments list
			if (BhgeCoreConstants.SAP_SALES_ORDER_SOURCE.equals(itemType))
			{
				orderattachmentdownloadrequest.setSalesorder(itemNo);
			}
			// setting Invoice number to get PDF
			else if (BhgeCoreConstants.SAP_INVOICE_NUMBER_SOURCE.equals(itemType))
			{
				orderattachmentdownloadrequest.setInvoicenumber(itemNo);
			}
			// setting SO# and IM_IDENTIFIER to get SOA PDF
			else if (BhgeCoreConstants.SAP_SOA_NUMBER_SOURCE.equals(itemType))
			{
				orderattachmentdownloadrequest.setSalesorder(itemNo);
				orderattachmentdownloadrequest.setImidentifier(BhgeCoreConstants.SAP_SOA_IM_IDENTIFIER_VALUE);
			}
			// setting Delivery Note number to get PDF
			else if (BhgeCoreConstants.SAP_DELIVERY_NOTE_IDENTIFIER.equals(itemType))
			{
				orderattachmentdownloadrequest.setDiliverynumber(itemNo);
			}
			// setting IDENTIFIER = PO ID and IDENTIFIER_VALUE = P
			else if (BhgeCoreConstants.SAP_PO_IDENTIFIER.equals(itemType))
			{
				orderattachmentdownloadrequest.setSalesorder(itemNo);
				orderattachmentdownloadrequest.setImidentifier(BhgeCoreConstants.SAP_PO_IDENTIFIER_VALUE);
			}
			else
			{
				LOG.info(" Download Order Attachment Download request payload:" + SCPIConnector.toXML(orderattachmentdownloadrequest));
				return orderattachmentdownloadrequest;
			}
			LOG.info(" Download RMA Attachment request payload:" + SCPIConnector.toXML(orderattachmentdownloadrequest));
			return orderattachmentdownloadrequest;

		}
		/*catch (final BackendException backEndException)
		{
			LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type " + itemType + backEndException);
			handleAttachmentsExceptionforSCPI(backEndException, orderattachmentdownloadrequest);
			return null;
		}*/
		catch (final Exception e)
		{
			LOG.error("Error occured while preparing Order Attachments RFC request for Order# " + itemNo + " and for Type " + itemType + e);
			handleAttachmentsExceptionforSCPI(e, orderattachmentdownloadrequest);
			return null;
		}
	}
	
	// This method signature is changed now and aligned with SCPI now. We need to remove older one`s methods
	protected void handleAttachmentsExceptionforSCPI(final Exception exception, ZOrderAttachmentDownloadRequest orderattachmentdownloadrequest)
	{
		try{
   		final List<String> requestParamToSAP = getRequestParamsToSAP_SCPI(orderattachmentdownloadrequest);
   		final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
   		final UserModel user = userService.getCurrentUser();
   		final String soldToID = ((soldTo == null) ? "No Soldto Found" : soldTo.getUid());
   		final GEEdgeCustomerModel bhgeCustomerModel = userProfileService.findCurrentUserProfile(user.getUid());
   		final String userEmail = bhgeCustomerModel == null ? "no_user_found" : bhgeCustomerModel.getEmail();
   
   		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
   		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
   		final Date today = Calendar.getInstance().getTime();
   		final String reportDate = df.format(today);
   		model.setErrorCode("Exception while Preparing Order Attachments RFC request");
   		final String exceptionMsg = exception.getMessage();
   		model.setErrorDescription(exceptionMsg);
   		model.setCurrentUserEmail(userEmail);
   		model.setCurrentSoldToId(soldToID);
   		model.setErrorTime(reportDate);
   		model.setErrorType("Order Attachments RFC Request Error");
   		model.setRequestParameterToSAP("Order Document No. as " + requestParamToSAP.get(0).toString() + "Document Invoice No. as "
   				+ requestParamToSAP.get(1).toString() + "Document Identifier as " + requestParamToSAP.get(2).toString());
   		model.setResponseParameterFromSAP("Exception Object" + exception.toString());
   		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
   		model.setStatus(Boolean.FALSE);
   		modelService.save(model);
		}
		catch(Exception e) {
			LOG.error("Error while Preparing Order Attachments and persisting RFC request "+e.getMessage());
		}
	}
	
	//Added for new Order Attachment RFC changes - start
	protected void handleNewOrderAttachmentsExceptionforSCPI(final Exception exception, ZHYBOrderPdfRequest orderattachmentdownloadrequest)
	{
		try{
   		final List<String> requestParamToSAP = getRequestParamsToSAP_SCPI(orderattachmentdownloadrequest);
   		//final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
   		final BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUser();
   		final UserModel user = userService.getCurrentUser();
   		final String soldToID = ((soldTo == null) ? "No Soldto Found" : soldTo.getUid());
   		final GEEdgeCustomerModel bhgeCustomerModel = userProfileService.findCurrentUserProfile(user.getUid());
   		final String userEmail = bhgeCustomerModel == null ? "no_user_found" : bhgeCustomerModel.getEmail();
   
   		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
   		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
   		final Date today = Calendar.getInstance().getTime();
   		final String reportDate = df.format(today);
   		model.setErrorCode("Exception while Preparing New Order Attachments RFC request");
   		final String exceptionMsg = exception.getMessage();
   		model.setErrorDescription(exceptionMsg);
   		model.setCurrentUserEmail(userEmail);
   		model.setCurrentSoldToId(soldToID);
   		model.setErrorTime(reportDate);
   		model.setErrorType("New Order Attachments RFC Request Error");
   		//model.setRequestParameterToSAP("Order Document No. as " + requestParamToSAP.get(0).toString() + "Document Invoice No. as "
   		//		+ requestParamToSAP.get(1).toString() + "Document Identifier as " + requestParamToSAP.get(2).toString());
   		model.setResponseParameterFromSAP("Exception Object" + exception.toString());
   		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
   		model.setStatus(Boolean.FALSE);
   		modelService.save(model);
		}
		catch(Exception e) {
			LOG.error("Error while Preparing Order Attachments and persisting RFC request "+e.getMessage());
		}
	}
	
	protected List<String> getRequestParamsToSAP_SCPI(final ZHYBOrderPdfRequest orderattachmentdownloadrequest)
	{
		final List<String> requestParamsToSAP = new ArrayList<String>();
		try {
   		if (null != orderattachmentdownloadrequest)
   		{
   			final String docOrdrNo = orderattachmentdownloadrequest.getSalesorder();
   			//final String docInvoiceNo = orderattachmentdownloadrequest.getInvoicenumber();
   			//final String docIdentifier = orderattachmentdownloadrequest.getImidentifier();
   			requestParamsToSAP.add(docOrdrNo);
   			//requestParamsToSAP.add(docInvoiceNo);
   			//requestParamsToSAP.add(docIdentifier);
   		}
		}
   	catch(Exception e) {
   		LOG.error("Error occured setting up paramerets to handle exception -: " + e.getMessage());
   	}
		return requestParamsToSAP;
	}
	//Added for new Order Attachment RFC changes - end
	
	
	
	protected List<String> getRequestParamsToSAP_SCPI(final ZOrderAttachmentDownloadRequest orderattachmentdownloadrequest)
	{
		final List<String> requestParamsToSAP = new ArrayList<String>();
		try {
   		if (null != orderattachmentdownloadrequest)
   		{
   			final String docOrdrNo = orderattachmentdownloadrequest.getSalesorder();
   			final String docInvoiceNo = orderattachmentdownloadrequest.getInvoicenumber();
   			final String docIdentifier = orderattachmentdownloadrequest.getImidentifier();
   			requestParamsToSAP.add(docOrdrNo);
   			requestParamsToSAP.add(docInvoiceNo);
   			requestParamsToSAP.add(docIdentifier);
   		}
		}
   	catch(Exception e) {
   		LOG.error("Error occured setting up paramerets to handle exception -: " + e.getMessage());
   	}
		return requestParamsToSAP;
	}
	
	// Method Parameters Changed - Cloud move
	protected BHGESalesOrderAttachmentsData processOrderDownloadAttResponse(final ZOrderAttachmentDownloadResponse orderattachmentdownloadres, ZOrderAttachmentDownloadRequest downloadorderttachmentreq)
	{
		LOG.info("Order Attachment Download response payload: " + SCPIConnector.toXML(orderattachmentdownloadres));
		try {
   		if (null != orderattachmentdownloadres && null!=downloadorderttachmentreq)
   		{
   			processAttachmentsRFCError_SCPI(orderattachmentdownloadres, downloadorderttachmentreq);
   			final BHGESalesOrderAttachmentsData attachmentsData = processOrderAttachments(orderattachmentdownloadres);
   			return attachmentsData;
   		}
		}
		catch(Exception e) {
			LOG.error("Excpetion in Order Attachment Download. " + e);
		}
		return null;
	}
	
	protected BHGESalesOrderAttachmentData processOrderDownloadAttResponse_New(final ZHYBOrderPdfResponse orderAttachmentsResponse)
	{
		BHGESalesOrderAttachmentData salesOrderAttachmentData = new BHGESalesOrderAttachmentData();
		LOG.info("Order Attachment Download response payload: " + SCPIConnector.toXML(orderAttachmentsResponse));
		try {
	   		if (null != orderAttachmentsResponse )
	   		{
	   			final List<SalesOrderAttachedData> data = prepareOrderAttachmentData(orderAttachmentsResponse);
	   	   		final SalesOrderErrorMessageData errorMessage = prepareOrderattachmentdownloadErrorMessageDataRFC(orderAttachmentsResponse);
	   	   		
		   	   	salesOrderAttachmentData.setFileData(data);
		   		if (salesOrderAttachmentData.getFileData() == null)
		   		{
		   			salesOrderAttachmentData.setErrorMessage(errorMessage);
		   		}
	   		}
		}
		catch(Exception e) {
			LOG.error("Excpetion in Order Attachment / Download Order Attachment Processing " + e.getMessage());
      }
		return salesOrderAttachmentData;
	}
	
	private List<SalesOrderAttachedData> prepareOrderAttachmentData(final ZHYBOrderPdfResponse orderAttachmentsResponse)
	{
		final List<SalesOrderAttachedData> orderAttachmentDataTable = new ArrayList<>();
		try {
	   		final List<ZHYBOrderItemRequest> orderAttachmentItem = orderAttachmentsResponse.getEx_order_attc() != null
	   				&& CollectionUtils.isNotEmpty(orderAttachmentsResponse.getEx_order_attc().getItems())
	   						? orderAttachmentsResponse.getEx_order_attc().getItems() : Collections.emptyList();
	   
	   		final int rowCount = orderAttachmentItem.size();
	   		if (rowCount > 0)
	   		{
	   			for (int i = 0; i < rowCount; i++)
	   			{
	   				final SalesOrderAttachedData data = new SalesOrderAttachedData();
					LOG.info("Original Attachment Filename: " + orderAttachmentItem.get(i).getFilename());
					final String filename = URLDecoder.decode(orderAttachmentItem.get(i).getFilename().replace("%", "%25"), StandardCharsets.UTF_8);
					LOG.info("Attachment filename: " + filename);
					final String filetype = orderAttachmentItem.get(i).getFiletype();
	   				String hexdata =  orderAttachmentItem.get(i).getHexdata();
	   				hexdata = hexdata.replaceAll("\\r\\n|\\r|\\n", "");
	   				
	   				if (null!= hexdata &&  null!=filename && null!=filetype) {
	   					data.setFileName(filename);
	   					data.setFileType(filetype);
	   					data.setHexData(hexdata);
	   					orderAttachmentDataTable.add(data);
	   				}
	   			}
	   		}
		}
		catch(Exception e) {
			LOG.info("Exception while creating RMA Attachment Download Request " + e.getMessage());
			e.printStackTrace();
		}
		return orderAttachmentDataTable;
	}
	
	private SalesOrderErrorMessageData prepareOrderattachmentdownloadErrorMessageDataRFC(final  ZHYBOrderPdfResponse orderAttachmentsResponse)
	{
		final SalesOrderErrorMessageData orderErrorMessageData = new SalesOrderErrorMessageData();
		final List<ZHYBOrderItemRequest> orderErrorMessageTable =
				orderAttachmentsResponse.getT_messageTable() != null && CollectionUtils.isNotEmpty(orderAttachmentsResponse.getT_messageTable().getItems())
						? orderAttachmentsResponse.getT_messageTable().getItems() : Collections.emptyList();
		final int rowCount = orderErrorMessageTable.size();

		if (rowCount > 0)
		{
			for (int i = 0; i < rowCount; i++)
			{
				orderErrorMessageData.setType(orderErrorMessageTable.get(i).getType());
				orderErrorMessageData.setId(orderErrorMessageTable.get(i).getId());
				orderErrorMessageData.setNumber(orderErrorMessageTable.get(i).getNumber());
				orderErrorMessageData.setMessage(orderErrorMessageTable.get(i).getMessage());
				orderErrorMessageData.setLogNumber(orderErrorMessageTable.get(i).getLog_no());
				orderErrorMessageData.setLogMessageNumber(orderErrorMessageTable.get(i).getLog_msg_no());
				orderErrorMessageData.setMessageV1(orderErrorMessageTable.get(i).getMessage_v1());
				orderErrorMessageData.setMessageV2(orderErrorMessageTable.get(i).getMessage_v2());
				orderErrorMessageData.setMessageV3(orderErrorMessageTable.get(i).getMessage_v3());
				orderErrorMessageData.setMessageV4(orderErrorMessageTable.get(i).getMessage_v4());
				orderErrorMessageData.setParameter(orderErrorMessageTable.get(i).getParameter());
				orderErrorMessageData.setRow(orderErrorMessageTable.get(i).getRow());
				orderErrorMessageData.setField(orderErrorMessageTable.get(i).getField());
				orderErrorMessageData.setSystem(orderErrorMessageTable.get(i).getSystem());
			}
		}
		return orderErrorMessageData;
	}
	
	private BHGESalesOrderAttachmentsData processOrderAttachments(final ZOrderAttachmentDownloadResponse orderattachmentdownloadres)
	{
		BHGESalesOrderAttachmentsData orderAttachments = null;
		try {
   		if (null != orderattachmentdownloadres)
   		{
   			final List<String> soaList = getOrderAttachmentsList(orderattachmentdownloadres, BhgeCoreConstants.T_ORDERLIST);
   			final List<String> invoicesList = getOrderAttachmentsList(orderattachmentdownloadres, BhgeCoreConstants.T_INVOICELIST);
   			final List<String> customInvoicesList = getOrderAttachmentsList(orderattachmentdownloadres, BhgeCoreConstants.T_CUSTOM_INVOICE);
   			final List<String> deliveryNotesList = getOrderAttachmentsList(orderattachmentdownloadres, BhgeCoreConstants.T_DELIVERY);
   			final List<String> poList = getOrderAttachmentsList(orderattachmentdownloadres, BhgeCoreConstants.T_PO);
   			String expdfdata= orderattachmentdownloadres.getEx_pdf_data();
   			expdfdata = expdfdata.replaceAll("\\r\\n|\\r|\\n", "");
   			orderAttachments = new BHGESalesOrderAttachmentsData();
   			orderAttachments.setSalesOrderAck(soaList);
   			orderAttachments.setInvoices(invoicesList);
   			orderAttachments.setCustomInvoices(customInvoicesList);
   			orderAttachments.setDeliveryNotes(deliveryNotesList);
   			orderAttachments.setPurchaseOrders(poList);
   			if(null!=expdfdata) {
   				orderAttachments.setExpdfdata(expdfdata);
   			}
   			addAttachmentDocDetails(orderAttachments);
   		}
		}
		catch(Exception e) {
			LOG.error("Excpetion in Order Attachment Download Processing " + e.getMessage());
		}
		return orderAttachments;
	}
	
	private List<String> getOrderAttachmentsList(final ZOrderAttachmentDownloadResponse orderattachmentdownloadres, final String attachmentType)
	{
		final List<String> orderAttachmentDataTable = new ArrayList<>();
		List<ZOrderAttachmentDownloadRequest$Item> attachmenttables = new ArrayList<>();
		try {
			if(attachmentType.equals(BhgeCoreConstants.T_CUSTOM_INVOICE)) {
   			attachmenttables = orderattachmentdownloadres.getT_customer_invoice() != null
      				&& CollectionUtils.isNotEmpty(orderattachmentdownloadres.getT_customer_invoice().getItems())
      						? orderattachmentdownloadres.getT_customer_invoice().getItems() : Collections.EMPTY_LIST;
   		}
   		else if(attachmentType.equals(BhgeCoreConstants.T_DELIVERY)) {
   			attachmenttables = orderattachmentdownloadres.getT_delivery() != null
      				&& CollectionUtils.isNotEmpty(orderattachmentdownloadres.getT_delivery().getItems())
      						? orderattachmentdownloadres.getT_delivery().getItems() : Collections.EMPTY_LIST;
   		}
   		else if(attachmentType.equals(BhgeCoreConstants.T_INVOICELIST)) {
   			attachmenttables = orderattachmentdownloadres.getT_invoicelist() != null
      				&& CollectionUtils.isNotEmpty(orderattachmentdownloadres.getT_invoicelist().getItems())
      						? orderattachmentdownloadres.getT_invoicelist().getItems() : Collections.EMPTY_LIST;
   		}
   		else if(attachmentType.equals(BhgeCoreConstants.T_ORDERLIST)) {
   			attachmenttables = orderattachmentdownloadres.getT_order() != null
      				&& CollectionUtils.isNotEmpty(orderattachmentdownloadres.getT_order().getItems())
      						? orderattachmentdownloadres.getT_order().getItems() : Collections.EMPTY_LIST;
   		}
   		if(attachmentType.equals(BhgeCoreConstants.T_PO)) {
   			attachmenttables = orderattachmentdownloadres.getT_po() != null
      				&& CollectionUtils.isNotEmpty(orderattachmentdownloadres.getT_po().getItems())
      						? orderattachmentdownloadres.getT_po().getItems() : Collections.EMPTY_LIST;
   		}
   		final int rowCount = attachmenttables.size();
   		if (rowCount > 0)
   		{
   			final String soaFlag = BhgeCoreConstants.SOA_IDENTIFIER_FLAG;
   			for (int i = 0; i < rowCount; i++)
   			{
   				final String vblen = attachmenttables.get(i).getVbeln();
   				final String flag = attachmenttables.get(i).getFlag();
   				/*if (null!= flag){
   					orderAttachmentDataTable.add(flag);
   				}*/
   				if (StringUtils.isNotBlank(flag) && BhgeCoreConstants.SOA_FLAG_VALUE.equals(flag)) {
   					orderAttachmentDataTable.add(vblen);
   				}
   				
   			}
   		}
		}
		catch(Exception e) {
			LOG.error("Excpetion while creating setting response paramenets from order download attachment " + e.getMessage());
		}
		return orderAttachmentDataTable;	
	}
	
	// Not passing any error response to frontend layer / batch job. Just persisting the error details from response. 
	private void processAttachmentsRFCError_SCPI(final ZOrderAttachmentDownloadResponse orderattachmentdownloadres, final ZOrderAttachmentDownloadRequest downloadorderttachmentreq)
	{
		LOG.info("Request XML is " + SCPIConnector.toXML(orderattachmentdownloadres));
		try {
   		List<ZOrderAttachmentDownloadRequest$Item> orderErrorMessageData = new ArrayList<>();
   		if(null!=orderattachmentdownloadres) {
   			orderErrorMessageData = orderattachmentdownloadres.getT_messagetable() != null && CollectionUtils.isNotEmpty(orderattachmentdownloadres.getT_messagetable().getItems()) ? orderattachmentdownloadres.getT_messagetable().getItems() : Collections.EMPTY_LIST;
   			final int rowCount = orderErrorMessageData.size();
   			if (rowCount > 0)
   			{
   				final UserModel user = userService.getCurrentUser();
   				BHGESoldToData soldTo = null;
   				GEEdgeCustomerModel bhgeCustomerModel = null;
   				if (null != user && user instanceof GEEdgeCustomerModel)
   				{
   					soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
   					bhgeCustomerModel = userProfileService.findCurrentUserProfile(user.getUid());
   				}
   				final String soldToID = ((soldTo == null) ? "No Soldto Found" : soldTo.getUid());
   				final String userEmail = bhgeCustomerModel == null ? "no_user_found" : bhgeCustomerModel.getEmail();
   				final List<String> requestParamToSAP = getRequestParamsToSAP_SCPI(downloadorderttachmentreq);
   				// It could be one record only.
   				for (int i = 0; i < rowCount; i++)
   				{
   					final String messageType = orderErrorMessageData.get(i).getType();
   					final String messageid = orderErrorMessageData.get(i).getId();
   					final String message = orderErrorMessageData.get(i).getMessage();
   					final String messagenumber = orderErrorMessageData.get(i).getNumber();
   					if (messageType != null && messageType.equalsIgnoreCase("E"))
   					{
   						final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
   						final DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
   						final Date today = Calendar.getInstance().getTime();
   						final String reportDate = df.format(today);
   
   						model.setErrorCode(messageType + "with Order Document No." + requestParamToSAP.get(0).toString());
   						model.setErrorDescription(message);
   						model.setErrorType("Order Attachments RFC Error");

   						model.setRequestParameterToSAP("Order Document No. as" + requestParamToSAP.get(0).toString()
   								+ "Document Invoice No. as" + requestParamToSAP.get(1).toString() + "Document Identifier as"
   								+ requestParamToSAP.get(2).toString());
   						model.setResponseParameterFromSAP("Message Type: " + messageType + "Message Id: " + messageid + "Message Number: "
   								+ messagenumber + "Message: "+ message);
   						model.setCurrentUserEmail(userEmail);
   						model.setCurrentSoldToId(soldToID);
   						model.setErrorTime(reportDate);
   						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
   						model.setStatus(Boolean.FALSE);
   						modelService.save(model);
   					}
   				}
   			}
   		}
		}
		catch(Exception e) {
			LOG.error("Exception: Order Attachment download request failed. Issue while Saving request info in DB"+ e.getMessage());
		}
	}
}
