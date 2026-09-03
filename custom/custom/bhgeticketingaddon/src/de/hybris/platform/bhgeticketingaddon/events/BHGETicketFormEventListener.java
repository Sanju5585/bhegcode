/**
 *
 */
package de.hybris.platform.bhgeticketingaddon.events;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;


import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.bhgeticketingaddon.model.process.BHGETicketProcessModel;
import de.hybris.platform.bhgeticketingaddon.services.BHGETicketBusinessService;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.ticketsystem.data.BHGETicketData;
import de.hybris.platform.ticketsystem.events.BHGETicketFormEvent;

/**
 * @author ashvyas
 *
 */
public class BHGETicketFormEventListener extends AbstractEventListener<BHGETicketFormEvent> {

	private static final Logger LOG = Logger.getLogger(BHGETicketFormEventListener.class);

	@Resource(name = "modelService")
	private ModelService modelService;

	@Resource(name = "baseStoreService")
	private BaseStoreService baseStoreService;

	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;

	@Resource(name = "businessProcessService")
	private BusinessProcessService businessProcessService;

	@Resource(name = "bhgeTicketBusinessService")
	private BHGETicketBusinessService bhgeTicketBusinessService;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	/**
	 * @return the flexibleSearchService
	 */
	public FlexibleSearchService getFlexibleSearchService() {
		return flexibleSearchService;
	}

	/**
	 * @param flexibleSearchService
	 *            the flexibleSearchService to set
	 */
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService) {
		this.flexibleSearchService = flexibleSearchService;
	}

	/**
	 * @return the bhgeTicketBusinessService
	 */
	public BHGETicketBusinessService getBhgeTicketBusinessService() {
		return bhgeTicketBusinessService;
	}

	/**
	 * @param bhgeTicketBusinessService
	 *            the bhgeTicketBusinessService to set
	 */
	public void setBhgeTicketBusinessService(final BHGETicketBusinessService bhgeTicketBusinessService) {
		this.bhgeTicketBusinessService = bhgeTicketBusinessService;
	}

	public BaseStoreService getBaseStoreService() {
		return baseStoreService;
	}

	public void setBaseStoreService(final BaseStoreService baseStoreService) {
		this.baseStoreService = baseStoreService;
	}

	public BaseSiteService getBaseSiteService() {
		return baseSiteService;
	}

	public void setBaseSiteService(final BaseSiteService baseSiteService) {
		this.baseSiteService = baseSiteService;
	}

	protected BusinessProcessService getBusinessProcessService() {
		return businessProcessService;
	}

	
	public void setBusinessProcessService(final BusinessProcessService businessProcessService) {
		this.businessProcessService = businessProcessService;
	}

	protected ModelService getModelService() {
		return modelService;
	}

	
	public void setModelService(final ModelService modelService) {
		this.modelService = modelService;
	}

	@Override
	protected void onEvent(final BHGETicketFormEvent event) {
		LOG.info("Start onEvent() method");

		final BHGETicketProcessModel processModel = (BHGETicketProcessModel) getBusinessProcessService()
				.createProcess("bhgeTicketEmailProcess" + "_" + System.currentTimeMillis(), "bhgeTicketEmailProcess");

		final BHGETicketData data = event.getBhgeTicketData();

		processModel.setEmailId(data.getEmailId());
		processModel.setPhoneNo(data.getPhoneNo());
		processModel.setName(data.getName());
		processModel.setMessage(data.getMessage());
		processModel.setSubject(data.getSubject());
		processModel.setStore(getBaseStoreService().getCurrentBaseStore());
		processModel.setSite(getBaseSiteService().getCurrentBaseSite());
		processModel.setAttachment(data.getAttachment());
		processModel.setAttachments(data.getAttachments());
		processModel.setTicketId(data.getTicketId());

		try {
			getModelService().save(processModel);
		} catch (final ModelSavingException e1) {
			LOG.error("Exception while saving BHGETicketProcessModel : " + e1.getMessage() + " : and the reason is : "
					+ e1.getCause() + " : " + e1);
			e1.printStackTrace();
		}

		final BHGETicketProcessModel bhgeTicketProcessModel = (BHGETicketProcessModel) getBusinessProcessService()
				.getProcess(processModel.getCode());
		bhgeTicketProcessModel.setStore(getBaseStoreService().getCurrentBaseStore());
		bhgeTicketProcessModel.setSite((BaseSiteModel) getBaseSiteService().getCurrentBaseSite());
		LOG.info("Base Store : " + getBaseStoreService().getCurrentBaseStore().getName());
		LOG.info("Base Site : " + getBaseSiteService().getCurrentBaseSite().getName());
		try {
			getBusinessProcessService().startProcess(bhgeTicketProcessModel);
			LOG.info("BHGETicketProcess started successfully");
		} catch (final Exception e) {
			LOG.error("Exception while starting the BHGETicketProcess : " + e.getMessage() + " : and the reason is : "
					+ e.getCause() + " : " + e);
			e.printStackTrace();
		}

		LOG.info("End onEvent() method");
	}

}
