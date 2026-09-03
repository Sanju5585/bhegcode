package com.bhge.facades.suggestion.impl;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;


import com.bhge.core.listofportals.service.ListOfPortalService;
import com.bhge.core.model.List.ListOfPortalsModel;
import com.bhge.facades.data.DSListOfPortalsData;
import com.bhge.facades.listofportals.populators.ListOfPortalPopulator;

import de.hybris.platform.servicelayer.dto.converter.Converter;

public class DefaultListOfPortalFacade 
{
	@Autowired
    private ListOfPortalService listOfPortalService;
	
	@Autowired
	private ListOfPortalPopulator listOfPortalPopulator;
	
	private Converter<ListOfPortalsModel, DSListOfPortalsData> listOfPortalConverter;

	public ListOfPortalService getlistOfPortalService()
	{
		return listOfPortalService;
	}

	
	public void setlistOfPortalService(final ListOfPortalService listOfPortalService)
	{
		this.listOfPortalService = listOfPortalService;
	}

	public Converter<ListOfPortalsModel, DSListOfPortalsData> getListOfPortalConverter()
	{
		return listOfPortalConverter;
	}

	
	public void setListOfPortalConverter(final Converter<ListOfPortalsModel, DSListOfPortalsData> listOfPortalConverter)
	{
		this.listOfPortalConverter = listOfPortalConverter;
	}
	
    public List<DSListOfPortalsData> getLinks()
    {
        final List<ListOfPortalsModel> link = listOfPortalService.getLists();

        List<DSListOfPortalsData> dslist = new ArrayList<DSListOfPortalsData>();

        for (ListOfPortalsModel listModel : link)
        {
        	DSListOfPortalsData data = listOfPortalConverter.convert(listModel);
            
            dslist.add(data);
        }
        return dslist;
    }
}