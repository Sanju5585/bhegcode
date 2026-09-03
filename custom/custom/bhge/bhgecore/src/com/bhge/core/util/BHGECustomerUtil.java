/**
 *
 */
package com.bhge.core.util;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;


/**
 * @author 212695810
 *
 */
public class BHGECustomerUtil
{
	private static final Logger LOG = Logger.getLogger(BHGECustomerUtil.class);

	/**
	 * @param salesAreaUid
	 * @param user
	 * @return
	 */
	public static boolean isUserAllowedToView(final String salesAreaUid, final UserService userService)
	{
		final UserModel user = userService.getCurrentUser();
		boolean isAllowed = false;

		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel edgeCustomerModel = (GEEdgeCustomerModel) user;
			isAllowed = edgeCustomerModel.getIsInternalUser() != null && edgeCustomerModel.getIsInternalUser()
					? edgeCustomerModel.getIsInternalUser()
					: false;
			if (!isAllowed && CollectionUtils.isNotEmpty(user.getGroups()))
			{
				isAllowed = user.getGroups().stream()
						.filter(
								principalGroupModel -> principalGroupModel.getUid().contains(StringEscapeUtils.escapeHtml4(salesAreaUid)))
						.findAny().isPresent();
			}
		}
		return isAllowed;
	}
}
