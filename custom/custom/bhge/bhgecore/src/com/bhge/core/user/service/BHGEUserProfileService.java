/**
 *
 */
package com.bhge.core.user.service;

import com.hybris.ge.edge.core.model.type.BHGECustomerClassificationModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.GetAddressFormData;

//import com.bhge.core.model.GEEdgeCurrencyFormatModel;
public interface BHGEUserProfileService {

    public B2BUnitModel findChildB2BUnitModel(String uid);

    public List<B2BUnitModel> getAllChildB2BUnitModel(String uid);

    public GEEdgeCustomerModel findCurrentUserProfile(String uid);

    List<B2BUnitModel> findSoldTo(String text, String soldtos);

    public List<AddressModel> getAddress(String zipCode);

    public List<RegionModel> getRegionsForCountryCode(String countryCode);

    public ProductModel getProductForCode(String code);

    public ProductModel getProductForCodeRma(String code);

    public String getUserDefaultSalesRegion();

    public List<BHGECurrencyFormatModel> getCurrencyFormats();

    public boolean uploadMediatoSoldto(final MultipartFile file, final String soldtoUid);

    public boolean removeMediaofSoldto(final String soldtoUid);

    /**
     * Fetch list of addresses based on session customer account and sap
     * customer ID
     *
     * @param form
     * @return
     */
    List<AddressModel> getAddressesForCurrentCustomerAccountAndSAPCustomerID(GetAddressFormData form);

    public boolean fetchAndSendPendingActiveUser();

    /**
     * Returns country to b2bunit mapping instance
     *
     * @return
     */
    public BHGEAnonymousUserCatalogModel getCountryToUnitMappingForAnonymousUser(CountryModel defaultCountryModel);

    public BHGEAnonymousUserCatalogModel getCountryandSalesOrgMappingForAnonymousUser(String salesOrg, String distributionChannel, String division,
            CountryModel defaultCountryModel);

    public BHGECategorytoSalesOrgModel getSalesOrgToCategoryMappingForAnonymousUser(final String categoryCode);

    public List<BHGECategorytoSalesOrgModel> getAllSalesOrgToCategoryForAnonymousUser();

    public List<RegionModel> getRegionsForCountryIso(final String countryIso);

    //Added for spartacus migration
    ProductModel getProductForCodeWs(String code, BHGESoldToUtil bhgeSoldToUtil);

    List<B2BUnitModel> getB2bUnits();

    List<BHGECustomerClassificationModel> getCustomerClassification(String code);

    List<GEEdgeCustomerModel> findAllUsers();

    List<String> getAllUserRoles();
}
