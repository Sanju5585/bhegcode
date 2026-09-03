
package com.bh.occ.controllers;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bhge.facades.data.DSListOfPortalsData;
import com.bhge.facades.suggestion.impl.DefaultListOfPortalFacade;
import com.ds.dsocc.data.ListOfPortalWsDTO;

import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;

@Controller
@ApiVersion("v2")
@Tag(name = "DS List of Portals")
@RequestMapping(value="/{baseSiteId}")
public class DSListOfPortalController 
{
	@Resource(name = "dataMapper")
	private DataMapper dataMapper;
	
	public DataMapper getDataMapper() {
		return dataMapper;
	}
	public void setDataMapper(DataMapper dataMapper) {
		this.dataMapper = dataMapper;
	}

	@Resource(name = "defaultListOfPortalFacade")
	private DefaultListOfPortalFacade defaultListOfPortalFacade;
	protected static final String DEFAULT_FIELD_SET = FieldSetLevelHelper.DEFAULT_LEVEL;
	
	@ResponseBody
	@ApiBaseSiteIdParam
	@Operation(operationId = "listofportal", summary = "Get All The List Of Portals.", description = "Search All Links")
	@RequestMapping(value = {"/listOfPortals"}, method = {RequestMethod.GET})
	@ResponseStatus(value = HttpStatus.OK)
	public List<ListOfPortalWsDTO> fetchListOfPortal(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
    {
    
	    List<DSListOfPortalsData> list = defaultListOfPortalFacade.getLinks();
        List<ListOfPortalWsDTO> listOfPortalWsDTO = new ArrayList<ListOfPortalWsDTO>();
        
        
        for (DSListOfPortalsData data : list) 
        {
        	ListOfPortalWsDTO wsdto = getDataMapper().map(data, ListOfPortalWsDTO.class,"BASIC");
        	listOfPortalWsDTO.add(wsdto);
        }
        return listOfPortalWsDTO;
    }
}