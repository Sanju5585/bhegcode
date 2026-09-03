package com.bhge.core.savecart.dao.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.order.dao.impl.DefaultSaveCartDao;
import de.hybris.platform.commerceservices.search.flexiblesearch.data.SortQueryData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.savecart.dao.BHGESavedCartDao;


public class BHGESaveCartDaoImpl extends DefaultSaveCartDao implements BHGESavedCartDao
{


	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	private static final String SAVED_CARTS_TOTAL_FOR_STORE_AND_SITE = "SELECT COUNT(DISTINCT {c:PK}) FROM {Cart AS c JOIN BaseSite AS bs ON {c:site}={bs:PK}"
			+ " JOIN GEEdgeCustomer AS gc ON {c:user}={gc:PK}" + " JOIN AbstractOrderEntry AS oe ON {oe:order}={c:PK}"
			+ " JOIN B2BUnit AS bu ON {c:soldToForCart}={bu:pk}}" + " WHERE {c:name} is NOT NULL AND {bu:uid}=?salesArea"
			+ " AND {bs:uid}=?site AND {gc:uid}=?user";

	private static final Integer CART_REMOVAL_AGE_DEF = 365;
	private static final Integer CART_REMOVAL_AGE_DEF_FROM = 365;
	private static final Integer CART_REMOVAL_AGE_DEF_TO = 364;

	private static final Logger LOG = Logger.getLogger(BHGESaveCartDaoImpl.class);

	@Override
	public SearchPageData<CartModel> getSavedCartsForBasestoreAndUser(final PageableData pageableData,
			final BaseSiteModel baseSite, final BaseStoreModel baseStore, final UserModel user, final List<OrderStatus> orderStatus)
	{
		try
		{
			B2BUnitModel salesArea = null;
			if (null != user && user instanceof GEEdgeCustomerModel)
			{
				salesArea = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
			}
			if (salesArea != null)
			{
				final String queryString = "SELECT {c:PK} FROM {Cart AS c JOIN BaseSite AS bs ON {c:site}={bs:PK}"
						+ " JOIN GEEdgeCustomer AS gc ON {c:user}={gc:PK}" + " JOIN B2BUnit AS bu ON {c:soldToForCart}={bu:pk}}"
						+ " WHERE {c:name} is NOT NULL AND {bu:uid}=?salesArea"
						+ " AND {bs:uid}=?site AND {gc:uid}=?user AND {c:saveTime} IS NOT NULL";

				final Map<String, Object> params = new HashMap<String, Object>();
				params.put("user", user.getUid());
				params.put("salesArea", salesArea.getUid());
				params.put("site", baseSite.getUid());

				// Adding Default Sort to Pageable Data if sort is blank
				if (null != pageableData && StringUtils.isBlank(pageableData.getSort()))
				{
					pageableData.setSort(SORT_CODE_BY_DATE_MODIFIED);
				}

				final List<SortQueryData> sortQueries = Arrays.asList(
						createSortQueryData(SORT_CODE_BY_DATE_MODIFIED, queryString + ORDERBYCLAUSE),
						createSortQueryData(SORT_CODE_BY_DATE_SAVED, queryString + SORT_SAVED_CARTS_BY_DATE_SAVED),
						createSortQueryData(SORT_CODE_BY_NAME, queryString + SORT_SAVED_CARTS_BY_NAME),
						createSortQueryData(SORT_CODE_BY_CODE, queryString + SORT_SAVED_CARTS_BY_CODE),
						createSortQueryData(SORT_CODE_BY_TOTAL, queryString + SORT_SAVED_CARTS_BY_TOTAL));
				return getPagedFlexibleSearchService().search(sortQueries, SORT_CODE_BY_DATE_MODIFIED, params, pageableData);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error while getting saved carts list " + e);
		}
		return null;
	}

	@Override
	public List<CartModel> getSavedCartsExpiryDate(final BaseSiteModel baseSite)
	{
		try
		{
			final int expirationDateInDays = (null != baseSite.getExpireNotificationDateInDays())
					? baseSite.getExpireNotificationDateInDays()
					: CART_REMOVAL_AGE_DEF;

			final int expireNotificationFromDate = expireNotificationFromDate(expirationDateInDays);
			final int expireNotificationToDate = expireNotificationToDate(expirationDateInDays);
			String queryString = "";

			if (Config.isOracleUsed())
			{
				queryString = "SELECT {C:PK} FROM {Cart AS C LEFT JOIN BaseSite AS BS "
						+ " ON {C:site}={BS:PK}} WHERE {C:expirationTime} <= SYSDATE + " + expireNotificationFromDate + " "
						+ " AND {C:expirationTime} > SYSDATE + " + expireNotificationToDate + " AND {BS:uid}=?site "
						+ " AND {C:name} IS NOT NULL";
			}
			else if (Config.isHSQLDBUsed())
			{
				queryString = "SELECT {C:PK} FROM {Cart AS C LEFT JOIN BaseSite AS BS "
						+ " ON {C:site}={BS:PK}} WHERE CAST({C:expirationTime} AS date)  <= DATE_ADD(curdate(), INTERVAL "
						+ expireNotificationFromDate + " DAY) "
						+ " AND CAST({C:expirationTime} AS date) > DATE_ADD(curdate(), INTERVAL " + expireNotificationToDate
						+ " DAY) AND {BS:uid}=?site " + " AND {C:name} IS NOT NULL";
			}
			final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
			final Map<String, Object> params = new HashMap<String, Object>();

			params.put("site", baseSite.getUid());
			query.addQueryParameters(params);
			final SearchResult<CartModel> result = getFlexibleSearchService().search(query);
			return result.getResult();
		}
		catch (final Exception e)
		{
			LOG.error("Error gettiing expiry date for saved carts from DAO" + e);
		}
		return null;
	}

	private int expireNotificationToDate(final Integer age)
	{
		try
		{
			final int toCount = age - 1;
			return toCount;
		}
		catch (final Exception e)
		{
			LOG.error("Error getting Expiry notification to count from DAO" + e);
		}
		return CART_REMOVAL_AGE_DEF_TO;
	}

	private int expireNotificationFromDate(final Integer age)
	{
		try
		{
			final int fromCount = age;
			return fromCount;
		}
		catch (final Exception e)
		{
			LOG.error("Error getting Expiry notification from count from DAO" + e);
		}
		return CART_REMOVAL_AGE_DEF_FROM;
	}

	@Override
	public Integer getSavedCartsCountForBasestoreAndUser(final BaseSiteModel baseSite, final BaseStoreModel baseStore,
			final UserModel user)
	{
		B2BUnitModel salesArea = null;
		if (null != user && user instanceof GEEdgeCustomerModel)
		{
			salesArea = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
		}
		final String queryString = SAVED_CARTS_TOTAL_FOR_STORE_AND_SITE;
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("user", user.getUid());
		params.put("salesArea", salesArea.getUid());
		params.put("site", baseSite.getUid());
		params.put("baseStore", baseStore.getUid());
		query.addQueryParameters(params);
		query.setResultClassList(Collections.singletonList(Integer.class));
		final SearchResult<Integer> result = getFlexibleSearchService().search(query);
		return result.getResult().get(0);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.savecart.dao.BHGESavedCartDao#getSavedCartsForUser(de.hybris.platform.commerceservices.search.
	 * pagedata.PageableData, de.hybris.platform.basecommerce.model.site.BaseSiteModel,
	 * de.hybris.platform.store.BaseStoreModel, de.hybris.platform.core.model.user.UserModel, java.util.List)
	 */
	@Override
	public SearchPageData<CartModel> getSavedCartsForUser(final PageableData pageableData, final BaseSiteModel baseSite,
			final BaseStoreModel baseStore, final UserModel user, final List<OrderStatus> orderStatus)
	{
		try
		{
			B2BUnitModel salesArea = null;
			if (null != user && user instanceof GEEdgeCustomerModel)
			{
				salesArea = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
			}
			if (salesArea != null)
			{

				final String queryString = "SELECT {c:PK} FROM {Cart AS c JOIN BaseSite AS bs ON {c:site}={bs:PK}"
						+ " JOIN GEEdgeCustomer AS gc ON {c:user}={gc:PK}" + " JOIN B2BUnit AS bu ON {c:soldToForCart}={bu:pk}}"
						+ " WHERE {c:name} is NOT NULL AND {bu:uid} like ?salesArea"
						+ " AND {bs:uid}=?site AND {gc:uid}=?user AND {c:saveTime} IS NOT NULL";

				String custNum = null;
				if (Objects.nonNull((salesArea)))
				{
					final String salesAreaIds[] = salesArea.getUid().split("_");
					custNum = salesAreaIds[0];
				}
				final Map<String, Object> params = new HashMap<String, Object>();
				params.put("user", user.getUid());
				params.put("salesArea", "%" + custNum + "%");
				params.put("site", baseSite.getUid());

				// Adding Default Sort to Pageable Data if sort is blank
				if (null != pageableData && StringUtils.isBlank(pageableData.getSort()))
				{
					pageableData.setSort(SORT_CODE_BY_DATE_MODIFIED);
				}

				final List<SortQueryData> sortQueries = Arrays.asList(
						createSortQueryData(SORT_CODE_BY_DATE_MODIFIED, queryString + ORDERBYCLAUSE),
						createSortQueryData(SORT_CODE_BY_DATE_SAVED, queryString + SORT_SAVED_CARTS_BY_DATE_SAVED),
						createSortQueryData(SORT_CODE_BY_NAME, queryString + SORT_SAVED_CARTS_BY_NAME),
						createSortQueryData(SORT_CODE_BY_CODE, queryString + SORT_SAVED_CARTS_BY_CODE),
						createSortQueryData(SORT_CODE_BY_TOTAL, queryString + SORT_SAVED_CARTS_BY_TOTAL));
				return getPagedFlexibleSearchService().search(sortQueries, SORT_CODE_BY_DATE_MODIFIED, params, pageableData);
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error while getting saved carts list " + e);
		}
		return null;

	}

	/*
	 * @Override public List<CartModel> getSavedCartsForRemovalForSiteAndStore(final BaseSiteModel baseSite, final
	 * BaseStoreModel baseStore, final UserModel user) { try { final Map<String, Object> params = new HashMap<String,
	 * Object>(); params.put("site", baseSite); params.put("baseStore", baseStore); params.put("user", user);
	 * params.put("currentDate", new Date());
	 *
	 * return doSearch(EXPIRED_SAVED_CARTS, params, CartModel.class);
	 *
	 * } catch (final Exception e) { LOG.error("Error while getting EXPIRED SAVED CARTS" + e); } return null; }
	 */

}
