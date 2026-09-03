/**
 *
 */
package com.bhge.core.order.strategies.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.constants.CommerceServicesConstants;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.commerceservices.strategies.impl.DefaultCartValidationStrategy;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.session.SessionService;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.user.data.BHGESoldToData;


public class BHGECartValidationStrategy extends DefaultCartValidationStrategy
{

	private static final Logger LOG = Logger.getLogger(BHGECartValidationStrategy.class);

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Override
	public List<CommerceCartModification> validateCart(final CommerceCartParameter parameter)
	{
		final CartModel cartModel = parameter.getCart();
		final List<CommerceCartModification> modifications = new ArrayList<CommerceCartModification>();
		final boolean callHooks = getCartValidationHooks() != null && (parameter.isEnableHooks() && getConfigurationService()
				.getConfiguration().getBoolean(CommerceServicesConstants.CARTVALIDATIONHOOK_ENABLED, true));
		if (callHooks)
		{
			this.beforeValidateCart(parameter, modifications);
		}

		// Removed out of the logic since it removing the out of the stock materials

		cleanCart(cartModel);

		if (callHooks)
		{
			try {
				this.afterValidateCart(parameter, modifications);
			}
			catch(Exception e){
				LOG.error("Exception occurred while population cart data for VC product in restore rma cart: " + e.getMessage());
				LOG.error("Printing full stack trace for this issue VC product in restore rma cart: " + e);
			}
		}
		return modifications;
	}


	@Override
	protected void validateDelivery(final CartModel cartModel)
	{
		if (cartModel.getDeliveryAddress() != null)
		{
			//if (!isGuestUserCart(cartModel) && !getUserService().getCurrentUser().equals(cartModel.getDeliveryAddress().getOwner()))
			if (!isGuestUserCart(cartModel))
			{
				if (sessionService.getAttribute("sessionSoldTo") != null)
				{
					final String sessionSoldTo1 = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
					final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
					final String defaultSoldToChild = sessionSoldTo1 + "_" + userSalesRegion;
					final B2BUnitModel soldToChild = userProfileService.findChildB2BUnitModel(defaultSoldToChild);
					if (!soldToChild.getPk().equals(cartModel.getDeliveryAddress().getOwner().getPk()))
					{
						cartModel.setDeliveryAddress(null);
						getModelService().save(cartModel);
					}
				}
				else
				{
					cartModel.setDeliveryAddress(null);
					getModelService().save(cartModel);
				}
			}
		}
	}
}
