package com.bhge.core.cronjob;


import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.codehaus.plexus.util.StringUtils;

import jakarta.annotation.Resource;

import com.bhge.core.data.ChemistryData;
import com.bhge.core.data.FilmData;
import com.bhge.core.waygatedataload.service.WaygateDataLoaderService;

import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;

public class BHGEWaygateDataLoadJob extends AbstractJobPerformable<CronJobModel> {
	
	private static final Logger LOG = Logger.getLogger(BHGEWaygateDataLoadJob.class);

	@Resource(name = "waygateDataLoaderService")
	private WaygateDataLoaderService waygateDataLoaderService;
	private static final String FILM_DATA_XLSX_FILE_PATH = "film.xlsx.path";
	private static final String CHEMISTRY_DATA_XLSX_FILE_PATH = "chemistry.xlsx.path";
	@Resource(name = "configurationService")
	private ConfigurationService configurationService;


	@Override
	public PerformResult perform(CronJobModel arg0) {
	   try 
		{
			boolean flag1 = false;
			boolean flag2 = false;
			
		try {
		    flag1 = processFilmData();
		    flag2 = processChemistryData();
		} 
		catch(IOException re){
			LOG.error("Error in BHGEWaygateDataLoadJob --- perform method, while calling method");
		}
		if (flag1 == false || flag2 == false) {
			if(flag1 == false) {
			LOG.error("Error in Film Data");
			}
			if(flag2 == false) {
			LOG.error("Error in Chemistry Data");
			}
			return new PerformResult(CronJobResult.ERROR, CronJobStatus.FINISHED);
			}
			LOG.info("BHGEWaygateDataLoadJob : Data loaded successfully");
			return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
			} 
		catch(RuntimeException re)
		{
			LOG.error("Error in BHGEWaygateDataLoadJob Method level");
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
		}
	   
	   
	}
	

	public boolean processFilmData() throws IOException {
		boolean FilmDataValidation = true;
		XSSFWorkbook wb = null;
		InputStream input = new URL(configurationService.getConfiguration().getString(FILM_DATA_XLSX_FILE_PATH)).openStream();
		int columnNumber = 0;
		int rowNumber = 0;
		String currentLoop = "";
		try {
			LOG.info("Inside Film Data process method");
			ArrayList<FilmData> data = new ArrayList<FilmData>();
			wb = new XSSFWorkbook(input);
			XSSFSheet sheet = wb.getSheetAt(0);

			for (int i = 1; i < sheet.getPhysicalNumberOfRows(); i++) {
				FilmData filmData = new FilmData();
				final Row row = sheet.getRow(i);
				if(row != null) { 
				for (int j = 0; j <= row.getPhysicalNumberOfCells(); j++) {
				
					final Cell cells = row.getCell(j);
					if (j == 0) {
						currentLoop = "TypePk";
						filmData.setTypePk(String.valueOf(cells));
					} else if (j == 1) {
						currentLoop = "Batch";
						filmData.setBatch(String.valueOf(cells));
					} else if (j == 2) {
						currentLoop = "EmNr";
						filmData.setEmNr(String.valueOf(cells));
					} else if (j == 3) {
						currentLoop = "Rol";
						filmData.setRol(String.valueOf(cells));
					} else if (j == 4) {
						currentLoop = "Sper";
						filmData.setSper(String.valueOf(cells));
					} else if (j == 5) {
						currentLoop = "Cper";
						filmData.setCper(String.valueOf(cells));
					} else if (j == 6) {
						currentLoop = "Control";
						String control = String.valueOf(cells);
						SimpleDateFormat sdf=new SimpleDateFormat("dd-MMM-yyyy");
						if(StringUtils.isNotEmpty(control)) {
						Date date=sdf.parse(control);
						sdf=new SimpleDateFormat("MM/dd/yyyy");
						filmData.setControl(sdf.format(date));
						}
					} else if (j == 7) {
						currentLoop = "Expiry";
						String expiry = String.valueOf(cells);
						SimpleDateFormat sdf1=new SimpleDateFormat("dd-MMM-yyyy");
						if(StringUtils.isNotEmpty(expiry))
						{
						Date date1=sdf1.parse(expiry);
						sdf1=new SimpleDateFormat("MM/dd/yyyy");
						filmData.setExpiry(sdf1.format(date1));
						}
					}
					columnNumber++;

				}
				data.add(filmData);
				}
				rowNumber++;
			}
			LOG.info("FilmData from sheet as been attached in data object");
			FilmDataValidation = waygateDataLoaderService.validateFilmData(data);
			waygateDataLoaderService.processFilmData(data);
			LOG.info("Film Data received from excel sheet has been updated fully in hybris");
			for (int i = 0; i < data.size(); i++) {
				LOG.info("Type pk - " + data.get(i).getTypePk());
				LOG.info("Batch Num - " + data.get(i).getBatch());
				LOG.info("Em nr - " + data.get(i).getEmNr());
				LOG.info("Rol - " + data.get(i).getRol());
				LOG.info("S% - " + data.get(i).getSper());
				LOG.info("C% - " + data.get(i).getCper());
				LOG.info("Control - " + data.get(i).getControl());
				LOG.info("Expiry - " + data.get(i).getExpiry());
				LOG.info("------------------------------------");
			}
			LOG.info("Size" + data.size());

		}

		catch (Exception e) {
			LOG.info("Exception caused in Film Data upload, due to some error on row number: "+ rowNumber +" and column number as "+ columnNumber +" in "+ currentLoop +" loop , exception: " + e.getMessage());
			e.printStackTrace();
		} finally {
			if (wb != null) {
				try
				{
					wb.close();
				}
				catch (final IOException e)
				{
					LOG.error("IOException occured in FilmData in WaygateDataLoadJob" + e);
				}
			}

		}
		return FilmDataValidation;
	}

	
	  
	public ConfigurationService getConfigurationService() {
		return configurationService;
	}


	public void setConfigurationService(ConfigurationService configurationService) {
		this.configurationService = configurationService;
	}


	public boolean processChemistryData()  throws IOException
	  {
		XSSFWorkbook wb = null;
		boolean ChemistryDataValidation = true;
		InputStream input = new URL(configurationService.getConfiguration().getString(CHEMISTRY_DATA_XLSX_FILE_PATH)).openStream();
		int columnNumber = 0;
		int rowNumber = 0;
		String currentLoop = "";
		try {
			LOG.info("Inside Film Data process method");
			ArrayList<ChemistryData> data1 = new ArrayList<ChemistryData>();
			wb = new XSSFWorkbook(input);
			XSSFSheet sheet = wb.getSheetAt(0);
			String prefix = null;

			for (int i = 1; i < sheet.getPhysicalNumberOfRows(); i++) {
				ChemistryData chemistryData = new ChemistryData();
				final Row row = sheet.getRow(i);
				if(row != null) {
				for (int j = 1; j < row.getPhysicalNumberOfCells(); j++) {
					final Cell cells = row.getCell(j);

					 if (j == 1) {
						 currentLoop = "Artoms";
						 chemistryData.setArtoms(String.valueOf(cells));
					} 
				    else if (j == 2) {
						currentLoop = "Prefix";
				       prefix = String.valueOf(cells);
					} 
					 else if (j == 3) {
						currentLoop = "FabricationNumber";
						chemistryData.setFabricationNumber( prefix + "-"+ String.valueOf(cells));
					} else if (j == 4) {
						currentLoop = "Part";
						chemistryData.setPart(String.valueOf(cells));
					} else if (j == 5) {
						currentLoop = "MabcCode";
						chemistryData.setMabcCode(String.valueOf(cells));
					} else if (j == 6) {
						currentLoop = "Expiry";
						String chemicalexpiry = String.valueOf(cells);
						SimpleDateFormat sdf2=new SimpleDateFormat("dd-MMM-yyyy");
						if(StringUtils.isNotEmpty(chemicalexpiry))
						{
						Date date2=sdf2.parse(chemicalexpiry);
						sdf2=new SimpleDateFormat("MM/dd/yyyy");
						chemistryData.setExpiry(sdf2.format(date2));
						}
					} else if (j == 7) {
						currentLoop = "Type";
						chemistryData.setType(String.valueOf(cells));
					} else if (j == 8) {
						currentLoop = "ShippingContact";
						chemistryData.setShippingContent(String.valueOf(cells));
					}
					columnNumber++;
				}
				data1.add(chemistryData);
				}
				rowNumber++;
			}
			LOG.info("ChemistryData from sheet as been attached in data object");
			ChemistryDataValidation = waygateDataLoaderService.validateChemistryData(data1);
			waygateDataLoaderService.processChemistryData(data1);
			LOG.info("Chemistry Data received from excel sheet has been updated fully in hybris");
			for (int i = 0; i < data1.size(); i++) {
				LOG.info("Artoms  - " + data1.get(i).getArtoms());
				LOG.info("Fabrication Num  - " + data1.get(i).getFabricationNumber());
				LOG.info("part nr - " + data1.get(i).getPart());
				LOG.info("Mabc_code - " + data1.get(i).getMabcCode());
				LOG.info("expiry - " + data1.get(i).getExpiry());
				LOG.info("type - " + data1.get(i).getType());
				LOG.info("shipping content - " + data1.get(i).getShippingContent());
				LOG.info("------------------------------------");
			}
			LOG.info("Size" + data1.size());

		}

		catch (Exception e) {
			LOG.info("Exception caused in Chemistry Data upload, due to some error on row number: "+ rowNumber +" and column number as "+ columnNumber +" in "+ currentLoop +" loop , exception: " + e.getMessage());
			e.printStackTrace();
		} finally {
			if (wb != null)
			{
				try
				{
					wb.close();
				}
				catch (final IOException e)
				{
					LOG.error("IOException occured in ChemicalData in WaygateDataLoadJob" + e);
				}
			}

		}
		return ChemistryDataValidation;
	}
	
	
}