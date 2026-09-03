/**
 *
 */
package com.bhge.basecommerce.strategies.impl;

import de.hybris.platform.acceleratorservices.process.strategies.ProcessContextResolutionStrategy;
import de.hybris.platform.acceleratorservices.process.strategies.impl.DefaultProcessContextResolutionStrategy;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.processengine.model.BusinessProcessModel;

import java.util.Optional;
import java.util.Set;


public class DsProcessContextResolutionStrategy extends DefaultProcessContextResolutionStrategy
{
	@Override
	protected Optional<ProcessContextResolutionStrategy<BaseSiteModel>> getStrategy(final BusinessProcessModel businessProcessModel)
	{
		final Class<?> processClass = businessProcessModel.getClass();
		ProcessContextResolutionStrategy<BaseSiteModel> strategy = getProcessStrategyMap().get(processClass);
		if (strategy == null)
		{
			final Class<?> bestClass = findMostSpecificClass(processClass);
			strategy = getProcessStrategyMap().get(bestClass);
		}
		return Optional.of(strategy);
	}

	private Class<?> findMostSpecificClass(final Class<?> processClass)
	{
		Class<?> mostSpecific = null;
		final Set<Class<?>> supportedClasses = getProcessStrategyMap().keySet();
		for (final Class<?> supportedClass : supportedClasses)
		{
			if (!supportedClass.isAssignableFrom(processClass))
			{
				continue;
			}

			if (mostSpecific == null || mostSpecific.isAssignableFrom(supportedClass))
			{
				mostSpecific = supportedClass;
			}
		}
		return mostSpecific;
	}

}
