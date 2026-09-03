package com.bhge.facades.calportal.impl;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.io.StringWriter;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import javax.xml.transform.Result;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.fop.apps.FOPException;
import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.MimeConstants;
import org.apache.log4j.Logger;

import com.bhge.core.calportal.exception.PDFException;
import com.bhge.core.calportal.service.CalPortalService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.data.AddToMSEInputData;
import com.bhge.core.data.CalibrationPDFEntry;
import com.bhge.core.data.EquipmentData;
import com.bhge.core.data.ProbeCalibrationData;
import com.bhge.core.data.ProbeCalibrationRequest;
import com.bhge.core.data.ProbeCalibrationResponse;
import com.bhge.core.data.SearchCalibrationResponseData;
import com.bhge.core.model.DSGuestCalibrationFormRecordsModel;

import com.bhge.core.mysite.service.MySiteEquipmentService;
import com.bhge.facades.calportal.CalPortalFacade;
import com.bhge.facades.calportal.CalibrationProductFamilyData;
import com.bhge.facades.calportal.CalibrationSensorType;
import com.bhge.facades.calportal.pdf.CalibrationPDFData;
import com.bhge.facades.calportal.pdf.CalibrationPDFEntryList;
import com.bhge.facades.mysite.MySiteEquipmentFacade;
import com.bhge.facades.user.populators.CalibrationProductFamilyPopulator;

import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.ds.dsocc.calibration.data.CalibrationSensorModelType;
import com.ds.dsocc.calibration.data.GuestUserDetailsData;
import com.fasterxml.jackson.core.JsonProcessingException;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;

public class DefaultCalPortalFacade implements CalPortalFacade {

	private static final String HYPEN = "-";

	private static final String SPACE = "\\s";

	private static final String SHANNON = "Shannon";

	private static final String MANorMELFLAG = "CP_ALL";

	@Resource(name = "calPortalService")
	private CalPortalService calPortalService;
	
	@Resource(name = "configurationService")
	private ConfigurationService configurationService;
	
	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;
	
	@Resource(name = "mediaService")
	private MediaService mediaService;
	
	@Resource(name = "calibrationProductFamilyPopulator")
	private CalibrationProductFamilyPopulator calibrationProductFamilyPopulator;
	
	@Resource(name = "mySiteEquipmentService")
	private MySiteEquipmentService mySiteEquipmentService;
	
	@Resource(name = "mySiteEquipmentFacade")
	 private MySiteEquipmentFacade mySiteEquipmentFacade;
	
	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "modelService")
	private ModelService modelService;
	
	
	private static final String CALIBRATION_XSL_FILE_MEDIA_ID = "panacal.pdf.xsl.media.id";
	private static final String PANACAL_PDF_XSL_LOCAL_PATH = "panacal.pdf.xsl.path";
	private static final String CALIBRATION_XSL_HEADERLOGO_MEDIA_ID = "panacal.pdf.xsl.headerlogo.media.id";
	private static final String PANACAL_PDF_FOOTER_TEXT = "panacal.pdf.footer.text.";
	private static final String PANACAL_PDF_FOOTER_DISCLIMER = "panacal.pdf.footer.disclimer";

	private static final Logger LOG = Logger.getLogger(DefaultCalPortalFacade.class);
	private static final String CALIBRATION = "Caliberation";
	private static final String PDF = ".pdf";
	
	private static final String CONTENT_TYPE = "application/pdf";
	private static final String DATE_FORMAT = "yyyyMMdd-HHmmss";

	@Override
	public void getCalibrationData(ProbeCalibrationRequest calibrationRequest, final HttpServletRequest request,
			final HttpServletResponse response)
					throws JAXBException, IOException, FOPException, TransformerException, URISyntaxException, PDFException {
		// TODO Auto-generated method stub
		LOG.info("Insided getCaliberationData() ");
		ProbeCalibrationData calibrationData = calPortalService.getCalPortalData(calibrationRequest);
		LOG.info("Line 143 calibrationData: " + calibrationData);
		if (calibrationData != null) {
			LOG.info("Line 145 Inside calibrationData if condition");
			CalibrationPDFData calibrationPDFData = calculatePDFData(calibrationData, request, response);
			final String calibrationXMLData = generateCalibrationXMLData(calibrationPDFData);
			final ByteArrayOutputStream pdfOutputStream = getCalibrationPDFOutputStream(calibrationXMLData, request,
					response);
			updateResponseHeader(pdfOutputStream, request, response);
		}
	}

	@Override
	public SearchCalibrationResponseData searchCalibrationData(ProbeCalibrationRequest calibrationRequest, String customerNumber,
			final HttpServletRequest request, final HttpServletResponse response) {
		LOG.info("Insided getCaliberationData() ");
		ProbeCalibrationData calibrationData = calPortalService.getCalPortalData(calibrationRequest);
		
		SearchCalibrationResponseData searchCalibrationData  = null;
		if (calibrationData != null) {
					
			searchCalibrationData = new SearchCalibrationResponseData();
			searchCalibrationData.setProbeSerialNumber(calibrationData.getProbeSerialNumber().concat(HYPEN).concat(calibrationData.getProbeType()));
			searchCalibrationData.setSensorType(calibrationData.getProbeType());
			searchCalibrationData.setLastCalibrationDate(calibrationData.getTdate());
			searchCalibrationData.setProbeModel(calibrationData.getProbeModel());
			searchCalibrationData.setIsPinned(false);
			searchCalibrationData.setIsInSap(false);
			
			Map<String,String> partNumberMap = calPortalService.populatePartNumberMap();					
			String partNumber = partNumberMap.get(calibrationData.getProbeModel())!=null?partNumberMap.get(calibrationData.getProbeModel()):calibrationData.getProbeModel();
			
			searchCalibrationData.setPartNumber(partNumber);
			searchCalibrationData.setPartName("NA");
			searchCalibrationData.setCustomer(customerNumber);
			searchCalibrationData.setAdditionalInfo("");
			//searchCalibrationData.setNotes("");
			if (!userService.isAnonymousUser(userService.getCurrentUser())) {
				isEquipmentInWatchList(searchCalibrationData,customerNumber);
				if(searchCalibrationData.getLastServiceDate() == null) {
					searchCalibrationData.setLastServiceDate("");
				}
				if(searchCalibrationData.getRmaStatus() == null) {
					searchCalibrationData.setRmaStatus("");
				}
			}			
		}		
		return searchCalibrationData;
	}

	@Override
	public ByteArrayOutputStream getCalibrationEmailOutputStream(ProbeCalibrationRequest calibrationRequest,
			HttpServletRequest request, HttpServletResponse response)
					throws JAXBException, IOException, FOPException, TransformerException, URISyntaxException, PDFException {

		LOG.info("Insided getCalibrationEmailOutputStream() ");
		ProbeCalibrationData calibrationData = calPortalService.getCalPortalData(calibrationRequest);
		ByteArrayOutputStream pdfOutputStream = null;
		if (calibrationData != null) {
			CalibrationPDFData calibrationPDFData = calculatePDFData(calibrationData, request, response);
			final String calibrationXMLData = generateCalibrationXMLData(calibrationPDFData);
			pdfOutputStream = getCalibrationPDFOutputStream(calibrationXMLData, request, response);
		}

		return pdfOutputStream;
	}

	@Override
	public List<CalibrationProductFamilyData> fetchProductFamilyList(String appName) {
		List<CalibrationProductFamilyData> productFamilyList = new ArrayList<>();

		List<BHGERegisterKeyValueDataModel> dataModel = calPortalService.fetchProductFamilyList(appName);
		for (BHGERegisterKeyValueDataModel model : dataModel) {
			CalibrationProductFamilyData calibrationProductFamily = new CalibrationProductFamilyData();
			calibrationProductFamilyPopulator.populate(model, calibrationProductFamily);
			productFamilyList.add(calibrationProductFamily);
		}
		return productFamilyList;
	}

	@Override
	public List<CalibrationSensorType> fetchCalibrationSensorType() {
		// TODO Auto-generated method stub
		return calPortalService.fetchCalibarationSensorType();
	}

	@Override
	public List<CalibrationSensorModelType> fetchCalibrationSensorModelTypes(final HttpServletRequest request,
			final HttpServletResponse response) {
		// TODO Auto-generated method stub
		return calPortalService.fetchCalibarationSensorModelTypes(request, response);
	}

	private CalibrationPDFData calculatePDFData(final ProbeCalibrationData calibrationData,
			final HttpServletRequest request, final HttpServletResponse response) throws PDFException {
		LOG.info("Inside calculatePDFData()");
		double dpStart, dpEnd, slope, yIntercept, fhReading, degF;
		int noOfPoints = 0;
		List<String> calRef = new ArrayList<String>(), calUnitRaw = new ArrayList<String>();

		CalibrationPDFData calibrationPDFData = new CalibrationPDFData();
		List<CalibrationPDFEntry> calibarationPDFEntries = new ArrayList<CalibrationPDFEntry>();
		CalibrationPDFEntryList calibrationPDFEntryList = new CalibrationPDFEntryList();

		calibrationPDFData.setProbeSerialNumber(calibrationData.getProbeSerialNumber().concat(HYPEN).concat(calibrationData.getProbeType()));
		calibrationPDFData.setLastCalibrationDate(calibrationData.getTdate());
		calibrationPDFData.setProbeModel(calibrationData.getProbeModel());
		calibrationPDFData.setSensorType(calibrationData.getProbeType());
		calibrationPDFData.setLocation(calibrationData.getLocation());
		calibrationPDFData.setConfigureProbeModel(calibrationData.getConfigureProbeModel());
		LOG.info("US552028: Location - " + calibrationData.getLocation());
		if (calibrationData.getLocation() != null) {
			String footerText = configurationService.getConfiguration()
                    .getString(PANACAL_PDF_FOOTER_TEXT.concat(calibrationData.getLocation().replaceAll(SPACE, "")));

			calibrationPDFData.setFooterText(footerText);
			if (calibrationData.getLocation().equalsIgnoreCase(SHANNON)) {
				calibrationPDFData
						.setDisclaimer(configurationService.getConfiguration().getString(PANACAL_PDF_FOOTER_DISCLIMER));
			} else {
				calibrationPDFData.setDisclaimer("");
			}
		} else {
			calibrationPDFData.setFooterText("");
		}
		if ("FH".equals(calibrationData.getShiftValue())) {
			calibrationPDFData.setHeaderReading("FH Reading");
		}
		else
		{
			calibrationPDFData.setHeaderReading("MH Reading");
		}

		final String headerLogoMediaId = configurationService.getConfiguration()
				.getString(CALIBRATION_XSL_HEADERLOGO_MEDIA_ID);
		final MediaModel calibrationPdfHeaderLogoMedia = getMediaByCode(headerLogoMediaId);
		if (calibrationPdfHeaderLogoMedia != null) {
			LOG.info("US552028: calibrationPdfHeaderLogoMedia is Not Null");
			String logoHeaderURL = String.format("%s%s",
					request.getRequestURL().substring(0, request.getRequestURL().indexOf(request.getContextPath())),
					calibrationPdfHeaderLogoMedia.getURL());
			calibrationPDFData.setHeaderLogo(logoHeaderURL);
			LOG.info("US552028: HeaderLogo URL:" + logoHeaderURL);
		}
		boolean renderPdf = calibrationData.isRenderPdf();
		// Calculation for Calibration Details
		noOfPoints = Integer.parseInt(calibrationData.getNoOfPoints());
		calRef = calibrationData.getCalRef();
		calUnitRaw = calibrationData.getCalUnitRaw();

		String rangeLow = calibrationData.getRangeLow();
		String rangeHigh = calibrationData.getRangeHigh();
		for (int ctr = 0; ctr < noOfPoints; ctr++) {
			if ("-273".equals(calRef.get(ctr))) {
				noOfPoints = ctr;
				break;
			}
		}
		LOG.info("US552028 noOfPoints" +noOfPoints);
		if (noOfPoints < 4) {
			//			ctxApp.getSession().setValue("pdfErrMesg", "The probe <b>"+ calDataBean.getProbeSerialNumber() +
			//					" - " + calDataBean.getProbeType()
			//					+"</b> does not have valid calibration data. " +
			//							"Please contact your local calibration lab with any questions.");
			throw new PDFException("The Probe does not have valid calibration data");
			//noOfPoints = 11;
		}

		if (rangeLow != null || rangeHigh!=null)
			calculateCalibrationforMCSCalSummary(calibrationData, noOfPoints, calibarationPDFEntries, rangeLow, rangeHigh);
		else
			calculateCalibrationforMCSCalExtraPolation(calibrationData,calibarationPDFEntries);
		LOG.info("US552028 : calibarationPDFEntries Parent"+calibarationPDFEntries.size());
		calibrationPDFEntryList.setEntries(calibarationPDFEntries);
		calibrationPDFData.setEntries(calibrationPDFEntryList);
		return calibrationPDFData;
	}

	private void calculateCalibrationforMCSCalExtraPolation(ProbeCalibrationData calibrationData, List<CalibrationPDFEntry> calibarationPDFEntries) {
		LOG.info("US552028 : inside calculateCalibrationforMCSCalExtraPolation" );
		int noOfPoints = Integer.parseInt(calibrationData.getNoOfPoints());
		List<String> calRef = calibrationData.getCalRef();
		List<String> calUnitRaw = calibrationData.getCalUnitRaw();
		DecimalFormat dpFormat = new DecimalFormat("#");
		DecimalFormat mhFormat = new DecimalFormat("#0.0000");
		DecimalFormat fhFormat = new DecimalFormat("#0.00");

		LOG.info("US552028 : noOfPoints" + noOfPoints);
		for(int i=0;i<noOfPoints;i++)
		{
			CalibrationPDFEntry calibrationPDFEntry = new CalibrationPDFEntry();
			calibrationPDFEntry.setLineNo(Integer.toString(i));
			double degF =0;
			LOG.info("US552028 : CalExtraPolation iteration" + i);
			LOG.info("US552028 : calRef.get("+i+")" + calRef.get(i));
			if(calRef.get(i)!=null){
				LOG.info("US552028 : inside calRef if :336");
				calibrationPDFEntry.setDpStartC(StringUtils.leftPad(dpFormat.format(Double.parseDouble(calRef.get(i))),10));
				degF = 1.8 * Double.parseDouble(calRef.get(i)) + 32;
			}else {
				LOG.info("US552028 : inside calRef else :339");
				calibrationPDFEntry.setDpStartC(StringUtils.leftPad("NaN", 10));
			}
			if ("FH".equals(calibrationData.getShiftValue())) {
				if(calUnitRaw.get(i)!=null) {
					calibrationPDFEntry.setMhReading(fhFormat.format(Double.parseDouble(calUnitRaw.get(i))));
				}
			}
			else if ("MH".equals(calibrationData.getShiftValue()))
			{
				if(calUnitRaw.get(i)!=null) {
					calibrationPDFEntry.setMhReading(mhFormat.format(Double.parseDouble(calUnitRaw.get(i))));
				}
			}
			calibrationPDFEntry.setDpStartF(StringUtils.leftPad(dpFormat.format(degF), 10) );
			calibarationPDFEntries.add(calibrationPDFEntry);
		}
		LOG.info("US552028 : Exit calculateCalibrationforMCSCalExtraPolation" );
	}

	private static void calculateCalibrationforMCSCalSummary(ProbeCalibrationData calibrationData, int noOfPoints,
								 List<CalibrationPDFEntry> calibarationPDFEntries, String rangeLow, String rangeHigh) {

		LOG.info("US552028 : inside calculateCalibrationforMCSCalSummary" );
		double fhReading;
		double slope;
		double yIntercept;
		double dpEnd;
		double dpStart;
		double degF;
		int xctr = 0, yctr = 0;
		dpStart = "0".equals(rangeLow) ? -80 : Double.parseDouble(rangeLow);
		dpEnd = "0".equals(rangeHigh) ? 20 : Double.parseDouble(rangeHigh);
		int i = 0;
		List<String> calRef = calibrationData.getCalRef();
		List<String> calUnitRaw = calibrationData.getCalUnitRaw();
		LOG.info("US552028 : calRefSize" + calRef.size());
		LOG.info("US552028 : noOfPoints" + noOfPoints);
		for (; dpStart <= dpEnd; dpStart = dpStart + 10) {
			for (int ctr = 0; ctr < noOfPoints; ctr++) {
				if (dpStart >= Double.parseDouble((String) calRef.get(ctr))) {
					xctr = ctr;
				}
			}

			for (int ctr = 0; ctr < noOfPoints; ctr++) {
				if (dpStart <= Double.parseDouble((String) calRef.get(ctr))) {
					yctr = ctr;
					break;
				}
				System.out.println(ctr);
			}

			if (dpStart <= Double.parseDouble((String) calRef.get(0))) {
				yctr = xctr + 1;
			}

			if (dpEnd >= Double.parseDouble((String) calRef.get(noOfPoints - 1))) {
				xctr = yctr - 1;
			}

			if (dpStart >= Double.parseDouble((String) calRef.get(noOfPoints - 1))) {
				yctr = noOfPoints - 1;
				xctr = yctr - 1;
			}

			slope = (Math.log(Double.parseDouble((String) calUnitRaw.get(xctr)))
					- Math.log(Double.parseDouble((String) calUnitRaw.get(yctr))));

			slope = slope
					/ (Double.parseDouble((String) calRef.get(xctr)) - Double.parseDouble((String) calRef.get(yctr)));

			yIntercept = Math.log(Double.parseDouble((String) calUnitRaw.get(xctr)));
			yIntercept = yIntercept - ((slope) * Double.parseDouble((String) calRef.get(xctr)));

			DecimalFormat mhFormat = new DecimalFormat("#0.0000");
			DecimalFormat mhFormat2 = new DecimalFormat("#0.000");
			DecimalFormat fhFormat = new DecimalFormat("#0.00");
			DecimalFormat dpFormat = new DecimalFormat("#");

			fhReading = Math.exp(yIntercept + (dpStart * slope));

			CalibrationPDFEntry calibrationPDFEntry = new CalibrationPDFEntry();

			calibrationPDFEntry.setLineNo(Integer.toString(i));
			calibrationPDFEntry.setDpStartC(StringUtils.leftPad(dpFormat.format(dpStart),10));

			//			pdfCell.add(Integer.toString(i));
			//			pdfCell.add(dpFormat.format(dpStart));

			if ("FH".equals(calibrationData.getShiftValue())) {
				fhReading = fhReading * 100;
				fhReading = Math.round(fhReading);
				fhReading = fhReading / 100;
				calibrationPDFEntry.setMhReading(fhFormat.format(fhReading));
				//				pdfCell.add(fhFormat.format(fhReading));
			} else if ("MH".equals(calibrationData.getShiftValue())) {
				if (fhReading >= 1) {
					fhReading = fhReading * 1000;
					fhReading = Math.round(fhReading);
					fhReading = fhReading / 1000;
					calibrationPDFEntry.setMhReading(mhFormat2.format(fhReading));
					//					pdfCell.add(mhFormat2.format(fhReading));
				} else {
					fhReading = fhReading * 10000;
					fhReading = Math.round(fhReading);
					fhReading = fhReading / 10000;
					calibrationPDFEntry.setMhReading(mhFormat.format(fhReading));
					//					pdfCell.add(mhFormat.format(fhReading));
				}

			}

			degF = 1.8 * dpStart + 32;
			calibrationPDFEntry.setDpStartF(StringUtils.leftPad(dpFormat.format(degF), 10) );
			//			pdfCell.add(dpFormat.format(degF));
			i++;

			calibarationPDFEntries.add(calibrationPDFEntry);
		}
		LOG.info("US552028 : Exit calculateCalibrationforMCSCalSummary" );
	}

	private void isEquipmentInWatchList(final SearchCalibrationResponseData searchCalibrationData, final String customerNumber) {
		String MANorMELflag = MANorMELFLAG;
		final SimpleDateFormat simpleDateFormat = new SimpleDateFormat(BhgeCoreConstants.YEAR_MONTH_DATE_FORMAT);
		final Calendar c = Calendar.getInstance();
		String toDate = simpleDateFormat.format(c.getTime());
		c.add(Calendar.MONTH, -6);
		String fromDate = simpleDateFormat.format(c.getTime());
		final String endCustomerID = null;
		EquipmentData equipmentData = mySiteEquipmentService.getEquipmentDataForCustomerMSE(customerNumber,
				MANorMELflag, fromDate, toDate, endCustomerID);
		if (equipmentData != null) {
			 mySiteEquipmentFacade.populateProductDataOnEquipmentRecord(equipmentData);
			if (CollectionUtils.isNotEmpty(equipmentData.getEquipmentData())) {
				List<AddToMSEInputData> equipmentList = equipmentData.getEquipmentData();
				final String serialNo;
				if (StringUtils.isNotEmpty(searchCalibrationData.getProbeSerialNumber()) && StringUtils.isNotEmpty(searchCalibrationData.getSensorType())) {
					if (searchCalibrationData.getProbeSerialNumber().contains(searchCalibrationData.getSensorType())
							&& searchCalibrationData.getProbeSerialNumber().endsWith(HYPEN.concat(searchCalibrationData.getSensorType()))) {
						serialNo = searchCalibrationData.getProbeSerialNumber();
					}
					else {
						serialNo = searchCalibrationData.getProbeSerialNumber().concat(HYPEN).concat(searchCalibrationData.getSensorType());
					}
				}
				else {
					serialNo = searchCalibrationData.getProbeSerialNumber();
				}				
				List<AddToMSEInputData> calEquipmentList = equipmentList.stream()
						.filter(equ -> equ.getSerialNumber().equalsIgnoreCase(serialNo))
						.collect(Collectors.toList());
				if (calEquipmentList != null) {
					Map<String,String> partNumberMap = calPortalService.populatePartNumberMap();					
					String partNumber = partNumberMap.get(searchCalibrationData.getProbeModel())!=null?partNumberMap.get(searchCalibrationData.getProbeModel()):searchCalibrationData.getProbeModel();
					calEquipmentList.stream().forEach(calEqu -> {						
						 if (partNumber!=null && partNumber.equalsIgnoreCase(calEqu.getPartNumber())) {
							searchCalibrationData.setIsInSap(Boolean.TRUE);
							if (StringUtils.isNotBlank(calEqu.getPinned())) {
								searchCalibrationData.setIsPinned(Boolean.TRUE);
							}
							searchCalibrationData.setPartNumber(calEqu.getPartNumber());
							searchCalibrationData.setPartName(calEqu.getPartName());
							searchCalibrationData.setCustomer(calEqu.getCustomer());
							searchCalibrationData.setAdditionalInfo("");
							
							if(calEqu.getLastServiceDate() != null) {
							searchCalibrationData.setLastServiceDate(calEqu.getLastServiceDate());
							}
							if(calEqu.getRmaStatus() != null) {
							searchCalibrationData.setRmaStatus(StringUtils.isNotBlank(calEqu.getRmaStatus()) ? calEqu.getRmaStatus() : StringUtils.EMPTY);
							}
							//searchCalibrationData.setNotes(calEqu.getAdditionalInfo());
							
						}
						 searchCalibrationData.setProductData(calEqu.getProductData());
						 return;
					});
				}
			}
		}
	}

	private String generateCalibrationXMLData(final CalibrationPDFData calibrationPDFData)
			throws JAXBException, IOException, FOPException, TransformerException, URISyntaxException {
		LOG.info("Inside generatePDFData()");
		final JAXBContext calibrationPDFContext = JAXBContext.newInstance(CalibrationPDFData.class);
		final StringWriter sw = new StringWriter();
		final Marshaller pdfDataMarshaller = calibrationPDFContext.createMarshaller();
		pdfDataMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		pdfDataMarshaller.marshal(calibrationPDFData, sw);
		final String calibrationXMLData = sw.toString();
		return calibrationXMLData;
	}

	private ByteArrayOutputStream getCalibrationPDFOutputStream(final String result, HttpServletRequest request,
			HttpServletResponse response) throws IOException, TransformerException, FOPException, URISyntaxException {

		final String xsltMediaID = configurationService.getConfiguration().getString(CALIBRATION_XSL_FILE_MEDIA_ID);
		final ByteArrayOutputStream outStream = new ByteArrayOutputStream();
		try {
			final StreamSource xmlSource = new StreamSource(new StringReader(result));
			LOG.info("Calibration media code: "+ xsltMediaID);
			final MediaModel xsltMedia = getMediaByCode(xsltMediaID);
			final String xsltMediaURL;
			if (xsltMedia != null) {
				LOG.info("Inside calibration xslmedia if condition");
				xsltMediaURL = String.format("%s%s",
						StringEscapeUtils.escapeHtml4(request.getRequestURL().toString()).substring(0, request.getRequestURL().indexOf(request.getContextPath())),
						xsltMedia.getURL());
			} else {
				LOG.info("Inside calibration xslmedia else condition");
				xsltMediaURL = configurationService.getConfiguration().getString(PANACAL_PDF_XSL_LOCAL_PATH);
			}
			LOG.info("CalibrationPDFXSL xsltMediaURL: "+xsltMediaURL);
			final URL url = new URL(StringEscapeUtils.escapeHtml4(xsltMediaURL));
			LOG.info("CalibrationPDFXSL URL: "+url);
			final BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
			final FopFactory fopFactory = FopFactory.newInstance(url.toURI());
			final FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
			final TransformerFactory factory = TransformerFactory.newInstance();
			final Transformer transformer = factory.newTransformer(new StreamSource(read));
			final Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, foUserAgent, outStream);
			final Result res = new SAXResult(fop.getDefaultHandler());
			transformer.transform(xmlSource, res);
		} catch (final JsonProcessingException e) {
			LOG.error("JsonProcessingException:::::::" + e.getMessage());
		}
		return outStream;
	}

	private void updateResponseHeader(ByteArrayOutputStream outStream, HttpServletRequest request,
			HttpServletResponse response) {
		final Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		final SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
		final byte[] pdfBytes = outStream.toByteArray();

		try {
			response.setContentLength(pdfBytes.length);
			response.setContentType(CONTENT_TYPE);
			response.addHeader("Content-Disposition",
					"attachment; filename= " + CALIBRATION + HYPEN + sdf.format(timestamp) + PDF);
			response.getOutputStream().write(pdfBytes);
			response.getOutputStream().flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			LOG.error("IO Exception:::::::" + e.getMessage());
		}

	}

	private MediaModel getMediaByCode(final String mediaCode) {
		if (StringUtils.isNotEmpty(mediaCode)) {
			for (final CatalogVersionModel catalogVersionModel : catalogVersionService.getSessionCatalogVersions()) {

				final MediaModel media = getMediaByCodeAndCatalogVersion(mediaCode, catalogVersionModel);
				if (media != null) {
					LOG.info("Inside calibration media condition: "+ media);
					return media;
				}
			}
		}
		LOG.info("Inside calibration getMediaByCode return null");
		return null;
	}

	private MediaModel getMediaByCodeAndCatalogVersion(final String mediaCode,
			final CatalogVersionModel catalogVersionModel) {
		try {
			return mediaService.getMedia(catalogVersionModel, mediaCode);
		} catch (final UnknownIdentifierException ignore) {
			// Ignore this exception
			LOG.error("File Not Found :: " + mediaCode + ignore);
		}
		return null;
	}

	@Override
	public void saveGuestData(GuestUserDetailsData data) {
		// TODO Auto-generated method stub
		final DSGuestCalibrationFormRecordsModel guestUserModel = modelService.create(DSGuestCalibrationFormRecordsModel.class);
		String uuid = UUID.randomUUID().toString(); 
		guestUserModel.setGuestUserID(uuid);
		guestUserModel.setProbeSerialNumber(data.getProbeSerialNumber());
		guestUserModel.setTitle(data.getTitle());
		guestUserModel.setCountry(data.getCountry());
		guestUserModel.setState(data.getState());
		guestUserModel.setCommunicationsPreference(Boolean.valueOf(data.getCommunicationsPreference()));
		guestUserModel.setSensorType(data.getSensorType());
		guestUserModel.setLastCalibrationDate(data.getLastCalibrationDate());
		calPortalService.saveGuestModel(guestUserModel, data);
	}

}
