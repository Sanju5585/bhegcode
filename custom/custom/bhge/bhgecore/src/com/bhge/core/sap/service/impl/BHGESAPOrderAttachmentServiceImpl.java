package com.bhge.core.sap.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.order.*;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.enums.PdfStatusType;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.sap.service.BHGESAPOrderAttachmentService;
import com.bhge.core.sap.service.BHGESAPOrderSubmissionService;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.orderattachment.ZHYBOrderAttachmentsRequest;
import com.bhge.core.scpi.rfc.orderattachment.ZHYBOrderAttachmentsResponse;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.google.common.io.Files;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoParameterList;

import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.core.jco.exceptions.BackendRuntimeException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.user.daos.UserDao;
import de.hybris.platform.util.Config;


public class BHGESAPOrderAttachmentServiceImpl implements BHGESAPOrderAttachmentService
{

	@Resource(name = "modelService")
	protected ModelService modelService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	private static final Logger LOG = Logger.getLogger(BHGESAPOrderAttachmentServiceImpl.class);

	public static final String PO_ATTACH_SECTION = "Customer PO";

	public static final String CHINA_SALES_ORG = "7140";

	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;
	
	@Resource(name = "userDao")
	private UserDao userDao;
	
	@Resource(name = "bhgeSAPOrderSubmissionService")
	private BHGESAPOrderSubmissionService bhgeSAPOrderSubmissionService;

	@Override
	public void submitOrderAttachmentsToSAP(final OrderModel order, final JCoConnection connection)
	{
		try
		{
			boolean isAdditionalAttachmentSuccessful = false;
			boolean isPOAttachmentSuccessful = true; //Defaulting to true
			if (order.getEntries() != null && !order.getEntries().isEmpty())
			{
				if (CollectionUtils.isNotEmpty(order.getAttachments()))
				{
					for (final MediaModel media : order.getAttachments())
					{
						final JCoFunction function = setFunctionAndDefault(connection, BhgeCoreConstants.ZGET_FILE_FROM_HYBRIS, media,
								order.getCode());
						connection.execute(function);
						final JCoParameterList outputParameter = function.getExportParameterList();
						if (outputParameter != null)
						{
							final String messageType = outputParameter.getString(BhgeCoreConstants.ORDER_ATTACHMENT_EXPORT_MSGTYPE);
							final String messageTxt = outputParameter.getString(BhgeCoreConstants.ORDER_ATTACHMENT_EXPORT_MSGTXT);
							if (messageType.equalsIgnoreCase("S"))
							{
								final OrderModel orderModel = order;
								isAdditionalAttachmentSuccessful = true;
								modelService.save(orderModel);
							}

						}
					}
				}
				else
				{
					isAdditionalAttachmentSuccessful = true;
				}
				if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
						&& CustomerType.GUEST.equals(((CustomerModel) order.getUser()).getType()))
				{
					MediaModel poOrderAttachment = null;
					for (final MediaModel media : order.getPoDocs())
					{
						poOrderAttachment = media;
					}
					if (poOrderAttachment != null)
					{
						final JCoFunction poFunction = setFunctionAndDefault(connection, BhgeCoreConstants.ZGET_FILE_FROM_HYBRIS,
								poOrderAttachment, order.getCode());
						connection.execute(poFunction);
						final JCoParameterList poOutputParameter = poFunction.getExportParameterList();
						if (poOutputParameter != null)
						{
							final String messageType = poOutputParameter.getString(BhgeCoreConstants.ORDER_ATTACHMENT_EXPORT_MSGTYPE);
							final String messageTxt = poOutputParameter.getString(BhgeCoreConstants.ORDER_ATTACHMENT_EXPORT_MSGTXT);
							final OrderModel orderModel = order;
							if (messageType.equalsIgnoreCase("S"))
							{
								orderModel.setPurchaseOrderUploadStatus(PdfStatusType.SUBMITTED);
								poOrderAttachment.setFileUploaded(true);
								modelService.save(poOrderAttachment);
							}
							else
							{
								isPOAttachmentSuccessful = false;
								poOrderAttachment.setFileUploaded(false);
								modelService.save(poOrderAttachment);
								orderModel.setPurchaseOrderUploadStatus(PdfStatusType.BLANK);
							}
							modelService.save(orderModel);
						}
					}
				}
			}
			if (isAdditionalAttachmentSuccessful && isPOAttachmentSuccessful)
			{
				order.setIsAttachmentMoved(true);
				modelService.save(order);
			}
		}
		catch (final BackendException backEndException)
		{
			handleSAPException(order, backEndException);
			LOG.error("BackendException occured during the RFC call to order attachment: " + backEndException.getMessage());
		}
		catch (final BackendRuntimeException backEndRuntimeException)
		{
			handleSAPException(order, backEndRuntimeException);
			LOG.error("BackEndRuntimeException occured during the RFC call to order attachment: "
					+ backEndRuntimeException.getMessage());
		}
		catch (final Exception exception)
		{
			handleSAPException(order, exception);
			LOG.error("exception occured during the RFC call to order attachment: " + exception.getMessage());
		}
	}

	public JCoFunction setFunctionAndDefault(final JCoConnection connection, final String functionName,
			final MediaModel orderAttachment, final String orderCode) throws BackendException
	{
		final JCoFunction function = connection.getFunction(functionName);
		final JCoParameterList orderAttachmentInputParameter = function.getImportParameterList();
		orderAttachmentInputParameter.setValue(BhgeCoreConstants.ORDER_ATTACHMENT_FILE_DATA,
				convertMediaToHexString(orderAttachment));
		orderAttachmentInputParameter.setValue(BhgeCoreConstants.ORDER_ATTACHMENT_FILE_NAME,
				BHGESAPJCoUtils.addLeadingZeros(orderCode, 10) + "_" + orderAttachment.getRealFileName() + "_"
						+ System.currentTimeMillis());
		orderAttachmentInputParameter.setValue(BhgeCoreConstants.ORDER_ATTACHMENT_FILE_TYPE,
				Files.getFileExtension(orderAttachment.getRealFileName()));

		return function;
	}

	private void handleSAPException(final OrderModel order, final Exception exception)
	{
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
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
		
		final String SoldToId = order.getSoldToForCart().getUid();

		model.setErrorCode("BackendException in Order Batch Attachment");
		final String exceptionMsg = exception.getMessage();
		model.setErrorDescription(exceptionMsg + "with" + order.getCode());
		model.setCurrentUserEmail(email);
		model.setCurrentSoldToId(SoldToId);
		model.setErrorTime(reportDate);
		model.setErrorType("Order Attachment Error");
		model.setRequestParameterToSAP("Order with OrderID : " + order.getCode());
		model.setResponseParameterFromSAP("BackendException Object" + exception.toString());
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
		model.setStatus(Boolean.FALSE);
		modelService.save(model);
	}

	private String convertMediaToHexString(final MediaModel media)
	{
		LOG.info("****************** Converting Mediadata to Hex String ******************************");
		String hexMediaFormat = "";
		try
		{
			hexMediaFormat = Hex.encodeHexString(IOUtils.toByteArray(mediaService.getStreamFromMedia(media)));
		}
		catch (final Exception e)
		{
			LOG.error("Error in converting the attachment to Hex string format: " + e);
		}
		return hexMediaFormat;
	}

	private String convertMediaToBase64String(final MediaModel media)
	{
		LOG.info("****************** Converting Mediadata to Base64 String ******************************");
		String b64String = "";
		try
		{
			b64String = Base64.getEncoder().encodeToString(IOUtils.toByteArray(mediaService.getStreamFromMedia(media)));
		}
		catch (final Exception e)
		{
			LOG.error("Error in converting the attachment to Hex string format: " + e);
		}
		return b64String;
	}

	@Override
	public void submitOrderAttachmentsToSCPI(final OrderModel order)
	{
		LOG.info(
				"****************************************** Order file Attachment Service ********************************************");
		try
		{
			boolean isAdditionalAttachmentSuccessful = false;
			boolean isPOAttachmentSuccessful = true; //Defaulting to true
			boolean poattachment = false; // intentionally false for PO Attachment
			boolean isCheckoutPDFSuccessful = true;

			// SCPI Connectivity to be check prior to send a request.
			final String rfcname = BhgeCoreConstants.ZGET_FILE_FROM_HYBRIS;
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			LOG.info("******** SCPI RMA Attachment URL : " + scpiEndpointUrl + " ********************");
			if (scpiEndpointUrl != null)
			{
				if (order.getEntries() != null && !order.getEntries().isEmpty())
				{
					// Submit EUC documents to SCPI
					final B2BUnitModel soldTo = order.getSoldToForCart();
					if (CollectionUtils.isNotEmpty(order.getEuc())) {
						LOG.info("*********** EUC is not Empty ****");
						for (final MediaModel media : order.getEuc())
						{
								final ZHYBOrderAttachmentsRequest orderattachmentreq = createOrderAttachmentRequestforSCPI(media,
										order.getCode());
								LOG.info("***** Request object value *****" +orderattachmentreq);
								final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector
										.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
							    LOG.info("***** Response object value *****" +orderattachmentres);
								if(processOrderAttachmentResponse(orderattachmentres, order, poattachment))
								{
									LOG.info("***** Inside if condition of processOrderAttachmentResponse ****");
									media.setFileUploaded(true);
									isAdditionalAttachmentSuccessful = true;
								}
								else
								{
									LOG.info("***** Inside else condition of processOrderAttachmentResponse ****");
									media.setFileUploaded(false);
									isAdditionalAttachmentSuccessful = false;
								}
								modelService.save(media);
						}
					}
					if (CollectionUtils.isNotEmpty(order.getAttachments()))
					{
						LOG.info("***** Value of order.getAttachments()*** " +order.getAttachments());
						final List<Boolean> status = new ArrayList<>();
						for (final MediaModel media : order.getAttachments())
						{
							if(order.getCommerceType().equals(BHGERMACommerceType.BUY))
							{
								LOG.info("***** Inside if of order.getCommerceType().equals(BHGERMACommerceType.BUY)");
								final ZHYBOrderAttachmentsRequest orderattachmentreq = createOrderAttachmentRequestforSCPI(media,
										order.getCode());
								final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector
										.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
								if(processOrderAttachmentResponse(orderattachmentres, order, poattachment))
								{
									LOG.info("***** Inside else of processOrderAttachmentResponse(orderattachmentres, order, poattachment)");
									isAdditionalAttachmentSuccessful = true;
								}
							}
							else if (null == media.getFileUploaded() || media.getFileUploaded() == false)
							{
								LOG.info("***** Inside (null == media.getFileUploaded() || media.getFileUploaded() == false)");
								try
								{
									// Prepare Order Attachment Request
									final ZHYBOrderAttachmentsRequest orderattachmentreq = createOrderAttachmentRequestforSCPI(media,
											order.getCode());
									final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector
											.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
									if(processOrderAttachmentResponse(orderattachmentres, order, poattachment))
									{
										media.setFileUploaded(true);
										status.add(true);
									}
									else
									{
										media.setFileUploaded(false);
										status.add(false);
									}
									modelService.save(media);
								}
								catch (Exception e)
								{
									status.add(false);
									handleSAPException(order, e);
									LOG.error("exception occured during the RFC call to order attachment: " + e.getMessage());
								}
							}
						}
						if (!status.contains(false) && !order.getCommerceType().equals(BHGERMACommerceType.BUY))
						{
							isAdditionalAttachmentSuccessful = true;
						}
					}
					else
					{
						isAdditionalAttachmentSuccessful = true;
					}
					
					
					//Added for spartacus migration to handle podocs for loggedin user  in case of BUY order - start
					if (order.getUser() instanceof GEEdgeCustomerModel && ((GEEdgeCustomerModel)order.getUser()).getType() != null) {
						LOG.info("========== Submitting POdocs to SAP for BUY orders and loggedin users ===========");
						MediaModel poOrderAttachment = null;
						for (final MediaModel media : order.getPoDocs())
						{
							poOrderAttachment = media;
						}
						if (poOrderAttachment != null)
						{
							if (null == poOrderAttachment.getFileUploaded() || poOrderAttachment.getFileUploaded() == false)
							{
								// Prepare Order Attachment Request
								poattachment = true;
								final ZHYBOrderAttachmentsRequest orderattachmentreq = createOrderAttachmentRequestforSCPI(poOrderAttachment,
										order.getCode());
								final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector
										.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
								isPOAttachmentSuccessful = processOrderAttachmentResponse(orderattachmentres, order, poattachment);
								LOG.info("=========== POdocs attachment submit to SAP status for BUY Orders loggedin users ============ "+isPOAttachmentSuccessful);
							}
						}
					}
					//Added for spartacus migration to handle podocs for loggedin user in case of BUY order - End
					
					
					if (order.getUser() instanceof CustomerModel && ((CustomerModel) order.getUser()).getType() != null
							&& CustomerType.GUEST.getCode().equals(((CustomerModel) order.getUser()).getType().getCode()))
					{
						MediaModel poOrderAttachment = null;
						for (final MediaModel media : order.getPoDocs())
						{
							poOrderAttachment = media;
						}
						if (poOrderAttachment != null)
						{
							if (null == poOrderAttachment.getFileUploaded() || poOrderAttachment.getFileUploaded() == false)
							{
								// Prepare Order Attachment Request
								poattachment = true;
								final ZHYBOrderAttachmentsRequest orderattachmentreq = createOrderAttachmentRequestforSCPI(poOrderAttachment,
										order.getCode());
								final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector
										.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
								isPOAttachmentSuccessful = processOrderAttachmentResponse(orderattachmentres, order, poattachment);
							}
						}
						// submit checkout pdf for guest buy order
						if (CollectionUtils.isNotEmpty(order.getRmaAttachment()) && order.getCheckoutPdfStatus() != PdfStatusType.SUBMITTED)
						{
							for(MediaModel media : order.getRmaAttachment())
							{
								final ZHYBOrderAttachmentsRequest orderattachmentreq = createOrderAttachmentRequestforSCPI(media,
										order.getCode());
								final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector
										.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
								if(processOrderAttachmentResponse(orderattachmentres, order, false))
								{
									order.setCheckoutPdfStatus(PdfStatusType.SUBMITTED);
									modelService.save(order);
								}
								else
								{
									isCheckoutPDFSuccessful = false;
								}
							}
						}
					}
				}
			}
			if (isAdditionalAttachmentSuccessful && isPOAttachmentSuccessful && isCheckoutPDFSuccessful)
			{
				order.setIsAttachmentMoved(true);
				modelService.save(order);
			}
		}
		catch (final BackendException backEndException)
		{
			handleSAPException(order, backEndException);
			LOG.error("BackendException occured during the RFC call to order attachment: " + backEndException.getMessage());
		}
		catch (final BackendRuntimeException backEndRuntimeException)
		{
			handleSAPException(order, backEndRuntimeException);
			LOG.error("BackEndRuntimeException occured during the RFC call to order attachment: "
					+ backEndRuntimeException.getMessage());
		}
		catch (final Exception exception)
		{
			handleSAPException(order, exception);
			LOG.error("exception occured during the RFC call to order attachment: " + exception.getMessage());
		}
	}

	public ZHYBOrderAttachmentsRequest createOrderAttachmentRequestforSCPI(final MediaModel orderAttachment,
			final String orderCode) throws Exception
	{
		LOG.info("************************** Create Order Attachment Request ******************************");
		final ZHYBOrderAttachmentsRequest orderattachmentreq = new ZHYBOrderAttachmentsRequest();
		try
		{
			if (orderCode != null && orderAttachment != null)
			{
				orderattachmentreq.setFiledata(convertMediaToBase64String(orderAttachment));
				orderattachmentreq.setFilename(BHGESAPJCoUtils.addLeadingZeros(orderCode, 10) + "_"
						+ orderAttachment.getRealFileName() + "_" + System.currentTimeMillis());
				orderattachmentreq.setFiletype(Files.getFileExtension(orderAttachment.getRealFileName()));
			}
		}
		catch (final Exception e)
		{
			LOG.error("Excpetion : while creating Order attachment request" + e.getMessage());
		}
		LOG.info("Order attachment request XML payload " + SCPIConnector.toXML(orderattachmentreq));
		return orderattachmentreq;
	}

	private boolean processOrderAttachmentResponse(final ZHYBOrderAttachmentsResponse orderattachmentres, final OrderModel order,
			final boolean poattachment)
	{
		LOG.info("******************** Process Order Attachment Response *****************************");
		try
		{
			LOG.info("Order attachment attachment upload response: " + SCPIConnector.toXML(orderattachmentres));
			if (null != orderattachmentres)
			{
				final String messageType = orderattachmentres.getMessagetyp();
				final String messageTxt = orderattachmentres.getMessagetxt();
				final OrderModel orderModel = order;
				boolean isAdditionalAttachmentSuccessful = false;
				boolean isPOAttachmentSuccessful = true; //Defaulting to true
				if (poattachment)
				{
					MediaModel poOrderAttachment = null;
					// Add comments about for loop. why it is.?
					for (final MediaModel media : order.getPoDocs())
					{
						poOrderAttachment = media;
					}
					if (poOrderAttachment != null)
					{
						if (messageType.equalsIgnoreCase("S"))
						{
							orderModel.setPurchaseOrderUploadStatus(PdfStatusType.SUBMITTED);
							poOrderAttachment.setFileUploaded(true);
							modelService.save(poOrderAttachment);
						}
						else
						{
							isPOAttachmentSuccessful = false;
							poOrderAttachment.setFileUploaded(false);
							modelService.save(poOrderAttachment);
							orderModel.setPurchaseOrderUploadStatus(PdfStatusType.BLANK);
						}
						modelService.save(orderModel);
					}
					return isPOAttachmentSuccessful;
				}
				else
				{
					if (messageType.equalsIgnoreCase("S"))
					{
						isAdditionalAttachmentSuccessful = true;
					}
					return isAdditionalAttachmentSuccessful;
				}
			}
		}
		catch (final Exception e1)
		{
			LOG.error("Excpetion: In Order Attachment Response Process " + e1.getMessage());
		}
		return false;
	}
	
	@Override
	public void submitConfigAttachmentsToSCPI(final AbstractOrderEntryModel orderEntry) {
		
		LOG.info("BHGESAPOrderAttachmentServiceImpl, submitConfigAttachmentsToSCPI");
		try {
			
			final String rfcname = BhgeCoreConstants.ZGET_FILE_FROM_HYBRIS;
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			
			LOG.info("BHGESAPOrderAttachmentServiceImpl, submitConfigAttachmentsToSCPI, SCPI Attachment URL : " + scpiEndpointUrl);
			
			if (scpiEndpointUrl != null && orderEntry != null) {

				final AbstractOrderModel order = orderEntry.getOrder();

				if (order.getUser() instanceof GEEdgeCustomerModel && 
						((GEEdgeCustomerModel) order.getUser()).getType() != null) {

					LOG.info("BHGESAPOrderAttachmentServiceImpl, submitConfigAttachmentsToSCPI, starting submission of config attachment to SAP for BUY orders and loggedin users for order entry "
									+ orderEntry.getPk());
					final MediaModel configAttachment = orderEntry.getConfigurationAttachment();
					if (configAttachment != null) {

						if (null == configAttachment.getFileUploaded() || configAttachment.getFileUploaded() == false) {

							final Integer entryNumber = orderEntry.getEntryNumber() * 100;
							final String orderCode = BHGESAPJCoUtils.addLeadingZeros(order.getCode(), 10);
							final String orderCodeWithEntry = orderCode.concat("_").concat(entryNumber.toString());
							final ZHYBOrderAttachmentsRequest orderattachmentreq = createConfigOrderAttachmentRequestforSCPI(configAttachment, orderCodeWithEntry);
							final ZHYBOrderAttachmentsResponse orderattachmentres = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, orderattachmentreq, ZHYBOrderAttachmentsResponse.class);
							final String messageType = orderattachmentres.getMessagetyp();

							if (messageType.equalsIgnoreCase("S")) {
								configAttachment.setFileUploaded(Boolean.TRUE);
								orderEntry.setConfigAttachmentUploaded(Boolean.TRUE);
							} else {
								configAttachment.setFileUploaded(Boolean.FALSE);
								orderEntry.setConfigAttachmentUploaded(Boolean.FALSE);
							}
							modelService.save(orderEntry);
							modelService.save(configAttachment);

							LOG.info("BHGESAPOrderAttachmentServiceImpl, submitConfigAttachmentsToSCPI, submitting config Attachment to SAP is successfull for order entry "
											+ orderEntry.getPk());
						}
					}
				}
			}
			
		}
		
		catch (final Exception exception) {
			handleExceptionAndSendEmail(orderEntry.getOrder(), exception, "Order Config Attachment");
			exception.printStackTrace();
			LOG.error("submitConfigAttachmentsToSCPI, exception occured during the RFC call to submit config order entry attachment: " + exception.getMessage());
		}
	}
	
	private ZHYBOrderAttachmentsRequest createConfigOrderAttachmentRequestforSCPI(final MediaModel orderAttachment, final String orderCode) throws Exception {
		
		LOG.info("createConfigOrderAttachmentRequestforSCPI");
		
		final ZHYBOrderAttachmentsRequest orderattachmentreq = new ZHYBOrderAttachmentsRequest();
		try {
			
			if (orderCode != null && orderAttachment != null) {
				orderattachmentreq.setFiledata(convertMediaToBase64String(orderAttachment));
				orderattachmentreq.setFilename(orderCode + "_" + orderAttachment.getRealFileName() + "_" + System.currentTimeMillis());
				orderattachmentreq.setFiletype(Files.getFileExtension(orderAttachment.getRealFileName()));
			}
		}
		catch (final Exception e) {
			LOG.error("createConfigOrderAttachmentRequestforSCPI, Excpetion : while creating Order attachment request" + e.getMessage());
		}
		LOG.info("createConfigOrderAttachmentRequestforSCPI, Config Order attachment request XML payload " + SCPIConnector.toXML(orderattachmentreq));
		return orderattachmentreq;
	}
	
	@Override
	public void handleExceptionAndSendEmail(final AbstractOrderModel order, final Exception exception, final String attachmentType) {
		
		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
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
		final String SoldToId = order.getSoldToForCart().getUid();
		model.setErrorCode("BackendException in sending attachment to sap of type " + attachmentType);
		final String exceptionMsg = exception.getMessage();
		model.setOrderID(order.getCode());
		model.setErrorDescription(exceptionMsg + "with" + order.getCode());
		model.setCurrentSoldToId(SoldToId);
		model.setErrorTime(reportDate);
		model.setErrorType(attachmentType + " submission error");
		model.setRequestParameterToSAP("Order with OrderID" + order.getCode());
		model.setResponseParameterFromSAP("BackendException Object" + exception.toString());
		model.setCartType(order.getCartType());
		model.setCommerceType(order.getCommerceType());

		
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
		model.setStatus(Boolean.TRUE);
		modelService.save(model);
		//Email Trigger
		final String templateCodeCriticalError = "CriticalErrorMailTemplate";
		final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "EdgeNet Critical Error Alert");
		final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
		final String orderId = order.getCode();
		final String userSSO = order.getUser().getUid();
		bhgeSAPOrderSubmissionService.sendEmail(templateCodeCriticalError, subject, to, model, orderId,userSSO);
		//Email Trigger End
		
	}

	@Override
	public boolean submitQuoteAttachmentToSCPI(QuoteModel quote) {
		boolean isAdditionalAttachmentSuccessful = false;
		try {
			LOG.info("US530529: Inside submitQuoteAttachmentToSCPI");

			// SCPI Connectivity to be checked prior to send a request.
			final String rfcname = BhgeCoreConstants.ZGET_FILE_FROM_HYBRIS;
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(rfcname, flexibleSearchService);
			if (StringUtils.isNotBlank(scpiEndpointUrl)) {
				if (CollectionUtils.isNotEmpty(quote.getAttachments())) {
					final List<Boolean> status = new ArrayList<>();
					for (MediaModel attachment : quote.getAttachments()) {
						final ZHYBOrderAttachmentsRequest quoteAttachmentReq = createOrderAttachmentRequestforSCPI(attachment,
								quote.getCode());
						final ZHYBOrderAttachmentsResponse quoteAttachmentRes = scpiConnector
								.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, quoteAttachmentReq, ZHYBOrderAttachmentsResponse.class);
						if (null != quoteAttachmentRes) {
							final String messageType = quoteAttachmentRes.getMessagetyp();
							if (StringUtils.equalsIgnoreCase(messageType, "S")) {
								isAdditionalAttachmentSuccessful = true;
							}
						}
					}
				}
				LOG.info("US530529: There are no attachments for the quote" + quote.getCode());
				isAdditionalAttachmentSuccessful = true;
			}
		} catch (Exception e) {
			LOG.error("Exception while submitting Quote Attachment to SCPI" + e.getMessage());
		}
		return isAdditionalAttachmentSuccessful;
	}
}