package src.com.bhge.core.order.service.impl;

import jakarta.annotation.Resource;

import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.order.strategies.impl.DefaultCreateOrderFromCartStrategy;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;

public class DefaultBHGECreateOrderFromCartStrategy  extends DefaultCreateOrderFromCartStrategy
{
	@Resource(name = "ownOrderCodeGenerator")
	private KeyGenerator keyGenerator;

	@Override
	protected String generateOrderCode(final CartModel cart)
	{
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
