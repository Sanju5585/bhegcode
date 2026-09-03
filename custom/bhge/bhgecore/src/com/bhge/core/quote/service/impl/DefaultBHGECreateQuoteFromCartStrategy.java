package com.bhge.core.quote.service.impl;

import de.hybris.platform.order.strategies.impl.DefaultCreateQuoteFromCartStrategy;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;

import jakarta.annotation.Resource;

public class DefaultBHGECreateQuoteFromCartStrategy extends DefaultCreateQuoteFromCartStrategy {

    @Resource(name = "ownQuoteCodeGenerator")
    private KeyGenerator keyGenerator;

    @Override
    protected String generateCode() {
        final Object generatedValue = keyGenerator.generate();
        if (generatedValue instanceof String)
        {
            return (String) generatedValue;
        }
        else
        {
            return String.valueOf(generatedValue);
        }
    }
}
