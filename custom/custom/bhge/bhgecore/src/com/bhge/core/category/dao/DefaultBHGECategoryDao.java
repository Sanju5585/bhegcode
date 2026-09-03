package com.bhge.core.category.dao;

import de.hybris.platform.category.daos.impl.DefaultCategoryDao;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

public class DefaultBHGECategoryDao extends DefaultCategoryDao {

    public Collection<CategoryModel> findCategoriesByName(final String name)
    {
        final StringBuilder query = new StringBuilder("SELECT {cat." + CategoryModel.PK + "} ");
        query.append("FROM {" + CategoryModel._TYPECODE + " AS cat} ");
        query.append("WHERE {cat." + CategoryModel.NAME + "} = ?" + CategoryModel.NAME);

        final Map<String, Object> params = (Map) Collections.singletonMap(CategoryModel.NAME, name);

        final SearchResult<CategoryModel> searchRes = search(query.toString(), params);
        return searchRes.getResult();
    }
}
