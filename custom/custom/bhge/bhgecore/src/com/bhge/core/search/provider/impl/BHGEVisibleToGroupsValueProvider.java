package com.bhge.core.search.provider.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.solrfacetsearch.config.IndexConfig;
import de.hybris.platform.solrfacetsearch.config.IndexedProperty;
import de.hybris.platform.solrfacetsearch.config.exceptions.FieldValueProviderException;
import de.hybris.platform.solrfacetsearch.provider.FieldValue;
import de.hybris.platform.solrfacetsearch.provider.FieldValueProvider;
import de.hybris.platform.solrfacetsearch.provider.impl.AbstractPropertyFieldValueProvider;
import de.hybris.platform.util.Config;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import org.apache.log4j.Logger;


public class BHGEVisibleToGroupsValueProvider extends AbstractPropertyFieldValueProvider implements FieldValueProvider
{

	private final static Logger LOG = Logger.getLogger(BHGEVisibleToGroupsValueProvider.class);

	@Override
	public Collection<FieldValue> getFieldValues(final IndexConfig indexConfig, final IndexedProperty indexedProperty,
			final Object model) throws FieldValueProviderException
	{
		final Collection<FieldValue> fieldValues = new ArrayList<FieldValue>();

		GEEdgeProductModel productModel = null;
		if (model instanceof GEEdgeProductModel)
		{
			productModel = (GEEdgeProductModel) model;
			final HashSet<String> listOfGroups = new HashSet<String>();
			for (final PrincipalModel allowedPrincipal : productModel.getAllowedProdPrincipals())
			{
				if (allowedPrincipal instanceof B2BUnitModel)
				{
					if (!allowedPrincipal.getUid().equalsIgnoreCase(Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO")))
					{
						listOfGroups.add(allowedPrincipal.getUid());
					}
				} // anonymous user
				else if (allowedPrincipal instanceof UserGroupModel || allowedPrincipal instanceof UserModel)
				{
					listOfGroups.add(allowedPrincipal.getUid());
				}
			}
			fieldValues.add(new FieldValue(indexedProperty.getExportId() + "_string_mv", listOfGroups));
		}
		return fieldValues;
	}

}
