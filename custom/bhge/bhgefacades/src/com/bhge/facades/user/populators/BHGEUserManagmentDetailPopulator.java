package com.bhge.facades.user.populators;

import com.bhge.facades.user.data.BHGECustomerData;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2bacceleratorfacades.user.populators.B2BCustomerPopulator;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class BHGEUserManagmentDetailPopulator extends B2BCustomerPopulator
{

	private static final Logger LOGGER = Logger.getLogger(BHGEUserManagmentDetailPopulator.class);

	@Autowired
	private UserService userService;

	@Override
	public void populate(final CustomerModel source, final CustomerData target) throws ConversionException
	{
		if (target instanceof BHGECustomerData)
		{
			final BHGECustomerData bhgeCustomerData = (BHGECustomerData) target;

			if (source instanceof B2BCustomerModel)
			{

				final GEEdgeCustomerModel customer = source instanceof GEEdgeCustomerModel ? (GEEdgeCustomerModel) source : null;
				if (null != customer) {
					bhgeCustomerData.setEmail(customer.getEmail());
					bhgeCustomerData.setName(customer.getName());
					bhgeCustomerData.setFirstName(customer.getFirstName());
					bhgeCustomerData.setLastName(customer.getLastName());
					bhgeCustomerData.setUid(customer.getUid());
					bhgeCustomerData.setLastLogin(getLastLoginForUser(customer));
					bhgeCustomerData.setLoginDisabled(customer.isLoginDisabled());
					bhgeCustomerData.setDsRoles(getAccessRoles(customer));
					bhgeCustomerData.setIsInternalUser(customer.getIsInternalUser());
					bhgeCustomerData.setEditedBy(customer.getLastEditedUser());
					final Date modifiedTime = customer.getLastEditedTime();
					if (null != modifiedTime) {
						SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy | HH:mm:ss");
						final String date = formatter.format(modifiedTime);
						bhgeCustomerData.setEditedTime(date);
					}
				}
			}
		}

	}

	private String getAccessRoles(CustomerModel customer) {
		String hasAccess = null;
			try
			{
				for (final PrincipalGroupModel eachGroup : customer.getGroups())
				{
					final String eachAccess = eachGroup.getUid();
					switch (eachAccess)
					{
						case "UG_VIEW_STORE":
							hasAccess="UG_VIEW_STORE";
							break;
						case "UG_ADMIN_ORDER_STORE":
							hasAccess="UG_ADMIN_ORDER_STORE";
							break;
					}
				}
			}
			catch (final Exception ex)
			{
				LOGGER.error("Error in getting roles for customer : "+customer.getUid(),ex);
			}
		return hasAccess;
	}

	private String getLastLoginForUser(final GEEdgeCustomerModel customer)
	{
		final String lastLoginFormat = Config.getString("LAST_LOGIN_DATE_FORMAT", "dd-MMM-YYYY hh:mm:ss aa");
		final SimpleDateFormat formatter = new SimpleDateFormat(lastLoginFormat);
		try
		{
			if (null != customer && null != customer.getLastLogin())
			{
				return formatter.format(customer.getLastLogin());
			}
		}
		catch (final Exception e)
		{
			LOGGER.error("Error occured while parsing the Last Login date " + e);
		}
		return "";
	}

}
