/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.facades.process.email.context;

import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commercefacades.quote.data.QuoteData;
import de.hybris.platform.commerceservices.model.process.QuoteProcessModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.util.Utilities;



import java.util.Locale;
import java.util.Optional;

import jakarta.annotation.Resource;


/**
 * Velocity context for a quote notification email.
 */
public class QuoteNotificationEmailContext extends AbstractEmailContext<QuoteProcessModel>
{
    private QuoteService quoteService;

    private Converter<QuoteModel, QuoteData> quoteConverter;

    private QuoteData quoteData;
    
    @Resource(name = "commonI18NService")
  	private CommonI18NService commonI18NService;
    
    @Override
    public void init(final QuoteProcessModel quoteProcessModel, final EmailPageModel emailPageModel)
    {
        super.init(quoteProcessModel, emailPageModel);
        
  		final LanguageModel language = getEmailLanguage(quoteProcessModel);
  		
  		if (language != null)
  		{
  			put(EMAIL_LANGUAGE, language);
  			final String[] loc = Utilities.parseLocaleCodes(language.getIsocode());
  			String fromName = emailPageModel.getFromName(new Locale(loc[0], loc[1], loc[2]));
  			if (fromName == null)
  			{
  				fromName = emailPageModel.getFromName();
  			}
  			put(FROM_DISPLAY_NAME, fromName);
  		}
  		else
  		{
  			put(FROM_DISPLAY_NAME, emailPageModel.getFromName());
  		}

        quoteData = getQuoteConverter().convert(getQuote(quoteProcessModel));
    }

    public QuoteData getQuote()
    {
        return quoteData;
    }

    @Override
    protected BaseSiteModel getSite(final QuoteProcessModel quoteProcessModel)
    {
        return getQuote(quoteProcessModel).getSite();
    }

    @Override
    protected CustomerModel getCustomer(final QuoteProcessModel quoteProcessModel)
    {
        return (CustomerModel) getQuote(quoteProcessModel).getUser();
    }

    @Override
    protected LanguageModel getEmailLanguage(final QuoteProcessModel quoteProcessModel)
    {
   	 return commonI18NService.getCurrentLanguage();
        //return getCustomer(quoteProcessModel).getSessionLanguage();
    }

    protected QuoteModel getQuote(final QuoteProcessModel quoteProcessModel)
    {
        return Optional.of(quoteProcessModel)
                .map(QuoteProcessModel::getQuoteCode)
                .map(getQuoteService()::getCurrentQuoteForCode)
                .get();
    }

    
    public void setQuoteService(QuoteService quoteService)
    {
        this.quoteService = quoteService;
    }

    protected QuoteService getQuoteService()
    {
        return quoteService;
    }

    
    public void setQuoteConverter(Converter<QuoteModel, QuoteData> quoteConverter)
    {
        this.quoteConverter = quoteConverter;
    }

    protected Converter<QuoteModel, QuoteData> getQuoteConverter()
    {
        return quoteConverter;
    }
}
