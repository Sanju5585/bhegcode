/**
 *  By extending DefaultSiteConfigService, we are customizing getProperty() method.
 *  Added null check to avoid null pointer exception.
 */
package com.bhge.core.service.config;

import de.hybris.platform.acceleratorservices.config.impl.DefaultSiteConfigService;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.enums.UiExperienceLevel;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.commons.configuration2.Configuration;



public class BHGEDefaultSiteConfigService extends DefaultSiteConfigService
{
	private static final Logger LOG = Logger.getLogger(BHGEDefaultSiteConfigService.class);

	/*
	 * (non-Javadoc)
	 *
	 * @Added null check to avoid null pointer exception in getProperty() method.
	 *
	 * @Fix for Base site should not be null
	 *
	 * @see de.hybris.platform.acceleratorservices.config.impl.DefaultSiteConfigService#getProperty(java.lang.String)
	 */
	@Override
	public String getProperty(final String property)
	{
		final BaseSiteModel currentBaseSite = getBaseSiteService().getCurrentBaseSite();
		if (null != currentBaseSite)
		{
			final Configuration configuration = getConfigurationService().getConfiguration();
			final String currentBaseSiteUid = "." + currentBaseSite.getUid();
			final UiExperienceLevel uiExperienceLevel = getUiExperienceService().getUiExperienceLevel();
			final String uiExpLevel = uiExperienceLevel != null ? "." + uiExperienceLevel.getCode() : StringUtils.EMPTY;
			// Try the site UID and UiExperience
			// Try the site UID on its own
			// Try the UiExperience on its own
			// Fallback to the property key only
			return configuration.getString(property + currentBaseSiteUid + uiExpLevel,
					configuration.getString(property + currentBaseSiteUid,
							configuration.getString(property + uiExpLevel, configuration.getString(property, null))));
		}
		LOG.info("BaseSite should not be null And Currentbasesite is null");
		return "BaseSite should not be null";
	}

}
