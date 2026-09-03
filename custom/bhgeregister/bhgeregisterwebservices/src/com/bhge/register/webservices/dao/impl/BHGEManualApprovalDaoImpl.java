/**
 *
 */
package com.bhge.register.webservices.dao.impl;
import java.text.SimpleDateFormat;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.search.restriction.SearchRestrictionService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionExecutionBody;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.servicelayer.user.daos.UserDao;
import de.hybris.platform.util.Config;

import java.util.ArrayList;
import java.text.ParseException;
import java.util.Arrays;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.lang3.StringUtils;


import jakarta.annotation.Resource;

import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhge.register.connector.constants.BhgeregisterconnectorConstants;
import com.bhge.register.connector.dam.domain.UserRequest;
import com.bhge.register.connector.services.ApplicationConnectorService;
import com.bhge.register.webservices.appoval.StatusCountBean;
import com.bhge.register.webservices.dao.BHGEManualApprovalDao;
import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.data.AccountLinkingData;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.enums.BHGEAccessRequestStatus;
import com.bhge.register.webservices.exception.BhgeRegisterException;
import com.bhge.register.webservices.model.BHGEAccountDataModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.model.BHGEUserAccessRulesModel;
import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGERegisterRuleData;
import com.bhgeregister.dto.BHGESoldtoData;
import org.apache.commons.collections4.CollectionUtils;


public class BHGEManualApprovalDaoImpl implements BHGEManualApprovalDao
{

	private static final String FETCH_WORKLIST = "select {pk} from {BHGEUserAccessRequest} where {requeststatus} = ({{SELECT {crse.PK} FROM {BHGEAccessRequestStatus as crse} WHERE {crse.code} = 'PENDING_APPROVAL'}}) and {approverDetails} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue} }})  order by {modifiedtime} desc";
	//FPT Fetch work list
	private static final String FPT_FETCH_WORKLIST = "select distinct({pk}), {modifiedtime}  from {BHGEUserAccessRequest as br join FPTApprover2UserAcessRelation as fptrel on {fptrel.source}={br.pk} join BHGEApprovalDetails as bap on {fptrel.target}={bap.pk}} where {requeststatus} = ({{SELECT {crse.PK} FROM {BHGEAccessRequestStatus as crse} WHERE {crse.code} = 'PENDING_APPROVAL'}}) and {bap.pk} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue} }}) order by {modifiedtime} desc";

	private static final String FETCH_DASHBOARD = "select {pk} from {BHGEUserAccessRequest} where {requeststatus} in ({{SELECT {crse.PK} FROM {BHGEAccessRequestStatus as crse} WHERE {crse.code} in ('PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'ONHOLD', 'COMPLETED')}}) and {approverDetails} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue }}}) ";
	//FPT Fetch Dashboard
	private static final String FPT_FETCH_DASHBOARD = "select distinct({pk}), {modifiedtime} from {BHGEUserAccessRequest as br join FPTApprover2UserAcessRelation as fptrel on {fptrel.source}={br.pk} join BHGEApprovalDetails as bap on {fptrel.target}={bap.pk}} where {requeststatus} in ({{SELECT {crse.PK} FROM {BHGEAccessRequestStatus as crse} WHERE {crse.code} in ('PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'ONHOLD', 'COMPLETED')}}) and {bap.pk} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue} }}) order by {modifiedtime} desc";

	private static final String FETCH_DASHBOARD_STATUS = "select {pk} from {BHGEUserAccessRequest} where {requeststatus} = ({{SELECT {crse.PK} FROM {BHGEAccessRequestStatus as crse} WHERE {crse.code} = ?status}}) and {approverDetails} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue }}}) ";
	//FPT Fetch Dashboard Status
	private static final String FPT_FETCH_DASHBOARD_STATUS = "select distinct({pk}), {modifiedtime} from {BHGEUserAccessRequest as br join FPTApprover2UserAcessRelation as fptrel on {fptrel.source}={br.pk} join BHGEApprovalDetails as bap on {fptrel.target}={bap.pk}} where {requeststatus} = ({{SELECT {crse.PK} FROM {BHGEAccessRequestStatus as crse} WHERE {crse.code} = ?status}}) and {bap.pk} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue} }}) order by {modifiedtime} desc";

	private static final String FETCH_WORKLIST_DETAILS = "select {pk} from {BHGEUserAccessRequest} where {accessrequestid} = ?requestAccessId";

	private static final String AUTHORIZE_WORKITEM = "select {pk} from {BHGEUserAccessRequest} where {accessrequestid} = ?requestAccessId and {approverDetails} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue} }})";
	//FPT Authorize work item
	private static final String FPT_AUTHORIZE_WORKITEM = "select {pk} from {BHGEUserAccessRequest as br join FPTApprover2UserAcessRelation as fptrel on {fptrel.source}={br.pk} join BHGEApprovalDetails as bap on {fptrel.target}={bap.pk}} where {accessrequestid} = ?requestAccessId and {bap.pk} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uidValue} }})";

	private static final String FETCH_APPROVALRULE_LIST = "select {pk} from {BHGEUserAccessRules} where {userAccessRequest} in ({{select {pk} from {BHGEUserAccessRequest} where {accessrequestid} = ?requestAccessId}})";

	private static final String ACCOUNT_CHECK = "select {pk} from {BHGEAccountData} where {accountNumber} = ?accNum";

	private static final String PARAM_ACCESS_REQID = "requestAccessId";

	private static final String CSR_APPROVER_GROUP_NAME = "select distinct{brk.pk} from {BHGERegisterKeyValueData as brk join BHGEMnCEcommMatrix as bm on {bm.legalentity}={brk.pk}}  where {brk.attributeId}=?attributeId and {bm.csrApproverValue} in ({{Select {P.pk} from {BHGEApprovalDetails AS P JOIN BHGEApprover2CustomerRelation AS appRel  ON {appRel.source}={P.PK} JOIN BHGERegieterCustomer as cu on {appRel.target} = {cu.PK} and {cu.uid} = ?uid}}})";

	private static final String FETCH_USERACCESS_LIST = "select {pk} from {BHGEUserAccessRequest} where {requesterId} in ({{select {pk} from {BHGERegieterCustomer} where {sso} = ?inputSso}})";


	private static final String PARAM_UID_VALUE = "uidValue";
	private static final String CSR_APPLICATIONACCESS_REJECT = "CSR REJECT";
	private static final String CSR_FPT_APPLICATIONACCESS_REJECT = "CSR FPT REJECT";
	private static final String CSR_APPLICATIONACCESS_ONHOLD = "CSR OHHOLD User";
	private static final String CSR_APPLICATIONACCESS_ONHOLD_CSR = "CSR OHHOLD";
	private static final String CSR_IQM_APPLICATIONACCESS_REJECT = "CSR IQM REJECT";
	private static final String CSR_OFS_APPLICATIONACCESS_REJECT = "CSR OFS REJECT";

	private static final String ATTRIBUTE_ID = "attributeId";
	private static final String PARAM_UID = "uid";

	private final String SUCCESS_RESULT = "SUCCESS";
	private final String APPROVED = "APPROVED";

	private final String ERROR_RESULT = "ERROR";

	private FlexibleSearchService flexibleSearchService;

	private Converter<BHGEUserAccessRequestModel, ManualApprovalData> bhgeManualApprovalConverter;

	private RegisterUserDao registerDao;

	private ApplicationConnectorService applicationConnectorService;

	private B2BUnitService<B2BUnitModel, UserModel> b2bUnitService;

	BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;
	SubmitRegisterRequestService submitRegisterRequestService;

	@Resource(name = "searchRestrictionService")
	private SearchRestrictionService searchRestrictionService;

	final String FPT = Config.getParameter("register.appName.FPT");
	final String fptStore = FPT;

	/**
	 * @return the submitRegisterRequestService
	 */
	public SubmitRegisterRequestService getSubmitRegisterRequestService()
	{
		return submitRegisterRequestService;
	}

	/**
	 * @param submitRegisterRequestService
	 *           the submitRegisterRequestService to set
	 */
	public void setSubmitRegisterRequestService(final SubmitRegisterRequestService submitRegisterRequestService)
	{
		this.submitRegisterRequestService = submitRegisterRequestService;
	}

	private static Logger log = Logger.getLogger(BHGEManualApprovalDaoImpl.class);

	/**
	 * @return the modelService
	 */
	private EmailService emailService;

	/**
	 * @return the emailService
	 */
	public EmailService getEmailService()
	{
		return emailService;
	}

	/**
	 * @param emailService
	 *           the emailService to set
	 */
	public void setEmailService(final EmailService emailService)
	{
		this.emailService = emailService;
	}

	private ModelService modelService;

	private UserService userService;

	@Resource(name = "userDao")
	UserDao userDao;

	@Resource(name = "sessionService")
	SessionService sessionService;

	private String getUserSso(String uid) {
		UserModel csrUser;
		String userSso;
		if(userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			csrUser= getRegisterCustomerForSSO(uid);
			userSso = csrUser.getSso();
		}
		else {
			csrUser=userService.getCurrentUser();
			userSso = csrUser.getSso();
		}
		return userSso;
	}

	public List<ManualApprovalData> fetchApprovalDetails(final String uid,String name,String productLine,String fromDate,String toDate)
	{
		log.info("Inside dao - fetchApprovalDetails");

		final List<ManualApprovalData> mList = new ArrayList<>();
		FlexibleSearchQuery fQuery = null;
		String userSSO = getUserSso(uid);
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String newFromdate = fromDate + " 00:00:00.000";
		String newTodate = toDate + " 11:59:59.000";
		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(userSSO);

		for (int i = 0; i < accessRequestData.size(); i++)
		{
			if (accessRequestData.get(i).getRequestStatus() != null)
			{
				log.info("Application Id---"+ accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId());
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
				{
					fQuery = new FlexibleSearchQuery(FPT_FETCH_WORKLIST);
					log.info("fquery---"+ fQuery );
				}
				else
				{
					StringBuilder query = new StringBuilder();
					query.append(FETCH_DASHBOARD);
					boolean check=false;
					if (StringUtils.isNotBlank(productLine)){
						check=true;
						query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu JOIN BHGERegisterKeyValueData AS kvd ON {cu.productLine} = {kvd.pk}} WHERE LOWER({kvd.attributeKey}) LIKE ?productLine ");
					}
					if (StringUtils.isNotBlank(name)) {
						check=true;
						if(StringUtils.isNotBlank(productLine))
							query.append("and ({cu.email} like ?name or {cu.name} like ?name) ");
						else
							query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu} where ({cu.email} like ?name or {cu.name} like ?name) ");
					}
					if (StringUtils.isNotBlank(fromDate) && StringUtils.isNotBlank(toDate)){
						check=true;
						if(StringUtils.isNotBlank(name) || StringUtils.isNotBlank(productLine))
							query.append("and {cu.creationtime} BETWEEN ?fromDate AND ?toDate ");
						else
							query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu} where {cu.creationtime} BETWEEN ?fromDate AND ?toDate ");

					}
					if(check)
						query.append("}}) order by {modifiedtime} desc");
					fQuery = new FlexibleSearchQuery(query);
					log.info("fquery---"+ fQuery );
				}
			}
		}
		fQuery.addQueryParameter(PARAM_UID_VALUE, uid);
		if (StringUtils.isNotBlank(name))
			fQuery.addQueryParameter("name", '%'+name+'%');
		if (StringUtils.isNotBlank(productLine))
			fQuery.addQueryParameter("productLine", '%'+productLine.toLowerCase()+'%');
		fQuery.addQueryParameter("fromDate",newFromdate);
		fQuery.addQueryParameter("toDate", newTodate);
		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRequestModel> results = searchResult.getResult();
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();
		if (results != null && results.iterator().hasNext())
		{
			final Iterator<BHGEUserAccessRequestModel> worklistIter = results.iterator();
			while (worklistIter.hasNext())
			{
				final BHGEUserAccessRequestModel worklistModel = worklistIter.next();
				mList.add(getBhgeManualApprovalConverter().convert(worklistModel));
			}
		}
		return mList;

	}

	@Override
	public List<ManualApprovalData> fetchDashboardApprovalDetails(final String uid, final String status,final String name,final String productLine,final String fromDate,final String toDate) {
		log.info("Inside dao - fetchDashboardApprovalDetails");

		final List<ManualApprovalData> mList = new ArrayList<>();

		FlexibleSearchQuery fQuery = null;
		String userSSO = getUserSso(uid);
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String newFromdate = fromDate + " 00:00:00.000";
		String newTodate = toDate + " 11:59:59.000";

		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(userSSO);

		for (int i = 0; i < accessRequestData.size(); i++) {
			if (accessRequestData.get(i).getRequestStatus() != null) {
				log.info("Application Id---" + accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId());
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4) {
					fQuery = new FlexibleSearchQuery(FPT_FETCH_DASHBOARD_STATUS);
					log.info("fquery---" + fQuery);
				} else {
					StringBuilder query = new StringBuilder();
					query.append(FETCH_DASHBOARD_STATUS);
					boolean check=false;
					if (StringUtils.isNotBlank(productLine)){
						check=true;
						query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu JOIN BHGERegisterKeyValueData AS kvd ON {cu.productLine} = {kvd.pk}} WHERE LOWER({kvd.attributeKey}) LIKE ?productLine ");
					}
					if (StringUtils.isNotBlank(name)) {
						check=true;
						if(StringUtils.isNotBlank(productLine))
							query.append("and ({cu.email} like ?name or {cu.name} like ?name) ");
						else
							query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu} where ({cu.email} like ?name or {cu.name} like ?name) ");
					}
					if (StringUtils.isNotBlank(fromDate) && StringUtils.isNotBlank(toDate)){
						check=true;
						if(StringUtils.isNotBlank(name) || StringUtils.isNotBlank(productLine))
							query.append("and {cu.creationtime} BETWEEN ?fromDate AND ?toDate ");
						else
							query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu} where {cu.creationtime} BETWEEN ?fromDate AND ?toDate ");

					}
					if(check)
					query.append("}}) order by {modifiedtime} desc");
					log.info("Query---" + query.toString());
					fQuery = new FlexibleSearchQuery(query);
					log.info("fquery---" + fQuery);
				}
			}
		}

		fQuery.addQueryParameter(PARAM_UID_VALUE, uid);
		fQuery.addQueryParameter("status", status);
		if (StringUtils.isNotBlank(name))
			fQuery.addQueryParameter("name", '%'+name+'%');
		if (StringUtils.isNotBlank(productLine))
			fQuery.addQueryParameter("productLine", '%'+productLine.toLowerCase()+'%');
		if (StringUtils.isNotBlank(fromDate) && StringUtils.isNotBlank(toDate)){
			fQuery.addQueryParameter("fromDate", newFromdate);
			fQuery.addQueryParameter("toDate",newTodate);
		}

		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRequestModel> results = searchResult.getResult();
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();
		if (results != null && results.iterator().hasNext())
		{
			final Iterator<BHGEUserAccessRequestModel> worklistIter = results.iterator();
			while (worklistIter.hasNext())
			{
				final BHGEUserAccessRequestModel worklistModel = worklistIter.next();
				mList.add(getBhgeManualApprovalConverter().convert(worklistModel));
			}
		}
		return mList;
	}

	@Override
	public StatusCountBean fetchDashboardDetails(final String uid,String name,String productLine,String fromDate,String toDate)
	{
		log.info("Inside dao - fetchDashboardDetails");

		final List<ManualApprovalData> mList = new ArrayList<>();
		FlexibleSearchQuery fQuery = null;
		String userSSO = getUserSso(uid);
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String newFromdate = fromDate + " 00:00:00.000";
		String newTodate = toDate + " 11:59:59.000";

		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(userSSO);

		for (int i = 0; i < accessRequestData.size(); i++)
		{

			if (accessRequestData.get(i).getRequestStatus() != null)
			{	log.info("Application Id---"+ accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId());
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
				{
					fQuery = new FlexibleSearchQuery(FPT_FETCH_DASHBOARD);
					log.info("fquery---"+ fQuery );
				}
				else
				{
					StringBuilder query = new StringBuilder();
					query.append(FETCH_DASHBOARD);
					boolean check=false;
					if (StringUtils.isNotBlank(productLine)){
						check=true;
						query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu JOIN BHGERegisterKeyValueData AS kvd ON {cu.productLine} = {kvd.pk}} WHERE LOWER({kvd.attributeKey}) LIKE ?productLine ");
					}
					if (StringUtils.isNotBlank(name)) {
						check=true;
						if(StringUtils.isNotBlank(productLine))
							query.append("and ({cu.email} like ?name or {cu.name} like ?name) ");
						else
							query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu} where ({cu.email} like ?name or {cu.name} like ?name) ");
					}
					if (StringUtils.isNotBlank(fromDate) && StringUtils.isNotBlank(toDate)){
						check=true;
						if(StringUtils.isNotBlank(name) || StringUtils.isNotBlank(productLine))
							query.append("and {cu.creationtime} BETWEEN ?fromDate AND ?toDate ");
						else
							query.append("and {requesterId} IN ({{SELECT {cu.pk} from {BHGERegieterCustomer as cu} where {cu.creationtime} BETWEEN ?fromDate AND ?toDate ");

					}
					if(check)
						query.append("}}) order by {modifiedtime} desc");
					log.info("Query---" + query.toString());
					fQuery = new FlexibleSearchQuery(query);
					log.info("fquery---"+ fQuery );
				}
			}
		}
		fQuery.addQueryParameter(PARAM_UID_VALUE, uid);
		if (StringUtils.isNotBlank(name))
			fQuery.addQueryParameter("name", '%'+name+'%');
		if (StringUtils.isNotBlank(productLine))
			fQuery.addQueryParameter("productLine", '%'+productLine.toLowerCase()+'%');
		fQuery.addQueryParameter("fromDate", newFromdate);
		fQuery.addQueryParameter("toDate",newTodate);
		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRequestModel> results = searchResult.getResult();
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();
		if (results != null && results.iterator().hasNext())
		{
			final Iterator<BHGEUserAccessRequestModel> worklistIter = results.iterator();
			while (worklistIter.hasNext())
			{
				final BHGEUserAccessRequestModel worklistModel = worklistIter.next();
				mList.add(getBhgeManualApprovalConverter().convert(worklistModel));
			}
		}

		return getStatusCount(mList);
	}

	@Override
	public List<ManualApprovalData> fetchHomepageDashboardDetails(final String uid)
	{
		log.info("Inside dao - fetchDashboardDetails");
		log.info("Current user uid:- " + userService.getCurrentUser().getUid());
		log.info("Current user sso:- " + userService.getCurrentUser().getSso());
		final List<ManualApprovalData> mList = new ArrayList<>();
		FlexibleSearchQuery fQuery = null;
		String userSSO = getUserSso(uid);
		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(userSSO);

		for (int i = 0; i < accessRequestData.size(); i++)
		{

			if (accessRequestData.get(i).getRequestStatus() != null)
			{	log.info("Application Id---"+ accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId());
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
				{
					fQuery = new FlexibleSearchQuery(FPT_FETCH_DASHBOARD);
					log.info("fquery---"+ fQuery );
				}
				else
				{
					fQuery = new FlexibleSearchQuery(FETCH_DASHBOARD);
					log.info("fquery---"+ fQuery );
				}
			}
		}
		fQuery.addQueryParameter(PARAM_UID_VALUE, uid);

		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRequestModel> results = searchResult.getResult();
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();
		if (results != null && results.iterator().hasNext())
		{
			final Iterator<BHGEUserAccessRequestModel> worklistIter = results.iterator();
			while (worklistIter.hasNext())
			{
				final BHGEUserAccessRequestModel worklistModel = worklistIter.next();
				mList.add(getBhgeManualApprovalConverter().convert(worklistModel));
			}
		}
		return mList;
	}

	@Override
	public ManualApprovalData fetchManualWorkflowDetails(final String requestAccessId)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_WORKLIST_DETAILS);
		fQuery.addQueryParameter(PARAM_ACCESS_REQID, requestAccessId);
		ManualApprovalData worklistItem = null;

		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRequestModel> results = searchResult.getResult();
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();

		if (results != null && results.iterator().hasNext())
		{
			worklistItem = getBhgeManualApprovalConverter().convert(results.iterator().next());
			worklistItem.setApprovalRuleList(fetchApprovalRules(requestAccessId));
		}
		return worklistItem;
	}

	@Override
	public List<BHGERegisterRuleData> fetchApprovalRules(final String requestAccessId)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APPROVALRULE_LIST);
		fQuery.addQueryParameter(PARAM_ACCESS_REQID, requestAccessId);
		BHGERegisterRuleData accessRuleData = null;
		final List<BHGERegisterRuleData> accessRuleList = new ArrayList<>();

		final SearchResult<BHGEUserAccessRulesModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRulesModel> results = searchResult.getResult();
		if (results != null && results.iterator().hasNext())
		{
			final Iterator<BHGEUserAccessRulesModel> accessRuleIter = results.iterator();
			while (accessRuleIter.hasNext())
			{
				final BHGEUserAccessRulesModel accessRuleModel = accessRuleIter.next();
				accessRuleData = new BHGERegisterRuleData();
				accessRuleData.setRuleCode(accessRuleModel.getUserAccessRuleId().toString());
				accessRuleData.setRuleStatus(accessRuleModel.getRuleStatus().toString());
				accessRuleData.setRuleMessage(accessRuleModel.getAppAccessRuleDetails());
				accessRuleList.add(accessRuleData);
			}
		}
		return accessRuleList;

	}

	public BHGERegisterResponse updateApprovalDetails(final ManualApprovalData approvalData, final String uid)
			throws CMSItemNotFoundException, EmailException
	{
		BHGERegisterResponse sapResponse = new BHGERegisterResponse();
		BHGEUserAccessRequestModel userAccessRequestModel = null;
		BHGERegieterCustomerModel regieterCustomerModel = null;
		final List<String> soldtoResult = new ArrayList<String>();
		final List<String> salesraeaResult = new ArrayList<String>();
		try
		{
			final String access = approvalData.getAccessRequestId();
			final long accid = null != access ? Long.parseLong(access) : null;
			log.info("Inside RegisterUserDaoImpl: updateApprovalDetails for request ID >> " + accid);
			FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_WORKLIST_DETAILS);
			fQuery.addQueryParameter(PARAM_ACCESS_REQID, accid);
			//Disabling the search restrictions
			getSearchRestrictionService().disableSearchRestrictions();
			SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				userAccessRequestModel = (BHGEUserAccessRequestModel) querysearchResult.getResult().get(0);
				log.info("Access Request - " + userAccessRequestModel.getAccessRequestId());
				regieterCustomerModel = userAccessRequestModel.getRequesterId();
				//userAccessRequestModel.setApproverResponse(approvalData.getComments());
				userAccessRequestModel.setApproverResponseLong(approvalData.getComments());
				userAccessRequestModel.setProcessedBy((BHGERegieterCustomerModel) getUserService().getUserForUID(uid));
				userAccessRequestModel.setProcessDate(new Date());
				log.info("CSR Comments - " + approvalData.getComments() + userAccessRequestModel.getProcessedBy());
				getModelService().save(userAccessRequestModel);

				final String appIDValue = userAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId().toString();

				if ("1".equals(appIDValue))
				{
					log.info("Account Linking Data - " + approvalData.getAccountLinking().size());
					final List<String> accountLinkList = new ArrayList<>();
					for (final AccountLinkingData accLinkInput : approvalData.getAccountLinking())
					{
						if (accLinkInput.getCustomerNumber() != null && accLinkInput.getCustomerNumber().length() > 0)
						{
							final StringBuilder accountLink = new StringBuilder();
							accountLink.append(accLinkInput.getCustomerNumber());
							log.info("Initial Account Link - " + accountLink.toString());
							String customerInput = accountLink.toString().trim();
							customerInput = ("0000000000" + customerInput).substring(customerInput.length());
							fQuery = new FlexibleSearchQuery(ACCOUNT_CHECK);
							fQuery.addQueryParameter("accNum", customerInput);
							querysearchResult = getFlexibleSearchService().search(fQuery);
							if (querysearchResult == null || querysearchResult.getResult() == null
									|| querysearchResult.getResult().size() == 0)
							{
								final BHGEAccountDataModel accountData = (BHGEAccountDataModel) getModelService()
										.create(BHGEAccountDataModel.class);
								accountData.setAccountNumber(customerInput);
								accountData.setAccountName(customerInput);
								getModelService().save(accountData);
							}
							if (accLinkInput.getSalesareaList() != null && accLinkInput.getSalesareaList().size() > 0)
							{
								for (final String salesAreaInput : accLinkInput.getSalesareaList())
								{
									accountLink.append("-" + salesAreaInput);
								}
								accountLinkList.add(accountLink.toString());
							}
							log.info("Final Account Link - " + accountLink.toString());
						}
					}
					if (accountLinkList.size() > 0)
					{
						regieterCustomerModel.setApproverCustomerDetails(accountLinkList);
						getModelService().save(regieterCustomerModel);
					}

					if (approvalData.getApprovalStatus().equalsIgnoreCase("APPROVED"))
					{
						final int searchB2bValue = 0;
						final StringBuilder soldtoTextMsg = new StringBuilder();
						boolean checkAllClean = true;
						sapResponse = processSalesArea(regieterCustomerModel);
						soldtoTextMsg.append("<ol>");
						for (final AccountLinkingData accLinkInput : approvalData.getAccountLinking())
						{
							if (accLinkInput.getCustomerNumber() != null && accLinkInput.getCustomerNumber().length() > 0)
							{
								String customerInput = accLinkInput.getCustomerNumber();
								customerInput = ("0000000000" + customerInput).substring(customerInput.length());

								final BHGESoldtoData soldtoData = sapResponse.getSoldtoData().get(customerInput);
								soldtoTextMsg.append("<li>Sold to " + accLinkInput.getCustomerNumber());
								if ("ERROR".equals(soldtoData.getSoldtoStatus()))
								{
									soldtoResult.add("FAIL");
									soldtoTextMsg.append(": Invalid SoldTo Number");
									checkAllClean = false;
								}
								else
								{
									soldtoResult.add("PASS");
									soldtoTextMsg.append(": SUCCESS");
								}
								soldtoTextMsg.append("</li><ol>");
								if (accLinkInput.getSalesareaList() != null && accLinkInput.getSalesareaList().size() > 0)
								{
									for (final String salesAreaInput : accLinkInput.getSalesareaList())
									{
										soldtoTextMsg.append(
												"<li>Sold to " + accLinkInput.getCustomerNumber() + " & Sales Area " + salesAreaInput.replaceAll("'","") );
										boolean salesAreaFound = false;
										final List salesareaList = soldtoData.getSalesareaList();
										final StringBuilder salesAreaTextMsg = new StringBuilder();
										salesAreaTextMsg.append("Available Sales Areas in SAP: ");
										if (salesareaList != null && salesareaList.size() > 0)
										{
											for (int ict = 0; ict < salesareaList.size(); ict++)
											{
												salesAreaTextMsg.append(salesareaList.get(ict));
												if (ict < salesareaList.size() - 1)
												{
													salesAreaTextMsg.append("~");
												}
												else
												{
													salesAreaTextMsg.append(".");
												}
												if (salesAreaInput.equals(salesareaList.get(ict)))
												{
													salesAreaFound = true;
												}
											}
										}
										else
										{
											salesAreaTextMsg.append("None");
										}
										if (salesAreaFound)
										{
											salesraeaResult.add("PASS");
											soldtoTextMsg.append(": SUCCESS");
										}
										else
										{
											salesraeaResult.add("FAIL#" + salesAreaTextMsg.toString());
											checkAllClean = false;
											soldtoTextMsg.append(": Invalid Sales Area. " + salesAreaTextMsg.toString());
										}
										soldtoTextMsg.append("</li>");
									}
								}
								else
								{
									soldtoTextMsg.append("<li>Sold to " + accLinkInput.getCustomerNumber() + " & No Sales Area </li>");
									checkAllClean = false;
								}
								soldtoTextMsg.append("</ol>");
							}
						}
						soldtoTextMsg.append("</ol>");
						if (!checkAllClean)
						{
							final String errorEntry = "Sold to & Sales Verification with SAP - Failed";
							log.warn(errorEntry);
							sapResponse.setUserMessage("Sold to & Sales Verification with SAP - <br>" + soldtoTextMsg.toString());
							sapResponse.setSoldtoResult(soldtoResult);
							sapResponse.setSalesraeaResult(salesraeaResult);
							return sapResponse;
						}
						sapResponse = processSAPStorage(regieterCustomerModel);
						if (sapResponse != null && sapResponse.getErrorMessage() != null && !sapResponse.getErrorMessage().isEmpty())
						{
							final String errorEntry = "MSG1202: Error in SAP Insert Processing. Ops Team to check for input criteria for failure.";
							log.warn(errorEntry);



							final List<String> attribName = new ArrayList<>();
							final List<String> attribValue = new ArrayList<>();

							attribName.add("User ID");
							attribValue.add(regieterCustomerModel.getSso());
							if (sapResponse != null && sapResponse.getRuleMessageList() != null
									&& sapResponse.getRuleMessageList().size() > 0)
							{
								for (int ict = 0; ict < sapResponse.getRuleMessageList().size(); ict++)
								{
									attribName.add(sapResponse.getRuleMessageList().get(ict).getRuleMessage());
									attribValue.add(sapResponse.getRuleMessageList().get(ict).getRuleStatus());
								}
							}
							log.info("Config - " + Config.getParameter("registration.failure.MSG1202"));

							emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1202"), errorEntry, errorEntry,
									attribName, attribValue);

							sapResponse.setUserMessage("Error during SAP Store Logic. Please connect with Ops team for further help.");
							return sapResponse;
						}
					}
					if (approvalData.getApprovalStatus() != null && approvalData.getApprovalStatus().length() > 0
							&& !userAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.COMPLETED))
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());
						userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));
					}
				}
				//ofs changes started
				if ("5".equals(appIDValue))
				{
					log.info("Account Linking Data - " + approvalData.getAccountLinking().size());
					final List<String> accountLinkList = new ArrayList<>();
					for (final AccountLinkingData accLinkInput : approvalData.getAccountLinking())
					{
						String customer = accLinkInput.getCustomerNumber();

						if (accLinkInput.getCustomerNumber() != null && accLinkInput.getCustomerNumber().length() > 0)
						{
							final StringBuilder accountLink = new StringBuilder();
							accountLink.append(accLinkInput.getCustomerNumber());
							log.info("Initial Account Link - " + accountLink.toString());
							String customerInput = accountLink.toString();
							customerInput = ("0000000000" + customerInput).substring(customerInput.length());
							fQuery = new FlexibleSearchQuery(ACCOUNT_CHECK);
							fQuery.addQueryParameter("accNum", customerInput);
							querysearchResult = getFlexibleSearchService().search(fQuery);
							if (querysearchResult == null || querysearchResult.getResult() == null
									|| querysearchResult.getResult().size() == 0)
							{
								final BHGEAccountDataModel accountData = (BHGEAccountDataModel) getModelService()
										.create(BHGEAccountDataModel.class);
								accountData.setAccountNumber(customerInput);
								accountData.setAccountName(customerInput);
								getModelService().save(accountData);
							}
							if (accLinkInput.getSalesareaList() != null && accLinkInput.getSalesareaList().size() > 0)
							{
								for (final String salesAreaInput : accLinkInput.getSalesareaList())
								{
									accountLink.append("-" + salesAreaInput);
								}
								accountLinkList.add(accountLink.toString());
							}
							log.info("Final Account Link - " + accountLink.toString());
						}
					}
					if (accountLinkList.size() > 0)
					{
						regieterCustomerModel.setApproverCustomerDetails(accountLinkList);
						getModelService().save(regieterCustomerModel);
						getModelService().save(userAccessRequestModel);
					}

					if (approvalData.getApprovalStatus().equalsIgnoreCase("APPROVED"))
					{
						final int searchB2bValue = 0;
						final StringBuilder soldtoTextMsg = new StringBuilder();
						boolean checkAllClean = true;
						sapResponse = processSalesArea(regieterCustomerModel);
						soldtoTextMsg.append("<ol>");
						for (final AccountLinkingData accLinkInput : approvalData.getAccountLinking())
						{
							if (accLinkInput.getCustomerNumber() != null && accLinkInput.getCustomerNumber().length() > 0)
							{
								String customerInput = accLinkInput.getCustomerNumber();
								customerInput = ("0000000000" + customerInput).substring(customerInput.length());

								final BHGESoldtoData soldtoData = sapResponse.getSoldtoData().get(customerInput);
								//ofs
								accLinkInput.setSalesareaList(soldtoData.getSalesareaList());
								//ofs
								soldtoTextMsg.append("<li>Sold to " + accLinkInput.getCustomerNumber());
								if ("ERROR".equals(soldtoData.getSoldtoStatus()))
								{
									soldtoResult.add("FAIL");
									soldtoTextMsg.append(": Invalid SoldTo Number");
									checkAllClean = false;
								}
								else
								{
									soldtoResult.add("PASS");
									soldtoTextMsg.append(": SUCCESS");
								}
								soldtoTextMsg.append("</li><ol>");
								if (accLinkInput.getSalesareaList() != null && accLinkInput.getSalesareaList().size() > 0)
								{
									for (final String salesAreaInput : accLinkInput.getSalesareaList())
									{
										soldtoTextMsg.append(
												"<li>Sold to " + accLinkInput.getCustomerNumber() + " & Sales Area " + salesAreaInput);
										boolean salesAreaFound = false;
										final List salesareaList = soldtoData.getSalesareaList();
										final StringBuilder salesAreaTextMsg = new StringBuilder();
										salesAreaTextMsg.append("Available Sales Areas in SAP: ");
										if (salesareaList != null && salesareaList.size() > 0)
										{
											for (int ict = 0; ict < salesareaList.size(); ict++)
											{
												salesAreaTextMsg.append(salesareaList.get(ict));
												if (ict < salesareaList.size() - 1)
												{
													salesAreaTextMsg.append("~");
												}
												else
												{
													salesAreaTextMsg.append(".");
												}
												if (salesAreaInput.equals(salesareaList.get(ict)))
												{
													salesAreaFound = true;
												}
											}
										}
										else
										{
											salesAreaTextMsg.append("None");
										}
										if (salesAreaFound)
										{
											salesraeaResult.add("PASS");
											soldtoTextMsg.append(": SUCCESS");
										}
										else
										{
											salesraeaResult.add("FAIL#" + salesAreaTextMsg.toString());
											checkAllClean = false;
											soldtoTextMsg.append(": Invalid Sales Area. " + salesAreaTextMsg.toString());
										}
										soldtoTextMsg.append("</li>");
									}
								}
								else
								{
									soldtoTextMsg.append("<li>Sold to " + accLinkInput.getCustomerNumber() + " & No Sales Area </li>");
									checkAllClean = false;
								}
								soldtoTextMsg.append("</ol>");
							}
						}
						soldtoTextMsg.append("</ol>");
						if (!checkAllClean)
						{
							final String errorEntry = "Sold to & Sales Verification with SAP - Failed";
							log.warn(errorEntry);
							sapResponse.setUserMessage("Sold to & Sales Verification with SAP - <br>" + soldtoTextMsg.toString());
							sapResponse.setSoldtoResult(soldtoResult);
							sapResponse.setSalesraeaResult(salesraeaResult);
							return sapResponse;
						}
						sapResponse = processSAPStorage(regieterCustomerModel);
						if (sapResponse != null && sapResponse.getErrorMessage() != null && !sapResponse.getErrorMessage().isEmpty())
						{
							final String errorEntry = "MSG1202: Error in SAP Insert Processing. Ops Team to check for input criteria for failure.";
							log.warn(errorEntry);



							final List<String> attribName = new ArrayList<>();
							final List<String> attribValue = new ArrayList<>();

							attribName.add("User ID");
							attribValue.add(regieterCustomerModel.getSso());
							if (sapResponse != null && sapResponse.getRuleMessageList() != null
									&& sapResponse.getRuleMessageList().size() > 0)
							{
								for (int ict = 0; ict < sapResponse.getRuleMessageList().size(); ict++)
								{
									attribName.add(sapResponse.getRuleMessageList().get(ict).getRuleMessage());
									attribValue.add(sapResponse.getRuleMessageList().get(ict).getRuleStatus());
								}
							}
							log.info("Config - " + Config.getParameter("registration.failure.MSG1202"));

							emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1202"), errorEntry, errorEntry,
									attribName, attribValue);

							sapResponse.setUserMessage("Error during SAP Store Logic. Please connect with Ops team for further help.");
							return sapResponse;
						}
					}
					if (approvalData.getApprovalStatus() != null && approvalData.getApprovalStatus().length() > 0
							&& !userAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.COMPLETED))
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());
						userAccessRequestModel
								.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));
					}
					log.info("userAccessQuery is - " + approvalData.getApprovalStatus() + approvalData.getApprovalStatus().equalsIgnoreCase(APPROVED) + sapResponse + sapResponse.getRuleMessageList().get(0).getRuleStatus().equals(SUCCESS_RESULT));
					if (approvalData.getApprovalStatus()!=null && approvalData.getApprovalStatus().equalsIgnoreCase(APPROVED) && sapResponse != null && sapResponse.getRuleMessageList().get(0).getRuleStatus().equals(SUCCESS_RESULT))
					{
						FlexibleSearchQuery userAccessQuery = new FlexibleSearchQuery(FETCH_USERACCESS_LIST);
						userAccessQuery.addQueryParameter("inputSso", regieterCustomerModel.getSso());
						log.info("userAccessQuery is - " + userAccessQuery);
						SearchResult<BHGEUserAccessRequestModel> userAccessquerysearchResult = getFlexibleSearchService().search(userAccessQuery);
						final List<BHGEUserAccessRequestModel> results = userAccessquerysearchResult.getResult();
						log.info("userResults of userAccessQuery is - " + results);
						if (CollectionUtils.isNotEmpty(results) && userAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.APPROVED))
						{
							log.info("userResults of userAccessQuery is - " + results);

							if(results.stream().anyMatch(user -> user.getRequestStatus().equals(BHGEAccessRequestStatus.COMPLETED)))
							{
								log.info("UserAccessRequest getting Completed is - " + userAccessRequestModel.getAccessRequestId());
								userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.COMPLETED);
							}
						}
					}

				}
				//ofs changes ended
				else if ("2".equals(appIDValue))
				{
					if (approvalData.getApprovalStatus() != null)
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());
						if (!approvalData.getApprovalStatus().equalsIgnoreCase("APPROVED"))
						{
							userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));
						}
						else
						{
							userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.COMPLETED);
							final BHGERegieterCustomerModel bhgeRegisterCustomer = userAccessRequestModel.getRequesterId();
							if (bhgeRegisterCustomer != null)
							{
								final UserModel customer = userDao.findUserByUID(bhgeRegisterCustomer.getSso());

								getEmailService().registerIQMMail("AccessGranted", bhgeRegisterCustomer.getEmail(),
										bhgeRegisterCustomer.getSso(),
										bhgeRegisterCustomer.getGivenName() + " " + bhgeRegisterCustomer.getFamilyName(), null, null,
										userAccessRequestModel.getApproverDetails().getEmailDistribList());

							}
						}
					}
				}
				else if ("3".equals(appIDValue))
				{
					if (approvalData.getApprovalStatus() != null)
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());

						userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));

						if (approvalData.getApprovalStatus().equalsIgnoreCase("APPROVED"))
						{

							log.info("DAM Processed Status - " + approvalData.getApprovalStatus());
							final UserRequest userData = new UserRequest();
							userData.setUsername(regieterCustomerModel.getSso());
							//userData.setPassword1(BhgeregisterconnectorConstants.DAM_USER_DEFAULT_PASSWORD);
							//userData.setPassword2(BhgeregisterconnectorConstants.DAM_USER_DEFAULT_PASSWORD);
							userData.setFirst(regieterCustomerModel.getGivenName());
							userData.setLast(regieterCustomerModel.getFamilyName());
							userData.setEmail(regieterCustomerModel.getEmail());
							userData.setStatus(BhgeregisterconnectorConstants.DAM_USER_STATUS_ACTIVE);
							userData.setSendemail(BhgeregisterconnectorConstants.DAM_USER_TRUEVALUE);
							if (BhgeregisterconnectorConstants.SERVICE_STATUS_SUCCESS
									.equals(applicationConnectorService.processDamUserSetup(userData)))
							{
								userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.COMPLETED);
								final BHGERegieterCustomerModel bhgeRegisterCustomer = userAccessRequestModel.getRequesterId();
								if (bhgeRegisterCustomer != null)
								{
									final UserModel customer = userDao.findUserByUID(bhgeRegisterCustomer.getSso());

									getEmailService().registerDAMMail("AccessGranted", bhgeRegisterCustomer.getEmail(),
											bhgeRegisterCustomer.getSso(),
											bhgeRegisterCustomer.getGivenName() + " " + bhgeRegisterCustomer.getFamilyName(), null, null,
											null);
								}

							}
						}
					}
				}
				//FPT Implementation
				if ("4".equals(appIDValue))
				{
					log.info("Account Linking Data - " + approvalData.getAccountLinking().size());
					final List<String> accountLinkList = new ArrayList<>();
					for (final AccountLinkingData accLinkInput : approvalData.getAccountLinking())
					{
						if (accLinkInput.getCustomerNumber() != null && accLinkInput.getCustomerNumber().length() > 0)
						{
							final StringBuilder accountLink = new StringBuilder();
							accountLink.append(accLinkInput.getCustomerNumber());
							log.info("Initial Account Link - " + accountLink.toString());
							String customerInput = accountLink.toString();
							customerInput = ("0000000000" + customerInput).substring(customerInput.length());
							fQuery = new FlexibleSearchQuery(ACCOUNT_CHECK);
							fQuery.addQueryParameter("accNum", customerInput);
							querysearchResult = getFlexibleSearchService().search(fQuery);
							if (querysearchResult == null || querysearchResult.getResult() == null
									|| querysearchResult.getResult().size() == 0)
							{
								final BHGEAccountDataModel accountData = (BHGEAccountDataModel) getModelService()
										.create(BHGEAccountDataModel.class);
								accountData.setAccountNumber(customerInput);
								accountData.setAccountName(customerInput);
								getModelService().save(accountData);
							}


							if (accLinkInput.getSalesareaList() != null && accLinkInput.getSalesareaList().size() > 0)
							{
								final List<String> legalstr = accLinkInput.getSalesareaList();
								String[] legallist = null;
								for (final String str : legalstr)
								{
									legallist = str.split(",");
								}

								for (final String salesAreaInput : legallist)
								{
									accountLink.append("-" + salesAreaInput.trim());
								}
								accountLinkList.add(accountLink.toString());
							}
							log.info("Final Account Link - " + accountLink.toString());
						}
						log.info("Product Role id - " + accLinkInput.getFptroleid());
						final BHGERegisterKeyValueDataModel fptroleModel = registerDao.fetchFptRoleDetails(accLinkInput.getFptroleid());
						regieterCustomerModel.setFptRoles(fptroleModel);

						final List<String> productLines = accLinkInput.getFptproductLinesList();
						final List<BHGERegisterKeyValueDataModel> productLinedetails = new ArrayList<>();
						for (final String productLine : productLines)
						{
							log.info("Product Line  - " + productLine);
							final BHGERegisterKeyValueDataModel fetchproductLine = registerDao.fetchFptProdLineDetails(productLine);
							productLinedetails.add(fetchproductLine);
						}
						regieterCustomerModel.setFptProductLine(productLinedetails);

					}
					if (accountLinkList.size() > 0)
					{
						regieterCustomerModel.setApproverCustomerDetails(accountLinkList);
						userAccessRequestModel.setFptApproverCustomerDetails(accountLinkList);
						getModelService().save(regieterCustomerModel);
						getModelService().save(userAccessRequestModel);
					}
					if (approvalData.getApprovalStatus().equalsIgnoreCase("APPROVED"))
					{
						final int searchB2bValue = 0;
						final StringBuilder soldtoTextMsg = new StringBuilder();
						boolean checkAllClean = true;
						sapResponse = processFptSalesArea(regieterCustomerModel);
						soldtoTextMsg.append("<ol>");
						for (final AccountLinkingData accLinkInput : approvalData.getAccountLinking())
						{
							if (accLinkInput.getCustomerNumber() != null && accLinkInput.getCustomerNumber().length() > 0)
							{
								String customerInput = accLinkInput.getCustomerNumber();
								customerInput = ("0000000000" + customerInput).substring(customerInput.length());

								final BHGESoldtoData soldtoData = sapResponse.getSoldtoData().get(customerInput);

								soldtoTextMsg.append("<li>Sold to " + accLinkInput.getCustomerNumber());
								if ("ERROR".equals(soldtoData.getSoldtoStatus()))
								{
									soldtoResult.add("FAIL");
									soldtoTextMsg.append(": Invalid SoldTo Number");
									checkAllClean = false;
								}
								else
								{
									soldtoResult.add("PASS");
									soldtoTextMsg.append(": SUCCESS");
								}
								soldtoTextMsg.append("</li><ol>");
								if (accLinkInput.getSalesareaList() != null && accLinkInput.getSalesareaList().size() > 0)
								{

									final List<String> legalstr = accLinkInput.getSalesareaList();
									String[] legallist = null;
									for (final String str : legalstr)
									{
										legallist = str.split(",");
									}

									final List<String> salesareaList = soldtoData.getSalesareaList();
									for (final String salesAreaInput : legallist)
									{
										soldtoTextMsg.append(
												"<li>Sold to " + accLinkInput.getCustomerNumber() + " & Sales Area " + salesAreaInput.trim());
										boolean salesAreaFound = false;
										final StringBuilder salesAreaTextMsg = new StringBuilder();
										salesAreaTextMsg.append("Available Sales Areas in SAP: ");
										if (salesareaList != null && salesareaList.size() > 0)
										{
											for (final String saleLegal : salesareaList)
											{
												salesAreaTextMsg.append(saleLegal);
												if (saleLegal.length() > 0)
												{
													salesAreaTextMsg.append("~");
												}
												else
												{
													salesAreaTextMsg.append(".");
												}

												if (salesAreaInput.trim().equals(saleLegal))
												{
													salesAreaFound = true;
												}
											}
										}
										else
										{
											salesAreaTextMsg.append("None");
										}
										if (salesAreaFound)
										{
											salesraeaResult.add("PASS");
											soldtoTextMsg.append(": SUCCESS");
										}
										else
										{
											salesraeaResult.add("FAIL#" + salesAreaTextMsg.toString());
											checkAllClean = false;
											soldtoTextMsg.append(": Invalid Sales Area. " + salesAreaTextMsg.toString());
										}
										soldtoTextMsg.append("</li>");
									}
								}
								else
								{
									soldtoTextMsg.append("<li>Sold to " + accLinkInput.getCustomerNumber() + " & No Sales Area </li>");
									checkAllClean = false;
								}
								soldtoTextMsg.append("</ol>");
							}
						}
						soldtoTextMsg.append("</ol>");
						if (!checkAllClean)
						{
							final String errorEntry = "Sold to & Sales Verification with SAP - Failed";
							log.warn(errorEntry);
							sapResponse.setUserMessage("Sold to & Sales Verification with SAP - <br>" + soldtoTextMsg.toString());
							sapResponse.setSoldtoResult(soldtoResult);
							sapResponse.setSalesraeaResult(salesraeaResult);
							return sapResponse;
						}
						sapResponse = processFptSAPStorage(regieterCustomerModel);
						if (sapResponse != null && sapResponse.getErrorMessage() != null && !sapResponse.getErrorMessage().isEmpty())
						{
							final String errorEntry = "MSG1202: Error in SAP Insert Processing. Ops Team to check for input criteria for failure.";
							log.warn(errorEntry);

							final List<String> attribName = new ArrayList<>();
							final List<String> attribValue = new ArrayList<>();

							attribName.add("User ID");
							attribValue.add(regieterCustomerModel.getSso());
							if (sapResponse != null && sapResponse.getRuleMessageList() != null
									&& sapResponse.getRuleMessageList().size() > 0)
							{
								for (int ict = 0; ict < sapResponse.getRuleMessageList().size(); ict++)
								{
									attribName.add(sapResponse.getRuleMessageList().get(ict).getRuleMessage());
									attribValue.add(sapResponse.getRuleMessageList().get(ict).getRuleStatus());
								}
							}
							log.info("Config - " + Config.getParameter("registration.failure.MSG1202"));

							emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1202"), errorEntry,
									errorEntry, attribName, attribValue);

							final List<String> messageList = Arrays.asList("ERROR-2001:Error final in SAP Insert Call.");
							sapResponse.setUserMessageList(messageList);
							sapResponse.setErrorMessage("ERROR-2001:Error final in SAP Insert Call.");
							sapResponse.setUserMessage("Error during SAP Store Logic. Please connect with Ops team for further help.");
							return sapResponse;
						}
					}

					/* FPT Implementation SAP Integration logic */
					if (approvalData.getApprovalStatus() != null && approvalData.getApprovalStatus().length() > 0
							&& !userAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.COMPLETED))
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());
						userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));
					}
					if (approvalData.getApprovalStatus()!=null && approvalData.getApprovalStatus().equalsIgnoreCase(APPROVED) && sapResponse != null && sapResponse.getRuleMessageList().get(0).getRuleStatus().equals(SUCCESS_RESULT))
					{
						FlexibleSearchQuery userAccessQuery = new FlexibleSearchQuery(FETCH_USERACCESS_LIST);
						userAccessQuery.addQueryParameter("inputSso", regieterCustomerModel.getSso());
						log.info("userAccessQuery is - " + userAccessQuery);
						SearchResult<BHGEUserAccessRequestModel> userAccessquerysearchResult = getFlexibleSearchService().search(userAccessQuery);
						final List<BHGEUserAccessRequestModel> results = userAccessquerysearchResult.getResult();
						log.info("userResults of userAccessQuery is - " + results);
						if (CollectionUtils.isNotEmpty(results) && userAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.APPROVED))
						{
							log.info("userResults of userAccessQuery is - " + results);
							if(results.stream().anyMatch(user -> user.getRequestStatus().equals(BHGEAccessRequestStatus.COMPLETED)))
							{
								log.info("UserAccessRequest getting Completed is - " + userAccessRequestModel.getAccessRequestId());
								userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.COMPLETED);
							}
						}
					}
				}
				// FPT Implementation ends
				else
				{
					if (approvalData.getApprovalStatus() != null && approvalData.getApprovalStatus().length() > 0)
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());
						userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));
					}
				}

				if ("3".equals(appIDValue))
				{
					if (approvalData.getApprovalStatus() != null)
					{
						log.info("Processed Status - " + approvalData.getApprovalStatus());
						userAccessRequestModel.setRequestStatus(BHGEAccessRequestStatus.valueOf(approvalData.getApprovalStatus()));
						if (approvalData.getApprovalStatus().equalsIgnoreCase("APPROVED"))
						{
						}
					}
				}

				if (approvalData.getRequesterState() != null && approvalData.getRequesterState().length() > 0)
				{
					log.info("Requester State - " + approvalData.getRequesterState());
					userAccessRequestModel.setRequesterState(approvalData.getRequesterState());
				}
				getModelService().save(userAccessRequestModel);

				try
				{
					final String userEmail = userAccessRequestModel.getRequesterId().getEmail();
					final String sso = userAccessRequestModel.getRequesterId().getSso();
					final String userName = userAccessRequestModel.getRequesterId().getGivenName() + " "
							+ userAccessRequestModel.getRequesterId().getFamilyName();
					final String csrDbList = userAccessRequestModel.getApproverDetails().getEmailDistribList();
					final String processedBy = userAccessRequestModel.getProcessedBy().getGivenName() + " "
							+ userAccessRequestModel.getProcessedBy().getFamilyName();
					final String reason = approvalData.getComments();
					log.info("Request Data - " + sso + " | " + userEmail + " | " + userName + " | " + csrDbList);

					if (approvalData.getApprovalStatus().equalsIgnoreCase("REJECTED"))
					{
						log.info("Reject Mail Processing.");
						log.info("Reason-" + reason);
						if (userAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
								.getApplicationId() == 1)
						{
							getEmailService().mannualWorkflowEmail(CSR_APPLICATIONACCESS_REJECT, userEmail, userName, sso, processedBy,
									reason, csrDbList);
						}
						else if (userAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
								.getApplicationId() == 2)
						{
							getEmailService().mannualWorkflowEmail(CSR_IQM_APPLICATIONACCESS_REJECT, userEmail, userName, sso,
									processedBy, reason, csrDbList);
						}
						/* FPT Implementation */
						else if (userAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
								.getApplicationId() == 4)
						{
							getEmailService().mannualWorkflowEmail(CSR_FPT_APPLICATIONACCESS_REJECT, userEmail, userName, sso,
									processedBy, reason, csrDbList);
						}
						/* FPT Implementation Ends */
						/*
						 * getEmailService().mannualWorkflowEmail(CSR_APPLICATIONACCESS_REJECT, userEmail, userName, sso, processedBy,
						 * reason);
						 */
						if (userAccessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo()
								.getApplicationId() == 5)
						{
							getEmailService().mannualWorkflowEmail(CSR_OFS_APPLICATIONACCESS_REJECT, userEmail, userName, sso, processedBy,
									reason, csrDbList);
						}
					}

					//Enabling the search restrictions
					getSearchRestrictionService().enableSearchRestrictions();
				}
				catch (final Exception exc)
				{
					log.error("Error in Email functionality.");
					exc.printStackTrace();
				}
			}
			else
			{
				log.warn(
						"MSG1203:Error finding the Access Request. Ask Ops Team to check why Access Request is not accessible to update.");
				sapResponse = new BHGERegisterResponse();
				sapResponse.setUserMessage("Could not process Approval request. Please connect with Ops team for further help.");
			}
			if(!userAccessRequestModel.getRequestStatus().equals(BHGEAccessRequestStatus.COMPLETED))
			{
				sapResponse.setUpdatesuccessflag("Details have been successfully updated");
			}
		}
		catch (final Exception exc)
		{

			log.error("MSG1201:Error in Manual Approval Process. Request CSR team to connect with Ops Support Team.");
			sapResponse = new BHGERegisterResponse();
			exc.printStackTrace();
			sapResponse.setUserMessage("Could not process Approval request. Please connect with Ops team for further help.");
		}
		return sapResponse;
	}

	public void authorizeApproverAccess(final String uid, final String requestAccessId) throws BhgeRegisterException
	{
		log.info("Inside dao - authorizeApproverAccess");
		final List<ManualApprovalData> mList = new ArrayList<>();

		FlexibleSearchQuery fQuery = null;
		String userSSO = getUserSso(uid);
		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(userSSO);

		for (int i = 0; i < accessRequestData.size(); i++)
		{
			if (accessRequestData.get(i).getRequestStatus() != null)
			{
				log.info("Application Id---"+ accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId());
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
				{
					fQuery = new FlexibleSearchQuery(FPT_AUTHORIZE_WORKITEM);
					log.info("fquery---"+ fQuery );
				}
				else
				{
					fQuery = new FlexibleSearchQuery(AUTHORIZE_WORKITEM);
					log.info("fquery---"+ fQuery );
				}
			}
		}
		fQuery.addQueryParameter(PARAM_UID_VALUE, uid);
		fQuery.addQueryParameter(PARAM_ACCESS_REQID, requestAccessId);
		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGEUserAccessRequestModel> results = searchResult.getResult();
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();
		if (results != null && results.size() == 0)
		{
			throw new BhgeRegisterException("Unauthorized Access Rejected.");
		}
	}

	/**
	 * @param regieterCustomerModel
	 */
	private BHGERegisterResponse processSalesArea(final BHGERegieterCustomerModel regieterCustomerModel)
	{

		final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
		BHGERegisterRequest customerDetails;
		if (regieterCustomerModel != null && regieterCustomerModel.getApproverCustomerDetails() != null
				&& !regieterCustomerModel.getApproverCustomerDetails().isEmpty())
		{
			final Collection<String> accountList = regieterCustomerModel.getApproverCustomerDetails();
			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
			for (int ict = 0; ict < accountArray.length; ict++)
			{
				if (accountArray[ict] != null && accountArray[ict].length() > 0 && regieterCustomerModel.getProductLine() != null)
				{
					final String accountLink = accountArray[ict];
					String custNumber = accountLink.substring(0, accountLink.indexOf("-")).trim();
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails = new BHGERegisterRequest();
					customerDetails.setCustomerNumber(custNumber);
					registerRequestList.add(customerDetails);
				}
				else if(accountArray[ict] != null && accountArray[ict].length() > 0 && regieterCustomerModel.getProductLine() == null) {
					final String accountLink = accountArray[ict];
					String custNumber = accountLink.substring(0, accountLink.indexOf("-")).trim();
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails = new BHGERegisterRequest();
					customerDetails.setCustomerNumber(custNumber);
					customerDetails.setSrcSystem("OFS");
					registerRequestList.add(customerDetails);
				}
				/*if (accountArray[ict] != null && accountArray[ict].length() > 0)
				{
					final String accountLink = accountArray[ict];
					String custNumber = accountLink.substring(0, accountLink.indexOf("-"));
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails = new BHGERegisterRequest();
					customerDetails.setCustomerNumber(custNumber);
					registerRequestList.add(customerDetails);
				}*/

			}
		}
		return getBhgeregistermncecommapplicationService().executeSAPSalesArea(registerRequestList);
	}



	/* FPT Register changes start */
	/**
	 * @param regieterFptCustomerModel
	 */
	private BHGERegisterResponse processFptSalesArea(final BHGERegieterCustomerModel regieterCustomerModel)
	{
		final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
		BHGERegisterRequest customerDetails;
		if (regieterCustomerModel != null && regieterCustomerModel.getApproverCustomerDetails() != null
				&& !regieterCustomerModel.getApproverCustomerDetails().isEmpty())
		{
			final Collection<String> accountList = regieterCustomerModel.getApproverCustomerDetails();
			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
			for (int ict = 0; ict < accountArray.length; ict++)
			{
				if (accountArray[ict] != null && accountArray[ict].length() > 0)
				{
					final String accountLink = accountArray[ict];
					String custNumber = accountLink.substring(0, accountLink.indexOf("-"));
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails = new BHGERegisterRequest();
					customerDetails.setFptCustomerAccNumber(custNumber);
					customerDetails.setSrcSystem(Config.getParameter("com.sap.reg.src.system"));
					customerDetails.setUserEvent(Config.getParameter("com.sap.reg.user.event"));
					registerRequestList.add(customerDetails);
				}
			}
		}
		return getBhgeregistermncecommapplicationService().executeSAPLookup(registerRequestList, fptStore);
	}
	private BHGERegisterResponse processFptSAPStorage(final BHGERegieterCustomerModel regieterCustomerModel)
	{
		final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
		BHGERegisterRequest customerDetails;
		BHGERegisterResponse finalSapResponse = new BHGERegisterResponse();
		final List<BHGERegisterRuleData> ruleDataList = new ArrayList<>();

		if (regieterCustomerModel != null && regieterCustomerModel.getApproverCustomerDetails() != null
				&& !regieterCustomerModel.getApproverCustomerDetails().isEmpty())
		{
			final Collection<String> accountList = regieterCustomerModel.getApproverCustomerDetails();
			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
			for (int ict = 0; ict < accountArray.length; ict++)
			{
				if (accountArray[ict] != null && accountArray[ict].length() > 0)
				{
					final String accountLink = accountArray[ict];
					log.info("Customer Number Before = " + accountLink);
					customerDetails = new BHGERegisterRequest();
					customerDetails.setEmail(regieterCustomerModel.getEmail());
					customerDetails.setUserId(regieterCustomerModel.getSso());
					customerDetails.setFirstName(regieterCustomerModel.getGivenName());
					customerDetails.setLastName(regieterCustomerModel.getFamilyName());
					log.info("Customer Number After = " + accountLink.substring(0, accountLink.indexOf("-")));
					String custNumber = accountLink.substring(0, accountLink.indexOf("-"));
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails.setFptCustomerAccNumber(custNumber);
					customerDetails.setSrcSystem(Config.getParameter("com.sap.reg.src.system"));
					customerDetails.setUserEvent(Config.getParameter("com.sap.reg.user.event"));
					customerDetails.setInsertFlag("I");

					registerRequestList.add(customerDetails);
				}
			}
		}
		for(BHGERegisterRequest regReqDetails : registerRequestList)
		{
			final List<BHGERegisterRequest> registerRequestDetailList = Arrays.asList(regReqDetails);
			BHGERegisterResponse sapResponse = getBhgeregistermncecommapplicationService().executeSAPLookup(registerRequestDetailList, fptStore);
			if(CollectionUtils.isNotEmpty(sapResponse.getRuleMessageList()))
			{
				ruleDataList.addAll(sapResponse.getRuleMessageList());
			}
		}
		finalSapResponse.setRuleMessageList(ruleDataList);
		return finalSapResponse;
		//return getBhgeregistermncecommapplicationService().executeSAPLookup(registerRequestList, fptStore);
	}

	/* FPT Register changes end */
	/**
	 * @param regieterCustomerModel
	 */
	private BHGERegisterResponse processSAPStorage(final BHGERegieterCustomerModel regieterCustomerModel)
	{
		final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
		BHGERegisterRequest customerDetails;
		if (regieterCustomerModel != null && regieterCustomerModel.getApproverCustomerDetails() != null
				&& !regieterCustomerModel.getApproverCustomerDetails().isEmpty())
		{
			final Collection<String> accountList = regieterCustomerModel.getApproverCustomerDetails();
			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
			for (int ict = 0; ict < accountArray.length; ict++)
			{
				if (accountArray[ict] != null && accountArray[ict].length() > 0 && regieterCustomerModel.getProductLine() != null)
				{
					final String accountLink = accountArray[ict];
					log.info("Customer Number Before = " + accountLink);
					customerDetails = new BHGERegisterRequest();
					customerDetails.setEmail(regieterCustomerModel.getEmail());
					customerDetails.setUserId(regieterCustomerModel.getSso());
					customerDetails.setFirstName(regieterCustomerModel.getGivenName());
					customerDetails.setLastName(regieterCustomerModel.getFamilyName());
					log.info("Customer Number After = " + accountLink.substring(0, accountLink.indexOf("-")));
					String custNumber = accountLink.substring(0, accountLink.indexOf("-"));
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails.setCustomerNumber(custNumber);
					customerDetails.setInsertFlag("I");
					customerDetails.setSrcSystem("DS");
					registerRequestList.add(customerDetails);
				}
				else  {
					final String accountLink = accountArray[ict];
					log.info("OFS Customer Number Before = " + accountLink);
					customerDetails = new BHGERegisterRequest();
					customerDetails.setEmail(regieterCustomerModel.getEmail());
					customerDetails.setUserId(regieterCustomerModel.getSso());
					customerDetails.setFirstName(regieterCustomerModel.getGivenName());
					customerDetails.setLastName(regieterCustomerModel.getFamilyName());
					log.info("OFS Customer Number After = " + accountLink.substring(0, accountLink.indexOf("-")));
					String custNumber = accountLink.substring(0, accountLink.indexOf("-"));
					custNumber = ("0000000000" + custNumber).substring(custNumber.length());
					customerDetails.setCustomerNumber(custNumber);
					customerDetails.setInsertFlag("I");
					customerDetails.setSrcSystem("OFS");
					registerRequestList.add(customerDetails);
				}
			}
		}
		final BHGERegisterResponse sapCustomerResponse = getBhgeregistermncecommapplicationService()
				.executeSAPLookup(registerRequestList);
		if (!sapCustomerResponse.getRuleMessageList().isEmpty() && sapCustomerResponse.getRuleMessageList().stream()
				.anyMatch(obj -> (ERROR_RESULT.equalsIgnoreCase(obj.getRuleStatus()))))
		{
			log.info("BHGEManualApprovalDao SAPInsertCallFail");
			log.info("BHGEManualApprovalDao RuleMessageList during failure" + sapCustomerResponse.getRuleMessageList());
			sapCustomerResponse.setErrorMessage("ERROR-2001:Error in SAP Insert Call.");
		}
		else
		{
			log.info("BHGEManualApprovalDao SAPInsertCallSuccess");
			log.info("BHGEManualApprovalDao RuleMessageList during success" + sapCustomerResponse.getRuleMessageList());
		}
		return sapCustomerResponse;
	}

	public StatusCountBean getStatusCount(final List<ManualApprovalData> countlist)
	{
		final StatusCountBean sbean = new StatusCountBean();
		int onholdcount = 0;
		int rejectedcount = 0;
		int accessgrantedcount = 0;
		int inprogresscount = 0;
		int completedcount = 0;
		for (final ManualApprovalData data : countlist)
		{
			if (data.getApprovalStatus().equalsIgnoreCase(BHGEAccessRequestStatus.PENDING_APPROVAL.getCode()))
			{
				inprogresscount++;

			}
			if (data.getApprovalStatus().equalsIgnoreCase(BHGEAccessRequestStatus.APPROVED.getCode()))
			{
				accessgrantedcount++;

			}
			if (data.getApprovalStatus().equalsIgnoreCase(BHGEAccessRequestStatus.ONHOLD.getCode()))
			{
				onholdcount++;

			}
			if (data.getApprovalStatus().equalsIgnoreCase(BHGEAccessRequestStatus.REJECTED.getCode()))
			{
				rejectedcount++;

			}
			if (data.getApprovalStatus().equalsIgnoreCase(BHGEAccessRequestStatus.COMPLETED.getCode()))
			{
				completedcount++;

			}
		}
		sbean.setPendingApprovalCount(inprogresscount);
		sbean.setApprovedCount(accessgrantedcount);
		sbean.setOnHoldCount(onholdcount);
		sbean.setRejectedCount(rejectedcount);
		sbean.setCompletedCount(completedcount);
		return sbean;
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

	/**
	 * @return the bhgeManualApprovalConverter
	 */
	public Converter<BHGEUserAccessRequestModel, ManualApprovalData> getBhgeManualApprovalConverter()
	{
		return bhgeManualApprovalConverter;
	}

	/**
	 * @param bhgeManualApprovalConverter
	 *           the bhgeManualApprovalConverter to set
	 */
	public void setBhgeManualApprovalConverter(
			final Converter<BHGEUserAccessRequestModel, ManualApprovalData> bhgeManualApprovalConverter)
	{
		this.bhgeManualApprovalConverter = bhgeManualApprovalConverter;
	}

	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	/**
	 * @return the userService
	 */
	public UserService getUserService()
	{
		return userService;
	}

	/**
	 * @param userService
	 *           the userService to set
	 */
	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	/**
	 * @return the bhgeregistermncecommapplicationService
	 */
	public BhgeregistermncecommapplicationService getBhgeregistermncecommapplicationService()
	{
		return bhgeregistermncecommapplicationService;
	}

	/**
	 * @param bhgeregistermncecommapplicationService
	 *           the bhgeregistermncecommapplicationService to set
	 */
	public void setBhgeregistermncecommapplicationService(
			final BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService)
	{
		this.bhgeregistermncecommapplicationService = bhgeregistermncecommapplicationService;
	}

	/**
	 * @return the registerDao
	 */
	public RegisterUserDao getRegisterDao()
	{
		return registerDao;
	}

	/**
	 * @param registerDao
	 *           the registerDao to set
	 */
	public void setRegisterDao(final RegisterUserDao registerDao)
	{
		this.registerDao = registerDao;
	}

	/**
	 * @return the b2bUnitService
	 */
	public B2BUnitService<B2BUnitModel, UserModel> getB2bUnitService()
	{
		return b2bUnitService;
	}

	/**
	 * @param b2bUnitService
	 *           the b2bUnitService to set
	 */
	public void setB2bUnitService(final B2BUnitService<B2BUnitModel, UserModel> b2bUnitService)
	{
		this.b2bUnitService = b2bUnitService;
	}

	/**
	 * @return the applicationConnectorService
	 */
	public ApplicationConnectorService getApplicationConnectorService()
	{
		return applicationConnectorService;
	}

	/**
	 * @param applicationConnectorService
	 *           the applicationConnectorService to set
	 */
	public void setApplicationConnectorService(final ApplicationConnectorService applicationConnectorService)
	{
		this.applicationConnectorService = applicationConnectorService;
	}

	@Override
	public BHGERegisterKeyValueDataModel fetchManualCsrDetails(final String uid, final String attributeId)
	{
		// XXX Auto-generated method stub
		BHGERegisterKeyValueDataModel fetchCSRGroupID = null;

		log.info("Inside dao - fetching Current Csr approver group details");
		final List<ManualApprovalData> mList = new ArrayList<>();
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(CSR_APPROVER_GROUP_NAME);
		fQuery.addQueryParameter(ATTRIBUTE_ID, attributeId);
		fQuery.addQueryParameter(PARAM_UID, uid);
		log.info("fetching Current Csr approver group details ---" + fQuery.getQuery());
		final SearchResult<BHGERegisterKeyValueDataModel> searchResult = getFlexibleSearchService().search(fQuery);

		if (null != searchResult && searchResult.getCount() > 0 && searchResult.getResult() != null
				&& searchResult.getResult().get(0) != null)
		{
			fetchCSRGroupID = searchResult.getResult().get(0);
		}
		return fetchCSRGroupID;
	}

	@Override
	public BHGEUserAccessRequestModel fetchUserAcessRequest(final String requestAccessId)
	{
		BHGEUserAccessRequestModel userRequest = null;
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_WORKLIST_DETAILS);
		fQuery.addQueryParameter(PARAM_ACCESS_REQID, requestAccessId);
		//Disabling the search restrictions
		getSearchRestrictionService().disableSearchRestrictions();
		final SearchResult<BHGEUserAccessRequestModel> searchResult = getFlexibleSearchService().search(fQuery);
		//Enabling the search restrictions
		getSearchRestrictionService().enableSearchRestrictions();
		if (null != searchResult && searchResult.getCount() > 0 && searchResult.getResult() != null
				&& searchResult.getResult().get(0) != null)
		{
			userRequest = searchResult.getResult().get(0);
		}
		return userRequest;
	}

	@Override
	public BHGERegieterCustomerModel getRegisterCustomer(final String userId)
	{
		return sessionService.executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				BHGERegieterCustomerModel userModel = null;
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery("select {pk} from {BHGERegieterCustomer} where lower({sso}) = lower(?inputSsoId)");
				fQuery.addQueryParameter("inputSsoId", userId);
				final SearchResult<BHGERegieterCustomerModel> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null) {
					userModel= querysearchResult.getResult().get(0);
					log.info("getCSRUser method if part:- " + userModel);
					return userModel;
				}
				return  null;
			}
		}, getUserService().getAdminUser());
	}

	private BHGERegieterCustomerModel getRegisterCustomerForSSO(final String userId)
	{
		return sessionService.executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public Object execute()
			{
				BHGERegieterCustomerModel userModel = null;
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery("select {pk} from {BHGERegieterCustomer} where lower({uid}) = lower(?uid)");
				fQuery.addQueryParameter("uid", userId);
				final SearchResult<BHGERegieterCustomerModel> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null) {
					userModel= querysearchResult.getResult().get(0);
					log.info("getCSRUser method if part:- " + userModel);
					return userModel;
				}
				return  null;
			}
		}, getUserService().getAdminUser());
	}


	public SearchRestrictionService getSearchRestrictionService() {
		return searchRestrictionService;
	}

	public void setSearchRestrictionService(SearchRestrictionService searchRestrictionService) {
		this.searchRestrictionService = searchRestrictionService;
	}
}