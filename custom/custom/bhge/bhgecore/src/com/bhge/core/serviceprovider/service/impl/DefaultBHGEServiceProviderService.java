/**
 * 
 */
package com.bhge.core.serviceprovider.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hybris.ge.edge.core.model.type.GEEdgeServiceProviderModel;
import com.bhge.core.serviceprovider.dao.BHGEServiceProviderDAO;
import com.bhge.core.serviceprovider.service.BHGEServiceProviderService;

public class DefaultBHGEServiceProviderService implements
		BHGEServiceProviderService {

	BHGEServiceProviderDAO bhgeServiceProvideDAO;

	public BHGEServiceProviderDAO getBhgeServiceProvideDAO() {
		return bhgeServiceProvideDAO;
	}

	public void setBhgeServiceProvideDAO(
			BHGEServiceProviderDAO bhgeServiceProvideDAO) {
		this.bhgeServiceProvideDAO = bhgeServiceProvideDAO;
	}

	public boolean validServiceProvider(String name) {
		//  Auto-generated method stub
		boolean validServiceProvide = false;
		validServiceProvide = bhgeServiceProvideDAO
				.validServiceProvider(name);
		return validServiceProvide;
	}

	public String getSiteURL(String trackingNum, String serviceProvider) {
		//  Auto-generated method stub
		// need to extend the tracking number logic
		return bhgeServiceProvideDAO.getSiteURL(trackingNum, serviceProvider);
	}
	
	public String getCourierNameForCode(String courier) {
		GEEdgeServiceProviderModel serviceProvider = bhgeServiceProvideDAO.getCourierNameForCode(courier);
		if(null != serviceProvider) {
			return serviceProvider.getServiceProviderName();
		}
		return null;
	}

}