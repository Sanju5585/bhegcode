/**
 *
 */
package com.bhge.facades.price.populator;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commercefacades.product.converters.populator.ProductPricePopulator;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.europe1.model.PriceRowModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.util.BHGEPriceRowSorterUtil;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.product.service.BHGEProductService;


public class BHGEProductPricePopulator extends ProductPricePopulator
{

	@Resource(name = "bhgeProductService")
	BHGEProductService bhgeProductService;

	@Resource(name = "bhgePriceRowSorterUtil")
	BHGEPriceRowSorterUtil bhgePriceRowSorterUtil;

	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "userService")
	private UserService userService;

	@Override
	public void populate(final ProductModel productModel, final ProductData productData) throws ConversionException
	{
		final UserModel userModel = userService.getCurrentUser();
		if (userModel instanceof GEEdgeCustomerModel || (userService.isAnonymousUser(userModel) && null != productData.getIsAnonymousBuy()
				&& null != sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
		{
			final Collection<PriceRowModel> priceRowModels = bhgePriceRowSorterUtil
					.sortByModifiedTime(productModel.getEurope1Prices());
			final Map<String, String> priceMap = getPriceMap(priceRowModels, userModel);
			Double priceValue = new Double(0.0);
			priceValue = bhgeProductService.getPriceForPriceCriteria(productModel.getCode(), priceMap);
			final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
			final PriceData priceData = getPriceDataFactory().create(PriceDataType.FROM,
					BigDecimal.valueOf(priceValue.doubleValue()),
					soldTo != null && soldTo.getCurrency() != null ? soldTo.getCurrency().getIsocode() : "USD");
			productData.setPrice(priceData);
		}
	}


	private Map<String, String> getPriceMap(final Collection<PriceRowModel> priceRowModelList, final UserModel userModel)
	{
		String currentSalesArea = "";
		if(userService.isAnonymousUser(userModel))
		{
			B2BUnitModel defaultB2BUnit = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			final String[] uid = defaultB2BUnit.getUid().split("_");
			currentSalesArea = uid[1];
		}
		else 
		{
			final GEEdgeCustomerModel geEdgeCustomerModel = (GEEdgeCustomerModel) userModel;
			if (geEdgeCustomerModel.getDefaultB2BUnit() != null
					&& StringUtils.isNotBlank(geEdgeCustomerModel.getDefaultB2BUnit().getUid())
					&& geEdgeCustomerModel.getDefaultB2BUnit().getUid().contains("_"))
			{
				final String[] uid = geEdgeCustomerModel.getDefaultB2BUnit().getUid().split("_");
				currentSalesArea = uid[1];
			}

		}
		final Map<String, String> priceMap = new HashMap<String, String>();
		if (CollectionUtils.isNotEmpty(priceRowModelList))
		{
			for (final PriceRowModel priceRow : priceRowModelList)
			{
				if (StringUtils.isNotEmpty(priceRow.getPriceCriteria()) && priceRow.getPrice() != null
						&& priceRow.getCurrency() != null && priceRow.getStartTime() != null
						&& priceRow.getStartTime().before(new Date()) && priceRow.getEndTime() != null
						&& priceRow.getEndTime().after(new Date()) && priceRow.getSalesAreaPriceKey() != null
						&& priceRow.getSalesAreaPriceKey().contains(currentSalesArea))
				{
					priceMap.put("price_" + priceRow.getPriceCriteria().replaceAll("\\s", "") + "_" + currentSalesArea + "_string",
							priceRow.getCurrency().getIsocode() + "_" + priceRow.getPrice().toString() + "_" + currentSalesArea);
				}
			}
		}
		return priceMap;
	}
}
