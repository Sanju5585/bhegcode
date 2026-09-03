package com.bhge.product.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;

import com.bhge.core.model.BHGECurrencyModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.GEEdgeProductLineMappingModel;
import com.bhge.core.order.daos.BHGEB2BOrderDao;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.order.strategies.impl.BHGEFindPricingwithCurrentPriceFactoryStrategy;
import com.bhge.core.product.daos.BHGEProductDao;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigGlobalHeaderRequest;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigItemsRequest;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigRequest;
import com.bhge.core.scpi.rfc.configresponse.BHGELongConfigResponse;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BCustomerService;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.catalog.model.ProductFeatureModel;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.model.classification.ClassAttributeAssignmentModel;
import de.hybris.platform.catalog.model.classification.ClassificationAttributeModel;
import de.hybris.platform.catalog.model.classification.ClassificationClassModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.classification.daos.ProductFeaturesDao;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.product.impl.DefaultProductService;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;


public class BHGEProductServiceImpl extends DefaultProductService implements BHGEProductService
{

	private final static Logger LOG = Logger.getLogger(BHGEProductServiceImpl.class);

	private static final String SCPI_ZHYB_LONG_CONFIG_ENDPOINT_URL = "SCPI_ZHYB_LONG_CONFIG_ENDPOINT_URL";

	private static final String HIGHPHEN = "-";

	@Resource(name = "currentFactoryFindPricingStrategy")
	public BHGEFindPricingwithCurrentPriceFactoryStrategy currentFactoryFindPricingStrategy;

	@Resource(name = "productDao")
	BHGEProductDao bhgeProductDao;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "productFeaturesDao")
	private ProductFeaturesDao productFeaturesDao;
	
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;
	
	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;
	
	@Resource(name = "bhgeB2BOrderDao")
	private BHGEB2BOrderDao bhgeB2BOrderDao;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "scpiConnector")
	private SCPIConnector scpiConnector;
	
	@Resource(name = "b2bUnitService")
	private B2BUnitService<B2BUnitModel, B2BCustomerModel> b2bUnitService;
	
	@Resource(name = "b2bCustomerService")
	private B2BCustomerService<B2BCustomerModel, B2BUnitModel> b2bCustomerService;


	@Override
	public PriceRowModel getProductPriceData(final ProductModel productModel, final BHGESoldToData soldTo)
	{
		final List<PriceRowModel> rankedPriceRows = currentFactoryFindPricingStrategy.sortPriceRowList(
				(List<PriceRowModel>) productModel.getEurope1Prices(),
				currentFactoryFindPricingStrategy.getSoldToPriceMatchCollection(soldTo, productModel.getCode()));

		try
		{
			if (rankedPriceRows != null && !rankedPriceRows.isEmpty())
			{
				final PriceRowModel priceRow = rankedPriceRows.get(rankedPriceRows.size() - 1);
				return priceRow;
			}
		}
		catch (final Exception e)
		{
			LOG.error("No valid GE price " + productModel.getCode() + ExceptionUtils.getStackTrace(e));
		}
		return null;
	}
	
	
	//Enabled specifically for FPT user to access only FPT products
		@Override
		public boolean isVisibleForCurrentUser(final String productCode)
		{
			final GEEdgeProductModel productModel = (GEEdgeProductModel) getProductForCode(productCode);
			boolean isVisible = false;
			if (null != productModel)
			{
				final UserModel customer = userService.getCurrentUser();
				final UserGroupModel userGroup = userService.getUserGroupForUID("bhgefptb2busergroup");
				if (customer.getGroups().contains(userGroup)) //FPT User
				{
					if (productModel.getProductType() == GEEdgeProductType.FPT)
					{
						isVisible = true;
					}
				}
				else
				{
					if (productModel.getProductType() != GEEdgeProductType.FPT)
					{
						isVisible = true;
					}
				}

			}
			return isVisible;
		}
	
	//Enabled specifically for FPT user to access only FPT products
	@Override
	public boolean isVisibleForCurrentUser(final GEEdgeProductModel productModel)
	{
		boolean isVisible = false;
		if (null != productModel)
		{
			final UserModel customer = userService.getCurrentUser();
			LOG.info("Is visible for current user - START" +customer);
			final UserGroupModel userGroup = userService.getUserGroupForUID("bhgefptb2busergroup");
			LOG.info("User Group " + userGroup);
			if (customer.getGroups().contains(userGroup)) //FPT User
			{
				if (productModel.getProductType() == GEEdgeProductType.FPT)
				{
					isVisible = true;
				}
			}
			else
			{
				if (productModel.getProductType() != GEEdgeProductType.FPT)
				{
					isVisible = true;
				}
			}

		}
		LOG.info("Is visible for current user - END");
		return isVisible;
	}

	//Enabled specifically for FPT user to access only FPT categories
	@Override
	public boolean isVisibleForCurrentUser(final CategoryModel categoryModel)
	{
		boolean isVisible = false;
		if (null != categoryModel)
		{
			final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode("ECOM_LVL0_00000000");
			final List<String> fptCategories = new ArrayList<String>();
			final List<String> nonfptCategories = new ArrayList<String>();
			final String fptCategoriesInSystem = bhgeUserProfileDao.getFPTCategoriesListForUser();
			final List<String> fptCategoryCodes = StringUtils.isNotBlank(fptCategoriesInSystem)
					? Arrays.asList(fptCategoriesInSystem.split(","))
					: new ArrayList<String>();
			for (final CategoryModel subCat : category.getCategories())
			{
				if (fptCategoryCodes.contains(subCat.getCode()))
				{
					fptCategories.add(subCat.getCode());
				}
				else
				{
					nonfptCategories.add(subCat.getCode());
				}
			}
			if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
			{
				isVisible = populateisVisibleForFPTCategories(categoryModel, isVisible, fptCategories, nonfptCategories);
			}
			else if (userService.isAnonymousUser(userService.getCurrentUser()))
			{
				if(Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESORG)))
				{
					isVisible = populateisVisibleForAnonymousUser(categoryModel, isVisible, nonfptCategories);
				}
			}

			if (isVisible)
			{
				isVisible = checkCategoryVisibilityForGuestUser(categoryModel, isVisible);
			}
		}
		return isVisible;
	}
	
	@Override
	public boolean isVisibleForGuestUser(CategoryModel categoryModel, final String sessionSalesOrg, final CountryModel defaultCountryModel)
	{
		boolean isVisible = false;
		if (null != categoryModel)
		{
			final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode("ECOM_LVL0_00000000");
			final List<String> fptCategories = new ArrayList<String>();
			final List<String> nonfptCategories = new ArrayList<String>();
			final String fptCategoriesInSystem = bhgeUserProfileDao.getFPTCategoriesListForUser();
			final List<String> fptCategoryCodes = StringUtils.isNotBlank(fptCategoriesInSystem)
					? Arrays.asList(fptCategoriesInSystem.split(","))
					: new ArrayList<String>();
			for (final CategoryModel subCat : category.getCategories())
			{
				if (fptCategoryCodes.contains(subCat.getCode()))
				{
					fptCategories.add(subCat.getCode());
				}
				else
				{
					nonfptCategories.add(subCat.getCode());
				}
			}
				isVisible = populateisVisibleForAnonymousUser(categoryModel, isVisible, nonfptCategories, sessionSalesOrg, defaultCountryModel);

			if (isVisible)
			{
				isVisible = checkCategoryVisibilityForGuestUser(categoryModel, isVisible, sessionSalesOrg, defaultCountryModel);
			}
		}
		return isVisible;
	}

	/**
	 * checks for category visibility for product for guest user based on category mapping table
	 *
	 * @param productModel
	 * @param isVisible
	 * @return
	 */
	private boolean checkCategoryVisibilityForGuestUser(final CategoryModel categoryModel, boolean isVisible)
	{
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao.getCountryToUnitMappingListForAnonymousUser(countryModel);	
			if(CollectionUtils.isNotEmpty(anonymousUserCatalogList))
			{
				for(BHGEAnonymousUserCatalogModel userCatalogModel : anonymousUserCatalogList)
				{
					final List<CategoryModel> categoryHierarchyCodes = new ArrayList<CategoryModel>();
					categoryHierarchyCodes.add(categoryModel);
					for (final CategoryModel superCategory : categoryModel.getAllSupercategories())
					{
						categoryHierarchyCodes.add(superCategory);
					}
					for (final CategoryModel subCategory : categoryModel.getAllSubcategories())
					{
						categoryHierarchyCodes.add(subCategory);
					}
					//if (categoryHierarchyCodes.stream().noneMatch(categoryCode -> userCatalogModel.getCategories().contains(categoryCode)))
					if (categoryHierarchyCodes.stream().anyMatch(categoryCode -> userCatalogModel.getCategories().contains(categoryCode)))
					{
						//isVisible = false;
						isVisible = true;
						break;
					}
				}
			}
		}
		return isVisible;
	}
	
	
	private boolean checkCategoryVisibilityForGuestUser(final CategoryModel categoryModel, boolean isVisible, final String sessionSalesOrg, final CountryModel defaultCountryModel)
	{
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			String[] sessionSalesOrgArray = sessionSalesOrg.split("_");
			final BHGEAnonymousUserCatalogModel userCatalogModel = bhgeUserProfileDao.getCountryandSalesOrgMappingForAnonymousUser(sessionSalesOrgArray[0], sessionSalesOrgArray[1],
					sessionSalesOrgArray[2], defaultCountryModel);
				final List<CategoryModel> categoryHierarchyCodes = new ArrayList<CategoryModel>();
				categoryHierarchyCodes.add(categoryModel);
				for (final CategoryModel superCategory : categoryModel.getAllSupercategories())
				{
					categoryHierarchyCodes.add(superCategory);
				}
				for (final CategoryModel subCategory : categoryModel.getAllSubcategories())
				{
					categoryHierarchyCodes.add(subCategory);
				}
				if (categoryHierarchyCodes.stream().anyMatch(categoryCode -> userCatalogModel.getCategories().contains(categoryCode)))
				{
					isVisible = true;
			}
		}
		return isVisible;
	}

	/**
	 * @param categoryModel
	 * @param isVisible
	 * @param nonfptCategories
	 * @return
	 */
	private boolean populateisVisibleForAnonymousUser(final CategoryModel categoryModel, boolean isVisible,
			final List<String> nonfptCategories)
	{
		/*
		 * final String categoriesToConsiderForAnonymousUser = bhgeUserProfileDao.getGuestCategoriesListForUser(); final
		 * List<String> guestCategoryCodes = StringUtils.isNotBlank(categoriesToConsiderForAnonymousUser) ?
		 * Arrays.asList(categoriesToConsiderForAnonymousUser.split(",")) : new ArrayList<String>();
		 */
		final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
		final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao.getCountryToUnitMappingListForAnonymousUser(countryModel);				
		if(CollectionUtils.isNotEmpty(anonymousUserCatalogList))
		{
			for(BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList)
			{
				final List<CategoryModel> allowedguestCategories = (List<CategoryModel>) anonymousUserCatalog.getCategories();

			   if (CollectionUtils.isNotEmpty(allowedguestCategories))
				{
					final List<String> categoriesToCheck = new ArrayList<String>();
					//for (final String category : guestCategoryCodes)
				   for (final CategoryModel guestCategoryModel : allowedguestCategories)
					{
						//final CategoryModel guestCategoryModel = bhgeCommerceCategoryService.getCategoryForCode(category);
						categoriesToCheck.add(guestCategoryModel.getCode());
						//Adding super categories
						for (final CategoryModel catCode : guestCategoryModel.getAllSupercategories())
						{
							categoriesToCheck.add(catCode.getCode());
						}
						//Adding subCategories
						for (final CategoryModel catCode : guestCategoryModel.getAllSubcategories())
						{
							categoriesToCheck.add(catCode.getCode());
						}
					}
					if (categoriesToCheck.contains(categoryModel.getCode()))
					{
						if (categoryModel.getCode().contains("LVL1") && nonfptCategories.contains(categoryModel.getCode()))
						{
							isVisible = true;
							break;
						}
						else
						{
							isVisible = true;
							break;
						}
					}
				}
				else if (categoryModel.getCode().contains("LVL1"))
				{
					if (nonfptCategories.contains(categoryModel.getCode()))
					{
						isVisible = true;
						break;
					}
				}
				else
				{
					isVisible = true;
					break;
				}
			}
		}

		return isVisible;
	}
	
	private boolean populateisVisibleForAnonymousUser(final CategoryModel categoryModel, boolean isVisible,
			final List<String> nonfptCategories, final String sessionSalesOrg, final CountryModel defaultCountryModel)
	{
		String[] sessionSalesOrgArray = sessionSalesOrg.split("_");
		final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao.getCountryandSalesOrgMappingForAnonymousUser(sessionSalesOrgArray[0], sessionSalesOrgArray[1],
				sessionSalesOrgArray[2], defaultCountryModel);	
		
		if(null != anonymousUserCatalog)
		{			
		final List<CategoryModel> allowedguestCategories = (List<CategoryModel>) anonymousUserCatalog.getCategories();

		   if (CollectionUtils.isNotEmpty(allowedguestCategories))
			{
				final List<String> categoriesToCheck = new ArrayList<String>();
			   for (final CategoryModel guestCategoryModel : allowedguestCategories)
				{
					categoriesToCheck.add(guestCategoryModel.getCode());
					//Adding super categories
					for (final CategoryModel catCode : guestCategoryModel.getAllSupercategories())
					{
						categoriesToCheck.add(catCode.getCode());
					}
					//Adding subCategories
					for (final CategoryModel catCode : guestCategoryModel.getAllSubcategories())
					{
						categoriesToCheck.add(catCode.getCode());
					}
				}
				if (categoriesToCheck.contains(categoryModel.getCode()))
				{
					if (categoryModel.getCode().contains("LVL1") && nonfptCategories.contains(categoryModel.getCode()))
					{
						isVisible = true;
					}
					else
					{
						isVisible = true;
					}
				}
			}
			else if (categoryModel.getCode().contains("LVL1"))
			{
				if (nonfptCategories.contains(categoryModel.getCode()))
				{
					isVisible = true;
				}
			}
			else
			{
				isVisible = true;
			}
	}

		return isVisible;
	}

	/**
	 * Populates true on category based on FPT user group
	 *
	 * @param categoryModel
	 * @param isVisible
	 * @param fptCategories
	 * @param nonfptCategories
	 */
	private boolean populateisVisibleForFPTCategories(final CategoryModel categoryModel, boolean isVisible,
			final List<String> fptCategories, final List<String> nonfptCategories)
	{
		if (categoryModel.getCode().contains("LVL1")) //Taking only Level 1 into account
		{
			final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) userService.getCurrentUser();
			final UserGroupModel userGroup = userService.getUserGroupForUID("bhgefptb2busergroup");
			if (geEdgeCustomer.getGroups().contains(userGroup)) //FPT User
			{
				if (fptCategories.contains(categoryModel.getCode()))
				{
					isVisible = true;
				}
			}
			else if (nonfptCategories.contains(categoryModel.getCode()))
			{
				isVisible = true;
			}
		}
		else
		{
			isVisible = true;
		}
		return isVisible;
	}


	@Override
	public List<ProductReferenceModel> getMandatoryAccesories(final String product)
	{
		return bhgeProductDao.getMandatoryAccesories(getProductForCode(product));
	}

	/**
	 * @return the bHGEProductDao
	 */
	public BHGEProductDao getBHGEProductDao()
	{
		return bhgeProductDao;
	}

	/**
	 * @param bHGEProductDao
	 *           the bHGEProductDao to set
	 */
	public void setBHGEProductDao(final BHGEProductDao bHGEProductDao)
	{
		bhgeProductDao = bHGEProductDao;
	}

	@Override
	public List<GEEdgeProductModel> getProductWithUnApprovedStatus()
	{
		return bhgeProductDao.getProductWithUnApprovedStatus();
	}

	@Override
	public List<GEEdgeProductModel> getProductWithUnApprovedStatusforGlobalCatalog()
	{
		return bhgeProductDao.getProductWithUnApprovedStatusforGlobalCatalog();
	}

	@Override
	public List<GEEdgeProductModel> getProductsforUpdatedSalesArea(Date onDate)
	{
		final String pattern = "yyyy-MM-dd HH:mm:ss";
		final SimpleDateFormat df = new SimpleDateFormat(pattern);
		final String lastRunTime = df.format(onDate);
		return bhgeProductDao.getProductsforUpdatedSalesArea(lastRunTime);
	}

	@Override
	public List<B2BUnitModel> getUpdatedCustomersRecords(final Date onDate)
	{
		// Converting to String
		final String pattern = "yyyy-MM-dd HH:mm:ss";
		final SimpleDateFormat df = new SimpleDateFormat(pattern);
		final String from = df.format(onDate);
		return bhgeProductDao.getUpdatedCustomersRecords(from);
	}

	@Override
	public List<AddressModel> getUpdatedAddressRecords(final Date onDate)
	{
		// Converting to String
		final String pattern = "yyyy-MM-dd HH:mm:ss";
		final SimpleDateFormat df = new SimpleDateFormat(pattern);
		final String from = df.format(onDate);
		return bhgeProductDao.getUpdatedAddressRecords(from);
	}

	@Override
	public List<PriceRowModel> getUpdatedPriceRecords(final Date onDate)
	{
		// Converting to String
		final String pattern = "yyyy-MM-dd HH:mm:ss";
		final SimpleDateFormat df = new SimpleDateFormat(pattern);
		final String from = df.format(onDate);
		return bhgeProductDao.getUpdatedPriceRecords(from);
	}

	public List<ProductModel> getProdListDetails(List<String> productList)
	{
		List<ProductModel> productModelList = bhgeProductDao.getProdListDetails(productList);
		return productModelList;
	}

	@Override
	public List getNewAndUpdatedProducts(final String startTime)
	{
		return bhgeProductDao.getNewAndUpdatedProducts(startTime);
	}

	@Override
	public List getNewAndUpdatedProductsforGlobalCatalog(final String startTime)
	{
		return bhgeProductDao.getNewAndUpdatedProductsforGlobalCatalog(startTime);
	}

	@Override
	public List<GEEdgeProductLineMappingModel> getProductLineMappingItems()
	{
		return bhgeProductDao.getProductLineMappingItems();
	}

	@Override
	public List<BHGESalesAreaDataModel> getSalesAreaData(final String code, final String lastRunTime)
	{
		return bhgeProductDao.getSalesAreaData(code, lastRunTime);
	}




	@Override
	public Double getPriceForPriceCriteria(final String materialID, final Map<String, String> priceMap)
	{

		final UserModel userModel = userService.getCurrentUser();
		/*
		 * if (!(userModel instanceof GEEdgeCustomerModel)) { return new Double(0.0); }
		 */
		Double priceValue = new Double(0.0);
		final Set<String> keySet = priceMap.keySet();
		final BHGESoldToData soldTo = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");

		B2BCustomerModel user = null;
		if (userModel instanceof B2BCustomerModel)
		{
			user = (B2BCustomerModel) userModel;
		}
		B2BUnitModel childB2BUnit = null;
		if (userService.isAnonymousUser(userModel))
		{
			childB2BUnit = getSessionService().getAttribute("sessionSalesArea");
			if(Objects.isNull(childB2BUnit))
			{
				LOG.info("The key set value for product " + materialID + "is " + keySet);
				return priceValue;
			}
		}
		else
		{
			childB2BUnit = user.getDefaultB2BUnit();
		}
		//final B2BUnitModel childB2BUnit = user.getDefaultB2BUnit();
		//ZCM1 changes
		String parentUid = "";
		String currentSalesArea = "";
		if (null != childB2BUnit && null != childB2BUnit.getUid() && childB2BUnit.getUid().contains("_"))
		{
			final String[] uid = childB2BUnit.getUid().split("_");
			parentUid = uid[0];
			currentSalesArea = uid[1];
		}
	   B2BUnitModel parentB2BUnit=bhgeB2BOrderDao.getSoldToForB2BUnit(parentUid);
		if (userService.isAnonymousUser(userModel))
		{
			if (soldTo == null)
			{
				return null;
			}
		}
		String regionSoldTo = null;
		String subRegionSoldTo = null;
		String countrySoldTo = null;
		if (userService.isAnonymousUser(userModel))
		{
			regionSoldTo = soldTo.getRegionCP();
			subRegionSoldTo = soldTo.getSubRegionCP();
			countrySoldTo = soldTo.getCountryCP();
		}
		else 
		{
			regionSoldTo = parentB2BUnit.getRegionCP();
			subRegionSoldTo = parentB2BUnit.getSubRegionCP();
			countrySoldTo = parentB2BUnit.getCountryCP();
		}

		String currencySoldTo = "USD";

		if (childB2BUnit != null)
		{
			currencySoldTo = childB2BUnit.getCurrency() == null ? "USD" : childB2BUnit.getCurrency().getIsocode();
		}


		//final String countrySoldTo = soldTo.getCountryCP();

		String solrPriceKeyString = "";
		LOG.info("The key set value for product " + materialID + "is " + keySet);
		//ZCM1 code starts
		if (StringUtils.isNotEmpty(currencySoldTo) && StringUtils.isNotEmpty(parentUid)
				&& keySet.contains("price_" + currencySoldTo + parentUid + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + currencySoldTo + parentUid + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(countrySoldTo) && StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + countrySoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + countrySoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(countrySoldTo)
				&& keySet.contains("price_" + countrySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + countrySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(subRegionSoldTo) && StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + subRegionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + subRegionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(subRegionSoldTo)
				&& keySet.contains("price_" + subRegionSoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + subRegionSoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(regionSoldTo) && StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + regionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + regionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(regionSoldTo)
				&& keySet.contains("price_" + regionSoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + regionSoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (keySet.contains("price_" + materialID + "_" + currentSalesArea + "_string"))
		{
			final String temp = "price_" + materialID + "_" + currentSalesArea + "_string";

			final String priceStr = priceMap.get(temp);

			if (priceStr != null && StringUtils.isNotEmpty(currencySoldTo) && priceStr.contains(currencySoldTo))
			{
				solrPriceKeyString = "price_" + materialID + "_" + currentSalesArea + "_string";
			}
		}
		LOG.info("The solePriceKeyString for material " + materialID + "is " + solrPriceKeyString);
		if (!solrPriceKeyString.isEmpty())
		{
			final String priceValStr = priceMap.get(solrPriceKeyString);
			LOG.info("Inside price loop " + priceValStr);
			//Selecing only current sales area's price
			if (StringUtils.isNotEmpty(priceValStr) && priceValStr.contains("_") && priceValStr.contains(currentSalesArea))
			{
				final String[] priceArr = priceValStr.split("_");
				if (priceArr != null && priceArr.length > 1 && priceArr[0].equalsIgnoreCase(currencySoldTo)) // Ensuring price row currency and current unit's currencies are equal
				{
					priceValue = new Double(priceArr[1]);
					LOG.info("The price value is " + priceValue);
				}
			}
		}

		return priceValue;
	}
	
	
	@Override
	public Double getPriceForPriceCriteriaforWs(final String materialID, final Map<String, String> priceMap, final String guestSalesArea)
	{

		final UserModel userModel = userService.getCurrentUser();
		/*
		 * if (!(userModel instanceof GEEdgeCustomerModel)) { return new Double(0.0); }
		 */
		Double priceValue = new Double(0.0);
		final Set<String> keySet = priceMap.keySet();
		BHGESoldToData soldTo = null;
		if(null != getSessionService().getAttribute("sessionSoldTo"))
		{
			soldTo = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");
		}
		else
		{
			soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea);
		}

		B2BCustomerModel user = null;
		if (userModel instanceof B2BCustomerModel)
		{
			user = (B2BCustomerModel) userModel;
		}
		B2BUnitModel childB2BUnit = null;
		if (userService.isAnonymousUser(userModel))
		{
			if(null != getSessionService().getAttribute("sessionSalesArea"))
			{
				childB2BUnit = getSessionService().getAttribute("sessionSalesArea");
			}
			else
			{
				childB2BUnit = null != bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea) ?
						bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea).getB2BUnit() : null;
			}
			if(Objects.isNull(childB2BUnit))
			{
				LOG.info("The key set value for product " + materialID + "is " + keySet);
				return priceValue;
			}
		}
		else
		{
			childB2BUnit = user.getDefaultB2BUnit();
		}
		//final B2BUnitModel childB2BUnit = user.getDefaultB2BUnit();
		//ZCM1 changes
		String parentUid = "";
		String currentSalesArea = "";
		if (null != childB2BUnit && null != childB2BUnit.getUid() && childB2BUnit.getUid().contains("_"))
		{
			final String[] uid = childB2BUnit.getUid().split("_");
			parentUid = uid[0];
			currentSalesArea = uid[1];
		}
		B2BUnitModel parentB2BUnit=bhgeB2BOrderDao.getSoldToForB2BUnit(parentUid);
		if (userService.isAnonymousUser(userModel))
		{
			if (soldTo == null)
			{
				return null;
			}
		}
		String regionSoldTo = null;
		String subRegionSoldTo = null;
		String countrySoldTo = null;
		if (userService.isAnonymousUser(userModel))
		{
			regionSoldTo = soldTo.getRegionCP();
			subRegionSoldTo = soldTo.getSubRegionCP();
			countrySoldTo = soldTo.getCountryCP();
		}
		else 
		{
			regionSoldTo = parentB2BUnit.getRegionCP();
			subRegionSoldTo = parentB2BUnit.getSubRegionCP();
			countrySoldTo = parentB2BUnit.getCountryCP();
		}

		String currencySoldTo = "USD";

		if (childB2BUnit != null)
		{
			currencySoldTo = childB2BUnit.getCurrency() == null ? "USD" : childB2BUnit.getCurrency().getIsocode();
		}


		//final String countrySoldTo = soldTo.getCountryCP();

		String solrPriceKeyString = "";
		LOG.info("The key set value for product " + materialID + "is " + keySet);
		//ZCM1 code starts
		if (StringUtils.isNotEmpty(currencySoldTo) && StringUtils.isNotEmpty(parentUid)
				&& keySet.contains("price_" + currencySoldTo + parentUid + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + currencySoldTo + parentUid + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(countrySoldTo) && StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + countrySoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + countrySoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(countrySoldTo)
				&& keySet.contains("price_" + countrySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + countrySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(subRegionSoldTo) && StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + subRegionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + subRegionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(subRegionSoldTo)
				&& keySet.contains("price_" + subRegionSoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + subRegionSoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(regionSoldTo) && StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + regionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + regionSoldTo + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(regionSoldTo)
				&& keySet.contains("price_" + regionSoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + regionSoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (StringUtils.isNotEmpty(currencySoldTo)
				&& keySet.contains("price_" + currencySoldTo + materialID + "_" + currentSalesArea + "_string"))
		{
			solrPriceKeyString = "price_" + currencySoldTo + materialID + "_" + currentSalesArea + "_string";
		}
		else if (keySet.contains("price_" + materialID + "_" + currentSalesArea + "_string"))
		{
			final String temp = "price_" + materialID + "_" + currentSalesArea + "_string";

			final String priceStr = priceMap.get(temp);

			if (priceStr != null && StringUtils.isNotEmpty(currencySoldTo) && priceStr.contains(currencySoldTo))
			{
				solrPriceKeyString = "price_" + materialID + "_" + currentSalesArea + "_string";
			}
		}
		LOG.info("The solePriceKeyString for material " + materialID + "is " + solrPriceKeyString);
		if (!solrPriceKeyString.isEmpty())
		{
			final String priceValStr = priceMap.get(solrPriceKeyString);
			LOG.info("Inside price loop " + priceValStr);
			//Selecing only current sales area's price
			if (StringUtils.isNotEmpty(priceValStr) && priceValStr.contains("_") && priceValStr.contains(currentSalesArea))
			{
				final String[] priceArr = priceValStr.split("_");
				if (priceArr != null && priceArr.length > 1 && priceArr[0].equalsIgnoreCase(currencySoldTo)) // Ensuring price row currency and current unit's currencies are equal
				{
					priceValue = new Double(priceArr[1]);
					LOG.info("The price value is " + priceValue);
				}
			}
		}

		return priceValue;
	}

	@Override
	public List<String> getAllConfigProducts()
	{
		return bhgeProductDao.getAllConfigProducts();
	}

	/**
	 * Method to retrieve classAttributeAssignments for code and product
	 *
	 * @param code
	 * @param model
	 * @return
	 */
	private List<ClassAttributeAssignmentModel> getClassAttributeAss(final String code, final ProductModel model)
	{
		final Map<String, Object> params = new HashMap<String, Object>();


		final UserModel user = userService.getCurrentUser();
		userService.setCurrentUser(userService.getAdminUser());

		final FlexibleSearchQuery query = new FlexibleSearchQuery(" select {CAA." + ClassAttributeAssignmentModel.PK + "} from {"
				+ ClassAttributeAssignmentModel._TYPECODE + " AS CAA JOIN " + ClassificationAttributeModel._TYPECODE + " AS CA ON"
				+ " {CAA." + ClassAttributeAssignmentModel.CLASSIFICATIONATTRIBUTE + "}={CA." + ClassificationAttributeModel.PK
				+ "} JOIN " + ClassificationClassModel._TYPECODE + " AS CC ON  {CAA."
				+ ClassAttributeAssignmentModel.CLASSIFICATIONCLASS + "}={CC." + ClassificationClassModel.PK + "}} where {CA."
				+ ClassificationAttributeModel.CODE + "}=?classAttribute");
		params.put("classAttribute", code);
		query.addQueryParameters(params);
		final SearchResult<ClassAttributeAssignmentModel> results = flexibleSearchService.search(query);
		final List<ClassAttributeAssignmentModel> classAttributeAssignmentModelList = results.getResult();
		userService.setCurrentUser(user);
		return classAttributeAssignmentModelList;
	}

	/**
	 * Retrieves feature value for features
	 *
	 * @param features
	 * @return
	 */
	private Map<ClassAttributeAssignmentModel, List<ProductFeatureModel>> convertFeaturesResult(
			final List<List<ItemModel>> features)
	{
		final Map<ClassAttributeAssignmentModel, List<ProductFeatureModel>> result = new LinkedHashMap<ClassAttributeAssignmentModel, List<ProductFeatureModel>>();
		for (final List<ItemModel> row : features)
		{
			final ProductFeatureModel productFeature = (ProductFeatureModel) row.get(0);
			final ClassAttributeAssignmentModel assignment = (ClassAttributeAssignmentModel) row.get(1);
			List<ProductFeatureModel> _features = result.get(assignment);
			if (_features == null)
			{
				result.put(assignment, _features = new ArrayList());
			}
			_features.add(productFeature);
		}
		return result;
	}

	@Override
	public BHGELongConfigResponse getConfigurationFromSAP(final Map<Integer, String> productCodes) {

		LOG.info("BHGEProductServiceImpl : inside validateConfiguration config");
		String longNumberConfigReqXml = prepareLongNumberConfigRequest(productCodes);
		final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_LONG_CONFIG_ENDPOINT_URL,
					flexibleSearchService);
		BHGELongConfigResponse bhgeLongConfigResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, longNumberConfigReqXml, BHGELongConfigResponse.class);

		if(null != bhgeLongConfigResponse) {
			LOG.info("BHGEProductServiceImpl : long configuration CPI response xml " + scpiConnector.toXML(bhgeLongConfigResponse));
		}

		return bhgeLongConfigResponse;

	}

    @Override
    public BHGECurrencyModel getCustomerCurrency(String b2bUnit , String productType) {
        return bhgeProductDao.getCustomerCurrency(b2bUnit,productType);
    }

    @Override
    public CurrencyModel getcurrencyModel(String currency) {
        return bhgeProductDao.getcurrencyModel(currency);
    }


    protected String prepareLongNumberConfigRequest(final Map<Integer, String> productCodes) {

		LOG.info("BHGEProductServiceImpl inside prepareConfigValidateRequest");

		String requestXml = null;

		BHGELongConfigRequest zConfigRequest = new BHGELongConfigRequest();
		BHGELongConfigGlobalHeaderRequest isGlobal = new BHGELongConfigGlobalHeaderRequest();

		zConfigRequest.setIsGlobal(setIsGlobal(isGlobal));

		int count = 1;
		for (Map.Entry<Integer, String> entry : productCodes.entrySet()) {
			BHGELongConfigItemsRequest item = new BHGELongConfigItemsRequest();
			item.setItemNo(String.valueOf(count * entry.getKey()));
			final String product = entry.getValue();
			int materialIndex = product.indexOf(HIGHPHEN);
			if (materialIndex != -1) {
				String material = product.substring(0, materialIndex);
				String longNumber = product.substring(materialIndex);
				item.setLongNumber(longNumber.toUpperCase());
				item.setMaterial(material.toUpperCase());
			}
			zConfigRequest.getItItem().getItems().add(item);
			//count++;
		}
		requestXml = scpiConnector.toXML(zConfigRequest);

		LOG.info("BHGEProductServiceImpl long configuration request xml " + requestXml);

		return requestXml;

	}

	public BHGELongConfigGlobalHeaderRequest setIsGlobal(final BHGELongConfigGlobalHeaderRequest isGlobal)
	{

		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();

		if (null != sapConfigurationModel)
		{
			isGlobal.setVkorg(sapConfigurationModel.getSapcommon_salesOrganization());
			isGlobal.setVtweg(sapConfigurationModel.getSapcommon_distributionChannel());
			isGlobal.setSpart(sapConfigurationModel.getSapcommon_division());
			isGlobal.setKunnr(getKunnarNumber());

		}
		return isGlobal;
	}

	protected SAPConfigurationModel getSapConfigurationForCurrentStore()
	{
		SAPConfigurationModel sapConfigModel = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
			if (null != baseStore)
			{
				sapConfigModel = baseStore.getSAPConfiguration();
			}
			return sapConfigModel;
		}
		return sapConfigModel;
	}
	
	protected String getKunnarNumber() {
		String customerNumber = null;
		final B2BCustomerModel b2bCustomer = (B2BCustomerModel) b2bCustomerService.getCurrentB2BCustomer();
		B2BUnitModel b2bUnit = (B2BUnitModel) b2bUnitService.getParent(b2bCustomer);
		if (b2bUnit != null) {
			customerNumber = b2bUnitService.getRootUnit(b2bUnit).getUid();
		}
		return customerNumber != null ? customerNumber.toUpperCase() : customerNumber;
	}
	
}
