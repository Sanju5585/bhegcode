package com.bhge.core.calportal.service.impl;

import java.io.File;
import java.io.StringWriter;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;


import com.nimbusds.oauth2.sdk.token.AccessToken;
import jakarta.activation.FileDataSource;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
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
import com.bhge.core.calportal.dao.CalPortalDao;
import com.bhge.core.calportal.service.CalPortalService;
import com.bhge.core.calportal.service.marketo.Input;
import com.bhge.core.calportal.service.marketo.InputUpdate;
import com.bhge.core.calportal.service.marketo.MarketoRequest;
import com.bhge.core.calportal.service.marketo.MarketoResponse;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.contactus.dao.BHGEContactUsDAO;
import com.bhge.core.data.ProbeCalibrationData;
import com.bhge.core.data.ProbeCalibrationRequest;
import com.bhge.core.data.ProbeCalibrationResponse;
import com.bhge.core.enums.SensorModelType;
import com.bhge.core.enums.SensorType;
import com.bhge.core.mailmessages.context.BHGECriticalErrorEmailContext;
import com.bhge.core.model.DSGuestCalibrationFormRecordsModel;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.calportal.CalibrationSensorType;
import com.google.gson.Gson;

import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.ds.dsocc.calibration.data.CalibrationSensorModelType;
import com.ds.dsocc.calibration.data.GuestUserDetailsData;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.enumeration.EnumerationService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.mail.MailUtils;

public class DefaultCalPortalService implements CalPortalService {

	private static final String CLOSE_PARANTHICIS = ")";

	private static final String OPEN_PARANTHICIS = "(";

	private static final String SPACE = " ";

	private static final String UNDERSCORE = "_";

	private static final String PROBE_TYPE = "PR";
	private static final String DAM_OAUTH_OIDC_WEBURL = "bhge.register.oidc.oauth2.url";
	private static final String DAM_OAUTH_OIDC_GRANTTYPE = "bhge.register.oidc.granttype";
	private static final String DAM_OAUTH_OIDC_CLIENTID = "bhge.register.oidc.clientid";
	private static final String DAM_OAUTH_OIDC_CLIENTSECRET = "bhge.register.oidc.clientsecret";
	private static final String DAM_OAUTH_OIDC_USERNAME = "bhge.register.oidc.username";
	private static final String DAM_OAUTH_OIDC_USERSECRET = "bhge.register.oidc.usersecret";
	private static final String DAM_OAUTH_OIDC_SCOPE = "bhge.register.oidc.scope";

	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;

	@Resource(name = "calPortalDao")
	private CalPortalDao calPortalDao;

	@Resource(name = "enumerationService")
	private EnumerationService enumerationService;
	
	@Resource(name = "mediaService")
	private MediaService mediaService;
	
	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;
	
	@Resource(name = "modelService")
	private ModelService modelService;
	
	@Resource(name = "bhgeContactUsDAO")
	private BHGEContactUsDAO bhgeContactUsDAO;

	@Resource(name = "bhgeVelocityTemplateRenderer")
	private BHGEVelocityTemplateRenderer bhgeVelocityTemplateRenderer;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	private static final Logger LOG = Logger.getLogger(DefaultCalPortalService.class);

	@Override
	public ProbeCalibrationData getCalPortalData(ProbeCalibrationRequest calibrationRequest) {
        // TODO Auto-generated method stub

        LOG.info("Inside getCalPortalData()");
        Connection panaCalDBConnection = null;
        ResultSet calibrationResultset = null;
        PreparedStatement pstmt = null;
        ProbeCalibrationData calibrationData = null;

        String serialNumber = calibrationRequest.getProbeSerialNumber().trim();
        String sensorType = calibrationRequest.getSensorType().trim();
        if (serialNumber.contains(sensorType) && serialNumber.endsWith("-".concat(sensorType))) {
            serialNumber = serialNumber.substring(0, serialNumber.lastIndexOf("-"));
        }

        StringBuilder newSql = null;
        StringBuffer selSql = null;
        try {
            panaCalDBConnection = SCPIConnector.getConnectionForPanaCalDB();
            newSql = new StringBuilder(200);
            newSql.append("SELECT * FROM MCSCALEXTRAPOLATION WHERE SERIALNUMBER = ? AND PROBETYPE = ? ORDER BY tDate DESC");
            PreparedStatement newPstmt = panaCalDBConnection.prepareStatement(newSql.toString());
            newPstmt.setString(1, serialNumber);
            newPstmt.setString(2, sensorType);
			LOG.info("US552028 updated query before execute: " + newPstmt);
            calibrationResultset = newPstmt.executeQuery();
            if (null == calibrationResultset) {
                LOG.info("US552028 calibrationResultset is null ");
            }
                if (calibrationResultset.next()) {
					LOG.info("US552028 null != calibrationResultset inside next");
                    List<String> calRef = new ArrayList<String>(), calUnitRaw = new ArrayList<String>();
                    calibrationData = new ProbeCalibrationData();
					//calibrationData.setSso(StringEscapeUtils.escapeHtml4(calibrationRequest.getSso()));
                    calibrationData.setProbeSerialNumber(
                            StringEscapeUtils.escapeHtml4(calibrationResultset.getString("SERIALNUMBER")));
                    calibrationData.setProbeType(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("PROBETYPE")));
//					LOG.info("US552028: Reading RANGEHIGH");
//                    calibrationData
//                            .setRangeHigh(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("RANGEHIGH")));
//					LOG.info("US552028: Reading RANGELOW");
//                    calibrationData
//                            .setRangeLow(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("RANGELOW")));
                    calibrationData.setNoOfPoints(
                            StringEscapeUtils.escapeHtml4(calibrationResultset.getString("NUMBEROFPOINTS")));
                    calibrationData.setTdate(BHGECommonsUtil.formatDate(
                            StringEscapeUtils.escapeHtml4(calibrationResultset.getString("TDATE")), "full"));
                    calibrationData
                            .setShiftValue(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("RAWDATATYPE")));
                    calibrationData
                            .setProbeModel(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("MODEL")));
                    calibrationData.setConfigureProbeModel(
                            StringEscapeUtils.escapeHtml4(calibrationResultset.getString("PROBEMODEL")));

					LOG.info("US552028: Reading source_location_mcs");
					if (calibrationResultset.getString("SOURCE_LOCATION") != null) {
                        calibrationData.setLocation(StringEscapeUtils
                                .escapeHtml4(calibrationResultset.getString("SOURCE_LOCATION").toLowerCase()));
                    } else {
                        calibrationData.setLocation(StringEscapeUtils.escapeHtml4(""));
                    }
					LOG.info("US552028 Entering DFPoint Loop");
                    for (int i = 1; i <= 18; i++) {
                        calRef.add(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("DFPoint" + i)));
                        calUnitRaw.add(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("HYGRO" + i)));
						LOG.info("US552028 Entering DFPoint Loop iteration"+i);
						LOG.info("US552028 DFPoint"+i+":"+calibrationResultset.getString("DFPoint" + i));
						LOG.info("US552028 HYGRO"+i+":"+calibrationResultset.getString("HYGRO" + i));
                    }
					LOG.info("US552028 Exit DFPoint Loop");
                    calibrationData.setCalRef(calRef);
                    calibrationData.setCalUnitRaw(calUnitRaw);
					calibrationData.setRenderPdf(true);
					LOG.info("US552028 Calibration Data collected from MCSCALEXTRAPOLATION");
                }else {
				LOG.info("US552028 inside Old query ");
                selSql = new StringBuffer(200);
                selSql.append("SELECT PR.*, " + "CORE.MAXDATE," + " M.*,"
                        + " M.SOURCE_LOCATION as source_location_mcs ");
                selSql.append("  FROM MCSCALSUMMARY M, ");
                selSql.append("       PROBEREGISTRY PR, ");
                selSql.append("       (SELECT TDATE AS MAXDATE, P_MAXDATE ");
                selSql.append("          FROM (SELECT MAX(M.TDATE) AS TDATE, ");
                selSql.append("                       COUNT(M.TDATE) AS R, ");
                selSql.append("                       MAX(P.TDATE) AS P_MAXDATE ");
                selSql.append("                  FROM MCSCALSUMMARY M, PROBEREGISTRY P ");
                selSql.append("                 WHERE P.SERIALNUMBER = ? ");
                selSql.append("                   AND P.PROBETYPE = ? ");
                selSql.append("                   AND M.SERIALNUMBER = P.SERIALNUMBER ");
                selSql.append("                   AND M.PROBETYPE = P.PROBETYPE) ");
                selSql.append("         WHERE R > 0) CORE ");
                selSql.append(" WHERE PR.SERIALNUMBER = M.SERIALNUMBER ");
                selSql.append("   AND M.TDATE = CORE.MAXDATE ");
                selSql.append("   AND PR.TDATE = CORE.P_MAXDATE ");
                selSql.append("   AND PR.PROBETYPE = M.PROBETYPE ");
                selSql.append("   AND PR.PROBETYPE = ? ");
                selSql.append("   AND PR.SERIALNUMBER = ? ");
                selSql.append("   AND ROWNUM = 1 ");
				LOG.info("US552028 inside Old query Query Prepared");
                pstmt = panaCalDBConnection.prepareStatement(selSql.toString());
                pstmt.setString(1, serialNumber);
                pstmt.setString(2, sensorType);
                pstmt.setString(3, sensorType);
                pstmt.setString(4, serialNumber);

                calibrationResultset = pstmt.executeQuery();
                LOG.info("US552028 : calibrationResultset: " + calibrationResultset);
                if (calibrationResultset == null) {
                    LOG.info("US552028: Inside calibrationResultset if condition");
                    LOG.debug("US552028: No probe cal data found for probe : " + calibrationRequest.getProbeSerialNumber().trim());
                } else {
                    LOG.info("US552028: Inside calibrationResultset else condition");
                    if (calibrationResultset.next()) {
                        LOG.info("Inside calibrationResultset next condition");
                        List<String> calRef = new ArrayList<String>(), calUnitRaw = new ArrayList<String>();
                        calibrationData = new ProbeCalibrationData();
                        calibrationData.setSso(StringEscapeUtils.escapeHtml4(calibrationRequest.getSso()));
                        calibrationData.setProbeSerialNumber(
                                StringEscapeUtils.escapeHtml4(calibrationResultset.getString("SERIALNUMBER")));
                        calibrationData.setProbeType(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("PROBETYPE")));
                        calibrationData
                                .setRangeHigh(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("RANGEHIGH")));
                        calibrationData
                                .setRangeLow(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("RANGELOW")));
                        calibrationData.setNoOfPoints(
                                StringEscapeUtils.escapeHtml4(calibrationResultset.getString("NUMBEROFPOINTS")));
                        calibrationData.setTdate(BHGECommonsUtil.formatDate(
                                StringEscapeUtils.escapeHtml4(calibrationResultset.getString("MAXDATE")), "full"));
                        calibrationData
                                .setShiftValue(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("RAWDATATYPE")));
                        calibrationData
                                .setProbeModel(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("MODEL")));
                        calibrationData.setConfigureProbeModel(
                                StringEscapeUtils.escapeHtml4(calibrationResultset.getString("PROBEMODEL")));

                        if (calibrationResultset.getString("source_location_mcs") != null) {
                            calibrationData.setLocation(StringEscapeUtils
                                    .escapeHtml4(calibrationResultset.getString("source_location_mcs").toLowerCase()));
                        } else {
                            calibrationData.setLocation(StringEscapeUtils.escapeHtml4(""));

                        }

                        for (int i = 1; i <= 10; i++) {
                            calRef.add(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("CALREF" + i)));
                            calUnitRaw.add(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("CALUNITRAW" + i)));
							LOG.info("US552028 CALREF"+i+":"+calibrationResultset.getString("CALREF" + i));
							LOG.info("US552028 CALUNITRAW"+i+":"+calibrationResultset.getString("CALUNITRAW" + i));

                        }
                        calibrationData.setCalRef(calRef);
                        calibrationData.setCalUnitRaw(calUnitRaw);
                        calibrationData.setRenderPdf(true);
                        LOG.debug("END fetching probe cal data for probe : " + calibrationData.getProbeSerialNumber().trim());
                    }
                }
            }

        } catch (SQLException e) {
            LOG.error("Exception occured in SQLExeption" + e.getMessage());
			LOG.error("New Query" + newSql);
			LOG.error("Old Query " + selSql);
        } catch (Exception e) {
            LOG.error("Exception occured " + e.getMessage());
			LOG.error("New Query" + newSql);
			LOG.error("Old Query " + selSql);
        } finally {
            try {
                if (calibrationResultset != null) {
                    calibrationResultset.close();
                }
                if (panaCalDBConnection != null) {
                    panaCalDBConnection.close();
                }
            } catch (Exception e) {
                LOG.error("Error in disconnecting d/b connection " + e.getMessage());
            }
        }
		LOG.debug("Returning calabration Data : ");
        return calibrationData;
    }

	@Override
	public List<ProbeCalibrationResponse> getCalPortalDataForList(List<ProbeCalibrationRequest> equipmentList) {
		// TODO Auto-generated method stub

		LOG.info("Inside getCalPortalDataForList()");
		if(CollectionUtils.isNotEmpty(equipmentList)){
			LOG.info("equipmentList is not empty");
		StringBuilder serialNumberChain = new StringBuilder();
		
		equipmentList.stream().forEach((caldata) -> {
			serialNumberChain.append(OPEN_PARANTHICIS);
			serialNumberChain.append("'");
			serialNumberChain.append(caldata.getProbeSerialNumber());
			serialNumberChain.append("','");	
			if(caldata.getSensorType()!=null &&  StringUtils.isNotEmpty(caldata.getSensorType()))
			{
				serialNumberChain.append(caldata.getSensorType());
			}
			
			serialNumberChain.append("'");	
			serialNumberChain.append(CLOSE_PARANTHICIS);
			serialNumberChain.append(",");	
		});
		if(serialNumberChain.length() > 0){
			LOG.info("SerialNumberChain: " + serialNumberChain.toString());
		}
		else{
			LOG.info("SerialNumberChain is empty");
		}
		serialNumberChain.deleteCharAt(serialNumberChain.lastIndexOf(","));	
		
		Connection panaCalDBConnection = null;
		ResultSet calibrationResultset = null;
		PreparedStatement pstmt = null;
		List<ProbeCalibrationResponse> calibrationDataList = new ArrayList<ProbeCalibrationResponse>();
		try {
			panaCalDBConnection = SCPIConnector.getConnectionForPanaCalDB();		
			
			StringBuffer selSql = new StringBuffer(200);
			selSql.append("SELECT  M.SERIALNUMBER AS SERIALNUMBER,");
			selSql.append("M.PROBETYPE AS PROBETYPE,");
			selSql.append("M.MODEL AS MODEL,");
			selSql.append("MAX(M.TDATE) AS TDATE,"); 
			selSql.append("COUNT(M.TDATE) AS R,");
			selSql.append("MAX(P.TDATE) AS P_MAXDATE");
			selSql.append(" FROM MCSCALSUMMARY M, PROBEREGISTRY P");
			selSql.append("	WHERE (M.SERIALNUMBER,M.PROBETYPE) IN(:params)");
			selSql.append(" AND M.SERIALNUMBER = P.SERIALNUMBER  AND M.PROBETYPE = P.PROBETYPE");
			selSql.append(" GROUP BY M.SERIALNUMBER, M.PROBETYPE, M.MODEL");
			selSql.append(" ORDER BY M.SERIALNUMBER");		
						
			String selSQLStr = selSql.toString();
			selSQLStr = selSQLStr.replace(":params", serialNumberChain.toString());
			
			pstmt = panaCalDBConnection.prepareStatement(selSQLStr);
			calibrationResultset = pstmt.executeQuery();
			if (calibrationResultset == null) {
				LOG.debug("No probe cal data found for probe : ");
			} else {
				LOG.debug("No of Records in Result set" + calibrationResultset.getFetchSize());
				
				while (calibrationResultset.next()) {
					
					ProbeCalibrationResponse calibrationResponse = new ProbeCalibrationResponse();
					calibrationResponse.setProbeSerialNumber(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("SERIALNUMBER")));
					calibrationResponse.setSensorType(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("PROBETYPE")));
					calibrationResponse.setProbeModel(StringEscapeUtils.escapeHtml4(calibrationResultset.getString("MODEL")));
					calibrationResponse.setTdate(BHGECommonsUtil.formatDate(
							StringEscapeUtils.escapeHtml4(calibrationResultset.getString("TDATE")), "full"));	
					
					calibrationDataList.add(calibrationResponse);
					LOG.debug(
							"END fetching probe cal data for probe : " + calibrationResponse.getProbeSerialNumber().trim());					
			}

			}

		} catch (SQLException e) {
			LOG.error("Exception occured in DataAccessFacade:getProbeCalData()" + e.toString());
		} catch (Exception e) {
			LOG.error("Exception occured in DataAccessFacade:getProbeCalData()" + e.toString());
		} finally {
			try {
				if (calibrationResultset != null) {
					calibrationResultset.close();
				}
				if (panaCalDBConnection != null) {
					panaCalDBConnection.close();
				}
			} catch (Exception e) {
				LOG.error("Error in disconnecting d/b connection " + e.toString());
			}
		}

		return calibrationDataList;
		}
		LOG.info("equipmentList is empty");
		return null;
	}

	@Override
	public List<BHGERegisterKeyValueDataModel> fetchProductFamilyList(String appName) {
		// TODO Auto-generated method stub
		return calPortalDao.fetchProductFamilyList(appName);
	}

	@Override
	public List<CalibrationSensorType> fetchCalibarationSensorType() {
		final List<CalibrationSensorType> calibrationProbeTypeList = new ArrayList<CalibrationSensorType>();
		final List<SensorType> probeTypeList = enumerationService.getEnumerationValues(SensorType.class);
		for (final SensorType probeType : probeTypeList) {
			final CalibrationSensorType calibrationProbeType = new CalibrationSensorType();
			calibrationProbeType.setSensorCode(probeType.getCode());
			calibrationProbeType.setSensorName(probeType.getCode());
			calibrationProbeTypeList.add(calibrationProbeType);
		}
		return calibrationProbeTypeList;

	}
	
	@Override
	public List<CalibrationSensorModelType> fetchCalibarationSensorModelTypes(final HttpServletRequest request,
			final HttpServletResponse response) {
		// TODO Auto-generated method stub
		final List<CalibrationSensorModelType> calibrationSensorModelTypeList = new ArrayList<CalibrationSensorModelType>();
		final List<SensorModelType> sensorModelTypeList = enumerationService.getEnumerationValues(SensorModelType.class);
		for(final SensorModelType sensorModelType : sensorModelTypeList ) {
			CalibrationSensorModelType calibrationSensorModelType = new CalibrationSensorModelType();
			calibrationSensorModelType.setSensorModelCode(StringEscapeUtils.escapeHtml4(sensorModelType.getCode()));
			calibrationSensorModelType.setSensorModelName(StringEscapeUtils.escapeHtml4(sensorModelType.getCode()));			
			final MediaModel sensorImageModel = getMediaByCode(sensorModelType.getCode());
			if(sensorImageModel != null)
			{
				String imageURL = String.format("%s%s",
						request.getRequestURL().substring(0, request.getRequestURL().indexOf(request.getContextPath())),
						sensorImageModel.getURL());
				calibrationSensorModelType.setSensorModelImageURL(StringEscapeUtils.escapeHtml4(imageURL));
			}			
			calibrationSensorModelTypeList.add(calibrationSensorModelType);
		}
		return calibrationSensorModelTypeList;
	}
	
	public MediaModel getMediaByCode(final String mediaCode) {
		try {
			final CatalogVersionModel catalogVersionModel = catalogVersionService
					.getCatalogVersion("bhgeContentCatalog", "Online");
			final MediaModel media = mediaService.getMedia(catalogVersionModel, mediaCode);
			return media;
		} catch (final UnknownIdentifierException ignore) {
			LOG.error("File Not Found :: " + mediaCode + ignore);
		}
		return null;

	}

	
	public void saveGuestModel(DSGuestCalibrationFormRecordsModel model, GuestUserDetailsData data) {
		// TODO Auto-generated method stub
		boolean isModelSaved = false;
		try {
			if(model != null) {
				modelService.save(model);
				modelService.refresh(model);
			}
			AddressModel address = new AddressModel();
			address.setOwner(model);
			address.setFirstname(data.getFirstName());
			address.setLastname(data.getLastName());
			address.setCompany(data.getOrganization());
			address.setEmail(data.getEmail());
			address.setPhone1(data.getWorkPhone());
			address.setPostalcode(data.getZipCode());
			address.setStreetname(data.getAddress());
			address.setStreetnumber(data.getStreetAddress());
			address.setTown(data.getCity());
			model.setAddress(address);
			modelService.save(model);
			modelService.refresh(model);
			isModelSaved = true;
			LOG.info("~~~Successfully added to DSGuestCalibrationFormRecords Model~~~ " + isModelSaved);
		}
		catch(Exception e) {
			isModelSaved = false;
			LOG.info("~~~Failed adding to DSGuestCalibrationFormRecords Model~~~ " + isModelSaved);
		}
		try {
			String isMarketoCallEnabled = bhgeContactUsDAO.getEndPointForMarketoService("MARKETO_CALL_PANAMETRICS_ENABLE");
			if(isModelSaved && "Y".equalsIgnoreCase(isMarketoCallEnabled)) {
				String result = postDataToMarketoService(data);
				LOG.info("~~~Marketo Response for DSGuestCalibrationFormRecords~~~ ");
			}
		} catch (UnknownHostException e) {
			LOG.info("Error connecting to Marketo DSGuestCalibrationFormRecords " + e.getMessage() + "\n Exception: " +  e);
			e.printStackTrace();
		}
	}

	@Override
	public Map<String, String> populatePartNumberMap() {	
		Map<String, String> partNumberMap = new HashMap<String, String>();
		partNumberMap.put("MISP", "MISP");
		partNumberMap.put("MISP2", "MISP2");
		partNumberMap.put("veridri", "veridri");
		partNumberMap.put("RTE", "HygroRTE");
		partNumberMap.put("M2", "M");
		partNumberMap.put("TF", "TF");
		partNumberMap.put("IQ.probe", "IQ.probe");		
		return partNumberMap;
	}

//	public MediaModel getMediaByCodeAndCatalogVersion(final String mediaCode,
//			final CatalogVersionModel catalogVersionModel) {
//		try {
//			return mediaService.getMedia(catalogVersionModel, mediaCode);
//		} catch (final UnknownIdentifierException ignore) {
//			// Ignore this exception
//			LOG.error("File Not Found :: " + mediaCode + ignore);
//		}
//		return null;
//	}

	
	/*private OAuth2RestOperations fetchOAuthTemplate()
	{
		final OAuth2ClientContext oauth2ClientContext = new DefaultOAuth2ClientContext();
		final ClientCredentialsResourceDetails msfinegrainauthresource = new ClientCredentialsResourceDetails();
		final String marketoAccessTokenURI = bhgeContactUsDAO.getEndPointForMarketoService("MARKETO_ACCESS_TOKEN_PANAMETRICS_ENDPOINT");
		msfinegrainauthresource.setAccessTokenUri(marketoAccessTokenURI);
		msfinegrainauthresource.setClientId(Config.getString("marketo.panametrics.clientId", ""));
		msfinegrainauthresource.setClientSecret(Config.getString("marketo.panametrics.clientSecret", ""));
		msfinegrainauthresource.setGrantType(Config.getString("marketo.grantType", "client_credentials"));

		return new OAuth2RestTemplate(msfinegrainauthresource, oauth2ClientContext);
	}*/

	
	public String postDataToMarketoService(final GuestUserDetailsData data) throws UnknownHostException
	{
		final String result = null;
		MarketoRequest marketoRequest = new MarketoRequest();
		ResponseEntity<String> response = new ResponseEntity<>(HttpStatus.OK);
		MarketoResponse[] processedResponse = null;
		AccessToken token=requestAccessToken();
		final HttpHeaders headers = new HttpHeaders();

		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setBearerAuth(token.getValue());
		final HttpEntity<?> requestEntityGet = new HttpEntity<>(null, headers);
		final String marketoEndPoint = bhgeContactUsDAO.getEndPointForMarketoService("MARKETO_CREATE_LEADS_PANAMETRICS_ENDPOINT");
		LOG.info("marketoEndPoint: " + marketoEndPoint);
		final UriComponentsBuilder builderGet = UriComponentsBuilder.fromHttpUrl(marketoEndPoint)
				.queryParam("filterType", "email").queryParam("filterValues", data.getEmail());
		//LOG.info("GET url is " + builderGet.toUriString());
		response = createRestTemplate().exchange(builderGet.build().encode().toUri(), HttpMethod.GET, requestEntityGet,
				String.class);
		//LOG.info("Get Response Body - " + "[" + response.getBody().toString() + "]");
		LOG.info("Get Response Body length - " + response.getBody().length());

		if (null != response) {
			processedResponse = new Gson().fromJson("[" + response.getBody() + "]", MarketoResponse[].class);
			int resultSize = processedResponse[0].getResult().size();
			int leadId = 0;
			if (resultSize > 1) {
				leadId = processedResponse[0].getResult().get(resultSize - 1).getId();
				marketoRequest = createUpdateRequest(data, leadId);

			} else {
				marketoRequest = createUpdateRequest(data, leadId);

			}
		}

		try
		{
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonInString = mapper.writeValueAsString(marketoRequest);			
			final UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(marketoEndPoint);
			
			//LOG.info("JSon Value - " + jsonInString + " & URI - " + builder.toUriString());
			final HttpEntity<?> requestEntity = new HttpEntity<>(marketoRequest, headers);
			response = createRestTemplate().exchange(builder.build().encode().toUri(), HttpMethod.POST, requestEntity, String.class);
			//LOG.info("Response Body - " + "[" + response.getBody().toString() + "]");
			processedResponse = new Gson().fromJson("[" + response.getBody() + "]", MarketoResponse[].class);
			if (null != processedResponse[0].getResult().get(0))
			{
				if (BhgeCoreConstants.CREATED.equalsIgnoreCase(processedResponse[0].getResult().get(0).getStatus()))
				{
					//bhgeContactUsDAO.saveContactUsData(contactUsData);
					return BhgeCoreConstants.CREATED;
				}
				else if (BhgeCoreConstants.UPDATED.equalsIgnoreCase(processedResponse[0].getResult().get(0).getStatus()))
				{
					//bhgeContactUsDAO.saveContactUsData(contactUsData);
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
			marketoConnectivityFailureMail(data.getEmail(), ex);
		}
		catch (final Exception e)
		{
			LOG.error("Recieved exception while connecting Marketo Serive." + e);
			e.printStackTrace();
			marketoConnectivityFailureMail(data.getEmail(), e);
		}

		return result;
	}
	
	
	private MarketoRequest createUpdateRequest(final GuestUserDetailsData data,int leadId)
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
		input.setFirstName(data.getFirstName());
		input.setLastName(data.getLastName());
		input.setEmail(data.getEmail());
		input.setPhone(data.getWorkPhone());
		//input.setAddressLine1(data.getAddress());
		//input.setAddressLine2(data.getStreetAddress());
		input.setCountry(data.getCountry());
		input.setState(data.getState());
		input.setCity(data.getCity());
		input.setPostalCode(data.getZipCode());
		input.setTitle(data.getTitle());
		input.setCompany(data.getOrganization());
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
	private RestTemplate createRestTemplate()
	{
		return new RestTemplate();
	}
}