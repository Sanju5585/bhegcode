package com.bhge.core.productconfig.services.tracking.impl;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.sap.productconfig.services.tracking.EventType;
import de.hybris.platform.sap.productconfig.services.tracking.TrackingItem;
import de.hybris.platform.sap.productconfig.services.tracking.impl.TrackingRecorderImpl;

public class BHGEVCTrackingRecorderImpl extends TrackingRecorderImpl {

	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCTrackingRecorderImpl.class);
	
	@Override
	protected TrackingItem recordCartEvent(final AbstractOrderEntryModel entry, final CommerceCartParameter parameters,
			final EventType event) {
		final CartModel cart = parameters.getCart();
		if (StringUtils.isEmpty(cart.getGuid())) {
			LOG.info("inside BHGEVCTrackingRecorderImpl, Setting Guid in cart {}, if guid is blank", cart.getCode());
			cart.setGuid(cart.getCode());
		}
		return super.recordCartEvent(entry, parameters, event);
	}

}
