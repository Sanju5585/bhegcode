package com.bhge.facades.process.email.context;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGEContactUsModel;
import com.bhge.core.model.ContactUsEmailProcessModel;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.util.Config;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.Date;


public class ContactUsRequestEmailContext extends AbstractEmailContext<ContactUsEmailProcessModel> {

    private final static Logger LOG = LoggerFactory.getLogger(ContactUsRequestEmailContext.class);

    private static final String BASE_URL = "bhge.ecommerce.url";

    private static final String MEDIA_URL= "bhge.store.base.url";

    private static final String toEmailIDList = Config.getParameter(BhgeCoreConstants.DEFAULT_SUPPORT_EMAIL);
    private static final String waygateCustomerCare = Config.getParameter(BhgeCoreConstants.WAYGATE_CUSTOMER_CARE);
    private static final String bentlyCustomerCare = Config.getParameter(BhgeCoreConstants.BENTLY_CUSTOMER_CARE);
    private static final String panaCustomerCare = Config.getParameter(BhgeCoreConstants.PANA_CUSTOMER_CARE);
    private static final String druckCustomerCare = Config.getParameter(BhgeCoreConstants.Druck_CUSTOMER_CARE);

    private static final String DEFAULT_EMAIL_NAME = "Customer Support";
    private static final String WAYGATE_CUSTOMER_CARE = "Waygate Customer Care";
    private static final String BENTLY_CUSTOMER_CARE = "Bently Customer Care";
    private static final String PANA_CUSTOMER_CARE = "Panametrics Customer Care";
    private static final String DRUCK_CUSTOMER_CARE = "Druck Customer Care";

    @Autowired
    private CommonI18NService commonI18NService;

    @Setter
    @Getter
    private String requestedUser;

    @Setter
    @Getter
    private String companyEmailId;

    @Setter
    @Getter
    private String company;

    @Setter
    @Getter
    private String country;

    @Setter
    @Getter
    private String subProductLine;

    @Setter
    @Getter
    private String query;

    @Setter
    @Getter
    private String requestType;

    @Setter
    @Getter
    private String requestNum;

    @Getter
    @Setter
    private String mediaBaseUrl;

    @Getter
    @Setter
    private String contactusURL;

    @Setter
    @Getter
    private String requestedDate;

    @Override
    protected BaseSiteModel getSite(final ContactUsEmailProcessModel businessProcessModel) {
        return businessProcessModel.getSite();
    }

    @Override
    protected CustomerModel getCustomer(final ContactUsEmailProcessModel businessProcessModel) {
        return businessProcessModel.getCustomer();
    }

    @Override
    protected LanguageModel getEmailLanguage(final ContactUsEmailProcessModel businessProcessModel) {
        return commonI18NService.getLanguage("en");
    }

    @Override
    public void init(final ContactUsEmailProcessModel emailProcessModel, final EmailPageModel emailPageModel) {
        try {
            super.init(emailProcessModel, emailPageModel);
            BHGEContactUsModel requestForm = emailProcessModel.getContactUsForm();
            final String name = requestForm.getFirstName() + " " + requestForm.getLastName();
            setRequestedUser(name);
            setContactusURL(Config.getParameter(BASE_URL)+ "/contactus");
            setMediaBaseUrl(Config.getParameter(MEDIA_URL));
            setCompanyEmailId(requestForm.getCompanyEmailAddress());
            setCountry(requestForm.getCountry());
            setCompany(requestForm.getCompanyName());
            setQuery(requestForm.getContactUsNotes());
            if (StringUtils.isNotBlank(requestForm.getSubProductLine())){
                setSubProductLine(requestForm.getSubProductLine());
            }
            final String requestType = requestForm.getRequestType();
            updateRequestTypeAndNumber(requestType, requestForm);
            updateRequestedDate(requestForm);
            fetchContactUsEmailId(requestForm);
        } catch (Exception e) {
            LOG.error("Exception during contact us request form {} {}", emailProcessModel.getContactUsForm().getPk(), e.getMessage());
        }
    }

    private void updateRequestTypeAndNumber(String requestType, BHGEContactUsModel requestForm) {
        if (StringUtils.isNotBlank(requestType) && (StringUtils.containsIgnoreCase(requestType, "Sales") || StringUtils.containsIgnoreCase(requestType, "Returns"))){
            String orderNum = "";
            if (StringUtils.containsIgnoreCase(requestType, "Sales")) {
                orderNum = requestForm.getOrderNumber();
            } else if (StringUtils.containsIgnoreCase(requestType, "Returns")) {
                orderNum = requestForm.getRmaNumber();
            }
            setRequestNum(orderNum);
            if (StringUtils.containsIgnoreCase(requestType, "Sales")) {
                requestType = "Order";
            } else if (StringUtils.containsIgnoreCase(requestType, "Returns")) {
                requestType = "Rma";
            }
            setRequestType(requestType);
        } else {
            setRequestType(requestType);
        }
    }

    private void updateRequestedDate(BHGEContactUsModel requestForm) {
        try {
            Date date = requestForm.getCreationtime();
            SimpleDateFormat formatter = new SimpleDateFormat("dd-M-yyyy");
            final String requestedDate = formatter.format(date);
            setRequestedDate(requestedDate);
        } catch (DateTimeParseException ex) {
            LOG.error("Exception while parsing date {}", ex.getMessage());
        }
    }

    private void fetchContactUsEmailId(BHGEContactUsModel requestForm) {
        if (requestForm != null) {
            String productLine = requestForm.getProductLine();
            String subProductLine = requestForm.getSubProductLine();

            if (StringUtils.isNotBlank(productLine) && StringUtils.containsIgnoreCase(productLine, "waygate")) {
                productLine = subProductLine;
            }
            if (StringUtils.isNotBlank(productLine) && StringUtils.isNotBlank(requestForm.getContactUsEmail())){
                put("email", requestForm.getContactUsEmail());
                put("displayName", productLine);
            } else {
                defaultSupportEmailId(productLine);
            }
        } else {
            defaultSupportEmailId("");
        }
    }

    private void defaultSupportEmailId(String productLine) {
        if (StringUtils.isNotBlank(productLine)) {
            if (StringUtils.containsIgnoreCase(productLine, "waygate")) {
                put("email", waygateCustomerCare);
                put("displayName", WAYGATE_CUSTOMER_CARE);
            } else if (StringUtils.containsIgnoreCase(productLine, "bently")) {
                put("email", bentlyCustomerCare);
                put("displayName", BENTLY_CUSTOMER_CARE);
            } else if (StringUtils.containsIgnoreCase(productLine, "pana")) {
                put("email", panaCustomerCare);
                put("displayName", PANA_CUSTOMER_CARE);
            } else if (StringUtils.containsIgnoreCase(productLine, "druck")) {
                put("email", druckCustomerCare);
                put("displayName", DRUCK_CUSTOMER_CARE);
            } else if (StringUtils.containsIgnoreCase(productLine, "reuter")) {
                put("email", toEmailIDList);
                put("displayName", DEFAULT_EMAIL_NAME);
            }
        } else {
            put("email", toEmailIDList);
            put("displayName", DEFAULT_EMAIL_NAME);
        }
    }

}