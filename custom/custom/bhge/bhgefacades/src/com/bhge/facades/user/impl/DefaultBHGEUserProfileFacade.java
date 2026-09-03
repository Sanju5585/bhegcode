/**
 *
 */
package com.bhge.facades.user.impl;

import com.bh.occ.dto.user.UserDetailDTO;
import com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO;
import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.email.dao.BHGEEmailServiceDao;
import com.bhge.core.enums.ShippingCarrierMethod;
import com.bhge.core.enums.ShippingChargeMethod;
import com.bhge.core.model.*;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.impl.BHGECartServiceImpl;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.data.BhgeSalesAreaObjectData;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.*;
import com.bhge.facades.user.populators.BHGECustomerPopulator;
import com.bhge.product.service.BHGEProductService;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.store.services.BHGEBaseStoreService;
import com.google.common.base.Stopwatch;
import com.hybris.ge.edge.core.model.type.BHGECustomerClassificationModel;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commercefacades.storesession.data.CurrencyData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.converters.Converters;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.Model;
import org.springframework.util.Assert;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNullStandardMessage;

public class DefaultBHGEUserProfileFacade implements BHGEUserProfileFacade {

    private static final Logger LOG = Logger.getLogger(DefaultBHGEUserProfileFacade.class);
    private static final String BHGE_RECENT_CUSTOMER_SIZE = "bhge.recent.customer.size";
    private static final String DEFAULT_CURRENCY_FORMAT_CODE = "en_US";
    private static final String UNDEFINED = "undefined";
    private static final String PRODUCTLINE = "productLine";
    private static final String USERGROUP = "UG_";

    @Resource
    private BHGECustomerPopulator bhgeCustomerPopulator;

    @Resource
    private BHGEUserProfileService userProfileService;

    @Resource
    private UserService userService;

    @Resource
    private ModelService modelService;

    @Resource
    private SessionService sessionService;

    @Resource(name = "bhgeSoldToUtil")
    private BHGESoldToUtil bhgeSoldToUtil;

    @Resource(name = "bhgeUserProfileDao")
    private BHGEUserProfileDao bhgeUserProfileDao;

    @Resource(name = "userProfileService")
    private BHGEUserProfileService bhgeUserProfileService;

    @Resource(name = "currencyConverter")
    private Converter<CurrencyModel, CurrencyData> currencyConverter;

    @Resource
    B2BCommerceUnitService b2bCommerceUnitService;
    @Resource(name = "addressConverter")
    private Converter<AddressModel, AddressData> addressConverter;
    @Resource(name = "regionConverter")
    private Converter<RegionModel, RegionData> regionConverter;

    @Resource(name = "b2bOrderService")
    private BHGEB2BOrderService b2bOrderService;

    @Autowired(required = true)
    private BHGEB2BUnitService bhgeB2BUnitService;

    @Resource(name = "flexibleSearchService")
    private FlexibleSearchService flexibleSearchService;

    @Resource(name = "baseStoreService")
    private BHGEBaseStoreService baseStoreService;

    @Resource(name = "commonI18NService")
    private CommonI18NService commonI18NService;

    @Resource
    private B2BUnitService b2bUnitService;

    @Resource(name = "bhgeCommerceCategoryService")
    private BHGECommerceCategoryService bhgeCommerceCategoryService;

    @Resource(name = "bhgeAnonymousCatalogConverter")
    private Converter<BHGEAnonymousUserCatalogModel, BHGEAnonymousUserCatalogData> bhgeAnonymousCatalogConverter;

    //	private Converter<GEEdgeCurrencyFormatModel, BHGECurrencyFormatData> bhgeCurrencyFormatConverter;
    private Converter<BHGECurrencyFormatModel, BHGECurrencyFormatData> bhgeCurrencyFormatConverter;

    @Resource(name = "bhgeEmailServiceDao")
    private BHGEEmailServiceDao bhgeEmailServiceDao;

    @Resource(name = "productService")
    private BHGEProductService productService;

    @Resource(name = "bhgeCartService")
    private BHGECartServiceImpl bhgeCartService;

    @Autowired
    private BHGEB2BUnitDAO bhgeB2BUnitDao;

    /**
     * @return the bhgeCurrencyFormatConverter
     */
    /* public Converter<GEEdgeCurrencyFormatModel, BHGECurrencyFormatData> getbhgeCurrencyFormatConverter() */
    public Converter<BHGECurrencyFormatModel, BHGECurrencyFormatData> getbhgeCurrencyFormatConverter() {
        return bhgeCurrencyFormatConverter;
    }

    /**
     * @param bhgeCurrencyFormatConverter the bhgeCurrencyFormatConverter to set
     */

    public void setbhgeCurrencyFormatConverter(
            /* final Converter<GEEdgeCurrencyFormatModel, BHGECurrencyFormatData> bhgeCurrencyFormatConverter) */
            final Converter<BHGECurrencyFormatModel, BHGECurrencyFormatData> bhgeCurrencyFormatConverter) {
        this.bhgeCurrencyFormatConverter = bhgeCurrencyFormatConverter;
    }

    @Override
    public Set<B2BUnitModel> getSoldToListForUser() {
        List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
        GEEdgeCustomerModel customer = null;
        if (StringUtils.equals(Config.getParameter("current.env"), "local")) {
            customer = (GEEdgeCustomerModel) userService.getUserForUID("localtest");
        } else {
            if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
                customer = (GEEdgeCustomerModel) userService.getCurrentUser();
            }
        }
        final Set<B2BUnitModel> b2bUnitModelList = new LinkedHashSet<B2BUnitModel>();
        if (null != customer && null != customer.getAllGroups()) {
            for (final PrincipalGroupModel myVal : customer.getAllGroups()) {
                if (myVal instanceof B2BUserGroupModel) {
                    if (!myVal.getUid().toString().equalsIgnoreCase("getescob2busergroup")) {
                        LOG.info("The Current group is getescob2busergroup");

                        for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups()) {
                            if (myB2b instanceof B2BUnitModel
                                    & !myB2b.getUid().equalsIgnoreCase(Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO"))
                                    && !myB2b.getUid().contains("_")
                                    && !BhgeCoreConstants.ECOMMFLAG_NE.equals(((B2BUnitModel) myB2b).getEcommerceFlag())
                                    && CustomerAccountGroups.contains(((B2BUnitModel) myB2b).getAccountGroup())) {
                                b2bUnitModelList.add((B2BUnitModel) myB2b);
                            }
                        }
                    }
                }

                if (myVal instanceof B2BUnitModel) {
                    if (!myVal.getUid().equalsIgnoreCase(Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO"))
                            && !myVal.getUid().contains("_")
                            && !BhgeCoreConstants.ECOMMFLAG_NE.equals(((B2BUnitModel) myVal).getEcommerceFlag())
                            && CustomerAccountGroups.contains(((B2BUnitModel) myVal).getAccountGroup())) {
                        b2bUnitModelList.add((B2BUnitModel) myVal);
                    }
                }
            }
        }
        return sortB2BUnitModelByName(b2bUnitModelList);
    }

    private Set<B2BUnitModel> sortB2BUnitModelByName(final Set<B2BUnitModel> b2bUnitList) {

        final List<B2BUnitModel> b2bSalesAreaListData = new ArrayList<B2BUnitModel>(b2bUnitList);

        Collections.sort(b2bSalesAreaListData, new Comparator<B2BUnitModel>() {
            @Override
            public int compare(final B2BUnitModel p1, final B2BUnitModel p2) {
                if (p1 != null && p1.getLocName() != null && p2 != null && p2.getLocName() != null) {
                    return p1.getLocName().compareToIgnoreCase(p2.getLocName());
                }
                return 0;
            }
        });

        final Set<B2BUnitModel> sortedSet = new LinkedHashSet();
        for (final B2BUnitModel b2bUnit : b2bSalesAreaListData) {
            sortedSet.add(b2bUnit);
        }

        return sortedSet;
    }

    @Override
    public Set<B2BUnitModel> getSalesAreaForSoldTo(final String soldToId, final GEEdgeCustomerModel currentUser) {
        List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
        final Set<B2BUnitModel> salesAreaList = new LinkedHashSet<B2BUnitModel>();
        if (StringUtils.isNotEmpty(soldToId) && StringUtils.isNotBlank(soldToId)) {
            final List<B2BUnitModel> b2bUnitModels = bhgeB2BUnitService.getSalesAreaForB2BUnit(soldToId);
            for (final B2BUnitModel b2bUnit : b2bUnitModels) {
                if (currentUser.getIsInternalUser() != null && currentUser.getIsInternalUser().booleanValue()) {
                    if (b2bUnit.getUid().contains(soldToId + "_") && CustomerAccountGroups.contains(b2bUnit.getAccountGroup())) {
                        salesAreaList.add(b2bUnit);
                    }
                } else {
                    if (currentUser.getGroups().contains(b2bUnit) && b2bUnit.getUid().contains(soldToId + "_")
                            && CustomerAccountGroups.contains(b2bUnit.getAccountGroup())) {
                        salesAreaList.add(b2bUnit);
                    }
                }
            }
        }

        return sortB2BUnitModelByName(salesAreaList);
    }

    @Override
    public List<B2BUnitData> getSoldTosforSearch(final String text) {
        final List<B2BUnitData> b2bUnitDatas = new ArrayList<B2BUnitData>();
        final List<B2BUnitModel> b2bUnitModels = bhgeB2BUnitService.getB2bUnitsForSearchCriteria(text);
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final Map<String, B2BUnitModel> favorites = getFavoriteSoldToMap(currentUser);
        for (final B2BUnitModel b2bUnitModel : b2bUnitModels) {
            final List<AddressData> addressList = new ArrayList<AddressData>();
            final AddressData address = findSoldToAddress(b2bUnitModel.getUid());
            if (address != null) {
                addressList.add(address);
            }
            final B2BUnitData b2bUnitData = new B2BUnitData();
            b2bUnitData.setName(b2bUnitModel.getName());
            b2bUnitData.setUid(b2bUnitModel.getUid());
            b2bUnitData.setAddresses(addressList);
            if (favorites.containsKey(b2bUnitModel.getUid())) {
                b2bUnitData.setFavorite(true);
            }
            b2bUnitDatas.add(b2bUnitData);
        }
        return b2bUnitDatas;
    }

    @Override
    public SearchPageData<B2BUnitData> getSoldTosforSearch(final String text, final PageableData pageableData) {
        List<B2BUnitData> b2bUnitDatas = new ArrayList<>();
        GEEdgeCustomerModel currentUser = null;

        if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
            currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        }

        if (currentUser != null && Boolean.TRUE.equals(currentUser.getIsInternalUser())) {
            List<B2BUnitModel> b2bUnitModels = bhgeB2BUnitService.getB2bUnitsForSearchCriteria(text, pageableData);
            Map<String, B2BUnitModel> favorites = getFavoriteSoldToMap(currentUser);
            B2BUnitModel defaultB2BUnit = currentUser.getDefaultB2BUnit();
            B2BUnitModel defaultSoldTo = currentUser.getDefaultSoldTo();
            Set<B2BUnitModel> recentSoldTos = currentUser.getRecentSoldtoTime().keySet();

            for (B2BUnitModel b2bUnitModel : b2bUnitModels) {
                List<BhgeSalesAreaObjectData> salesAreaObjDataList = new ArrayList<>();
//                for (B2BUnitModel salesArea : getSalesAreaForSoldTo(b2bUnitModel.getUid(), currentUser)) {
//                    String uid = salesArea.getUid();
//                    if (uid != null && uid.contains("_")) {
//                        String[] salesAreaArr = uid.split("_");
//                        if (salesAreaArr.length >= 3) {
//                            SAPConfigurationModel baseStoreConfiguration = baseStoreService
//                                    .findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
//                            if (baseStoreConfiguration != null) {
//                                BaseStoreModel baseStore = baseStoreService
//                                        .findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
//                                if (baseStore != null) {
//                                    BhgeSalesAreaObjectData obj = new BhgeSalesAreaObjectData();
//                                    obj.setSalesAreaName(baseStore.getName());
//                                    obj.setSalesAreaId(uid);
//                                    obj.setActive(defaultB2BUnit != null && uid.equalsIgnoreCase(defaultB2BUnit.getUid()));
//                                    salesAreaObjDataList.add(obj);
//                                }
//                            }
//                        }
//                    }
//                }

                AddressData address = findSoldToAddressForSearchPop(b2bUnitModel);
                final List<AddressData> addressList = new ArrayList<AddressData>();
                if (address != null) {
                    addressList.add(address);
                }
                B2BUnitData b2bUnitData = new B2BUnitData();
                b2bUnitData.setName(b2bUnitModel.getName());
                b2bUnitData.setUid(b2bUnitModel.getUid());
                b2bUnitData.setAddresses(addressList);
                //   b2bUnitData.setSalesAreaObjectDataList(salesAreaObjDataList);

                if (b2bUnitModel.getCurrency() != null) {
                    LOG.info("In the method getSoldTosforSearch Currency" + b2bUnitModel.getCurrency().getIsocode());
                    b2bUnitData.setCurrencyIso(b2bUnitModel.getCurrency().getIsocode());
                    b2bUnitData.setCurrencySymbol(b2bUnitModel.getCurrency().getSymbol());
                }

                if (favorites.containsKey(b2bUnitModel.getUid())) {
                    b2bUnitData.setFavorite(true);
                }

                List<MediaModel> medias = new ArrayList(b2bUnitModel.getMedias());
                if (!medias.isEmpty()) {
                    b2bUnitData.setMediaurl(medias.get(0).getURL());
                }

                if (defaultSoldTo != null && b2bUnitModel.getUid().equalsIgnoreCase(defaultSoldTo.getUid())) {
                    b2bUnitData.setActive(true);
                }

                if (recentSoldTos.contains(b2bUnitModel)) {
                    b2bUnitData.setRecent(true);
                }

                b2bUnitDatas.add(b2bUnitData);
            }
        }

        return createSearchPageData(pageableData, b2bUnitDatas);
    }

    @SuppressWarnings("deprecation")
    private SearchPageData<B2BUnitData> createSearchPageData(final PageableData pageableData, final List<B2BUnitData> b2bUnitDatas) {
        final SearchPageData<B2BUnitData> result = new SearchPageData<B2BUnitData>();

        final PaginationData paginationData = new PaginationData();

        paginationData.setPageSize(pageableData.getPageSize());
        paginationData.setSort(pageableData.getSort());
        paginationData.setTotalNumberOfResults(b2bUnitDatas.size());

        paginationData.setNumberOfPages((int) Math
                .ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

        paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
        result.setPagination(paginationData);

        int startIndex;
        int endIndex;
        if (pageableData.getCurrentPage() == 0) {
            startIndex = 0;
            endIndex = pageableData.getPageSize();
        } else {
            startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
            endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
        }

        if (b2bUnitDatas.size() <= pageableData.getPageSize()) {
            result.setResults(b2bUnitDatas);
        } else if (endIndex <= b2bUnitDatas.size()) {
            result.setResults(b2bUnitDatas.subList(startIndex, endIndex));
        } else {
            result.setResults(b2bUnitDatas.subList(startIndex, b2bUnitDatas.size()));
        }
        return result;
    }

    @Override
    public List<B2BUnitData> getFavoriteSoldTosforSearch() {
        List<B2BUnitData> b2bUnitDatas = new ArrayList<>();
        GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        Collection<CategoryModel> categoriesFromUser = currentUser.getUserAccessibleCategories();
        Boolean hasVisibleVategories = true;
        List<B2BUnitModel> b2bUnitModels = currentUser.getFavoriteSoldTos();

        B2BUnitModel defaultB2BUnit = currentUser.getDefaultB2BUnit();
        B2BUnitModel defaultSoldTo = currentUser.getDefaultSoldTo();
        Set<B2BUnitModel> recentSoldTos = currentUser.getRecentSoldtoTime().keySet();

        for (B2BUnitModel b2bUnitModel : b2bUnitModels) {
            String ecommerceFlag = b2bUnitModel.getEcommerceFlag();
            if (ecommerceFlag != null && !ecommerceFlag.equals(BhgeCoreConstants.ECOMMFLAG_NE)) {

                Set<B2BUnitModel> salesAreasList = getSalesAreaForSoldTo(b2bUnitModel.getUid(), currentUser);
                List<BhgeSalesAreaObjectData> salesAreaObjDataList = new ArrayList<>();

                for (B2BUnitModel salesArea : salesAreasList) {
                    String uid = salesArea.getUid();
                    if (uid != null && uid.contains("_")) {
                        String[] salesAreaArr = uid.split("_");
                        if (salesAreaArr.length >= 3) {
                            String salesOrg = salesAreaArr[1];
                            String distributionChannel = salesAreaArr[2];
                            String division = salesAreaArr[3];
                            Collection<CategoryModel> categoriesFromSalesOrg = bhgeB2BUnitService.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
                            if (CollectionUtils.isNotEmpty(categoriesFromSalesOrg) && CollectionUtils.isNotEmpty(categoriesFromUser)) {
                                hasVisibleVategories = categoriesFromSalesOrg.stream().
                                        anyMatch(categoriesFromUser::contains);
                            }
                            SAPConfigurationModel baseStoreConfiguration = baseStoreService
                                    .findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);

                            if (baseStoreConfiguration != null) {
                                BaseStoreModel baseStore = baseStoreService
                                        .findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());

                                if (baseStore != null) {
                                    BhgeSalesAreaObjectData obj = new BhgeSalesAreaObjectData();
                                    obj.setSalesAreaName(baseStore.getName());
                                    obj.setSalesAreaId(uid);
                                    obj.setActive(defaultB2BUnit != null && uid.equalsIgnoreCase(defaultB2BUnit.getUid()));
                                    if (hasVisibleVategories) {
                                        salesAreaObjDataList.add(obj);
                                    }
                                }
                            }
                        }
                    }
                }

                final List<AddressData> addressList = new ArrayList<AddressData>();
                final AddressData address = findSoldToAddressForSearchPop(b2bUnitModel);
                if (address != null) {
                    addressList.add(address);
                }

                B2BUnitData b2bUnitData = new B2BUnitData();
                b2bUnitData.setName(b2bUnitModel.getName());
                b2bUnitData.setUid(b2bUnitModel.getUid());
                b2bUnitData.setSalesAreaObjectDataList(salesAreaObjDataList);
                b2bUnitData.setAddresses(addressList);
                b2bUnitData.setFavorite(true);

                if (b2bUnitModel.getCurrency() != null) {
                    LOG.info("In the method getFavoriteSoldTosforSearch Currency" + b2bUnitModel.getCurrency().getIsocode());
                    b2bUnitData.setCurrencyIso(b2bUnitModel.getCurrency().getIsocode());
                    b2bUnitData.setCurrencySymbol(b2bUnitModel.getCurrency().getSymbol());
                }
                final List<MediaModel> medias = new ArrayList(b2bUnitModel.getMedias());
                if (!medias.isEmpty()) {
                    b2bUnitData.setMediaurl(medias.get(0).getURL());
                }

                if (defaultSoldTo != null && b2bUnitModel.getUid().equalsIgnoreCase(defaultSoldTo.getUid())) {
                    b2bUnitData.setActive(true);
                }

                if (recentSoldTos.contains(b2bUnitModel)) {
                    b2bUnitData.setRecent(true);
                }

                b2bUnitDatas.add(b2bUnitData);
            }
        }

        return b2bUnitDatas;
    }

    @Override
    public List<B2BUnitData> getAllSoldTosforSearch() {
        final List<B2BUnitData> b2bUnitDatas = new ArrayList<B2BUnitData>();
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        //Setting Default B2B Unit
        B2BUnitModel defaultB2bModel = currentUser.getDefaultB2BUnit();
        B2BUnitData b2bUnitData = new B2BUnitData();
        b2bUnitData.setName(defaultB2bModel.getName());
        b2bUnitData.setUid(defaultB2bModel.getUid());
        b2bUnitData.setDefaultUnit(true);
        if (null != defaultB2bModel.getCurrency()) {
            b2bUnitData.setCurrencyIso(defaultB2bModel.getCurrency().getIsocode());
            b2bUnitData.setCurrencySymbol(defaultB2bModel.getCurrency().getSymbol());
        }
        b2bUnitDatas.add(b2bUnitData);

        //Setting Favourites B2B Units
        List<B2BUnitModel> b2bUnitModels = currentUser.getFavoriteSoldTos();
        for (final B2BUnitModel b2bUnitModel : b2bUnitModels) {
            if (null != b2bUnitModel.getEcommerceFlag() && !b2bUnitModel.getEcommerceFlag().equals(BhgeCoreConstants.ECOMMFLAG_NE)) {
                final Set<B2BUnitModel> salesAreasList = getSalesAreaForSoldTo(b2bUnitModel.getUid(), currentUser);
                final List<BhgeSalesAreaObjectData> salesAreaObjDataList = new ArrayList<BhgeSalesAreaObjectData>();
                for (final B2BUnitModel salesArea : salesAreasList) {
                    if (salesArea.getUid() != null && salesArea.getUid().contains("_")) {
                        final String[] salesAreaArr = salesArea.getUid().split("_");
                        if (salesAreaArr != null && salesAreaArr.length >= 3) {
                            final BhgeSalesAreaObjectData obj = new BhgeSalesAreaObjectData();
                            final SAPConfigurationModel baseStoreConfiguration = baseStoreService
                                    .findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
                            if (baseStoreConfiguration != null) {
                                final BaseStoreModel baseStore = baseStoreService
                                        .findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
                                if (baseStore != null) {
                                    obj.setSalesAreaName(baseStore.getName());
                                }
                            }
                            obj.setSalesAreaId(salesArea.getUid());
                            if (null != currentUser.getDefaultB2BUnit()) {
                                if (salesArea.getUid().equalsIgnoreCase(currentUser.getDefaultB2BUnit().getUid())) {
                                    obj.setActive(true);
                                }
                            }
                            salesAreaObjDataList.add(obj);
                        }
                    }
                }
                final List<AddressData> addressList = new ArrayList<AddressData>();
                final AddressData address = findSoldToAddressForSearchPop(b2bUnitModel);
                if (address != null) {
                    addressList.add(address);
                }
                B2BUnitData b2bUnitFavData = new B2BUnitData();
                b2bUnitFavData.setName(b2bUnitModel.getName());
                b2bUnitFavData.setUid(b2bUnitModel.getUid());
                b2bUnitFavData.setSalesAreaObjectDataList(salesAreaObjDataList);
                b2bUnitFavData.setAddresses(addressList);
                b2bUnitFavData.setFavorite(true);
                if (null != b2bUnitModel.getCurrency()) {
                    b2bUnitFavData.setCurrencyIso(b2bUnitModel.getCurrency().getIsocode());
                    b2bUnitFavData.setCurrencySymbol(b2bUnitModel.getCurrency().getSymbol());
                }
                if (!b2bUnitModel.getMedias().isEmpty()) {
                    final List<MediaModel> b2bUnitMedia = new ArrayList(b2bUnitModel.getMedias());
                    b2bUnitFavData.setMediaurl(b2bUnitMedia.get(0).getURL());
                }
                if (null != currentUser.getDefaultSoldTo()) {
                    if (b2bUnitModel.getUid().equalsIgnoreCase(currentUser.getDefaultSoldTo().getUid())) {
                        b2bUnitFavData.setActive(true);
                    }
                }
                if (currentUser.getRecentSoldtoTime().keySet().contains(b2bUnitModel)) {
                    b2bUnitFavData.setRecent(true);
                }
                b2bUnitDatas.add(b2bUnitFavData);
            }
        }

        //Setting Groups B2B Units
        List<B2BUnitData> b2BUnitData = getCustomerB2Buntis();
        b2bUnitDatas.addAll(b2BUnitData);
        return b2bUnitDatas;
    }

    @Override
    public boolean addFavoriteSoldTo(final B2BUnitModel favoriteSoldTo) {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final List<B2BUnitModel> b2bUnitModels = new ArrayList<>(currentUser.getFavoriteSoldTos());
        b2bUnitModels.add(favoriteSoldTo);
        currentUser.setFavoriteSoldTos(b2bUnitModels);
        modelService.save(currentUser);
        return true;
    }

    @Override
    public boolean removeFavoriteSoldTo(final String favoriteSoldTo) {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        final List<B2BUnitModel> b2bUnitModels = new ArrayList<>(currentUser.getFavoriteSoldTos());

        final Iterator<B2BUnitModel> iter = b2bUnitModels.iterator();
        while (iter.hasNext()) {
            if (StringUtils.equals((iter.next()).getUid(), favoriteSoldTo)) {
                iter.remove();
            }
        }
        currentUser.setFavoriteSoldTos(b2bUnitModels);
        modelService.save(currentUser);
        return true;
    }

    //	@Override
    //	public SearchPageData<B2BUnitData> getSoldTosforSearch(final String text) {
    //		SearchPageData<B2BUnitModel> b2bUnitModels = bhgeB2BUnitService.getB2bUnitsForSearchCriteria(text);
    //		SearchPageData<B2BUnitData> searchPageData = new SearchPageData<B2BUnitData>();
    //		List<B2BUnitData> unitDataList = new ArrayList<B2BUnitData>();
    //		if(b2bUnitModels != null){
    //			List<B2BUnitModel> b2bUnitModelList = b2bUnitModels.getResults();
    //
    //			for(B2BUnitModel unit : b2bUnitModelList){
    //				B2BUnitData unitData = bhgeB2BUnitConverter.convert(unit);
    //				unitDataList.add(unitData);
    //			}
    //			searchPageData.setResults(unitDataList);
    //			searchPageData.setPagination(b2bUnitModels.getPagination());
    //		}
    //		return searchPageData;
    //	}
    @Override
    public boolean updateUserSoldToSalesArea(final String soldTo, final String salesArea) {
        try {
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            if (StringUtils.isNotEmpty(salesArea) && StringUtils.isNotBlank(salesArea)) {
                final B2BUnitModel salesAreaModel = userProfileService.findChildB2BUnitModel(salesArea);
                currentUser.setDefaultB2BUnit(salesAreaModel);
                modelService.save(currentUser);
                // Setting Session Sales Area
                sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA, salesAreaModel);
                sessionService.setAttribute(BhgeCoreConstants.SESSION_BRANCH, salesAreaModel);
                sessionService.setAttribute(BhgeCoreConstants.SESSION_UNIT, salesAreaModel);
            }

            if (StringUtils.isNotBlank(soldTo) && StringUtils.isNotEmpty(soldTo)) {
                final B2BUnitModel sessionSoldTo = bhgeSoldToUtil.getSoldToByID(soldTo);
                updateRecentSoldtoTime(sessionSoldTo, currentUser);
                if (sessionSoldTo != null) {
                    LOG.debug("setSessionSoldTo as " + sessionSoldTo.getUid());
                    sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO,
                            bhgeSoldToUtil.getBHGESoldToData(sessionSoldTo));
                    sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO_NAME,
                            sessionSoldTo.getLocName() + " - " + sessionSoldTo.getUid());
                }
            }

            return true;
        } catch (final Exception e) {
            LOG.error("Error occured while setting Default Sales Area in the session" + e);
        }
        return false;
    }

    @Override
    public BHGECustomerData updateSoldToSalesArea(final String soldTo, final String salesArea) {
        final BHGECustomerData customerData = new BHGECustomerData();
        String selectedProductLine = null;
        try {
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            if (StringUtils.isNotBlank(salesArea)) {
                final B2BUnitModel salesAreaModel = userProfileService.findChildB2BUnitModel(salesArea);
                currentUser.setDefaultB2BUnit(salesAreaModel);
                modelService.save(currentUser);
            }
            if (StringUtils.isNotEmpty(soldTo)) {
                final B2BUnitModel sessionSoldTo = bhgeSoldToUtil.getSoldToByID(soldTo);
                //Validate the  func
                updateRecentSoldtoTime(sessionSoldTo, currentUser);
            }
            bhgeCustomerPopulator.populate(currentUser, customerData);
            return customerData;
        } catch (final Exception e) {
            LOG.error("Error occured while setting Default Sales Area in the session" + e);
        }
        return customerData;
    }

    public void updateRecentSoldtoTime(final B2BUnitModel sessionSoldTo, final GEEdgeCustomerModel currentUser) {
        List<String> customerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
        final String parentUnitUid = Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO");
        final int maxRecentSize = Integer.parseInt(Config.getParameter(BHGE_RECENT_CUSTOMER_SIZE));

        currentUser.setDefaultSoldTo(sessionSoldTo);
        final Date currentDate = Calendar.getInstance().getTime();

        if (sessionSoldTo != null
                && !sessionSoldTo.getUid().equalsIgnoreCase(parentUnitUid)
                && !sessionSoldTo.getUid().contains("_")
                && customerAccountGroups.contains(sessionSoldTo.getAccountGroup())
                && sessionSoldTo.getEcommerceFlag() != null) {

            Map<B2BUnitModel, Date> recentSoldToMap = new LinkedHashMap<>(currentUser.getRecentSoldtoTime());
            recentSoldToMap.put(sessionSoldTo, currentDate);

            if (recentSoldToMap.size() > maxRecentSize) {
                recentSoldToMap = recentSoldToMap.entrySet().stream()
                        .sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
                        .limit(maxRecentSize)
                        .collect(Collectors.toMap(
                                Map.Entry::getKey,
                                Map.Entry::getValue,
                                (e1, e2) -> e1,
                                LinkedHashMap::new
                        ));
            }
            currentUser.setRecentSoldtoTime(recentSoldToMap);
        }
        modelService.save(currentUser);
    }

    @Override
    public B2BUnitModel findChildB2BUnitModel(final String uid) {

        return userProfileService.findChildB2BUnitModel(uid);
    }

    @Override
    public List<B2BUnitModel> getAllChildB2BUnitModel(final String uid) {
        return userProfileService.getAllChildB2BUnitModel(uid);
    }

    /**
     * @return the userProfileService
     */
    public BHGEUserProfileService getUserProfileService() {
        return userProfileService;
    }

    @Override
    public AddressData getSoldToAddress(final String soldToId) {
        final String userSalesRegion = getUserDefaultSalesRegion();
        String childSoldToName = soldToId;
        if (!soldToId.contains("_")) {
            {
                if (!soldToId.contains("_" + userSalesRegion)) {
                    childSoldToName = soldToId + "_" + userSalesRegion;
                }
            }
        }

        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);
        AddressData soldToAddress = null;
        final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
        for (final AddressModel address : listOfSoldToAddress) {
            if (address.getBillingAddress().booleanValue()) {
                soldToAddress = addressConverter.convert(address);
                if (address.getCountry() != null) {
                    soldToAddress.setRisk(address.getCountry().getRisk());
                    soldToAddress.setSanctioned(address.getCountry().getSanctioned());
                }
                break;
            }
        }
        if (listOfSoldToAddress.get(0).getSapCustomerID() != null) {
            soldToAddress.setSapCustomerID(listOfSoldToAddress.get(0).getSapCustomerID());
        }
        return soldToAddress;
    }

    @Override
    public AddressModel getSoldToAddressforWS(final String soldToId) {
        final String userSalesRegion = getUserDefaultSalesRegion();
        String childSoldToName = soldToId;
        if (!soldToId.contains("_")) {
            {
                if (!soldToId.contains("_" + userSalesRegion)) {
                    childSoldToName = soldToId + "_" + userSalesRegion;
                }
            }
        }

        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);
        AddressModel soldToAddress = null;
        final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
        for (final AddressModel address : listOfSoldToAddress) {
            if (address.getBillingAddress().booleanValue()) {
                soldToAddress = address;
                break;
            }
        }
        return soldToAddress;
    }

    @Override
    public AddressModel getShipToAddressforWS(final String soldToId) {
        final BHGESoldToData defaultSoldTo1 = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
        final String userSalesRegion = getUserDefaultSalesRegion();
        String childSoldToName = soldToId;
        if (!soldToId.contains("_")) {
            {
                if (!soldToId.contains("_" + userSalesRegion)) {
                    childSoldToName = soldToId + "_" + userSalesRegion;
                }
            }
        }

        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);
        AddressModel defaultShipTo = null;
        final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
        LOG.info("childSoldToName: " + childSoldToName);
        Boolean isAPACSalesOrg = getAPACstatusforSalesOrg();
        Boolean isSapBlocked =false;
        for (final AddressModel address : listOfSoldToAddress) {
            if(null != address.getSapCustomerID()){
                LOG.info("sapcustomerId"+address.getSapCustomerID());
                isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(address.getSapCustomerID());
                if(isSapBlocked){
                    continue;
                }
            }
            LOG.info("getShipToAddressforWS :: ShippingAddress(): " + address.getShippingAddress() + " address SapCustomerID : " + address.getSapCustomerID());
            if (isAPACSalesOrg) {
                if (address.getShippingAddress() && address.getSapCustomerID() != null
                        && address.getSapCustomerID().equals(defaultSoldTo1.getUid()) && Boolean.TRUE.equals(address.getIsPrimaryAddress())) {
                    defaultShipTo = address;
                    break;
                }
            } else if (address.getShippingAddress() && address.getSapCustomerID() != null
                    && address.getSapCustomerID().equals(defaultSoldTo1.getUid())) {
                defaultShipTo = address;
                break;
            }
        }
        return defaultShipTo;
    }

    @Override
    public AddressData findSoldToAddressForSearchPop(B2BUnitModel soldToId) {
        AddressData soldToAddress = null;
        final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToId.getAddresses();
        for (final AddressModel address : listOfSoldToAddress) {
            if (StringUtils.isNotEmpty(address.getSapAddressUsage()) && address.getSapAddressUsage().equalsIgnoreCase("DE")) {
                soldToAddress = addressConverter.convert(address);
                break;
            }
        }

        return soldToAddress;
    }

    public AddressData getDefaultShipToAddressFromSoldTo(String defaultB2BUnitUid) {
        AddressData soldToAddress = null;
        B2BUnitModel parentB2bUnitModel = null;
        try {
            if (defaultB2BUnitUid != null && defaultB2BUnitUid.contains("_")) {
                final String[] defaultParentB2BUnit = StringUtils.split(defaultB2BUnitUid, "_");
                if (defaultParentB2BUnit != null && defaultParentB2BUnit.length >= 3) {
                    if (StringUtils.isNotEmpty(defaultParentB2BUnit[0])) {
                        defaultB2BUnitUid = defaultParentB2BUnit[0];
                    }
                }
            }
            parentB2bUnitModel = (B2BUnitModel) b2bUnitService.getUnitForUid(defaultB2BUnitUid);
            if (null != parentB2bUnitModel) {
                soldToAddress = findSoldToAddressForSearchPop(parentB2bUnitModel);
            }
        } catch (RuntimeException re) {
            LOG.error("Exception in getDefaultShipToAddressFromSoldTo");
            re.printStackTrace();
        }

        return soldToAddress;
    }

    @Override
    public AddressData findSoldToAddress(final String soldToId) {
        AddressData soldToAddress = null;
        final List<B2BUnitModel> soldToChilds = getAllChildB2BUnitModel(soldToId);
        for (final B2BUnitModel soldToChild : soldToChilds) {
            boolean foundAddress = false;

            final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
            for (final AddressModel address : listOfSoldToAddress) {
                if (address.getBillingAddress().booleanValue()) {
                    soldToAddress = addressConverter.convert(address);
                    foundAddress = true;
                    break;
                }
            }
            if (foundAddress) {
                break;
            }
        }
        return soldToAddress;
    }

    /**
     * @return the b2bCommerceUnitService
     */
    public B2BCommerceUnitService getB2bCommerceUnitService() {
        return b2bCommerceUnitService;
    }

    /**
     * @param b2bCommerceUnitService the b2bCommerceUnitService to set
     */
    public void setB2bCommerceUnitService(final B2BCommerceUnitService b2bCommerceUnitService) {
        this.b2bCommerceUnitService = b2bCommerceUnitService;
    }

    @Override
    public BHGECustomerData getUserProfile(final String uid) {

        final GEEdgeCustomerModel bhgeCustomerModel = userProfileService.findCurrentUserProfile(uid);
        final BHGECustomerData bhgeCustomerData = new BHGECustomerData();
        bhgeCustomerPopulator.populate(bhgeCustomerModel, bhgeCustomerData);
        return bhgeCustomerData;
    }

    /*
     * (non-Javadoc)
     *
     * @see com.bhge.facades.user.BHGEUserProfileFecade#updateUserProfile (java.lang.String) Method to update user
     * profile
     */
    public void updateUserProfile(final BHGECustomerData bhgeCustomerData) {

        validateParameterNotNullStandardMessage("bhgeCustomerData", bhgeCustomerData);
        Assert.hasText(bhgeCustomerData.getDefaultShipTo(), "The field [DefaultShipTo] cannot be empty");
        Assert.hasText(bhgeCustomerData.getDefaultSoldTo(), "The field [DefaultSoldTo] cannot be empty");

        final GEEdgeCustomerModel customer = getCurrentSessionCustomer();
        customer.setOrderConfirmEmail(bhgeCustomerData.getOrderConfirmEmail());
        customer.setSendInvoiceEmail(bhgeCustomerData.getSendInvoiceEmail());
        customer.setSendSalesOrderEmail(bhgeCustomerData.getSendSalesOrderEmail());
        customer.setSendShippingNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
        customer.setIsShipCompleteOrder(bhgeCustomerData.getIsShipCompleteOrder());

        customer.setShippingContactName(bhgeCustomerData.getShippingContactName());
        customer.setShippingContactNumber(bhgeCustomerData.getShippingContactNumber());
        if (StringUtils.isNotEmpty(bhgeCustomerData.getDeliveryCarrier())) {
            customer.setDeliveryCarrier(ShippingCarrierMethod.valueOf(bhgeCustomerData.getDeliveryCarrier()));
        }

        userProfileService.getCurrencyFormats().forEach(item -> {
            if (item.getCode().equalsIgnoreCase(bhgeCustomerData.getDefaultCurrencyFormat().getCode())) {
                customer.setDefaultCurrencyFormat(item);
            }
        });
        if (StringUtils.isNotEmpty(bhgeCustomerData.getDeliveryOptions())) {
            customer.setDeliveryOptions(ShippingChargeMethod.valueOf(bhgeCustomerData.getDeliveryOptions()));
        }

        customer.setDeliveryAccount(bhgeCustomerData.getDeliveryAccount());

        final B2BUnitModel defaultSoldTo = bhgeSoldToUtil.getSoldToByID(bhgeCustomerData.getDefaultSoldTo());
        final B2BUnitModel childB2BUnitModel = userProfileService.findChildB2BUnitModel(bhgeCustomerData.getDefaultSalesArea());

        customer.setDefaultShipTo(getDefaultShipto(bhgeCustomerData.getDefaultShipTo(), childB2BUnitModel));
        defaultSoldTo.setBillingAddress(childB2BUnitModel.getBillingAddress());
        customer.setDefaultSoldTo(defaultSoldTo);

        // Setting default sales area to the user
        customer.setDefaultB2BUnit(childB2BUnitModel);
        getModelService().save(customer);
        getModelService().refresh(customer);
    }

    public void updateUserProfileWs(final BHGECustomerData bhgeCustomerData) {

        /*
         * validateParameterNotNullStandardMessage("bhgeCustomerData",
         * bhgeCustomerData); Assert.hasText(bhgeCustomerData.getDefaultShipTo(),
         * "The field [DefaultShipTo] cannot be empty");
         * Assert.hasText(bhgeCustomerData.getDefaultSoldTo(),
         * "The field [DefaultSoldTo] cannot be empty");
         */
        final GEEdgeCustomerModel customer = getCurrentSessionCustomer();
        customer.setOrderConfirmEmail(bhgeCustomerData.getOrderConfirmEmail());
        customer.setSendInvoiceEmail(bhgeCustomerData.getSendInvoiceEmail());
        customer.setSendSalesOrderEmail(bhgeCustomerData.getSendSalesOrderEmail());
        customer.setSendShippingNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
        customer.setIsShipCompleteOrder(bhgeCustomerData.getIsShipCompleteOrder());

        customer.setShippingContactName(bhgeCustomerData.getShippingContactName());
        customer.setShippingContactNumber(bhgeCustomerData.getShippingContactNumber());
        // Added for Invoice and SOA changes
        customer.setInvoiceContact(bhgeCustomerData.getInvoiceContact());
        customer.setInvoicePhone(bhgeCustomerData.getInvoicePhone());
        customer.setSoaContact(bhgeCustomerData.getSoaContact());
        customer.setSoaPhone(bhgeCustomerData.getSoaPhone());
        if (StringUtils.isNotEmpty(bhgeCustomerData.getDeliveryCarrier())) {
            customer.setDeliveryCarrier(ShippingCarrierMethod.valueOf(bhgeCustomerData.getDeliveryCarrier()));
        }

        try {
            userProfileService.getCurrencyFormats().forEach(item -> {
                if (bhgeCustomerData.getDefaultCurrencyFormat() != null && item.getCode().equalsIgnoreCase(bhgeCustomerData.getDefaultCurrencyFormat().getCode())) {
                    customer.setDefaultCurrencyFormat(item);
                }
            });
        } catch (NullPointerException e) {
            LOG.error("Error occured while setting DefaultCurrencyFormat()" + e);
        }

        if (StringUtils.isNotEmpty(bhgeCustomerData.getDeliveryOptions())) {
            customer.setDeliveryOptions(ShippingChargeMethod.valueOf(bhgeCustomerData.getDeliveryOptions()));
        }

        customer.setDeliveryAccount(bhgeCustomerData.getDeliveryAccount());

        final B2BUnitModel defaultSoldTo = bhgeSoldToUtil.getSoldToByID(bhgeCustomerData.getDefaultSoldTo());
        final B2BUnitModel childB2BUnitModel = userProfileService.findChildB2BUnitModel(bhgeCustomerData.getDefaultSalesArea());

        AddressModel shitoAddress = getDefaultShipto(bhgeCustomerData.getDefaultShipTo(), childB2BUnitModel);
        customer.setDefaultShipTo(shitoAddress);
        final CartModel cartModel = bhgeCartService.getSessionCart();
        if (cartModel != null) {
            cartModel.setDeliveryAddress(shitoAddress);
            modelService.save(cartModel);
        }
        defaultSoldTo.setBillingAddress(childB2BUnitModel.getBillingAddress());
        customer.setDefaultSoldTo(defaultSoldTo);

        // Setting default sales area to the user
        customer.setDefaultB2BUnit(childB2BUnitModel);
        customer.setOrderBlockEmailNotification(bhgeCustomerData.getOrderBlockEmailNotification());
        customer.setOrderBlockReleaseEmailNotification(bhgeCustomerData.getOrderBlockReleaseEmailNotification());
        customer.setOrderShipDateChanged(bhgeCustomerData.getOrderShipDateChanged());
        getModelService().save(customer);
        getModelService().refresh(customer);
    }

    /**
     * This method is used to get ship to based on user selection
     *
     * @param shiptoUID
     * @param soldTo
     * @return
     */
    public AddressModel getDefaultShipto(final String shiptoUID, final B2BUnitModel soldTo) {

        final AddressModel shipTo = b2bCommerceUnitService.getAddressForCode(soldTo, shiptoUID);

        return shipTo;

    }

    @Override
    public AddressData getDefaultShipto(final String defaultShiptoUID, final String defaultSoldToChild) {
        AddressData soldToAddressData = null;
        final B2BUnitModel cpdefaultSoldTo = findChildB2BUnitModel(defaultSoldToChild);
        final AddressModel shipToModel = b2bCommerceUnitService.getAddressForCode(cpdefaultSoldTo, defaultShiptoUID);
        if (shipToModel != null) {
            soldToAddressData = addressConverter.convert(shipToModel);
        }
        return soldToAddressData;

    }

    @Override
    public AddressModel getDefaultShiptoforWS(final String defaultShiptoUID, final String defaultSoldToChild) {
        final B2BUnitModel cpdefaultSoldTo = findChildB2BUnitModel(defaultSoldToChild);
        final AddressModel shipToModel = b2bCommerceUnitService.getAddressForCode(cpdefaultSoldTo, defaultShiptoUID);
        return shipToModel;

    }

    public List<RegionData> getRegionsForCountryCode(final String countryCode) {
        List<RegionData> actualRegionsData = null;

        final List<RegionModel> regionModelList = userProfileService.getRegionsForCountryCode(countryCode);
        if (regionModelList != null && regionModelList.size() > 0) {
            actualRegionsData = Converters.convertAll(regionModelList, regionConverter);
            if (actualRegionsData != null && actualRegionsData.size() > 0) {

                Collections.sort(actualRegionsData, new Comparator<RegionData>() {
                    /*
                     * public int compare(final RegionData r1, final RegionData r2) { return
                     * r1.getName().compareTo(r2.getName()); }
                     */

                    public int compare(final RegionData r1, final RegionData r2) {
                        String region1 = "";
                        String region2 = "";
                        if (r1 != null && r1.getName() != null) {
                            region1 = r1.getName();
                        }
                        if (r2 != null && r2.getName() != null) {
                            region2 = r2.getName();
                        }
                        return region1.compareTo(region2);
                    }

                });
            }
            return actualRegionsData;
        }
        return null;
    }

    public AddressModel getDefaultShipto(final BHGECustomerData bhgeCustomerData, final BHGESoldToData defaultSoldTo) {
        AddressModel defaultShipTo = null;

        // Condition 1: Check if the default ship to is set for customer and get
        // the default ship to from the customer
        if (bhgeCustomerData.getDefaultSoldTo() != null && bhgeCustomerData.getDefaultShipTo() != null
                && bhgeCustomerData.getDefaultSoldTo().equals(defaultSoldTo.getUid())) {
            /*
             * final String defaultSoldToChild = bhgeCustomerData.getDefaultSoldTo() + "_" +
             * Config.getString(GeCoreConstants.SALES_ORG, "1800") + "_" + Config.getString(GeCoreConstants.DISTR_CHAN,
             * "GE") + "_" + Config.getString(GeCoreConstants.DIVISION, "GE");
             */

            final String defaultSoldToChild = bhgeCustomerData.getDefaultSoldTo() + "_" + getUserDefaultSalesRegion();
            final B2BUnitModel cpdefaultSoldTo = findChildB2BUnitModel(defaultSoldToChild);
            if (cpdefaultSoldTo != null) {
                defaultShipTo = getDefaultShipto(bhgeCustomerData.getDefaultShipTo(), cpdefaultSoldTo);
            }
        }

        // Condition 2:If default ship to is not set find the sold to and get
        // the ship to from the address of sold to
        if (defaultShipTo == null) {
            /*
             * final String childSoldToName = defaultSoldTo.getUid() + "_" + Config.getString(GeCoreConstants.SALES_ORG,
             * "1800") + "_" + Config.getString(GeCoreConstants.DISTR_CHAN, "GE") + "_" +
             * Config.getString(GeCoreConstants.DIVISION, "GE");
             */

            final String childSoldToName = defaultSoldTo.getUid() + "_" + getUserDefaultSalesRegion();
            final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);
            // Get the list of address attached to the sold to
            if (soldToChild != null) {
                Boolean isAPAC = getAPACstatusforSalesOrg();
                final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
                for (final AddressModel address : listOfSoldToAddress) {
                    if (address.getShippingAddress() != null && address.getShippingAddress().booleanValue()
                            && address.getSapCustomerID() != null && address.getSapCustomerID().equals(defaultSoldTo.getUid())) {
                        if(isAPAC){
                            if(Boolean.TRUE.equals(address.getIsPrimaryAddress())){
                                defaultShipTo = address;
                                break;
                            }
                        }
                        else {
                            defaultShipTo = address;
                            break;
                        }
                    }
                }
                if(isAPAC && null == defaultShipTo){
                    defaultShipTo = getSoldToAddressforWS(soldToChild.getUid());
                }
            }
        }
        return defaultShipTo;
    }

    public AddressData getDefaultSoldTo() {
        final String sessionSoldTo = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getUid();
        final String childSoldToName = sessionSoldTo + "_" + getUserDefaultSalesRegion();
        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);

        AddressModel soldToAddressModel = null;

        // Get the list of address attached to the sold to
        if (soldToChild != null) {
            final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
            for (final AddressModel address : listOfSoldToAddress) {
                if (address.getBillingAddress() != null && address.getBillingAddress().booleanValue()) {
                    soldToAddressModel = new AddressModel();
                    soldToAddressModel = address;
                }
            }
        }
        AddressData soldToAddressData = null;
        if (soldToAddressModel != null) {
            soldToAddressData = addressConverter.convert(soldToAddressModel);
        }
        return soldToAddressData;
    }

    public AddressData getDefaultSoldToFromCurrentUser() {
        final String sessionSoldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs().getUid();
        final String childSoldToName = sessionSoldTo + "_" + getUserDefaultSalesRegion();

        AddressModel soldToAddressModel = null;
        AddressData soldToAddressData = null;
        B2BUnitModel parentB2bUnitModel = (B2BUnitModel) b2bUnitService.getUnitForUid(sessionSoldTo);
        if (null != parentB2bUnitModel) {
            soldToAddressData = findSoldToAddressForSearchPop(parentB2bUnitModel);
        }
        if (soldToAddressData == null) {
            final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);
            // Get the list of address attached to the sold to
            if (soldToChild != null) {
                final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
                for (final AddressModel address : listOfSoldToAddress) {
                    if (address.getBillingAddress() != null && address.getBillingAddress().booleanValue()) {
                        soldToAddressModel = new AddressModel();
                        soldToAddressModel = address;
                        break;
                    }
                }
            }
            //AddressData soldToAddressData = null;
            if (soldToAddressModel != null) {
                soldToAddressData = addressConverter.convert(soldToAddressModel);
            }
        }
        return soldToAddressData;
    }

    public Set<B2BUnitModel> getSoldToList() {
        return bhgeSoldToUtil.getSoldToList();

    }

    @Override
    public SearchPageData<AddressData> getAddressForSalesArea(final GetAddressFormData data, final boolean accountPageFlag,boolean shipTo) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getShippingAddressesForMyAccountPage(data,
                accountPageFlag);
        final SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        final PaginationData pagination = searchPageModel.getPagination();
        Boolean isAPACSalesOrg = false;
        Boolean isSapBlocked = false;
        isAPACSalesOrg = getAPACstatusforSalesOrg();
        LOG.info("sales org if APAC" + isAPACSalesOrg);
        if (CollectionUtils.isNotEmpty(results)) {
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                if(null != addressModel.getSapCustomerID()){
                    LOG.info("sapcustomerId"+addressModel.getSapCustomerID());
                    isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(addressModel.getSapCustomerID());
                    if(isSapBlocked){
                    LOG.info("Address is skipped as SAPCustomer is blocked" + addressModel.getPk());
                    continue;
                }
                }
                if (isAPACSalesOrg && shipTo) {
                    if (!Boolean.TRUE.equals(addressModel.getIsPrimaryAddress())) {
                        LOG.info("into the loop to remove as primary address is false" + addressModel.getPk());
                        continue;
                    }
                }
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressData.setSapCustomerID(addressModel.getSapCustomerID());
                addressDataList.add(addressData);
            }
        }

        searchPageData.setResults(addressDataList);
        searchPageData.setPagination(pagination);

        return searchPageData;
    }

    @Override
    public Boolean getAPACstatusforSalesOrg() {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
        String salesOrg = null;
        String distributionChannel = null;
        String division = null;
        String[] defaultB2BId = null;
        final String defaultUnitId = b2bUnit;
        if (Objects.nonNull((defaultUnitId)) && defaultUnitId.contains("_")) {
            defaultB2BId = defaultUnitId.split("_");
            salesOrg = defaultB2BId[1];
            if (defaultB2BId.length > 2) {
                distributionChannel = defaultB2BId[2];
            }
            if (defaultB2BId.length > 3) {
                division = defaultB2BId[3];
            }
        }
        SAPSalesOrganizationModel sapSalesOrganizationModel = bhgeB2BUnitDao.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
        if (null != sapSalesOrganizationModel && sapSalesOrganizationModel.getIsAPAC() != null && Boolean.TRUE.equals(sapSalesOrganizationModel.getIsAPAC())) {
            LOG.info("into the loop as salesorg is APAC" + true);
            return true;
        }
        return false;
    }

    /*
     * getAddressForSalesAreaWs method duplication for occ call start
     */
    @Override
    public List<AddressData> getAddressForSalesAreaWs(final GetAddressFormData data, final boolean accountPageFlag, Boolean isShipTo) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getShippingAddressesForMyAccountPage(data,
                accountPageFlag);
        final List<AddressData> searchPageData = new ArrayList<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        //final PaginationData pagination = searchPageModel.getPagination();

        Boolean isAPACSalesOrg = false;
        Boolean isSapBlocked = false;
        isAPACSalesOrg = getAPACstatusforSalesOrg();
        LOG.info("sales org if APAC" + isAPACSalesOrg);

        if (CollectionUtils.isNotEmpty(results)) {
            Boolean isPrimaryAddress = false;
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                if(null != addressModel.getSapCustomerID()){
                    LOG.info("sapcustomerId"+addressModel.getSapCustomerID());
                    isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(addressModel.getSapCustomerID());
                    if(isSapBlocked){
                        LOG.info("Address is skipped as SAPCustomer is blocked" + addressModel.getPk());
                        continue;
                    }
                }
                if (isAPACSalesOrg && isShipTo) {
                if (!Boolean.TRUE.equals(addressModel.getIsPrimaryAddress())) {
                    LOG.info("into the loop to remove as primary address is false"+addressModel.getPk());
                    continue;
                }
                }
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressData.setSapCustomerID(addressModel.getSapCustomerID());
                addressDataList.add(addressData);
            }
        }

        //searchPageData.setResults(addressDataList);
        //searchPageData.setPagination(pagination);
        return addressDataList;
    }

    /*
     * getAddressForSalesAreaWs method duplication for occ call end
     */
    public List<BHGESoldTo> findSoldTo(final String text) {

        final GEEdgeCustomerModel geEdgeCustomerModel = userProfileService
                .findCurrentUserProfile(getCurrentSessionCustomer().getUid());
        String soldtos = "";
        final String userSalesRegion = getUserDefaultSalesRegion();

        for (final PrincipalGroupModel myVal : geEdgeCustomerModel.getAllGroups()) {
            if (myVal instanceof B2BUserGroupModel) {

                if (!((B2BUserGroupModel) myVal).getUnit().getUid().contains("_" + userSalesRegion)) {
                    if (soldtos.equals("")) {
                        soldtos = soldtos + "'" + ((B2BUserGroupModel) myVal).getUnit().getUid() + "_" + userSalesRegion + "'";

                    } else {
                        soldtos = soldtos + "," + "'" + ((B2BUserGroupModel) myVal).getUnit().getUid() + "_" + userSalesRegion + "'";
                    }
                }
                //Coverity: Fix[SBSC: String concatenation in loop using + operator]
                final StringBuffer soldToBuffer = new StringBuffer();
                for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups()) {
                    if (myB2b instanceof B2BUnitModel && !myB2b.getUid().contains("_" + userSalesRegion)) {
                        if (soldtos.equals("")) {
                            soldtos = soldtos + "'" + ((B2BUnitModel) myB2b).getUid() + "_" + userSalesRegion + "'";

                        } else {
                            soldToBuffer.append(soldtos).append(",").append("'").append(((B2BUnitModel) myB2b).getUid()).append("_")
                                    .append(userSalesRegion).append("'");
                            soldtos = soldToBuffer.toString();
                            /*
                             * soldtos = soldtos + "," + "'" + ((B2BUnitModel) myB2b).getUid()+ "_" +
                             * Config.getString(GeCoreConstants.SALES_ORG, "1800") + "_" +
                             * Config.getString(GeCoreConstants.DISTR_CHAN, "GE") + "_" +
                             * Config.getString(GeCoreConstants.DIVISION, "GE")+ "'";
                             */

                        }

                    }
                }

            }
        }
        final List<B2BUnitModel> b2BUnitModelList = userProfileService.findSoldTo(text, soldtos);
        final List<BHGESoldTo> bhgeSoldToList = new ArrayList<BHGESoldTo>();
        for (final B2BUnitModel b2BUnitModel : b2BUnitModelList) {
            final String soldToName = StringUtils.isEmpty(b2BUnitModel.getName()) ? "" : b2BUnitModel.getName();
            final String soldID = b2BUnitModel.getUid() != null && b2BUnitModel.getUid().contains("_")
                    ? b2BUnitModel.getUid().split("_")[0]
                    : b2BUnitModel.getUid();
            final BHGESoldTo bhgeSoldTo = new BHGESoldTo();
            bhgeSoldTo.setSoldToName(soldToName);
            bhgeSoldTo.setSoldToId(soldID);
            bhgeSoldTo.setAddress("");
            // final String addressName, street, town, zipcode;
            for (final AddressModel addressModel : b2BUnitModel.getAddresses()) {
                if (addressModel.getBillingAddress()) {

                    String billingAddress = (StringUtils.isEmpty(addressModel.getStreetnumber()) ? ""
                            : (addressModel.getStreetnumber() + ", "))
                            + (StringUtils.isEmpty(addressModel.getStreetname()) ? "" : (addressModel.getStreetname() + ", "))
                            + (StringUtils.isEmpty(addressModel.getTown()) ? "" : (addressModel.getTown() + ", "))
                            + (StringUtils.isEmpty(addressModel.getPostalcode()) ? "" : (addressModel.getPostalcode() + ", "))
                            + (addressModel.getCountry() != null ? (StringUtils.isEmpty(addressModel.getCountry().getIsocode()) ? ""
                            : addressModel.getCountry().getIsocode()) : "");

                    billingAddress = StringUtils.removeEnd(billingAddress.trim(), ",");

                    bhgeSoldTo.setAddress(billingAddress);
                    bhgeSoldTo.setZipCode(StringUtils.isEmpty(addressModel.getPostalcode()) ? "" : addressModel.getPostalcode());
                    break;
                }

            }

            bhgeSoldToList.add(bhgeSoldTo);
        }
        return bhgeSoldToList;
    }

    public List<AddressData> getAddress(final String zipCode) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();

        final List<AddressModel> addressModelList = userProfileService.getAddress(zipCode);

        final Iterator addreessitr = addressModelList.iterator();
        while (addreessitr.hasNext()) {
            final AddressModel addressModel = (AddressModel) addreessitr.next();
            final AddressData addressData = getAddressConverter().convert(addressModel);
            addressDataList.add(addressData);
        }

        return addressDataList;
    }

    @Override
    public SearchPageData<AddressData> getAddress(final GetAddressFormData data) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getShippingAddresses(data);
        final SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        final PaginationData pagination = searchPageModel.getPagination();

        if (CollectionUtils.isNotEmpty(results)) {
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressDataList.add(addressData);
            }
        }

        searchPageData.setResults(addressDataList);
        searchPageData.setPagination(pagination);

        return searchPageData;
    }

    protected GEEdgeCustomerModel getCurrentSessionCustomer() {
        return (GEEdgeCustomerModel) getUserService().getCurrentUser();
    }

    /*
     * (non-Javadoc)
     *
     * @see com.bhge.facades.user.BHGEUserProfileFecade#getCurrencyFormats()
     */
    @Override
    public List<BHGECurrencyFormatData> getCurrencyFormats() {
        //	final List<GEEdgeCurrencyFormatModel> currencyFormatModels = userProfileService.getCurrencyFormats();
        final List<BHGECurrencyFormatModel> currencyFormatModels = userProfileService.getCurrencyFormats();
        return Converters.convertAll(currencyFormatModels, getbhgeCurrencyFormatConverter());

    }

    @Override
    public String getUserDefaultSalesRegion() {
        return userProfileService.getUserDefaultSalesRegion();
    }

    /**
     * This method returns Employee model for given internal user id.
     *
     * @param String
     * @return EmployeeModel
     */
    /*
     * public EmployeeModel findExtenalCustomerId(final String userId) { return
     * userProfileService.findExtenalCustomerId(userId);
     *
     * }
     */
    /*
     * (non-Javadoc)
     *
     * @see com.hybris.ge.edge.facades.user.GEEdgeUserProfileFecade#getSessionUserName ()
     */
    @Override
    public String getSessionUserName() {
        return userService.getCurrentUser().getName();

    }

    @Override
    public String getSessionUsersso() {

        return userService.getCurrentUser().getSso();

    }

    public B2BUnitModel setDefaultSalesAreaToSession(final String soldToUid) {
        try {
            final GEEdgeCustomerModel customer = (GEEdgeCustomerModel) userService.getCurrentUser();
            if (customer.getDefaultB2BUnit() != null && customer.getDefaultB2BUnit().getUid() != null
                    && customer.getDefaultB2BUnit().getUid().contains("_")) {
                return customer.getDefaultB2BUnit();
            }

            final B2BUnitModel soldTo = findChildB2BUnitModel(soldToUid);
            if (null != soldTo) {
                for (final PrincipalModel member : soldTo.getMembers()) {
                    if (member instanceof B2BUnitModel && member.getUid() != null && member.getUid().contains("_") == true) {
                        return (B2BUnitModel) member;
                    }
                }
            }
        } catch (final Exception e) {
            LOG.error("Error occured while setting Default Sales Area in the session" + e);
        }
        return null;
    }

    /**
     * @param userProfileService the userProfileService to set
     */
    public void setUserProfileService(final BHGEUserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    /**
     * @return the userService
     */
    public UserService getUserService() {
        return userService;
    }

    /**
     * @param userService the userService to set
     */
    public void setUserService(final UserService userService) {
        this.userService = userService;
    }

    /**
     * @return the modelService
     */
    public ModelService getModelService() {
        return modelService;
    }

    /**
     * @param modelService the modelService to set
     */
    public void setModelService(final ModelService modelService) {
        this.modelService = modelService;
    }

    protected Converter<AddressModel, AddressData> getAddressConverter() {
        return addressConverter;
    }


    public void setAddressConverter(final Converter<AddressModel, AddressData> addressConverter) {
        this.addressConverter = addressConverter;
    }

    /*
     * (non-Javadoc)
     *
     * @see com.bhge.facades.user.BHGEUserProfileFacade#getContactUsForSoldTo(java.lang.String, java.lang.String,
     * java.lang.String, java.lang.String)
     */
    @Override
    public List getContactUsForSoldTo(final String baseStoreId, final String soldToId, final String supportType,
                                      final String orderNum, final String orderType, final String orderCommerceType) {

        validateParameterNotNullStandardMessage("soldToId", soldToId);

        LOG.info("Order Number for Order Inquiry contactus information : " + orderNum + "orderType :" + orderType
                + "orderCommerceType :" + orderCommerceType);

        List<ContactusSettingsModel> contactus = bhgeUserProfileDao.getContactUsForSoldTo(soldToId, supportType, orderType,
                orderCommerceType);

        if (CollectionUtils.isEmpty(contactus)) {
            validateParameterNotNullStandardMessage("baseStore", baseStoreId);
            contactus = bhgeUserProfileDao.getContactUsFromBaseStoreUid(baseStoreId, "defaultsupport", orderCommerceType);
        }

        //final List<ContactUsSettingsData> contactusList= this.retrieveContactusListForBaseStoreUid(bs.getUid(), supportType);
        final List<ContactUsSettingsData> contactusList = bhgeCustomerPopulator.populateConatctUsSettings(contactus);

        return contactusList;
    }

    /**
     * @param soldToForCart
     * @param orderNum
     * @param orderType
     * @param orderCommerceType
     * @return
     */
    @Override
    public List getContactUsForRegionAndCommerceTypeValue(final OrderModel order,
                                                          final String orderNum, final String orderType, String orderCommerceType) {
        //validateParameterNotNullStandardMessage("orderCommerceType", orderCommerceType);
        LOG.info("Order Number for Order Inquiry contactus information : " + orderNum + "orderType :" + orderType
                + "orderCommerceType :" + orderCommerceType);
        List<ContactUsSettingsData> contactsettingsdata = Collections.emptyList();
        orderCommerceType = getContactUsCommerceType(orderCommerceType);
        try {
            B2BUnitModel parentB2bUnitModel = getParentB2bUnitModel(order.getSoldToForCart());
            if (null != parentB2bUnitModel) {
                AddressData addressData = findSoldToAddressForSearchPop(parentB2bUnitModel);
                if (null != addressData && null != addressData.getCountry() && StringUtils.isNotBlank(addressData.getCountry().getIsocode())) {
                    // Getting Region value according to ContactusSettingsModel
                    String regionValue = getRegionValue(addressData);
                    List<ContactusSettingsModel> finalContactusList = bhgeUserProfileDao.getContactUsByRegionAndCommerceTypeValue(regionValue, orderCommerceType);
                    if (CollectionUtils.isNotEmpty(finalContactusList)) {
                        // First filter based on SubRegion/Country
                        String isocode = addressData.getCountry().getIsocode();
                        //LOG.info("parentB2bUnitModel Address ISO: " + isocode);
                        List<ContactusSettingsModel> contactusListWithSubRegion = new ArrayList<ContactusSettingsModel>();
                        Boolean subRegionExists = Boolean.FALSE;
                        for (ContactusSettingsModel contactusSettingsModel : finalContactusList) {
                            // If Country exists and equals Customer Country then filters the list accordingly
                            if (null != contactusSettingsModel.getContactUsCountry()
                                    && isocode.equals(contactusSettingsModel.getContactUsCountry().getIsocode())) {
                                contactusListWithSubRegion.add(contactusSettingsModel);
                                subRegionExists = Boolean.TRUE;
                            }
                        }
                        LOG.info(" is subRegionExists: " + subRegionExists);
                        if (!subRegionExists) {
                            contactusListWithSubRegion = finalContactusList;
                        }
                        // Updating the list with the filtered list
                        if (contactusListWithSubRegion.size() == 1) {
                            finalContactusList = contactusListWithSubRegion;
                        } else {
                            if (CollectionUtils.isNotEmpty(contactusListWithSubRegion)) {
                                // Now filter based on Product Line from Order's first Line Item.
                                String productLineValue = getProductLineFromOrder(order);
                                List<ContactusSettingsModel> contactusListWithproductline = new ArrayList<ContactusSettingsModel>();
                                for (ContactusSettingsModel contactusSettingsModel : contactusListWithSubRegion) {
                                    // If Contactus Product-Line-Value contails Product-Line-value of Order then filters the list accordingly
                                    String contactUsCode = contactusSettingsModel.getCode();
                                    String[] contactUsCodeParts = contactUsCode.split("_");
                                    String productLineVal = contactUsCodeParts[contactUsCodeParts.length - 1];
                                    LOG.info("ProductLineFromOrder: " + productLineValue + " productLineVal in contactUsCode: " + productLineVal);
                                    if (productLineVal.equalsIgnoreCase(productLineValue)) {
                                        contactusListWithproductline.add(contactusSettingsModel);
                                        break;
                                    }
                                }
                                // Updating the list with the filtered list
                                finalContactusList = contactusListWithproductline;

                            }
                        }

                        if (CollectionUtils.isNotEmpty(finalContactusList)) {
                            contactsettingsdata = bhgeCustomerPopulator.populateConatctUsSettings(finalContactusList);
                        }

                    }
                }
            }
        } catch (RuntimeException re) {
            LOG.error("Exception in getContactUsForRegionAndCommerceTypeValue");
            re.printStackTrace();
        }
        return contactsettingsdata;
    }

    private String getContactUsCommerceType(String orderCommerceType) {
        String commerceType = "";
        if ("BUY".equals(orderCommerceType) || "GUESTBUY".equals(orderCommerceType)) {
            commerceType = "Sales";
        } else {
            commerceType = "Returns";
        }
        return commerceType;
    }

    private String getProductLineFromOrder(OrderModel order) {
        String productLineValue;
        try {
            if (CollectionUtils.isNotEmpty(order.getEntries())) {
                for (AbstractOrderEntryModel entryModel : order.getEntries()) {
                    if (null != entryModel.getProduct()) {
                        GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) entryModel.getProduct();
                        if (null != geEdgeProductModel.getProductType() && StringUtils.isNotBlank(geEdgeProductModel.getProductType().getCode())) {
                            return geEdgeProductModel.getProductType().getCode();
                        }
                    }
                }
            }
        } catch (RuntimeException re) {
            LOG.error("Exception in getProductLineFromOrder");
        }
        return "";
    }

    public BHGEB2BOrderService getB2bOrderService() {
        return b2bOrderService;
    }

    @Override
    public List<List<ContactUsSettingsData>> getContactUsListForUser() {
        final List<String> basestring = new ArrayList<String>();
        final List<List<ContactUsSettingsData>> contactUsSettingsList = new ArrayList();
        final List<ContactUsSettingsData> contactUsSettings = new ArrayList<ContactUsSettingsData>();
        final UserModel user = userService.getCurrentUser();
        if (null != user && user instanceof GEEdgeCustomerModel) {
            final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) user;
            final Set<B2BUnitModel> soldToList = getSoldToListForContactus();
            if (soldToList != null && soldToList.size() >= 1) {
                for (final B2BUnitModel b2bunit : soldToList) {
                    String b2bUnitArray[] = b2bunit.getUid().split("_");
                    if (b2bUnitArray.length > 3) {
                        final String basestore = b2bUnitArray[1] + "_" + b2bUnitArray[2] + "_" + b2bUnitArray[3];
                        if (!basestring.contains(basestore)) {
                            final String basestorecode = basestore + "_BaseStore";
                            contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport"));
                            basestring.add(basestore);
                        }
                    } else {
                        final Set<B2BUnitModel> salesAreasForUser = getSalesAreaForSoldTo(b2bunit.getUid(), geEdgeCustomer);
                        for (final B2BUnitModel salesarea : salesAreasForUser) {
                            String salesAreaArray[] = salesarea.getUid().split("_");
                            if (salesAreaArray.length > 3) {
                                final String basestore = salesAreaArray[1] + "_" + salesAreaArray[2] + "_" + salesAreaArray[3];
                                if (!basestring.contains(basestore)) {
                                    final String basestorecode = basestore + "_BaseStore";
                                    contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport"));
                                }
                                basestring.add(basestore);
                            }
                        }
                    }
                }
            }

            //final B2BUnitModel defaultB2Bunit = geEdgeCustomer.getDefaultB2BUnit();
            /*
             * final B2BUnitModel defaultSoldtoUnit = geEdgeCustomer.getDefaultSoldTo(); if(null != defaultSoldtoUnit) { if
             * (defaultSoldtoUnit.getUid().split("_").length > 1) { final Set<B2BUnitModel> salesAreasForUser =
             * getSalesAreaForSoldTo(defaultSoldtoUnit.getUid(), geEdgeCustomer); if(!salesAreasForUser.isEmpty()) {
             * for(final B2BUnitModel salesarea : salesAreasForUser) { final String basestore =
             * salesarea.getUid().split("_")[1]; final String basestorecode = basestore + "_BaseStore"; final String
             * soldToUid = salesarea.getUid().split("_")[0];
             * contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport",soldToUid)); } }
             *
             *
             * final String basestore = defaultB2Bunit.getUid().split("_")[1]; final String basestorecode = basestore +
             * "_BaseStore"; final String soldToUid = defaultB2Bunit.getUid().split("_")[0];
             * //contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport"));
             * contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport",soldToUid));
             *
             *
             * } }
             */
        }
        if (CollectionUtils.isNotEmpty(contactUsSettings)) {
            Collections.sort(contactUsSettings, new Comparator<ContactUsSettingsData>() {
                @Override
                public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2) {
                    return r1.getRegion().compareTo(r2.getRegion());
                }
            });
        }
        contactUsSettingsList.add(contactUsSettings);
        /*
         * final List<List<ContactUsSettingsData>> contactUsSettingsListSoldTo = getContactUsListForSoldTo(); for(int i
         * =0; i < contactUsSettingsListSoldTo.size(); i++) {
         * contactUsSettingsList.remove(contactUsSettingsListSoldTo.get(i)); }
         */
        return contactUsSettingsList;
    }

    @Override
    public List<List<ContactUsSettingsData>> getStaticContactUs() {
        final List<List<ContactUsSettingsData>> contactUsSettingsList = new ArrayList();
        final List<ContactUsSettingsData> contactUsSettings = new ArrayList<ContactUsSettingsData>();

        // Fetching the BHStaticContactUs data from DB and populating into ContactUsSettingsData List object
        contactUsSettings.addAll(retrieveStaticContactusList());

        if (CollectionUtils.isNotEmpty(contactUsSettings)) {
            try {
                Collections.sort(contactUsSettings, new Comparator<ContactUsSettingsData>() {
                    @Override
                    public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2) {
                        int result = 0;
                        result = r2.getCommerceTypeValue().compareTo(r1.getCommerceTypeValue());
                        if (result == 0) {
                            result = r1.getRegion().compareTo(r2.getRegion());
                        }
                        if (result == 0 && StringUtils.isNotBlank(r1.getSubRegion()) && StringUtils.isNotBlank(r2.getSubRegion())) {
                            result = r1.getSubRegion().compareTo(r2.getSubRegion());
                        }
                        return result;
                    }
                });
            } catch (RuntimeException re) {
                LOG.error("Exception while sorting in getStaticContactUs method");
            }
        }
        contactUsSettingsList.add(contactUsSettings);
        return contactUsSettingsList;
    }

    @Override
    public List<List<ContactUsSettingsData>> getContactUsListForCustomer(GEEdgeCustomerModel user) {
        List<List<ContactUsSettingsData>> contactUsSettingsListByCustomerCountry = new ArrayList();
        List<ContactUsSettingsData> contactUsSettings = new ArrayList<ContactUsSettingsData>();
        // Fetching the ContactUs data from DB by Customer Country and populating into ContactUsSettingsData List object
        contactUsSettings.addAll(retrieveContactusListByCountry(user));
        //Sorting based on the Support type (with Sales as first and Return 2nd), then sorting based on Region and so on
        if (CollectionUtils.isNotEmpty(contactUsSettings)) {
            try {
                Collections.sort(contactUsSettings, new Comparator<ContactUsSettingsData>() {
                    @Override
                    public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2) {
                        int result = 0;
                        result = r2.getCommerceTypeValue().compareTo(r1.getCommerceTypeValue());
                        if (result == 0) {
                            result = r1.getRegion().compareTo(r2.getRegion());
                        }
                        if (result == 0 && StringUtils.isNotBlank(r1.getSubRegion()) && StringUtils.isNotBlank(r2.getSubRegion())) {
                            result = r1.getSubRegion().compareTo(r2.getSubRegion());
                        }
                        return result;
                    }
                });
            } catch (RuntimeException re) {
                LOG.error("Exception while sorting in getStaticContactUs method");
            }
        }
        contactUsSettingsListByCustomerCountry.add(contactUsSettings);
        return contactUsSettingsListByCustomerCountry;
    }

    public List<List<ContactUsSettingsData>> getContactUsListForSoldTo() {
        final List<String> basestring = new ArrayList<String>();
        final List<List<ContactUsSettingsData>> contactUsSettingsListSoldTo = new ArrayList();
        final List<ContactUsSettingsData> contactUsSettings = new ArrayList<ContactUsSettingsData>();
        final UserModel user = userService.getCurrentUser();
        if (null != user && user instanceof GEEdgeCustomerModel) {
            final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) user;
            final B2BUnitModel defaultSoldtoUnit = geEdgeCustomer.getDefaultSoldTo();
            if (null != defaultSoldtoUnit) {
                final Set<B2BUnitModel> salesAreasForUser = getSalesAreaForSoldTo(defaultSoldtoUnit.getUid(), geEdgeCustomer);
                if (!salesAreasForUser.isEmpty()) {
                    for (final B2BUnitModel salesarea : salesAreasForUser) {
                        String salesAreaArray[] = salesarea.getUid().split("_");
                        if (salesAreaArray.length > 3) {
                            final String basestore = salesAreaArray[1] + "_" + salesAreaArray[2] + "_" + salesAreaArray[3];
                            final String basestorecode = basestore + "_BaseStore";
                            final String soldToUid = salesarea.getUid().split("_")[0];
                            contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport", soldToUid));
                        }
                    }
                }

                /*
                 * final String basestore = defaultB2Bunit.getUid().split("_")[1]; final String basestorecode = basestore +
                 * "_BaseStore"; final String soldToUid = defaultB2Bunit.getUid().split("_")[0];
                 * //contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport"));
                 * contactUsSettings.addAll(retrieveContactusListForBaseStoreUid(basestorecode, "ordersupport",soldToUid));
                 */
            }
        }

        if (CollectionUtils.isNotEmpty(contactUsSettings)) {
            Collections.sort(contactUsSettings, new Comparator<ContactUsSettingsData>() {
                @Override
                public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2) {
                    return r1.getRegion().compareTo(r2.getRegion());
                }
            });
        }
        contactUsSettingsListSoldTo.add(contactUsSettings);
        return contactUsSettingsListSoldTo;
    }

    @Override
    public Set<B2BUnitModel> getSoldToListForContactus() {
        List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
        final GEEdgeCustomerModel customer = (GEEdgeCustomerModel) userService.getCurrentUser();
        final Set<B2BUnitModel> b2bUnitModelList = new LinkedHashSet<B2BUnitModel>();
        if (null != customer && null != customer.getAllGroups()) {
            for (final PrincipalGroupModel myVal : customer.getAllGroups()) {
                if (myVal instanceof B2BUserGroupModel) {
                    for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups()) {
                        if (myB2b instanceof B2BUnitModel
                                & !myB2b.getUid().equalsIgnoreCase(Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO"))
                                && CustomerAccountGroups.contains(((B2BUnitModel) myB2b).getAccountGroup())) {
                            b2bUnitModelList.add((B2BUnitModel) myB2b);
                        }
                    }
                }
                if (myVal instanceof B2BUnitModel) {
                    if (!myVal.getUid().equalsIgnoreCase(Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO"))
                            && CustomerAccountGroups.contains(((B2BUnitModel) myVal).getAccountGroup())
                            && !myVal.getUid().contains(customer.getDefaultSoldTo().getUid())) {
                        b2bUnitModelList.add((B2BUnitModel) myVal);
                    }
                }
            }
        }
        return b2bUnitModelList;
    }

    private List<ContactUsSettingsData> retrieveContactusListForBaseStoreUid(final String basestorecode, final String supportType) {
        LOG.debug("retrieving contactus info for basestore " + basestorecode + " for support type " + supportType);
        final UserModel user = userService.getCurrentUser();
        String soldToUid = null;
        List<ContactusSettingsModel> contactusListForSoldTo = new ArrayList<ContactusSettingsModel>();
        final List<ContactusSettingsModel> contactusListForUser = new ArrayList<ContactusSettingsModel>();
        if (null != user && user instanceof GEEdgeCustomerModel) {
            final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) user;
            final B2BUnitModel defaultSoldtoUnit = geEdgeCustomer.getDefaultSoldTo();
            if (null != defaultSoldtoUnit) {
                final Set<B2BUnitModel> salesAreasForUser = getSalesAreaForSoldTo(defaultSoldtoUnit.getUid(), geEdgeCustomer);
                if (!salesAreasForUser.isEmpty()) {
                    for (final B2BUnitModel salesarea : salesAreasForUser) {
                        String salesAreaArray[] = salesarea.getUid().split("_");
                        if (salesAreaArray.length > 3) {
                            soldToUid = salesAreaArray[0];
                            final String basestore = salesAreaArray[1] + "_" + salesAreaArray[2] + "_" + salesAreaArray[3];
                            final String basestoreCode = basestore + "_BaseStore";
                            contactusListForSoldTo = bhgeUserProfileDao.getContactUsForCurrentSoldto(basestoreCode, supportType,
                                    soldToUid);
                            contactusListForUser.addAll(contactusListForSoldTo);
                        }
                    }
                }
            }
        }
        List<ContactusSettingsModel> contactusList = bhgeUserProfileDao.getContactUsFromBaseStoreUid(basestorecode, supportType);
        if (!contactusListForUser.isEmpty()) {
            for (int i = 0; i < contactusListForUser.size(); i++) {
                if (contactusList.contains(contactusListForUser.get(i))) {
                    contactusList.remove(contactusListForUser.get(i));
                }
            }
            modelService.saveAll(contactusList);
        }
        if (CollectionUtils.isEmpty(contactusList)) {
            contactusList = bhgeUserProfileDao.getContactUsFromBaseStoreUid(basestorecode, "defaultsupport");
            if (!contactusListForUser.isEmpty()) {
                for (int i = 0; i < contactusListForUser.size(); i++) {
                    if (contactusList.contains(contactusListForUser.get(i))) {
                        contactusList.remove(contactusListForUser.get(i));
                    }
                }
                modelService.saveAll(contactusList);
            }
        }
        final List<ContactUsSettingsData> contactsettingsdata = bhgeCustomerPopulator.populateConatctUsSettings(contactusList);
        if (CollectionUtils.isNotEmpty(contactsettingsdata)) {
            LOG.debug(contactsettingsdata.size() + " contact infos found for basestore " + basestorecode);
            Collections.sort(contactsettingsdata, new Comparator<ContactUsSettingsData>() {
                public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2) {
                    return r1.getRegion().compareTo(r2.getRegion());
                }
            });
        } else {
            LOG.debug("Contact information is not available for base store " + basestorecode);
        }
        return contactsettingsdata;

    }

    private List<ContactUsSettingsData> retrieveContactusListForBaseStoreUid(final String basestorecode, final String supportType,
                                                                             final String soldtoUid) {
        LOG.debug("retrieving contactus info for basestore " + basestorecode + " for support type " + supportType
                + " for Customer Account " + soldtoUid);
        List<ContactusSettingsModel> contactusList = bhgeUserProfileDao.getContactUsForCurrentSoldto(basestorecode, supportType,
                soldtoUid);
        if (CollectionUtils.isEmpty(contactusList)) {
            contactusList = bhgeUserProfileDao.getContactUsForCurrentSoldto(basestorecode, "defaultsupport", soldtoUid);
        }
        final List<ContactUsSettingsData> contactsettingsdata = bhgeCustomerPopulator.populateConatctUsSettings(contactusList);
        if (CollectionUtils.isNotEmpty(contactsettingsdata)) {
            LOG.debug(contactsettingsdata.size() + " contact infos found for basestore " + basestorecode);
            Collections.sort(contactsettingsdata, new Comparator<ContactUsSettingsData>() {
                public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2) {
                    return r1.getRegion().compareTo(r2.getRegion());
                }
            });
        } else {
            LOG.debug("Contact information is not available for base store " + basestorecode);
        }
        return contactsettingsdata;

    }

    private List<ContactUsSettingsData> retrieveStaticContactusList() {
        LOG.debug("Retrieving Static contactus info");
        List<BHStaticContactUsModel> contactusList = bhgeUserProfileDao.getStaticBHContactUsList();

        final List<ContactUsSettingsData> contactsettingsdata = bhgeCustomerPopulator.populateStaticConatctUsSettings(contactusList);
        if (CollectionUtils.isNotEmpty(contactsettingsdata)) {
            LOG.debug(contactsettingsdata.size() + " contact infos found");
            /*Collections.sort(contactsettingsdata, new Comparator<ContactUsSettingsData>()
			{
				public int compare(final ContactUsSettingsData r1, final ContactUsSettingsData r2)
				{
					return r1.getRegion().compareTo(r2.getRegion());
				}
			});*/
        } else {
            LOG.debug("Contact information is not available");
        }
        return contactsettingsdata;

    }

    private List<ContactUsSettingsData> retrieveContactusListByCountry(GEEdgeCustomerModel user) {
        LOG.debug("Inside retrieveContactusList method ");
        List<ContactUsSettingsData> contactsettingsdata = Collections.EMPTY_LIST;
        try {
            B2BUnitModel defaultB2BUnit = user.getDefaultB2BUnit();
            B2BUnitModel parentB2bUnitModel = getParentB2bUnitModel(defaultB2BUnit);
            if (null != parentB2bUnitModel) {
                AddressData addressData = findSoldToAddressForSearchPop(parentB2bUnitModel);
                if (null != addressData && null != addressData.getCountry() && StringUtils.isNotBlank(addressData.getCountry().getIsocode())) {
                    // Getting Region value according to ContactusSettingsModel
                    String regionValue = getRegionValue(addressData);
                    List<ContactusSettingsModel> contactusList = bhgeUserProfileDao.getContactUsByRegion(regionValue);
                    if (CollectionUtils.isNotEmpty(contactusList)) {
                        contactsettingsdata = bhgeCustomerPopulator.populateConatctUsSettings(contactusList);
                    }
                }
            }
        } catch (RuntimeException re) {
            LOG.error("Exception in retrieveContactusListByCountry");
        }
        return contactsettingsdata;
    }

    @Override
    public String getRegionValue(AddressData addressData) {
        LOG.info("Inside getRegionValue method");
        String region = "";
        // Getting the region values from properties file.
        String ASIA = Config.getParameter("bhge.contactus.region.asia");
        String ASIAPACIFIC = Config.getParameter("bhge.contactus.region.asiapacific");
        String CHINAREGION = Config.getParameter("bhge.contactus.region.chinaregion");
        String INDIAREGION = Config.getParameter("bhge.contactus.region.indiaregion");
        String MENATREGION = Config.getParameter("bhge.contactus.region.menatregion");
        String SSAREGION = Config.getParameter("bhge.contactus.region.ssaregion");
        String MIDDLEEAST = Config.getParameter("bhge.contactus.region.middleeast");
        String EUROPEREGION = Config.getParameter("bhge.contactus.region.europeregion");
        String EUROPE = Config.getParameter("bhge.contactus.region.europe");
        String RUSSIACISREGION = Config.getParameter("bhge.contactus.region.russiacisregion");
        String RUSSIACIS = Config.getParameter("bhge.contactus.region.russiacis");

        try {
            // fetching the Country isocode
            BHGERegisterKeyValueDataModel countryValueData = bhgeEmailServiceDao.fetchLinkedRegion(addressData.getCountry().getIsocode());
            if (null != countryValueData && null != countryValueData.getParentAttrib() && null != countryValueData.getParentAttrib().getParentAttrib()) {
                // Getting Region value from BHGERegisterKeyValueDataModel
                String bhgeRegisterKeyValueDataRegion = countryValueData.getParentAttrib().getParentAttrib().getAttributeKey();
                if (StringUtils.isNotBlank(bhgeRegisterKeyValueDataRegion)) {
                    region = bhgeRegisterKeyValueDataRegion;
                    // Returning "Asia" in case of "AsiaPacific" and "ChinaRegion"
                    if (ASIAPACIFIC.equals(bhgeRegisterKeyValueDataRegion) || CHINAREGION.equals(bhgeRegisterKeyValueDataRegion)) {
                        region = ASIA;
                    } // Returning "MiddleEast" in case of "IndiaRegion", "MENATRegion" and "SSARegion" (i.e. "Sub-Saharan Africa)"
                    else if (INDIAREGION.equals(bhgeRegisterKeyValueDataRegion) || MENATREGION.equals(bhgeRegisterKeyValueDataRegion)
                            || SSAREGION.equals(bhgeRegisterKeyValueDataRegion)) {
                        region = MIDDLEEAST;
                    } // Returning "Europe" in case of "EuropeRegion"
                    else if (EUROPEREGION.equals(bhgeRegisterKeyValueDataRegion)) {
                        region = EUROPE;
                    } // Returning "Russia-CIS" in case of "RussiaCISRegion"
                    else if (RUSSIACISREGION.equals(bhgeRegisterKeyValueDataRegion)) {
                        region = RUSSIACIS;
                    }
                }
            }
        } catch (RuntimeException re) {
            LOG.error("Exception in getRegionValue method");
        }
        //LOG.info("Derived region is : " + region);
        return region;
    }

    @Override
    public String getUserType() {
        final UserModel user = userService.getCurrentUser();
        if (user instanceof GEEdgeCustomerModel currentCustomer) {
            final B2BUnitModel b2bUnit = currentCustomer.getDefaultSoldTo();
            if (null != b2bUnit && StringUtils.isNotEmpty(b2bUnit.getCustomerClass()) && null != b2bUnit.getCustomerClassification()) {
                final BHGECustomerClassificationModel customerClassification = b2bUnit.getCustomerClassification();
                if (null != customerClassification && StringUtils.isNotEmpty(customerClassification.getCustomerType())) {
                    return customerClassification.getCustomerType();
                }
            }
        }
        return "";
    }

    @Override
    public B2BUnitModel getParentB2bUnitModel(B2BUnitModel defaultB2BUnitModel) {
        B2BUnitModel parentB2bUnitModel = null;
        try {
            if (defaultB2BUnitModel != null) {
                final String[] defaultParentB2BUnit = StringUtils.split(defaultB2BUnitModel.getUid(), "_");
                if (defaultParentB2BUnit != null && defaultParentB2BUnit.length >= 3) {
                    if (StringUtils.isNotEmpty(defaultParentB2BUnit[0])) {
                        parentB2bUnitModel = (B2BUnitModel) b2bUnitService.getUnitForUid(defaultParentB2BUnit[0]);
                    }
                }
            }
        } catch (RuntimeException re) {
            LOG.error("Exception in getParentB2bUnitModel");
            re.printStackTrace();
        }
        return parentB2bUnitModel;
    }

    /**
     * @param bhgeUser
     */
    @Override
    public Map getFavoriteSoldToMap(final GEEdgeCustomerModel bhgeUser) {
        final List<B2BUnitModel> favoriteSoldTos = bhgeUser.getFavoriteSoldTos();
        final Map<String, B2BUnitModel> map = new HashMap<String, B2BUnitModel>();
        for (final B2BUnitModel i : favoriteSoldTos) {
            map.put(i.getUid(), i);
        }
        return map;
    }

    public boolean uploadMediatoSoldto(final MultipartFile file, final String soldtoUid) {
        try {
            if ((null != file) && ((!file.isEmpty())) && null != soldtoUid) {
                return userProfileService.uploadMediatoSoldto(file, soldtoUid);
            }
        } catch (final Exception e) {
            LOG.error("Error in uploading media to the Sold to Unit." + ExceptionUtils.getStackTrace(e));
            return false;
        }
        return true;

    }

    public boolean removeMediaofSoldto(final String soldtoUid) {
        try {
            if (null != soldtoUid) {
                return userProfileService.removeMediaofSoldto(soldtoUid);
            }
        } catch (final Exception e) {
            LOG.error("Error in deleting media from the Sold to Unit." + ExceptionUtils.getStackTrace(e));
            return false;
        }
        return true;

    }

    @Override
    public List<AddressModel> getAddressesForCurrentCustomerAccountAndSAPCustomerID(final GetAddressFormData form) {
        return userProfileService.getAddressesForCurrentCustomerAccountAndSAPCustomerID(form);
    }

    /*
     * (non-Javadoc)
     *
     * @see com.bhge.facades.user.BHGEUserProfileFacade#getCountryToUnitMappingForAnonymousUser()
     */
    public BHGEAnonymousUserCatalogData getCountryToUnitMappingForAnonymousUser(final CountryModel defaultCountryModel) {
        final BHGEAnonymousUserCatalogModel anonymousCatalogModel = bhgeUserProfileService
                .getCountryToUnitMappingForAnonymousUser(defaultCountryModel);
        return anonymousCatalogModel != null ? bhgeAnonymousCatalogConverter.convert(anonymousCatalogModel) : null;
    }

    public BHGEAnonymousUserCatalogModel getCountryandSalesOrgMappingForAnonymousUser(final String salesOrg, final String distributionChannel,
                                                                                      final String division, final CountryModel defaultCountryModel) {
        final BHGEAnonymousUserCatalogModel anonymousCatalogModel = bhgeUserProfileService
                .getCountryandSalesOrgMappingForAnonymousUser(salesOrg, distributionChannel, division, defaultCountryModel);
        return anonymousCatalogModel;
    }

    public BHGECategorytoSalesOrgModel getSalesOrgToCategoryMappingForAnonymousUser(final String categoryCode) {
        final BHGECategorytoSalesOrgModel anonymousSalesOrgModel = bhgeUserProfileService.getSalesOrgToCategoryMappingForAnonymousUser(categoryCode);
        return anonymousSalesOrgModel;
    }

    public List<BHGECategorytoSalesOrgModel> getAllSalesOrgToCategoryForAnonymousUser() {
        return bhgeUserProfileService.getAllSalesOrgToCategoryForAnonymousUser();
    }

    @Override
    public List<RegionData> getRegionsForCountryIso(final String countryIso) {
        LOG.info("Inside UserProfile Facade class");
        List<RegionData> actualRegionsData = null;

        final List<RegionModel> regionModelList = userProfileService.getRegionsForCountryIso(countryIso);
        if (regionModelList != null && regionModelList.size() > 0) {
            actualRegionsData = Converters.convertAll(regionModelList, regionConverter);
            if (actualRegionsData != null && actualRegionsData.size() > 0) {

                Collections.sort(actualRegionsData, new Comparator<RegionData>() {
                    public int compare(final RegionData r1, final RegionData r2) {
                        if (r1 != null && r1.getName() != null && r2 != null && r2.getName() != null) {
                            return r1.getName().compareTo(r2.getName());
                        }
                        return 0;
                    }
                });
            }
            return actualRegionsData;
        }
        return null;
    }

    @Override
    public List<B2BUnitData> getCustomerB2Buntis() {
        Stopwatch stopwatch = Stopwatch.createStarted();
        LOG.info("getCustomerB2Buntis - Start: " + stopwatch);

        final UserModel user = userService.getCurrentUser();
        final List<B2BUnitData> b2bUnitDatas = new ArrayList<>();

        if (!(user instanceof GEEdgeCustomerModel)) {
            stopwatch.stop();
            LOG.info("getCustomerB2Buntis - End: " + stopwatch.elapsed(TimeUnit.MILLISECONDS));
            return b2bUnitDatas;
        }

        final GEEdgeCustomerModel bhgeUser = (GEEdgeCustomerModel) user;
        Collection<CategoryModel> categoriesFromUser = bhgeUser.getUserAccessibleCategories();
        Boolean hasVisibleVategories = true;
        final Map<String, B2BUnitModel> favorites = getFavoriteSoldToMap(bhgeUser);
        populateRecentSoldtoTime(bhgeUser);

        Set<B2BUnitModel> soldToList = new HashSet<>();
        if (Boolean.TRUE.equals(bhgeUser.getIsInternalUser())) {
            soldToList = bhgeUser.getRecentSoldtoTime().keySet();
        } else {
            for (PrincipalModel principal : bhgeUser.getGroups()) {
                if (principal instanceof B2BUnitModel && principal.getUid() != null && principal.getUid().contains("_")) {
                    String[] childB2BUnitSplit = principal.getUid().split("_");
                    if (childB2BUnitSplit.length >= 3) {
                        B2BUnitModel parentUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(childB2BUnitSplit[0]);
                        if (parentUnit != null) {
                            soldToList.add(parentUnit);
                        }
                    }
                }
            }
        }

        for (B2BUnitModel soldTo : soldToList) {
            if (!BhgeCoreConstants.ECOMMFLAG_NE.equals(soldTo.getEcommerceFlag())) {
                List<BhgeSalesAreaObjectData> salesAreaObjDataList = new ArrayList<>();
                for (B2BUnitModel salesArea : getSalesAreaForSoldTo(soldTo.getUid(), bhgeUser)) {
                    String uid = salesArea.getUid();
                    if (uid != null && uid.contains("_")) {
                        String[] parts = uid.split("_");
                        if (parts.length >= 3) {
                            SAPConfigurationModel config = baseStoreService.findSAPConfigurationWithParams(parts[1], parts[2], parts[3]);
                            if (config != null) {
                                BaseStoreModel store = baseStoreService.findBaseStoreBySAPConfiguration(config.getPk().toString());
                                if (store != null) {
                                    BhgeSalesAreaObjectData obj = new BhgeSalesAreaObjectData();
                                    String salesOrg = parts[1];
                                    String distributionChannel = parts[2];
                                    String division = parts[3];
                                    Collection<CategoryModel> categoriesFromSalesOrg = bhgeB2BUnitService.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
                                    if (CollectionUtils.isNotEmpty(categoriesFromSalesOrg) && CollectionUtils.isNotEmpty(categoriesFromUser)) {
                                        hasVisibleVategories = categoriesFromSalesOrg.stream().
                                                anyMatch(categoriesFromUser::contains);
                                    }
                                    obj.setSalesAreaName(store.getName());
                                    if (store.getAddress() != null) {
                                        obj.setAddress(addressConverter.convert(store.getAddress()));
                                    }
                                    obj.setSalesAreaId(uid);
                                    obj.setActive(uid.equalsIgnoreCase(Optional.ofNullable(bhgeUser.getDefaultB2BUnit()).map(B2BUnitModel::getUid).orElse("")));
                                    if (hasVisibleVategories) {
                                        salesAreaObjDataList.add(obj);
                                    }
                                }
                            }
                        }
                    }
                }

                AddressData address = findSoldToAddressForSearchPop(soldTo);
                final List<AddressData> addressList = new ArrayList<AddressData>();
                if (address != null) {
                    addressList.add(address);
                }

                B2BUnitData unitData = new B2BUnitData();
                unitData.setName(soldTo.getName());
                unitData.setUid(soldTo.getUid());
                unitData.setAddresses(addressList);
                unitData.setSalesAreaObjectDataList(salesAreaObjDataList);
                unitData.setRecent(true);
                unitData.setActive(soldTo.getUid().equalsIgnoreCase(Optional.ofNullable(bhgeUser.getDefaultSoldTo()).map(B2BUnitModel::getUid).orElse("")));

                if (unitData.isActive() && bhgeUser.getDefaultB2BUnit() != null && bhgeUser.getDefaultB2BUnit().getCurrency() != null) {
                    unitData.setCurrency(currencyConverter.convert(bhgeUser.getDefaultB2BUnit().getCurrency()));
                }

                if (!soldTo.getMedias().isEmpty()) {
                    unitData.setMediaurl(soldTo.getMedias().iterator().next().getURL());
                }
                unitData.setFavorite(favorites.containsKey(soldTo.getUid()));
                b2bUnitDatas.add(unitData);
            }
        }

        stopwatch.stop();
        LOG.info("getCustomerB2Buntis - End: " + stopwatch.elapsed(TimeUnit.MILLISECONDS));
        return b2bUnitDatas;
    }

    public void populateRecentSoldtoTime(final GEEdgeCustomerModel bhgeUser) {
        Map<B2BUnitModel, Date> recentSoldToTime = bhgeUser.getRecentSoldtoTime();

        if (recentSoldToTime.isEmpty()) {
            Set<B2BUnitModel> soldToSet = getSoldToListForUser();
            int maxSize = Integer.parseInt(Config.getParameter(BHGE_RECENT_CUSTOMER_SIZE));
            Date currentDate = Calendar.getInstance().getTime();

            Map<B2BUnitModel, Date> sortedMapByTime = soldToSet.stream()
                    .limit(maxSize)
                    .collect(Collectors.toMap(
                            soldTo -> soldTo,
                            soldTo -> currentDate,
                            (e1, e2) -> e1,
                            LinkedHashMap::new
                    ));

            bhgeUser.setRecentSoldtoTime(sortedMapByTime);
            modelService.save(bhgeUser);
            return;
        }

        // Ensure defaultSoldTo is present in the map
        B2BUnitModel defaultSoldTo = bhgeUser.getDefaultSoldTo();
        if (defaultSoldTo != null && recentSoldToTime.keySet().stream()
                .noneMatch(unit -> unit.getUid().equalsIgnoreCase(defaultSoldTo.getUid()))) {
            recentSoldToTime.put(defaultSoldTo, Calendar.getInstance().getTime());
            bhgeUser.setRecentSoldtoTime(recentSoldToTime);
            modelService.save(bhgeUser);
        }

        // Sort the map by date descending
        Map<B2BUnitModel, Date> sortedMapByTime = recentSoldToTime.entrySet().stream()
                .sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new
                ));

        bhgeUser.setRecentSoldtoTime(sortedMapByTime);
    }

    @Override
    public BHGECustomerData getCurrentCustomer() {

        Stopwatch stopwatch = Stopwatch.createStarted();
        LOG.info("getCurrentCustomer - Start: " + stopwatch);
        final UserModel user = userService.getCurrentUser();
        BHGECustomerData bhgeCustomerData = new BHGECustomerData();
        if (user instanceof GEEdgeCustomerModel) {
            bhgeCustomerData = getUserProfile(user.getUid());
            return bhgeCustomerData;
        }
        return bhgeCustomerData;
    }

    @Override
    public void populateSoldToSelectionData(Model model, final HttpServletRequest request) {

        Stopwatch stopwatch = Stopwatch.createStarted();
        LOG.info("populateSoldToSelectionData - Start: " + stopwatch);

        final UserModel user = userService.getCurrentUser();
        if (null != user && user instanceof GEEdgeCustomerModel) {
            final GEEdgeCustomerModel bhgeUser = (GEEdgeCustomerModel) user;
            model.addAttribute("currentUser", bhgeUser);
            final Set<B2BUnitModel> soldToList = getSoldToListForUser();
            final B2BUnitModel defaultB2BUnitModel = bhgeUser.getDefaultB2BUnit();
            final B2BUnitModel defaultSoldTo = bhgeUser.getDefaultSoldTo();

            if (defaultSoldTo != null) {
                sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA, defaultB2BUnitModel);
                sessionService.setAttribute(BhgeCoreConstants.SESSION_BRANCH, defaultB2BUnitModel);
                sessionService.setAttribute(BhgeCoreConstants.SESSION_UNIT, defaultB2BUnitModel);
                sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO,
                        bhgeSoldToUtil.getBHGESoldToData(defaultSoldTo));
                sessionService.setAttribute(BhgeCoreConstants.DEFAULT_SESSION_SOLDTO_NAME,
                        defaultSoldTo.getLocName() + " - " + defaultSoldTo.getUid());
            }

            if (defaultB2BUnitModel != null && defaultB2BUnitModel.getCurrency() != null) {
                commonI18NService.setCurrentCurrency(defaultB2BUnitModel.getCurrency());
            }

            final List<B2BUnitData> allParentSoldTos = new ArrayList<B2BUnitData>();

            for (final B2BUnitModel parentSoldTo : soldToList) {
                final B2BUnitData parentSoldToData = new B2BUnitData();
                parentSoldToData.setUid(parentSoldTo.getUid());
                parentSoldToData.setName(parentSoldTo.getName());
                allParentSoldTos.add(parentSoldToData);
            }

            model.addAttribute("allParentSoldTos", allParentSoldTos);
            request.getSession().setAttribute("allParentSoldTos", allParentSoldTos);
            sessionService.setAttribute("allParentSoldTos", allParentSoldTos);

            if (defaultB2BUnitModel != null) {
                final String[] defaultParentB2BUnit = StringUtils.split(defaultB2BUnitModel.getUid(), "_");
                if (defaultParentB2BUnit != null && defaultParentB2BUnit.length >= 3) {
                    if (StringUtils.isNotEmpty(defaultParentB2BUnit[0])) {
                        final B2BUnitModel soldtoUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(defaultParentB2BUnit[0]);

                        LOG.info("####-defaultB2BUnitModel" + defaultB2BUnitModel);
                        LOG.info("####+defaultParentB2BUnit" + defaultParentB2BUnit);
                        LOG.info("####+defaultParentB2BUnit[0]" + defaultParentB2BUnit[0]);

                        LOG.info("soldtoUnit : " + soldtoUnit);
                        final SalesAreaData salesAreaData = new SalesAreaData();
                        final SAPConfigurationModel baseStoreConfiguration = baseStoreService.findSAPConfigurationWithParams(
                                defaultParentB2BUnit[1], defaultParentB2BUnit[2], defaultParentB2BUnit[3]);
                        salesAreaData.setSalesOrg(
                                baseStoreConfiguration != null ? baseStoreConfiguration.getSapcommon_salesOrganization() : "");
                        final BaseStoreModel baseStore = baseStoreService
                                .findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
                        salesAreaData.setBaseStoreName(baseStore != null ? baseStore.getName() : "");
                        salesAreaData.setB2bUnitUid(defaultB2BUnitModel.getUid());
                        salesAreaData.setB2bUnitName(defaultB2BUnitModel.getName());
                        salesAreaData.setCurrencyIso(
                                defaultB2BUnitModel.getCurrency() != null ? defaultB2BUnitModel.getCurrency().getIsocode() : "");
                        salesAreaData.setCurrencySymbol(
                                defaultB2BUnitModel.getCurrency() != null ? defaultB2BUnitModel.getCurrency().getSymbol() : "");

                        final String mediaURL = soldtoUnit != null && CollectionUtils.isNotEmpty(soldtoUnit.getMedias())
                                && soldtoUnit.getMedias().iterator().hasNext()
                                ? soldtoUnit.getMedias().iterator().next().getURL().toString() : "";
                        salesAreaData.setCompanyLogoURL(mediaURL);

                        model.addAttribute("defaultSalesAreaData", salesAreaData);
                        request.getSession().setAttribute("defaultSalesAreaData", salesAreaData);
                        sessionService.setAttribute("defaultSalesAreaData", salesAreaData);
                    }

                }
            }

            if (sessionService.getAttribute("defaultCurrencyFormat") == null) {
                String currencyFormat = DEFAULT_CURRENCY_FORMAT_CODE;
                if (bhgeUser.getDefaultCurrencyFormat() != null
                        && StringUtils.isNotBlank(bhgeUser.getDefaultCurrencyFormat().getCode())) {
                    currencyFormat = bhgeUser.getDefaultCurrencyFormat().getCode();
                }
                request.getSession().setAttribute("defaultCurrencyFormat", StringEscapeUtils.escapeHtml4(currencyFormat));
                sessionService.setAttribute("defaultCurrencyFormat", StringEscapeUtils.escapeHtml4(currencyFormat));
            }

            model.addAttribute("showChangeSoldto", Boolean.TRUE);
        }

        stopwatch.stop();
        long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
        LOG.info("populateSoldToSelectionData - End: " + timeElapsed);
    }

    @Override
    public List<BhgeSalesAreaObjectData> getSalesOrgforGuestUser(final String salesOrgId) {
        if (userService.isAnonymousUser(userService.getCurrentUser())) {
            final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
            final CountryModel countryModel = baseStoreModel.getDefaultCountry();
            BHGEAnonymousUserCatalogData anonymousUserCatalogData = null;
            if (StringUtils.isEmpty(salesOrgId) || salesOrgId.equalsIgnoreCase(UNDEFINED)) {
                if (null != countryModel) {
                    anonymousUserCatalogData = getCountryToUnitMappingForAnonymousUser(countryModel);
                    if (Objects.isNull(anonymousUserCatalogData)) {
                        final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao.getCountryToUnitMappingListForAnonymousUser(countryModel);
                        if (CollectionUtils.isNotEmpty(anonymousUserCatalogList)) {
                            final BHGEAnonymousUserCatalogModel anonymousUserCatalogModel = anonymousUserCatalogList.get(0);
                            anonymousUserCatalogData = bhgeAnonymousCatalogConverter.convert(anonymousUserCatalogModel);
                        }
                    }
                }
            } else {
                String salesAreaId = salesOrgId;
                String[] salesAreaArray = null;

                if (null != salesAreaId) {
                    salesAreaArray = salesAreaId.split("_");
                    if (null != salesAreaArray && salesAreaArray.length >= 2) {
                        BHGEAnonymousUserCatalogModel anonymousUserCatalogModel = bhgeUserProfileService.getCountryandSalesOrgMappingForAnonymousUser(salesAreaArray[0],
                                salesAreaArray[1], salesAreaArray[2], countryModel);
                        anonymousUserCatalogData = bhgeAnonymousCatalogConverter.convert(anonymousUserCatalogModel);
                    }
                }
            }
            final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao
                    .getCountryToUnitMappingListForAnonymousUser(countryModel);
            //final List<BhgeSalesAreaObject> salesAreaObjList = new ArrayList<BhgeSalesAreaObject>();
            final List<BhgeSalesAreaObjectData> salesAreaObjList = new ArrayList<BhgeSalesAreaObjectData>();
            if (CollectionUtils.isNotEmpty(anonymousUserCatalogList)) {
                for (final BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList) {
                    if (anonymousUserCatalog.getSalesOrg() != null && anonymousUserCatalog.getDistributionChannel() != null
                            && anonymousUserCatalog.getDivision() != null) {
                        final BhgeSalesAreaObjectData obj = new BhgeSalesAreaObjectData();
                        final SAPConfigurationModel baseStoreConfiguration = baseStoreService.findSAPConfigurationWithParams(
                                anonymousUserCatalog.getSalesOrg(), anonymousUserCatalog.getDistributionChannel(),
                                anonymousUserCatalog.getDivision());
                        if (baseStoreConfiguration != null) {
                            final BaseStoreModel baseStore = baseStoreService
                                    .findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
                            if (baseStore != null) {
                                obj.setSalesAreaName(baseStore.getName());
                                if (baseStore.getAddress() != null) {
                                    obj.setAddress(addressConverter.convert(baseStore.getAddress()));
                                }
                            }
                        }
                        final String salesOrgData = anonymousUserCatalog.getSalesOrg() + "_"
                                + anonymousUserCatalog.getDistributionChannel() + "_" + anonymousUserCatalog.getDivision();
                        obj.setSalesAreaId(salesOrgData);

                        if (null != anonymousUserCatalogData && anonymousUserCatalogData.getSalesOrg().equalsIgnoreCase(anonymousUserCatalog.getSalesOrg())
                                && anonymousUserCatalogData.getDistributionChannel().equalsIgnoreCase(anonymousUserCatalog.getDistributionChannel())
                                && anonymousUserCatalogData.getDivision().equalsIgnoreCase(anonymousUserCatalog.getDivision())) {
                            obj.setActive(true);
                        }
                        salesAreaObjList.add(obj);
                    }
                }

            }
            return salesAreaObjList;
        } else {
            return null;
        }

    }

    @Override
    public BhgeSalesAreaObjectData getGuestSalesOrgforCategory(final String categoryCode) {
        BhgeSalesAreaObjectData bhgeSalesAreaObjectData = new BhgeSalesAreaObjectData();
        try {
            final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
            final CountryModel countryModel = baseStoreModel.getDefaultCountry();
            if (Objects.nonNull(countryModel)) {
                final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode(categoryCode);
                final Collection<CategoryModel> allAllowedCategories = new ArrayList<CategoryModel>();
                allAllowedCategories.addAll(category.getAllSubcategories());
                allAllowedCategories.addAll(category.getAllSupercategories());
                allAllowedCategories.add(category);
                return getAnonymousUserDataModel(countryModel, allAllowedCategories);
            } else {
                return populateDefaultBhgeSalesAreaObject(bhgeSalesAreaObjectData, countryModel);
            }
        } catch (Exception ex) {
            return bhgeSalesAreaObjectData;
        }

    }

    @Override
    public BhgeSalesAreaObjectData getGuestSalesOrgforProduct(final String productCode) {
        BhgeSalesAreaObjectData bhgeSalesAreaObjectData = new BhgeSalesAreaObjectData();
        try {
            final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeFacadesConstants.GUEST_BASE_STORE_UID);
            final CountryModel countryModel = baseStoreModel.getDefaultCountry();
            if (Objects.nonNull(countryModel)) {
                final GEEdgeProductModel productModel = (GEEdgeProductModel) productService.getProductForCode(productCode);
                final Collection<CategoryModel> allAllowedCategories = new ArrayList<CategoryModel>();
                productModel.getSupercategories().stream().forEach(category -> {
                    allAllowedCategories.addAll(category.getAllSupercategories());
                });
                return getAnonymousUserDataModel(countryModel, allAllowedCategories);
            } else {
                return populateDefaultBhgeSalesAreaObject(bhgeSalesAreaObjectData, countryModel);
            }
        } catch (Exception ex) {
            return bhgeSalesAreaObjectData;
        }

    }

    private BhgeSalesAreaObjectData getAnonymousUserDataModel(final CountryModel countryModel, final Collection<CategoryModel> allCategories) {
        BhgeSalesAreaObjectData bhgeSalesAreaObjectData = new BhgeSalesAreaObjectData();
        final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao.getCountryToUnitMappingListForAnonymousUser(countryModel);
        Optional<BHGEAnonymousUserCatalogModel> bhgeAnonymousUserCatalogModel = anonymousUserCatalogList.stream()
                .filter(userCatalogModel -> CollectionUtils.isNotEmpty(userCatalogModel.getCategories().stream()
                        .filter(cat -> allCategories.contains(cat)).collect(Collectors.toList()))).findFirst();
        return bhgeAnonymousUserCatalogModel.isPresent() ? populateCategorySpecificSalesAreaObject(bhgeSalesAreaObjectData, bhgeAnonymousUserCatalogModel.get())
                : populateDefaultBhgeSalesAreaObject(bhgeSalesAreaObjectData, countryModel);

    }

    private BhgeSalesAreaObjectData populateCategorySpecificSalesAreaObject(BhgeSalesAreaObjectData bhgeSalesAreaObjectData, BHGEAnonymousUserCatalogModel data) {
        return populateBhgeSalesAreaObject(bhgeSalesAreaObjectData, data.getSalesOrg(), data.getDistributionChannel(), data.getDivision());
    }

    private BhgeSalesAreaObjectData populateDefaultBhgeSalesAreaObject(BhgeSalesAreaObjectData bhgeSalesAreaObjectData, final CountryModel countryModel) {
        BHGEAnonymousUserCatalogData data = getCountryToUnitMappingForAnonymousUser(countryModel);
        String salesOrg = null;
        String distChannel = null;
        String division = null;
        if (Objects.isNull(data)) {
            BHGEAnonymousUserCatalogData anonymousUserCatalogData = null;
            final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao.getCountryToUnitMappingListForAnonymousUser(countryModel);
            if (CollectionUtils.isNotEmpty(anonymousUserCatalogList)) {
                final BHGEAnonymousUserCatalogModel anonymousUserCatalogModel = anonymousUserCatalogList.get(0);
                anonymousUserCatalogData = bhgeAnonymousCatalogConverter.convert(anonymousUserCatalogModel);
                salesOrg = anonymousUserCatalogData.getSalesOrg();
                distChannel = anonymousUserCatalogData.getDistributionChannel();
                division = anonymousUserCatalogData.getDivision();
            }
        } else {
            salesOrg = data.getSalesOrg();
            distChannel = data.getDistributionChannel();
            division = data.getDivision();
        }
        return populateBhgeSalesAreaObject(bhgeSalesAreaObjectData, salesOrg, distChannel, division);
    }

    private BhgeSalesAreaObjectData populateBhgeSalesAreaObject(BhgeSalesAreaObjectData bhgeSalesAreaObjectData, final String salesOrg, final String distChannel, final String division) {
        bhgeSalesAreaObjectData.setActive(true);
        bhgeSalesAreaObjectData.setSalesAreaId(salesOrg + "_" + distChannel + "_" + division);
        final SAPConfigurationModel baseStoreConfiguration = baseStoreService.findSAPConfigurationWithParams(salesOrg, distChannel, division);
        if (baseStoreConfiguration != null) {
            final BaseStoreModel baseStore = baseStoreService
                    .findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
            if (baseStore != null) {
                bhgeSalesAreaObjectData.setSalesAreaName(baseStore.getName());
                if (baseStore.getAddress() != null) {
                    bhgeSalesAreaObjectData.setAddress(addressConverter.convert(baseStore.getAddress()));
                }
            }
        }
        return bhgeSalesAreaObjectData;
    }

    public AddressData getPayerAddressFromCurrentUser() {
        final String sessionSoldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs().getUid();
        final String childSoldToName = sessionSoldTo + "_" + getUserDefaultSalesRegion();
        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);

        List<AddressModel> listOfPayerModel = new ArrayList<AddressModel>();
        AddressModel payerAddressModel = null;

        // Get the list of address attached to the sold to
        if (soldToChild != null) {
            final List<AddressModel> listOfAddress = (List<AddressModel>) soldToChild.getAddresses();
            for (final AddressModel address : listOfAddress) {
                if (address.getSapAddressUsage().equals("RG")) {

                    payerAddressModel = new AddressModel();
                    payerAddressModel = address;
                    listOfPayerModel.add(payerAddressModel);

                }
            }
        }
        AddressData payerAddressData = null;
        if (listOfPayerModel != null && listOfPayerModel.size() > 0) {
            payerAddressData = addressConverter.convert(listOfPayerModel.get(0));
            if (listOfPayerModel.get(0).getSapCustomerID() != null) {
                payerAddressData.setSapCustomerID(listOfPayerModel.get(0).getSapCustomerID());
            }
        }
        return payerAddressData;
    }

    public AddressData getBillToAddressFromCurrentUser() {
        final String sessionSoldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs().getUid();
        final String childSoldToName = sessionSoldTo + "_" + getUserDefaultSalesRegion();
        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);

        List<AddressModel> listOfBillToModel = new ArrayList<AddressModel>();

        // Get the list of address attached to the sold to
        if (soldToChild != null) {
            final List<AddressModel> listOfAddress = (List<AddressModel>) soldToChild.getAddresses();
            for (final AddressModel address : listOfAddress) {
                if (address.getSapAddressUsage().equals("RE")) {

                    listOfBillToModel.add(address);
                }
            }
        }
        AddressData billToAddressData = null;
        if (listOfBillToModel != null && listOfBillToModel.size() > 0) {
            billToAddressData = addressConverter.convert(listOfBillToModel.get(0));
        }
        return billToAddressData;
    }

    @Override
    public SearchPageData<AddressData> getPayerAddressForSalesArea(final GetAddressFormData data, final boolean accountPageFlag) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getPayerAddressesForMyAccountPage(data,
                accountPageFlag);
        final SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        final PaginationData pagination = searchPageModel.getPagination();

        if (CollectionUtils.isNotEmpty(results)) {
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressData.setSapCustomerID(addressModel.getSapCustomerID());
                addressDataList.add(addressData);
            }
        }

        searchPageData.setResults(addressDataList);
        searchPageData.setPagination(pagination);

        return searchPageData;
    }

    @Override
    public SearchPageData<AddressData> getBillToAddressForSalesArea(final GetAddressFormData data, final boolean accountPageFlag) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getBillToAddressesForMyAccountPage(data,
                accountPageFlag);
        final SearchPageData<AddressData> searchPageData = new SearchPageData<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        final PaginationData pagination = searchPageModel.getPagination();

        if (CollectionUtils.isNotEmpty(results)) {
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressData.setSapCustomerID(addressModel.getSapCustomerID());
                addressDataList.add(addressData);
            }
        }

        searchPageData.setResults(addressDataList);
        searchPageData.setPagination(pagination);

        return searchPageData;
    }

    @Override
    public List<AddressData> getPayerAddressForSalesAreaWs(final GetAddressFormData data, final boolean accountPageFlag) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getPayerAddressesForMyAccountPage(data,
                accountPageFlag);
        final List<AddressData> searchPageData = new ArrayList<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        //final PaginationData pagination = searchPageModel.getPagination();

        if (CollectionUtils.isNotEmpty(results)) {
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressData.setSapCustomerID(addressModel.getSapCustomerID());
                addressDataList.add(addressData);
            }
        }

        //searchPageData.setResults(addressDataList);
        //searchPageData.setPagination(pagination);
        return addressDataList;
    }

    @Override
    public List<AddressData> getBillToAddressForSalesAreaWs(final GetAddressFormData data, final boolean accountPageFlag) {

        final List<AddressData> addressDataList = new ArrayList<AddressData>();
        final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getBillToAddressesForMyAccountPage(data,
                accountPageFlag);
        final List<AddressData> searchPageData = new ArrayList<AddressData>();

        final List<AddressModel> results = searchPageModel.getResults();
        //final PaginationData pagination = searchPageModel.getPagination();

        if (CollectionUtils.isNotEmpty(results)) {
            final Iterator<AddressModel> iter = searchPageModel.getResults().iterator();
            while (iter.hasNext()) {
                final AddressModel addressModel = iter.next();
                final AddressData addressData = getAddressConverter().convert(addressModel);
                addressData.setSapCustomerID(addressModel.getSapCustomerID());
                addressDataList.add(addressData);
            }
        }

        //searchPageData.setResults(addressDataList);
        //searchPageData.setPagination(pagination);
        return addressDataList;
    }

    @Override
    public Collection<CategoryModel> fetchCategoriesFromSalesOrg(B2BUnitModel b2BUnitModel) {
        String salesOrg = null;
        String distributionChannel = null;
        String division = null;
        String[] defaultB2BId = null;
        final String defaultUnitId = b2BUnitModel.getUid();
        if (Objects.nonNull((defaultUnitId)) && defaultUnitId.contains("_")) {
            defaultB2BId = defaultUnitId.split("_");
            salesOrg = defaultB2BId[1];
            if (defaultB2BId.length > 2) {
                distributionChannel = defaultB2BId[2];
            }
            if (defaultB2BId.length > 3) {
                division = defaultB2BId[3];
            }
        }
        LOG.debug("doLogin salesOrg:-" + salesOrg);
        return bhgeB2BUnitService.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
    }

    @Override
    public Collection<BHGEApprovalDetailsModel> fetchProductLinesForCSRAccess(String userID) {
        LOG.info("fetchProductLinesForCSRAccess user:-" + userID);
        return bhgeB2BUnitService.fetchProductLinesForCSRAccess(userID);
    }

    @Override
    public void updateProductLine(String productLine) {
        LOG.info("updateProductLine productLine:-" + productLine);
        try {
            final UserModel user = userService.getCurrentUser();
            if (user instanceof GEEdgeCustomerModel currentUser) {
                final B2BUnitModel defaultB2BUnit = currentUser.getDefaultB2BUnit();
                if (null != defaultB2BUnit) {
                    final Map<String, String> productLineMap = Optional.ofNullable(currentUser.getProductLineMap())
                            .map(HashMap::new)
                            .orElseGet(HashMap::new);
                    productLineMap.put(defaultB2BUnit.getUid(), productLine);
                    LOG.info("sessionCart during customer switch started time : " + LocalDateTime.now());
                    final Stopwatch stopwatch = Stopwatch.createUnstarted();
                    stopwatch.start();
                    final CartModel cart = bhgeCartService.getSessionCart();
                    stopwatch.stop();
                    Long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
                    LOG.info("sessionCart during customer switch ended, time taken : " + timeElapsed.toString() + " time : " + LocalDateTime.now());
                    if (null != cart) {
                        cart.setProductLine(productLine);
                        modelService.save(cart);
                    }
                    currentUser.setProductLineMap(productLineMap);
                    modelService.save(currentUser);
                }
            } else {
                LOG.info("Product line not updated");
            }
        } catch (Exception e) {
            LOG.error("Exception while updating product line:-" + e.getMessage());
        }
    }

    @Override
    public void setProductLine(List<String> visibleCategories) {
        LOG.info("Cart Switch: Inside productLine method");
        final UserModel user = userService.getCurrentUser();
        if (user instanceof GEEdgeCustomerModel currentUser) {
            final B2BUnitModel b2bUnit = currentUser.getDefaultB2BUnit();
            final HashMap<String, String> productLineMap = Optional.ofNullable(currentUser.getProductLineMap())
                    .map(HashMap::new) // Clone the map to ensure mutability
                    .orElseGet(HashMap::new);
            String selectedProductLine = null;
            // Determine the product line
            if (CollectionUtils.isNotEmpty(visibleCategories) && visibleCategories.size() == 1) {
                selectedProductLine = visibleCategories.get(0);
                LOG.info("Cart Switch: Setting Product Line to session " + selectedProductLine);
            } else {
                selectedProductLine = productLineMap.get(b2bUnit.getUid());
            }
            if (StringUtils.isNotEmpty(selectedProductLine)) {
                productLineMap.put(b2bUnit.getUid(), selectedProductLine);
                //sessionService.setAttribute(PRODUCTLINE, selectedProductLine);
            }
            currentUser.setProductLineMap(productLineMap);
            modelService.save(currentUser);
            modelService.refresh(currentUser);
        }
    }

    @Override
    public GEEdgeCustomerModel findCurrentUserProfile(final String uid) {

        final GEEdgeCustomerModel bhgeCustomerModel = userProfileService.findCurrentUserProfile(uid);
        if (Objects.nonNull(bhgeCustomerModel)) {
            return bhgeCustomerModel;
        }
        return null;

    }

    //    @Override
//    public void removeAllRolesFromUser(GEEdgeCustomerModel customer) {
//        if (customer == null){
//            throw new IllegalArgumentException("Customer cannot be null");
//        }
//        // Create a modifiable copy of the user groups
//        List<PrincipalGroupModel> userGroups = new ArrayList<>(customer.getGroups());
//        List<String> removedRoles = new ArrayList<>();
//        try{
//            for (PrincipalGroupModel group : userGroups) {
//                if (group.getUid().startsWith("UG_")) { // Check if it is a UG role
//                    removedRoles.add(group.getUid()); // Track the removed role
//                }
//            }
//
//            userGroups.removeIf(group -> removedRoles.contains(group.getUid()));
//            customer.setGroups(new HashSet<>(userGroups));
//            modelService.save(customer);
//
//            LOG.info("Removed roles:"+removedRoles);
//        } catch (UnsupportedOperationException e){
//            LOG.error("UnsupportedOperationException while removing roles:",e);
//            throw e;
//        }
//    }
    @Override
    public List<UserDetailDTO> fetchAllUserDetails() {
        List<GEEdgeCustomerModel> users = userProfileService.findAllUsers();
        return users.stream().map(user -> {
                    UserDetailDTO dto = new UserDetailDTO();
                    dto.setUid(user.getUid());
                    dto.setName(user.getName());
                    dto.setActive(user.getActive());
                    dto.setRoleList(user.getGroups().stream().map(PrincipalGroupModel::getUid).filter(role -> role.startsWith(USERGROUP)).collect(Collectors.toList()));
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getAllUserGroupRoles() {
        return userProfileService.getAllUserRoles();
    }

    @Override
    public AddressData getDefaultShipToforAPAC(Boolean apacSalesOrg, GEEdgeCustomerModel currentUser, BHGESoldToData defaultSoldTo1) {
        AddressData defaultShipToData = null;
        final boolean accountPageFlag = false;
        GetAddressFormData addressFormData = new GetAddressFormData();
        addressFormData.setPageNo("0");
        addressFormData.setPageSize("1000");
        addressFormData.setZipCode("");
        addressFormData.setState("");
        addressFormData.setB2bUnit(defaultSoldTo1.getUid());
        Boolean isSapBlocked = false;
        if (currentUser.getDefaultShipTo() != null && StringUtils.equalsIgnoreCase(currentUser.getDefaultB2BUnit().getUid(), ((B2BUnitModel) currentUser.getDefaultShipTo().getOwner()).getUid())
                && Boolean.TRUE.equals(currentUser.getDefaultShipTo().getIsPrimaryAddress())) {
            LOG.info("default address is primary address" + currentUser.getDefaultShipTo().getPk());
            defaultShipToData = addressConverter.convert(currentUser.getDefaultShipTo());
            if(null != currentUser.getDefaultShipTo().getSapCustomerID()) {
            isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(currentUser.getDefaultShipTo().getSapCustomerID());
            }
            defaultShipToData.setIsSapBlocked(isSapBlocked);
            if (null != currentUser.getDefaultShipTo().getCountry()) {
                defaultShipToData.setRisk(currentUser.getDefaultShipTo().getCountry().getRisk());
                defaultShipToData.setSanctioned(currentUser.getDefaultShipTo().getCountry().getSanctioned());
            }
        } else {
            final SearchPageData<AddressModel> searchPageModel = bhgeUserProfileDao.getShippingAddressesForMyAccountPage(addressFormData,
                    accountPageFlag);
            final List<AddressModel> results = searchPageModel.getResults();
            if (CollectionUtils.isNotEmpty(results)) {
                for (AddressModel addressModel : results) {
                    if(null != addressModel.getSapCustomerID()){
                        isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(addressModel.getSapCustomerID());
                        if(isSapBlocked){
                            continue;
                        }
                    }
                    if (apacSalesOrg) {
                        if (Boolean.TRUE.equals(addressModel.getIsPrimaryAddress())) {
                            LOG.info("into the loop - primary address - checkout" + addressModel.getPk());
                            defaultShipToData = addressConverter.convert(addressModel);
                            if (null != addressModel.getCountry()) {
                                defaultShipToData.setRisk(addressModel.getCountry().getRisk());
                                defaultShipToData.setSanctioned(addressModel.getCountry().getSanctioned());
                            }
                            break;
                        }

                    }
                }
            }
        }
        if (defaultShipToData == null) {

            LOG.info("Trying DE (Ship-To) address first for APAC");

            defaultShipToData = getDefaultShipToAddressFromSoldTo(addressFormData.getB2bUnit());

            if (defaultShipToData == null) {

                LOG.info("DE not found, falling back to billing address (RE)");

                defaultShipToData = getSoldToAddress(addressFormData.getB2bUnit());
            }
        }
        return defaultShipToData;
    }
}
