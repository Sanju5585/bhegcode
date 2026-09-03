/**
 *
 */
package com.bhge.core.commerceservices.category.impl;

import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.product.data.CategoryData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commerceservices.category.impl.DefaultCommerceCategoryService;
import de.hybris.platform.commerceservices.url.UrlResolver;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.*;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;


import com.bhge.core.category.data.BHGECategoryData;
import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGECategorytoSalesOrgModel;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.facades.breadcrumb.data.BHGEBreadCrumbData;
import com.bhge.facades.data.BhgeSalesAreaObjectData;
import com.bhge.facades.user.data.BHGECategorytoSalesOrgData;
import com.bhge.store.services.BHGEBaseStoreService;

/**
 * @author 212602188
 *
 */
public class BHGECommerceCategoryServiceImpl extends DefaultCommerceCategoryService
		implements BHGECommerceCategoryService {

	private UrlResolver<CategoryModel> categoryModelUrlResolver;
	private static final String ROOT_CATEGORY_CODE = "ECOM_LVL0_00000000";
	public static final String GUEST_BASE_STORE_UID = "bhge";
	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource(name = "bhgeAnonymousGuestConverter")
	private Converter<BHGECategorytoSalesOrgModel, BHGECategorytoSalesOrgData> bhgeAnonymousGuestConverter;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	protected UrlResolver<CategoryModel> getCategoryModelUrlResolver() {
		return categoryModelUrlResolver;
	}


	public void setCategoryModelUrlResolver(final UrlResolver<CategoryModel> categoryModelUrlResolver) {
		this.categoryModelUrlResolver = categoryModelUrlResolver;
	}

	@Override
	protected boolean isSupportedCategory(final CategoryModel categoryModel) {
		// Making TRUE by default to return Category Model from both Product Catalog
		// version & Classification Catalog version
		return true;// (!(categoryModel.getCatalogVersion() instanceof
		// ClassificationSystemVersionModel));
	}

	public List<CategoryData> fetchAllCategories(final String guestSalesArea) {
		List<CategoryData> categoryList = new ArrayList<CategoryData>();
		final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(GUEST_BASE_STORE_UID);
		final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
			categoryList = getAllCategoriesForCustomerAccount();
		} else {
			categoryList = getAllCategoriesForCustomerforGuestforWS(guestSalesArea, countryModel);
		}
		return categoryList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.commerceservices.category.BHGECommerceCategoryService#
	 * getAllCategoriesForCustomer()
	 */
	@Override
	public List<BHGECategoryData> getAllCategoriesForCustomer() {
		final UserModel currentUser = userService.getCurrentUser();
		final BHGECategoryData allCategories = new BHGECategoryData();
		final Set<BHGECategoryData> level1Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level2Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level3Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level4Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level5Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level6Categories = new HashSet<BHGECategoryData>();

		final List<CategoryModel> categoriesToLoop = getCategoriesToLoop(currentUser);
		for (final CategoryModel accessibleCategory : categoriesToLoop) {
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL1")) {
				populateCategoryDetails(accessibleCategory, level1Categories, 1);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL2")) {
				populateCategoryDetails(accessibleCategory, level2Categories, 2);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL3")) {
				populateCategoryDetails(accessibleCategory, level3Categories, 3);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL4")) {
				populateCategoryDetails(accessibleCategory, level4Categories, 4);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL5")) {
				populateCategoryDetails(accessibleCategory, level5Categories, 5);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL6")) {
				populateCategoryDetails(accessibleCategory, level6Categories, 6);
			}
		}
		allCategories.setLevel1s(level1Categories);
		allCategories.setLevel2s(level2Categories);
		allCategories.setLevel3s(level3Categories);
		allCategories.setLevel4s(level4Categories);
		allCategories.setLevel5s(level5Categories);
		allCategories.setLevel6s(level6Categories);
		// Looping level 2 categories
		for (final BHGECategoryData level2 : level2Categories) {
			allCategories.setSubCategories(level2);
		}
		// Looping level 3 categories
		for (final BHGECategoryData level3 : level3Categories) {
			allCategories.setSubCategories(level3);
		}
		// Looping level 4 categories
		for (final BHGECategoryData level4 : level4Categories) {
			allCategories.setSubCategories(level4);
		}
		// Looping level 5 categories
		for (final BHGECategoryData level5 : level5Categories) {
			allCategories.setSubCategories(level5);
		}
		// Looping level 6 categories
		for (final BHGECategoryData level6 : level6Categories) {
			allCategories.setSubCategories(level6);
		}

		return new ArrayList(allCategories.getFinalList());
	}

	@Override
	public List<CategoryData> getAllCategoriesForCustomerAccount() {
		final UserModel currentUser = userService.getCurrentUser();
		final BHGECategoryData allCategories = new BHGECategoryData();
		final Set<CategoryData> level1Cat = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level2Cat = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level3Cat = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level4Cat = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level5Cat = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level6Cat = new LinkedHashSet<CategoryData>();

		List<CategoryModel> categoriesToLoop = getCategoriesToLoop(currentUser);
		//categoriesToLoop = categoriesToLoop.stream().sorted(Comparator.comparing(CategoryModel::getOrder,Comparator.nullsLast(Comparator.naturalOrder()))).collect(Collectors.toList());
		Comparator<CategoryModel> categoryModelComparator = Comparator.comparing(CategoryModel::getOrder,Comparator.nullsLast(Comparator.naturalOrder()));
		categoryModelComparator = categoryModelComparator.thenComparing(Comparator.comparing(CategoryModel::getName,Comparator.nullsLast(Comparator.naturalOrder())));
		categoriesToLoop = categoriesToLoop.stream().sorted(categoryModelComparator).collect(Collectors.toList());

		for (final CategoryModel accessibleCategory : categoriesToLoop) {
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL1")) {
				populateCatDetails(accessibleCategory, level1Cat, 1);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL2")) {
				populateCatDetails(accessibleCategory, level2Cat, 2);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL3")) {
				populateCatDetails(accessibleCategory, level3Cat, 3);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL4")) {
				populateCatDetails(accessibleCategory, level4Cat, 4);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL5")) {
				populateCatDetails(accessibleCategory, level5Cat, 5);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL6")) {
				populateCatDetails(accessibleCategory, level6Cat, 6);
			}
		}
		allCategories.setLvl1s(level1Cat);
		allCategories.setLvl2s(level2Cat);
		allCategories.setLvl3s(level3Cat);
		allCategories.setLvl4s(level4Cat);
		allCategories.setLvl5s(level5Cat);
		allCategories.setLvl6s(level6Cat);
		// Looping level 2 categories
		for (final CategoryData level2 : level2Cat) {
			allCategories.setSubCategories(level2);
		}
		// Looping level 3 categories
		for (final CategoryData level3 : level3Cat) {
			allCategories.setSubCategories(level3);
		}
		// Looping level 4 categories
		for (final CategoryData level4 : level4Cat) {
			allCategories.setSubCategories(level4);
		}
		// Looping level 5 categories
		for (final CategoryData level5 : level5Cat) {
			allCategories.setSubCategories(level5);
		}
		// Looping level 6 categories
		for (final CategoryData level6 : level6Cat) {
			allCategories.setSubCategories(level6);
		}

		return level1Cat.stream().collect(Collectors.toList());
	}

	@Override
	public List<BHGECategoryData> getAllCategoriesForCustomerforGuest(final String sessionSalesOrg,
																	  final CountryModel defaultCountryModel) {
		final UserModel currentUser = userService.getCurrentUser();
		final BHGECategoryData allCategories = new BHGECategoryData();
		final Set<BHGECategoryData> level1Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level2Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level3Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level4Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level5Categories = new HashSet<BHGECategoryData>();
		final Set<BHGECategoryData> level6Categories = new HashSet<BHGECategoryData>();

		final List<CategoryModel> categoriesToLoop = getCategoriesToLoopforGuest(currentUser, sessionSalesOrg,
				defaultCountryModel);
		for (final CategoryModel accessibleCategory : categoriesToLoop) {
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL1")) {
				populateCategoryDetails(accessibleCategory, level1Categories, 1);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL2")) {
				populateCategoryDetails(accessibleCategory, level2Categories, 2);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL3")) {
				populateCategoryDetails(accessibleCategory, level3Categories, 3);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL4")) {
				populateCategoryDetails(accessibleCategory, level4Categories, 4);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL5")) {
				populateCategoryDetails(accessibleCategory, level5Categories, 5);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL6")) {
				populateCategoryDetails(accessibleCategory, level6Categories, 6);
			}
		}
		allCategories.setLevel1s(level1Categories);
		allCategories.setLevel2s(level2Categories);
		allCategories.setLevel3s(level3Categories);
		allCategories.setLevel4s(level4Categories);
		allCategories.setLevel5s(level5Categories);
		allCategories.setLevel6s(level6Categories);
		// Looping level 2 categories
		for (final BHGECategoryData level2 : level2Categories) {
			allCategories.setSubCategories(level2);
		}
		// Looping level 3 categories
		for (final BHGECategoryData level3 : level3Categories) {
			allCategories.setSubCategories(level3);
		}
		// Looping level 4 categories
		for (final BHGECategoryData level4 : level4Categories) {
			allCategories.setSubCategories(level4);
		}
		// Looping level 5 categories
		for (final BHGECategoryData level5 : level5Categories) {
			allCategories.setSubCategories(level5);
		}
		// Looping level 6 categories
		for (final BHGECategoryData level6 : level6Categories) {
			allCategories.setSubCategories(level6);
		}

		return new ArrayList(allCategories.getFinalList());
	}

	@Override
	public List<CategoryData> getAllCategoriesForCustomerforGuestforWS(final String guestSalesArea,
																	   final CountryModel defaultCountryModel) {
		final UserModel currentUser = userService.getCurrentUser();
		final BHGECategoryData allCategories = new BHGECategoryData();
		final Set<CategoryData> level1Categories = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level2Categories = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level3Categories = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level4Categories = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level5Categories = new LinkedHashSet<CategoryData>();
		final Set<CategoryData> level6Categories = new LinkedHashSet<CategoryData>();

		List<CategoryModel> categoriesToLoop = getCategoriesToLoopforGuest(currentUser, guestSalesArea,
				defaultCountryModel);

		//categoriesToLoop = categoriesToLoop.stream().sorted(Comparator.comparing(CategoryModel::getOrder,Comparator.nullsLast(Comparator.naturalOrder()))).collect(Collectors.toList());
		Comparator<CategoryModel> categoryModelComparator = Comparator.comparing(CategoryModel::getOrder,Comparator.nullsLast(Comparator.naturalOrder()));
		categoryModelComparator = categoryModelComparator.thenComparing(Comparator.comparing(CategoryModel::getName,Comparator.nullsLast(Comparator.naturalOrder())));
		categoriesToLoop = categoriesToLoop.stream().sorted(categoryModelComparator).collect(Collectors.toList());


		for (final CategoryModel accessibleCategory : categoriesToLoop) {
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL1")) {
				populateCatDetailsDS(accessibleCategory, level1Categories, 1, guestSalesArea);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL2")) {
				populateCatDetailsDS(accessibleCategory, level2Categories, 2, guestSalesArea);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL3")) {
				populateCatDetailsDS(accessibleCategory, level3Categories, 3, guestSalesArea);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL4")) {
				populateCatDetailsDS(accessibleCategory, level4Categories, 4, guestSalesArea);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL5")) {
				populateCatDetailsDS(accessibleCategory, level5Categories, 5, guestSalesArea);
			}
			if (StringUtils.isNotBlank(accessibleCategory.getCode()) && accessibleCategory.getCode().contains("LVL6")) {
				populateCatDetailsDS(accessibleCategory, level6Categories, 6, guestSalesArea);
			}
		}
		allCategories.setLvl1s(level1Categories);
		allCategories.setLvl2s(level2Categories);
		allCategories.setLvl3s(level3Categories);
		allCategories.setLvl4s(level4Categories);
		allCategories.setLvl5s(level5Categories);
		allCategories.setLvl6s(level6Categories);
		// Looping level 2 categories
		for (final CategoryData level2 : level2Categories) {
			allCategories.setSubCategories(level2);
		}
		// Looping level 3 categories
		for (final CategoryData level3 : level3Categories) {
			allCategories.setSubCategories(level3);
		}
		// Looping level 4 categories
		for (final CategoryData level4 : level4Categories) {
			allCategories.setSubCategories(level4);
		}
		// Looping level 5 categories
		for (final CategoryData level5 : level5Categories) {
			allCategories.setSubCategories(level5);
		}
		// Looping level 6 categories
		for (final CategoryData level6 : level6Categories) {
			allCategories.setSubCategories(level6);
		}

		return level1Categories.stream().collect(Collectors.toList());
	}

	/**
	 * Separating categories for FPT/Non FPT users
	 *
	 * @param currentUser
	 * @return
	 */
	private List<CategoryModel> getCategoriesToLoop(final UserModel currentUser) {
		List<CategoryModel> categoriesToLoop = new ArrayList<CategoryModel>();
		if (currentUser instanceof GEEdgeCustomerModel) {
			categoriesToLoop = categoriesToLoopForLoggedInUser(currentUser, categoriesToLoop);
		} else {
			// categoriesToLoop = categoriesToLoopForGuestUser(guestCategoryCodes,
			// categoriesToLoop);
			final BaseStoreModel baseStoreModel = baseStoreService
					.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao
					.getCountryToUnitMappingListForAnonymousUser(countryModel);
			final List<CategoryModel> allowedguestCategories = new ArrayList<CategoryModel>();
			for (BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList) {
				if (CollectionUtils.isNotEmpty(anonymousUserCatalog.getCategories())) {
					allowedguestCategories.addAll(anonymousUserCatalog.getCategories());
				}
			}
			if (CollectionUtils.isNotEmpty(allowedguestCategories)) {
				categoriesToLoop = categoriesToLoopForGuestUser(allowedguestCategories, categoriesToLoop);
			}
		}
		return categoriesToLoop;
	}

	private List<CategoryModel> getCategoriesToLoopforGuest(final UserModel currentUser, final String sessionSalesOrg,
															final CountryModel defaultCountryModel) {
		List<CategoryModel> categoriesToLoop = new ArrayList<CategoryModel>();
		if (null != sessionSalesOrg && StringUtils.isNotEmpty(sessionSalesOrg)) {
			final BaseStoreModel baseStoreModel = baseStoreService
					.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			String[] sessionSalesOrgArr = sessionSalesOrg.split("_");
			if (sessionSalesOrgArr.length > 2) {
				final List<BHGEAnonymousUserCatalogModel> anonymousUserCatalogList = bhgeUserProfileDao
						.getCountryToUnitMappingListForAnonymousUser(countryModel);
				final List<CategoryModel> allowedguestCategories = new ArrayList<CategoryModel>();
				for (BHGEAnonymousUserCatalogModel anonymousUserCatalog : anonymousUserCatalogList){
					if (anonymousUserCatalog !=null) {
						allowedguestCategories.addAll(anonymousUserCatalog.getCategories());
					}
				}
				if (CollectionUtils.isNotEmpty(allowedguestCategories)) {
					categoriesToLoop = categoriesToLoopForGuestUser(allowedguestCategories, categoriesToLoop);
				}
			}
		}
		return categoriesToLoop;
	}

	/**
	 * Considers only specific categories defined in properties for guest
	 */
	private List<CategoryModel> categoriesToLoopForGuestUser(final List<CategoryModel> guestCategory,
															 final List<CategoryModel> categoriesToLoop) {
		// for (final String categoryCode : guestCategoryCodes)
		for (final CategoryModel nonfptCategory : guestCategory) {
			// final CategoryModel nonfptCategory =
			// bhgeCommerceCategoryService.getCategoryForCode(categoryCode);
			categoriesToLoop.add(nonfptCategory);
			categoriesToLoop.addAll(nonfptCategory.getAllSubcategories());
			categoriesToLoop.addAll(nonfptCategory.getAllSupercategories());
		}
		return categoriesToLoop;
	}

	/**
	 * Considers all categories for logged in user and also if guest categories
	 * value in properties is empty
	 */
	private List<CategoryModel> categoriesToLoopForLoggedInUser(final UserModel currentUser,
																final List<CategoryModel> categoriesToLoop) {
		final CategoryModel category = bhgeCommerceCategoryService.getCategoryForCode(ROOT_CATEGORY_CODE);
		final UserGroupModel userGroup = userService.getUserGroupForUID("bhgefptb2busergroup");
		final String fptCategoriesInSystem = bhgeUserProfileDao.getFPTCategoriesListForUser();
		final List<String> fptCategories = new ArrayList<String>();
		final List<String> nonfptCategories = new ArrayList<String>();
		final List<String> fptCategoryCodes = StringUtils.isNotBlank(fptCategoriesInSystem)
				? Arrays.asList(fptCategoriesInSystem.split(","))
				: new ArrayList<String>();
		for (final CategoryModel subCat : category.getCategories()) {
			if (fptCategoryCodes.contains(subCat.getCode())) {
				fptCategories.add(subCat.getCode()); // Level 1s FPT
			} else {
				nonfptCategories.add(subCat.getCode()); // Level 1s Non FPT
			}
		}
		if (currentUser.getGroups().contains(userGroup)) // FPT User
		{
			for (final String fptCategoryCode : fptCategories) {
				final CategoryModel fptCategory = bhgeCommerceCategoryService.getCategoryForCode(fptCategoryCode);
				categoriesToLoop.add(fptCategory);
				categoriesToLoop.addAll(fptCategory.getAllSubcategories());
			}
		} else {
			for (final String nonfptCategoryCode : nonfptCategories) {
				final CategoryModel nonfptCategory = bhgeCommerceCategoryService.getCategoryForCode(nonfptCategoryCode);
				categoriesToLoop.add(nonfptCategory);
				categoriesToLoop.addAll(nonfptCategory.getAllSubcategories());
			}
		}
		return categoriesToLoop;
	}

	/**
	 * Populate category details on each level
	 *
	 * @param category
	 * @param categoryList
	 * @param level
	 */

	private void populateCategoryDetails(final CategoryModel category, final Set<BHGECategoryData> categoryList,
										 final int level) {
		final BHGECategoryData categoryData = new BHGECategoryData();
		categoryData.setCode(category.getCode());
		categoryData.setName(category.getName());
		categoryData.setCategoryUrl(getCategoryModelUrlResolver().resolve(category));
		if (category.getPicture() != null && StringUtils.isNotBlank(category.getPicture().getURL())) {
			categoryData.setCategoryImageUrl(category.getPicture().getURL());
		}
		final List<String> superCategoryCodes = new ArrayList<String>();
		for (final CategoryModel superCat : category.getSupercategories()) {
			superCategoryCodes.add(superCat.getCode());
		}
		categoryData.setSuperCategories(superCategoryCodes);
		categoryData.setLevel(level);
		categoryList.add(categoryData);
	}

	private void populateCatDetails(final CategoryModel category, final Set<CategoryData> catList, final int level) {
		final CategoryData catData = new CategoryData();
		catData.setCode(category.getCode());
		catData.setName(category.getName());
		catData.setUrl(getCategoryModelUrlResolver().resolve(category));
		if (category.getPicture() != null && StringUtils.isNotBlank(category.getPicture().getURL())) {
			catData.setCategoryImageUrl(category.getPicture().getURL());
		}
		final List<String> superCategoryCodes1 = new LinkedList<String>();
		for (final CategoryModel superCat : category.getSupercategories()) {
			superCategoryCodes1.add(superCat.getCode());
		}
		catData.setSuperCategories(superCategoryCodes1);
		catData.setLevel(level);
		catData.setOrder(category.getOrder());
		catList.add(catData);
	}

	@Override
	public CategoryData getBreadCrumbsForCategory(String categoryId) {
		CategoryModel categoryModel = getCategoryForCode(StringEscapeUtils.escapeHtml4(categoryId));
		final Collection<CategoryModel> categoryModels = new ArrayList<>();
		categoryModels.addAll(categoryModel.getSupercategories());
		List<BHGEBreadCrumbData> breadCrumbList = new ArrayList<BHGEBreadCrumbData>();
		breadCrumbList.add(createBreadCrumbs(categoryModel));
		while (!categoryModels.isEmpty()) {
			final CategoryModel catModel = categoryModels.iterator().next();
			if (catModel != null) {
				breadCrumbList.add(createBreadCrumbs(catModel));
				categoryModels.clear();
				categoryModels.addAll(catModel.getSupercategories());
			} else {
				categoryModels.remove(catModel);
			}
		}
		Collections.reverse(breadCrumbList);
		CategoryData categoryData = new CategoryData();
		categoryData.setBreadCrumbs(breadCrumbList);
		return categoryData;
	}

	public BHGEBreadCrumbData createBreadCrumbs(final CategoryModel categoryModel) {

		final String url = getCategoryModelUrlResolver().resolve(categoryModel);
		final String code = categoryModel.getCode() != null ? categoryModel.getCode() : "";
		final String name = categoryModel.getName() != null ? categoryModel.getName() : "";
		BHGEBreadCrumbData breadCrumbData = new BHGEBreadCrumbData();
		breadCrumbData.setUrl(url);
		breadCrumbData.setName(name);
		breadCrumbData.setLinkClass(null);
		breadCrumbData.setCategoryCode(code);
		return breadCrumbData;
	}

	// added for waygate guest user

	// added for waygate guest user

	private BhgeSalesAreaObjectData getAnonymousUserDataModelDS(final CountryModel countryModel,
																final Collection<CategoryModel> allowedCategories, final CategoryData catData , BhgeSalesAreaObjectData  bhgeSalesAreaObjectData) {
		final List<BHGECategorytoSalesOrgModel> anonymousUserCatalogSalesOrg = bhgeUserProfileDao
				.getAllSalesOrgToCategoryForAnonymousUser();

		for (BHGECategorytoSalesOrgModel salesOrg : anonymousUserCatalogSalesOrg) {

			if(allowedCategories.contains(salesOrg.getCategory())){
				bhgeSalesAreaObjectData = populateDefaultBhgeSalesAreaObjectDS(bhgeSalesAreaObjectData, countryModel, salesOrg.getSalesOrg());
				catData.setSalesAreaId(salesOrg.getSalesOrg()+ "_"+ salesOrg.getDistributionChannel() + "_" + salesOrg.getDivision()) ;
				break;
			}

		}

		return bhgeSalesAreaObjectData;
	}


	private BhgeSalesAreaObjectData populateCategorySpecificSalesAreaObjectDS(
			BhgeSalesAreaObjectData bhgeSalesAreaObjectData, BHGECategorytoSalesOrgModel data) {
		return populateBhgeSalesAreaObject(bhgeSalesAreaObjectData, data.getSalesOrg(), data.getDistributionChannel(),
				data.getDivision());
	}

	private BhgeSalesAreaObjectData populateDefaultBhgeSalesAreaObjectDS(
			BhgeSalesAreaObjectData bhgeSalesAreaObjectData, final CountryModel countryModel,
			final String guestSalesArea) {
		String salesOrg = null;
		String distChannel = null;
		String division = null;

		BHGECategorytoSalesOrgData CategorytoSalesOrgData = null;
		final List<BHGECategorytoSalesOrgModel> anonymousUserCatalogSalesOrg = bhgeUserProfileDao
				.getAllSalesOrgToCategoryForAnonymousUser();

		for (BHGECategorytoSalesOrgModel bhgeCategorytoSalesOrgModel : anonymousUserCatalogSalesOrg) {
			if (bhgeCategorytoSalesOrgModel != null && guestSalesArea != null
					&& bhgeCategorytoSalesOrgModel.getSalesOrg().equals(guestSalesArea)) {

				CategorytoSalesOrgData = bhgeAnonymousGuestConverter.convert(bhgeCategorytoSalesOrgModel);
				salesOrg = CategorytoSalesOrgData.getSalesOrg();
				distChannel = CategorytoSalesOrgData.getDistributionChannel();
				division = CategorytoSalesOrgData.getDivision();
				break;
			}

		}
		return populateBhgeSalesAreaObject(bhgeSalesAreaObjectData, salesOrg, distChannel, division);

	}

	private BhgeSalesAreaObjectData populateBhgeSalesAreaObject(BhgeSalesAreaObjectData bhgeSalesAreaObjectData,
																final String salesOrg, final String distChannel, final String division) {
		bhgeSalesAreaObjectData.setActive(true);
		bhgeSalesAreaObjectData.setSalesAreaId(salesOrg + "_" + distChannel + "_" + division);
		final SAPConfigurationModel baseStoreConfiguration = baseStoreService.findSAPConfigurationWithParams(salesOrg,
				distChannel, division);
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

	// for waygate changes in Guest user home page
	private void populateCatDetailsDS(final CategoryModel category, final Set<CategoryData> catList, final int level,
									  final String guestSalesArea) {
		final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(GUEST_BASE_STORE_UID);

		final CountryModel countryModel = baseStoreModel.getDefaultCountry();
		final Collection<CategoryModel> allAllowedCategories = new ArrayList<CategoryModel>();
		if (Objects.nonNull(countryModel)) {
			final CategoryModel categoryGuest = bhgeCommerceCategoryService.getCategoryForCode(category.getCode());

			allAllowedCategories.addAll(categoryGuest.getAllSubcategories());
			allAllowedCategories.addAll(categoryGuest.getAllSupercategories());
			allAllowedCategories.add(categoryGuest);
		}

		final List<String> superCategoryCodes1 = new LinkedList<String>();
		for (final CategoryModel superCat : category.getSupercategories()) {
			superCategoryCodes1.add(superCat.getCode());
		}
		CategoryData catData = new CategoryData();
		catData.setCode(category.getCode());
		catData.setName(category.getName());
		catData.setUrl(getCategoryModelUrlResolver().resolve(category));
		if (category.getPicture() != null && StringUtils.isNotBlank(category.getPicture().getURL())) {
			catData.setCategoryImageUrl(category.getPicture().getURL());
		}

		catData.setSuperCategories(superCategoryCodes1);
		catData.setLevel(level);
		catData.setOrder(category.getOrder());

		BhgeSalesAreaObjectData  bhgeSalesAreaObjectData = new BhgeSalesAreaObjectData();
		bhgeSalesAreaObjectData= getAnonymousUserDataModelDS(countryModel, allAllowedCategories, catData , bhgeSalesAreaObjectData);
		if (bhgeSalesAreaObjectData.getSalesAreaId()!=null) {
			catData.setActive(bhgeSalesAreaObjectData.isActive());
			catData.setSalesAreaId(bhgeSalesAreaObjectData.getSalesAreaId());
		}
		catList.add(catData);

	}
}
