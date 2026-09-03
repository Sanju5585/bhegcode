package com.bhge.facades.wygate;

import java.io.IOException;
import java.net.URISyntaxException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactoryConfigurationError;

import org.apache.fop.apps.FOPException;

import com.bhge.facades.data.DSWygateChemistryData;
import com.bhge.facades.data.DSWygateFilmData;
import com.bhge.facades.data.WygateCaliberationData;


public interface WygateFacade {

	public WygateCaliberationData getWygatePortalData(String number, String type);
	
	public void getChemistryData(String fabricationNumber, final HttpServletRequest request,
			final HttpServletResponse response) throws FOPException, TransformerException, IOException, JAXBException, TransformerFactoryConfigurationError, URISyntaxException;
	
	public void getFilmData(String batchNumber,final HttpServletRequest request,
			final HttpServletResponse response)throws FOPException, TransformerException, IOException, JAXBException, TransformerFactoryConfigurationError, URISyntaxException;
	
	public void getFilmIdentificationAndTestResult(String batchNumber, String language, final HttpServletRequest request,
			final HttpServletResponse response)throws FOPException, TransformerException, IOException, JAXBException, TransformerFactoryConfigurationError, URISyntaxException;
}
