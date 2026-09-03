/**
 *
 */
package com.bhge.core.sap.hybris.sapcustomerb2b.inbound;

import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.Collections;
import java.util.List;

import com.sap.hybris.sapcustomerb2b.inbound.DefaultSAPCustomerAddressConsistencyInterceptor;


/**
 * @author 212595527 extends DefaultSAPCustomerAddressConsistencyInterceptor
 */
public class BHGESAPCustomerAddressConsistencyInterceptor extends DefaultSAPCustomerAddressConsistencyInterceptor
{




	private FlexibleSearchService flexibleSearchService;




	/**
	 * @param flexibleSearchService
	 *           the flexibleSearchService to set
	 */
	@Override
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}




	/**
	 * Retrieves addresses which are related to sapCustomerId
	 *
	 * @param sapCustomerId
	 * @return
	 */
	@Override
	protected List<AddressModel> getRelatedAddresses(final String sapCustomerId)
	{
		final String query = "SELECT {PK} FROM {" + AddressModel._TYPECODE + "} WHERE {" + AddressModel.SAPCUSTOMERID + "} =?kunnr "
				+ " and {" + AddressModel.DUPLICATE + "} = 0";

		final FlexibleSearchQuery fsQuery = new FlexibleSearchQuery(query);
		fsQuery.addQueryParameter("kunnr", sapCustomerId);

		final SearchResult<AddressModel> searchResult = flexibleSearchService.search(fsQuery);
		if (searchResult != null)
		{
			return searchResult.getResult();
		}
		else
		{
			return Collections.emptyList();
		}
	}
}
