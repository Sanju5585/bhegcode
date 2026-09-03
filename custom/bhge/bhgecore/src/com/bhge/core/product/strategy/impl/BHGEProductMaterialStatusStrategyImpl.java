/**
 *
 */
package com.bhge.core.product.strategy.impl;

import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.product.data.BHGEProductAccessData;
import org.apache.log4j.Logger;

import java.util.Arrays;
import de.hybris.platform.util.Config;


/**
 * @author 212695810 This strategy is used to populated material status based restrictions on product
 *
 */
public class BHGEProductMaterialStatusStrategyImpl implements BHGEProductAccessStrategy
{
	private final static Logger LOG = Logger.getLogger(BHGEProductMaterialStatusStrategyImpl.class);

	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "sessionService")
	SessionService sessionService;

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.product.strategy.BHGEProductAccessStrategy#isProductAccessible(de.hybris.platform.core.model.product
	 * .ProductModel, com.bhge.facades.product.data.BHGEProductAccessData)
	 */
	@Override
	public BHGEProductAccessData isProductAccessible(final ProductModel product, final BHGEProductAccessData accessData)
	{
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel && product instanceof GEEdgeProductModel)
		{
			final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) userService.getCurrentUser();
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;


			if (geEdgeCustomer.getDefaultSoldTo() == null
					|| geEdgeCustomer.getDefaultB2BUnit() == null)
			{
				return accessData;
			}

			String soldTo = geEdgeCustomer.getDefaultSoldTo().getUid();

			String recentB2bUnit = geEdgeCustomer.getDefaultB2BUnit().getUid();
			String salesOrg = null;
			String[] b2BUnitArray = null;

			if (null != recentB2bUnit)
			{
				b2BUnitArray = recentB2bUnit.split("_");

				if (b2BUnitArray.length >= 3)
				{
					salesOrg = b2BUnitArray[1];
				}
			}

			String restrictedProducts =
					Config.getString("restricted.products." + soldTo + "." + salesOrg, "");

			LOG.info("SoldTo : " + soldTo);
			LOG.info("Sales Org : " + salesOrg);
			LOG.info("Restricted Products : " + restrictedProducts);
			LOG.info("Current Product : " + product.getCode());

			if (StringUtils.isNotBlank(restrictedProducts)
					&& Arrays.asList(restrictedProducts.split(","))
					.contains(product.getCode()))
			{
				LOG.info("Product Restriction Applied");

				accessData.setIsBuy(false);

				return accessData;
			}

			if (geEdgeCustomer.getDefaultSoldTo() != null
					&& StringUtils.isNotBlank(geEdgeCustomer.getDefaultSoldTo().getEcommerceFlag())
					&& null != geEdgeCustomer.getDefaultB2BUnit())
					//&& sessionService.getAttribute("defaultSalesAreaData") != null)
			{
				final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
				for (final BHGESalesAreaDataModel salesArea : geEdgeProduct.getSalesAreaData())
				{
					//String recentB2bUnit = geEdgeCustomer.getDefaultB2BUnit().getUid();
					//String salesOrg = null;
					//String[] b2BUnitArray = null;
					if(null != recentB2bUnit)
					{
						b2BUnitArray = recentB2bUnit.split("_"); 
						if(b2BUnitArray.length >= 3)
						{
							salesOrg = b2BUnitArray[1];
						}
					}
					/*if (salesArea.getSalesOrganization() != null
							&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))*/
					if (salesArea.getSalesOrganization() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(salesOrg))
					{
						//Allowing only P1-P3,SO,CC for buy and P1-P4,SO,CC for service
						if (!(salesArea.getMaterialStatus() == MaterialChannelStatus.P1
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.P2
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.SO
								|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC))
						{
							accessData.setIsBuy(false);
							if (!(salesArea.getMaterialStatus() == MaterialChannelStatus.P4 || salesArea.getMaterialStatus() == MaterialChannelStatus.BS))
							{
								accessData.setIsService(false);
							}
						}
						// Setting buy
						if (accessData.isIsBuy())
						{
							if (salesArea.getMaterialStatus() == MaterialChannelStatus.P1
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.P2
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3)
							{
								accessData.setShowListPrice(true);
								accessData.setShowDiscountPrice(true);
								accessData.setShowLeadTime(true);
								accessData.setShowESD(true);
							}
							else if (salesArea.getMaterialStatus() == MaterialChannelStatus.SO
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC)
							{
								accessData.setShowListPrice(true);
								accessData.setShowDiscountPrice(true);
								accessData.setShowLeadTime(true);
							}
							if (BhgeCoreConstants.IS_ZERO_PRICE.equalsIgnoreCase(salesArea.getMaterialStaticGroup())) {
								accessData.setIsZeroBuy(true);
							}
						}
						if (accessData.isIsCatalogOnly())
						{
							if (salesArea.getMaterialStatus() == MaterialChannelStatus.P1
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.P2
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.P3
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.SO
									|| salesArea.getMaterialStatus() == MaterialChannelStatus.CC)
							{
								accessData.setShowListPrice(true);
								accessData.setShowDiscountPrice(true);
								accessData.setShowLeadTime(true);
								accessData.setShowESD(true);
							}
						}
						//setting obsolete
						if (salesArea.getMaterialStatus() == MaterialChannelStatus.P5
								&& (salesArea.getHybrisStatus() == HybrisStatus.SELL
										|| salesArea.getHybrisStatus() == HybrisStatus.SELLANDRETURN
										|| salesArea.getHybrisStatus() == HybrisStatus.RETURN))
						{
							accessData.setIsobsolete(true);
						}

						break;
					}
				}
			}
		}
		return accessData;
	}

}
