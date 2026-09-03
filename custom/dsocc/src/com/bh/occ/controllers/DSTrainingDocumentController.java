package com.bh.occ.controllers;

import com.bhge.facades.data.TrainingDocumentData;
import com.bhge.facades.trainingdocument.DSTrainingDocumentFacade;
import com.ds.dsocc.trainingdocument.data.DsTrainingDocumentWsDTO;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.SocketTimeoutException;
import java.util.ArrayList;
import java.util.List;

@Controller
@ApiVersion("v2")
@Tag(name = "DS TrainingDocument")
@RequestMapping(value = "/{baseSiteId}")
public class DSTrainingDocumentController extends DSBaseController{
	@Resource(name = "dsTrainingDocumentFacade")
	private DSTrainingDocumentFacade dsTrainingDocumentFacade;
	private static final Logger LOG = Logger.getLogger(DSMySiteEquipmentController.class);
	protected static final String DEFAULT_FIELD_SET = FieldSetLevelHelper.DEFAULT_LEVEL;
	
	@Operation(operationId = "trainingdocument", summary = "get the medias in the training document", description = "Fetches the medias from the training document")
	@RequestMapping(value = "/trainingDocument", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	public List<DsTrainingDocumentWsDTO> getTrainingDocuments(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		List<DsTrainingDocumentWsDTO> returnListDTOs = new ArrayList<DsTrainingDocumentWsDTO>();
		List<TrainingDocumentData> dSTrainingDocumentList = dsTrainingDocumentFacade.getTrainingDocument();
		for(TrainingDocumentData outputData : dSTrainingDocumentList)
		{
			DsTrainingDocumentWsDTO outputDataDTO = getDataMapper().map(outputData, DsTrainingDocumentWsDTO.class,  "FULL");
		
			 LOG.info("/TrainingResponseData object " +outputData.getName());
			 LOG.info("/TrainingResponseData object " +outputData.getMediaslink());
			 LOG.info("/TrainingResponseData object " +outputData.getYoutubeURL());
			 LOG.info("/TrainingResponseData object " +outputData.getFileType());
			 LOG.info("/TrainingResponseData object " +outputData.getModifiedTime());
			 LOG.info("/TrainingResponseDto object " +outputDataDTO.getName());
			 LOG.info("/TrainingResponseDto object " +outputDataDTO.getMediaslink());
			 LOG.info("/TrainingResponseDto object " +outputDataDTO.getYoutubeURL());
			 LOG.info("/TrainingResponseDto object " +outputDataDTO.getFileType());
			 LOG.info("/TrainingResponseDto object " +outputDataDTO.getModifiedTime());
			 
			returnListDTOs.add(outputDataDTO);
		}
		return returnListDTOs;
	}
	
	
	
	@RequestMapping(value = "/downloadpdf", method = RequestMethod.GET,produces = MediaType.APPLICATION_PDF_VALUE)

	@ResponseBody
	@ResponseStatus(value = HttpStatus.OK)
	@ApiBaseSiteIdAndUserIdParam
	@Operation(operationId = "Download document", summary = "Download document", description = "Download document")
	public  void downloadPoDocument(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			  @RequestParam(value = "name", required = true) final String name,
			  final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		     TrainingDocumentData dSTrainingDocumentdata = dsTrainingDocumentFacade.getTrainingDownloadDocument(StringEscapeUtils.escapeHtml4(name));
		    
		        BufferedInputStream inStrem = null ;
		        BufferedOutputStream outStream = null;
			if (dSTrainingDocumentdata.getFileType() == "PDF") {
				System.out.println("opening connection");
				response.setContentType("application/pdf");
		        response.setHeader("Content-Disposition", "attachment;filename="  +name+ ".pdf");
		        try {
		        	String path = StringEscapeUtils.escapeHtml4(request.getRequestURL().toString()).substring(0, request.getRequestURL().toString().indexOf("/occ"));
		        	java.net.URL url = new java.net.URL(path+dSTrainingDocumentdata.getMediaslink());
		        	LOG.info("the value of url is"+ url);
		        	InputStream inputStream = url.openStream(); 
		        	  inStrem = new BufferedInputStream(inputStream); 
		        	  outStream = new BufferedOutputStream(response.getOutputStream());

	            byte[] buffer = new byte[1024];
	            int bytesRead = 0;
	            while ((bytesRead = inStrem.read(buffer)) != -1) {
	            	outStream.write(buffer, 0, bytesRead);
	            	
	            }
	        } catch(SocketTimeoutException socketException) {
	            LOG.error(socketException);

	        }
	        catch (IOException ioException) {
	            LOG.error(ioException,ioException);

	        } catch (Exception exception) {
	            LOG.error(exception,exception);
	        }
		        
	        
		
		        finally {
		            try {
		            	inStrem.close();
		            	outStream.close();
		            } catch (IOException e) {
		                e.printStackTrace();
		            } 
		        }}
		        else if (dSTrainingDocumentdata.getFileType() == "VIDEO") {
					System.out.println("opening connection");
					response.setContentType("video/mp4");
			        response.setHeader("Content-Disposition", "attachment;filename="  +name+ ".mp4");
			        try {
			        	String path = StringEscapeUtils.escapeHtml4(request.getRequestURL().toString()).substring(0, request.getRequestURL().toString().indexOf("/occ"));
			        	java.net.URL url = new java.net.URL(path+dSTrainingDocumentdata.getMediaslink());
			        	LOG.info("the value of url is"+ url);
			        	InputStream inputStream = url.openStream(); 
			        	  inStrem = new BufferedInputStream(inputStream); 
			        	  outStream = new BufferedOutputStream(response.getOutputStream());

		            byte[] buffer = new byte[1024];
		            int bytesRead = 0;
		            while ((bytesRead = inStrem.read(buffer)) != -1) {
		            	outStream.write(buffer, 0, bytesRead);
		            	
		            }
		        } catch(SocketTimeoutException socketException) {
		            LOG.error(socketException);

		        }
		        catch (IOException ioException) {
		            LOG.error(ioException,ioException);

		        } catch (Exception exception) {
		            LOG.error(exception,exception);
		        }
			        
			        
			        finally {
			            try {
			            	inStrem.close();
			            	outStream.close();
			            } catch (IOException e) {
			                e.printStackTrace();
			            }
				
		}}
			
	}}
			
		