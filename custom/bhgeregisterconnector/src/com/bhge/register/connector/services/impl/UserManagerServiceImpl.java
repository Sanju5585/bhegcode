/**
 *
 */
package com.bhge.register.connector.services.impl;

import de.hybris.platform.b2bcommercefacades.company.B2BUserFacade;
import de.hybris.platform.b2bcommercefacades.company.data.B2BSelectionData;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.register.connector.services.UserManagerService;
import com.bhgeregister.dto.BHGEUserManagerRequest;
import com.bhgeregister.dto.BHGEUserManagerResponse;


/**
 * @author 586667
 *
 */
public class UserManagerServiceImpl implements UserManagerService
{

	@Autowired
	protected B2BUserFacade b2bUserFacade;


	private static final Logger LOG = Logger.getLogger(UserManagerServiceImpl.class);


	/**
	 * @return the b2bUserFacade
	 */
	public B2BUserFacade getB2bUserFacade()
	{
		return b2bUserFacade;
	}


	/**
	 * @param b2bUserFacade
	 *           the b2bUserFacade to set
	 */
	public void setB2bUserFacade(final B2BUserFacade b2bUserFacade)
	{
		this.b2bUserFacade = b2bUserFacade;
	}


	@Override
	public BHGEUserManagerResponse revokeAccess(final BHGEUserManagerRequest submitDetails)
	{
		final BHGEUserManagerResponse response = new BHGEUserManagerResponse();

		LOG.info("Inside Revoke Access: Service for User Id: " + submitDetails.getUserId());

		if (null != submitDetails.getUserId())
		{
			getB2bUserFacade().disableCustomer(submitDetails.getUserId());
			response.setStatusDetails("Access Revoked");

		}
		return response;

	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.connector.services.UserManagerService#addToGroup(com.bhgeregister.dto.BHGERegisterRequest)
	 */
	@Override
	public BHGEUserManagerResponse addToGroup(final BHGEUserManagerRequest ssoDetails)
	{
		final BHGEUserManagerResponse response = new BHGEUserManagerResponse();
		LOG.info("Inside Add To Group for userId: " + ssoDetails.getUserId() + " and flag: " + ssoDetails.getFlag());

		if (null != ssoDetails.getUserId() && null != ssoDetails.getFlag())
		{
			final B2BSelectionData outputData = getB2bUserFacade().addB2BUserGroupToCustomer(ssoDetails.getUserId(),
					ssoDetails.getFlag());

			logData(outputData);

			response.setStatusDetails("User added to the group");

		}
		return response;
	}


	/**
	 * @param outputData
	 */
	private void logData(final B2BSelectionData outputData)
	{
		if (null != outputData)
		{
			LOG.info("Id: " + outputData.getId());
			LOG.info("Id: " + outputData.getDisplayRoles());
			LOG.info("Id: " + outputData.getNormalizedCode());
			LOG.info("Id: " + outputData.getRoles());
			LOG.info("Id: " + outputData.getId());

			if (null != outputData.getDisplayRoles() && !outputData.getDisplayRoles().isEmpty())
			{
				for (final String each : outputData.getDisplayRoles())
				{
					LOG.info("Display Roles: " + each);
				}
			}

			if (null != outputData.getRoles() && !outputData.getRoles().isEmpty())
			{
				for (final String each : outputData.getRoles())
				{
					LOG.info("Roles: " + each);
				}
			}

		}

	}



}
