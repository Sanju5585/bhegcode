package com.bhge.basecommerce.strategies.impl;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.basecommerce.strategies.impl.DefaultBaseStoreSelectorStrategy;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;

import com.bhge.store.services.BHGEBaseStoreService;


public class BHGEEdgeBaseStoreSelectorStrategy extends DefaultBaseStoreSelectorStrategy
{

	public static final String B2BCUSTOMERGROUP = "b2bcustomergroup";

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Override
	public BaseStoreModel getCurrentBaseStore()
	{
		final UserModel currentCustomer = userService.getCurrentUser();
		B2BCustomerModel currentUser = null;
		if (currentCustomer instanceof B2BCustomerModel)
		{
			currentUser = (B2BCustomerModel) currentCustomer;
		}
		if (currentCustomer instanceof BHGERegieterCustomerModel)
		{
			return super.getCurrentBaseStore();
		}
		if (null != currentUser && null != currentUser.getDefaultB2BUnit())
		{
			return getCurrentBaseStore(currentUser);
		}
		else
		{
			return super.getCurrentBaseStore();
		}
	}

	protected BaseStoreModel getCurrentBaseStore(final B2BCustomerModel currentUser)
	{
		String salesRegionId = "";
		String distributionChannel = "";
		String division = "";
		final B2BUnitModel defaultSoldToUnit = currentUser.getDefaultB2BUnit();
		if (null != defaultSoldToUnit)
		{
			final String salesAreaUid = defaultSoldToUnit.getUid();
			if (StringUtils.isNotBlank(salesAreaUid) && StringUtils.isNotEmpty(salesAreaUid))
			{
				final String[] salesAreaIds = salesAreaUid.split("_");
				salesRegionId = salesAreaIds[1];
				distributionChannel = salesAreaIds[2];
				division = salesAreaIds[3];
			}

			final SAPConfigurationModel sapConfiguration = baseStoreService.findSAPConfigurationWithParams(salesRegionId,
					distributionChannel, division);
			if (null != sapConfiguration)
			{
				return baseStoreService.findBaseStoreBySAPConfiguration(sapConfiguration.getPk().toString());
			}
		}
		return null;
	}

	public UserService getUserService()
	{
		return userService;
	}

	public BHGEBaseStoreService getBaseStoreService()
	{
		return baseStoreService;
	}

	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	public void setBaseStoreService(final BHGEBaseStoreService baseStoreService)
	{
		this.baseStoreService = baseStoreService;
	}

}
