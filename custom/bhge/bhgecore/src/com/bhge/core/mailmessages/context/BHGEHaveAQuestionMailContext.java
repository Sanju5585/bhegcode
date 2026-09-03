package com.bhge.core.mailmessages.context;

import jakarta.annotation.Resource;

import com.bhge.core.model.BHGEHaveAQuestionProcessModel;

import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.util.Config;

public class BHGEHaveAQuestionMailContext extends AbstractEmailContext<BHGEHaveAQuestionProcessModel> {
	
	
	@Resource(name = "commonI18NService")
 	private CommonI18NService commonI18NService;
	
	private String productCode;
	private String customerId;
	private String customerQuery;
	private String mediaBaseUrl;
	
	private static final String MEDIA_URL="bhge.store.base.url";
	
	@Override
	public void init(final BHGEHaveAQuestionProcessModel processModel, final EmailPageModel emailPageModel) {
		
		super.init(processModel, emailPageModel);
		put(EMAIL, Config.getParameter("customer.fromEmail.default"));
		put(FROM_EMAIL, Config.getParameter("customer.fromEmail.default"));
		put(FROM_DISPLAY_NAME, Config.getParameter("customer.fromEmail.default"));
		put(DISPLAY_NAME, Config.getParameter("customer.fromEmail.default"));
		
		setCustomerId(processModel.getCustomerId());
		setProductCode(processModel.getProductCode());
		setCustomerQuery(processModel.getCustomerQuery());
		setMediaBaseUrl(Config.getParameter(MEDIA_URL));
	
	}
	
	@Override
	public String getMediaBaseUrl() {
		return mediaBaseUrl;
	}

	public void setMediaBaseUrl(String mediaBaseUrl) {
		this.mediaBaseUrl = mediaBaseUrl;
	}
	

	public String getProductCode() {
		return productCode;
	}


	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getCustomerQuery() {
		return customerQuery;
	}

	public void setCustomerQuery(String customerQuery) {
		this.customerQuery = customerQuery;
	}

	@Override
	protected BaseSiteModel getSite(BHGEHaveAQuestionProcessModel businessProcessModel) {
		return businessProcessModel.getSite();
	}

	@Override
	protected CustomerModel getCustomer(BHGEHaveAQuestionProcessModel businessProcessModel) {
		return null;
	}

	@Override
	protected LanguageModel getEmailLanguage(BHGEHaveAQuestionProcessModel businessProcessModel) {
		return commonI18NService.getLanguage("en");
	}


}
