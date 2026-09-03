/**
 *
 */
package com.bhge.core.cronjob;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.util.Config;

import java.util.Date;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.savecart.dao.BHGESavedCartDao;
import com.bhge.core.user.service.BHGEUserProfileService;


/**
 * @author marchaka
 *
 */
public class BHGESavedCartExpiryMailJob extends AbstractJobPerformable<CronJobModel>
{
	private static final Logger LOG = Logger.getLogger(BHGESavedCartExpiryMailJob.class);

	private static final String BASE_SITE_KEY = "BHGE_BASE_SITE";
	private static final String BASE_SITE_DEF = "BHGE";
	private static final String EMAIL_SUBJECT = "SAVED_CART_EXPIRY_MAIL_SUBJECT";

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Resource(name = "baseSiteService")
	private BaseSiteService siteService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	private BHGESavedCartDao saveCartDao;

	private String emailTemplate;

	@Override
	public PerformResult perform(final CronJobModel cronJob)
	{
		try
		{
			final BaseSiteModel baseSite = siteService.getBaseSiteForUID(Config.getString("GEEDGE_BASE_SITE", "bhge"));

			final List<CartModel> savedCartsExpiryDateList = saveCartDao.getSavedCartsExpiryDate(baseSite);

			if (CollectionUtils.isNotEmpty(savedCartsExpiryDateList))
			{
				for (final CartModel cartToBeExpired : savedCartsExpiryDateList)
				{

					final String savedCartname = cartToBeExpired.getName();
					final Date expiryDate = cartToBeExpired.getExpirationTime();
					final String savedCartDesc = cartToBeExpired.getDescription();
					final List<AbstractOrderEntryModel> entries = cartToBeExpired.getEntries();

					AddressModel sessionSoldToAddress = null;
					GEEdgeCustomerModel customer = null;
					String to = null;
					String userName = null;

					final B2BUnitModel userAccount = cartToBeExpired.getSoldToForCart();
					String soldToId = "";
					if (null != userAccount && null != userAccount.getUid() && userAccount.getUid().contains("_"))
					{
						final String[] uid = userAccount.getUid().split("_");
						soldToId = uid[0];
					}
					final B2BUnitModel soldTo = userProfileService.findChildB2BUnitModel(soldToId);
					final String sessionSoldToName = soldTo.getLocName();

					if (null != cartToBeExpired.getUser())
					{
						customer = (GEEdgeCustomerModel) cartToBeExpired.getUser();
						to = customer.getEmail();
						userName = customer.getName();
					}

					if (soldTo.getBillingAddress() != null)
					{
						sessionSoldToAddress = soldTo.getBillingAddress();
					}

					final BHGESavedCartExpiryMailVO geEdgeSavedCartExpiryMailVO = new BHGESavedCartExpiryMailVO();
					geEdgeSavedCartExpiryMailVO.setSavedCartName(savedCartname);
					geEdgeSavedCartExpiryMailVO.setExpiryDate(expiryDate);
					geEdgeSavedCartExpiryMailVO.setUserName(userName);
					geEdgeSavedCartExpiryMailVO.setEntries(entries);
					geEdgeSavedCartExpiryMailVO.setSavedCartDescription(savedCartDesc);
					geEdgeSavedCartExpiryMailVO.setSessionSoldToName(sessionSoldToName);
					geEdgeSavedCartExpiryMailVO.setSessionSoldToAddress(sessionSoldToAddress);
					try
					{
						final String subject = Config.getParameter(EMAIL_SUBJECT);

						final RendererTemplateModel template = rendererService.getRendererTemplateForCode(getEmailTemplate());
						if (StringUtils.isNotBlank(to))
						{
							bhgeEmailService.createSavedCartExpiryEmail(template, subject, to, geEdgeSavedCartExpiryMailVO);
						}
					}
					catch (final Exception e)
					{
						LOG.error("Exception while rendering bhgeSavedcartEmail" + e);
					}
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("Error in savedcart expiry cronjob" + ExceptionUtils.getStackTrace(e));
			return new PerformResult(CronJobResult.FAILURE, CronJobStatus.ABORTED);
		}

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

	public BHGEEmailService getGeedgeEmailService()
	{
		return bhgeEmailService;
	}

	public void setGeedgeEmailService(final BHGEEmailService geedgeEmailService)
	{
		this.bhgeEmailService = geedgeEmailService;
	}

	public RendererService getRendererService()
	{
		return rendererService;
	}

	public void setRendererService(final RendererService rendererService)
	{
		this.rendererService = rendererService;
	}

	public BHGESavedCartDao getSaveCartDao()
	{
		return saveCartDao;
	}

	public void setSaveCartDao(final BHGESavedCartDao saveCartDao)
	{
		this.saveCartDao = saveCartDao;
	}

	public String getEmailTemplate()
	{
		return emailTemplate;
	}

	public void setEmailTemplate(final String emailTemplate)
	{
		this.emailTemplate = emailTemplate;
	}

}
