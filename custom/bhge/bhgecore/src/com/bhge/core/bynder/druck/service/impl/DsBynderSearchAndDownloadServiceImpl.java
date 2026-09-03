package com.bhge.core.bynder.druck.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URLEncoder;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

//import org.apache.commons.lang3.StringEscapeUtils;
import de.hybris.platform.util.Config;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.NameValuePair;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

import com.bhge.core.bynder.druck.service.DsBynderSearchAndDownloadService;
import com.bhge.facades.data.bynder.download.DsDruckDownloadData;
import com.bhge.facades.data.bynder.search.DsBynderErrorData;
import com.bhge.facades.data.bynder.search.DsBynderSearchResultData;
import com.bhge.facades.data.bynder.search.DsBynderSearchResultDataList;
import com.google.gson.Gson;

import de.hybris.platform.servicelayer.config.ConfigurationService;


public class DsBynderSearchAndDownloadServiceImpl implements DsBynderSearchAndDownloadService {
	
	private static final Logger LOG = Logger.getLogger(DsBynderSearchAndDownloadServiceImpl.class);
	
	private static final String oAuthContentTypeHeader = "Content-Type";
	
	private static final String RESPONSE_TYPE_JSON_OBJECT = "JSON";
	
	private static final String RESPONSE_TYPE_ARRAY_OBJECT = "ARRAY";
		
	@Resource(name="configurationService")
	private ConfigurationService configurationService;
	
	
	public Map<JSONObject,Integer> getResponseFromAPI(String endPointURLWithId, String responseType) {

        JSONObject jsonObject = null;
        JSONObject jsonErrorObject = null;
        JSONArray jsonArray = null;
        CloseableHttpResponse response = null;
        //Getting oauth token
        Instant start = Instant.now();
        String oAuthAccessToken = getOAuthAccessTokenFromRESTService();
        Instant finish = Instant.now();
        LOG.info("Time taken to get Access Token :"+ Duration.between(start, finish).toMillis());
        //Getting response from API with oauth token
        if(!oAuthAccessToken.startsWith("{") && !oAuthAccessToken.endsWith("}")) {
        	response = getResponse(endPointURLWithId, oAuthAccessToken);
        }
        Map<JSONObject,Integer> resultMap = new HashMap<JSONObject,Integer>();
        try {
        	if(response!=null)
        	{
        		
        		LOG.info("API response: " + response.getStatusLine());
        		 BufferedReader br;
                 br = new BufferedReader(new InputStreamReader((response.getEntity().getContent())));
                 String result = null;
        		if (response.getStatusLine().getStatusCode() == 200) {
                   
                    while ((result = br.readLine()) != null) {
                    	result = StringEscapeUtils.unescapeJava(result);
                        if("ARRAY".equalsIgnoreCase(responseType)) {
                        	jsonObject = new JSONObject(); 
                            jsonArray = new JSONArray(result); 
                            jsonObject.put("result",jsonArray);
                        }
                        else {
                        	jsonObject = new JSONObject(result); 
                        }
                    }
                    resultMap.put(jsonObject, response.getStatusLine().getStatusCode());
                }else {
                	 while ((result = br.readLine()) != null) {
                     	result = StringEscapeUtils.unescapeJava(result);
                     	jsonErrorObject = new JSONObject(result);
                	 }
                	 resultMap.put(jsonErrorObject, response.getStatusLine().getStatusCode());
                }
        		
        	}else {
        		LOG.info("Error from OauthToken response" + oAuthAccessToken);
        		jsonErrorObject = new JSONObject(oAuthAccessToken);
        		resultMap.put(jsonErrorObject, 500);
        	}
            
        } catch (Exception e) {
            LOG.error("Exception while Connecting API :", e);
            resultMap.put(jsonObject, response.getStatusLine().getStatusCode());
        }
        return resultMap;
    }
	
	private CloseableHttpResponse getResponse(String endPointURL, String oAuthAccessToken) {
        CloseableHttpResponse response=null;
        if(StringUtils.isNotBlank(oAuthAccessToken)) {
        	String requestMessageHeader = "<b>====Header====</b><br> ";
            HttpGet httpGet;
            try {
                LOG.info("Endpoint URL : " + endPointURL);
                final CloseableHttpClient httpClient = HttpClients.createDefault();
                httpGet = new HttpGet(endPointURL);
                final List<NameValuePair> nvps = new ArrayList<NameValuePair>();
                nvps.add(new BasicNameValuePair("Content-Type", "application/json"));
                final String tokenValue = "Bearer" + " " +oAuthAccessToken;
                nvps.add(new BasicNameValuePair("Authorization", tokenValue));
                LOG.info("Access token Value " + tokenValue);
                for (final NameValuePair h : nvps) {
                	httpGet.addHeader(StringEscapeUtils.escapeHtml4(h.getName()),StringEscapeUtils.escapeHtml4(h.getValue()));
                    requestMessageHeader = requestMessageHeader + h.getName() + ":" + h.getValue() + " ";
                }
                Instant apiCallStart = Instant.now();
                response = httpClient.execute(httpGet);
                Instant apiCallEnd = Instant.now();
                LOG.info("Time taken to get API response :"+Duration.between(apiCallStart, apiCallEnd).toMillis());
            }
            catch(final IOException e) {
                LOG.error("Exception while connecting API" + e);
            }
        }
        return response;
    }

	private String getOAuthAccessTokenFromRESTService()
    {

        final StringBuilder responseMessage = new StringBuilder("");
        String oAuthToken ="";
        try
        {
            int timeout = configurationService.getConfiguration().getInt("oauth.bynder.api.timeout",20000);
            RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(timeout).setSocketTimeout(timeout).build();
            final CloseableHttpClient httpClient = HttpClients.custom().setDefaultRequestConfig(requestConfig).build();
            //final CloseableHttpClient httpClient = HttpClients.createDefault();
            final List<NameValuePair> nvps = new ArrayList<NameValuePair>();
            nvps.add(new BasicNameValuePair(oAuthContentTypeHeader, configurationService.getConfiguration().getString("oauth.bynder.header.content.type")));

            final String payload = "grant_type=" + configurationService.getConfiguration().getString("oauth.bynder.grant.type") + "&client_id="
                    + configurationService.getConfiguration().getString("oauth.bynder.client.id") + "&client_secret="
                    + configurationService.getConfiguration().getString("oauth.bynder.client.secret") + "&scope=" + configurationService.getConfiguration().getString("oauth.bynder.scope");
            LOG.info("payload --- " + payload);
            final HttpPost httpPost = new HttpPost(configurationService.getConfiguration().getString("oauth.bynder.url"));
            final StringEntity input = new StringEntity(payload);
            input.setContentType(configurationService.getConfiguration().getString("oauth.bynder.header.content.type"));
            httpPost.setEntity(input);

            for (final NameValuePair h : nvps)
            {
                httpPost.addHeader(h.getName(), h.getValue());
            }


            final CloseableHttpResponse response = httpClient.execute(httpPost);

            if (response.getStatusLine().getStatusCode() != 200)
            {
                LOG.error("OAuth look up failed:" + response.getStatusLine().getStatusCode());
                responseMessage.append(getStringFromInputStream(response.getEntity().getContent()));
                LOG.error("Response:" + responseMessage.toString());
                return responseMessage.toString();
            }

            final BufferedReader br = new BufferedReader(new InputStreamReader((response.getEntity().getContent())));
            String output;
            while ((output =br.readLine()) != null)
            {
                final JSONObject oAuthJsonResponse = new JSONObject(output);
                oAuthToken = oAuthJsonResponse.getString("access_token");
              
            }
        }
        catch (final Exception e)
        {
            LOG.error("OAUTH ERROR: " + e.toString());
            return null;
        }
        return oAuthToken;
    }

   
    private static String getStringFromInputStream(final InputStream is)
    {
        BufferedReader br = null;
        final StringBuilder sb = new StringBuilder();

        String line;
        try
        {

            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null)
            {
                sb.append(line);
            }

        }
        catch (final IOException e)
        {
           LOG.error("Exception while reading response ");
        }
        finally
        {
            if (br != null)
            {
                try
                {
                    br.close();
                }
                catch (final IOException e)
                {
                	 LOG.error("Exception while closing the stream ");
                }
            }
        }

        return sb.toString();

    }

	/**
	 *
	 */
	@Override
	public DsBynderSearchResultDataList getBynderSearchResultsBySerialNumber(String serialNumber, String productFamily) {
		Map<JSONObject,Integer> resultMap = new HashMap<JSONObject,Integer>();
		JSONObject result=null;
		int statusCode = 200;
        String URL = configurationService.getConfiguration().getString("api.url.bynder.search") + "?property_Usage="
                + configurationService.getConfiguration().getString("api.url.bynder.search.Usage")
                + "&property_AssetTypeL2=" + configurationService.getConfiguration().getString("api.url.bynder.search.AssetTypeL2")
                + "&property_VisibleTo=" + configurationService.getConfiguration().getString("api.url.bynder.search.VisibleTo")
                + "&property_CalibrationSerialNumber=";
      try
        {
        	
        	String endPointURL = URL + URLEncoder.encode(serialNumber, "UTF-8");
        	LOG.info("~~~~Bynder Search endpoint URL~~~~" + endPointURL);
        	resultMap = getResponseFromAPI(endPointURL, RESPONSE_TYPE_ARRAY_OBJECT);
        	Map.Entry<JSONObject,Integer> entry = resultMap.entrySet().iterator().next();
        	result = entry.getKey();
        	statusCode = entry.getValue();
        	LOG.info("Status Code - " + statusCode);
        }
        catch (Exception e) 
        {
        	LOG.error("Exception while calling API: " + e);		
        }
        
        DsBynderSearchResultData[] bynderDataArray = null;
        DsBynderErrorData errorData = null;
        DsBynderSearchResultDataList bynderSearchResultsList = new DsBynderSearchResultDataList();
        
        if(result != null && statusCode == 200)
        {
        	try
        	{
        		bynderDataArray = new Gson().fromJson(result.get("result").toString(), DsBynderSearchResultData[].class);
    	        bynderSearchResultsList.setSearchResults(Arrays.asList(bynderDataArray));
    	        bynderSearchResultsList.setStatusCode(statusCode);
    	        if(bynderDataArray != null) {
    	        	bynderSearchResultsList.setIsInBynder(Boolean.TRUE);
    	        }else {
    	        	bynderSearchResultsList.setIsInBynder(Boolean.FALSE);
    	        }
        	}
        	catch(Exception e) 
        	{
        		LOG.error("JSON Exception while converting bynder serial number search response ");
	        	e.printStackTrace();
        	}
       
        }else {
        	if(result != null) {
        		errorData =  new Gson().fromJson(result.toString(), DsBynderErrorData.class);
        		bynderSearchResultsList.setErrorMessage(errorData.getMessage());
        		if(errorData.getStatuscode() != null) {
        			bynderSearchResultsList.setStatusCode(Integer.parseInt(errorData.getStatuscode()));
        		}
        		else if(errorData.getStatus_code() != null) {
        			bynderSearchResultsList.setStatusCode(Integer.parseInt(errorData.getStatus_code()));
        		}
        		
            	LOG.error(errorData.getMessage());
        	}
        	else {
        		bynderSearchResultsList.setErrorMessage("Error connecting to Bynder Search API");
            	bynderSearchResultsList.setStatusCode(statusCode);	
        	}
        	
        	bynderSearchResultsList.setIsInBynder(Boolean.FALSE);
        	
        }
        
		return bynderSearchResultsList;
	}

	@Override
	public DsDruckDownloadData downloadDruckCaliberationData(String mediaId, String productLine) {
		Map<JSONObject,Integer> resultMap = new HashMap<JSONObject,Integer>();
		JSONObject result=null;
		DsBynderErrorData errorData = null;
		int statusCode = 200;
		DsDruckDownloadData downloadData = new DsDruckDownloadData();
		String endPointURL = configurationService.getConfiguration().getString("api.url.bynder.download");
		if(mediaId != null) {
			endPointURL = endPointURL.replace("{{MEDIA_ID}}",StringEscapeUtils.escapeHtml4(mediaId));
		}
		LOG.info("Endpoint Download Url---" + endPointURL);
		try {	        	
				resultMap = getResponseFromAPI(endPointURL, RESPONSE_TYPE_JSON_OBJECT);
	        	Map.Entry<JSONObject,Integer> entry = resultMap.entrySet().iterator().next();
	        	result = entry.getKey();
	        	statusCode = entry.getValue();
	        }
	   catch (Exception e) {
	        	LOG.error("Exception while calling Bynder Download API");		
	        }
		 try {
			 downloadData.setStatusCode(statusCode);
			 if(result != null && statusCode == 200) {
				 downloadData = new Gson().fromJson(result.toString(), DsDruckDownloadData.class);
			 }
			 else {
				 LOG.info("StatusCode download - " + statusCode);
				 
				 if(result != null) {
		        		errorData =  new Gson().fromJson(result.toString(), DsBynderErrorData.class);
		        		downloadData.setErrorMessage(errorData.getMessage());
		        		if(errorData.getStatuscode() != null) {
		        			downloadData.setStatusCode(Integer.parseInt(errorData.getStatuscode()));
		        		}
		        		else if(errorData.getStatus_code() != null) {
		        			downloadData.setStatusCode(Integer.parseInt(errorData.getStatus_code()));
		        		}
		        		
		            	LOG.error(errorData.getMessage());
		        	}
		        	else {
		        		downloadData.setErrorMessage("Error connecting to Bynder Download API");
		        		downloadData.setStatusCode(statusCode);	
		        	}
			 }
		} 
		 catch (Exception e) {
			LOG.error("JSON Exception while converting to Gson bynder download response ");
			e.printStackTrace();
		}
		return downloadData;
	}
	
	public ConfigurationService getConfigurationService() {
		return configurationService;
	}

	public void setConfigurationService(ConfigurationService configurationService) {
		this.configurationService = configurationService;
	}

}
