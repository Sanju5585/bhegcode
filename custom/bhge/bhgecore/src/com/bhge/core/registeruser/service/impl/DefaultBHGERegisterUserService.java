
package com.bhge.core.registeruser.service.impl;

import java.util.ArrayList;

import com.nimbusds.oauth2.sdk.token.AccessToken;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
/*import org.springframework.security.oauth2.client.DefaultOAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;*/
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.bhge.core.registeruser.service.BHGERegisterUserService;
import com.bhge.core.registeruser.util.Constants;
import com.bhge.core.user.service.impl.DefaultBHGEUserProfileService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;


@Service
public class DefaultBHGERegisterUserService implements BHGERegisterUserService
{

	private static final Logger LOG = Logger.getLogger(DefaultBHGEUserProfileService.class);
	private static final String DAM_SERVICE_CREATEUSER_URL = "bhge.register.oidc.createuser.url";
	private static final String DAM_OAUTH_OIDC_WEBURL = "bhge.register.oidc.oauth2.url";
	private static final String DAM_OAUTH_OIDC_GRANTTYPE = "bhge.register.oidc.granttype";
	private static final String DAM_OAUTH_OIDC_CLIENTID = "bhge.register.oidc.clientid";
	private static final String DAM_OAUTH_OIDC_CLIENTSECRET = "bhge.register.oidc.clientsecret";
	private static final String DAM_OAUTH_OIDC_USERNAME = "bhge.register.oidc.username";
	private static final String DAM_OAUTH_OIDC_USERSECRET = "bhge.register.oidc.usersecret";
	private static final String DAM_OAUTH_OIDC_SCOPE = "bhge.register.oidc.scope";

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.registeruser.service.BHGERegisterUserService#fetchSSOForEmail(java.lang.String)
	 */
	@Override
	public ResponseEntity<BHGERegisterResponse> fetchSSOForEmail(final String emailAddress)
	{
		LOG.info("Inside fetchSSOForEmail: START - " + emailAddress);
		final BHGERegisterRequest serviceRequest = new BHGERegisterRequest();
		serviceRequest.setEmail(emailAddress);
		final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(Constants.FETCH_SSO_FROM_MAIL);
		final HttpHeaders headers = new HttpHeaders();
		headers.setBearerAuth(requestAccessToken().getValue());
		headers.setContentType(MediaType.APPLICATION_JSON);
		final HttpEntity<?> requestEntity = new HttpEntity<>(serviceRequest, headers);
		final ResponseEntity<BHGERegisterResponse> response = createRestTemplate().exchange(builder.build().encode().toUri(),
				HttpMethod.POST, requestEntity, BHGERegisterResponse.class);
		LOG.info("Inside fetchSSOForEmail: CLOSE - " + emailAddress + " & Response - " + response);
		return response;
	}


/*	private OAuth2RestOperations fetchOAuthTemplate()
	{
		final OAuth2ClientContext oauth2ClientContext = new DefaultOAuth2ClientContext();
		final ClientCredentialsResourceDetails msfinegrainauthresource = new ClientCredentialsResourceDetails();
		final ArrayList<String> msFineGrainScope = new ArrayList<>();
		msFineGrainScope.add(Constants.OAUTH_LOCAL_SCOPE);
		msfinegrainauthresource.setAccessTokenUri(Constants.OAUTH_LOCAL_WEBURL);
		msfinegrainauthresource.setClientId(Constants.OAUTH_LOCAL_CLIENTID);
		msfinegrainauthresource.setClientSecret(Constants.OAUTH_LOCAL_CLIENTSECRET);
		msfinegrainauthresource.setScope(msFineGrainScope);
		msfinegrainauthresource.setGrantType(Constants.OAUTH_LOCAL_GRANTTYPE);
		return new OAuth2RestTemplate(msfinegrainauthresource, oauth2ClientContext);
	}*/
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


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.registeruser.service.BHGERegisterUserService#validUsername(java.lang.String, java.lang.String)
	 */
	@Override
	public ResponseEntity<BHGERegisterResponse> validUsername(final String ssousername)
	{
		LOG.info("Inside validUsername: START - " + ssousername);
		final BHGERegisterRequest serviceRequest = new BHGERegisterRequest();
		serviceRequest.setUserId(ssousername);
		AccessToken token = requestAccessToken();
		final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(Constants.VALIDATE_SSO);
		final HttpHeaders headers = new HttpHeaders();
		headers.setBearerAuth(token.getValue());
		headers.setContentType(MediaType.APPLICATION_JSON);
		final HttpEntity<?> requestEntity = new HttpEntity<>(serviceRequest, headers);
		final ResponseEntity<BHGERegisterResponse> response =createRestTemplate().exchange(builder.build().encode().toUri(),
				HttpMethod.POST, requestEntity, BHGERegisterResponse.class);
		LOG.info("Inside validUsername: START - " + ssousername + " & Response -" + response);
		return response;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.registeruser.service.BHGERegisterUserService#validUsernameFetch(java.lang.String,
	 * java.lang.String)
	 */
	@Override
	public ResponseEntity<BHGERegisterResponse> validUsernameFetch(final String ssousername, final String lastName,
			final String firstName, final String emailAddress)
	{
		LOG.info("Inside validUsernameFetch: START - " + ssousername);
		final BHGERegisterRequest serviceRequest = new BHGERegisterRequest();
		serviceRequest.setUserId(ssousername);
		serviceRequest.setLastName(lastName);
		serviceRequest.setFirstName(firstName);
		serviceRequest.setEmail(emailAddress);
		AccessToken token = requestAccessToken();
		final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(Constants.FETCH_AVAILABLE_USERNAME);
		final HttpHeaders headers = new HttpHeaders();
		headers.setBearerAuth(token.getValue());
		headers.setContentType(MediaType.APPLICATION_JSON);
		final HttpEntity<?> requestEntity = new HttpEntity<>(serviceRequest, headers);
		final ResponseEntity<BHGERegisterResponse> response = createRestTemplate().exchange(builder.build().encode().toUri(),
				HttpMethod.POST, requestEntity, BHGERegisterResponse.class);
		LOG.info("Inside validUsernameFetch: CLOSE - " + ssousername + " & Response - " + response);
		return response;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.registeruser.service.BHGERegisterUserService#submit(com.bhgeregister.dto.BHGERegisterRequest)
	 */
	@Override
	public BHGERegisterResponse submit(final BHGERegisterRequest requestData)
	{
		LOG.info("Inside Register submit : START - " + requestData.getFirstName());
		final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(Constants.SUBMIT_REGISTER_DATA);
		final HttpHeaders headers = new HttpHeaders();
		headers.setBearerAuth(requestAccessToken().getValue());
		headers.setContentType(MediaType.APPLICATION_JSON);
		final HttpEntity<?> requestEntity = new HttpEntity<>(requestData, headers);
		RestTemplate restTemplate = new RestTemplate();
		return restTemplate
				.exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, BHGERegisterResponse.class).getBody();
	}
	private RestTemplate createRestTemplate()
	{
		return new RestTemplate();
	}

}
