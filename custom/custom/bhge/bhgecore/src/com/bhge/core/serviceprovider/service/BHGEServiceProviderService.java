/**
 *
 */
package com.bhge.core.serviceprovider.service;

/**
 * @author 503046678
 *
 */
public interface BHGEServiceProviderService
{
	boolean validServiceProvider(String name);

	String getSiteURL(String trackingNum, String serviceProvider);

	String getCourierNameForCode(String courier);
}
