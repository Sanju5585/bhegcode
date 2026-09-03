package com.bhge.facades.process.email.context;

import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.util.Config;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.Resource;

public class BHGEQuoteConversionEmailContext extends AbstractEmailContext<OrderProcessModel> {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEQuoteConversionEmailContext.class);

    private static final String BASE_URL = "bhge.ecommerce.url";
    private static final String MEDIA_URL = "bhge.store.base.url";

    @Resource
    private CommonI18NService commonI18NService;

    @Getter
    @Setter
    private String userName;

    @Getter
    @Setter
    private String quoteId;

    @Getter
    @Setter
    private String orderId;

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
    protected BaseSiteModel getSite(OrderProcessModel businessProcessModel) {
        return businessProcessModel.getOrder().getSite();
    }

    @Override
    protected CustomerModel getCustomer(OrderProcessModel businessProcessModel) {
        return (CustomerModel) businessProcessModel.getOrder().getUser();
    }

    @Override
    protected LanguageModel getEmailLanguage(OrderProcessModel businessProcessModel) {
        LanguageModel languageModel = businessProcessModel.getUser().getSessionLanguage();
        if(languageModel == null)
        {
            languageModel = commonI18NService.getLanguage("en");
        }
        return  languageModel;
    }

    @Override
    public void init(OrderProcessModel businessProcess, EmailPageModel emailPage) {
        try {
            super.init(businessProcess, emailPage);
            final OrderModel order = businessProcess.getOrder();
            if (null != order && BooleanUtils.isTrue(order.getIsQuote())) {
                final QuoteModel quote = order.getQuoteReference();
                setContactusURL(Config.getParameter(BASE_URL)+ "/waygate/contactus");
                setMediaBaseUrl(Config.getParameter(MEDIA_URL));
                setQuoteId(quote.getCode());
                setOrderId(order.getCode());
                setUserName(order.getUser().getName());
                if (StringUtils.equalsIgnoreCase(order.getStatus().getCode(), OrderStatus.ERROR.getCode())) {
                    setErpFailureReason("Quote conversion failed due to an error in the order processing.");
                }
            }
        } catch (Exception e) {
            LOG.error("US530529: Error in Quote to Order Conversation Email Context {}", e.getMessage());
        }
    }
}
