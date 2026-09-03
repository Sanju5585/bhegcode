/**
 *
 */
package com.bhge.core.rma.service;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.bhge.facades.product.data.RMAData;
import com.bhge.facades.rma.data.BHGERmaOfferingData;
import com.bhge.facades.rma.data.PricingData;
import com.bhge.facades.rma.data.RMAOrderRFCData;


/**
 * @author 1185137
 *
 */
public interface BHGERmaServiceOffering
{
	/**
	 * @param partNo
	 * @return
	 */
	List<BHGERmaOfferingData> getServiceOffering(final List<RMAData> data, final boolean equipSearch, final String wildSearch,
			final String searchType);

	List<BHGERmaOfferingData> getServiceOfferingsForAccessories(final List<RMAData> data, final boolean equipSearch,
			final String wildSearch, final String searchType);

	List<String> getPartNumsForSearch(String partNo, String srNo);

	public Map<String, Set<String>> generateSAPResponseForAccessory(final String partNum, List<String> serviceOfferings);

	List<PricingData> getServiceOfferingForOffering(final List<RMAData> data, final String wildSearch, final String searchType);
}
