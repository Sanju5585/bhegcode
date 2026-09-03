/**
 *
 */
package com.bhge.facades.regioncache;

import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.MapUtils;
import org.apache.log4j.Logger;

import com.bhge.core.data.EquipmentData;
import com.bhge.core.mysite.service.MySiteEquipmentService;
import com.bhge.core.regioncache.MSECacheKey;
import com.bhge.facades.constants.BhgeFacadesConstants;
import com.bhge.facades.search.BHGEProductSearchFacade;


/**
 * @author 1423683
 *
 */
public class MSECacheValueLoader implements CacheValueLoader
{
	private static final Logger LOG = Logger.getLogger(MSECacheValueLoader.class);

	@Resource(name = "mySiteEquipmentService")
	private MySiteEquipmentService mySiteEquipmentService;

	@Resource(name = "bhgeProductSearchFacade")
	private BHGEProductSearchFacade<ProductData> productSearchFacade;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;

	@Resource(name = "productService")
	ProductService productService;

	@Resource(name = "productVariantFacade")
	private ProductFacade productFacade;

	public ProductFacade getProductFacade()
	{
		return productFacade;
	}

	public void setProductFacade(final ProductFacade productFacade)
	{
		this.productFacade = productFacade;
	}

	public ProductService getProductService()
	{
		return productService;
	}

	public void setProductService(final ProductService productService)
	{
		this.productService = productService;
	}

	public BHGEProductSearchFacade<ProductData> getProductSearchFacade()
	{
		return productSearchFacade;
	}

	public void setProductSearchFacade(final BHGEProductSearchFacade<ProductData> productSearchFacade)
	{
		this.productSearchFacade = productSearchFacade;
	}

	public Converter<ProductModel, ProductData> getProductConverter()
	{
		return productConverter;
	}

	public void setProductConverter(final Converter<ProductModel, ProductData> productConverter)
	{
		this.productConverter = productConverter;
	}

	public static final String IMAGEFORMAT = "thumbnail";

	public static final String NOIMAGEVALUE = "/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg";

	public static final int MAX_PAGE_LIMIT = 100;


	public MySiteEquipmentService getMySiteEquipmentService()
	{
		return mySiteEquipmentService;
	}

	public void setMySiteEquipmentService(final MySiteEquipmentService mySiteEquipmentService)
	{
		this.mySiteEquipmentService = mySiteEquipmentService;
	}


	@Override
	public EquipmentData load(final CacheKey key) throws CacheValueLoadException
	{
		LOG.info("Inside load MSECacheValueLoader....");
		EquipmentData equipmentData = new EquipmentData();
		if (key instanceof MSECacheKey)
		{
			final MSECacheKey mseCacheKey = (MSECacheKey) key;
			if (null != mseCacheKey && MapUtils.isNotEmpty(mseCacheKey.getKey()))
			{
				final String customerNumber = mseCacheKey.getKey().get(BhgeFacadesConstants.CUSTOMER_NUMBER);
				final String mANOrMELFlag = mseCacheKey.getKey().get(BhgeFacadesConstants.MAN_MEL_FLAG);
				final String fromDate = mseCacheKey.getKey().get(BhgeFacadesConstants.FROM_DATE);
				final String toDate = mseCacheKey.getKey().get(BhgeFacadesConstants.TO_DATE);
				final String endCustomerID = mseCacheKey.getKey().get(BhgeFacadesConstants.ENDCUSTOMERID);

				LOG.info("Inside load - " + customerNumber + " | " + mANOrMELFlag);
				LOG.info("Date parameters are - from date " + fromDate + " to date " + toDate);
				equipmentData = mySiteEquipmentService.getEquipmentDataForCustomerMSE(customerNumber, mANOrMELFlag, fromDate, toDate,
						endCustomerID);
			}
		}
		return equipmentData;
	}


















}
