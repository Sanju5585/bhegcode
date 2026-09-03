/**
 *
 */
package com.bhge.facades.user;

import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commerceservices.customer.DuplicateUidException;


/**
 * @author 212695810
 *
 */
public interface BHGECustomerFacade extends CustomerFacade
{
	/**
	 * Updates cart alternate email with Guest email
	 * 
	 * @param guestEmailID
	 */
	void updateCartAlternateEmailWithGuestEmail(String guestEmailID);
	
	void updateCartAlternateEmailWithGuestEmail(String cartId, String guestEmailID);
	
	void createGuestUserForAnonymousCheckout(String cartId, String email, String name) throws DuplicateUidException;
}
