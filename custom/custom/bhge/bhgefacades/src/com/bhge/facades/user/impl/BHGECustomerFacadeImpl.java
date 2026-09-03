/**
 *
 */
package com.bhge.facades.user.impl;

import de.hybris.platform.commercefacades.customer.impl.DefaultCustomerFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.customer.CustomerAccountService;
import de.hybris.platform.commerceservices.customer.DuplicateUidException;
import de.hybris.platform.commerceservices.enums.CustomerType;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNullStandardMessage;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.user.BHGECustomerFacade;


/**
 * @author 212695810
 *
 */
public class BHGECustomerFacadeImpl extends DefaultCustomerFacade implements BHGECustomerFacade
{
	private static final Logger LOG = Logger.getLogger(BHGECustomerFacadeImpl.class);
	
	private static final String UNDEFINED = "undefined";
	@Resource(name = "cartService")
	BHGECartService cartService;
	
	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Autowired
	private CustomerAccountService customerAccountService;
	
	@Resource(name = "customerConverter")
	private Converter<UserModel, CustomerData> customerConverter;
		
	@Resource(name = "userService")
	public UserService userService;
		
	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;


	@Override
	public void updateCartAlternateEmailWithGuestEmail(final String guestEmailID)
	{
		cartService.updateCartAlternateEmailWithGuestEmail(guestEmailID);
	}
	
	@Override
	public void updateCartAlternateEmailWithGuestEmail(String cartId, String guestEmailID)
	{
		cartService.updateCartAlternateEmailWithGuestEmail(cartId, guestEmailID);
	}
	
	@Override
	public void createGuestUserForAnonymousCheckout(final String cartId, final String email, final String name) throws DuplicateUidException
	{
		validateParameterNotNullStandardMessage("email", email);
		final CustomerModel guestCustomer = getModelService().create(CustomerModel.class);
		final String guid = this.generateGUID();

		//takes care of localizing the name based on the site language
		guestCustomer.setUid(guid + "|" + email);
		guestCustomer.setName(name);
		guestCustomer.setType(CustomerType.valueOf(CustomerType.GUEST.getCode()));
		guestCustomer.setSessionLanguage(commonI18NService.getCurrentLanguage());
		guestCustomer.setSessionCurrency(commonI18NService.getCurrentCurrency());
		
		customerAccountService.registerGuestForAnonymousCheckout(guestCustomer, guid);
		updateCartWithGuestForAnonymousCheckout(cartId, customerConverter.convert(guestCustomer));
	}
	
	
	public void updateCartWithGuestForAnonymousCheckout(final String cartId, final CustomerData guestCustomerData)
	{
		// First thing to do is to try to change the user on the session cart
		final CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
		if (null != cartModel)
		{
			bhgeCartService.changeCurrentCartUser(cartModel, userService.getUserForUID(guestCustomerData.getUid()));
		}

		// Update the session currency (which might change the cart currency)
		if (!updateSessionCurrency(guestCustomerData.getCurrency(), getStoreSessionFacade().getDefaultCurrency()))
		{
			// Update the user
			getUserFacade().syncSessionCurrency();
		}

		if (!updateSessionLanguage(guestCustomerData.getLanguage(), getStoreSessionFacade().getDefaultLanguage()))
		{
			// Update the user
			getUserFacade().syncSessionLanguage();
		}

		// Calculate the cart after setting everything up
		if (null != cartModel)
		{
			// Clear the delivery address, delivery mode, payment info before starting the guest checkout.
			cartModel.setDeliveryAddress(null);
			cartModel.setDeliveryMode(null);
			cartModel.setPaymentInfo(null);
			getCartService().saveOrder(cartModel);

			try
			{
				final CommerceCartParameter parameter = new CommerceCartParameter();
				parameter.setEnableHooks(true);
				parameter.setCart(cartModel);
				getCommerceCartService().recalculateCart(parameter);
			}
			catch (final CalculationException ex)
			{
				LOG.error("Failed to recalculate order [" + cartModel.getCode() + "]", ex);
			}
		}
	}

}
