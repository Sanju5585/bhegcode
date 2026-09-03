/**
 *
 */
package com.bhge.core.product.strategy.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.product.impl.BHGECartFactoryImpl;
import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.store.services.BHGEBaseStoreService;


/**
 * @author 212695810 This is a strategy class to populate sales area other than current sales area
 *
 */
public class BHGEProductSalesAreaAvailabiltyStrategyImpl implements BHGEProductAccessStrategy
{
	
	private static final Logger LOG = Logger.getLogger(BHGEProductSalesAreaAvailabiltyStrategyImpl.class);
	
	@Resource(name = "userService")
	UserService userService;

	@Autowired
	private BHGEB2BUnitService bhgeB2BUnitService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

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
			final List<BHGEProductAccessData> salesAreas = new ArrayList<BHGEProductAccessData>();
			final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;
			final String currentSalesAreaArray[] = currentUser.getDefaultB2BUnit().getUid().split("_");
			final String currentSalesArea = currentSalesAreaArray[1] + "_" + currentSalesAreaArray[2] + "_" + currentSalesAreaArray[3];
			for (final BHGESalesAreaDataModel productSalesArea : geEdgeProduct.getSalesAreaData())
			{
				String productSalesAreaWithDistChannelAndDivision = "";
				productSalesAreaWithDistChannelAndDivision = productSalesArea.getSalesOrganization() + "_" + productSalesArea.getDistributionChannel() + "_" +productSalesArea.getDivision();

				if ((StringUtils.isNotBlank(productSalesAreaWithDistChannelAndDivision)
						&& productSalesAreaWithDistChannelAndDivision.equalsIgnoreCase(currentSalesArea))
						|| !checkForValidB2BUnitForCurrentSoldTo(productSalesArea, currentUser))
				{
					continue;
				}
				for (final PrincipalGroupModel salesAreaUnitModel : currentUser.getGroups())
				{
					if (salesAreaUnitModel instanceof B2BUnitModel)
					{
						final String userSalesAreaArray[] = salesAreaUnitModel.getUid().split("_");
						if (userSalesAreaArray.length > 3 && userSalesAreaArray[0].equalsIgnoreCase(currentSalesAreaArray[0])
								&& productSalesArea.getSalesOrganization().equalsIgnoreCase(userSalesAreaArray[1])
								&& productSalesArea.getDistributionChannel().equalsIgnoreCase(userSalesAreaArray[2])
								&& productSalesArea.getDivision().equalsIgnoreCase(userSalesAreaArray[3]))
						{
							final BHGEProductAccessData addedSalesArea = new BHGEProductAccessData();
							addedSalesArea.setSalesOrg(productSalesArea.getSalesOrganization() + "_"
									+ productSalesArea.getDistributionChannel() + "_" + productSalesArea.getDivision());
							addedSalesArea.setSalesOrgUid(productSalesArea.getSalesOrganization());
							final String customerSalesArea = currentSalesAreaArray[0] + "_" + productSalesArea.getSalesOrganization()
									+ "_" + productSalesArea.getDistributionChannel() + "_" + productSalesArea.getDivision();
							final B2BUnitModel customerSalesAreaUnit = bhgeB2BUnitService.getUnitForUid(customerSalesArea);
							final String addedSalesAreaBaseStore = productSalesArea.getSalesOrganization() + "_" + productSalesArea.getDistributionChannel() 
							+ "_" + productSalesArea.getDivision() + "_BaseStore";
							try
							{
								final BaseStoreModel baseStore = baseStoreService.getBaseStoreForUid(addedSalesAreaBaseStore);
								if (baseStore != null)
								{
									addedSalesArea.setSalesOrgName(baseStore.getName());
								}
							}
							catch (UnknownIdentifierException e) {
								LOG.error("BaseStore " + addedSalesAreaBaseStore + " not present " + e.getStackTrace());
							}
							
							if (customerSalesAreaUnit != null)
							{
								addedSalesArea.setCustomerSoldToUid(currentSalesAreaArray[0]);
								addedSalesArea.setCustomerSalesOrgUid(customerSalesArea);
								addedSalesArea.setCustomerSalesOrgName(customerSalesAreaUnit.getName());
							}
							if (productSalesArea.getHybrisStatus() != null
									&& productSalesArea.getHybrisStatus() == HybrisStatus.OBSOLETE)
							{
								addedSalesArea.setIsobsolete(true);
							}
							if (!accessData.isIsBuy() && accessData.getCustomerEcommerceFlag() != null
									&& (accessData.getCustomerEcommerceFlag().equalsIgnoreCase("E1")
											|| accessData.getCustomerEcommerceFlag().equalsIgnoreCase("E2"))
									&& productEligibiltyToBuy(geEdgeProduct, productSalesArea, salesAreaUnitModel))
							{
								LOG.info("BHGEProductSalesAreaAvailabiltyStrategyImpl : isProductAccessible");
								accessData.setIsBuyPresentInOtherSalesArea(true);
								addedSalesArea.setIsBuy(true);
							}
							if (!accessData.isIsService()
									&& productEligibiltyToService(geEdgeProduct, productSalesArea, salesAreaUnitModel))
							{
								accessData.setIsServicePresentInOtherSalesArea(true);
								addedSalesArea.setIsService(true);
							}
							salesAreas.add(addedSalesArea);
						}
					}
				}
			}
			accessData.setSalesAreas(salesAreas);
		}
		return accessData;

	}

	/**
	 * Return true is B2BUnit is available in the system
	 *
	 * @param salesAreaModel
	 * @param currentUser
	 * @return
	 */
	private boolean checkForValidB2BUnitForCurrentSoldTo(final BHGESalesAreaDataModel salesAreaModel,
			final GEEdgeCustomerModel currentUser)
	{
		final String salesArea = currentUser.getDefaultSoldTo().getUid() + "_" + salesAreaModel.getSalesOrganization() + "_"
				+ salesAreaModel.getDistributionChannel() + "_" + salesAreaModel.getDivision();
		final PrincipalModel b2bUnit = bhgeB2BUnitService.getUnitForUid(salesArea);
		if (b2bUnit != null)
		{
			return true;
		}
		return false;
	}

	/**
	 * Populates isBuy filed on product data of other sales areas
	 *
	 * @param geEdgeProduct
	 * @param productSalesArea
	 * @return
	 */
	@SuppressWarnings("deprecation")
	public boolean productEligibiltyToBuy(final GEEdgeProductModel geEdgeProduct, final BHGESalesAreaDataModel productSalesArea,
			final PrincipalGroupModel b2bUnit)
	{
		if (geEdgeProduct.getAllowedProdPrincipals().contains(b2bUnit)
				&& (productSalesArea.getHybrisStatus() == HybrisStatus.SELL
						|| productSalesArea.getHybrisStatus() == HybrisStatus.SELLANDRETURN)
				&& (productSalesArea.getMaterialStatus() == MaterialChannelStatus.P1
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.P2
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.P3
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.SO
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.CC))
		{
			return true;
		}
		return false;
	}

	/**
	 * Populates isService filed on product data of other sales areas
	 *
	 * @param geEdgeProduct
	 * @param productSalesArea
	 * @return
	 */
	public boolean productEligibiltyToService(final GEEdgeProductModel geEdgeProduct,
			final BHGESalesAreaDataModel productSalesArea, final PrincipalGroupModel b2bUnit)
	{
		if ((productSalesArea.getHybrisStatus() == HybrisStatus.RETURN
				|| productSalesArea.getHybrisStatus() == HybrisStatus.SELLANDRETURN)
				&& (productSalesArea.getMaterialStatus() == MaterialChannelStatus.P1
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.P2
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.P3
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.P4
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.BS
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.SO
						|| productSalesArea.getMaterialStatus() == MaterialChannelStatus.CC))
		{
			return true;
		}
		return false;
	}
}
