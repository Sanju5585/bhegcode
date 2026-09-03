/**
 *
 */
package com.bhge.core.util;

import com.bhge.facades.data.SalesAreaData;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUserGroupData;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.storesession.data.CurrencyData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;

import java.util.*;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.IncotermsData;
import com.bhge.facades.PaymentTermsData;
import com.bhge.facades.user.data.BHGEAnonymousUserCatalogData;
import com.bhge.facades.user.data.BHGESoldTo;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.store.services.BHGEBaseStoreService;


public class BHGESoldToUtil
{
	
	public static final String GUEST_BASE_STORE_UID = "bhge";

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	private static final Logger LOG = Logger.getLogger(BHGESoldToUtil.class);
	
	@Resource(name="bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;
	
	@Resource(name = "userProfileService")
	private BHGEUserProfileService bhgeUserProfileService;
	
	@Resource(name = "bhgeAnonymousCatalogConverter")
	private Converter<BHGEAnonymousUserCatalogModel, BHGEAnonymousUserCatalogData> bhgeAnonymousCatalogConverter;
	
	@Autowired(required = true)
	private BHGEB2BUnitService bhgeB2BUnitService;

    @Resource(name = "addressConverter")
    private Converter<AddressModel, AddressData> addressConverter;

    @Resource
    private B2BUnitService b2bUnitService;

    public  Boolean getSoldToBlockStatus(String sapCustomerID) {
        final B2BUnitModel soldtoUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(sapCustomerID);
        if(null != soldtoUnit && null != soldtoUnit.getSapBlocked() && Boolean.TRUE.equals(soldtoUnit.getSapBlocked())) {
            LOG.info("Sold to block status true");
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    public BHGESoldToData getBHGESoldToData(final B2BUnitModel b2bUnit)
	{
		if (null != b2bUnit)
		{
			final String uidOfParent = b2bUnit.getUid();
			String childSoldToUid = "";
			B2BUnitModel childB2BUnitModel = null;
			final String nameOfParent = b2bUnit.getLocname();
			final BHGESoldToData geEdgeSoldToData = new BHGESoldToData();
			geEdgeSoldToData.setUid(uidOfParent);
			geEdgeSoldToData.setCountryCP(b2bUnit.getCountryCP());
			geEdgeSoldToData.setRegionCP(b2bUnit.getRegionCP());
			geEdgeSoldToData.setSubRegionCP(b2bUnit.getSubRegionCP());
			geEdgeSoldToData.setLocName(nameOfParent);
			geEdgeSoldToData.setCustomerClass(b2bUnit.getCustomerClass());
			if (StringUtils.isNotBlank(uidOfParent) && uidOfParent.contains("_"))
			{
				childSoldToUid = uidOfParent;
			}
			//Guest User
			else if (userService.isAnonymousUser(userService.getCurrentUser()))
			{
				childB2BUnitModel = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			}
			else if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
			{
				final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
				childSoldToUid = uidOfParent + "_" + userSalesRegion;
			}

			childB2BUnitModel = childB2BUnitModel == null
					? childB2BUnitModel = userProfileService.findChildB2BUnitModel(childSoldToUid)
					: childB2BUnitModel;
			if (childB2BUnitModel != null)
			{
				geEdgeSoldToData.setCurrency(getCurrency(childB2BUnitModel.getCurrency()));
				geEdgeSoldToData.setIncoterms1(childB2BUnitModel.getIncoterms1());
				geEdgeSoldToData.setIncoterms2(childB2BUnitModel.getIncoterms2());
				//Code for Incoterms & payment terms
				final LanguageModel currentLang = commonI18NService.getCurrentLanguage();
				final Locale currentLocale = commonI18NService.getLocaleForLanguage(currentLang);
				if (childB2BUnitModel.getIncotrms1() != null)
				{
					final IncotermsData incotermsData = new IncotermsData();
					incotermsData.setCode(childB2BUnitModel.getIncotrms1().getCode());
					incotermsData.setName(childB2BUnitModel.getIncotrms1().getName(currentLocale));
					geEdgeSoldToData.setIncotrms1(incotermsData);
				}
				if (childB2BUnitModel.getPaymentTrms() != null)
				{
					final PaymentTermsData paymentTermsData = new PaymentTermsData();
					paymentTermsData.setCode(childB2BUnitModel.getPaymentTrms().getCode());
					paymentTermsData.setName(childB2BUnitModel.getPaymentTrms().getName(currentLocale));
					geEdgeSoldToData.setPaymentTrms(paymentTermsData);
				}
				if (childB2BUnitModel.getBillingAddress() != null)
				{
					geEdgeSoldToData.setBillingAddress(populateAddressData(childB2BUnitModel.getBillingAddress()));
				}
			}
			return geEdgeSoldToData;
		}
		return null;
	}

	public B2BUnitModel getSoldToByID(final String soldToID) {
		if (StringUtils.isNotBlank(soldToID)) {
			final String trimmedSoldToID = soldToID.trim();
			return getSoldToList().stream()
					.filter(soldTo -> trimmedSoldToID.equalsIgnoreCase(soldTo.getUid()))
					.findFirst()
					.orElse(null);
		}
		return null;
	}


	public Set<B2BUnitModel> getSoldToList()
	{
		/**
		 * This block of code is used for getting all sold to for CP
		 */
		final GEEdgeCustomerModel customer = (GEEdgeCustomerModel) userService.getCurrentUser();
		final List<B2BUserGroupData> permissionGroups = new ArrayList<B2BUserGroupData>();
		final Set<B2BUnitModel> b2bUnitModelList = new HashSet<B2BUnitModel>();
		for (final PrincipalGroupModel myVal : customer.getAllGroups())
		{
			List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
			if (myVal instanceof B2BUserGroupModel)
			{
				final B2BUserGroupData b2bUserGroupData = new B2BUserGroupData();
				b2bUserGroupData.setName(myVal.getName());
				permissionGroups.add(b2bUserGroupData);
				// adding prime sold to
				if (null != ((B2BUserGroupModel) myVal).getUnit()
						&& CustomerAccountGroups.contains(((B2BUserGroupModel) myVal).getUnit().getAccountGroup()))
				{
					b2bUnitModelList.add(((B2BUserGroupModel) myVal).getUnit());
				}

				// adding sold to
				for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups())
				{
					if (myB2b instanceof B2BUnitModel
							&& CustomerAccountGroups.contains(((B2BUnitModel) myB2b).getAccountGroup()))
					{
						b2bUnitModelList.add(((B2BUnitModel) myB2b));
					}
				}
			}

			if (myVal instanceof B2BUnitModel)
			{
				if (!myVal.getUid().equalsIgnoreCase(Config.getString("ParentB2BUnit", "GEEDGENETPRIMESOLDTO"))
						&& !myVal.getUid().contains("_")
						&& CustomerAccountGroups.contains(((B2BUnitModel) myVal).getAccountGroup()))
				{
					b2bUnitModelList.add((B2BUnitModel) myVal);
				}
			}

		}
		return b2bUnitModelList;

	}

	protected AddressData populateAddressData(final AddressModel addressModel)
	{
		final AddressData address = new AddressData();
		address.setLine1(addressModel.getStreetnumber());
		address.setLine2(addressModel.getStreetname());
		address.setTown(addressModel.getTown());
		address.setPostalCode(addressModel.getPostalcode());
		address.setDistrict(addressModel.getDistrict());

		final RegionData regionData = new RegionData();

		try
		{
			if (addressModel.getRegion() != null)
			{
				regionData.setName(addressModel.getRegion().getName());
				regionData.setIsocode(addressModel.getRegion().getIsocode());
				address.setRegion(regionData);
			}

		}
		catch (final Exception ee)
		{
			LOG.error("Exception occured in GEEdgeSoldToUtil file" + ee);
		}
		return address;
	}

	public CurrencyData getCurrency(final CurrencyModel currency)
	{
		if (currency != null)
		{
			final CurrencyData currencyData = new CurrencyData();
			currencyData.setName(currency.getName());
			currencyData.setIsocode(currency.getIsocode());
			currencyData.setSymbol(currency.getSymbol());
			return currencyData;
		}
		else
		{
			return null;
		}
	}

	public Set<BHGESoldTo> convertSalesAreaModelToData(final Set<B2BUnitModel> salesAreaList)
	{
		if (null != salesAreaList && salesAreaList.size() > 0)
		{
            GEEdgeCustomerModel customer = (GEEdgeCustomerModel) userService.getCurrentUser();
            Collection<CategoryModel> categoriesFromUser= customer.getUserAccessibleCategories();
            B2BUnitModel defaultB2BUnit = customer.getDefaultB2BUnit();
			final Set<BHGESoldTo> salesAreaDataList = new LinkedHashSet<BHGESoldTo>();
            Boolean hasVisibleVategories = true;
            for (final B2BUnitModel model : salesAreaList)
			{
				final BHGESoldTo data = new BHGESoldTo();
				data.setSoldToId(model.getUid());
				data.setSoldToName(model.getLocName());
				data.setCurrency(getCurrency(model.getCurrency()));

				if (model.getCountry() != null)
				{
					data.setAddress(model.getCountry().getIsocode());
				}
				if (model.getAddresses() != null && model.getAddresses().iterator().hasNext())
				{
					data.setZipCode(model.getAddresses().iterator().next().getPostalcode());
				}
                String uid= model.getUid();
                data.setActive(defaultB2BUnit != null && uid.equalsIgnoreCase(defaultB2BUnit.getUid()));

				if (model.getUid() != null && model.getUid().contains("_"))
				{
					final String[] salesAreaArr = model.getUid().split("_");
					if (salesAreaArr != null && salesAreaArr.length >= 3)
					{
                        String  salesOrg = salesAreaArr[1];
                        String  distributionChannel = salesAreaArr[2];
                        String  division = salesAreaArr[3];
                        Collection<CategoryModel> categoriesFromSalesOrg =bhgeB2BUnitService.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
                        if(CollectionUtils.isNotEmpty(categoriesFromSalesOrg) && CollectionUtils.isNotEmpty(categoriesFromUser) ) {
                              hasVisibleVategories  = categoriesFromSalesOrg.stream().
                                    anyMatch(categoriesFromUser::contains);
                        }
						final SAPConfigurationModel baseStoreConfiguration = baseStoreService
								.findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
						if (baseStoreConfiguration != null)
						{
							final BaseStoreModel baseStore = baseStoreService
									.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
							if (baseStore != null)
							{
								data.setBaseStoreName(baseStore.getName());
                                if (baseStore.getAddress() != null) {
                                    data.setSalesAreaAddress(addressConverter.convert(baseStore.getAddress()));
                                }
							}
						}
					}
				}
                if(hasVisibleVategories) {
                    salesAreaDataList.add(data);
                }

			}
			return salesAreaDataList;
		}
		return null;
	}

	@SuppressWarnings("deprecation")
	public BHGESoldToData getBHGESoldToDataForPrice(final B2BUnitModel childB2BUnitModel)
	{
		LOG.info("Get BHGESoldToData For Price - START" );
		String parentUid = "";
		if (null != childB2BUnitModel && null != childB2BUnitModel.getUid() && childB2BUnitModel.getUid().contains("_"))
		{
			final String[] uid = childB2BUnitModel.getUid().split("_");
			parentUid = uid[0];
		}
		final B2BUnitModel b2bUnit = userProfileService.findChildB2BUnitModel(parentUid);

		final String uidOfParent = b2bUnit.getUid();
		final String nameOfParent = b2bUnit.getLocname();
		final BHGESoldToData bhgeSoldToData = new BHGESoldToData();
		bhgeSoldToData.setUid(uidOfParent);
		bhgeSoldToData.setCountryCP(b2bUnit.getCountryCP());
		bhgeSoldToData.setRegionCP(b2bUnit.getRegionCP());
		bhgeSoldToData.setSubRegionCP(b2bUnit.getSubRegionCP());
		bhgeSoldToData.setLocName(nameOfParent);

		if (childB2BUnitModel != null)
		{
			bhgeSoldToData.setCurrency(getCurrency(childB2BUnitModel.getCurrency()));
			bhgeSoldToData.setPaymentTerms(childB2BUnitModel.getPaymentTerms());
			bhgeSoldToData.setIncoterms1(childB2BUnitModel.getIncoterms1());
			bhgeSoldToData.setIncoterms2(childB2BUnitModel.getIncoterms2());
			if (childB2BUnitModel.getBillingAddress() != null)
			{
				bhgeSoldToData.setBillingAddress(populateAddressData(childB2BUnitModel.getBillingAddress()));
			}
		}
		LOG.info("Get BHGESoldToData For Price - END" );
		return bhgeSoldToData;
	}

	/**
	 * @return
	 */
	public BHGESoldToData getDefaultB2BUnitUidOfCurrentUser(){
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		final BHGESoldToData bhgeSoldToData = new BHGESoldToData();

		String currentUserDefaultB2BUnitUid = "";
		if(null != currentUser.getDefaultB2BUnit()) {
			B2BUnitModel defaultB2BUnitModel = currentUser.getDefaultB2BUnit();
			currentUserDefaultB2BUnitUid = defaultB2BUnitModel.getUid().split("_")[0];
			bhgeSoldToData.setUid(currentUserDefaultB2BUnitUid);
			bhgeSoldToData.setLocName(defaultB2BUnitModel.getLocName());
			bhgeSoldToData.setCurrency(getCurrency(defaultB2BUnitModel.getCurrency()));
			bhgeSoldToData.setPaymentTerms(defaultB2BUnitModel.getPaymentTerms());
			bhgeSoldToData.setIncoterms1(defaultB2BUnitModel.getIncoterms1());
			bhgeSoldToData.setIncoterms2(defaultB2BUnitModel.getIncoterms2());
		}
		return bhgeSoldToData;
	}
	
	public BHGESoldToData getDefaultB2BUnitUidOfGuestUser(final String guestSalesArea){
		final BHGESoldToData bhgeSoldToData = new BHGESoldToData();
		String salesAreaId = guestSalesArea;
		if(null != salesAreaId)
		{
			BHGEAnonymousUserCatalogModel anonymousUserCatalogModel = getAnonymousUserCatalog(salesAreaId);
				if(null != anonymousUserCatalogModel && null != anonymousUserCatalogModel.getB2BUnit())
				{
					bhgeSoldToData.setUid(anonymousUserCatalogModel.getB2BUnit().getUid());
					bhgeSoldToData.setCurrency(getCurrency(anonymousUserCatalogModel.getB2BUnit().getCurrency()));
					bhgeSoldToData.setPaymentTerms(anonymousUserCatalogModel.getB2BUnit().getPaymentTerms());
					bhgeSoldToData.setIncoterms1(anonymousUserCatalogModel.getB2BUnit().getIncoterms1());
					bhgeSoldToData.setIncoterms2(anonymousUserCatalogModel.getB2BUnit().getIncoterms2());
					
					final PaymentTermsData paymentTermsData = new PaymentTermsData();
					paymentTermsData.setCode(anonymousUserCatalogModel.getB2BUnit().getPaymentTrms().getCode());
					paymentTermsData.setName(anonymousUserCatalogModel.getB2BUnit().getPaymentTrms().getName());
				    bhgeSoldToData.setPaymentTrms(paymentTermsData);
					// Added for guest checkout spartacus migration
					//bhgeSoldToData.setIncoTrmsName(anonymousUserCatalogModel.getB2BUnit().getIncotrms1().getName());
				}
		}
		return bhgeSoldToData;
	}
	
	public BHGEAnonymousUserCatalogModel getAnonymousUserCatalog(final String salesAreaId)
	{
		BHGEAnonymousUserCatalogModel anonymousUserCatalogModel = null;
		if(null != salesAreaId && StringUtils.isNotEmpty(salesAreaId))
		{
			final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			String[] salesAreaArray = null;
			salesAreaArray = salesAreaId.split("_");
			if(null != salesAreaArray && salesAreaArray.length >= 2 && null != countryModel)
			{
				anonymousUserCatalogModel = bhgeUserProfileService.getCountryandSalesOrgMappingForAnonymousUser(salesAreaArray[0], 
						salesAreaArray[1], salesAreaArray[2], countryModel);
			}
		}
		return anonymousUserCatalogModel;
	}

	public B2BUnitModel getDefaultB2BUnitModelCurrentUser(){
		
		B2BUnitModel defaultB2BUnitModel = null;
		UserModel user=userService.getCurrentUser();
		if(user instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) user;
			B2BUnitModel defB2bunit=currentUser.getDefaultB2BUnit();
			if(null != defB2bunit) {
				defaultB2BUnitModel = defB2bunit;
			}
		}
		return defaultB2BUnitModel;
	}

	public SalesAreaData getSalesAreaData() {
		SalesAreaData salesAreaData = new SalesAreaData();
		B2BUnitModel defaultB2BUnit = getDefaultB2BUnitModelCurrentUser();
		if(null != defaultB2BUnit) {
			String[] split = defaultB2BUnit.getUid().split("_");
			salesAreaData.setB2bUnitUid(defaultB2BUnit.getUid());
			salesAreaData.setSalesOrg(split[1]);
			salesAreaData.setCurrencyIso(defaultB2BUnit.getCurrency() != null ? defaultB2BUnit.getCurrency().getIsocode() : "");
			salesAreaData.setCurrencySymbol(defaultB2BUnit.getCurrency() != null ? defaultB2BUnit.getCurrency().getSymbol() : "");
		}
		return salesAreaData;
	}

	/**
	 * get the default B2BUnit by user id.
	 * @param userID user uid
	 * @return B2BUnitModel
	 */
	public B2BUnitModel getDefaultB2BUnitModelByUserId(final String userID){

		B2BUnitModel defaultB2BUnitModel = null;

		final GEEdgeCustomerModel currentUser = userService.getUserForUID(userID, GEEdgeCustomerModel.class);
		if(currentUser != null && !userService.isAnonymousUser(currentUser)) {

			if(null != currentUser.getDefaultB2BUnit()) {

				defaultB2BUnitModel = currentUser.getDefaultB2BUnit();
			}

		}
		return defaultB2BUnitModel;
	}
	
	public SalesAreaData getSalesAreaDataForGuestUser(String guestSalesArea) {
		SalesAreaData salesAreaData = new SalesAreaData();
		BHGESoldToData soldToData = getDefaultB2BUnitUidOfGuestUser(guestSalesArea);
		if(null != soldToData) {
			//String[] split = defaultB2BUnit.getUid().split("_");
			salesAreaData.setCurrencyIso(soldToData.getCurrency().getIsocode());
			salesAreaData.setCurrencySymbol(soldToData.getCurrency().getSymbol());
		}
		return salesAreaData;
	}

	/**
	 * Get the current user by user uid
	 * @param userID uid
	 * @return GEEdgeCustomerModel
	 */
	public GEEdgeCustomerModel getCurrentUserById(final String userID) {

		if (StringUtils.isEmpty(userID))
		{
			throw new IllegalArgumentException("Parameter userID must not be empty");
		}

		final GEEdgeCustomerModel currentUser = userService.getUserForUID(userID, GEEdgeCustomerModel.class);

		return currentUser;
	}
	
	public BHGESoldToData getDefaultB2BUnitUidOfCurrentUserWs(){
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		final BHGESoldToData bhgeSoldToData = new BHGESoldToData();

		//This log will be removed after longconfig PNA verify
		LOG.info("BHGESoldToUtil inside getDefaultB2BUnitUidOfCurrentUserWs");
		String currentUserDefaultB2BUnitUid = "";
		if(null != currentUser.getDefaultB2BUnit()) {
			B2BUnitModel defaultB2BUnitModel = currentUser.getDefaultB2BUnit();
			B2BUnitModel defaultSoldTo=currentUser.getDefaultSoldTo();
			currentUserDefaultB2BUnitUid = defaultB2BUnitModel.getUid().split("_")[0];
			bhgeSoldToData.setUid(currentUserDefaultB2BUnitUid);
			bhgeSoldToData.setLocName(defaultB2BUnitModel.getLocName());
			bhgeSoldToData.setCurrency(getCurrency(defaultB2BUnitModel.getCurrency()));
			bhgeSoldToData.setPaymentTerms(defaultB2BUnitModel.getPaymentTerms());
			bhgeSoldToData.setIncoterms1(defaultB2BUnitModel.getIncoterms1());
			bhgeSoldToData.setIncoterms2(defaultB2BUnitModel.getIncoterms2());
			bhgeSoldToData.setCountryCP(defaultSoldTo.getCountryCP());
			bhgeSoldToData.setRegionCP(defaultSoldTo.getRegionCP());
			bhgeSoldToData.setSubRegionCP(defaultSoldTo.getSubRegionCP());
			LOG.info("SoldTo Country CP " +defaultSoldTo.getCountryCP());
			LOG.info("SoldTo RegionCP " +defaultSoldTo.getRegionCP());
			LOG.info("SoldTo SubRegionCP " +defaultSoldTo.getSubRegionCP());
			if(defaultB2BUnitModel.getIncotrms1()!=null) {
				bhgeSoldToData.setIncoTrmsName(defaultB2BUnitModel.getIncotrms1().getName());
			}
			
		}
		//This log will be removed after longconfig PNA verify
		LOG.info("BHGESoldToUtil inside getDefaultB2BUnitUidOfCurrentUserWs after b2bunit check");
		return bhgeSoldToData;
	}
}
