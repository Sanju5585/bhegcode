/**
 *
 */
package com.bhge.register.connector.services.impl;

import com.nimbusds.oauth2.sdk.token.AccessToken;
import de.hybris.platform.util.Config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
/*import org.springframework.security.oauth2.client.DefaultOAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.DefaultAccessTokenRequest;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordAccessTokenProvider;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordResourceDetails;
import org.springframework.security.oauth2.common.AuthenticationScheme;
import org.springframework.security.oauth2.common.OAuth2AccessToken;*/
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.bhge.register.connector.constants.BhgeregisterconnectorConstants;
import com.bhge.register.connector.dam.domain.UserData;
import com.bhge.register.connector.dam.domain.UserRequest;
import com.bhge.register.connector.services.ApplicationConnectorService;
import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * @author 586667
 *
 */
public class ApplicationConnectorServiceImpl implements ApplicationConnectorService
{
	private static final Logger LOG = LoggerFactory.getLogger(ApplicationConnectorServiceImpl.class);

	private static final String DAM_SERVICE_CREATEUSER_URL = "bhge.register.oidc.createuser.url";
	private static final String DAM_OAUTH_OIDC_WEBURL = "bhge.register.oidc.oauth2.url";
	private static final String DAM_OAUTH_OIDC_GRANTTYPE = "bhge.register.oidc.granttype";
	private static final String DAM_OAUTH_OIDC_CLIENTID = "bhge.register.oidc.clientid";
	private static final String DAM_OAUTH_OIDC_CLIENTSECRET = "bhge.register.oidc.clientsecret";
	private static final String DAM_OAUTH_OIDC_USERNAME = "bhge.register.oidc.username";
	private static final String DAM_OAUTH_OIDC_USERSECRET = "bhge.register.oidc.usersecret";
	private static final String DAM_OAUTH_OIDC_SCOPE = "bhge.register.oidc.scope";


	public String processDamUserSetup(final UserRequest userData)
	{
		String statusCall = BhgeregisterconnectorConstants.SERVICE_STATUS_SUCCESS;
		ResponseEntity<Object> response = null;
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		LOG.info("DAM URL - " + Config.getParameter(DAM_SERVICE_CREATEUSER_URL));
		final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(DAM_SERVICE_CREATEUSER_URL);
		final SimpleClientHttpRequestFactory clientHttpRequestFactory = new SimpleClientHttpRequestFactory();
		final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
		try
		{
			LOG.debug("DAM userData 19 :: " + userData.toString() + " & DAM JSON userData = "
					+ new ObjectMapper().writeValueAsString(userData));
			AccessToken token= requestAccessToken();
			headers.setBearerAuth(token.getValue());
			final HttpEntity<?> requestEntity = new HttpEntity<>(userData, headers);
			final long startTime = System.currentTimeMillis();
			response = restTemplate.exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, Object.class);
			final long endTime = System.currentTimeMillis();
			LOG.info("DAM API Time Window : " + (endTime - startTime));
			if (null != response && null != response.getBody())
			{
				LOG.info("Inside Response - " + response.hasBody() + "  | Status Code  - " + response.getStatusCode()
						+ " & Inside Body - " + response.getBody().toString());
			}
		}
		catch (final IllegalArgumentException exc)
		{
			statusCall = BhgeregisterconnectorConstants.SERVICE_STATUS_FAILURE;
			LOG.error("DAM API Error : " + exc.toString());
			exc.printStackTrace();
		}
		catch (final Exception exc)
		{
			statusCall = BhgeregisterconnectorConstants.SERVICE_STATUS_FAILURE;
			LOG.error("DAM API Error : " + exc.toString());
			exc.printStackTrace();
		}

		LOG.error("DAM API Final Result : " + statusCall);

		return statusCall;
	}

/*
	private OAuth2RestOperations fetchOAuthTemplate()
	{
		LOG.info("DAM - WEBDAM Call : Access Token");
		final ResourceOwnerPasswordResourceDetails oauthParams = new ResourceOwnerPasswordResourceDetails();
		oauthParams.setAccessTokenUri(DAM_OAUTH_OIDC_WEBURL);
		oauthParams.setClientId(DAM_OAUTH_OIDC_CLIENTID);
		oauthParams.setClientSecret(DAM_OAUTH_OIDC_CLIENTSECRET);
		oauthParams.setGrantType(DAM_OAUTH_OIDC_GRANTTYPE);
		oauthParams.setUsername(DAM_OAUTH_OIDC_USERNAME);
		oauthParams.setPassword(DAM_OAUTH_OIDC_USERSECRET);
		// Scope is option

		oauthParams.setClientAuthenticationScheme(AuthenticationScheme.query);
		final OAuth2AccessToken accessToken = new ResourceOwnerPasswordAccessTokenProvider().obtainAccessToken(oauthParams,
				new DefaultAccessTokenRequest());
		return new OAuth2RestTemplate(oauthParams, new DefaultOAuth2ClientContext(accessToken));
	}
*/

	private AccessToken requestAccessToken() {
		String tokenUrl = Config.getParameter(DAM_OAUTH_OIDC_WEBURL);
		String clientId = Config.getParameter(DAM_OAUTH_OIDC_CLIENTID);
		String clientSecret = Config.getParameter(DAM_OAUTH_OIDC_CLIENTSECRET);
		String scope = Config.getParameter(DAM_OAUTH_OIDC_SCOPE);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.setBasicAuth(clientId, clientSecret);
		MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("grant_type", Config.getParameter(DAM_OAUTH_OIDC_GRANTTYPE));
		body.add("scope", scope);
		HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(body, headers);
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<AccessToken> response = restTemplate.postForEntity(tokenUrl, entity, AccessToken.class);
		return response.getBody();
	}

/*	//private RestTemplate createRestTemplate() {
		return new RestTemplate();
	}*/
}

