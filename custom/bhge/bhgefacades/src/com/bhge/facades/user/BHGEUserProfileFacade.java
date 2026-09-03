/**
 *
 */
package com.bhge.facades.user;

import com.bh.occ.dto.user.UserDetailDTO;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.facades.data.BhgeSalesAreaObjectData;
import com.bhge.facades.user.data.*;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.AddressModel;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;


public interface BHGEUserProfileFacade
{

	public BHGECustomerData getUserProfile(String uid);

	public void updateUserProfile(BHGECustomerData bhgecustomerData);

	public List<BHGESoldTo> findSoldTo(String text);

	public List<AddressData> getAddress(String zipCode);

	public Set<B2BUnitModel> getSoldToList();

	public B2BUnitModel findChildB2BUnitModel(String uid);

	public List<B2BUnitModel> getAllChildB2BUnitModel(String uid);

	String getSessionUserName();

	String getSessionUsersso();

	public SearchPageData<AddressData> getAddress(GetAddressFormData data);

	public Set<B2BUnitModel> getSoldToListForUser();

	public Set<B2BUnitModel> getSalesAreaForSoldTo(String soldToId, GEEdgeCustomerModel user);

	//Search sold to for search
	public List<B2BUnitData> getSoldTosforSearch(final String text);

	public SearchPageData<B2BUnitData> getSoldTosforSearch(final String text, final PageableData pageableData);

	public List<B2BUnitData> getFavoriteSoldTosforSearch();

	public boolean addFavoriteSoldTo(B2BUnitModel favoriteSoldTo);

	public boolean removeFavoriteSoldTo(String favoriteSoldTo);

	//
	public boolean updateUserSoldToSalesArea(String soldTo, String salesArea);
	
	public BHGECustomerData updateSoldToSalesArea(String soldTo, String salesArea);

	public String getUserDefaultSalesRegion();

	public B2BUnitModel setDefaultSalesAreaToSession(String soldToUid);

	SearchPageData<AddressData> getAddressForSalesArea(GetAddressFormData data, final boolean accountPageFlag, boolean isShipto);

	public List<ContactUsSettingsData> getContactUsForSoldTo(String baseStoreId, String soldToId, String supportType,
			String orderNum, String orderType, String orderCommerceType);

	public List<List<ContactUsSettingsData>> getContactUsListForUser();

	public List<List<ContactUsSettingsData>> getContactUsListForSoldTo();

	public Set<B2BUnitModel> getSoldToListForContactus();

	public List<BHGECurrencyFormatData> getCurrencyFormats();

	public AddressData getSoldToAddress(final String childSoldToName);
	
	public AddressModel getSoldToAddressforWS(final String childSoldToName);

	public AddressModel getShipToAddressforWS(final String childSoldToName);

	public AddressData findSoldToAddress(final String childSoldToName);

	public AddressData findSoldToAddressForSearchPop(B2BUnitModel soldTo);

	public AddressData getDefaultShipto(final String defaultShiptoUID, final String defaultSoldToChild);
	
	public AddressModel getDefaultShiptoforWS(final String defaultShiptoUID, final String defaultSoldToChild);

	public List<RegionData> getRegionsForCountryCode(final String countryCode);

	public AddressData getDefaultSoldTo();

	public Map getFavoriteSoldToMap(final GEEdgeCustomerModel bhgeUser);

	public boolean uploadMediatoSoldto(final MultipartFile file, final String soldtoUid);

	public boolean removeMediaofSoldto(final String soldtoUid);

	/**
	 * Fetch list of addresses based on session customer account and sap customer ID
	 *
	 * @param form
	 * @return
	 */
	public List<AddressModel> getAddressesForCurrentCustomerAccountAndSAPCustomerID(GetAddressFormData form);

	/**
	 * Returns country to b2bunit mapping data instance
	 *
	 * @return
	 */
	public BHGEAnonymousUserCatalogData getCountryToUnitMappingForAnonymousUser(CountryModel defaultCountryModel);
	
	public BHGEAnonymousUserCatalogModel getCountryandSalesOrgMappingForAnonymousUser(String salesOrg, String distributionChannel, String division, 
			CountryModel defaultCountryModel);

	public BHGECategorytoSalesOrgModel getSalesOrgToCategoryMappingForAnonymousUser(final String categoryCode);
	
	public List<BHGECategorytoSalesOrgModel> getAllSalesOrgToCategoryForAnonymousUser();
	
	public List<RegionData> getRegionsForCountryIso(final String countryIso);
	
	public void populateSoldToSelectionData(Model model, final HttpServletRequest request);

	public List<List<ContactUsSettingsData>> getStaticContactUs();

	public List<List<ContactUsSettingsData>> getContactUsListForCustomer(GEEdgeCustomerModel user);

	public List getContactUsForRegionAndCommerceTypeValue(final OrderModel soldToForCart,
														  final String orderNum, final String orderType, final String orderCommerceType);

	public AddressData getDefaultShipToAddressFromSoldTo(String defaultB2BUnitUid);
	
	public List<B2BUnitData> getCustomerB2Buntis();
	
	public BHGECustomerData getCurrentCustomer();

	public List<BhgeSalesAreaObjectData> getSalesOrgforGuestUser(final String salesOrgId);
	
	public BhgeSalesAreaObjectData getGuestSalesOrgforCategory(final String categoryCode);
	
	public BhgeSalesAreaObjectData getGuestSalesOrgforProduct(final String productCode);

	public AddressData getDefaultSoldToFromCurrentUser();
	
	public void updateUserProfileWs(BHGECustomerData bhgeCustomerData);
	
	//added new method for occ call
	List<AddressData> getAddressForSalesAreaWs(GetAddressFormData data, boolean accountPageFlag, Boolean isShipTo);
	
	public AddressData getPayerAddressFromCurrentUser();
	
	public AddressData getBillToAddressFromCurrentUser();
	
	SearchPageData<AddressData> getPayerAddressForSalesArea(GetAddressFormData data, final boolean accountPageFlag);
	
	SearchPageData<AddressData> getBillToAddressForSalesArea(GetAddressFormData data, final boolean accountPageFlag);

	List<AddressData> getPayerAddressForSalesAreaWs(GetAddressFormData data, boolean accountPageFlag);
	
	List<AddressData> getBillToAddressForSalesAreaWs(GetAddressFormData data, boolean accountPageFlag);

	List<B2BUnitData> getAllSoldTosforSearch();

	public Collection<CategoryModel> fetchCategoriesFromSalesOrg(B2BUnitModel b2BUnitModel);

	Collection<BHGEApprovalDetailsModel> fetchProductLinesForCSRAccess(String userID);

	B2BUnitModel getParentB2bUnitModel(B2BUnitModel b2BUnitModel);

	String getRegionValue(AddressData addressData);

	String getUserType();

    void updateProductLine(String productLine);

	void setProductLine(List<String> visibleCategories);

	List<UserDetailDTO> fetchAllUserDetails();

	//void removeAllRolesFromUser(GEEdgeCustomerModel customer);

	public GEEdgeCustomerModel findCurrentUserProfile(String uid);

	List<String> getAllUserGroupRoles();

    Boolean getAPACstatusforSalesOrg();

    AddressData getDefaultShipToforAPAC(Boolean apacSalesOrg, GEEdgeCustomerModel currentUser, BHGESoldToData defaultSoldTo1);
}


