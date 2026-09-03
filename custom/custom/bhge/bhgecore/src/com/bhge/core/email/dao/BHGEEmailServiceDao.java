/**
 *
 */
package com.bhge.core.email.dao;

import de.hybris.platform.b2b.model.B2BUnitModel;

import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;



/**
 * @author 586667
 *
 */
public interface BHGEEmailServiceDao
{
	public B2BUnitModel fetchSoldTo(String soldToId);

	public BHGERegisterKeyValueDataModel fetchLinkedProductLine(String productHeirarchy, final String inProductLine);

    BHGERegisterKeyValueDataModel getBhgeRegisterKeyValueDataModel(String inProductLine, BHGERegisterKeyValueDataModel productLine);

    public BHGERegisterKeyValueDataModel fetchLinkedRegion(String countryCP);

	public BHGEMnCEcommMatrixModel fetchInquiryMatrixData(String country, String productLine, String type);
}
