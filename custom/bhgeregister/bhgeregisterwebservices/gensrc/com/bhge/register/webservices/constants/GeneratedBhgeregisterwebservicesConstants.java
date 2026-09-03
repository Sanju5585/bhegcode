/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.constants;

/**
 * @deprecated since ages - use constants in Model classes instead
 */
@Deprecated(since = "ages", forRemoval = false)
@SuppressWarnings({"unused","cast"})
public class GeneratedBhgeregisterwebservicesConstants
{
	public static final String EXTENSIONNAME = "bhgeregisterwebservices";
	public static class TC
	{
		public static final String ADDRESSTYPE = "AddressType".intern();
		public static final String BHGEACCESSREQUESTSOURCE = "BHGEAccessRequestSource".intern();
		public static final String BHGEACCESSREQUESTSTATUS = "BHGEAccessRequestStatus".intern();
		public static final String BHGEACCOUNTDATA = "BHGEAccountData".intern();
		public static final String BHGEAPPACCESSLEVEL = "BHGEAppAccessLevel".intern();
		public static final String BHGEAPPACCESSRULES = "BHGEAppAccessRules".intern();
		public static final String BHGEAPPLICATIONDETAILS = "BHGEApplicationDetails".intern();
		public static final String BHGEAPPROVALDETAILS = "BHGEApprovalDetails".intern();
		public static final String BHGEINQUIRYEMAIL = "BHGEInquiryEmail".intern();
		public static final String BHGEMNCECOMMMATRIX = "BHGEMnCEcommMatrix".intern();
		public static final String BHGEREGIETERCUSTOMER = "BHGERegieterCustomer".intern();
		public static final String BHGEREGISTERKEYVALUEDATA = "BHGERegisterKeyValueData".intern();
		public static final String BHGESAPRULESTATUS = "BHGESAPRuleStatus".intern();
		public static final String BHGEUSERACCESSREQUEST = "BHGEUserAccessRequest".intern();
		public static final String BHGEUSERACCESSRULES = "BHGEUserAccessRules".intern();
		public static final String DETAILNUMBER = "DetailNumber".intern();
	}
	public static class Attributes
	{
		// no constants defined.
	}
	public static class Enumerations
	{
		public static class AddressType
		{
			public static final String BRANCH_OFFICE = "BRANCH_OFFICE".intern();
			public static final String MANUFACTURING_FACILITY = "MANUFACTURING_FACILITY".intern();
			public static final String SERVICE_SHOPS = "SERVICE_SHOPS".intern();
		}
		public static class BHGEAccessRequestSource
		{
			public static final String REGISTER_MICROSITE = "REGISTER_MICROSITE".intern();
		}
		public static class BHGEAccessRequestStatus
		{
			public static final String PENDING_ACTIVATION = "PENDING_ACTIVATION".intern();
			public static final String ERROR_OUT = "ERROR_OUT".intern();
			public static final String PENDING_APPROVAL = "PENDING_APPROVAL".intern();
			public static final String AUTO_APPROVED = "AUTO_APPROVED".intern();
			public static final String APPROVED = "APPROVED".intern();
			public static final String REJECTED = "REJECTED".intern();
			public static final String ONHOLD = "ONHOLD".intern();
			public static final String DEACTIVATED = "DEACTIVATED".intern();
			public static final String COMPLETED = "COMPLETED".intern();
			public static final String CANCELLED = "CANCELLED".intern();
		}
		public static class BHGESAPRuleStatus
		{
			public static final String SUCCESS = "SUCCESS".intern();
			public static final String FAILURE = "FAILURE".intern();
		}
		public static class DetailNumber
		{
			public static final String SERIAL_NUMBER = "SERIAL_NUMBER".intern();
			public static final String PO_NUMBER = "PO_NUMBER".intern();
			public static final String INVOICE_NUMBER = "INVOICE_NUMBER".intern();
			public static final String DUNS_BREAD_SHEET_NUMBER = "DUNS_BREAD_SHEET_NUMBER".intern();
		}
	}
	public static class Relations
	{
		public static final String BHGEACCOUNT2CUSTOMERRELATION = "BHGEAccount2CustomerRelation".intern();
		public static final String BHGEAPPROVER2CUSTOMERRELATION = "BHGEApprover2CustomerRelation".intern();
		public static final String BHGEMANAGER2ACCOUNTRELATION = "BHGEManager2AccountRelation".intern();
		public static final String FPTAPPROVER2USERACESSRELATION = "FPTApprover2UserAcessRelation".intern();
	}
	
	protected GeneratedBhgeregisterwebservicesConstants()
	{
		// private constructor
	}
	
	
}
