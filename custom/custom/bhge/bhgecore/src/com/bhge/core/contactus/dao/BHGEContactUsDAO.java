/**
 *
 */
package com.bhge.core.contactus.dao;

import java.util.List;
import java.util.Set;

import com.bhge.core.data.ContactUsData;
import com.bhge.core.model.BHGEAreaOfInterestModel;
import com.bhge.core.model.BHGEContactUsJobRoleModel;


public interface BHGEContactUsDAO
{
	List<BHGEContactUsJobRoleModel> getContactUsJobRoles();

	List<BHGEAreaOfInterestModel> getAreaOfInterest();

	void saveContactUsData(ContactUsData contactUsData);

	String getEndPointForMarketoService(final String key);

}
