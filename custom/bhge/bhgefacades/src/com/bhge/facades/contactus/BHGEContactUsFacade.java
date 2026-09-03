/**
 *
 */
package com.bhge.facades.contactus;

import java.net.UnknownHostException;
import java.util.List;
import java.util.Set;

import com.bhge.core.data.ContactUsData;
import com.bhge.core.model.BHGEAreaOfInterestModel;
import com.bhge.core.model.BHGEContactUsJobRoleModel;

public interface BHGEContactUsFacade
{
	String postContactUsData(final ContactUsData contactUsData) throws UnknownHostException;

	List<BHGEContactUsJobRoleModel> getContactUsJobRoles();

	List<BHGEAreaOfInterestModel> getAreaOfInterest();

}
