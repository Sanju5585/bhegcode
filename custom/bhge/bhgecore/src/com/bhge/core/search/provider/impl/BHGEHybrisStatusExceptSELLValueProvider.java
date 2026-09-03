/**
 *
 */
package com.bhge.core.search.provider.impl;

import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import org.apache.log4j.Logger;

import com.bhge.core.enums.HybrisStatus;


/**
 * @author 212695810 This is a custom provider to populate if a product is SELL or not
 *
 */
public class BHGEHybrisStatusExceptSELLValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{


	private final static Logger LOG = Logger.getLogger(BHGEHybrisStatusExceptSELLValueProvider.class);
	private final static String NOT_SELL_VALUE = "NOTSELL";

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * de.hybris.platform.solrfacetsearch.provider.FieldValueProvider#getFieldValues(de.hybris.platform.solrfacetsearch.
	 * config.IndexConfig, de.hybris.platform.solrfacetsearch.config.IndexedProperty, java.lang.Object)
	 */
	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		LOG.info("Start: BHGEHybrisStatusExceptSELLValueProvider getFieldValues method()");
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		GEEdgeProductModel geEdgeProductModel = null;
		if (model instanceof GEEdgeProductModel)
		{
			geEdgeProductModel = (GEEdgeProductModel) model;
			final HashSet<String> listOfSELLwithSalesAreas = new HashSet<String>();
			for (final BHGESalesAreaDataModel salesArea : geEdgeProductModel.getSalesAreaData())
			{
				final HybrisStatus hybrisStatus = salesArea.getHybrisStatus();
				if (null != hybrisStatus)
				{
					if (LOG.isDebugEnabled())
					{
						LOG.debug("Sales area is " + salesArea.getSalesOrganization() + "hybris status is " + hybrisStatus.getCode());
					}
					if (hybrisStatus == HybrisStatus.SELL)
					{
						listOfSELLwithSalesAreas.add(salesArea.getSalesOrganization() + "_" + hybrisStatus.getCode());
					}
					else
					{
						listOfSELLwithSalesAreas.add(salesArea.getSalesOrganization() + "_" + NOT_SELL_VALUE);
					}
				}
			}
			fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", listOfSELLwithSalesAreas));
		}
		LOG.info("End: BHGEHybrisStatusExceptSELLValueProvider getFieldValues method()");
		return fieldValues;
	}
}
