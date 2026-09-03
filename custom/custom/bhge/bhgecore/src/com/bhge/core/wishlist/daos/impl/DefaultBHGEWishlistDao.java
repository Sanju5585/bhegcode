/**
 * 
 */
package com.bhge.core.wishlist.daos.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.flexiblesearch.PagedFlexibleSearchService;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.GenericSearchConstants.LOG;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.SearchResult;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;
import de.hybris.platform.wishlist2.model.Wishlist2Model;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.wishlist.daos.BHGEWishlistDao;

/**
 * @author 212722447
 *
 */

public class DefaultBHGEWishlistDao implements BHGEWishlistDao
{
	
	@Resource
	private PagedFlexibleSearchService pagedFlexibleSearchService;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;
	
	public List<Wishlist2Model> findDefaultWishlist(UserModel user, final PageableData pageableData) 
	{
		FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {pk} FROM {Wishlist2} WHERE {user} = ?user AND {default} = ?trueValue");
      fQuery.addQueryParameter("user", user);
      fQuery.addQueryParameter("trueValue", Boolean.TRUE);
      final SearchPageData<Wishlist2Model> searchPageData = pagedFlexibleSearchService.search(fQuery, pageableData);
      return searchPageData.getResults();
	}
	
	
	//public List<Wishlist2EntryModel> findWishlistEntrybyWishList(final Wishlist2Model wishlist, final PageableData pageableData) 
	public SearchPageData<Wishlist2EntryModel> findWishlistEntrybyWishList(final Wishlist2Model wishlist, final PageableData pageableData) 
	{
		FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {pk} FROM {Wishlist2Entry} WHERE {wishlist} = ?wishlist ORDER BY {addeddate} desc") ;
      fQuery.addQueryParameter("wishlist", wishlist.getPk());
      final SearchPageData<Wishlist2EntryModel> searchPageData = pagedFlexibleSearchService.search(fQuery, pageableData);
      //return searchPageData.getResults();
      return searchPageData;
	}
	
	//public List<Wishlist2EntryModel> findWishlistEntrybyWishListandProduct(final Wishlist2Model wishlist, final String text, final PageableData pageableData) 
	public SearchPageData<Wishlist2EntryModel> findWishlistEntrybyWishListandProduct(final Wishlist2Model wishlist, final String text, final PageableData pageableData) 
	{
		/*FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {pk} FROM {Wishlist2Entry AS WL JOIN GEEdgeProduct AS GP ON {WL.product}={GP.pk} JOIN CatalogVersion AS CV ON {GP.catalogVersion} = {CV.pk} "
				+ "JOIN Catalog AS C ON {C.pk} = {CV.catalog}} WHERE lower({GP.code}) LIKE lower(?text) AND {wishlist} = ?wishlist AND {CV.VERSION}='Online' AND {C.ID}='bhgeGlobalProductCatalog'");*/
	  FlexibleSearchQuery fQuery = new FlexibleSearchQuery("SELECT {pk} FROM {Wishlist2Entry AS WL JOIN GEEdgeProduct AS GP ON {WL.product}={GP.pk} JOIN CatalogVersion AS "
	  		+ "CV ON {GP.catalogVersion} = {CV.pk} JOIN Catalog AS C ON {C.pk} = {CV.catalog}} WHERE (lower({GP.code}) LIKE lower(?text) OR lower({GP.name}) LIKE lower(?text))  AND  {wishlist} = ?wishlist AND {CV.VERSION}='Online' AND {C.ID}='bhgeGlobalProductCatalog'");
      fQuery.addQueryParameter("wishlist", wishlist.getPk());
      fQuery.addQueryParameter("text", "%" + text + "%");
      final SearchPageData<Wishlist2EntryModel> searchPageData = pagedFlexibleSearchService.search(fQuery, pageableData);
      //return searchPageData.getResults();
      return searchPageData;
	}
	
	public Wishlist2EntryModel findWishlistEntrybyWishListandProduct(final Wishlist2Model wishlist, final String productCode) 
	{
		final Map<String, Object> params = new HashMap<String, Object>();
		Wishlist2EntryModel Wishlist2Entry = null;
		final String queryString = "SELECT {pk} FROM {Wishlist2Entry AS WL JOIN GEEdgeProduct AS GP ON {WL.product}={GP.pk} JOIN CatalogVersion AS CV ON {GP.catalogVersion} = {CV.pk} "
				+ "JOIN Catalog AS C ON {C.pk} = {CV.catalog}} WHERE lower({GP.code}) = lower(?productCode) AND {wishlist} = ?wishlist AND {CV.VERSION}='Online' AND {C.ID}='bhgeGlobalProductCatalog'";
		params.put("wishlist", wishlist.getPk());
		params.put("productCode", productCode);
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		query.addQueryParameters(params);
		if (CollectionUtils.isNotEmpty(flexibleSearchService.search(query).getResult()))
		{
			Wishlist2Entry = (Wishlist2EntryModel) flexibleSearchService.search(query).getResult().get(0); 
		}
		else
		{
			throw new UnknownIdentifierException(
					(new StringBuilder("Cannot find Wishlist with productCode'")).append(productCode).append("'").toString());
		}
		return Wishlist2Entry;
	}

}
