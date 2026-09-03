/**
 *
 */
package com.bhge.core.mailmessages.context;

import de.hybris.platform.acceleratorservices.urlresolver.SiteBaseUrlResolutionService;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.facades.user.data.BHGECustomerData;


/**
 * @author sasomise
 *
 */
public class BHGEActiveUsersEmailContext
{

	private static final Logger LOG = Logger.getLogger(BHGEActiveUsersEmailContext.class);

	public static final String BASE_SITE = "baseSite";
	public static final String MEDIA_BASE_URL = "mediaBaseUrl";
	public static final String SECURE_BASE_URL = "secureBaseUrl";

	@Resource(name = "userService")
	private UserService userService;


	public SiteBaseUrlResolutionService getSiteBaseUrlResolutionService()
	{
		return siteBaseUrlResolutionService;
	}

	public void setSiteBaseUrlResolutionService(final SiteBaseUrlResolutionService siteBaseUrlResolutionService)
	{
		this.siteBaseUrlResolutionService = siteBaseUrlResolutionService;
	}

	private String[] receipientEmailList;
	private SiteBaseUrlResolutionService siteBaseUrlResolutionService;

	private List<BHGECustomerData> customersDataList;

	private String receipientNameString;

	private BaseSiteModel baseSite;

	public String getSecureBaseUrl()
	{
		return secureBaseUrl;
	}


	private String secureBaseUrl;

	private BaseSiteService baseSiteService;

	public BaseSiteService getBaseSiteService()
	{
		return baseSiteService;
	}


	public BaseSiteModel getBaseSite()
	{
		return baseSite;
	}

	public void setBaseSite(final BaseSiteModel baseSite)
	{
		this.baseSite = baseSite;
	}

	public String getMediaBaseUrl()
	{
		return mediaBaseUrl;
	}

	public void setMediaBaseUrl(final String mediaBaseUrl)
	{
		this.mediaBaseUrl = mediaBaseUrl;
	}

	public void setSecureBaseUrl(final String secureBaseUrl)
	{
		this.secureBaseUrl = secureBaseUrl;
	}

	public void setBaseSiteService(final BaseSiteService baseSiteService)
	{
		this.baseSiteService = baseSiteService;
	}

	private String mediaBaseUrl;


	/**
	 * @return the receipientEmailList
	 */
	public String[] getReceipientEmailList()
	{
		return receipientEmailList;
	}

	/**
	 * @param receipientEmailList
	 *           the receipientEmailList to set
	 */
	public void setReceipientEmailList(final String[] receipientEmailList)
	{
		this.receipientEmailList = receipientEmailList;
	}


	/**
	 * @return the receipientNameString
	 */
	public String getReceipientNameString()
	{
		if (receipientEmailList == null || receipientEmailList.length == 0)
		{
			return "";
		}

		final String receipientNameString = "";

		return receipientNameString;
	}

	/**
	 * @param receipientNameString
	 *           the receipientNameString to set
	 */
	public void setReceipientNameString(final String receipientNameString)
	{
		this.receipientNameString = receipientNameString;
	}

	/**
	 * @return the customersDataList
	 */
	public List<BHGECustomerData> getCustomersDataList()
	{
		return customersDataList;
	}

	/**
	 * @param customersDataList
	 *           the customersDataList to set
	 */
	public void setCustomersDataList(final List<BHGECustomerData> customersDataList)
	{
		this.customersDataList = customersDataList;
	}


}
