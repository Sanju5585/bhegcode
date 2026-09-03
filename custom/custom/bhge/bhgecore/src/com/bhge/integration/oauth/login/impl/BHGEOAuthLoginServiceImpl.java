package com.bhge.integration.oauth.login.impl;

import com.bhge.core.util.AccessToken;
import com.bhge.integration.oauth.login.BHGEOAuthLoginService;
import com.bhge.integration.oauth.login.dao.BHGEOAuthLoginDao;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.oauth2.client.ClientDetailsDao;

import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
/*import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.resource.UserRedirectRequiredException;
import org.springframework.security.oauth2.client.token.AccessTokenRequest;
import org.springframework.security.oauth2.client.token.DefaultAccessTokenRequest;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeAccessTokenProvider;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordAccessTokenProvider;
import org.springframework.security.oauth2.common.AuthenticationScheme;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.DefaultOAuth2RefreshToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;*/

import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.model.OpenIDClientDetailsModel;

import java.io.IOException;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
/*import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.OAuth2Request;
import org.springframework.security.oauth2.provider.token.TokenStore;*/
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

public class BHGEOAuthLoginServiceImpl implements BHGEOAuthLoginService {

    private final static Logger LOG = Logger.getLogger(BHGEOAuthLoginServiceImpl.class);

	private static final String OAUTH_CLIENT_ID = "mobile_android";
	private static final String CODE = "code";
	private static final String EXPIRATION_SECONDS = "token.expiration.Seconds";
/*	@Autowired
	TokenStore oauthTokenStore;*/
	@Resource(name="configurationService")
	private ConfigurationService configurationService;


	/*@Autowired
	private OAuthRevokeTokenService oauthRevokeTokenService;

	@Autowired
	OAuthTokenService oauthTokenServices;*/


	@Autowired
	UserService userService;

    @Autowired
    private BHGEOAuthLoginDao bhgeOAuthLoginDao;

    //private static final String SECRET_ID="b5b4d78bc90c";
    private static final String SECRET_ID="oauth.client.secret";
    private static final String CLIENT_ID = "GEOG_DS_STAGE_CLIENT";
    private static final String CALL_BACK_URL = "https://bhge.local:7002/redirect_uri";
    private static final String AUTHORIZE_URL = "https://fssfed.stage.ge.com/fss/as/authorization.oauth2";
    private static final String ACCESS_TOKEN_URL = "https://fssfed.stage.ge.com/fss/as/token.oauth2";
    private static final String SCOPE = "openid profile";
    private static final String GRANT_TYPE = "authorization_code";
    private static final String REST_USERINFO_URL="https://fssfed.stage.ge.com/fss/idp/userinfo.openid";
    private static final String REGISTER="register";
    private static final String API="api.";
    private static final String JSAPPS="jsapps";
    private static final String ACCSTOREFRONT="accstorefront";

	/*
	 * @Override public void generateAuthorizationCode() throws UserRedirectRequiredException {
	 * 
	 * final AuthorizationCodeResourceDetails oAuthParams= new AuthorizationCodeResourceDetails();
	 * oAuthParams.setAccessTokenUri(ACCESS_TOKEN_URL); oAuthParams.setClientId(CLIENT_ID);
	 * oAuthParams.setClientSecret(SECRET_ID); oAuthParams.setGrantType(GRANT_TYPE);
	 * oAuthParams.setUserAuthorizationUri(AUTHORIZE_URL); oAuthParams.setScope(Arrays.asList("openid profile"));
	 * oAuthParams.setPreEstablishedRedirectUri(CALL_BACK_URL);
	 * oAuthParams.setClientAuthenticationScheme(AuthenticationScheme.header); final OAuth2AccessToken authCode = new
	 * AuthorizationCodeAccessTokenProvider().obtainAccessToken(oAuthParams, new DefaultAccessTokenRequest());
	 * LOG.info("##### authCode is " + authCode.toString()); LOG.info("##### authCode is " + authCode.getValue()); }
	 */
    
    /*@Override
    public void generateAuthorizationCode(final HttpSession session) throws UserRedirectRequiredException {

        final AuthorizationCodeResourceDetails oAuthParams= new AuthorizationCodeResourceDetails();
        OAuth2AccessToken authCode = null;
        oAuthParams.setAccessTokenUri(ACCESS_TOKEN_URL);
        oAuthParams.setClientId(CLIENT_ID);
        oAuthParams.setClientSecret(SECRET_ID);
        oAuthParams.setGrantType(GRANT_TYPE);
        oAuthParams.setUserAuthorizationUri(AUTHORIZE_URL);
        oAuthParams.setScope(Arrays.asList("openid"));
        oAuthParams.setPreEstablishedRedirectUri(CALL_BACK_URL);
        oAuthParams.setClientAuthenticationScheme(AuthenticationScheme.header);
        try 
        {
           authCode = new AuthorizationCodeAccessTokenProvider().obtainAccessToken(oAuthParams, new DefaultAccessTokenRequest());
        }
        catch(Exception e)
        {
      	  LOG.info("### Exception in generating authCode " + e.getMessage());
        }
        LOG.info("##### authCode is " + authCode.toString());
        LOG.info("##### value of authCode is " + authCode.getValue());
        LOG.info("##### refresh Token of authCode is " + authCode.getRefreshToken());
        session.setAttribute("code", authCode.getValue());      
    }*/
	public AccessToken generateAccessToken_legacy(String authorizationCode, String state,Object preservedState,
										   final HttpServletRequest httpRequest) {
		final String requestURL = httpRequest.getRequestURL().toString();
		final OpenIDClientDetailsModel openIdcClientDetail = bhgeOAuthLoginDao.fetchOpenIDClientDetails();
		String redirectUrl = null;
		if(requestURL.contains(REGISTER))
		{
			redirectUrl = openIdcClientDetail.getRegisteredRedirectUri()
					.stream().filter(redirect -> redirect.contains(REGISTER)).findFirst().get();
		}
		else
		{
			redirectUrl = openIdcClientDetail.getRegisteredRedirectUri()
					.stream().filter(redirect -> !redirect.contains(REGISTER)).findFirst().get();
		}

		final RestTemplate restTemplate = new RestTemplate();
		final String tokenUrl = openIdcClientDetail.getTokenUrl() + "?" + "code" + "=" + authorizationCode + "&" + "client_id" + "="
				+ openIdcClientDetail.getClientId() + "&" + "client_secret" + "=" + Config.getParameter(SECRET_ID) + "&" + "grant_type" + "="
				+ openIdcClientDetail.getAuthorizedGrantTypes().stream().findFirst().get() + "&" + "redirect_uri" + "="
				+ redirectUrl;

		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		final HttpEntity request = new HttpEntity(headers);
		ResponseEntity<AccessToken> responseEntity = null;
		try
		{
			responseEntity = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, AccessToken.class);
			if(null != responseEntity)
			{
				LOG.info("=======access=====token======="+responseEntity.getBody().getAccess_token());
				return responseEntity.getBody();

			}
		}
		catch(Exception e)
		{
			LOG.info("=======Error in generating token=======" + e.getMessage());
		}
		if(null != responseEntity){
			return responseEntity.getBody();
		} else{
			return null;
		}
		// return accessToken;
	}
    @Override
    public AccessToken generateAccessToken(String authorizationCode, String state,Object preservedState,
   		 final HttpServletRequest httpRequest) {
   	 final String requestURL = httpRequest!= null && httpRequest.getRequestURL() != null && httpRequest.getRequestURL().toString() != null ?
		httpRequest.getRequestURL().toString() : "";
		if(null != httpRequest && null != httpRequest.getRequestURL() && null != httpRequest.getServerName())
		{
			LOG.info("DSServeringenerate is " + httpRequest.getServerName());
		}

   	 final OpenIDClientDetailsModel openIdcClientDetail = bhgeOAuthLoginDao.fetchOpenIDClientDetails();
	 String redirectUrl = null;
		
		if (null != httpRequest.getServerName() && null != httpRequest.getServerName().toString()) 
		{
			redirectUrl = getRedirectURL(openIdcClientDetail, httpRequest.getServerName().toString());
		}		 
		
		/*
		 * if (requestURL.contains(REGISTER)) { redirectUrl =
		 * openIdcClientDetail.getRegisteredRedirectUri().stream() .filter(redirect ->
		 * redirect.contains(REGISTER)).findFirst().get(); } else { redirectUrl =
		 * openIdcClientDetail.getRegisteredRedirectUri().stream() .filter(redirect ->
		 * !redirect.contains(REGISTER)).findFirst().get(); }
		 */
		 
        
        final RestTemplate restTemplate = new RestTemplate();
        final String tokenUrl = openIdcClientDetail.getTokenUrl();
        
        final HttpHeaders headers = new HttpHeaders();

		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.setAccept(Collections.singletonList(MediaType.ALL));
		MultiValueMap<String, String> reqBody = new LinkedMultiValueMap<String, String>();
		reqBody.add("code", authorizationCode);
		reqBody.add("grant_type", openIdcClientDetail.getAuthorizedGrantTypes().stream().findFirst().get());
		reqBody.add("redirect_uri", redirectUrl);
		reqBody.add("client_id", openIdcClientDetail.getClientId() );
		reqBody.add("client_secret", Config.getParameter(SECRET_ID));

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(reqBody, headers);

		ResponseEntity<AccessToken> responseEntity = null;
  		try
  		{
  			responseEntity = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, AccessToken.class);
  			if(null != responseEntity)
  			{
  	        LOG.info("=======access=====token======="+responseEntity.getBody().getAccess_token());
  	        return responseEntity.getBody();

  			}
  		}
  		catch(Exception e)
  		{
  			LOG.error("=======Error in generating token=======" + e.getMessage());
  		}
  		if(null != responseEntity){
  			return responseEntity.getBody();
  		} else{
  			return null;
  		} 		
       // return accessToken;
    }

    @Override
    //public String getUserInfo(OAuth2AccessToken token) {
    //public String getUserInfo(AccessToken token) {
    public ResponseEntity<String> getUserInfo(AccessToken token) {
   	 final OpenIDClientDetailsModel openIdcClientDetail = bhgeOAuthLoginDao.fetchOpenIDClientDetails();
        String userId=null;
		String ssoPrimaryField = Config.getString("oauth.client.primaryfield","sub");
        //Rest call to obtain user info
        HttpHeaders headers1 = new HttpHeaders();
        headers1.setContentType(MediaType.APPLICATION_JSON);
        headers1.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers1.add("Authorization", "Bearer " + token.getAccess_token());
        HttpEntity<String> entity = new HttpEntity<>(headers1);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response=restTemplate.exchange(openIdcClientDetail.getUserProfileUrl(), HttpMethod.GET, entity, String.class);
        LOG.info("============User info response============"+response);
        //Reading response
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode node = mapper.readTree(response.getBody());
            userId = node.path(ssoPrimaryField).asText();

        }
        catch(IOException e){
            LOG.error(e.getMessage());
        }
        return response;
    }
    
    @Override
    public String generateSSOURL(String requestURI) {
   	 
   	 final OpenIDClientDetailsModel openIdcClientDetail = bhgeOAuthLoginDao.fetchOpenIDClientDetails();
	 String redirectUrl = null;
   	 LOG.info(" DSServerNameinSSOURL is : " + requestURI);
   	 redirectUrl = getRedirectURL(openIdcClientDetail, requestURI);
		
		/*
		 * if (requestURI.contains(REGISTER)) { redirectUrl =
		 * openIdcClientDetail.getRegisteredRedirectUri().stream() .filter(redirect ->
		 * redirect.contains(REGISTER)).findFirst().get();
		 * LOG.info(" DSRedirectURL is : " + redirectUrl); } else { redirectUrl =
		 * openIdcClientDetail.getRegisteredRedirectUri().stream() .filter(redirect ->
		 * !redirect.contains(REGISTER)).findFirst().get();
		 * LOG.info(" DSRedirectURL is : " + redirectUrl); }
		 */
		 
   	 String SSOURL = openIdcClientDetail.getOAuthUrl();
		 SSOURL += "?" + "response_type" + "=" + openIdcClientDetail.getResponseType();
		 SSOURL += "&" + "client_id" + "=" + openIdcClientDetail.getClientId();
		SSOURL += "&" + "state" + "=" + "state";
		SSOURL += "&" + "redirect_uri" + "=" + redirectUrl;
		 SSOURL += "&" + "scope" + "=" + openIdcClientDetail.getScope().stream().collect(Collectors.joining(" "));
		 return SSOURL;		
    }
    
    
    public String getRedirectURL(OpenIDClientDetailsModel openIdcClientDetail, String serverName)
    {
    	 String redirectUrl = null;
    	 if(null != serverName)
    	 {
    		 if (serverName.contains(REGISTER)) 
    		 {
    				redirectUrl = openIdcClientDetail.getRegisteredRedirectUri().stream()
    						.filter(redirect -> redirect.contains(REGISTER)).findFirst().get();
    				LOG.info(" DSRedirectURL is : " + redirectUrl);
    		 } 
    		 else 
    		 {
    				if(!Config.getParameter("current.env").equalsIgnoreCase("local"))
    				{
    					if(serverName.contains(ACCSTOREFRONT))
    					{
    						redirectUrl = openIdcClientDetail.getRegisteredRedirectUri().stream()
    	    						.filter(redirect -> redirect.contains(ACCSTOREFRONT)).findFirst().get();
    					}
    					else
    					{
    						redirectUrl = openIdcClientDetail.getRegisteredRedirectUri().stream()
    	    						.filter(redirect -> !redirect.contains(ACCSTOREFRONT) && !redirect.contains(REGISTER))
    	    						.findFirst().get();
    					}
    					
    				}
    				else
    				{   					
    						redirectUrl = openIdcClientDetail.getRegisteredRedirectUri().stream()
    								.filter(redirect -> !redirect.contains(REGISTER)).findFirst().get();
    						LOG.info(" DSRedirectURL is : " + redirectUrl);
					/*
					 * redirectUrl = openIdcClientDetail.getRegisteredRedirectUri()
					 * .stream().filter(redirect ->
					 * redirect.contains(serverName)).findFirst().get();
					 */
    				}
    				LOG.info(" DSRedirectURL is : " + redirectUrl);
    			}  		 
    	 }
      	 return redirectUrl;
    }
    

	@Override
	public AccessToken getOAuthAccessToken(Authentication auth, AccessToken responseEntity) {
		//remove any existing token if available sessions
		//clearAccessTokens(auth);
		final UserModel currentUser = userService.getUserForUID(StringUtils.lowerCase(auth.getName()));
		/*final AccessToken defaultAcccessToken = new AccessToken(
				responseEntity.getAccess_token());
		final DefaultOAuth2RefreshToken refreshToken = new DefaultOAuth2RefreshToken(responseEntity.getRefresh_token());
		final Calendar cal = Calendar.getInstance();
		String expirationSeconds = Config.getString(EXPIRATION_SECONDS,"10800");
		cal.add(Calendar.SECOND, Integer.valueOf(expirationSeconds));
		defaultAcccessToken.setExpiration(cal.getTime());
		defaultAcccessToken.setRefreshToken(refreshToken);
		defaultAcccessToken.setTokenType("bearer");*/
		userService.setCurrentUser(currentUser);
		AccessToken token = new AccessToken();
		LOG.info("=======access=====token======= in 369 "+ responseEntity.getAccess_token());
		token.setAccess_token(responseEntity.getAccess_token());
		LOG.info("=======refresh=====token======= in 371 "+ responseEntity.getRefresh_token());
		token.setRefresh_token(responseEntity.getRefresh_token());
		String expirationSeconds = configurationService.getConfiguration().getString(EXPIRATION_SECONDS, "3600");
		token.setExpires_in(String.valueOf(Integer.parseInt(expirationSeconds)));
		final Set<String> scope = new HashSet<>();
//		scope.add("basic");
		scope.add("openid");
		scope.add("profile");
		scope.add("email");
		scope.add("offline_access");
		token.setScope(String.join(" ", scope));
		token.setToken_type("bearer");
		token.setUserId("current");
		/*final OAuth2Request oAuth2Req = new OAuth2Request(null, OAUTH_CLIENT_ID, null, true, scope, null, null, null, null);
		final OAuth2Authentication oAuthentication = new OAuth2Authentication(oAuth2Req, auth);
		oauthTokenStore.storeAccessToken(defaultAcccessToken, oAuthentication);
		userService.setCurrentUser(currentUser);*/
		return token;	}

	//@Override
	/*public Boolean revoke(String tokenString) {
		if (StringUtils.isNotEmpty(tokenString))
		{
			oauthRevokeTokenService.revokeAccessToken(tokenString);

			return Boolean.TRUE;
		}
		return Boolean.FALSE;
	}*/


	/**
	 * This is used to clear access tokens
	 *
	 * @param auth
	 */
	/*private void clearAccessTokens(final Authentication auth)
	{
		final Collection<AccessToken> defaultAcccessTokens = oauthTokenStore.findTokensByClientIdAndUserName(OAUTH_CLIENT_ID,
				auth.getName());
		if (!defaultAcccessTokens.isEmpty())
		{
			for (final Iterator iterator = defaultAcccessTokens.iterator(); iterator.hasNext();)
			{
				final AccessToken oAuth2AccessToken = (AccessToken) iterator.next();
				oauthTokenStore.removeRefreshToken(oAuth2AccessToken.getRefreshToken());
				oauthTokenStore.removeAccessToken(oAuth2AccessToken);

			}

		}
	}*/
}
