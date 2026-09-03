/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.facades.components.impl;

import com.hybris.ge.edge.core.model.type.restrictions.CMSRegionRestrictionModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.cms2.servicelayer.data.RestrictionData;
import de.hybris.platform.cms2.servicelayer.services.evaluator.CMSRestrictionEvaluator;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


public class CMSRegionRestrictionEvaluator implements CMSRestrictionEvaluator<CMSRegionRestrictionModel>
{
	private static final Logger LOG = Logger.getLogger(CMSRegionRestrictionEvaluator.class);

	private UserService userService;

	@Override
	public boolean evaluate(final CMSRegionRestrictionModel cmsRegionRestrictionModel, final RestrictionData context)
	{
		String resRegionId = cmsRegionRestrictionModel.getRegionId();
		if(StringUtils.isNotEmpty(resRegionId))
		{
			if (getUserService().isAnonymousUser(getUserService().getCurrentUser())) {
				if(resRegionId.equalsIgnoreCase("guest")) {
					return true;
				}
			}
			else {
				B2BCustomerModel currentUser = (B2BCustomerModel) userService.getCurrentUser();
				B2BUnitModel b2BUnit = currentUser.getDefaultB2BUnit();
				String regionId = null;
				if (null != b2BUnit) {
					String[] defaultB2BId = null;
					final String defaultUnitId = b2BUnit.getUid();
					if (StringUtils.isNotEmpty((defaultUnitId)) && defaultUnitId.contains("_")) {
						defaultB2BId = defaultUnitId.split("_");
						regionId = defaultB2BId[1];
					}
					if (StringUtils.isNotEmpty(regionId) && resRegionId.equalsIgnoreCase(regionId)) {
						return true;
					}
				}
			}
		}
		return false;
	}



	
	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	/**
	 * @return the userService
	 */
	protected UserService getUserService()
	{
		return userService;
	}

}
