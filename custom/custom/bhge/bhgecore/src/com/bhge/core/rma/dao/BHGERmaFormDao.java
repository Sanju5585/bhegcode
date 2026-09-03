/**
 *
 */
package com.bhge.core.rma.dao;

import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;

import java.util.List;

import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public interface BHGERmaFormDao
{


	/**
	 * @param cartModel
	 * @return
	 */
	public Boolean saveRmaForm(CartModel cartModel);

	public List<BHGEHazardousInfoModel> fetchHazardInfo();

	/**
	 * fetchHazardInfo
	 *
	 * @return
	 */
	public CartModel fetchCartDetails();

	public BHGEServiceOfferingsModel fetchServicingOfferings(String offeringCode);

	public String getPlantName(String plantCode);
	
	public OrderModel getOrderByRMA(final String rmaNumber);
	
	public CartModel getCartById(final String cartId);
	
	public BHGEServiceOfferingsModel getServiceOfferingByText(final String offeringText);
}
