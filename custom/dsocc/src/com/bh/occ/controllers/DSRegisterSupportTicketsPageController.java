package com.bh.occ.controllers;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.cart.converters.BHGECartDataConverter;
import com.bhge.facades.feedback.BHGEFeedbackFacade;
import com.bhge.util.exception.BhgeUtilException;
import com.bhge.util.service.BhgecommonutilsService;
import com.ds.dsocc.common.dto.SupportTicketFormWsDTO;
import com.ds.dsocc.common.dto.TicketDataWsDTO;
import de.hybris.platform.bhgeticketingaddon.facades.BHGETicketFacade;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.customerticketingfacades.TicketFacade;
import de.hybris.platform.customerticketingfacades.data.StatusData;
import de.hybris.platform.customerticketingfacades.data.TicketCategory;
import de.hybris.platform.customerticketingfacades.data.TicketData;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

@Controller
@ApiVersion("v2")
@Tag(name = "DS RegisterSupportTicke")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSRegisterSupportTicketsPageController extends DSBaseController {

	private static final Logger LOG = LoggerFactory.getLogger(DSRegisterSupportTicketsPageController.class);

	@Resource(name = "bhgeTicketFacade")
	private BHGETicketFacade bhgeTicketFacade;

	@Resource(name = "defaultTicketFacade")
	private TicketFacade ticketFacade;

	@Resource(name = "customerFacade")
	private CustomerFacade customerFacade;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "bhgeFeedbackFacade")
	private BHGEFeedbackFacade bhgeFeedbackFacade;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "bhgeCartDataConverter")
	private BHGECartDataConverter bhgeCartDataConverter;

	@Resource(name="bhgecommonutilsService")
	private BhgecommonutilsService commonUtilsService;

	@Resource
	private UserService userService;

	@Autowired
	RestTemplate restTemplate;

	@RequestMapping(value = "/add-support-ticket", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getFeedback deatils", summary = " Get a new feedback Deatils ", description = "Get a new feedback Deatils")
	@ApiBaseSiteIdAndUserIdParam
	public TicketDataWsDTO getSupportTicket(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User Id", required = true) @PathVariable final String userId)
			throws CMSItemNotFoundException, IOException, ServletException {

		LOG.info("Start Loding customerData ");

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		SupportTicketFormWsDTO supportTicketForm = new SupportTicketFormWsDTO();
		if (customerData != null && customerData.getUid() != null
				&& !StringUtils.equalsIgnoreCase(customerData.getUid(), "anonymous")) {
			BHGERegieterCustomerModel customerModel = bhgeUserProfileDao
					.getRegisterCustomerModelFromUid(customerData.getUid());
			String contactName = customerModel != null && customerModel.getGivenName() != null
					? customerModel.getGivenName()
					: "";
			String contactEmail = customerModel != null && customerModel.getEmail() != null ? customerModel.getEmail()
					: "";
			supportTicketForm.setName(contactName);
			supportTicketForm.setEmailId(contactEmail);

			LOG.info("finish Loding customerData ");
		}

		final TicketData ticketData = new TicketData();

		return getDataMapper().map(ticketData, TicketDataWsDTO.class, "FULL");
	}

	@ResponseBody
	@RequestMapping(value = "/{checkoutCartId}/add-support-ticket", method = RequestMethod.POST, consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@Operation(operationId = "createFeedback deatils", summary = "Creates a new feedback Deatils ", description = "Creates a new feedback Deatils")
	@ApiBaseSiteIdAndUserIdParam
	public TicketDataWsDTO addSupportTicket(

			@Parameter(description = "feedback  object.", required = true) @RequestBody final SupportTicketFormWsDTO supportTicketForm,
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId,
			@Parameter(description = "User Id", required = true) @PathVariable final String userId,final HttpServletRequest request,final HttpSession session)
					throws CMSItemNotFoundException, IOException, ServletException ,BhgeUtilException {
		LOG.info("****************** Start feedback form ********************** ");



		final String captcha = supportTicketForm.getGoogleCaptcha();

		// userName = "Guest";
		boolean captchaValue = commonUtilsService.validateGoogleCaptchaNew(request, session, restTemplate, captcha);

		if (captchaValue) // TODO : Once captcha in integrated from frontend, replace true in if condition
			// with captchaValue
		{
			bhgeTicketFacade.bhgeCreateTicket(
					this.populateTicketDataWs(supportTicketForm, StringEscapeUtils.escapeHtml4(checkoutCartId)));
		} else {


			if (RequestMethod.POST.name().equalsIgnoreCase(request.getMethod())) {

				LOG.info("Google Captcha Not validated");
			}
		}

		LOG.info("****************** Finished feedback form ********************** ");
		return getDataMapper().map(populateTicketDataWs(supportTicketForm, StringEscapeUtils.escapeHtml4(checkoutCartId)), TicketDataWsDTO.class,
				"FULL");

}

	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping (value = "/uploadFeedbackAttachment", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@Operation(operationId = "uploadFeedbackAttachment", summary = "Upload Feedback Attachment", description = "Upload Feedback  Attachment")
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> uploadPOAttachment(@Parameter @RequestPart(value = "file") MultipartFile file,
			@Parameter @RequestParam("entryNumber") int entryNumber,
			@Parameter @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws IOException {
		LOG.info("==================Upload PO Attachment==================");
		try {

			if (file != null) {
				MediaModel attachment=bhgeFeedbackFacade.saveFeedbackAttachment(file);
				LOG.info("Uploaded Order attachment for checkout successfully");
				return new ResponseEntity<>(attachment.getCode(), HttpStatus.OK);
			}
		} catch (final Exception ex) {
			LOG.error("Error in uploading the PO attachment" + ex);
		}
		return null;
	}

	@ResponseBody
	@Operation(operationId = "removeFeedbackAttachment", summary = "Remove the Feedback  attachment in Feedback page.", description = "Remove the Feedback  attachment in Feedback page.")
	@ApiBaseSiteIdAndUserIdParam
	@RequestMapping(value = "/{checkoutCartId}/removeFeedbackAttach", method = { RequestMethod.POST })
	public ResponseEntity<String> removeOrderAttachment(
			@Parameter(description = "shopping cart Id", required = true) @PathVariable final String checkoutCartId) {
		try {
			LOG.debug("Removing  Feedback attachments....");
			final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
			bhgeFeedbackFacade.removeAttachmentsWs(cartModel);
			LOG.debug("Feedback attachments removed successfully.....");
			return new ResponseEntity<>("Success", HttpStatus.OK);
		} catch (final Exception ex) {
			LOG.error("Error in removing the attachment from the feedback" + ex);
		}
		return null;
	}

	protected TicketData populateTicketDataWs(final SupportTicketFormWsDTO supportTicketForm, String checkoutCartId) {
		final TicketData ticketData = new TicketData();

		TicketCategory ticketCategory = getDataMapper().map(supportTicketForm.getTicketCategory(), TicketCategory.class,
				"FULL");

		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(checkoutCartId);
		CartData cartData = bhgeCartDataConverter.convert(cartModel);

		if (!cartData.getEntries().isEmpty()) {
			ticketData.setCartId(cartData.getCode());
		}
		if (StringUtils.isNotBlank(supportTicketForm.getId())) {
			ticketData.setId(supportTicketForm.getId());
		}
		final StatusData status = new StatusData();
		status.setId(supportTicketForm.getStatus());
		ticketData.setStatus(status);
		ticketData.setCustomerId(customerFacade.getCurrentCustomerUid());
		ticketData.setSubject(StringEscapeUtils.escapeHtml4(supportTicketForm.getSubject()));
		ticketData.setMessage(StringEscapeUtils.escapeHtml4(supportTicketForm.getMessage()));
		ticketData.setAssociatedTo(StringEscapeUtils.escapeHtml4(supportTicketForm.getAssociatedTo()));
		ticketData.setTicketCategory(ticketCategory);
		ticketData.setName(StringEscapeUtils.escapeHtml4(supportTicketForm.getName()));
		ticketData.setEmailId(StringEscapeUtils.escapeHtml4(supportTicketForm.getEmailId())+ "_" + supportTicketForm.getAttachmentId());
		ticketData.setPhoneNo(StringEscapeUtils.escapeHtml4(supportTicketForm.getPhoneNo()));
		return ticketData;
	}


}
