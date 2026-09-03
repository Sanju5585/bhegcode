/**
 *
 */
package com.bhge.core.product.strategy.impl;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.facades.product.data.BHGEProductAccessData;


/**
 * @author 212695810 This is a strategy class to populate hybris status on product based on customer access
 *
 */
public class BHGEProductHybrisStatusStrategyImpl implements BHGEProductAccessStrategy
{
	private final static Logger LOG = Logger.getLogger(BHGEProductHybrisStatusStrategyImpl.class);
	
	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "sessionService")
	SessionService sessionService;

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.product.strategy.BHGEProductAccessStrategy#isProductAccessible(de.hybris.platform.core.model.product
	 * .ProductModel)
	 */
	@Override
	public BHGEProductAccessData isProductAccessible(final ProductModel product, final BHGEProductAccessData accessData)
	{
		if (product instanceof GEEdgeProductModel && userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;
			final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) userService.getCurrentUser();
			//Checking user access
			final UserGroupModel orderTrackingUserGroup = userService.getUserGroupForUID("UG_ORDER_TRACKING");
			if (geEdgeCustomer.getGroups().contains(orderTrackingUserGroup))
			{
				accessData.setIsCustomerBuy(false);
			}
			else
			{
				accessData.setIsCustomerBuy(true);
			}

			if (geEdgeCustomer.getDefaultSoldTo() != null
					&& StringUtils.isNotBlank(geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag()))
			{
				final String userAccess = geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag();
				accessData.setCustomerEcommerceFlag(userAccess);
				final BHGEProductUtil productUtil = new BHGEProductUtil();
				/*
				 * final HybrisStatus hybrisStatus =
				 * productUtil.getHybrisStatusForCurrentSalesArea(geEdgeProduct, sessionService,
				 * userService);
				 */
				final HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(geEdgeProduct, userService);
				if (hybrisStatus != null)
				{
					// Setting buy
					if (accessData.isIsCustomerBuy() && (userAccess.equalsIgnoreCase("E1") || userAccess.equalsIgnoreCase("E2")))
					{
						if (hybrisStatus == HybrisStatus.SELL)
						{
							accessData.setIsBuy(true);
							LOG.info("BHGEProductHybrisStatusStrategyImpl : isProductAccessible : SELL");
						}
						else if (hybrisStatus == HybrisStatus.SELLANDRETURN)
						{
							accessData.setIsBuy(true);
							LOG.info("BHGEProductHybrisStatusStrategyImpl : isProductAccessible : SELLANDRETURN");
						}
					}
					if (hybrisStatus == HybrisStatus.RETURN)
					{
						accessData.setIsService(true);
					}
					else if (hybrisStatus == HybrisStatus.SELLANDRETURN)
					{
						accessData.setIsService(true);
					}
					else if (hybrisStatus == HybrisStatus.CATALOG)
					{
						accessData.setIsCatalogOnly(true);
					}
					else if (hybrisStatus == HybrisStatus.OBSOLETE)
					{
						accessData.setIsobsolete(true);
					}
				}
			}
		}
		return accessData;
	}

}
