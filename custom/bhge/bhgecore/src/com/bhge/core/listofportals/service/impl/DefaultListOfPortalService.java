
package com.bhge.core.listofportals.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import com.bhge.core.listofportals.dao.ListOfPortalDAO;
import com.bhge.core.listofportals.service.ListOfPortalService;
import com.bhge.core.model.List.ListOfPortalsModel;

public class DefaultListOfPortalService implements ListOfPortalService
{
	@Autowired
	private ListOfPortalDAO listOfPortalDAO;
	
	@Override
	public List<ListOfPortalsModel> getLists() 
	{
		return listOfPortalDAO.findLinks();
		
	}
	
	
	public void setListOfPortalsDAO( final ListOfPortalDAO listOfPortalDAO)
	{
		this.listOfPortalDAO = listOfPortalDAO;
	}

}