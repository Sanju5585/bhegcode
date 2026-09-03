package com.bhge.facades.process.email.context;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.model.process.GuestUserCalportalDataSheetPDFEmailProcessModel;
import de.hybris.platform.commerceservices.model.process.StoreFrontProcessModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;


public class GuestUserCalibrationDataSheetPDFContext extends AbstractEmailContext<GuestUserCalportalDataSheetPDFEmailProcessModel> {
	private static final Logger LOG = LoggerFactory.getLogger(GuestUserCalibrationDataSheetPDFContext.class);
	public static final String FIRST_NAME = "firstName";
	public static final String LAST_NAME = "lastName";
	
	
	@Override
	public void init(final GuestUserCalportalDataSheetPDFEmailProcessModel guestUserCalportalDataSheetPDFEmailProcessModel,
			final EmailPageModel emailPageModel)
	{
		LOG.info("Inside GuestUserCalibrationDataSheetPDFContext");
		super.init(guestUserCalportalDataSheetPDFEmailProcessModel, emailPageModel);
		put(EMAIL, guestUserCalportalDataSheetPDFEmailProcessModel.getEmail());
		put(DISPLAY_NAME, guestUserCalportalDataSheetPDFEmailProcessModel.getEmail());
		put(FIRST_NAME, guestUserCalportalDataSheetPDFEmailProcessModel.getFirstName());
		put(LAST_NAME, guestUserCalportalDataSheetPDFEmailProcessModel.getLastName());
		
		

	}
	@Override
	protected BaseSiteModel getSite(GuestUserCalportalDataSheetPDFEmailProcessModel businessProcessModel) {
		// TODO Auto-generated method stub
		if (businessProcessModel instanceof StoreFrontProcessModel)
		{

			return ((StoreFrontProcessModel) businessProcessModel).getSite();
		}
		else
		{
			return null;
		}
	}

	@Override
	protected CustomerModel getCustomer(GuestUserCalportalDataSheetPDFEmailProcessModel businessProcessModel) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected LanguageModel getEmailLanguage(GuestUserCalportalDataSheetPDFEmailProcessModel businessProcessModel) {
		// TODO Auto-generated method stub
		return businessProcessModel.getSite().getDefaultLanguage();
	}

}
