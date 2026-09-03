package com.bhge.facades.process.email.context;

import com.bhge.core.model.OrderNotificationEmailProcessModel;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.util.Config;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import jakarta.annotation.Resource;

public class BlockedOrderNotificationEmailContext extends AbstractEmailContext<OrderNotificationEmailProcessModel> {

    private static final Logger LOG = Logger.getLogger(BlockedOrderNotificationEmailContext.class);

    @Resource
    private CommonI18NService commonI18NService;

    private static final String BASE_URL = "bhge.ecommerce.url";
    private static final String MEDIA_URL="bhge.store.base.url";
    private static final String JS_STOREFRONT_URL = "jsUrl";

    @Getter
    @Setter
    private String orderId;

    @Getter
    @Setter
    private String blockReason;

    @Setter
    private String mediaBaseUrl;

    @Getter
    @Setter
    private String contactusURL;

    @Getter
    @Setter
    private String userName;


    @Getter
    @Setter
    private String orderURL;

    @Getter
    @Setter
    private String orderBlocked;


    @Override
    public void init(final OrderNotificationEmailProcessModel emailProcessModel, final EmailPageModel emailPageModel){
        super.init(emailProcessModel, emailPageModel);
        put(JS_STOREFRONT_URL, Config.getParameter("bhge.jsapps.ecommerce.url"));
        setContactusURL(Config.getParameter(BASE_URL)+ "/contactus");
        setMediaBaseUrl(Config.getParameter(MEDIA_URL));
        setOrderURL(Config.getParameter(BASE_URL));
        setUserName(emailProcessModel.getNotification().getCustomer().getName());
        setOrderId(emailProcessModel.getNotification().getOrderId());
        String orderStatus = emailProcessModel.getNotification().getOrderStatus();
        boolean isBlocked = BooleanUtils.isTrue(StringUtils.isNotBlank(orderStatus) && StringUtils.containsIgnoreCase("Blocked", orderStatus));
        setBlockReason(BooleanUtils.isTrue(isBlocked) ? emailProcessModel.getNotification().getBlockReason() : "");
        setOrderBlocked(String.valueOf(isBlocked));
    }

    @Override
    protected BaseSiteModel getSite(OrderNotificationEmailProcessModel businessProcessModel) {
        return businessProcessModel.getSite();
    }

    @Override
    protected CustomerModel getCustomer(OrderNotificationEmailProcessModel businessProcessModel) {
        return businessProcessModel.getNotification().getCustomer();
    }

    @Override
    protected LanguageModel getEmailLanguage(OrderNotificationEmailProcessModel businessProcessModel) {
        LanguageModel language = businessProcessModel.getNotification().getCustomer().getSessionLanguage();
        if(language == null)
        {
            language = commonI18NService.getLanguage("en");
        }
        return language;
    }

    @Override
    public String getMediaBaseUrl() {
        return mediaBaseUrl;
    }
}
