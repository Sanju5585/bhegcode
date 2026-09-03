/**
 *
 */
package com.bhge.facades.rma.populators;


import com.bhge.facades.rma.impl.BHGERmaFormFacadeImpl;
import de.hybris.platform.commercefacades.product.PriceDataFactory;
import de.hybris.platform.commercefacades.product.ProductFacade;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ImageData;
import de.hybris.platform.commercefacades.product.data.ImageDataType;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.converters.impl.AbstractConverter;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;

import com.bhge.core.model.BHGERmaEquipSerialNumberModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.rma.dao.BHGERmaFormDao;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.rma.data.AvailableSitesData;
import com.bhge.facades.rma.data.RmaReturnCartData;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public class BHGERmaCartPopulator extends AbstractConverter<AbstractOrderEntryModel, RmaReturnCartData>
{
	@Resource(name = "productVariantFacade")
	private ProductFacade productFacade;

	@Resource(name = "bhgeRmaFormDao")
	BHGERmaFormDao bhgeRmaFormDao;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	@Resource(name = "priceDataFactory")
	private PriceDataFactory priceDataFactory;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "productService")
	ProductService productService;

	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;
	
	@Resource(name="bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;
	
	@Autowired
	private Populator<ProductModel, ProductData> productPrimaryImagePopulator;

	public static final String IMAGEFORMAT = "thumbnail";

	public static final String NOIMAGEVALUE = "/_ui/responsive/theme-lambda/images/missing_product_EN_300x300.jpg";

	private final static Logger LOG = Logger.getLogger(BHGERmaCartPopulator.class);

	@Override
	public RmaReturnCartData createTarget()
	{
		return new RmaReturnCartData();
	}



	@Override
	public void populate(final AbstractOrderEntryModel source, final RmaReturnCartData target)
	{
		final CartModel cartModel = bhgeCartService.getSessionCart();

		//final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
		final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
		
		final Set<String> uniqueAvailableSites = new HashSet<>();
		final List<AvailableSitesData> uniqueAvailableSitesList = new ArrayList<AvailableSitesData>();
		ProductData product = null;
		final List<String> availableSites = new ArrayList<>();
		target.setCartEntryNumber(source.getEntryNumber());
		target.setQuantity(source.getQuantity());
		target.setReturnReason(source.getProblemDescLong());
		source.getAvailableSites().forEach(site -> {
			uniqueAvailableSites.add(getPlantName(site));
			AvailableSitesData availableSitesData = new AvailableSitesData();
			if(site.matches("\\d+"))
			{
				availableSitesData.setSiteId(Integer.parseInt(site));
			}
			availableSitesData.setSiteName(getPlantName(site));
			uniqueAvailableSitesList.add(availableSitesData);
		});
		availableSites.addAll(uniqueAvailableSites);		
		target.setAvailableSites(availableSites);
		LOG.info("setting availablesiteslist from 131 populator");
		target.setAvailableSitesList(uniqueAvailableSitesList);
		target.setIsCompletedFlag(source.getIsComplete());
		target.setTotal(populatePrice(source.getUnitPrice(), cartModel.getCurrency()));
		target.setTotalDiscount(populatePrice(source.getSilverClause(), cartModel.getCurrency()));
		target.setTotalPrice(populatePrice(source.getTotalReturnPrice(), cartModel.getCurrency()));
		target.setUnitSelling(populatePrice(source.getTotalReturnPrice() / source.getQuantity(), cartModel.getCurrency()));
		target.setReturnLocation(getPlantName(source.getReturnToSiteName()));
		target.setReturnLocationId((null != source.getReturnToSiteName() && StringUtils.isNotEmpty(source.getReturnToSiteName())) ? source.getReturnToSiteName() : "null");
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			target.setCurrencyIsoCode(sessionSalesAreaData.getCurrencyIso());
			target.setCurrencySymbol(sessionSalesAreaData.getCurrencySymbol());
		}
		if (Objects.nonNull(source.getRmaFormPercentCompletion()))
		{
			target.setPercentComplted(String.valueOf(source.getRmaFormPercentCompletion()));
		}
		if (Objects.nonNull(source.getParentEntryNumber()))
		{
			target.setParentEntryNumber(String.valueOf(source.getParentEntryNumber()));
		}
		if (Config.getParameter("current.env").equalsIgnoreCase("local"))
		{
			product = productFacade.getProductForCodeAndOptions("113-241-240", Arrays.asList(ProductOption.IMAGES,
					ProductOption.GALLERY, ProductOption.VARIANT_MATRIX_MEDIA, ProductOption.URL, ProductOption.VARIANT_MATRIX_URL));

		}
		else if (source.getPartNumber() != null)
		{
			final ProductModel productModel = productService.getProductForCode(source.getPartNumber().trim());
			product = productConverter.convert(productModel);
			productPrimaryImagePopulator.populate(productModel, product);
			if(null != product)
			{
				target.setProduct(product);
			}
		}

		if (!ObjectUtils.isEmpty(product))
		{
			try
			{
				final ImageData imageData = getPrimaryImageForProductAndFormat(product, IMAGEFORMAT);
				if (imageData != null && StringUtils.isNotBlank(imageData.getUrl()))
				{
					target.setProductImageURL(imageData.getUrl());
				}
				else
				{
					target.setProductImageURL(NOIMAGEVALUE);
				}
			}
			catch (final Exception e)
			{
				e.printStackTrace();
				target.setProductImageURL(NOIMAGEVALUE);
			}

			if (!(null == product.getName()))
			{
				target.setPartName(product.getName());
			}
			else
			{
				target.setPartName("Dummy part no");
			}
			if (source.getPartNumber() != null)
			{
				target.setPartNumber(source.getPartNumber().trim());
			}
			else
			{
				target.setPartNumber(null);
			}
			final List<String> offeringList = new ArrayList<>();

			for (final BHGEServiceOfferingsModel model : source.getBhgeServiceOfferings())
			{
				if (!StringUtils.isEmpty(model.getOfferingText()))
				{
					offeringList.add(model.getOfferingText());
				}
				else
				{
					offeringList.add(model.getOfferingType().toString());
				}
			}
			target.setOfferingList(offeringList);
			System.out.println("offeringList" + offeringList.toString());
			final List<String> serialNoList = new ArrayList<>();
			for (final BHGERmaEquipSerialNumberModel serialno : source.getBhgeRmaEquipSerialNumber())
			{
				serialNoList.add(serialno.getSerialNumber());
			}
			target.setSerialNoList(serialNoList);
		}
	}

	private String getPlantName(final String plantCode)
	{
		String code = "";

		if (!StringUtils.isEmpty(plantCode))
		{
			String tempcode[] = plantCode.split("-");
			if(tempcode.length > 1)
			{
				code = tempcode[1];
			}
			else
			{
				code = plantCode;
			}
			return bhgeRmaFormDao.getPlantName(code);

		}
		else
		{
			return plantCode;
		}
	}

	protected PriceData populatePrice(final Double price, final CurrencyModel currency)
	{
		final double priceValue = price != null ? price.doubleValue() : 0d;
		return priceDataFactory.create(PriceDataType.BUY, BigDecimal.valueOf(priceValue), currency);
	}

	public ImageData getPrimaryImageForProductAndFormat(final ProductData product, final String format)
	{
		if (product != null && format != null)
		{
			final Collection<ImageData> images = product.getImages();
			if (images != null && !images.isEmpty())
			{
				for (final ImageData image : images)
				{
					if (ImageDataType.PRIMARY.equals(image.getImageType()) && format.equals(image.getFormat()))
					{
						return image;
					}
				}
				return null;
			}
		}
		return null;
	}
}

