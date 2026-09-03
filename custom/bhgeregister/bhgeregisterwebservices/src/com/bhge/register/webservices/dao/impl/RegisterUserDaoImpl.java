/**
 *
 */
package com.bhge.register.webservices.dao.impl;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.search.restriction.SearchRestrictionService;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.*;

import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.collections4.CollectionUtils;
import de.hybris.platform.servicelayer.session.SessionExecutionBody;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.model.BHGEGlobalPropertiesModel;
import com.bhge.core.util.BHGECommonsUtil;

import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.data.AccountLinkingData;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.enums.BHGEAccessRequestStatus;
import com.bhge.register.webservices.model.BHGEAccountDataModel;
import com.bhge.register.webservices.model.BHGEAppAccessRulesModel;
import com.bhge.register.webservices.model.BHGEApplicationDetailsModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.model.BHGEUserAccessRulesModel;
import com.bhgeregister.dto.BHGEApplicationData;


/**
 * Implementation for Register User Dao
 *
 */
public class RegisterUserDaoImpl implements RegisterUserDao
{

	private static Logger log = Logger.getLogger(RegisterUserDaoImpl.class);

	private FlexibleSearchService flexibleSearchService;

	private SearchRestrictionService searchRestrictionService;

	private UserService userService;

	private SessionService sessionService;

	private static final String ACCESS_REQUEST_ID = "accessRequestId";
	private static final String RULE_ID = "ruleId";
	private static final String APPROVER_ID = "approverId";
	private static final String COUNTRY_ATTRIBUTE = "countryAttr";
	private static final String PRODUCT_ATTRIBUTE = "productAtt";
	private static final String SUB_REGION_ATTRIBUTE = "subRegionAttr";
	private static final String REGION_ATTRIBUTE = "regionAttr";
	private static final String ATTRIBUTE_VALUE = "attributeValue";
	private static final String ATTRIBUTE_TYPE = "attributeType";
	private static final String ATTRIBUTE_KEY = "attributeKey";
	private static final String UID = "uid";
	private static final String SEQUENCE_ID = "sequenceId";
	private static final String ACCOUNT_NUMBER = "accountNumber";
	private static final String ATTRIBUTE_ID = "attributeId";
	private static final String COUNTRY = "country";
	private static final String PRODUCT_LINE = "productLine";
	private static final String INPUT_SSO = "inputSsoId";
	private static final String CONSTANT_DIGIT = "constantDigit";
	private static final String REQUEST_PK = "requestPk";
	private static final String APPROVER_ROLE = "approverRole";
	private static final String ACCOUNT_TYPE ="accountType";

	// US8159 : FPT Valv store changes start
	private static final String VS_USER_ROLES = "vsRoles";

	private static final String VS_ROLES_ATTRIBUTE = "roleAttr";

	private static final String VS_LEGAL_ENTITY = "vsLegalEnitity";

	private static final String LEGAL_ENTITY = "legalentity";
	
	private static final String VS_SYSTEMAPPROVAL = "vsSystemApproval";	

	private static final String FPT_PRODUCT_LINE_SUB = "fptProdLineSub";
	
	private static final String ALLOW_ALL_ADDRESS = "allowAllAddress";
	// US8159 : FPT Valv store changes end


	private static final String FETCH_PLACEHOLDER_MATRIX = "select {pk} from {BHGEMnCEcommMatrix} where {regionAttrib}=?regionAttr AND {productlineAttrib}=?productAtt";
	private static final String FETCH_FPT_PLACEHOLDER_MATRIX = "select {pk} from {BHGEMnCEcommMatrix as bm join BHGERegisterKeyValueData as brk on {bm.legalentity}={brk.pk}} where {brk.attributeId}=?legalentity";

	private static final String FETCH_REGISTER_USER = "select {pk} from {BHGERegieterCustomer} where lower({sso}) = lower(?inputSsoId)";
	private static final String FETCH_USER_ACCESS_REQUEST = "select {pk} from {BHGEUserAccessRequest} where {accessRequestId} = ?accessRequestId";
	private static final String FETCH_APP_ACCESS_RULES = "select {pk} from {BHGEAppAccessRules} where {appAccessRuleId} = ?ruleId";
	private static final String FETCH_SYSTEM_APPROVAL = "select {pk} from {BHGEApprovalDetails} where {approverID} = ?approverId";
	/* Anish POST */
	private static final String FETCH_APPROVAL = "select {pk} from {BHGEApprovalDetails} where {approverID} = ?approverId";
	/* Anish POST */
	//ofs
	private static final String OFS_FETCH_COUNTRY_DATA = "select {pk} from {BHGEMnCEcommMatrix} where {countryAttrib} = ?countryAttr";
	private static final String FETCH_OFSPRODUCTLINE = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeValue}) = lower(?attributeValue)";
	//ofs
	private static final String FETCH_COUNTRY_DATA = "select {pk} from {BHGEMnCEcommMatrix} where {countryAttrib} = ?countryAttr and {productLineAttrib} =?productAtt";
	private static final String FETCH_SUB_REGION_DATA = "select {pk} from {BHGEMnCEcommMatrix} where {subregionAttrib} = ?subRegionAttr and {productLineAttrib} =?productAtt";
	private static final String FETCH_REGION_DATA = "select {pk} from {BHGEMnCEcommMatrix} where {regionAttrib} = ?regionAttr and {productLineAttrib} = ?productAtt";

	private static final String FETCH_KEYVALUE_DATA_FORVALUE = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeValue}) = lower(?attributeValue) and lower({attributeType}) = lower(?attributeType)";

	private static final String FETCH_KEYVALUE_DATA_ISO = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeValue}) = lower(?attributeValue)";

	private static final String FETCH_KEYVALUE_DATA_FORKEY = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey) and lower({attributeType}) = lower(?attributeType)";

	private static final String FETCH_PRODUCTLINE = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey)";

	private static final String FETCH_NEWATTR_LIST = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) in (?attributeKey)";
	private static final String FETCH_PLACEHOLER_REGION = "select {pk} from {BHGERegisterKeyValueData} where {attributeId} = ?attributeId";

	private static final String FETCH_APPLICATION_LIST = "select {PK} from {BHGEApplicationDetails}";

	private static final String FETCH_COUNTRY_LIST = "select {PK} from {BHGERegisterKeyValueData} where lower({attributeType}) = lower(?country) and lower({riskClassification}) != 'sanctioned' order by {attributeValue}";

	private static final String FETCH_PRODUCT_LIST = "select {PK} from {BHGERegisterKeyValueData} where lower({attributeType}) = lower(?productLine) and {activestatus}=1";

	private static final String FETCH_PARENT_KEYVALUE_DATA_FORVALUE = "select {parentAttrib} from {BHGERegisterKeyValueData} where lower({attributeValue}) = lower(?attributeValue)";
	private static final String FETCH_PARENT_KEYVALUE_DATA_FORKEY = "select {parentAttrib} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey)";
	private static final String FETCH_REGISTER_CUSTOMER = "select {pk} from {BHGERegieterCustomer} where lower({uid}) = lower(?uid)";
	private static final String FETCH_USER_ACCESSS_REQUEST = "select {pk} from {BHGEUserAccessRequest} where {accessRequestId} = ?sequenceId";
	private static final String FETCH_ACCOUNT_DATA = "select {pk} from {BHGEAccountData} where {accountNumber} = ?accountNumber";
	private static final String ACTIVATE_REGISTER_USER = "select {pk} from {BHGERegieterCustomer} where lower({sso}) = lower(?inputUserName)";
	private static final String FETCH_B2bUnits_GeEdegCustomer = "select {pk} from {GEEdgeCustomer} where lower({uid})=lower(?inputSsoId)";

	private static final String FETCH_ORDER_TRACKING = "SELECT {USR.PK} from {BHGERegieterCustomer AS C JOIN BHGEUserAccessRequest AS USR ON {C.PK} = {USR.requesterId}} WHERE lower({C.SSO})=lower(?inputSsoId)";

	private static final String FETCH_USER_ACCESS = "SELECT {USR.PK} from {BHGERegieterCustomer AS C \r\n"
			+ "                 JOIN BHGEUserAccessRequest AS USR ON {C.PK} = {USR.requesterId}\r\n"
			+ "                 JOIN BHGEApprovalDetails AS AD ON {USR.approverDetails}={AD.PK}\r\n"
			+ "                 JOIN BHGEAppAccessLevel AS AL ON {AD.appAccessLevel}={AL.PK}} \r\n"
			+ "                 WHERE lower({C.SSO})=lower(?inputSsoId)";

	private static final String FETCH_USER_ACCESS_RULES = "select {PK} from {BHGEUserAccessRules} where {userAccessRequest}=?requestPk";

	private static final String FETCH_MNC_USER = "select {pk} from {GEEdgeCustomer} where lower({uid})=lower(?inputSsoId)";

	private static final String FETCH_IQM_APPROVAL = "select {AD.PK} from {BHGEApprovalDetails AS AD JOIN BHGEAppAccessLevel AS AL ON {AD.approverID}={AL.appAccessLevelId}} WHERE {AL.appAccessLevelName}=?approverRole";

	private static final String FETCH_DAM_APPROVAL = "select {PK} from {BHGEApprovalDetails} where {approverID}='32001'";
	private static final String FETCH_IQM_PARENT_KEYVALUE_DATA_FORKEY = "select {parentAttrib} from {BHGERegisterKeyValueData} where {attributeType}='IQMCOUNTRY' AND  lower({attributeValue}) = lower(?attributeValue)";

	private static final String FETCH_APPREQUEST_LIST = "select {pk} from {BHGEUserAccessRequest} where {requesterId} in ({{select {pk} from {BHGERegieterCustomer} where {sso} = ?inputSsoId}}) order by {creationtime} desc";


	// US8159: FPT Valv store changes start
	private static final String FETCH_USER_ROLES_FPT = "select {PK} from {BHGERegisterKeyValueData} where lower({attributeType}) = lower(?vsRoles) order by {attributeKey}";

	private static final String FETCH_LEGAL_ENTITIES_FPT = "select {PK} from {BHGERegisterKeyValueData} where lower({attributeType}) = lower(?vsLegalEnitity) order by {attributeKey}";

	private static final String FETCH_FPT_PRODUCT_LINE_LIST = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey) order by {attributeKey};";

	private static final String FETCH_FPT_LEGAL_ENTITIES_LIST = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey) order by {attributeKey};";

	private static final String FETCH_COUNTRY_DATA_FOR_FPT = "select {pk} from {BHGEMnCEcommMatrix} where {countryAttrib} = ?countryAttr and {productLineAttrib} =?productAtt and {csrApproverValue} in ({{select {pk} from {BHGEApprovalDetails as ad JOIN  BHGEAppAccessLevel as al ON {ad.appaccesslevel}={al.pk}} where {al.appAccessLevelDetails} = ?roleAttr}})";

	private static final String FETCH_LEGALENTITY_DATA_FOR_FPT = "select {pk} from {BHGEMnCEcommMatrix as bm join BHGERegisterKeyValueData as brk on {bm.legalentity}={brk.pk}} where {bm.csrApproverValue} in ({{select {pk} from {BHGEApprovalDetails as ad JOIN  BHGEAppAccessLevel as al ON {ad.appaccesslevel}={al.pk}} where {al.appAccessLevelDetails} = ?roleAttr}}) and {brk.attributeId}=?legalentity";

	private static final String FETCH_LEGALENTITY_DATA_FOR_FPT_ENTITYONLY = "select {pk} from {BHGEMnCEcommMatrix as bm join BHGERegisterKeyValueData as brk on {bm.legalentity}={brk.pk}} where {brk.attributeId}=?legalentity";

	private static final String FETCH_FPT_SYSTEMAPPROVAL = "select {pk} from {BHGEMnCEcommMatrix as bm join BHGEApprovalDetails as bad on {bm.csrApproverValue}={bad.pk}} where {bad.approvergroupname}=?vsSystemApproval";

	private static final String FETCH_APPROVER_DATA_FOR_FPT_WITH_CUST_NO = "select {pk} from {BHGEMnCEcommMatrix} where {productLineAttrib} =?productAtt and {csrApproverValue} in ({{select {pk} from {BHGEApprovalDetails as ad JOIN  BHGEAppAccessLevel as al ON {ad.appaccesslevel}={al.pk}} where {al.appAccessLevelDetails} = ?roleAttr}})";

	private static final String FETCH_LEGAL_APPROVER_DATA_FOR_FPT_WITH_CUST_NO = "select {pk} from {BHGEMnCEcommMatrix as bm join BHGERegisterKeyValueData as brk on {bm.legalentity}={brk.pk}} where {bm.csrApproverValue} in ({{select {pk} from {BHGEApprovalDetails as ad JOIN  BHGEAppAccessLevel as al ON {ad.appaccesslevel}={al.pk}} where {al.appAccessLevelDetails} = ?roleAttr}}) and {brk.attributeId}=?legalentity";

	private static final String FETCH_SUB_REGION_DATA_FOR_FPT = "select {pk} from {BHGEMnCEcommMatrix} where {subregionAttrib} = ?subRegionAttr and {productLineAttrib} =?productAtt and {csrApproverValue} in ({{select {pk} from {BHGEApprovalDetails as ad JOIN  BHGEAppAccessLevel as al ON {ad.appaccesslevel}={al.pk}} where {al.appAccessLevelDetails} = ?roleAttr}})";

	private static final String FETCH_REGION_DATA_FOR_FPT = "select {pk} from {BHGEMnCEcommMatrix} where {regionAttrib} = ?regionAttr and {productLineAttrib} = ?productAtt and {csrApproverValue} in ({{select {pk} from {BHGEApprovalDetails as ad JOIN  BHGEAppAccessLevel as al ON {ad.appaccesslevel}={al.pk}} where {al.appAccessLevelDetails} = ?roleAttr}})";

	private static final String FETCH_FPTROLE_DETAILS = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey)";

	private static final String PRODUCT_LINE_DETAILS = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey)";

	private static final String FETCH_FPTSALES_DETAILS = "select {pk} from {BHGERegisterKeyValueData} where {attributeId} = ?attributeId";
	
	private static final String FETCH_FPTSALES_ORG = "select {pk} from {BHGERegisterKeyValueData} where {attributeType}=?attributeType";
	
	private static final String FETCH_CUSTOMER = "select {pk} from {BHGERegieterCustomer} where lower({sso})=lower(?sso)";
	
	private static final String FETCH_MATRIX_DATA = "select {pk} from {BHGEMnCEcommMatrix} where {productLineAttrib} =?productAtt";
	
	private static final String FETCH_USER_ACCESS_CUSTOMER="select {ur.pk} from {BHGEUserAccessRequest as ur join BHGERegieterCustomer as cu on {cu.pk}={ur.requesterId}} where {ur.requesterId}=?pk";
	
	// US8159: FPT Valv store changes end

	private static final String FETCH_ACCOUNT_TYPES_OFS = "select {PK} from {BHGERegisterKeyValueData} where lower({attributeType}) = lower(?accountType) and {activestatus} = 1 order by {attributeKey}";

	private static final String FETCH_OFS_ACCOUNT_TYPE = "select {pk} from {BHGERegisterKeyValueData} where lower({attributeKey}) = lower(?attributeKey)";

	private static final String GEEDGE_CUSTOMER_QUERY = """
        SELECT {b2b.PK}
        FROM {B2bCustomer AS b2b}
        WHERE {b2b.UID}=?userId
        """;

	private static final String BHGE_REGISTER_CUSTOMER = """
            SELECT {b2b.pk}
            FROM {B2BCustomer as b2b}
            WHERE {b2b.sso}=?userId
            """;

	@Override
	public BHGEUserAccessRequestModel getUserAccessRequest(final String accessRequestId)
	{
		BHGEUserAccessRequestModel userAccessRequestModel = null;
		if (null != accessRequestId)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESS_REQUEST);
			fQuery.addQueryParameter(ACCESS_REQUEST_ID, accessRequestId);
			log.info("Inside getUserAccessRequest - " + accessRequestId);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				userAccessRequestModel = (BHGEUserAccessRequestModel) querysearchResult.getResult().get(0);
			}
		}
		return userAccessRequestModel;
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

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#getAppAccessRules(java.lang.String)
	 */
	@Override
	public BHGEAppAccessRulesModel getAppAccessRules(final String ruleId)
	{
		BHGEAppAccessRulesModel userAccessRuleModel = null;
		if (null != ruleId)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APP_ACCESS_RULES);
			fQuery.addQueryParameter(RULE_ID, ruleId);
			log.info("Inside RegisterUserDaoImpl: getAppAccessRules for rule ID >> " + ruleId);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				userAccessRuleModel = (BHGEAppAccessRulesModel) querysearchResult.getResult().get(0);
			}
		}
		return userAccessRuleModel;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#getSystemApproverDetails()
	 */
	@Override
	public BHGEApprovalDetailsModel getSystemApproverDetails()
	{

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_SYSTEM_APPROVAL);
		fQuery.addQueryParameter(APPROVER_ID, "1");
		log.info("Inside RegisterUserDaoImpl: getSystemApproverDetails");
		BHGEApprovalDetailsModel systemApprovalModel = null;
		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			systemApprovalModel = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
		}
		return systemApprovalModel;
	}
	//ofs changes
	@Override
	public BHGEApprovalDetailsModel getOFSApproverDetails()
	{

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_SYSTEM_APPROVAL);
		fQuery.addQueryParameter(APPROVER_ID, "5");
		log.info("Inside RegisterUserDaoImpl: getOFSApproverDetails");
		BHGEApprovalDetailsModel systemApprovalModel = null;
		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			systemApprovalModel = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
		}
		return systemApprovalModel;
	}
	//ofs changes

	/* Anish POST */
	@Override
	public BHGEApprovalDetailsModel getApproverDetails(final String approver_id)
	{
		BHGEApprovalDetailsModel aprovalModel = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APPROVAL);
			fQuery.addQueryParameter(APPROVER_ID, approver_id);
			log.info("Inside RegisterUserDaoImpl: getApproverDetails");
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				aprovalModel = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}

		return aprovalModel;
	}
	/* Anish POST */


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#getSystemApproverDetails()
	 */
	@Override
	public BHGEApprovalDetailsModel getCSRApproverDetails()
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_SYSTEM_APPROVAL);
		fQuery.addQueryParameter(APPROVER_ID, "19");
		log.info("Inside RegisterUserDaoImpl: getCSRApproverDetails>> ");
		BHGEApprovalDetailsModel systemApprovalModel = null;
		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			systemApprovalModel = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
		}

		return systemApprovalModel;
	}


	@Override
	public BHGEApprovalDetailsModel getIQMApproverDetails(final String role)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_IQM_APPROVAL);
		fQuery.addQueryParameter(APPROVER_ROLE, role);
		log.info("Inside RegisterUserDaoImpl: getIQMApproverDetails>> ");
		BHGEApprovalDetailsModel systemApprovalModel = null;
		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			systemApprovalModel = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
		}

		return systemApprovalModel;
	}


	@Override
	public BHGEApprovalDetailsModel getDAMApproverDetails()
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_DAM_APPROVAL);
		log.info("Inside RegisterUserDaoImpl: getDAMApproverDetails>> ");
		BHGEApprovalDetailsModel systemApprovalModel = null;
		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			systemApprovalModel = (BHGEApprovalDetailsModel) querysearchResult.getResult().get(0);
		}

		return systemApprovalModel;
	}




	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchManualApprover()
	 */
	@Override
	public BHGEMnCEcommMatrixModel fetchManualApprover(final String param, final String productLine, final String flag)
	{
		//String manualApprovalQuery = "";
		FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
		final BHGERegisterKeyValueDataModel productData = fetchKeyValueData(productLine);
		final BHGERegisterKeyValueDataModel countryData = fetchKeyValueDataCountry(param, flag);


		BHGEMnCEcommMatrixModel matrixModel = null;

		if (null != productData && null != countryData)
		{
			log.info("Check Final Values  - " + productData.getAttributeValue() + " & Geo - " + countryData.getAttributeValue()
					+ " & Flag - " + flag);

			if ("COUNTRY".equalsIgnoreCase(flag))
			{
				manualApprovalQuery = new FlexibleSearchQuery(FETCH_COUNTRY_DATA);
				manualApprovalQuery.addQueryParameter(COUNTRY_ATTRIBUTE, countryData.getPk().toString());
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());
			}
			else if ("SUBREGION".equalsIgnoreCase(flag))
			{
				manualApprovalQuery = new FlexibleSearchQuery(FETCH_SUB_REGION_DATA);
				manualApprovalQuery.addQueryParameter(SUB_REGION_ATTRIBUTE, countryData.getPk().toString());
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());
			}
			else if ("REGION".equalsIgnoreCase(flag))
			{
				manualApprovalQuery = new FlexibleSearchQuery(FETCH_REGION_DATA);
				manualApprovalQuery.addQueryParameter(REGION_ATTRIBUTE, countryData.getPk().toString());
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());
			}

			log.info("Inside RegisterUserDaoImpl: fetchManualApprover>> ");

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}

		}

		return matrixModel;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchManualApproverAttributeKey()
	 */
	@Override
	public BHGEMnCEcommMatrixModel fetchManualApproverAttributeKey(final String param, final String productLine, final String flag)
	{

		final BHGERegisterKeyValueDataModel productData = fetchKeyValueData(productLine);
		final BHGERegisterKeyValueDataModel countryData = fetchKeyValueDataCountryAttributeKey(param, flag);
		BHGEMnCEcommMatrixModel matrixModel = null;
		FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");

		if (null != productData && null != countryData)
		{
			if ("COUNTRY".equalsIgnoreCase(flag))
			{

				manualApprovalQuery = new FlexibleSearchQuery(FETCH_COUNTRY_DATA);
				manualApprovalQuery.addQueryParameter(COUNTRY_ATTRIBUTE, countryData.getPk().toString());
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());
			}
			else if ("SUBREGION".equalsIgnoreCase(flag))
			{

				manualApprovalQuery = new FlexibleSearchQuery(FETCH_SUB_REGION_DATA);
				manualApprovalQuery.addQueryParameter(SUB_REGION_ATTRIBUTE, countryData.getPk().toString());
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());
			}
			else if ("REGION".equalsIgnoreCase(flag))
			{

				manualApprovalQuery = new FlexibleSearchQuery(FETCH_REGION_DATA);
				manualApprovalQuery.addQueryParameter(REGION_ATTRIBUTE, countryData.getPk().toString());
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());
			}

			log.info("Inside RegisterUserDaoImpl: fetchManualApprover>> ");
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		}

		return matrixModel;
	}
	
	@Override
	public BHGEMnCEcommMatrixModel fetchManualApproverforProductline(final String param, final String productLine)
	{
		//String manualApprovalQuery = "";
		FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
		final BHGERegisterKeyValueDataModel productData = fetchKeyValueData(productLine);
		
		BHGEMnCEcommMatrixModel matrixModel = null;

		if (null != productData)
		{
			log.info("Check Final Values  - " + productData.getAttributeValue());
			
				manualApprovalQuery = new FlexibleSearchQuery(FETCH_MATRIX_DATA);
				manualApprovalQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productData.getPk().toString());			

			log.info("Inside RegisterUserDaoImpl: fetchManualApproverforProductline>> ");

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}

		}

		return matrixModel;
	}
	//ofs
		public BHGEMnCEcommMatrixModel fetchManualApproverforCountry(final String country)
		{
			//String manualApprovalQuery = "";
			FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
			final BHGERegisterKeyValueDataModel countryData = fetchKeyValueDataOFS(country);
			


			BHGEMnCEcommMatrixModel matrixModel = null;

			
			manualApprovalQuery = new FlexibleSearchQuery(OFS_FETCH_COUNTRY_DATA);
			manualApprovalQuery.addQueryParameter(COUNTRY_ATTRIBUTE, countryData.getPk().toString());
			
			

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
			&& querysearchResult.getResult().get(0) != null)
			{
			matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}

			

			return matrixModel;
		}

	@Override
	public List<BHGERegisterKeyValueDataModel> fetchAccountType(final String appName) {
		log.info("Inside fetching Account Types for OFS");

		final List<BHGERegisterKeyValueDataModel> accountTypeList = new ArrayList<>();

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_ACCOUNT_TYPES_OFS);
		fQuery.addQueryParameter(ACCOUNT_TYPE, appName);

		log.info("accountTypeListQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				accountTypeList.add((BHGERegisterKeyValueDataModel) eachResult);
			});

		}
		log.info("accountTypeList: " + accountTypeList);

		return accountTypeList;
	}

	@Override
	public BHGERegisterKeyValueDataModel fetchOfsAccountType(String accountType) {
		log.info("Inside Ofs Account Type");

		BHGERegisterKeyValueDataModel fetchAccountTypeModel = null;

		if (null != accountType)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_OFS_ACCOUNT_TYPE);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, accountType);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchAccountTypeModel = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return fetchAccountTypeModel;
	}
	//ofs
	/**
	 * @param param
	 * @param flag
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchKeyValueDataCountry(final String param, final String type)
	{
		log.info("Inside area by id");

		BHGERegisterKeyValueDataModel registerKeyValueDataCountry = null;

		if (null != param)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_KEYVALUE_DATA_FORVALUE);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, param);
			fQuery.addQueryParameter(ATTRIBUTE_TYPE, type);

			//final String fetchKeyValueQuery = "select {pk} from {BHGERegisterKeyValueData} where {attributeValue} = '" + param + "'";

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				registerKeyValueDataCountry = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return registerKeyValueDataCountry;
	}


	/**
	 * @param param
	 * @param type
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchKeyValueDataCountryAttributeKey(final String param, final String type)
	{
		log.info("Inside area by id");

		BHGERegisterKeyValueDataModel registerKeyValueDataCountry = null;

		if (null != param)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_KEYVALUE_DATA_FORKEY);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, param);
			fQuery.addQueryParameter(ATTRIBUTE_TYPE, type);

			//final String fetchKeyValueQuery = "select {pk} from {BHGERegisterKeyValueData} where {attributeKey} = '" + param + "'";


			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				registerKeyValueDataCountry = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return registerKeyValueDataCountry;
	}



	/**
	 * @param country
	 *
	 */
	private BHGERegisterKeyValueDataModel fetchKeyValueData(final String productLine)
	{
		log.info("Inside fetch product line by id");

		BHGERegisterKeyValueDataModel registerKeyValueDataProductLine = null;

		if (null != productLine)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PRODUCTLINE);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, productLine);

			log.info("fetchKeyValueData: fQuery: " + fQuery);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				registerKeyValueDataProductLine = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		log.info("registerKeyValueDataProductLine: " + registerKeyValueDataProductLine);
		return registerKeyValueDataProductLine;

	}
	
	//ofs
		private BHGERegisterKeyValueDataModel fetchKeyValueDataOFS(final String country)
		{
			log.info("Inside fetch product line by id");

			BHGERegisterKeyValueDataModel registerKeyValueDataCountry = null;

			if (null != country)
			{

				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_OFSPRODUCTLINE);
				fQuery.addQueryParameter(ATTRIBUTE_VALUE, country);

				log.info("fetchKeyValueData: fQuery: " + fQuery);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					registerKeyValueDataCountry = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
				}
			}
			log.info("registerKeyValueDataCountry: " + registerKeyValueDataCountry);
			return registerKeyValueDataCountry;

		}
		//ofs

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchProductLine(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchProductLine(final String productLine)
	{
		log.info("Inside product line data");

		BHGERegisterKeyValueDataModel fetchProductLineModel = null;

		if (null != productLine)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PRODUCTLINE);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, productLine);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchProductLineModel = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return fetchProductLineModel;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchSubRegion(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchSubRegion(final String countryName)
	{
		log.info("Inside fetching sub region from country");

		BHGERegisterKeyValueDataModel subRegion = null;

		if (null != countryName)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORVALUE);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, countryName);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				subRegion = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
				log.info("Check subRegion.getAttributeValue() - " + subRegion.getAttributeValue());
			}
		}

		return subRegion;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchSubRegion(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchSubRegionAttributeKey(final String countryName)
	{
		log.info("Inside fetching sub region from country");

		BHGERegisterKeyValueDataModel subRegion = null;

		if (null != countryName)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORKEY);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, countryName);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				subRegion = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return subRegion;
	}


	/**
	 * @param countryName
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchParentAttrib(final String countryName)
	{
		log.info("Inside fetch Parent Attrib");
		BHGERegisterKeyValueDataModel fetchParentAttrib = null;

		if (null != countryName)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORVALUE);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, countryName);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchParentAttrib = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		return fetchParentAttrib;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchRegion(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchRegion(final String countryName)
	{
		log.info("Inside fetching region from country");

		BHGERegisterKeyValueDataModel region = null;
		final BHGERegisterKeyValueDataModel heirarchy = (null != countryName ? fetchHeirarchy(countryName) : null);

		if (null != heirarchy)
		{

			log.info("Check heirarchy.getAttributeValue() - " + heirarchy.getAttributeValue());

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORVALUE);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, heirarchy.getAttributeValue());

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				region = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
				log.info("Check region.getAttributeValue() - " + region.getAttributeValue());
			}
		}

		return region;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchRegionAttributeKey(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchRegionAttributeKey(final String countryName)
	{
		log.info("Inside fetching region Attribute Key from country");
		BHGERegisterKeyValueDataModel regionKey = null;

		if (null != countryName)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORKEY);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, fetchHeirarchyAttributeKey(countryName).getAttributeValue());
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				regionKey = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return regionKey;
	}


	/**
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchHeirarchy(final String countryName)
	{
		log.info("Inside fetch Heirarchy attrib");
		BHGERegisterKeyValueDataModel fetchHeirarchyAttrib = null;
		if (null != countryName)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORVALUE);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, countryName);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchHeirarchyAttrib = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		return fetchHeirarchyAttrib;

	}



	/**
	 * @return
	 */
	private BHGERegisterKeyValueDataModel fetchHeirarchyAttributeKey(final String countryName)
	{
		log.info("Inside fetch Heirarchy attrib");
		BHGERegisterKeyValueDataModel fetchHeirarchyAttrib = null;

		if (null != countryName)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PARENT_KEYVALUE_DATA_FORKEY);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, countryName);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchHeirarchyAttrib = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		return fetchHeirarchyAttrib;
	}

	@Override
	public BHGERegieterCustomerModel getRequestorData(final String uid)
	{
		BHGERegieterCustomerModel fetchRegisterCustomerModel = null;
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
		return fetchRegisterCustomerModel;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservice.dao.RegisterUserDao#fetchPreviousUserAccessRequest(java.lang.String)
	 */
	@Override
	public BHGEUserAccessRequestModel fetchPreviousUserAccessRequest(final Long sequenceId)
	{
		BHGEUserAccessRequestModel fetchPreviousUserAccessModel = null;
		if (null != sequenceId)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESSS_REQUEST);
			fQuery.addQueryParameter(SEQUENCE_ID, sequenceId);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchPreviousUserAccessModel = (BHGEUserAccessRequestModel) querysearchResult.getResult().get(0);
			}
		}
		return fetchPreviousUserAccessModel;
	}

	@Override
	public BHGEAccountDataModel getAccountData(final String accountNumber)
	{
		BHGEAccountDataModel fetchAccountData = null;

		if (null != accountNumber)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_ACCOUNT_DATA);
			fQuery.addQueryParameter(ACCOUNT_NUMBER, accountNumber);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchAccountData = (BHGEAccountDataModel) querysearchResult.getResult().get(0);
			}
		}

		return fetchAccountData;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchIsoCode(java.lang.String)
	 */
	@Override
	public String fetchIsoCode(final String countryName)
	{
		BHGERegisterKeyValueDataModel isoCodeModel = null;
		if (null != countryName)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_KEYVALUE_DATA_ISO);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, countryName);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				isoCodeModel = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return (null != isoCodeModel ? isoCodeModel.getAttributeKey() : null);
	}

	@Override
	public BHGERegisterKeyValueDataModel fetchIqmParentkey(final String countryName)
	{
		BHGERegisterKeyValueDataModel isoCodeModel = null;
		if (null != countryName)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_IQM_PARENT_KEYVALUE_DATA_FORKEY);
			fQuery.addQueryParameter(ATTRIBUTE_VALUE, countryName);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				isoCodeModel = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		return isoCodeModel;

	}

	@Override
	public UserModel getUserBySSO(final String inputSsoId)
	{
		UserModel userModel = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_REGISTER_USER);
			fQuery.addQueryParameter("inputSsoId", inputSsoId);
			final ManualApprovalData worklistItem = null;
			final SearchResult<BHGERegieterCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
			final List<BHGERegieterCustomerModel> results = searchResult.getResult();

			if (results != null)
			{
				if (results.iterator().hasNext())
				{
					userModel = results.iterator().next();
				}
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return userModel;
	}

	@Override
	public BHGERegieterCustomerModel validateActivateAccount(final String userName)
	{
		BHGERegieterCustomerModel customerEntry = null;
		try
		{
			getSearchRestrictionService().disableSearchRestrictions();
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(ACTIVATE_REGISTER_USER);
			fQuery.addQueryParameter("inputUserName", userName);
			final SearchResult<BHGERegieterCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
			final List<BHGERegieterCustomerModel> results = searchResult.getResult();
			if (results != null && results.iterator().hasNext())
			{
				customerEntry = results.iterator().next();
			}
		}
		finally
		{
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return customerEntry;
	}

	@Override
	public boolean checkActivateAccount(final String userName)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(ACTIVATE_REGISTER_USER);
		fQuery.addQueryParameter("inputUserName", userName);
		final SearchResult<BHGERegieterCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGERegieterCustomerModel> results = searchResult.getResult();
		BHGERegieterCustomerModel customerEntry = null;
		if (results != null && results.iterator().hasNext())
		{
			customerEntry = results.iterator().next();
		}
		if (customerEntry != null && customerEntry.getActiveStatus())
		{
			return true;
		}
		return false;
	}

	@Override
	public UserModel getUserBySSODetail(final String inputSsoId)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_REGISTER_USER);
		fQuery.addQueryParameter("inputSsoId", inputSsoId);
		final ManualApprovalData worklistItem = null;
		final SearchResult<BHGERegieterCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGERegieterCustomerModel> results = searchResult.getResult();
		BHGERegieterCustomerModel source = new BHGERegieterCustomerModel();
		if (results != null & results.size() > 0)
		{
			for (final BHGERegieterCustomerModel cuatomer : results)
			{
				source = results.get(0);
			}
		}
		final ManualApprovalData accountLinking = new ManualApprovalData();
		final Collection<String> accountList = source.getApproverCustomerDetails();
		final List<AccountLinkingData> accountLinkData = new ArrayList<AccountLinkingData>();
		if (accountList != null && !accountList.isEmpty())
		{
			accountLinking.setAccountLinking(new ArrayList<AccountLinkingData>());
			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
			for (int iCtr = 0; iCtr < accountArray.length; iCtr++)
			{
				final String[] accountLinkEntry = accountArray[iCtr].split("-");
				for (final AccountLinkingData accountLinkDataNew : accountLinkData)
				{
					accountLinkDataNew.setCustomerNumber(accountLinkEntry[0]);
					accountLinkDataNew.setSalesareaList(new ArrayList<String>());
					for (int jCtr = 1; jCtr < accountLinkEntry.length; jCtr++)
					{
						accountLinkDataNew.getSalesareaList().add(accountLinkEntry[jCtr]);
					}
				}
			}

			if (accountLinkData != null)
			{
				final List<String> finalSalesAreaMapping = splitFunctionForAccountData(accountLinkData);
				final List<GEEdgeCustomerModel> result = checkUserInGeEdgeCustomer(inputSsoId);
				if (results != null)
				{
					updateDefaultb2bUnit(finalSalesAreaMapping);
				}
			}
		}
		return null;
	}

	@Override
	public List<AccountLinkingData> getUserAccounts(final String inputSsoId)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_REGISTER_USER);
		fQuery.addQueryParameter("inputSsoId", inputSsoId);
		final SearchResult<BHGERegieterCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<BHGERegieterCustomerModel> results = searchResult.getResult();
		BHGERegieterCustomerModel sourceModel = null;
		final List<AccountLinkingData> accountLinkData = new ArrayList<AccountLinkingData>();
		if (results != null & results.size() > 0)
		{
			sourceModel = results.get(0);
		}
		if (sourceModel != null && sourceModel.getApproverCustomerDetails() != null
				&& sourceModel.getApproverCustomerDetails().size() > 0)
		{
			final int accountLinkSize = sourceModel.getApproverCustomerDetails().size();
			final String[] accountArray = sourceModel.getApproverCustomerDetails().toArray(new String[accountLinkSize]);

			for (int iCtr = 0; iCtr < accountArray.length; iCtr++)
			{
				final String[] accountLinkEntry = accountArray[iCtr].split("-");
				final AccountLinkingData accountLinkVal = new AccountLinkingData();
				accountLinkVal.setCustomerNumber(accountLinkEntry[0]);
				accountLinkVal.setSalesareaList(new ArrayList<String>());
				for (int jCtr = 1; jCtr < accountLinkEntry.length; jCtr++)
				{
					accountLinkVal.getSalesareaList().add(accountLinkEntry[jCtr]);
				}
				accountLinkData.add(accountLinkVal);
			}
		}
		return accountLinkData;

	}

	/**
	 * @param finalSalesAreaMapping
	 * @param inputSsoId
	 */
	private void updateDefaultb2bUnit(final List<String> finalSalesAreaMapping)
	{
		//
	}

	/**
	 * @param inputSsoId
	 */
	private List<GEEdgeCustomerModel> checkUserInGeEdgeCustomer(final String inputSsoId)
	{
		// XXX Auto-generated method stub
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_B2bUnits_GeEdegCustomer);
		fQuery.addQueryParameter("inputSsoId", inputSsoId);
		final SearchResult<GEEdgeCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
		final List<GEEdgeCustomerModel> results = searchResult.getResult();
		return results;

	}

	/**
	 * @param accountLinkData
	 */
	private List<String> splitFunctionForAccountData(final List<AccountLinkingData> accountLinkDataNew)
	{
		// XXX Auto-generated method stub

		final List<String> salesAreaSplitList = new ArrayList<String>();
		final List<String> finalSalesAreaMapping = new ArrayList<String>();
		for (final AccountLinkingData data : accountLinkDataNew)
		{
			final List<String> salesAreaList = data.getSalesareaList();

			for (int i = 0; i < salesAreaList.size(); i++)
			{
				final String salesAreaMapping = salesAreaList.get(i);
				final String[] parts = salesAreaMapping.split("-");
				final int salesArealength = parts.length;
				for (int j = 0; j < salesArealength; j++)
				{
					final String value = parts[j];
					salesAreaSplitList.add(value);

				}
				final String firstElement = salesAreaSplitList.get(0) + "_";
				String splitElements = null;
				for (int k = 1; k < salesAreaSplitList.size(); k++)
				{
					splitElements = firstElement;
					splitElements += salesAreaSplitList.get(k);
					finalSalesAreaMapping.add(splitElements);
				}

			}
		}
		return finalSalesAreaMapping;

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#getPlaceHolderApprover()
	 */
	@Override
	public BHGEMnCEcommMatrixModel getPlaceHolderMatrix(final String productLine)
	{
		BHGEMnCEcommMatrixModel placeHolderMatrix = null;

		final BHGERegisterKeyValueDataModel productModel = fetchProductLine(productLine);
		final BHGERegisterKeyValueDataModel placeHolderRegion = fetchPlaceHolderRegion();

		if (null != productModel && null != placeHolderRegion)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PLACEHOLDER_MATRIX);
			fQuery.addQueryParameter(REGION_ATTRIBUTE, placeHolderRegion.getPk().toString());
			fQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productModel.getPk().toString());

			log.info("Inside RegisterUserDaoImpl: getPlaceHolderMatrix>> ");
			log.info("Inside RegisterUserDaoImpl: fQuery>> " + fQuery);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				placeHolderMatrix = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		}
		if (placeHolderMatrix == null || placeHolderMatrix.getCsrApproverValue() == null)
		{
			placeHolderMatrix = new BHGEMnCEcommMatrixModel();
			placeHolderMatrix.setCsrApproverValue(getSystemApproverDetails());
		}

		return placeHolderMatrix;
	}


	public BHGEMnCEcommMatrixModel getFPTPlaceHolderMatrix(final String productLine)
	{
		BHGEMnCEcommMatrixModel placeHolderMatrix = null;
		if (null != productLine)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FPT_PLACEHOLDER_MATRIX);
			fQuery.addQueryParameter(LEGAL_ENTITY, productLine);

			log.info("Inside RegisterUserDaoImpl: getPlaceHolderMatrix>> ");
			log.info("Inside RegisterUserDaoImpl: fQuery>> " + fQuery);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				placeHolderMatrix = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		}
		if (placeHolderMatrix == null || placeHolderMatrix.getCsrApproverValue() == null)
		{
			placeHolderMatrix = new BHGEMnCEcommMatrixModel();
			placeHolderMatrix.setCsrApproverValue(getSystemApproverDetails());
		}

		return placeHolderMatrix;
	}

	/**
	 *
	 */
	private BHGERegisterKeyValueDataModel fetchPlaceHolderRegion()
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PLACEHOLER_REGION);
		fQuery.addQueryParameter(ATTRIBUTE_ID, "0");
		log.info("Inside RegisterUserDaoImpl: fetchPlaceHolderRegion>> ");

		BHGERegisterKeyValueDataModel placeHolderRegion = null;
		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			placeHolderRegion = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
		}

		return placeHolderRegion;

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
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchApplications()
	 */
	@Override
	public List<BHGEApplicationData> fetchApplications(final String userName)
	{
		log.info("Inside fetching Applications");

		final List<BHGEApplicationData> applicationList = new ArrayList<>();

		FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_APPLICATION_LIST);

		log.info("applicationListQuery: " + fQuery);

		SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				final BHGEApplicationData applicationData = new BHGEApplicationData();
				applicationData
						.setApplicationId(Long.toString(((BHGEApplicationDetailsModel) eachResult).getApplicationId().longValue()));
				applicationData.setApplicationName(((BHGEApplicationDetailsModel) eachResult).getApplicationName());
				applicationData.setApplicationDetails(((BHGEApplicationDetailsModel) eachResult).getApplicationDetails());
				applicationData.setApplicationStatus("Not Registered");
				applicationData.setApplicationUrl(((BHGEApplicationDetailsModel) eachResult).getApplicationLink());
				applicationList.add(applicationData);
			});

		}

		if (userName != null && !"".equals(userName))
		{
			fQuery = new FlexibleSearchQuery(FETCH_APPREQUEST_LIST);
			fQuery.addQueryParameter(INPUT_SSO, userName);

			log.info("applicationListQuery: " + fQuery);

			querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null)
			{
				querysearchResult.getResult().forEach(eachResult -> {
					final BHGEUserAccessRequestModel accessRequest = (BHGEUserAccessRequestModel) eachResult;
					if (!"USERMANAGER".equalsIgnoreCase(accessRequest.getApproverDetails().getApproverGroupName()))
					{

						log.info("Req App Data - : " + accessRequest.getApproverDetails().getAppAccessLevel().getApplicationInfo()
								.getApplicationId().toString());

						applicationList.forEach(appValue -> {
							final BHGEApplicationData appData = (BHGEApplicationData) appValue;
							log.info("List App Data - : " + appData.getApplicationId() + " & " + appData.getApplicationStatus());

							final boolean cond1 = appData.getApplicationStatus() == null || "".equals(appData.getApplicationStatus())
									|| "	Not Registered".equals(appData.getApplicationStatus());

							final boolean cond2 = appData.getApplicationId() != null && appData.getApplicationId().equals(accessRequest
									.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId().toString());

							log.info("		Condition 1 - " + cond1);

							log.info("		Condition 2 - " + cond2);

							if ((appData.getApplicationStatus() == null || "".equals(appData.getApplicationStatus())
									|| "Not Registered".equals(appData.getApplicationStatus())) && appData.getApplicationId() != null
									&& appData.getApplicationId().equals(accessRequest.getApproverDetails().getAppAccessLevel()
											.getApplicationInfo().getApplicationId().toString()))
							{
								appData.setApplicationStatus(processStatusValue(accessRequest.getRequestStatus()));
								log.info("		Status - " + processStatusValue(accessRequest.getRequestStatus()));
							}
						});
					}
				});

			}

		}

		log.info("applicationList: " + applicationList);
		List<BHGEApplicationData> finalApplicationList = new ArrayList<BHGEApplicationData>();
		for(BHGEApplicationData application : applicationList)
         {
			try
			{
			       final BHGEGlobalPropertiesModel bhgeGlobalProperty = new BHGEGlobalPropertiesModel();
			       bhgeGlobalProperty.setUid(application.getApplicationId());
			       BHGEGlobalPropertiesModel property = getFlexibleSearchService().getModelByExample(bhgeGlobalProperty);				
			       if(property.getValue().equalsIgnoreCase("true"))
			         {
			    	   finalApplicationList.add(application);
			         }
			}
			catch(ModelNotFoundException e)
			{
				log.error("Error in fetching BHGEApplicationDataList" + e.getMessage());
			}

         }

		return finalApplicationList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchProductLines()
	 */
	@Override
	public List<BHGERegisterKeyValueDataModel> fetchCountry()
	{
		log.info("Inside fetching Country");

		final List<BHGERegisterKeyValueDataModel> countryList = new ArrayList<>();

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_COUNTRY_LIST);
		fQuery.addQueryParameter(COUNTRY, "COUNTRY");

		log.info("countryListQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				countryList.add((BHGERegisterKeyValueDataModel) eachResult);
			});

		}
		log.info("countryList: " + countryList.size());

		return countryList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchProduct()
	 */
	@Override
	public List<BHGERegisterKeyValueDataModel> fetchProduct(final String appName, String productLine)
	{
		log.info("Inside fetching Product");

		final List<BHGERegisterKeyValueDataModel> productList = new ArrayList<>();
		StringBuilder queryString = new StringBuilder(FETCH_PRODUCT_LIST);
		if(StringUtils.isNotBlank(productLine) && appName.equalsIgnoreCase("subproductline") ||  appName.equalsIgnoreCase("dsmarket")){
			queryString.append(" and {refPL}=?PL");
		}
		queryString.append(" order by {attributeKey}");
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(queryString);
		fQuery.addQueryParameter(PRODUCT_LINE, appName);
		if(StringUtils.isNotBlank(productLine) && appName.equalsIgnoreCase("subproductline") ||  appName.equalsIgnoreCase("dsmarket")){
			fQuery.addQueryParameter("PL", productLine);
		}
		log.info("productListQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				productList.add((BHGERegisterKeyValueDataModel) eachResult);
			});

		}
		log.info("productList: " + productList);

		return productList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchOrderTrackingAccess()
	 */
	@Override
	public List<BHGEUserAccessRequestModel> fetchOrderTrackingAccess(final String sso)
	{
		log.info("Inside fetching Order Tracking Access");
		final List<BHGEUserAccessRequestModel> accessList = new ArrayList<>();

		if (null != sso)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_ORDER_TRACKING);
			fQuery.addQueryParameter(INPUT_SSO, sso);

			log.info("orderTrackingListQuery: " + fQuery);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				querysearchResult.getResult().forEach(eachResult -> {
					accessList.add((BHGEUserAccessRequestModel) eachResult);
				});

			}
			log.info("accessList: " + accessList);
		}

		return accessList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchUserAccessRequest(de.hybris.platform.core.PK)
	 */
	@Override
	public BHGEUserAccessRequestModel fetchUserAccessRequest(final String sso)
	{
		log.info("Inside fetch User Access Request");
		BHGEUserAccessRequestModel accessList = new BHGEUserAccessRequestModel();

		if (null != sso)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESS);
			fQuery.addQueryParameter(INPUT_SSO, sso);
			//fQuery.addQueryParameter(CONSTANT_DIGIT, "1");

			log.info("userAccessRequestQuery: " + fQuery);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				accessList = (BHGEUserAccessRequestModel) querysearchResult.getResult().get(0);

			}
			log.info("accessList: " + accessList);
		}

		return accessList;
	}


	@Override
	public List<BHGEUserAccessRequestModel> fetchUserAccessRequestList(String sso)
	{
		log.info("Inside fetch User Access Request");
		final List<BHGEUserAccessRequestModel> accessList = new ArrayList<>();
		final UserModel currentUser = userService.getCurrentUser();
		if(!userService.isAnonymousUser(currentUser)){
			final B2BCustomerModel b2BCustomerModel = (B2BCustomerModel) userService.getCurrentUser();
			if (null != sso) {
				if(b2BCustomerModel instanceof GEEdgeCustomerModel)
				{
					getRegisterCustomer(accessList,userService.getAdminUser(),sso);
				}
				else{
					getRegisterCustomer(accessList,b2BCustomerModel,sso);
				}
			}
		} else {
			getRegisterCustomer(accessList,currentUser,sso);
		}
		return accessList;
	}

	private void getRegisterCustomer(List<BHGEUserAccessRequestModel> accessList, UserModel userModel, String sso)
	{
		getSessionService().executeInLocalView(new SessionExecutionBody()
		{
			@Override
			public void executeWithoutResult()
			{
				final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESS);
				fQuery.addQueryParameter(INPUT_SSO, sso);

				log.info("userAccessRequestQuery: " + fQuery);

				final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
				if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
						&& querysearchResult.getResult().get(0) != null)
				{
					querysearchResult.getResult().forEach(eachResult -> {
						accessList.add((BHGEUserAccessRequestModel) eachResult);
					});

				}
				log.info("accessRuleList: " + accessList);
			}
		}, getUserService().getAdminUser());
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.dao.RegisterUserDao#fetchUserAccessRules(com.bhge.register.webservices.model.
	 * BHGEUserAccessRequestModel)
	 */
	@Override
	public List<BHGEUserAccessRulesModel> fetchUserAccessRules(final BHGEUserAccessRequestModel accessRequestData)
	{
		log.info("Inside fetch User Access Rules");

		final List<BHGEUserAccessRulesModel> accessRuleList = new ArrayList<>();

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ACCESS_RULES);
		fQuery.addQueryParameter(REQUEST_PK, accessRequestData.getPk().toString());

		log.info("orderTrackingListQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				accessRuleList.add((BHGEUserAccessRulesModel) eachResult);
			});

		}
		log.info("accessRuleList: " + accessRuleList);

		return accessRuleList;
	}


	private String processStatusValue(final BHGEAccessRequestStatus systemStatus)
	{
		String displayStatus = "";
		switch (systemStatus)
		{
			case COMPLETED:
				displayStatus = "Access Granted";
				break;
			case PENDING_ACTIVATION:
			case ERROR_OUT:
			case PENDING_APPROVAL:
			case AUTO_APPROVED:
			case APPROVED:
			case ONHOLD:
			case CANCELLED:
				displayStatus = "Access Pending";
				break;
			case DEACTIVATED:
				displayStatus = "Access Disabled";
				break;
			case REJECTED:
				displayStatus = "Access Declined";
				break;
			default:
				displayStatus = "Not Registered";
		}
		return displayStatus;
	}




	@Override
	public boolean checkReactivateAccount(final String userName) {
		try {
			getSearchRestrictionService().disableSearchRestrictions();
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_MNC_USER);
			fQuery.addQueryParameter("inputSsoId", userName);
			final SearchResult<GEEdgeCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
			final List<GEEdgeCustomerModel> results = searchResult.getResult();
			GEEdgeCustomerModel customerEntry = null;
			if (results != null && results.iterator().hasNext()) {
				customerEntry = results.iterator().next();
			}
			if (customerEntry != null && !customerEntry.isLoginDisabled() && customerEntry.getActive()) {
				return true;
			}
		} finally {
			getSearchRestrictionService().enableSearchRestrictions();
		}
		return false;
	}

	@Override
	public GEEdgeCustomerModel validateReactivateAccount(final String userName) {
		GEEdgeCustomerModel customerEntry = null;
		try {
			getSearchRestrictionService().disableSearchRestrictions();
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_MNC_USER);
			fQuery.addQueryParameter("inputSsoId", userName);
			final SearchResult<GEEdgeCustomerModel> searchResult = getFlexibleSearchService().search(fQuery);
			final List<GEEdgeCustomerModel> results = searchResult.getResult();
			if (results != null && results.iterator().hasNext()) {
				customerEntry = results.iterator().next();
			}
		} finally {
			getSearchRestrictionService().enableSearchRestrictions();
		}

		return customerEntry;
	}
	
	@Override
	public BHGEUserAccessRequestModel fetchUserAccessRequestModel(final BHGERegieterCustomerModel registerUser)
	{
		log.info("Inside fetch User Access Request");
		BHGEUserAccessRequestModel accessList = new BHGEUserAccessRequestModel();

		if (null != registerUser)
		{
			final Map<String, Object> params = new HashMap<String, Object>();
			final String queryString = "select {USR.PK} from {BHGEUserAccessRequest AS USR JOIN BHGERegieterCustomer AS C ON {USR.requesterId} = {C.PK} "
					+ "JOIN BHGEApprovalDetails AS AD ON {USR.approverDetails}={AD.PK} JOIN BHGEAppAccessLevel AS AL ON {AD.appAccessLevel}={AL.PK} "
					+ "JOIN BHGEApplicationDetails AS ADT ON {AL.applicationInfo}={ADT.PK}} "
					+ "WHERE {ADT.applicationId}='1' AND {USR.requesterId} = ?registerUser";
			params.put("registerUser", registerUser.getPk());
			final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
			query.addQueryParameters(params);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(query);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				accessList = (BHGEUserAccessRequestModel) querysearchResult.getResult().get(0);

			}
			log.info("accessList: " + accessList);
		}

		return accessList;
	}

	// US8159: FPT Valv store changes start
	@Override
	public List<BHGERegisterKeyValueDataModel> fetchUserRolesFPT(final String appName)
	{
		log.info("Inside fetching User Roles for FPT");

		final List<BHGERegisterKeyValueDataModel> userRoleList = new ArrayList<>();

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_USER_ROLES_FPT);
		fQuery.addQueryParameter(VS_USER_ROLES, appName);

		log.info("userRoleListQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				userRoleList.add((BHGERegisterKeyValueDataModel) eachResult);
			});

		}
		log.info("userRoleList: " + userRoleList);

		return userRoleList;
	}


	@Override
	public List<BHGERegisterKeyValueDataModel> fetchVSLegalEntities(final String appName)
	{
		log.info("Inside fetching Legal Entities for FPT");

		final List<BHGERegisterKeyValueDataModel> legalEntitiesList = new ArrayList<>();

		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_LEGAL_ENTITIES_FPT);
		fQuery.addQueryParameter(VS_LEGAL_ENTITY, appName);

		log.info("VSLegalEntityQuery: " + fQuery);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			querysearchResult.getResult().forEach(eachResult -> {
				legalEntitiesList.add((BHGERegisterKeyValueDataModel) eachResult);
			});

		}
		log.info("LegalEntitiesList: " + legalEntitiesList);

		return legalEntitiesList;
	}

	/*
	 * Considering user selects multiple product lines, we are passing list of product line names
	 */
	@Override
	public List<BHGERegisterKeyValueDataModel> fetchFptProductLine(final List<String> fptProductLine)
	{
		log.info("Inside fetching fpt product lines as list");
		final List<BHGERegisterKeyValueDataModel> productLineList = new ArrayList<>();
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FPT_PRODUCT_LINE_LIST);
		for (final String prodLineSelected : fptProductLine)
		{
			fQuery.addQueryParameter(ATTRIBUTE_KEY, prodLineSelected);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				productLineList.add((BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0));
			}

		}

		log.info("productLineList: " + productLineList);
		return productLineList;
	}

	/*
	 * Considering user selects multiple legal entities, we are passing list of legal entity names
	 */
	@Override
	public List<BHGERegisterKeyValueDataModel> fetchFptLegalEntities(final List<String> legalEntities)
	{
		log.info("Inside fetching fpt legalEntity as list");
		final List<BHGERegisterKeyValueDataModel> legalEntityList = new ArrayList<>();
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FPT_PRODUCT_LINE_LIST);
		for (final String legalEntitySelected : legalEntities)
		{
			fQuery.addQueryParameter(ATTRIBUTE_KEY, legalEntitySelected);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				legalEntityList.add((BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0));
			}

		}

		log.info("legalEntityList: " + legalEntityList);
		return legalEntityList;
	}


	@Override
	public BHGEMnCEcommMatrixModel fetchManualApproverForFpt(final String legalEntities, final String role)
	{
		FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
		BHGEMnCEcommMatrixModel matrixModel = null;

		if (null != role)
		{
			manualApprovalQuery = new FlexibleSearchQuery(FETCH_LEGALENTITY_DATA_FOR_FPT);
			manualApprovalQuery.addQueryParameter(VS_ROLES_ATTRIBUTE, role);
			manualApprovalQuery.addQueryParameter(LEGAL_ENTITY, legalEntities);
		}
		else
		{
			manualApprovalQuery = new FlexibleSearchQuery(FETCH_LEGALENTITY_DATA_FOR_FPT_ENTITYONLY);
			manualApprovalQuery.addQueryParameter(LEGAL_ENTITY, legalEntities);
		}
			log.info("Inside RegisterUserDaoImpl: fetchManualApprover>> ");

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		return matrixModel;
	}
	
	@Override
	public BHGEMnCEcommMatrixModel fetchManualApproverForFpt(final String legalEntities, final BHGERegieterCustomerModel requestor)
	{
		FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
		BHGEMnCEcommMatrixModel matrixModel = null;

		if (null != requestor.getFptRoles() && null != requestor.getFptRoles().getAttributeValue())
		{
			manualApprovalQuery = new FlexibleSearchQuery(FETCH_LEGALENTITY_DATA_FOR_FPT);
			manualApprovalQuery.addQueryParameter(VS_ROLES_ATTRIBUTE, requestor.getFptRoles().getAttributeValue());
			manualApprovalQuery.addQueryParameter(LEGAL_ENTITY, legalEntities);
		}
		else
		{
			manualApprovalQuery = new FlexibleSearchQuery(FETCH_LEGALENTITY_DATA_FOR_FPT_ENTITYONLY);
			manualApprovalQuery.addQueryParameter(LEGAL_ENTITY, legalEntities);
		}
			log.info("Inside RegisterUserDaoImpl: fetchManualApprover>> ");

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		return matrixModel;
	}
	
	@Override
	public BHGEMnCEcommMatrixModel fetchFptSystemApproval()
	{
		    FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
		    BHGEMnCEcommMatrixModel matrixModel = null;
		    manualApprovalQuery = new FlexibleSearchQuery(FETCH_FPT_SYSTEMAPPROVAL);
		    manualApprovalQuery.addQueryParameter(VS_SYSTEMAPPROVAL, "VS_SYSTEM");
			log.info("Inside RegisterUserDaoImpl: VSSystemApproverQuery>> ");

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		return matrixModel;
 
	}

	@Override
	public BHGEMnCEcommMatrixModel fetchManualApproverForFptWitCustNo(final String legalEntities, final String role)
	{
		FlexibleSearchQuery manualApprovalQuery = new FlexibleSearchQuery("");
		BHGEMnCEcommMatrixModel matrixModel = null;
		if (null != role)
		{
			manualApprovalQuery = new FlexibleSearchQuery(FETCH_LEGAL_APPROVER_DATA_FOR_FPT_WITH_CUST_NO);
			manualApprovalQuery.addQueryParameter(LEGAL_ENTITY, legalEntities);
			manualApprovalQuery.addQueryParameter(VS_ROLES_ATTRIBUTE, role);
			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(manualApprovalQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}

		}
		// XXX Auto-generated method stub
		return matrixModel;
	}



	private BHGERegisterKeyValueDataModel fetchKeyValueDataRole(final String role)
	{
		log.info("Inside area by id");

		BHGERegisterKeyValueDataModel registerKeyValueDataRole = null;

		if (null != role)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PRODUCTLINE);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, role);


			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				registerKeyValueDataRole = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return registerKeyValueDataRole;
	}

	@Override
	public BHGERegisterKeyValueDataModel fetchFptRoleDetails(final String fptRole)
	{

		log.info("Inside fpt fetch role" + fptRole);

		BHGERegisterKeyValueDataModel fetchFptRoleModel = null;

		if (null != fptRole)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FPTROLE_DETAILS);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, fptRole);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchFptRoleModel = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return fetchFptRoleModel;
	}

	@Override
	public BHGERegisterKeyValueDataModel fetchFptProdLineDetails(final String prodLine)
	{
		log.info("Inside fetch product line by id " + prodLine);

		BHGERegisterKeyValueDataModel registerKeyValueDataProductLine = null;

		if (null != prodLine)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_PRODUCTLINE);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, prodLine);

			log.info("fetchKeyValueData: fQuery: " + fQuery);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				registerKeyValueDataProductLine = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		log.info("registerKeyValueDataProductLine: " + registerKeyValueDataProductLine);
		return registerKeyValueDataProductLine;

	}

	@Override
	public BHGERegisterKeyValueDataModel fetchFptLegalEntityDetails(final String legalEntity)
	{
		BHGERegisterKeyValueDataModel legalEntityDetails = null;
		if (null != legalEntity)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(PRODUCT_LINE_DETAILS);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, legalEntity);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				legalEntityDetails = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return legalEntityDetails;

	}

	@Override
	public BHGERegisterKeyValueDataModel fetchFptSalesDetails(final String legalSales)
	{

		log.info("Inside fpt fetch role");

		BHGERegisterKeyValueDataModel fetchFptRoleModel = null;

		if (null != legalSales)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FPTSALES_DETAILS);
			fQuery.addQueryParameter(ATTRIBUTE_ID, legalSales);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchFptRoleModel = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}

		return fetchFptRoleModel;
	}
	
	@Override
	public List<BHGERegisterKeyValueDataModel> fetchFptSalesOrg(final String attributeType)
	{
		log.info("Inside fpt Sales Org");
		final List<BHGERegisterKeyValueDataModel> fetchFptSalesOrg = new ArrayList<>();;
		BHGERegisterKeyValueDataModel fptSales = null;

		if (null != attributeType)
		{

			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_FPTSALES_ORG);
			fQuery.addQueryParameter(ATTRIBUTE_TYPE, attributeType);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				for (int i = 0; i < querysearchResult.getCount(); i++)
				{
					fptSales = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(i);
					fetchFptSalesOrg.add(fptSales);
				}
			}
		}
		return fetchFptSalesOrg;
	}
	
	@Override
	public BHGERegieterCustomerModel customerDetails(final String sso)
	{
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_CUSTOMER);
		fQuery.addQueryParameter("sso", sso);
		final SearchResult<BHGERegieterCustomerModel> result = getFlexibleSearchService().search(fQuery);
		if(result!=null && result.getCount() > 0 && result.getResult()!=null && result.getResult().get(0)!=null)
		{
		return result.getResult().get(0);
		}
		else
		{
		return null;
		}
	}
	
	@Override
	public String allowAllAddress()
	{
		return BHGECommonsUtil.getValueFromBHGEGlobalProperties(ALLOW_ALL_ADDRESS, getFlexibleSearchService());
	}

	
	
	// US8159: FPT Valv store changes end

	@Override
	public List<BHGERegisterKeyValueDataModel> fetchNewAttrList(final List<String> newAttrList)
	{
		log.info("Inside fetchNewAttrListModel");
		List<BHGERegisterKeyValueDataModel> fetchNewAttrListModel = null;
		if (null != newAttrList)
		{
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_NEWATTR_LIST);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, newAttrList);
			final SearchResult<BHGERegisterKeyValueDataModel> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				fetchNewAttrListModel = querysearchResult.getResult();
			}
		}
		return fetchNewAttrListModel;
	}

	@Override
	public List<B2BCustomerModel> getUserByIdOrSSO(String userId) {
		log.info("Inside getUserByIdOrSSO: "+userId);
		List<B2BCustomerModel> customers = new LinkedList<>();
		FlexibleSearchQuery query = new FlexibleSearchQuery(GEEDGE_CUSTOMER_QUERY);
		query.addQueryParameter("userId", userId);
		SearchResult<B2BCustomerModel> results = flexibleSearchService.search(query);
		if(CollectionUtils.isNotEmpty(results.getResult())){
			customers.addAll(results.getResult());
		}
		query = new FlexibleSearchQuery(BHGE_REGISTER_CUSTOMER);
		query.addQueryParameter("userId", userId);
		results = flexibleSearchService.search(query);
		if(CollectionUtils.isNotEmpty(results.getResult())){
			customers.addAll(results.getResult());
		}
		return customers;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public SessionService getSessionService() {
		return sessionService;
	}

	public void setSessionService(SessionService sessionService) {
		this.sessionService = sessionService;
	}
}
