package com.bhge.facades.product.populators;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.enums.ProductReferenceTypeEnum;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.catalog.references.ProductReferenceService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cmsfacades.data.MediaData;
import de.hybris.platform.commercefacades.product.converters.populator.ProductPopulator;
import de.hybris.platform.commercefacades.product.data.ClassificationData;
import de.hybris.platform.commercefacades.product.data.FeatureData;
import de.hybris.platform.commercefacades.product.data.FeatureValueData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.impl.DefaultProductService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;



/**
 * @author canantha
 *
 */
public class BHGEProductPopulator extends ProductPopulator
{
	@Resource(name = "productReferenceService")
	private ProductReferenceService productReferenceService;

	@Resource(name = "mediaModelConverter")
	private Converter<MediaModel, MediaData> mediaModelConverter;

	@Resource
	private UserService userService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "sessionService")
	SessionService sessionService;
	
	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@Autowired
	private DefaultProductService productService;
	
	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	private List<BHGEProductAccessStrategy> strategiesList = new LinkedList();
	private static final Logger LOG = Logger.getLogger(BHGEProductPopulator.class);

	/**
	 * @return the strategiesList
	 */
	public List<BHGEProductAccessStrategy> getStrategiesList()
	{
		return this.strategiesList;
	}

	public void setStrategiesList(final List<BHGEProductAccessStrategy> strategiesList)
	{
		this.strategiesList = strategiesList;
	}

	@Override
	public void populate(final ProductModel source, final ProductData target)
	{
		super.populate(source, target);
		if (source instanceof GEEdgeProductModel)
		{
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) source;
			final Collection<MediaData> dataSheetCollection = new LinkedList<>();
			CategoryModel parentCategory = null;
			target.setConfigurable(source.getSapConfigurable());
			final GEEdgeProductModel gEEdgeProductModel = (GEEdgeProductModel) source;
			target.setLeadTimeMaxQty(gEEdgeProductModel.getLeadTimeMaxQty());
			target.setMaxOrderQty(gEEdgeProductModel.getMaxOrderQty());
			target.setLeadTimeType(gEEdgeProductModel.getLeadTimeType());
			target.setEN(gEEdgeProductModel.getEn());
			target.setUsDn(gEEdgeProductModel.getUsdn());
			target.setConnectorImage(gEEdgeProductModel.getConnectorImage());
			target.setProductSpecs(gEEdgeProductModel.getProductSpecs());
			target.setDescription(source.getDescription());
			if (geEdgeProduct.getProductType() != null && geEdgeProduct.getProductType().getCode() != null
					&& GEEdgeProductType.FPT.getCode().equalsIgnoreCase(geEdgeProduct.getProductType().getCode()))
			{
				target.setIsFptProduct(true);
			}

			// target.setReplacementProductStatus(gEEdgeProductModel.getReplacementProductStatus());
			// target.setObsoleteProductStatus(gEEdgeProductModel.getObsoleteProductStatus());

			target.setIsEngineeringHold(Boolean.FALSE);
			final BHGEProductUtil productUtil = new BHGEProductUtil();
			final MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(geEdgeProduct,
					sessionService, userService);
			final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(geEdgeProduct, sessionService,
					userService);

			if ((materialStatus != null
					&& (materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)))
					&& (hybrisStatus != null && hybrisStatus.equals(HybrisStatus.SELL)))
			{
				target.setIsEngineeringHold(Boolean.TRUE);
			}

			target.setHybrisStatus((null != hybrisStatus) ? hybrisStatus.getCode() : null);
			target.setMaterialStatus((null != materialStatus) ? materialStatus.getCode() : null);

			// Adding the Parent category code of the product to data object
			final List<CategoryModel> superCategories = (List<CategoryModel>) source.getSupercategories();
			if (null != superCategories && superCategories.size() > 0)
			{
				for (final CategoryModel category : superCategories)
				{
					if (CollectionUtils.isEmpty(category.getCategories()) || !CollectionUtils.isEmpty(category.getProducts()))
					{
						parentCategory = category;
						break;
					}
				}
			}

			if (null != parentCategory)
			{
				target.setParentCategoryCode(parentCategory.getCode());
				target.setParentCategoryName(parentCategory.getName());
			}

			// Populating UOM for the Material
			if (null != source.getUnit() && StringUtils.isNotBlank(source.getUnit().getName()))
			{
				target.setUom(source.getUnit().getName());
			}

			// To get image for a product
			if (source.getPicture() != null)
			{
				final MediaModel mediaModel = source.getPicture();
				target.setMediaurl(mediaModel.getURL());
			}
			else
			{
				target.setMediaurl(Config.getParameter("PRODUCT_DEFAULT_MEDIA_URL_PATH"));
			}

			// Populate replacement product
			populateReplacementProduct(source, target);
			populateProductAccessData(target, source);
			populateSalesAreaSpecificFieldsBasedonCurrentSalesArea(gEEdgeProductModel, target);
			//target.setMinOrderQty(source.getMinOrderQuantity());

			if (CollectionUtils.isNotEmpty(source.getData_sheet()) && source.getData_sheet().size() > 0)
			{
				source.getData_sheet().forEach(mediaModel -> {
					final MediaData mediaData = mediaModelConverter.convert(mediaModel);
					dataSheetCollection.add(mediaData);
				});
				target.setData_sheet(dataSheetCollection);
			}
			target.setProductType(geEdgeProduct.getProductType().getCode());
		}
	}

	/**
	 * Populates the current sales area replacement product
	 *
	 * @param source
	 * @param target
	 */
	private void populateReplacementProduct(final ProductModel source, final ProductData target)
	{
		final List<String> replacementData = new ArrayList<String>();
		final Collection<ProductReferenceModel> targets = productReferenceService.getProductReferencesForSourceProduct(source,
				ProductReferenceTypeEnum.OBSOLETE, true);

		if (CollectionUtils.isNotEmpty(targets))
		{
			target.setObsoleteProductStatus("true");
			final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
			if (sessionSalesAreaData != null)
			{
				for (final ProductReferenceModel referenceModel : targets)
				{
					if (referenceModel.getTarget() instanceof GEEdgeProductModel)
					{
						final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) referenceModel.getTarget();
						for (final BHGESalesAreaDataModel salesArea : geEdgeProduct.getSalesAreaData())
						{
							if (salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))
							{
								replacementData.add(referenceModel.getTarget().getCode());
							}
						}
					}
				}
			}
		}
		if (replacementData.size() > 0)
		{
			target.setReplacementProductStatus(replacementData.get(0));
		}
	}

	/**
	 * Populate lead time on product based on current sales area
	 *
	 * @param source
	 * @param target
	 */
	private void populateSalesAreaSpecificFieldsBasedonCurrentSalesArea(final GEEdgeProductModel source, final ProductData target)
	{
		UserModel currentUser = userService.getCurrentUser();
		if(currentUser != null && currentUser instanceof GEEdgeCustomerModel)
		{
			final GEEdgeCustomerModel geEdgeUser = (GEEdgeCustomerModel) currentUser;
			if(null != geEdgeUser.getDefaultB2BUnit() && geEdgeUser.getDefaultB2BUnit().getUid().contains("_")) {
				String sessionSalesArea = geEdgeUser.getDefaultB2BUnit().getUid().split("_")[1];
					for (final BHGESalesAreaDataModel salesArea : source.getSalesAreaData())
					{
						if (salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesArea))
						{
							target.setDeliveryTime(salesArea.getDeliveryTime() != null ? salesArea.getDeliveryTime().toString() : null);
							target.setMinOrderQty(
									salesArea.getMinOrderQuantity() != null ? salesArea.getMinOrderQuantity() : source.getMinOrderQuantity());
							if (salesArea.getHybrisStatus().equals(HybrisStatus.NOSELL)) {
								target.setNonEcommerceFlag(Boolean.TRUE);
							}
						}
					}
			}
		}
	}

	/**
	 * Populate the product access data instance on the product
	 *
	 * @param target
	 * @param model
	 */
	private void populateProductAccessData(final ProductData target, final ProductModel source)
	{
		BHGEProductAccessData accessData = new BHGEProductAccessData();
		for (final BHGEProductAccessStrategy splittingStrategy : getStrategiesList())
		{
			accessData = splittingStrategy.isProductAccessible(source, accessData);
		}
		target.setProductAccessData(accessData);
	}

}
