package com.bhge.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.commerceservices.i18n.CommerceCommonI18NService;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.UnitModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


public class BHGEMaterialUOMValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider

{
	private final static Logger LOG = Logger.getLogger(BHGEMaterialUOMValueProvider.class);

	@Resource(name = "commerceCommonI18NService")
	private CommerceCommonI18NService commerceCommonI18NService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		GEEdgeProductModel product = null;
		if (model instanceof GEEdgeProductModel)
		{
			product = (GEEdgeProductModel) model;
			final UnitModel unitModel = product.getUnit();
			if (null != unitModel && StringUtils.isNotBlank(unitModel.getName()))
			{
				Collection<LanguageModel> languages = getCommerceCommonI18NService().getAllLanguages();
				if (languages.isEmpty())
				{
					languages = getCommonI18NService().getAllLanguages();
				}

				Locale locale;
				for (final LanguageModel language : languages)
				{
					locale = new Locale(language.getIsocode());
					if (("en".equalsIgnoreCase(language.getIsocode())) || ("de".equalsIgnoreCase(language.getIsocode()))
							|| ("pt".equalsIgnoreCase(language.getIsocode())) || ("zh".equalsIgnoreCase(language.getIsocode())))
					{
						fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_text_" + language.getIsocode(),
								unitModel.getName(locale)));
					}
				}
			}
			else
			{
				LOG.info("product code not have unit or have an issue " + product.getCode() + " &&&&&&& " + product.getName());
			}
		}
		return fieldValues;
	}

	/**
	 * @return the commerceCommonI18NService
	 */
	protected CommerceCommonI18NService getCommerceCommonI18NService()
	{
		return commerceCommonI18NService;
	}

	/**
	 * @param commerceCommonI18NService
	 *           the commerceCommonI18NService to set
	 */
	protected void setCommerceCommonI18NService(final CommerceCommonI18NService commerceCommonI18NService)
	{
		this.commerceCommonI18NService = commerceCommonI18NService;
	}

	/**
	 * @return the commonI18NService
	 */
	protected CommonI18NService getCommonI18NService()
	{
		return commonI18NService;
	}

	/**
	 * @param commonI18NService
	 *           the commonI18NService to set
	 */
	protected void setCommonI18NService(final CommonI18NService commonI18NService)
	{
		this.commonI18NService = commonI18NService;
	}



}
