package com.bhge.core.calportal.dao;

import java.util.List;

import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;

public interface CalPortalDao {
	
	public List<BHGERegisterKeyValueDataModel> fetchProductFamilyList(String appName);

}
