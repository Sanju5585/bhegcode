package com.bhge.facades.rendering.service.impl;

import com.bhge.facades.rendering.service.BHGEPageRenderingService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.cms2.model.pages.AbstractPageModel;
import de.hybris.platform.cms2.servicelayer.data.RestrictionData;
import de.hybris.platform.cmsfacades.data.AbstractPageData;
import de.hybris.platform.cmsfacades.rendering.impl.DefaultPageRenderingService;

public class DefaultBHGEPageRenderingService extends DefaultPageRenderingService implements BHGEPageRenderingService
{

	private static final Logger LOG = LoggerFactory.getLogger(DefaultPageRenderingService.class);

	@Override
	public AbstractPageData getPageRenderingData(final String pageTypeCode, final String pageLabelOrId, final String code)
			throws CMSItemNotFoundException
	{
		validateParameters(pageTypeCode, pageLabelOrId, code);

		LOG.info("Start DefaultBHGEPageRenderingService ");
		final String pageQualifier = getPageQualifier(pageLabelOrId, code);
		LOG.info(" DefaultBHGEPageRenderingServicePageQualifier " + pageQualifier);
		final RestrictionData restrictionData = getRestrictionData(pageTypeCode, code);
		LOG.info(" DefaultBHGEPageRenderingServicerestrictionData " + restrictionData);
		final AbstractPageModel pageModel = getPageModel(pageTypeCode, pageQualifier);
		LOG.info(" DefaultBHGEPageRenderingServicePageModel " + pageModel);
		LOG.info(" DefaultBHGEPageRenderingServicePageModelCatalog " + pageModel.getCatalogVersion());
		return getPageData(pageModel, restrictionData);
	}
	
}
