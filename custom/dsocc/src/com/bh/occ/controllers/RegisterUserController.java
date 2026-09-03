package com.bh.occ.controllers;

import com.bhge.facades.contactus.BHGEContactUsFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.register.BHGERegisterUserFacade;
import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.facades.BHGEManualApprovalFacade;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhge.util.service.BhgecommonutilsService;
import com.bhgeregister.dto.*;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.i18n.I18NFacade;
import de.hybris.platform.commercefacades.storesession.StoreSessionFacade;
import de.hybris.platform.commercefacades.user.UserFacade;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;

@Controller
@ApiVersion("v2")
@Tag(name = "Registration email occ apis")
@RequestMapping(value = "/{baseSiteId}/register")
public class RegisterUserController {
	@Resource
	private BHGEManualApprovalFacade bhgeManualApprovalFacade;

	@Resource
	BHGERegisterUserFacade registerUserFacade;
	@Resource
	RegisterUserDao registerUserDao;
	@Resource
	private BhgeRegisterFacade bhgeRegisterFacade;
	@Resource
	private EmailService emailservice;

	@Resource(name = "userService")
	private UserService userService;

	@Resource
	private BhgecommonutilsService commonUtilsService;

	@Resource(name = "storeSessionFacade")
	private StoreSessionFacade storeSessionFacade;

	@Resource(name = "userFacade")
	private UserFacade userFacade;

	@Autowired
	RestTemplate restTemplate;

	@Resource(name = "bhgeContactUsFacade")
	private BHGEContactUsFacade bhgeContactUsFacade;

	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;

	@Resource(name = "i18NFacade")
	private I18NFacade i18NFacade;

	private static final String ACTIVATE_VALIDATOR_PAGE = "validateRegisterActivatepage";
	private final static Logger LOG = Logger.getLogger(RegisterUserController.class);

	@RequestMapping(value = "/user/validateActivation/{userName}/{userToken}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "BHGE Register verification", summary = "Register Verification", description = "This API is used to verify the user registration")
	@ApiBaseSiteIdParam
	public String validateActivation(final Model model, final HttpServletRequest request, final HttpServletResponse response,
									 final HttpSession session, @PathVariable(required = true) final String userName,
									 @PathVariable(required = true) final String userToken) throws CMSItemNotFoundException, EmailException {
		LOG.info("Inside validateActivation START = " + userName);
		final BHGERegisterResponse validateResult = bhgeRegisterFacade.validateActivateAccount(userName, userToken);
		String activationUrl=Config.getParameter("bhge.register.resend.activationurl") + userName + "/";
		model.addAttribute("returnStatus", validateResult.getStatusCode());
		model.addAttribute("activationUrl", activationUrl);
		return validateResult.getStatusCode();
	}

	@RequestMapping(value = "/user/resend/{userName}/", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "BHGE Register Resent", summary = "Register Verification token resend", description = "This API is used to resend the user registration token")
	@ApiBaseSiteIdParam
	public String resendEmailController(final Model model, final HttpServletRequest request, final HttpServletResponse response,
										final HttpSession session, @PathVariable(required = true) final String userName)
			throws CMSItemNotFoundException, EmailException {
		LOG.info("Inside resendEmailController - START" + StringEscapeUtils.escapeHtml4(userName));
		final String tokenValue = bhgeRegisterFacade.loadActivateAccount(StringEscapeUtils.escapeHtml4(userName));
		LOG.info("tokenValue = " + tokenValue);
		if (tokenValue != null && tokenValue.equals("ACTIVE")) {
			model.addAttribute("returnStatus", tokenValue);
		} else {
			final BHGERegieterCustomerModel user = (BHGERegieterCustomerModel) registerUserDao.getUserBySSO(StringEscapeUtils.escapeHtml4(userName));
			if (user != null) {
				final String store = Config.getParameter("register.appList.mncStore");
				try {
					getEmailservice().userVerifyMail(user.getEmail(), user.getGivenName(), tokenValue, StringEscapeUtils.escapeHtml4(userName), store, null);
				} catch (final CMSItemNotFoundException e) {
					LOG.error("CMSItemNotFoundException found while triggering resend verification email");
				} catch (final EmailException e) {
					LOG.error("EmailException found while triggering resend verification email");
				}
			}
			model.addAttribute("returnStatus", "SUCCESS");
		}
		return "SUCCESS";
	}

	@RequestMapping(value = "/user/cancelRequest/{userName}/{userToken}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "BHGE Register Cancel", summary = "Register Verification Cancel", description = "This API is used to Cancel the user registration")
	@ApiBaseSiteIdParam
	public String cancelRequest(final Model model, final HttpServletRequest request, final HttpServletResponse response,
								final HttpSession session, @PathVariable(required = true) final String userName,
								@PathVariable(required = true) final String userToken) throws CMSItemNotFoundException, EmailException {
		LOG.info("Inside cancelRequest: START = " + userName);
		final BHGERegisterResponse validateResult = bhgeRegisterFacade.cancelRequest(userName, userToken);
		return validateResult.getStatusCode();
	}

	public EmailService getEmailservice() {
		return emailservice;
	}

	public void setEmailservice(final EmailService emailservice) {
		this.emailservice = emailservice;
	}

}
