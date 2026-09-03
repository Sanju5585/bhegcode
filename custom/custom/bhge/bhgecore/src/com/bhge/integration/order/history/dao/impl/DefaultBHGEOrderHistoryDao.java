/**
 *
 */
package com.bhge.integration.order.history.dao.impl;

import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.bhge.integration.order.history.dao.BHGEOrderHistoryDao;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;


public class DefaultBHGEOrderHistoryDao implements BHGEOrderHistoryDao
{

	private static final String GET_PRODUCTHEIRARCHY = "select {pk} from {BHGERegisterKeyValueData} where {attributeType} = 'PRODUCTHEIRARCHY'";
	private final static Logger LOG = Logger.getLogger(DefaultBHGEOrderHistoryDao.class);
	private FlexibleSearchService flexibleSearchService;

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
						//LOG.info("Inside loadProductLine Master 04 - " + productHierarchyData.getAttributeKey() + "|"+ productHierarchyData.getParentAttrib().getAttributeKey());
						productLineMap.put(productHierarchyData.getAttributeKey(),
								productHierarchyData.getParentAttrib().getAttributeKey());
					}
				}
			}
		}
		for(Map.Entry<String, String> entry : productLineMap.entrySet())
		{
			LOG.info("DefaultBHGEOrderHistoryDao Inside loadProductLine Master 06 - " + entry.getKey() + "|"+ entry.getValue());
		}
		//LOG.info("Inside loadProductLine Master 05 - " + productLineMap.size());
		return productLineMap;

	}

	/**
	 * @return the flexibleSearchService
	 */
	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	/**
	 * @param flexibleSearchService
	 *           the flexibleSearchService to set
	 */
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

}

