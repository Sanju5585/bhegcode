/**
 *
 */
package com.bhge.core.europe1.price.impl;

import de.hybris.platform.b2b.services.B2BCustomerService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.europe1.jalo.Europe1PriceFactory;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.order.price.JaloPriceFactoryException;
import de.hybris.platform.jalo.user.User;
import de.hybris.platform.jalo.user.UserGroup;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;

import jakarta.annotation.Resource;


/**
 * @author 212695810
 *
 */
public class BHGEEurope1PriceFactory extends Europe1PriceFactory
{
	@Resource(name = "b2bCustomerService")
	B2BCustomerService b2bCustomerService;

	/*
	 * (non-Javadoc)
	 * 
	 * @see de.hybris.platform.europe1.jalo.Europe1PriceFactory#getEnumFromGroups(de.hybris.platform.jalo.user.User,
	 * java.lang.String)
	 */
	@Override
	protected EnumerationValue getEnumFromGroups(final User user, final String attribute) throws JaloPriceFactoryException
	{
		EnumerationValue enumerationValue = null;
		final HashSet controlSet = new HashSet();
		Object groups = user.getGroups();

		while (enumerationValue == null && !((Collection) groups).isEmpty())
		{
			final HashSet nextGroups = new HashSet();
			final Iterator it = ((Collection) groups).iterator();

			while (it.hasNext())
			{
				final UserGroup userGroup = (UserGroup) it.next();
				controlSet.add(userGroup);
				final Object currentUser = b2bCustomerService.getUserForUID(user.getUid());
				if (currentUser instanceof GEEdgeCustomerModel)
				{
					final GEEdgeCustomerModel geUser = (GEEdgeCustomerModel) currentUser;
					if (userGroup != null && geUser.getDefaultB2BUnit() != null
							&& userGroup.getUid().equalsIgnoreCase(geUser.getDefaultB2BUnit().getUid()))
					{
						final EnumerationValue ugValue = (EnumerationValue) userGroup.getProperty(attribute);
						enumerationValue = ugValue;
						break;
					}
				}
				else
				{
					final EnumerationValue ugValue = (EnumerationValue) userGroup.getProperty(attribute);
					if (ugValue != null)
					{
						if (enumerationValue != null && !ugValue.equals(enumerationValue))
						{
							throw new JaloPriceFactoryException("multiple " + attribute + " values found for user " + user.getUID()
									+ " from its groups " + groups + " : " + enumerationValue.getCode() + " != " + ugValue.getCode(), 0);
						}

						enumerationValue = ugValue;
					}
					else if (enumerationValue == null)
					{
						nextGroups.addAll(userGroup.getGroups());
					}
				}
			}

			if (enumerationValue == null)
			{
				nextGroups.removeAll(controlSet);
				groups = nextGroups;
			}
		}

		return enumerationValue;
	}
}
