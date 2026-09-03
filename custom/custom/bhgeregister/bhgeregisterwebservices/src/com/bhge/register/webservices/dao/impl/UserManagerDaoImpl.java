/**
 *
 */
package com.bhge.register.webservices.dao.impl;

import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.search.restriction.SearchRestrictionService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.bhge.register.webservices.dao.UserManagerDao;
import com.bhge.register.webservices.model.BHGEAppAccessLevelModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;


/**
 * Implementation for Register User Dao
 *
 */
public class UserManagerDaoImpl implements UserManagerDao
{

	private static Logger log = Logger.getLogger(UserManagerDaoImpl.class);

	private FlexibleSearchService flexibleSearchService;

	private SearchRestrictionService searchRestrictionService;

	private static final String SSO_ID = "ssoId";
	private static final String UID = "uid";
	private static final String ACCESS_ID = "id";
	private static final String APPROVER_ID = "approverId";
	private static final String GROUP_ID = "groupId";
	private static final String REQUESTOR_ID = "requestorId";

	private static final String FETCH_MANAGER_MODEL = "SELECT {USR.PK} from {\r\n" + "BHGERegieterCustomer AS C \r\n"
			+ "JOIN BHGEManager2AccountRelation AS MAR ON  {C.PK}={MAR.TARGET} \r\n"
			+ "JOIN BHGEAccount2CustomerRelation AS ACR ON {MAR.SOURCE} = {ACR.SOURCE}\r\n"
			+ "JOIN BHGEUserAccessRequest AS USR ON {ACR.TARGET} = {USR.requesterId}} \r\n" + "WHERE lower({C.UID})= lower(?ssoId)";

	private static final String FETCH_REGISTER_CUSTOMER = "select {pk} from {BHGERegieterCustomer} where lower({sso}) = lower(?uid)";
	private static final String FETCH_APP_ACCESS_LEVEL = "select {pk} from {BHGEAppAccessLevel} where {appAccessLevelId} = ?id";

	private static final String FETCH_APPROVER_DETAILS = "select {pk} from {BHGEApprovalDetails} where {approverID} = ?approverId";

	private static final String FETCH_USER_GROUP = "select {pk} from {UserGroup} where upper({uid}) = upper(?groupId)";

	//private static final String FETCH_EDGE_CUSTOMER = "select {pk} from {GEEdgeCustomer} where upper({uid}) = ({{select upper({sso}) from {BHGERegieterCustomer} where {uid} = ?ssoId}})";


	private static final String FETCH_EDGE_CUSTOMER = "select {pk} from {GEEdgeCustomer} where upper({uid}) = upper(?ssoId)";

	private static final String FETCH_ACCOUNT_DATA = "select {pk} from {BHGEAccount2CustomerRelation} where {TARGET} = ?requestorId";

	//for server
	//private static final String FETCH_APP_ACCESS_DATA = "SELECT {C.pk} from {BHGEAppAccessLevel AS C JOIN BHGEApplicationDetails AS USR ON {C.applicationInfo} = {USR.pk}} WHERE lower({USR.applicationId})=lower('1')";

	//for local
	private static final String FETCH_APP_ACCESS_DATA = "SELECT {C.pk} from {BHGEAppAccessLevel AS C JOIN BHGEApplicationDetails AS USR ON {C.applicationInfo} = {USR.pk}}";

	private static final String FETCH_ACCESS_LEVEL_FOR_USER = "select {A.PK} from {BHGEUserAccessRequest AS A \r\n"
			+ "               JOIN BHGERegieterCustomer AS R ON {A.requesterId}={R.PK}\r\n"
			+ "               JOIN BHGEApprovalDetails AS D ON {A.approverDetails}={D.PK}\r\n"
			+ "               JOIN BHGEAppAccessLevel AS L ON {D.appAccessLevel}={L.PK}}\r\n"
			+ "               Where lower({R.sso})= lower(?ssoId)\r\n" + "  AND {L.appAccessLevelId}= ?id order by {A.PK} desc";

	private static final String FETCH_ACCESS_REQUEST_DATA = "SELECT {USR.PK} from {BHGERegieterCustomer AS C\r\n"
			+ "                 JOIN BHGEUserAccessRequest AS USR \r\n" + "                 ON {C.PK} = {USR.requesterId}}\r\n"
			+ "                 WHERE lower({C.SSO}) = (?ssoId)";

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


	/**
	 * @return the searchRestrictionService
	 */
	public SearchRestrictionService getSearchRestrictionService()
	{
		return searchRestrictionService;
	}

	/**
	 * @param searchRestrictionService
	 *           the searchRestrictionService to set
	 */
	public void setSearchRestrictionService(final SearchRestrictionService searchRestrictionService)
	{
		this.searchRestrictionService = searchRestrictionService;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchManagerModel(java.lang.String)
	 */
	@Override
	public List<BHGEUserAccessRequestModel> fetchManagerModel(final String userId)
	{
		log.info("Inside fetching manager model with UID: " + userId);

		final List<BHGEUserAccessRequestModel> userRequestList = new ArrayList<>();

		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != userId)
			{

				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_MANAGER_MODEL);
				fQuery.addQueryParameter(SSO_ID, userId);

				log.info("userRequestQuery: " + fQuery);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					querysearchResult.getResult().forEach(eachResult -> {
						userRequestList.add((BHGEUserAccessRequestModel) eachResult);
					});

				}
				log.info("userRequestList: " + userRequestList);

			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}

		return userRequestList;
	}



	@Override
	public BHGERegieterCustomerModel getRequestorData(final String uid)
	{
		BHGERegieterCustomerModel fetchRegisterCustomerModel = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != uid)
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_REGISTER_CUSTOMER);
				fQuery.addQueryParameter(UID, uid);
				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					fetchRegisterCustomerModel = (BHGERegieterCustomerModel) querysearchResult.getResult().get(0);
				}
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return fetchRegisterCustomerModel;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#getAppAccessLevel(java.lang.String)
	 */
	@Override
	public BHGEAppAccessLevelModel getAppAccessLevel(final String id)
	{

		BHGEAppAccessLevelModel appAccessLevelModel = null;
		if (null != id)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APP_ACCESS_LEVEL);
			fQuery.addQueryParameter(ACCESS_ID, id);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				appAccessLevelModel = (BHGEAppAccessLevelModel) querysearchResult.getResult().get(0);
			}
		}
		return appAccessLevelModel;

	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#getFetchPreviousRequest(java.lang.String, java.lang.String)
	 */
	@Override
	public BHGEUserAccessRequestModel getFetchPreviousRequest(final String userId, final String accessId)
	{
		BHGEUserAccessRequestModel previousAccessData = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != userId && null != accessId)
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_ACCESS_LEVEL_FOR_USER);
				fQuery.addQueryParameter(SSO_ID, userId);
				fQuery.addQueryParameter(ACCESS_ID, accessId);
				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					previousAccessData = (BHGEUserAccessRequestModel) querysearchResult.getResult().get(0);
				}
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return previousAccessData;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchApprovalDetails(java.lang.String)
	 */
	@Override
	public BHGEApprovalDetailsModel fetchApprovalDetails(final String approverId)
	{
		BHGEApprovalDetailsModel approverData = null;
		if (null != approverId)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APPROVER_DETAILS);
			fQuery.addQueryParameter(APPROVER_ID, approverId);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				approverData = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
			}
		}
		return approverData;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchGroupModel(java.lang.String)
	 */
	@Override
	public UserGroupModel fetchGroupModel(final String groupName)
	{
		log.info("inside fetchGroupModel: for groupName: " + groupName);
		UserGroupModel userGroup = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != groupName)
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_GROUP);
				fQuery.addQueryParameter(GROUP_ID, groupName);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					userGroup = (UserGroupModel) querysearchResult.getResult().get(0);
				}
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		log.info("userGroup :" + userGroup);
		return userGroup;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchEdgeCustomer(java.lang.String)
	 */
	@Override
	public GEEdgeCustomerModel fetchEdgeCustomer(final String sso)
	{
		log.info("Inside fetchEdgeCustomer for sso: " + sso);
		GEEdgeCustomerModel edgeCustomer = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != sso)
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_EDGE_CUSTOMER);
				fQuery.addQueryParameter(SSO_ID, sso);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					edgeCustomer = (GEEdgeCustomerModel) querysearchResult.getResult().get(0);
				}
			}
			log.info("edgeCustomer " + edgeCustomer);
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return edgeCustomer;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchAccessLevels()
	 */
	@Override
	public List<BHGEAppAccessLevelModel> fetchAccessLevels()
	{
		log.info("Inside fetchAccessLevels");

		final List<BHGEAppAccessLevelModel> accessLevelList = new ArrayList<>();
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APP_ACCESS_DATA);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				accessLevelList.add((BHGEAppAccessLevelModel) eachResult);
			});

		}
		return accessLevelList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchSapLevel(java.lang.String)
	 */
	@Override
	public String fetchSapLevel(final String userId)
	{
		log.info("Inside fetchSapLevel for sso: " + userId);
		GEEdgeCustomerModel edgeCustomer = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != userId)
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_EDGE_CUSTOMER);
				fQuery.addQueryParameter(SSO_ID, userId);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					edgeCustomer = (GEEdgeCustomerModel) querysearchResult.getResult().get(0);
				}
			}
			log.info("edgeCustomer " + edgeCustomer);
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return edgeCustomer.toString();

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.UserManagerDao#fetchUserRequestList(java.util.Set)
	 */
	@Override
	public List<BHGEUserAccessRequestModel> fetchUserRequestList(final String uid)
	{
		log.info("Inside fetchUserRequestList");
		final List<BHGEUserAccessRequestModel> accessRequestList = new ArrayList<>();
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			if (null != uid)
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_ACCESS_REQUEST_DATA);
				fQuery.addQueryParameter(SSO_ID, uid);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					querysearchResult.getResult().forEach(eachResult -> {
						accessRequestList.add((BHGEUserAccessRequestModel) eachResult);
					});

				}
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return accessRequestList;
	}


}
