package com.bhge.core.productconfig.services.strategy.impl;

import de.hybris.platform.commerceservices.order.CommerceCartRestoration;
import de.hybris.platform.commerceservices.order.CommerceCartRestorationException;
import de.hybris.platform.commerceservices.order.CommerceCartRestorationStrategy;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.sap.productconfig.services.strategies.impl.ProductConfigurationCartRestorationStrategyImpl;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

public class BHGEProductConfigurationCartRestorationStrategyImpl extends ProductConfigurationCartRestorationStrategyImpl implements CommerceCartRestorationStrategy {

    private static final Logger LOG = Logger.getLogger(BHGEProductConfigurationCartRestorationStrategyImpl.class);

    @Override
    public CommerceCartRestoration restoreCart(final CommerceCartParameter parameters) throws CommerceCartRestorationException
    {
        LOG.info("In custom strategy class for restoring saved cart");
        getCleanUpStrategy().cleanUpCart();
        final CartModel cart = parameters.getCart();
        if(StringUtils.equalsIgnoreCase(cart.getCommerceType().getCode(),"BUY")) {
            LOG.info("Cart type is buy so checking for configurations");
            refreshConfigurations(cart);
        }
        LOG.info("After refreshing configurations, cart type: "+ cart.getCommerceType().getCode());
        final CommerceCartRestoration restoration = getCommerceCartRestorationStrategy().restoreCart(parameters);
        addModificationsForConfigurableProducts(restoration, cart);
        return restoration;
    }
}