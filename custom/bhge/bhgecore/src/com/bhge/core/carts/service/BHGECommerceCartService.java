package com.bhge.core.carts.service;

import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.impl.DefaultCommerceCartService;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;

import jakarta.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BHGECommerceCartService extends DefaultCommerceCartService {
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGEDefaultCommerceAddToCartStrategy.class);

    @Resource(name = "bhgeDefaultCommerceAddToCartStrategy")
    private BHGEDefaultCommerceAddToCartStrategy bhgeDefaultCommerceAddToCartStrategy;
    @Override
    public CommerceCartModification addToCart(final CommerceCartParameter parameter) throws CommerceCartModificationException
    {
    	LOG.debug("Inside addToCart method of BHGECommerceCartService");
        return this.bhgeDefaultCommerceAddToCartStrategy.addToCart(parameter);
    }

}