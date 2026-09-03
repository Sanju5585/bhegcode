package com.bhge.core.search.solrfacetsearch.provider.impl;

import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;

/**
 * @author riyan
 *
 */

import java.util.ArrayList;
import java.util.Collection;

import org.apache.log4j.Logger;

import com.hybris.ge.edge.core.model.type.GEEdgeLegacyIDModel;


public class BHGELegacyIDValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider

{

	private final static Logger LOG = Logger.getLogger(BHGELegacyIDValueProvider.class);

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.solrfacetsearch.provider.FieldValueProvider#getFieldValues
	 * (de.hybris.platform.solrfacetsearch .config.IndexConfig,
	 * de.hybris.platform.solrfacetsearch.config.IndexedProperty, java.lang.Object)
	 */
	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		// Y Auto-generated method stub

		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();
		GEEdgeProductModel geEdgeProductModel = null;
		if (model instanceof GEEdgeProductModel)
		{
			geEdgeProductModel = (GEEdgeProductModel) model;
			final Collection<GEEdgeLegacyIDModel> legacyIDList = geEdgeProductModel.getLegacyIDList();
			if (null == legacyIDList)
			{

				fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_text", ""));

			}
			else
			{
				//Coverity: Fix[SBSC: String concatenation in loop using + operator]
				StringBuffer legacyIDString = new StringBuffer();
				for (final GEEdgeLegacyIDModel legacyID : legacyIDList)
				{
					legacyIDString.append("_").append(legacyID.getCode()).append("_");
				}
				fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_text", legacyIDString.toString()));
			}
		}
		return fieldValues;
	}

}
