/**
 * Connection class for SCPI RFC Calls.
 * @shahid
 */
package com.bhge.core.scpi.common;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.text.MessageFormat;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;
import org.drools.util.StringUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.util.Assert;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.util.AccessToken;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationConfig;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.google.common.base.Stopwatch;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import de.hybris.platform.util.Config;


public class SCPIConnector
{
	private final static Logger LOG = Logger.getLogger(SCPIConnector.class);
	
	private final String SCPI_RFC_ACCESS_TOKEN = "scpi_rfc_access_token";
	private final String SCPI_OFS_RFC_ACCESS_TOKEN = "scpi_ofs_rfc_access_token";
	private final String SCPI_LONG_CONFIG_RFC_ACCESS_TOKEN = "scpi_long_config_rfc_access_token";
	private final String SCPI_INVOICE_RFC_ACCESS_TOKEN = "scpi_invoice_rfc_access_token";


	
	private static final String OFSSTORE = Config.getString("OFS_STORE_IDENTIFIER", "");
	private static final String VALVSTORE = Config.getString("VS_STORE_IDENTIFIER", "");
	private static final String LONG_CONFIG_END_POINT = Config.getString("SCPI_LONGCONFIG_END_POINT", "");
	private static final String INVOICE_DOCUMENT_END_POINT = Config.getString("SCPI_INVOICE_DOCUMENT_END_POINT", "");
	
	private static final String OFS = "OFS";// OFS identifier
	private String scpiEndpointUrl = "";
	private String scpiNewEndpointUrl = "";
	private String authorizationNew = StringUtils.EMPTY;
	private HttpHeaders httpHeaders;
	static XmlMapper mapper = new XmlMapper();

	// create builder object
	private CacheBuilder<Object, Object> cacheBuilder = CacheBuilder.newBuilder()
														.expireAfterWrite(Integer.parseInt(Config
														.getString("SCPI_CLOUDNEO_OAUTH_TOKEN_EXPIRE_TIME"
														,"5")), TimeUnit.MINUTES);


	


	/**
	 * load the access token from cache or make call scpi token api.
	 * @param key
	 * @param <K>
	 * @return
	 */

	// create cache loader object
	CacheLoader<String, CacheElement> cacheLoader = new CacheLoader<String, CacheElement>() {
		@Override
		public CacheElement load(String key) throws Exception {
			// get data from source
			return getOrLoadCacheElement(key);
		}
	};
	
	private <K> CacheElement getOrLoadCacheElement(K key) {
		if (key.toString().equalsIgnoreCase("scpi_rfc_access_token")) {
			return new CacheElement(key, getOAuthToken("DS"));
		} else if (key.toString().equalsIgnoreCase(SCPI_LONG_CONFIG_RFC_ACCESS_TOKEN)) {
			return new CacheElement(key, getOAuthToken("LONG_CONFIG"));
		}
		else if(key.toString().equalsIgnoreCase(SCPI_INVOICE_RFC_ACCESS_TOKEN))
		{
			LOG.info("Loading INVOICE_DOCUMENT access token in cache ");
			return new CacheElement(key, getOAuthToken("INVOICE_DOCUMENT"));

		}else {
			return new CacheElement(key, getOAuthToken("OFS"));
		}
	}
	

	

	LoadingCache<String, CacheElement> cache = cacheBuilder.build(cacheLoader);

	public String getScpiEndpointUrl()
	{
		return scpiEndpointUrl;
	}

	public void setScpiEndpointUrl(final String scpiEndpointUrl)
	{
		this.scpiEndpointUrl = scpiEndpointUrl;
	}

	
	public String getOAuthToken(final String scpiNewEndpointUrl)
	{
		String clientID  = null;
		String clientsecret = null;
		String grantType = null;
		String tokenUrl = null;

		if (scpiNewEndpointUrl.contains("LONG_CONFIG"))
		{
			clientID = Config.getString("SCPI_LONGCONFIG_OAUTH_CLIENTID", "");
			clientsecret = Config.getString("SCPI_LONGCONFIG_OAUTH_CLIENTSECRET", "");
			grantType = Config.getString("SCPI_LONGCONFIG_OAUTH_GRANT_TYPE", "");
			tokenUrl = Config.getString("SCPI_LONGCONFIG_OAUTH_TOKEN_URL", "");
		}
		else if(scpiNewEndpointUrl.contains("INVOICE_DOCUMENT"))
		{
			LOG.info("Generating INVOICE_DOCUMENT access token ");
			clientID  = Config.getString("SCPI_INVOICE_OAUTH_CLIENTID","");
			clientsecret = Config.getString("SCPI_INVOICE_OAUTH_CLIENTSECRET","");
			grantType = Config.getString("SCPI_INVOICE_OAUTH_GRANT_TYPE","");
			tokenUrl = Config.getString("SCPI_INVOICE_OAUTH_TOKEN_URL","");
		}

		else
		{
			clientID  = Config.getString("SCPI_CLOUDNEO_OAUTH_CLIENTID","");
			clientsecret = Config.getString("SCPI_CLOUDNEO_OAUTH_CLIENTSECRET","");
			grantType = Config.getString("SCPI_CLOUDNEO_OAUTH_GRANT_TYPE","");
			tokenUrl = Config.getString("SCPI_CLOUDNEO_OAUTH_TOKEN_URL","");
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		headers.setBasicAuth(clientID, clientsecret);

		RestTemplate restTemplate = new RestTemplate();
		LinkedMultiValueMap<String,String> valueMap = new LinkedMultiValueMap<>();
		valueMap.add("grant_type", grantType);

		HttpEntity request = new HttpEntity<MultiValueMap<String, String>>(valueMap, headers);

		ResponseEntity<AccessToken> responseEntity = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, AccessToken.class);

		LOG.debug("~~~~~~~~~~ Access_token is " + responseEntity.getBody().getAccess_token() + "~~~~~~~~~~");
		this.authorizationNew = responseEntity.getBody().getAccess_token();

		return authorizationNew;
	}


	/**
	 * @return the scpiNewEndpointUrl
	 */
	public String getScpiNewEndpointUrl()
	{
		return scpiNewEndpointUrl;
	}

	/**
	 * @param scpiNewEndpointUrl
	 *           the scpiNewEndpointUrl to set
	 */
	public void setScpiNewEndpointUrl(final String scpiNewEndpointUrl)
	{
		this.scpiNewEndpointUrl = scpiNewEndpointUrl;
	}

	/**
	 * @return the authorizationNew
	 */
	public String getAuthorizationNew()
	{
		return authorizationNew;
	}

	/**
	 * @param authorizationNew
	 *           the authorizationNew to set
	 */
	public void setAuthorizationNew(final String authorizationNew)
	{
		this.authorizationNew = authorizationNew;
	}

	public String getSCPIConnection(final String rfcNameURI)
	{
		try
		{
			Assert.notNull(rfcNameURI, "URI is required");
			this.scpiEndpointUrl = MessageFormat.format(scpiEndpointUrl, rfcNameURI);

			LOG.debug("~~~~~~~~~~ scpiEndPointUrl is " + this.scpiEndpointUrl + "~~~~~~~~~~");
			return this.scpiEndpointUrl;
		}
		catch (final Exception e)
		{
			LOG.error("Exception occured while generating the scpiEndPointUrl ", e);
			return null;
		}
	}

	public String getSCPIConnection_CloudNEO(final String rfcNameURI)
	{
		try
		{
			Assert.notNull(rfcNameURI, "URI is required");
			this.scpiNewEndpointUrl = MessageFormat.format(scpiNewEndpointUrl, rfcNameURI);

			LOG.info("~~~~~~~~~~ Cloud Foundy scpiEndPointUrl is " + this.scpiNewEndpointUrl + "~~~~~~~~~~");
			return this.scpiNewEndpointUrl;
		}
		catch (final Exception e)
		{
			LOG.error("Exception occured while generating the getCloudNEOSCPIConnection ", e);
			return null;
		}
	}

	/**
	 * method to convert RFC Request Object to XML.
	 *
	 * @param rfcRequest
	 *           SCPI Jackson Request
	 * @return XmlTransformedRequest
	 */
	public static String toXML(final Object rfcRequest)
	{
		String xMlTransformedRequest = "";
		try
		{
			xMlTransformedRequest = mapper.writeValueAsString(rfcRequest);
		}
		catch (final JsonProcessingException jsonProcessingException)
		{
			LOG.error("IOException during string to XML conversion for SCPI Request" + jsonProcessingException);
		}
		return xMlTransformedRequest;
	}
	/**
	 * Returns connection object to connect to Panametric Calibration DB
	 * Added on 24/6 as a part of pana cal implementation
	 * All the properties will be taken from environment local.properties
	 * @return
	 */
	 public static Connection getConnectionForPanaCalDB() {
	        Connection conn = null;
	        LOG.info("Inside getConnectionForPanaCalDB()");
	        String panaCalDBDriver = Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_DRIVER,"oracle.jdbc.driver.OracleDriver"); 
	         final String panaCalDBUserName = Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_USERNAME,"calportal");
	         final String panaCalDBPassword = Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_PASSWORD,"calportal99");
	         String panaCalDBUrl = 
	        		 "jdbc:oracle:thin:@(description=(address_list=(address=(protocol=tcp)(port="
	        				 + Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_PORT,"1523") + ")(host="
	        				 //+ Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_HOST_NAME,"alpdocld03-c.ent.bhicorp.com") + ")))(connect_data=(SERVICE_NAME="
	        				 + Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_HOST_NAME,"147.108.50.73") + ")))(connect_data=(SERVICE_NAME="
	        				 + Config.getString(BhgeCoreConstants.PANAMETRIC_CALIBRATION_DB_SERVICE_NAME,"WEBAPDEV")+ "))(source_route=yes))";

	        try {
	            Class.forName(panaCalDBDriver);
	            conn = DriverManager.getConnection(StringEscapeUtils.escapeHtml4(panaCalDBUrl),StringEscapeUtils.escapeHtml4(panaCalDBUserName), StringEscapeUtils.escapeHtml4(panaCalDBPassword));
	        } catch (Exception e) {
	        	LOG.error("Exception occured in getConnectionForPanaCalDB()"+ e.toString());
	        }
	        return conn;
	    }	

	 
	/**
	 * make a httppost to the SCPI server for RFC call - New Cloud Foundry NEO environment
	 *
	 * @param rfcXMLRequest
	 *           RFC XMl Request
	 * @param rfcResponse
	 *           RFC Xml Response
	 * @param <T>
	 *           Response Class type
	 * @return Response
	 */
	public <T> T sendPostCallToSCPI_CloudNEO(final String scpiNewEndpointUrl, final Object rfcXMLRequest, final Class<T> rfcResponse)
	{
		final Stopwatch stopwatch = Stopwatch.createUnstarted();
		stopwatch.start();
		LOG.info("scpi: The request XML is " + toXML(rfcXMLRequest));
		T responseXML = null;
		httpHeaders = new HttpHeaders();
		final RestTemplate restTemplate = new RestTemplate();
		restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(StandardCharsets.UTF_8));
		httpHeaders.setContentType(MediaType.APPLICATION_XML);
		restTemplate.getMessageConverters().add(0,new StringHttpMessageConverter(StandardCharsets.UTF_8));
		httpHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_XML));
		String scpi_rfc_access_token = "";
		try {
			if (scpiNewEndpointUrl.equals(OFSSTORE)) {
				LOG.debug("access_token from cache " + cache.get(SCPI_OFS_RFC_ACCESS_TOKEN));
				scpi_rfc_access_token = cache.get(SCPI_OFS_RFC_ACCESS_TOKEN).getValue().toString();
			} else if(scpiNewEndpointUrl.equals(LONG_CONFIG_END_POINT)) {
				LOG.debug("access_token from cache " + cache.get(SCPI_LONG_CONFIG_RFC_ACCESS_TOKEN));
				scpi_rfc_access_token = cache.get(SCPI_LONG_CONFIG_RFC_ACCESS_TOKEN).getValue().toString();
			}
			else if(scpiNewEndpointUrl.equals(INVOICE_DOCUMENT_END_POINT))
			{
				LOG.info("Fetching INVOICE_DOCUMENT access token from cache ");
				LOG.debug("access_token from cache " + cache.get(SCPI_INVOICE_RFC_ACCESS_TOKEN));
				scpi_rfc_access_token = cache.get(SCPI_INVOICE_RFC_ACCESS_TOKEN).getValue().toString();
			}else {
				LOG.debug("access_token from cache " + cache.get(SCPI_RFC_ACCESS_TOKEN));
				scpi_rfc_access_token = cache.get(SCPI_RFC_ACCESS_TOKEN).getValue().toString();
			}
		} catch (ExecutionException executionException) {
			LOG.error("executionException occured while getting the token from cache", executionException);
		}
		if (scpiNewEndpointUrl.contains(VALVSTORE)) {
			LOG.debug("vs scpiNewEndpointUrl" + scpiNewEndpointUrl);
			LOG.debug("vs access_token from getOAuthToken method " + this.getOAuthToken(scpiNewEndpointUrl));
			httpHeaders.add("Authorization", "Bearer " + this.getOAuthToken(scpiNewEndpointUrl));
		}

		else {
			httpHeaders.add("Authorization", "Bearer " + scpi_rfc_access_token);
		}
		final HttpEntity httpEntity = new HttpEntity(rfcXMLRequest, httpHeaders);
		//Conversion to result to String
		final ResponseEntity<String> stringResult = restTemplate.exchange(scpiNewEndpointUrl, HttpMethod.POST, httpEntity,
				String.class);
		//Conversion of String to object
		final XmlMapper xmlMapper = new XmlMapper();
		try
		{
			if( !StringUtils.isEmpty(stringResult.getBody())) {
				LOG.info("scpi: The response status code is " + stringResult.getStatusCode());
				LOG.info("scpi: The response headers are " + stringResult.getBody());
				if (stringResult.getStatusCode().is2xxSuccessful()) {
					LOG.info("scpi: The response XML is " + stringResult.getBody());
					responseXML = xmlMapper.readValue(stringResult.getBody(), rfcResponse);
					LOG.info("scpi: The response XML after mapping" + responseXML);
					stopwatch.stop();
					Long timeElapsed = stopwatch.elapsed(TimeUnit.SECONDS);
					LOG.info("scpi: overall response time " + timeElapsed.toString());
				}
			}
			else
			{
				stopwatch.stop();
				Long timeElapsed = stopwatch.elapsed(TimeUnit.SECONDS);
				throw new Exception("scpi: Connection Error > s response time is : "+timeElapsed.toString());
			}
		}
		catch (final JsonProcessingException processingException)
		{
			LOG.error("JsonProcessingException during string to XML conversion for order create API", processingException);
		}
		catch (final IOException ioException)
		{
			LOG.error("IOException during string to XML conversion for order create API", ioException);
		}
		catch (final Exception exception)
		{
			LOG.error("IOException during string to XML conversion for order create API", exception);
		}

		return responseXML;
	}
}
