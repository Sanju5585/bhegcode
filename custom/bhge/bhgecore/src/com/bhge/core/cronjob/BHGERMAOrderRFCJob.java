package com.bhge.core.cronjob;

import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

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
import com.bhge.facades.rma.data.RMAOrderRFCData;


public class BHGERMAOrderRFCJob extends AbstractJobPerformable<CronJobModel>
{

	private static final Logger LOG = Logger.getLogger(BHGERMAOrderRFCJob.class);

	private static final String BUY = "BUY";
	private static final String RETURNS = "RETURNS";
	public static final String MISCELLANEOUS = "ONLINE DOC";


	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "baseSiteService")
	private BaseSiteService siteService;


	@Resource(name = "bhgeRmaOrderService")
	private BHGERmaOrderService bhgeRmaOrderService;


	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "bhgeRMAStatusService")
	private BHGERMAStatusService bhgeRMAStatusService;

	public static final String HAZARD_ATTACH_SECTION = "COSHH";


	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	/*
	 * public SubmitRegisterRequestService getSubmitRegisterRequestService() { return submitRegisterRequestService; }
	 *
	 * public void setSubmitRegisterRequestService(SubmitRegisterRequestService submitRegisterRequestService) {
	 * this.submitRegisterRequestService = submitRegisterRequestService; }
	 *
	 * SubmitRegisterRequestService submitRegisterRequestService;
	 */




	@Override
	public PerformResult perform(final CronJobModel arg0)
	{
		List<OrderModel> orderLst = null;
		orderLst = bhgeB2BOrderService.getRFCFailOrders();


		if (orderLst != null && !orderLst.isEmpty())
		{
			siteService.setCurrentBaseSite(siteService.getBaseSiteForUID(Config.getString("GEEDGE_BASE_SITE", "bhge")), false);

			for (final OrderModel orderModel : orderLst)
			{
				final String cartCommerceType = orderModel.getCommerceType() != null ? orderModel.getCommerceType().getCode() : BUY;
				LOG.info("$$$$$$$$$$$$$ @@@@@@@ ORDER MODEL COMMERCE TYPE IN ORDER SUBMISSION JOB IS " + cartCommerceType + " | "
						+ orderModel.getCode() + " | " + orderModel.getRmaNumber());
				if (RETURNS.equals(cartCommerceType))
				{
					final RMAOrderRFCData rfcResult = bhgeRmaOrderService.generateSAPResponseForRMA(orderModel);
					if (rfcResult != null && Objects.nonNull(rfcResult) && rfcResult.getRmaNumber() != null
							&& !rfcResult.getRmaNumber().isEmpty() && rfcResult.getRmaNumber() != "")
					{
						LOG.info("RFC RETURNED RMA NUMBER - " + rfcResult.getRmaNumber());
						orderModel.setRmaNumber(rfcResult.getRmaNumber());
						orderModel.setRmaSapStatus(rfcResult.getRfcStatusFlag());
						//Generate Hazardous PDF for the complete cart
						try
						{
							if (orderModel.getCoshPdfStatus() == PdfStatusType.BLANK)//cartModel.setCheckoutPdfStatus("FAILED");
							{
								LOG.info("No pdf-RMA ATTCH_JOB");

								final boolean pdfCreated = bhgeRmaOrderService.generateHazardPdf(orderModel);
								if (pdfCreated)
								{
									orderModel.setCoshPdfStatus(PdfStatusType.GENERATED);
									LOG.info("cosh pdf created-RMA ATTCH_JOB " + orderModel.getRmaNumber() + " | "
											+ " Status changed-generated");
								}
								modelService.save(orderModel);
							}

							if (orderModel.getHazardInfoDocs() != null)
							{
								if (orderModel.getCoshPdfStatus() == PdfStatusType.GENERATED)//cartModel.setCheckoutPdfStatus("FAILED");
								{
									LOG.info("HazardInfo docs found - START" + orderModel.getCode() + " | " + orderModel.getRmaNumber());
									final uploadFileResponseData uploadResponseData = new uploadFileResponseData();
									byte[] fileData = null;
									final MediaModel m = orderModel.getHazardInfoDocs();
									if (m != null)
									{
										final String fileDataString = convertMediaToHexString(m);
										fileData = hexStringToByteArray(fileDataString);
									}
									final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
									final String fileName =  bhgeRmaOrderService.generateRMAFileName(HAZARD_ATTACH_SECTION, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
									final uploadFileResponseData msgOutputAttrCron = uploadFile(fileData, orderModel.getRmaNumber(),
											fileName, fileExtension.toUpperCase());
									if (msgOutputAttrCron != null && msgOutputAttrCron.getMessageType() != null
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
							LOG.info("cosh pdf failed-Order-Job " + orderModel.getRmaNumber() + " | " + " Status changed-failed");
							orderModel.setCoshPdfStatus(PdfStatusType.BLANK);
							String soldToCosh = "";
							if (orderModel.getSoldToForCart() != null)
							{
								soldToCosh = orderModel.getSoldToForCart().getUid();
							}
							bhgeEmailService.attachmentFailureEmail(orderModel.getRmaNumber(), soldToCosh,
									"Cosh-Pdf generatiom/submission failed-Order-Job", orderModel.getOrderConfirmationEMail(),
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

							if (orderModel.getRmaAttachment() != null && !orderModel.getRmaAttachment().isEmpty())
							{
								if (orderModel.getCheckoutPdfStatus() == PdfStatusType.GENERATED)
								{
									LOG.info("RmaAttachment docs found" + orderModel.getCode() + " | " + orderModel.getRmaNumber());
									for (final MediaModel m : orderModel.getRmaAttachment())
									{
										byte[] fileData = null;
										if (m != null)
										{
											final String fileDataString = convertMediaToHexString(m);
											fileData = hexStringToByteArray(fileDataString);
										}
										final String fileExtension = MediaUtil.getFileExtension(m.getRealFileName());
										final String fileName =  bhgeRmaOrderService.generateRMAFileName(MISCELLANEOUS, m.getRealFileName(), fileExtension, orderModel.getRmaNumber());
										final uploadFileResponseData msgOutputAttrCheckoutCron = uploadFile(fileData,
												orderModel.getRmaNumber(), fileName, fileExtension.toUpperCase());
										if (msgOutputAttrCheckoutCron != null && msgOutputAttrCheckoutCron.getMessageType() != null
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
							LOG.info(
									"checkout pdf failed-RMA ORDER_JOB " + orderModel.getRmaNumber() + " | " + " Status changed-failed");
							orderModel.setCheckoutPdfStatus(PdfStatusType.BLANK);
							String soldToCheckout = "";
							if (orderModel.getSoldToForCart() != null)
							{
								soldToCheckout = orderModel.getSoldToForCart().getUid();
							}
							bhgeEmailService.attachmentFailureEmail(orderModel.getRmaNumber(), soldToCheckout,
									"Checkout-Pdf generatiom/submission failed-Order-Job", orderModel.getOrderConfirmationEMail(),
									orderModel.getCode(), orderModel.getCartType(),orderModel.getCommerceType(),orderModel.getUser().getUid());

							e.printStackTrace();
						}
						orderModel.setStatus(OrderStatus.SUBMITTED);
						orderModel.setIsAttachmentMoved(Boolean.FALSE);
						getModelService().save(orderModel);
					}
					else
					{
						LOG.info("RFC RETURNED ERROR");
						orderModel.setRmaNumber("-");
						orderModel.setStatus(OrderStatus.ERROR);
						getModelService().save(orderModel);
						//submitRegisterRequestService.rfcFailureEmail(orderModel);
						bhgeRmaOrderService.rfcFailureEmail(orderModel);
					}
				}
			}
		}

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

	public ModelService getModelService()
	{
		return modelService;
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
		LOG.info("****************************************** BHGERMAOrderRFCJob - Schedule Job: Send Attachment to SAP ECC ********************************************");
		LOG.info("rmaNumber ------------" + rmaNumber);
		LOG.info("fileName ------------" + fileName);
		LOG.info("fileType ------------" + fileType);

		uploadFileResponseData uploadResponseData = new uploadFileResponseData();
		try
		{
			//uploadResponseData = bhgeRMAStatusService.submitOrderAttachmentsToSAP(rmaNumber, fileData, fileName, fileType);
			// Below method added newly introduced to Send RMA Attachment to SAP ECC via SCPI. Previous method deleted now. 
			uploadResponseData = bhgeRMAStatusService.submitOrderAttachmentsToSCPI(rmaNumber, fileData, fileName, fileType);
			if (uploadResponseData != null)
			{
				LOG.info("messageType ------------" + uploadResponseData.getMessageType());
				LOG.info("messageText ------------" + uploadResponseData.getMessageText());
				return uploadResponseData;
			}
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;
	}
}