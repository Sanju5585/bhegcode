/**
 *
 */
package com.bhge.core.rma.dao.impl;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.model.ProductLineTableModel;
import com.bhge.core.rma.dao.BHGERMAStatusDao;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;


/**
 * @author 1423683
 *
 */
public class DefaultBHGERMAStatusDao implements BHGERMAStatusDao
{
	private static final String GET_PRODUCTHEIRARCHY = "select {pk} from {BHGERegisterKeyValueData} where {attributeType} = 'PRODUCTHEIRARCHY'";
	private static final Logger LOG = Logger.getLogger(DefaultBHGERMAStatusDao.class);

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Override
	public String getProductLineName(final String productHierarchy)
	{
		final ProductLineTableModel productLineData = new ProductLineTableModel();
		String productHierarchyCode = productHierarchy;
		if (null != productHierarchy)
		{
			if (productHierarchy.length() > 5 || productHierarchy.length() == 5)
			{
				productHierarchyCode = productHierarchy.substring(0, 5);
				LOG.info("fetching productHeirarchy after split  " + productHierarchyCode);
			}
		}

		final String queryString = "SELECT {productLineTable:PK} FROM {" + ProductLineTableModel._TYPECODE
				+ " AS productLineTable}  WHERE {productLineTable:productHierarchy}=?productHierarchyCode";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, String> params = new HashMap<String, String>();
		params.put("productHierarchyCode", productHierarchyCode);
		query.addQueryParameters(params);
		final SearchResult<ProductLineTableModel> searchResult = flexibleSearchService.search(query);
		if (searchResult.getResult() != null && !searchResult.getResult().isEmpty())
		{
			return searchResult.getResult().get(0).getProductLine();
		}
		else
		{
			return "";
		}

	}

	@Override
	public List<String> getProductLineId(final String productListName)
	{
		final List<String> productLineIdList = new ArrayList<>();
		final ProductLineTableModel productLineData = new ProductLineTableModel();
		final String queryString = "SELECT {productLineTable:PK} FROM {" + ProductLineTableModel._TYPECODE
				+ " AS productLineTable}  WHERE {productLineTable:productLine}=?productLineName";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, String> params = new HashMap<String, String>();
		params.put("productLineName", productListName);
		query.addQueryParameters(params);
		final SearchResult<ProductLineTableModel> searchResult = flexibleSearchService.search(query);
		if (searchResult.getResult() != null && !searchResult.getResult().isEmpty())
		{
			for (final ProductLineTableModel result : searchResult.getResult())
			{
				final String idResult = result.getProductHierarchy();
				productLineIdList.add(idResult);
			}
			return productLineIdList;
		}
		else
		{
			return null;
		}
	}


	@Override
	public Map<String, String> loadProductLine()
	{
		final Map<String, String> productLineMap = new HashMap<String, String>();
		//LOG.info("Inside loadProductLine Master 01");
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(GET_PRODUCTHEIRARCHY);

		BHGERegisterKeyValueDataModel productHierarchyData = null;
		final SearchResult<BHGERegisterKeyValueDataModel> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null)
		{
			//LOG.info("Inside loadProductLine Master 02 - " + querysearchResult.getCount());
			final List<BHGERegisterKeyValueDataModel> resultsList = querysearchResult.getResult();
			if (resultsList != null && resultsList.iterator().hasNext())
			{
				final Iterator<BHGERegisterKeyValueDataModel> worklistIter = resultsList.iterator();
				while (worklistIter.hasNext())
				{
					productHierarchyData = worklistIter.next();
					//LOG.info("Inside loadProductLine Master 03 - " + productHierarchyData);
					if (productHierarchyData.getParentAttrib() != null
							&& "PRODUCTLINE".equals(productHierarchyData.getParentAttrib().getAttributeType()))
					{
						//LOG.info("Inside loadProductLine Master 04 - " + productHierarchyData.getAttributeKey() + "|" + productHierarchyData.getParentAttrib().getAttributeKey());
						productLineMap.put(productHierarchyData.getAttributeKey(),
								productHierarchyData.getParentAttrib().getAttributeKey());
					}
				}
			}
		}
		//LOG.info("Inside loadProductLine Master 05 - " + productLineMap.size());
		return productLineMap;

	}


	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

}
