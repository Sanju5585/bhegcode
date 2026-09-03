package com.bhge.core.cronjob;

import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;

import com.bhge.core.data.uploadFileResponseData;
import com.bhge.core.enums.PdfStatusType;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.rma.service.BHGERMAStatusService;
import com.bhge.core.rma.service.BHGERmaOrderService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.service.BHGESAPOrderAttachmentService;
import com.bhge.core.user.service.BHGEUserProfileService;


public class BHGERMAAttachmentJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGERMAAttachmentJob.class);

	private static final String BUY = "BUY";
	private static final String RETURNS = "RETURNS";

	public static final String ZHYB_MAT_ACCESSORIES = "ZHYB_MAT_ACCESSORIES";

	public static final String HAZARD_ATTACH_SECTION = "COSHH";

	public static final String PO_ATTACH_SECTION = "Customer PO";

	public static final String MISCELLANEOUS = "ONLINE DOC";


	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "modelService")
	protected ModelService modelService;

	@Resource(name = "baseSiteService")
	private BaseSiteService siteService;

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "bhgeSAPOrderAttachmentService")
	private BHGESAPOrderAttachmentService bhgeSAPOrderAttachmentService;

	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "bhgeRmaOrderService")
	private BHGERmaOrderService bhgeRmaOrderService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Override
	public PerformResult perform(final CronJobModel arg0)
	{
		List<OrderModel> orderLst = null;
		orderLst = bhgeB2BOrderService.getSubmittedReturnOrders();
		// RFC Connection for Order attachments

		if (orderLst != null && !orderLst.isEmpty())
		{
			siteService.setCurrentBaseSite(siteService.getBaseSiteForUID(Config.getString("GEEDGE_BASE_SITE", "bhge")), false);
			final JCoConnection connectionObj = sapJcoContainer.getRFCConnection();
			if (connectionObj != null)
			{
				for (final OrderModel orderModel : orderLst)
				{
					final String cartCommerceType = orderModel.getCommerceType() != null ? orderModel.getCommerceType().getCode()
							: BUY;
					LOG.info("$$$$$$$$$$$$$ @@@@@@@ ORDER MODEL COMMERCE TYPE IN ORDER SUBMISSION JOB IS " + cartCommerceType + " | "
							+ orderModel.getCode() + " | " + orderModel.getRmaNumber());
					if (RETURNS.equals(cartCommerceType) && orderModel.getRmaNumber() != null
							&& !orderModel.getRmaNumber().equalsIgnoreCase("-"))
					{
						final HashMap<String, String> resp = new HashMap<String, String>();
						final List<HashMap<String, String>> respList = new ArrayList<HashMap<String, String>>();
						final HashMap<String, List<HashMap<String, String>>> rfcUploadResponse = new HashMap<String, List<HashMap<String, String>>>();
						boolean additionalDocumentsPresent = false;
						if (!orderModel.getRmaNumber().isEmpty())
						{
							try
							{
								if (orderModel.getCoshPdfStatus() == com.bhge.core.enums.PdfStatusType.BLANK)//cartModel.setCheckoutPdfStatus("FAILED");
								{
									LOG.info("No pdf-RMA ATTCH_JOB");

									final boolean pdfCreated = bhgeRmaOrderService.generateHazardPdf(orderModel);
									if (pdfCreated)
									{
										orderModel.setCoshPdfStatus(com.bhge.core.enums.PdfStatusType.GENERATED);
										LOG.info("cosh pdf created-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | "
												+ " Status changed-generated");
									}
									modelService.save(orderModel);
								}

								if (orderModel.getHazardInfoDocs() != null)
								{
									if (orderModel.getCoshPdfStatus() == com.bhge.core.enums.PdfStatusType.GENERATED)//cartModel.setCheckoutPdfStatus("FAILED");
									{
										LOG.info(
												"HazardInfo docs found - START" + orderModel.getCode() + " | " + orderModel.getRmaNumber());
										final uploadFileResponseData uploadResponseData = new uploadFileResponseData();
										byte[] fileData = null;
										final MediaModel m = orderModel.getHazardInfoDocs();
										if (m != null)
										{
											final String fileDataString = convertMediaToHexString(m);
											fileData = hexStringToByteArray(fileDataString);
										}
										final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
										final String fileName = bhgeRmaOrderService.generateRMAFileName(HAZARD_ATTACH_SECTION, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
										final uploadFileResponseData msgOutputAttrCron = uploadFile(fileData, orderModel.getRmaNumber(), fileName,  fileExtension.toUpperCase());
										if (msgOutputAttrCron.getMessageType() != null
												&& msgOutputAttrCron.getMessageType().equalsIgnoreCase("S"))
										{
											orderModel.setCoshPdfStatus(PdfStatusType.SUBMITTED);
										}
										modelService.save(orderModel);
										LOG.info("cosh pdf submitted-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | "
												+ " Status changed-Submitted");
									}
								}
							}
							catch (final Exception e)
							{
								LOG.info("cosh pdf failed-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | " + " Status changed-failed");
								//orderModel.setCoshPdfStatus("FAILED");
								String soldToCosh = "";
								if (orderModel.getSoldToForCart() != null)
								{
									soldToCosh = orderModel.getSoldToForCart().getUid();
								}
								bhgeEmailService.attachmentFailureEmail(orderModel.getRmaNumber(), soldToCosh,
										"Cosh-Pdf generation/submission failed-RMA ATTCH_JOB", orderModel.getOrderConfirmationEMail(),
										orderModel.getCode(),orderModel.getCartType(),orderModel.getCommerceType(),orderModel.getUser().getUid());
								e.printStackTrace();
							}
							try
							{
								if (orderModel.getCheckoutPdfStatus() == PdfStatusType.BLANK)
								{
									LOG.info("No pdf-RMA ATTCH_JOB");

									final boolean checkoutPdfCreated = bhgeRmaOrderService.generateCheckoutPdf(orderModel);
									if (checkoutPdfCreated)
									{
										orderModel.setCheckoutPdfStatus(PdfStatusType.GENERATED);
										LOG.info("checkout pdf created-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | "
												+ " Status changed-generated");
									}
									modelService.save(orderModel);
								}

								LOG.info("orderModelRMAAttachment" + orderModel.getRmaAttachment());
								if (orderModel.getRmaAttachment() != null && !orderModel.getRmaAttachment().isEmpty())
								{
									LOG.info("InsideRmaAttachment" + orderModel.getCheckoutPdfStatus());
									if (orderModel.getCheckoutPdfStatus() == PdfStatusType.GENERATED)
									{
										LOG.info("RmaAttachmentdocs found" + orderModel.getCode() + " | " + orderModel.getRmaNumber());
										for (final MediaModel m : orderModel.getRmaAttachment())
										{
											byte[] fileData = null;
											if (m != null)
											{
												final String fileDataString = convertMediaToHexString(m);
												fileData = hexStringToByteArray(fileDataString);
											}
											final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
											final String fileName = bhgeRmaOrderService.generateRMAFileName(MISCELLANEOUS, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
											final uploadFileResponseData msgOutputAttrCheckoutCron = uploadFile(fileData, orderModel.getRmaNumber(), fileName, fileExtension.toUpperCase());
											if (msgOutputAttrCheckoutCron.getMessageType() != null
													&& msgOutputAttrCheckoutCron.getMessageType().equalsIgnoreCase("S"))
											{
												orderModel.setCheckoutPdfStatus(PdfStatusType.SUBMITTED);
											}
											modelService.save(orderModel);
											LOG.info("checkout pdf submitted-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | "
													+ " Status changed-Submitted");
										}
									}
								}
							}
							catch (final Exception e)
							{
								LOG.info("checkout pdf failed-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | "
										+ " Status changed-failed");
								//orderModel.setCheckoutPdfStatus("FAILED");
								String soldToCheckout = "";
								if (orderModel.getSoldToForCart() != null)
								{
									soldToCheckout = orderModel.getSoldToForCart().getUid();
								}
								bhgeEmailService.attachmentFailureEmail(orderModel.getRmaNumber(), soldToCheckout,
										"Checkout-Pdf generatiom/submission failed-ATTCH_Job", orderModel.getOrderConfirmationEMail(),
										orderModel.getCode(),orderModel.getCartType(),orderModel.getCommerceType(),orderModel.getUser().getUid());

								e.printStackTrace();
							}
							if (orderModel.getPoDocs() != null && !orderModel.getPoDocs().isEmpty())
							{
								if (orderModel.getPurchaseOrderUploadStatus() != PdfStatusType.SUBMITTED)
								{
									final List<Boolean> statusCheckPo = new ArrayList<>();
									LOG.info("PO docs found - " + orderModel.getCode() + " | " + orderModel.getRmaNumber());
									for (final MediaModel m : orderModel.getPoDocs())
									{
										if (null == m.getFileUploaded() || m.getFileUploaded() == false)
										{
											byte[] fileData = null;
											if (m != null)
											{
												final String fileDataString = convertMediaToHexString(m);
												fileData = hexStringToByteArray(fileDataString);
											}
											final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
											final String fileName = bhgeRmaOrderService.generateRMAFileName(PO_ATTACH_SECTION, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
											final uploadFileResponseData poStatus = uploadFile(fileData, orderModel.getRmaNumber(), fileName, fileExtension.toUpperCase());
											if (poStatus.getMessageType() != null && poStatus.getMessageType().equalsIgnoreCase("S"))
											{
												m.setFileUploaded(true);
												modelService.save(m);
												statusCheckPo.add(true);
											}
										}
									}
									if (statusCheckPo.contains(false))
									{
										orderModel.setPurchaseOrderUploadStatus(PdfStatusType.BLANK);
										modelService.save(orderModel);
									}
									else
									{
										orderModel.setPurchaseOrderUploadStatus(PdfStatusType.SUBMITTED);
										modelService.save(orderModel);
									}
								}
							}

							if (orderModel.getAttachments() != null && !orderModel.getAttachments().isEmpty())
							{
								if (orderModel.getAttachmentUploadStatus() != PdfStatusType.SUBMITTED)
								{
									final List<Boolean> statusCheckAttachments = new ArrayList<>();
									LOG.info("Attachments docs found" + orderModel.getCode() + " | " + orderModel.getRmaNumber());

									for (final MediaModel m : orderModel.getAttachments())
									{
										if (null == m.getFileUploaded() || m.getFileUploaded() == false)
										{
											byte[] fileData = null;
											if (m != null)
											{
												final String fileDataString = convertMediaToHexString(m);
												fileData = hexStringToByteArray(fileDataString);
											}
											final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
											final String fileName = bhgeRmaOrderService.generateRMAFileName(MISCELLANEOUS, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
											final uploadFileResponseData attachmentsStatus = uploadFile(fileData, orderModel.getRmaNumber(), fileName, fileExtension.toUpperCase());
											if (attachmentsStatus.getMessageType() != null
													&& attachmentsStatus.getMessageType().equalsIgnoreCase("S"))
											{
												m.setFileUploaded(true);
												modelService.save(m);
												statusCheckAttachments.add(true);
											}
										}
									}
									if (statusCheckAttachments.contains(false))
									{
										orderModel.setAttachmentUploadStatus(PdfStatusType.SUBMITTED);
										modelService.save(orderModel);
									}
									else
									{
										orderModel.setAttachmentUploadStatus(PdfStatusType.SUBMITTED);
										modelService.save(orderModel);
									}
								}
							}

							/*
							 * if (orderModel.getRmaAttachment() != null && !orderModel.getRmaAttachment().isEmpty()) {
							 * LOG.info("RmaAttachment docs found" + orderModel.getCode() + " | " + orderModel.getRmaNumber());
							 * for (final MediaModel m : orderModel.getRmaAttachment()) { byte[] fileData = null; if (m !=
							 * null) { final String fileDataString = convertMediaToHexString(m); fileData =
							 * hexStringToByteArray(fileDataString); } final String fileExtension =
							 * MediaUtil.getFileExtension(m.getRealFileName()); uploadFile(fileData, orderModel.getRmaNumber(),
							 * "MISCELLANEOUS 1", fileExtension.toUpperCase()); } }
							 */

							//Added for Hazard form additional documents
							if (null != orderModel.getBhgeHazardousInfo() && orderModel.getBhgeHazardousInfo().getHazardformAttachments() != null
									&& !orderModel.getBhgeHazardousInfo().getHazardformAttachments().isEmpty())
							{
								if (orderModel.getHazardAttachmentUploadStatus() != PdfStatusType.SUBMITTED)
								{
									final List<Boolean> hazardCheckAttachments = new ArrayList<>();
									LOG.info("hazardAttachmentStatus Files found - START " + orderModel.getCode() + " | "
											+ orderModel.getRmaNumber());

									for (final MediaModel m : orderModel.getBhgeHazardousInfo().getHazardformAttachments())
									{
										if (null == m.getFileUploaded() || m.getFileUploaded() == false)
										{
											byte[] fileData = null;
											if (m != null)
											{
												final String fileDataString = convertMediaToHexString(m);
												fileData = hexStringToByteArray(fileDataString);
											}
											final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
											final String fileName = bhgeRmaOrderService.generateRMAFileName(MISCELLANEOUS, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
											final uploadFileResponseData hazardAttachmentStatus = uploadFile(fileData, orderModel.getRmaNumber(), fileName, fileExtension.toUpperCase());
											LOG.info("hazardAttachmentStatus Files found - CLOSE " + orderModel.getCode() + " | "
													+ orderModel.getRmaNumber());
											if (hazardAttachmentStatus.getMessageType() != null
													&& hazardAttachmentStatus.getMessageType().equalsIgnoreCase("S"))
											{
												m.setFileUploaded(true);
												modelService.save(m);
												hazardCheckAttachments.add(true);

											}
										}
									}
									if (hazardCheckAttachments.contains(false))
									{
										orderModel.setHazardAttachmentUploadStatus(PdfStatusType.BLANK);
										modelService.save(orderModel);
									}
									else
									{
										orderModel.setHazardAttachmentUploadStatus(PdfStatusType.SUBMITTED);
										modelService.save(orderModel);
									}
								}
							}




							//Added for Hazard form additional documents
							/*
							 * if (orderModel.getBhgeHazardousInfo().getHazardformAttachments() != null &&
							 * !orderModel.getBhgeHazardousInfo().getHazardformAttachments().isEmpty()) {
							 * LOG.info("HazardInfo Files found - START " + orderModel.getCode() + " | " +
							 * orderModel.getRmaNumber()); for (final MediaModel m :
							 * orderModel.getBhgeHazardousInfo().getHazardformAttachments()) { byte[] fileData = null; if (m !=
							 * null) { final String fileDataString = convertMediaToHexString(m); fileData =
							 * hexStringToByteArray(fileDataString); } final String fileExtension =
							 * MediaUtil.getFileExtension(m.getRealFileName()); uploadFile(fileData, orderModel.getRmaNumber(),
							 * "MISCELLANEOUS 1", fileExtension.toUpperCase()); LOG.info("HazardInfo Files found - CLOSE " +
							 * orderModel.getCode() + " | " + orderModel.getRmaNumber()); } }
							 */




							if (orderModel.getEntries() != null && !orderModel.getEntries().isEmpty())
							{
								for (final AbstractOrderEntryModel e : orderModel.getEntries())
								{
									final List<Boolean> status = new ArrayList<>();
									if (e.getBhgeAdditionalInfo() != null && e.getBhgeAdditionalInfo().getFormAttachments() != null
											&& !e.getBhgeAdditionalInfo().getFormAttachments().isEmpty())
									{
										additionalDocumentsPresent = true;
										if (orderModel.getAdditionalInfoAttachments() != PdfStatusType.SUBMITTED)
										{
											LOG.info("In Order Entry for bhgeadditionlInfo FormAttachment  docs found" + orderModel.getCode()
													+ " | " + orderModel.getRmaNumber());
											for (final MediaModel m : e.getBhgeAdditionalInfo().getFormAttachments())
											{
												if (null == m.getFileUploaded() || m.getFileUploaded() == false)
												{
													byte[] fileData = null;
													if (m != null)
													{
														final String fileDataString = convertMediaToHexString(m);
														fileData = hexStringToByteArray(fileDataString);
													}
													final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
													final String fileName = bhgeRmaOrderService.generateRMAFileName(MISCELLANEOUS, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
													final uploadFileResponseData additionalAttachmentStatus = uploadFile(fileData, orderModel.getRmaNumber(), fileName, fileExtension.toUpperCase());
													if (additionalAttachmentStatus.getMessageType() != null
															&& additionalAttachmentStatus.getMessageType().equalsIgnoreCase("S"))
													{
														m.setFileUploaded(true);
														status.add(true);
														modelService.save(m);

													}
													else
													{
														m.setFileUploaded(false);
														status.add(false);
														modelService.save(m);
													}
												}
											}
											if (status.contains(false))
											{
												orderModel.setAdditionalInfoAttachments(PdfStatusType.BLANK);
												modelService.save(orderModel);
											}
											else
											{
												orderModel.setAdditionalInfoAttachments(PdfStatusType.SUBMITTED);
												modelService.save(orderModel);
											}
										}
									}
								}
							}
						}
						if ((orderModel.getHazardInfoDocs() != null && orderModel.getCoshPdfStatus() == PdfStatusType.SUBMITTED)
								&& (orderModel.getRmaAttachment() != null && orderModel.getCheckoutPdfStatus() == PdfStatusType.SUBMITTED)
								&& (orderModel.getPoDocs() != null
										&& orderModel.getPurchaseOrderUploadStatus() == PdfStatusType.SUBMITTED)
								&& (orderModel.getAttachments() != null
										&& orderModel.getAttachmentUploadStatus() == PdfStatusType.SUBMITTED)
								&& ((orderModel.getBhgeHazardousInfo() !=null)&& (orderModel.getBhgeHazardousInfo().getHazardformAttachments() != null
										&& orderModel.getHazardAttachmentUploadStatus() == PdfStatusType.SUBMITTED))
								&& ((additionalDocumentsPresent == true
										&& orderModel.getAdditionalInfoAttachments() == PdfStatusType.SUBMITTED)
										|| additionalDocumentsPresent == false))
						{
							orderModel.setIsAttachmentMoved(true);
							modelService.save(orderModel);
						}
						else
						{
							orderModel.setIsAttachmentMoved(false);
							modelService.save(orderModel);
						}
					}
				}
			}
		}
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}


	public byte[] hexStringToByteArray(final String s)
	{
		final byte[] b = new byte[s.length() / 2];
		for (int i = 0; i < b.length; i++)
		{
			final int index = i * 2;
			final int v = Integer.parseInt(s.substring(index, index + 2), 16);
			b[i] = (byte) v;
		}
		return b;
	}

	private String convertMediaToHexString(final MediaModel media)
	{
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

	private uploadFileResponseData uploadFile(final byte[] fileData, final String rmaNumber, final String fileName,
			final String fileType)
	{
		LOG.info("****************************************** BHGERMAAttachmentJob - Schedule Job: Send Attachment to SAP ECC ********************************************");
		LOG.info("rmaNumber ------------" + rmaNumber);
		LOG.info("fileName ------------" + fileName);
		LOG.info("fileType ------------" + fileType);

		uploadFileResponseData uploadResponseData = new uploadFileResponseData();
		try
		{
			// Below method added newly introduced to Send RMA Attachment to SAP ECC via SCPI. Previous method deleted now. 
			uploadResponseData = bhgeRMAStatusService.submitOrderAttachmentsToSCPI(rmaNumber, fileData, fileName, fileType);
			if (uploadResponseData != null)
			{
				LOG.info("messageType ------------" + uploadResponseData.getMessageType());
				LOG.info("messageText ------------" + uploadResponseData.getMessageText());
				//TODO : Making a chance to fix build issue
				return uploadResponseData;
			}
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading RMA Attchment file:" + e.toString());
		}
		return null;
	}
}