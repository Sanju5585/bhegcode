package com.bhge.core.listofportals.dao;

import java.util.List;

import com.bhge.core.model.List.ListOfPortalsModel;

public interface ListOfPortalDAO 
{
	List<ListOfPortalsModel> findLinks();

}