package com.bhge.facades.process.email.context;

import com.bhge.core.quote.service.BHGECommerceQuoteService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.cms2.model.site.CMSSiteModel;
import de.hybris.platform.commerceservices.model.process.BHGEQuoteProcessModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;

public class BHGEQuoteCreationEmailContext extends AbstractEmailContext<BHGEQuoteProcessModel> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEQuoteCreationEmailContext.class);

    private static final String BASE_URL = "bhge.ecommerce.url";
    private static final String MEDIA_URL="bhge.store.base.url";

    @Resource
    private CommonI18NService commonI18NService;

    @Resource(name = "baseSiteService")
    private BaseSiteService siteService;

    @Resource(name = "bhgeCommerceQuoteService")
    private BHGECommerceQuoteService bhgeCommerceQuoteService;

    @Getter
    @Setter
    private String userName;

    @Getter
    @Setter
    private String quoteId;

    @Getter
    @Setter
    private String erpFailureReason;

    @Getter
    @Setter
    private String contactusURL;

    @Getter
    @Setter
    private String mediaBaseUrl;

    @Override
    protected BaseSiteModel getSite(BHGEQuoteProcessModel businessProcessModel) {
        return (CMSSiteModel) siteService.getBaseSiteForUID(Config.getString("BHGE_BASE_SITE", "bhge"));
    }

    @Override
    protected CustomerModel getCustomer(BHGEQuoteProcessModel businessProcessModel) {
        return (CustomerModel) businessProcessModel.getUser();
    }

    @Override
    protected LanguageModel getEmailLanguage(BHGEQuoteProcessModel businessProcessModel) {
        LanguageModel languageModel = businessProcessModel.getUser().getSessionLanguage();
        if(languageModel == null)
        {
            languageModel = commonI18NService.getLanguage("en");
        }
        return  languageModel;
    }

    @Override
    public void init(BHGEQuoteProcessModel businessProcess, EmailPageModel emailPage) {
        try {
            super.init(businessProcess, emailPage);
            final QuoteModel quote = bhgeCommerceQuoteService.getQuoteByCode(businessProcess.getQuoteCode());
            if (null != quote) {
                setContactusURL(Config.getParameter(BASE_URL)+ "/waygate/contactus");
                setMediaBaseUrl(Config.getParameter(MEDIA_URL));
                setQuoteId(quote.getCode());
                setUserName(quote.getUser().getName());
                if (StringUtils.equalsIgnoreCase(quote.getState().getCode(), "PROCESSING_ERROR")) {
                    setErpFailureReason(quote.getErpFailureReason());
                }
            } else {
                LOG.error("US530529: Quote Not found with id {}", businessProcess.getQuoteCode());
            }
        } catch (Exception e) {
            LOG.error("Error while initializing BHGEQuoteCreationEmailContext {}", e.getMessage());
        }
    }
}