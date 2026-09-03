/**
 *
 */
package com.bhge.facades.process.email.context;

import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.model.process.GEEdgeShippingAddressProcessModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;

import com.bhge.facades.address.BHGEShippingAddressFormData;


/**
 * @author 503047662
 *
 */
public class BHGEShippingAddressEmailContext extends AbstractEmailContext<GEEdgeShippingAddressProcessModel>
{
	private final BHGEShippingAddressFormData shippingAddressForm = new BHGEShippingAddressFormData();

	@Override
	public void init(final GEEdgeShippingAddressProcessModel storeFrontShippingAddressProcessModel,
			final EmailPageModel emailPageModel)
	{
		super.init(storeFrontShippingAddressProcessModel, emailPageModel);
		put(EMAIL, storeFrontShippingAddressProcessModel.getEmail());
		put(FROM_EMAIL, storeFrontShippingAddressProcessModel.getFromEmail());
		put(FROM_DISPLAY_NAME, storeFrontShippingAddressProcessModel.getFromName());
		put(DISPLAY_NAME, storeFrontShippingAddressProcessModel.getFromName());
		shippingAddressForm.setCountryName(storeFrontShippingAddressProcessModel.getCountry());
		shippingAddressForm.setLine1(storeFrontShippingAddressProcessModel.getAddress1());
		shippingAddressForm.setLine2(storeFrontShippingAddressProcessModel.getAddress2());
		shippingAddressForm.setDeliveryPoint(storeFrontShippingAddressProcessModel.getDeliveryPoint());
		shippingAddressForm.setCompanyName(storeFrontShippingAddressProcessModel.getCompanyName());
		shippingAddressForm.setStateName(storeFrontShippingAddressProcessModel.getStateName());
		shippingAddressForm.setPostalCode(storeFrontShippingAddressProcessModel.getZipCode());
		shippingAddressForm.setEmail(storeFrontShippingAddressProcessModel.getEmail());
		shippingAddressForm.setFromEmail(storeFrontShippingAddressProcessModel.getFromEmail());
		shippingAddressForm.setFromName(storeFrontShippingAddressProcessModel.getFromName());
		shippingAddressForm.setEmailSubject(storeFrontShippingAddressProcessModel.getEmailSubject());
		shippingAddressForm.setCustomerName(storeFrontShippingAddressProcessModel.getCustomerName());

	}

	@Override
	protected BaseSiteModel getSite(final GEEdgeShippingAddressProcessModel storeFrontShippingAddressProcessModel)
	{
		return storeFrontShippingAddressProcessModel.getSite();
	}

	@Override
	protected CustomerModel getCustomer(final GEEdgeShippingAddressProcessModel storeFrontShippingAddressProcessModel)
	{
		// add customer to business proces model

		return null;
		// return storeFrontCustomerProcessModel.getCustomer();
	}

	@Override
	protected LanguageModel getEmailLanguage(final GEEdgeShippingAddressProcessModel businessProcessModel)
	{
		// add customer to business proces model

		return null;
		// return businessProcessModel.getLanguage();
	}

	public BHGEShippingAddressFormData getShippingAddressForm()
	{
		return this.shippingAddressForm;
	}

}
