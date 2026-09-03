/**
 *
 */
package com.bhge.core.product.strategy.impl;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.user.UserService;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.ListUtils;
import org.apache.log4j.Logger;

import com.bhge.core.product.strategy.BHGEProductAccessStrategy;
import com.bhge.core.rma.service.BHGERmaServiceOffering;
import com.bhge.facades.product.data.BHGEProductAccessData;
import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.data.BHGERmaOfferingData;
import com.bhge.facades.rma.data.OfferDescriptionData;
import com.bhge.facades.rma.data.OfferingData;


/**
 * @author 212695810 This strategy class is not add service offerings for the product in case of RETURNS - Currently not
 *         in use - 09/24
 *
 */
public class BHGEProductServiceOfferingStrategyImpl implements BHGEProductAccessStrategy
{
	@Resource(name = "userService")
	UserService userService;

	@Resource(name = "bhgeRmaServiceOfferingService")
	private BHGERmaServiceOffering bhgeRmaServiceOfferingService;

	private final static Logger LOG = Logger.getLogger(BHGEProductServiceOfferingStrategyImpl.class);

	@Override
	public BHGEProductAccessData isProductAccessible(final ProductModel product, final BHGEProductAccessData accessData)
	{
		LOG.info("Inside BHGEProductServiceOfferingStrategyImpl isProductAccessible() method");
		if (product instanceof GEEdgeProductModel && userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final GEEdgeProductModel geEdgeProduct = (GEEdgeProductModel) product;
			LOG.info("Value of isService for product " + geEdgeProduct.getCode() + "is " + accessData.isIsService());
			if (accessData.isIsService())
			{
				populateServiceOfferings(accessData, geEdgeProduct);
			}
		}
		return accessData;
	}


	/**
	 * Populates the service offerings for the product
	 *
	 * @param target
	 * @param model
	 */
	private void populateServiceOfferings(final BHGEProductAccessData accessData, final GEEdgeProductModel model)
	{
		List<BHGERmaOfferingData> serviceOfferingsData = new ArrayList<BHGERmaOfferingData>();
		final List<RMAData> productList = new ArrayList<RMAData>();
		final Set<String> finalOfferingCodes = new HashSet<String>();
		final RMAData currentProduct = new RMAData();
		currentProduct.setMaterialNumber(model.getCode());
		productList.add(currentProduct);
		serviceOfferingsData = bhgeRmaServiceOfferingService.getServiceOffering(productList, false, null, null);
		for (final BHGERmaOfferingData serviceOfferingData : serviceOfferingsData)
		{
			final List<OfferingData> offeringList = serviceOfferingData.getOfferingsDataTable().get(model.getCode());
			for (final OfferingData offering : ListUtils.emptyIfNull(offeringList))
			{
				final OfferDescriptionData offeringData = serviceOfferingData.getOfferDescriptionDataTable().stream()
						.filter(data -> data.getServiceOffering().equalsIgnoreCase(offering.getServiceOffering())).findFirst()
						.orElse(new OfferDescriptionData());
				finalOfferingCodes.add(offeringData.getCategory());
			}
		}
		accessData.setAvailableServiceOfferingCodes(finalOfferingCodes);
	}
}
