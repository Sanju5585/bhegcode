/**
 *
 */
package com.bhge.facades.contactus.impl;

import java.net.UnknownHostException;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import com.bhge.core.data.ContactUsData;
import com.bhge.core.model.BHGEAreaOfInterestModel;
import com.bhge.core.model.BHGEContactUsJobRoleModel;
import com.bhge.facades.contactus.BHGEContactUsFacade;
import com.bhge.integration.marketo.service.BHGEContactUsService;


/**
 * @author 1551247
 *
 */
public class DefaultBHGEContactUsFacadeImpl implements BHGEContactUsFacade
{

	@Resource
	private BHGEContactUsService bhgeContactUsService;

	public String postContactUsData(final ContactUsData contactUsData) throws UnknownHostException
	{
		return bhgeContactUsService.postDataToMarketoService(contactUsData);
	}

	public List<BHGEContactUsJobRoleModel> getContactUsJobRoles()
	{
		return bhgeContactUsService.getContactUsJobRoles();
	}

	public List<BHGEAreaOfInterestModel> getAreaOfInterest()
	{
		return bhgeContactUsService.getAreaOfInterest();
	}

}
