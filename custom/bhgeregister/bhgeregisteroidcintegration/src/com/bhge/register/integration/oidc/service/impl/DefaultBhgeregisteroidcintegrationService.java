/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.integration.oidc.service.impl;


import com.bhge.register.integration.oidc.dao.BhgeregisteroidcintegrationDao;
import com.bhge.register.integration.oidc.okta.Credentials;
import com.bhge.register.integration.oidc.okta.OktaUser;
import com.bhge.register.integration.oidc.okta.Password;
import com.bhge.register.integration.oidc.okta.Profile;
import com.google.common.html.HtmlEscapers;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.model.CatalogUnawareMediaModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.exceptions.SystemException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.io.InputStream;
import java.util.*;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.bhge.core.model.BHGEGlobalPropertiesModel;
import com.bhge.register.integration.oidc.constants.BhgeregisteroidcintegrationConstants;
import com.bhge.register.integration.oidc.domain.AbbreviatedFieldListReadData;
import com.bhge.register.integration.oidc.domain.AddB2BInput;
import com.bhge.register.integration.oidc.domain.AddB2bOutputDTO;
import com.bhge.register.integration.oidc.domain.FieldListReadData;
import com.bhge.register.integration.oidc.domain.PrimaryKey;
import com.bhge.register.integration.oidc.domain.PrimaryKeyReadData;
import com.bhge.register.integration.oidc.domain.ReadData;
import com.bhge.register.integration.oidc.domain.ReadDataResponse;
import com.bhge.register.integration.oidc.domain.Updatelist;
import com.bhge.register.integration.oidc.service.BhgeregisteroidcintegrationService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import jakarta.annotation.Resource;


public class DefaultBhgeregisteroidcintegrationService implements BhgeregisteroidcintegrationService
{
	private static final Logger LOG = LoggerFactory.getLogger(DefaultBhgeregisteroidcintegrationService.class);

	private MediaService mediaService;
	private ModelService modelService;
	private FlexibleSearchService flexibleSearchService;
	private BhgeregisteroidcintegrationDao registrationDao;



	@Override
	public String getHybrisLogoUrl(final String logoCode)
	{
		final MediaModel media = mediaService.getMedia(logoCode);

		// Keep in mind that with Slf4j you don't need to check if debug is enabled, it is done under the hood.
		LOG.debug("Found media [code: {}]", media.getCode());

		return media.getURL();
	}

	@Override
	public void createLogo(final String logoCode)
	{
		final Optional<CatalogUnawareMediaModel> existingLogo = findExistingLogo(logoCode);

		final CatalogUnawareMediaModel media = existingLogo.isPresent() ? existingLogo.get()
				: modelService.create(CatalogUnawareMediaModel.class);
		media.setCode(logoCode);
		media.setRealFileName("sap-hybris-platform.png");
		modelService.save(media);

		mediaService.setStreamForMedia(media, getImageStream());
	}

	private final static String FIND_LOGO_QUERY = "SELECT {" + CatalogUnawareMediaModel.PK + "} FROM {"
			+ CatalogUnawareMediaModel._TYPECODE + "} WHERE {" + CatalogUnawareMediaModel.CODE + "}=?code";

	private static final String REGISTER_OIDC_WEBURL = "bhge.register.oidc.register.url";
	private static final String READ_OIDC_WEBURL = "bhge.register.oidc.read.url";
	private static final String OAUTH_OIDC_SCOPE = "bhge.register.oidc.scope";
	private static final String OAUTH_OIDC_WEBURL = "bhge.register.oidc.oauth2.url";
	private static final String OAUTH_OIDC_CLIENTID = "bhge.register.oidc.clientid";
	private static final String OAUTH_OIDC_CLIENTSECRET = "bhge.register.oidc.clientsecret";
	private static final String OAUTH_OIDC_GRANTTYPE = "bhge.register.oidc.granttype";

	private Optional<CatalogUnawareMediaModel> findExistingLogo(final String logoCode)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FIND_LOGO_QUERY);
		fQuery.addQueryParameter("code", logoCode);

		try
		{
			return Optional.of(flexibleSearchService.searchUnique(fQuery));
		}
		catch (final SystemException e)
		{
			return Optional.empty();
		}
	}

	private InputStream getImageStream()
	{
		return DefaultBhgeregisteroidcintegrationService.class
				.getResourceAsStream("/bhgeregisteroidcintegration/sap-hybris-platform.png");
	}

//	public BHGERegisterResponse createB2BSSO(final BHGERegisterRequest ssoDetails)
//	{
//		BHGERegisterResponse response = null;
//		LOG.info("Inside createB2BSSO: START - " + ssoDetails.getUserId());
//		try
//		{
//			final AddB2BInput serviceInput = createSSORequest(ssoDetails);
//			final ObjectMapper mapper = new ObjectMapper();
//			final String jsonInString = mapper.writeValueAsString(serviceInput);
//			final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(
//					Config.getParameter(REGISTER_OIDC_WEBURL)/* BhgeregisteroidcintegrationConstants.REGISTER_OIDC_WEBURL */);
//			builder.queryParam(BhgeregisteroidcintegrationConstants.LDAP_ENTRY, jsonInString);
//			final HttpHeaders headers = new HttpHeaders();
//			headers.setContentType(MediaType.APPLICATION_JSON);
//			final HttpEntity<LinkedMultiValueMap<String, Object>> requestEntity = new HttpEntity<>(headers);
//			response = createSSOResponse(fetchOAuthTemplate()
//					.exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, AddB2bOutputDTO[].class).getBody());
//		}
//		catch (RestClientException | JsonProcessingException exc)
//		{
//			LOG.error("Exception during SSO Creation Process.");
//		}
//		LOG.info("Inside createB2BSSO: CLOSE - " + ssoDetails.getUserId());
//		return response;
//	}
	/*public BHGERegisterResponse createB2BSSO_legacy(final BHGERegisterRequest ssoDetails)
	{
		BHGERegisterResponse response = null;
		LOG.info("Inside createB2BSSO: START - " + ssoDetails.getUserId());
		try
		{
			final AddB2BInput serviceInput = createSSORequest(ssoDetails);
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonInString = mapper.writeValueAsString(serviceInput);
			//LOG.info("jsonInString :: " + jsonInString);
			final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(
					Config.getParameter(REGISTER_OIDC_WEBURL)*//* BhgeregisteroidcintegrationConstants.REGISTER_OIDC_WEBURL *//*);
			builder.queryParam(BhgeregisteroidcintegrationConstants.LDAP_ENTRY, jsonInString);
			final HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			final HttpEntity<LinkedMultiValueMap<String, Object>> requestEntity = new HttpEntity<>(headers);
			response = createSSOResponse(fetchOAuthTemplate()
					.exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, AddB2bOutputDTO[].class).getBody());
		}
		catch (RestClientException exc)
		{
			LOG.error("RestClientException during SSO Creation Process." + exc);
			LOG.info("----------------------");
			LOG.error("RestClientException during SSO Creation Process." + exc.getStackTrace());
		}
		catch (JsonProcessingException exc)
		{
			LOG.error("JsonProcessingException during SSO Creation Process." + exc);
			LOG.info("----------------------");
			LOG.error("JsonProcessingException during SSO Creation Process." + exc.getStackTrace());
		}
		LOG.info("Inside createB2BSSO: CLOSE - " + ssoDetails.getUserId());
		return response;
	}*/

	/**
	 * Create B2BSSO based on EMAIL in OKta system.
	 * @param ssoDetails
	 * @return
	 */
	public BHGERegisterResponse createB2BSSO(final BHGERegisterRequest ssoDetails)
	{
		BHGERegisterResponse response = null;
		LOG.info("Inside createB2BSSO: START - " + ssoDetails.getUserId());
		try
		{
			//final AddB2BInput serviceInput = createSSORequest(ssoDetails);
			final ObjectMapper mapper = new ObjectMapper();
			//final String jsonInString = mapper.writeValueAsString(serviceInput);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
			//headers.add("Authorization", "SSWS 005nSEpC-M73G4dlhGpkhTWHWvB_L8ecF9tjH_1mQ5");
			headers.add("Authorization", "SSWS " + Config.getString("sso.okta.api.secret","005nSEpC-M73G4dlhGpkhTWHWvB_L8ecF9tjH_1mQ5"));
			OktaUser user = new OktaUser();
			Profile profile = new Profile();
			Credentials credentials = new Credentials();
			Password password = new Password();

			//profile.setFirstName(serviceInput.getUpdatelist().getGivenName());
			profile.setFirstName(ssoDetails.getFirstName());
			//profile.setLastName(serviceInput.getUpdatelist().getSn());
			profile.setLastName(ssoDetails.getLastName());
//			profile.setEmail(serviceInput.getUpdatelist().getMail());
			profile.setEmail(ssoDetails.getEmail());
			//profile.setLogin(serviceInput.getUpdatelist().getMail());
			profile.setLogin(ssoDetails.getEmail());
			//password.setAdditionalProperty("value", serviceInput.getUpdatelist().getUserPassword());
			password.setAdditionalProperty("value", ssoDetails.getUserSecret());
			List<String> groups = new LinkedList<String>();
			ResponseEntity<OktaUser> responseEntity = new ResponseEntity<OktaUser>(HttpStatus.OK);
			for(String app : ssoDetails.getAppList())
			{
						    String groupB2B = getAppGroupId(app);
							String oktaGrpMyID = Config.getString("sso.okta.group.myid","00gnwu28drd4wjPrP1d6");
							String oktaGrpB2B = Config.getString(groupB2B,"00gnwtil3m9j321Qc1d6");
							// String[] emailDomain =
				            // StringUtils.split(serviceInput.getUpdatelist().getMail(),
				            // "@");
				            String[] emailDomain = StringUtils.split(ssoDetails.getEmail(), "@");
							String userGroup = StringUtils.equalsIgnoreCase(emailDomain[1],"bakerhughes.com")  ? oktaGrpMyID :oktaGrpB2B;
							groups.add(userGroup);
			}				
							user.setAdditionalProperty("groupIds", groups.toArray());
							credentials.setPassword(password);
							user.setProfile(profile);
							user.setCredentials(credentials);
							HttpEntity<OktaUser> createOktaUser = new HttpEntity(user,headers);
							RestTemplate restTemplate = new RestTemplate();
							String oktaDomain = Config.getString("sso.okta.domain","https://login-dev.bakerhughes.com");

							String userActivate = java.text.MessageFormat.format("{0}/api/v1/users?activate=true", oktaDomain);
							response = new BHGERegisterResponse();
							responseEntity = restTemplate.exchange(userActivate, HttpMethod.POST, createOktaUser, OktaUser.class);
							if (responseEntity.getStatusCode() == HttpStatus.OK) {
								response.setStatusCode("Sucess");
							}  else {
								response.setStatusCode("Error");
								response.setErrorMessage("Error while create user");
							}
					
					/*else
					{
						if(null != responseEntity && null != responseEntity.getBody() && null != responseEntity.getBody().getId())
						{
							   String groupB2B = getAppGroupId(app);
								String oktaGrpMyID = Config.getString("sso.okta.group.myid","00gnwu28drd4wjPrP1d6");
								String userGroup = Config.getString(groupB2B,"00gnwtil3m9j321Qc1d6");
							   HttpEntity httpEntity =  new HttpEntity(headers);
								RestTemplate restTemplate = new RestTemplate();
								String oktaDomain = Config.getString("sso.okta.domain","https://login-dev.bakerhughes.com");
	  					       String updateGroupUrl = java.text.MessageFormat.format("{0}/api/v1/groups/{1}/users/{2}",
												oktaDomain, userGroup, responseEntity.getBody().getId());						
							   ResponseEntity<String> updateGroupResponse = restTemplate.exchange(updateGroupUrl,
												HttpMethod.PUT, httpEntity, String.class);
							   LOG.info("AppGroup is assigned "+updateGroupResponse.getStatusCode());
							   if (updateGroupResponse.getStatusCodeValue() == 204) {
									response.setStatusCode("Sucess");
								} else {
									response.setStatusCode("Error");
									response.setErrorMessage("Error while assigningApp");
								}
						}
					}
			}*/
		}
		catch (RestClientException exc)
		{

			if(null !=exc.getMessage() && exc.getMessage().contains("Api validation failed: password")){
			response = new BHGERegisterResponse();
			response.setStatusCode("Error");
			response.setErrorMessage("Api validation failed: password");
			}
			LOG.error("RestClientException during SSO Creation Process." + exc);
			LOG.info("----------------------");
			LOG.error("RestClientException during SSO Creation Process." + exc.getStackTrace());
		}
		/*catch (JsonProcessingException exc)
		{
			if(null !=exc.getMessage() && exc.getMessage().contains("Api validation failed: password")){
				response = new BHGERegisterResponse();
				response.setStatusCode("Error");
				response.setErrorMessage("Api validation failed: password");
			}
			LOG.error("JsonProcessingException during SSO Creation Process." + exc);
			LOG.info("----------------------");
			LOG.error("JsonProcessingException during SSO Creation Process." + exc.getStackTrace());
		}*/
		LOG.info("Inside createB2BSSO: CLOSE - " + ssoDetails.getUserId());
		return response;
	}
	
	public BHGERegisterResponse updateExistingUserInOKTA(final BHGERegisterRequest ssoDetails)
	{
		LOG.info("Inside updateExistingUserInOKTA method: START");
		BHGERegisterResponse response = new BHGERegisterResponse();
		try
		{
			String email = ssoDetails != null && ssoDetails.getEmail() != null ? ssoDetails.getEmail() : "";
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headersprofile = new HttpHeaders();
			headersprofile.setContentType(MediaType.APPLICATION_JSON);
			headersprofile.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
			String oktaDomain = Config.getString("sso.okta.domain","https://login-dev.bakerhughes.com");
			String oktaAPISecret = Config.getString("sso.okta.api.secret","005nSEpC-M73G4dlhGpkhTWHWvB_L8ecF9tjH_1mQ5");

			headersprofile.add("Authorization", "SSWS " + oktaAPISecret);
			HttpEntity requestProfile = new HttpEntity(headersprofile);
			String userProfileUrlOkta = oktaDomain + "/api/v1/users?q="+ email +"&limit=1000";

			ResponseEntity<OktaUser[]> userProfileResponse = restTemplate.exchange(userProfileUrlOkta, HttpMethod.GET, requestProfile, OktaUser[].class);
			HttpStatusCode httpStatus = userProfileResponse.getStatusCode();
			LOG.info("Inside fetchSSODetails: CLOSE - ");
			String oKtaId =null;
			for(OktaUser user : userProfileResponse.getBody()) {
				oKtaId=user.getId();
											
			}
			
			if(null != oKtaId)
			{
				for (String app : ssoDetails.getAppList()) {
					String groupB2B = getAppGroupId(app);
					String oktaGrpB2B = Config.getString(groupB2B, "00gnwtil3m9j321Qc1d6");
					String updateGroupUrl = java.text.MessageFormat.format("{0}/api/v1/groups/{1}/users/{2}",
									oktaDomain, oktaGrpB2B, oKtaId);						
				   ResponseEntity<String> updateGroupResponse = restTemplate.exchange(updateGroupUrl,
									HttpMethod.PUT, requestProfile, String.class);
				   LOG.info("AppGroup is assigned ");
				   if (updateGroupResponse.getStatusCodeValue() == 204) {
						response.setStatusCode("Sucess");
					} else {
						response.setStatusCode("Error");
						response.setErrorMessage("Error while assigningApp");
					}
			}
			}

		}
		catch (RestClientException | IllegalStateException exc)
		{
			LOG.error("Error in fetchSSODetailsforEmail." + exc.getStackTrace());
		}

		LOG.info("dataResponsesOkta : "+response.getStatusCode());

		return response;
	}

	public String getAppGroupId(final String app)
	{
		try
		{
		       final BHGEGlobalPropertiesModel bhgeGlobalProperty = new BHGEGlobalPropertiesModel();
		       bhgeGlobalProperty.setUid(app);
		       BHGEGlobalPropertiesModel property = flexibleSearchService.getModelByExample(bhgeGlobalProperty);
		       if(StringUtils.isNoneEmpty(property.getValue()))
		       {
		    	   return property.getValue();
		       }
		       else
		       {
		    	   return null;
		       }
		}
		catch(ModelNotFoundException e)
		{
			LOG.error("Error in gettingAppGroup" + e.getMessage());
			return null;
		}

	}
	
	
	@Override
	public BHGERegisterResponse fetchSSOForEmail(final BHGERegisterRequest ssoDetails)
	{
		LOG.info("Inside fetchSSOForEmail: START - " + ssoDetails.getEmail() + "before checking in BO 414");

		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		final ReadDataResponse[] userNames = fetchSSODetails(
				new ReadData(BhgeregisteroidcintegrationConstants.B2B_DIRECTORY, BhgeregisteroidcintegrationConstants.FALSE,
						new AbbreviatedFieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)),
						new PrimaryKeyReadData(ssoDetails.getEmail(), true),
						new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))));
		registerResponse.setUserMessageList(new ArrayList<>());
		Arrays.asList(userNames).forEach(pValue -> {
			if (null != pValue.getUid())
			{
				LOG.info("Received response from Okta");
				registerResponse.getUserMessageList().add(pValue.getUid());
			}
		});
		LOG.info("Inside fetchSSOForEmail: CLOSE - " + registerResponse.getUserMessageList().size());
		LOG.info("Response from Okta 431: "+ registerResponse.getUserMessageList());
		return registerResponse;
	}


	public BHGERegisterResponse checkSSOAvailability_legacy(final BHGERegisterRequest ssoDetails)
	{
		LOG.info("Inside checkSSOAvailability: START - " + ssoDetails.getUserId());
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		final ReadDataResponse[] b2bresponse = fetchSSODetails(new ReadData(BhgeregisteroidcintegrationConstants.B2B_DIRECTORY,
				BhgeregisteroidcintegrationConstants.FALSE, new AbbreviatedFieldListReadData(
				Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)), new PrimaryKeyReadData(ssoDetails.getUserId(),
				false), new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))));
		final ReadDataResponse[] b2cresponse = fetchSSODetails(new ReadData(BhgeregisteroidcintegrationConstants.B2C_DIRECTORY,
				BhgeregisteroidcintegrationConstants.FALSE, new AbbreviatedFieldListReadData(
				Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)), new PrimaryKeyReadData(ssoDetails.getUserId(),
				false), new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))));

		final ReadDataResponse[] geresponse = fetchSSODetails(new ReadData(BhgeregisteroidcintegrationConstants.GE_DIRECTORY,
				BhgeregisteroidcintegrationConstants.FALSE, new AbbreviatedFieldListReadData(
				Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)), new PrimaryKeyReadData(ssoDetails.getUserId(),
				false), new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))));
		if (b2bresponse != null
				&& BhgeregisteroidcintegrationConstants.SSO_NOT_FOUND_IN_LDAP_STATUS_CODE.equalsIgnoreCase(b2bresponse[0]
				.getStatusCode()))
		{
			if (b2cresponse != null
					&& BhgeregisteroidcintegrationConstants.SSO_NOT_FOUND_IN_LDAP_STATUS_CODE.equalsIgnoreCase(b2cresponse[0]
					.getStatusCode()))
			{
				if (geresponse != null
						&& BhgeregisteroidcintegrationConstants.SSO_NOT_FOUND_IN_LDAP_STATUS_CODE.equalsIgnoreCase(geresponse[0]
						.getStatusCode()))
				{
					registerResponse.setStatusCode("YES");
				}
				else
				{
					registerResponse.setStatusCode("NO");
				}
			}
			else
			{
				registerResponse.setStatusCode("NO");
			}
		}
		else
		{
			registerResponse.setStatusCode("NO");
		}
		LOG.info(
				"Inside checkSSOAvailability: CLOSE - " + ssoDetails.getUserId() + " & Status - " + registerResponse.getStatusCode());
		return registerResponse;
	}

	@Override
	public BHGERegisterResponse checkSSOAvailability(final BHGERegisterRequest ssoDetails) {
		LOG.info("Inside checkSSOAvailability:[Integration Service] - " + ssoDetails.getUserId());
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();

		if (StringUtils.isNotBlank(ssoDetails.getProductLine())) {
			List<B2BCustomerModel> customers = registrationDao.getRegisteredCustomer(ssoDetails.getUserId());

			final ReadDataResponse[] userNames = fetchSSODetails(
					new ReadData(BhgeregisteroidcintegrationConstants.B2B_DIRECTORY, BhgeregisteroidcintegrationConstants.FALSE,
							new AbbreviatedFieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)),
							new PrimaryKeyReadData(ssoDetails.getEmail(), true),
							new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))));
			List<String> userListFromOkta = new ArrayList<>();
			Arrays.asList(userNames).forEach(pValue -> {
				if (null != pValue.getUid())
				{
					LOG.info("Received response from Okta");
					userListFromOkta.add(pValue.getUid());
				}
			});
			LOG.info("Response from Okta 507 service: "+ userListFromOkta);
			registerResponse.setUserMessageList(userListFromOkta);

			if (CollectionUtils.isNotEmpty(customers)) {
				LOG.info("Customer is present in BO 495 if condition");
				boolean alreadyRegistered = customers.stream().anyMatch(customer -> isProductLineRegistered(ssoDetails, customer));
				registerResponse.setStatusCode(alreadyRegistered ? "NO" : "YES");
				LOG.info("statusCode is: "+ registerResponse.getStatusCode());
			} else {
				LOG.info("Customer is not present in BO 500 else condition");
//				performOktaSSOEmailCheck(ssoDetails, registerResponse);
				registerResponse.setStatusCode("YES");
			}
		} else {
			LOG.info("ProductLine is blank 504 else");
//			performOktaSSOEmailCheck(ssoDetails, registerResponse);
			registerResponse.setStatusCode("YES");
		}

		LOG.info("Inside checkSSOAvailability: CLOSE - " + ssoDetails.getUserId() + " & Status - " + registerResponse.getStatusCode());
		return registerResponse;
	}

	private boolean isProductLineRegistered(final BHGERegisterRequest ssoDetails, final B2BCustomerModel customer) {
		if (customer instanceof BHGERegieterCustomerModel registeredUser) {
			LOG.info("Under ProductLineCheck 511 if condition");
		}
		if (customer instanceof BHGERegieterCustomerModel registeredUser && null != registeredUser.getProductLine() ) {
			return isProductLineMatching(ssoDetails.getProductLine(), registeredUser.getProductLine().getAttributeValue());
		} else if (customer instanceof GEEdgeCustomerModel edgeUser) {
			LOG.info("Under ProductLineCheck 514 else condition");
			return isProductLineMatchingInCategories(ssoDetails.getProductLine(), edgeUser.getDefaultB2BUnit());
		}
		return false;
	}

	private boolean isProductLineMatching(String productLine, String registeredProductLine) {
		LOG.info("productLine: "+productLine+" registeredProductLine: "+registeredProductLine);
		return StringUtils.containsIgnoreCase(registeredProductLine, productLine);
	}

	private boolean isProductLineMatchingInCategories(String productLine, B2BUnitModel b2bUnit) {
		Collection<CategoryModel> categories = CollectionUtils.isNotEmpty(b2bUnit.getVisibleCategories())
				? b2bUnit.getVisibleCategories()
				: fetchCategoriesFromSalesOrg(b2bUnit);

		return categories.stream()
				.anyMatch(category -> StringUtils.containsIgnoreCase(category.getName(), productLine));
	}

	private Collection<CategoryModel> fetchCategoriesFromSalesOrg(B2BUnitModel b2bUnit) {
		String salesOrg = extractSalesOrgFromUnitId(b2bUnit.getUid());
		return registrationDao.fetchCategoriesFromSalesOrg(salesOrg);
	}

	private String extractSalesOrgFromUnitId(String unitId) {
		if (StringUtils.isNotBlank(unitId) && unitId.contains("_")) {
			return unitId.split("_")[1];
		}
		return null;
	}

	private void performOktaSSOEmailCheck(BHGERegisterRequest ssoDetails, BHGERegisterResponse registerResponse) {
		ReadDataResponse[] b2bresponse = fetchSSODetailsforUid(new ReadData(
				BhgeregisteroidcintegrationConstants.B2B_DIRECTORY,
				BhgeregisteroidcintegrationConstants.FALSE,
				new AbbreviatedFieldListReadData(
						Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)),
				new PrimaryKeyReadData(ssoDetails.getUserId(), false),
				new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))
		));
		LOG.info("Response from Okta: "+b2bresponse.length);
		registerResponse.setStatusCode("YES");
	}




	@Override
	public BHGERegisterResponse getAvailableSSOIds(final BHGERegisterRequest ssoDetails)
	{
		LOG.info("Inside getAvailableSSOIds: START - " + ssoDetails.getUserId());
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		final AddB2BInput input = new AddB2BInput(BhgeregisteroidcintegrationConstants.B2B_DIRECTORY, "",
				new PrimaryKey(ssoDetails.getUserId()), new Updatelist(ssoDetails.getUserId(), "", ssoDetails.getLastName(),
						ssoDetails.getFirstName(), "", ssoDetails.getEmail(), "", "", "", ""));
		List<String> filteredUids = new ArrayList<>();
		for(String uid: fetchValidUIds(input)) {
			filteredUids.add(HtmlEscapers.htmlEscaper().escape(uid));
		}
		registerResponse.setUserMessageList(filteredUids);
		LOG.info("Inside getAvailableSSOIds: CLOSE - " + ssoDetails.getUserId());
		return registerResponse;
	}


	/*private ReadDataResponse[] fetchSSODetails_legacy(final ReadData input)
	{
		LOG.info("Inside fetchSSODetails: START");
		ReadDataResponse[] processedResponse = null;
		final Gson g = new Gson();
		ResponseEntity<String> response = new ResponseEntity<>(HttpStatus.OK);
		try
		{
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonInString = mapper.writeValueAsString(input);
			final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(Config.getParameter(READ_OIDC_WEBURL));
			builder.queryParam(BhgeregisteroidcintegrationConstants.READ_OIDC, jsonInString);
			builder.queryParam(BhgeregisteroidcintegrationConstants.RESPONSE_TYPE, BhgeregisteroidcintegrationConstants.JSON);
			final HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
			LOG.info("JSon Value - " + jsonInString + " & URI - " + builder.toUriString());
			final HttpEntity<LinkedMultiValueMap<String, Object>> requestEntity = new HttpEntity<>(headers);
			response = fetchOAuthTemplate().exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, String.class);
			LOG.info("Raw response before processing it: "+ response);
			processedResponse = g.fromJson("[" + response.getBody() + "]", ReadDataResponse[].class);
		}
		catch (RestClientException | JsonProcessingException | IllegalStateException exc)
		{
			LOG.error("Recieved exception while calling Add B2B LDAP web service.");
		}
		LOG.info("Inside fetchSSODetails: CLOSE - " + "[" + response.getBody() + "]");
		return processedResponse;
	}*/

	/**
	 * OKTA API READ CALL
	 * @param input
	 * @return
	 */
	private ReadDataResponse[] fetchSSODetails(final ReadData input)
	{
		LOG.info("Inside Okta fetchSSODetails: START");
		ReadDataResponse[] processedResponse = null;
		List<ReadDataResponse> dataResponsesOkta = new LinkedList<>();
		final Gson g = new Gson();
		ResponseEntity<String> response = new ResponseEntity<>(HttpStatus.OK);
		try
		{
			String email = input != null && input.getPrimaryKey() != null && input.getPrimaryKey().getMail() != null
							? input.getPrimaryKey().getMail() : "";
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headersprofile = new HttpHeaders();
			headersprofile.setContentType(MediaType.APPLICATION_JSON);
			headersprofile.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
			String oktaDomain = Config.getString("sso.okta.domain","https://login-dev.bakerhughes.com");
			String oktaAPISecret = Config.getString("sso.okta.api.secret","005nSEpC-M73G4dlhGpkhTWHWvB_L8ecF9tjH_1mQ5");

			headersprofile.add("Authorization", "SSWS " + oktaAPISecret);
			HttpEntity requestProfile = new HttpEntity(headersprofile);
			//String userProfileUrlOkta = oktaDomain + "/api/v1/users?filter=profile.email eq \""+ email +"\"&limit=1000";
			String userProfileUrlOkta = oktaDomain + "/api/v1/users?q="+ email +"&limit=1000";

			ResponseEntity<OktaUser[]> userProfileResponse = restTemplate.exchange(userProfileUrlOkta, HttpMethod.GET, requestProfile, OktaUser[].class);
			HttpStatusCode httpStatus = userProfileResponse.getStatusCode();
			LOG.info("Inside fetchSSODetails: CLOSE - ");
			for(OktaUser user : userProfileResponse.getBody()) {
				ReadDataResponse respons = new ReadDataResponse();
				respons.setStatusCode(String.valueOf(httpStatus.value()));
				respons.setUid(user.getProfile().getEmail());
				dataResponsesOkta.add(respons);
			}
		}
		catch (RestClientException | IllegalStateException exc)
		{
			LOG.error("Error in fetchSSODetailsforEmail." + exc.getStackTrace());
		}

		return dataResponsesOkta.stream().toArray(ReadDataResponse[] :: new);
	}


	private ReadDataResponse[] fetchSSODetailsforUid(final ReadData input)
	{
		LOG.info("Inside Okta fetchSSODetails[Default Integration Service]: START");
		ReadDataResponse[] processedResponse = null;
		List<ReadDataResponse> dataResponsesOkta = new LinkedList<>();
		final Gson g = new Gson();
		ResponseEntity<String> response = new ResponseEntity<>(HttpStatus.OK);
		try
		{
			String email = input != null && input.getPrimaryKey() != null && input.getPrimaryKey().getUid() != null
							? input.getPrimaryKey().getUid() : "";
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headersprofile = new HttpHeaders();
			headersprofile.setContentType(MediaType.APPLICATION_JSON);
			headersprofile.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
			String oktaDomain = Config.getString("sso.okta.domain","https://login-dev.bakerhughes.com");
			String oktaAPISecret = Config.getString("sso.okta.api.secret","005nSEpC-M73G4dlhGpkhTWHWvB_L8ecF9tjH_1mQ5");

			headersprofile.add("Authorization", "SSWS " + oktaAPISecret);
			HttpEntity requestProfile = new HttpEntity(headersprofile);
			//String userProfileUrlOkta = oktaDomain + "/api/v1/users?filter=profile.email eq \""+ email +"\"&limit=1000";
			String userProfileUrlOkta = oktaDomain + "/api/v1/users?q="+ email +"&limit=1000";
			ResponseEntity<OktaUser[]> userProfileResponse = restTemplate.exchange(userProfileUrlOkta, HttpMethod.GET, requestProfile, OktaUser[].class);
			HttpStatusCode httpStatus = userProfileResponse.getStatusCode();
			LOG.info("Inside fetchSSODetails: CLOSE - ");
			for(OktaUser user : userProfileResponse.getBody()) {
				LOG.info("Received response from Okta 683");
				ReadDataResponse respons = new ReadDataResponse();
				respons.setStatusCode(String.valueOf(httpStatus.value()));
				respons.setUid(user.getProfile().getEmail());
				dataResponsesOkta.add(respons);
				LOG.info("statusCode 688: "+ respons.getStatusCode());
			}
		}
		catch (RestClientException | IllegalStateException exc)
		{
				LOG.error("Error in fetchSSODetailsforUid." + exc.toString());
		}

		return dataResponsesOkta.stream().toArray(ReadDataResponse[] :: new);
	}
	/**
	 * @param inputRequest
	 */
	private AddB2BInput createSSORequest(final BHGERegisterRequest inputRequest)
	{
		LOG.info("Inside createSSORequest: START");
		return new AddB2BInput(BhgeregisteroidcintegrationConstants.B2B_DIRECTORY,
				BhgeregisteroidcintegrationConstants.REGISTERED_BY, new PrimaryKey(inputRequest.getUserId()),
				new Updatelist(inputRequest.getUserId(), BhgeregisteroidcintegrationConstants.GE_SSO_LINKED_BU,
						inputRequest.getLastName(), inputRequest.getFirstName(),
						inputRequest.getFirstName() + " " + inputRequest.getLastName(), inputRequest.getEmail(),
						inputRequest.getGeSSOChallenge(), inputRequest.getGeSSOChallengeResponse(), inputRequest.getUserSecret(),
						BhgeregisteroidcintegrationConstants.GE_SSO_THE_BLOB));
	}

	/**
	 * @param response
	 */
	private BHGERegisterResponse createSSOResponse(final AddB2bOutputDTO[] response)
	{
		LOG.info("Inside createSSOResponse: START");
		final BHGERegisterResponse registerResponse = new BHGERegisterResponse();
		Arrays.asList(response).forEach(pValue -> {
			if (pValue.getErrorMessage() != null)
			{
				registerResponse.setErrorMessage(pValue.getErrorMessage());
			}
			else if (pValue.getStatusCode() != null)
			{
				registerResponse.setStatusCode(pValue.getStatusCode());
			}
		});
		LOG.info("Inside createSSOResponse: CLOSE");
		return registerResponse;
	}

	/**
	 * @param input
	 * @return
	 */
	private List<String> fetchValidUIds(final AddB2BInput input)
	{
		LOG.info("Inside fetchValidUIds: START");
		final List<String> finalizedsuggestions = new ArrayList<>();
		final List<String> draftedsuggestions = fetchUidCombinations(input);

		draftedsuggestions.stream().filter(pValue -> finalizedsuggestions.size() <= 3).forEach(uidCombination -> {
			if (BhgeregisteroidcintegrationConstants.SSO_NOT_FOUND_IN_LDAP_STATUS_CODE.equalsIgnoreCase(
					fetchSSODetails(new ReadData(input.getDirectorybranch(), BhgeregisteroidcintegrationConstants.FALSE,
							new AbbreviatedFieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)),
							new PrimaryKeyReadData(uidCombination, false),
							new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))))[0].getStatusCode()))
			{
				finalizedsuggestions.add(uidCombination);
			}
		});
		for (int ict = 0; ict < 500 && finalizedsuggestions.size() == 0; ict++)
		{
			final String uidCombination = input.getUpdatelist().getGivenName() + ict + input.getUpdatelist().getSn();
			if (BhgeregisteroidcintegrationConstants.SSO_NOT_FOUND_IN_LDAP_STATUS_CODE.equalsIgnoreCase(
					fetchSSODetails(new ReadData(input.getDirectorybranch(), BhgeregisteroidcintegrationConstants.FALSE,
							new AbbreviatedFieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.GIVEN_NAME)),
							new PrimaryKeyReadData(uidCombination, false),
							new FieldListReadData(Arrays.asList(BhgeregisteroidcintegrationConstants.UID))))[0].getStatusCode()))
			{
				finalizedsuggestions.add(uidCombination);
			}
		}
		LOG.info("Inside fetchValidUIds: CLOSE - " + finalizedsuggestions.size());
		return finalizedsuggestions;

	}

	/**
	 * @param input
	 * @return
	 */
	private List<String> fetchUidCombinations(final AddB2BInput input)
	{
		LOG.info("Inside fetchUidCombinations: START");
		final String firstName = input.getUpdatelist().getGivenName();
		final String lastName = input.getUpdatelist().getSn();

		return Arrays.asList(firstName + "." + lastName, lastName + "." + firstName, firstName.toUpperCase().charAt(0) + lastName,
				firstName + lastName.toUpperCase().charAt(0),

				firstName + firstName.length() + lastName, firstName + lastName.length() + lastName,
				firstName + lastName + (firstName + lastName).trim().length(),
				lastName + firstName + (firstName + lastName).trim().length());
	}

/*	private OAuth2RestOperations fetchOAuthTemplate()
	{
		final OAuth2ClientContext oauth2ClientContext = new DefaultOAuth2ClientContext();
		final ClientCredentialsResourceDetails msfinegrainauthresource = new ClientCredentialsResourceDetails();

		final ArrayList<String> msFineGrainScope = new ArrayList<>();
		msFineGrainScope.add(Config.getParameter(OAUTH_OIDC_SCOPE));
		msfinegrainauthresource.setAccessTokenUri(Config.getParameter(OAUTH_OIDC_WEBURL));
		msfinegrainauthresource.setClientId(Config.getParameter(OAUTH_OIDC_CLIENTID));
		msfinegrainauthresource.setClientSecret(Config.getParameter(OAUTH_OIDC_CLIENTSECRET));
		msfinegrainauthresource.setScope(msFineGrainScope);
		msfinegrainauthresource.setGrantType(Config.getParameter(OAUTH_OIDC_GRANTTYPE));

		return new OAuth2RestTemplate(msfinegrainauthresource, oauth2ClientContext);
	}*/


	public void setMediaService(final MediaService mediaService)
	{
		this.mediaService = mediaService;
	}


	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}


	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

	public BhgeregisteroidcintegrationDao getRegistrationDao() {
		return registrationDao;
	}

	public void setRegistrationDao(BhgeregisteroidcintegrationDao registrationDao) {
		this.registrationDao = registrationDao;
	}
}
