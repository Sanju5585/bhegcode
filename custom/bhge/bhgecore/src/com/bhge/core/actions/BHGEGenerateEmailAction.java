/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2014 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 *
 *
 */
package com.bhge.core.actions;

import de.hybris.platform.acceleratorservices.email.CMSEmailPageService;
import de.hybris.platform.acceleratorservices.email.EmailGenerationService;
import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.acceleratorservices.process.strategies.ProcessContextResolutionStrategy;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.action.AbstractProceduralAction;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.io.DataInputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.order.service.BHGECartService;


/**
 * A process action to generate email for order confirmation.
 */
public class BHGEGenerateEmailAction extends AbstractProceduralAction<OrderProcessModel>
{


	private static final Logger LOG = Logger.getLogger(BHGEGenerateEmailAction.class);

	private CMSEmailPageService cmsEmailPageService;
	private String frontendTemplateName;
	private ProcessContextResolutionStrategy contextResolutionStrategy;
	private EmailGenerationService emailGenerationService;


	/*
	 * @Resource(name = "bhgeCartService") public BHGECartService bhgeCartService;
	 */

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	/*
	 * @Resource(name = "sessionService") private SessionService sessionService;
	 */

	@Resource(name = "emailService")
	private EmailService emailService;

	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;

	protected CMSEmailPageService getCmsEmailPageService()
	{
		return cmsEmailPageService;
	}


	
	public void setCmsEmailPageService(final CMSEmailPageService cmsEmailPageService)
	{
		this.cmsEmailPageService = cmsEmailPageService;
	}

	protected String getFrontendTemplateName()
	{
		return frontendTemplateName;
	}

	
	public void setFrontendTemplateName(final String frontendTemplateName)
	{
		this.frontendTemplateName = frontendTemplateName;
	}

	protected ProcessContextResolutionStrategy getContextResolutionStrategy()
	{
		return contextResolutionStrategy;
	}

	
	public void setContextResolutionStrategy(final ProcessContextResolutionStrategy contextResolutionStrategy)
	{
		this.contextResolutionStrategy = contextResolutionStrategy;
	}

	protected EmailGenerationService getEmailGenerationService()
	{
		return emailGenerationService;
	}

	
	public void setEmailGenerationService(final EmailGenerationService emailGenerationService)
	{
		this.emailGenerationService = emailGenerationService;
	}

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "mediaService")
	private MediaService mediaService;

	private SessionService sessionService;

	protected SessionService getSessionService()
	{
		return sessionService;
	}

	
	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}

	public BHGECartService bhgeCartService;

	public BHGECartService getBhgeCartService()
	{
		return bhgeCartService;
	}

	/**
	 * @param bhgeCartService
	 *           the bhgeCartService to set
	 */
	public void setBhgeCartService(final BHGECartService bhgeCartService)
	{
		this.bhgeCartService = bhgeCartService;
	}

	@Override
	// public Transition executeAction(final BusinessProcessModel
	// businessProcessModel) throws RetryLaterException
	public void executeAction(final OrderProcessModel businessProcessModel)

	{
		final OrderModel order = businessProcessModel.getOrder();
		String store= order.getProductLine();
		String ecommerceType= "";
		if(order.getCommerceType() != null) {
			 ecommerceType = order.getCommerceType().toString();
		}
		LOG.info("Executing BHGEGenerateEmailAction for order: " + order.getCode() + ", store: " + store + ", ecommerceType: " + ecommerceType);
		String customer="";
		/* Setting current user to the session */
		final UserModel currentUser = order.getUser();
		if (null != currentUser)
		{
			userService.setCurrentUser(currentUser);
		}
		if(currentUser instanceof GEEdgeCustomerModel) {
			LOG.info("Current user is instance of GEEdgeCustomerModel, extracting customer information from user model");
			final GEEdgeCustomerModel customerModel = (GEEdgeCustomerModel) currentUser;
			B2BUnitModel b2bUnit = customerModel.getDefaultB2BUnit();
			customer = b2bUnit.getUid().split("_")[0];
			LOG.info("Customer extracted from user model is: " + customer);
		}
		//6.5 Upgrade Changes
		getContextResolutionStrategy().initializeContext(businessProcessModel);
		final CatalogVersionModel contentCatalogVersion = getContextResolutionStrategy()
				.getContentCatalogVersion(businessProcessModel);
		if (contentCatalogVersion != null)
		{
			final EmailPageModel emailPageModel = getCmsEmailPageService().getEmailPageForFrontendTemplate(getFrontendTemplateName(),
					contentCatalogVersion);

			if (emailPageModel != null)
			{
				try
				{
					final EmailMessageModel emailMessageModel = getEmailGenerationService().generate(businessProcessModel,
							emailPageModel);



					  if (emailMessageModel != null) {
						  LOG.info("Checking emailMessageModel is null or not");
					  	final List<EmailAttachmentModel> emailAttachments = new ArrayList<EmailAttachmentModel>();
					 if(order.getAttachments() != null && order.getAttachments().size() > 0) {
					 	for (final MediaModel attach : order.getAttachments()) {
					 	if (attach != null) {
							LOG.info("Checking attachment is null or not");
					  //Do not send checkout files to customer in email
							if(StringUtils.isNotBlank(attach.getRealFileName()) &&
					  attach.getRealFileName().startsWith("Checkout-info") &&
					  attach.getRealFileName().endsWith(".pdf"))
						{ continue; }

							try {
								LOG.info("DE175710 Checking attachment is null or not ****");
								DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(attach));
								EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream, attach.getRealFileName(), attach.getMime());
								modelService.save(attachment);
								emailAttachments.add(attachment);
							} catch (Exception e) {
								LOG.error("unable to attach additional Docs from order:" + order.getCode() + "to the order-process with error:" + e.getMessage());
							}

						} } }

						  if (CollectionUtils.isNotEmpty(order.getEuc())) {//Adding EUC docs if present
							  for (final MediaModel attach : order.getEuc()) {
								  if (attach != null) {
									  LOG.info("Checking EUC attachment is null or not");
									  //Do not send checkout files to customer in email
									  if (StringUtils.isNotBlank(attach.getRealFileName()) &&
											  attach.getRealFileName().startsWith("Checkout-info") &&
											  attach.getRealFileName().endsWith(".pdf")) {
										  continue;
									  }

									  try {
										  LOG.info("DE175710 Checking EUC attachment is null or not ****");
										  DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(attach));
										  EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream, attach.getRealFileName(), attach.getMime());
										  modelService.save(attachment);
										  emailAttachments.add(attachment);
									  } catch (Exception e) {
										  LOG.error("unable to attach EUC Docs from order:" + order.getCode() + "to the order-process with error:" + e.getMessage());
									  }

								  }
							  }
						  }

					 if (CollectionUtils.isNotEmpty(order.getPoDocs())) { //Adding PO docs if present
					  for (final MediaModel attach : order.getPoDocs()) {
						  try {
							  LOG.info("Checking PoDOCSattachment is null or not ****");
							  DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(attach));
							  EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream, attach.getRealFileName(), attach.getMime());
							  modelService.save(attachment);
							  emailAttachments.add(attachment);
						  } catch (Exception e) {
							  LOG.error("unable to attach purchaseOrderDocument from order:" + order.getCode() + "to the order-process with error:" + e.getMessage());
						  }

					  }
					 }
					  emailMessageModel.setAttachments(emailAttachments);
					  modelService.save(emailMessageModel);
					  }


					String orderConfirmId = order.getOrderConfirmationEMail();
					if ((Config.getParameter("sendSFDCEmail")).equalsIgnoreCase("true"))
					{
						orderConfirmId = orderConfirmId + "," + Config.getParameter("SFDC_Email_Id");
					}

					String[] emailIds;
					final String delimiter = "[;,]+";
					emailIds = orderConfirmId.split(delimiter);

					final List<EmailAddressModel> toEmails = new ArrayList<EmailAddressModel>();

					if (emailMessageModel != null)
					{
						final List<EmailMessageModel> emails = new ArrayList<EmailMessageModel>();
						for (int i = 0; i < emailIds.length; i++)
						{
							final EmailAddressModel toAddress = emailService.getOrCreateEmailAddressForEmail(emailIds[i], " ");

							toEmails.add(toAddress);

						}
						
						final B2BUnitModel unit = order.getUnit();
						if (Objects.nonNull(unit)) {
							final String[] unitArr = unit.getUid().split("_");
							if (unitArr.length >= 1) {
								final String salesOrg = unitArr[1];
								final String cordantSalesOrg = Config.getParameter("cordant.salesorgs.order.confirmation.customer.support");
								final List<String> cordantSalesOrgList = Arrays.asList(cordantSalesOrg.split(","));
								final String panaSalesOrg = Config.getParameter("pana.salesorgs.order.confirmation.customer.support");
								final List<String> panaSalesOrgList = Arrays.asList(panaSalesOrg.split(","));
								if (cordantSalesOrgList.contains(salesOrg)) {
									final String cordantSupportEmailId = Config.getParameter("cordant.order.confirmation.to.customer.support");
									final EmailAddressModel toAddressForSupport = emailService.getOrCreateEmailAddressForEmail(cordantSupportEmailId, " ");
									toEmails.add(toAddressForSupport);
								} else if (panaSalesOrgList.contains(salesOrg)) {
									final String panaSupportEmailId = Config.getParameter("pana.order.confirmation.to.customer.support");
									final EmailAddressModel toAddressForSupport = emailService.getOrCreateEmailAddressForEmail(panaSupportEmailId, " ");
									toEmails.add(toAddressForSupport);
								}
							}

						}

						emailMessageModel.setToAddresses(toEmails);
						final List<EmailAddressModel> ccEmails = new ArrayList<EmailAddressModel>();
						if(StringUtils.equalsIgnoreCase(store, "cordant") && StringUtils.equalsIgnoreCase(ecommerceType, "BUY")) {
							String ccEmailId= bhgeEmailService.fetchEmailforcc(customer,store);
							LOG.info("Store is cordant, adding CC email address for order confirmation email.");
							if(StringUtils.isBlank(ccEmailId)) {
								ccEmailId = Config.getParameter("cordant.order.confirmation.cc.global.email");
							}
							LOG.info("CC email address from config for cordant store: " + ccEmailId);
							String[] ccEmailIds = ccEmailId.split(delimiter);
							for (String emailId : ccEmailIds) {
								LOG.info("Adding CC email address: " + emailId + " for cordant store");
								final EmailAddressModel ccAddress = emailService.getOrCreateEmailAddressForEmail(emailId, " ");
								ccEmails.add(ccAddress);
							}
							emailMessageModel.setCcAddresses(ccEmails);
						}
						getModelService().save(emailMessageModel);

						emails.add(emailMessageModel);

						businessProcessModel.setEmails(emails);

						getModelService().save(businessProcessModel);
						return;
					}
					else
					{
						LOG.error("Failed to generate email message");
						bhgeEmailService.sendEmailForOrderConfEmailFailure(
								Config.getString("ORDER_CONFIRMATION_EMAIL_FAILURE_SUBJECT",
										"EdgeNet Critical Error Alert - Order Confirmation Failure"),
								Config.getString("ORDER_SUBMITION_TO_ADDRESS", ""), "Failed to generate email message.", order.getCode(),
								order.getOrderConfirmationEMail(), order.getSoldToForCart().getUid(),order.getUser().getUid());
					}
				}
				catch (final Exception e)
				{
					bhgeEmailService.sendEmailForOrderConfEmailFailure(
							Config.getString("ORDER_CONFIRMATION_EMAIL_FAILURE_SUBJECT",
									"EdgeNet Critical Error Alert - Order Confirmation Failure"),
							Config.getString("ORDER_SUBMITION_TO_ADDRESS", ""), "Failed to generate email message", order.getCode(),
							order.getOrderConfirmationEMail(), order.getSoldToForCart().getUid(),order.getUser().getUid());
					e.printStackTrace();
				}
			}
			else
			{
				LOG.error("Could not retrieve email page model for " + getFrontendTemplateName() + " and "
						+ contentCatalogVersion.getCatalog().getName() + ":" + contentCatalogVersion.getVersion()
						+ ", cannot generate email content");
				bhgeEmailService.sendEmailForOrderConfEmailFailure(
						Config.getString("ORDER_CONFIRMATION_EMAIL_FAILURE_SUBJECT",
								"EdgeNet Critical Error Alert - Order Confirmation Failure"),
						Config.getString("ORDER_SUBMITION_TO_ADDRESS", ""), "Failed to generate email message", order.getCode(),
						order.getOrderConfirmationEMail(), order.getSoldToForCart().getUid(),order.getUser().getUid());
			}
		}
		else
		{
			LOG.error("Could not resolve the content catalog version, cannot generate email content");
			bhgeEmailService.sendEmailForOrderConfEmailFailure(
					Config.getString("ORDER_CONFIRMATION_EMAIL_FAILURE_SUBJECT",
							"EdgeNet Critical Error Alert - Order Confirmation Failure"),
					Config.getString("ORDER_SUBMITION_TO_ADDRESS", ""), "Failed to generate email message", order.getCode(),
					order.getOrderConfirmationEMail(), order.getSoldToForCart().getUid(),order.getUser().getUid());
		}
		return;
		// return Transition.OK;
	}

}
