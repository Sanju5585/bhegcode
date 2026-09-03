package com.bhge.core.mailmessages.context;

import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.product.BHGEMaterialPushData;

import de.hybris.platform.acceleratorservices.urlencoder.UrlEncoderService;
import de.hybris.platform.acceleratorservices.urlresolver.SiteBaseUrlResolutionService;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;

public class BHGEMaterialPushEmailContext {
	private static final Logger LOG = Logger
			.getLogger(BHGEMaterialPushEmailContext.class);
	
	public static final String BASE_SITE = "baseSite";
	public static final String MEDIA_BASE_URL = "mediaBaseUrl";
	public static final String SECURE_BASE_URL = "secureBaseUrl";
	
	@Resource(name = "userService")
	private UserService userService;

	
	public SiteBaseUrlResolutionService getSiteBaseUrlResolutionService() {
		return siteBaseUrlResolutionService;
	}

	public void setSiteBaseUrlResolutionService(
			SiteBaseUrlResolutionService siteBaseUrlResolutionService) {
		this.siteBaseUrlResolutionService = siteBaseUrlResolutionService;
	}
	private String[] receipientEmailList;
	private SiteBaseUrlResolutionService siteBaseUrlResolutionService;

	private List<BHGEMaterialPushData> materialPushDataList;

	private Integer materialPushCount;

	private Integer customerPushCount;

	private Integer addressPushCount;

	private Integer pricePushCount;

	private Boolean isAttachmentAvailable;

	private String receipientNameString;
	
	private BaseSiteModel baseSite;
	
	public String getSecureBaseUrl() {
		return secureBaseUrl;
	}
	
	
	private String secureBaseUrl;
	
	private BaseSiteService baseSiteService;
	
	public BaseSiteService getBaseSiteService() {
		return baseSiteService;
	}


	public BaseSiteModel getBaseSite() {
		return baseSite;
	}

	public void setBaseSite(BaseSiteModel baseSite) {
		this.baseSite = baseSite;
	}

	public String getMediaBaseUrl() {
		return mediaBaseUrl;
	}

	public void setMediaBaseUrl(String mediaBaseUrl) {
		this.mediaBaseUrl = mediaBaseUrl;
	}

	public void setSecureBaseUrl(String secureBaseUrl) {
		this.secureBaseUrl = secureBaseUrl;
	}

	public void setBaseSiteService(BaseSiteService baseSiteService) {
		this.baseSiteService = baseSiteService;
	}
	private String mediaBaseUrl;


	/**
	 * @return the receipientEmailList
	 */
	public String[] getReceipientEmailList() {
		return receipientEmailList;
	}

	/**
	 * @param receipientEmailList
	 *            the receipientEmailList to set
	 */
	public void setReceipientEmailList(final String[] receipientEmailList) {
		this.receipientEmailList = receipientEmailList;
	}

	/**
	 * @return the materialPushDataList
	 */
	public List<BHGEMaterialPushData> getMaterialPushDataList() {
		return materialPushDataList;
	}

	/**
	 * @param materialPushDataList
	 *            the materialPushDataList to set
	 */
	public void setMaterialPushDataList(
			final List<BHGEMaterialPushData> materialPushDataList) {
		this.materialPushDataList = materialPushDataList;
	}

	/**
	 * @return the receipientNameString
	 */
	public String getReceipientNameString() {
		if (receipientEmailList == null || receipientEmailList.length == 0) {
			return "";
		}

		final String receipientNameString = "";
		
		return receipientNameString;
	}

	/**
	 * @param receipientNameString
	 *            the receipientNameString to set
	 */
	public void setReceipientNameString(final String receipientNameString) {
		this.receipientNameString = receipientNameString;
	}

	public Integer getCustomerPushCount() {
		return customerPushCount;
	}

	public void setCustomerPushCount(Integer customerPushCount) {
		this.customerPushCount = customerPushCount;
	}

	public Integer getAddressPushCount() {
		return addressPushCount;
	}

	public void setAddressPushCount(Integer addressPushCount) {
		this.addressPushCount = addressPushCount;
	}

	public Integer getMaterialPushCount() {
		return materialPushCount;
	}

	public void setMaterialPushCount(Integer materialPushCount) {
		this.materialPushCount = materialPushCount;
	}

	public Integer getPricePushCount() {
		return pricePushCount;
	}

	public void setPricePushCount(Integer pricePushCount) {
		this.pricePushCount = pricePushCount;
	}

	public Boolean getAttachmentAvailable() {
		return isAttachmentAvailable;
	}

	public void setAttachmentAvailable(Boolean attachmentAvailable) {
		isAttachmentAvailable = attachmentAvailable;
	}
}
