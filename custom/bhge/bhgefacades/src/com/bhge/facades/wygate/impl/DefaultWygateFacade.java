package com.bhge.facades.wygate.impl;

import com.bhge.facades.wygate.WygateFacade;
import com.bhge.facades.wygate.pdf.ChemistryConfirmityPdf;
import com.bhge.facades.wygate.pdf.FilmConfirmityPdf;

import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import com.bhge.core.model.DSFilmDataModel;

import java.io.StringWriter;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.xml.bind.JAXBException;
import javax.xml.transform.Result;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;

import com.fasterxml.jackson.core.JsonProcessingException;

import org.apache.commons.lang3.StringUtils;
import org.apache.fop.apps.FOPException;
import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.MimeConstants;
import org.apache.log4j.Logger;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Marshaller;

import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.model.DSChemistryDataModel;
import com.bhge.core.wygate.WygateCalPortalService;
import com.bhge.facades.data.DSWygateChemistryData;
import com.bhge.facades.data.DSWygateFilmData;
import com.bhge.facades.data.WygateCaliberationData;

public class DefaultWygateFacade  implements WygateFacade {

	private WygateCalPortalService wygateCalPortalService;

	private Converter<DSFilmDataModel, WygateCaliberationData> batchNumberConverter;

	private Converter<DSChemistryDataModel, WygateCaliberationData> fabricationNumberConverter;

	private Converter<DSChemistryDataModel, DSWygateChemistryData> chemistryDataConverter;

	private Converter<DSFilmDataModel, DSWygateFilmData> filmDataConverter;

	@Autowired
	private ConfigurationService configurationService;

	private static final String CHEMISTRY_DATA_XSL_FILE_PATH = "chemistry.confirmity.pdf.xls.path";
	
	private static final String FILM_DATA_XSL_FILE_PATH = "film.confirmity.pdf.xls.path";
	
	private static final String FILM_IDENTIFICATION_TEST_RESULTS_EN_PATH = "film.identification.test.results.pdf.xsl.en.path";
	
	private static final String FILM_IDENTIFICATION_TEST_RESULTS_FR_PATH = "film.identification.test.results.pdf.xsl.fr.path";

	private static final String DATE_FORMAT_PDF = "MMM dd, yyyy";

	private static final String CHEMISTRY_CONFIRMITY = "ChemistryConfirmity";
	
	private static final String FILM_CONFIRMITY = "FilmConfirmity";
	
	private static final String FILM_IDENTIFICATION_TEST_RESULTS = "FilmIdentificationAndTestResults";

	private static final String PDF = ".pdf";
	
	private static final Logger LOG = Logger.getLogger(DefaultWygateFacade.class);

	@Override
	public WygateCaliberationData getWygatePortalData(String number, String type) {
		LOG.info("In Facade" + number);
		WygateCaliberationData wygateCaliberationData = new WygateCaliberationData();
		if ("FABRICATION".equalsIgnoreCase(type)) {
			DSChemistryDataModel result = searchFabricationNumber(number);

			wygateCaliberationData = fabricationNumberConverter.convert(result);
			if(StringUtils.isNotEmpty(number) && !number.contains("-") && number.length()>4){
				number = number.substring(0, 3) + "-" +number.substring(3, number.length());
			}
			wygateCaliberationData.setNumber(number);

		} else if ("BATCH".equalsIgnoreCase(type)) {
			DSFilmDataModel result = wygateCalPortalService.getWygateBatchData(number);
			wygateCaliberationData = batchNumberConverter.convert(result);
			wygateCaliberationData.setNumber(number);
		}
		return wygateCaliberationData;
	}

	public DSChemistryDataModel searchFabricationNumber(String number) {
		DSChemistryDataModel result = null;
		if(StringUtils.isNotEmpty(number) && !number.contains("-") && number.length()>4){
			number = number.substring(0, 3) + "-" +number.substring(3, number.length());
		}
		result = wygateCalPortalService.getWygateFabricationData(number);
		if(result == null && StringUtils.isNotEmpty(number)) {
			if(number.length()==10) {
				return searchFabricationNumber(number.substring(0, number.length()-1));
			} else if(number.length()==9) {
				return searchFabricationNumber(number.substring(0,number.length()-1));
			} else if(number.length()==8) {
				return searchFabricationNumber(number.substring(0,number.length()-1));
			}
		}
		return result;
	}
	@Override
	public void getChemistryData(String fabricationNumber, final HttpServletRequest request,
			final HttpServletResponse response) throws FOPException, TransformerException, IOException, JAXBException,
			TransformerFactoryConfigurationError, URISyntaxException {
		DSWygateChemistryData chemistryData = new DSWygateChemistryData();
		DSChemistryDataModel resultData = searchFabricationNumber(fabricationNumber);
		if (resultData != null) {
			chemistryData = chemistryDataConverter.convert(resultData);
		}
		if(StringUtils.isNotEmpty(fabricationNumber) && !fabricationNumber.contains("-") && fabricationNumber.length()>4){
			fabricationNumber = fabricationNumber.substring(0, 3) + "-" +fabricationNumber.substring(3, fabricationNumber.length());
		}
		chemistryData.setFabricationNumber(fabricationNumber);
		final JAXBContext chemistryConfirmityPDFContext = JAXBContext.newInstance(ChemistryConfirmityPdf.class);
		final StringWriter sw = new StringWriter();
		final Marshaller chemistryConfirmityDataMarshaller = chemistryConfirmityPDFContext.createMarshaller();
		chemistryConfirmityDataMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		final ChemistryConfirmityPdf chemistryConfirmityPdf = getChemistryConfirmityDataValue(chemistryData);
		chemistryConfirmityDataMarshaller.marshal(chemistryConfirmityPdf, sw);
		final String result = sw.toString();
		final String xsltFile = configurationService.getConfiguration().getString(CHEMISTRY_DATA_XSL_FILE_PATH);
		generateWygatePdf(result, xsltFile, request, response, CHEMISTRY_CONFIRMITY);
	}

	@Override
	public void getFilmData(String batchNumber, final HttpServletRequest request,
			final HttpServletResponse response)throws FOPException, TransformerException, IOException, JAXBException, TransformerFactoryConfigurationError, URISyntaxException {
		DSWygateFilmData filmData = new DSWygateFilmData();
		DSFilmDataModel resultData = wygateCalPortalService.getWygateBatchData(batchNumber);
		if (resultData != null) {
			filmData = filmDataConverter.convert(resultData);
		}
		final JAXBContext filmConfirmityPDFContext = JAXBContext.newInstance(FilmConfirmityPdf.class);
		final StringWriter sw = new StringWriter();
		final Marshaller filmConfirmityDataMarshaller = filmConfirmityPDFContext.createMarshaller();
		filmConfirmityDataMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		final FilmConfirmityPdf filmConfirmityPdf = getFilmConfirmityDataValue(filmData);
		filmConfirmityDataMarshaller.marshal(filmConfirmityPdf, sw);
		final String result = sw.toString();
		final String xsltFile = configurationService.getConfiguration().getString(FILM_DATA_XSL_FILE_PATH);
		generateWygatePdf(result, xsltFile, request, response, FILM_CONFIRMITY);
	}
	
	@Override
	public void getFilmIdentificationAndTestResult(String batchNumber, String language, HttpServletRequest request,
			HttpServletResponse response) throws FOPException, TransformerException, IOException, JAXBException,
			TransformerFactoryConfigurationError, URISyntaxException {
		DSWygateFilmData filmData = new DSWygateFilmData();
		DSFilmDataModel resultData = wygateCalPortalService.getWygateBatchData(batchNumber);
		if (resultData != null) {
			filmData = filmDataConverter.convert(resultData);
		}
		final JAXBContext filmConfirmityPDFContext = JAXBContext.newInstance(FilmConfirmityPdf.class);
		final StringWriter sw = new StringWriter();
		final Marshaller filmConfirmityDataMarshaller = filmConfirmityPDFContext.createMarshaller();
		filmConfirmityDataMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		final FilmConfirmityPdf filmConfirmityPdf = getFilmConfirmityDataValue(filmData);
		filmConfirmityDataMarshaller.marshal(filmConfirmityPdf, sw);
		final String result = sw.toString();
		if(StringUtils.isNotBlank(language) && language.equalsIgnoreCase("en")) {
			final String xsltFile = configurationService.getConfiguration().getString(FILM_IDENTIFICATION_TEST_RESULTS_EN_PATH);
			generateWygatePdf(result, xsltFile, request, response, FILM_IDENTIFICATION_TEST_RESULTS);
		}
		else
		{
			final String xsltFile = configurationService.getConfiguration().getString(FILM_IDENTIFICATION_TEST_RESULTS_FR_PATH);
			generateWygatePdf(result, xsltFile, request, response, FILM_IDENTIFICATION_TEST_RESULTS);
		}
		
	}

	public ChemistryConfirmityPdf getChemistryConfirmityDataValue(DSWygateChemistryData chemistryData) {
		ChemistryConfirmityPdf chemistryConfirmityPdf = new ChemistryConfirmityPdf();
		if (null != chemistryData) {
			final String formattedSysDate = getCurrentdate();
			chemistryConfirmityPdf.setCurrentDate(formattedSysDate);
			chemistryConfirmityPdf.setType(chemistryData.getType());
			chemistryConfirmityPdf.setShippingContent(chemistryData.getShippingContent());
			chemistryConfirmityPdf.setExpiry(formatDate(chemistryData.getExpiry()));
			chemistryConfirmityPdf.setFabricationNumber(chemistryData.getFabricationNumber());
			chemistryConfirmityPdf.setMabcCode(chemistryData.getMabcCode());
		}
		return chemistryConfirmityPdf;
	}
	
	public FilmConfirmityPdf getFilmConfirmityDataValue(DSWygateFilmData filmConfirmityData) {
		FilmConfirmityPdf filmConfirmityPdf = new FilmConfirmityPdf();
		if (null != filmConfirmityData) {
			final String formattedSysDate = getCurrentdate();
			filmConfirmityPdf.setBatch(filmConfirmityData.getBatch());
			filmConfirmityPdf.setCurrentDate(formattedSysDate);
			filmConfirmityPdf.setExpiry(formatDate(filmConfirmityData.getExpiry()));
			if (null != filmConfirmityData.getType()) {
				filmConfirmityPdf.setType(filmConfirmityData.getType());
				filmConfirmityPdf.setClasse(filmConfirmityData.getType());
				filmConfirmityPdf.setG2(filmConfirmityData.getType());
				filmConfirmityPdf.setG4(filmConfirmityData.getType());
				filmConfirmityPdf.setgSigmaD(filmConfirmityData.getType());
				filmConfirmityPdf.setIr192(filmConfirmityData.getType());
				filmConfirmityPdf.setIsoSpeed(filmConfirmityData.getType());
				filmConfirmityPdf.setKamGy(filmConfirmityData.getType());
				filmConfirmityPdf.setKv120(filmConfirmityData.getType());
				filmConfirmityPdf.setSigmaD2(filmConfirmityData.getType());
				filmConfirmityPdf.setAvgContrast(filmConfirmityData.getType());
			}
			
			if(null != filmConfirmityData.getControl()) {
				filmConfirmityPdf.setControl(formatDate(filmConfirmityData.getControl()));
			}
			
			if(null != filmConfirmityData.getCper()) {
				filmConfirmityPdf.setCper(filmConfirmityData.getCper());
			}
			
			if(null != filmConfirmityData.getSper()) {
				filmConfirmityPdf.setSper(filmConfirmityData.getSper());
			}
			
		}
		return filmConfirmityPdf;
	}

	private String getCurrentdate() {
		final Date currentSysDate = new Date();
		final String requestedShipDate = new SimpleDateFormat(DATE_FORMAT_PDF).format(currentSysDate);
		return requestedShipDate;
	}

	private void generateWygatePdf(final String xml, final String xsltFile, final HttpServletRequest request,
			final HttpServletResponse response, String fileType)
			throws FileNotFoundException, FOPException, TransformerFactoryConfigurationError,
			TransformerConfigurationException, TransformerException, IOException, URISyntaxException {
		try {
			final StreamSource xmlSource = new StreamSource(new StringReader(xml));
			final Timestamp timestamp = new Timestamp(System.currentTimeMillis());
			final SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd-HHmmss");
			final URL url = new URL(xsltFile);
			final BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
			final FopFactory fopFactory = FopFactory.newInstance(url.toURI());
			final FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
			final ByteArrayOutputStream outStream = new ByteArrayOutputStream();
			final TransformerFactory factory = TransformerFactory.newInstance();
			final Transformer transformer = factory.newTransformer(new StreamSource(read));
			final Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, foUserAgent, outStream);
			final Result res = new SAXResult(fop.getDefaultHandler());
			transformer.transform(xmlSource, res);
			final byte[] pdfBytes = outStream.toByteArray();
			response.setContentLength(pdfBytes.length);
			response.setContentType("application/pdf");
			response.addHeader("Content-Disposition",
					"attachment; filename= " + fileType + "-" + sdf.format(timestamp) + PDF);
			response.getOutputStream().write(pdfBytes);
			response.getOutputStream().flush();
		} catch (final JsonProcessingException e) {
			LOG.error("JsonProcessingMainException:::::::" + e);
			LOG.error("JsonProcessingException:::::::" + e.getMessage());
		}
	}
	
	
public String formatDate(String inputDate) {
	String newDate = inputDate;
	try {
		SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");
		Date date2 = formatter.parse(inputDate);
		DateFormat dateFormat = new SimpleDateFormat("MM/yyyy");
		newDate = dateFormat.format(date2);  
	}
	catch(Exception e) {
		LOG.error("~~~Exception in formatting expiry date~~~" + e);
	}
	return newDate;
}
	
	

	// Getter and Setters
	public WygateCalPortalService getWygateCalPortalService() {
		return wygateCalPortalService;
	}

	public void setWygateCalPortalService(WygateCalPortalService wygateCalPortalService) {
		this.wygateCalPortalService = wygateCalPortalService;
	}

	public Converter<DSFilmDataModel, WygateCaliberationData> getBatchNumberConverter() {
		return batchNumberConverter;
	}

	public void setBatchNumberConverter(Converter<DSFilmDataModel, WygateCaliberationData> batchNumberConverter) {
		this.batchNumberConverter = batchNumberConverter;
	}

	public Converter<DSChemistryDataModel, WygateCaliberationData> getFabricationNumberConverter() {
		return fabricationNumberConverter;
	}

	public void setFabricationNumberConverter(
			Converter<DSChemistryDataModel, WygateCaliberationData> fabricationNumberConverter) {
		this.fabricationNumberConverter = fabricationNumberConverter;
	}

	public Converter<DSChemistryDataModel, DSWygateChemistryData> getChemistryDataConverter() {
		return chemistryDataConverter;
	}

	public void setChemistryDataConverter(
			Converter<DSChemistryDataModel, DSWygateChemistryData> chemistryDataConverter) {
		this.chemistryDataConverter = chemistryDataConverter;
	}

	public Converter<DSFilmDataModel, DSWygateFilmData> getFilmDataConverter() {
		return filmDataConverter;
	}

	public void setFilmDataConverter(Converter<DSFilmDataModel, DSWygateFilmData> filmDataConverter) {
		this.filmDataConverter = filmDataConverter;
	}

	
}
