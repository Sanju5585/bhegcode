package com.bh.occ.filter;

import java.io.IOException;
import java.time.Instant;
import java.util.Optional;
import java.util.stream.Collectors;

import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.Sanitizer;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.bhge.integration.oauth.login.BHGEOAuthLoginService;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;


import de.hybris.platform.commerceservices.user.UserMatchingService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.model.OpenIDClientDetailsModel;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;


public class DSUserMatchingFilter extends DSAbstractUrlMatchingFilter {


	@Autowired
	private BHGEOAuthLoginService bhgeoAuthLoginService;

	private UserService userService;


	private SessionService sessionService;

	private UserMatchingService userMatchingService;
	
	private static final Logger LOG = LoggerFactory.getLogger(DSUserMatchingFilter.class);
	public static final String ROLE_ANONYMOUS = "ROLE_ANONYMOUS";
	public static final String ROLE_CUSTOMERGROUP = "ROLE_CUSTOMERGROUP";
	public static final String ROLE_CUSTOMERMANAGERGROUP = "ROLE_CUSTOMERMANAGERGROUP";
	public static final String ROLE_TRUSTED_CLIENT = "ROLE_TRUSTED_CLIENT";
	public static final String ROLE_B2BGROUP = "ROLE_B2BGROUP";
	public static final String ROLE_B2BCUSTOMERGROUP="ROLE_B2BCUSTOMERGROUP";
    public static final String HTTP_HEADER_NAME_USER_ID = "sap-commerce-cloud-user-id";
	private static final String CURRENT_USER = "current";
	private static final String ANONYMOUS_USER = "anonymous";
	private static final String ACTING_USER_UID = "ACTING_USER_UID";
	private static final String OKTA_CLIENT_BYPASS_PROPERTY = "oktaclient.bypass";

	private BaseSiteService baseSiteService;

	private String regexp;

	/**
	 * @return the regexp
	 */
	public String getRegexp() {
		return regexp;
	}



	/**
	 * @param regexp the regexp to set
	 */
	public void setRegexp(String regexp) {
		this.regexp = regexp;
	}



	/**
	 * @return the userService
	 */





	
		@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		//Read header token from header
		//Call profile API
		//validate profile api in hybris
		//load current session based on that
		//store the token
			final String httpRequestURL = StringEscapeUtils.escapeHtml4(request.getRequestURL().toString());
			LOG.info(" DSUserMatchingFilter Request URL: " + httpRequestURL);
			final boolean oktaClientBypass = Config.getBoolean(OKTA_CLIENT_BYPASS_PROPERTY, false);
			if(StringUtils.isEmpty(request.getHeader("Authorization"))) {
				if (oktaClientBypass)
				{
					applyAnonymousSsoHeaderWithBypass(response, httpRequestURL);
				}
				else
				{
					LOG.info(" DSUserMatchingFilter Authorization header is empty, redirecting to SSO login page");
					final String ssoUrl = bhgeoAuthLoginService.generateSSOURL(httpRequestURL);
					response.setHeader("ds_redirect_Url", ssoUrl);
				}
			}

			final BaseSiteModel currentBaseSite = baseSiteService.getCurrentBaseSite();

			final Authentication auth = getAuth();
			LOG.info(" DSUserMatchingFilter Authentication: " + auth);
			String principal = getPrincipal(auth);
			LOG.info(" DSUserMatchingFilter Principal: " + principal);
			if (oktaClientBypass)
			{
				if (principal != null)
				{
					principal = principal.toLowerCase();
				}
			}
			else
			{
				principal=principal.toLowerCase();
			}
			LOG.info(" DSUserMatchingFilter Principal after toLowerCase: " + principal);
			if (hasRole(ROLE_CUSTOMERGROUP, auth) || hasRole(ROLE_CUSTOMERMANAGERGROUP, auth))
			{
				LOG.info(" DSUserMatchingFilter Setting ACTING_USER_UID in session: " + principal);
				sessionService.setAttribute(ACTING_USER_UID, principal);
			}

			final String userID = getUserIdFromRequest(request, auth);

			if (userID == null)
			{
				handleNullUserId(auth, principal);
			}
			else if (userID.equals(ANONYMOUS_USER) && !hasRole(ROLE_CUSTOMERGROUP, auth))
			{
				setCurrentUser(userService.getAnonymousUser());
				LOG.debug("set user to anonymous user");
			}
			else if (hasRole(ROLE_TRUSTED_CLIENT, auth) || hasRole(ROLE_CUSTOMERMANAGERGROUP, auth))
			{
				LOG.info(" DSUserMatchingFilter Setting current user for trusted client role: " + principal + " with userID: " + userID);
				if (CURRENT_USER.equalsIgnoreCase(userID))
				{
					LOG.info(" Trusted Client Replacing current with principal {}", principal);
					setCurrentUser(principal);
				}
				else
				{
					setCurrentUser(userID);
				}
			}
			else if ((hasRole(ROLE_CUSTOMERGROUP, auth)) ||(hasRole(ROLE_B2BGROUP, auth) || hasRole(ROLE_B2BCUSTOMERGROUP, auth)))
			{
				LOG.info(" DSUserMatchingFilter Setting current user for customer group role: " + principal + " with userID: " + userID);
				setCurrentUserForCustomerGroupRole(principal, userID);
			}
			else
			{
				// could not match any authorized role
				LOG.info("Could not match any authorized role for uid %s", Sanitizer.sanitize(principal));
				throw new AccessDeniedException("Access is denied");
			}
			//checkB2CUserAccess(auth, currentBaseSite);

		filterChain.doFilter(request, response);
	}

	private void applyAnonymousSsoHeaderWithBypass(final HttpServletResponse response, final String httpRequestURL)
	{
		LOG.info(" DSUserMatchingFilter Authorization header is empty; continuing as anonymous (oktaclient.bypass=true)");
		try
		{
			final String ssoUrl = bhgeoAuthLoginService.generateSSOURL(httpRequestURL);
			if (StringUtils.isNotEmpty(ssoUrl))
			{
				response.setHeader("ds_redirect_Url", ssoUrl);
			}
		}
		catch (final Exception e)
		{
			LOG.warn("Could not generate SSO URL for anonymous OCC request: {}", e.getMessage());
		}
	}

	protected Authentication getAuth()
	{
		return SecurityContextHolder.getContext().getAuthentication();
	}
	protected void setCurrentUserForCustomerManagerGroupRole(final String id)
	{
		try
		{
			final UserModel user = userMatchingService.getUserByProperty(id, UserModel.class);

			if (Boolean.TRUE.equals(user.isLoginDisabled()))
			{
				LOG.info("User with id %s has login disabled, customer manager access denied", Sanitizer.sanitize(id));
				throw new UnknownIdentifierException("Cannot find user with propertyValue '" + Sanitizer.sanitize(id) + "'");
			}

			if (user.getDeactivationDate() != null && !user.getDeactivationDate().toInstant().isAfter(Instant.now()))
			{
				LOG.info("User with id %s is deactivated, customer manager access denied", Sanitizer.sanitize(id));
				throw new UnknownIdentifierException("Cannot find user with propertyValue '" + Sanitizer.sanitize(id) + "'");
			}

			setCurrentUser(user);
		}
		catch (final UnknownIdentifierException ex)
		{
			LOG.info("User with id %s not found", Sanitizer.sanitize(id));
			throw ex;
		}
	}



		
		/**
		 * TODO: Shahid Cleanup
		 * @param openIDCClientDetails
		 * @return
		 */
		private String getSSOUrl(final OpenIDClientDetailsModel openIDCClientDetails) {
			String SSOURL = openIDCClientDetails.getOAuthUrl();
			StringBuilder ssoUrl = new StringBuilder();
//			ssoUrl.append(SSOURL);
//			ssoUrl.append("?");
//			ssoUrl.append(VsintegrationFacade.RESPONSE_TYPE);
//			ssoUrl.append(VsintegrationFacade.EQUALS);
//			ssoUrl.append(openIDCClientDetails.getResponseType());
//			ssoUrl.append(VsintegrationFacade.AND);
//			ssoUrl.append(VsintegrationFacade.CLIENT_ID);
//			ssoUrl.append(VsintegrationFacade.EQUALS);
//			ssoUrl.append(openIDCClientDetails.getClientId());
//			ssoUrl.append(VsintegrationFacade.AND);
//			ssoUrl.append(VsintegrationFacade.REDIRECT_URI);
//			ssoUrl.append(VsintegrationFacade.EQUALS);
//			ssoUrl.append(openIDCClientDetails.getRegisteredRedirectUri().stream().findFirst().get());
//			ssoUrl.append(VsintegrationFacade.AND);
//			ssoUrl.append(VsintegrationFacade.STATE);
//			ssoUrl.append(VsintegrationFacade.EQUALS);
//			ssoUrl.append(VsintegrationFacade.STATE);
//			ssoUrl.append(VsintegrationFacade.AND);
//			ssoUrl.append(VsintegrationFacade.SCOPE);
//			ssoUrl.append(VsintegrationFacade.EQUALS);
//			ssoUrl.append(openIDCClientDetails.getScope().stream().collect(Collectors.joining(" ")));
//			if(LOG.isDebugEnabled()) {
//				LOG.debug("SSO URL " + ssoUrl.toString());
//			}
			return ssoUrl.toString();
		}

		protected void setCurrentUserForCustomerGroupRole(final String principal, final String userID)
		{
			String property = userID;
			if (userID.equalsIgnoreCase(CURRENT_USER))
			{
				LOG.info("DSUserMatchingFilter Setting current user for customer group role with CURRENT_USER property, using principal: " + principal);
				property = principal;
			}
			setCurrentUser(getUserForValidProperty(principal, property).orElseThrow(() -> {
				LOG.info("Try to access resource for %s with token for %s", Sanitizer.sanitize(userID),
						Sanitizer.sanitize(principal));
				return new AccessDeniedException("Access is denied");
			}));
		}
	protected String getPrincipal(final Authentication auth)
	{
		if (auth == null)
		{
			return null;
		}

		if (auth.getPrincipal() instanceof Jwt)
		{
			LOG.info(" DSUserMatchingFilter Principal is instance of Jwt, getting subject from Jwt");
			return ((Jwt) auth.getPrincipal()).getSubject().toLowerCase();
		}
		else
		{
			LOG.info(" DSUserMatchingFilter Principal is not instance of Jwt, getting principal as String");
			return (String) auth.getPrincipal();
		}
	}
	protected boolean hasRole(final String role, final Authentication auth)
	{
		if (auth == null)
		{
			return false;
		}

		for (final GrantedAuthority ga : auth.getAuthorities())
		{
			if (ga.getAuthority().equals(role))
			{
				if (LOG.isDebugEnabled())
				{
					LOG.debug(String.format("contains role %s", Sanitizer.sanitize(ga.getAuthority())));
				}
				return true;
			}
		}
		return false;
	}
	protected void setCurrentUser(final String id)
	{
		try
		{
			final UserModel user = userMatchingService.getUserByProperty(id, UserModel.class);
			setCurrentUser(user);
		}
		catch (final UnknownIdentifierException ex)
		{
			LOG.debug(ex.getMessage(), ex);
			LOG.info("User with id %s not found", Sanitizer.sanitize(id));
			throw ex;
		}
	}
	protected String getUserIdFromRequest(final HttpServletRequest request, final Authentication auth)
	{
		// try to get the userId from the request path
		String userID = getValue(request, regexp);

		// if the userId was not in the path, try to find the custom http header for the userId,
		// but only if a customer manager emulates a customer
		if (userID == null && hasRole(ROLE_CUSTOMERMANAGERGROUP, auth))
		{
			userID = request.getHeader(HTTP_HEADER_NAME_USER_ID);
		}

		return userID;
	}
	protected void setCurrentUser(final UserModel user)
	{
		userService.setCurrentUser(user);
	}
	protected Optional<UserModel> getUserForValidProperty(final String principal, final String propertyValue)
	{
		try
		{
			final UserModel user = userMatchingService.getUserByProperty(propertyValue, UserModel.class);
			LOG.info("DSUserMatchingFilter getUserForValidProperty: principal: " + principal + " propertyValue: " + propertyValue + " user.getUid(): " + user.getUid());
			if (principal.equalsIgnoreCase(user.getUid()))
			{
				return Optional.of(user);
			}
		}
		catch (final UnknownIdentifierException ex)
		{
			LOG.debug(ex.getMessage(), ex);
		}
		return Optional.empty();
	}
	private void handleNullUserId(final Authentication auth, final String principal)
	{
		if (hasRole(ROLE_CUSTOMERGROUP, auth) || hasRole(ROLE_CUSTOMERMANAGERGROUP, auth))
		{
			setCurrentUser(principal);
		}
		else
		{
			setCurrentUser(userService.getAnonymousUser());
			LOG.debug("set user to anonymous user");
		}
	}


	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public SessionService getSessionService() {
		return sessionService;
	}

	public void setSessionService(SessionService sessionService) {
		this.sessionService = sessionService;
	}

	public UserMatchingService getUserMatchingService() {
		return userMatchingService;
	}

	public void setUserMatchingService(UserMatchingService userMatchingService) {
		this.userMatchingService = userMatchingService;
	}

	public BaseSiteService getBaseSiteService() {
		return baseSiteService;
	}

	public void setBaseSiteService(BaseSiteService baseSiteService) {
		this.baseSiteService = baseSiteService;
	}
}
