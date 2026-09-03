package com.bhge.facades.search.populator;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commerceservices.search.resultdata.SearchResultValueData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.data.DocumentData;
import de.hybris.platform.commerceservices.search.solrfacetsearch.populators.DocumentSearchResultValuePopulator;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.solrfacetsearch.search.Document;
import de.hybris.platform.solrfacetsearch.search.QueryField;
import de.hybris.platform.solrfacetsearch.search.SearchQuery;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.BHGEBaseStoreService;
import org.apache.log4j.Logger;


public class BHGESolrDocumentSearchResultValuePopulator extends DocumentSearchResultValuePopulator
{
	private static final Logger LOG = Logger.getLogger(BHGESolrDocumentSearchResultValuePopulator.class);
    private static final String AnonymousStatusWithSalesOrgField = "anonymousStatusWithSalesOrg_string_mv";
    private static final String  AnonymousStatusWithSalesOrg = "anonymousStatusWithSalesOrg";

	@Resource(name = "bhgeProductService")
	BHGEProductService bhgeProductService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Override
	public void populate(final DocumentData<SearchQuery, Document> source, final SearchResultValueData target)
	{
		super.populate(source, target);
			String materialID = (String) source.getDocument().getFieldValue("id");
			if (StringUtils.isNotEmpty(materialID))
			{
				final String materialNameArr[] = materialID.split("/");
				materialID = materialNameArr[2];
			}
			final Map<String, Object> map = getValues(source);
			final Map<String, String> priceMap = new HashMap<String, String>();
			String guestSalesArea = null;
			for (final Map.Entry<String, Object> entry : map.entrySet())
			{
				if (entry.getKey().startsWith("price") && entry.getValue() instanceof String)
				{
					priceMap.put(entry.getKey(), (String) entry.getValue());
				}
				if (entry.getKey().startsWith("GUESTUSER") && (userService.isAnonymousUser(userService.getCurrentUser())))
				{
					final ArrayList<String> guestUserArray = (ArrayList) entry.getValue();
					final String guestUserString = guestUserArray.get(0);
					target.getValues().put("GUESTUSER", guestUserString);
				}
				if (entry.getKey().startsWith(AnonymousStatusWithSalesOrgField) && (userService.isAnonymousUser(userService.getCurrentUser())))
				{
					Optional<QueryField> guestQueryField = source.getSearchQuery().getFilterQueries().stream()
						.filter(query -> query.getField().contains(AnonymousStatusWithSalesOrgField)).findFirst();		
					if(guestQueryField.isPresent())
					{
						Optional<String> guestQueryData = guestQueryField.get().getValues().stream().findFirst();
						if(guestQueryData.isPresent())
						{
							String guestQuery = guestQueryData.get().substring(0,guestQueryData.get().lastIndexOf("_"));
							guestSalesArea = guestQuery;
							final ArrayList<String> anonymousSalesOrgArray = (ArrayList) entry.getValue();
							final String anonymousSalesOrgString = anonymousSalesOrgArray.stream().filter(salesOrg -> salesOrg.contains(guestQuery)).findFirst().get();
							target.getValues().put(AnonymousStatusWithSalesOrg, anonymousSalesOrgString);
						}
					}
				}					 
			}
			
			//final Double priceValue = bhgeProductService.getPriceForPriceCriteria(materialID, priceMap);
			final Double priceValue = bhgeProductService.getPriceForPriceCriteriaforWs(materialID, priceMap, guestSalesArea);
			target.getValues().put("priceValue", priceValue);
	}
}
