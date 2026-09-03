/**
 *
 */
package com.bhge.core.serviceprovider.dao;

import com.hybris.ge.edge.core.model.type.GEEdgeServiceProviderModel;


/**
 * @author 503046678
 *
 */
public interface BHGEServiceProviderDAO
{
	boolean validServiceProvider(String name);

	String getSiteURL(String trackingNum, String serviceProvider);

	GEEdgeServiceProviderModel getCourierNameForCode(String courier);
}
