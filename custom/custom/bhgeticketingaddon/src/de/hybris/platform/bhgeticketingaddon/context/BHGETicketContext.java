package de.hybris.platform.bhgeticketingaddon.context;

import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;

import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.bhgeticketingaddon.model.process.BHGETicketProcessModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.ticketsystem.data.BHGETicketData;
import de.hybris.platform.util.Config;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;

import org.apache.log4j.Logger;

import java.util.ArrayList;

import jakarta.annotation.Resource;

/**
 * @author ashvyas
 *
 */
public class BHGETicketContext extends AbstractEmailContext<BHGETicketProcessModel>
{
	private static final Logger LOG = Logger.getLogger(BHGETicketContext.class);

	private BHGETicketData data = new BHGETicketData();
	
	@Resource(name = "commonI18NService")
 	private CommonI18NService commonI18NService;

	/**
	 * @return the data
	 */
	public BHGETicketData getData()
	{
		return data;
	}

	/**
	 * @param data
	 *           the data to set
	 */
	public void setData(final BHGETicketData data)
	{
		this.data = data;
	}


	@Override
	protected BaseSiteModel getSite(final BHGETicketProcessModel businessProcessModel)
	{
		return businessProcessModel.getSite();
	}

	@Override
	protected CustomerModel getCustomer(final BHGETicketProcessModel businessProcessModel)
	{
		return null;
	}

	@Override
	protected LanguageModel getEmailLanguage(final BHGETicketProcessModel businessProcessModel)
	{
		return commonI18NService.getLanguage("en");
		//return null;
	}

	@Override
	public void init(final BHGETicketProcessModel model, final EmailPageModel emailPageModel)
	{
		super.init(model, emailPageModel);

		LOG.info("Start init() method");

		put(EMAIL, Config.getParameter("Feedback_To_Email"));
		//put(FROM_EMAIL, Config.getParameter("Feedback_From_Email"));
		put(FROM_EMAIL, Config.getParameter("Feedback_From_Email"));
		put(FROM_DISPLAY_NAME, Config.getParameter("Feedback_From_Display_Name"));
		put(DISPLAY_NAME, model.getName());
		data.setAttachment(model.getAttachment());
		data.setAttachments(new ArrayList<>(model.getAttachments()));
		data.setEmailId(model.getEmailId());
		data.setMessage(model.getMessage());
		data.setName(model.getName());
		data.setPhoneNo(model.getPhoneNo());
		data.setSubject(model.getSubject());
		data.setTicketId(model.getTicketId());
		
		LOG.info("End init() method");

	}
	
}