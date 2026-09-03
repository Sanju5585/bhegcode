/**
 *
 */
package com.bhge.core.event;

import de.hybris.platform.commerceservices.model.process.GEEdgeShippingAddressProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;



import com.bhge.services.event.BHGEShippingAddressEmailEvent;


/**
 * @author 503047662
 *
 */
public class BHGEShippingAddressEmailEventListener extends AbstractEventListener<BHGEShippingAddressEmailEvent>
{

	private ModelService modelService;

	private String frontendTemplateName;

	public String getFrontendTemplateName()
	{
		return frontendTemplateName;
	}

	public void setFrontendTemplateName(final String frontendTemplateName)
	{
		this.frontendTemplateName = frontendTemplateName;
	}

	private BaseStoreService baseStoreService;

	private BaseSiteService baseSiteService;

	public BaseStoreService getBaseStoreService()
	{
		return baseStoreService;
	}

	public void setBaseStoreService(final BaseStoreService baseStoreService)
	{
		this.baseStoreService = baseStoreService;
	}

	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}

	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}

	private BusinessProcessService businessProcessService;

	protected BusinessProcessService getBusinessProcessService()
	{
		return businessProcessService;
	}

	
	public void setBusinessProcessService(final BusinessProcessService businessProcessService)
	{
		this.businessProcessService = businessProcessService;
	}

	protected ModelService getModelService()
	{
		return modelService;
	}

	
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	@Override
	protected void onEvent(final BHGEShippingAddressEmailEvent shippingAddressEmailEvent)
	{
		final GEEdgeShippingAddressProcessModel gEEdgeShippingAddressProcessModel = (GEEdgeShippingAddressProcessModel) getBusinessProcessService()
				.createProcess("bhgeShippingAddressFormEmailProcess" + "_" + System.currentTimeMillis(),
						"bhgeShippingAddressFormEmailProcess");
		gEEdgeShippingAddressProcessModel.setStore(baseStoreService.getCurrentBaseStore());
		gEEdgeShippingAddressProcessModel.setSite(baseSiteService.getCurrentBaseSite());
		gEEdgeShippingAddressProcessModel
				.setCompanyName(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getCompanyName());
		gEEdgeShippingAddressProcessModel.setAddress1(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getLine1());
		gEEdgeShippingAddressProcessModel.setAddress2(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getLine2());
		gEEdgeShippingAddressProcessModel.setCountry(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getCountryName());
		gEEdgeShippingAddressProcessModel
				.setDeliveryPoint(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getDeliveryPoint());
		gEEdgeShippingAddressProcessModel.setStateName(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getStateName());
		gEEdgeShippingAddressProcessModel.setZipCode(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getPostalCode());
		gEEdgeShippingAddressProcessModel.setEmail(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getEmail());
		gEEdgeShippingAddressProcessModel.setFromEmail(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getFromEmail());
		gEEdgeShippingAddressProcessModel.setFromName(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getFromName());
		gEEdgeShippingAddressProcessModel
				.setEmailSubject(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getEmailSubject());
		gEEdgeShippingAddressProcessModel
				.setCustomerName(shippingAddressEmailEvent.getBhgeShippingAddressFormData().getCustomerName());
		getModelService().save(gEEdgeShippingAddressProcessModel);
		getBusinessProcessService().startProcess(gEEdgeShippingAddressProcessModel);

	}


}
