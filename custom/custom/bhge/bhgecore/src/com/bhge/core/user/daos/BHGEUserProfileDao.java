/**
 *
 */
package com.bhge.core.user.daos;

import com.bhge.core.model.*;
import com.hybris.ge.edge.core.model.type.BHGECustomerClassificationModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;

import java.util.List;
import java.util.Map;

import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.model.ContactusSettingsModel;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.GetAddressFormData;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;

public interface BHGEUserProfileDao
{

	public List<B2BUnitModel> findSoldTo(String text, String soldtos);

	public List<GEEdgeCustomerModel> findCurrentUserProfile(String uid);

	//
	public List<AddressModel> getAddress(String zipCode);

	//
	//	public EmployeeModel findExtenalCustomerId(String userId);
	//
	public List<B2BUnitModel> findChildB2BUnitModel(String uid);

	public List<B2BUnitModel> getAllChildB2BUnitModel(String uid);

	//
	//	B2BUnitModel getSoldToByID(String soldToID);
	//
	//	public List<RegionModel> getStateValues();
	//
	//	public RegionModel getRegion(String name);
	//
	public SearchPageData<AddressModel> getShippingAddresses(GetAddressFormData data);

	//
	//	public CountryModel getCountry(String name);
	//
	//	public List<CountryModel> getCountryForCodeOrName(String name);
	//
	public ProductModel getProductForCode(String code);

	SearchPageData<AddressModel> getShippingAddressesForMyAccountPage(GetAddressFormData form, final boolean accountPageFlag);

	//
	//	public SearchResult getExistingCartForSoldTo(UserModel user, B2BUnitModel salesArea);
	//
	//	public SearchResult hasExistingCartForSoldTo(UserModel user, B2BUnitModel salesArea);
	//
	public List<ContactusSettingsModel> getContactUsForSoldTo(String soldToId, String supportteam, String orderType,
			String orderCommerceType);

	//
	public List<ContactusSettingsModel> getContactUsFromBaseStoreUid(String basestoreid, String supportteam);

	public List<ContactusSettingsModel> getContactUsFromBaseStoreUid(String basestoreid, String supportteam,
			String orderCommerceType);

	public List<ContactusSettingsModel> getContactUsForCurrentSoldto(String basestoreid, String supportteam, String soldtoUid);
	//
	//	public List<ContactusSettingsModel> getDefaultContactUsList(String supportteam);

	public List<BHGECurrencyFormatModel> retriveAllCurrencyFormats();

	/**
	 * This method is used to retrieve list of access request models from register customer UID
	 *
	 * @param uid
	 * @return
	 */
	public List<BHGEUserAccessRequestModel> getUserAccessRequestfromRegisterCustUID(final String uid);

	public List<BHGEUserAccessRequestModel> getUserAccessRequestfromRegisterCustUID(final String uid, final String appAccessId);

	/**
	 * Retrieves register user from sso
	 *
	 * @param sso
	 * @return
	 */
	public BHGERegieterCustomerModel getRegisterCustomerModelFromSSO(final String sso);

	public BHGERegieterCustomerModel getRegisterCustomerModelFromUid(final String uid);

	public ProductModel getProductForCodeRma(String code);

	/**
	 * Fetch list of addresses based on session customer account and sap customer ID
	 *
	 * @param form
	 * @return
	 */
	List<AddressModel> getAddressesForCurrentCustomerAccountAndSAPCustomerID(GetAddressFormData form);

	/**
	 * Gets string value for visible categories for guest user
	 *
	 * @return
	 */
	String getGuestCategoriesListForUser();

	/**
	 * Gets string value for visible categories for current user
	 *
	 * @return
	 */
	String getFPTCategoriesListForUser();

	public List<BHGEUserAccessRequestModel> fetchPendingActiveUser();

	/**
	 * Returns country to b2bunit mapping instance
	 *
	 * @return
	 */
	public BHGEAnonymousUserCatalogModel getCountryToUnitMappingForAnonymousUser(CountryModel defaultCountryModel);

	public List<BHGEAnonymousUserCatalogModel> getCountryToUnitMappingListForAnonymousUser(CountryModel defaultCountryModel);

	public BHGEAnonymousUserCatalogModel getCountryandSalesOrgMappingForAnonymousUser(String salesOrg, String distributionChannel, String division, 
			CountryModel defaultCountryModel);
	public List<String> getBHGEPromotionCodes(String code);
	public BHGECategorytoSalesOrgModel getSalesOrgToCategoryMappingForAnonymousUser(final String categoryCode);

	public List<BHGECategorytoSalesOrgModel> getAllSalesOrgToCategoryForAnonymousUser();
	
	public List<RegionModel> getRegionsForCountryIso(final String countryIso);

	public List<ContactusSettingsModel> getContactUsByRegion(final String countryIsoCode);

	public List<BHStaticContactUsModel> getStaticBHContactUsList();

	public List<ContactusSettingsModel> getContactUsByRegionAndCommerceTypeValue(final String countryIsoCode, final String commerceTypeValue);
	//Added for spartacus migration
	ProductModel getProductForCodeWs(String code, BHGESoldToUtil bhgeSoldToUtil);
	
	public MediaModel findFeedbackMedia(final String attachmentCode);
	
	SearchPageData<AddressModel> getPayerAddressesForMyAccountPage(GetAddressFormData form, final boolean accountPageFlag);
	
	SearchPageData<AddressModel> getBillToAddressesForMyAccountPage(GetAddressFormData form, final boolean accountPageFlag);

    List<B2BUnitModel> getB2bUnits();

	List<BHGECustomerClassificationModel> getCustomerClassification(String code);

    List<SAPSalesOrganizationModel> getFindBySalesOrgAndCurrencyString(final String salesOrg, final String currencyCodeAsString);
}
