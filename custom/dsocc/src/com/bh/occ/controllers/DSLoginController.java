package com.bh.occ.controllers;

import com.bh.occ.common.exception.DSIntegrationException;
import com.bh.occ.common.exception.DSLoginException;
import com.bh.occ.constants.DsoccConstants;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.util.AccessToken;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.integration.oauth.login.BHGEOAuthLoginService;
import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.facades.BhgeRegisterFacade;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.category.model.CategoryModel;

import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.oauth2.client.ClientDetailsDao;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.solr.client.solrj.SolrRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.ZonedDateTime;
import java.util.*;
import java.util.stream.Collectors;


@Controller
//@ApiVersion("v2")
@CacheControl(directive = CacheControlDirective.NO_CACHE)
@Tag(name = "DS login")
@RequestMapping(value = "/{baseSiteId}/dslogin")
public class DSLoginController {

	private final static Logger LOG = Logger.getLogger(DSLoginController.class);
	private static final String USER_DISABLED = "User is disabled";
	private static final String BAD_CREDENTIALS = "Bad credentials";

	@Autowired
	public AuthenticationManager authenticationManager;
	


	@Autowired
	private BHGEOAuthLoginService bhgeoAuthLoginService;
	
	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource
	private RegisterUserDao registerDao;

	@Resource
	private BhgeRegisterFacade bhgeRegisterFacade;

	@Resource
	private BHGEUserProfileFacade bhgeUserProfileFacade;


	@Operation(operationId = "doLogin", summary = "Do Login")
	@RequestMapping(value = {"/token","/token/{tokenString}"}, method = RequestMethod.GET)
	@ResponseBody
	public AccessToken doLogin(@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
							   @Parameter(description = "Token to get UserName.", required = false) @PathVariable(name = "tokenString", required = false) Optional<String> tokenString,
							   @Parameter(description = "Token code.", required = true) @RequestParam final Optional<String> code,
							   HttpServletRequest httpServletRequest) throws DSIntegrationException, DSLoginException
	{
		ResponseEntity<AccessToken> responseEntity = null;
		ResponseEntity<String> responseEntityUser = null;
		AccessToken accessToken = null;
		String userName = null;
		String b2bId = null;
		String b2bCurrency = null;
		B2BUnitModel b2BUnitModel = null;
		/*
		 * String ssoTokenString = code.isPresent() ? code.get() : tokenString.get();
		 */		
		String ssoTokenString = code.isPresent() ? StringEscapeUtils.escapeHtml4(code.get()) :  StringEscapeUtils.escapeHtml4(tokenString.get());

		LOG.info("sso code:+ *"+ ssoTokenString);
		//accessToken = bhgeoAuthLoginService.generateAccessToken(ssoTokenString,"","",null);
		accessToken = bhgeoAuthLoginService.generateAccessToken(ssoTokenString,"","",httpServletRequest);


		responseEntityUser = bhgeoAuthLoginService.getUserInfo(accessToken);

			try {

				String ssoPrimaryField = Config.getString("oauth.client.primaryfield","sub");
				ObjectMapper mapper = new ObjectMapper();
				JsonNode node = mapper.readTree(responseEntityUser.getBody());
				userName = StringUtils.lowerCase(node.path(ssoPrimaryField).asText());
				LOG.info("Username fetched at line 139: " + userName);
			}
			catch(IOException e){
				LOG.error(e.getMessage());
			}
			
			if(userName != null) {
				validateUser(userName);
				AccessToken defaultOAuth2AccessToken = getAccessToken(userName, accessToken);
				if(defaultOAuth2AccessToken != null) {
					accessToken = defaultOAuth2AccessToken;
				}
				b2BUnitModel = bhgeSoldToUtil.getDefaultB2BUnitModelByUserId(userName);
				b2bId = b2BUnitModel.getUid();
				b2bCurrency = b2BUnitModel.getCurrency() != null ? b2BUnitModel.getCurrency().getIsocode() : "USD";
				accessToken.setDefault_b2b(b2bId);
				accessToken.setDefault_currency(b2bCurrency);
				if(CollectionUtils.isNotEmpty(b2BUnitModel.getVisibleCategories())) {
					accessToken.setVisibleCategories(getProdcutLineView(b2BUnitModel.getVisibleCategories()));
				}
				else{
					Collection<CategoryModel> list = bhgeUserProfileFacade.fetchCategoriesFromSalesOrg(b2BUnitModel);
					accessToken.setVisibleCategories(getProdcutLineView(list));
				}
				//Setting ProductLine for User
				bhgeUserProfileFacade.setProductLine(accessToken.getVisibleCategories());
				//Fetching approvers list to show or hide CSR dashboard
				Collection<BHGEApprovalDetailsModel> approversList = bhgeUserProfileFacade.fetchProductLinesForCSRAccess(userName);
				accessToken.setAccessCSRProductLines(getApproversList(approversList));
				if(LOG.isDebugEnabled()) {
					LOG.debug(" SSoUserId " + userName);
					LOG.debug(" user B2B Id " + b2bId);
					LOG.debug(" user B2B Currency " + b2bCurrency);
				}
			}
		GEEdgeCustomerModel customerModel= bhgeSoldToUtil.getCurrentUserById(userName);
		if(customerModel != null) {
			accessToken.setInternalUser(customerModel.getIsInternalUser());
		}
		if(b2bId != null && b2bCurrency != null) {
			accessToken.setDefault_b2b(b2bId);
			accessToken.setDefault_currency(b2bCurrency);
		}
		return accessToken;
	}

	//US507783: Populate customer data with visible categories.
	private List<String> getProdcutLineView(Collection<CategoryModel> visibleCategories) {
		List<String> productLineView = new ArrayList<>();
		if(CollectionUtils.isNotEmpty(visibleCategories)){
			productLineView = visibleCategories.stream()
					.map(category -> {
						if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.WAYGATE)){
							return "waygate";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.BENTLY)){
							return "cordant";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.PANAMETRICS)){
							return "panametrics";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.DRUCK)){
							return "druck";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.ReuterStokes)){
							return "reuter-stokes";
						}
						return null; // or you could use Optional.empty() and filter out nulls in the next step
					})
					.filter(Objects::nonNull) // Remove any nulls that were returned
					.collect(Collectors.toList());
			return productLineView;
		}
		return productLineView;
	}

	private List<String> getApproversList(Collection<BHGEApprovalDetailsModel> approversList) {
		List<String> productLineView = new ArrayList<>();
		if(CollectionUtils.isNotEmpty(approversList)){
			productLineView = approversList.stream()
					.map(category -> {
						LOG.debug("category.getApproverGroupName() :- " + category.getApproverGroupName());
						if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_WAYGATE)){
							return "waygate";
						} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_BENTLY)){
							return "cordant";
						} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_PANAMETRICS)){
							return "panametrics";
						} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_DRUCK)){
							return "druck";
						} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_ReuterStokes)){
							return "reuter-stokes";
						}
						return null; // or you could use Optional.empty() and filter out nulls in the next step
					})
					.filter(Objects::nonNull) // Remove any nulls that were returned
					.collect(Collectors.toList());
			return productLineView;
		}
		return productLineView;
	}

	private void validateUser(String user){

			try
			{
				UserModel userModel;

				try
					{
						user = user.toLowerCase();
						userModel = userService.getUserForUID(user);
						LOG.info("User found: " + userModel);
					}
					catch (final UnknownIdentifierException userExc)
					{
						LOG.info("Error while fetching user: " + userExc.getMessage());
						final UserModel registerUser = registerDao.getUserBySSO(user);
						if (registerUser != null && registerUser instanceof BHGERegieterCustomerModel)
						{
							final BHGEUserAccessRequestModel userAccessRequest = registerDao.fetchUserAccessRequestModel((BHGERegieterCustomerModel) registerUser);
							if (null != userAccessRequest)
							{
								final String currentUserStatus = userAccessRequest.getRequestStatus().getCode();
								if (currentUserStatus.equalsIgnoreCase("PENDING_ACTIVATION")
										|| currentUserStatus.equalsIgnoreCase("PENDING_APPROVAL")
										|| currentUserStatus.equalsIgnoreCase("REJECTED"))
								{
									LOG.info("Customer trying to register has " + currentUserStatus + " Status");
									final String userStatus = currentUserStatus;

								/*	response.sendRedirect(Config.getParameter(APPLICATION_CONTEXT) + "/?userStatus=" + userStatus
											+ "&re=" + new SecureRandom().nextLong());
									return;*/
									checkUserStatus(userStatus);
								}
							}
							LOG.error("Register Access Request is failed for this user. Please inform user accordingly.");
							/*response.sendRedirect(Config.getParameter(APPLICATION_CONTEXT) + "/?isPendingAccess=true" + "&re="
									+ new SecureRandom().nextLong());*/
							displayPendingStatus();
							return;
						}
						else
						{
							LOG.info("user authenticated by Shibboleth but doesnt exist in Hybris1");
							displayUnauthorizedStatus();
							return;
						}
					}


				if (userModel != null && user != null)
				{

					LOG.error("~~~~~~~~~~~~~ USER Entry 01 - " + userModel.getUid() + " & Status - " + userModel.isLoginDisabled());

					final String reactivateSwitch = Config.getParameter("account.reactivate.switch");

					if (reactivateSwitch != null && reactivateSwitch.equalsIgnoreCase("ON")
							&& (userModel.isLoginDisabled() || !((B2BCustomerModel) userModel).getActive().booleanValue()))
					{
						//LOG.error("User is diabled by System. Proceed for Re-Activation Flow by Passcode. - " + redirectURL);
						final String sanitizedAccountCode = StringEscapeUtils.escapeHtml4(userModel.getUid());
						LOG.info("User SSO Login - " + sanitizedAccountCode);
						if (bhgeRegisterFacade.isSystemDisabled(sanitizedAccountCode))
						{
							throw new DSLoginException(sanitizedAccountCode, DSLoginException.USER_DISABLEDBYSYSTEM, userModel.getUid());
						}
						else
						{
							throw new DSLoginException("disabledByManager",DSLoginException.USER_DISABLEDBYMANAGER);
						}
					}

				}
			}
			catch (final UnknownIdentifierException exception)
			{
				exception.printStackTrace();
				LOG.info("user authenticated by Shibboleth but doesnt exist in Hybris in Catch");
				displayUnauthorizedStatus();

			}

	}
	
	private void displayUnauthorizedStatus(){
		throw new DSLoginException("loginFailure", DSLoginException.UNAUTHORIZED_SIGNIN);
	}
	
	private void displayPendingStatus(){
		throw new DSLoginException("Pendingaccess", DSLoginException.PENDING_ACCESS);
	}

	private void checkUserStatus(String userStatus){

		if (org.apache.commons.lang3.StringUtils.isNotEmpty(userStatus))
		{
			if (userStatus.equalsIgnoreCase("PENDING_ACTIVATION"))
			{
				throw new DSLoginException("Pendingactivationaccess", DSLoginException.PENDING_ACTIVATION);
			}
			if (userStatus.equalsIgnoreCase("PENDING_APPROVAL"))
			{
				throw new DSLoginException("Pendingapprovalaccess", DSLoginException.PENDING_APPROVAL);
			}
			if (userStatus.equalsIgnoreCase("REJECTED"))
			{
				throw new DSLoginException("Rejectedaccess", DSLoginException.REJECTED);
			}
			if (userStatus.equalsIgnoreCase("USERNOTASSIGNED"))
			{
				throw new DSLoginException("Denied", DSLoginException.USERNOTASSIGNED);
			}
		}
	}
	
	private void setLastLogin(final String userName)
	{
		final GEEdgeCustomerModel currentUser = userService.getUserForUID(userName, GEEdgeCustomerModel.class);
		if(currentUser != null && !userService.isAnonymousUser(currentUser)) 
		{
			final ZonedDateTime zdt = ZonedDateTime.now();
			final Date lastLoginDate = Date.from(zdt.toInstant());
			currentUser.setLastLogin(lastLoginDate);
			modelService.save(currentUser);
		}
	}


	/*private AccessToken convertAccessToken(
			AccessToken defaultOAuth2AccessToken) {
		if(LOG.isDebugEnabled()) {
			if(defaultOAuth2AccessToken != null) {
				LOG.debug(" Token for frontend " + defaultOAuth2AccessToken);
			}
		}
		
		AccessToken accessToken = new AccessToken();
		accessToken.setAccess_token(defaultOAuth2AccessToken.getValue());
		accessToken.setToken_type("bearer");
		accessToken.setExpires_in(String.valueOf(defaultOAuth2AccessToken.getExpiresIn()));
		accessToken.setRefresh_token(defaultOAuth2AccessToken.getRefreshToken().toString());
		accessToken.setScope("openid profile email offline_access");
		accessToken.setUserId("current");
//		vsWsCustomerFacade.postLoginUpdate(); TODO: Shahid check if really we need this.
		return accessToken;
		
		
	}*/

	@Operation(operationId = "doLogout", summary = "Do Logout")
	@RequestMapping(value = "/revoke/{tokenString}", method = RequestMethod.GET)
	@ResponseBody
	public String doLogout(@Parameter(description = "Token to logout user", required = true) @PathVariable final String tokenString, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse)
	{
		
		String redirectUrl =  null;
//		final OpenIDClientDetailsModel openIDCClientDetails = vsintegrationFacade.fetchOpenIDClientDetails();
//		redirectUrl =  openIDCClientDetails.getLogoffUrl();
		revokeToken(tokenString);
		if(!StringUtils.isNotEmpty(redirectUrl)) {
			redirectUrl =  Config.getParameter(DsoccConstants.SSO_LOGOUT_URL);
		}
		return redirectUrl;
		

	}
	
	/**
	 * @param tokenString
	 * @return
	 */
	private boolean revokeToken(String tokenString) {
		boolean  returnValue = false;
		
		if(StringUtils.isNotEmpty(tokenString)) {
//			returnValue = vsintegrationFacade.revoke(tokenString);
			
		}
		return returnValue;
	}

	private AccessToken convertAccessToken(ResponseEntity<AccessToken> responseEntity) {
		if(LOG.isDebugEnabled()) {
			if(responseEntity != null) {
				LOG.debug(" Token for frontend " + responseEntity);
			}
		}
		
		AccessToken accessToken = new AccessToken();
		accessToken.setAccess_token(responseEntity.getBody().getAccess_token());
		accessToken.setToken_type("bearer");
		accessToken.setExpires_in("1800");
		accessToken.setRefresh_token(responseEntity.getBody().getRefresh_token());
		accessToken.setScope("basic openid");
		accessToken.setUserId("current");
//		vsWsCustomerFacade.postLoginUpdate();
		return accessToken;
		
		
	}

	/**
	 * Set User session
	 * @param userName
	 * @param responseEntity 
	 */
	private AccessToken getAccessToken(String userName, AccessToken responseEntity) {
		String password = Config.getString("okta.sso.default.password","test");

		final UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(StringUtils.lowerCase(userName), StringEscapeUtils.escapeHtml4(password));
		LOG.info("UserName and Password for Authentication : " + StringUtils.lowerCase(userName) + " : " + StringEscapeUtils.escapeHtml4(password));
		LOG.info("Authentication Request : " + authReq.toString());
		try {
				final Authentication auth = authenticationManager.authenticate(authReq);
				LOG.info("Authentication Response : " + auth.toString());
				final SecurityContext sc = SecurityContextHolder.getContext();
				sc.setAuthentication(auth);
				setLastLogin(userName);
				AccessToken oAuthTokenModel = null;
				if(sc.getAuthentication().isAuthenticated()) {
					oAuthTokenModel = bhgeoAuthLoginService.getOAuthAccessToken(auth, responseEntity);
				}
				return oAuthTokenModel;
		}catch(AuthenticationException authenticationEception) {
			LOG.error("Exception is getting OAuth Token",authenticationEception);
			if(authenticationEception.getMessage().equalsIgnoreCase(USER_DISABLED)){
				throw new DSLoginException("Unable to login", DSLoginException.USER_DISABLED, authenticationEception);
			} else if(authenticationEception.getMessage().equalsIgnoreCase(BAD_CREDENTIALS)){
				throw new DSLoginException("Unable to login", DSLoginException.USER_NOT_REGISTERED, authenticationEception);
			} else{
				throw new DSLoginException("Unable to login", DSLoginException.PROCESSING_ERROR, authenticationEception);
			}
		}
		
	}
	
	@RequestMapping(value = "/redirect_login", method = RequestMethod.GET)
	public ModelAndView redirectToSSO(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
		final String httpRequestURL = StringEscapeUtils.escapeHtml4(request.getRequestURL().toString());

		if(org.apache.commons.lang3.StringUtils.isEmpty(request.getHeader("Authorization"))) {

//			final OpenIDClientDetailsModel openIDCClientDetails = vsintegrationFacade.fetchOpenIDClientDetails();
			final String serverName = StringEscapeUtils.escapeHtml4(request.getServerName().toString());
			LOG.info("DsServerNameinRedirect " + serverName);
			//final String ssoUrl = bhgeoAuthLoginService.generateSSOURL(httpRequestURL);
			final String ssoUrl = bhgeoAuthLoginService.generateSSOURL(serverName);
//			String ssoUrl = "/login";
//			if (null != ssoURL)
//			{
//				ssoUrl = getSSOUrl(openIDCClientDetails);
//
//			}

			httpServletResponse.setHeader("ds_redirect_Url", ssoUrl);
		}
		String redirectUrl =  httpServletResponse.getHeader("ds_redirect_Url");
		return new ModelAndView("redirect:" + redirectUrl);

	}


	/*@RequestMapping(value = "/account/reactivate/load/{userName}/", method = RequestMethod.GET)
	public String activateEmailTrigger(final Model model, final HttpServletRequest request, final HttpServletResponse response,
									   final HttpSession session, @PathVariable(required = true)
									   final String userName) throws CMSItemNotFoundException, EmailException
	{
		LOG.info("Inside activateEmailTrigger - START - " + StringEscapeUtils.escapeHtml4(userName));
		final String tokenValue = bhgeRegisterFacade.loadReactivateAccount(StringEscapeUtils.escapeHtml4(userName));
		LOG.info("tokenValue = " + tokenValue);

		if (tokenValue != null && tokenValue.equals("NOCHANGE"))
		{
			//model.addAttribute("returnStatus", tokenValue);
			return "NOCHANGE";
		}
		else
		{
			final GEEdgeCustomerModel user = registerUserDao.validateReactivateAccount(StringEscapeUtils.escapeHtml4(userName));
			if (user != null)
			{
				try
				{
					emailservice.loadReactiveMail(user.getEmail(), user.getName(), tokenValue, StringEscapeUtils.escapeHtml4(userName),
							true);
				}
				catch (final CMSItemNotFoundException e)
				{
					LOG.error("CMSItemNotFoundException found while triggering resend verification email");
				}
				catch (final EmailException e)
				{
					LOG.error("EmailException found while triggering resend verification email");
				}

			}
			//model.addAttribute("returnStatus", "ENABLED");
			return "ENABLED";
		}
		//storeCmsPageInModel(model, getContentPageForLabelOrId(EMAIL_RESEND));
		//setUpMetaDataForContentPage(model, getContentPageForLabelOrId(EMAIL_RESEND));
		LOG.info("Inside activateEmailTrigger - SUCCESS - " + StringEscapeUtils.escapeHtml4(userName));
		return tokenValue;
	}
*/
}
