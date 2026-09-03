/**
 *
 */
package com.bhge.integration.marketo.service.impl;

import com.nimbusds.oauth2.sdk.token.AccessToken;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.mail.MailUtils;

import java.io.File;
import java.io.StringWriter;
import java.net.UnknownHostException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import jakarta.activation.FileDataSource;
import jakarta.annotation.Resource;

import org.apache.commons.mail2.core.EmailException;
import org.apache.commons.mail2.jakarta.HtmlEmail;
import org.apache.log4j.Logger;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
/*import org.springframework.security.oauth2.client.DefaultOAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;*/
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.bhge.commons.renderer.BHGEVelocityTemplateRenderer;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.contactus.dao.BHGEContactUsDAO;
import com.bhge.core.data.ContactUsData;
import com.bhge.core.mailmessages.context.BHGECriticalErrorEmailContext;
import com.bhge.core.model.BHGEAreaOfInterestModel;
import com.bhge.core.model.BHGEContactUsJobRoleModel;
import com.bhge.integration.marketo.Input;
import com.bhge.integration.marketo.InputUpdate;
import com.bhge.integration.marketo.MarketoRequest;
import com.bhge.integration.marketo.MarketoResponse;
import com.bhge.integration.marketo.service.BHGEContactUsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;


public class DefaultBHGEContactUsServiceImpl implements BHGEContactUsService
{

	private final static Logger LOG = Logger.getLogger(DefaultBHGEContactUsServiceImpl.class);
	private static final String DAM_SERVICE_CREATEUSER_URL = "bhge.register.oidc.createuser.url";
	private static final String DAM_OAUTH_OIDC_WEBURL = "bhge.register.oidc.oauth2.url";
	private static final String DAM_OAUTH_OIDC_GRANTTYPE = "bhge.register.oidc.granttype";
	private static final String DAM_OAUTH_OIDC_CLIENTID = "bhge.register.oidc.clientid";
	private static final String DAM_OAUTH_OIDC_CLIENTSECRET = "bhge.register.oidc.clientsecret";
	private static final String DAM_OAUTH_OIDC_USERNAME = "bhge.register.oidc.username";
	private static final String DAM_OAUTH_OIDC_USERSECRET = "bhge.register.oidc.usersecret";
	private static final String DAM_OAUTH_OIDC_SCOPE = "bhge.register.oidc.scope";
	//private static final String CREATED = "created";

	@Resource
	private BHGEContactUsDAO bhgeContactUsDAO;

	@Resource
	private ModelService modelService;

	@Resource(name = "bhgeVelocityTemplateRenderer")
	private BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	public String postDataToMarketoService(final ContactUsData contactUsData) throws UnknownHostException
	{
		final String result = null;
		MarketoRequest marketoRequest = new MarketoRequest();
		ResponseEntity<String> response = new ResponseEntity<>(HttpStatus.OK);
		MarketoResponse[] processedResponse = null;
		AccessToken token=requestAccessToken() ;
		final HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setBearerAuth(token.getValue());
		final HttpEntity<?> requestEntityGet = new HttpEntity<>(null, headers);
		final String marketoEndPoint = bhgeContactUsDAO.getEndPointForMarketoService("MARKETO_CREATE_LEADS_ENDPOINT");
		final UriComponentsBuilder builderGet = UriComponentsBuilder.fromHttpUrl(marketoEndPoint)
				.queryParam("filterType", "email").queryParam("filterValues", contactUsData.getEmail());
		LOG.info("GET url is " + builderGet.toUriString());
		response = createRestTemplate().exchange(builderGet.build().encode().toUri(), HttpMethod.GET, requestEntityGet,
				String.class);
		LOG.info("Get Response Body - " + "[" + response.getBody().toString() + "]");
		LOG.info("Get Response Body length - " + response.getBody().length());

		if (null != response) {
			processedResponse = new Gson().fromJson("[" + response.getBody() + "]", MarketoResponse[].class);
			int resultSize = processedResponse[0].getResult().size();
			int leadId = 0;
			if (resultSize > 1) {
				leadId = processedResponse[0].getResult().get(resultSize - 1).getId();
				marketoRequest = createUpdateRequest(contactUsData, leadId);

			} else {
				marketoRequest = createUpdateRequest(contactUsData, leadId);

			}
		}

		try
		{
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonInString = mapper.writeValueAsString(marketoRequest);			
			final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(marketoEndPoint);
			
			LOG.info("JSon Value - " + jsonInString + " & URI - " + builder.toUriString());
			final HttpEntity<?> requestEntity = new HttpEntity<>(marketoRequest, headers);
			response =createRestTemplate().exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, String.class);
			LOG.info("Response Body - " + "[" + response.getBody().toString() + "]");
			processedResponse = new Gson().fromJson("[" + response.getBody() + "]", MarketoResponse[].class);
			if (null != processedResponse[0].getResult().get(0))
			{
				if (BhgeCoreConstants.CREATED.equalsIgnoreCase(processedResponse[0].getResult().get(0).getStatus()))
				{
					bhgeContactUsDAO.saveContactUsData(contactUsData);
					return BhgeCoreConstants.CREATED;
				}
				else if (BhgeCoreConstants.UPDATED.equalsIgnoreCase(processedResponse[0].getResult().get(0).getStatus()))
				{
					bhgeContactUsDAO.saveContactUsData(contactUsData);
					return BhgeCoreConstants.UPDATED;
				}
				else
				{
					if (null != processedResponse[0].getResult().get(0).getReasons())
					{
						return processedResponse[0].getResult().get(0).getReasons().get(0).getMessage();
					}
				}
			}
		}
		catch (RestClientException | JsonProcessingException | IllegalStateException ex)
		{
			LOG.error("Recieved exception while connecting Marketo Serive." + ex);
			ex.printStackTrace();
			marketoConnectivityFailureMail(contactUsData.getEmail(), ex);
		}
		catch (final Exception e)
		{
			LOG.error("Recieved exception while connecting Marketo Serive." + e);
			e.printStackTrace();
			marketoConnectivityFailureMail(contactUsData.getEmail(), e);
		}
		return result;
	}

	private MarketoRequest createUpdateRequest(final ContactUsData contactUsData,int leadId)
	{
		LOG.info("inside Create request method");
		final MarketoRequest marketoRequest = new MarketoRequest();
		 Input input=null;
		if(leadId != 0)
		{
			input=new InputUpdate();
			((InputUpdate)input).setId(leadId);
			marketoRequest.setLookupField(Config.getString("marketo.lookupField", "id"));
			}
		else
		{
			input=new Input();
			marketoRequest.setLookupField(Config.getString("marketo.lookupField", "email"));
		}

		input.setFirstName(contactUsData.getFirstName());
		input.setLastName(contactUsData.getLastName());
		input.setCompany(contactUsData.getCompanyName());
		input.setEmail(contactUsData.getEmail());
		input.setPhone(contactUsData.getPhoneNum());
		input.setTitle(contactUsData.getTitle());
		input.setAreaOfInterest(contactUsData.getAreaOfInterest());
		input.setCountry(contactUsData.getCountry());
		input.setCity(contactUsData.getCity());
		input.setState(contactUsData.getState());
		input.setPostalCode(contactUsData.getPostalCode());
		input.setMktoPersonNotes(contactUsData.getMktoPersonNotes());
		input.setOptIn(contactUsData.isOptIn());
		input.setLeadSource(Config.getString("marketo.leadSource", "Website"));
		input.setLeadSourceDetails(Config.getString("marketo.GE_HQ_LeadSrcDtls__c", "DS_Store"));
		input.setInquiryTypec(Config.getString("marketo.Inquiry_Type__c", "Support"));
		input.setApiFormName(Config.getString("marketo.apiformname", "DS_Store"));
		
		marketoRequest.setAction(Config.getString("marketo.action", "createOrUpdate"));
		final List<Input> inputData = new ArrayList<>();
		inputData.add(input);
		marketoRequest.setInput(inputData);

		return marketoRequest;
	}

/*	private OAuth2RestOperations fetchOAuthTemplate()
	{
		final OAuth2ClientContext oauth2ClientContext = new DefaultOAuth2ClientContext();
		final ClientCredentialsResourceDetails msfinegrainauthresource = new ClientCredentialsResourceDetails();
		final String marketoAccessTokenURI = bhgeContactUsDAO.getEndPointForMarketoService("MARKETO_ACCESS_TOKEN_ENDPOINT");
		msfinegrainauthresource.setAccessTokenUri(marketoAccessTokenURI);
		msfinegrainauthresource.setClientId(Config.getString("marketo.clientId", ""));
		msfinegrainauthresource.setClientSecret(Config.getString("marketo.clientSecret", ""));
		msfinegrainauthresource.setGrantType(Config.getString("marketo.grantType", "client_credentials"));

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


	private void marketoConnectivityFailureMail(final String userEmail, final Exception exception)
	{

		try
		{
			final String subject = Config.getString("ORDER_SUBMIT_SUBJECT", "Baker Hughes Critical Error Alert");
			final String to = Config.getString("ORDER_SUBMITION_TO_ADDRESS", "");
			final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
			final Date today = Calendar.getInstance().getTime();
			final String reportDate = df.format(today);
			final HtmlEmail htmlEmail = (HtmlEmail) MailUtils.getPreConfiguredEmail();
			htmlEmail.setSSLOnConnect(Boolean.parseBoolean(Config.getString("useSSL", "true")));
			htmlEmail.setSubject(subject + " - " + "Marketo Connectivity Failure");
			final RendererTemplateModel templateModel = rendererService
					.getRendererTemplateForCode("MarketoConnectivityErrorMailTemplate");
			if (templateModel == null)
			{
				throw new EmailException("Email Template Not found");
			}
			else
			{
				final StringWriter mailMessage = new StringWriter();
				String[] emails;
				final String delimiter = ",";
				emails = to.split(delimiter);
				for (int i = 0; i < emails.length; i++)
				{
					final String email = emails[i];
					htmlEmail.addTo(email);
				}

				final BHGECriticalErrorEmailContext myMailContext = new BHGECriticalErrorEmailContext();
				myMailContext.setMediaBaseUrl(Config.getParameter("bhge.email.resource"));
				myMailContext.setSubject(subject);
				LOG.info("Email to subject is " + subject);
				myMailContext.setErrorDesc(exception.getMessage());
				myMailContext.setUserEmail(userEmail);
				//LOG.info("Email to user email id is " + userEmail);
				myMailContext.setErrorTime(reportDate);
				bhgeVelocityTemplateRenderer.render(templateModel, myMailContext, mailMessage, Locale.ENGLISH);

				htmlEmail.setHtmlMsg(mailMessage.toString());
				try
				{
					final File img = new File(Config.getParameter("GE_TOP_BANNER_IMAGE_EMAIL"));
					final FileDataSource fds = new FileDataSource(img);
					final String cid = htmlEmail.embed(fds, "cidForHomeImage", "cidForHomeImage");
				}
				catch (final Exception e)
				{
					LOG.error("Error while embedding file in Mail", e);
				}

				htmlEmail.send();
			}
		}
		catch (final Exception e)
		{
			LOG.error("Email Sending Failed for Critical Error Alert" + e);
			return;
		}
	}
	private RestTemplate createRestTemplate()
	{
		return new RestTemplate();
	}


	@Override
	public List<BHGEContactUsJobRoleModel> getContactUsJobRoles()
	{
		return bhgeContactUsDAO.getContactUsJobRoles();
	}

	@Override
	public List<BHGEAreaOfInterestModel> getAreaOfInterest()
	{
		return bhgeContactUsDAO.getAreaOfInterest();
	}

}
