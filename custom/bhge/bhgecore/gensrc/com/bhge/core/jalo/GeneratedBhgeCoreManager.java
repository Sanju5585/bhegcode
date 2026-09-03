/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.core.jalo;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.jalo.BHCountryDataRetention;
import com.bhge.core.jalo.BHGEAnonymousUserCatalog;
import com.bhge.core.jalo.BHGEAreaOfInterest;
import com.bhge.core.jalo.BHGECartProfile;
import com.bhge.core.jalo.BHGECategorytoSalesOrg;
import com.bhge.core.jalo.BHGEConfigurationInstance;
import com.bhge.core.jalo.BHGEConfigurationPart;
import com.bhge.core.jalo.BHGEContactUs;
import com.bhge.core.jalo.BHGEContactUsJobRole;
import com.bhge.core.jalo.BHGECoupon;
import com.bhge.core.jalo.BHGECurrency;
import com.bhge.core.jalo.BHGECurrencyFormat;
import com.bhge.core.jalo.BHGEEquipment;
import com.bhge.core.jalo.BHGEGlobalProperties;
import com.bhge.core.jalo.BHGEHaveAQuestionProcess;
import com.bhge.core.jalo.BHGEKBInformation;
import com.bhge.core.jalo.BHGENotification;
import com.bhge.core.jalo.BHGEProductApprovalStatusCronJob;
import com.bhge.core.jalo.BHGEProductInfo;
import com.bhge.core.jalo.BHGERMAPlantDetails;
import com.bhge.core.jalo.BHGERequest;
import com.bhge.core.jalo.BHGERfcCallError;
import com.bhge.core.jalo.BHGERmaEquipSerialNumber;
import com.bhge.core.jalo.BHGEServiceLocalProduct;
import com.bhge.core.jalo.BHGEServiceSite;
import com.bhge.core.jalo.BHGEServiceType;
import com.bhge.core.jalo.BHGEVariantFactor;
import com.bhge.core.jalo.BHStaticContactUs;
import com.bhge.core.jalo.Chemicals;
import com.bhge.core.jalo.ContactUsEmailProcess;
import com.bhge.core.jalo.ContactusSettings;
import com.bhge.core.jalo.CustomerCareContactInfo;
import com.bhge.core.jalo.DSChemistryData;
import com.bhge.core.jalo.DSFilmData;
import com.bhge.core.jalo.DSGuestCalibrationFormRecords;
import com.bhge.core.jalo.DSNotification;
import com.bhge.core.jalo.DSWaygateBatchLookup;
import com.bhge.core.jalo.DsNotificationCronJob;
import com.bhge.core.jalo.ExcludeProductCharacterisctic;
import com.bhge.core.jalo.FaqComponent;
import com.bhge.core.jalo.GECoupon;
import com.bhge.core.jalo.GEEdgeCacheCleanerJob;
import com.bhge.core.jalo.GEEdgeContactUsRegion;
import com.bhge.core.jalo.GEEdgeContactus;
import com.bhge.core.jalo.GEEdgeOrderTypeMapping;
import com.bhge.core.jalo.GEEdgeProductLineMapping;
import com.bhge.core.jalo.GEEdgeRfcCallError;
import com.bhge.core.jalo.GEEdgeSupportTeam;
import com.bhge.core.jalo.GEEdgeSystemAlert;
import com.bhge.core.jalo.List.ListOfPortals;
import com.bhge.core.jalo.MultipleCatalogsSyncCronJob;
import com.bhge.core.jalo.OfflineOrder;
import com.bhge.core.jalo.OfflineOrderEntry;
import com.bhge.core.jalo.OldCartNotificationEmailProcess;
import com.bhge.core.jalo.OrderNotification;
import com.bhge.core.jalo.OrderNotificationEmailProcess;
import com.bhge.core.jalo.PaymentMerchantInfo;
import com.bhge.core.jalo.PrincipalRelation;
import com.bhge.core.jalo.ProductFailureMode;
import com.bhge.core.jalo.ProductLineTable;
import com.bhge.core.jalo.RMAEndUserAddress;
import com.bhge.core.jalo.ResourceComponent;
import com.bhge.core.jalo.RestrictedSalesArea;
import com.bhge.core.jalo.ReturnPO;
import com.bhge.core.jalo.SalesState;
import com.bhge.core.jalo.TrainingDocument;
import com.bhge.core.jalo.WeeklyOrderCronJob;
import com.hybris.ge.edge.core.jalo.components.DSProductsCarouselComponent;
import com.hybris.ge.edge.core.jalo.components.GEEdgeCategoryFeatureComponent;
import com.hybris.ge.edge.core.jalo.components.GEEdgeCategoryProductsComponent;
import com.hybris.ge.edge.core.jalo.components.GEEdgeContactHelpDropDownComponent;
import com.hybris.ge.edge.core.jalo.components.GEEdgeNavigationBarComponent;
import com.hybris.ge.edge.core.jalo.model.GEEdgeSAPPlantLogSysOrg;
import com.hybris.ge.edge.core.jalo.type.BHGEAdditionalInfo;
import com.hybris.ge.edge.core.jalo.type.BHGEChemicalDetails;
import com.hybris.ge.edge.core.jalo.type.BHGECreditCardPaymnentinfo;
import com.hybris.ge.edge.core.jalo.type.BHGECurrencyCardThreshold;
import com.hybris.ge.edge.core.jalo.type.BHGECustomerClassification;
import com.hybris.ge.edge.core.jalo.type.BHGEHazardousInfo;
import com.hybris.ge.edge.core.jalo.type.BHGESavedCreditcard;
import com.hybris.ge.edge.core.jalo.type.BHGEServiceOfferings;
import com.hybris.ge.edge.core.jalo.type.FeatureSet;
import com.hybris.ge.edge.core.jalo.type.FiservMerchantId;
import com.hybris.ge.edge.core.jalo.type.GEEdgeAvailabilityDetail;
import com.hybris.ge.edge.core.jalo.type.GEEdgeLegacyID;
import com.hybris.ge.edge.core.jalo.type.GEEdgeServiceProvider;
import com.hybris.ge.edge.core.jalo.type.GEEdgeStockDetail;
import com.hybris.ge.edge.core.jalo.type.GESalesAreaPlantFeatureMapping;
import com.hybris.ge.edge.core.jalo.type.Incoterm;
import com.hybris.ge.edge.core.jalo.type.Paymentterm;
import com.hybris.ge.edge.core.jalo.type.VCComponentPrice;
import com.hybris.ge.edge.core.jalo.type.restrictions.CMSRegionRestriction;
import com.ofs.core.jalo.CheckInvoicePaymentCronJob;
import com.ofs.core.jalo.OFSInvoice;
import de.hybris.platform.acceleratorservices.constants.AcceleratorServicesConstants;
import de.hybris.platform.acceleratorservices.jalo.email.EmailAttachment;
import de.hybris.platform.b2b.jalo.B2BCustomer;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.basecommerce.jalo.site.BaseSite;
import de.hybris.platform.catalog.jalo.ProductReference;
import de.hybris.platform.catalog.jalo.classification.ClassificationClass;
import de.hybris.platform.category.jalo.Category;
import de.hybris.platform.cms2.jalo.contents.components.WhatsNewWidgetComponent;
import de.hybris.platform.commerceservices.jalo.OrgUnit;
import de.hybris.platform.commerceservices.jalo.process.BHGEQuoteProcess;
import de.hybris.platform.commerceservices.jalo.process.BHGESalesAreaData;
import de.hybris.platform.commerceservices.jalo.process.GEEdgeFeedbackProcess;
import de.hybris.platform.commerceservices.jalo.process.GEEdgeShippingAddressProcess;
import de.hybris.platform.commerceservices.jalo.process.GEEdgeSubmitContactProcess;
import de.hybris.platform.commerceservices.jalo.process.GuestUserCalportalDataSheetPDFEmailProcess;
import de.hybris.platform.constants.CoreConstants;
import de.hybris.platform.core.model.GEEdgeCustomer;
import de.hybris.platform.core.model.GEEdgeProduct;
import de.hybris.platform.cronjob.jalo.CronJob;
import de.hybris.platform.deliveryzone.jalo.Zone;
import de.hybris.platform.europe1.jalo.PDTRow;
import de.hybris.platform.europe1.jalo.PriceRow;
import de.hybris.platform.hmc.jalo.UserProfile;
import de.hybris.platform.jalo.GenericItem;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.JaloInvalidParameterException;
import de.hybris.platform.jalo.JaloSystemException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.c2l.C2LItem;
import de.hybris.platform.jalo.c2l.C2LManager;
import de.hybris.platform.jalo.c2l.Country;
import de.hybris.platform.jalo.c2l.Currency;
import de.hybris.platform.jalo.c2l.Language;
import de.hybris.platform.jalo.c2l.LocalizableItem;
import de.hybris.platform.jalo.c2l.Region;
import de.hybris.platform.jalo.enumeration.EnumerationValue;
import de.hybris.platform.jalo.extension.Extension;
import de.hybris.platform.jalo.link.Link;
import de.hybris.platform.jalo.media.AbstractMedia;
import de.hybris.platform.jalo.media.Media;
import de.hybris.platform.jalo.order.AbstractOrder;
import de.hybris.platform.jalo.order.AbstractOrderEntry;
import de.hybris.platform.jalo.order.Cart;
import de.hybris.platform.jalo.order.Quote;
import de.hybris.platform.jalo.product.Product;
import de.hybris.platform.jalo.security.Principal;
import de.hybris.platform.jalo.type.CollectionType;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.JaloGenericCreationException;
import de.hybris.platform.jalo.user.Address;
import de.hybris.platform.jalo.user.Customer;
import de.hybris.platform.jalo.user.Employee;
import de.hybris.platform.jalo.user.User;
import de.hybris.platform.order.jalo.AbstractOrderEntryProductInfo;
import de.hybris.platform.ordersplitting.jalo.Warehouse;
import de.hybris.platform.processengine.jalo.BusinessProcess;
import de.hybris.platform.sap.core.configuration.jalo.SAPConfiguration;
import de.hybris.platform.sap.productconfig.services.jalo.CPQOrderEntryProductInfo;
import de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundAddress;
import de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundOrder;
import de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundOrderItem;
import de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundPartnerRole;
import de.hybris.platform.sap.sapmodel.jalo.SAPSalesOrganization;
import de.hybris.platform.store.BaseStore;
import de.hybris.platform.util.OneToManyHandler;
import de.hybris.platform.util.Utilities;
import de.hybris.platform.webservicescommons.jalo.OAuthClientDetails;
import de.hybris.platform.webservicescommons.jalo.OpenIDClientDetails;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Generated class for type <code>BhgeCoreManager</code>.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBhgeCoreManager extends Extension
{
	/** Relation ordering override parameter constants for User2DefaultReturnSitesRelation from ((bhgecore))*/
	protected static String USER2DEFAULTRETURNSITESRELATION_SRC_ORDERED = "relation.User2DefaultReturnSitesRelation.source.ordered";
	protected static String USER2DEFAULTRETURNSITESRELATION_TGT_ORDERED = "relation.User2DefaultReturnSitesRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for User2DefaultReturnSitesRelation from ((bhgecore))*/
	protected static String USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED = "relation.User2DefaultReturnSitesRelation.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n USERPROFILES's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<UserProfile> USER2USERPROFILERELATIONUSERPROFILESHANDLER = new OneToManyHandler<UserProfile>(
	CoreConstants.TC.USERPROFILE,
	false,
	"User",
	null,
	false,
	true,
	CollectionType.LIST
	);
	/**
	* {@link OneToManyHandler} for handling 1:n GUESTSHIPTOCOUNTRIES's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<Country> COUNTRYTOGUESTSHIPTOCOUNTRIESMAPPINGGUESTSHIPTOCOUNTRIESHANDLER = new OneToManyHandler<Country>(
	CoreConstants.TC.COUNTRY,
	false,
	"country",
	null,
	false,
	true,
	CollectionType.SET
	);
	/** Relation ordering override parameter constants for Product2FailureReason from ((bhgecore))*/
	protected static String PRODUCT2FAILUREREASON_SRC_ORDERED = "relation.Product2FailureReason.source.ordered";
	protected static String PRODUCT2FAILUREREASON_TGT_ORDERED = "relation.Product2FailureReason.target.ordered";
	/** Relation disable markmodifed parameter constants for Product2FailureReason from ((bhgecore))*/
	protected static String PRODUCT2FAILUREREASON_MARKMODIFIED = "relation.Product2FailureReason.markmodified";
	/** Relation ordering override parameter constants for B2BUnit2CategoryRelation from ((bhgecore))*/
	protected static String B2BUNIT2CATEGORYRELATION_SRC_ORDERED = "relation.B2BUnit2CategoryRelation.source.ordered";
	protected static String B2BUNIT2CATEGORYRELATION_TGT_ORDERED = "relation.B2BUnit2CategoryRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for B2BUnit2CategoryRelation from ((bhgecore))*/
	protected static String B2BUNIT2CATEGORYRELATION_MARKMODIFIED = "relation.B2BUnit2CategoryRelation.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n CUSTOMERCARECONTACTINFO's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<CustomerCareContactInfo> GEEDGESALESAREACUSTOMERCAREMAPPINGCUSTOMERCARECONTACTINFOHANDLER = new OneToManyHandler<CustomerCareContactInfo>(
	BhgeCoreConstants.TC.CUSTOMERCARECONTACTINFO,
	false,
	"sapSalesArea",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	/**
	* {@link OneToManyHandler} for handling 1:n CREDITCARDS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGESavedCreditcard> B2BUNIT2SAVEDCREDITCARDCREDITCARDSHANDLER = new OneToManyHandler<BHGESavedCreditcard>(
	BhgeCoreConstants.TC.BHGESAVEDCREDITCARD,
	true,
	"b2bUnit",
	"b2bUnitPOS",
	true,
	true,
	CollectionType.LIST
	);
	/** Relation ordering override parameter constants for SAPSalesConfig2CategoryRelation from ((bhgecore))*/
	protected static String SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED = "relation.SAPSalesConfig2CategoryRelation.source.ordered";
	protected static String SAPSALESCONFIG2CATEGORYRELATION_TGT_ORDERED = "relation.SAPSalesConfig2CategoryRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for SAPSalesConfig2CategoryRelation from ((bhgecore))*/
	protected static String SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED = "relation.SAPSalesConfig2CategoryRelation.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n CHEMICALENTRIES's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<Chemicals> ABSTRACTORDERENTRY2CHEMICALSCHEMICALENTRIESHANDLER = new OneToManyHandler<Chemicals>(
	BhgeCoreConstants.TC.CHEMICALS,
	false,
	"product",
	null,
	false,
	true,
	CollectionType.LIST
	);
	/**
	* {@link OneToManyHandler} for handling 1:n BHGESERVICEOFFERINGS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGEServiceOfferings> ABSTRACTORDERENTRY2BHGESERVICEOFFERINGSBHGESERVICEOFFERINGSHANDLER = new OneToManyHandler<BHGEServiceOfferings>(
	BhgeCoreConstants.TC.BHGESERVICEOFFERINGS,
	false,
	"rmaForm",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	/**
	* {@link OneToManyHandler} for handling 1:n BHGERMAEQUIPSERIALNUMBER's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGERmaEquipSerialNumber> ABSTRACTORDERENTRY2BHGERMAEQUIPSERIALNUMBERBHGERMAEQUIPSERIALNUMBERHANDLER = new OneToManyHandler<BHGERmaEquipSerialNumber>(
	BhgeCoreConstants.TC.BHGERMAEQUIPSERIALNUMBER,
	false,
	"rmaForm",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	/**
	* {@link OneToManyHandler} for handling 1:n VARIANTFACTORS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGEVariantFactor> ABSTRACTORDERENTRY2VARIANTFACTORRELATIONVARIANTFACTORSHANDLER = new OneToManyHandler<BHGEVariantFactor>(
	BhgeCoreConstants.TC.BHGEVARIANTFACTOR,
	true,
	"orderEntry",
	"orderEntryPOS",
	true,
	true,
	CollectionType.LIST
	);
	/**
	* {@link OneToManyHandler} for handling 1:n CONFIGURATIONINSTANCE's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGEConfigurationInstance> ABSTRACTORDERENTRY2CONFIGINSTANCERELCONFIGURATIONINSTANCEHANDLER = new OneToManyHandler<BHGEConfigurationInstance>(
	BhgeCoreConstants.TC.BHGECONFIGURATIONINSTANCE,
	true,
	"orderEntry",
	"orderEntryPOS",
	true,
	true,
	CollectionType.LIST
	);
	/**
	* {@link OneToManyHandler} for handling 1:n CONFIGURATIONPART's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGEConfigurationPart> ABSTRACTORDERENTRY2CONFIGPARTRELCONFIGURATIONPARTHANDLER = new OneToManyHandler<BHGEConfigurationPart>(
	BhgeCoreConstants.TC.BHGECONFIGURATIONPART,
	true,
	"orderEntry",
	"orderEntryPOS",
	true,
	true,
	CollectionType.LIST
	);
	/**
	* {@link OneToManyHandler} for handling 1:n CPQENTRYINFO's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGEProductInfo> ABSTRACTORDERENTRY2BHGECPQORDERENTRYPRODUCTINFORELATIONCPQENTRYINFOHANDLER = new OneToManyHandler<BHGEProductInfo>(
	BhgeCoreConstants.TC.BHGEPRODUCTINFO,
	true,
	"orderEntry",
	"orderEntryPOS",
	true,
	true,
	CollectionType.LIST
	);
	/** Relation ordering override parameter constants for GEEdgeBaseStore2ShippingCarrierMapping from ((bhgecore))*/
	protected static String GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_SRC_ORDERED = "relation.GEEdgeBaseStore2ShippingCarrierMapping.source.ordered";
	protected static String GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_TGT_ORDERED = "relation.GEEdgeBaseStore2ShippingCarrierMapping.target.ordered";
	/** Relation disable markmodifed parameter constants for GEEdgeBaseStore2ShippingCarrierMapping from ((bhgecore))*/
	protected static String GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED = "relation.GEEdgeBaseStore2ShippingCarrierMapping.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n CONTACTUSSETTINGS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<ContactusSettings> GEEDGEBASESTORE2CONTACTUSMAPPINGCONTACTUSSETTINGSHANDLER = new OneToManyHandler<ContactusSettings>(
	BhgeCoreConstants.TC.CONTACTUSSETTINGS,
	false,
	"baseStore",
	null,
	false,
	true,
	CollectionType.COLLECTION
	);
	/**
	* {@link OneToManyHandler} for handling 1:n ATTACHMENTSS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<EmailAttachment> BUSINESSPROCESS2EMAILATTACHMENTSRELATTACHMENTSSHANDLER = new OneToManyHandler<EmailAttachment>(
	AcceleratorServicesConstants.TC.EMAILATTACHMENT,
	true,
	"process",
	null,
	false,
	true,
	CollectionType.LIST
	);
	/** Relation ordering override parameter constants for Principal2PrincipalSourceRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED = "relation.Principal2PrincipalSourceRelation.source.ordered";
	protected static String PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED = "relation.Principal2PrincipalSourceRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Principal2PrincipalSourceRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED = "relation.Principal2PrincipalSourceRelation.markmodified";
	/** Relation ordering override parameter constants for Principal2PrincipalTargetRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED = "relation.Principal2PrincipalTargetRelation.source.ordered";
	protected static String PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED = "relation.Principal2PrincipalTargetRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Principal2PrincipalTargetRelation from ((bhgecore))*/
	protected static String PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED = "relation.Principal2PrincipalTargetRelation.markmodified";
	/** Relation ordering override parameter constants for Product2PrincipalRelation from ((bhgecore))*/
	protected static String PRODUCT2PRINCIPALRELATION_SRC_ORDERED = "relation.Product2PrincipalRelation.source.ordered";
	protected static String PRODUCT2PRINCIPALRELATION_TGT_ORDERED = "relation.Product2PrincipalRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Product2PrincipalRelation from ((bhgecore))*/
	protected static String PRODUCT2PRINCIPALRELATION_MARKMODIFIED = "relation.Product2PrincipalRelation.markmodified";
	/** Relation ordering override parameter constants for Products2PrincipalsRelation from ((bhgecore))*/
	protected static String PRODUCTS2PRINCIPALSRELATION_SRC_ORDERED = "relation.Products2PrincipalsRelation.source.ordered";
	protected static String PRODUCTS2PRINCIPALSRELATION_TGT_ORDERED = "relation.Products2PrincipalsRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Products2PrincipalsRelation from ((bhgecore))*/
	protected static String PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED = "relation.Products2PrincipalsRelation.markmodified";
	/** Relation ordering override parameter constants for Category2NewPrincipalRelation from ((bhgecore))*/
	protected static String CATEGORY2NEWPRINCIPALRELATION_SRC_ORDERED = "relation.Category2NewPrincipalRelation.source.ordered";
	protected static String CATEGORY2NEWPRINCIPALRELATION_TGT_ORDERED = "relation.Category2NewPrincipalRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for Category2NewPrincipalRelation from ((bhgecore))*/
	protected static String CATEGORY2NEWPRINCIPALRELATION_MARKMODIFIED = "relation.Category2NewPrincipalRelation.markmodified";
	/** Relation ordering override parameter constants for BHGEAnonymousToCategoryMapping from ((bhgecore))*/
	protected static String BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED = "relation.BHGEAnonymousToCategoryMapping.source.ordered";
	protected static String BHGEANONYMOUSTOCATEGORYMAPPING_TGT_ORDERED = "relation.BHGEAnonymousToCategoryMapping.target.ordered";
	/** Relation disable markmodifed parameter constants for BHGEAnonymousToCategoryMapping from ((bhgecore))*/
	protected static String BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED = "relation.BHGEAnonymousToCategoryMapping.markmodified";
	/** Relation ordering override parameter constants for GEEdgeCustomer2CategoryRelation from ((bhgecore))*/
	protected static String GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED = "relation.GEEdgeCustomer2CategoryRelation.source.ordered";
	protected static String GEEDGECUSTOMER2CATEGORYRELATION_TGT_ORDERED = "relation.GEEdgeCustomer2CategoryRelation.target.ordered";
	/** Relation disable markmodifed parameter constants for GEEdgeCustomer2CategoryRelation from ((bhgecore))*/
	protected static String GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED = "relation.GEEdgeCustomer2CategoryRelation.markmodified";
	/**
	* {@link OneToManyHandler} for handling 1:n CREDITCARDS's relation attributes from 'many' side.
	**/
	protected static final OneToManyHandler<BHGESavedCreditcard> B2BCUSTOMER2SAVEDCREDITCARDCREDITCARDSHANDLER = new OneToManyHandler<BHGESavedCreditcard>(
	BhgeCoreConstants.TC.BHGESAVEDCREDITCARD,
	true,
	"b2bCustomer",
	"b2bCustomerPOS",
	true,
	true,
	CollectionType.LIST
	);
	protected static final Map<String, Map<String, AttributeMode>> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, Map<String, AttributeMode>> ttmp = new HashMap();
		Map<String, AttributeMode> tmp = new HashMap<String, AttributeMode>();
		tmp.put("defaultCartProfile", AttributeMode.INITIAL);
		tmp.put("jobTitle", AttributeMode.INITIAL);
		tmp.put("countryOfCitizenship", AttributeMode.INITIAL);
		tmp.put("timeZone", AttributeMode.INITIAL);
		tmp.put("legalEmbargo", AttributeMode.INITIAL);
		tmp.put("dunsNumbers", AttributeMode.INITIAL);
		tmp.put("status", AttributeMode.INITIAL);
		tmp.put("defaultReturnSite", AttributeMode.INITIAL);
		tmp.put("w9TaxExemptionForm", AttributeMode.INITIAL);
		tmp.put("erpCustomerNumbers", AttributeMode.INITIAL);
		tmp.put("sso", AttributeMode.INITIAL);
		tmp.put("sosusertype", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.user.User", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("risk", AttributeMode.INITIAL);
		tmp.put("sanctioned", AttributeMode.INITIAL);
		tmp.put("country", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.c2l.Country", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("detailedProductDescription", AttributeMode.INITIAL);
		tmp.put("basePrice", AttributeMode.INITIAL);
		tmp.put("supercedingProduct", AttributeMode.INITIAL);
		tmp.put("standardLeadTime", AttributeMode.INITIAL);
		tmp.put("sellabilityFlag", AttributeMode.INITIAL);
		tmp.put("supercedingProductStatus", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.product.Product", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("accessoryType", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.catalog.jalo.ProductReference", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("lastRunTime", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.cronjob.jalo.CronJob", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("email", AttributeMode.INITIAL);
		tmp.put("externalCustomer", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.user.Employee", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("soldToForCart", AttributeMode.INITIAL);
		tmp.put("isShipCompleteOrder", AttributeMode.INITIAL);
		tmp.put("orderReferenceId", AttributeMode.INITIAL);
		tmp.put("totalListPrice", AttributeMode.INITIAL);
		tmp.put("connectivityerror", AttributeMode.INITIAL);
		tmp.put("RMAEndUserAddress", AttributeMode.INITIAL);
		tmp.put("endUserCategory", AttributeMode.INITIAL);
		tmp.put("alternateContactEmail", AttributeMode.INITIAL);
		tmp.put("surCharge", AttributeMode.INITIAL);
		tmp.put("largestFilmLeadtime", AttributeMode.INITIAL);
		tmp.put("largestNonFilmLeadtime", AttributeMode.INITIAL);
		tmp.put("payerAddress", AttributeMode.INITIAL);
		tmp.put("configurationBlock", AttributeMode.INITIAL);
		tmp.put("orderPreference", AttributeMode.INITIAL);
		tmp.put("shippingChargeMethod", AttributeMode.INITIAL);
		tmp.put("deliveryAccountNum", AttributeMode.INITIAL);
		tmp.put("ponum", AttributeMode.INITIAL);
		tmp.put("shipToContactName", AttributeMode.INITIAL);
		tmp.put("shipToContactPhone", AttributeMode.INITIAL);
		tmp.put("endCustomerRefNum", AttributeMode.INITIAL);
		tmp.put("shippingRemarks", AttributeMode.INITIAL);
		tmp.put("orderConfirmationEMail", AttributeMode.INITIAL);
		tmp.put("shipNotificationEmail", AttributeMode.INITIAL);
		tmp.put("invoiceEmail", AttributeMode.INITIAL);
		tmp.put("isGovernment", AttributeMode.INITIAL);
		tmp.put("isExport", AttributeMode.INITIAL);
		tmp.put("planToExport", AttributeMode.INITIAL);
		tmp.put("exportAddress", AttributeMode.INITIAL);
		tmp.put("exportAddressText", AttributeMode.INITIAL);
		tmp.put("isNuclear", AttributeMode.INITIAL);
		tmp.put("isPartialShipment", AttributeMode.INITIAL);
		tmp.put("shippingCarrierMethod", AttributeMode.INITIAL);
		tmp.put("isNuclearOppurtunity", AttributeMode.INITIAL);
		tmp.put("isSpecialDiscountPresent", AttributeMode.INITIAL);
		tmp.put("specialDiscountCode", AttributeMode.INITIAL);
		tmp.put("attachments", AttributeMode.INITIAL);
		tmp.put("isAttachmentMoved", AttributeMode.INITIAL);
		tmp.put("coshPdfStatus", AttributeMode.INITIAL);
		tmp.put("checkoutPdfStatus", AttributeMode.INITIAL);
		tmp.put("PurchaseOrderUploadStatus", AttributeMode.INITIAL);
		tmp.put("HazardAttachmentUploadStatus", AttributeMode.INITIAL);
		tmp.put("AttachmentUploadStatus", AttributeMode.INITIAL);
		tmp.put("AdditionalInfoAttachments", AttributeMode.INITIAL);
		tmp.put("reqHeaderDeliveryDateFilm", AttributeMode.INITIAL);
		tmp.put("reqHeaderDeliveryDate", AttributeMode.INITIAL);
		tmp.put("yourPriceDiscount", AttributeMode.INITIAL);
		tmp.put("deliveryPoint", AttributeMode.INITIAL);
		tmp.put("cartType", AttributeMode.INITIAL);
		tmp.put("endUserNumber", AttributeMode.INITIAL);
		tmp.put("currentCheckoutStep", AttributeMode.INITIAL);
		tmp.put("rmaNumber", AttributeMode.INITIAL);
		tmp.put("commerceType", AttributeMode.INITIAL);
		tmp.put("authorizedPaymentAmount", AttributeMode.INITIAL);
		tmp.put("poDetails", AttributeMode.INITIAL);
		tmp.put("poDocs", AttributeMode.INITIAL);
		tmp.put("isBuyer", AttributeMode.INITIAL);
		tmp.put("isManufacturer", AttributeMode.INITIAL);
		tmp.put("rmaAttachment", AttributeMode.INITIAL);
		tmp.put("isExpediteRequest", AttributeMode.INITIAL);
		tmp.put("usTaxExempt", AttributeMode.INITIAL);
		tmp.put("usTaxExempId", AttributeMode.INITIAL);
		tmp.put("shippingConatct1Name", AttributeMode.INITIAL);
		tmp.put("shippingConatct1Number", AttributeMode.INITIAL);
		tmp.put("shippingConatct2Name", AttributeMode.INITIAL);
		tmp.put("shippingConatct2Number", AttributeMode.INITIAL);
		tmp.put("carrierName", AttributeMode.INITIAL);
		tmp.put("shippingMethod", AttributeMode.INITIAL);
		tmp.put("userComments", AttributeMode.INITIAL);
		tmp.put("hazardInfoDocs", AttributeMode.INITIAL);
		tmp.put("totalReturnPrice", AttributeMode.INITIAL);
		tmp.put("bhgeHazardousInfo", AttributeMode.INITIAL);
		tmp.put("rmaSapStatus", AttributeMode.INITIAL);
		tmp.put("returnPO", AttributeMode.INITIAL);
		tmp.put("InvoiceContact", AttributeMode.INITIAL);
		tmp.put("InvoicePhone", AttributeMode.INITIAL);
		tmp.put("soaContact", AttributeMode.INITIAL);
		tmp.put("soaPhone", AttributeMode.INITIAL);
		tmp.put("InvoiceContactName", AttributeMode.INITIAL);
		tmp.put("InvoiceContact1Num", AttributeMode.INITIAL);
		tmp.put("OrderConfirmationName", AttributeMode.INITIAL);
		tmp.put("OrderConfirmationNum", AttributeMode.INITIAL);
		tmp.put("bhgeCreditCardPaymentInfo", AttributeMode.INITIAL);
		tmp.put("isQuote", AttributeMode.INITIAL);
		tmp.put("productLine", AttributeMode.INITIAL);
		tmp.put("earlyShipment", AttributeMode.INITIAL);
		tmp.put("euc", AttributeMode.INITIAL);
		tmp.put("cartProfile", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.order.AbstractOrder", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("incoterms1", AttributeMode.INITIAL);
		tmp.put("incotrms1", AttributeMode.INITIAL);
		tmp.put("incoterms2", AttributeMode.INITIAL);
		tmp.put("partialDelivery", AttributeMode.INITIAL);
		tmp.put("paymentTerms", AttributeMode.INITIAL);
		tmp.put("paymentTrms", AttributeMode.INITIAL);
		tmp.put("accountGroup", AttributeMode.INITIAL);
		tmp.put("customerClass", AttributeMode.INITIAL);
		tmp.put("ecommerceFlag", AttributeMode.INITIAL);
		tmp.put("sapBlocked", AttributeMode.INITIAL);
		tmp.put("countryCP", AttributeMode.INITIAL);
		tmp.put("regionCP", AttributeMode.INITIAL);
		tmp.put("subRegionCP", AttributeMode.INITIAL);
		tmp.put("currency", AttributeMode.INITIAL);
		tmp.put("customerClassification", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.b2b.jalo.B2BUnit", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("isNuclear", AttributeMode.INITIAL);
		tmp.put("addressId", AttributeMode.INITIAL);
		tmp.put("saveForFuture", AttributeMode.INITIAL);
		tmp.put("deliveryPoint", AttributeMode.INITIAL);
		tmp.put("endUserType", AttributeMode.INITIAL);
		tmp.put("isPrimaryAddress", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.user.Address", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("isAPAC", AttributeMode.INITIAL);
		tmp.put("minOrderValue", AttributeMode.INITIAL);
		tmp.put("currency", AttributeMode.INITIAL);
		tmp.put("limit", AttributeMode.INITIAL);
		tmp.put("charge", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.sapmodel.jalo.SAPSalesOrganization", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("IsOldCartNotified", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.order.Cart", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("fileUploaded", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.media.Media", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("discountPrice", AttributeMode.INITIAL);
		tmp.put("discountPercentage", AttributeMode.INITIAL);
		tmp.put("estShippingDates", AttributeMode.INITIAL);
		tmp.put("isEngineeringHold", AttributeMode.INITIAL);
		tmp.put("note", AttributeMode.INITIAL);
		tmp.put("requestedDeliveryDate", AttributeMode.INITIAL);
		tmp.put("plant", AttributeMode.INITIAL);
		tmp.put("plantName", AttributeMode.INITIAL);
		tmp.put("availableQuantity", AttributeMode.INITIAL);
		tmp.put("availabilityDetails", AttributeMode.INITIAL);
		tmp.put("stockDetails", AttributeMode.INITIAL);
		tmp.put("isSameDayShipEnabled", AttributeMode.INITIAL);
		tmp.put("isSameDayShipChecked", AttributeMode.INITIAL);
		tmp.put("subTotalListPrice", AttributeMode.INITIAL);
		tmp.put("sameDayShipmentCost", AttributeMode.INITIAL);
		tmp.put("yourPriceDiscount", AttributeMode.INITIAL);
		tmp.put("sdsCriteria", AttributeMode.INITIAL);
		tmp.put("vcOptionsPrice", AttributeMode.INITIAL);
		tmp.put("silverClausePrice", AttributeMode.INITIAL);
		tmp.put("silverClausePricePercentage", AttributeMode.INITIAL);
		tmp.put("listPrice", AttributeMode.INITIAL);
		tmp.put("componentPrices", AttributeMode.INITIAL);
		tmp.put("isPlantEnabled", AttributeMode.INITIAL);
		tmp.put("isDomesticPlant", AttributeMode.INITIAL);
		tmp.put("isCutOffTime", AttributeMode.INITIAL);
		tmp.put("isQtyAvailable", AttributeMode.INITIAL);
		tmp.put("partNumber", AttributeMode.INITIAL);
		tmp.put("productDetails", AttributeMode.INITIAL);
		tmp.put("problemDescription", AttributeMode.INITIAL);
		tmp.put("leadtime", AttributeMode.INITIAL);
		tmp.put("problemDescLong", AttributeMode.INITIAL);
		tmp.put("pricingInfo", AttributeMode.INITIAL);
		tmp.put("isComplete", AttributeMode.INITIAL);
		tmp.put("returnToSiteCode", AttributeMode.INITIAL);
		tmp.put("returnToSiteName", AttributeMode.INITIAL);
		tmp.put("lineNotes", AttributeMode.INITIAL);
		tmp.put("bhgeAdditionalInfo", AttributeMode.INITIAL);
		tmp.put("bhgeHazardousInfo", AttributeMode.INITIAL);
		tmp.put("similarPart", AttributeMode.INITIAL);
		tmp.put("invalidateEntry", AttributeMode.INITIAL);
		tmp.put("rmaFormPercentCompletion", AttributeMode.INITIAL);
		tmp.put("availableSites", AttributeMode.INITIAL);
		tmp.put("unitPrice", AttributeMode.INITIAL);
		tmp.put("silverClause", AttributeMode.INITIAL);
		tmp.put("netPrice", AttributeMode.INITIAL);
		tmp.put("totalReturnPrice", AttributeMode.INITIAL);
		tmp.put("planningSite", AttributeMode.INITIAL);
		tmp.put("accessoryProducts", AttributeMode.INITIAL);
		tmp.put("accessoryPartNumbers", AttributeMode.INITIAL);
		tmp.put("parentEntryNumber", AttributeMode.INITIAL);
		tmp.put("otherDetails", AttributeMode.INITIAL);
		tmp.put("offeringsListString", AttributeMode.INITIAL);
		tmp.put("vcFullyConfigurepartNumber", AttributeMode.INITIAL);
		tmp.put("referenceNumber", AttributeMode.INITIAL);
		tmp.put("tagInformation", AttributeMode.INITIAL);
		tmp.put("configurationAttachment", AttributeMode.INITIAL);
		tmp.put("configAttachmentUploaded", AttributeMode.INITIAL);
		tmp.put("dummyProductDescription", AttributeMode.INITIAL);
		tmp.put("accessoryEntriesNumber", AttributeMode.INITIAL);
		tmp.put("dummyPartNumber", AttributeMode.INITIAL);
		tmp.put("longConfigEntry", AttributeMode.INITIAL);
		tmp.put("bhgeKBInformation", AttributeMode.INITIAL);
		tmp.put("endCustomerAddress", AttributeMode.INITIAL);
		tmp.put("ecaCode", AttributeMode.INITIAL);
		tmp.put("ecaPONumber", AttributeMode.INITIAL);
		tmp.put("productPricingIssue", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.order.AbstractOrderEntry", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("priceCriteria", AttributeMode.INITIAL);
		tmp.put("priceConditionType", AttributeMode.INITIAL);
		tmp.put("soldtocustomer", AttributeMode.INITIAL);
		tmp.put("salesAreaPriceKey", AttributeMode.INITIAL);
		tmp.put("type", AttributeMode.INITIAL);
		tmp.put("dateRangeGroup", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.europe1.jalo.PriceRow", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("productSpecification", AttributeMode.INITIAL);
		tmp.put("productType", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.catalog.jalo.classification.ClassificationClass", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("plantLocation", AttributeMode.INITIAL);
		tmp.put("timeZone", AttributeMode.INITIAL);
		tmp.put("cutOffTime", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.ordersplitting.jalo.Warehouse", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("address", AttributeMode.INITIAL);
		tmp.put("defaultCountry", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.store.BaseStore", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("shippingMethod", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.enumeration.EnumerationValue", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("expireNotificationDateInDays", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.basecommerce.jalo.site.BaseSite", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("isSDSEnabled", AttributeMode.INITIAL);
		tmp.put("sapproductconfig_conditiontypes_discountprice_cps", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.core.configuration.jalo.SAPConfiguration", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("userName", AttributeMode.INITIAL);
		tmp.put("company", AttributeMode.INITIAL);
		tmp.put("contactNumber", AttributeMode.INITIAL);
		tmp.put("emailAddress", AttributeMode.INITIAL);
		tmp.put("address1", AttributeMode.INITIAL);
		tmp.put("address2", AttributeMode.INITIAL);
		tmp.put("country", AttributeMode.INITIAL);
		tmp.put("region", AttributeMode.INITIAL);
		tmp.put("city", AttributeMode.INITIAL);
		tmp.put("postalCode", AttributeMode.INITIAL);
		tmp.put("emailtype", AttributeMode.INITIAL);
		tmp.put("erpFailureReason", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.jalo.order.Quote", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("siteName", AttributeMode.INITIAL);
		tmp.put("store", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.europe1.jalo.PDTRow", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("userProfileUrl", AttributeMode.INITIAL);
		tmp.put("tokenUrl", AttributeMode.INITIAL);
		tmp.put("responseType", AttributeMode.INITIAL);
		tmp.put("logoffUrl", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.webservicescommons.jalo.OpenIDClientDetails", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("courier", AttributeMode.INITIAL);
		tmp.put("shippingEmail", AttributeMode.INITIAL);
		tmp.put("invoiceEmail", AttributeMode.INITIAL);
		tmp.put("soaEmail", AttributeMode.INITIAL);
		tmp.put("deliveryAccountNumber", AttributeMode.INITIAL);
		tmp.put("endUser", AttributeMode.INITIAL);
		tmp.put("noRdd", AttributeMode.INITIAL);
		tmp.put("governmentFlag", AttributeMode.INITIAL);
		tmp.put("nuclearFlag", AttributeMode.INITIAL);
		tmp.put("exportAddress", AttributeMode.INITIAL);
		tmp.put("shippingRemarks", AttributeMode.INITIAL);
		tmp.put("nuclearOpptyFlag", AttributeMode.INITIAL);
		tmp.put("govermentBuyer", AttributeMode.INITIAL);
		tmp.put("exportFlag", AttributeMode.INITIAL);
		tmp.put("alternateNumber", AttributeMode.INITIAL);
		tmp.put("alternateName", AttributeMode.INITIAL);
		tmp.put("alternateEmail", AttributeMode.INITIAL);
		tmp.put("endUserNewDetails", AttributeMode.INITIAL);
		tmp.put("csrHelp", AttributeMode.INITIAL);
		tmp.put("endUserPO", AttributeMode.INITIAL);
		tmp.put("invoiceContact", AttributeMode.INITIAL);
		tmp.put("invoicePhone", AttributeMode.INITIAL);
		tmp.put("soaContact", AttributeMode.INITIAL);
		tmp.put("soaPhone", AttributeMode.INITIAL);
		tmp.put("reqHeaderDeliveryDate", AttributeMode.INITIAL);
		tmp.put("shiptoContact", AttributeMode.INITIAL);
		tmp.put("shiptoPhone", AttributeMode.INITIAL);
		tmp.put("discountCode", AttributeMode.INITIAL);
		tmp.put("shippingCharge", AttributeMode.INITIAL);
		tmp.put("isShipCompleteOrder", AttributeMode.INITIAL);
		tmp.put("configurationBlock", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundOrder", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("reqLineDeliveryDate", AttributeMode.INITIAL);
		tmp.put("note", AttributeMode.INITIAL);
		tmp.put("availableLineText", AttributeMode.INITIAL);
		tmp.put("discountReason", AttributeMode.INITIAL);
		tmp.put("voucherCode", AttributeMode.INITIAL);
		tmp.put("saveForFuture", AttributeMode.INITIAL);
		tmp.put("paymentTerms", AttributeMode.INITIAL);
		tmp.put("referenceNumber", AttributeMode.INITIAL);
		tmp.put("tagInformation", AttributeMode.INITIAL);
		tmp.put("dummyProductDetails1", AttributeMode.INITIAL);
		tmp.put("dummyProductDetails2", AttributeMode.INITIAL);
		tmp.put("dummyProductDetails3", AttributeMode.INITIAL);
		tmp.put("dummyProductDetails4", AttributeMode.INITIAL);
		tmp.put("endCustomerPO", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundOrderItem", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("deliveryPoint", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundPartnerRole", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("company", AttributeMode.INITIAL);
		tmp.put("checkStatus", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.sapcpiadapter.jalo.SAPCpiOutboundAddress", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("author", AttributeMode.INITIAL);
		tmp.put("instanceId", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.sap.productconfig.services.jalo.CPQOrderEntryProductInfo", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("process", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.acceleratorservices.jalo.email.EmailAttachment", Collections.unmodifiableMap(tmp));
		tmp = new HashMap<String, AttributeMode>();
		tmp.put("User", AttributeMode.INITIAL);
		ttmp.put("de.hybris.platform.hmc.jalo.UserProfile", Collections.unmodifiableMap(tmp));
		DEFAULT_INITIAL_ATTRIBUTES = ttmp;
	}
	@Override
	public Map<String, AttributeMode> getDefaultAttributeModes(final Class<? extends Item> itemClass)
	{
		Map<String, AttributeMode> ret = new HashMap<>();
		final Map<String, AttributeMode> attr = DEFAULT_INITIAL_ATTRIBUTES.get(itemClass.getName());
		if (attr != null)
		{
			ret.putAll(attr);
		}
		return ret;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.accessoryEntriesNumber</code> attribute.
	 * @return the accessoryEntriesNumber
	 */
	public String getAccessoryEntriesNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ACCESSORYENTRIESNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.accessoryEntriesNumber</code> attribute.
	 * @return the accessoryEntriesNumber
	 */
	public String getAccessoryEntriesNumber(final AbstractOrderEntry item)
	{
		return getAccessoryEntriesNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.accessoryEntriesNumber</code> attribute. 
	 * @param value the accessoryEntriesNumber
	 */
	public void setAccessoryEntriesNumber(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ACCESSORYENTRIESNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.accessoryEntriesNumber</code> attribute. 
	 * @param value the accessoryEntriesNumber
	 */
	public void setAccessoryEntriesNumber(final AbstractOrderEntry item, final String value)
	{
		setAccessoryEntriesNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.accessoryPartNumbers</code> attribute.
	 * @return the accessoryPartNumbers - Accessory Part Numbers
	 */
	public List<String> getAccessoryPartNumbers(final SessionContext ctx, final AbstractOrderEntry item)
	{
		List<String> coll = (List<String>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ACCESSORYPARTNUMBERS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.accessoryPartNumbers</code> attribute.
	 * @return the accessoryPartNumbers - Accessory Part Numbers
	 */
	public List<String> getAccessoryPartNumbers(final AbstractOrderEntry item)
	{
		return getAccessoryPartNumbers( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.accessoryPartNumbers</code> attribute. 
	 * @param value the accessoryPartNumbers - Accessory Part Numbers
	 */
	public void setAccessoryPartNumbers(final SessionContext ctx, final AbstractOrderEntry item, final List<String> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ACCESSORYPARTNUMBERS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.accessoryPartNumbers</code> attribute. 
	 * @param value the accessoryPartNumbers - Accessory Part Numbers
	 */
	public void setAccessoryPartNumbers(final AbstractOrderEntry item, final List<String> value)
	{
		setAccessoryPartNumbers( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.accessoryProducts</code> attribute.
	 * @return the accessoryProducts
	 */
	public List<Product> getAccessoryProducts(final SessionContext ctx, final AbstractOrderEntry item)
	{
		List<Product> coll = (List<Product>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ACCESSORYPRODUCTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.accessoryProducts</code> attribute.
	 * @return the accessoryProducts
	 */
	public List<Product> getAccessoryProducts(final AbstractOrderEntry item)
	{
		return getAccessoryProducts( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.accessoryProducts</code> attribute. 
	 * @param value the accessoryProducts
	 */
	public void setAccessoryProducts(final SessionContext ctx, final AbstractOrderEntry item, final List<Product> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ACCESSORYPRODUCTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.accessoryProducts</code> attribute. 
	 * @param value the accessoryProducts
	 */
	public void setAccessoryProducts(final AbstractOrderEntry item, final List<Product> value)
	{
		setAccessoryProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductReference.accessoryType</code> attribute.
	 * @return the accessoryType
	 */
	public EnumerationValue getAccessoryType(final SessionContext ctx, final ProductReference item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.ProductReference.ACCESSORYTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ProductReference.accessoryType</code> attribute.
	 * @return the accessoryType
	 */
	public EnumerationValue getAccessoryType(final ProductReference item)
	{
		return getAccessoryType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductReference.accessoryType</code> attribute. 
	 * @param value the accessoryType
	 */
	public void setAccessoryType(final SessionContext ctx, final ProductReference item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.ProductReference.ACCESSORYTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ProductReference.accessoryType</code> attribute. 
	 * @param value the accessoryType
	 */
	public void setAccessoryType(final ProductReference item, final EnumerationValue value)
	{
		setAccessoryType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.accountGroup</code> attribute.
	 * @return the accountGroup
	 */
	public String getAccountGroup(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.ACCOUNTGROUP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.accountGroup</code> attribute.
	 * @return the accountGroup
	 */
	public String getAccountGroup(final B2BUnit item)
	{
		return getAccountGroup( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.accountGroup</code> attribute. 
	 * @param value the accountGroup
	 */
	public void setAccountGroup(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.ACCOUNTGROUP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.accountGroup</code> attribute. 
	 * @param value the accountGroup
	 */
	public void setAccountGroup(final B2BUnit item, final String value)
	{
		setAccountGroup( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.AdditionalInfoAttachments</code> attribute.
	 * @return the AdditionalInfoAttachments
	 */
	public EnumerationValue getAdditionalInfoAttachments(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ADDITIONALINFOATTACHMENTS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.AdditionalInfoAttachments</code> attribute.
	 * @return the AdditionalInfoAttachments
	 */
	public EnumerationValue getAdditionalInfoAttachments(final AbstractOrder item)
	{
		return getAdditionalInfoAttachments( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.AdditionalInfoAttachments</code> attribute. 
	 * @param value the AdditionalInfoAttachments
	 */
	public void setAdditionalInfoAttachments(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ADDITIONALINFOATTACHMENTS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.AdditionalInfoAttachments</code> attribute. 
	 * @param value the AdditionalInfoAttachments
	 */
	public void setAdditionalInfoAttachments(final AbstractOrder item, final EnumerationValue value)
	{
		setAdditionalInfoAttachments( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.address</code> attribute.
	 * @return the address - BaseStore Address
	 */
	public Address getAddress(final SessionContext ctx, final BaseStore item)
	{
		return (Address)item.getProperty( ctx, BhgeCoreConstants.Attributes.BaseStore.ADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.address</code> attribute.
	 * @return the address - BaseStore Address
	 */
	public Address getAddress(final BaseStore item)
	{
		return getAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.address</code> attribute. 
	 * @param value the address - BaseStore Address
	 */
	public void setAddress(final SessionContext ctx, final BaseStore item, final Address value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.BaseStore.ADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.address</code> attribute. 
	 * @param value the address - BaseStore Address
	 */
	public void setAddress(final BaseStore item, final Address value)
	{
		setAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.address1</code> attribute.
	 * @return the address1
	 */
	public String getAddress1(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.ADDRESS1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.address1</code> attribute.
	 * @return the address1
	 */
	public String getAddress1(final Quote item)
	{
		return getAddress1( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.address1</code> attribute. 
	 * @param value the address1
	 */
	public void setAddress1(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.ADDRESS1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.address1</code> attribute. 
	 * @param value the address1
	 */
	public void setAddress1(final Quote item, final String value)
	{
		setAddress1( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.address2</code> attribute.
	 * @return the address2
	 */
	public String getAddress2(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.ADDRESS2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.address2</code> attribute.
	 * @return the address2
	 */
	public String getAddress2(final Quote item)
	{
		return getAddress2( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.address2</code> attribute. 
	 * @param value the address2
	 */
	public void setAddress2(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.ADDRESS2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.address2</code> attribute. 
	 * @param value the address2
	 */
	public void setAddress2(final Quote item, final String value)
	{
		setAddress2( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.addressId</code> attribute.
	 * @return the addressId
	 */
	public String getAddressId(final SessionContext ctx, final Address item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Address.ADDRESSID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.addressId</code> attribute.
	 * @return the addressId
	 */
	public String getAddressId(final Address item)
	{
		return getAddressId( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.addressId</code> attribute. 
	 * @param value the addressId
	 */
	public void setAddressId(final SessionContext ctx, final Address item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Address.ADDRESSID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.addressId</code> attribute. 
	 * @param value the addressId
	 */
	public void setAddressId(final Address item, final String value)
	{
		setAddressId( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.allowedProducts</code> attribute.
	 * @return the allowedProducts - catalog categories which are accessible for this principal
	 */
	public Set<GEEdgeProduct> getAllowedProducts(final SessionContext ctx, final Principal item)
	{
		final List<GEEdgeProduct> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			"GEEdgeProduct",
			null,
			false,
			false
		);
		return new LinkedHashSet<GEEdgeProduct>(items);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.allowedProducts</code> attribute.
	 * @return the allowedProducts - catalog categories which are accessible for this principal
	 */
	public Set<GEEdgeProduct> getAllowedProducts(final Principal item)
	{
		return getAllowedProducts( getSession().getSessionContext(), item );
	}
	
	public long getAllowedProductsCount(final SessionContext ctx, final Principal item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			"GEEdgeProduct",
			null
		);
	}
	
	public long getAllowedProductsCount(final Principal item)
	{
		return getAllowedProductsCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.allowedProducts</code> attribute. 
	 * @param value the allowedProducts - catalog categories which are accessible for this principal
	 */
	public void setAllowedProducts(final SessionContext ctx, final Principal item, final Set<GEEdgeProduct> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.allowedProducts</code> attribute. 
	 * @param value the allowedProducts - catalog categories which are accessible for this principal
	 */
	public void setAllowedProducts(final Principal item, final Set<GEEdgeProduct> value)
	{
		setAllowedProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to allowedProducts. 
	 * @param value the item to add to allowedProducts - catalog categories which are accessible for this principal
	 */
	public void addToAllowedProducts(final SessionContext ctx, final Principal item, final GEEdgeProduct value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to allowedProducts. 
	 * @param value the item to add to allowedProducts - catalog categories which are accessible for this principal
	 */
	public void addToAllowedProducts(final Principal item, final GEEdgeProduct value)
	{
		addToAllowedProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from allowedProducts. 
	 * @param value the item to remove from allowedProducts - catalog categories which are accessible for this principal
	 */
	public void removeFromAllowedProducts(final SessionContext ctx, final Principal item, final GEEdgeProduct value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCTS2PRINCIPALSRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCTS2PRINCIPALSRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from allowedProducts. 
	 * @param value the item to remove from allowedProducts - catalog categories which are accessible for this principal
	 */
	public void removeFromAllowedProducts(final Principal item, final GEEdgeProduct value)
	{
		removeFromAllowedProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.alternateContactEmail</code> attribute.
	 * @return the alternateContactEmail
	 */
	public String getAlternateContactEmail(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ALTERNATECONTACTEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.alternateContactEmail</code> attribute.
	 * @return the alternateContactEmail
	 */
	public String getAlternateContactEmail(final AbstractOrder item)
	{
		return getAlternateContactEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.alternateContactEmail</code> attribute. 
	 * @param value the alternateContactEmail
	 */
	public void setAlternateContactEmail(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ALTERNATECONTACTEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.alternateContactEmail</code> attribute. 
	 * @param value the alternateContactEmail
	 */
	public void setAlternateContactEmail(final AbstractOrder item, final String value)
	{
		setAlternateContactEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.alternateEmail</code> attribute.
	 * @return the alternateEmail
	 */
	public String getAlternateEmail(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ALTERNATEEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.alternateEmail</code> attribute.
	 * @return the alternateEmail
	 */
	public String getAlternateEmail(final SAPCpiOutboundOrder item)
	{
		return getAlternateEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.alternateEmail</code> attribute. 
	 * @param value the alternateEmail
	 */
	public void setAlternateEmail(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ALTERNATEEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.alternateEmail</code> attribute. 
	 * @param value the alternateEmail
	 */
	public void setAlternateEmail(final SAPCpiOutboundOrder item, final String value)
	{
		setAlternateEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.alternateName</code> attribute.
	 * @return the alternateName
	 */
	public String getAlternateName(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ALTERNATENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.alternateName</code> attribute.
	 * @return the alternateName
	 */
	public String getAlternateName(final SAPCpiOutboundOrder item)
	{
		return getAlternateName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.alternateName</code> attribute. 
	 * @param value the alternateName
	 */
	public void setAlternateName(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ALTERNATENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.alternateName</code> attribute. 
	 * @param value the alternateName
	 */
	public void setAlternateName(final SAPCpiOutboundOrder item, final String value)
	{
		setAlternateName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.alternateNumber</code> attribute.
	 * @return the alternateNumber
	 */
	public String getAlternateNumber(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ALTERNATENUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.alternateNumber</code> attribute.
	 * @return the alternateNumber
	 */
	public String getAlternateNumber(final SAPCpiOutboundOrder item)
	{
		return getAlternateNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.alternateNumber</code> attribute. 
	 * @param value the alternateNumber
	 */
	public void setAlternateNumber(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ALTERNATENUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.alternateNumber</code> attribute. 
	 * @param value the alternateNumber
	 */
	public void setAlternateNumber(final SAPCpiOutboundOrder item, final String value)
	{
		setAlternateNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.applicableFailureMode</code> attribute.
	 * @return the applicableFailureMode
	 */
	public List<ProductFailureMode> getApplicableFailureMode(final SessionContext ctx, final Product item)
	{
		final List<ProductFailureMode> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			"ProductFailureMode",
			null,
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.applicableFailureMode</code> attribute.
	 * @return the applicableFailureMode
	 */
	public List<ProductFailureMode> getApplicableFailureMode(final Product item)
	{
		return getApplicableFailureMode( getSession().getSessionContext(), item );
	}
	
	public long getApplicableFailureModeCount(final SessionContext ctx, final Product item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			"ProductFailureMode",
			null
		);
	}
	
	public long getApplicableFailureModeCount(final Product item)
	{
		return getApplicableFailureModeCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.applicableFailureMode</code> attribute. 
	 * @param value the applicableFailureMode
	 */
	public void setApplicableFailureMode(final SessionContext ctx, final Product item, final List<ProductFailureMode> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			null,
			value,
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.applicableFailureMode</code> attribute. 
	 * @param value the applicableFailureMode
	 */
	public void setApplicableFailureMode(final Product item, final List<ProductFailureMode> value)
	{
		setApplicableFailureMode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to applicableFailureMode. 
	 * @param value the item to add to applicableFailureMode
	 */
	public void addToApplicableFailureMode(final SessionContext ctx, final Product item, final ProductFailureMode value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to applicableFailureMode. 
	 * @param value the item to add to applicableFailureMode
	 */
	public void addToApplicableFailureMode(final Product item, final ProductFailureMode value)
	{
		addToApplicableFailureMode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from applicableFailureMode. 
	 * @param value the item to remove from applicableFailureMode
	 */
	public void removeFromApplicableFailureMode(final SessionContext ctx, final Product item, final ProductFailureMode value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2FAILUREREASON,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRODUCT2FAILUREREASON_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRODUCT2FAILUREREASON_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from applicableFailureMode. 
	 * @param value the item to remove from applicableFailureMode
	 */
	public void removeFromApplicableFailureMode(final Product item, final ProductFailureMode value)
	{
		removeFromApplicableFailureMode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.attachments</code> attribute.
	 * @return the attachments - The orders attachments
	 */
	public Collection<Media> getAttachments(final SessionContext ctx, final AbstractOrder item)
	{
		Collection<Media> coll = (Collection<Media>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ATTACHMENTS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.attachments</code> attribute.
	 * @return the attachments - The orders attachments
	 */
	public Collection<Media> getAttachments(final AbstractOrder item)
	{
		return getAttachments( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.attachments</code> attribute. 
	 * @param value the attachments - The orders attachments
	 */
	public void setAttachments(final SessionContext ctx, final AbstractOrder item, final Collection<Media> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ATTACHMENTS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.attachments</code> attribute. 
	 * @param value the attachments - The orders attachments
	 */
	public void setAttachments(final AbstractOrder item, final Collection<Media> value)
	{
		setAttachments( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BusinessProcess.attachmentss</code> attribute.
	 * @return the attachmentss
	 */
	public List<EmailAttachment> getAttachmentss(final SessionContext ctx, final BusinessProcess item)
	{
		return (List<EmailAttachment>)BUSINESSPROCESS2EMAILATTACHMENTSRELATTACHMENTSSHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BusinessProcess.attachmentss</code> attribute.
	 * @return the attachmentss
	 */
	public List<EmailAttachment> getAttachmentss(final BusinessProcess item)
	{
		return getAttachmentss( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BusinessProcess.attachmentss</code> attribute. 
	 * @param value the attachmentss
	 */
	public void setAttachmentss(final SessionContext ctx, final BusinessProcess item, final List<EmailAttachment> value)
	{
		BUSINESSPROCESS2EMAILATTACHMENTSRELATTACHMENTSSHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BusinessProcess.attachmentss</code> attribute. 
	 * @param value the attachmentss
	 */
	public void setAttachmentss(final BusinessProcess item, final List<EmailAttachment> value)
	{
		setAttachmentss( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to attachmentss. 
	 * @param value the item to add to attachmentss
	 */
	public void addToAttachmentss(final SessionContext ctx, final BusinessProcess item, final EmailAttachment value)
	{
		BUSINESSPROCESS2EMAILATTACHMENTSRELATTACHMENTSSHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to attachmentss. 
	 * @param value the item to add to attachmentss
	 */
	public void addToAttachmentss(final BusinessProcess item, final EmailAttachment value)
	{
		addToAttachmentss( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from attachmentss. 
	 * @param value the item to remove from attachmentss
	 */
	public void removeFromAttachmentss(final SessionContext ctx, final BusinessProcess item, final EmailAttachment value)
	{
		BUSINESSPROCESS2EMAILATTACHMENTSRELATTACHMENTSSHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from attachmentss. 
	 * @param value the item to remove from attachmentss
	 */
	public void removeFromAttachmentss(final BusinessProcess item, final EmailAttachment value)
	{
		removeFromAttachmentss( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.AttachmentUploadStatus</code> attribute.
	 * @return the AttachmentUploadStatus
	 */
	public EnumerationValue getAttachmentUploadStatus(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ATTACHMENTUPLOADSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.AttachmentUploadStatus</code> attribute.
	 * @return the AttachmentUploadStatus
	 */
	public EnumerationValue getAttachmentUploadStatus(final AbstractOrder item)
	{
		return getAttachmentUploadStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.AttachmentUploadStatus</code> attribute. 
	 * @param value the AttachmentUploadStatus
	 */
	public void setAttachmentUploadStatus(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ATTACHMENTUPLOADSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.AttachmentUploadStatus</code> attribute. 
	 * @param value the AttachmentUploadStatus
	 */
	public void setAttachmentUploadStatus(final AbstractOrder item, final EnumerationValue value)
	{
		setAttachmentUploadStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CPQOrderEntryProductInfo.author</code> attribute.
	 * @return the author - author value of configuration
	 */
	public String getAuthor(final SessionContext ctx, final CPQOrderEntryProductInfo item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.CPQOrderEntryProductInfo.AUTHOR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CPQOrderEntryProductInfo.author</code> attribute.
	 * @return the author - author value of configuration
	 */
	public String getAuthor(final CPQOrderEntryProductInfo item)
	{
		return getAuthor( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CPQOrderEntryProductInfo.author</code> attribute. 
	 * @param value the author - author value of configuration
	 */
	public void setAuthor(final SessionContext ctx, final CPQOrderEntryProductInfo item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.CPQOrderEntryProductInfo.AUTHOR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CPQOrderEntryProductInfo.author</code> attribute. 
	 * @param value the author - author value of configuration
	 */
	public void setAuthor(final CPQOrderEntryProductInfo item, final String value)
	{
		setAuthor( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.authorizedPaymentAmount</code> attribute.
	 * @return the authorizedPaymentAmount
	 */
	public String getAuthorizedPaymentAmount(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.AUTHORIZEDPAYMENTAMOUNT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.authorizedPaymentAmount</code> attribute.
	 * @return the authorizedPaymentAmount
	 */
	public String getAuthorizedPaymentAmount(final AbstractOrder item)
	{
		return getAuthorizedPaymentAmount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.authorizedPaymentAmount</code> attribute. 
	 * @param value the authorizedPaymentAmount
	 */
	public void setAuthorizedPaymentAmount(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.AUTHORIZEDPAYMENTAMOUNT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.authorizedPaymentAmount</code> attribute. 
	 * @param value the authorizedPaymentAmount
	 */
	public void setAuthorizedPaymentAmount(final AbstractOrder item, final String value)
	{
		setAuthorizedPaymentAmount( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.availabilityDetails</code> attribute.
	 * @return the availabilityDetails - Availability Details
	 */
	public Collection<GEEdgeAvailabilityDetail> getAvailabilityDetails(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Collection<GEEdgeAvailabilityDetail> coll = (Collection<GEEdgeAvailabilityDetail>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.AVAILABILITYDETAILS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.availabilityDetails</code> attribute.
	 * @return the availabilityDetails - Availability Details
	 */
	public Collection<GEEdgeAvailabilityDetail> getAvailabilityDetails(final AbstractOrderEntry item)
	{
		return getAvailabilityDetails( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.availabilityDetails</code> attribute. 
	 * @param value the availabilityDetails - Availability Details
	 */
	public void setAvailabilityDetails(final SessionContext ctx, final AbstractOrderEntry item, final Collection<GEEdgeAvailabilityDetail> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.AVAILABILITYDETAILS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.availabilityDetails</code> attribute. 
	 * @param value the availabilityDetails - Availability Details
	 */
	public void setAvailabilityDetails(final AbstractOrderEntry item, final Collection<GEEdgeAvailabilityDetail> value)
	{
		setAvailabilityDetails( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.availableLineText</code> attribute.
	 * @return the availableLineText
	 */
	public String getAvailableLineText(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.AVAILABLELINETEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.availableLineText</code> attribute.
	 * @return the availableLineText
	 */
	public String getAvailableLineText(final SAPCpiOutboundOrderItem item)
	{
		return getAvailableLineText( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.availableLineText</code> attribute. 
	 * @param value the availableLineText
	 */
	public void setAvailableLineText(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.AVAILABLELINETEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.availableLineText</code> attribute. 
	 * @param value the availableLineText
	 */
	public void setAvailableLineText(final SAPCpiOutboundOrderItem item, final String value)
	{
		setAvailableLineText( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.availableQuantity</code> attribute.
	 * @return the availableQuantity - Available Quantity
	 */
	public String getAvailableQuantity(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.AVAILABLEQUANTITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.availableQuantity</code> attribute.
	 * @return the availableQuantity - Available Quantity
	 */
	public String getAvailableQuantity(final AbstractOrderEntry item)
	{
		return getAvailableQuantity( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.availableQuantity</code> attribute. 
	 * @param value the availableQuantity - Available Quantity
	 */
	public void setAvailableQuantity(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.AVAILABLEQUANTITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.availableQuantity</code> attribute. 
	 * @param value the availableQuantity - Available Quantity
	 */
	public void setAvailableQuantity(final AbstractOrderEntry item, final String value)
	{
		setAvailableQuantity( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.availableSites</code> attribute.
	 * @return the availableSites
	 */
	public List<String> getAvailableSites(final SessionContext ctx, final AbstractOrderEntry item)
	{
		List<String> coll = (List<String>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.AVAILABLESITES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.availableSites</code> attribute.
	 * @return the availableSites
	 */
	public List<String> getAvailableSites(final AbstractOrderEntry item)
	{
		return getAvailableSites( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.availableSites</code> attribute. 
	 * @param value the availableSites
	 */
	public void setAvailableSites(final SessionContext ctx, final AbstractOrderEntry item, final List<String> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.AVAILABLESITES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.availableSites</code> attribute. 
	 * @param value the availableSites
	 */
	public void setAvailableSites(final AbstractOrderEntry item, final List<String> value)
	{
		setAvailableSites( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.b2bUnit</code> attribute.
	 * @return the b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public List<B2BUnit> getB2bUnit(final SessionContext ctx, final Category item)
	{
		final List<B2BUnit> items = item.getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			"B2BUnit",
			null,
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.b2bUnit</code> attribute.
	 * @return the b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public List<B2BUnit> getB2bUnit(final Category item)
	{
		return getB2bUnit( getSession().getSessionContext(), item );
	}
	
	public long getB2bUnitCount(final SessionContext ctx, final Category item)
	{
		return item.getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			"B2BUnit",
			null
		);
	}
	
	public long getB2bUnitCount(final Category item)
	{
		return getB2bUnitCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.b2bUnit</code> attribute. 
	 * @param value the b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public void setB2bUnit(final SessionContext ctx, final Category item, final List<B2BUnit> value)
	{
		item.setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(B2BUNIT2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.b2bUnit</code> attribute. 
	 * @param value the b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public void setB2bUnit(final Category item, final List<B2BUnit> value)
	{
		setB2bUnit( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to b2bUnit. 
	 * @param value the item to add to b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public void addToB2bUnit(final SessionContext ctx, final Category item, final B2BUnit value)
	{
		item.addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(B2BUNIT2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to b2bUnit. 
	 * @param value the item to add to b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public void addToB2bUnit(final Category item, final B2BUnit value)
	{
		addToB2bUnit( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from b2bUnit. 
	 * @param value the item to remove from b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public void removeFromB2bUnit(final SessionContext ctx, final Category item, final B2BUnit value)
	{
		item.removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(B2BUNIT2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from b2bUnit. 
	 * @param value the item to remove from b2bUnit - B2B Unit which are allowed to access this catalog category
	 */
	public void removeFromB2bUnit(final Category item, final B2BUnit value)
	{
		removeFromB2bUnit( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.basePrice</code> attribute.
	 * @return the basePrice
	 */
	public Double getBasePrice(final SessionContext ctx, final Product item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.Product.BASEPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.basePrice</code> attribute.
	 * @return the basePrice
	 */
	public Double getBasePrice(final Product item)
	{
		return getBasePrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.basePrice</code> attribute. 
	 * @return the basePrice
	 */
	public double getBasePriceAsPrimitive(final SessionContext ctx, final Product item)
	{
		Double value = getBasePrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.basePrice</code> attribute. 
	 * @return the basePrice
	 */
	public double getBasePriceAsPrimitive(final Product item)
	{
		return getBasePriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.basePrice</code> attribute. 
	 * @param value the basePrice
	 */
	public void setBasePrice(final SessionContext ctx, final Product item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Product.BASEPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.basePrice</code> attribute. 
	 * @param value the basePrice
	 */
	public void setBasePrice(final Product item, final Double value)
	{
		setBasePrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.basePrice</code> attribute. 
	 * @param value the basePrice
	 */
	public void setBasePrice(final SessionContext ctx, final Product item, final double value)
	{
		setBasePrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.basePrice</code> attribute. 
	 * @param value the basePrice
	 */
	public void setBasePrice(final Product item, final double value)
	{
		setBasePrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>EnumerationValue.baseStore</code> attribute.
	 * @return the baseStore
	 */
	public Collection<BaseStore> getBaseStore(final SessionContext ctx, final EnumerationValue item)
	{
		final List<BaseStore> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			"BaseStore",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>EnumerationValue.baseStore</code> attribute.
	 * @return the baseStore
	 */
	public Collection<BaseStore> getBaseStore(final EnumerationValue item)
	{
		return getBaseStore( getSession().getSessionContext(), item );
	}
	
	public long getBaseStoreCount(final SessionContext ctx, final EnumerationValue item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			"BaseStore",
			null
		);
	}
	
	public long getBaseStoreCount(final EnumerationValue item)
	{
		return getBaseStoreCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>EnumerationValue.baseStore</code> attribute. 
	 * @param value the baseStore
	 */
	public void setBaseStore(final SessionContext ctx, final EnumerationValue item, final Collection<BaseStore> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>EnumerationValue.baseStore</code> attribute. 
	 * @param value the baseStore
	 */
	public void setBaseStore(final EnumerationValue item, final Collection<BaseStore> value)
	{
		setBaseStore( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to baseStore. 
	 * @param value the item to add to baseStore
	 */
	public void addToBaseStore(final SessionContext ctx, final EnumerationValue item, final BaseStore value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to baseStore. 
	 * @param value the item to add to baseStore
	 */
	public void addToBaseStore(final EnumerationValue item, final BaseStore value)
	{
		addToBaseStore( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from baseStore. 
	 * @param value the item to remove from baseStore
	 */
	public void removeFromBaseStore(final SessionContext ctx, final EnumerationValue item, final BaseStore value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from baseStore. 
	 * @param value the item to remove from baseStore
	 */
	public void removeFromBaseStore(final EnumerationValue item, final BaseStore value)
	{
		removeFromBaseStore( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeAdditionalInfo</code> attribute.
	 * @return the bhgeAdditionalInfo
	 */
	public BHGEAdditionalInfo getBhgeAdditionalInfo(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (BHGEAdditionalInfo)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.BHGEADDITIONALINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeAdditionalInfo</code> attribute.
	 * @return the bhgeAdditionalInfo
	 */
	public BHGEAdditionalInfo getBhgeAdditionalInfo(final AbstractOrderEntry item)
	{
		return getBhgeAdditionalInfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeAdditionalInfo</code> attribute. 
	 * @param value the bhgeAdditionalInfo
	 */
	public void setBhgeAdditionalInfo(final SessionContext ctx, final AbstractOrderEntry item, final BHGEAdditionalInfo value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.BHGEADDITIONALINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeAdditionalInfo</code> attribute. 
	 * @param value the bhgeAdditionalInfo
	 */
	public void setBhgeAdditionalInfo(final AbstractOrderEntry item, final BHGEAdditionalInfo value)
	{
		setBhgeAdditionalInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.bhgeAnonymousUserCatalog</code> attribute.
	 * @return the bhgeAnonymousUserCatalog
	 */
	public Collection<BHGEAnonymousUserCatalog> getBhgeAnonymousUserCatalog(final SessionContext ctx, final Category item)
	{
		final List<BHGEAnonymousUserCatalog> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			"BHGEAnonymousUserCatalog",
			null,
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.bhgeAnonymousUserCatalog</code> attribute.
	 * @return the bhgeAnonymousUserCatalog
	 */
	public Collection<BHGEAnonymousUserCatalog> getBhgeAnonymousUserCatalog(final Category item)
	{
		return getBhgeAnonymousUserCatalog( getSession().getSessionContext(), item );
	}
	
	public long getBhgeAnonymousUserCatalogCount(final SessionContext ctx, final Category item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			"BHGEAnonymousUserCatalog",
			null
		);
	}
	
	public long getBhgeAnonymousUserCatalogCount(final Category item)
	{
		return getBhgeAnonymousUserCatalogCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.bhgeAnonymousUserCatalog</code> attribute. 
	 * @param value the bhgeAnonymousUserCatalog
	 */
	public void setBhgeAnonymousUserCatalog(final SessionContext ctx, final Category item, final Collection<BHGEAnonymousUserCatalog> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			null,
			value,
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.bhgeAnonymousUserCatalog</code> attribute. 
	 * @param value the bhgeAnonymousUserCatalog
	 */
	public void setBhgeAnonymousUserCatalog(final Category item, final Collection<BHGEAnonymousUserCatalog> value)
	{
		setBhgeAnonymousUserCatalog( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeAnonymousUserCatalog. 
	 * @param value the item to add to bhgeAnonymousUserCatalog
	 */
	public void addToBhgeAnonymousUserCatalog(final SessionContext ctx, final Category item, final BHGEAnonymousUserCatalog value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeAnonymousUserCatalog. 
	 * @param value the item to add to bhgeAnonymousUserCatalog
	 */
	public void addToBhgeAnonymousUserCatalog(final Category item, final BHGEAnonymousUserCatalog value)
	{
		addToBhgeAnonymousUserCatalog( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeAnonymousUserCatalog. 
	 * @param value the item to remove from bhgeAnonymousUserCatalog
	 */
	public void removeFromBhgeAnonymousUserCatalog(final SessionContext ctx, final Category item, final BHGEAnonymousUserCatalog value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.BHGEANONYMOUSTOCATEGORYMAPPING,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(BHGEANONYMOUSTOCATEGORYMAPPING_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(BHGEANONYMOUSTOCATEGORYMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeAnonymousUserCatalog. 
	 * @param value the item to remove from bhgeAnonymousUserCatalog
	 */
	public void removeFromBhgeAnonymousUserCatalog(final Category item, final BHGEAnonymousUserCatalog value)
	{
		removeFromBhgeAnonymousUserCatalog( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.bhgeCreditCardPaymentInfo</code> attribute.
	 * @return the bhgeCreditCardPaymentInfo
	 */
	public BHGECreditCardPaymnentinfo getBhgeCreditCardPaymentInfo(final SessionContext ctx, final AbstractOrder item)
	{
		return (BHGECreditCardPaymnentinfo)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.BHGECREDITCARDPAYMENTINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.bhgeCreditCardPaymentInfo</code> attribute.
	 * @return the bhgeCreditCardPaymentInfo
	 */
	public BHGECreditCardPaymnentinfo getBhgeCreditCardPaymentInfo(final AbstractOrder item)
	{
		return getBhgeCreditCardPaymentInfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.bhgeCreditCardPaymentInfo</code> attribute. 
	 * @param value the bhgeCreditCardPaymentInfo
	 */
	public void setBhgeCreditCardPaymentInfo(final SessionContext ctx, final AbstractOrder item, final BHGECreditCardPaymnentinfo value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.BHGECREDITCARDPAYMENTINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.bhgeCreditCardPaymentInfo</code> attribute. 
	 * @param value the bhgeCreditCardPaymentInfo
	 */
	public void setBhgeCreditCardPaymentInfo(final AbstractOrder item, final BHGECreditCardPaymnentinfo value)
	{
		setBhgeCreditCardPaymentInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.bhgeHazardousInfo</code> attribute.
	 * @return the bhgeHazardousInfo
	 */
	public BHGEHazardousInfo getBhgeHazardousInfo(final SessionContext ctx, final AbstractOrder item)
	{
		return (BHGEHazardousInfo)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.BHGEHAZARDOUSINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.bhgeHazardousInfo</code> attribute.
	 * @return the bhgeHazardousInfo
	 */
	public BHGEHazardousInfo getBhgeHazardousInfo(final AbstractOrder item)
	{
		return getBhgeHazardousInfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.bhgeHazardousInfo</code> attribute. 
	 * @param value the bhgeHazardousInfo
	 */
	public void setBhgeHazardousInfo(final SessionContext ctx, final AbstractOrder item, final BHGEHazardousInfo value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.BHGEHAZARDOUSINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.bhgeHazardousInfo</code> attribute. 
	 * @param value the bhgeHazardousInfo
	 */
	public void setBhgeHazardousInfo(final AbstractOrder item, final BHGEHazardousInfo value)
	{
		setBhgeHazardousInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeHazardousInfo</code> attribute.
	 * @return the bhgeHazardousInfo
	 */
	public BHGEHazardousInfo getBhgeHazardousInfo(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (BHGEHazardousInfo)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.BHGEHAZARDOUSINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeHazardousInfo</code> attribute.
	 * @return the bhgeHazardousInfo
	 */
	public BHGEHazardousInfo getBhgeHazardousInfo(final AbstractOrderEntry item)
	{
		return getBhgeHazardousInfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeHazardousInfo</code> attribute. 
	 * @param value the bhgeHazardousInfo
	 */
	public void setBhgeHazardousInfo(final SessionContext ctx, final AbstractOrderEntry item, final BHGEHazardousInfo value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.BHGEHAZARDOUSINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeHazardousInfo</code> attribute. 
	 * @param value the bhgeHazardousInfo
	 */
	public void setBhgeHazardousInfo(final AbstractOrderEntry item, final BHGEHazardousInfo value)
	{
		setBhgeHazardousInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeKBInformation</code> attribute.
	 * @return the bhgeKBInformation
	 */
	public BHGEKBInformation getBhgeKBInformation(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (BHGEKBInformation)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.BHGEKBINFORMATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeKBInformation</code> attribute.
	 * @return the bhgeKBInformation
	 */
	public BHGEKBInformation getBhgeKBInformation(final AbstractOrderEntry item)
	{
		return getBhgeKBInformation( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeKBInformation</code> attribute. 
	 * @param value the bhgeKBInformation
	 */
	public void setBhgeKBInformation(final SessionContext ctx, final AbstractOrderEntry item, final BHGEKBInformation value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.BHGEKBINFORMATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeKBInformation</code> attribute. 
	 * @param value the bhgeKBInformation
	 */
	public void setBhgeKBInformation(final AbstractOrderEntry item, final BHGEKBInformation value)
	{
		setBhgeKBInformation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeRmaEquipSerialNumber</code> attribute.
	 * @return the bhgeRmaEquipSerialNumber
	 */
	public Collection<BHGERmaEquipSerialNumber> getBhgeRmaEquipSerialNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return ABSTRACTORDERENTRY2BHGERMAEQUIPSERIALNUMBERBHGERMAEQUIPSERIALNUMBERHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeRmaEquipSerialNumber</code> attribute.
	 * @return the bhgeRmaEquipSerialNumber
	 */
	public Collection<BHGERmaEquipSerialNumber> getBhgeRmaEquipSerialNumber(final AbstractOrderEntry item)
	{
		return getBhgeRmaEquipSerialNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeRmaEquipSerialNumber</code> attribute. 
	 * @param value the bhgeRmaEquipSerialNumber
	 */
	public void setBhgeRmaEquipSerialNumber(final SessionContext ctx, final AbstractOrderEntry item, final Collection<BHGERmaEquipSerialNumber> value)
	{
		ABSTRACTORDERENTRY2BHGERMAEQUIPSERIALNUMBERBHGERMAEQUIPSERIALNUMBERHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeRmaEquipSerialNumber</code> attribute. 
	 * @param value the bhgeRmaEquipSerialNumber
	 */
	public void setBhgeRmaEquipSerialNumber(final AbstractOrderEntry item, final Collection<BHGERmaEquipSerialNumber> value)
	{
		setBhgeRmaEquipSerialNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeRmaEquipSerialNumber. 
	 * @param value the item to add to bhgeRmaEquipSerialNumber
	 */
	public void addToBhgeRmaEquipSerialNumber(final SessionContext ctx, final AbstractOrderEntry item, final BHGERmaEquipSerialNumber value)
	{
		ABSTRACTORDERENTRY2BHGERMAEQUIPSERIALNUMBERBHGERMAEQUIPSERIALNUMBERHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeRmaEquipSerialNumber. 
	 * @param value the item to add to bhgeRmaEquipSerialNumber
	 */
	public void addToBhgeRmaEquipSerialNumber(final AbstractOrderEntry item, final BHGERmaEquipSerialNumber value)
	{
		addToBhgeRmaEquipSerialNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeRmaEquipSerialNumber. 
	 * @param value the item to remove from bhgeRmaEquipSerialNumber
	 */
	public void removeFromBhgeRmaEquipSerialNumber(final SessionContext ctx, final AbstractOrderEntry item, final BHGERmaEquipSerialNumber value)
	{
		ABSTRACTORDERENTRY2BHGERMAEQUIPSERIALNUMBERBHGERMAEQUIPSERIALNUMBERHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeRmaEquipSerialNumber. 
	 * @param value the item to remove from bhgeRmaEquipSerialNumber
	 */
	public void removeFromBhgeRmaEquipSerialNumber(final AbstractOrderEntry item, final BHGERmaEquipSerialNumber value)
	{
		removeFromBhgeRmaEquipSerialNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeServiceOfferings</code> attribute.
	 * @return the bhgeServiceOfferings
	 */
	public Collection<BHGEServiceOfferings> getBhgeServiceOfferings(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return ABSTRACTORDERENTRY2BHGESERVICEOFFERINGSBHGESERVICEOFFERINGSHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.bhgeServiceOfferings</code> attribute.
	 * @return the bhgeServiceOfferings
	 */
	public Collection<BHGEServiceOfferings> getBhgeServiceOfferings(final AbstractOrderEntry item)
	{
		return getBhgeServiceOfferings( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeServiceOfferings</code> attribute. 
	 * @param value the bhgeServiceOfferings
	 */
	public void setBhgeServiceOfferings(final SessionContext ctx, final AbstractOrderEntry item, final Collection<BHGEServiceOfferings> value)
	{
		ABSTRACTORDERENTRY2BHGESERVICEOFFERINGSBHGESERVICEOFFERINGSHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.bhgeServiceOfferings</code> attribute. 
	 * @param value the bhgeServiceOfferings
	 */
	public void setBhgeServiceOfferings(final AbstractOrderEntry item, final Collection<BHGEServiceOfferings> value)
	{
		setBhgeServiceOfferings( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeServiceOfferings. 
	 * @param value the item to add to bhgeServiceOfferings
	 */
	public void addToBhgeServiceOfferings(final SessionContext ctx, final AbstractOrderEntry item, final BHGEServiceOfferings value)
	{
		ABSTRACTORDERENTRY2BHGESERVICEOFFERINGSBHGESERVICEOFFERINGSHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to bhgeServiceOfferings. 
	 * @param value the item to add to bhgeServiceOfferings
	 */
	public void addToBhgeServiceOfferings(final AbstractOrderEntry item, final BHGEServiceOfferings value)
	{
		addToBhgeServiceOfferings( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeServiceOfferings. 
	 * @param value the item to remove from bhgeServiceOfferings
	 */
	public void removeFromBhgeServiceOfferings(final SessionContext ctx, final AbstractOrderEntry item, final BHGEServiceOfferings value)
	{
		ABSTRACTORDERENTRY2BHGESERVICEOFFERINGSBHGESERVICEOFFERINGSHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from bhgeServiceOfferings. 
	 * @param value the item to remove from bhgeServiceOfferings
	 */
	public void removeFromBhgeServiceOfferings(final AbstractOrderEntry item, final BHGEServiceOfferings value)
	{
		removeFromBhgeServiceOfferings( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.carrierName</code> attribute.
	 * @return the carrierName
	 */
	public String getCarrierName(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CARRIERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.carrierName</code> attribute.
	 * @return the carrierName
	 */
	public String getCarrierName(final AbstractOrder item)
	{
		return getCarrierName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.carrierName</code> attribute. 
	 * @param value the carrierName
	 */
	public void setCarrierName(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CARRIERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.carrierName</code> attribute. 
	 * @param value the carrierName
	 */
	public void setCarrierName(final AbstractOrder item, final String value)
	{
		setCarrierName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.cartProfile</code> attribute.
	 * @return the cartProfile
	 */
	public BHGECartProfile getCartProfile(final SessionContext ctx, final AbstractOrder item)
	{
		return (BHGECartProfile)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CARTPROFILE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.cartProfile</code> attribute.
	 * @return the cartProfile
	 */
	public BHGECartProfile getCartProfile(final AbstractOrder item)
	{
		return getCartProfile( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.cartProfile</code> attribute. 
	 * @param value the cartProfile
	 */
	public void setCartProfile(final SessionContext ctx, final AbstractOrder item, final BHGECartProfile value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CARTPROFILE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.cartProfile</code> attribute. 
	 * @param value the cartProfile
	 */
	public void setCartProfile(final AbstractOrder item, final BHGECartProfile value)
	{
		setCartProfile( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.cartType</code> attribute.
	 * @return the cartType - Cart Type
	 */
	public EnumerationValue getCartType(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CARTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.cartType</code> attribute.
	 * @return the cartType - Cart Type
	 */
	public EnumerationValue getCartType(final AbstractOrder item)
	{
		return getCartType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.cartType</code> attribute. 
	 * @param value the cartType - Cart Type
	 */
	public void setCartType(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CARTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.cartType</code> attribute. 
	 * @param value the cartType - Cart Type
	 */
	public void setCartType(final AbstractOrder item, final EnumerationValue value)
	{
		setCartType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.charge</code> attribute.
	 * @return the charge - Charge Value
	 */
	public String getCharge(final SessionContext ctx, final SAPSalesOrganization item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.CHARGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.charge</code> attribute.
	 * @return the charge - Charge Value
	 */
	public String getCharge(final SAPSalesOrganization item)
	{
		return getCharge( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.charge</code> attribute. 
	 * @param value the charge - Charge Value
	 */
	public void setCharge(final SessionContext ctx, final SAPSalesOrganization item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.CHARGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.charge</code> attribute. 
	 * @param value the charge - Charge Value
	 */
	public void setCharge(final SAPSalesOrganization item, final String value)
	{
		setCharge( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.checkoutPdfStatus</code> attribute.
	 * @return the checkoutPdfStatus
	 */
	public EnumerationValue getCheckoutPdfStatus(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CHECKOUTPDFSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.checkoutPdfStatus</code> attribute.
	 * @return the checkoutPdfStatus
	 */
	public EnumerationValue getCheckoutPdfStatus(final AbstractOrder item)
	{
		return getCheckoutPdfStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.checkoutPdfStatus</code> attribute. 
	 * @param value the checkoutPdfStatus
	 */
	public void setCheckoutPdfStatus(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CHECKOUTPDFSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.checkoutPdfStatus</code> attribute. 
	 * @param value the checkoutPdfStatus
	 */
	public void setCheckoutPdfStatus(final AbstractOrder item, final EnumerationValue value)
	{
		setCheckoutPdfStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundAddress.checkStatus</code> attribute.
	 * @return the checkStatus
	 */
	public String getCheckStatus(final SessionContext ctx, final SAPCpiOutboundAddress item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundAddress.CHECKSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundAddress.checkStatus</code> attribute.
	 * @return the checkStatus
	 */
	public String getCheckStatus(final SAPCpiOutboundAddress item)
	{
		return getCheckStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundAddress.checkStatus</code> attribute. 
	 * @param value the checkStatus
	 */
	public void setCheckStatus(final SessionContext ctx, final SAPCpiOutboundAddress item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundAddress.CHECKSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundAddress.checkStatus</code> attribute. 
	 * @param value the checkStatus
	 */
	public void setCheckStatus(final SAPCpiOutboundAddress item, final String value)
	{
		setCheckStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.chemicalEntries</code> attribute.
	 * @return the chemicalEntries
	 */
	public List<Chemicals> getChemicalEntries(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (List<Chemicals>)ABSTRACTORDERENTRY2CHEMICALSCHEMICALENTRIESHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.chemicalEntries</code> attribute.
	 * @return the chemicalEntries
	 */
	public List<Chemicals> getChemicalEntries(final AbstractOrderEntry item)
	{
		return getChemicalEntries( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.chemicalEntries</code> attribute. 
	 * @param value the chemicalEntries
	 */
	public void setChemicalEntries(final SessionContext ctx, final AbstractOrderEntry item, final List<Chemicals> value)
	{
		ABSTRACTORDERENTRY2CHEMICALSCHEMICALENTRIESHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.chemicalEntries</code> attribute. 
	 * @param value the chemicalEntries
	 */
	public void setChemicalEntries(final AbstractOrderEntry item, final List<Chemicals> value)
	{
		setChemicalEntries( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to chemicalEntries. 
	 * @param value the item to add to chemicalEntries
	 */
	public void addToChemicalEntries(final SessionContext ctx, final AbstractOrderEntry item, final Chemicals value)
	{
		ABSTRACTORDERENTRY2CHEMICALSCHEMICALENTRIESHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to chemicalEntries. 
	 * @param value the item to add to chemicalEntries
	 */
	public void addToChemicalEntries(final AbstractOrderEntry item, final Chemicals value)
	{
		addToChemicalEntries( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from chemicalEntries. 
	 * @param value the item to remove from chemicalEntries
	 */
	public void removeFromChemicalEntries(final SessionContext ctx, final AbstractOrderEntry item, final Chemicals value)
	{
		ABSTRACTORDERENTRY2CHEMICALSCHEMICALENTRIESHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from chemicalEntries. 
	 * @param value the item to remove from chemicalEntries
	 */
	public void removeFromChemicalEntries(final AbstractOrderEntry item, final Chemicals value)
	{
		removeFromChemicalEntries( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.city</code> attribute.
	 * @return the city
	 */
	public String getCity(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.CITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.city</code> attribute.
	 * @return the city
	 */
	public String getCity(final Quote item)
	{
		return getCity( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.city</code> attribute. 
	 * @param value the city
	 */
	public void setCity(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.CITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.city</code> attribute. 
	 * @param value the city
	 */
	public void setCity(final Quote item, final String value)
	{
		setCity( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.commerceType</code> attribute.
	 * @return the commerceType - Commerce Type
	 */
	public EnumerationValue getCommerceType(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.COMMERCETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.commerceType</code> attribute.
	 * @return the commerceType - Commerce Type
	 */
	public EnumerationValue getCommerceType(final AbstractOrder item)
	{
		return getCommerceType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.commerceType</code> attribute. 
	 * @param value the commerceType - Commerce Type
	 */
	public void setCommerceType(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.COMMERCETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.commerceType</code> attribute. 
	 * @param value the commerceType - Commerce Type
	 */
	public void setCommerceType(final AbstractOrder item, final EnumerationValue value)
	{
		setCommerceType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.company</code> attribute.
	 * @return the company
	 */
	public String getCompany(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.COMPANY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.company</code> attribute.
	 * @return the company
	 */
	public String getCompany(final Quote item)
	{
		return getCompany( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.company</code> attribute. 
	 * @param value the company
	 */
	public void setCompany(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.COMPANY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.company</code> attribute. 
	 * @param value the company
	 */
	public void setCompany(final Quote item, final String value)
	{
		setCompany( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundAddress.company</code> attribute.
	 * @return the company
	 */
	public String getCompany(final SessionContext ctx, final SAPCpiOutboundAddress item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundAddress.COMPANY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundAddress.company</code> attribute.
	 * @return the company
	 */
	public String getCompany(final SAPCpiOutboundAddress item)
	{
		return getCompany( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundAddress.company</code> attribute. 
	 * @param value the company
	 */
	public void setCompany(final SessionContext ctx, final SAPCpiOutboundAddress item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundAddress.COMPANY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundAddress.company</code> attribute. 
	 * @param value the company
	 */
	public void setCompany(final SAPCpiOutboundAddress item, final String value)
	{
		setCompany( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.componentPrices</code> attribute.
	 * @return the componentPrices - VC Component Prices
	 */
	public List<VCComponentPrice> getComponentPrices(final SessionContext ctx, final AbstractOrderEntry item)
	{
		List<VCComponentPrice> coll = (List<VCComponentPrice>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.COMPONENTPRICES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.componentPrices</code> attribute.
	 * @return the componentPrices - VC Component Prices
	 */
	public List<VCComponentPrice> getComponentPrices(final AbstractOrderEntry item)
	{
		return getComponentPrices( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.componentPrices</code> attribute. 
	 * @param value the componentPrices - VC Component Prices
	 */
	public void setComponentPrices(final SessionContext ctx, final AbstractOrderEntry item, final List<VCComponentPrice> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.COMPONENTPRICES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.componentPrices</code> attribute. 
	 * @param value the componentPrices - VC Component Prices
	 */
	public void setComponentPrices(final AbstractOrderEntry item, final List<VCComponentPrice> value)
	{
		setComponentPrices( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute.
	 * @return the configAttachmentUploaded
	 */
	public Boolean isConfigAttachmentUploaded(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.CONFIGATTACHMENTUPLOADED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute.
	 * @return the configAttachmentUploaded
	 */
	public Boolean isConfigAttachmentUploaded(final AbstractOrderEntry item)
	{
		return isConfigAttachmentUploaded( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute. 
	 * @return the configAttachmentUploaded
	 */
	public boolean isConfigAttachmentUploadedAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isConfigAttachmentUploaded( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute. 
	 * @return the configAttachmentUploaded
	 */
	public boolean isConfigAttachmentUploadedAsPrimitive(final AbstractOrderEntry item)
	{
		return isConfigAttachmentUploadedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute. 
	 * @param value the configAttachmentUploaded
	 */
	public void setConfigAttachmentUploaded(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.CONFIGATTACHMENTUPLOADED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute. 
	 * @param value the configAttachmentUploaded
	 */
	public void setConfigAttachmentUploaded(final AbstractOrderEntry item, final Boolean value)
	{
		setConfigAttachmentUploaded( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute. 
	 * @param value the configAttachmentUploaded
	 */
	public void setConfigAttachmentUploaded(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setConfigAttachmentUploaded( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configAttachmentUploaded</code> attribute. 
	 * @param value the configAttachmentUploaded
	 */
	public void setConfigAttachmentUploaded(final AbstractOrderEntry item, final boolean value)
	{
		setConfigAttachmentUploaded( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configurationAttachment</code> attribute.
	 * @return the configurationAttachment
	 */
	public Media getConfigurationAttachment(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Media)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.CONFIGURATIONATTACHMENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configurationAttachment</code> attribute.
	 * @return the configurationAttachment
	 */
	public Media getConfigurationAttachment(final AbstractOrderEntry item)
	{
		return getConfigurationAttachment( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configurationAttachment</code> attribute. 
	 * @param value the configurationAttachment
	 */
	public void setConfigurationAttachment(final SessionContext ctx, final AbstractOrderEntry item, final Media value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.CONFIGURATIONATTACHMENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configurationAttachment</code> attribute. 
	 * @param value the configurationAttachment
	 */
	public void setConfigurationAttachment(final AbstractOrderEntry item, final Media value)
	{
		setConfigurationAttachment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.configurationBlock</code> attribute.
	 * @return the configurationBlock
	 */
	public Boolean isConfigurationBlock(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CONFIGURATIONBLOCK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.configurationBlock</code> attribute.
	 * @return the configurationBlock
	 */
	public Boolean isConfigurationBlock(final AbstractOrder item)
	{
		return isConfigurationBlock( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.configurationBlock</code> attribute. 
	 * @return the configurationBlock
	 */
	public boolean isConfigurationBlockAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isConfigurationBlock( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.configurationBlock</code> attribute. 
	 * @return the configurationBlock
	 */
	public boolean isConfigurationBlockAsPrimitive(final AbstractOrder item)
	{
		return isConfigurationBlockAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.configurationBlock</code> attribute. 
	 * @param value the configurationBlock
	 */
	public void setConfigurationBlock(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CONFIGURATIONBLOCK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.configurationBlock</code> attribute. 
	 * @param value the configurationBlock
	 */
	public void setConfigurationBlock(final AbstractOrder item, final Boolean value)
	{
		setConfigurationBlock( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.configurationBlock</code> attribute. 
	 * @param value the configurationBlock
	 */
	public void setConfigurationBlock(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setConfigurationBlock( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.configurationBlock</code> attribute. 
	 * @param value the configurationBlock
	 */
	public void setConfigurationBlock(final AbstractOrder item, final boolean value)
	{
		setConfigurationBlock( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.configurationBlock</code> attribute.
	 * @return the configurationBlock
	 */
	public String getConfigurationBlock(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.CONFIGURATIONBLOCK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.configurationBlock</code> attribute.
	 * @return the configurationBlock
	 */
	public String getConfigurationBlock(final SAPCpiOutboundOrder item)
	{
		return getConfigurationBlock( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.configurationBlock</code> attribute. 
	 * @param value the configurationBlock
	 */
	public void setConfigurationBlock(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.CONFIGURATIONBLOCK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.configurationBlock</code> attribute. 
	 * @param value the configurationBlock
	 */
	public void setConfigurationBlock(final SAPCpiOutboundOrder item, final String value)
	{
		setConfigurationBlock( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configurationInstance</code> attribute.
	 * @return the configurationInstance
	 */
	public List<BHGEConfigurationInstance> getConfigurationInstance(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (List<BHGEConfigurationInstance>)ABSTRACTORDERENTRY2CONFIGINSTANCERELCONFIGURATIONINSTANCEHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configurationInstance</code> attribute.
	 * @return the configurationInstance
	 */
	public List<BHGEConfigurationInstance> getConfigurationInstance(final AbstractOrderEntry item)
	{
		return getConfigurationInstance( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configurationInstance</code> attribute. 
	 * @param value the configurationInstance
	 */
	public void setConfigurationInstance(final SessionContext ctx, final AbstractOrderEntry item, final List<BHGEConfigurationInstance> value)
	{
		ABSTRACTORDERENTRY2CONFIGINSTANCERELCONFIGURATIONINSTANCEHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configurationInstance</code> attribute. 
	 * @param value the configurationInstance
	 */
	public void setConfigurationInstance(final AbstractOrderEntry item, final List<BHGEConfigurationInstance> value)
	{
		setConfigurationInstance( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to configurationInstance. 
	 * @param value the item to add to configurationInstance
	 */
	public void addToConfigurationInstance(final SessionContext ctx, final AbstractOrderEntry item, final BHGEConfigurationInstance value)
	{
		ABSTRACTORDERENTRY2CONFIGINSTANCERELCONFIGURATIONINSTANCEHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to configurationInstance. 
	 * @param value the item to add to configurationInstance
	 */
	public void addToConfigurationInstance(final AbstractOrderEntry item, final BHGEConfigurationInstance value)
	{
		addToConfigurationInstance( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from configurationInstance. 
	 * @param value the item to remove from configurationInstance
	 */
	public void removeFromConfigurationInstance(final SessionContext ctx, final AbstractOrderEntry item, final BHGEConfigurationInstance value)
	{
		ABSTRACTORDERENTRY2CONFIGINSTANCERELCONFIGURATIONINSTANCEHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from configurationInstance. 
	 * @param value the item to remove from configurationInstance
	 */
	public void removeFromConfigurationInstance(final AbstractOrderEntry item, final BHGEConfigurationInstance value)
	{
		removeFromConfigurationInstance( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configurationPart</code> attribute.
	 * @return the configurationPart
	 */
	public List<BHGEConfigurationPart> getConfigurationPart(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (List<BHGEConfigurationPart>)ABSTRACTORDERENTRY2CONFIGPARTRELCONFIGURATIONPARTHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.configurationPart</code> attribute.
	 * @return the configurationPart
	 */
	public List<BHGEConfigurationPart> getConfigurationPart(final AbstractOrderEntry item)
	{
		return getConfigurationPart( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configurationPart</code> attribute. 
	 * @param value the configurationPart
	 */
	public void setConfigurationPart(final SessionContext ctx, final AbstractOrderEntry item, final List<BHGEConfigurationPart> value)
	{
		ABSTRACTORDERENTRY2CONFIGPARTRELCONFIGURATIONPARTHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.configurationPart</code> attribute. 
	 * @param value the configurationPart
	 */
	public void setConfigurationPart(final AbstractOrderEntry item, final List<BHGEConfigurationPart> value)
	{
		setConfigurationPart( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to configurationPart. 
	 * @param value the item to add to configurationPart
	 */
	public void addToConfigurationPart(final SessionContext ctx, final AbstractOrderEntry item, final BHGEConfigurationPart value)
	{
		ABSTRACTORDERENTRY2CONFIGPARTRELCONFIGURATIONPARTHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to configurationPart. 
	 * @param value the item to add to configurationPart
	 */
	public void addToConfigurationPart(final AbstractOrderEntry item, final BHGEConfigurationPart value)
	{
		addToConfigurationPart( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from configurationPart. 
	 * @param value the item to remove from configurationPart
	 */
	public void removeFromConfigurationPart(final SessionContext ctx, final AbstractOrderEntry item, final BHGEConfigurationPart value)
	{
		ABSTRACTORDERENTRY2CONFIGPARTRELCONFIGURATIONPARTHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from configurationPart. 
	 * @param value the item to remove from configurationPart
	 */
	public void removeFromConfigurationPart(final AbstractOrderEntry item, final BHGEConfigurationPart value)
	{
		removeFromConfigurationPart( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.connectivityerror</code> attribute.
	 * @return the connectivityerror
	 */
	public String getConnectivityerror(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CONNECTIVITYERROR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.connectivityerror</code> attribute.
	 * @return the connectivityerror
	 */
	public String getConnectivityerror(final AbstractOrder item)
	{
		return getConnectivityerror( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.connectivityerror</code> attribute. 
	 * @param value the connectivityerror
	 */
	public void setConnectivityerror(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CONNECTIVITYERROR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.connectivityerror</code> attribute. 
	 * @param value the connectivityerror
	 */
	public void setConnectivityerror(final AbstractOrder item, final String value)
	{
		setConnectivityerror( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.contactNumber</code> attribute.
	 * @return the contactNumber
	 */
	public String getContactNumber(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.CONTACTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.contactNumber</code> attribute.
	 * @return the contactNumber
	 */
	public String getContactNumber(final Quote item)
	{
		return getContactNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.contactNumber</code> attribute. 
	 * @param value the contactNumber
	 */
	public void setContactNumber(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.CONTACTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.contactNumber</code> attribute. 
	 * @param value the contactNumber
	 */
	public void setContactNumber(final Quote item, final String value)
	{
		setContactNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.ContactusSettings</code> attribute.
	 * @return the ContactusSettings
	 */
	public Collection<ContactusSettings> getContactusSettings(final SessionContext ctx, final BaseStore item)
	{
		return GEEDGEBASESTORE2CONTACTUSMAPPINGCONTACTUSSETTINGSHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.ContactusSettings</code> attribute.
	 * @return the ContactusSettings
	 */
	public Collection<ContactusSettings> getContactusSettings(final BaseStore item)
	{
		return getContactusSettings( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.ContactusSettings</code> attribute. 
	 * @param value the ContactusSettings
	 */
	public void setContactusSettings(final SessionContext ctx, final BaseStore item, final Collection<ContactusSettings> value)
	{
		GEEDGEBASESTORE2CONTACTUSMAPPINGCONTACTUSSETTINGSHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.ContactusSettings</code> attribute. 
	 * @param value the ContactusSettings
	 */
	public void setContactusSettings(final BaseStore item, final Collection<ContactusSettings> value)
	{
		setContactusSettings( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to ContactusSettings. 
	 * @param value the item to add to ContactusSettings
	 */
	public void addToContactusSettings(final SessionContext ctx, final BaseStore item, final ContactusSettings value)
	{
		GEEDGEBASESTORE2CONTACTUSMAPPINGCONTACTUSSETTINGSHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to ContactusSettings. 
	 * @param value the item to add to ContactusSettings
	 */
	public void addToContactusSettings(final BaseStore item, final ContactusSettings value)
	{
		addToContactusSettings( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from ContactusSettings. 
	 * @param value the item to remove from ContactusSettings
	 */
	public void removeFromContactusSettings(final SessionContext ctx, final BaseStore item, final ContactusSettings value)
	{
		GEEDGEBASESTORE2CONTACTUSMAPPINGCONTACTUSSETTINGSHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from ContactusSettings. 
	 * @param value the item to remove from ContactusSettings
	 */
	public void removeFromContactusSettings(final BaseStore item, final ContactusSettings value)
	{
		removeFromContactusSettings( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.coshPdfStatus</code> attribute.
	 * @return the coshPdfStatus
	 */
	public EnumerationValue getCoshPdfStatus(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.COSHPDFSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.coshPdfStatus</code> attribute.
	 * @return the coshPdfStatus
	 */
	public EnumerationValue getCoshPdfStatus(final AbstractOrder item)
	{
		return getCoshPdfStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.coshPdfStatus</code> attribute. 
	 * @param value the coshPdfStatus
	 */
	public void setCoshPdfStatus(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.COSHPDFSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.coshPdfStatus</code> attribute. 
	 * @param value the coshPdfStatus
	 */
	public void setCoshPdfStatus(final AbstractOrder item, final EnumerationValue value)
	{
		setCoshPdfStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.country</code> attribute.
	 * @return the country
	 */
	public Country getCountry(final SessionContext ctx, final Country item)
	{
		return (Country)item.getProperty( ctx, BhgeCoreConstants.Attributes.Country.COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.country</code> attribute.
	 * @return the country
	 */
	public Country getCountry(final Country item)
	{
		return getCountry( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.country</code> attribute. 
	 * @param value the country
	 */
	public void setCountry(final SessionContext ctx, final Country item, final Country value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Country.COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.country</code> attribute. 
	 * @param value the country
	 */
	public void setCountry(final Country item, final Country value)
	{
		setCountry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.country</code> attribute.
	 * @return the country - Value
	 */
	public Country getCountry(final SessionContext ctx, final Quote item)
	{
		return (Country)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.COUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.country</code> attribute.
	 * @return the country - Value
	 */
	public Country getCountry(final Quote item)
	{
		return getCountry( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.country</code> attribute. 
	 * @param value the country - Value
	 */
	public void setCountry(final SessionContext ctx, final Quote item, final Country value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.COUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.country</code> attribute. 
	 * @param value the country - Value
	 */
	public void setCountry(final Quote item, final Country value)
	{
		setCountry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.countryCP</code> attribute.
	 * @return the countryCP - Property added for handling the custom price handling.
	 */
	public String getCountryCP(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.COUNTRYCP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.countryCP</code> attribute.
	 * @return the countryCP - Property added for handling the custom price handling.
	 */
	public String getCountryCP(final B2BUnit item)
	{
		return getCountryCP( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.countryCP</code> attribute. 
	 * @param value the countryCP - Property added for handling the custom price handling.
	 */
	public void setCountryCP(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.COUNTRYCP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.countryCP</code> attribute. 
	 * @param value the countryCP - Property added for handling the custom price handling.
	 */
	public void setCountryCP(final B2BUnit item, final String value)
	{
		setCountryCP( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.countryOfCitizenship</code> attribute.
	 * @return the countryOfCitizenship - Country of Citizenship
	 */
	public String getCountryOfCitizenship(final SessionContext ctx, final User item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.COUNTRYOFCITIZENSHIP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.countryOfCitizenship</code> attribute.
	 * @return the countryOfCitizenship - Country of Citizenship
	 */
	public String getCountryOfCitizenship(final User item)
	{
		return getCountryOfCitizenship( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.countryOfCitizenship</code> attribute. 
	 * @param value the countryOfCitizenship - Country of Citizenship
	 */
	public void setCountryOfCitizenship(final SessionContext ctx, final User item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.COUNTRYOFCITIZENSHIP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.countryOfCitizenship</code> attribute. 
	 * @param value the countryOfCitizenship - Country of Citizenship
	 */
	public void setCountryOfCitizenship(final User item, final String value)
	{
		setCountryOfCitizenship( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.courier</code> attribute.
	 * @return the courier
	 */
	public String getCourier(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.COURIER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.courier</code> attribute.
	 * @return the courier
	 */
	public String getCourier(final SAPCpiOutboundOrder item)
	{
		return getCourier( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.courier</code> attribute. 
	 * @param value the courier
	 */
	public void setCourier(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.COURIER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.courier</code> attribute. 
	 * @param value the courier
	 */
	public void setCourier(final SAPCpiOutboundOrder item, final String value)
	{
		setCourier( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.cpqentryinfo</code> attribute.
	 * @return the cpqentryinfo
	 */
	public List<BHGEProductInfo> getCpqentryinfo(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (List<BHGEProductInfo>)ABSTRACTORDERENTRY2BHGECPQORDERENTRYPRODUCTINFORELATIONCPQENTRYINFOHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.cpqentryinfo</code> attribute.
	 * @return the cpqentryinfo
	 */
	public List<BHGEProductInfo> getCpqentryinfo(final AbstractOrderEntry item)
	{
		return getCpqentryinfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.cpqentryinfo</code> attribute. 
	 * @param value the cpqentryinfo
	 */
	public void setCpqentryinfo(final SessionContext ctx, final AbstractOrderEntry item, final List<BHGEProductInfo> value)
	{
		ABSTRACTORDERENTRY2BHGECPQORDERENTRYPRODUCTINFORELATIONCPQENTRYINFOHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.cpqentryinfo</code> attribute. 
	 * @param value the cpqentryinfo
	 */
	public void setCpqentryinfo(final AbstractOrderEntry item, final List<BHGEProductInfo> value)
	{
		setCpqentryinfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to cpqentryinfo. 
	 * @param value the item to add to cpqentryinfo
	 */
	public void addToCpqentryinfo(final SessionContext ctx, final AbstractOrderEntry item, final BHGEProductInfo value)
	{
		ABSTRACTORDERENTRY2BHGECPQORDERENTRYPRODUCTINFORELATIONCPQENTRYINFOHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to cpqentryinfo. 
	 * @param value the item to add to cpqentryinfo
	 */
	public void addToCpqentryinfo(final AbstractOrderEntry item, final BHGEProductInfo value)
	{
		addToCpqentryinfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from cpqentryinfo. 
	 * @param value the item to remove from cpqentryinfo
	 */
	public void removeFromCpqentryinfo(final SessionContext ctx, final AbstractOrderEntry item, final BHGEProductInfo value)
	{
		ABSTRACTORDERENTRY2BHGECPQORDERENTRYPRODUCTINFORELATIONCPQENTRYINFOHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from cpqentryinfo. 
	 * @param value the item to remove from cpqentryinfo
	 */
	public void removeFromCpqentryinfo(final AbstractOrderEntry item, final BHGEProductInfo value)
	{
		removeFromCpqentryinfo( getSession().getSessionContext(), item, value );
	}
	
	public BHCountryDataRetention createBHCountryDataRetention(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHCOUNTRYDATARETENTION );
			return (BHCountryDataRetention)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHCountryDataRetention : "+e.getMessage(), 0 );
		}
	}
	
	public BHCountryDataRetention createBHCountryDataRetention(final Map attributeValues)
	{
		return createBHCountryDataRetention( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEAdditionalInfo createBHGEAdditionalInfo(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEADDITIONALINFO );
			return (BHGEAdditionalInfo)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEAdditionalInfo : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEAdditionalInfo createBHGEAdditionalInfo(final Map attributeValues)
	{
		return createBHGEAdditionalInfo( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEAnonymousUserCatalog createBHGEAnonymousUserCatalog(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEANONYMOUSUSERCATALOG );
			return (BHGEAnonymousUserCatalog)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEAnonymousUserCatalog : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEAnonymousUserCatalog createBHGEAnonymousUserCatalog(final Map attributeValues)
	{
		return createBHGEAnonymousUserCatalog( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEAreaOfInterest createBHGEAreaOfInterest(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEAREAOFINTEREST );
			return (BHGEAreaOfInterest)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEAreaOfInterest : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEAreaOfInterest createBHGEAreaOfInterest(final Map attributeValues)
	{
		return createBHGEAreaOfInterest( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECartProfile createBHGECartProfile(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECARTPROFILE );
			return (BHGECartProfile)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECartProfile : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECartProfile createBHGECartProfile(final Map attributeValues)
	{
		return createBHGECartProfile( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECategorytoSalesOrg createBHGECategorytoSalesOrg(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECATEGORYTOSALESORG );
			return (BHGECategorytoSalesOrg)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECategorytoSalesOrg : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECategorytoSalesOrg createBHGECategorytoSalesOrg(final Map attributeValues)
	{
		return createBHGECategorytoSalesOrg( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEChemicalDetails createBHGEChemicalDetails(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECHEMICALDETAILS );
			return (BHGEChemicalDetails)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEChemicalDetails : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEChemicalDetails createBHGEChemicalDetails(final Map attributeValues)
	{
		return createBHGEChemicalDetails( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEConfigurationInstance createBHGEConfigurationInstance(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECONFIGURATIONINSTANCE );
			return (BHGEConfigurationInstance)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEConfigurationInstance : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEConfigurationInstance createBHGEConfigurationInstance(final Map attributeValues)
	{
		return createBHGEConfigurationInstance( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEConfigurationPart createBHGEConfigurationPart(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECONFIGURATIONPART );
			return (BHGEConfigurationPart)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEConfigurationPart : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEConfigurationPart createBHGEConfigurationPart(final Map attributeValues)
	{
		return createBHGEConfigurationPart( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEContactUs createBHGEContactUs(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECONTACTUS );
			return (BHGEContactUs)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEContactUs : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEContactUs createBHGEContactUs(final Map attributeValues)
	{
		return createBHGEContactUs( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEContactUsJobRole createBHGEContactUsJobRole(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECONTACTUSJOBROLE );
			return (BHGEContactUsJobRole)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEContactUsJobRole : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEContactUsJobRole createBHGEContactUsJobRole(final Map attributeValues)
	{
		return createBHGEContactUsJobRole( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECoupon createBHGECoupon(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECOUPON );
			return (BHGECoupon)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECoupon : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECoupon createBHGECoupon(final Map attributeValues)
	{
		return createBHGECoupon( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECreditCardPaymnentinfo createBHGECreditCardPaymnentinfo(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECREDITCARDPAYMNENTINFO );
			return (BHGECreditCardPaymnentinfo)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECreditCardPaymnentinfo : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECreditCardPaymnentinfo createBHGECreditCardPaymnentinfo(final Map attributeValues)
	{
		return createBHGECreditCardPaymnentinfo( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECurrency createBHGECurrency(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECURRENCY );
			return (BHGECurrency)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECurrency : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECurrency createBHGECurrency(final Map attributeValues)
	{
		return createBHGECurrency( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECurrencyCardThreshold createBHGECurrencyCardThreshold(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECURRENCYCARDTHRESHOLD );
			return (BHGECurrencyCardThreshold)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECurrencyCardThreshold : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECurrencyCardThreshold createBHGECurrencyCardThreshold(final Map attributeValues)
	{
		return createBHGECurrencyCardThreshold( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECurrencyFormat createBHGECurrencyFormat(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECURRENCYFORMAT );
			return (BHGECurrencyFormat)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECurrencyFormat : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECurrencyFormat createBHGECurrencyFormat(final Map attributeValues)
	{
		return createBHGECurrencyFormat( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGECustomerClassification createBHGECustomerClassification(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGECUSTOMERCLASSIFICATION );
			return (BHGECustomerClassification)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGECustomerClassification : "+e.getMessage(), 0 );
		}
	}
	
	public BHGECustomerClassification createBHGECustomerClassification(final Map attributeValues)
	{
		return createBHGECustomerClassification( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEEquipment createBHGEEquipment(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEEQUIPMENT );
			return (BHGEEquipment)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEEquipment : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEEquipment createBHGEEquipment(final Map attributeValues)
	{
		return createBHGEEquipment( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEGlobalProperties createBHGEGlobalProperties(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEGLOBALPROPERTIES );
			return (BHGEGlobalProperties)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEGlobalProperties : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEGlobalProperties createBHGEGlobalProperties(final Map attributeValues)
	{
		return createBHGEGlobalProperties( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEHaveAQuestionProcess createBHGEHaveAQuestionProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEHAVEAQUESTIONPROCESS );
			return (BHGEHaveAQuestionProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEHaveAQuestionProcess : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEHaveAQuestionProcess createBHGEHaveAQuestionProcess(final Map attributeValues)
	{
		return createBHGEHaveAQuestionProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEHazardousInfo createBHGEHazardousInfo(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEHAZARDOUSINFO );
			return (BHGEHazardousInfo)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEHazardousInfo : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEHazardousInfo createBHGEHazardousInfo(final Map attributeValues)
	{
		return createBHGEHazardousInfo( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEKBInformation createBHGEKBInformation(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEKBINFORMATION );
			return (BHGEKBInformation)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEKBInformation : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEKBInformation createBHGEKBInformation(final Map attributeValues)
	{
		return createBHGEKBInformation( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGENotification createBHGENotification(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGENOTIFICATION );
			return (BHGENotification)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGENotification : "+e.getMessage(), 0 );
		}
	}
	
	public BHGENotification createBHGENotification(final Map attributeValues)
	{
		return createBHGENotification( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEProductApprovalStatusCronJob createBHGEProductApprovalStatusCronJob(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEPRODUCTAPPROVALSTATUSCRONJOB );
			return (BHGEProductApprovalStatusCronJob)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEProductApprovalStatusCronJob : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEProductApprovalStatusCronJob createBHGEProductApprovalStatusCronJob(final Map attributeValues)
	{
		return createBHGEProductApprovalStatusCronJob( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEProductInfo createBHGEProductInfo(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEPRODUCTINFO );
			return (BHGEProductInfo)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEProductInfo : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEProductInfo createBHGEProductInfo(final Map attributeValues)
	{
		return createBHGEProductInfo( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEQuoteProcess createBHGEQuoteProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEQUOTEPROCESS );
			return (BHGEQuoteProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEQuoteProcess : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEQuoteProcess createBHGEQuoteProcess(final Map attributeValues)
	{
		return createBHGEQuoteProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGERequest createBHGERequest(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEREQUEST );
			return (BHGERequest)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGERequest : "+e.getMessage(), 0 );
		}
	}
	
	public BHGERequest createBHGERequest(final Map attributeValues)
	{
		return createBHGERequest( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGERfcCallError createBHGERfcCallError(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGERFCCALLERROR );
			return (BHGERfcCallError)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGERfcCallError : "+e.getMessage(), 0 );
		}
	}
	
	public BHGERfcCallError createBHGERfcCallError(final Map attributeValues)
	{
		return createBHGERfcCallError( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGERmaEquipSerialNumber createBHGERmaEquipSerialNumber(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGERMAEQUIPSERIALNUMBER );
			return (BHGERmaEquipSerialNumber)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGERmaEquipSerialNumber : "+e.getMessage(), 0 );
		}
	}
	
	public BHGERmaEquipSerialNumber createBHGERmaEquipSerialNumber(final Map attributeValues)
	{
		return createBHGERmaEquipSerialNumber( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGERMAPlantDetails createBHGERMAPlantDetails(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGERMAPLANTDETAILS );
			return (BHGERMAPlantDetails)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGERMAPlantDetails : "+e.getMessage(), 0 );
		}
	}
	
	public BHGERMAPlantDetails createBHGERMAPlantDetails(final Map attributeValues)
	{
		return createBHGERMAPlantDetails( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGESalesAreaData createBHGESalesAreaData(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGESALESAREADATA );
			return (BHGESalesAreaData)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGESalesAreaData : "+e.getMessage(), 0 );
		}
	}
	
	public BHGESalesAreaData createBHGESalesAreaData(final Map attributeValues)
	{
		return createBHGESalesAreaData( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGESavedCreditcard createBHGESavedCreditcard(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGESAVEDCREDITCARD );
			return (BHGESavedCreditcard)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGESavedCreditcard : "+e.getMessage(), 0 );
		}
	}
	
	public BHGESavedCreditcard createBHGESavedCreditcard(final Map attributeValues)
	{
		return createBHGESavedCreditcard( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEServiceLocalProduct createBHGEServiceLocalProduct(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGESERVICELOCALPRODUCT );
			return (BHGEServiceLocalProduct)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEServiceLocalProduct : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEServiceLocalProduct createBHGEServiceLocalProduct(final Map attributeValues)
	{
		return createBHGEServiceLocalProduct( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEServiceOfferings createBHGEServiceOfferings(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGESERVICEOFFERINGS );
			return (BHGEServiceOfferings)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEServiceOfferings : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEServiceOfferings createBHGEServiceOfferings(final Map attributeValues)
	{
		return createBHGEServiceOfferings( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEServiceSite createBHGEServiceSite(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGESERVICESITE );
			return (BHGEServiceSite)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEServiceSite : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEServiceSite createBHGEServiceSite(final Map attributeValues)
	{
		return createBHGEServiceSite( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEServiceType createBHGEServiceType(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGESERVICETYPE );
			return (BHGEServiceType)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEServiceType : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEServiceType createBHGEServiceType(final Map attributeValues)
	{
		return createBHGEServiceType( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEVariantFactor createBHGEVariantFactor(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHGEVARIANTFACTOR );
			return (BHGEVariantFactor)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEVariantFactor : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEVariantFactor createBHGEVariantFactor(final Map attributeValues)
	{
		return createBHGEVariantFactor( getSession().getSessionContext(), attributeValues );
	}
	
	public BHStaticContactUs createBHStaticContactUs(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.BHSTATICCONTACTUS );
			return (BHStaticContactUs)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHStaticContactUs : "+e.getMessage(), 0 );
		}
	}
	
	public BHStaticContactUs createBHStaticContactUs(final Map attributeValues)
	{
		return createBHStaticContactUs( getSession().getSessionContext(), attributeValues );
	}
	
	public CheckInvoicePaymentCronJob createCheckInvoicePaymentCronJob(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.CHECKINVOICEPAYMENTCRONJOB );
			return (CheckInvoicePaymentCronJob)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating CheckInvoicePaymentCronJob : "+e.getMessage(), 0 );
		}
	}
	
	public CheckInvoicePaymentCronJob createCheckInvoicePaymentCronJob(final Map attributeValues)
	{
		return createCheckInvoicePaymentCronJob( getSession().getSessionContext(), attributeValues );
	}
	
	public Chemicals createChemicals(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.CHEMICALS );
			return (Chemicals)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating Chemicals : "+e.getMessage(), 0 );
		}
	}
	
	public Chemicals createChemicals(final Map attributeValues)
	{
		return createChemicals( getSession().getSessionContext(), attributeValues );
	}
	
	public CMSRegionRestriction createCMSRegionRestriction(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.CMSREGIONRESTRICTION );
			return (CMSRegionRestriction)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating CMSRegionRestriction : "+e.getMessage(), 0 );
		}
	}
	
	public CMSRegionRestriction createCMSRegionRestriction(final Map attributeValues)
	{
		return createCMSRegionRestriction( getSession().getSessionContext(), attributeValues );
	}
	
	public ContactUsEmailProcess createContactUsEmailProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.CONTACTUSEMAILPROCESS );
			return (ContactUsEmailProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ContactUsEmailProcess : "+e.getMessage(), 0 );
		}
	}
	
	public ContactUsEmailProcess createContactUsEmailProcess(final Map attributeValues)
	{
		return createContactUsEmailProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public ContactusSettings createContactusSettings(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.CONTACTUSSETTINGS );
			return (ContactusSettings)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ContactusSettings : "+e.getMessage(), 0 );
		}
	}
	
	public ContactusSettings createContactusSettings(final Map attributeValues)
	{
		return createContactusSettings( getSession().getSessionContext(), attributeValues );
	}
	
	public CustomerCareContactInfo createCustomerCareContactInfo(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.CUSTOMERCARECONTACTINFO );
			return (CustomerCareContactInfo)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating CustomerCareContactInfo : "+e.getMessage(), 0 );
		}
	}
	
	public CustomerCareContactInfo createCustomerCareContactInfo(final Map attributeValues)
	{
		return createCustomerCareContactInfo( getSession().getSessionContext(), attributeValues );
	}
	
	public DSChemistryData createDSChemistryData(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSCHEMISTRYDATA );
			return (DSChemistryData)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DSChemistryData : "+e.getMessage(), 0 );
		}
	}
	
	public DSChemistryData createDSChemistryData(final Map attributeValues)
	{
		return createDSChemistryData( getSession().getSessionContext(), attributeValues );
	}
	
	public DSFilmData createDSFilmData(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSFILMDATA );
			return (DSFilmData)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DSFilmData : "+e.getMessage(), 0 );
		}
	}
	
	public DSFilmData createDSFilmData(final Map attributeValues)
	{
		return createDSFilmData( getSession().getSessionContext(), attributeValues );
	}
	
	public DSGuestCalibrationFormRecords createDSGuestCalibrationFormRecords(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSGUESTCALIBRATIONFORMRECORDS );
			return (DSGuestCalibrationFormRecords)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DSGuestCalibrationFormRecords : "+e.getMessage(), 0 );
		}
	}
	
	public DSGuestCalibrationFormRecords createDSGuestCalibrationFormRecords(final Map attributeValues)
	{
		return createDSGuestCalibrationFormRecords( getSession().getSessionContext(), attributeValues );
	}
	
	public DSNotification createDSNotification(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSNOTIFICATION );
			return (DSNotification)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DSNotification : "+e.getMessage(), 0 );
		}
	}
	
	public DSNotification createDSNotification(final Map attributeValues)
	{
		return createDSNotification( getSession().getSessionContext(), attributeValues );
	}
	
	public DsNotificationCronJob createDsNotificationCronJob(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSNOTIFICATIONCRONJOB );
			return (DsNotificationCronJob)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DsNotificationCronJob : "+e.getMessage(), 0 );
		}
	}
	
	public DsNotificationCronJob createDsNotificationCronJob(final Map attributeValues)
	{
		return createDsNotificationCronJob( getSession().getSessionContext(), attributeValues );
	}
	
	public DSProductsCarouselComponent createDSProductsCarouselComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSPRODUCTSCAROUSELCOMPONENT );
			return (DSProductsCarouselComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DSProductsCarouselComponent : "+e.getMessage(), 0 );
		}
	}
	
	public DSProductsCarouselComponent createDSProductsCarouselComponent(final Map attributeValues)
	{
		return createDSProductsCarouselComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public DSWaygateBatchLookup createDSWaygateBatchLookup(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.DSWAYGATEBATCHLOOKUP );
			return (DSWaygateBatchLookup)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating DSWaygateBatchLookup : "+e.getMessage(), 0 );
		}
	}
	
	public DSWaygateBatchLookup createDSWaygateBatchLookup(final Map attributeValues)
	{
		return createDSWaygateBatchLookup( getSession().getSessionContext(), attributeValues );
	}
	
	public ExcludeProductCharacterisctic createExcludeProductCharacterisctic(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.EXCLUDEPRODUCTCHARACTERISCTIC );
			return (ExcludeProductCharacterisctic)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ExcludeProductCharacterisctic : "+e.getMessage(), 0 );
		}
	}
	
	public ExcludeProductCharacterisctic createExcludeProductCharacterisctic(final Map attributeValues)
	{
		return createExcludeProductCharacterisctic( getSession().getSessionContext(), attributeValues );
	}
	
	public FaqComponent createFaqComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.FAQCOMPONENT );
			return (FaqComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating FaqComponent : "+e.getMessage(), 0 );
		}
	}
	
	public FaqComponent createFaqComponent(final Map attributeValues)
	{
		return createFaqComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public FeatureSet createFeatureSet(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.FEATURESET );
			return (FeatureSet)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating FeatureSet : "+e.getMessage(), 0 );
		}
	}
	
	public FeatureSet createFeatureSet(final Map attributeValues)
	{
		return createFeatureSet( getSession().getSessionContext(), attributeValues );
	}
	
	public FiservMerchantId createFiservMerchantId(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.FISERVMERCHANTID );
			return (FiservMerchantId)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating FiservMerchantId : "+e.getMessage(), 0 );
		}
	}
	
	public FiservMerchantId createFiservMerchantId(final Map attributeValues)
	{
		return createFiservMerchantId( getSession().getSessionContext(), attributeValues );
	}
	
	public GECoupon createGECoupon(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GECOUPON );
			return (GECoupon)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GECoupon : "+e.getMessage(), 0 );
		}
	}
	
	public GECoupon createGECoupon(final Map attributeValues)
	{
		return createGECoupon( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeAvailabilityDetail createGEEdgeAvailabilityDetail(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGEAVAILABILITYDETAIL );
			return (GEEdgeAvailabilityDetail)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeAvailabilityDetail : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeAvailabilityDetail createGEEdgeAvailabilityDetail(final Map attributeValues)
	{
		return createGEEdgeAvailabilityDetail( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeCacheCleanerJob createGEEdgeCacheCleanerJob(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECACHECLEANERJOB );
			return (GEEdgeCacheCleanerJob)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeCacheCleanerJob : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeCacheCleanerJob createGEEdgeCacheCleanerJob(final Map attributeValues)
	{
		return createGEEdgeCacheCleanerJob( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeCategoryFeatureComponent createGEEdgeCategoryFeatureComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECATEGORYFEATURECOMPONENT );
			return (GEEdgeCategoryFeatureComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeCategoryFeatureComponent : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeCategoryFeatureComponent createGEEdgeCategoryFeatureComponent(final Map attributeValues)
	{
		return createGEEdgeCategoryFeatureComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeCategoryProductsComponent createGEEdgeCategoryProductsComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECATEGORYPRODUCTSCOMPONENT );
			return (GEEdgeCategoryProductsComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeCategoryProductsComponent : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeCategoryProductsComponent createGEEdgeCategoryProductsComponent(final Map attributeValues)
	{
		return createGEEdgeCategoryProductsComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeContactHelpDropDownComponent createGEEdgeContactHelpDDComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECONTACTHELPDDCOMPONENT );
			return (GEEdgeContactHelpDropDownComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeContactHelpDDComponent : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeContactHelpDropDownComponent createGEEdgeContactHelpDDComponent(final Map attributeValues)
	{
		return createGEEdgeContactHelpDDComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeContactus createGEEdgeContactus(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECONTACTUS );
			return (GEEdgeContactus)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeContactus : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeContactus createGEEdgeContactus(final Map attributeValues)
	{
		return createGEEdgeContactus( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeContactUsRegion createGEEdgeContactUsRegion(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECONTACTUSREGION );
			return (GEEdgeContactUsRegion)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeContactUsRegion : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeContactUsRegion createGEEdgeContactUsRegion(final Map attributeValues)
	{
		return createGEEdgeContactUsRegion( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeCustomer createGEEdgeCustomer(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGECUSTOMER );
			return (GEEdgeCustomer)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeCustomer : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeCustomer createGEEdgeCustomer(final Map attributeValues)
	{
		return createGEEdgeCustomer( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeFeedbackProcess createGEEdgeFeedbackProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGEFEEDBACKPROCESS );
			return (GEEdgeFeedbackProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeFeedbackProcess : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeFeedbackProcess createGEEdgeFeedbackProcess(final Map attributeValues)
	{
		return createGEEdgeFeedbackProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeLegacyID createGEEdgeLegacyID(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGELEGACYID );
			return (GEEdgeLegacyID)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeLegacyID : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeLegacyID createGEEdgeLegacyID(final Map attributeValues)
	{
		return createGEEdgeLegacyID( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeNavigationBarComponent createGEEdgeNavigationBarComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGENAVIGATIONBARCOMPONENT );
			return (GEEdgeNavigationBarComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeNavigationBarComponent : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeNavigationBarComponent createGEEdgeNavigationBarComponent(final Map attributeValues)
	{
		return createGEEdgeNavigationBarComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeOrderTypeMapping createGEEdgeOrderTypeMapping(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGEORDERTYPEMAPPING );
			return (GEEdgeOrderTypeMapping)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeOrderTypeMapping : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeOrderTypeMapping createGEEdgeOrderTypeMapping(final Map attributeValues)
	{
		return createGEEdgeOrderTypeMapping( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeProduct createGEEdgeProduct(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGEPRODUCT );
			return (GEEdgeProduct)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeProduct : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeProduct createGEEdgeProduct(final Map attributeValues)
	{
		return createGEEdgeProduct( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeProductLineMapping createGEEdgeProductLineMapping(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGEPRODUCTLINEMAPPING );
			return (GEEdgeProductLineMapping)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeProductLineMapping : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeProductLineMapping createGEEdgeProductLineMapping(final Map attributeValues)
	{
		return createGEEdgeProductLineMapping( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeRfcCallError createGEEdgeRfcCallError(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGERFCCALLERROR );
			return (GEEdgeRfcCallError)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeRfcCallError : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeRfcCallError createGEEdgeRfcCallError(final Map attributeValues)
	{
		return createGEEdgeRfcCallError( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeSAPPlantLogSysOrg createGEEdgeSAPPlantLogSysOrg(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESAPPLANTLOGSYSORG );
			return (GEEdgeSAPPlantLogSysOrg)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeSAPPlantLogSysOrg : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeSAPPlantLogSysOrg createGEEdgeSAPPlantLogSysOrg(final Map attributeValues)
	{
		return createGEEdgeSAPPlantLogSysOrg( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeServiceProvider createGEEdgeServiceProvider(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESERVICEPROVIDER );
			return (GEEdgeServiceProvider)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeServiceProvider : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeServiceProvider createGEEdgeServiceProvider(final Map attributeValues)
	{
		return createGEEdgeServiceProvider( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeShippingAddressProcess createGEEdgeShippingAddressProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESHIPPINGADDRESSPROCESS );
			return (GEEdgeShippingAddressProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeShippingAddressProcess : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeShippingAddressProcess createGEEdgeShippingAddressProcess(final Map attributeValues)
	{
		return createGEEdgeShippingAddressProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeStockDetail createGEEdgeStockDetail(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESTOCKDETAIL );
			return (GEEdgeStockDetail)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeStockDetail : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeStockDetail createGEEdgeStockDetail(final Map attributeValues)
	{
		return createGEEdgeStockDetail( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeSubmitContactProcess createGEEdgeSubmitContactProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESUBMITCONTACTPROCESS );
			return (GEEdgeSubmitContactProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeSubmitContactProcess : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeSubmitContactProcess createGEEdgeSubmitContactProcess(final Map attributeValues)
	{
		return createGEEdgeSubmitContactProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeSupportTeam createGEEdgeSupportTeam(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESUPPORTTEAM );
			return (GEEdgeSupportTeam)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeSupportTeam : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeSupportTeam createGEEdgeSupportTeam(final Map attributeValues)
	{
		return createGEEdgeSupportTeam( getSession().getSessionContext(), attributeValues );
	}
	
	public GEEdgeSystemAlert createGEEdgeSystemAlert(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GEEDGESYSTEMALERT );
			return (GEEdgeSystemAlert)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GEEdgeSystemAlert : "+e.getMessage(), 0 );
		}
	}
	
	public GEEdgeSystemAlert createGEEdgeSystemAlert(final Map attributeValues)
	{
		return createGEEdgeSystemAlert( getSession().getSessionContext(), attributeValues );
	}
	
	public GESalesAreaPlantFeatureMapping createGESalesAreaPlantFeatureMapping(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GESALESAREAPLANTFEATUREMAPPING );
			return (GESalesAreaPlantFeatureMapping)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GESalesAreaPlantFeatureMapping : "+e.getMessage(), 0 );
		}
	}
	
	public GESalesAreaPlantFeatureMapping createGESalesAreaPlantFeatureMapping(final Map attributeValues)
	{
		return createGESalesAreaPlantFeatureMapping( getSession().getSessionContext(), attributeValues );
	}
	
	public GuestUserCalportalDataSheetPDFEmailProcess createGuestUserCalportalDataSheetPDFEmailProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.GUESTUSERCALPORTALDATASHEETPDFEMAILPROCESS );
			return (GuestUserCalportalDataSheetPDFEmailProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating GuestUserCalportalDataSheetPDFEmailProcess : "+e.getMessage(), 0 );
		}
	}
	
	public GuestUserCalportalDataSheetPDFEmailProcess createGuestUserCalportalDataSheetPDFEmailProcess(final Map attributeValues)
	{
		return createGuestUserCalportalDataSheetPDFEmailProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public Incoterm createIncoterm(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.INCOTERM );
			return (Incoterm)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating Incoterm : "+e.getMessage(), 0 );
		}
	}
	
	public Incoterm createIncoterm(final Map attributeValues)
	{
		return createIncoterm( getSession().getSessionContext(), attributeValues );
	}
	
	public OFSInvoice createInvoice(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.INVOICE );
			return (OFSInvoice)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating Invoice : "+e.getMessage(), 0 );
		}
	}
	
	public OFSInvoice createInvoice(final Map attributeValues)
	{
		return createInvoice( getSession().getSessionContext(), attributeValues );
	}
	
	public ListOfPortals createListOfPortals(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.LISTOFPORTALS );
			return (ListOfPortals)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ListOfPortals : "+e.getMessage(), 0 );
		}
	}
	
	public ListOfPortals createListOfPortals(final Map attributeValues)
	{
		return createListOfPortals( getSession().getSessionContext(), attributeValues );
	}
	
	public MultipleCatalogsSyncCronJob createMultipleCatalogsSyncCronJob(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.MULTIPLECATALOGSSYNCCRONJOB );
			return (MultipleCatalogsSyncCronJob)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating MultipleCatalogsSyncCronJob : "+e.getMessage(), 0 );
		}
	}
	
	public MultipleCatalogsSyncCronJob createMultipleCatalogsSyncCronJob(final Map attributeValues)
	{
		return createMultipleCatalogsSyncCronJob( getSession().getSessionContext(), attributeValues );
	}
	
	public OfflineOrder createOfflineOrder(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.OFFLINEORDER );
			return (OfflineOrder)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating OfflineOrder : "+e.getMessage(), 0 );
		}
	}
	
	public OfflineOrder createOfflineOrder(final Map attributeValues)
	{
		return createOfflineOrder( getSession().getSessionContext(), attributeValues );
	}
	
	public OfflineOrderEntry createOfflineOrderEntry(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.OFFLINEORDERENTRY );
			return (OfflineOrderEntry)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating OfflineOrderEntry : "+e.getMessage(), 0 );
		}
	}
	
	public OfflineOrderEntry createOfflineOrderEntry(final Map attributeValues)
	{
		return createOfflineOrderEntry( getSession().getSessionContext(), attributeValues );
	}
	
	public OldCartNotificationEmailProcess createOldCartNotificationEmailProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.OLDCARTNOTIFICATIONEMAILPROCESS );
			return (OldCartNotificationEmailProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating OldCartNotificationEmailProcess : "+e.getMessage(), 0 );
		}
	}
	
	public OldCartNotificationEmailProcess createOldCartNotificationEmailProcess(final Map attributeValues)
	{
		return createOldCartNotificationEmailProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public OrderNotification createOrderNotification(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.ORDERNOTIFICATION );
			return (OrderNotification)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating OrderNotification : "+e.getMessage(), 0 );
		}
	}
	
	public OrderNotification createOrderNotification(final Map attributeValues)
	{
		return createOrderNotification( getSession().getSessionContext(), attributeValues );
	}
	
	public OrderNotificationEmailProcess createOrderNotificationEmailProcess(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.ORDERNOTIFICATIONEMAILPROCESS );
			return (OrderNotificationEmailProcess)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating OrderNotificationEmailProcess : "+e.getMessage(), 0 );
		}
	}
	
	public OrderNotificationEmailProcess createOrderNotificationEmailProcess(final Map attributeValues)
	{
		return createOrderNotificationEmailProcess( getSession().getSessionContext(), attributeValues );
	}
	
	public PaymentMerchantInfo createPaymentMerchantInfo(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.PAYMENTMERCHANTINFO );
			return (PaymentMerchantInfo)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating PaymentMerchantInfo : "+e.getMessage(), 0 );
		}
	}
	
	public PaymentMerchantInfo createPaymentMerchantInfo(final Map attributeValues)
	{
		return createPaymentMerchantInfo( getSession().getSessionContext(), attributeValues );
	}
	
	public Paymentterm createPaymentterm(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.PAYMENTTERM );
			return (Paymentterm)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating Paymentterm : "+e.getMessage(), 0 );
		}
	}
	
	public Paymentterm createPaymentterm(final Map attributeValues)
	{
		return createPaymentterm( getSession().getSessionContext(), attributeValues );
	}
	
	public PrincipalRelation createPrincipalRelation(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.PRINCIPALRELATION );
			return (PrincipalRelation)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating PrincipalRelation : "+e.getMessage(), 0 );
		}
	}
	
	public PrincipalRelation createPrincipalRelation(final Map attributeValues)
	{
		return createPrincipalRelation( getSession().getSessionContext(), attributeValues );
	}
	
	public ProductFailureMode createProductFailureMode(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.PRODUCTFAILUREMODE );
			return (ProductFailureMode)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ProductFailureMode : "+e.getMessage(), 0 );
		}
	}
	
	public ProductFailureMode createProductFailureMode(final Map attributeValues)
	{
		return createProductFailureMode( getSession().getSessionContext(), attributeValues );
	}
	
	public ProductLineTable createProductLineTable(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.PRODUCTLINETABLE );
			return (ProductLineTable)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ProductLineTable : "+e.getMessage(), 0 );
		}
	}
	
	public ProductLineTable createProductLineTable(final Map attributeValues)
	{
		return createProductLineTable( getSession().getSessionContext(), attributeValues );
	}
	
	public ResourceComponent createResourceComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.RESOURCECOMPONENT );
			return (ResourceComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ResourceComponent : "+e.getMessage(), 0 );
		}
	}
	
	public ResourceComponent createResourceComponent(final Map attributeValues)
	{
		return createResourceComponent( getSession().getSessionContext(), attributeValues );
	}
	
	public RestrictedSalesArea createRestrictedSalesArea(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.RESTRICTEDSALESAREA );
			return (RestrictedSalesArea)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating RestrictedSalesArea : "+e.getMessage(), 0 );
		}
	}
	
	public RestrictedSalesArea createRestrictedSalesArea(final Map attributeValues)
	{
		return createRestrictedSalesArea( getSession().getSessionContext(), attributeValues );
	}
	
	public ReturnPO createReturnPO(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.RETURNPO );
			return (ReturnPO)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating ReturnPO : "+e.getMessage(), 0 );
		}
	}
	
	public ReturnPO createReturnPO(final Map attributeValues)
	{
		return createReturnPO( getSession().getSessionContext(), attributeValues );
	}
	
	public RMAEndUserAddress createRMAEndUserAddress(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.RMAENDUSERADDRESS );
			return (RMAEndUserAddress)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating RMAEndUserAddress : "+e.getMessage(), 0 );
		}
	}
	
	public RMAEndUserAddress createRMAEndUserAddress(final Map attributeValues)
	{
		return createRMAEndUserAddress( getSession().getSessionContext(), attributeValues );
	}
	
	public SalesState createSalesState(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.SALESSTATE );
			return (SalesState)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating SalesState : "+e.getMessage(), 0 );
		}
	}
	
	public SalesState createSalesState(final Map attributeValues)
	{
		return createSalesState( getSession().getSessionContext(), attributeValues );
	}
	
	public TrainingDocument createTrainingDocument(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.TRAININGDOCUMENT );
			return (TrainingDocument)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating TrainingDocument : "+e.getMessage(), 0 );
		}
	}
	
	public TrainingDocument createTrainingDocument(final Map attributeValues)
	{
		return createTrainingDocument( getSession().getSessionContext(), attributeValues );
	}
	
	public VCComponentPrice createVCComponentPrice(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.VCCOMPONENTPRICE );
			return (VCComponentPrice)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating VCComponentPrice : "+e.getMessage(), 0 );
		}
	}
	
	public VCComponentPrice createVCComponentPrice(final Map attributeValues)
	{
		return createVCComponentPrice( getSession().getSessionContext(), attributeValues );
	}
	
	public WeeklyOrderCronJob createWeeklyOrderCronJob(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.WEEKLYORDERCRONJOB );
			return (WeeklyOrderCronJob)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating WeeklyOrderCronJob : "+e.getMessage(), 0 );
		}
	}
	
	public WeeklyOrderCronJob createWeeklyOrderCronJob(final Map attributeValues)
	{
		return createWeeklyOrderCronJob( getSession().getSessionContext(), attributeValues );
	}
	
	public WhatsNewWidgetComponent createWhatsNewWidgetComponent(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeCoreConstants.TC.WHATSNEWWIDGETCOMPONENT );
			return (WhatsNewWidgetComponent)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating WhatsNewWidgetComponent : "+e.getMessage(), 0 );
		}
	}
	
	public WhatsNewWidgetComponent createWhatsNewWidgetComponent(final Map attributeValues)
	{
		return createWhatsNewWidgetComponent( getSession().getSessionContext(), attributeValues );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.creditCards</code> attribute.
	 * @return the creditCards - Credit card details against the B2B unit
	 */
	public List<BHGESavedCreditcard> getCreditCards(final SessionContext ctx, final B2BUnit item)
	{
		return (List<BHGESavedCreditcard>)B2BUNIT2SAVEDCREDITCARDCREDITCARDSHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.creditCards</code> attribute.
	 * @return the creditCards - Credit card details against the B2B unit
	 */
	public List<BHGESavedCreditcard> getCreditCards(final B2BUnit item)
	{
		return getCreditCards( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.creditCards</code> attribute. 
	 * @param value the creditCards - Credit card details against the B2B unit
	 */
	public void setCreditCards(final SessionContext ctx, final B2BUnit item, final List<BHGESavedCreditcard> value)
	{
		B2BUNIT2SAVEDCREDITCARDCREDITCARDSHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.creditCards</code> attribute. 
	 * @param value the creditCards - Credit card details against the B2B unit
	 */
	public void setCreditCards(final B2BUnit item, final List<BHGESavedCreditcard> value)
	{
		setCreditCards( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to creditCards. 
	 * @param value the item to add to creditCards - Credit card details against the B2B unit
	 */
	public void addToCreditCards(final SessionContext ctx, final B2BUnit item, final BHGESavedCreditcard value)
	{
		B2BUNIT2SAVEDCREDITCARDCREDITCARDSHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to creditCards. 
	 * @param value the item to add to creditCards - Credit card details against the B2B unit
	 */
	public void addToCreditCards(final B2BUnit item, final BHGESavedCreditcard value)
	{
		addToCreditCards( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from creditCards. 
	 * @param value the item to remove from creditCards - Credit card details against the B2B unit
	 */
	public void removeFromCreditCards(final SessionContext ctx, final B2BUnit item, final BHGESavedCreditcard value)
	{
		B2BUNIT2SAVEDCREDITCARDCREDITCARDSHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from creditCards. 
	 * @param value the item to remove from creditCards - Credit card details against the B2B unit
	 */
	public void removeFromCreditCards(final B2BUnit item, final BHGESavedCreditcard value)
	{
		removeFromCreditCards( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BCustomer.creditCards</code> attribute.
	 * @return the creditCards - Credit card details against the B2B Customer
	 */
	public List<BHGESavedCreditcard> getCreditCards(final SessionContext ctx, final B2BCustomer item)
	{
		return (List<BHGESavedCreditcard>)B2BCUSTOMER2SAVEDCREDITCARDCREDITCARDSHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BCustomer.creditCards</code> attribute.
	 * @return the creditCards - Credit card details against the B2B Customer
	 */
	public List<BHGESavedCreditcard> getCreditCards(final B2BCustomer item)
	{
		return getCreditCards( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BCustomer.creditCards</code> attribute. 
	 * @param value the creditCards - Credit card details against the B2B Customer
	 */
	public void setCreditCards(final SessionContext ctx, final B2BCustomer item, final List<BHGESavedCreditcard> value)
	{
		B2BCUSTOMER2SAVEDCREDITCARDCREDITCARDSHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BCustomer.creditCards</code> attribute. 
	 * @param value the creditCards - Credit card details against the B2B Customer
	 */
	public void setCreditCards(final B2BCustomer item, final List<BHGESavedCreditcard> value)
	{
		setCreditCards( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to creditCards. 
	 * @param value the item to add to creditCards - Credit card details against the B2B Customer
	 */
	public void addToCreditCards(final SessionContext ctx, final B2BCustomer item, final BHGESavedCreditcard value)
	{
		B2BCUSTOMER2SAVEDCREDITCARDCREDITCARDSHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to creditCards. 
	 * @param value the item to add to creditCards - Credit card details against the B2B Customer
	 */
	public void addToCreditCards(final B2BCustomer item, final BHGESavedCreditcard value)
	{
		addToCreditCards( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from creditCards. 
	 * @param value the item to remove from creditCards - Credit card details against the B2B Customer
	 */
	public void removeFromCreditCards(final SessionContext ctx, final B2BCustomer item, final BHGESavedCreditcard value)
	{
		B2BCUSTOMER2SAVEDCREDITCARDCREDITCARDSHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from creditCards. 
	 * @param value the item to remove from creditCards - Credit card details against the B2B Customer
	 */
	public void removeFromCreditCards(final B2BCustomer item, final BHGESavedCreditcard value)
	{
		removeFromCreditCards( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.csrHelp</code> attribute.
	 * @return the csrHelp
	 */
	public String getCsrHelp(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.CSRHELP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.csrHelp</code> attribute.
	 * @return the csrHelp
	 */
	public String getCsrHelp(final SAPCpiOutboundOrder item)
	{
		return getCsrHelp( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.csrHelp</code> attribute. 
	 * @param value the csrHelp
	 */
	public void setCsrHelp(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.CSRHELP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.csrHelp</code> attribute. 
	 * @param value the csrHelp
	 */
	public void setCsrHelp(final SAPCpiOutboundOrder item, final String value)
	{
		setCsrHelp( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.currency</code> attribute.
	 * @return the currency
	 */
	public Currency getCurrency(final SessionContext ctx, final B2BUnit item)
	{
		return (Currency)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.CURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.currency</code> attribute.
	 * @return the currency
	 */
	public Currency getCurrency(final B2BUnit item)
	{
		return getCurrency( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final SessionContext ctx, final B2BUnit item, final Currency value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.CURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.currency</code> attribute. 
	 * @param value the currency
	 */
	public void setCurrency(final B2BUnit item, final Currency value)
	{
		setCurrency( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.currency</code> attribute.
	 * @return the currency - currency
	 */
	public String getCurrency(final SessionContext ctx, final SAPSalesOrganization item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.CURRENCY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.currency</code> attribute.
	 * @return the currency - currency
	 */
	public String getCurrency(final SAPSalesOrganization item)
	{
		return getCurrency( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.currency</code> attribute. 
	 * @param value the currency - currency
	 */
	public void setCurrency(final SessionContext ctx, final SAPSalesOrganization item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.CURRENCY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.currency</code> attribute. 
	 * @param value the currency - currency
	 */
	public void setCurrency(final SAPSalesOrganization item, final String value)
	{
		setCurrency( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.currentCheckoutStep</code> attribute.
	 * @return the currentCheckoutStep
	 */
	public String getCurrentCheckoutStep(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.CURRENTCHECKOUTSTEP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.currentCheckoutStep</code> attribute.
	 * @return the currentCheckoutStep
	 */
	public String getCurrentCheckoutStep(final AbstractOrder item)
	{
		return getCurrentCheckoutStep( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.currentCheckoutStep</code> attribute. 
	 * @param value the currentCheckoutStep
	 */
	public void setCurrentCheckoutStep(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.CURRENTCHECKOUTSTEP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.currentCheckoutStep</code> attribute. 
	 * @param value the currentCheckoutStep
	 */
	public void setCurrentCheckoutStep(final AbstractOrder item, final String value)
	{
		setCurrentCheckoutStep( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.customer</code> attribute.
	 * @return the customer - Users who are allowed to access this catalog category
	 */
	public List<GEEdgeCustomer> getCustomer(final SessionContext ctx, final Category item)
	{
		final List<GEEdgeCustomer> items = item.getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			"GEEdgeCustomer",
			null,
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.customer</code> attribute.
	 * @return the customer - Users who are allowed to access this catalog category
	 */
	public List<GEEdgeCustomer> getCustomer(final Category item)
	{
		return getCustomer( getSession().getSessionContext(), item );
	}
	
	public long getCustomerCount(final SessionContext ctx, final Category item)
	{
		return item.getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			"GEEdgeCustomer",
			null
		);
	}
	
	public long getCustomerCount(final Category item)
	{
		return getCustomerCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.customer</code> attribute. 
	 * @param value the customer - Users who are allowed to access this catalog category
	 */
	public void setCustomer(final SessionContext ctx, final Category item, final List<GEEdgeCustomer> value)
	{
		item.setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.customer</code> attribute. 
	 * @param value the customer - Users who are allowed to access this catalog category
	 */
	public void setCustomer(final Category item, final List<GEEdgeCustomer> value)
	{
		setCustomer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to customer. 
	 * @param value the item to add to customer - Users who are allowed to access this catalog category
	 */
	public void addToCustomer(final SessionContext ctx, final Category item, final GEEdgeCustomer value)
	{
		item.addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to customer. 
	 * @param value the item to add to customer - Users who are allowed to access this catalog category
	 */
	public void addToCustomer(final Category item, final GEEdgeCustomer value)
	{
		addToCustomer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from customer. 
	 * @param value the item to remove from customer - Users who are allowed to access this catalog category
	 */
	public void removeFromCustomer(final SessionContext ctx, final Category item, final GEEdgeCustomer value)
	{
		item.removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGECUSTOMER2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(GEEDGECUSTOMER2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(GEEDGECUSTOMER2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from customer. 
	 * @param value the item to remove from customer - Users who are allowed to access this catalog category
	 */
	public void removeFromCustomer(final Category item, final GEEdgeCustomer value)
	{
		removeFromCustomer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.customerCareContactInfo</code> attribute.
	 * @return the customerCareContactInfo
	 */
	public Collection<CustomerCareContactInfo> getCustomerCareContactInfo(final SessionContext ctx, final B2BUnit item)
	{
		return GEEDGESALESAREACUSTOMERCAREMAPPINGCUSTOMERCARECONTACTINFOHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.customerCareContactInfo</code> attribute.
	 * @return the customerCareContactInfo
	 */
	public Collection<CustomerCareContactInfo> getCustomerCareContactInfo(final B2BUnit item)
	{
		return getCustomerCareContactInfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.customerCareContactInfo</code> attribute. 
	 * @param value the customerCareContactInfo
	 */
	public void setCustomerCareContactInfo(final SessionContext ctx, final B2BUnit item, final Collection<CustomerCareContactInfo> value)
	{
		GEEDGESALESAREACUSTOMERCAREMAPPINGCUSTOMERCARECONTACTINFOHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.customerCareContactInfo</code> attribute. 
	 * @param value the customerCareContactInfo
	 */
	public void setCustomerCareContactInfo(final B2BUnit item, final Collection<CustomerCareContactInfo> value)
	{
		setCustomerCareContactInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to customerCareContactInfo. 
	 * @param value the item to add to customerCareContactInfo
	 */
	public void addToCustomerCareContactInfo(final SessionContext ctx, final B2BUnit item, final CustomerCareContactInfo value)
	{
		GEEDGESALESAREACUSTOMERCAREMAPPINGCUSTOMERCARECONTACTINFOHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to customerCareContactInfo. 
	 * @param value the item to add to customerCareContactInfo
	 */
	public void addToCustomerCareContactInfo(final B2BUnit item, final CustomerCareContactInfo value)
	{
		addToCustomerCareContactInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from customerCareContactInfo. 
	 * @param value the item to remove from customerCareContactInfo
	 */
	public void removeFromCustomerCareContactInfo(final SessionContext ctx, final B2BUnit item, final CustomerCareContactInfo value)
	{
		GEEDGESALESAREACUSTOMERCAREMAPPINGCUSTOMERCARECONTACTINFOHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from customerCareContactInfo. 
	 * @param value the item to remove from customerCareContactInfo
	 */
	public void removeFromCustomerCareContactInfo(final B2BUnit item, final CustomerCareContactInfo value)
	{
		removeFromCustomerCareContactInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.customerClass</code> attribute.
	 * @return the customerClass
	 */
	public String getCustomerClass(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.CUSTOMERCLASS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.customerClass</code> attribute.
	 * @return the customerClass
	 */
	public String getCustomerClass(final B2BUnit item)
	{
		return getCustomerClass( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.customerClass</code> attribute. 
	 * @param value the customerClass
	 */
	public void setCustomerClass(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.CUSTOMERCLASS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.customerClass</code> attribute. 
	 * @param value the customerClass
	 */
	public void setCustomerClass(final B2BUnit item, final String value)
	{
		setCustomerClass( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.customerClassification</code> attribute.
	 * @return the customerClassification
	 */
	public BHGECustomerClassification getCustomerClassification(final SessionContext ctx, final B2BUnit item)
	{
		return (BHGECustomerClassification)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.CUSTOMERCLASSIFICATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.customerClassification</code> attribute.
	 * @return the customerClassification
	 */
	public BHGECustomerClassification getCustomerClassification(final B2BUnit item)
	{
		return getCustomerClassification( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.customerClassification</code> attribute. 
	 * @param value the customerClassification
	 */
	public void setCustomerClassification(final SessionContext ctx, final B2BUnit item, final BHGECustomerClassification value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.CUSTOMERCLASSIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.customerClassification</code> attribute. 
	 * @param value the customerClassification
	 */
	public void setCustomerClassification(final B2BUnit item, final BHGECustomerClassification value)
	{
		setCustomerClassification( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Warehouse.cutOffTime</code> attribute.
	 * @return the cutOffTime
	 */
	public String getCutOffTime(final SessionContext ctx, final Warehouse item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Warehouse.CUTOFFTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Warehouse.cutOffTime</code> attribute.
	 * @return the cutOffTime
	 */
	public String getCutOffTime(final Warehouse item)
	{
		return getCutOffTime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Warehouse.cutOffTime</code> attribute. 
	 * @param value the cutOffTime
	 */
	public void setCutOffTime(final SessionContext ctx, final Warehouse item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Warehouse.CUTOFFTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Warehouse.cutOffTime</code> attribute. 
	 * @param value the cutOffTime
	 */
	public void setCutOffTime(final Warehouse item, final String value)
	{
		setCutOffTime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.dateRangeGroup</code> attribute.
	 * @return the dateRangeGroup - Date Range Group
	 */
	public String getDateRangeGroup(final SessionContext ctx, final PriceRow item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.PriceRow.DATERANGEGROUP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.dateRangeGroup</code> attribute.
	 * @return the dateRangeGroup - Date Range Group
	 */
	public String getDateRangeGroup(final PriceRow item)
	{
		return getDateRangeGroup( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.dateRangeGroup</code> attribute. 
	 * @param value the dateRangeGroup - Date Range Group
	 */
	public void setDateRangeGroup(final SessionContext ctx, final PriceRow item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PriceRow.DATERANGEGROUP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.dateRangeGroup</code> attribute. 
	 * @param value the dateRangeGroup - Date Range Group
	 */
	public void setDateRangeGroup(final PriceRow item, final String value)
	{
		setDateRangeGroup( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.defaultCartProfile</code> attribute.
	 * @return the defaultCartProfile - Default Cart Profile for the User
	 */
	public BHGECartProfile getDefaultCartProfile(final SessionContext ctx, final User item)
	{
		return (BHGECartProfile)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.DEFAULTCARTPROFILE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.defaultCartProfile</code> attribute.
	 * @return the defaultCartProfile - Default Cart Profile for the User
	 */
	public BHGECartProfile getDefaultCartProfile(final User item)
	{
		return getDefaultCartProfile( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.defaultCartProfile</code> attribute. 
	 * @param value the defaultCartProfile - Default Cart Profile for the User
	 */
	public void setDefaultCartProfile(final SessionContext ctx, final User item, final BHGECartProfile value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.DEFAULTCARTPROFILE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.defaultCartProfile</code> attribute. 
	 * @param value the defaultCartProfile - Default Cart Profile for the User
	 */
	public void setDefaultCartProfile(final User item, final BHGECartProfile value)
	{
		setDefaultCartProfile( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.defaultCountry</code> attribute.
	 * @return the defaultCountry - Default country for base store
	 */
	public Country getDefaultCountry(final SessionContext ctx, final BaseStore item)
	{
		return (Country)item.getProperty( ctx, BhgeCoreConstants.Attributes.BaseStore.DEFAULTCOUNTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.defaultCountry</code> attribute.
	 * @return the defaultCountry - Default country for base store
	 */
	public Country getDefaultCountry(final BaseStore item)
	{
		return getDefaultCountry( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.defaultCountry</code> attribute. 
	 * @param value the defaultCountry - Default country for base store
	 */
	public void setDefaultCountry(final SessionContext ctx, final BaseStore item, final Country value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.BaseStore.DEFAULTCOUNTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.defaultCountry</code> attribute. 
	 * @param value the defaultCountry - Default country for base store
	 */
	public void setDefaultCountry(final BaseStore item, final Country value)
	{
		setDefaultCountry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.defaultReturnSite</code> attribute.
	 * @return the defaultReturnSite - User's Default Return Site
	 */
	public BHGEServiceSite getDefaultReturnSite(final SessionContext ctx, final User item)
	{
		return (BHGEServiceSite)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.DEFAULTRETURNSITE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.defaultReturnSite</code> attribute.
	 * @return the defaultReturnSite - User's Default Return Site
	 */
	public BHGEServiceSite getDefaultReturnSite(final User item)
	{
		return getDefaultReturnSite( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.defaultReturnSite</code> attribute. 
	 * @param value the defaultReturnSite - User's Default Return Site
	 */
	public void setDefaultReturnSite(final SessionContext ctx, final User item, final BHGEServiceSite value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.DEFAULTRETURNSITE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.defaultReturnSite</code> attribute. 
	 * @param value the defaultReturnSite - User's Default Return Site
	 */
	public void setDefaultReturnSite(final User item, final BHGEServiceSite value)
	{
		setDefaultReturnSite( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.defaultReturnSites</code> attribute.
	 * @return the defaultReturnSites
	 */
	public Collection<BHGEServiceSite> getDefaultReturnSites(final SessionContext ctx, final User item)
	{
		final List<BHGEServiceSite> items = item.getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			"BHGEServiceSite",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.defaultReturnSites</code> attribute.
	 * @return the defaultReturnSites
	 */
	public Collection<BHGEServiceSite> getDefaultReturnSites(final User item)
	{
		return getDefaultReturnSites( getSession().getSessionContext(), item );
	}
	
	public long getDefaultReturnSitesCount(final SessionContext ctx, final User item)
	{
		return item.getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			"BHGEServiceSite",
			null
		);
	}
	
	public long getDefaultReturnSitesCount(final User item)
	{
		return getDefaultReturnSitesCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.defaultReturnSites</code> attribute. 
	 * @param value the defaultReturnSites
	 */
	public void setDefaultReturnSites(final SessionContext ctx, final User item, final Collection<BHGEServiceSite> value)
	{
		item.setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.defaultReturnSites</code> attribute. 
	 * @param value the defaultReturnSites
	 */
	public void setDefaultReturnSites(final User item, final Collection<BHGEServiceSite> value)
	{
		setDefaultReturnSites( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to defaultReturnSites. 
	 * @param value the item to add to defaultReturnSites
	 */
	public void addToDefaultReturnSites(final SessionContext ctx, final User item, final BHGEServiceSite value)
	{
		item.addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to defaultReturnSites. 
	 * @param value the item to add to defaultReturnSites
	 */
	public void addToDefaultReturnSites(final User item, final BHGEServiceSite value)
	{
		addToDefaultReturnSites( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from defaultReturnSites. 
	 * @param value the item to remove from defaultReturnSites
	 */
	public void removeFromDefaultReturnSites(final SessionContext ctx, final User item, final BHGEServiceSite value)
	{
		item.removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.USER2DEFAULTRETURNSITESRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(USER2DEFAULTRETURNSITESRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from defaultReturnSites. 
	 * @param value the item to remove from defaultReturnSites
	 */
	public void removeFromDefaultReturnSites(final User item, final BHGEServiceSite value)
	{
		removeFromDefaultReturnSites( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.deliveryAccountNum</code> attribute.
	 * @return the deliveryAccountNum
	 */
	public String getDeliveryAccountNum(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.DELIVERYACCOUNTNUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.deliveryAccountNum</code> attribute.
	 * @return the deliveryAccountNum
	 */
	public String getDeliveryAccountNum(final AbstractOrder item)
	{
		return getDeliveryAccountNum( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.deliveryAccountNum</code> attribute. 
	 * @param value the deliveryAccountNum
	 */
	public void setDeliveryAccountNum(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.DELIVERYACCOUNTNUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.deliveryAccountNum</code> attribute. 
	 * @param value the deliveryAccountNum
	 */
	public void setDeliveryAccountNum(final AbstractOrder item, final String value)
	{
		setDeliveryAccountNum( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.deliveryAccountNumber</code> attribute.
	 * @return the deliveryAccountNumber
	 */
	public String getDeliveryAccountNumber(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.DELIVERYACCOUNTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.deliveryAccountNumber</code> attribute.
	 * @return the deliveryAccountNumber
	 */
	public String getDeliveryAccountNumber(final SAPCpiOutboundOrder item)
	{
		return getDeliveryAccountNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.deliveryAccountNumber</code> attribute. 
	 * @param value the deliveryAccountNumber
	 */
	public void setDeliveryAccountNumber(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.DELIVERYACCOUNTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.deliveryAccountNumber</code> attribute. 
	 * @param value the deliveryAccountNumber
	 */
	public void setDeliveryAccountNumber(final SAPCpiOutboundOrder item, final String value)
	{
		setDeliveryAccountNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.DELIVERYPOINT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final AbstractOrder item)
	{
		return getDeliveryPoint( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.DELIVERYPOINT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final AbstractOrder item, final String value)
	{
		setDeliveryPoint( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final SessionContext ctx, final Address item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Address.DELIVERYPOINT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final Address item)
	{
		return getDeliveryPoint( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final SessionContext ctx, final Address item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Address.DELIVERYPOINT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final Address item, final String value)
	{
		setDeliveryPoint( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundPartnerRole.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final SessionContext ctx, final SAPCpiOutboundPartnerRole item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundPartnerRole.DELIVERYPOINT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundPartnerRole.deliveryPoint</code> attribute.
	 * @return the deliveryPoint
	 */
	public String getDeliveryPoint(final SAPCpiOutboundPartnerRole item)
	{
		return getDeliveryPoint( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundPartnerRole.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final SessionContext ctx, final SAPCpiOutboundPartnerRole item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundPartnerRole.DELIVERYPOINT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundPartnerRole.deliveryPoint</code> attribute. 
	 * @param value the deliveryPoint
	 */
	public void setDeliveryPoint(final SAPCpiOutboundPartnerRole item, final String value)
	{
		setDeliveryPoint( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.detailedProductDescription</code> attribute.
	 * @return the detailedProductDescription - Detailed Product Description
	 */
	public String getDetailedProductDescription(final SessionContext ctx, final Product item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Product.DETAILEDPRODUCTDESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.detailedProductDescription</code> attribute.
	 * @return the detailedProductDescription - Detailed Product Description
	 */
	public String getDetailedProductDescription(final Product item)
	{
		return getDetailedProductDescription( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.detailedProductDescription</code> attribute. 
	 * @param value the detailedProductDescription - Detailed Product Description
	 */
	public void setDetailedProductDescription(final SessionContext ctx, final Product item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Product.DETAILEDPRODUCTDESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.detailedProductDescription</code> attribute. 
	 * @param value the detailedProductDescription - Detailed Product Description
	 */
	public void setDetailedProductDescription(final Product item, final String value)
	{
		setDetailedProductDescription( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.discountCode</code> attribute.
	 * @return the discountCode
	 */
	public String getDiscountCode(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.DISCOUNTCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.discountCode</code> attribute.
	 * @return the discountCode
	 */
	public String getDiscountCode(final SAPCpiOutboundOrder item)
	{
		return getDiscountCode( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.discountCode</code> attribute. 
	 * @param value the discountCode
	 */
	public void setDiscountCode(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.DISCOUNTCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.discountCode</code> attribute. 
	 * @param value the discountCode
	 */
	public void setDiscountCode(final SAPCpiOutboundOrder item, final String value)
	{
		setDiscountCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.discountPercentage</code> attribute.
	 * @return the discountPercentage
	 */
	public String getDiscountPercentage(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DISCOUNTPERCENTAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.discountPercentage</code> attribute.
	 * @return the discountPercentage
	 */
	public String getDiscountPercentage(final AbstractOrderEntry item)
	{
		return getDiscountPercentage( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.discountPercentage</code> attribute. 
	 * @param value the discountPercentage
	 */
	public void setDiscountPercentage(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DISCOUNTPERCENTAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.discountPercentage</code> attribute. 
	 * @param value the discountPercentage
	 */
	public void setDiscountPercentage(final AbstractOrderEntry item, final String value)
	{
		setDiscountPercentage( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.discountPrice</code> attribute.
	 * @return the discountPrice
	 */
	public String getDiscountPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DISCOUNTPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.discountPrice</code> attribute.
	 * @return the discountPrice
	 */
	public String getDiscountPrice(final AbstractOrderEntry item)
	{
		return getDiscountPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.discountPrice</code> attribute. 
	 * @param value the discountPrice
	 */
	public void setDiscountPrice(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DISCOUNTPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.discountPrice</code> attribute. 
	 * @param value the discountPrice
	 */
	public void setDiscountPrice(final AbstractOrderEntry item, final String value)
	{
		setDiscountPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.discountReason</code> attribute.
	 * @return the discountReason
	 */
	public String getDiscountReason(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DISCOUNTREASON);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.discountReason</code> attribute.
	 * @return the discountReason
	 */
	public String getDiscountReason(final SAPCpiOutboundOrderItem item)
	{
		return getDiscountReason( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.discountReason</code> attribute. 
	 * @param value the discountReason
	 */
	public void setDiscountReason(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DISCOUNTREASON,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.discountReason</code> attribute. 
	 * @param value the discountReason
	 */
	public void setDiscountReason(final SAPCpiOutboundOrderItem item, final String value)
	{
		setDiscountReason( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.dummyPartNumber</code> attribute.
	 * @return the dummyPartNumber
	 */
	public String getDummyPartNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DUMMYPARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.dummyPartNumber</code> attribute.
	 * @return the dummyPartNumber
	 */
	public String getDummyPartNumber(final AbstractOrderEntry item)
	{
		return getDummyPartNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.dummyPartNumber</code> attribute. 
	 * @param value the dummyPartNumber
	 */
	public void setDummyPartNumber(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DUMMYPARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.dummyPartNumber</code> attribute. 
	 * @param value the dummyPartNumber
	 */
	public void setDummyPartNumber(final AbstractOrderEntry item, final String value)
	{
		setDummyPartNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.dummyProductDescription</code> attribute.
	 * @return the dummyProductDescription
	 */
	public String getDummyProductDescription(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DUMMYPRODUCTDESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.dummyProductDescription</code> attribute.
	 * @return the dummyProductDescription
	 */
	public String getDummyProductDescription(final AbstractOrderEntry item)
	{
		return getDummyProductDescription( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.dummyProductDescription</code> attribute. 
	 * @param value the dummyProductDescription
	 */
	public void setDummyProductDescription(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.DUMMYPRODUCTDESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.dummyProductDescription</code> attribute. 
	 * @param value the dummyProductDescription
	 */
	public void setDummyProductDescription(final AbstractOrderEntry item, final String value)
	{
		setDummyProductDescription( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails1</code> attribute.
	 * @return the dummyProductDetails1
	 */
	public String getDummyProductDetails1(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails1</code> attribute.
	 * @return the dummyProductDetails1
	 */
	public String getDummyProductDetails1(final SAPCpiOutboundOrderItem item)
	{
		return getDummyProductDetails1( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails1</code> attribute. 
	 * @param value the dummyProductDetails1
	 */
	public void setDummyProductDetails1(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails1</code> attribute. 
	 * @param value the dummyProductDetails1
	 */
	public void setDummyProductDetails1(final SAPCpiOutboundOrderItem item, final String value)
	{
		setDummyProductDetails1( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails2</code> attribute.
	 * @return the dummyProductDetails2
	 */
	public String getDummyProductDetails2(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails2</code> attribute.
	 * @return the dummyProductDetails2
	 */
	public String getDummyProductDetails2(final SAPCpiOutboundOrderItem item)
	{
		return getDummyProductDetails2( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails2</code> attribute. 
	 * @param value the dummyProductDetails2
	 */
	public void setDummyProductDetails2(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails2</code> attribute. 
	 * @param value the dummyProductDetails2
	 */
	public void setDummyProductDetails2(final SAPCpiOutboundOrderItem item, final String value)
	{
		setDummyProductDetails2( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails3</code> attribute.
	 * @return the dummyProductDetails3
	 */
	public String getDummyProductDetails3(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS3);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails3</code> attribute.
	 * @return the dummyProductDetails3
	 */
	public String getDummyProductDetails3(final SAPCpiOutboundOrderItem item)
	{
		return getDummyProductDetails3( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails3</code> attribute. 
	 * @param value the dummyProductDetails3
	 */
	public void setDummyProductDetails3(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS3,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails3</code> attribute. 
	 * @param value the dummyProductDetails3
	 */
	public void setDummyProductDetails3(final SAPCpiOutboundOrderItem item, final String value)
	{
		setDummyProductDetails3( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails4</code> attribute.
	 * @return the dummyProductDetails4
	 */
	public String getDummyProductDetails4(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS4);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails4</code> attribute.
	 * @return the dummyProductDetails4
	 */
	public String getDummyProductDetails4(final SAPCpiOutboundOrderItem item)
	{
		return getDummyProductDetails4( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails4</code> attribute. 
	 * @param value the dummyProductDetails4
	 */
	public void setDummyProductDetails4(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.DUMMYPRODUCTDETAILS4,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.dummyProductDetails4</code> attribute. 
	 * @param value the dummyProductDetails4
	 */
	public void setDummyProductDetails4(final SAPCpiOutboundOrderItem item, final String value)
	{
		setDummyProductDetails4( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.dunsNumbers</code> attribute.
	 * @return the dunsNumbers
	 */
	public Collection<String> getDunsNumbers(final SessionContext ctx, final User item)
	{
		Collection<String> coll = (Collection<String>)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.DUNSNUMBERS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.dunsNumbers</code> attribute.
	 * @return the dunsNumbers
	 */
	public Collection<String> getDunsNumbers(final User item)
	{
		return getDunsNumbers( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.dunsNumbers</code> attribute. 
	 * @param value the dunsNumbers
	 */
	public void setDunsNumbers(final SessionContext ctx, final User item, final Collection<String> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.DUNSNUMBERS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.dunsNumbers</code> attribute. 
	 * @param value the dunsNumbers
	 */
	public void setDunsNumbers(final User item, final Collection<String> value)
	{
		setDunsNumbers( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.earlyShipment</code> attribute.
	 * @return the earlyShipment - Flag to determine Early Shipment
	 */
	public Boolean isEarlyShipment(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.EARLYSHIPMENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.earlyShipment</code> attribute.
	 * @return the earlyShipment - Flag to determine Early Shipment
	 */
	public Boolean isEarlyShipment(final AbstractOrder item)
	{
		return isEarlyShipment( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.earlyShipment</code> attribute. 
	 * @return the earlyShipment - Flag to determine Early Shipment
	 */
	public boolean isEarlyShipmentAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isEarlyShipment( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.earlyShipment</code> attribute. 
	 * @return the earlyShipment - Flag to determine Early Shipment
	 */
	public boolean isEarlyShipmentAsPrimitive(final AbstractOrder item)
	{
		return isEarlyShipmentAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.earlyShipment</code> attribute. 
	 * @param value the earlyShipment - Flag to determine Early Shipment
	 */
	public void setEarlyShipment(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.EARLYSHIPMENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.earlyShipment</code> attribute. 
	 * @param value the earlyShipment - Flag to determine Early Shipment
	 */
	public void setEarlyShipment(final AbstractOrder item, final Boolean value)
	{
		setEarlyShipment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.earlyShipment</code> attribute. 
	 * @param value the earlyShipment - Flag to determine Early Shipment
	 */
	public void setEarlyShipment(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setEarlyShipment( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.earlyShipment</code> attribute. 
	 * @param value the earlyShipment - Flag to determine Early Shipment
	 */
	public void setEarlyShipment(final AbstractOrder item, final boolean value)
	{
		setEarlyShipment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.ecaCode</code> attribute.
	 * @return the ecaCode - PK of Address
	 */
	public Long getEcaCode(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Long)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ECACODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.ecaCode</code> attribute.
	 * @return the ecaCode - PK of Address
	 */
	public Long getEcaCode(final AbstractOrderEntry item)
	{
		return getEcaCode( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.ecaCode</code> attribute. 
	 * @return the ecaCode - PK of Address
	 */
	public long getEcaCodeAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Long value = getEcaCode( ctx,item );
		return value != null ? value.longValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.ecaCode</code> attribute. 
	 * @return the ecaCode - PK of Address
	 */
	public long getEcaCodeAsPrimitive(final AbstractOrderEntry item)
	{
		return getEcaCodeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.ecaCode</code> attribute. 
	 * @param value the ecaCode - PK of Address
	 */
	public void setEcaCode(final SessionContext ctx, final AbstractOrderEntry item, final Long value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ECACODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.ecaCode</code> attribute. 
	 * @param value the ecaCode - PK of Address
	 */
	public void setEcaCode(final AbstractOrderEntry item, final Long value)
	{
		setEcaCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.ecaCode</code> attribute. 
	 * @param value the ecaCode - PK of Address
	 */
	public void setEcaCode(final SessionContext ctx, final AbstractOrderEntry item, final long value)
	{
		setEcaCode( ctx, item, Long.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.ecaCode</code> attribute. 
	 * @param value the ecaCode - PK of Address
	 */
	public void setEcaCode(final AbstractOrderEntry item, final long value)
	{
		setEcaCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.ecaPONumber</code> attribute.
	 * @return the ecaPONumber - PO number for the entry
	 */
	public String getEcaPONumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ECAPONUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.ecaPONumber</code> attribute.
	 * @return the ecaPONumber - PO number for the entry
	 */
	public String getEcaPONumber(final AbstractOrderEntry item)
	{
		return getEcaPONumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.ecaPONumber</code> attribute. 
	 * @param value the ecaPONumber - PO number for the entry
	 */
	public void setEcaPONumber(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ECAPONUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.ecaPONumber</code> attribute. 
	 * @param value the ecaPONumber - PO number for the entry
	 */
	public void setEcaPONumber(final AbstractOrderEntry item, final String value)
	{
		setEcaPONumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.ecommerceFlag</code> attribute.
	 * @return the ecommerceFlag
	 */
	public String getEcommerceFlag(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.ECOMMERCEFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.ecommerceFlag</code> attribute.
	 * @return the ecommerceFlag
	 */
	public String getEcommerceFlag(final B2BUnit item)
	{
		return getEcommerceFlag( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.ecommerceFlag</code> attribute. 
	 * @param value the ecommerceFlag
	 */
	public void setEcommerceFlag(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.ECOMMERCEFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.ecommerceFlag</code> attribute. 
	 * @param value the ecommerceFlag
	 */
	public void setEcommerceFlag(final B2BUnit item, final String value)
	{
		setEcommerceFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Employee.email</code> attribute.
	 * @return the email
	 */
	public String getEmail(final SessionContext ctx, final Employee item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Employee.EMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Employee.email</code> attribute.
	 * @return the email
	 */
	public String getEmail(final Employee item)
	{
		return getEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Employee.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final SessionContext ctx, final Employee item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Employee.EMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Employee.email</code> attribute. 
	 * @param value the email
	 */
	public void setEmail(final Employee item, final String value)
	{
		setEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.emailAddress</code> attribute.
	 * @return the emailAddress
	 */
	public String getEmailAddress(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.EMAILADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.emailAddress</code> attribute.
	 * @return the emailAddress
	 */
	public String getEmailAddress(final Quote item)
	{
		return getEmailAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.emailAddress</code> attribute. 
	 * @param value the emailAddress
	 */
	public void setEmailAddress(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.EMAILADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.emailAddress</code> attribute. 
	 * @param value the emailAddress
	 */
	public void setEmailAddress(final Quote item, final String value)
	{
		setEmailAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.emailtype</code> attribute.
	 * @return the emailtype
	 */
	public String getEmailtype(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.EMAILTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.emailtype</code> attribute.
	 * @return the emailtype
	 */
	public String getEmailtype(final Quote item)
	{
		return getEmailtype( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.emailtype</code> attribute. 
	 * @param value the emailtype
	 */
	public void setEmailtype(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.EMAILTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.emailtype</code> attribute. 
	 * @param value the emailtype
	 */
	public void setEmailtype(final Quote item, final String value)
	{
		setEmailtype( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.endCustomerAddress</code> attribute.
	 * @return the endCustomerAddress - End Customer Address
	 */
	public Address getEndCustomerAddress(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Address)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ENDCUSTOMERADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.endCustomerAddress</code> attribute.
	 * @return the endCustomerAddress - End Customer Address
	 */
	public Address getEndCustomerAddress(final AbstractOrderEntry item)
	{
		return getEndCustomerAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.endCustomerAddress</code> attribute. 
	 * @param value the endCustomerAddress - End Customer Address
	 */
	public void setEndCustomerAddress(final SessionContext ctx, final AbstractOrderEntry item, final Address value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ENDCUSTOMERADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.endCustomerAddress</code> attribute. 
	 * @param value the endCustomerAddress - End Customer Address
	 */
	public void setEndCustomerAddress(final AbstractOrderEntry item, final Address value)
	{
		setEndCustomerAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.endCustomerPO</code> attribute.
	 * @return the endCustomerPO
	 */
	public String getEndCustomerPO(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.ENDCUSTOMERPO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.endCustomerPO</code> attribute.
	 * @return the endCustomerPO
	 */
	public String getEndCustomerPO(final SAPCpiOutboundOrderItem item)
	{
		return getEndCustomerPO( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.endCustomerPO</code> attribute. 
	 * @param value the endCustomerPO
	 */
	public void setEndCustomerPO(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.ENDCUSTOMERPO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.endCustomerPO</code> attribute. 
	 * @param value the endCustomerPO
	 */
	public void setEndCustomerPO(final SAPCpiOutboundOrderItem item, final String value)
	{
		setEndCustomerPO( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.endCustomerRefNum</code> attribute.
	 * @return the endCustomerRefNum
	 */
	public String getEndCustomerRefNum(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ENDCUSTOMERREFNUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.endCustomerRefNum</code> attribute.
	 * @return the endCustomerRefNum
	 */
	public String getEndCustomerRefNum(final AbstractOrder item)
	{
		return getEndCustomerRefNum( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.endCustomerRefNum</code> attribute. 
	 * @param value the endCustomerRefNum
	 */
	public void setEndCustomerRefNum(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ENDCUSTOMERREFNUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.endCustomerRefNum</code> attribute. 
	 * @param value the endCustomerRefNum
	 */
	public void setEndCustomerRefNum(final AbstractOrder item, final String value)
	{
		setEndCustomerRefNum( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.endUser</code> attribute.
	 * @return the endUser
	 */
	public String getEndUser(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ENDUSER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.endUser</code> attribute.
	 * @return the endUser
	 */
	public String getEndUser(final SAPCpiOutboundOrder item)
	{
		return getEndUser( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.endUser</code> attribute. 
	 * @param value the endUser
	 */
	public void setEndUser(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ENDUSER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.endUser</code> attribute. 
	 * @param value the endUser
	 */
	public void setEndUser(final SAPCpiOutboundOrder item, final String value)
	{
		setEndUser( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.endUserCategory</code> attribute.
	 * @return the endUserCategory
	 */
	public String getEndUserCategory(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ENDUSERCATEGORY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.endUserCategory</code> attribute.
	 * @return the endUserCategory
	 */
	public String getEndUserCategory(final AbstractOrder item)
	{
		return getEndUserCategory( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.endUserCategory</code> attribute. 
	 * @param value the endUserCategory
	 */
	public void setEndUserCategory(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ENDUSERCATEGORY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.endUserCategory</code> attribute. 
	 * @param value the endUserCategory
	 */
	public void setEndUserCategory(final AbstractOrder item, final String value)
	{
		setEndUserCategory( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.endUserNewDetails</code> attribute.
	 * @return the endUserNewDetails
	 */
	public String getEndUserNewDetails(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ENDUSERNEWDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.endUserNewDetails</code> attribute.
	 * @return the endUserNewDetails
	 */
	public String getEndUserNewDetails(final SAPCpiOutboundOrder item)
	{
		return getEndUserNewDetails( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.endUserNewDetails</code> attribute. 
	 * @param value the endUserNewDetails
	 */
	public void setEndUserNewDetails(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ENDUSERNEWDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.endUserNewDetails</code> attribute. 
	 * @param value the endUserNewDetails
	 */
	public void setEndUserNewDetails(final SAPCpiOutboundOrder item, final String value)
	{
		setEndUserNewDetails( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.endUserNumber</code> attribute.
	 * @return the endUserNumber
	 */
	public String getEndUserNumber(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ENDUSERNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.endUserNumber</code> attribute.
	 * @return the endUserNumber
	 */
	public String getEndUserNumber(final AbstractOrder item)
	{
		return getEndUserNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.endUserNumber</code> attribute. 
	 * @param value the endUserNumber
	 */
	public void setEndUserNumber(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ENDUSERNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.endUserNumber</code> attribute. 
	 * @param value the endUserNumber
	 */
	public void setEndUserNumber(final AbstractOrder item, final String value)
	{
		setEndUserNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.endUserPO</code> attribute.
	 * @return the endUserPO
	 */
	public String getEndUserPO(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ENDUSERPO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.endUserPO</code> attribute.
	 * @return the endUserPO
	 */
	public String getEndUserPO(final SAPCpiOutboundOrder item)
	{
		return getEndUserPO( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.endUserPO</code> attribute. 
	 * @param value the endUserPO
	 */
	public void setEndUserPO(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ENDUSERPO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.endUserPO</code> attribute. 
	 * @param value the endUserPO
	 */
	public void setEndUserPO(final SAPCpiOutboundOrder item, final String value)
	{
		setEndUserPO( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.endUserType</code> attribute.
	 * @return the endUserType
	 */
	public String getEndUserType(final SessionContext ctx, final Address item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Address.ENDUSERTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.endUserType</code> attribute.
	 * @return the endUserType
	 */
	public String getEndUserType(final Address item)
	{
		return getEndUserType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.endUserType</code> attribute. 
	 * @param value the endUserType
	 */
	public void setEndUserType(final SessionContext ctx, final Address item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Address.ENDUSERTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.endUserType</code> attribute. 
	 * @param value the endUserType
	 */
	public void setEndUserType(final Address item, final String value)
	{
		setEndUserType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.erpCustomerNumbers</code> attribute.
	 * @return the erpCustomerNumbers
	 */
	public Collection<String> getErpCustomerNumbers(final SessionContext ctx, final User item)
	{
		Collection<String> coll = (Collection<String>)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.ERPCUSTOMERNUMBERS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.erpCustomerNumbers</code> attribute.
	 * @return the erpCustomerNumbers
	 */
	public Collection<String> getErpCustomerNumbers(final User item)
	{
		return getErpCustomerNumbers( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.erpCustomerNumbers</code> attribute. 
	 * @param value the erpCustomerNumbers
	 */
	public void setErpCustomerNumbers(final SessionContext ctx, final User item, final Collection<String> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.ERPCUSTOMERNUMBERS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.erpCustomerNumbers</code> attribute. 
	 * @param value the erpCustomerNumbers
	 */
	public void setErpCustomerNumbers(final User item, final Collection<String> value)
	{
		setErpCustomerNumbers( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.erpFailureReason</code> attribute.
	 * @return the erpFailureReason - ERP Failure Reason
	 */
	public String getErpFailureReason(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.ERPFAILUREREASON);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.erpFailureReason</code> attribute.
	 * @return the erpFailureReason - ERP Failure Reason
	 */
	public String getErpFailureReason(final Quote item)
	{
		return getErpFailureReason( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.erpFailureReason</code> attribute. 
	 * @param value the erpFailureReason - ERP Failure Reason
	 */
	public void setErpFailureReason(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.ERPFAILUREREASON,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.erpFailureReason</code> attribute. 
	 * @param value the erpFailureReason - ERP Failure Reason
	 */
	public void setErpFailureReason(final Quote item, final String value)
	{
		setErpFailureReason( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.estShippingDates</code> attribute.
	 * @return the estShippingDates
	 */
	public List<String> getEstShippingDates(final SessionContext ctx, final AbstractOrderEntry item)
	{
		List<String> coll = (List<String>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ESTSHIPPINGDATES);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.estShippingDates</code> attribute.
	 * @return the estShippingDates
	 */
	public List<String> getEstShippingDates(final AbstractOrderEntry item)
	{
		return getEstShippingDates( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.estShippingDates</code> attribute. 
	 * @param value the estShippingDates
	 */
	public void setEstShippingDates(final SessionContext ctx, final AbstractOrderEntry item, final List<String> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ESTSHIPPINGDATES,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.estShippingDates</code> attribute. 
	 * @param value the estShippingDates
	 */
	public void setEstShippingDates(final AbstractOrderEntry item, final List<String> value)
	{
		setEstShippingDates( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.euc</code> attribute.
	 * @return the euc - End User Certificate
	 */
	public Collection<Media> getEuc(final SessionContext ctx, final AbstractOrder item)
	{
		Collection<Media> coll = (Collection<Media>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.EUC);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.euc</code> attribute.
	 * @return the euc - End User Certificate
	 */
	public Collection<Media> getEuc(final AbstractOrder item)
	{
		return getEuc( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.euc</code> attribute. 
	 * @param value the euc - End User Certificate
	 */
	public void setEuc(final SessionContext ctx, final AbstractOrder item, final Collection<Media> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.EUC,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.euc</code> attribute. 
	 * @param value the euc - End User Certificate
	 */
	public void setEuc(final AbstractOrder item, final Collection<Media> value)
	{
		setEuc( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseSite.expireNotificationDateInDays</code> attribute.
	 * @return the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public Integer getExpireNotificationDateInDays(final SessionContext ctx, final BaseSite item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.BaseSite.EXPIRENOTIFICATIONDATEINDAYS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseSite.expireNotificationDateInDays</code> attribute.
	 * @return the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public Integer getExpireNotificationDateInDays(final BaseSite item)
	{
		return getExpireNotificationDateInDays( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseSite.expireNotificationDateInDays</code> attribute. 
	 * @return the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public int getExpireNotificationDateInDaysAsPrimitive(final SessionContext ctx, final BaseSite item)
	{
		Integer value = getExpireNotificationDateInDays( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseSite.expireNotificationDateInDays</code> attribute. 
	 * @return the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public int getExpireNotificationDateInDaysAsPrimitive(final BaseSite item)
	{
		return getExpireNotificationDateInDaysAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseSite.expireNotificationDateInDays</code> attribute. 
	 * @param value the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public void setExpireNotificationDateInDays(final SessionContext ctx, final BaseSite item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.BaseSite.EXPIRENOTIFICATIONDATEINDAYS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseSite.expireNotificationDateInDays</code> attribute. 
	 * @param value the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public void setExpireNotificationDateInDays(final BaseSite item, final Integer value)
	{
		setExpireNotificationDateInDays( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseSite.expireNotificationDateInDays</code> attribute. 
	 * @param value the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public void setExpireNotificationDateInDays(final SessionContext ctx, final BaseSite item, final int value)
	{
		setExpireNotificationDateInDays( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseSite.expireNotificationDateInDays</code> attribute. 
	 * @param value the expireNotificationDateInDays - Number of days before expiration time that mail needs to be triggered
	 */
	public void setExpireNotificationDateInDays(final BaseSite item, final int value)
	{
		setExpireNotificationDateInDays( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.exportAddress</code> attribute.
	 * @return the exportAddress
	 */
	public Address getExportAddress(final SessionContext ctx, final AbstractOrder item)
	{
		return (Address)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.EXPORTADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.exportAddress</code> attribute.
	 * @return the exportAddress
	 */
	public Address getExportAddress(final AbstractOrder item)
	{
		return getExportAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.exportAddress</code> attribute. 
	 * @param value the exportAddress
	 */
	public void setExportAddress(final SessionContext ctx, final AbstractOrder item, final Address value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.EXPORTADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.exportAddress</code> attribute. 
	 * @param value the exportAddress
	 */
	public void setExportAddress(final AbstractOrder item, final Address value)
	{
		setExportAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.exportAddress</code> attribute.
	 * @return the exportAddress
	 */
	public String getExportAddress(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.EXPORTADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.exportAddress</code> attribute.
	 * @return the exportAddress
	 */
	public String getExportAddress(final SAPCpiOutboundOrder item)
	{
		return getExportAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.exportAddress</code> attribute. 
	 * @param value the exportAddress
	 */
	public void setExportAddress(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.EXPORTADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.exportAddress</code> attribute. 
	 * @param value the exportAddress
	 */
	public void setExportAddress(final SAPCpiOutboundOrder item, final String value)
	{
		setExportAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.exportAddressText</code> attribute.
	 * @return the exportAddressText
	 */
	public String getExportAddressText(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.EXPORTADDRESSTEXT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.exportAddressText</code> attribute.
	 * @return the exportAddressText
	 */
	public String getExportAddressText(final AbstractOrder item)
	{
		return getExportAddressText( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.exportAddressText</code> attribute. 
	 * @param value the exportAddressText
	 */
	public void setExportAddressText(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.EXPORTADDRESSTEXT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.exportAddressText</code> attribute. 
	 * @param value the exportAddressText
	 */
	public void setExportAddressText(final AbstractOrder item, final String value)
	{
		setExportAddressText( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.exportFlag</code> attribute.
	 * @return the exportFlag
	 */
	public String getExportFlag(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.EXPORTFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.exportFlag</code> attribute.
	 * @return the exportFlag
	 */
	public String getExportFlag(final SAPCpiOutboundOrder item)
	{
		return getExportFlag( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.exportFlag</code> attribute. 
	 * @param value the exportFlag
	 */
	public void setExportFlag(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.EXPORTFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.exportFlag</code> attribute. 
	 * @param value the exportFlag
	 */
	public void setExportFlag(final SAPCpiOutboundOrder item, final String value)
	{
		setExportFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Employee.externalCustomer</code> attribute.
	 * @return the externalCustomer
	 */
	public GEEdgeCustomer getExternalCustomer(final SessionContext ctx, final Employee item)
	{
		return (GEEdgeCustomer)item.getProperty( ctx, BhgeCoreConstants.Attributes.Employee.EXTERNALCUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Employee.externalCustomer</code> attribute.
	 * @return the externalCustomer
	 */
	public GEEdgeCustomer getExternalCustomer(final Employee item)
	{
		return getExternalCustomer( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Employee.externalCustomer</code> attribute. 
	 * @param value the externalCustomer
	 */
	public void setExternalCustomer(final SessionContext ctx, final Employee item, final GEEdgeCustomer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Employee.EXTERNALCUSTOMER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Employee.externalCustomer</code> attribute. 
	 * @param value the externalCustomer
	 */
	public void setExternalCustomer(final Employee item, final GEEdgeCustomer value)
	{
		setExternalCustomer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Media.fileUploaded</code> attribute.
	 * @return the fileUploaded
	 */
	public Boolean isFileUploaded(final SessionContext ctx, final Media item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Media.FILEUPLOADED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Media.fileUploaded</code> attribute.
	 * @return the fileUploaded
	 */
	public Boolean isFileUploaded(final Media item)
	{
		return isFileUploaded( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Media.fileUploaded</code> attribute. 
	 * @return the fileUploaded
	 */
	public boolean isFileUploadedAsPrimitive(final SessionContext ctx, final Media item)
	{
		Boolean value = isFileUploaded( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Media.fileUploaded</code> attribute. 
	 * @return the fileUploaded
	 */
	public boolean isFileUploadedAsPrimitive(final Media item)
	{
		return isFileUploadedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Media.fileUploaded</code> attribute. 
	 * @param value the fileUploaded
	 */
	public void setFileUploaded(final SessionContext ctx, final Media item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Media.FILEUPLOADED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Media.fileUploaded</code> attribute. 
	 * @param value the fileUploaded
	 */
	public void setFileUploaded(final Media item, final Boolean value)
	{
		setFileUploaded( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Media.fileUploaded</code> attribute. 
	 * @param value the fileUploaded
	 */
	public void setFileUploaded(final SessionContext ctx, final Media item, final boolean value)
	{
		setFileUploaded( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Media.fileUploaded</code> attribute. 
	 * @param value the fileUploaded
	 */
	public void setFileUploaded(final Media item, final boolean value)
	{
		setFileUploaded( getSession().getSessionContext(), item, value );
	}
	
	@Override
	public String getName()
	{
		return BhgeCoreConstants.EXTENSIONNAME;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.govermentBuyer</code> attribute.
	 * @return the govermentBuyer
	 */
	public String getGovermentBuyer(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.GOVERMENTBUYER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.govermentBuyer</code> attribute.
	 * @return the govermentBuyer
	 */
	public String getGovermentBuyer(final SAPCpiOutboundOrder item)
	{
		return getGovermentBuyer( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.govermentBuyer</code> attribute. 
	 * @param value the govermentBuyer
	 */
	public void setGovermentBuyer(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.GOVERMENTBUYER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.govermentBuyer</code> attribute. 
	 * @param value the govermentBuyer
	 */
	public void setGovermentBuyer(final SAPCpiOutboundOrder item, final String value)
	{
		setGovermentBuyer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.governmentFlag</code> attribute.
	 * @return the governmentFlag
	 */
	public String getGovernmentFlag(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.GOVERNMENTFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.governmentFlag</code> attribute.
	 * @return the governmentFlag
	 */
	public String getGovernmentFlag(final SAPCpiOutboundOrder item)
	{
		return getGovernmentFlag( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.governmentFlag</code> attribute. 
	 * @param value the governmentFlag
	 */
	public void setGovernmentFlag(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.GOVERNMENTFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.governmentFlag</code> attribute. 
	 * @param value the governmentFlag
	 */
	public void setGovernmentFlag(final SAPCpiOutboundOrder item, final String value)
	{
		setGovernmentFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.guestShipToCountries</code> attribute.
	 * @return the guestShipToCountries
	 */
	public Set<Country> getGuestShipToCountries(final SessionContext ctx, final Country item)
	{
		return (Set<Country>)COUNTRYTOGUESTSHIPTOCOUNTRIESMAPPINGGUESTSHIPTOCOUNTRIESHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.guestShipToCountries</code> attribute.
	 * @return the guestShipToCountries
	 */
	public Set<Country> getGuestShipToCountries(final Country item)
	{
		return getGuestShipToCountries( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.guestShipToCountries</code> attribute. 
	 * @param value the guestShipToCountries
	 */
	public void setGuestShipToCountries(final SessionContext ctx, final Country item, final Set<Country> value)
	{
		COUNTRYTOGUESTSHIPTOCOUNTRIESMAPPINGGUESTSHIPTOCOUNTRIESHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.guestShipToCountries</code> attribute. 
	 * @param value the guestShipToCountries
	 */
	public void setGuestShipToCountries(final Country item, final Set<Country> value)
	{
		setGuestShipToCountries( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to guestShipToCountries. 
	 * @param value the item to add to guestShipToCountries
	 */
	public void addToGuestShipToCountries(final SessionContext ctx, final Country item, final Country value)
	{
		COUNTRYTOGUESTSHIPTOCOUNTRIESMAPPINGGUESTSHIPTOCOUNTRIESHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to guestShipToCountries. 
	 * @param value the item to add to guestShipToCountries
	 */
	public void addToGuestShipToCountries(final Country item, final Country value)
	{
		addToGuestShipToCountries( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from guestShipToCountries. 
	 * @param value the item to remove from guestShipToCountries
	 */
	public void removeFromGuestShipToCountries(final SessionContext ctx, final Country item, final Country value)
	{
		COUNTRYTOGUESTSHIPTOCOUNTRIESMAPPINGGUESTSHIPTOCOUNTRIESHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from guestShipToCountries. 
	 * @param value the item to remove from guestShipToCountries
	 */
	public void removeFromGuestShipToCountries(final Country item, final Country value)
	{
		removeFromGuestShipToCountries( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.HazardAttachmentUploadStatus</code> attribute.
	 * @return the HazardAttachmentUploadStatus
	 */
	public EnumerationValue getHazardAttachmentUploadStatus(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.HAZARDATTACHMENTUPLOADSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.HazardAttachmentUploadStatus</code> attribute.
	 * @return the HazardAttachmentUploadStatus
	 */
	public EnumerationValue getHazardAttachmentUploadStatus(final AbstractOrder item)
	{
		return getHazardAttachmentUploadStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.HazardAttachmentUploadStatus</code> attribute. 
	 * @param value the HazardAttachmentUploadStatus
	 */
	public void setHazardAttachmentUploadStatus(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.HAZARDATTACHMENTUPLOADSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.HazardAttachmentUploadStatus</code> attribute. 
	 * @param value the HazardAttachmentUploadStatus
	 */
	public void setHazardAttachmentUploadStatus(final AbstractOrder item, final EnumerationValue value)
	{
		setHazardAttachmentUploadStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.hazardInfoDocs</code> attribute.
	 * @return the hazardInfoDocs - hazard Info Doc
	 */
	public Media getHazardInfoDocs(final SessionContext ctx, final AbstractOrder item)
	{
		return (Media)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.HAZARDINFODOCS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.hazardInfoDocs</code> attribute.
	 * @return the hazardInfoDocs - hazard Info Doc
	 */
	public Media getHazardInfoDocs(final AbstractOrder item)
	{
		return getHazardInfoDocs( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.hazardInfoDocs</code> attribute. 
	 * @param value the hazardInfoDocs - hazard Info Doc
	 */
	public void setHazardInfoDocs(final SessionContext ctx, final AbstractOrder item, final Media value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.HAZARDINFODOCS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.hazardInfoDocs</code> attribute. 
	 * @param value the hazardInfoDocs - hazard Info Doc
	 */
	public void setHazardInfoDocs(final AbstractOrder item, final Media value)
	{
		setHazardInfoDocs( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.incoterms1</code> attribute.
	 * @return the incoterms1
	 */
	public String getIncoterms1(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.INCOTERMS1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.incoterms1</code> attribute.
	 * @return the incoterms1
	 */
	public String getIncoterms1(final B2BUnit item)
	{
		return getIncoterms1( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.incoterms1</code> attribute. 
	 * @param value the incoterms1
	 */
	public void setIncoterms1(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.INCOTERMS1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.incoterms1</code> attribute. 
	 * @param value the incoterms1
	 */
	public void setIncoterms1(final B2BUnit item, final String value)
	{
		setIncoterms1( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.incoterms2</code> attribute.
	 * @return the incoterms2
	 */
	public String getIncoterms2(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.INCOTERMS2);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.incoterms2</code> attribute.
	 * @return the incoterms2
	 */
	public String getIncoterms2(final B2BUnit item)
	{
		return getIncoterms2( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.incoterms2</code> attribute. 
	 * @param value the incoterms2
	 */
	public void setIncoterms2(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.INCOTERMS2,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.incoterms2</code> attribute. 
	 * @param value the incoterms2
	 */
	public void setIncoterms2(final B2BUnit item, final String value)
	{
		setIncoterms2( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.incotrms1</code> attribute.
	 * @return the incotrms1
	 */
	public Incoterm getIncotrms1(final SessionContext ctx, final B2BUnit item)
	{
		return (Incoterm)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.INCOTRMS1);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.incotrms1</code> attribute.
	 * @return the incotrms1
	 */
	public Incoterm getIncotrms1(final B2BUnit item)
	{
		return getIncotrms1( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.incotrms1</code> attribute. 
	 * @param value the incotrms1
	 */
	public void setIncotrms1(final SessionContext ctx, final B2BUnit item, final Incoterm value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.INCOTRMS1,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.incotrms1</code> attribute. 
	 * @param value the incotrms1
	 */
	public void setIncotrms1(final B2BUnit item, final Incoterm value)
	{
		setIncotrms1( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CPQOrderEntryProductInfo.instanceId</code> attribute.
	 * @return the instanceId - Instance id of configuration
	 */
	public String getInstanceId(final SessionContext ctx, final CPQOrderEntryProductInfo item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.CPQOrderEntryProductInfo.INSTANCEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CPQOrderEntryProductInfo.instanceId</code> attribute.
	 * @return the instanceId - Instance id of configuration
	 */
	public String getInstanceId(final CPQOrderEntryProductInfo item)
	{
		return getInstanceId( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CPQOrderEntryProductInfo.instanceId</code> attribute. 
	 * @param value the instanceId - Instance id of configuration
	 */
	public void setInstanceId(final SessionContext ctx, final CPQOrderEntryProductInfo item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.CPQOrderEntryProductInfo.INSTANCEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CPQOrderEntryProductInfo.instanceId</code> attribute. 
	 * @param value the instanceId - Instance id of configuration
	 */
	public void setInstanceId(final CPQOrderEntryProductInfo item, final String value)
	{
		setInstanceId( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute.
	 * @return the invalidateEntry
	 */
	public Boolean isInvalidateEntry(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.INVALIDATEENTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute.
	 * @return the invalidateEntry
	 */
	public Boolean isInvalidateEntry(final AbstractOrderEntry item)
	{
		return isInvalidateEntry( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute. 
	 * @return the invalidateEntry
	 */
	public boolean isInvalidateEntryAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isInvalidateEntry( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute. 
	 * @return the invalidateEntry
	 */
	public boolean isInvalidateEntryAsPrimitive(final AbstractOrderEntry item)
	{
		return isInvalidateEntryAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute. 
	 * @param value the invalidateEntry
	 */
	public void setInvalidateEntry(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.INVALIDATEENTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute. 
	 * @param value the invalidateEntry
	 */
	public void setInvalidateEntry(final AbstractOrderEntry item, final Boolean value)
	{
		setInvalidateEntry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute. 
	 * @param value the invalidateEntry
	 */
	public void setInvalidateEntry(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setInvalidateEntry( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.invalidateEntry</code> attribute. 
	 * @param value the invalidateEntry
	 */
	public void setInvalidateEntry(final AbstractOrderEntry item, final boolean value)
	{
		setInvalidateEntry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoiceContact</code> attribute.
	 * @return the InvoiceContact
	 */
	public String getInvoiceContact(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICECONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoiceContact</code> attribute.
	 * @return the InvoiceContact
	 */
	public String getInvoiceContact(final AbstractOrder item)
	{
		return getInvoiceContact( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoiceContact</code> attribute. 
	 * @param value the InvoiceContact
	 */
	public void setInvoiceContact(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICECONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoiceContact</code> attribute. 
	 * @param value the InvoiceContact
	 */
	public void setInvoiceContact(final AbstractOrder item, final String value)
	{
		setInvoiceContact( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.invoiceContact</code> attribute.
	 * @return the invoiceContact
	 */
	public String getInvoiceContact(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.INVOICECONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.invoiceContact</code> attribute.
	 * @return the invoiceContact
	 */
	public String getInvoiceContact(final SAPCpiOutboundOrder item)
	{
		return getInvoiceContact( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.invoiceContact</code> attribute. 
	 * @param value the invoiceContact
	 */
	public void setInvoiceContact(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.INVOICECONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.invoiceContact</code> attribute. 
	 * @param value the invoiceContact
	 */
	public void setInvoiceContact(final SAPCpiOutboundOrder item, final String value)
	{
		setInvoiceContact( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoiceContact1Num</code> attribute.
	 * @return the InvoiceContact1Num
	 */
	public String getInvoiceContact1Num(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICECONTACT1NUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoiceContact1Num</code> attribute.
	 * @return the InvoiceContact1Num
	 */
	public String getInvoiceContact1Num(final AbstractOrder item)
	{
		return getInvoiceContact1Num( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoiceContact1Num</code> attribute. 
	 * @param value the InvoiceContact1Num
	 */
	public void setInvoiceContact1Num(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICECONTACT1NUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoiceContact1Num</code> attribute. 
	 * @param value the InvoiceContact1Num
	 */
	public void setInvoiceContact1Num(final AbstractOrder item, final String value)
	{
		setInvoiceContact1Num( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoiceContactName</code> attribute.
	 * @return the InvoiceContactName
	 */
	public String getInvoiceContactName(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICECONTACTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoiceContactName</code> attribute.
	 * @return the InvoiceContactName
	 */
	public String getInvoiceContactName(final AbstractOrder item)
	{
		return getInvoiceContactName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoiceContactName</code> attribute. 
	 * @param value the InvoiceContactName
	 */
	public void setInvoiceContactName(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICECONTACTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoiceContactName</code> attribute. 
	 * @param value the InvoiceContactName
	 */
	public void setInvoiceContactName(final AbstractOrder item, final String value)
	{
		setInvoiceContactName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.invoiceEmail</code> attribute.
	 * @return the invoiceEmail
	 */
	public String getInvoiceEmail(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICEEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.invoiceEmail</code> attribute.
	 * @return the invoiceEmail
	 */
	public String getInvoiceEmail(final AbstractOrder item)
	{
		return getInvoiceEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.invoiceEmail</code> attribute. 
	 * @param value the invoiceEmail
	 */
	public void setInvoiceEmail(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICEEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.invoiceEmail</code> attribute. 
	 * @param value the invoiceEmail
	 */
	public void setInvoiceEmail(final AbstractOrder item, final String value)
	{
		setInvoiceEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.invoiceEmail</code> attribute.
	 * @return the invoiceEmail
	 */
	public String getInvoiceEmail(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.INVOICEEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.invoiceEmail</code> attribute.
	 * @return the invoiceEmail
	 */
	public String getInvoiceEmail(final SAPCpiOutboundOrder item)
	{
		return getInvoiceEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.invoiceEmail</code> attribute. 
	 * @param value the invoiceEmail
	 */
	public void setInvoiceEmail(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.INVOICEEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.invoiceEmail</code> attribute. 
	 * @param value the invoiceEmail
	 */
	public void setInvoiceEmail(final SAPCpiOutboundOrder item, final String value)
	{
		setInvoiceEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoicePhone</code> attribute.
	 * @return the InvoicePhone
	 */
	public String getInvoicePhone(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICEPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.InvoicePhone</code> attribute.
	 * @return the InvoicePhone
	 */
	public String getInvoicePhone(final AbstractOrder item)
	{
		return getInvoicePhone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoicePhone</code> attribute. 
	 * @param value the InvoicePhone
	 */
	public void setInvoicePhone(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.INVOICEPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.InvoicePhone</code> attribute. 
	 * @param value the InvoicePhone
	 */
	public void setInvoicePhone(final AbstractOrder item, final String value)
	{
		setInvoicePhone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.invoicePhone</code> attribute.
	 * @return the invoicePhone
	 */
	public String getInvoicePhone(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.INVOICEPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.invoicePhone</code> attribute.
	 * @return the invoicePhone
	 */
	public String getInvoicePhone(final SAPCpiOutboundOrder item)
	{
		return getInvoicePhone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.invoicePhone</code> attribute. 
	 * @param value the invoicePhone
	 */
	public void setInvoicePhone(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.INVOICEPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.invoicePhone</code> attribute. 
	 * @param value the invoicePhone
	 */
	public void setInvoicePhone(final SAPCpiOutboundOrder item, final String value)
	{
		setInvoicePhone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.isAPAC</code> attribute.
	 * @return the isAPAC - APAC SalesOrg
	 */
	public Boolean isIsAPAC(final SessionContext ctx, final SAPSalesOrganization item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.ISAPAC);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.isAPAC</code> attribute.
	 * @return the isAPAC - APAC SalesOrg
	 */
	public Boolean isIsAPAC(final SAPSalesOrganization item)
	{
		return isIsAPAC( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.isAPAC</code> attribute. 
	 * @return the isAPAC - APAC SalesOrg
	 */
	public boolean isIsAPACAsPrimitive(final SessionContext ctx, final SAPSalesOrganization item)
	{
		Boolean value = isIsAPAC( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.isAPAC</code> attribute. 
	 * @return the isAPAC - APAC SalesOrg
	 */
	public boolean isIsAPACAsPrimitive(final SAPSalesOrganization item)
	{
		return isIsAPACAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.isAPAC</code> attribute. 
	 * @param value the isAPAC - APAC SalesOrg
	 */
	public void setIsAPAC(final SessionContext ctx, final SAPSalesOrganization item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.ISAPAC,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.isAPAC</code> attribute. 
	 * @param value the isAPAC - APAC SalesOrg
	 */
	public void setIsAPAC(final SAPSalesOrganization item, final Boolean value)
	{
		setIsAPAC( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.isAPAC</code> attribute. 
	 * @param value the isAPAC - APAC SalesOrg
	 */
	public void setIsAPAC(final SessionContext ctx, final SAPSalesOrganization item, final boolean value)
	{
		setIsAPAC( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.isAPAC</code> attribute. 
	 * @param value the isAPAC - APAC SalesOrg
	 */
	public void setIsAPAC(final SAPSalesOrganization item, final boolean value)
	{
		setIsAPAC( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isAttachmentMoved</code> attribute.
	 * @return the isAttachmentMoved - Order attachment flag
	 */
	public Boolean isIsAttachmentMoved(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISATTACHMENTMOVED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isAttachmentMoved</code> attribute.
	 * @return the isAttachmentMoved - Order attachment flag
	 */
	public Boolean isIsAttachmentMoved(final AbstractOrder item)
	{
		return isIsAttachmentMoved( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isAttachmentMoved</code> attribute. 
	 * @return the isAttachmentMoved - Order attachment flag
	 */
	public boolean isIsAttachmentMovedAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsAttachmentMoved( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isAttachmentMoved</code> attribute. 
	 * @return the isAttachmentMoved - Order attachment flag
	 */
	public boolean isIsAttachmentMovedAsPrimitive(final AbstractOrder item)
	{
		return isIsAttachmentMovedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isAttachmentMoved</code> attribute. 
	 * @param value the isAttachmentMoved - Order attachment flag
	 */
	public void setIsAttachmentMoved(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISATTACHMENTMOVED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isAttachmentMoved</code> attribute. 
	 * @param value the isAttachmentMoved - Order attachment flag
	 */
	public void setIsAttachmentMoved(final AbstractOrder item, final Boolean value)
	{
		setIsAttachmentMoved( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isAttachmentMoved</code> attribute. 
	 * @param value the isAttachmentMoved - Order attachment flag
	 */
	public void setIsAttachmentMoved(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsAttachmentMoved( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isAttachmentMoved</code> attribute. 
	 * @param value the isAttachmentMoved - Order attachment flag
	 */
	public void setIsAttachmentMoved(final AbstractOrder item, final boolean value)
	{
		setIsAttachmentMoved( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isBuyer</code> attribute.
	 * @return the isBuyer - buyer flag
	 */
	public Boolean isIsBuyer(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISBUYER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isBuyer</code> attribute.
	 * @return the isBuyer - buyer flag
	 */
	public Boolean isIsBuyer(final AbstractOrder item)
	{
		return isIsBuyer( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isBuyer</code> attribute. 
	 * @return the isBuyer - buyer flag
	 */
	public boolean isIsBuyerAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsBuyer( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isBuyer</code> attribute. 
	 * @return the isBuyer - buyer flag
	 */
	public boolean isIsBuyerAsPrimitive(final AbstractOrder item)
	{
		return isIsBuyerAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isBuyer</code> attribute. 
	 * @param value the isBuyer - buyer flag
	 */
	public void setIsBuyer(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISBUYER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isBuyer</code> attribute. 
	 * @param value the isBuyer - buyer flag
	 */
	public void setIsBuyer(final AbstractOrder item, final Boolean value)
	{
		setIsBuyer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isBuyer</code> attribute. 
	 * @param value the isBuyer - buyer flag
	 */
	public void setIsBuyer(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsBuyer( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isBuyer</code> attribute. 
	 * @param value the isBuyer - buyer flag
	 */
	public void setIsBuyer(final AbstractOrder item, final boolean value)
	{
		setIsBuyer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isComplete</code> attribute.
	 * @return the isComplete
	 */
	public Boolean isIsComplete(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISCOMPLETE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isComplete</code> attribute.
	 * @return the isComplete
	 */
	public Boolean isIsComplete(final AbstractOrderEntry item)
	{
		return isIsComplete( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isComplete</code> attribute. 
	 * @return the isComplete
	 */
	public boolean isIsCompleteAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsComplete( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isComplete</code> attribute. 
	 * @return the isComplete
	 */
	public boolean isIsCompleteAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsCompleteAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isComplete</code> attribute. 
	 * @param value the isComplete
	 */
	public void setIsComplete(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISCOMPLETE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isComplete</code> attribute. 
	 * @param value the isComplete
	 */
	public void setIsComplete(final AbstractOrderEntry item, final Boolean value)
	{
		setIsComplete( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isComplete</code> attribute. 
	 * @param value the isComplete
	 */
	public void setIsComplete(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsComplete( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isComplete</code> attribute. 
	 * @param value the isComplete
	 */
	public void setIsComplete(final AbstractOrderEntry item, final boolean value)
	{
		setIsComplete( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute.
	 * @return the isCutOffTime
	 */
	public Boolean isIsCutOffTime(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISCUTOFFTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute.
	 * @return the isCutOffTime
	 */
	public Boolean isIsCutOffTime(final AbstractOrderEntry item)
	{
		return isIsCutOffTime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute. 
	 * @return the isCutOffTime
	 */
	public boolean isIsCutOffTimeAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsCutOffTime( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute. 
	 * @return the isCutOffTime
	 */
	public boolean isIsCutOffTimeAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsCutOffTimeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute. 
	 * @param value the isCutOffTime
	 */
	public void setIsCutOffTime(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISCUTOFFTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute. 
	 * @param value the isCutOffTime
	 */
	public void setIsCutOffTime(final AbstractOrderEntry item, final Boolean value)
	{
		setIsCutOffTime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute. 
	 * @param value the isCutOffTime
	 */
	public void setIsCutOffTime(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsCutOffTime( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isCutOffTime</code> attribute. 
	 * @param value the isCutOffTime
	 */
	public void setIsCutOffTime(final AbstractOrderEntry item, final boolean value)
	{
		setIsCutOffTime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute.
	 * @return the isDomesticPlant
	 */
	public Boolean isIsDomesticPlant(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISDOMESTICPLANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute.
	 * @return the isDomesticPlant
	 */
	public Boolean isIsDomesticPlant(final AbstractOrderEntry item)
	{
		return isIsDomesticPlant( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute. 
	 * @return the isDomesticPlant
	 */
	public boolean isIsDomesticPlantAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsDomesticPlant( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute. 
	 * @return the isDomesticPlant
	 */
	public boolean isIsDomesticPlantAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsDomesticPlantAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute. 
	 * @param value the isDomesticPlant
	 */
	public void setIsDomesticPlant(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISDOMESTICPLANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute. 
	 * @param value the isDomesticPlant
	 */
	public void setIsDomesticPlant(final AbstractOrderEntry item, final Boolean value)
	{
		setIsDomesticPlant( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute. 
	 * @param value the isDomesticPlant
	 */
	public void setIsDomesticPlant(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsDomesticPlant( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isDomesticPlant</code> attribute. 
	 * @param value the isDomesticPlant
	 */
	public void setIsDomesticPlant(final AbstractOrderEntry item, final boolean value)
	{
		setIsDomesticPlant( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute.
	 * @return the isEngineeringHold
	 */
	public Boolean isIsEngineeringHold(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISENGINEERINGHOLD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute.
	 * @return the isEngineeringHold
	 */
	public Boolean isIsEngineeringHold(final AbstractOrderEntry item)
	{
		return isIsEngineeringHold( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute. 
	 * @return the isEngineeringHold
	 */
	public boolean isIsEngineeringHoldAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsEngineeringHold( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute. 
	 * @return the isEngineeringHold
	 */
	public boolean isIsEngineeringHoldAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsEngineeringHoldAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute. 
	 * @param value the isEngineeringHold
	 */
	public void setIsEngineeringHold(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISENGINEERINGHOLD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute. 
	 * @param value the isEngineeringHold
	 */
	public void setIsEngineeringHold(final AbstractOrderEntry item, final Boolean value)
	{
		setIsEngineeringHold( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute. 
	 * @param value the isEngineeringHold
	 */
	public void setIsEngineeringHold(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsEngineeringHold( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isEngineeringHold</code> attribute. 
	 * @param value the isEngineeringHold
	 */
	public void setIsEngineeringHold(final AbstractOrderEntry item, final boolean value)
	{
		setIsEngineeringHold( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExpediteRequest</code> attribute.
	 * @return the isExpediteRequest - Expedite Request
	 */
	public Boolean isIsExpediteRequest(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISEXPEDITEREQUEST);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExpediteRequest</code> attribute.
	 * @return the isExpediteRequest - Expedite Request
	 */
	public Boolean isIsExpediteRequest(final AbstractOrder item)
	{
		return isIsExpediteRequest( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExpediteRequest</code> attribute. 
	 * @return the isExpediteRequest - Expedite Request
	 */
	public boolean isIsExpediteRequestAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsExpediteRequest( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExpediteRequest</code> attribute. 
	 * @return the isExpediteRequest - Expedite Request
	 */
	public boolean isIsExpediteRequestAsPrimitive(final AbstractOrder item)
	{
		return isIsExpediteRequestAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExpediteRequest</code> attribute. 
	 * @param value the isExpediteRequest - Expedite Request
	 */
	public void setIsExpediteRequest(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISEXPEDITEREQUEST,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExpediteRequest</code> attribute. 
	 * @param value the isExpediteRequest - Expedite Request
	 */
	public void setIsExpediteRequest(final AbstractOrder item, final Boolean value)
	{
		setIsExpediteRequest( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExpediteRequest</code> attribute. 
	 * @param value the isExpediteRequest - Expedite Request
	 */
	public void setIsExpediteRequest(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsExpediteRequest( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExpediteRequest</code> attribute. 
	 * @param value the isExpediteRequest - Expedite Request
	 */
	public void setIsExpediteRequest(final AbstractOrder item, final boolean value)
	{
		setIsExpediteRequest( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExport</code> attribute.
	 * @return the isExport
	 */
	public Boolean isIsExport(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISEXPORT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExport</code> attribute.
	 * @return the isExport
	 */
	public Boolean isIsExport(final AbstractOrder item)
	{
		return isIsExport( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExport</code> attribute. 
	 * @return the isExport
	 */
	public boolean isIsExportAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsExport( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isExport</code> attribute. 
	 * @return the isExport
	 */
	public boolean isIsExportAsPrimitive(final AbstractOrder item)
	{
		return isIsExportAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExport</code> attribute. 
	 * @param value the isExport
	 */
	public void setIsExport(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISEXPORT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExport</code> attribute. 
	 * @param value the isExport
	 */
	public void setIsExport(final AbstractOrder item, final Boolean value)
	{
		setIsExport( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExport</code> attribute. 
	 * @param value the isExport
	 */
	public void setIsExport(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsExport( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isExport</code> attribute. 
	 * @param value the isExport
	 */
	public void setIsExport(final AbstractOrder item, final boolean value)
	{
		setIsExport( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isGovernment</code> attribute.
	 * @return the isGovernment
	 */
	public Boolean isIsGovernment(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISGOVERNMENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isGovernment</code> attribute.
	 * @return the isGovernment
	 */
	public Boolean isIsGovernment(final AbstractOrder item)
	{
		return isIsGovernment( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isGovernment</code> attribute. 
	 * @return the isGovernment
	 */
	public boolean isIsGovernmentAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsGovernment( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isGovernment</code> attribute. 
	 * @return the isGovernment
	 */
	public boolean isIsGovernmentAsPrimitive(final AbstractOrder item)
	{
		return isIsGovernmentAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isGovernment</code> attribute. 
	 * @param value the isGovernment
	 */
	public void setIsGovernment(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISGOVERNMENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isGovernment</code> attribute. 
	 * @param value the isGovernment
	 */
	public void setIsGovernment(final AbstractOrder item, final Boolean value)
	{
		setIsGovernment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isGovernment</code> attribute. 
	 * @param value the isGovernment
	 */
	public void setIsGovernment(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsGovernment( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isGovernment</code> attribute. 
	 * @param value the isGovernment
	 */
	public void setIsGovernment(final AbstractOrder item, final boolean value)
	{
		setIsGovernment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isManufacturer</code> attribute.
	 * @return the isManufacturer - manufacturer flag
	 */
	public Boolean isIsManufacturer(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISMANUFACTURER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isManufacturer</code> attribute.
	 * @return the isManufacturer - manufacturer flag
	 */
	public Boolean isIsManufacturer(final AbstractOrder item)
	{
		return isIsManufacturer( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isManufacturer</code> attribute. 
	 * @return the isManufacturer - manufacturer flag
	 */
	public boolean isIsManufacturerAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsManufacturer( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isManufacturer</code> attribute. 
	 * @return the isManufacturer - manufacturer flag
	 */
	public boolean isIsManufacturerAsPrimitive(final AbstractOrder item)
	{
		return isIsManufacturerAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isManufacturer</code> attribute. 
	 * @param value the isManufacturer - manufacturer flag
	 */
	public void setIsManufacturer(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISMANUFACTURER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isManufacturer</code> attribute. 
	 * @param value the isManufacturer - manufacturer flag
	 */
	public void setIsManufacturer(final AbstractOrder item, final Boolean value)
	{
		setIsManufacturer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isManufacturer</code> attribute. 
	 * @param value the isManufacturer - manufacturer flag
	 */
	public void setIsManufacturer(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsManufacturer( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isManufacturer</code> attribute. 
	 * @param value the isManufacturer - manufacturer flag
	 */
	public void setIsManufacturer(final AbstractOrder item, final boolean value)
	{
		setIsManufacturer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclear</code> attribute.
	 * @return the isNuclear
	 */
	public Boolean isIsNuclear(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISNUCLEAR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclear</code> attribute.
	 * @return the isNuclear
	 */
	public Boolean isIsNuclear(final AbstractOrder item)
	{
		return isIsNuclear( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclear</code> attribute. 
	 * @return the isNuclear
	 */
	public boolean isIsNuclearAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsNuclear( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclear</code> attribute. 
	 * @return the isNuclear
	 */
	public boolean isIsNuclearAsPrimitive(final AbstractOrder item)
	{
		return isIsNuclearAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISNUCLEAR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final AbstractOrder item, final Boolean value)
	{
		setIsNuclear( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsNuclear( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final AbstractOrder item, final boolean value)
	{
		setIsNuclear( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isNuclear</code> attribute.
	 * @return the isNuclear
	 */
	public Boolean isIsNuclear(final SessionContext ctx, final Address item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Address.ISNUCLEAR);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isNuclear</code> attribute.
	 * @return the isNuclear
	 */
	public Boolean isIsNuclear(final Address item)
	{
		return isIsNuclear( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isNuclear</code> attribute. 
	 * @return the isNuclear
	 */
	public boolean isIsNuclearAsPrimitive(final SessionContext ctx, final Address item)
	{
		Boolean value = isIsNuclear( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isNuclear</code> attribute. 
	 * @return the isNuclear
	 */
	public boolean isIsNuclearAsPrimitive(final Address item)
	{
		return isIsNuclearAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final SessionContext ctx, final Address item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Address.ISNUCLEAR,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final Address item, final Boolean value)
	{
		setIsNuclear( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final SessionContext ctx, final Address item, final boolean value)
	{
		setIsNuclear( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isNuclear</code> attribute. 
	 * @param value the isNuclear
	 */
	public void setIsNuclear(final Address item, final boolean value)
	{
		setIsNuclear( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute.
	 * @return the isNuclearOppurtunity
	 */
	public Boolean isIsNuclearOppurtunity(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISNUCLEAROPPURTUNITY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute.
	 * @return the isNuclearOppurtunity
	 */
	public Boolean isIsNuclearOppurtunity(final AbstractOrder item)
	{
		return isIsNuclearOppurtunity( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute. 
	 * @return the isNuclearOppurtunity
	 */
	public boolean isIsNuclearOppurtunityAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsNuclearOppurtunity( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute. 
	 * @return the isNuclearOppurtunity
	 */
	public boolean isIsNuclearOppurtunityAsPrimitive(final AbstractOrder item)
	{
		return isIsNuclearOppurtunityAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute. 
	 * @param value the isNuclearOppurtunity
	 */
	public void setIsNuclearOppurtunity(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISNUCLEAROPPURTUNITY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute. 
	 * @param value the isNuclearOppurtunity
	 */
	public void setIsNuclearOppurtunity(final AbstractOrder item, final Boolean value)
	{
		setIsNuclearOppurtunity( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute. 
	 * @param value the isNuclearOppurtunity
	 */
	public void setIsNuclearOppurtunity(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsNuclearOppurtunity( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isNuclearOppurtunity</code> attribute. 
	 * @param value the isNuclearOppurtunity
	 */
	public void setIsNuclearOppurtunity(final AbstractOrder item, final boolean value)
	{
		setIsNuclearOppurtunity( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Cart.IsOldCartNotified</code> attribute.
	 * @return the IsOldCartNotified
	 */
	public Boolean isIsOldCartNotified(final SessionContext ctx, final Cart item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Cart.ISOLDCARTNOTIFIED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Cart.IsOldCartNotified</code> attribute.
	 * @return the IsOldCartNotified
	 */
	public Boolean isIsOldCartNotified(final Cart item)
	{
		return isIsOldCartNotified( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Cart.IsOldCartNotified</code> attribute. 
	 * @return the IsOldCartNotified
	 */
	public boolean isIsOldCartNotifiedAsPrimitive(final SessionContext ctx, final Cart item)
	{
		Boolean value = isIsOldCartNotified( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Cart.IsOldCartNotified</code> attribute. 
	 * @return the IsOldCartNotified
	 */
	public boolean isIsOldCartNotifiedAsPrimitive(final Cart item)
	{
		return isIsOldCartNotifiedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Cart.IsOldCartNotified</code> attribute. 
	 * @param value the IsOldCartNotified
	 */
	public void setIsOldCartNotified(final SessionContext ctx, final Cart item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Cart.ISOLDCARTNOTIFIED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Cart.IsOldCartNotified</code> attribute. 
	 * @param value the IsOldCartNotified
	 */
	public void setIsOldCartNotified(final Cart item, final Boolean value)
	{
		setIsOldCartNotified( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Cart.IsOldCartNotified</code> attribute. 
	 * @param value the IsOldCartNotified
	 */
	public void setIsOldCartNotified(final SessionContext ctx, final Cart item, final boolean value)
	{
		setIsOldCartNotified( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Cart.IsOldCartNotified</code> attribute. 
	 * @param value the IsOldCartNotified
	 */
	public void setIsOldCartNotified(final Cart item, final boolean value)
	{
		setIsOldCartNotified( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isPartialShipment</code> attribute.
	 * @return the isPartialShipment
	 */
	public Boolean isIsPartialShipment(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISPARTIALSHIPMENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isPartialShipment</code> attribute.
	 * @return the isPartialShipment
	 */
	public Boolean isIsPartialShipment(final AbstractOrder item)
	{
		return isIsPartialShipment( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isPartialShipment</code> attribute. 
	 * @return the isPartialShipment
	 */
	public boolean isIsPartialShipmentAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsPartialShipment( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isPartialShipment</code> attribute. 
	 * @return the isPartialShipment
	 */
	public boolean isIsPartialShipmentAsPrimitive(final AbstractOrder item)
	{
		return isIsPartialShipmentAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isPartialShipment</code> attribute. 
	 * @param value the isPartialShipment
	 */
	public void setIsPartialShipment(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISPARTIALSHIPMENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isPartialShipment</code> attribute. 
	 * @param value the isPartialShipment
	 */
	public void setIsPartialShipment(final AbstractOrder item, final Boolean value)
	{
		setIsPartialShipment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isPartialShipment</code> attribute. 
	 * @param value the isPartialShipment
	 */
	public void setIsPartialShipment(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsPartialShipment( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isPartialShipment</code> attribute. 
	 * @param value the isPartialShipment
	 */
	public void setIsPartialShipment(final AbstractOrder item, final boolean value)
	{
		setIsPartialShipment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute.
	 * @return the isPlantEnabled
	 */
	public Boolean isIsPlantEnabled(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISPLANTENABLED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute.
	 * @return the isPlantEnabled
	 */
	public Boolean isIsPlantEnabled(final AbstractOrderEntry item)
	{
		return isIsPlantEnabled( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute. 
	 * @return the isPlantEnabled
	 */
	public boolean isIsPlantEnabledAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsPlantEnabled( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute. 
	 * @return the isPlantEnabled
	 */
	public boolean isIsPlantEnabledAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsPlantEnabledAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute. 
	 * @param value the isPlantEnabled
	 */
	public void setIsPlantEnabled(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISPLANTENABLED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute. 
	 * @param value the isPlantEnabled
	 */
	public void setIsPlantEnabled(final AbstractOrderEntry item, final Boolean value)
	{
		setIsPlantEnabled( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute. 
	 * @param value the isPlantEnabled
	 */
	public void setIsPlantEnabled(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsPlantEnabled( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isPlantEnabled</code> attribute. 
	 * @param value the isPlantEnabled
	 */
	public void setIsPlantEnabled(final AbstractOrderEntry item, final boolean value)
	{
		setIsPlantEnabled( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isPrimaryAddress</code> attribute.
	 * @return the isPrimaryAddress
	 */
	public Boolean isIsPrimaryAddress(final SessionContext ctx, final Address item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Address.ISPRIMARYADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isPrimaryAddress</code> attribute.
	 * @return the isPrimaryAddress
	 */
	public Boolean isIsPrimaryAddress(final Address item)
	{
		return isIsPrimaryAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isPrimaryAddress</code> attribute. 
	 * @return the isPrimaryAddress
	 */
	public boolean isIsPrimaryAddressAsPrimitive(final SessionContext ctx, final Address item)
	{
		Boolean value = isIsPrimaryAddress( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.isPrimaryAddress</code> attribute. 
	 * @return the isPrimaryAddress
	 */
	public boolean isIsPrimaryAddressAsPrimitive(final Address item)
	{
		return isIsPrimaryAddressAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isPrimaryAddress</code> attribute. 
	 * @param value the isPrimaryAddress
	 */
	public void setIsPrimaryAddress(final SessionContext ctx, final Address item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Address.ISPRIMARYADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isPrimaryAddress</code> attribute. 
	 * @param value the isPrimaryAddress
	 */
	public void setIsPrimaryAddress(final Address item, final Boolean value)
	{
		setIsPrimaryAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isPrimaryAddress</code> attribute. 
	 * @param value the isPrimaryAddress
	 */
	public void setIsPrimaryAddress(final SessionContext ctx, final Address item, final boolean value)
	{
		setIsPrimaryAddress( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.isPrimaryAddress</code> attribute. 
	 * @param value the isPrimaryAddress
	 */
	public void setIsPrimaryAddress(final Address item, final boolean value)
	{
		setIsPrimaryAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute.
	 * @return the isQtyAvailable
	 */
	public Boolean isIsQtyAvailable(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISQTYAVAILABLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute.
	 * @return the isQtyAvailable
	 */
	public Boolean isIsQtyAvailable(final AbstractOrderEntry item)
	{
		return isIsQtyAvailable( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute. 
	 * @return the isQtyAvailable
	 */
	public boolean isIsQtyAvailableAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsQtyAvailable( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute. 
	 * @return the isQtyAvailable
	 */
	public boolean isIsQtyAvailableAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsQtyAvailableAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute. 
	 * @param value the isQtyAvailable
	 */
	public void setIsQtyAvailable(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISQTYAVAILABLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute. 
	 * @param value the isQtyAvailable
	 */
	public void setIsQtyAvailable(final AbstractOrderEntry item, final Boolean value)
	{
		setIsQtyAvailable( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute. 
	 * @param value the isQtyAvailable
	 */
	public void setIsQtyAvailable(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsQtyAvailable( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isQtyAvailable</code> attribute. 
	 * @param value the isQtyAvailable
	 */
	public void setIsQtyAvailable(final AbstractOrderEntry item, final boolean value)
	{
		setIsQtyAvailable( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isQuote</code> attribute.
	 * @return the isQuote
	 */
	public Boolean isIsQuote(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISQUOTE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isQuote</code> attribute.
	 * @return the isQuote
	 */
	public Boolean isIsQuote(final AbstractOrder item)
	{
		return isIsQuote( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isQuote</code> attribute. 
	 * @return the isQuote
	 */
	public boolean isIsQuoteAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsQuote( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isQuote</code> attribute. 
	 * @return the isQuote
	 */
	public boolean isIsQuoteAsPrimitive(final AbstractOrder item)
	{
		return isIsQuoteAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isQuote</code> attribute. 
	 * @param value the isQuote
	 */
	public void setIsQuote(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISQUOTE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isQuote</code> attribute. 
	 * @param value the isQuote
	 */
	public void setIsQuote(final AbstractOrder item, final Boolean value)
	{
		setIsQuote( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isQuote</code> attribute. 
	 * @param value the isQuote
	 */
	public void setIsQuote(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsQuote( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isQuote</code> attribute. 
	 * @param value the isQuote
	 */
	public void setIsQuote(final AbstractOrder item, final boolean value)
	{
		setIsQuote( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.isRelation</code> attribute.
	 * @return the isRelation
	 */
	public List<PrincipalRelation> getIsRelation(final SessionContext ctx, final Principal item)
	{
		final List<PrincipalRelation> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			"PrincipalRelation",
			null,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.isRelation</code> attribute.
	 * @return the isRelation
	 */
	public List<PrincipalRelation> getIsRelation(final Principal item)
	{
		return getIsRelation( getSession().getSessionContext(), item );
	}
	
	public long getIsRelationCount(final SessionContext ctx, final Principal item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			"PrincipalRelation",
			null
		);
	}
	
	public long getIsRelationCount(final Principal item)
	{
		return getIsRelationCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.isRelation</code> attribute. 
	 * @param value the isRelation
	 */
	public void setIsRelation(final SessionContext ctx, final Principal item, final List<PrincipalRelation> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.isRelation</code> attribute. 
	 * @param value the isRelation
	 */
	public void setIsRelation(final Principal item, final List<PrincipalRelation> value)
	{
		setIsRelation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to isRelation. 
	 * @param value the item to add to isRelation
	 */
	public void addToIsRelation(final SessionContext ctx, final Principal item, final PrincipalRelation value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to isRelation. 
	 * @param value the item to add to isRelation
	 */
	public void addToIsRelation(final Principal item, final PrincipalRelation value)
	{
		addToIsRelation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from isRelation. 
	 * @param value the item to remove from isRelation
	 */
	public void removeFromIsRelation(final SessionContext ctx, final Principal item, final PrincipalRelation value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALSOURCERELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALSOURCERELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALSOURCERELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from isRelation. 
	 * @param value the item to remove from isRelation
	 */
	public void removeFromIsRelation(final Principal item, final PrincipalRelation value)
	{
		removeFromIsRelation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute.
	 * @return the isSameDayShipChecked
	 */
	public Boolean isIsSameDayShipChecked(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISSAMEDAYSHIPCHECKED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute.
	 * @return the isSameDayShipChecked
	 */
	public Boolean isIsSameDayShipChecked(final AbstractOrderEntry item)
	{
		return isIsSameDayShipChecked( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute. 
	 * @return the isSameDayShipChecked
	 */
	public boolean isIsSameDayShipCheckedAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsSameDayShipChecked( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute. 
	 * @return the isSameDayShipChecked
	 */
	public boolean isIsSameDayShipCheckedAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsSameDayShipCheckedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute. 
	 * @param value the isSameDayShipChecked
	 */
	public void setIsSameDayShipChecked(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISSAMEDAYSHIPCHECKED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute. 
	 * @param value the isSameDayShipChecked
	 */
	public void setIsSameDayShipChecked(final AbstractOrderEntry item, final Boolean value)
	{
		setIsSameDayShipChecked( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute. 
	 * @param value the isSameDayShipChecked
	 */
	public void setIsSameDayShipChecked(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsSameDayShipChecked( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipChecked</code> attribute. 
	 * @param value the isSameDayShipChecked
	 */
	public void setIsSameDayShipChecked(final AbstractOrderEntry item, final boolean value)
	{
		setIsSameDayShipChecked( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute.
	 * @return the isSameDayShipEnabled
	 */
	public Boolean isIsSameDayShipEnabled(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISSAMEDAYSHIPENABLED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute.
	 * @return the isSameDayShipEnabled
	 */
	public Boolean isIsSameDayShipEnabled(final AbstractOrderEntry item)
	{
		return isIsSameDayShipEnabled( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute. 
	 * @return the isSameDayShipEnabled
	 */
	public boolean isIsSameDayShipEnabledAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isIsSameDayShipEnabled( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute. 
	 * @return the isSameDayShipEnabled
	 */
	public boolean isIsSameDayShipEnabledAsPrimitive(final AbstractOrderEntry item)
	{
		return isIsSameDayShipEnabledAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute. 
	 * @param value the isSameDayShipEnabled
	 */
	public void setIsSameDayShipEnabled(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.ISSAMEDAYSHIPENABLED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute. 
	 * @param value the isSameDayShipEnabled
	 */
	public void setIsSameDayShipEnabled(final AbstractOrderEntry item, final Boolean value)
	{
		setIsSameDayShipEnabled( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute. 
	 * @param value the isSameDayShipEnabled
	 */
	public void setIsSameDayShipEnabled(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setIsSameDayShipEnabled( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.isSameDayShipEnabled</code> attribute. 
	 * @param value the isSameDayShipEnabled
	 */
	public void setIsSameDayShipEnabled(final AbstractOrderEntry item, final boolean value)
	{
		setIsSameDayShipEnabled( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPConfiguration.isSDSEnabled</code> attribute.
	 * @return the isSDSEnabled
	 */
	public Boolean isIsSDSEnabled(final SessionContext ctx, final GenericItem item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPConfiguration.ISSDSENABLED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPConfiguration.isSDSEnabled</code> attribute.
	 * @return the isSDSEnabled
	 */
	public Boolean isIsSDSEnabled(final SAPConfiguration item)
	{
		return isIsSDSEnabled( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPConfiguration.isSDSEnabled</code> attribute. 
	 * @return the isSDSEnabled
	 */
	public boolean isIsSDSEnabledAsPrimitive(final SessionContext ctx, final SAPConfiguration item)
	{
		Boolean value = isIsSDSEnabled( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPConfiguration.isSDSEnabled</code> attribute. 
	 * @return the isSDSEnabled
	 */
	public boolean isIsSDSEnabledAsPrimitive(final SAPConfiguration item)
	{
		return isIsSDSEnabledAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPConfiguration.isSDSEnabled</code> attribute. 
	 * @param value the isSDSEnabled
	 */
	public void setIsSDSEnabled(final SessionContext ctx, final GenericItem item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPConfiguration.ISSDSENABLED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPConfiguration.isSDSEnabled</code> attribute. 
	 * @param value the isSDSEnabled
	 */
	public void setIsSDSEnabled(final SAPConfiguration item, final Boolean value)
	{
		setIsSDSEnabled( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPConfiguration.isSDSEnabled</code> attribute. 
	 * @param value the isSDSEnabled
	 */
	public void setIsSDSEnabled(final SessionContext ctx, final SAPConfiguration item, final boolean value)
	{
		setIsSDSEnabled( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPConfiguration.isSDSEnabled</code> attribute. 
	 * @param value the isSDSEnabled
	 */
	public void setIsSDSEnabled(final SAPConfiguration item, final boolean value)
	{
		setIsSDSEnabled( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute.
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public Boolean isIsShipCompleteOrder(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISSHIPCOMPLETEORDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute.
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public Boolean isIsShipCompleteOrder(final AbstractOrder item)
	{
		return isIsShipCompleteOrder( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute. 
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public boolean isIsShipCompleteOrderAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsShipCompleteOrder( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute. 
	 * @return the isShipCompleteOrder - ShipComplete
	 */
	public boolean isIsShipCompleteOrderAsPrimitive(final AbstractOrder item)
	{
		return isIsShipCompleteOrderAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISSHIPCOMPLETEORDER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final AbstractOrder item, final Boolean value)
	{
		setIsShipCompleteOrder( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsShipCompleteOrder( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder - ShipComplete
	 */
	public void setIsShipCompleteOrder(final AbstractOrder item, final boolean value)
	{
		setIsShipCompleteOrder( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.isShipCompleteOrder</code> attribute.
	 * @return the isShipCompleteOrder
	 */
	public String getIsShipCompleteOrder(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ISSHIPCOMPLETEORDER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.isShipCompleteOrder</code> attribute.
	 * @return the isShipCompleteOrder
	 */
	public String getIsShipCompleteOrder(final SAPCpiOutboundOrder item)
	{
		return getIsShipCompleteOrder( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder
	 */
	public void setIsShipCompleteOrder(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.ISSHIPCOMPLETEORDER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.isShipCompleteOrder</code> attribute. 
	 * @param value the isShipCompleteOrder
	 */
	public void setIsShipCompleteOrder(final SAPCpiOutboundOrder item, final String value)
	{
		setIsShipCompleteOrder( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute.
	 * @return the isSpecialDiscountPresent
	 */
	public Boolean isIsSpecialDiscountPresent(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISSPECIALDISCOUNTPRESENT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute.
	 * @return the isSpecialDiscountPresent
	 */
	public Boolean isIsSpecialDiscountPresent(final AbstractOrder item)
	{
		return isIsSpecialDiscountPresent( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute. 
	 * @return the isSpecialDiscountPresent
	 */
	public boolean isIsSpecialDiscountPresentAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isIsSpecialDiscountPresent( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute. 
	 * @return the isSpecialDiscountPresent
	 */
	public boolean isIsSpecialDiscountPresentAsPrimitive(final AbstractOrder item)
	{
		return isIsSpecialDiscountPresentAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute. 
	 * @param value the isSpecialDiscountPresent
	 */
	public void setIsSpecialDiscountPresent(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ISSPECIALDISCOUNTPRESENT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute. 
	 * @param value the isSpecialDiscountPresent
	 */
	public void setIsSpecialDiscountPresent(final AbstractOrder item, final Boolean value)
	{
		setIsSpecialDiscountPresent( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute. 
	 * @param value the isSpecialDiscountPresent
	 */
	public void setIsSpecialDiscountPresent(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setIsSpecialDiscountPresent( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.isSpecialDiscountPresent</code> attribute. 
	 * @param value the isSpecialDiscountPresent
	 */
	public void setIsSpecialDiscountPresent(final AbstractOrder item, final boolean value)
	{
		setIsSpecialDiscountPresent( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.jobTitle</code> attribute.
	 * @return the jobTitle - Job Title for the User
	 */
	public String getJobTitle(final SessionContext ctx, final User item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.JOBTITLE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.jobTitle</code> attribute.
	 * @return the jobTitle - Job Title for the User
	 */
	public String getJobTitle(final User item)
	{
		return getJobTitle( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.jobTitle</code> attribute. 
	 * @param value the jobTitle - Job Title for the User
	 */
	public void setJobTitle(final SessionContext ctx, final User item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.JOBTITLE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.jobTitle</code> attribute. 
	 * @param value the jobTitle - Job Title for the User
	 */
	public void setJobTitle(final User item, final String value)
	{
		setJobTitle( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute.
	 * @return the largestFilmLeadtime
	 */
	public Integer getLargestFilmLeadtime(final SessionContext ctx, final AbstractOrder item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.LARGESTFILMLEADTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute.
	 * @return the largestFilmLeadtime
	 */
	public Integer getLargestFilmLeadtime(final AbstractOrder item)
	{
		return getLargestFilmLeadtime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute. 
	 * @return the largestFilmLeadtime
	 */
	public int getLargestFilmLeadtimeAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Integer value = getLargestFilmLeadtime( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute. 
	 * @return the largestFilmLeadtime
	 */
	public int getLargestFilmLeadtimeAsPrimitive(final AbstractOrder item)
	{
		return getLargestFilmLeadtimeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute. 
	 * @param value the largestFilmLeadtime
	 */
	public void setLargestFilmLeadtime(final SessionContext ctx, final AbstractOrder item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.LARGESTFILMLEADTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute. 
	 * @param value the largestFilmLeadtime
	 */
	public void setLargestFilmLeadtime(final AbstractOrder item, final Integer value)
	{
		setLargestFilmLeadtime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute. 
	 * @param value the largestFilmLeadtime
	 */
	public void setLargestFilmLeadtime(final SessionContext ctx, final AbstractOrder item, final int value)
	{
		setLargestFilmLeadtime( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestFilmLeadtime</code> attribute. 
	 * @param value the largestFilmLeadtime
	 */
	public void setLargestFilmLeadtime(final AbstractOrder item, final int value)
	{
		setLargestFilmLeadtime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute.
	 * @return the largestNonFilmLeadtime
	 */
	public Integer getLargestNonFilmLeadtime(final SessionContext ctx, final AbstractOrder item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.LARGESTNONFILMLEADTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute.
	 * @return the largestNonFilmLeadtime
	 */
	public Integer getLargestNonFilmLeadtime(final AbstractOrder item)
	{
		return getLargestNonFilmLeadtime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute. 
	 * @return the largestNonFilmLeadtime
	 */
	public int getLargestNonFilmLeadtimeAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Integer value = getLargestNonFilmLeadtime( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute. 
	 * @return the largestNonFilmLeadtime
	 */
	public int getLargestNonFilmLeadtimeAsPrimitive(final AbstractOrder item)
	{
		return getLargestNonFilmLeadtimeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute. 
	 * @param value the largestNonFilmLeadtime
	 */
	public void setLargestNonFilmLeadtime(final SessionContext ctx, final AbstractOrder item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.LARGESTNONFILMLEADTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute. 
	 * @param value the largestNonFilmLeadtime
	 */
	public void setLargestNonFilmLeadtime(final AbstractOrder item, final Integer value)
	{
		setLargestNonFilmLeadtime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute. 
	 * @param value the largestNonFilmLeadtime
	 */
	public void setLargestNonFilmLeadtime(final SessionContext ctx, final AbstractOrder item, final int value)
	{
		setLargestNonFilmLeadtime( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.largestNonFilmLeadtime</code> attribute. 
	 * @param value the largestNonFilmLeadtime
	 */
	public void setLargestNonFilmLeadtime(final AbstractOrder item, final int value)
	{
		setLargestNonFilmLeadtime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CronJob.lastRunTime</code> attribute.
	 * @return the lastRunTime
	 */
	public Date getLastRunTime(final SessionContext ctx, final CronJob item)
	{
		return (Date)item.getProperty( ctx, BhgeCoreConstants.Attributes.CronJob.LASTRUNTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>CronJob.lastRunTime</code> attribute.
	 * @return the lastRunTime
	 */
	public Date getLastRunTime(final CronJob item)
	{
		return getLastRunTime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CronJob.lastRunTime</code> attribute. 
	 * @param value the lastRunTime
	 */
	public void setLastRunTime(final SessionContext ctx, final CronJob item, final Date value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.CronJob.LASTRUNTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>CronJob.lastRunTime</code> attribute. 
	 * @param value the lastRunTime
	 */
	public void setLastRunTime(final CronJob item, final Date value)
	{
		setLastRunTime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.leadtime</code> attribute.
	 * @return the leadtime - Leadtime
	 */
	public Integer getLeadtime(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LEADTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.leadtime</code> attribute.
	 * @return the leadtime - Leadtime
	 */
	public Integer getLeadtime(final AbstractOrderEntry item)
	{
		return getLeadtime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.leadtime</code> attribute. 
	 * @return the leadtime - Leadtime
	 */
	public int getLeadtimeAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Integer value = getLeadtime( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.leadtime</code> attribute. 
	 * @return the leadtime - Leadtime
	 */
	public int getLeadtimeAsPrimitive(final AbstractOrderEntry item)
	{
		return getLeadtimeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.leadtime</code> attribute. 
	 * @param value the leadtime - Leadtime
	 */
	public void setLeadtime(final SessionContext ctx, final AbstractOrderEntry item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LEADTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.leadtime</code> attribute. 
	 * @param value the leadtime - Leadtime
	 */
	public void setLeadtime(final AbstractOrderEntry item, final Integer value)
	{
		setLeadtime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.leadtime</code> attribute. 
	 * @param value the leadtime - Leadtime
	 */
	public void setLeadtime(final SessionContext ctx, final AbstractOrderEntry item, final int value)
	{
		setLeadtime( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.leadtime</code> attribute. 
	 * @param value the leadtime - Leadtime
	 */
	public void setLeadtime(final AbstractOrderEntry item, final int value)
	{
		setLeadtime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.legalEmbargo</code> attribute.
	 * @return the legalEmbargo - Legal Embargo
	 */
	public String getLegalEmbargo(final SessionContext ctx, final User item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.LEGALEMBARGO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.legalEmbargo</code> attribute.
	 * @return the legalEmbargo - Legal Embargo
	 */
	public String getLegalEmbargo(final User item)
	{
		return getLegalEmbargo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.legalEmbargo</code> attribute. 
	 * @param value the legalEmbargo - Legal Embargo
	 */
	public void setLegalEmbargo(final SessionContext ctx, final User item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.LEGALEMBARGO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.legalEmbargo</code> attribute. 
	 * @param value the legalEmbargo - Legal Embargo
	 */
	public void setLegalEmbargo(final User item, final String value)
	{
		setLegalEmbargo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.limit</code> attribute.
	 * @return the limit - Value Limiter
	 */
	public String getLimit(final SessionContext ctx, final SAPSalesOrganization item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.LIMIT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.limit</code> attribute.
	 * @return the limit - Value Limiter
	 */
	public String getLimit(final SAPSalesOrganization item)
	{
		return getLimit( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.limit</code> attribute. 
	 * @param value the limit - Value Limiter
	 */
	public void setLimit(final SessionContext ctx, final SAPSalesOrganization item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.LIMIT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.limit</code> attribute. 
	 * @param value the limit - Value Limiter
	 */
	public void setLimit(final SAPSalesOrganization item, final String value)
	{
		setLimit( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.lineNotes</code> attribute.
	 * @return the lineNotes
	 */
	public String getLineNotes(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LINENOTES);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.lineNotes</code> attribute.
	 * @return the lineNotes
	 */
	public String getLineNotes(final AbstractOrderEntry item)
	{
		return getLineNotes( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.lineNotes</code> attribute. 
	 * @param value the lineNotes
	 */
	public void setLineNotes(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LINENOTES,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.lineNotes</code> attribute. 
	 * @param value the lineNotes
	 */
	public void setLineNotes(final AbstractOrderEntry item, final String value)
	{
		setLineNotes( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.listPrice</code> attribute.
	 * @return the listPrice
	 */
	public Double getListPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LISTPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.listPrice</code> attribute.
	 * @return the listPrice
	 */
	public Double getListPrice(final AbstractOrderEntry item)
	{
		return getListPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.listPrice</code> attribute. 
	 * @return the listPrice
	 */
	public double getListPriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getListPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.listPrice</code> attribute. 
	 * @return the listPrice
	 */
	public double getListPriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getListPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.listPrice</code> attribute. 
	 * @param value the listPrice
	 */
	public void setListPrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LISTPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.listPrice</code> attribute. 
	 * @param value the listPrice
	 */
	public void setListPrice(final AbstractOrderEntry item, final Double value)
	{
		setListPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.listPrice</code> attribute. 
	 * @param value the listPrice
	 */
	public void setListPrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setListPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.listPrice</code> attribute. 
	 * @param value the listPrice
	 */
	public void setListPrice(final AbstractOrderEntry item, final double value)
	{
		setListPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.logoffUrl</code> attribute.
	 * @return the logoffUrl - SSO sign off URL
	 */
	public String getLogoffUrl(final SessionContext ctx, final OpenIDClientDetails item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.LOGOFFURL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.logoffUrl</code> attribute.
	 * @return the logoffUrl - SSO sign off URL
	 */
	public String getLogoffUrl(final OpenIDClientDetails item)
	{
		return getLogoffUrl( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.logoffUrl</code> attribute. 
	 * @param value the logoffUrl - SSO sign off URL
	 */
	public void setLogoffUrl(final SessionContext ctx, final OpenIDClientDetails item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.LOGOFFURL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.logoffUrl</code> attribute. 
	 * @param value the logoffUrl - SSO sign off URL
	 */
	public void setLogoffUrl(final OpenIDClientDetails item, final String value)
	{
		setLogoffUrl( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute.
	 * @return the longConfigEntry
	 */
	public Boolean isLongConfigEntry(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LONGCONFIGENTRY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute.
	 * @return the longConfigEntry
	 */
	public Boolean isLongConfigEntry(final AbstractOrderEntry item)
	{
		return isLongConfigEntry( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute. 
	 * @return the longConfigEntry
	 */
	public boolean isLongConfigEntryAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isLongConfigEntry( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute. 
	 * @return the longConfigEntry
	 */
	public boolean isLongConfigEntryAsPrimitive(final AbstractOrderEntry item)
	{
		return isLongConfigEntryAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute. 
	 * @param value the longConfigEntry
	 */
	public void setLongConfigEntry(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.LONGCONFIGENTRY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute. 
	 * @param value the longConfigEntry
	 */
	public void setLongConfigEntry(final AbstractOrderEntry item, final Boolean value)
	{
		setLongConfigEntry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute. 
	 * @param value the longConfigEntry
	 */
	public void setLongConfigEntry(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setLongConfigEntry( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.longConfigEntry</code> attribute. 
	 * @param value the longConfigEntry
	 */
	public void setLongConfigEntry(final AbstractOrderEntry item, final boolean value)
	{
		setLongConfigEntry( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.minOrderValue</code> attribute.
	 * @return the minOrderValue - minimum order value
	 */
	public String getMinOrderValue(final SessionContext ctx, final SAPSalesOrganization item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.MINORDERVALUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.minOrderValue</code> attribute.
	 * @return the minOrderValue - minimum order value
	 */
	public String getMinOrderValue(final SAPSalesOrganization item)
	{
		return getMinOrderValue( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.minOrderValue</code> attribute. 
	 * @param value the minOrderValue - minimum order value
	 */
	public void setMinOrderValue(final SessionContext ctx, final SAPSalesOrganization item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPSalesOrganization.MINORDERVALUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.minOrderValue</code> attribute. 
	 * @param value the minOrderValue - minimum order value
	 */
	public void setMinOrderValue(final SAPSalesOrganization item, final String value)
	{
		setMinOrderValue( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.netPrice</code> attribute.
	 * @return the netPrice
	 */
	public Double getNetPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.NETPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.netPrice</code> attribute.
	 * @return the netPrice
	 */
	public Double getNetPrice(final AbstractOrderEntry item)
	{
		return getNetPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.netPrice</code> attribute. 
	 * @return the netPrice
	 */
	public double getNetPriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getNetPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.netPrice</code> attribute. 
	 * @return the netPrice
	 */
	public double getNetPriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getNetPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.netPrice</code> attribute. 
	 * @param value the netPrice
	 */
	public void setNetPrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.NETPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.netPrice</code> attribute. 
	 * @param value the netPrice
	 */
	public void setNetPrice(final AbstractOrderEntry item, final Double value)
	{
		setNetPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.netPrice</code> attribute. 
	 * @param value the netPrice
	 */
	public void setNetPrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setNetPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.netPrice</code> attribute. 
	 * @param value the netPrice
	 */
	public void setNetPrice(final AbstractOrderEntry item, final double value)
	{
		setNetPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.newAccessibleCategories</code> attribute.
	 * @return the newAccessibleCategories - catalog categories which are accessible for this principal
	 */
	public Collection<Category> getNewAccessibleCategories(final SessionContext ctx, final Principal item)
	{
		final List<Category> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			"Category",
			null,
			Utilities.getRelationOrderingOverride(CATEGORY2NEWPRINCIPALRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.newAccessibleCategories</code> attribute.
	 * @return the newAccessibleCategories - catalog categories which are accessible for this principal
	 */
	public Collection<Category> getNewAccessibleCategories(final Principal item)
	{
		return getNewAccessibleCategories( getSession().getSessionContext(), item );
	}
	
	public long getNewAccessibleCategoriesCount(final SessionContext ctx, final Principal item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			"Category",
			null
		);
	}
	
	public long getNewAccessibleCategoriesCount(final Principal item)
	{
		return getNewAccessibleCategoriesCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.newAllowedPrincipals</code> attribute.
	 * @return the newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public List<Principal> getNewAllowedPrincipals(final SessionContext ctx, final Category item)
	{
		final List<Principal> items = item.getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			"Principal",
			null,
			Utilities.getRelationOrderingOverride(CATEGORY2NEWPRINCIPALRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.newAllowedPrincipals</code> attribute.
	 * @return the newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public List<Principal> getNewAllowedPrincipals(final Category item)
	{
		return getNewAllowedPrincipals( getSession().getSessionContext(), item );
	}
	
	public long getNewAllowedPrincipalsCount(final SessionContext ctx, final Category item)
	{
		return item.getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			"Principal",
			null
		);
	}
	
	public long getNewAllowedPrincipalsCount(final Category item)
	{
		return getNewAllowedPrincipalsCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.newAllowedPrincipals</code> attribute. 
	 * @param value the newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public void setNewAllowedPrincipals(final SessionContext ctx, final Category item, final List<Principal> value)
	{
		item.setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(CATEGORY2NEWPRINCIPALRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(CATEGORY2NEWPRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.newAllowedPrincipals</code> attribute. 
	 * @param value the newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public void setNewAllowedPrincipals(final Category item, final List<Principal> value)
	{
		setNewAllowedPrincipals( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to newAllowedPrincipals. 
	 * @param value the item to add to newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public void addToNewAllowedPrincipals(final SessionContext ctx, final Category item, final Principal value)
	{
		item.addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(CATEGORY2NEWPRINCIPALRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(CATEGORY2NEWPRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to newAllowedPrincipals. 
	 * @param value the item to add to newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public void addToNewAllowedPrincipals(final Category item, final Principal value)
	{
		addToNewAllowedPrincipals( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from newAllowedPrincipals. 
	 * @param value the item to remove from newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public void removeFromNewAllowedPrincipals(final SessionContext ctx, final Category item, final Principal value)
	{
		item.removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.CATEGORY2NEWPRINCIPALRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(CATEGORY2NEWPRINCIPALRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(CATEGORY2NEWPRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from newAllowedPrincipals. 
	 * @param value the item to remove from newAllowedPrincipals - Principals which are allowed to access this catalog category
	 */
	public void removeFromNewAllowedPrincipals(final Category item, final Principal value)
	{
		removeFromNewAllowedPrincipals( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.noRdd</code> attribute.
	 * @return the noRdd
	 */
	public String getNoRdd(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.NORDD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.noRdd</code> attribute.
	 * @return the noRdd
	 */
	public String getNoRdd(final SAPCpiOutboundOrder item)
	{
		return getNoRdd( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.noRdd</code> attribute. 
	 * @param value the noRdd
	 */
	public void setNoRdd(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.NORDD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.noRdd</code> attribute. 
	 * @param value the noRdd
	 */
	public void setNoRdd(final SAPCpiOutboundOrder item, final String value)
	{
		setNoRdd( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.note</code> attribute.
	 * @return the note
	 */
	public String getNote(final SessionContext ctx, final AbstractOrderEntry item)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedAbstractOrderEntry.getNote requires a session language", 0 );
		}
		return (String)item.getLocalizedProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.NOTE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.note</code> attribute.
	 * @return the note
	 */
	public String getNote(final AbstractOrderEntry item)
	{
		return getNote( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.note</code> attribute. 
	 * @return the localized note
	 */
	public Map<Language,String> getAllNote(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Map<Language,String>)item.getAllLocalizedProperties(ctx,BhgeCoreConstants.Attributes.AbstractOrderEntry.NOTE,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.note</code> attribute. 
	 * @return the localized note
	 */
	public Map<Language,String> getAllNote(final AbstractOrderEntry item)
	{
		return getAllNote( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.note</code> attribute. 
	 * @param value the note
	 */
	public void setNote(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedAbstractOrderEntry.setNote requires a session language", 0 );
		}
		item.setLocalizedProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.NOTE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.note</code> attribute. 
	 * @param value the note
	 */
	public void setNote(final AbstractOrderEntry item, final String value)
	{
		setNote( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.note</code> attribute. 
	 * @param value the note
	 */
	public void setAllNote(final SessionContext ctx, final AbstractOrderEntry item, final Map<Language,String> value)
	{
		item.setAllLocalizedProperties(ctx,BhgeCoreConstants.Attributes.AbstractOrderEntry.NOTE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.note</code> attribute. 
	 * @param value the note
	 */
	public void setAllNote(final AbstractOrderEntry item, final Map<Language,String> value)
	{
		setAllNote( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.note</code> attribute.
	 * @return the note
	 */
	public String getNote(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.NOTE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.note</code> attribute.
	 * @return the note
	 */
	public String getNote(final SAPCpiOutboundOrderItem item)
	{
		return getNote( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.note</code> attribute. 
	 * @param value the note
	 */
	public void setNote(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.NOTE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.note</code> attribute. 
	 * @param value the note
	 */
	public void setNote(final SAPCpiOutboundOrderItem item, final String value)
	{
		setNote( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.nuclearFlag</code> attribute.
	 * @return the nuclearFlag
	 */
	public String getNuclearFlag(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.NUCLEARFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.nuclearFlag</code> attribute.
	 * @return the nuclearFlag
	 */
	public String getNuclearFlag(final SAPCpiOutboundOrder item)
	{
		return getNuclearFlag( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.nuclearFlag</code> attribute. 
	 * @param value the nuclearFlag
	 */
	public void setNuclearFlag(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.NUCLEARFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.nuclearFlag</code> attribute. 
	 * @param value the nuclearFlag
	 */
	public void setNuclearFlag(final SAPCpiOutboundOrder item, final String value)
	{
		setNuclearFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.nuclearOpptyFlag</code> attribute.
	 * @return the nuclearOpptyFlag
	 */
	public String getNuclearOpptyFlag(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.NUCLEAROPPTYFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.nuclearOpptyFlag</code> attribute.
	 * @return the nuclearOpptyFlag
	 */
	public String getNuclearOpptyFlag(final SAPCpiOutboundOrder item)
	{
		return getNuclearOpptyFlag( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.nuclearOpptyFlag</code> attribute. 
	 * @param value the nuclearOpptyFlag
	 */
	public void setNuclearOpptyFlag(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.NUCLEAROPPTYFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.nuclearOpptyFlag</code> attribute. 
	 * @param value the nuclearOpptyFlag
	 */
	public void setNuclearOpptyFlag(final SAPCpiOutboundOrder item, final String value)
	{
		setNuclearOpptyFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.offeringsListString</code> attribute.
	 * @return the offeringsListString
	 */
	public String getOfferingsListString(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.OFFERINGSLISTSTRING);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.offeringsListString</code> attribute.
	 * @return the offeringsListString
	 */
	public String getOfferingsListString(final AbstractOrderEntry item)
	{
		return getOfferingsListString( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.offeringsListString</code> attribute. 
	 * @param value the offeringsListString
	 */
	public void setOfferingsListString(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.OFFERINGSLISTSTRING,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.offeringsListString</code> attribute. 
	 * @param value the offeringsListString
	 */
	public void setOfferingsListString(final AbstractOrderEntry item, final String value)
	{
		setOfferingsListString( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderConfirmationEMail</code> attribute.
	 * @return the orderConfirmationEMail
	 */
	public String getOrderConfirmationEMail(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERCONFIRMATIONEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderConfirmationEMail</code> attribute.
	 * @return the orderConfirmationEMail
	 */
	public String getOrderConfirmationEMail(final AbstractOrder item)
	{
		return getOrderConfirmationEMail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderConfirmationEMail</code> attribute. 
	 * @param value the orderConfirmationEMail
	 */
	public void setOrderConfirmationEMail(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERCONFIRMATIONEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderConfirmationEMail</code> attribute. 
	 * @param value the orderConfirmationEMail
	 */
	public void setOrderConfirmationEMail(final AbstractOrder item, final String value)
	{
		setOrderConfirmationEMail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.OrderConfirmationName</code> attribute.
	 * @return the OrderConfirmationName
	 */
	public String getOrderConfirmationName(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERCONFIRMATIONNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.OrderConfirmationName</code> attribute.
	 * @return the OrderConfirmationName
	 */
	public String getOrderConfirmationName(final AbstractOrder item)
	{
		return getOrderConfirmationName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.OrderConfirmationName</code> attribute. 
	 * @param value the OrderConfirmationName
	 */
	public void setOrderConfirmationName(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERCONFIRMATIONNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.OrderConfirmationName</code> attribute. 
	 * @param value the OrderConfirmationName
	 */
	public void setOrderConfirmationName(final AbstractOrder item, final String value)
	{
		setOrderConfirmationName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.OrderConfirmationNum</code> attribute.
	 * @return the OrderConfirmationNum
	 */
	public String getOrderConfirmationNum(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERCONFIRMATIONNUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.OrderConfirmationNum</code> attribute.
	 * @return the OrderConfirmationNum
	 */
	public String getOrderConfirmationNum(final AbstractOrder item)
	{
		return getOrderConfirmationNum( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.OrderConfirmationNum</code> attribute. 
	 * @param value the OrderConfirmationNum
	 */
	public void setOrderConfirmationNum(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERCONFIRMATIONNUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.OrderConfirmationNum</code> attribute. 
	 * @param value the OrderConfirmationNum
	 */
	public void setOrderConfirmationNum(final AbstractOrder item, final String value)
	{
		setOrderConfirmationNum( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderPreference</code> attribute.
	 * @return the orderPreference - Demo / Standard order preference
	 */
	public Boolean isOrderPreference(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERPREFERENCE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderPreference</code> attribute.
	 * @return the orderPreference - Demo / Standard order preference
	 */
	public Boolean isOrderPreference(final AbstractOrder item)
	{
		return isOrderPreference( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderPreference</code> attribute. 
	 * @return the orderPreference - Demo / Standard order preference
	 */
	public boolean isOrderPreferenceAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isOrderPreference( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderPreference</code> attribute. 
	 * @return the orderPreference - Demo / Standard order preference
	 */
	public boolean isOrderPreferenceAsPrimitive(final AbstractOrder item)
	{
		return isOrderPreferenceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderPreference</code> attribute. 
	 * @param value the orderPreference - Demo / Standard order preference
	 */
	public void setOrderPreference(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERPREFERENCE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderPreference</code> attribute. 
	 * @param value the orderPreference - Demo / Standard order preference
	 */
	public void setOrderPreference(final AbstractOrder item, final Boolean value)
	{
		setOrderPreference( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderPreference</code> attribute. 
	 * @param value the orderPreference - Demo / Standard order preference
	 */
	public void setOrderPreference(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setOrderPreference( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderPreference</code> attribute. 
	 * @param value the orderPreference - Demo / Standard order preference
	 */
	public void setOrderPreference(final AbstractOrder item, final boolean value)
	{
		setOrderPreference( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderReferenceId</code> attribute.
	 * @return the orderReferenceId
	 */
	public String getOrderReferenceId(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERREFERENCEID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.orderReferenceId</code> attribute.
	 * @return the orderReferenceId
	 */
	public String getOrderReferenceId(final AbstractOrder item)
	{
		return getOrderReferenceId( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderReferenceId</code> attribute. 
	 * @param value the orderReferenceId
	 */
	public void setOrderReferenceId(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.ORDERREFERENCEID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.orderReferenceId</code> attribute. 
	 * @param value the orderReferenceId
	 */
	public void setOrderReferenceId(final AbstractOrder item, final String value)
	{
		setOrderReferenceId( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.otherDetails</code> attribute.
	 * @return the otherDetails
	 */
	public String getOtherDetails(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.OTHERDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.otherDetails</code> attribute.
	 * @return the otherDetails
	 */
	public String getOtherDetails(final AbstractOrderEntry item)
	{
		return getOtherDetails( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.otherDetails</code> attribute. 
	 * @param value the otherDetails
	 */
	public void setOtherDetails(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.OTHERDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.otherDetails</code> attribute. 
	 * @param value the otherDetails
	 */
	public void setOtherDetails(final AbstractOrderEntry item, final String value)
	{
		setOtherDetails( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute.
	 * @return the parentEntryNumber - Parent Entry Identifier
	 */
	public Integer getParentEntryNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PARENTENTRYNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute.
	 * @return the parentEntryNumber - Parent Entry Identifier
	 */
	public Integer getParentEntryNumber(final AbstractOrderEntry item)
	{
		return getParentEntryNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute. 
	 * @return the parentEntryNumber - Parent Entry Identifier
	 */
	public int getParentEntryNumberAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Integer value = getParentEntryNumber( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute. 
	 * @return the parentEntryNumber - Parent Entry Identifier
	 */
	public int getParentEntryNumberAsPrimitive(final AbstractOrderEntry item)
	{
		return getParentEntryNumberAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute. 
	 * @param value the parentEntryNumber - Parent Entry Identifier
	 */
	public void setParentEntryNumber(final SessionContext ctx, final AbstractOrderEntry item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PARENTENTRYNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute. 
	 * @param value the parentEntryNumber - Parent Entry Identifier
	 */
	public void setParentEntryNumber(final AbstractOrderEntry item, final Integer value)
	{
		setParentEntryNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute. 
	 * @param value the parentEntryNumber - Parent Entry Identifier
	 */
	public void setParentEntryNumber(final SessionContext ctx, final AbstractOrderEntry item, final int value)
	{
		setParentEntryNumber( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.parentEntryNumber</code> attribute. 
	 * @param value the parentEntryNumber - Parent Entry Identifier
	 */
	public void setParentEntryNumber(final AbstractOrderEntry item, final int value)
	{
		setParentEntryNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.partialDelivery</code> attribute.
	 * @return the partialDelivery
	 */
	public String getPartialDelivery(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.PARTIALDELIVERY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.partialDelivery</code> attribute.
	 * @return the partialDelivery
	 */
	public String getPartialDelivery(final B2BUnit item)
	{
		return getPartialDelivery( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.partialDelivery</code> attribute. 
	 * @param value the partialDelivery
	 */
	public void setPartialDelivery(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.PARTIALDELIVERY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.partialDelivery</code> attribute. 
	 * @param value the partialDelivery
	 */
	public void setPartialDelivery(final B2BUnit item, final String value)
	{
		setPartialDelivery( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.partNumber</code> attribute.
	 * @return the partNumber - Part Number
	 */
	public String getPartNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.partNumber</code> attribute.
	 * @return the partNumber - Part Number
	 */
	public String getPartNumber(final AbstractOrderEntry item)
	{
		return getPartNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.partNumber</code> attribute. 
	 * @param value the partNumber - Part Number
	 */
	public void setPartNumber(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.partNumber</code> attribute. 
	 * @param value the partNumber - Part Number
	 */
	public void setPartNumber(final AbstractOrderEntry item, final String value)
	{
		setPartNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.payerAddress</code> attribute.
	 * @return the payerAddress
	 */
	public Address getPayerAddress(final SessionContext ctx, final AbstractOrder item)
	{
		return (Address)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PAYERADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.payerAddress</code> attribute.
	 * @return the payerAddress
	 */
	public Address getPayerAddress(final AbstractOrder item)
	{
		return getPayerAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.payerAddress</code> attribute. 
	 * @param value the payerAddress
	 */
	public void setPayerAddress(final SessionContext ctx, final AbstractOrder item, final Address value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PAYERADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.payerAddress</code> attribute. 
	 * @param value the payerAddress
	 */
	public void setPayerAddress(final AbstractOrder item, final Address value)
	{
		setPayerAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.paymentTerms</code> attribute.
	 * @return the paymentTerms
	 */
	public String getPaymentTerms(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.PAYMENTTERMS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.paymentTerms</code> attribute.
	 * @return the paymentTerms
	 */
	public String getPaymentTerms(final B2BUnit item)
	{
		return getPaymentTerms( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.paymentTerms</code> attribute. 
	 * @param value the paymentTerms
	 */
	public void setPaymentTerms(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.PAYMENTTERMS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.paymentTerms</code> attribute. 
	 * @param value the paymentTerms
	 */
	public void setPaymentTerms(final B2BUnit item, final String value)
	{
		setPaymentTerms( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.paymentTerms</code> attribute.
	 * @return the paymentTerms
	 */
	public String getPaymentTerms(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.PAYMENTTERMS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.paymentTerms</code> attribute.
	 * @return the paymentTerms
	 */
	public String getPaymentTerms(final SAPCpiOutboundOrderItem item)
	{
		return getPaymentTerms( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.paymentTerms</code> attribute. 
	 * @param value the paymentTerms
	 */
	public void setPaymentTerms(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.PAYMENTTERMS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.paymentTerms</code> attribute. 
	 * @param value the paymentTerms
	 */
	public void setPaymentTerms(final SAPCpiOutboundOrderItem item, final String value)
	{
		setPaymentTerms( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.paymentTrms</code> attribute.
	 * @return the paymentTrms
	 */
	public Paymentterm getPaymentTrms(final SessionContext ctx, final B2BUnit item)
	{
		return (Paymentterm)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.PAYMENTTRMS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.paymentTrms</code> attribute.
	 * @return the paymentTrms
	 */
	public Paymentterm getPaymentTrms(final B2BUnit item)
	{
		return getPaymentTrms( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.paymentTrms</code> attribute. 
	 * @param value the paymentTrms
	 */
	public void setPaymentTrms(final SessionContext ctx, final B2BUnit item, final Paymentterm value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.PAYMENTTRMS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.paymentTrms</code> attribute. 
	 * @param value the paymentTrms
	 */
	public void setPaymentTrms(final B2BUnit item, final Paymentterm value)
	{
		setPaymentTrms( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.planningSite</code> attribute.
	 * @return the planningSite
	 */
	public String getPlanningSite(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PLANNINGSITE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.planningSite</code> attribute.
	 * @return the planningSite
	 */
	public String getPlanningSite(final AbstractOrderEntry item)
	{
		return getPlanningSite( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.planningSite</code> attribute. 
	 * @param value the planningSite
	 */
	public void setPlanningSite(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PLANNINGSITE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.planningSite</code> attribute. 
	 * @param value the planningSite
	 */
	public void setPlanningSite(final AbstractOrderEntry item, final String value)
	{
		setPlanningSite( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.plant</code> attribute.
	 * @return the plant - Default Plant for the item
	 */
	public String getPlant(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PLANT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.plant</code> attribute.
	 * @return the plant - Default Plant for the item
	 */
	public String getPlant(final AbstractOrderEntry item)
	{
		return getPlant( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.plant</code> attribute. 
	 * @param value the plant - Default Plant for the item
	 */
	public void setPlant(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PLANT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.plant</code> attribute. 
	 * @param value the plant - Default Plant for the item
	 */
	public void setPlant(final AbstractOrderEntry item, final String value)
	{
		setPlant( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Warehouse.plantLocation</code> attribute.
	 * @return the plantLocation
	 */
	public Address getPlantLocation(final SessionContext ctx, final Warehouse item)
	{
		return (Address)item.getProperty( ctx, BhgeCoreConstants.Attributes.Warehouse.PLANTLOCATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Warehouse.plantLocation</code> attribute.
	 * @return the plantLocation
	 */
	public Address getPlantLocation(final Warehouse item)
	{
		return getPlantLocation( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Warehouse.plantLocation</code> attribute. 
	 * @param value the plantLocation
	 */
	public void setPlantLocation(final SessionContext ctx, final Warehouse item, final Address value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Warehouse.PLANTLOCATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Warehouse.plantLocation</code> attribute. 
	 * @param value the plantLocation
	 */
	public void setPlantLocation(final Warehouse item, final Address value)
	{
		setPlantLocation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.plantName</code> attribute.
	 * @return the plantName - Default Plant Name
	 */
	public String getPlantName(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PLANTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.plantName</code> attribute.
	 * @return the plantName - Default Plant Name
	 */
	public String getPlantName(final AbstractOrderEntry item)
	{
		return getPlantName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.plantName</code> attribute. 
	 * @param value the plantName - Default Plant Name
	 */
	public void setPlantName(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PLANTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.plantName</code> attribute. 
	 * @param value the plantName - Default Plant Name
	 */
	public void setPlantName(final AbstractOrderEntry item, final String value)
	{
		setPlantName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.planToExport</code> attribute.
	 * @return the planToExport
	 */
	public EnumerationValue getPlanToExport(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PLANTOEXPORT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.planToExport</code> attribute.
	 * @return the planToExport
	 */
	public EnumerationValue getPlanToExport(final AbstractOrder item)
	{
		return getPlanToExport( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.planToExport</code> attribute. 
	 * @param value the planToExport
	 */
	public void setPlanToExport(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PLANTOEXPORT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.planToExport</code> attribute. 
	 * @param value the planToExport
	 */
	public void setPlanToExport(final AbstractOrder item, final EnumerationValue value)
	{
		setPlanToExport( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.poDetails</code> attribute.
	 * @return the poDetails
	 */
	public String getPoDetails(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PODETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.poDetails</code> attribute.
	 * @return the poDetails
	 */
	public String getPoDetails(final AbstractOrder item)
	{
		return getPoDetails( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.poDetails</code> attribute. 
	 * @param value the poDetails
	 */
	public void setPoDetails(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PODETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.poDetails</code> attribute. 
	 * @param value the poDetails
	 */
	public void setPoDetails(final AbstractOrder item, final String value)
	{
		setPoDetails( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.poDocs</code> attribute.
	 * @return the poDocs - The po attachments
	 */
	public Collection<Media> getPoDocs(final SessionContext ctx, final AbstractOrder item)
	{
		Collection<Media> coll = (Collection<Media>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PODOCS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.poDocs</code> attribute.
	 * @return the poDocs - The po attachments
	 */
	public Collection<Media> getPoDocs(final AbstractOrder item)
	{
		return getPoDocs( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.poDocs</code> attribute. 
	 * @param value the poDocs - The po attachments
	 */
	public void setPoDocs(final SessionContext ctx, final AbstractOrder item, final Collection<Media> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PODOCS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.poDocs</code> attribute. 
	 * @param value the poDocs - The po attachments
	 */
	public void setPoDocs(final AbstractOrder item, final Collection<Media> value)
	{
		setPoDocs( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.ponum</code> attribute.
	 * @return the ponum
	 */
	public String getPonum(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PONUM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.ponum</code> attribute.
	 * @return the ponum
	 */
	public String getPonum(final AbstractOrder item)
	{
		return getPonum( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.ponum</code> attribute. 
	 * @param value the ponum
	 */
	public void setPonum(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PONUM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.ponum</code> attribute. 
	 * @param value the ponum
	 */
	public void setPonum(final AbstractOrder item, final String value)
	{
		setPonum( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.postalCode</code> attribute.
	 * @return the postalCode
	 */
	public String getPostalCode(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.POSTALCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.postalCode</code> attribute.
	 * @return the postalCode
	 */
	public String getPostalCode(final Quote item)
	{
		return getPostalCode( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.postalCode</code> attribute. 
	 * @param value the postalCode
	 */
	public void setPostalCode(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.POSTALCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.postalCode</code> attribute. 
	 * @param value the postalCode
	 */
	public void setPostalCode(final Quote item, final String value)
	{
		setPostalCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.priceConditionType</code> attribute.
	 * @return the priceConditionType - String from SAP containing pricing type.
	 */
	public String getPriceConditionType(final SessionContext ctx, final PriceRow item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.PriceRow.PRICECONDITIONTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.priceConditionType</code> attribute.
	 * @return the priceConditionType - String from SAP containing pricing type.
	 */
	public String getPriceConditionType(final PriceRow item)
	{
		return getPriceConditionType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.priceConditionType</code> attribute. 
	 * @param value the priceConditionType - String from SAP containing pricing type.
	 */
	public void setPriceConditionType(final SessionContext ctx, final PriceRow item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PriceRow.PRICECONDITIONTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.priceConditionType</code> attribute. 
	 * @param value the priceConditionType - String from SAP containing pricing type.
	 */
	public void setPriceConditionType(final PriceRow item, final String value)
	{
		setPriceConditionType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.priceCriteria</code> attribute.
	 * @return the priceCriteria - String from SAP containing country, region, subRegion.
	 */
	public String getPriceCriteria(final SessionContext ctx, final PriceRow item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.PriceRow.PRICECRITERIA);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.priceCriteria</code> attribute.
	 * @return the priceCriteria - String from SAP containing country, region, subRegion.
	 */
	public String getPriceCriteria(final PriceRow item)
	{
		return getPriceCriteria( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.priceCriteria</code> attribute. 
	 * @param value the priceCriteria - String from SAP containing country, region, subRegion.
	 */
	public void setPriceCriteria(final SessionContext ctx, final PriceRow item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PriceRow.PRICECRITERIA,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.priceCriteria</code> attribute. 
	 * @param value the priceCriteria - String from SAP containing country, region, subRegion.
	 */
	public void setPriceCriteria(final PriceRow item, final String value)
	{
		setPriceCriteria( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.pricingInfo</code> attribute.
	 * @return the pricingInfo
	 */
	public String getPricingInfo(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PRICINGINFO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.pricingInfo</code> attribute.
	 * @return the pricingInfo
	 */
	public String getPricingInfo(final AbstractOrderEntry item)
	{
		return getPricingInfo( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.pricingInfo</code> attribute. 
	 * @param value the pricingInfo
	 */
	public void setPricingInfo(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PRICINGINFO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.pricingInfo</code> attribute. 
	 * @param value the pricingInfo
	 */
	public void setPricingInfo(final AbstractOrderEntry item, final String value)
	{
		setPricingInfo( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.problemDescLong</code> attribute.
	 * @return the problemDescLong
	 */
	public String getProblemDescLong(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PROBLEMDESCLONG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.problemDescLong</code> attribute.
	 * @return the problemDescLong
	 */
	public String getProblemDescLong(final AbstractOrderEntry item)
	{
		return getProblemDescLong( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.problemDescLong</code> attribute. 
	 * @param value the problemDescLong
	 */
	public void setProblemDescLong(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PROBLEMDESCLONG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.problemDescLong</code> attribute. 
	 * @param value the problemDescLong
	 */
	public void setProblemDescLong(final AbstractOrderEntry item, final String value)
	{
		setProblemDescLong( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.problemDescription</code> attribute.
	 * @return the problemDescription
	 */
	public String getProblemDescription(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PROBLEMDESCRIPTION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.problemDescription</code> attribute.
	 * @return the problemDescription
	 */
	public String getProblemDescription(final AbstractOrderEntry item)
	{
		return getProblemDescription( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.problemDescription</code> attribute. 
	 * @param value the problemDescription
	 */
	public void setProblemDescription(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PROBLEMDESCRIPTION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.problemDescription</code> attribute. 
	 * @param value the problemDescription
	 */
	public void setProblemDescription(final AbstractOrderEntry item, final String value)
	{
		setProblemDescription( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>EmailAttachment.process</code> attribute.
	 * @return the process
	 */
	public BusinessProcess getProcess(final SessionContext ctx, final EmailAttachment item)
	{
		return (BusinessProcess)item.getProperty( ctx, BhgeCoreConstants.Attributes.EmailAttachment.PROCESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>EmailAttachment.process</code> attribute.
	 * @return the process
	 */
	public BusinessProcess getProcess(final EmailAttachment item)
	{
		return getProcess( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>EmailAttachment.process</code> attribute. 
	 * @param value the process
	 */
	public void setProcess(final SessionContext ctx, final EmailAttachment item, final BusinessProcess value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.EmailAttachment.PROCESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>EmailAttachment.process</code> attribute. 
	 * @param value the process
	 */
	public void setProcess(final EmailAttachment item, final BusinessProcess value)
	{
		setProcess( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.productDetails</code> attribute.
	 * @return the productDetails
	 */
	public String getProductDetails(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PRODUCTDETAILS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.productDetails</code> attribute.
	 * @return the productDetails
	 */
	public String getProductDetails(final AbstractOrderEntry item)
	{
		return getProductDetails( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.productDetails</code> attribute. 
	 * @param value the productDetails
	 */
	public void setProductDetails(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PRODUCTDETAILS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.productDetails</code> attribute. 
	 * @param value the productDetails
	 */
	public void setProductDetails(final AbstractOrderEntry item, final String value)
	{
		setProductDetails( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.productLine</code> attribute.
	 * @return the productLine - This attribute will hold the Product Line to which cart belongs to
	 */
	public String getProductLine(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PRODUCTLINE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.productLine</code> attribute.
	 * @return the productLine - This attribute will hold the Product Line to which cart belongs to
	 */
	public String getProductLine(final AbstractOrder item)
	{
		return getProductLine( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.productLine</code> attribute. 
	 * @param value the productLine - This attribute will hold the Product Line to which cart belongs to
	 */
	public void setProductLine(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PRODUCTLINE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.productLine</code> attribute. 
	 * @param value the productLine - This attribute will hold the Product Line to which cart belongs to
	 */
	public void setProductLine(final AbstractOrder item, final String value)
	{
		setProductLine( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute.
	 * @return the productPricingIssue
	 */
	public Boolean isProductPricingIssue(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PRODUCTPRICINGISSUE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute.
	 * @return the productPricingIssue
	 */
	public Boolean isProductPricingIssue(final AbstractOrderEntry item)
	{
		return isProductPricingIssue( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute. 
	 * @return the productPricingIssue
	 */
	public boolean isProductPricingIssueAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isProductPricingIssue( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute. 
	 * @return the productPricingIssue
	 */
	public boolean isProductPricingIssueAsPrimitive(final AbstractOrderEntry item)
	{
		return isProductPricingIssueAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute. 
	 * @param value the productPricingIssue
	 */
	public void setProductPricingIssue(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.PRODUCTPRICINGISSUE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute. 
	 * @param value the productPricingIssue
	 */
	public void setProductPricingIssue(final AbstractOrderEntry item, final Boolean value)
	{
		setProductPricingIssue( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute. 
	 * @param value the productPricingIssue
	 */
	public void setProductPricingIssue(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setProductPricingIssue( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.productPricingIssue</code> attribute. 
	 * @param value the productPricingIssue
	 */
	public void setProductPricingIssue(final AbstractOrderEntry item, final boolean value)
	{
		setProductPricingIssue( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ClassificationClass.productSpecification</code> attribute.
	 * @return the productSpecification - Product specification details - to be populated from SAP
	 */
	public String getProductSpecification(final SessionContext ctx, final ClassificationClass item)
	{
		if( ctx == null || ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedClassificationClass.getProductSpecification requires a session language", 0 );
		}
		return (String)item.getLocalizedProperty( ctx, BhgeCoreConstants.Attributes.ClassificationClass.PRODUCTSPECIFICATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ClassificationClass.productSpecification</code> attribute.
	 * @return the productSpecification - Product specification details - to be populated from SAP
	 */
	public String getProductSpecification(final ClassificationClass item)
	{
		return getProductSpecification( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ClassificationClass.productSpecification</code> attribute. 
	 * @return the localized productSpecification - Product specification details - to be populated from SAP
	 */
	public Map<Language,String> getAllProductSpecification(final SessionContext ctx, final ClassificationClass item)
	{
		return (Map<Language,String>)item.getAllLocalizedProperties(ctx,BhgeCoreConstants.Attributes.ClassificationClass.PRODUCTSPECIFICATION,C2LManager.getInstance().getAllLanguages());
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ClassificationClass.productSpecification</code> attribute. 
	 * @return the localized productSpecification - Product specification details - to be populated from SAP
	 */
	public Map<Language,String> getAllProductSpecification(final ClassificationClass item)
	{
		return getAllProductSpecification( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ClassificationClass.productSpecification</code> attribute. 
	 * @param value the productSpecification - Product specification details - to be populated from SAP
	 */
	public void setProductSpecification(final SessionContext ctx, final ClassificationClass item, final String value)
	{
		if ( ctx == null) 
		{
			throw new JaloInvalidParameterException( "ctx is null", 0 );
		}
		if( ctx.getLanguage() == null )
		{
			throw new JaloInvalidParameterException("GeneratedClassificationClass.setProductSpecification requires a session language", 0 );
		}
		item.setLocalizedProperty(ctx, BhgeCoreConstants.Attributes.ClassificationClass.PRODUCTSPECIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ClassificationClass.productSpecification</code> attribute. 
	 * @param value the productSpecification - Product specification details - to be populated from SAP
	 */
	public void setProductSpecification(final ClassificationClass item, final String value)
	{
		setProductSpecification( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ClassificationClass.productSpecification</code> attribute. 
	 * @param value the productSpecification - Product specification details - to be populated from SAP
	 */
	public void setAllProductSpecification(final SessionContext ctx, final ClassificationClass item, final Map<Language,String> value)
	{
		item.setAllLocalizedProperties(ctx,BhgeCoreConstants.Attributes.ClassificationClass.PRODUCTSPECIFICATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ClassificationClass.productSpecification</code> attribute. 
	 * @param value the productSpecification - Product specification details - to be populated from SAP
	 */
	public void setAllProductSpecification(final ClassificationClass item, final Map<Language,String> value)
	{
		setAllProductSpecification( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ClassificationClass.productType</code> attribute.
	 * @return the productType
	 */
	public GEEdgeProductLineMapping getProductType(final SessionContext ctx, final ClassificationClass item)
	{
		return (GEEdgeProductLineMapping)item.getProperty( ctx, BhgeCoreConstants.Attributes.ClassificationClass.PRODUCTTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>ClassificationClass.productType</code> attribute.
	 * @return the productType
	 */
	public GEEdgeProductLineMapping getProductType(final ClassificationClass item)
	{
		return getProductType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ClassificationClass.productType</code> attribute. 
	 * @param value the productType
	 */
	public void setProductType(final SessionContext ctx, final ClassificationClass item, final GEEdgeProductLineMapping value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.ClassificationClass.PRODUCTTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>ClassificationClass.productType</code> attribute. 
	 * @param value the productType
	 */
	public void setProductType(final ClassificationClass item, final GEEdgeProductLineMapping value)
	{
		setProductType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.PurchaseOrderUploadStatus</code> attribute.
	 * @return the PurchaseOrderUploadStatus
	 */
	public EnumerationValue getPurchaseOrderUploadStatus(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.PURCHASEORDERUPLOADSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.PurchaseOrderUploadStatus</code> attribute.
	 * @return the PurchaseOrderUploadStatus
	 */
	public EnumerationValue getPurchaseOrderUploadStatus(final AbstractOrder item)
	{
		return getPurchaseOrderUploadStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.PurchaseOrderUploadStatus</code> attribute. 
	 * @param value the PurchaseOrderUploadStatus
	 */
	public void setPurchaseOrderUploadStatus(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.PURCHASEORDERUPLOADSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.PurchaseOrderUploadStatus</code> attribute. 
	 * @param value the PurchaseOrderUploadStatus
	 */
	public void setPurchaseOrderUploadStatus(final AbstractOrder item, final EnumerationValue value)
	{
		setPurchaseOrderUploadStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.referenceNumber</code> attribute.
	 * @return the referenceNumber
	 */
	public String getReferenceNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.REFERENCENUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.referenceNumber</code> attribute.
	 * @return the referenceNumber
	 */
	public String getReferenceNumber(final AbstractOrderEntry item)
	{
		return getReferenceNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.referenceNumber</code> attribute. 
	 * @param value the referenceNumber
	 */
	public void setReferenceNumber(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.REFERENCENUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.referenceNumber</code> attribute. 
	 * @param value the referenceNumber
	 */
	public void setReferenceNumber(final AbstractOrderEntry item, final String value)
	{
		setReferenceNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.referenceNumber</code> attribute.
	 * @return the referenceNumber
	 */
	public String getReferenceNumber(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.REFERENCENUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.referenceNumber</code> attribute.
	 * @return the referenceNumber
	 */
	public String getReferenceNumber(final SAPCpiOutboundOrderItem item)
	{
		return getReferenceNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.referenceNumber</code> attribute. 
	 * @param value the referenceNumber
	 */
	public void setReferenceNumber(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.REFERENCENUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.referenceNumber</code> attribute. 
	 * @param value the referenceNumber
	 */
	public void setReferenceNumber(final SAPCpiOutboundOrderItem item, final String value)
	{
		setReferenceNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.region</code> attribute.
	 * @return the region - Region for Quote page
	 */
	public Region getRegion(final SessionContext ctx, final Quote item)
	{
		return (Region)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.REGION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.region</code> attribute.
	 * @return the region - Region for Quote page
	 */
	public Region getRegion(final Quote item)
	{
		return getRegion( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.region</code> attribute. 
	 * @param value the region - Region for Quote page
	 */
	public void setRegion(final SessionContext ctx, final Quote item, final Region value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.REGION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.region</code> attribute. 
	 * @param value the region - Region for Quote page
	 */
	public void setRegion(final Quote item, final Region value)
	{
		setRegion( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.regionCP</code> attribute.
	 * @return the regionCP - Property added for handling the custom price handling.
	 */
	public String getRegionCP(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.REGIONCP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.regionCP</code> attribute.
	 * @return the regionCP - Property added for handling the custom price handling.
	 */
	public String getRegionCP(final B2BUnit item)
	{
		return getRegionCP( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.regionCP</code> attribute. 
	 * @param value the regionCP - Property added for handling the custom price handling.
	 */
	public void setRegionCP(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.REGIONCP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.regionCP</code> attribute. 
	 * @param value the regionCP - Property added for handling the custom price handling.
	 */
	public void setRegionCP(final B2BUnit item, final String value)
	{
		setRegionCP( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.reqHeaderDeliveryDate</code> attribute.
	 * @return the reqHeaderDeliveryDate - The date for which to gather header level requested delivery date
	 */
	public Date getReqHeaderDeliveryDate(final SessionContext ctx, final AbstractOrder item)
	{
		return (Date)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.REQHEADERDELIVERYDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.reqHeaderDeliveryDate</code> attribute.
	 * @return the reqHeaderDeliveryDate - The date for which to gather header level requested delivery date
	 */
	public Date getReqHeaderDeliveryDate(final AbstractOrder item)
	{
		return getReqHeaderDeliveryDate( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.reqHeaderDeliveryDate</code> attribute. 
	 * @param value the reqHeaderDeliveryDate - The date for which to gather header level requested delivery date
	 */
	public void setReqHeaderDeliveryDate(final SessionContext ctx, final AbstractOrder item, final Date value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.REQHEADERDELIVERYDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.reqHeaderDeliveryDate</code> attribute. 
	 * @param value the reqHeaderDeliveryDate - The date for which to gather header level requested delivery date
	 */
	public void setReqHeaderDeliveryDate(final AbstractOrder item, final Date value)
	{
		setReqHeaderDeliveryDate( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.reqHeaderDeliveryDate</code> attribute.
	 * @return the reqHeaderDeliveryDate
	 */
	public String getReqHeaderDeliveryDate(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.REQHEADERDELIVERYDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.reqHeaderDeliveryDate</code> attribute.
	 * @return the reqHeaderDeliveryDate
	 */
	public String getReqHeaderDeliveryDate(final SAPCpiOutboundOrder item)
	{
		return getReqHeaderDeliveryDate( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.reqHeaderDeliveryDate</code> attribute. 
	 * @param value the reqHeaderDeliveryDate
	 */
	public void setReqHeaderDeliveryDate(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.REQHEADERDELIVERYDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.reqHeaderDeliveryDate</code> attribute. 
	 * @param value the reqHeaderDeliveryDate
	 */
	public void setReqHeaderDeliveryDate(final SAPCpiOutboundOrder item, final String value)
	{
		setReqHeaderDeliveryDate( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.reqHeaderDeliveryDateFilm</code> attribute.
	 * @return the reqHeaderDeliveryDateFilm - The date for which to gather header level requested delivery date
	 */
	public Date getReqHeaderDeliveryDateFilm(final SessionContext ctx, final AbstractOrder item)
	{
		return (Date)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.REQHEADERDELIVERYDATEFILM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.reqHeaderDeliveryDateFilm</code> attribute.
	 * @return the reqHeaderDeliveryDateFilm - The date for which to gather header level requested delivery date
	 */
	public Date getReqHeaderDeliveryDateFilm(final AbstractOrder item)
	{
		return getReqHeaderDeliveryDateFilm( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.reqHeaderDeliveryDateFilm</code> attribute. 
	 * @param value the reqHeaderDeliveryDateFilm - The date for which to gather header level requested delivery date
	 */
	public void setReqHeaderDeliveryDateFilm(final SessionContext ctx, final AbstractOrder item, final Date value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.REQHEADERDELIVERYDATEFILM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.reqHeaderDeliveryDateFilm</code> attribute. 
	 * @param value the reqHeaderDeliveryDateFilm - The date for which to gather header level requested delivery date
	 */
	public void setReqHeaderDeliveryDateFilm(final AbstractOrder item, final Date value)
	{
		setReqHeaderDeliveryDateFilm( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.reqLineDeliveryDate</code> attribute.
	 * @return the reqLineDeliveryDate
	 */
	public String getReqLineDeliveryDate(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.REQLINEDELIVERYDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.reqLineDeliveryDate</code> attribute.
	 * @return the reqLineDeliveryDate
	 */
	public String getReqLineDeliveryDate(final SAPCpiOutboundOrderItem item)
	{
		return getReqLineDeliveryDate( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.reqLineDeliveryDate</code> attribute. 
	 * @param value the reqLineDeliveryDate
	 */
	public void setReqLineDeliveryDate(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.REQLINEDELIVERYDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.reqLineDeliveryDate</code> attribute. 
	 * @param value the reqLineDeliveryDate
	 */
	public void setReqLineDeliveryDate(final SAPCpiOutboundOrderItem item, final String value)
	{
		setReqLineDeliveryDate( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.requestedDeliveryDate</code> attribute.
	 * @return the requestedDeliveryDate - The date for which to gather item level requested delivery date
	 */
	public Date getRequestedDeliveryDate(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Date)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.REQUESTEDDELIVERYDATE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.requestedDeliveryDate</code> attribute.
	 * @return the requestedDeliveryDate - The date for which to gather item level requested delivery date
	 */
	public Date getRequestedDeliveryDate(final AbstractOrderEntry item)
	{
		return getRequestedDeliveryDate( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.requestedDeliveryDate</code> attribute. 
	 * @param value the requestedDeliveryDate - The date for which to gather item level requested delivery date
	 */
	public void setRequestedDeliveryDate(final SessionContext ctx, final AbstractOrderEntry item, final Date value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.REQUESTEDDELIVERYDATE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.requestedDeliveryDate</code> attribute. 
	 * @param value the requestedDeliveryDate - The date for which to gather item level requested delivery date
	 */
	public void setRequestedDeliveryDate(final AbstractOrderEntry item, final Date value)
	{
		setRequestedDeliveryDate( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.responseType</code> attribute.
	 * @return the responseType - Response Type
	 */
	public String getResponseType(final SessionContext ctx, final OpenIDClientDetails item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.RESPONSETYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.responseType</code> attribute.
	 * @return the responseType - Response Type
	 */
	public String getResponseType(final OpenIDClientDetails item)
	{
		return getResponseType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.responseType</code> attribute. 
	 * @param value the responseType - Response Type
	 */
	public void setResponseType(final SessionContext ctx, final OpenIDClientDetails item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.RESPONSETYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.responseType</code> attribute. 
	 * @param value the responseType - Response Type
	 */
	public void setResponseType(final OpenIDClientDetails item, final String value)
	{
		setResponseType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.restrictedProducts</code> attribute.
	 * @return the restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public Set<GEEdgeProduct> getRestrictedProducts(final SessionContext ctx, final Principal item)
	{
		final List<GEEdgeProduct> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			"GEEdgeProduct",
			null,
			false,
			false
		);
		return new LinkedHashSet<GEEdgeProduct>(items);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.restrictedProducts</code> attribute.
	 * @return the restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public Set<GEEdgeProduct> getRestrictedProducts(final Principal item)
	{
		return getRestrictedProducts( getSession().getSessionContext(), item );
	}
	
	public long getRestrictedProductsCount(final SessionContext ctx, final Principal item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			"GEEdgeProduct",
			null
		);
	}
	
	public long getRestrictedProductsCount(final Principal item)
	{
		return getRestrictedProductsCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.restrictedProducts</code> attribute. 
	 * @param value the restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public void setRestrictedProducts(final SessionContext ctx, final Principal item, final Set<GEEdgeProduct> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.restrictedProducts</code> attribute. 
	 * @param value the restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public void setRestrictedProducts(final Principal item, final Set<GEEdgeProduct> value)
	{
		setRestrictedProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to restrictedProducts. 
	 * @param value the item to add to restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public void addToRestrictedProducts(final SessionContext ctx, final Principal item, final GEEdgeProduct value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to restrictedProducts. 
	 * @param value the item to add to restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public void addToRestrictedProducts(final Principal item, final GEEdgeProduct value)
	{
		addToRestrictedProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from restrictedProducts. 
	 * @param value the item to remove from restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public void removeFromRestrictedProducts(final SessionContext ctx, final Principal item, final GEEdgeProduct value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRODUCT2PRINCIPALRELATION,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(PRODUCT2PRINCIPALRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from restrictedProducts. 
	 * @param value the item to remove from restrictedProducts - catalog categories which are not accessible for this principal
	 */
	public void removeFromRestrictedProducts(final Principal item, final GEEdgeProduct value)
	{
		removeFromRestrictedProducts( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.returnPO</code> attribute.
	 * @return the returnPO
	 */
	public List<ReturnPO> getReturnPO(final SessionContext ctx, final AbstractOrder item)
	{
		List<ReturnPO> coll = (List<ReturnPO>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.RETURNPO);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.returnPO</code> attribute.
	 * @return the returnPO
	 */
	public List<ReturnPO> getReturnPO(final AbstractOrder item)
	{
		return getReturnPO( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.returnPO</code> attribute. 
	 * @param value the returnPO
	 */
	public void setReturnPO(final SessionContext ctx, final AbstractOrder item, final List<ReturnPO> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.RETURNPO,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.returnPO</code> attribute. 
	 * @param value the returnPO
	 */
	public void setReturnPO(final AbstractOrder item, final List<ReturnPO> value)
	{
		setReturnPO( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute.
	 * @return the returnToSiteCode
	 */
	public Integer getReturnToSiteCode(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.RETURNTOSITECODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute.
	 * @return the returnToSiteCode
	 */
	public Integer getReturnToSiteCode(final AbstractOrderEntry item)
	{
		return getReturnToSiteCode( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute. 
	 * @return the returnToSiteCode
	 */
	public int getReturnToSiteCodeAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Integer value = getReturnToSiteCode( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute. 
	 * @return the returnToSiteCode
	 */
	public int getReturnToSiteCodeAsPrimitive(final AbstractOrderEntry item)
	{
		return getReturnToSiteCodeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute. 
	 * @param value the returnToSiteCode
	 */
	public void setReturnToSiteCode(final SessionContext ctx, final AbstractOrderEntry item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.RETURNTOSITECODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute. 
	 * @param value the returnToSiteCode
	 */
	public void setReturnToSiteCode(final AbstractOrderEntry item, final Integer value)
	{
		setReturnToSiteCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute. 
	 * @param value the returnToSiteCode
	 */
	public void setReturnToSiteCode(final SessionContext ctx, final AbstractOrderEntry item, final int value)
	{
		setReturnToSiteCode( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.returnToSiteCode</code> attribute. 
	 * @param value the returnToSiteCode
	 */
	public void setReturnToSiteCode(final AbstractOrderEntry item, final int value)
	{
		setReturnToSiteCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.returnToSiteName</code> attribute.
	 * @return the returnToSiteName
	 */
	public String getReturnToSiteName(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.RETURNTOSITENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.returnToSiteName</code> attribute.
	 * @return the returnToSiteName
	 */
	public String getReturnToSiteName(final AbstractOrderEntry item)
	{
		return getReturnToSiteName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.returnToSiteName</code> attribute. 
	 * @param value the returnToSiteName
	 */
	public void setReturnToSiteName(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.RETURNTOSITENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.returnToSiteName</code> attribute. 
	 * @param value the returnToSiteName
	 */
	public void setReturnToSiteName(final AbstractOrderEntry item, final String value)
	{
		setReturnToSiteName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.risk</code> attribute.
	 * @return the risk - Risk Classification
	 */
	public Boolean isRisk(final SessionContext ctx, final Country item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Country.RISK);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.risk</code> attribute.
	 * @return the risk - Risk Classification
	 */
	public Boolean isRisk(final Country item)
	{
		return isRisk( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.risk</code> attribute. 
	 * @return the risk - Risk Classification
	 */
	public boolean isRiskAsPrimitive(final SessionContext ctx, final Country item)
	{
		Boolean value = isRisk( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.risk</code> attribute. 
	 * @return the risk - Risk Classification
	 */
	public boolean isRiskAsPrimitive(final Country item)
	{
		return isRiskAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.risk</code> attribute. 
	 * @param value the risk - Risk Classification
	 */
	public void setRisk(final SessionContext ctx, final Country item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Country.RISK,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.risk</code> attribute. 
	 * @param value the risk - Risk Classification
	 */
	public void setRisk(final Country item, final Boolean value)
	{
		setRisk( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.risk</code> attribute. 
	 * @param value the risk - Risk Classification
	 */
	public void setRisk(final SessionContext ctx, final Country item, final boolean value)
	{
		setRisk( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.risk</code> attribute. 
	 * @param value the risk - Risk Classification
	 */
	public void setRisk(final Country item, final boolean value)
	{
		setRisk( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.rmaAttachment</code> attribute.
	 * @return the rmaAttachment - The rma attachments
	 */
	public Collection<Media> getRmaAttachment(final SessionContext ctx, final AbstractOrder item)
	{
		Collection<Media> coll = (Collection<Media>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMAATTACHMENT);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.rmaAttachment</code> attribute.
	 * @return the rmaAttachment - The rma attachments
	 */
	public Collection<Media> getRmaAttachment(final AbstractOrder item)
	{
		return getRmaAttachment( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.rmaAttachment</code> attribute. 
	 * @param value the rmaAttachment - The rma attachments
	 */
	public void setRmaAttachment(final SessionContext ctx, final AbstractOrder item, final Collection<Media> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMAATTACHMENT,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.rmaAttachment</code> attribute. 
	 * @param value the rmaAttachment - The rma attachments
	 */
	public void setRmaAttachment(final AbstractOrder item, final Collection<Media> value)
	{
		setRmaAttachment( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.RMAEndUserAddress</code> attribute.
	 * @return the RMAEndUserAddress
	 */
	public Address getRMAEndUserAddress(final SessionContext ctx, final AbstractOrder item)
	{
		return (Address)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMAENDUSERADDRESS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.RMAEndUserAddress</code> attribute.
	 * @return the RMAEndUserAddress
	 */
	public Address getRMAEndUserAddress(final AbstractOrder item)
	{
		return getRMAEndUserAddress( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.RMAEndUserAddress</code> attribute. 
	 * @param value the RMAEndUserAddress
	 */
	public void setRMAEndUserAddress(final SessionContext ctx, final AbstractOrder item, final Address value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMAENDUSERADDRESS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.RMAEndUserAddress</code> attribute. 
	 * @param value the RMAEndUserAddress
	 */
	public void setRMAEndUserAddress(final AbstractOrder item, final Address value)
	{
		setRMAEndUserAddress( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute.
	 * @return the rmaFormPercentCompletion
	 */
	public Double getRmaFormPercentCompletion(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.RMAFORMPERCENTCOMPLETION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute.
	 * @return the rmaFormPercentCompletion
	 */
	public Double getRmaFormPercentCompletion(final AbstractOrderEntry item)
	{
		return getRmaFormPercentCompletion( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute. 
	 * @return the rmaFormPercentCompletion
	 */
	public double getRmaFormPercentCompletionAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getRmaFormPercentCompletion( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute. 
	 * @return the rmaFormPercentCompletion
	 */
	public double getRmaFormPercentCompletionAsPrimitive(final AbstractOrderEntry item)
	{
		return getRmaFormPercentCompletionAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute. 
	 * @param value the rmaFormPercentCompletion
	 */
	public void setRmaFormPercentCompletion(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.RMAFORMPERCENTCOMPLETION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute. 
	 * @param value the rmaFormPercentCompletion
	 */
	public void setRmaFormPercentCompletion(final AbstractOrderEntry item, final Double value)
	{
		setRmaFormPercentCompletion( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute. 
	 * @param value the rmaFormPercentCompletion
	 */
	public void setRmaFormPercentCompletion(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setRmaFormPercentCompletion( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.rmaFormPercentCompletion</code> attribute. 
	 * @param value the rmaFormPercentCompletion
	 */
	public void setRmaFormPercentCompletion(final AbstractOrderEntry item, final double value)
	{
		setRmaFormPercentCompletion( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.rmaNumber</code> attribute.
	 * @return the rmaNumber
	 */
	public String getRmaNumber(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMANUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.rmaNumber</code> attribute.
	 * @return the rmaNumber
	 */
	public String getRmaNumber(final AbstractOrder item)
	{
		return getRmaNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.rmaNumber</code> attribute. 
	 * @param value the rmaNumber
	 */
	public void setRmaNumber(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMANUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.rmaNumber</code> attribute. 
	 * @param value the rmaNumber
	 */
	public void setRmaNumber(final AbstractOrder item, final String value)
	{
		setRmaNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.rmaSapStatus</code> attribute.
	 * @return the rmaSapStatus
	 */
	public String getRmaSapStatus(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMASAPSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.rmaSapStatus</code> attribute.
	 * @return the rmaSapStatus
	 */
	public String getRmaSapStatus(final AbstractOrder item)
	{
		return getRmaSapStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.rmaSapStatus</code> attribute. 
	 * @param value the rmaSapStatus
	 */
	public void setRmaSapStatus(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.RMASAPSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.rmaSapStatus</code> attribute. 
	 * @param value the rmaSapStatus
	 */
	public void setRmaSapStatus(final AbstractOrder item, final String value)
	{
		setRmaSapStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.salesAreaPriceKey</code> attribute.
	 * @return the salesAreaPriceKey - String from Datahub containing Catalog and Pricing rows.
	 */
	public String getSalesAreaPriceKey(final SessionContext ctx, final PriceRow item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.PriceRow.SALESAREAPRICEKEY);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.salesAreaPriceKey</code> attribute.
	 * @return the salesAreaPriceKey - String from Datahub containing Catalog and Pricing rows.
	 */
	public String getSalesAreaPriceKey(final PriceRow item)
	{
		return getSalesAreaPriceKey( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.salesAreaPriceKey</code> attribute. 
	 * @param value the salesAreaPriceKey - String from Datahub containing Catalog and Pricing rows.
	 */
	public void setSalesAreaPriceKey(final SessionContext ctx, final PriceRow item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PriceRow.SALESAREAPRICEKEY,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.salesAreaPriceKey</code> attribute. 
	 * @param value the salesAreaPriceKey - String from Datahub containing Catalog and Pricing rows.
	 */
	public void setSalesAreaPriceKey(final PriceRow item, final String value)
	{
		setSalesAreaPriceKey( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute.
	 * @return the sameDayShipmentCost
	 */
	public Double getSameDayShipmentCost(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SAMEDAYSHIPMENTCOST);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute.
	 * @return the sameDayShipmentCost
	 */
	public Double getSameDayShipmentCost(final AbstractOrderEntry item)
	{
		return getSameDayShipmentCost( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute. 
	 * @return the sameDayShipmentCost
	 */
	public double getSameDayShipmentCostAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getSameDayShipmentCost( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute. 
	 * @return the sameDayShipmentCost
	 */
	public double getSameDayShipmentCostAsPrimitive(final AbstractOrderEntry item)
	{
		return getSameDayShipmentCostAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute. 
	 * @param value the sameDayShipmentCost
	 */
	public void setSameDayShipmentCost(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SAMEDAYSHIPMENTCOST,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute. 
	 * @param value the sameDayShipmentCost
	 */
	public void setSameDayShipmentCost(final AbstractOrderEntry item, final Double value)
	{
		setSameDayShipmentCost( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute. 
	 * @param value the sameDayShipmentCost
	 */
	public void setSameDayShipmentCost(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setSameDayShipmentCost( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.sameDayShipmentCost</code> attribute. 
	 * @param value the sameDayShipmentCost
	 */
	public void setSameDayShipmentCost(final AbstractOrderEntry item, final double value)
	{
		setSameDayShipmentCost( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.sanctioned</code> attribute.
	 * @return the sanctioned - Sanctioned Countries
	 */
	public Boolean isSanctioned(final SessionContext ctx, final Country item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Country.SANCTIONED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.sanctioned</code> attribute.
	 * @return the sanctioned - Sanctioned Countries
	 */
	public Boolean isSanctioned(final Country item)
	{
		return isSanctioned( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.sanctioned</code> attribute. 
	 * @return the sanctioned - Sanctioned Countries
	 */
	public boolean isSanctionedAsPrimitive(final SessionContext ctx, final Country item)
	{
		Boolean value = isSanctioned( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Country.sanctioned</code> attribute. 
	 * @return the sanctioned - Sanctioned Countries
	 */
	public boolean isSanctionedAsPrimitive(final Country item)
	{
		return isSanctionedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.sanctioned</code> attribute. 
	 * @param value the sanctioned - Sanctioned Countries
	 */
	public void setSanctioned(final SessionContext ctx, final Country item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Country.SANCTIONED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.sanctioned</code> attribute. 
	 * @param value the sanctioned - Sanctioned Countries
	 */
	public void setSanctioned(final Country item, final Boolean value)
	{
		setSanctioned( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.sanctioned</code> attribute. 
	 * @param value the sanctioned - Sanctioned Countries
	 */
	public void setSanctioned(final SessionContext ctx, final Country item, final boolean value)
	{
		setSanctioned( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Country.sanctioned</code> attribute. 
	 * @param value the sanctioned - Sanctioned Countries
	 */
	public void setSanctioned(final Country item, final boolean value)
	{
		setSanctioned( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.sapBlocked</code> attribute.
	 * @return the sapBlocked
	 */
	public Boolean isSapBlocked(final SessionContext ctx, final B2BUnit item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.SAPBLOCKED);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.sapBlocked</code> attribute.
	 * @return the sapBlocked
	 */
	public Boolean isSapBlocked(final B2BUnit item)
	{
		return isSapBlocked( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.sapBlocked</code> attribute. 
	 * @return the sapBlocked
	 */
	public boolean isSapBlockedAsPrimitive(final SessionContext ctx, final B2BUnit item)
	{
		Boolean value = isSapBlocked( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.sapBlocked</code> attribute. 
	 * @return the sapBlocked
	 */
	public boolean isSapBlockedAsPrimitive(final B2BUnit item)
	{
		return isSapBlockedAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.sapBlocked</code> attribute. 
	 * @param value the sapBlocked
	 */
	public void setSapBlocked(final SessionContext ctx, final B2BUnit item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.SAPBLOCKED,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.sapBlocked</code> attribute. 
	 * @param value the sapBlocked
	 */
	public void setSapBlocked(final B2BUnit item, final Boolean value)
	{
		setSapBlocked( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.sapBlocked</code> attribute. 
	 * @param value the sapBlocked
	 */
	public void setSapBlocked(final SessionContext ctx, final B2BUnit item, final boolean value)
	{
		setSapBlocked( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.sapBlocked</code> attribute. 
	 * @param value the sapBlocked
	 */
	public void setSapBlocked(final B2BUnit item, final boolean value)
	{
		setSapBlocked( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPConfiguration.sapproductconfig_conditiontypes_discountprice_cps</code> attribute.
	 * @return the sapproductconfig_conditiontypes_discountprice_cps - Product Config - Condition Types for Discount Price
	 */
	public Collection<String> getSapproductconfig_conditiontypes_discountprice_cps(final SessionContext ctx, final GenericItem item)
	{
		Collection<String> coll = (Collection<String>)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPConfiguration.SAPPRODUCTCONFIG_CONDITIONTYPES_DISCOUNTPRICE_CPS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPConfiguration.sapproductconfig_conditiontypes_discountprice_cps</code> attribute.
	 * @return the sapproductconfig_conditiontypes_discountprice_cps - Product Config - Condition Types for Discount Price
	 */
	public Collection<String> getSapproductconfig_conditiontypes_discountprice_cps(final SAPConfiguration item)
	{
		return getSapproductconfig_conditiontypes_discountprice_cps( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPConfiguration.sapproductconfig_conditiontypes_discountprice_cps</code> attribute. 
	 * @param value the sapproductconfig_conditiontypes_discountprice_cps - Product Config - Condition Types for Discount Price
	 */
	public void setSapproductconfig_conditiontypes_discountprice_cps(final SessionContext ctx, final GenericItem item, final Collection<String> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPConfiguration.SAPPRODUCTCONFIG_CONDITIONTYPES_DISCOUNTPRICE_CPS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPConfiguration.sapproductconfig_conditiontypes_discountprice_cps</code> attribute. 
	 * @param value the sapproductconfig_conditiontypes_discountprice_cps - Product Config - Condition Types for Discount Price
	 */
	public void setSapproductconfig_conditiontypes_discountprice_cps(final SAPConfiguration item, final Collection<String> value)
	{
		setSapproductconfig_conditiontypes_discountprice_cps( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.sapSalesOrg</code> attribute.
	 * @return the sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public List<SAPSalesOrganization> getSapSalesOrg(final SessionContext ctx, final Category item)
	{
		final List<SAPSalesOrganization> items = item.getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			"SAPSalesOrganization",
			null,
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Category.sapSalesOrg</code> attribute.
	 * @return the sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public List<SAPSalesOrganization> getSapSalesOrg(final Category item)
	{
		return getSapSalesOrg( getSession().getSessionContext(), item );
	}
	
	public long getSapSalesOrgCount(final SessionContext ctx, final Category item)
	{
		return item.getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			"SAPSalesOrganization",
			null
		);
	}
	
	public long getSapSalesOrgCount(final Category item)
	{
		return getSapSalesOrgCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.sapSalesOrg</code> attribute. 
	 * @param value the sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public void setSapSalesOrg(final SessionContext ctx, final Category item, final List<SAPSalesOrganization> value)
	{
		item.setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Category.sapSalesOrg</code> attribute. 
	 * @param value the sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public void setSapSalesOrg(final Category item, final List<SAPSalesOrganization> value)
	{
		setSapSalesOrg( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sapSalesOrg. 
	 * @param value the item to add to sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public void addToSapSalesOrg(final SessionContext ctx, final Category item, final SAPSalesOrganization value)
	{
		item.addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to sapSalesOrg. 
	 * @param value the item to add to sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public void addToSapSalesOrg(final Category item, final SAPSalesOrganization value)
	{
		addToSapSalesOrg( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sapSalesOrg. 
	 * @param value the item to remove from sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public void removeFromSapSalesOrg(final SessionContext ctx, final Category item, final SAPSalesOrganization value)
	{
		item.removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from sapSalesOrg. 
	 * @param value the item to remove from sapSalesOrg - Legal entities which are allowed to access this catalog category
	 */
	public void removeFromSapSalesOrg(final Category item, final SAPSalesOrganization value)
	{
		removeFromSapSalesOrg( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.saveForFuture</code> attribute.
	 * @return the saveForFuture
	 */
	public Boolean isSaveForFuture(final SessionContext ctx, final Address item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Address.SAVEFORFUTURE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.saveForFuture</code> attribute.
	 * @return the saveForFuture
	 */
	public Boolean isSaveForFuture(final Address item)
	{
		return isSaveForFuture( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.saveForFuture</code> attribute. 
	 * @return the saveForFuture
	 */
	public boolean isSaveForFutureAsPrimitive(final SessionContext ctx, final Address item)
	{
		Boolean value = isSaveForFuture( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Address.saveForFuture</code> attribute. 
	 * @return the saveForFuture
	 */
	public boolean isSaveForFutureAsPrimitive(final Address item)
	{
		return isSaveForFutureAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.saveForFuture</code> attribute. 
	 * @param value the saveForFuture
	 */
	public void setSaveForFuture(final SessionContext ctx, final Address item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Address.SAVEFORFUTURE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.saveForFuture</code> attribute. 
	 * @param value the saveForFuture
	 */
	public void setSaveForFuture(final Address item, final Boolean value)
	{
		setSaveForFuture( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.saveForFuture</code> attribute. 
	 * @param value the saveForFuture
	 */
	public void setSaveForFuture(final SessionContext ctx, final Address item, final boolean value)
	{
		setSaveForFuture( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Address.saveForFuture</code> attribute. 
	 * @param value the saveForFuture
	 */
	public void setSaveForFuture(final Address item, final boolean value)
	{
		setSaveForFuture( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.saveForFuture</code> attribute.
	 * @return the saveForFuture
	 */
	public String getSaveForFuture(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.SAVEFORFUTURE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.saveForFuture</code> attribute.
	 * @return the saveForFuture
	 */
	public String getSaveForFuture(final SAPCpiOutboundOrderItem item)
	{
		return getSaveForFuture( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.saveForFuture</code> attribute. 
	 * @param value the saveForFuture
	 */
	public void setSaveForFuture(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.SAVEFORFUTURE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.saveForFuture</code> attribute. 
	 * @param value the saveForFuture
	 */
	public void setSaveForFuture(final SAPCpiOutboundOrderItem item, final String value)
	{
		setSaveForFuture( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.sdsCriteria</code> attribute.
	 * @return the sdsCriteria - SDS Criteria
	 */
	public String getSdsCriteria(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SDSCRITERIA);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.sdsCriteria</code> attribute.
	 * @return the sdsCriteria - SDS Criteria
	 */
	public String getSdsCriteria(final AbstractOrderEntry item)
	{
		return getSdsCriteria( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.sdsCriteria</code> attribute. 
	 * @param value the sdsCriteria - SDS Criteria
	 */
	public void setSdsCriteria(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SDSCRITERIA,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.sdsCriteria</code> attribute. 
	 * @param value the sdsCriteria - SDS Criteria
	 */
	public void setSdsCriteria(final AbstractOrderEntry item, final String value)
	{
		setSdsCriteria( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.sellabilityFlag</code> attribute.
	 * @return the sellabilityFlag - Sellable status of a product
	 */
	public Boolean isSellabilityFlag(final SessionContext ctx, final Product item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.Product.SELLABILITYFLAG);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.sellabilityFlag</code> attribute.
	 * @return the sellabilityFlag - Sellable status of a product
	 */
	public Boolean isSellabilityFlag(final Product item)
	{
		return isSellabilityFlag( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.sellabilityFlag</code> attribute. 
	 * @return the sellabilityFlag - Sellable status of a product
	 */
	public boolean isSellabilityFlagAsPrimitive(final SessionContext ctx, final Product item)
	{
		Boolean value = isSellabilityFlag( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.sellabilityFlag</code> attribute. 
	 * @return the sellabilityFlag - Sellable status of a product
	 */
	public boolean isSellabilityFlagAsPrimitive(final Product item)
	{
		return isSellabilityFlagAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.sellabilityFlag</code> attribute. 
	 * @param value the sellabilityFlag - Sellable status of a product
	 */
	public void setSellabilityFlag(final SessionContext ctx, final Product item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Product.SELLABILITYFLAG,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.sellabilityFlag</code> attribute. 
	 * @param value the sellabilityFlag - Sellable status of a product
	 */
	public void setSellabilityFlag(final Product item, final Boolean value)
	{
		setSellabilityFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.sellabilityFlag</code> attribute. 
	 * @param value the sellabilityFlag - Sellable status of a product
	 */
	public void setSellabilityFlag(final SessionContext ctx, final Product item, final boolean value)
	{
		setSellabilityFlag( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.sellabilityFlag</code> attribute. 
	 * @param value the sellabilityFlag - Sellable status of a product
	 */
	public void setSellabilityFlag(final Product item, final boolean value)
	{
		setSellabilityFlag( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shipNotificationEmail</code> attribute.
	 * @return the shipNotificationEmail
	 */
	public String getShipNotificationEmail(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPNOTIFICATIONEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shipNotificationEmail</code> attribute.
	 * @return the shipNotificationEmail
	 */
	public String getShipNotificationEmail(final AbstractOrder item)
	{
		return getShipNotificationEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shipNotificationEmail</code> attribute. 
	 * @param value the shipNotificationEmail
	 */
	public void setShipNotificationEmail(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPNOTIFICATIONEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shipNotificationEmail</code> attribute. 
	 * @param value the shipNotificationEmail
	 */
	public void setShipNotificationEmail(final AbstractOrder item, final String value)
	{
		setShipNotificationEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.shippingCarrier</code> attribute.
	 * @return the shippingCarrier
	 */
	public Collection<EnumerationValue> getShippingCarrier(final SessionContext ctx, final BaseStore item)
	{
		final List<EnumerationValue> items = item.getLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			"EnumerationValue",
			null,
			false,
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>BaseStore.shippingCarrier</code> attribute.
	 * @return the shippingCarrier
	 */
	public Collection<EnumerationValue> getShippingCarrier(final BaseStore item)
	{
		return getShippingCarrier( getSession().getSessionContext(), item );
	}
	
	public long getShippingCarrierCount(final SessionContext ctx, final BaseStore item)
	{
		return item.getLinkedItemsCount(
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			"EnumerationValue",
			null
		);
	}
	
	public long getShippingCarrierCount(final BaseStore item)
	{
		return getShippingCarrierCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.shippingCarrier</code> attribute. 
	 * @param value the shippingCarrier
	 */
	public void setShippingCarrier(final SessionContext ctx, final BaseStore item, final Collection<EnumerationValue> value)
	{
		item.setLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			null,
			value,
			false,
			false,
			Utilities.getMarkModifiedOverride(GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>BaseStore.shippingCarrier</code> attribute. 
	 * @param value the shippingCarrier
	 */
	public void setShippingCarrier(final BaseStore item, final Collection<EnumerationValue> value)
	{
		setShippingCarrier( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to shippingCarrier. 
	 * @param value the item to add to shippingCarrier
	 */
	public void addToShippingCarrier(final SessionContext ctx, final BaseStore item, final EnumerationValue value)
	{
		item.addLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to shippingCarrier. 
	 * @param value the item to add to shippingCarrier
	 */
	public void addToShippingCarrier(final BaseStore item, final EnumerationValue value)
	{
		addToShippingCarrier( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from shippingCarrier. 
	 * @param value the item to remove from shippingCarrier
	 */
	public void removeFromShippingCarrier(final SessionContext ctx, final BaseStore item, final EnumerationValue value)
	{
		item.removeLinkedItems( 
			ctx,
			true,
			BhgeCoreConstants.Relations.GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING,
			null,
			Collections.singletonList(value),
			false,
			false,
			Utilities.getMarkModifiedOverride(GEEDGEBASESTORE2SHIPPINGCARRIERMAPPING_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from shippingCarrier. 
	 * @param value the item to remove from shippingCarrier
	 */
	public void removeFromShippingCarrier(final BaseStore item, final EnumerationValue value)
	{
		removeFromShippingCarrier( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingCarrierMethod</code> attribute.
	 * @return the shippingCarrierMethod
	 */
	public EnumerationValue getShippingCarrierMethod(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCARRIERMETHOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingCarrierMethod</code> attribute.
	 * @return the shippingCarrierMethod
	 */
	public EnumerationValue getShippingCarrierMethod(final AbstractOrder item)
	{
		return getShippingCarrierMethod( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingCarrierMethod</code> attribute. 
	 * @param value the shippingCarrierMethod
	 */
	public void setShippingCarrierMethod(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCARRIERMETHOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingCarrierMethod</code> attribute. 
	 * @param value the shippingCarrierMethod
	 */
	public void setShippingCarrierMethod(final AbstractOrder item, final EnumerationValue value)
	{
		setShippingCarrierMethod( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shippingCharge</code> attribute.
	 * @return the shippingCharge
	 */
	public String getShippingCharge(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPPINGCHARGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shippingCharge</code> attribute.
	 * @return the shippingCharge
	 */
	public String getShippingCharge(final SAPCpiOutboundOrder item)
	{
		return getShippingCharge( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shippingCharge</code> attribute. 
	 * @param value the shippingCharge
	 */
	public void setShippingCharge(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPPINGCHARGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shippingCharge</code> attribute. 
	 * @param value the shippingCharge
	 */
	public void setShippingCharge(final SAPCpiOutboundOrder item, final String value)
	{
		setShippingCharge( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingChargeMethod</code> attribute.
	 * @return the shippingChargeMethod
	 */
	public EnumerationValue getShippingChargeMethod(final SessionContext ctx, final AbstractOrder item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCHARGEMETHOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingChargeMethod</code> attribute.
	 * @return the shippingChargeMethod
	 */
	public EnumerationValue getShippingChargeMethod(final AbstractOrder item)
	{
		return getShippingChargeMethod( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingChargeMethod</code> attribute. 
	 * @param value the shippingChargeMethod
	 */
	public void setShippingChargeMethod(final SessionContext ctx, final AbstractOrder item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCHARGEMETHOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingChargeMethod</code> attribute. 
	 * @param value the shippingChargeMethod
	 */
	public void setShippingChargeMethod(final AbstractOrder item, final EnumerationValue value)
	{
		setShippingChargeMethod( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct1Name</code> attribute.
	 * @return the shippingConatct1Name
	 */
	public String getShippingConatct1Name(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT1NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct1Name</code> attribute.
	 * @return the shippingConatct1Name
	 */
	public String getShippingConatct1Name(final AbstractOrder item)
	{
		return getShippingConatct1Name( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct1Name</code> attribute. 
	 * @param value the shippingConatct1Name
	 */
	public void setShippingConatct1Name(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT1NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct1Name</code> attribute. 
	 * @param value the shippingConatct1Name
	 */
	public void setShippingConatct1Name(final AbstractOrder item, final String value)
	{
		setShippingConatct1Name( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct1Number</code> attribute.
	 * @return the shippingConatct1Number
	 */
	public String getShippingConatct1Number(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT1NUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct1Number</code> attribute.
	 * @return the shippingConatct1Number
	 */
	public String getShippingConatct1Number(final AbstractOrder item)
	{
		return getShippingConatct1Number( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct1Number</code> attribute. 
	 * @param value the shippingConatct1Number
	 */
	public void setShippingConatct1Number(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT1NUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct1Number</code> attribute. 
	 * @param value the shippingConatct1Number
	 */
	public void setShippingConatct1Number(final AbstractOrder item, final String value)
	{
		setShippingConatct1Number( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct2Name</code> attribute.
	 * @return the shippingConatct2Name
	 */
	public String getShippingConatct2Name(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT2NAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct2Name</code> attribute.
	 * @return the shippingConatct2Name
	 */
	public String getShippingConatct2Name(final AbstractOrder item)
	{
		return getShippingConatct2Name( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct2Name</code> attribute. 
	 * @param value the shippingConatct2Name
	 */
	public void setShippingConatct2Name(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT2NAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct2Name</code> attribute. 
	 * @param value the shippingConatct2Name
	 */
	public void setShippingConatct2Name(final AbstractOrder item, final String value)
	{
		setShippingConatct2Name( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct2Number</code> attribute.
	 * @return the shippingConatct2Number
	 */
	public String getShippingConatct2Number(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT2NUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingConatct2Number</code> attribute.
	 * @return the shippingConatct2Number
	 */
	public String getShippingConatct2Number(final AbstractOrder item)
	{
		return getShippingConatct2Number( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct2Number</code> attribute. 
	 * @param value the shippingConatct2Number
	 */
	public void setShippingConatct2Number(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGCONATCT2NUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingConatct2Number</code> attribute. 
	 * @param value the shippingConatct2Number
	 */
	public void setShippingConatct2Number(final AbstractOrder item, final String value)
	{
		setShippingConatct2Number( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shippingEmail</code> attribute.
	 * @return the shippingEmail
	 */
	public String getShippingEmail(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPPINGEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shippingEmail</code> attribute.
	 * @return the shippingEmail
	 */
	public String getShippingEmail(final SAPCpiOutboundOrder item)
	{
		return getShippingEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shippingEmail</code> attribute. 
	 * @param value the shippingEmail
	 */
	public void setShippingEmail(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPPINGEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shippingEmail</code> attribute. 
	 * @param value the shippingEmail
	 */
	public void setShippingEmail(final SAPCpiOutboundOrder item, final String value)
	{
		setShippingEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingMethod</code> attribute.
	 * @return the shippingMethod
	 */
	public String getShippingMethod(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGMETHOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingMethod</code> attribute.
	 * @return the shippingMethod
	 */
	public String getShippingMethod(final AbstractOrder item)
	{
		return getShippingMethod( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingMethod</code> attribute. 
	 * @param value the shippingMethod
	 */
	public void setShippingMethod(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGMETHOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingMethod</code> attribute. 
	 * @param value the shippingMethod
	 */
	public void setShippingMethod(final AbstractOrder item, final String value)
	{
		setShippingMethod( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>EnumerationValue.shippingMethod</code> attribute.
	 * @return the shippingMethod - Shipping Method
	 */
	public EnumerationValue getShippingMethod(final SessionContext ctx, final EnumerationValue item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.EnumerationValue.SHIPPINGMETHOD);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>EnumerationValue.shippingMethod</code> attribute.
	 * @return the shippingMethod - Shipping Method
	 */
	public EnumerationValue getShippingMethod(final EnumerationValue item)
	{
		return getShippingMethod( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>EnumerationValue.shippingMethod</code> attribute. 
	 * @param value the shippingMethod - Shipping Method
	 */
	public void setShippingMethod(final SessionContext ctx, final EnumerationValue item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.EnumerationValue.SHIPPINGMETHOD,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>EnumerationValue.shippingMethod</code> attribute. 
	 * @param value the shippingMethod - Shipping Method
	 */
	public void setShippingMethod(final EnumerationValue item, final EnumerationValue value)
	{
		setShippingMethod( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingRemarks</code> attribute.
	 * @return the shippingRemarks
	 */
	public String getShippingRemarks(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGREMARKS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shippingRemarks</code> attribute.
	 * @return the shippingRemarks
	 */
	public String getShippingRemarks(final AbstractOrder item)
	{
		return getShippingRemarks( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingRemarks</code> attribute. 
	 * @param value the shippingRemarks
	 */
	public void setShippingRemarks(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPPINGREMARKS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shippingRemarks</code> attribute. 
	 * @param value the shippingRemarks
	 */
	public void setShippingRemarks(final AbstractOrder item, final String value)
	{
		setShippingRemarks( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shippingRemarks</code> attribute.
	 * @return the shippingRemarks
	 */
	public String getShippingRemarks(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPPINGREMARKS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shippingRemarks</code> attribute.
	 * @return the shippingRemarks
	 */
	public String getShippingRemarks(final SAPCpiOutboundOrder item)
	{
		return getShippingRemarks( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shippingRemarks</code> attribute. 
	 * @param value the shippingRemarks
	 */
	public void setShippingRemarks(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPPINGREMARKS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shippingRemarks</code> attribute. 
	 * @param value the shippingRemarks
	 */
	public void setShippingRemarks(final SAPCpiOutboundOrder item, final String value)
	{
		setShippingRemarks( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shiptoContact</code> attribute.
	 * @return the shiptoContact
	 */
	public String getShiptoContact(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPTOCONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shiptoContact</code> attribute.
	 * @return the shiptoContact
	 */
	public String getShiptoContact(final SAPCpiOutboundOrder item)
	{
		return getShiptoContact( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shiptoContact</code> attribute. 
	 * @param value the shiptoContact
	 */
	public void setShiptoContact(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPTOCONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shiptoContact</code> attribute. 
	 * @param value the shiptoContact
	 */
	public void setShiptoContact(final SAPCpiOutboundOrder item, final String value)
	{
		setShiptoContact( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shipToContactName</code> attribute.
	 * @return the shipToContactName
	 */
	public String getShipToContactName(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPTOCONTACTNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shipToContactName</code> attribute.
	 * @return the shipToContactName
	 */
	public String getShipToContactName(final AbstractOrder item)
	{
		return getShipToContactName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shipToContactName</code> attribute. 
	 * @param value the shipToContactName
	 */
	public void setShipToContactName(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPTOCONTACTNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shipToContactName</code> attribute. 
	 * @param value the shipToContactName
	 */
	public void setShipToContactName(final AbstractOrder item, final String value)
	{
		setShipToContactName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shipToContactPhone</code> attribute.
	 * @return the shipToContactPhone
	 */
	public String getShipToContactPhone(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPTOCONTACTPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.shipToContactPhone</code> attribute.
	 * @return the shipToContactPhone
	 */
	public String getShipToContactPhone(final AbstractOrder item)
	{
		return getShipToContactPhone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shipToContactPhone</code> attribute. 
	 * @param value the shipToContactPhone
	 */
	public void setShipToContactPhone(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SHIPTOCONTACTPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.shipToContactPhone</code> attribute. 
	 * @param value the shipToContactPhone
	 */
	public void setShipToContactPhone(final AbstractOrder item, final String value)
	{
		setShipToContactPhone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shiptoPhone</code> attribute.
	 * @return the shiptoPhone
	 */
	public String getShiptoPhone(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPTOPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.shiptoPhone</code> attribute.
	 * @return the shiptoPhone
	 */
	public String getShiptoPhone(final SAPCpiOutboundOrder item)
	{
		return getShiptoPhone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shiptoPhone</code> attribute. 
	 * @param value the shiptoPhone
	 */
	public void setShiptoPhone(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SHIPTOPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.shiptoPhone</code> attribute. 
	 * @param value the shiptoPhone
	 */
	public void setShiptoPhone(final SAPCpiOutboundOrder item, final String value)
	{
		setShiptoPhone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClause</code> attribute.
	 * @return the silverClause
	 */
	public Double getSilverClause(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SILVERCLAUSE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClause</code> attribute.
	 * @return the silverClause
	 */
	public Double getSilverClause(final AbstractOrderEntry item)
	{
		return getSilverClause( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClause</code> attribute. 
	 * @return the silverClause
	 */
	public double getSilverClauseAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getSilverClause( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClause</code> attribute. 
	 * @return the silverClause
	 */
	public double getSilverClauseAsPrimitive(final AbstractOrderEntry item)
	{
		return getSilverClauseAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClause</code> attribute. 
	 * @param value the silverClause
	 */
	public void setSilverClause(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SILVERCLAUSE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClause</code> attribute. 
	 * @param value the silverClause
	 */
	public void setSilverClause(final AbstractOrderEntry item, final Double value)
	{
		setSilverClause( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClause</code> attribute. 
	 * @param value the silverClause
	 */
	public void setSilverClause(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setSilverClause( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClause</code> attribute. 
	 * @param value the silverClause
	 */
	public void setSilverClause(final AbstractOrderEntry item, final double value)
	{
		setSilverClause( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute.
	 * @return the silverClausePrice
	 */
	public Double getSilverClausePrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SILVERCLAUSEPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute.
	 * @return the silverClausePrice
	 */
	public Double getSilverClausePrice(final AbstractOrderEntry item)
	{
		return getSilverClausePrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute. 
	 * @return the silverClausePrice
	 */
	public double getSilverClausePriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getSilverClausePrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute. 
	 * @return the silverClausePrice
	 */
	public double getSilverClausePriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getSilverClausePriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute. 
	 * @param value the silverClausePrice
	 */
	public void setSilverClausePrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SILVERCLAUSEPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute. 
	 * @param value the silverClausePrice
	 */
	public void setSilverClausePrice(final AbstractOrderEntry item, final Double value)
	{
		setSilverClausePrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute. 
	 * @param value the silverClausePrice
	 */
	public void setSilverClausePrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setSilverClausePrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClausePrice</code> attribute. 
	 * @param value the silverClausePrice
	 */
	public void setSilverClausePrice(final AbstractOrderEntry item, final double value)
	{
		setSilverClausePrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClausePricePercentage</code> attribute.
	 * @return the silverClausePricePercentage
	 */
	public String getSilverClausePricePercentage(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SILVERCLAUSEPRICEPERCENTAGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.silverClausePricePercentage</code> attribute.
	 * @return the silverClausePricePercentage
	 */
	public String getSilverClausePricePercentage(final AbstractOrderEntry item)
	{
		return getSilverClausePricePercentage( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClausePricePercentage</code> attribute. 
	 * @param value the silverClausePricePercentage
	 */
	public void setSilverClausePricePercentage(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SILVERCLAUSEPRICEPERCENTAGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.silverClausePricePercentage</code> attribute. 
	 * @param value the silverClausePricePercentage
	 */
	public void setSilverClausePricePercentage(final AbstractOrderEntry item, final String value)
	{
		setSilverClausePricePercentage( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.similarPart</code> attribute.
	 * @return the similarPart
	 */
	public Boolean isSimilarPart(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SIMILARPART);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.similarPart</code> attribute.
	 * @return the similarPart
	 */
	public Boolean isSimilarPart(final AbstractOrderEntry item)
	{
		return isSimilarPart( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.similarPart</code> attribute. 
	 * @return the similarPart
	 */
	public boolean isSimilarPartAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Boolean value = isSimilarPart( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.similarPart</code> attribute. 
	 * @return the similarPart
	 */
	public boolean isSimilarPartAsPrimitive(final AbstractOrderEntry item)
	{
		return isSimilarPartAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.similarPart</code> attribute. 
	 * @param value the similarPart
	 */
	public void setSimilarPart(final SessionContext ctx, final AbstractOrderEntry item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SIMILARPART,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.similarPart</code> attribute. 
	 * @param value the similarPart
	 */
	public void setSimilarPart(final AbstractOrderEntry item, final Boolean value)
	{
		setSimilarPart( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.similarPart</code> attribute. 
	 * @param value the similarPart
	 */
	public void setSimilarPart(final SessionContext ctx, final AbstractOrderEntry item, final boolean value)
	{
		setSimilarPart( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.similarPart</code> attribute. 
	 * @param value the similarPart
	 */
	public void setSimilarPart(final AbstractOrderEntry item, final boolean value)
	{
		setSimilarPart( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PDTRow.siteName</code> attribute.
	 * @return the siteName - To Hold the unique name of the RMA Site Name
	 */
	public String getSiteName(final SessionContext ctx, final PDTRow item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.PDTRow.SITENAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PDTRow.siteName</code> attribute.
	 * @return the siteName - To Hold the unique name of the RMA Site Name
	 */
	public String getSiteName(final PDTRow item)
	{
		return getSiteName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PDTRow.siteName</code> attribute. 
	 * @param value the siteName - To Hold the unique name of the RMA Site Name
	 */
	public void setSiteName(final SessionContext ctx, final PDTRow item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PDTRow.SITENAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PDTRow.siteName</code> attribute. 
	 * @param value the siteName - To Hold the unique name of the RMA Site Name
	 */
	public void setSiteName(final PDTRow item, final String value)
	{
		setSiteName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.soaContact</code> attribute.
	 * @return the soaContact
	 */
	public String getSoaContact(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SOACONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.soaContact</code> attribute.
	 * @return the soaContact
	 */
	public String getSoaContact(final AbstractOrder item)
	{
		return getSoaContact( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.soaContact</code> attribute. 
	 * @param value the soaContact
	 */
	public void setSoaContact(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SOACONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.soaContact</code> attribute. 
	 * @param value the soaContact
	 */
	public void setSoaContact(final AbstractOrder item, final String value)
	{
		setSoaContact( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.soaContact</code> attribute.
	 * @return the soaContact
	 */
	public String getSoaContact(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SOACONTACT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.soaContact</code> attribute.
	 * @return the soaContact
	 */
	public String getSoaContact(final SAPCpiOutboundOrder item)
	{
		return getSoaContact( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.soaContact</code> attribute. 
	 * @param value the soaContact
	 */
	public void setSoaContact(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SOACONTACT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.soaContact</code> attribute. 
	 * @param value the soaContact
	 */
	public void setSoaContact(final SAPCpiOutboundOrder item, final String value)
	{
		setSoaContact( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.soaEmail</code> attribute.
	 * @return the soaEmail
	 */
	public String getSoaEmail(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SOAEMAIL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.soaEmail</code> attribute.
	 * @return the soaEmail
	 */
	public String getSoaEmail(final SAPCpiOutboundOrder item)
	{
		return getSoaEmail( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.soaEmail</code> attribute. 
	 * @param value the soaEmail
	 */
	public void setSoaEmail(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SOAEMAIL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.soaEmail</code> attribute. 
	 * @param value the soaEmail
	 */
	public void setSoaEmail(final SAPCpiOutboundOrder item, final String value)
	{
		setSoaEmail( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.soaPhone</code> attribute.
	 * @return the soaPhone
	 */
	public String getSoaPhone(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SOAPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.soaPhone</code> attribute.
	 * @return the soaPhone
	 */
	public String getSoaPhone(final AbstractOrder item)
	{
		return getSoaPhone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.soaPhone</code> attribute. 
	 * @param value the soaPhone
	 */
	public void setSoaPhone(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SOAPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.soaPhone</code> attribute. 
	 * @param value the soaPhone
	 */
	public void setSoaPhone(final AbstractOrder item, final String value)
	{
		setSoaPhone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.soaPhone</code> attribute.
	 * @return the soaPhone
	 */
	public String getSoaPhone(final SessionContext ctx, final SAPCpiOutboundOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SOAPHONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrder.soaPhone</code> attribute.
	 * @return the soaPhone
	 */
	public String getSoaPhone(final SAPCpiOutboundOrder item)
	{
		return getSoaPhone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.soaPhone</code> attribute. 
	 * @param value the soaPhone
	 */
	public void setSoaPhone(final SessionContext ctx, final SAPCpiOutboundOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrder.SOAPHONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrder.soaPhone</code> attribute. 
	 * @param value the soaPhone
	 */
	public void setSoaPhone(final SAPCpiOutboundOrder item, final String value)
	{
		setSoaPhone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.soldtocustomer</code> attribute.
	 * @return the soldtocustomer - Sold To Customer
	 */
	public B2BUnit getSoldtocustomer(final SessionContext ctx, final PriceRow item)
	{
		return (B2BUnit)item.getProperty( ctx, BhgeCoreConstants.Attributes.PriceRow.SOLDTOCUSTOMER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.soldtocustomer</code> attribute.
	 * @return the soldtocustomer - Sold To Customer
	 */
	public B2BUnit getSoldtocustomer(final PriceRow item)
	{
		return getSoldtocustomer( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.soldtocustomer</code> attribute. 
	 * @param value the soldtocustomer - Sold To Customer
	 */
	public void setSoldtocustomer(final SessionContext ctx, final PriceRow item, final B2BUnit value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PriceRow.SOLDTOCUSTOMER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.soldtocustomer</code> attribute. 
	 * @param value the soldtocustomer - Sold To Customer
	 */
	public void setSoldtocustomer(final PriceRow item, final B2BUnit value)
	{
		setSoldtocustomer( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.soldToForCart</code> attribute.
	 * @return the soldToForCart - Gives the sold to information
	 */
	public B2BUnit getSoldToForCart(final SessionContext ctx, final AbstractOrder item)
	{
		return (B2BUnit)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SOLDTOFORCART);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.soldToForCart</code> attribute.
	 * @return the soldToForCart - Gives the sold to information
	 */
	public B2BUnit getSoldToForCart(final AbstractOrder item)
	{
		return getSoldToForCart( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.soldToForCart</code> attribute. 
	 * @param value the soldToForCart - Gives the sold to information
	 */
	public void setSoldToForCart(final SessionContext ctx, final AbstractOrder item, final B2BUnit value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SOLDTOFORCART,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.soldToForCart</code> attribute. 
	 * @param value the soldToForCart - Gives the sold to information
	 */
	public void setSoldToForCart(final AbstractOrder item, final B2BUnit value)
	{
		setSoldToForCart( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.sosusertype</code> attribute.
	 * @return the sosusertype - User of type Channel Partner or Enduser
	 */
	public String getSosusertype(final SessionContext ctx, final User item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.SOSUSERTYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.sosusertype</code> attribute.
	 * @return the sosusertype - User of type Channel Partner or Enduser
	 */
	public String getSosusertype(final User item)
	{
		return getSosusertype( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.sosusertype</code> attribute. 
	 * @param value the sosusertype - User of type Channel Partner or Enduser
	 */
	public void setSosusertype(final SessionContext ctx, final User item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.SOSUSERTYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.sosusertype</code> attribute. 
	 * @param value the sosusertype - User of type Channel Partner or Enduser
	 */
	public void setSosusertype(final User item, final String value)
	{
		setSosusertype( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.specialDiscountCode</code> attribute.
	 * @return the specialDiscountCode
	 */
	public String getSpecialDiscountCode(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SPECIALDISCOUNTCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.specialDiscountCode</code> attribute.
	 * @return the specialDiscountCode
	 */
	public String getSpecialDiscountCode(final AbstractOrder item)
	{
		return getSpecialDiscountCode( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.specialDiscountCode</code> attribute. 
	 * @param value the specialDiscountCode
	 */
	public void setSpecialDiscountCode(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SPECIALDISCOUNTCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.specialDiscountCode</code> attribute. 
	 * @param value the specialDiscountCode
	 */
	public void setSpecialDiscountCode(final AbstractOrder item, final String value)
	{
		setSpecialDiscountCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.sso</code> attribute.
	 * @return the sso - SSO number
	 */
	public String getSso(final SessionContext ctx, final User item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.SSO);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.sso</code> attribute.
	 * @return the sso - SSO number
	 */
	public String getSso(final User item)
	{
		return getSso( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.sso</code> attribute. 
	 * @param value the sso - SSO number
	 */
	public void setSso(final SessionContext ctx, final User item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.SSO,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.sso</code> attribute. 
	 * @param value the sso - SSO number
	 */
	public void setSso(final User item, final String value)
	{
		setSso( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.standardLeadTime</code> attribute.
	 * @return the standardLeadTime - Standard Turn Around Time for a product
	 */
	public Integer getStandardLeadTime(final SessionContext ctx, final Product item)
	{
		return (Integer)item.getProperty( ctx, BhgeCoreConstants.Attributes.Product.STANDARDLEADTIME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.standardLeadTime</code> attribute.
	 * @return the standardLeadTime - Standard Turn Around Time for a product
	 */
	public Integer getStandardLeadTime(final Product item)
	{
		return getStandardLeadTime( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.standardLeadTime</code> attribute. 
	 * @return the standardLeadTime - Standard Turn Around Time for a product
	 */
	public int getStandardLeadTimeAsPrimitive(final SessionContext ctx, final Product item)
	{
		Integer value = getStandardLeadTime( ctx,item );
		return value != null ? value.intValue() : 0;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.standardLeadTime</code> attribute. 
	 * @return the standardLeadTime - Standard Turn Around Time for a product
	 */
	public int getStandardLeadTimeAsPrimitive(final Product item)
	{
		return getStandardLeadTimeAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.standardLeadTime</code> attribute. 
	 * @param value the standardLeadTime - Standard Turn Around Time for a product
	 */
	public void setStandardLeadTime(final SessionContext ctx, final Product item, final Integer value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Product.STANDARDLEADTIME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.standardLeadTime</code> attribute. 
	 * @param value the standardLeadTime - Standard Turn Around Time for a product
	 */
	public void setStandardLeadTime(final Product item, final Integer value)
	{
		setStandardLeadTime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.standardLeadTime</code> attribute. 
	 * @param value the standardLeadTime - Standard Turn Around Time for a product
	 */
	public void setStandardLeadTime(final SessionContext ctx, final Product item, final int value)
	{
		setStandardLeadTime( ctx, item, Integer.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.standardLeadTime</code> attribute. 
	 * @param value the standardLeadTime - Standard Turn Around Time for a product
	 */
	public void setStandardLeadTime(final Product item, final int value)
	{
		setStandardLeadTime( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.status</code> attribute.
	 * @return the status - Holds the status of the user
	 */
	public EnumerationValue getStatus(final SessionContext ctx, final User item)
	{
		return (EnumerationValue)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.STATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.status</code> attribute.
	 * @return the status - Holds the status of the user
	 */
	public EnumerationValue getStatus(final User item)
	{
		return getStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.status</code> attribute. 
	 * @param value the status - Holds the status of the user
	 */
	public void setStatus(final SessionContext ctx, final User item, final EnumerationValue value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.STATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.status</code> attribute. 
	 * @param value the status - Holds the status of the user
	 */
	public void setStatus(final User item, final EnumerationValue value)
	{
		setStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.stockDetails</code> attribute.
	 * @return the stockDetails - Stock Details
	 */
	public Collection<GEEdgeStockDetail> getStockDetails(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Collection<GEEdgeStockDetail> coll = (Collection<GEEdgeStockDetail>)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.STOCKDETAILS);
		return coll != null ? coll : Collections.EMPTY_LIST;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.stockDetails</code> attribute.
	 * @return the stockDetails - Stock Details
	 */
	public Collection<GEEdgeStockDetail> getStockDetails(final AbstractOrderEntry item)
	{
		return getStockDetails( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.stockDetails</code> attribute. 
	 * @param value the stockDetails - Stock Details
	 */
	public void setStockDetails(final SessionContext ctx, final AbstractOrderEntry item, final Collection<GEEdgeStockDetail> value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.STOCKDETAILS,value == null || !value.isEmpty() ? value : null );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.stockDetails</code> attribute. 
	 * @param value the stockDetails - Stock Details
	 */
	public void setStockDetails(final AbstractOrderEntry item, final Collection<GEEdgeStockDetail> value)
	{
		setStockDetails( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PDTRow.store</code> attribute.
	 * @return the store - To Hold the RMA Base Store
	 */
	public BaseStore getStore(final SessionContext ctx, final PDTRow item)
	{
		return (BaseStore)item.getProperty( ctx, BhgeCoreConstants.Attributes.PDTRow.STORE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PDTRow.store</code> attribute.
	 * @return the store - To Hold the RMA Base Store
	 */
	public BaseStore getStore(final PDTRow item)
	{
		return getStore( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PDTRow.store</code> attribute. 
	 * @param value the store - To Hold the RMA Base Store
	 */
	public void setStore(final SessionContext ctx, final PDTRow item, final BaseStore value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PDTRow.STORE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PDTRow.store</code> attribute. 
	 * @param value the store - To Hold the RMA Base Store
	 */
	public void setStore(final PDTRow item, final BaseStore value)
	{
		setStore( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.subRegionCP</code> attribute.
	 * @return the subRegionCP - Property added for handling the custom price handling.
	 */
	public String getSubRegionCP(final SessionContext ctx, final B2BUnit item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.B2BUnit.SUBREGIONCP);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.subRegionCP</code> attribute.
	 * @return the subRegionCP - Property added for handling the custom price handling.
	 */
	public String getSubRegionCP(final B2BUnit item)
	{
		return getSubRegionCP( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.subRegionCP</code> attribute. 
	 * @param value the subRegionCP - Property added for handling the custom price handling.
	 */
	public void setSubRegionCP(final SessionContext ctx, final B2BUnit item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.B2BUnit.SUBREGIONCP,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.subRegionCP</code> attribute. 
	 * @param value the subRegionCP - Property added for handling the custom price handling.
	 */
	public void setSubRegionCP(final B2BUnit item, final String value)
	{
		setSubRegionCP( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute.
	 * @return the subTotalListPrice
	 */
	public Double getSubTotalListPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SUBTOTALLISTPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute.
	 * @return the subTotalListPrice
	 */
	public Double getSubTotalListPrice(final AbstractOrderEntry item)
	{
		return getSubTotalListPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute. 
	 * @return the subTotalListPrice
	 */
	public double getSubTotalListPriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getSubTotalListPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute. 
	 * @return the subTotalListPrice
	 */
	public double getSubTotalListPriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getSubTotalListPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute. 
	 * @param value the subTotalListPrice
	 */
	public void setSubTotalListPrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.SUBTOTALLISTPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute. 
	 * @param value the subTotalListPrice
	 */
	public void setSubTotalListPrice(final AbstractOrderEntry item, final Double value)
	{
		setSubTotalListPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute. 
	 * @param value the subTotalListPrice
	 */
	public void setSubTotalListPrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setSubTotalListPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.subTotalListPrice</code> attribute. 
	 * @param value the subTotalListPrice
	 */
	public void setSubTotalListPrice(final AbstractOrderEntry item, final double value)
	{
		setSubTotalListPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.supercedingProduct</code> attribute.
	 * @return the supercedingProduct - Superseding Product
	 */
	public Product getSupercedingProduct(final SessionContext ctx, final Product item)
	{
		return (Product)item.getProperty( ctx, BhgeCoreConstants.Attributes.Product.SUPERCEDINGPRODUCT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.supercedingProduct</code> attribute.
	 * @return the supercedingProduct - Superseding Product
	 */
	public Product getSupercedingProduct(final Product item)
	{
		return getSupercedingProduct( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.supercedingProduct</code> attribute. 
	 * @param value the supercedingProduct - Superseding Product
	 */
	public void setSupercedingProduct(final SessionContext ctx, final Product item, final Product value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Product.SUPERCEDINGPRODUCT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.supercedingProduct</code> attribute. 
	 * @param value the supercedingProduct - Superseding Product
	 */
	public void setSupercedingProduct(final Product item, final Product value)
	{
		setSupercedingProduct( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.supercedingProductStatus</code> attribute.
	 * @return the supercedingProductStatus - Status of the Product
	 */
	public String getSupercedingProductStatus(final SessionContext ctx, final Product item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Product.SUPERCEDINGPRODUCTSTATUS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Product.supercedingProductStatus</code> attribute.
	 * @return the supercedingProductStatus - Status of the Product
	 */
	public String getSupercedingProductStatus(final Product item)
	{
		return getSupercedingProductStatus( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.supercedingProductStatus</code> attribute. 
	 * @param value the supercedingProductStatus - Status of the Product
	 */
	public void setSupercedingProductStatus(final SessionContext ctx, final Product item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Product.SUPERCEDINGPRODUCTSTATUS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Product.supercedingProductStatus</code> attribute. 
	 * @param value the supercedingProductStatus - Status of the Product
	 */
	public void setSupercedingProductStatus(final Product item, final String value)
	{
		setSupercedingProductStatus( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.surCharge</code> attribute.
	 * @return the surCharge
	 */
	public String getSurCharge(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.SURCHARGE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.surCharge</code> attribute.
	 * @return the surCharge
	 */
	public String getSurCharge(final AbstractOrder item)
	{
		return getSurCharge( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.surCharge</code> attribute. 
	 * @param value the surCharge
	 */
	public void setSurCharge(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.SURCHARGE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.surCharge</code> attribute. 
	 * @param value the surCharge
	 */
	public void setSurCharge(final AbstractOrder item, final String value)
	{
		setSurCharge( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.tagInformation</code> attribute.
	 * @return the tagInformation
	 */
	public String getTagInformation(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.TAGINFORMATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.tagInformation</code> attribute.
	 * @return the tagInformation
	 */
	public String getTagInformation(final AbstractOrderEntry item)
	{
		return getTagInformation( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.tagInformation</code> attribute. 
	 * @param value the tagInformation
	 */
	public void setTagInformation(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.TAGINFORMATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.tagInformation</code> attribute. 
	 * @param value the tagInformation
	 */
	public void setTagInformation(final AbstractOrderEntry item, final String value)
	{
		setTagInformation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.tagInformation</code> attribute.
	 * @return the tagInformation
	 */
	public String getTagInformation(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.TAGINFORMATION);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.tagInformation</code> attribute.
	 * @return the tagInformation
	 */
	public String getTagInformation(final SAPCpiOutboundOrderItem item)
	{
		return getTagInformation( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.tagInformation</code> attribute. 
	 * @param value the tagInformation
	 */
	public void setTagInformation(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.TAGINFORMATION,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.tagInformation</code> attribute. 
	 * @param value the tagInformation
	 */
	public void setTagInformation(final SAPCpiOutboundOrderItem item, final String value)
	{
		setTagInformation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.timeZone</code> attribute.
	 * @return the timeZone - User's Time Zone
	 */
	public String getTimeZone(final SessionContext ctx, final User item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.TIMEZONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.timeZone</code> attribute.
	 * @return the timeZone - User's Time Zone
	 */
	public String getTimeZone(final User item)
	{
		return getTimeZone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.timeZone</code> attribute. 
	 * @param value the timeZone - User's Time Zone
	 */
	public void setTimeZone(final SessionContext ctx, final User item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.TIMEZONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.timeZone</code> attribute. 
	 * @param value the timeZone - User's Time Zone
	 */
	public void setTimeZone(final User item, final String value)
	{
		setTimeZone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Warehouse.timeZone</code> attribute.
	 * @return the timeZone
	 */
	public Zone getTimeZone(final SessionContext ctx, final Warehouse item)
	{
		return (Zone)item.getProperty( ctx, BhgeCoreConstants.Attributes.Warehouse.TIMEZONE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Warehouse.timeZone</code> attribute.
	 * @return the timeZone
	 */
	public Zone getTimeZone(final Warehouse item)
	{
		return getTimeZone( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Warehouse.timeZone</code> attribute. 
	 * @param value the timeZone
	 */
	public void setTimeZone(final SessionContext ctx, final Warehouse item, final Zone value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Warehouse.TIMEZONE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Warehouse.timeZone</code> attribute. 
	 * @param value the timeZone
	 */
	public void setTimeZone(final Warehouse item, final Zone value)
	{
		setTimeZone( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.tokenUrl</code> attribute.
	 * @return the tokenUrl - URL for getting the token
	 */
	public String getTokenUrl(final SessionContext ctx, final OpenIDClientDetails item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.TOKENURL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.tokenUrl</code> attribute.
	 * @return the tokenUrl - URL for getting the token
	 */
	public String getTokenUrl(final OpenIDClientDetails item)
	{
		return getTokenUrl( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.tokenUrl</code> attribute. 
	 * @param value the tokenUrl - URL for getting the token
	 */
	public void setTokenUrl(final SessionContext ctx, final OpenIDClientDetails item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.TOKENURL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.tokenUrl</code> attribute. 
	 * @param value the tokenUrl - URL for getting the token
	 */
	public void setTokenUrl(final OpenIDClientDetails item, final String value)
	{
		setTokenUrl( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.toRelation</code> attribute.
	 * @return the toRelation
	 */
	public List<PrincipalRelation> getToRelation(final SessionContext ctx, final Principal item)
	{
		final List<PrincipalRelation> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			"PrincipalRelation",
			null,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true)
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Principal.toRelation</code> attribute.
	 * @return the toRelation
	 */
	public List<PrincipalRelation> getToRelation(final Principal item)
	{
		return getToRelation( getSession().getSessionContext(), item );
	}
	
	public long getToRelationCount(final SessionContext ctx, final Principal item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			"PrincipalRelation",
			null
		);
	}
	
	public long getToRelationCount(final Principal item)
	{
		return getToRelationCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.toRelation</code> attribute. 
	 * @param value the toRelation
	 */
	public void setToRelation(final SessionContext ctx, final Principal item, final List<PrincipalRelation> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Principal.toRelation</code> attribute. 
	 * @param value the toRelation
	 */
	public void setToRelation(final Principal item, final List<PrincipalRelation> value)
	{
		setToRelation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to toRelation. 
	 * @param value the item to add to toRelation
	 */
	public void addToToRelation(final SessionContext ctx, final Principal item, final PrincipalRelation value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to toRelation. 
	 * @param value the item to add to toRelation
	 */
	public void addToToRelation(final Principal item, final PrincipalRelation value)
	{
		addToToRelation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from toRelation. 
	 * @param value the item to remove from toRelation
	 */
	public void removeFromToRelation(final SessionContext ctx, final Principal item, final PrincipalRelation value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.PRINCIPAL2PRINCIPALTARGETRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_SRC_ORDERED, true),
			Utilities.getRelationOrderingOverride(PRINCIPAL2PRINCIPALTARGETRELATION_TGT_ORDERED, true),
			Utilities.getMarkModifiedOverride(PRINCIPAL2PRINCIPALTARGETRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from toRelation. 
	 * @param value the item to remove from toRelation
	 */
	public void removeFromToRelation(final Principal item, final PrincipalRelation value)
	{
		removeFromToRelation( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalListPrice</code> attribute.
	 * @return the totalListPrice
	 */
	public Double getTotalListPrice(final SessionContext ctx, final AbstractOrder item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.TOTALLISTPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalListPrice</code> attribute.
	 * @return the totalListPrice
	 */
	public Double getTotalListPrice(final AbstractOrder item)
	{
		return getTotalListPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalListPrice</code> attribute. 
	 * @return the totalListPrice
	 */
	public double getTotalListPriceAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Double value = getTotalListPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalListPrice</code> attribute. 
	 * @return the totalListPrice
	 */
	public double getTotalListPriceAsPrimitive(final AbstractOrder item)
	{
		return getTotalListPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalListPrice</code> attribute. 
	 * @param value the totalListPrice
	 */
	public void setTotalListPrice(final SessionContext ctx, final AbstractOrder item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.TOTALLISTPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalListPrice</code> attribute. 
	 * @param value the totalListPrice
	 */
	public void setTotalListPrice(final AbstractOrder item, final Double value)
	{
		setTotalListPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalListPrice</code> attribute. 
	 * @param value the totalListPrice
	 */
	public void setTotalListPrice(final SessionContext ctx, final AbstractOrder item, final double value)
	{
		setTotalListPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalListPrice</code> attribute. 
	 * @param value the totalListPrice
	 */
	public void setTotalListPrice(final AbstractOrder item, final double value)
	{
		setTotalListPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalReturnPrice</code> attribute.
	 * @return the totalReturnPrice
	 */
	public Double getTotalReturnPrice(final SessionContext ctx, final AbstractOrder item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.TOTALRETURNPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalReturnPrice</code> attribute.
	 * @return the totalReturnPrice
	 */
	public Double getTotalReturnPrice(final AbstractOrder item)
	{
		return getTotalReturnPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalReturnPrice</code> attribute. 
	 * @return the totalReturnPrice
	 */
	public double getTotalReturnPriceAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Double value = getTotalReturnPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.totalReturnPrice</code> attribute. 
	 * @return the totalReturnPrice
	 */
	public double getTotalReturnPriceAsPrimitive(final AbstractOrder item)
	{
		return getTotalReturnPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final SessionContext ctx, final AbstractOrder item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.TOTALRETURNPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final AbstractOrder item, final Double value)
	{
		setTotalReturnPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final SessionContext ctx, final AbstractOrder item, final double value)
	{
		setTotalReturnPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final AbstractOrder item, final double value)
	{
		setTotalReturnPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute.
	 * @return the totalReturnPrice
	 */
	public Double getTotalReturnPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.TOTALRETURNPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute.
	 * @return the totalReturnPrice
	 */
	public Double getTotalReturnPrice(final AbstractOrderEntry item)
	{
		return getTotalReturnPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute. 
	 * @return the totalReturnPrice
	 */
	public double getTotalReturnPriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getTotalReturnPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute. 
	 * @return the totalReturnPrice
	 */
	public double getTotalReturnPriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getTotalReturnPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.TOTALRETURNPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final AbstractOrderEntry item, final Double value)
	{
		setTotalReturnPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setTotalReturnPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.totalReturnPrice</code> attribute. 
	 * @param value the totalReturnPrice
	 */
	public void setTotalReturnPrice(final AbstractOrderEntry item, final double value)
	{
		setTotalReturnPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.type</code> attribute.
	 * @return the type - Type of Price
	 */
	public String getType(final SessionContext ctx, final PriceRow item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.PriceRow.TYPE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>PriceRow.type</code> attribute.
	 * @return the type - Type of Price
	 */
	public String getType(final PriceRow item)
	{
		return getType( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.type</code> attribute. 
	 * @param value the type - Type of Price
	 */
	public void setType(final SessionContext ctx, final PriceRow item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.PriceRow.TYPE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>PriceRow.type</code> attribute. 
	 * @param value the type - Type of Price
	 */
	public void setType(final PriceRow item, final String value)
	{
		setType( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.unitPrice</code> attribute.
	 * @return the unitPrice
	 */
	public Double getUnitPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.UNITPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.unitPrice</code> attribute.
	 * @return the unitPrice
	 */
	public Double getUnitPrice(final AbstractOrderEntry item)
	{
		return getUnitPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.unitPrice</code> attribute. 
	 * @return the unitPrice
	 */
	public double getUnitPriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getUnitPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.unitPrice</code> attribute. 
	 * @return the unitPrice
	 */
	public double getUnitPriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getUnitPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.unitPrice</code> attribute. 
	 * @param value the unitPrice
	 */
	public void setUnitPrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.UNITPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.unitPrice</code> attribute. 
	 * @param value the unitPrice
	 */
	public void setUnitPrice(final AbstractOrderEntry item, final Double value)
	{
		setUnitPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.unitPrice</code> attribute. 
	 * @param value the unitPrice
	 */
	public void setUnitPrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setUnitPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.unitPrice</code> attribute. 
	 * @param value the unitPrice
	 */
	public void setUnitPrice(final AbstractOrderEntry item, final double value)
	{
		setUnitPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>UserProfile.User</code> attribute.
	 * @return the User
	 */
	public User getUser(final SessionContext ctx, final UserProfile item)
	{
		return (User)item.getProperty( ctx, BhgeCoreConstants.Attributes.UserProfile.USER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>UserProfile.User</code> attribute.
	 * @return the User
	 */
	public User getUser(final UserProfile item)
	{
		return getUser( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>UserProfile.User</code> attribute. 
	 * @param value the User
	 */
	public void setUser(final SessionContext ctx, final UserProfile item, final User value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.UserProfile.USER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>UserProfile.User</code> attribute. 
	 * @param value the User
	 */
	public void setUser(final UserProfile item, final User value)
	{
		setUser( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.userComments</code> attribute.
	 * @return the userComments
	 */
	public String getUserComments(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.USERCOMMENTS);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.userComments</code> attribute.
	 * @return the userComments
	 */
	public String getUserComments(final AbstractOrder item)
	{
		return getUserComments( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.userComments</code> attribute. 
	 * @param value the userComments
	 */
	public void setUserComments(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.USERCOMMENTS,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.userComments</code> attribute. 
	 * @param value the userComments
	 */
	public void setUserComments(final AbstractOrder item, final String value)
	{
		setUserComments( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.userName</code> attribute.
	 * @return the userName
	 */
	public String getUserName(final SessionContext ctx, final Quote item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.Quote.USERNAME);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>Quote.userName</code> attribute.
	 * @return the userName
	 */
	public String getUserName(final Quote item)
	{
		return getUserName( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.userName</code> attribute. 
	 * @param value the userName
	 */
	public void setUserName(final SessionContext ctx, final Quote item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.Quote.USERNAME,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>Quote.userName</code> attribute. 
	 * @param value the userName
	 */
	public void setUserName(final Quote item, final String value)
	{
		setUserName( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.UserProfiles</code> attribute.
	 * @return the UserProfiles
	 */
	public List<UserProfile> getUserProfiles(final SessionContext ctx, final User item)
	{
		return (List<UserProfile>)USER2USERPROFILERELATIONUSERPROFILESHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.UserProfiles</code> attribute.
	 * @return the UserProfiles
	 */
	public List<UserProfile> getUserProfiles(final User item)
	{
		return getUserProfiles( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.UserProfiles</code> attribute. 
	 * @param value the UserProfiles
	 */
	public void setUserProfiles(final SessionContext ctx, final User item, final List<UserProfile> value)
	{
		USER2USERPROFILERELATIONUSERPROFILESHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.UserProfiles</code> attribute. 
	 * @param value the UserProfiles
	 */
	public void setUserProfiles(final User item, final List<UserProfile> value)
	{
		setUserProfiles( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to UserProfiles. 
	 * @param value the item to add to UserProfiles
	 */
	public void addToUserProfiles(final SessionContext ctx, final User item, final UserProfile value)
	{
		USER2USERPROFILERELATIONUSERPROFILESHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to UserProfiles. 
	 * @param value the item to add to UserProfiles
	 */
	public void addToUserProfiles(final User item, final UserProfile value)
	{
		addToUserProfiles( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from UserProfiles. 
	 * @param value the item to remove from UserProfiles
	 */
	public void removeFromUserProfiles(final SessionContext ctx, final User item, final UserProfile value)
	{
		USER2USERPROFILERELATIONUSERPROFILESHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from UserProfiles. 
	 * @param value the item to remove from UserProfiles
	 */
	public void removeFromUserProfiles(final User item, final UserProfile value)
	{
		removeFromUserProfiles( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.userProfileUrl</code> attribute.
	 * @return the userProfileUrl - URL for accessing UserProfile
	 */
	public String getUserProfileUrl(final SessionContext ctx, final OpenIDClientDetails item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.USERPROFILEURL);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>OpenIDClientDetails.userProfileUrl</code> attribute.
	 * @return the userProfileUrl - URL for accessing UserProfile
	 */
	public String getUserProfileUrl(final OpenIDClientDetails item)
	{
		return getUserProfileUrl( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.userProfileUrl</code> attribute. 
	 * @param value the userProfileUrl - URL for accessing UserProfile
	 */
	public void setUserProfileUrl(final SessionContext ctx, final OpenIDClientDetails item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.OpenIDClientDetails.USERPROFILEURL,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>OpenIDClientDetails.userProfileUrl</code> attribute. 
	 * @param value the userProfileUrl - URL for accessing UserProfile
	 */
	public void setUserProfileUrl(final OpenIDClientDetails item, final String value)
	{
		setUserProfileUrl( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.usTaxExempId</code> attribute.
	 * @return the usTaxExempId
	 */
	public String getUsTaxExempId(final SessionContext ctx, final AbstractOrder item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.USTAXEXEMPID);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.usTaxExempId</code> attribute.
	 * @return the usTaxExempId
	 */
	public String getUsTaxExempId(final AbstractOrder item)
	{
		return getUsTaxExempId( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.usTaxExempId</code> attribute. 
	 * @param value the usTaxExempId
	 */
	public void setUsTaxExempId(final SessionContext ctx, final AbstractOrder item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.USTAXEXEMPID,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.usTaxExempId</code> attribute. 
	 * @param value the usTaxExempId
	 */
	public void setUsTaxExempId(final AbstractOrder item, final String value)
	{
		setUsTaxExempId( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.usTaxExempt</code> attribute.
	 * @return the usTaxExempt - Expedite Request
	 */
	public Boolean isUsTaxExempt(final SessionContext ctx, final AbstractOrder item)
	{
		return (Boolean)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.USTAXEXEMPT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.usTaxExempt</code> attribute.
	 * @return the usTaxExempt - Expedite Request
	 */
	public Boolean isUsTaxExempt(final AbstractOrder item)
	{
		return isUsTaxExempt( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.usTaxExempt</code> attribute. 
	 * @return the usTaxExempt - Expedite Request
	 */
	public boolean isUsTaxExemptAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Boolean value = isUsTaxExempt( ctx,item );
		return value != null ? value.booleanValue() : false;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.usTaxExempt</code> attribute. 
	 * @return the usTaxExempt - Expedite Request
	 */
	public boolean isUsTaxExemptAsPrimitive(final AbstractOrder item)
	{
		return isUsTaxExemptAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.usTaxExempt</code> attribute. 
	 * @param value the usTaxExempt - Expedite Request
	 */
	public void setUsTaxExempt(final SessionContext ctx, final AbstractOrder item, final Boolean value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.USTAXEXEMPT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.usTaxExempt</code> attribute. 
	 * @param value the usTaxExempt - Expedite Request
	 */
	public void setUsTaxExempt(final AbstractOrder item, final Boolean value)
	{
		setUsTaxExempt( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.usTaxExempt</code> attribute. 
	 * @param value the usTaxExempt - Expedite Request
	 */
	public void setUsTaxExempt(final SessionContext ctx, final AbstractOrder item, final boolean value)
	{
		setUsTaxExempt( ctx, item, Boolean.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.usTaxExempt</code> attribute. 
	 * @param value the usTaxExempt - Expedite Request
	 */
	public void setUsTaxExempt(final AbstractOrder item, final boolean value)
	{
		setUsTaxExempt( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.variantFactors</code> attribute.
	 * @return the variantFactors
	 */
	public List<BHGEVariantFactor> getVariantFactors(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (List<BHGEVariantFactor>)ABSTRACTORDERENTRY2VARIANTFACTORRELATIONVARIANTFACTORSHANDLER.getValues( ctx, item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.variantFactors</code> attribute.
	 * @return the variantFactors
	 */
	public List<BHGEVariantFactor> getVariantFactors(final AbstractOrderEntry item)
	{
		return getVariantFactors( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.variantFactors</code> attribute. 
	 * @param value the variantFactors
	 */
	public void setVariantFactors(final SessionContext ctx, final AbstractOrderEntry item, final List<BHGEVariantFactor> value)
	{
		ABSTRACTORDERENTRY2VARIANTFACTORRELATIONVARIANTFACTORSHANDLER.setValues( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.variantFactors</code> attribute. 
	 * @param value the variantFactors
	 */
	public void setVariantFactors(final AbstractOrderEntry item, final List<BHGEVariantFactor> value)
	{
		setVariantFactors( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to variantFactors. 
	 * @param value the item to add to variantFactors
	 */
	public void addToVariantFactors(final SessionContext ctx, final AbstractOrderEntry item, final BHGEVariantFactor value)
	{
		ABSTRACTORDERENTRY2VARIANTFACTORRELATIONVARIANTFACTORSHANDLER.addValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to variantFactors. 
	 * @param value the item to add to variantFactors
	 */
	public void addToVariantFactors(final AbstractOrderEntry item, final BHGEVariantFactor value)
	{
		addToVariantFactors( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from variantFactors. 
	 * @param value the item to remove from variantFactors
	 */
	public void removeFromVariantFactors(final SessionContext ctx, final AbstractOrderEntry item, final BHGEVariantFactor value)
	{
		ABSTRACTORDERENTRY2VARIANTFACTORRELATIONVARIANTFACTORSHANDLER.removeValue( ctx, item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from variantFactors. 
	 * @param value the item to remove from variantFactors
	 */
	public void removeFromVariantFactors(final AbstractOrderEntry item, final BHGEVariantFactor value)
	{
		removeFromVariantFactors( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.vcFullyConfigurepartNumber</code> attribute.
	 * @return the vcFullyConfigurepartNumber - Fully Configure Part Number
	 */
	public String getVcFullyConfigurepartNumber(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.VCFULLYCONFIGUREPARTNUMBER);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.vcFullyConfigurepartNumber</code> attribute.
	 * @return the vcFullyConfigurepartNumber - Fully Configure Part Number
	 */
	public String getVcFullyConfigurepartNumber(final AbstractOrderEntry item)
	{
		return getVcFullyConfigurepartNumber( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.vcFullyConfigurepartNumber</code> attribute. 
	 * @param value the vcFullyConfigurepartNumber - Fully Configure Part Number
	 */
	public void setVcFullyConfigurepartNumber(final SessionContext ctx, final AbstractOrderEntry item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.VCFULLYCONFIGUREPARTNUMBER,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.vcFullyConfigurepartNumber</code> attribute. 
	 * @param value the vcFullyConfigurepartNumber - Fully Configure Part Number
	 */
	public void setVcFullyConfigurepartNumber(final AbstractOrderEntry item, final String value)
	{
		setVcFullyConfigurepartNumber( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute.
	 * @return the vcOptionsPrice
	 */
	public Double getVcOptionsPrice(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.VCOPTIONSPRICE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute.
	 * @return the vcOptionsPrice
	 */
	public Double getVcOptionsPrice(final AbstractOrderEntry item)
	{
		return getVcOptionsPrice( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute. 
	 * @return the vcOptionsPrice
	 */
	public double getVcOptionsPriceAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getVcOptionsPrice( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute. 
	 * @return the vcOptionsPrice
	 */
	public double getVcOptionsPriceAsPrimitive(final AbstractOrderEntry item)
	{
		return getVcOptionsPriceAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute. 
	 * @param value the vcOptionsPrice
	 */
	public void setVcOptionsPrice(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.VCOPTIONSPRICE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute. 
	 * @param value the vcOptionsPrice
	 */
	public void setVcOptionsPrice(final AbstractOrderEntry item, final Double value)
	{
		setVcOptionsPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute. 
	 * @param value the vcOptionsPrice
	 */
	public void setVcOptionsPrice(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setVcOptionsPrice( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.vcOptionsPrice</code> attribute. 
	 * @param value the vcOptionsPrice
	 */
	public void setVcOptionsPrice(final AbstractOrderEntry item, final double value)
	{
		setVcOptionsPrice( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.visibleCategories</code> attribute.
	 * @return the visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public Collection<Category> getVisibleCategories(final SessionContext ctx, final B2BUnit item)
	{
		final List<Category> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			"Category",
			null,
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>B2BUnit.visibleCategories</code> attribute.
	 * @return the visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public Collection<Category> getVisibleCategories(final B2BUnit item)
	{
		return getVisibleCategories( getSession().getSessionContext(), item );
	}
	
	public long getVisibleCategoriesCount(final SessionContext ctx, final B2BUnit item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			"Category",
			null
		);
	}
	
	public long getVisibleCategoriesCount(final B2BUnit item)
	{
		return getVisibleCategoriesCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.visibleCategories</code> attribute. 
	 * @param value the visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public void setVisibleCategories(final SessionContext ctx, final B2BUnit item, final Collection<Category> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(B2BUNIT2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>B2BUnit.visibleCategories</code> attribute. 
	 * @param value the visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public void setVisibleCategories(final B2BUnit item, final Collection<Category> value)
	{
		setVisibleCategories( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to visibleCategories. 
	 * @param value the item to add to visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public void addToVisibleCategories(final SessionContext ctx, final B2BUnit item, final Category value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(B2BUNIT2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to visibleCategories. 
	 * @param value the item to add to visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public void addToVisibleCategories(final B2BUnit item, final Category value)
	{
		addToVisibleCategories( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from visibleCategories. 
	 * @param value the item to remove from visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public void removeFromVisibleCategories(final SessionContext ctx, final B2BUnit item, final Category value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.B2BUNIT2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(B2BUNIT2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(B2BUNIT2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from visibleCategories. 
	 * @param value the item to remove from visibleCategories - catalog categories which are visible for this b2b unit
	 */
	public void removeFromVisibleCategories(final B2BUnit item, final Category value)
	{
		removeFromVisibleCategories( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.visibleCategories</code> attribute.
	 * @return the visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public Collection<Category> getVisibleCategories(final SessionContext ctx, final SAPSalesOrganization item)
	{
		final List<Category> items = item.getLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			"Category",
			null,
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false
		);
		return items;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPSalesOrganization.visibleCategories</code> attribute.
	 * @return the visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public Collection<Category> getVisibleCategories(final SAPSalesOrganization item)
	{
		return getVisibleCategories( getSession().getSessionContext(), item );
	}
	
	public long getVisibleCategoriesCount(final SessionContext ctx, final SAPSalesOrganization item)
	{
		return item.getLinkedItemsCount(
			ctx,
			false,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			"Category",
			null
		);
	}
	
	public long getVisibleCategoriesCount(final SAPSalesOrganization item)
	{
		return getVisibleCategoriesCount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.visibleCategories</code> attribute. 
	 * @param value the visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public void setVisibleCategories(final SessionContext ctx, final SAPSalesOrganization item, final Collection<Category> value)
	{
		item.setLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			null,
			value,
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPSalesOrganization.visibleCategories</code> attribute. 
	 * @param value the visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public void setVisibleCategories(final SAPSalesOrganization item, final Collection<Category> value)
	{
		setVisibleCategories( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to visibleCategories. 
	 * @param value the item to add to visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public void addToVisibleCategories(final SessionContext ctx, final SAPSalesOrganization item, final Category value)
	{
		item.addLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Adds <code>value</code> to visibleCategories. 
	 * @param value the item to add to visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public void addToVisibleCategories(final SAPSalesOrganization item, final Category value)
	{
		addToVisibleCategories( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from visibleCategories. 
	 * @param value the item to remove from visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public void removeFromVisibleCategories(final SessionContext ctx, final SAPSalesOrganization item, final Category value)
	{
		item.removeLinkedItems( 
			ctx,
			false,
			BhgeCoreConstants.Relations.SAPSALESCONFIG2CATEGORYRELATION,
			null,
			Collections.singletonList(value),
			Utilities.getRelationOrderingOverride(SAPSALESCONFIG2CATEGORYRELATION_SRC_ORDERED, true),
			false,
			Utilities.getMarkModifiedOverride(SAPSALESCONFIG2CATEGORYRELATION_MARKMODIFIED)
		);
	}
	
	/**
	 * <i>Generated method</i> - Removes <code>value</code> from visibleCategories. 
	 * @param value the item to remove from visibleCategories - Catalog categories which are visible for this SAPSalesOrganization
	 */
	public void removeFromVisibleCategories(final SAPSalesOrganization item, final Category value)
	{
		removeFromVisibleCategories( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.voucherCode</code> attribute.
	 * @return the voucherCode
	 */
	public String getVoucherCode(final SessionContext ctx, final SAPCpiOutboundOrderItem item)
	{
		return (String)item.getProperty( ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.VOUCHERCODE);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>SAPCpiOutboundOrderItem.voucherCode</code> attribute.
	 * @return the voucherCode
	 */
	public String getVoucherCode(final SAPCpiOutboundOrderItem item)
	{
		return getVoucherCode( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.voucherCode</code> attribute. 
	 * @param value the voucherCode
	 */
	public void setVoucherCode(final SessionContext ctx, final SAPCpiOutboundOrderItem item, final String value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.SAPCpiOutboundOrderItem.VOUCHERCODE,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>SAPCpiOutboundOrderItem.voucherCode</code> attribute. 
	 * @param value the voucherCode
	 */
	public void setVoucherCode(final SAPCpiOutboundOrderItem item, final String value)
	{
		setVoucherCode( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.w9TaxExemptionForm</code> attribute.
	 * @return the w9TaxExemptionForm
	 */
	public Media getW9TaxExemptionForm(final SessionContext ctx, final User item)
	{
		return (Media)item.getProperty( ctx, BhgeCoreConstants.Attributes.User.W9TAXEXEMPTIONFORM);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>User.w9TaxExemptionForm</code> attribute.
	 * @return the w9TaxExemptionForm
	 */
	public Media getW9TaxExemptionForm(final User item)
	{
		return getW9TaxExemptionForm( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.w9TaxExemptionForm</code> attribute. 
	 * @param value the w9TaxExemptionForm
	 */
	public void setW9TaxExemptionForm(final SessionContext ctx, final User item, final Media value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.User.W9TAXEXEMPTIONFORM,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>User.w9TaxExemptionForm</code> attribute. 
	 * @param value the w9TaxExemptionForm
	 */
	public void setW9TaxExemptionForm(final User item, final Media value)
	{
		setW9TaxExemptionForm( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.yourPriceDiscount</code> attribute.
	 * @return the yourPriceDiscount
	 */
	public Double getYourPriceDiscount(final SessionContext ctx, final AbstractOrder item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrder.YOURPRICEDISCOUNT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.yourPriceDiscount</code> attribute.
	 * @return the yourPriceDiscount
	 */
	public Double getYourPriceDiscount(final AbstractOrder item)
	{
		return getYourPriceDiscount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.yourPriceDiscount</code> attribute. 
	 * @return the yourPriceDiscount
	 */
	public double getYourPriceDiscountAsPrimitive(final SessionContext ctx, final AbstractOrder item)
	{
		Double value = getYourPriceDiscount( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrder.yourPriceDiscount</code> attribute. 
	 * @return the yourPriceDiscount
	 */
	public double getYourPriceDiscountAsPrimitive(final AbstractOrder item)
	{
		return getYourPriceDiscountAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final SessionContext ctx, final AbstractOrder item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrder.YOURPRICEDISCOUNT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final AbstractOrder item, final Double value)
	{
		setYourPriceDiscount( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final SessionContext ctx, final AbstractOrder item, final double value)
	{
		setYourPriceDiscount( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrder.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final AbstractOrder item, final double value)
	{
		setYourPriceDiscount( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute.
	 * @return the yourPriceDiscount
	 */
	public Double getYourPriceDiscount(final SessionContext ctx, final AbstractOrderEntry item)
	{
		return (Double)item.getProperty( ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.YOURPRICEDISCOUNT);
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute.
	 * @return the yourPriceDiscount
	 */
	public Double getYourPriceDiscount(final AbstractOrderEntry item)
	{
		return getYourPriceDiscount( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute. 
	 * @return the yourPriceDiscount
	 */
	public double getYourPriceDiscountAsPrimitive(final SessionContext ctx, final AbstractOrderEntry item)
	{
		Double value = getYourPriceDiscount( ctx,item );
		return value != null ? value.doubleValue() : 0.0d;
	}
	
	/**
	 * <i>Generated method</i> - Getter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute. 
	 * @return the yourPriceDiscount
	 */
	public double getYourPriceDiscountAsPrimitive(final AbstractOrderEntry item)
	{
		return getYourPriceDiscountAsPrimitive( getSession().getSessionContext(), item );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final SessionContext ctx, final AbstractOrderEntry item, final Double value)
	{
		item.setProperty(ctx, BhgeCoreConstants.Attributes.AbstractOrderEntry.YOURPRICEDISCOUNT,value);
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final AbstractOrderEntry item, final Double value)
	{
		setYourPriceDiscount( getSession().getSessionContext(), item, value );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final SessionContext ctx, final AbstractOrderEntry item, final double value)
	{
		setYourPriceDiscount( ctx, item, Double.valueOf( value ) );
	}
	
	/**
	 * <i>Generated method</i> - Setter of the <code>AbstractOrderEntry.yourPriceDiscount</code> attribute. 
	 * @param value the yourPriceDiscount
	 */
	public void setYourPriceDiscount(final AbstractOrderEntry item, final double value)
	{
		setYourPriceDiscount( getSession().getSessionContext(), item, value );
	}
	
}
