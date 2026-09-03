/**
 *
 */
package com.bhge.register.webservices.services.impl;

import com.bhge.core.constants.GeneratedBhgeCoreConstants;
import com.bhge.core.enums.UserCreationChannel;
import com.bhge.register.integration.oidc.dao.BhgeregisteroidcintegrationDao;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2b.services.impl.DefaultB2BUnitService;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import com.bhge.register.webservices.enums.DetailNumber;
import com.bhge.register.webservices.enums.AddressType;


import java.io.PrintWriter;
import java.io.StringWriter;
import java.security.SecureRandom;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.log4j.Logger;
import com.bhge.core.model.BHGEGlobalPropertiesModel;
import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhge.register.integration.oidc.constants.BhgeregisteroidcintegrationConstants;
import com.bhge.register.integration.oidc.service.BhgeregisteroidcintegrationService;
import com.bhge.register.integration.oidc.util.ErrorMessages;
import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.data.AccountLinkingData;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.enums.BHGEAccessRequestSource;
import com.bhge.register.webservices.enums.BHGEAccessRequestStatus;
import com.bhge.register.webservices.enums.BHGESAPRuleStatus;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhge.register.webservices.interceptors.CommerceCustomerInterceptor;
import com.bhge.register.webservices.model.BHGEAccountDataModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.model.BHGEUserAccessRulesModel;
import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGERegisterRuleData;
import com.bhgeregister.dto.BHGESoldtoData;
import org.springframework.web.multipart.MultipartFile;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import com.bhge.core.constants.BhgeCoreConstants;
import de.hybris.platform.util.Config;
import jakarta.annotation.Resource;
import java.io.InputStream;
import de.hybris.platform.enumeration.EnumerationService;
import java.util.Map;

/**
 * @author 586667
 *
 */
public class SubmitRegisterRequestServiceImpl implements SubmitRegisterRequestService {
	private static final Logger LOG = Logger.getLogger(SubmitRegisterRequestServiceImpl.class);

	private final String success = "SUCCESS";
	private final String bhgeRegister = "BHGERegister";
	private final String precedingZeros = "0000000000";
	//List<String> legalEntity = new ArrayList<>();

	private static final String FETCH_B2bUnits_GeEdegCustomer = "select {pk} from {GEEdgeCustomer} where {uid}=?inputSsoId";
	private static final String FETCH_REGISTER_USER = "select {pk} from {BHGERegieterCustomer} where lower({sso}) = lower(?inputSsoId)";
	private static final String validcheckSSOAvailability = "NO";
	private static final String ENCODE_PASSWORD = "test";
	private static final String PASSWORD_ENCODE = "plain";
	private static final String SECRET_QUESTION = "City of Birth";
	private static final String REVERSE_PRODLINE = "NotListedAbove";
	private static final String NOTLISTED_ABOVE = "Not Listed Above";
	public static final String PASSWORD_VALIDATION_FAILED = "Api validation failed: password";
	private static final String TOKEN_DATASET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	private static final int TOKEN_LENGTH = 40;
	private static final SecureRandom RANDOM = new SecureRandom();
	//String salesEntity=null;
	//String salesEntity1=null;
	private final ThreadLocal<Long> sequence = ThreadLocal.<Long>withInitial(() -> {
		return Long.MAX_VALUE;
	});
	private final ThreadLocal<Long> sequence1 = ThreadLocal.<Long>withInitial(() -> {
		return Long.MAX_VALUE;
	});
	private final ThreadLocal<Long> sequence2 = ThreadLocal.<Long>withInitial(() -> {
		return Long.MAX_VALUE;
	});

	// US8159: FPT Changes start
	private final ThreadLocal<Long> sequence3 = ThreadLocal.<Long>withInitial(() -> {
		return Long.MAX_VALUE;
	});
	// US8159: FPT Changes End
	//ofs changes
	private final ThreadLocal<Long> sequence4 = ThreadLocal.<Long>withInitial(() -> {
		return Long.MAX_VALUE;
	});
	//ofs changes

	private ModelService modelService;
	private UserService userService;
	private DefaultB2BUnitService defaultB2BUnitService;
	private RegisterUserDao registerDao;
	private BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;
	private BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService;
	private CommonI18NService commonI18NService;

	@Autowired
	private FlexibleSearchService flexibleSearchService;
	private EmailService emailService;
	private String EmailFlag;
	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "enumerationService")
	private EnumerationService enumerationService;

	@Resource
	private BhgeRegisterFacade bhgeRegisterFacade;

	private B2BUnitService<B2BUnitModel, UserModel> b2bUnitService;

	/**
	 * @return the emailService
	 */
	public EmailService getEmailService() {
		return emailService;
	}

	/**
	 * @param emailService the emailService to set
	 */
	public void setEmailService(final EmailService emailService) {
		this.emailService = emailService;
	}

	/**
	 * @return the flexibleSearchService
	 */
	/*
	 * public FlexibleSearchService getFlexibleSearchService() { return
	 * flexibleSearchService; }
	 *
	 *//**
	 * @param flexibleSearchService the flexibleSearchService to set
	 *//*
	 * public void setFlexibleSearchService(final FlexibleSearchService
	 * flexibleSearchService) { this.flexibleSearchService = flexibleSearchService;
	 * }
	 */

	/**
	 * @return the commonI18NService
	 */
	public CommonI18NService getCommonI18NService() {
		return commonI18NService;
	}

	/**
	 * @param commonI18NService the commonI18NService to set
	 */
	public void setCommonI18NService(final CommonI18NService commonI18NService) {
		this.commonI18NService = commonI18NService;
	}

	/**
	 * @return the modelService
	 */
	public ModelService getModelService() {
		return modelService;
	}

	/**
	 * @param modelService the modelService to set
	 */
	public void setModelService(final ModelService modelService) {
		this.modelService = modelService;
	}

	/**
	 * @return the userService
	 */
	public UserService getUserService() {
		return userService;
	}

	/**
	 * @param userService the userService to set
	 */
	public void setUserService(final UserService userService) {
		this.userService = userService;
	}

	/**
	 * @return the defaultB2BUnitService
	 */
	public DefaultB2BUnitService getDefaultB2BUnitService() {
		return defaultB2BUnitService;
	}

	/**
	 * @param defaultB2BUnitService the defaultB2BUnitService to set
	 */
	public void setDefaultB2BUnitService(final DefaultB2BUnitService defaultB2BUnitService) {
		this.defaultB2BUnitService = defaultB2BUnitService;
	}

	/**
	 * @return the registerDao
	 */
	public RegisterUserDao getRegisterDao() {
		return registerDao;
	}

	/**
	 * @param registerDao the registerDao to set
	 */
	public void setRegisterDao(final RegisterUserDao registerDao) {
		this.registerDao = registerDao;
	}

	/**
	 * @return the bhgeregistermncecommapplicationService
	 */
	public BhgeregistermncecommapplicationService getBhgeregistermncecommapplicationService() {
		return bhgeregistermncecommapplicationService;
	}

	/**
	 * @param bhgeregistermncecommapplicationService the
	 *                                               bhgeregistermncecommapplicationService
	 *                                               to set
	 */
	public void setBhgeregistermncecommapplicationService(
			final BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService) {
		this.bhgeregistermncecommapplicationService = bhgeregistermncecommapplicationService;
	}

	/**
	 * @return the bhgeregisteroidcintegrationService
	 */
	public BhgeregisteroidcintegrationService getBhgeregisteroidcintegrationService() {
		return bhgeregisteroidcintegrationService;
	}

	/**
	 * @param bhgeregisteroidcintegrationService the
	 *                                           bhgeregisteroidcintegrationService
	 *                                           to set
	 */
	public void setBhgeregisteroidcintegrationService(
			final BhgeregisteroidcintegrationService bhgeregisteroidcintegrationService) {
		this.bhgeregisteroidcintegrationService = bhgeregisteroidcintegrationService;
	}

	/**
	 * @return the b2bUnitService
	 */
	public B2BUnitService<B2BUnitModel, UserModel> getB2bUnitService() {
		return b2bUnitService;
	}

	/**
	 * @param b2bUnitService the b2bUnitService to set
	 */
	public void setB2bUnitService(final B2BUnitService<B2BUnitModel, UserModel> b2bUnitService) {
		this.b2bUnitService = b2bUnitService;
	}
	@Override
	public BHGERegisterResponse customerNumberValidation( BHGERegisterRequest  customerNumberDetails) {
		LOG.info("Inside customerNumberValidation");
		final String DSS = Config.getParameter("register.appName.DSS");
		final String OFS = Config.getParameter("register.appName.OFS");
		BHGERegisterResponse response = new BHGERegisterResponse();
		try {
			if (null != customerNumberDetails.getCustomerNumber() && !customerNumberDetails.getCustomerNumber().isEmpty())
			{
				final BHGERegisterRequest sapCustomerNumber = new BHGERegisterRequest();
				sapCustomerNumber.setCustomerNumber(customerNumberDetails.getCustomerNumber());
				LOG.info("Starting SAP call for customer number");
				final String store = DSS;
				BHGERegisterResponse sapCustomerResponse = validateCustomerNumber(sapCustomerNumber, store);

				if (null != sapCustomerResponse.getRuleMessageList() && !sapCustomerResponse.getRuleMessageList().isEmpty() && sapCustomerResponse.getRuleMessageList()
						.stream() .anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) {

					LOG.warn(
							"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
					response.setErrorMessage(
							"This is not a valid sold-to location number.  Please try again, or enter your company data below");
					LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
					emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1502"),
							"Error in SAP Customer number validation",
							"The sold-to location number selected by user is not valid",
							Arrays.asList("Customer Number", "First Name", "Last Name","User Id","Email"),
							Arrays.asList(customerNumberDetails.getCustomerNumber(), StringEscapeUtils.escapeHtml4(customerNumberDetails.getFirstName()),
									StringEscapeUtils.escapeHtml4(customerNumberDetails.getLastName()),customerNumberDetails.getUserId(), customerNumberDetails.getEmail()));
					return response;
				}
				if(null != sapCustomerResponse.getErrorMessage() && sapCustomerResponse.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue"))
				{
					LOG.info("ConnectivityIssue during the CustomerAccount Validation");
					response.setErrorMessage("RegistrationNetworkIssue");
					return response;
				}

			}

//*******************************OFS block customerNumberValidation ******************************************//

			if (null != customerNumberDetails.getOfsCustomerAccNumber() && !customerNumberDetails.getOfsCustomerAccNumber().isEmpty())
			{
				//LOG.info("*******OFS customerNumber***** = " + customerNumberDetails.getOfsCustomerAccNumber());
				final BHGERegisterRequest sapOfsCustomerNumber = new BHGERegisterRequest();
				sapOfsCustomerNumber.setOfsCustomerAccNumber(customerNumberDetails.getOfsCustomerAccNumber());
				LOG.info("Starting OFS SAP call for customer number");
				final String store = OFS;
				BHGERegisterResponse sapOFSCustomerResponse = validateCustomerNumber(sapOfsCustomerNumber, store);

				if (null != sapOFSCustomerResponse.getRuleMessageList() && !sapOFSCustomerResponse.getRuleMessageList().isEmpty() &&sapOFSCustomerResponse.getRuleMessageList()
						.stream() .anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) {

					LOG.warn(
							"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
					response.setErrorMessage(
							"This is not a valid sold-to location number.  Please try again, or enter your company data below");
					LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
					emailService.registerOFSFailureMail(Config.getParameter("OFSregistration.failure.MSG1502"),
							"Error in SAP Payer ID validation",
							"The Payer ID number entered by user is not valid",customerNumberDetails.getFirstName() +" "+
									customerNumberDetails.getLastName(),customerNumberDetails.getOfsCustomerAccNumber(),customerNumberDetails.getEmail());
					return response;
				}
				if(sapOFSCustomerResponse.getRuleMessageList().size() != 5) {


					LOG.warn(
							"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
					response.setErrorMessage(
							"This is not a valid sold-to location number.  Please try again, or enter your company data below");
					LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
					emailService.registerOFSFailureMail(Config.getParameter("OFSregistration.failure.MSG1502"),
							"Error in SAP Payer ID validation",
							"The Payer ID number entered by user is not valid",customerNumberDetails.getFirstName() +" "+
									customerNumberDetails.getLastName(),customerNumberDetails.getOfsCustomerAccNumber(),customerNumberDetails.getEmail());
					return response;

				}
				if(null != sapOFSCustomerResponse.getErrorMessage() && sapOFSCustomerResponse.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue"))
				{
					LOG.info("ConnectivityIssue during the CustomerAccount Validation");
					response.setErrorMessage("RegistrationNetworkIssue");
					return response;
				}

			}
			//*******************************OFS block customerNumberValidation End******************************************//

		}catch (final Exception ex)
		{
			ex.printStackTrace();
			LOG.info("Exception occurred while validating customer number"+ex);
			final String message = ex.getMessage();
			LOG.error("Error occurred while validating customer number" + message);
			response.setErrorMessage(message.contains(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.")
					? "Technical Error happened during Self Registration. Support team is notified for the same & will get back to you."
					: message);

		}
		return response;
	}

	@Override
	public BHGERegisterResponse submitDetails(final BHGERegisterRequest submitDetails) {
		BHGERegisterResponse response = new BHGERegisterResponse();
		try {

			if ((null != submitDetails.getCustomerNumber() && !submitDetails.getCustomerNumber().isEmpty()
					&& !(precedingZeros.equalsIgnoreCase(submitDetails.getCustomerNumber())))
					|| (null != submitDetails.getFptCustomerAccNumber()
					&& !submitDetails.getFptCustomerAccNumber().isEmpty()
					&& !(precedingZeros.equalsIgnoreCase(submitDetails.getFptCustomerAccNumber())))
					|| (null != submitDetails.getOfsCustomerAccNumber() && !submitDetails.getOfsCustomerAccNumber().isEmpty()
					&& !(precedingZeros.equalsIgnoreCase(submitDetails.getOfsCustomerAccNumber())))) {

				response = triggerFlowWithCustomerNumber(submitDetails);
			}

			else {

				response = triggerFlowWithoutCustomerNumber(submitDetails);
			}

			if (null == response.getErrorMessage() || response.getErrorMessage().isEmpty()) {
				final String token = loadActivateAccount(submitDetails.getUserId());
				sendUserVerificationMail(submitDetails, token);
				response.setStatusDetails("Auto Approved");
			}

		} catch (final Exception ex) {
			ex.printStackTrace();
			final String message = ex.getMessage();
			LOG.error("Error Occured while submitting registration data.");
			response.setErrorMessage(message.contains(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.")
					? "Technical Error happened during Self Registration. Support team is notified for the same & will get back to you."
					: message);

		}
		return response;
	}

	/**
	 * @param submitDetails
	 * @param token
	 *
	 */
	private void sendUserVerificationMail(final BHGERegisterRequest submitDetails, final String token) {
		try {
//			LOG.info("User Verify Email Service with UserName: " + submitDetails.getFirstName() + " and Address: "
//					+ submitDetails.getEmail());
			final String userName = submitDetails.getFirstName() + " " + submitDetails.getLastName();
			final StringBuffer bhgeAppList = new StringBuffer();
			if (submitDetails.getAppList() != null & submitDetails.getAppList().size() > 0) {
				if (submitDetails.getAppList().contains(Config.getParameter("register.appName.DSS"))) {
					if (bhgeAppList.length() > 0) {
						bhgeAppList.append(", " + Config.getParameter("register.appList.mncStore"));
					} else {
						bhgeAppList.append(Config.getParameter("register.appList.mncStore"));
					}
				}
				//ofs changes
				if (submitDetails.getAppList().contains(Config.getParameter("register.appName.OFS"))) {
					if (bhgeAppList.length() > 0) {
						bhgeAppList.append(", " + Config.getParameter("register.appList.ofsStore"));
					} else {
						bhgeAppList.append(Config.getParameter("register.appList.ofsStore"));
					}
				}
				//ofs changes
				if (submitDetails.getAppList().contains(Config.getParameter("register.appName.IQM"))) {
					if (bhgeAppList.length() > 0) {
						bhgeAppList.append(", " + Config.getParameter("register.appList.iqmApp"));
					} else {
						bhgeAppList.append(Config.getParameter("register.appList.iqmApp"));
					}
				}
				if (submitDetails.getAppList().contains(Config.getParameter("register.appName.DAM"))) {
					if (bhgeAppList.length() > 0) {
						bhgeAppList.append(", " + Config.getParameter("register.appList.damApp"));
					} else {
						bhgeAppList.append(Config.getParameter("register.appList.damApp"));
					}
				}
				if (submitDetails.getAppList().contains(Config.getParameter("register.appName.FPT"))) {
					if (bhgeAppList.length() > 0) {
						bhgeAppList.append(", " + Config.getParameter("register.appList.fptApp"));
					} else {
						bhgeAppList.append(Config.getParameter("register.appList.fptApp"));
					}
				}
			}
			String productLine = null != submitDetails.getProductLine() ? submitDetails.getProductLine() : null;
			if (StringUtils.containsIgnoreCase(productLine, "waygate")) {
				productLine = "waygate";
			} else if (StringUtils.containsIgnoreCase(productLine, "cordant")) {
				productLine = "cordant";
			} else if (StringUtils.containsIgnoreCase(productLine, "panametrics")) {
				productLine = "panametrics";
			} else if (StringUtils.containsIgnoreCase(productLine, "druck")) {
				productLine = "druck";
			} else if (StringUtils.containsIgnoreCase(productLine, "reuter-stokes")) {
				productLine = "reuter-stokes";
			}
			getEmailService().userVerifyMail(submitDetails.getEmail(), userName, token, submitDetails.getUserId(),
					bhgeAppList.toString(), productLine);
			LOG.info("User Verify Email Service executed");
		} catch (final CMSItemNotFoundException e) {
			LOG.error("CMSItemNotFoundException found while triggering User Verfication email");
		} catch (final EmailException e) {
			LOG.error("EmailException found while triggering User Verification email");
		}

	}

	/**
	 * @param submitDetails
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 *
	 */
	private BHGERegisterResponse triggerFlowWithoutCustomerNumber(final BHGERegisterRequest submitDetails) throws CMSItemNotFoundException, EmailException {
		LOG.info("Inside triggerFlowWithoutCustomerNumber");
		BHGERegisterResponse response = new BHGERegisterResponse();
		final BHGERegisterRequest sapCustomerEmail = new BHGERegisterRequest();
		final String DSS = Config.getParameter("register.appName.DSS");
		final String DAM = Config.getParameter("register.appName.DAM");
		final String FPT = Config.getParameter("register.appName.FPT");
		final String OFS = Config.getParameter("register.appName.OFS");

		final List<String> storeList = new ArrayList<String>();
		if (null != submitDetails.getCustomerNumber() && !submitDetails.getCustomerNumber().isEmpty()
				&& submitDetails.getAppList().contains(DSS)) {
			final String store = DSS;
			storeList.add(store);
		}

		if (null != submitDetails.getOfsCustomerAccNumber() && !submitDetails.getOfsCustomerAccNumber().isEmpty())
		{
			final String store = OFS;
			storeList.add(store);
		}

		if (null != submitDetails.getDamCustomerAccNumber() && !submitDetails.getDamCustomerAccNumber().isEmpty()
				&& submitDetails.getAppList().contains(DAM)) {
			final BHGERegisterRequest sapDAMCustomerNumber = new BHGERegisterRequest();

			sapDAMCustomerNumber.setDamCustomerAccNumber(submitDetails.getDamCustomerAccNumber());

			LOG.info("Starting SAP call for customer number");
			final String damStore = DAM;
			storeList.add(damStore);

			final BHGERegisterResponse sapDAMCustomerResponse = validateCustomerNumber(sapDAMCustomerNumber, damStore);

			if (!sapDAMCustomerResponse.getRuleMessageList().isEmpty() && sapDAMCustomerResponse.getRuleMessageList()
					.stream().anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) {

				LOG.warn(
						"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1502"),
						"Error in SAP Customer number validation",
						"The sold-to location number selected by user is not valid",
						Arrays.asList("Customer Number for DAM", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(submitDetails.getDamCustomerAccNumber(), StringEscapeUtils.escapeHtml4(submitDetails.getFirstName()),
								StringEscapeUtils.escapeHtml4(submitDetails.getLastName()), submitDetails.getUserId(), submitDetails.getEmail()));

				return response;
			}

		}

		// US8159: Code Changes for FPT ValvStrore start, needs to be changed as per
		// integration

		if (null != submitDetails.getFptCustomerAccNumber() && !submitDetails.getFptCustomerAccNumber().isEmpty()
				&& submitDetails.getAppList().contains(FPT)) {
			final BHGERegisterRequest sapFptCustomerNumber = new BHGERegisterRequest();

			sapFptCustomerNumber.setFptCustomerAccNumber(submitDetails.getFptCustomerAccNumber());
			LOG.info("Starting SAP call for FPT customer number");
			final String fptStore = "FPT";
			storeList.add(fptStore);
			final BHGERegisterResponse sapFptCustomerResponse = validateCustomerNumber(sapFptCustomerNumber, fptStore);
			if (!sapFptCustomerResponse.getRuleMessageList().isEmpty() && sapFptCustomerResponse.getRuleMessageList()
					.stream().anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) {
				LOG.warn(
						"MSG1502: Error in SAP Customer number validation for FPT. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number for FPT.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 for FPT" + Config.getParameter("registration.failure.MSG1502"));

				emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1502"),
						"Error in SAP Customer number validation",
						"The sold-to location number selected by user is not valid",
						Arrays.asList("Customer Number for FPT", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(submitDetails.getDamCustomerAccNumber(), submitDetails.getFirstName(),
								submitDetails.getLastName(), submitDetails.getUserId(), submitDetails.getEmail()));

				return response;
			}
		}
		// US8159: code changes for FPT valv store end needs to be changed as per
		// integration

		// final BHGEUserAccessRequestModel accessRequestResponse =
		// savingUserAccessRequestInitial(submitDetails, "withOutCustomer");

		//if (shouldRegisterSSO) {
		LOG.info("Registering SSO in LDAP");

		response = registerSSOInLDAP(submitDetails);

		if (!"SSO Registration Complete".equalsIgnoreCase(response.getStatusDetails())) {
			return response;
		}

		//}

		final List<BHGEUserAccessRequestModel> accessRequestResponses = savingUserAccessRequestInitial(submitDetails,
				"withOutCustomer");
		final BHGEUserAccessRequestModel accessRequestResponse = accessRequestResponses.get(0);

		if (null != submitDetails.getDamCustomerAccNumber() && !submitDetails.getDamCustomerAccNumber().isEmpty()) {
			sapCustomerEmail.setDamCustomerAccNumber(submitDetails.getDamCustomerAccNumber());
		}
		if (null != submitDetails.getOfsCustomerAccNumber() && !submitDetails.getOfsCustomerAccNumber().isEmpty()) {
			sapCustomerEmail.setOfsCustomerAccNumber(submitDetails.getOfsCustomerAccNumber());
		}
		sapCustomerEmail.setEmail(submitDetails.getEmail());
		sapCustomerEmail.setUserId(submitDetails.getUserId());
		sapCustomerEmail.setFirstName(submitDetails.getFirstName());
		sapCustomerEmail.setLastName(submitDetails.getLastName());

		for (int i = 0; i < storeList.size(); i++) {
			if (storeList.get(i).equalsIgnoreCase(DSS)) {
				final BHGERegisterResponse sapCustomerEmailResponse = validateCustomerNumber(sapCustomerEmail, DSS);
				savingSAPRulesInDB(sapCustomerEmailResponse, DSS);
			}
			if (storeList.get(i).equalsIgnoreCase(DAM)) {
				final BHGERegisterResponse sapCustomerEmailResponse = validateCustomerNumber(sapCustomerEmail, DAM);
				savingSAPRulesInDB(sapCustomerEmailResponse, DAM);
			}
			if (storeList.get(i).equalsIgnoreCase(OFS)) {
				final BHGERegisterResponse sapCustomerEmailResponse = validateCustomerNumber(sapCustomerEmail, OFS);
				savingSAPRulesInDB(sapCustomerEmailResponse, OFS);
			}
		}
		return response;
	}

	/**
	 * @param submitDetails
	 */
	private void savingReqWithoutCustNum(final BHGERegisterRequest submitDetails) {
		LOG.info("Saving User Access Request without customer number in DB");
		final BHGEUserAccessRequestModel accessRequestData = getModelService().create(BHGEUserAccessRequestModel.class);
		final BHGERegieterCustomerModel requestor = getModelService().create(BHGERegieterCustomerModel.class);

		final AddressModel addressDetails = getModelService().create(AddressModel.class);
		final BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
		final CountryModel countryModel = getCommonI18NService()
				.getCountry(registerDao.fetchIsoCode(submitDetails.getCountry()).toUpperCase());

		addressDetails.setCountry(countryModel);
		addressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
		addressDetails.setCompany(submitDetails.getCompanyName());

		addressDetails.setLine1(submitDetails.getCompanyAddressLine1());
		addressDetails.setLine2(submitDetails.getCompanyAddressLine2());
		addressDetails.setPostalcode(submitDetails.getPostalCode());
		addressDetails.setDistrict(submitDetails.getStateProvince());

		requestor.setGivenName(submitDetails.getFirstName());
		requestor.setFamilyName(submitDetails.getLastName());
		requestor.setCompanyName(submitDetails.getCompanyName());
		requestor.setCompanyAddress(addressDetails);
		requestor.setRequestCustomerId(precedingZeros.equalsIgnoreCase(submitDetails.getCustomerNumber()) ? null
				: submitDetails.getCustomerNumber());
		requestor.setSso(submitDetails.getUserId());
		requestor.setEmail(submitDetails.getEmail());
		requestor.setUid("BHGERegister_CustomerUID_" + sequence.get());
		requestor.setName(submitDetails.getFirstName() + " " + submitDetails.getLastName());
		requestor.setLoginDisabled(false);
		requestor.setDefaultB2BUnit(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
		requestor.setGovernmentOrg("Yes".equalsIgnoreCase(submitDetails.getGovtOrg()));
		requestor.setProductLine(registerDao.fetchProductLine(submitDetails.getProductLine()));
		requestor.setActiveStatus(false);

		accessRequestData.setAccessRequestId(sequence.get());
		accessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
		accessRequestData.setRequesterId(requestor);
		accessRequestData.setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
		accessRequestData.setApproverDetails(registerDao.getSystemApproverDetails());
		accessRequestData.setLinkedWithRegister(true);
		getModelService().save(accessRequestData);

		LOG.info("Saving complete");

	}

	/**
	 * @param submitDetails
	 * @return
	 *
	 */
	private BHGEMnCEcommMatrixModel fetchManualApprover(final String country, final String productLine,
														final int counter) {
		if (counter == 0) {
			return registerDao.fetchManualApprover(country, productLine, "COUNTRY");
		} else if (counter == 1) {
			return registerDao.fetchManualApprover((null != registerDao.fetchSubRegion(country)
					? registerDao.fetchSubRegion(country).getAttributeValue()
					: null), productLine, "SUBREGION");
		} else if (counter == 2) {
			return registerDao.fetchManualApprover(
					(null != registerDao.fetchRegion(country) ? registerDao.fetchRegion(country).getAttributeValue()
							: null),
					productLine, "REGION");
		}
		return null;
	}

	/**
	 * @param submitDetails
	 * @return
	 *
	 */
	private BHGEMnCEcommMatrixModel fetchManualApproverAttributeKey(final String country, final String productLine,
																	final int counter) {
		if (counter == 0) {
			return registerDao.fetchManualApproverAttributeKey(country, productLine, "country");
		} else if (counter == 1) {
			return registerDao.fetchManualApproverAttributeKey(null != registerDao.fetchSubRegionAttributeKey(country)
					? registerDao.fetchSubRegionAttributeKey(country).getAttributeKey()
					: null, productLine, "subRegion");
		} else if (counter == 2) {
			return registerDao.fetchManualApproverAttributeKey(null != registerDao.fetchRegionAttributeKey(country)
					? registerDao.fetchRegionAttributeKey(country).getAttributeKey()
					: null, productLine, "region");
		}
		return null;
	}

	/**
	 * @param submitDetails
	 * @param response
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 *
	 */
	private BHGERegisterResponse triggerFlowWithCustomerNumber(final BHGERegisterRequest submitDetails) throws CMSItemNotFoundException, EmailException {
		final String DSS = Config.getParameter("register.appName.DSS");
		final String DAM = Config.getParameter("register.appName.DAM");
		final String FPT = Config.getParameter("register.appName.FPT");
		final String OFS = Config.getParameter("register.appName.OFS");

		//LOG.info("Inside triggerFlowWithCustomerNumber = " + shouldRegisterSSO);
		BHGERegisterResponse response = new BHGERegisterResponse();

		// final BHGERegisterRequest sapCustomerNumber = new BHGERegisterRequest();
		final BHGERegisterRequest sapCustomerEmail = new BHGERegisterRequest();
		final List<String> storeList = new ArrayList<String>();

		// sapCustomerNumber.setCustomerNumber(submitDetails.getCustomerNumber());
//		LOG.info("HdnAppValues [Submit register Request Service 674] : "+ submitDetails.getHdnApp());
		LOG.info("Starting SAP call for customer number");
//		List<String> hiddenApps = submitDetails.getHdnApp();
		// For OFS Store Value In Store
		if (null != submitDetails.getOfsCustomerAccNumber() && !submitDetails.getOfsCustomerAccNumber().isEmpty())
		{
			final String store = OFS;
			storeList.add(store);
		}
		if (null != submitDetails.getCustomerNumber() && !submitDetails.getCustomerNumber().isEmpty())
		{
			final String store = DSS;
			storeList.add(store);
		}

		if (null != submitDetails.getDamCustomerAccNumber() && !submitDetails.getDamCustomerAccNumber().isEmpty()) {
			final BHGERegisterRequest sapDAMCustomerNumber = new BHGERegisterRequest();

			sapDAMCustomerNumber.setDamCustomerAccNumber(submitDetails.getDamCustomerAccNumber());

			LOG.info("Starting SAP call for customer number");
			final String damStore = DAM;
			storeList.add(damStore);

			final BHGERegisterResponse sapDAMCustomerResponse = validateCustomerNumber(sapDAMCustomerNumber, damStore);

			if (null != sapDAMCustomerResponse.getRuleMessageList() && !sapDAMCustomerResponse.getRuleMessageList().isEmpty() && sapDAMCustomerResponse.getRuleMessageList()
					.stream().anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) {

				LOG.warn(
						"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1502"),
						"Error in SAP Customer number validation",
						"The sold-to location number selected by user is not valid",
						Arrays.asList("Customer Number for DAM", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(submitDetails.getDamCustomerAccNumber(), StringEscapeUtils.escapeHtml4(submitDetails.getFirstName()),
								StringEscapeUtils.escapeHtml4(submitDetails.getLastName()), submitDetails.getUserId(), submitDetails.getEmail()));

				return response;
			}

		}

		// US8159: FPT Valv Store changes start, needs to changed as per registration
		if (null != submitDetails.getFptCustomerAccNumber() && !submitDetails.getFptCustomerAccNumber().isEmpty()) {
			final BHGERegisterRequest fptBhgeRegisterRequest = new BHGERegisterRequest();

			fptBhgeRegisterRequest.setFptCustomerAccNumber(submitDetails.getFptCustomerAccNumber());
			LOG.info("Starting SAP call for FPT customer number");
			final String fptStore = FPT;
			storeList.add(fptStore);

			// sap changes
			fptBhgeRegisterRequest.setSrcSystem(Config.getParameter("com.sap.reg.src.system"));
			fptBhgeRegisterRequest.setUserEvent(Config.getParameter("com.sap.reg.user.event"));

			final BHGERegisterResponse fptBhgeResponse = validateCustomerNumber(fptBhgeRegisterRequest, fptStore);

			if (null != fptBhgeResponse.getRuleMessageList() && !fptBhgeResponse.getRuleMessageList().isEmpty() && fptBhgeResponse.getRuleMessageList().stream()
					.anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) {

				LOG.warn(
						"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1502"),
						"Error in SAP Customer number validation",
						"The sold-to location number selected by user is not valid",
						Arrays.asList("Customer Number for FPT", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(submitDetails.getDamCustomerAccNumber(), submitDetails.getFirstName(),
								submitDetails.getLastName(), submitDetails.getUserId(), submitDetails.getEmail()));

				return response;
			}

			Map<String, BHGESoldtoData> soldtoMap = null;
			if (fptBhgeResponse != null) {
				soldtoMap = fptBhgeResponse.getSoldtoData();
			}
			List<String> leagalEntityList = new ArrayList<String>();

			if(null != soldtoMap && CollectionUtils.isNotEmpty(soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).getSalesareaList()))
			{
				for(String salesArea : soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).getSalesareaList())
				{
					BHGERegisterKeyValueDataModel legalEntityData = registerDao.fetchFptSalesDetails(salesArea);
					if(null != legalEntityData)
					{
						leagalEntityList.add(legalEntityData.getAttributeId());
					}
				}
			}
			if(CollectionUtils.isNotEmpty(leagalEntityList))
			{
				fptBhgeResponse.setLegalEntityList(leagalEntityList);
			}

			/*
			 * if (soldtoMap != null) { fptBhgeResponse.setLegalEntityList(
			 * soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).
			 * getSalesareaList()); }
			 */

			if (fptBhgeResponse.getLegalEntityList() != null) {
				//legalEntity.addAll(fptBhgeResponse.getLegalEntityList());
				submitDetails.setFptLegalEntities(fptBhgeResponse.getLegalEntityList());
			}

			LOG.info("End of SAP call for FPT customer number");
		}
		// US8159: FPT Valv store changes end, needs to be changed as per integration


		//if (shouldRegisterSSO) {

		LOG.info("Registering SSO in LDAP");

		response = registerSSOInLDAP(submitDetails);

		if (!"SSO Registration Complete".equalsIgnoreCase(response.getStatusDetails())) {
			return response;
		}

		//}

		LOG.info("SavingData in Hybris for Registration");

		final List<BHGEUserAccessRequestModel> accessRequestResponses = savingUserAccessRequestInitial(submitDetails,
				"withCustomer");
		final BHGEUserAccessRequestModel accessRequestResponse = accessRequestResponses.get(0);

		LOG.info("SAP call to fetchRules");

		sapCustomerEmail.setCustomerNumber(submitDetails.getCustomerNumber());
		if (null != submitDetails.getDamCustomerAccNumber() && !submitDetails.getDamCustomerAccNumber().isEmpty()) {
			sapCustomerEmail.setDamCustomerAccNumber(submitDetails.getDamCustomerAccNumber());
		}
		if (null != submitDetails.getOfsCustomerAccNumber() && !submitDetails.getOfsCustomerAccNumber().isEmpty()) {
			sapCustomerEmail.setOfsCustomerAccNumber(submitDetails.getOfsCustomerAccNumber());
		}
		sapCustomerEmail.setEmail(submitDetails.getEmail());
		sapCustomerEmail.setUserId(submitDetails.getUserId());
		sapCustomerEmail.setFirstName(submitDetails.getFirstName());
		sapCustomerEmail.setLastName(submitDetails.getLastName());
		for (int i = 0; i < storeList.size(); i++) {
			if (storeList.get(i).equalsIgnoreCase(DSS)) {
				final BHGERegisterResponse sapCustomerEmailResponse = validateCustomerNumber(sapCustomerEmail, DSS);
				if(null != sapCustomerEmailResponse.getErrorMessage() && sapCustomerEmailResponse.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue"))
				{
					LOG.info("US499687 Received errror in validateCustomerNumber: "+sapCustomerEmailResponse.getErrorMessage());
					return sapCustomerEmailResponse;
				}
				else
				{
					LOG.info("US499687 Moved to SAP Saving rules");
					savingSAPRulesInDB(sapCustomerEmailResponse, DSS);
				}
			}
			if (storeList.get(i).equalsIgnoreCase(DAM)) {
				final BHGERegisterResponse sapCustomerEmailResponse = validateCustomerNumber(sapCustomerEmail, DAM);
				if(null != sapCustomerEmailResponse.getErrorMessage() && sapCustomerEmailResponse.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue"))
				{
					return sapCustomerEmailResponse;
				}
				else
				{
					savingSAPRulesInDB(sapCustomerEmailResponse, DAM);
				}
			}
			if (storeList.get(i).equalsIgnoreCase(OFS)) {
				final BHGERegisterResponse sapCustomerEmailResponse = validateCustomerNumber(sapCustomerEmail, OFS);
				if(null != sapCustomerEmailResponse.getErrorMessage() && sapCustomerEmailResponse.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue"))
				{
					return sapCustomerEmailResponse;
				}
				else
				{
					savingSAPRulesInDB(sapCustomerEmailResponse, OFS);
				}
			}
		}
		//legalEntity.clear();
		return response;
	}

	/**
	 * @param country
	 * @param string
	 */
	private BHGEApprovalDetailsModel updatingApproverDetails(final String country, final String productLine) {
		LOG.info("Updating approver details as some of the rules errored out");
		BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
		final AddressModel addressDetails = getModelService().create(AddressModel.class);

		final BHGEUserAccessRequestModel accessRequestData = registerDao.fetchPreviousUserAccessRequest(sequence.get());

		final CountryModel countryModel = getCommonI18NService().getCountry(country);
		addressDetails.setCountry(countryModel);
		addressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));

		accessRequestData.getRequesterId().setCompanyAddress(addressDetails);

		for (int i = 0; i < 3; i++) {
			matrixModel = fetchManualApproverAttributeKey(country, productLine, i);
			if (null != matrixModel) {
				break;
			}

		}
		accessRequestData.setApproverDetails(null != matrixModel ? matrixModel.getCsrApproverValue()
				: registerDao.getPlaceHolderMatrix(productLine).getCsrApproverValue());

		getModelService().save(accessRequestData);
		LOG.info("Updating Approver Details completed");
		return accessRequestData.getApproverDetails();

	}

	private void savingSAPRulesInDB(final BHGERegisterResponse sapCustomerEmailResponse, final String store)
			throws CMSItemNotFoundException, EmailException {
		try {
			LOG.info("Store Value in [Submit Register Request] : "+store);
			LOG.info("Saving SAPRules in DB");
			int counter = 0;
			final String DSS = Config.getParameter("register.appName.DSS");
			final String DAM = Config.getParameter("register.appName.DAM");
			// Added entry for ofs validation rules
			final String OFS = Config.getParameter("register.appName.OFS");


			for (final BHGERegisterRuleData eachRule : sapCustomerEmailResponse.getRuleMessageList()) {
				final BHGEUserAccessRulesModel userAccessRulesModel = getModelService()
						.create(BHGEUserAccessRulesModel.class);
				final Long result = sequence.get() + Long.parseLong(eachRule.getRuleCode());
				final Long result2 = sequence2.get() + Long.parseLong(eachRule.getRuleCode());
				// userAccessRulesModel.setUserAccessRuleId(result);
				if (store.equalsIgnoreCase(DSS)) {
					userAccessRulesModel.setUserAccessRuleId(result);
					userAccessRulesModel
							.setUserAccessRequest(registerDao.getUserAccessRequest(sequence.get().toString()));
				}
				if (store.equalsIgnoreCase(DAM)) {
					userAccessRulesModel.setUserAccessRuleId(result2);
					userAccessRulesModel
							.setUserAccessRequest(registerDao.getUserAccessRequest(sequence2.get().toString()));
				}
				// OFS Entry
				if(store.equalsIgnoreCase(OFS)){
					// Setting User Access Rule ID
					userAccessRulesModel.setUserAccessRuleId(result);
					userAccessRulesModel
							.setUserAccessRequest(registerDao.getUserAccessRequest(sequence.get().toString()));
				}

				// userAccessRulesModel.setUserAccessRequest(registerDao.getUserAccessRequest(sequence.get().toString()));
				userAccessRulesModel.setAppAccessRuleDetails(eachRule.getRuleMessage());
				userAccessRulesModel
						.setRuleStatus(success.equalsIgnoreCase(eachRule.getRuleStatus()) ? BHGESAPRuleStatus.SUCCESS
								: BHGESAPRuleStatus.FAILURE);
				userAccessRulesModel.setRuleReasoning(eachRule.getRuleMessage());
				getModelService().save(userAccessRulesModel);
				counter++;
			}
			LOG.info("Country in access request coming from SAP");

			if (null != sapCustomerEmailResponse && null != sapCustomerEmailResponse.getCountry() && !sapCustomerEmailResponse.getCountry().isEmpty()) {
				final AddressModel addressDetails = getModelService().create(AddressModel.class);
				BHGEUserAccessRequestModel accessRequestData = getModelService()
						.create(BHGEUserAccessRequestModel.class);
				if (store.equalsIgnoreCase(DSS)) {
					accessRequestData = registerDao.fetchPreviousUserAccessRequest(sequence.get());
				}
				if (store.equalsIgnoreCase(DAM)) {
					accessRequestData = registerDao.fetchPreviousUserAccessRequest(sequence2.get());
				}
				if (store.equalsIgnoreCase(OFS)) {
					accessRequestData = registerDao.fetchPreviousUserAccessRequest(sequence.get());
				}
				// final BHGEUserAccessRequestModel accessRequestData =
				// registerDao.fetchPreviousUserAccessRequest(sequence.get());

				final CountryModel countryModel = getCommonI18NService()
						.getCountry(sapCustomerEmailResponse.getCountry());
				addressDetails.setCountry(countryModel);
				addressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
				final BHGERegieterCustomerModel customer = accessRequestData.getRequesterId();
				customer.setCompanyAddress(addressDetails);

				getModelService().save(customer);
			}

			LOG.info("Saving complete");
		} catch (final Exception ex) {
			LOG.error("MSG1511: Error in saving SAP rules in database with error message: " + ex.getMessage());

			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOG.info("registration.failure.MSG1511 " + Config.getParameter("registration.failure.MSG1511"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1511"), ex.getMessage(),
					sw.toString(), Arrays.asList("Response rule list size", "Country"),
					Arrays.asList(String.valueOf(sapCustomerEmailResponse.getRuleMessageList().size()),
							sapCustomerEmailResponse.getCountry()));

			throw new RuntimeException(message);
		}
	}

	@Override
	public void rfcFailureEmail(AbstractOrderModel entry) {
		if (entry != null) {
			try {
				LOG.error("MSG0000: Error in creating SAP Connection for RMA Order ");
				LOG.info("registration.failure.MSG0000 " + Config.getParameter("order.rfc.failure.MSG0000"));
				emailService.registerFailureMail(Config.getParameter("order.rfc.failure.MSG0000"),
						"Error in creating SAP Connection for RMA Order ",
						"Error in creating SAP Connection for RMA Order ",
						Arrays.asList("End User Number", "Return Location", "RMA Creation Date", "User Email"),
						Arrays.asList(entry.getEndCustomerRefNum(), entry.getReturnPO().get(0).getReturnLocation(),
								entry.getDate().toString(), entry.getOrderConfirmationEMail()));
			} catch (Exception e) {
				LOG.error("Exception occured while triggering RMA order RFC connection Failure email: MSG0000");
			}
		}
	}

	public BHGERegisterResponse registerSSOInLDAP(final BHGERegisterRequest requestData) throws CMSItemNotFoundException, EmailException {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		try {
			final boolean newRegOrUpdate=(null != requestData.getFormFlag() ? Boolean.valueOf(requestData.getFormFlag()) : true);
			BHGERegisterResponse ssoResponse=null;

			LOG.info("new user registration: " + newRegOrUpdate);
			if(newRegOrUpdate){
				ssoResponse = getBhgeregisteroidcintegrationService().createB2BSSO(requestData);
			}
			else{
				ssoResponse = getBhgeregisteroidcintegrationService().updateExistingUserInOKTA(requestData);
			}
			if (null != ssoResponse
					&& BhgeregisteroidcintegrationConstants.SSO_ALREADY_PRESENT_STATUS_CODE
					.equalsIgnoreCase(ssoResponse.getStatusCode())
					&& ssoResponse.getErrorMessage().contains(ErrorMessages.SSO_ID_ALREADY_PRESENT)) {
				response.setErrorMessage(ErrorMessages.SSO_ID_ALREADY_PRESENT);
				LOG.error("MSG1503: Error in Okta insertion with error message: " + ssoResponse.getErrorMessage());
				LOG.info("registration.failure.MSG1503 " + Config.getParameter("registration.failure.MSG1503"));
				emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1503"),
						"Error in Okta insertion with error message: " + ssoResponse.getErrorMessage(),
						"Error in Okta insertion with error message: " + ssoResponse.getErrorMessage(),
						Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()),
								StringEscapeUtils.escapeHtml4(requestData.getLastName()), requestData.getUserId(), requestData.getEmail()));

				return response;
			}
			if (null != ssoResponse && null != ssoResponse.getErrorMessage()) {
				boolean errrorMsg=ssoResponse.getErrorMessage().contains(ErrorMessages.PASSWORD_VALIDATION_FAILED);
				if(errrorMsg) {
					response.setErrorMessage(ssoResponse.getErrorMessage());
					LOG.error("MSG1503: Error in Okta insertion with error message: " + ssoResponse.getErrorMessage());
					LOG.info("registration.failure.MSG1503 " + Config.getParameter("registration.failure.MSG1503"));
					emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1503"),
							"Error in Okta insertion with error message:Password requirements were not met " + ssoResponse.getErrorMessage(),
							"Error in Okta insertion with error message:Password requirements were not met " + ssoResponse.getErrorMessage(),
							Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
							Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()),
									StringEscapeUtils.escapeHtml4(requestData.getLastName()), requestData.getUserId(), requestData.getEmail()));
					return response;
				}
			}

			if (null == ssoResponse || !"Sucess".equalsIgnoreCase(ssoResponse.getStatusCode())) {
				List<B2BCustomerModel> customer = registerDao.getUserByIdOrSSO(requestData.getUserId());
				if(CollectionUtils.isNotEmpty(customer)){
					LOG.info("Customer Already exists in DB: "+requestData.getUserId());
					response.setStatusDetails("SSO Registration Complete");
				} else {
					LOG.error("MSG1505: Error in Okta insertion with error message: " + ssoResponse);
					response.setErrorMessage(ErrorMessages.UNSUCCESSFUL_LDAP_SSO_CREATION);
					LOG.info("registration.failure.MSG1505 " + Config.getParameter("registration.failure.MSG1505"));
					if(requestData.getOfsCustomerAccNumber() != null && !requestData.getOfsCustomerAccNumber().isEmpty()) {
						emailService.registerOFSFailureMail(Config.getParameter("registration.failure.MSG1505"),
								"Error in Okta insertion with error message: " + ssoResponse,
								"Error in Okta insertion with error message: " + ssoResponse,requestData.getFirstName() +" "+
										requestData.getLastName(),requestData.getOfsCustomerAccNumber(),requestData.getEmail());
					}
					emailService
							.registerFailureMail(Config.getParameter("registration.failure.MSG1505"),
									"Error in Okta insertion with error message: " + ssoResponse,
									"Error in Okta insertion with error message: " + ssoResponse,
									Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
									Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()),
											StringEscapeUtils.escapeHtml4(requestData.getLastName()), requestData.getUserId(), requestData.getEmail()));
				}
				return response;
			}

			LOG.info("Finished SSO registration in LDAP");

			// sendSSORegisterMail(requestData);

			response.setStatusDetails("SSO Registration Complete");

		} catch (final Exception ex) {

			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);

			LOG.warn("MSG1509: Error in Okta Check.");
			ex.printStackTrace();

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOG.info("registration.failure.MSG1509 " + Config.getParameter("registration.failure.MSG1509"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1509"), ex.getMessage(),
					sw.toString(),
					Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
					Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()),
							StringEscapeUtils.escapeHtml4(requestData.getLastName()), requestData.getUserId(), requestData.getEmail()));

			throw new RuntimeException(message);

		}

		return response;
	}

	/**
	 * @param accessRequestResponse
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 *
	 */
	private void updatingAccessRequestWithErrorOutStatus(final BHGEUserAccessRequestModel accessRequestResponse)
			throws CMSItemNotFoundException, EmailException {
		try {
			if (null != accessRequestResponse) {
				accessRequestResponse
						.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.ERROR_OUT);
				getModelService().save(accessRequestResponse);
			}
		} catch (final Exception ex) {
			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);

			LOG.warn("MSG1520: Error while updating request with error out message.");

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOG.info(Config.getParameter("registration.failure.MSG1520.1"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1520.1"), ex.getMessage(),
					sw.toString(), Arrays.asList("Access Request Id", "First Name", "Last Name", "Email"),
					Arrays.asList(String.valueOf(accessRequestResponse.getAccessRequestId()),
							accessRequestResponse.getRequesterId().getGivenName(),
							accessRequestResponse.getRequesterId().getFamilyName(),
							accessRequestResponse.getRequesterId().getEmail()));

			throw new RuntimeException(message);

		}

	}

	/**
	 * @param requestData
	 *
	 */
	private void sendSSORegisterMail(final BHGERegisterRequest requestData) {
		try {
			getEmailService().registerMail("Customerautoapprove", requestData.getEmail(), requestData.getUserId(),
					requestData.getFirstName() + " " + requestData.getLastName(), null, null);
		} catch (final CMSItemNotFoundException e) {
			LOG.error("CMSItemNotFoundException found while triggering SSO registration email");
		} catch (final EmailException e) {
			LOG.error("EmailException found while triggering SSO registration email");
		}

	}

	/**
	 * @param requestData
	 * @param flag
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 *
	 */
	@SuppressWarnings("deprecation")
	/*
	 * private BHGEUserAccessRequestModel savingUserAccessRequestInitial(final
	 * BHGERegisterRequest requestData, final String flag) throws
	 * CMSItemNotFoundException, EmailException
	 */

	private List<BHGEUserAccessRequestModel> savingUserAccessRequestInitial(final BHGERegisterRequest requestData,
																			final String flag) throws CMSItemNotFoundException, EmailException
	{
		final String DSS = Config.getParameter("register.appName.DSS");
		final String DAM = Config.getParameter("register.appName.DAM");
		final String FPT = Config.getParameter("register.appName.FPT");
		final String IQM = Config.getParameter("register.appName.IQM");
		final String OFS = Config.getParameter("register.appName.OFS");
		final List<BHGEUserAccessRequestModel> accessRequestDataList = new ArrayList<BHGEUserAccessRequestModel>();
		final BHGEUserAccessRequestModel accessRequestData = getModelService().create(BHGEUserAccessRequestModel.class);
		final BHGEUserAccessRequestModel iqmaccessRequestData = getModelService()
				.create(BHGEUserAccessRequestModel.class);
		final BHGEUserAccessRequestModel damaccessRequestData = getModelService()
				.create(BHGEUserAccessRequestModel.class);
		// US8159: FPT Changes Start
		final BHGEUserAccessRequestModel fptaccessRequestData = getModelService()
				.create(BHGEUserAccessRequestModel.class);
		// US8159: FPT Changes End
		//ofs changes start here
		final BHGEUserAccessRequestModel ofsaccessRequestData = getModelService()
				.create(BHGEUserAccessRequestModel.class);
		//ofs changes start here
		BHGERegieterCustomerModel requestor = null;
		final BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);

		try {
			LOG.info("Saving User Access Request data in DB");
			sequence.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
			sequence1.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
			sequence2.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);

			// US8159: FPT Changes start
			sequence3.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
			// US8159: FPT Changes End
			//
			sequence4.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
			//
			final UserModel userExistsScenario = registerDao.getUserBySSO(requestData.getUserId());
			if (userExistsScenario != null) {
				requestor = (BHGERegieterCustomerModel) userExistsScenario;
			} else {
				requestor = getModelService().create(BHGERegieterCustomerModel.class);
			}
			requestor.setGivenName(requestData.getFirstName());
			requestor.setFamilyName(requestData.getLastName());
			requestor.setCompanyName(requestData.getCompanyName());
			if (requestData.getCustomerNumber() != null && requestData.getCustomerNumber().length() > 0) {
				requestor.setRequestCustomerId(precedingZeros.equalsIgnoreCase(requestData.getCustomerNumber()) ? null
						: removeZero(requestData.getCustomerNumber()));
			}
			//ofs
			if (requestData.getOfsCustomerAccNumber() != null && requestData.getOfsCustomerAccNumber().length() > 0) {
				requestor.setRequestCustomerId(precedingZeros.equalsIgnoreCase(requestData.getOfsCustomerAccNumber()) ? null
						: removeZero(requestData.getOfsCustomerAccNumber()));
			}
			//ofs

			if (requestData.getDamCustomerAccNumber() != null && requestData.getDamCustomerAccNumber().length() > 0) {
				requestor.setDamCustomerId(precedingZeros.equalsIgnoreCase(requestData.getDamCustomerAccNumber()) ? null
						: removeZero(requestData.getDamCustomerAccNumber()));
			}

			requestor.setSapContactID(requestData.getSapContactId());
			requestor.setSso(requestData.getUserId());
			requestor.setEmail(requestData.getEmail());
			requestor.setUid("BHGERegister_CustomerUID_" + sequence.get());
			requestor.setName(requestData.getFirstName() + " " + requestData.getLastName());
			requestor.setLoginDisabled(false);
			requestor.setDefaultB2BUnit(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
			requestor.setGovernmentOrg("on".equalsIgnoreCase(requestData.getGovtOrg()));
			// requestor.setProductLine(registerDao.fetchProductLine(requestData.getProductLine()));
			requestor.setActiveStatus(false);

			if (requestData.getAppList().contains(DSS)) {
				accessRequestData.setAccessRequestId(sequence.get());
				accessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
				accessRequestData.setRequesterId(requestor);
				accessRequestData.setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
				accessRequestData.setApproverDetails(registerDao.getSystemApproverDetails());
				accessRequestData.setLinkedWithRegister(true);

				getModelService().save(accessRequestData);
				accessRequestDataList.add(accessRequestData);
			}
			//
			if (requestData.getAppList().contains(OFS)) {
				ofsaccessRequestData.setAccessRequestId(sequence.get());
				ofsaccessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
				ofsaccessRequestData.setRequesterId(requestor);
				ofsaccessRequestData.setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
				ofsaccessRequestData.setApproverDetails(registerDao.getOFSApproverDetails());
				ofsaccessRequestData.setLinkedWithRegister(true);

				getModelService().save(ofsaccessRequestData);
				accessRequestDataList.add(ofsaccessRequestData);
			}
			//
			if (requestData.getAppList().contains(IQM)) {
				iqmaccessRequestData.setAccessRequestId(sequence1.get());
				iqmaccessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
				iqmaccessRequestData.setRequesterId(requestor);
				iqmaccessRequestData.setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
				iqmaccessRequestData.setApproverDetails(getIqmApproverDetails(requestData));
				// iqmaccessRequestData.setApproverDetails(registerDao.getSystemApproverDetails());
				iqmaccessRequestData.setLinkedWithRegister(true);

				getModelService().save(iqmaccessRequestData);
				accessRequestDataList.add(iqmaccessRequestData);
			}
			if (requestData.getAppList().contains(DAM)) {
				damaccessRequestData.setAccessRequestId(sequence2.get());
				damaccessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
				damaccessRequestData.setRequesterId(requestor);
				damaccessRequestData.setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
				damaccessRequestData.setApproverDetails(getDAMApproverDetails(requestData));
				damaccessRequestData.setLinkedWithRegister(true);

				getModelService().save(damaccessRequestData);
				accessRequestDataList.add(damaccessRequestData);
			}

			// US8159: FPT Valv store Changes start
			if (requestData.getAppList().contains(FPT)) {
				if (requestData.getFptCustomerAccNumber() != null) {
					final BHGERegisterKeyValueDataModel roles = registerDao.fetchFptRoleDetails(requestData.getFptRole());
					requestor.setFptRoles(roles);
					requestor.setRequestCustomerId(requestData.getFptCustomerAccNumber());
					if (CollectionUtils.isNotEmpty(requestData.getFptLegalEntities())) {
						requestor.setFptLegalEntity(requestData.getFptLegalEntities());
					}

					final List<String> salesTextList = new ArrayList();
					final List<String> salesTxtList = new ArrayList();
					for (final String legalSales : requestData.getFptLegalEntities()) {
						final BHGERegisterKeyValueDataModel salesText = registerDao.fetchFptSalesDetails(legalSales);
						salesTextList.add(salesText.getAttributeKey());
					}
					for (String salesTxt : salesTextList) {
						if (salesTxt.contains(" ")) {
							salesTxt = salesTxt.substring(0, salesTxt.indexOf(" "));
						}
						salesTxtList.add(salesTxt);
					}
					requestor.setFptSaleAreaText(salesTxtList);

					fetchFPTCustAccessRequestData(requestData, fptaccessRequestData, requestor);
					getModelService().save(fptaccessRequestData);
					accessRequestDataList.add(fptaccessRequestData);

				} else {
					final List<BHGERegisterKeyValueDataModel> productLineList = new ArrayList<>();
					final List<String> prodLineListStr = requestData.getFptProductLine();
					for (final String s : prodLineListStr)
					{
						final BHGERegisterKeyValueDataModel keyValueDataModel = registerDao.fetchFptProdLineDetails(s);
						productLineList.add(keyValueDataModel);
					}
					requestor.setFptProductLine(productLineList);
					List<BHGERegisterKeyValueDataModel> legalEntityList = new ArrayList<>();
					final List<String> fptLegalEntityListStr = requestData.getFptLegalEntities();
					for (final String s : fptLegalEntityListStr)
					{
						final BHGERegisterKeyValueDataModel keyValueDataModel = registerDao.fetchFptLegalEntityDetails(s);
						legalEntityList.add(keyValueDataModel);
					}
					requestor.setFptLegalEntities(legalEntityList);
					for(BHGERegisterKeyValueDataModel fptEntity : requestor.getFptLegalEntities())
					{
						final BHGEUserAccessRequestModel vsAccessRequestData = savingUserAccessRequest(requestData, requestor, fptEntity);
						accessRequestDataList.add(vsAccessRequestData);
					}
				}
			}
			// US8159: FPT Valv store Changes End

			if ("withOutCustomer".equalsIgnoreCase(flag)) {
				final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
				// if M&C store is selected
				if (requestData.getAppList().contains(DSS)) {
					requestor.setProductLine(registerDao.fetchProductLine(requestData.getProductLine()));
					if(CollectionUtils.isNotEmpty(requestData.getSubProductLine())){
						requestor.setSubProductLine(registerDao.fetchNewAttrList(requestData.getSubProductLine()));
					}
					if(requestData.getDsRole() != null) {
						requestor.setDsRole(requestData.getDsRole());
					}
					if(CollectionUtils.isNotEmpty(requestData.getDsMarket())) {
						requestor.setDsMarket(registerDao.fetchNewAttrList(requestData.getDsMarket()));
					}
					if(CollectionUtils.isNotEmpty(requestData.getDsAccountType())) {
						requestor.setDsAccountType(registerDao.fetchNewAttrList(requestData.getDsAccountType()));
					}
					final AddressModel addressDetails = getModelService().create(AddressModel.class);
					final CountryModel countryModel = getCommonI18NService()
							.getCountry(registerDao.fetchIsoCode(requestData.getCountry()).toUpperCase());

					addressDetails.setCountry(countryModel);
					addressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
					addressDetails.setCompany(requestData.getCompanyName());

					addressDetails.setLine1(requestData.getCompanyAddressLine1());
					addressDetails.setLine2(requestData.getCompanyAddressLine2());
					addressDetails.setPostalcode(requestData.getPostalCode());
					addressDetails.setDistrict(requestData.getStateProvince());
					addressDetails.setTown(requestData.getTown());
					LOG.info("Waygate changes starts");
					if(requestData.getProductLine().toLowerCase().contains("waygate")) {
						requestor.setEndCustomer(requestData.getEndCustomer());
						requestor.setGovernmentEntity(requestData.getGovernmentEntity());
						if (requestData.getDetailNumber() != null)
							requestor.setDetailNumber(enumerationService.getEnumerationValue(DetailNumber.class, requestData.getDetailNumber()));
						if (requestData.getAddressType() != null)
							requestor.setAddressType(enumerationService.getEnumerationValue(AddressType.class, requestData.getAddressType()));
						if (requestData.getDetailNumberValue() != null)
							requestor.setDetailNumberValue(requestData.getDetailNumberValue());
						if (StringUtils.isNotBlank(requestData.getAddressProof())) {
							LOG.info("Inside Address Proof check");
							requestor.setAddressProof(mediaService.getMedia(versions, requestData.getAddressProof()));
						}
						if (StringUtils.isNotBlank(requestData.getOwnershipStructure())) {
							LOG.info("Inside Owner Ship check");
							requestor.setOwnershipStructure(mediaService.getMedia(versions, requestData.getOwnershipStructure()));
						}
					}
					LOG.info("Waygate changes end");
					requestor.setCompanyAddress(addressDetails);
				}
				//Ofs changes
				if (requestData.getAppList().contains(OFS)) {
					//requestor.setProductLine(registerDao.fetchProductLine(requestData.getProductLine()));
					requestor.setOfsAccountType(registerDao.fetchOfsAccountType(requestData.getOfsAccountType()));
					final AddressModel ofsAddressDetails = getModelService().create(AddressModel.class);
					final CountryModel ofsCountryModel = getCommonI18NService()
							.getCountry(registerDao.fetchIsoCode(requestData.getOfsCountry()).toUpperCase());

					ofsAddressDetails.setCountry(ofsCountryModel);
					ofsAddressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
					ofsAddressDetails.setCompany(requestData.getOfsCompanyName());

					ofsAddressDetails.setLine1(requestData.getOfsCompanyAddressLine1());
					ofsAddressDetails.setLine2(requestData.getOfsCompanyAddressLine2());
					ofsAddressDetails.setPostalcode(requestData.getOfsPostalCode());
					ofsAddressDetails.setDistrict(requestData.getOfsStateProvince());
					ofsAddressDetails.setTown(requestData.getOfsTown());
					requestor.setCompanyAddress(ofsAddressDetails);
				}

				//Ofs changes

				// if IQM Application is selected
				if (requestData.getAppList().contains(IQM)) {
					requestor.setIqmProductLine(registerDao.fetchProductLine(requestData.getIqmProductLine()));
					final AddressModel iqmAddressDetails = getModelService().create(AddressModel.class);
					final CountryModel iqmCountryModel = getCommonI18NService()
							.getCountry(registerDao.fetchIsoCode(requestData.getIqmCountry()).toUpperCase());
					iqmAddressDetails.setCountry(iqmCountryModel);
					iqmAddressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
					iqmAddressDetails.setCompany(requestData.getIqmCompanyName());
					iqmAddressDetails.setLine1(requestData.getIqmCompanyAddressLine1());
					iqmAddressDetails.setLine2(requestData.getIqmCompanyAddressLine2());
					iqmAddressDetails.setPostalcode(requestData.getIqmPostalCode());
					iqmAddressDetails.setDistrict(requestData.getIqmStateProvince());
					iqmAddressDetails.setTown(requestData.getIqmTown());
					requestor.setIqmCompanyAddress(iqmAddressDetails);
					requestor.setIqmDunsNumber(requestData.getDuns());
					requestor.setIqmRegion(getIQMRegion(requestData));
				}

				if (requestData.getAppList().contains(DAM)) {

					requestor.setDamProductLine(registerDao.fetchProductLine(requestData.getDamProductLine()));

					if (null != requestData.getDamCustomerAccNumber()
							&& !requestData.getDamCustomerAccNumber().isEmpty()) {
						final BHGEAccountDataModel accountData = (BHGEAccountDataModel) getModelService()
								.create(BHGEAccountDataModel.class);
						accountData.setAccountNumber(removeZero(requestData.getDamCustomerAccNumber()));
						accountData.setAccountName(removeZero(requestData.getDamCustomerAccNumber()));

						final BHGEAccountDataModel fetchedAccountData = registerDao
								.getAccountData(removeZero(requestData.getDamCustomerAccNumber()));

						if (null == fetchedAccountData) {
							getModelService().save(accountData);
						}

						LOG.info("Saving BHGE Account data complete");

						List<BHGEAccountDataModel> listAccounts = CollectionUtils.isNotEmpty(
								requestor.getBhgeAccounts()) ? requestor.getBhgeAccounts() : new ArrayList<>();
						Set<BHGEAccountDataModel> setOfBhgeAccounts = new HashSet<BHGEAccountDataModel>();
						setOfBhgeAccounts.addAll(listAccounts);
						setOfBhgeAccounts
								.add(registerDao.getAccountData(removeZero(requestData.getDamCustomerAccNumber())));
						requestor.setBhgeAccounts(setOfBhgeAccounts.stream().collect(Collectors.toList()));
					} else {
						final AddressModel damAddressDetails = getModelService().create(AddressModel.class);
						final CountryModel damCountryModel = getCommonI18NService()
								.getCountry(registerDao.fetchIsoCode(requestData.getDamCountry()).toUpperCase());
						damAddressDetails.setCountry(damCountryModel);
						damAddressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
						damAddressDetails.setCompany(requestData.getDamCompanyName());
						damAddressDetails.setLine1(requestData.getDamCompanyAddressLine1());
						damAddressDetails.setLine2(requestData.getDamCompanyAddressLine2());
						damAddressDetails.setPostalcode(requestData.getDamPostalCode());
						damAddressDetails.setDistrict(requestData.getDamStateProvince());
						damAddressDetails.setTown(requestData.getDamTown());
						requestor.setDamCompanyAddress(damAddressDetails);
					}
				}

				// US8159: if FPT Valv store store is selected start
				if (requestData.getAppList().contains(FPT)) {
					final List<BHGERegisterKeyValueDataModel> productLineList = new ArrayList<>();
					final List<String> prodLineListStr = requestData.getFptProductLine();
					for (final String s : prodLineListStr) {
						final BHGERegisterKeyValueDataModel keyValueDataModel = registerDao.fetchFptProdLineDetails(s);
						productLineList.add(keyValueDataModel);
					}
					requestor.setFptProductLine(productLineList);

					final List<BHGERegisterKeyValueDataModel> legalEntityList = new ArrayList<>();
					final List<String> fptLegalEntityListStr = requestData.getFptLegalEntities();
					for (final String s : fptLegalEntityListStr) {
						final BHGERegisterKeyValueDataModel keyValueDataModel = registerDao
								.fetchFptLegalEntityDetails(s);

						legalEntityList.add(keyValueDataModel);
					}
					requestor.setFptLegalEntities(legalEntityList);
					final BHGERegisterKeyValueDataModel roles = registerDao.fetchFptRoleDetails(requestData.getFptRole());
					requestor.setFptRoles(roles);
					final AddressModel addressDetails = setFptAddressForRequest(requestData);
					requestor.setCompanyAddress(addressDetails);
					getModelService().save(requestor);
				}
				// US8159: if FPT Valv store is selected end

				getModelService().save(requestor);

			}

			else if ("withCustomer".equalsIgnoreCase(flag)) {
				requestor.setProductLine(registerDao.fetchProductLine(requestData.getProductLine()));

				if (requestData.getAppList().contains(DSS)) {
					if(CollectionUtils.isNotEmpty(requestData.getSubProductLine())){
						requestor.setSubProductLine(registerDao.fetchNewAttrList(requestData.getSubProductLine()));
					}
					if(requestData.getDsRole() != null) {
						requestor.setDsRole(requestData.getDsRole());
					}
					if(CollectionUtils.isNotEmpty(requestData.getDsMarket())) {
						requestor.setDsMarket(registerDao.fetchNewAttrList(requestData.getDsMarket()));
					}
					if(CollectionUtils.isNotEmpty(requestData.getDsAccountType())) {
						requestor.setDsAccountType(registerDao.fetchNewAttrList(requestData.getDsAccountType()));
					}
					if (requestData.getCustomerNumber() == null) {
						requestor.setProductLine(registerDao.fetchProductLine(requestData.getProductLine()));
						final AddressModel addressDetails = getModelService().create(AddressModel.class);
						final CountryModel countryModel = getCommonI18NService()
								.getCountry(registerDao.fetchIsoCode(requestData.getCountry()).toUpperCase());

						addressDetails.setCountry(countryModel);
						addressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
						addressDetails.setCompany(requestData.getCompanyName());

						addressDetails.setLine1(requestData.getCompanyAddressLine1());
						addressDetails.setLine2(requestData.getCompanyAddressLine2());
						addressDetails.setPostalcode(requestData.getPostalCode());
						addressDetails.setDistrict(requestData.getStateProvince());
						addressDetails.setTown(requestData.getTown());
						requestor.setCompanyAddress(addressDetails);
					}
				}
				//Ofs changes
				if (requestData.getAppList().contains(OFS)) {

					//requestor.setProductLine(registerDao.fetchProductLine(requestData.getProductLine()));
					//requestor.setOfsAccountType(registerDao.fetchOfsAccountType(requestData.getOfsAccountType()));
					final AddressModel ofsAddressDetails = getModelService().create(AddressModel.class);
//						final CountryModel ofsCountryModel = getCommonI18NService()
//								.getCountry(registerDao.fetchIsoCode(requestData.getOfsCountry()).toUpperCase());

//						ofsAddressDetails.setCountry(ofsCountryModel);
					ofsAddressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
					ofsAddressDetails.setCompany(requestData.getOfsCompanyName());

					ofsAddressDetails.setLine1(requestData.getOfsCompanyAddressLine1());
					ofsAddressDetails.setLine2(requestData.getOfsCompanyAddressLine2());
					ofsAddressDetails.setPostalcode(requestData.getOfsPostalCode());
					ofsAddressDetails.setDistrict(requestData.getOfsStateProvince());
					ofsAddressDetails.setTown(requestData.getOfsTown());
					requestor.setCompanyAddress(ofsAddressDetails);

				}
				//Ofs changes

				// if IQM Application is selected
				if (requestData.getAppList().contains(IQM)) {
					requestor.setIqmProductLine(registerDao.fetchProductLine(requestData.getIqmProductLine()));
					final AddressModel iqmAddressDetails = getModelService().create(AddressModel.class);
					final CountryModel iqmCountryModel = getCommonI18NService()
							.getCountry(registerDao.fetchIsoCode(requestData.getIqmCountry()).toUpperCase());
					iqmAddressDetails.setCountry(iqmCountryModel);
					iqmAddressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
					iqmAddressDetails.setCompany(requestData.getIqmCompanyName());

					iqmAddressDetails.setLine1(requestData.getIqmCompanyAddressLine1());
					iqmAddressDetails.setLine2(requestData.getIqmCompanyAddressLine2());
					iqmAddressDetails.setPostalcode(requestData.getIqmPostalCode());
					iqmAddressDetails.setDistrict(requestData.getIqmStateProvince());
					iqmAddressDetails.setTown(requestData.getIqmTown());
					requestor.setIqmCompanyAddress(iqmAddressDetails);
					requestor.setIqmDunsNumber(requestData.getDuns());
					requestor.setIqmRegion(getIQMRegion(requestData));
				}
				final BHGEAccountDataModel accountData = (BHGEAccountDataModel) getModelService()
						.create(BHGEAccountDataModel.class);

				accountData.setAccountNumber(removeZero(requestData.getCustomerNumber()));
				accountData.setAccountName(removeZero(requestData.getCustomerNumber()));

				final BHGEAccountDataModel fetchedAccountData = registerDao
						.getAccountData(removeZero(requestData.getCustomerNumber()));

				if (null == fetchedAccountData) {
					getModelService().save(accountData);
				}

				LOG.info("Saving BHGE Account data complete");

				List<BHGEAccountDataModel> listAccounts = CollectionUtils.isNotEmpty(requestor.getBhgeAccounts())
						? requestor.getBhgeAccounts()
						: new ArrayList<>();

				Set<BHGEAccountDataModel> setOfBhgeAccounts = new HashSet<BHGEAccountDataModel>();
				setOfBhgeAccounts.addAll(listAccounts);
				setOfBhgeAccounts.add(registerDao.getAccountData(removeZero(requestData.getCustomerNumber())));
				requestor.setBhgeAccounts(setOfBhgeAccounts.stream().collect(Collectors.toList()));

				if (requestData.getAppList().contains(DAM)) {
					requestor.setDamProductLine(registerDao.fetchProductLine(requestData.getDamProductLine()));

					if (null != requestData.getDamCustomerAccNumber()
							&& !requestData.getDamCustomerAccNumber().isEmpty()) {
						final BHGEAccountDataModel damaccountData = (BHGEAccountDataModel) getModelService()
								.create(BHGEAccountDataModel.class);

						accountData.setAccountNumber(removeZero(requestData.getDamCustomerAccNumber()));
						accountData.setAccountName(removeZero(requestData.getDamCustomerAccNumber()));

						final BHGEAccountDataModel fetchedDamAccountData = registerDao
								.getAccountData(removeZero(requestData.getDamCustomerAccNumber()));

						if (null == fetchedDamAccountData) {
							getModelService().save(damaccountData);
						}

						LOG.info("Saving BHGE Account data complete");

						List<BHGEAccountDataModel> damlistAccounts = CollectionUtils.isNotEmpty(
								requestor.getBhgeAccounts()) ? requestor.getBhgeAccounts() : new ArrayList<>();
						Set<BHGEAccountDataModel> setOfDamBhgeAccounts = new HashSet<BHGEAccountDataModel>();
						setOfDamBhgeAccounts.addAll(damlistAccounts);
						setOfDamBhgeAccounts
								.add(registerDao.getAccountData(removeZero(requestData.getDamCustomerAccNumber())));
						requestor.setBhgeAccounts(setOfDamBhgeAccounts.stream().collect(Collectors.toList()));
					} else {
						final AddressModel damAddressDetails = getModelService().create(AddressModel.class);
						final CountryModel damCountryModel = getCommonI18NService()
								.getCountry(registerDao.fetchIsoCode(requestData.getDamCountry()).toUpperCase());
						damAddressDetails.setCountry(damCountryModel);
						damAddressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
						damAddressDetails.setCompany(requestData.getDamCompanyName());
						damAddressDetails.setLine1(requestData.getDamCompanyAddressLine1());
						damAddressDetails.setLine2(requestData.getDamCompanyAddressLine2());
						damAddressDetails.setPostalcode(requestData.getDamPostalCode());
						damAddressDetails.setDistrict(requestData.getDamStateProvince());
						damAddressDetails.setTown(requestData.getDamTown());
						requestor.setIqmCompanyAddress(damAddressDetails);
					}
				}

				// US8159: FPT Valv store Changes start

				if (requestData.getAppList().contains(FPT)) {
					final BHGERegisterKeyValueDataModel roles = registerDao
							.fetchFptRoleDetails(requestData.getFptRole());
					requestor.setFptRoles(roles);
					requestor.setRequestCustomerId(requestData.getFptCustomerAccNumber());
					getModelService().save(requestor);
				}

				// US8159: FPT Valv store Changes End

				getModelService().save(requestor);

				LOG.info("Appending Customer account list in customerData Complete");

			}

			LOG.info("Saving User Access Request Initial complete");
		} catch (final Exception ex) {

			LOG.error("MSG1510: Error in saving intial user access request with error message: " + ex.getMessage());

			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOG.info("registration.failure.MSG1510 " + Config.getParameter("registration.failure.MSG1510"));
			if (requestData.getAppList().contains(DSS) || requestData.getAppList().contains(DAM)
					|| requestData.getAppList().contains(IQM)) {
				emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1510"), ex.getMessage(),
						sw.toString(), Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()),
								StringEscapeUtils.escapeHtml4(requestData.getLastName()), requestData.getUserId(), requestData.getEmail()));
			}
			if (requestData.getAppList().contains(FPT)) {
				emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1510"),
						ex.getMessage(), sw.toString(),
						Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(requestData.getCustomerNumber(), requestData.getFirstName(),
								requestData.getLastName(), requestData.getUserId(), requestData.getEmail()));
			}
			throw new RuntimeException(message);
		}

		// return accessRequestData;
		return accessRequestDataList;

	}

	private BHGEUserAccessRequestModel savingUserAccessRequest(final BHGERegisterRequest requestData, final BHGERegieterCustomerModel requestor,
															   final BHGERegisterKeyValueDataModel fptEntity)
	{
		final BHGEUserAccessRequestModel fptaccessRequestData = getModelService().create(BHGEUserAccessRequestModel.class);
		sequence3.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);

		final BHGERegisterKeyValueDataModel roles = registerDao.fetchFptRoleDetails(requestData.getFptRole());
		requestor.setFptRoles(roles);

		final AddressModel fptAddressDetails = setFptAddressForRequest(requestData);
		requestor.setCompanyAddress(fptAddressDetails);

		fetchFPTAccessRequestData(requestData, fptaccessRequestData, requestor, fptEntity);
		LOG.info("fptaccessRequestData----" + fptaccessRequestData.getAccessRequestId());
		LOG.info("RequesterId----" + fptaccessRequestData.getRequesterId().getSso());
		getModelService().save(fptaccessRequestData);
		return fptaccessRequestData;
	}


	/* FPT Valv store Changes start */
	/**
	 * @param requestData
	 * @param fptaccessRequestData
	 * @param requestor
	 */
	private void fetchFPTCustAccessRequestData(final BHGERegisterRequest requestData,
											   final BHGEUserAccessRequestModel fptaccessRequestData, final BHGERegieterCustomerModel requestor) {
		// XXX Auto-generated method stub
		fptaccessRequestData.setAccessRequestId(sequence3.get());
		fptaccessRequestData
				.setAccessRequestSource(com.bhge.register.webservices.enums.BHGEAccessRequestSource.REGISTER_MICROSITE);
		fptaccessRequestData.setRequesterId(requestor);
		fptaccessRequestData
				.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_ACTIVATION);// setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
		// fptaccessRequestData.setApproverDetails(getFPTApproverDetails(requestData));
		fptaccessRequestData.setLinkedWithRegister(true);

		try {
			getDataForLegalEntity(fptaccessRequestData, requestor);
		} catch (final CMSItemNotFoundException e) {
			// XXX Auto-generated catch block
			e.printStackTrace();
		}

		LOG.info("Inside fetchFPTAccessRequestData: CLOSE - " + requestor.getSso());

	}

	/**
	 * @param fptaccessRequestData
	 * @param requestor
	 */
	private void getDataForLegalEntity(final BHGEUserAccessRequestModel fptaccessRequestData,
									   final BHGERegieterCustomerModel requestor) throws CMSItemNotFoundException {
		// XXX Auto-generated method stub

		final Set<BHGEApprovalDetailsModel> approverDetailsList = new HashSet<>();
		for (int j = 0; j < requestor.getFptLegalEntity().size(); j++)
		{
			BHGEApprovalDetailsModel model = updatingDetailsForCustFpt(((List<String>) requestor.getFptLegalEntity()).get(j),fptaccessRequestData, requestor);
			if (model != null)
			{
				approverDetailsList.add(model);
			}
		}
		fptaccessRequestData.setFptApproverDetailsList(approverDetailsList);
		fptaccessRequestData.setBhgeApprovals(approverDetailsList.stream().collect(Collectors.toList()));
	}

	/**
	 * @param bhgeRegisterKeyValueDataModel
	 * @param fptaccessRequestData
	 * @param fptRoles
	 * @return
	 */
	private BHGEApprovalDetailsModel updatingDetailsForCustFpt(final String legalEnt,
															   final BHGEUserAccessRequestModel fptaccessRequestData, final BHGERegieterCustomerModel requestor) {
		// XXX Auto-generated method stub
		LOG.info("Inside updatingDetails: START");
		try {
			LOG.info("LegalEntity details:---"+legalEnt);
			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
			matrixModel = registerDao.fetchManualApproverForFpt(legalEnt, requestor);
			if (matrixModel != null && matrixModel.getCsrApproverValue() != null) {
				fptaccessRequestData.setApproverDetails(matrixModel.getCsrApproverValue());
				fptaccessRequestData.setLinkedWithRegister(true);
				getModelService().save(fptaccessRequestData);
			}
			else
			{
				matrixModel = registerDao.fetchFptSystemApproval();
				fptaccessRequestData.setApproverDetails(matrixModel.getCsrApproverValue());
				fptaccessRequestData.setLinkedWithRegister(true);
				getModelService().save(fptaccessRequestData);
			}
			LOG.info("Inside updatingDetails: CLOSE");
			return fptaccessRequestData.getApproverDetails();
		} catch (final Exception e) {
			LOG.error("MSG1519: Error in updating details in database for without customer number scenario: "
					+ e.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			e.printStackTrace(pw);
			LOG.info("registration.failure.MSG1519 " + Config.getParameter("registration.failure.MSG1519"));
			emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1519"), e.getMessage(),
					sw.toString(), Arrays.asList("Email", "Last Name", "First Name", "User Id"),
					Arrays.asList(fptaccessRequestData.getRequesterId().getEmail(),
							fptaccessRequestData.getRequesterId().getFamilyName(),
							fptaccessRequestData.getRequesterId().getGivenName(),
							fptaccessRequestData.getRequesterId().getSso()));
		}
		return fptaccessRequestData.getApproverDetails();
	}

	/* FPT Valv store Changes end */
	// US8159: FPT Valv store changes start
	/**
	 * @param requestData
	 * @param fptaccessRequestData
	 * @param requestor
	 */
	private void fetchFPTAccessRequestData(final BHGERegisterRequest requestData,
										   final BHGEUserAccessRequestModel fptaccessRequestData, final BHGERegieterCustomerModel requestor, final BHGERegisterKeyValueDataModel fptEntity) {
		fptaccessRequestData.setAccessRequestId(sequence3.get());
		LOG.info("AccessRequestId fetchFPTAccessRequestData: - " + fptaccessRequestData.getAccessRequestId());
		fptaccessRequestData
				.setAccessRequestSource(com.bhge.register.webservices.enums.BHGEAccessRequestSource.REGISTER_MICROSITE);
		fptaccessRequestData.setRequesterId(requestor);

		LOG.info("RequesterId fetchFPTAccessRequestData: - " + fptaccessRequestData.getRequesterId());
		fptaccessRequestData
				.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_ACTIVATION);// setRequestStatus(BHGEAccessRequestStatus.PENDING_ACTIVATION);
		// fptaccessRequestData.setApproverDetails(getFPTApproverDetails(requestData));
		fptaccessRequestData.setLinkedWithRegister(true);
		getDataForProductLine(fptaccessRequestData, requestor, fptEntity);

		LOG.info("Inside fetchFPTAccessRequestData: CLOSE - " + requestor.getSso());

	}

	/**
	 * @param requestor
	 * @param accessRequestData
	 * @param productLineList
	 * @param model
	 * @param i
	 * @return
	 */

	private void getDataForProductLine(final BHGEUserAccessRequestModel fptaccessRequestData,
									   final BHGERegieterCustomerModel requestor, final BHGERegisterKeyValueDataModel fptEntity) {
		BHGEApprovalDetailsModel model = null;

		final Set<BHGEApprovalDetailsModel> approverDetailsList = new HashSet<>();

		/*
		 * for (int j = 0; j < requestor.getFptLegalEntities().size(); j++) { try {
		 * if(salesEntity==null){ model =
		 * updatingDetailsForFpt(((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j), fptaccessRequestData, requestor);
		 * salesEntity=((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j).getAttributeId();
		 * LOG.info("salesEntity--" + salesEntity); } else
		 * if(!salesEntity.equalsIgnoreCase(((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j).getAttributeId())) { model =
		 * updatingDetailsForFpt(((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j), fptaccessRequestData, requestor);
		 * salesEntity1=((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j).getAttributeId();
		 * LOG.info("salesEntity1--" + salesEntity1); } else
		 * if(!salesEntity.equalsIgnoreCase(((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j).getAttributeId()) &&
		 * !salesEntity1.equalsIgnoreCase(((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j).getAttributeId())) { model =
		 * updatingDetailsForFpt(((List<BHGERegisterKeyValueDataModel>)
		 * requestor.getFptLegalEntities()).get(j), fptaccessRequestData, requestor);
		 * salesEntity=null; salesEntity1=null; } if(model!=null){
		 * approverDetailsLsit.add(model); } } catch (CMSItemNotFoundException |
		 * EmailException e) { // XXX Auto-generated catch block
		 * LOG.error("Error setting approver details"); } }
		 */
		try {
			model = updatingDetailsForFpt(fptEntity, fptaccessRequestData, requestor);
		} catch (Exception e) {
			LOG.info("Error in fetching the CSRApprover for Customer " + e.getMessage());
			e.printStackTrace();
		}
		approverDetailsList.add(model);
		fptaccessRequestData.setFptApproverDetailsList(approverDetailsList);
		fptaccessRequestData.setBhgeApprovals(approverDetailsList.stream().collect(Collectors.toList()));
	}

	private BHGEApprovalDetailsModel updatingDetailsForFpt(final BHGERegisterKeyValueDataModel legalEntities,
														   final BHGEUserAccessRequestModel accessRequestData, final BHGERegieterCustomerModel requestor)
			throws CMSItemNotFoundException, EmailException {
		LOG.info("Inside updatingDetails: START");
		try {
			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
			matrixModel = registerDao.fetchManualApproverForFpt(legalEntities.getAttributeId(), requestor);
			/*
			 * for (int i = 0; i < 3; i++) { matrixModel =
			 * fetchManualApproverForFpt(legalEntities.getAttributeId(), i, requestor); if
			 * (null != matrixModel) { break; } }
			 */
			if (matrixModel != null && matrixModel.getCsrApproverValue() != null) {
				LOG.warn("Inside updatingDetailsForFpt for - " + legalEntities.getAttributeId());
				LOG.info("Csr Approval Details--"+ matrixModel.getCsrApproverValue());
				accessRequestData.setApproverDetails(matrixModel.getCsrApproverValue());
				accessRequestData.setLinkedWithRegister(true);
				getModelService().save(accessRequestData);
			}
			else
			{
				matrixModel = registerDao.fetchFptSystemApproval();
				accessRequestData.setApproverDetails(matrixModel.getCsrApproverValue());
				accessRequestData.setLinkedWithRegister(true);
				getModelService().save(accessRequestData);
			}
			/*
			 * LOG.info("Csr Approval Details--"+ matrixModel.getCsrApproverValue());
			 * accessRequestData.setApproverDetails( null != matrixModel &&
			 * matrixModel.getCsrApproverValue() != null ? matrixModel.getCsrApproverValue()
			 * : registerDao.getPlaceHolderMatrix(legalEntities.getAttributeKey()).
			 * getCsrApproverValue()); accessRequestData.setLinkedWithRegister(true);
			 * getModelService().save(accessRequestData);
			 */

			LOG.info("Inside updatingDetails: CLOSE");
			return accessRequestData.getApproverDetails();
		} catch (final Exception ex) {
			LOG.error("MSG1519: Error in updating details in database for without customer number scenario: "
					+ ex.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOG.info("registration.failure.MSG1519 " + Config.getParameter("registration.failure.MSG1519"));
			emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1519"), ex.getMessage(),
					sw.toString(), Arrays.asList("Email", "Last Name", "First Name", "User Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(),
							accessRequestData.getRequesterId().getFamilyName(),
							accessRequestData.getRequesterId().getGivenName(),
							accessRequestData.getRequesterId().getSso()));
		}

		return accessRequestData.getApproverDetails();
	}

	/*
	 * private BHGEMnCEcommMatrixModel fetchManualApproverForFpt(final String
	 * legalEntities, final int counter, final BHGERegieterCustomerModel requestor)
	 * { if (counter == 0) { return
	 * registerDao.fetchManualApproverForFpt(legalEntities, requestor); } return
	 * null; }
	 */

	/**
	 * @param requestData
	 * @return
	 */
	private AddressModel setFptAddressForRequest(final BHGERegisterRequest requestData) {
		final AddressModel addressDetails = getModelService().create(AddressModel.class);
		final CountryModel countryModel = getCommonI18NService()
				.getCountry(registerDao.fetchIsoCode(requestData.getFptCountry()).toUpperCase());

		addressDetails.setCountry(countryModel);
		addressDetails.setOwner(getDefaultB2BUnitService().findUnitByUid(bhgeRegister));
		addressDetails.setCompany(requestData.getFptCompanyName());

		addressDetails.setLine1(requestData.getFptCompanyAddressLine1());
		addressDetails.setLine2(requestData.getFptCompanyAddressLine2());
		addressDetails.setPostalcode(requestData.getFptPostalCode());
		addressDetails.setDistrict(requestData.getFptStateProvince());
		addressDetails.setTown(requestData.getFptTown());

		return addressDetails;
	}
	// US8159: FPT Valvstore changes End

	/* Anish POST */
	@Override
	public boolean submitAccessRequest(final String role, final String comment, final String uid) {
		final String reqRole = role;
		final String userComment = comment;
		final String user_id = uid;
		final String approver_id;
		switch (role) {
			case "UG_VIEW_STORE":
				approver_id = "503";
				break;
			case "UG_ORDER_TRACKING":
				approver_id = "501";
				break;
			case "UG_ADMIN_ORDER_STORE":
				approver_id = "504";
				break;
			default:
				approver_id = "";
		}

		final BHGEUserAccessRequestModel accessRequestData = getModelService().create(BHGEUserAccessRequestModel.class);
		// final BHGERegieterCustomerModel requestor =
		// getModelService().create(BHGERegieterCustomerModel.class);
		final BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);

		try {
			LOG.info("Saving User Access Request data in DB 968 Anish");
			sequence.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);
			LOG.info("user_id : " + user_id);
			LOG.info("approver_id : " + approver_id);
			LOG.info("reqRole : " + reqRole);
			LOG.info("userComment : " + userComment);

			final BHGERegieterCustomerModel requestor = registerDao.validateActivateAccount(user_id);
			System.out.println("requestor.getUid() 972." + requestor);
			System.out.println("requestor.getUid() 973." + requestor.getUid());

			accessRequestData.setAccessRequestId(sequence.get());
			accessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
			accessRequestData.setRequesterId(requestor);
			accessRequestData.setRequestStatus(BHGEAccessRequestStatus.PENDING_APPROVAL);
			accessRequestData.setApproverDetails(registerDao.getApproverDetails(approver_id));
			accessRequestData.setLinkedWithRegister(true);
			accessRequestData.setRequestorComment(userComment);
			getModelService().save(accessRequestData);

			LOG.info("Saving User Access Request complete");
		} catch (final Exception ex) {
			LOG.error("MSG1510: Error in saving intial user access request with error message: " + ex.getMessage());
			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);

			throw new RuntimeException(message);
		}
		return true;
	}
	/* Anish POST */

	public BHGEApprovalDetailsModel getIqmApproverDetails(final BHGERegisterRequest requestData) {

		final String role = requestData.getIqmRole();
		final BHGEApprovalDetailsModel iqmApproverDetail = registerDao.getIQMApproverDetails(role);
		return iqmApproverDetail;
	}

	public BHGEApprovalDetailsModel getDAMApproverDetails(final BHGERegisterRequest requestData) {

		final BHGEApprovalDetailsModel iqmApproverDetail = registerDao.getDAMApproverDetails();
		return iqmApproverDetail;
	}

	public BHGERegisterKeyValueDataModel getIQMRegion(final BHGERegisterRequest requestData) {

		final BHGERegisterKeyValueDataModel registerKey = registerDao
				.fetchIqmParentkey(requestData.getIqmCountry().toUpperCase());
		return registerKey;

	}

	/**
	 * @param str
	 * @return
	 */
	public static String removeZero(final String str) {
		if (str != null && str.length() > 0) {
			int i = 0;
			while (str.charAt(i) == '0') {
				i++;
			}
			final StringBuilder sb = new StringBuilder(str);
			sb.replace(0, i, "");

			return sb.toString();
		}
		return "";
	}

	/**
	 * @param requestData
	 *
	 */
	@SuppressWarnings("deprecation")
	private void savingUserAccessRequestUpdate(final BHGERegisterRequest requestData) {
		LOG.info("Saving User Access Request data in DB");
		final BHGEUserAccessRequestModel accessRequestData = registerDao.fetchPreviousUserAccessRequest(sequence.get());
		accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.AUTO_APPROVED);
		accessRequestData.setApproverDetails(registerDao.getSystemApproverDetails());
		getModelService().save(accessRequestData);
		LOG.info("Saving User Access Request Update complete");
	}

	public BHGERegisterResponse validateCustomerNumber(final BHGERegisterRequest requestData, final String store)
			throws CMSItemNotFoundException, EmailException {
		final String DSS = Config.getParameter("register.appName.DSS");
		final String DAM = Config.getParameter("register.appName.DAM");
		final String IQM = Config.getParameter("register.appName.IQM");
		final String FPT = Config.getParameter("register.appName.FPT");
		final String OFS = Config.getParameter("register.appName.OFS");

		BHGERegisterResponse sapResponse = new BHGERegisterResponse();
		try {
			final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
			registerRequestList.add(requestData);

			sapResponse = getBhgeregistermncecommapplicationService().executeSAPLookup(registerRequestList, store);

			if(sapResponse == null)
			{
				sapResponse = new BHGERegisterResponse();
				sapResponse.setErrorMessage("RegistrationNetworkIssue");
				return sapResponse;
			}
		} catch (final Exception ex) {
			LOG.error(
					"MSG1501: Error in SAP Customer number validation. Ops Team to check for input criteria for failure.");
			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			if (store.equalsIgnoreCase(DSS) || store.equalsIgnoreCase(DAM) || store.equalsIgnoreCase(IQM) || store.equalsIgnoreCase(OFS)) {
				emailService.registerFailureMail("MSG1501", ex.getMessage(), sw.toString(),
						Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()),
								StringEscapeUtils.escapeHtml4(requestData.getLastName()), requestData.getUserId(), requestData.getEmail()));
			}
			if (store.equalsIgnoreCase(FPT)) {
				emailService.registerFptFailureMail("MSG1501", ex.getMessage(), sw.toString(),
						Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
						Arrays.asList(requestData.getCustomerNumber(), requestData.getFirstName(),
								requestData.getLastName(), requestData.getUserId(), requestData.getEmail()));
			}
			throw new RuntimeException(message);

		}

		return sapResponse;
	}

	@Override
	public BHGERegisterResponse validateActivateAccount(final String userName) {
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		final BHGERegieterCustomerModel customerEntry = registerDao.validateActivateAccount(userName);
		if (customerEntry != null) {
			LOG.info("YES Found Customer for Activation.");
			customerEntry.setActiveStatus(true);
			getModelService().save(customerEntry);
		} else {
			LOG.info("NOT Found Customer for Activation.");
		}
		registerResponse.setStatusCode("SUCCESS");
		return registerResponse;
	}

	public String loadActivateAccount(final String userName) throws CMSItemNotFoundException, EmailException {
		String userToken = null;
		try {
			final BHGERegieterCustomerModel customerEntry = registerDao.validateActivateAccount(userName);

			if (customerEntry != null) {
				long diff = ((new Date()).getTime() - customerEntry.getModifiedtime().getTime()) / (60 * 60 * 1000);
				if (customerEntry.getTokenValue() != null && !customerEntry.getTokenValue().isEmpty()
						&& diff < Long.parseLong(Config.getParameter("bhge.register.confirmationurl.validity"))) {
					userToken = customerEntry.getTokenValue();
				} else {
					userToken = generateFreshToken();
					customerEntry.setTokenValue(userToken);
					getModelService().save(customerEntry);
				}
			} else {
				LOG.info("MSG1513: NOT Found Customer for Token Generation.");
				LOG.info("registration.failure.MSG1513 " + Config.getParameter("registration.failure.MSG1513"));
				emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1513"),
						"Customer not found for user verfication token generation",
						"Customer not found for user verfication token generation", Arrays.asList("Username"),
						Arrays.asList(StringEscapeUtils.escapeHtml4(userName)));

			}
		} catch (final Exception ex) {
			LOG.warn("MSG1512: Error in feching user verification token.");

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOG.info("registration.failure.MSG1512 " + Config.getParameter("registration.failure.MSG1512"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1512"), ex.getMessage(),
					sw.toString(), Arrays.asList("Username"), Arrays.asList(StringEscapeUtils.escapeHtml4(userName)));

		}

		return userToken;
	}

	private String generateFreshToken() {
		StringBuilder token = new StringBuilder(TOKEN_LENGTH);
		for (int i = 0; i < TOKEN_LENGTH; i++) {
			token.append(TOKEN_DATASET.charAt(RANDOM.nextInt(TOKEN_DATASET.length())));
		}
		return token.toString();
	}

	@Override
	public boolean checkActivateAccount(final String userName) {
		return registerDao.checkActivateAccount(userName);
	}

	@Override
	public BHGERegisterResponse createReverseFlowForIdoc(final BHGERegisterRequest ssoDetails,
														 final GEEdgeCustomerModel customerModel) {
		BHGERegisterResponse response = new BHGERegisterResponse();
		try {

			if (!ssoDetails.getUserId().equalsIgnoreCase("CONTACT#" + ssoDetails.getSapContactId())) {
				if (ssoDetails.getSapContactId() != null) {
					ssoDetails.setSapContactId(("0000000000" + ssoDetails.getSapContactId())
							.substring(ssoDetails.getSapContactId().length()));
				}

				final BHGERegieterCustomerModel registerCustomerModel = (BHGERegieterCustomerModel) registerDao
						.getUserBySSO(ssoDetails.getUserId());
				if (registerCustomerModel != null) {
					LOG.info("IDOc Create - SSO & Register Entry Available.");
					final List<AccountLinkingData> userAccouts = registerDao.getUserAccounts(ssoDetails.getUserId());

					customerModel.setEncodedPassword(ENCODE_PASSWORD);
					customerModel.setPasswordEncoding(PASSWORD_ENCODE);
					LOG.info("Setting UserCreationChannel for ExternalUsers(REGISTRATIONPORTAL).");
					customerModel.setUserCreationChannel(UserCreationChannel.REGISTRATIONPORTAL);
					getModelService().save(customerModel);

					if ((registerCustomerModel.getRequestCustomerId() != null
							&& registerCustomerModel.getRequestCustomerId().length() > 0)
							|| (userAccouts != null && userAccouts.size() > 0)) {
						String customerId = null;
						if (userAccouts != null && userAccouts.size() > 0) {
							customerId = userAccouts.get(0).getCustomerNumber();
						} else {
							customerId = registerCustomerModel.getRequestCustomerId();
						}

						if (customerId != null) {
							customerId = ("0000000000" + customerId).substring(customerId.length());
						}

						LOG.info("IDOc Create - salesCustomerId = " + customerId);
						boolean salesareaFound1 = false;
						boolean salesareaFound3 = false;
						final String sso = StringUtils.trimToEmpty(registerCustomerModel.getSso());
						LOG.info("user SSO " + sso);
						final B2BUnitModel soldtoValue = b2bUnitService.getUnitForUid(customerId);
						final String salesareaMapping = Config.getParameter("bhge.register.salesarea");
						final Collection<String> accessRequestSoldTos = registerCustomerModel
								.getApproverCustomerDetails() != null
								? Optional.ofNullable(registerCustomerModel.getApproverCustomerDetails())
								.orElseGet(Collections::emptyList)
								: Collections.emptyList();
						LOG.info("access request soldtos i.e ApproverCustomerDetails: " + accessRequestSoldTos);
						final String firstsoldTo = accessRequestSoldTos.stream().findFirst().orElse("");
						String firstsoldToTranformed = CommerceCustomerInterceptor
								.transformSoldToFromRequest(firstsoldTo);
						LOG.info("access request soldtos : " + firstsoldTo);
						LOG.info("access request soldtos  transformed: "
								+ CommerceCustomerInterceptor.transformSoldToFromRequest(firstsoldTo));
						if (soldtoValue != null && salesareaMapping != null) {
							LOG.info("IDOc Create - salesareaMapping = " + salesareaMapping);
							int entryPoint = salesareaMapping.indexOf("&" + soldtoValue.getCountryCP() + "-");
							String salesareaData = "";
							LOG.info("entryPoint " + entryPoint);
							// first preference if accessrequset has sold
							if (StringUtils.isNotEmpty(firstsoldToTranformed)) {
								if (firstsoldToTranformed.equalsIgnoreCase("0000000000_")) {
									// Positive scenario
									if(entryPoint != -1){
										final int endpoint = salesareaMapping.indexOf("-&", entryPoint);
										LOG.info("endpoint " + endpoint);
										salesareaData = salesareaMapping.substring(entryPoint + 4, endpoint);
										LOG.info("selected entry from salesareaMapping" + salesareaData);
									}
									// Fallback scenario
									else if(entryPoint == -1){
										entryPoint = salesareaMapping.indexOf("&&&-");
										LOG.info("In Fallback Scenario, updated entryPoint " + entryPoint);
										salesareaData = salesareaMapping.substring(entryPoint + 4);
										LOG.info("selected entry from salesareaMapping" + salesareaData);
									}
									// Final check if still Sales Area Data is empty
									if(StringUtils.isBlank(salesareaData)) {
										LOG.info("Inside final check block");
										final PrincipalModel principalModel = soldtoValue.getMembers().size() >= 0
												? soldtoValue.getMembers().stream()
												.filter(each -> (each instanceof B2BUnitModel)).findFirst()
												.orElse(soldtoValue)
												: null;
										salesareaData = principalModel != null ? principalModel.getUid() : "NoChildUnits";
										firstsoldToTranformed = salesareaData;
									}
								} else {
									// 0000138305_1800_GE_GE.
									salesareaData = firstsoldToTranformed;
								}
								LOG.info("salesareaData " + salesareaData);

							} /*else if (entryPoint == -1) {
								entryPoint = salesareaMapping.indexOf("&&&-");
								LOG.info("updated entryPoint " + entryPoint);
								salesareaData = salesareaMapping.substring(entryPoint + 4);
							} else {
								final int endpoint = salesareaMapping.indexOf("-&", entryPoint);
								LOG.info("endpoint " + endpoint);
								salesareaData = salesareaMapping.substring(entryPoint + 4, endpoint);
							}*/
							final String[] salesListing = salesareaData.split("-");
							LOG.info("IDOc Create - salesSearchList = " + Arrays.toString(salesListing));
							for (int ict = 0; ict < salesListing.length && !salesareaFound1; ict++) {
								LOG.info("	IDOc Create - salesSearch = " + salesListing[ict]);
								if (soldtoValue.getMembers() != null && soldtoValue.getMembers().size() > 0) {
									for (final PrincipalModel principalModel : soldtoValue.getMembers()) {
										if (principalModel instanceof B2BUnitModel) {
											final String subunitVal = principalModel.getUid();
											LOG.info("		IDOc Create - salesareaList = " + subunitVal);
											final int countSeparator = subunitVal.length()
													- subunitVal.replace("_", "").length();
											if (countSeparator == 3) {

												if (StringUtils.isNotEmpty(firstsoldToTranformed) && StringUtils
														.equals(principalModel.getUid(), firstsoldToTranformed)) {

													// 0000138305_1800_GE_GE.
													LOG.info("			IDOc Create - firstsoldToTranformed = "
															+ firstsoldToTranformed);
													customerModel.setDefaultSoldTo(soldtoValue);
													customerModel.setDefaultB2BUnit((B2BUnitModel) principalModel);
													modelService.save(customerModel);
													salesareaFound1 = true;
													break;

												} else if ((customerId + "_" + salesListing[ict]).equals(subunitVal)) {
													LOG.info("			IDOc Create - soldtoSELECT = " + subunitVal);
													customerModel.setDefaultSoldTo(soldtoValue);
													customerModel.setDefaultB2BUnit((B2BUnitModel) principalModel);
													modelService.save(customerModel);
													salesareaFound1 = true;
													break;
												}
											}
										}
									}
								}
							}
							if (!salesareaFound1) {
								LOG.info("IDOc Create - Default Sales Area Not Found for new GEEdgeCustomer.");
								LOG.info("registration.failure.MSG2502 "
										+ Config.getParameter("registration.failure.MSG2502"));
								emailService.registerFailureMail(Config.getParameter("registration.failure.MSG2502"),
										"IDOc Create - Default Sales Area Not Found for new GEEdgeCustomer.",
										"IDOc Create - Default Sales Area Not Found for new GEEdgeCustomer.",
										Arrays.asList("UID", "Soldto Number", "Country Lookup",
												"Available Sales Areas"),
										Arrays.asList(customerModel.getUid(), customerId, soldtoValue.getCountryCP(),
												Arrays.toString(salesListing)));
							}
						}

						if (userAccouts != null && userAccouts.size() > 0) {
							for (int ict = 0; ict < userAccouts.size(); ict++) {
								if (userAccouts.get(ict).getCustomerNumber() != null) {
									userAccouts.get(ict)
											.setCustomerNumber(("0000000000" + userAccouts.get(ict).getCustomerNumber())
													.substring(userAccouts.get(ict).getCustomerNumber().length()));
								}
								LOG.info("IDOc Create - groupParent = " + userAccouts.get(ict).getCustomerNumber());
								final List<String> saleareaList = userAccouts.get(ict).getSalesareaList();
								if (saleareaList != null && saleareaList.size() > 0) {
									final B2BUnitModel soldtoB2bmodel = b2bUnitService
											.getUnitForUid(userAccouts.get(ict).getCustomerNumber());
									for (int jct = 0; jct < saleareaList.size(); jct++) {
										if (soldtoB2bmodel != null && soldtoB2bmodel.getMembers() != null
												&& soldtoB2bmodel.getMembers().size() > 0) {
											final B2BUnitModel saleareaB2bmodel = b2bUnitService
													.getUnitForUid(userAccouts.get(ict).getCustomerNumber() + "_"
															+ saleareaList.get(jct));
											LOG.info("	IDOc Create - groupChild = " + saleareaB2bmodel.getUid());
											if (saleareaB2bmodel != null) {
												boolean salesareaFound2 = false;
												for (final PrincipalModel principalModel : soldtoB2bmodel
														.getMembers()) {
													LOG.info("		IDOc Create - groupMember = "
															+ principalModel.getUid());
													if (saleareaB2bmodel.getUid()
															.equalsIgnoreCase(principalModel.getUid())) {
														LOG.info("			IDOc Create - groupSelect = "
																+ saleareaB2bmodel.getUid());

														final Set<PrincipalGroupModel> ecommUnits = new HashSet<PrincipalGroupModel>(
																customerModel.getGroups());
														ecommUnits.add(saleareaB2bmodel);
														customerModel.setGroups(ecommUnits);
														salesareaFound2 = true;
														salesareaFound3 = true;
													}
												}
												if (!salesareaFound2) {
													LOG.info("IDOc Create - Sales Area mapping not found - "
															+ saleareaB2bmodel.getUid());
												}

											} else {
												LOG.info("IDOc Create - No Such Sales Area - "
														+ userAccouts.get(ict).getCustomerNumber() + "_"
														+ saleareaList.get(jct));
											}
										} else {
											LOG.info("IDOc Create - No Such Sold To or Sold To Members not available - "
													+ userAccouts.get(ict).getCustomerNumber());
										}
									}
								} else {
									LOG.info("IDOc Create - Sales Area Lisr is empty - "
											+ userAccouts.get(ict).getCustomerNumber());
								}
							}
							modelService.save(customerModel);
						}

						final Set<PrincipalGroupModel> ecommUserGroups = new HashSet<PrincipalGroupModel>(
								customerModel.getGroups());
						boolean isFullAccessProvided = false;
						for (final PrincipalGroupModel eachGroup : customerModel.getGroups())
						{
							String access = eachGroup.getUid();
							LOG.info("eachGroup Id: " + access);
							final String fullAccess = Config.getParameter("bhge.register.salesareas.fullaccess");
							final List<String> fullaccess_list = Arrays.asList(fullAccess.split(","));
							for (int i = 0; i < fullaccess_list.size(); i++) {
								if (access.contains(fullaccess_list.get(i))) {
									ecommUserGroups.add(userService.getUserGroupForUID("UG_ADMIN_ORDER_STORE"));
									isFullAccessProvided = true;
									LOG.info("isFullAccessProvided: " + isFullAccessProvided + "access: " + access);
									break;
								}
							}
							if (isFullAccessProvided) {
								break;
							}
						}
						if(!isFullAccessProvided){
							ecommUserGroups.add(userService.getUserGroupForUID("UG_VIEW_STORE"));
						}
						customerModel.setGroups(ecommUserGroups);
						modelService.save(customerModel);

						if (salesareaFound1) {
							approveAccessRequest(customerModel);
						}

					} else {
						LOG.info("IDOc Create - No Account Linking Available - " + ssoDetails.getUserId());
					}
					final List<String> approverCustomerDetails = new ArrayList<>();
					LOG.info("Inside SubmitRegisterRequestServiceImpl:: ApproverCustomerDetails: "
							+ registerCustomerModel.getApproverCustomerDetails() + " DefaultB2BUnit "
							+ customerModel.getDefaultB2BUnit());

					if (CollectionUtils.isEmpty(registerCustomerModel.getApproverCustomerDetails())
							&& null != customerModel.getDefaultB2BUnit()) {
						final String defaultB2BUnit = customerModel.getDefaultB2BUnit().getUid();
						LOG.info("Inside SubmitRegisterRequestServiceImpl:: defaultB2BUnit: " + defaultB2BUnit);

						if (!"BHGERegisterIDoc".equals(defaultB2BUnit)) {
							final String[] salesAreas = StringUtils.split(defaultB2BUnit, "_");
							String soldTo = salesAreas[0];
							final String strPattern = "^0+(?!$)";
							soldTo = soldTo.replaceAll(strPattern, "");
							final String salesArea = String.join("_", salesAreas[1], salesAreas[2], salesAreas[3]);
							final String approverCustomerDetail = soldTo + "-" + salesArea;
							approverCustomerDetails.add(approverCustomerDetail);
							// 0000138305_1800_GE_GE
							// 138305-1800_GE_GE
						}

					}

					if (approverCustomerDetails.size() > 0) {
						registerCustomerModel.setApproverCustomerDetails(approverCustomerDetails);
						getModelService().save(registerCustomerModel);
					}
				} else {
					LOG.info("IDOc Create - SSO Available. Process SAP Only.");
					final BHGERegisterResponse regResponse = bhgeregisteroidcintegrationService
							.checkSSOAvailability(ssoDetails);
					if ("YES".equals(regResponse.getStatusCode())) {
						LOG.info("registration.failure.MSG1503.1 "
								+ Config.getParameter("registration.failure.MSG1503.1"));
						final String environment = Config.getParameter("currentEnv");
						String messageCode=Config.getParameter("registration.failure.MSG1503.1");

						if(ssoDetails.getOfsCustomerAccNumber() != null && !ssoDetails.getOfsCustomerAccNumber().isEmpty()) {
							emailService.registerOFSFailureMail(messageCode + environment,
									"BHGERegisterCustomer NOT Found in Hybris.",
									"BHGERegisterCustomer NOT Found in Hybris.",ssoDetails.getFirstName() +" "+
											ssoDetails.getLastName(),ssoDetails.getOfsCustomerAccNumber(),ssoDetails.getEmail());
						}
						emailService.registerFailureMail( messageCode + environment,
								"BHGERegisterCustomer NOT Found in Hybris.", "BHGERegisterCustomer NOT Found in Hybris.",
								Arrays.asList("Customer Number", "First Name", "Last Name", "User Id", "Email"),
								Arrays.asList(ssoDetails.getCustomerNumber(), StringEscapeUtils.escapeHtml4(ssoDetails.getFirstName()),
										StringEscapeUtils.escapeHtml4(ssoDetails.getLastName()), ssoDetails.getUserId(), ssoDetails.getEmail()));
						return null;
					}
					ssoDetails.setFormFlag(String.valueOf(false));
					ssoDetails.setProductLine(REVERSE_PRODLINE);
					response = submitDetails(ssoDetails);
					LOG.info("IDOc Create - OIDC/SAP Resonse - " + response.getErrorMessage());
				}
			} else {
				LOG.info("IDOc Create - Reverse Flow without SSO Scenario.");
			}

		} catch (final Exception exc) {
			LOG.info("IDOc Create - Error in SAP Contact iDoc Processing. - " + exc.getMessage());
			exc.printStackTrace();
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			exc.printStackTrace(pw);
			LOG.info("registration.failure.MSG2501 " + Config.getParameter("registration.failure.MSG2501"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG2501"),
					"IDOc Create - Error in SAP Contact iDoc Processing." + exc.getMessage(), sw.toString(),
					Arrays.asList("UID"), Arrays.asList(customerModel.getUid()));
		}

		return response;
	}

	@Override
	public BHGERegisterResponse updateReverseFlowForIdoc(final BHGERegisterRequest ssoDetails,
														 final GEEdgeCustomerModel customerModel) {
		LOG.info("CustomerModel>>>");

		LOG.info(customerModel);
		LOG.info("CustomerModel<<<");
		final BHGERegisterResponse response = new BHGERegisterResponse();
		try {
			if (!ssoDetails.getUserId().equalsIgnoreCase("CONTACT#" + ssoDetails.getSapContactId())) {
				final String customerId = customerModel.getDefaultSoldTo().getUid();
				LOG.info("IDOc Update - salesCustomerId = " + customerId);
				boolean salesareaFound1 = false;
				final B2BUnitModel soldtoValue = customerModel.getDefaultSoldTo();
				final String salesareaMapping = Config.getParameter("bhge.register.salesarea");
				if (soldtoValue != null && salesareaMapping != null) {
					LOG.info("IDOc Update - salesareaMapping = " + salesareaMapping);
					int entryPoint = salesareaMapping.indexOf("&" + soldtoValue.getCountryCP() + "-");
					final String salesareaData;
					if (entryPoint == -1) {
						entryPoint = salesareaMapping.indexOf("&&&-");
						salesareaData = salesareaMapping.substring(entryPoint + 4);
					} else {
						final int endpoint = salesareaMapping.indexOf("-&", entryPoint);
						salesareaData = salesareaMapping.substring(entryPoint + 4, endpoint);
					}
					final String[] salesListing = salesareaData.split("-");
					LOG.info("IDOc Update - salesSearchList = " + Arrays.toString(salesListing));
					for (int ict = 0; ict < salesListing.length && !salesareaFound1; ict++) {
						LOG.info("	IDOc Update - salesSearch = " + salesListing[ict]);
						if (soldtoValue.getMembers() != null && soldtoValue.getMembers().size() > 0) {
							for (final PrincipalModel principalModel : soldtoValue.getMembers()) {
								if (principalModel instanceof B2BUnitModel) {
									final String subunitVal = principalModel.getUid();
									LOG.info("		IDOc Update - salesareaList = " + subunitVal);
									final int countSeparator = subunitVal.length()
											- subunitVal.replace("_", "").length();
									if (countSeparator == 3) {
										if ((customerId + "_" + salesListing[ict]).equals(subunitVal)) {
											LOG.info("			soldtoSELECT = " + subunitVal);
											customerModel.setDefaultB2BUnit((B2BUnitModel) principalModel);
											modelService.save(customerModel);
											salesareaFound1 = true;
											break;
										}
									}
								}
							}
						}
					}
					if (!salesareaFound1) {
						LOG.info("IDOc Update - Default Sales Area Not Found for new GEEdgeCustomer. Please correct.");
					}
				}
			}
		} catch (final Exception exc) {
			LOG.info("IDOc Update - Error in eCommerce > Register Flow - " + exc.getMessage());
			exc.printStackTrace();
		}

		return response;
	}

	/**
	 * @param customerModel
	 */
	private void approveAccessRequest(final GEEdgeCustomerModel customerModel) {
		try {
			final String response = "";
			final List<String> accessList = new ArrayList<>();
			final List<BHGEUserAccessRequestModel> fetchedModelList = registerDao
					.fetchOrderTrackingAccess(customerModel.getUid());

			for (final BHGEUserAccessRequestModel bhgeUserAccessRequestModel : fetchedModelList) {
				LOG.info("Access Level - "
						+ bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());
				LOG.info("Access Value for - bhgeUserAccessUid" + bhgeUserAccessRequestModel.getAccessRequestId()  + " is " + bhgeUserAccessRequestModel.getRequestStatus().getCode());

				if ("OrderTracking".equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())) {
					LOG.info("Inside AccessLevel of OrderTracking for - " + bhgeUserAccessRequestModel.getAccessRequestId());
					bhgeUserAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.COMPLETED);
					getModelService().save(bhgeUserAccessRequestModel);
					/*
					 * try { getEmailService().registerMail("AccessGranted",
					 * customerModel.getEmail(), customerModel.getUid(), customerModel.getName(),
					 * null, null); } catch (final CMSItemNotFoundException e) { LOG.
					 * error("CMSItemNotFoundException found while triggering SSO registration email"
					 * ); } catch (final EmailException e) {
					 * LOG.error("EmailException found while triggering SSO registration email"); }
					 */
				}
			}
		} catch (final Exception exc) {
			LOG.error("Error while marking Access Request Completed");
			exc.printStackTrace();
		}
	}

	/**
	 * @param customerModel
	 */
	public void cancelAccessRequest(final String userName) {
		LOG.info("Inside cancelAccessRequest: START - " + userName);
		try {
			final List<String> accessList = new ArrayList<>();
			final List<BHGEUserAccessRequestModel> fetchedModelList = registerDao.fetchOrderTrackingAccess(userName);

			for (final BHGEUserAccessRequestModel bhgeUserAccessRequestModel : fetchedModelList) {
				LOG.info("Access Level - "
						+ bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());
				LOG.info("Access Value - " + bhgeUserAccessRequestModel.getRequestStatus().getCode());

				if ("OrderTracking".equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())) {
					bhgeUserAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.CANCELLED);
					getModelService().save(bhgeUserAccessRequestModel);
				}
				else if (Config.getParameter("register.access.view.only")
						.equalsIgnoreCase(bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())
						|| Config.getParameter("register.access.buyer").equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())
						|| Config.getParameter("register.access.super.user").equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
				{
					bhgeUserAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.CANCELLED);
					getModelService().save(bhgeUserAccessRequestModel);
				}
			}
		} catch (final Exception exc) {
			LOG.error("Error while marking Access Request Completed");
			exc.printStackTrace();
		}
		LOG.info("Inside cancelAccessRequest: CLOSE - " + userName);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.SubmitRegisterRequestService#
	 * fetchApplications()
	 */
	@Override
	public BHGERegisterResponse fetchApplications(final String userName) {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		response.setApplicationList(registerDao.fetchApplications(userName));
		return response;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.SubmitRegisterRequestService#
	 * fetchProductLines()
	 */
	@Override
	public BHGERegisterResponse fetchCountry() {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		final Map<String,String> countryList = new HashMap<>();
		final List<BHGERegisterKeyValueDataModel> fetchedModelList = registerDao.fetchCountry();

		for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : fetchedModelList) {
			countryList.put(bhgeRegisterKeyValueDataModel.getAttributeValue(),bhgeRegisterKeyValueDataModel.getRiskClassification());
		}

		response.setCountryList(countryList);

		return response;

	}

	@Override
	public MediaModel saveKYCAttachment(MultipartFile KYCAttachment) {
		String mediaName;
		final String contentType = KYCAttachment.getContentType();
		final MediaModel mediaModel = new MediaModel();
		final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
		mediaModel.setFolder(mediaFolder);
		mediaName = mediaCodeGenerator.generate().toString();
		mediaModel.setRealFileName(KYCAttachment.getOriginalFilename());
		mediaModel.setCode(mediaName);
		// POC mandates catalog version for media.
		final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
		mediaModel.setCatalogVersion(versions);
		modelService.save(mediaModel);
		return uploadFile(KYCAttachment, mediaModel,KYCAttachment.getOriginalFilename(), contentType);
	}

	@Override
	public MediaModel saveOSAttachment(MultipartFile OSAttachment) {
		String mediaName;
		final String contentType = OSAttachment.getContentType();
		final MediaModel mediaModel = new MediaModel();
		final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
		mediaModel.setFolder(mediaFolder);
		mediaName = mediaCodeGenerator.generate().toString();
		mediaModel.setRealFileName(OSAttachment.getOriginalFilename());
		mediaModel.setCode(mediaName);
		// POC mandates catalog version for media.
		final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
		mediaModel.setCatalogVersion(versions);
		modelService.save(mediaModel);
		return uploadFile(OSAttachment, mediaModel,OSAttachment.getOriginalFilename(), contentType);
	}


	public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
								 final String contentType)
	{
		try
		{
			final InputStream inputStream = file.getInputStream();
			mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);
		}
		catch (final Exception e)
		{
			//LOG.error("Exception while uploading media{}", e.getMessage());
		}
		return mediaModel;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.SubmitRegisterRequestService#
	 * fetchProducts()
	 */
	@Override
	public BHGERegisterResponse fetchProducts(final String appName, String productLine) {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		final List<String> productList = new ArrayList<>();
		final List<BHGERegisterKeyValueDataModel> fetchedModelList = registerDao.fetchProduct(appName, productLine);

		for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : fetchedModelList) {
			if(!bhgeRegisterKeyValueDataModel.getAttributeKey().equalsIgnoreCase(NOTLISTED_ABOVE))
			{
				productList.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
			}
		}
		if(StringUtils.isBlank(productLine)){
			productList.add(NOTLISTED_ABOVE);
		}

		response.setProductList(productList);

		return response;
	}

	// US8159: FPT Valvstore changes start

	@Override
	public BHGERegisterResponse fetchUserRolesFPT(final String appName) {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		final List<String> userRoleList = new ArrayList<>();
		final List<BHGERegisterKeyValueDataModel> fetchedModelList = registerDao.fetchUserRolesFPT(appName);

		for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : fetchedModelList) {
			userRoleList.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
		}

		response.setProductList(userRoleList);

		return response;
	}

	@Override
	public BHGERegisterResponse fetchVSLegalEntities(final String appName) {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		final List<String> legalEntityList = new ArrayList<>();
		final List<BHGERegisterKeyValueDataModel> fetchedModelList = registerDao.fetchVSLegalEntities(appName);

		for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : fetchedModelList) {
			legalEntityList.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
		}

		response.setProductList(legalEntityList);

		return response;
	}
	// US8159: FPT Valv store changes end

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.SubmitRegisterRequestService#
	 * fetchOrderTrackingAccess()
	 */
	@Override
	public String fetchOrderTrackingAccess(final String userSSO) {
		String response = "Not Registered";
		final List<String> accessList = new ArrayList<>();
		final List<BHGEUserAccessRequestModel> fetchedModelList = registerDao.fetchOrderTrackingAccess(userSSO);

		for (final BHGEUserAccessRequestModel bhgeUserAccessRequestModel : fetchedModelList) {
			if ("OrderTracking".equalsIgnoreCase(
					bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
				/*
				 * &&
				 * bhgeUserAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.
				 * COMPLETED.getCode()))
				 */
			{
				switch (bhgeUserAccessRequestModel.getRequestStatus()) {

					case PENDING_ACTIVATION:
						response = "Pending Activation";
						break;

					case ERROR_OUT:
						response = "Registration Pending";
						break;

					case PENDING_APPROVAL:
						response = "Pending Approval";
						break;

					case AUTO_APPROVED:
						response = "Access Pending";
						break;

					case APPROVED:
						response = "Access Pending";
						break;

					case REJECTED:
						response = "Access Denied";
						break;

					case ONHOLD:
						response = "Request On Hold";
						break;

					case DEACTIVATED:
						response = "Access Deactivated";
						break;

					case COMPLETED:
						response = "Access Granted";
						break;

					default:
						response = "Not Registered";
				}
			}
		}
		return response;
	}

	@Override
	public boolean checkReactivateAccount(final String userName) {
		return registerDao.checkReactivateAccount(userName);
	}

	public String loadReactivateAccount(final String userName) throws CMSItemNotFoundException, EmailException {
		String userToken = null;
		try {
			final GEEdgeCustomerModel customerEntry = registerDao.validateReactivateAccount(userName);
			if (customerEntry != null) {
				if (customerEntry.getReactiveTokenValue() != null && !customerEntry.getReactiveTokenValue().isEmpty()) {
					userToken = customerEntry.getReactiveTokenValue();
				} else {
					userToken = generateFreshToken();
					customerEntry.setReactiveTokenValue(userToken);
					getModelService().save(customerEntry);
				}
			} else {
				LOG.info(Config.getParameter("account.reactivation.MSG1913"));
				emailService.registerFailureMail(Config.getParameter("account.reactivation.MSG1913"),
						Config.getParameter("account.reactivation.MSG1913"),
						Config.getParameter("account.reactivation.MSG1913"), Arrays.asList("Username"),
						Arrays.asList(StringEscapeUtils.escapeHtml4(userName)));
			}
		} catch (final Exception ex) {
			ex.printStackTrace();
			LOG.warn(Config.getParameter("account.reactivation.MSG1912"));
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			emailService.registerFailureMail(Config.getParameter("account.reactivation.MSG1912"), ex.getMessage(),
					sw.toString(), Arrays.asList("Username"), Arrays.asList(StringEscapeUtils.escapeHtml4(userName)));
		}
		return userToken;
	}

	@Override
	public BHGERegisterResponse validateReactivateAccount(final String userName) {
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		final GEEdgeCustomerModel customerEntry = registerDao.validateReactivateAccount(userName);
		if (customerEntry != null) {
			LOG.info("YES Found Customer for Re-Activation.");
			customerEntry.setLoginDisabled(false);
			Collection<String> customerReActivationComments = new ArrayList<String>();
			final DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss zzz");
			final Calendar cal = Calendar.getInstance();
			String customerReActivationComment = "Reactivating user account in the Re-Activation process"
					+ dateFormat.format(cal.getTime());
			customerReActivationComments.add(customerReActivationComment);
			LOG.info("Re-Activate User - " + customerEntry.getUid() + " & Last Login - " + customerEntry.getLastLogin()
					+ " & Create - " + customerEntry.getCreationtime() + " & Active - " + customerEntry.getActive());
			customerEntry.setCustomerActivationComments(customerReActivationComments);
			customerEntry.setActive(true);
			getModelService().save(customerEntry);
		} else {
			LOG.info("NOT Found Customer for Re-Activation.");
		}
		registerResponse.setStatusCode("SUCCESS");
		return registerResponse;
	}

	public boolean isSystemDisabled(final String accountCode) {
		boolean isSysDisabled = true;
		try {
			final GEEdgeCustomerModel customerEntry = registerDao.validateReactivateAccount(accountCode);
			if (customerEntry.isLoginDisabled() && customerEntry.getDisabledBySso() != null
					&& !"".equals(customerEntry.getDisabledBySso())) {
				isSysDisabled = false;
				final GEEdgeCustomerModel userManager = registerDao
						.validateReactivateAccount(customerEntry.getDisabledBySso());
				if (userManager != null) {
					emailService.managetDetailsMail(customerEntry.getEmail(), customerEntry.getName(),
							userManager.getUid(), userManager.getName(), userManager.getEmail());
				}
			}
		} catch (final CMSItemNotFoundException e) {
			LOG.error("CMSItemNotFoundException found while triggering User Verfication email");
		} catch (final EmailException e) {
			LOG.error("EmailException found while triggering User Verification email");
		}
		return isSysDisabled;
	}

	/* F&PT Customer Account Number SAP check start */
	@Override
	public BHGERegisterResponse fetchSapForCustomer(final String customerAccNumber) {
		final String FPT = Config.getParameter("register.appName.FPT");
		final BHGERegisterRequest fptBhgeRegisterRequest = new BHGERegisterRequest();
		fptBhgeRegisterRequest.setFptCustomerAccNumber(customerAccNumber);
		fptBhgeRegisterRequest.setSrcSystem(Config.getParameter("com.sap.reg.src.system"));
		fptBhgeRegisterRequest.setUserEvent(Config.getParameter("com.sap.reg.user.event"));
		LOG.info("Starting SAP call for FPT customer number");
		final String fptStore = FPT;
		final String attributeType = Config.getParameter("register.legal.entity");
		BHGERegisterResponse response = null;
		List<BHGERegisterKeyValueDataModel> salesOrg = null;
		Boolean flag=false;
		final List<String> saleArea = new ArrayList<>();
		final List<String> legalEnt = new ArrayList<>();
		try {
			response = validateCustomerNumber(fptBhgeRegisterRequest, fptStore);
			/*
			 * if(response == null) { response = new BHGERegisterResponse();
			 * response.setErrorMessage("There is Network Issue. Please try after sometime"
			 * ); return response; }
			 */
			if ((response.getRuleMessageList() != null
					&& !response.getRuleMessageList().isEmpty() && response.getRuleMessageList().stream()
					.anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) || (null != response.getSoldtoData() && response.getSoldtoData().isEmpty())) {
				LOG.warn(
						"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				return response;
			}
			Map<String, BHGESoldtoData> soldtoMap = null;
			if (response != null) {
				soldtoMap = response.getSoldtoData();
			}
			if (soldtoMap != null && soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).getSalesareaList()!=null) {
				response.setLegalEntityList(
						soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).getSalesareaList());
				salesOrg = registerDao.fetchFptSalesOrg(attributeType);
			}

			if (response.getLegalEntityList() != null) {
				legalEnt.addAll(response.getLegalEntityList());
				LOG.info("Legal Entities :" + legalEnt);
			}
			if (salesOrg != null) {
				for (final BHGERegisterKeyValueDataModel sales : salesOrg) {
					saleArea.add(sales.getAttributeId());
					LOG.info("Sales Area :" + saleArea);
				}
			}
			flag = !Collections.disjoint(legalEnt, saleArea);
			/*
			 * if (legalEnt != null && saleArea != null) {
			 * flag=saleArea.containsAll(legalEnt); }
			 */
			if (flag.equals(Boolean.FALSE) && (Objects.isNull(response.getErrorMessage()) || (null != response.getErrorMessage()
					&& !response.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue")))) {
				LOG.warn(
						"MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				return response;
			}

		} catch (CMSItemNotFoundException | EmailException ex) {
			LOG.error(
					"MSG1501: Error in SAP Customer number validation. Ops Team to check for input criteria for failure.");
			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			throw new RuntimeException(message);
		}
		return response;
	}

	@Override
	public String customerDetails(final String uid)
	{
		final BHGERegieterCustomerModel customer = registerDao.customerDetails(uid);
		LOG.info("API Call from VSstore to SubmitRegisterRequestServiceImpl BHGERegieterCustomerModel ===");
		String role=null;
		if(null != customer && null != customer.getSso()){
			LOG.info("API Call from VSstore to SubmitRegisterRequestServiceImpl BHGERegieterCustomerModel ==="+customer.getUid());
			approveVsAccessRequest(customer);
			if(null != customer.getFptRoles())
			{
				role=customer.getFptRoles().getAttributeKey().toString();
			}
			return role;
		}
		else
		{
			return role;
		}

	}

	@Override
	public String allowAllAddress()
	{
		return registerDao.allowAllAddress();
	}

	private void approveVsAccessRequest(final BHGERegieterCustomerModel customerModel)
	{
		try
		{
			final String response = "";
			final List<String> accessList = new ArrayList<>();
			LOG.info("RegisterCustomer SSO ==="+ customerModel.getSso());
			final List<BHGEUserAccessRequestModel> fetchedModelList = registerDao.fetchOrderTrackingAccess(customerModel.getSso());
			LOG.info("APICall from VSstore to SubmitRegisterRequestServiceImpl approveVsAccessRequest ===");
			for (final BHGEUserAccessRequestModel bhgeUserAccessRequestModel : fetchedModelList)
			{
				LOG.info("AccessLevel - "
						+ bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());
				LOG.info("AccessValue - " + bhgeUserAccessRequestModel.getRequestStatus().getCode());
				if (Config.getParameter("register.access.view.only")
						.equalsIgnoreCase(bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())
						|| Config.getParameter("register.access.buyer").equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())
						|| Config.getParameter("register.access.super.user").equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())
						||  Config.getParameter("register.access.Ofs.user").equalsIgnoreCase(
						bhgeUserAccessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
				{
					if(bhgeUserAccessRequestModel!=null && bhgeUserAccessRequestModel.getRequestStatus()!=null && bhgeUserAccessRequestModel.getRequestStatus().getCode().equalsIgnoreCase("Approved")){
						bhgeUserAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.COMPLETED);
						getModelService().save(bhgeUserAccessRequestModel);
						LOG.info("APICall from VSstore to SubmitRegisterRequestServiceImpl approveVsAccessRequest BHGEAccessRequestStatus Completed==="+ bhgeUserAccessRequestModel.getAccessRequestId());
					}
				}
			}
		}
		catch (final Exception exc)
		{
			LOG.error("Error while marking Access Request Completed");
			exc.printStackTrace();
		}
	}

	@Override
	public boolean accessToApplication(final String applicationId) {
		Boolean accesstoApp = false;
		if(null != applicationId)
		{
			try
			{
				final BHGEGlobalPropertiesModel bhgeGlobalProperty = new BHGEGlobalPropertiesModel();
				bhgeGlobalProperty.setUid(applicationId);
				BHGEGlobalPropertiesModel property = flexibleSearchService.getModelByExample(bhgeGlobalProperty);
				if(property.getValue().equalsIgnoreCase("true"))
				{
					accesstoApp = true;
				}
			}
			catch(ModelNotFoundException e)
			{
				LOG.error("Error while fetching BHGEApplicationDetails " + e.getMessage());
			}
		}
		return accesstoApp;

	}


	@Override
	public BHGERegisterResponse fetchAccountType(String appName) {
		final BHGERegisterResponse response = new BHGERegisterResponse();
		final List<String> accountTypeList = new ArrayList<>();
		final List<BHGERegisterKeyValueDataModel> fetchedModelList = registerDao.fetchAccountType(appName);

		for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : fetchedModelList) {
			accountTypeList.add(bhgeRegisterKeyValueDataModel.getAttributeValue());
		}

		response.setAccountTypeList(accountTypeList);

		return response;
	}



	/* F&PT Customer Account Number SAP check start */
}