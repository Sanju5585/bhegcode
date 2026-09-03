/**
 *
 */
package com.bhge.core.util;

import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;

import java.util.Collection;
import java.util.Collections;

import org.apache.commons.lang3.StringUtils;

import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.facades.data.SalesAreaData;

import de.hybris.platform.b2b.model.B2BUnitModel;
import org.apache.log4j.Logger;
import jakarta.annotation.Resource;


/**
 * @author 212695810
 *
 */
public class BHGEProductUtil
{
	private final static Logger LOG = Logger.getLogger(BHGEProductUtil.class);


	/**
	 * Returns Hybris status based on user's default B2BUnit
	 * @param geEdgeProduct
	 * @param sessionService
	 * @param userService
	 * @return
	 */
	public HybrisStatus getHybrisStatusForCurrentB2BUnit(final GEEdgeProductModel geEdgeProduct,final UserService userService)
	{
		HybrisStatus hybrisStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;
		String distributionChannel = "";
		String division = "";
		String salesAreaUid = "";
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			B2BUnitModel defaultB2BUnit = currentUser.getDefaultB2BUnit();
			if(defaultB2BUnit != null)
			{
				final String sessionSalesAreaArray[] = defaultB2BUnit.getUid().split("_");
				salesAreaUid = sessionSalesAreaArray[1];
				distributionChannel = sessionSalesAreaArray[2];
				division = sessionSalesAreaArray[3];
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && salesAreaUid != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(salesAreaUid) 
						&& StringUtils.isNotBlank(salesArea.getDistributionChannel()) && salesArea.getDistributionChannel().equalsIgnoreCase(distributionChannel)
						&& StringUtils.isNotBlank(salesArea.getDivision()) && salesArea.getDivision().equalsIgnoreCase(division))
				{
					hybrisStatus = salesArea.getHybrisStatus();
					break;
				}
			}
		}
		else
		{
			hybrisStatus = geEdgeProduct.getHybrisStatus();
		}
		return hybrisStatus;
	}
	
	
	
	/**
	 * Returns HybrisStatus of the current sales area associated with the product
	 *
	 * @param geEdgeProduct
	 * @param sessionService
	 * @return
	 */
	public HybrisStatus getHybrisStatusForCurrentSalesArea(final GEEdgeProductModel geEdgeProduct,
			final SessionService sessionService, final UserService userService)
	{
		HybrisStatus hybrisStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;
		String distributionChannel = "";
		String division = "";
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
			if(sessionSalesAreaData != null)
			{
				final String sessionSalesAreaArray[] = sessionSalesAreaData.getB2bUnitUid().split("_");
				distributionChannel = sessionSalesAreaArray[2];
				division = sessionSalesAreaArray[3];
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && sessionSalesAreaData != null
						&& sessionSalesAreaData.getSalesOrg() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()) 
						&& StringUtils.isNotBlank(salesArea.getDistributionChannel()) && salesArea.getDistributionChannel().equalsIgnoreCase(distributionChannel)
						&& StringUtils.isNotBlank(salesArea.getDivision()) && salesArea.getDivision().equalsIgnoreCase(division))
				{
					hybrisStatus = salesArea.getHybrisStatus();
					break;
				}
			}
		}
		else
		{
			hybrisStatus = geEdgeProduct.getHybrisStatus();
		}
		return hybrisStatus;
	}

	/**
	 * Returns HybrisStatus of the current sales area associated with the product
	 *
	 * @param geEdgeProduct
	 * @param bhgeSoldToUtil
	 * @return
	 */
	public HybrisStatus getHybrisStatusForCurrentSalesAreaForWS(final GEEdgeProductModel geEdgeProduct, final UserService userService, BHGESoldToUtil bhgeSoldToUtil)
	{
		HybrisStatus hybrisStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;
		String distributionChannel = "";
		String division = "";
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
			if(sessionSalesAreaData != null)
			{
				final String sessionSalesAreaArray[] = sessionSalesAreaData.getB2bUnitUid().split("_");
				distributionChannel = sessionSalesAreaArray[2];
				division = sessionSalesAreaArray[3];
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && sessionSalesAreaData != null
						&& sessionSalesAreaData.getSalesOrg() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg())
						&& StringUtils.isNotBlank(salesArea.getDistributionChannel()) && salesArea.getDistributionChannel().equalsIgnoreCase(distributionChannel)
						&& StringUtils.isNotBlank(salesArea.getDivision()) && salesArea.getDivision().equalsIgnoreCase(division))
				{
					hybrisStatus = salesArea.getHybrisStatus();
					break;
				}
			}
		}
		else
		{
			hybrisStatus = geEdgeProduct.getHybrisStatus();
		}
		return hybrisStatus;
	}
	/**
	 * Returns HybrisStatus of the current sales area associated with the product
	 *
	 * @param geEdgeProduct
	 * @return
	 */
	public HybrisStatus getHybrisStatusForCurrentSalesAreaForBulkUpload(final GEEdgeProductModel geEdgeProduct,SalesAreaData sessionSalesAreaData, UserService userService)
	{
		HybrisStatus hybrisStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;
		String distributionChannel = "";
		String division = "";
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			if(sessionSalesAreaData != null)
			{
				final String sessionSalesAreaArray[] = sessionSalesAreaData.getB2bUnitUid().split("_");
				distributionChannel = sessionSalesAreaArray[2];
				division = sessionSalesAreaArray[3];
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && sessionSalesAreaData != null
						&& sessionSalesAreaData.getSalesOrg() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg())
						&& StringUtils.isNotBlank(salesArea.getDistributionChannel()) && salesArea.getDistributionChannel().equalsIgnoreCase(distributionChannel)
						&& StringUtils.isNotBlank(salesArea.getDivision()) && salesArea.getDivision().equalsIgnoreCase(division))
				{
					hybrisStatus = salesArea.getHybrisStatus();
					break;
				}
			}
		}
		else
		{
			hybrisStatus = geEdgeProduct.getHybrisStatus();
		}
		return hybrisStatus;
	}

	public HybrisStatus getHybrisStatusForCurrentSalesArea(final GEEdgeProductModel geEdgeProduct, final UserService userService)
	{
		LOG.info("Get Hybris Status For Current Sales Area - START" );
		HybrisStatus hybrisStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;
		String distributionChannel = "";
		String division = "";
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			GEEdgeCustomerModel user = (GEEdgeCustomerModel) userService.getCurrentUser();
			String recentB2bUnit = null != user.getDefaultB2BUnit() ? user.getDefaultB2BUnit().getUid() : "";
			String salesOrg = null;
			String b2bUnitId = null;
			String [] b2BUnitArray = null;
			if(null != recentB2bUnit)
			{
				b2BUnitArray = recentB2bUnit.split("_"); 
				if(b2BUnitArray.length >= 3)
				{
					b2bUnitId = b2BUnitArray[0];
					salesOrg = b2BUnitArray[1];
					distributionChannel = b2BUnitArray[2];
					division = b2BUnitArray[3];
				}
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{				
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && b2BUnitArray != null && b2BUnitArray.length>=3
						&& salesOrg != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(salesOrg) 
						&& StringUtils.isNotBlank(salesArea.getDistributionChannel()) && salesArea.getDistributionChannel().equalsIgnoreCase(distributionChannel)
						&& StringUtils.isNotBlank(salesArea.getDivision()) && salesArea.getDivision().equalsIgnoreCase(division))
				{
					hybrisStatus = salesArea.getHybrisStatus();
					break;
				}
			}
		}
		else
		{
			hybrisStatus = geEdgeProduct.getHybrisStatus();
		}
		LOG.info("Get Hybris Status For Current Sales Area - END" + hybrisStatus);
		return hybrisStatus;
	}


	/**
	 * Returns MaterialStatus of the current sales area associated with the product
	 *
	 * @param geEdgeProduct
	 * @param sessionService
	 * @return
	 */
	public MaterialChannelStatus getMaterialStatusForCurrentSalesArea(final GEEdgeProductModel geEdgeProduct,
			final SessionService sessionService, final UserService userService)
	{
		MaterialChannelStatus materialStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;

		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final SalesAreaData sessionSalesAreaData = sessionService.getAttribute("defaultSalesAreaData");
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && sessionSalesAreaData != null
						&& sessionSalesAreaData.getSalesOrg() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))
				{
					materialStatus = salesArea.getMaterialStatus();
					break;
				}
			}
		}
		else
		{
			materialStatus = geEdgeProduct.getMaterialStatus();
		}
		return materialStatus;
	}

	/**
	 * Returns MaterialStatus of the current sales area associated with the product
	 *
	 * @param geEdgeProduct
	 * @param bhgeSoldToUtil
	 * @return
	 */
	public MaterialChannelStatus getMaterialStatusForCurrentSalesAreaForWS(final GEEdgeProductModel geEdgeProduct, final UserService userService, BHGESoldToUtil bhgeSoldToUtil)
	{
		MaterialChannelStatus materialStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;

		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final SalesAreaData sessionSalesAreaData = bhgeSoldToUtil.getSalesAreaData();
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && sessionSalesAreaData != null
						&& sessionSalesAreaData.getSalesOrg() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))
				{
					materialStatus = salesArea.getMaterialStatus();
					break;
				}
			}
		}
		else
		{
			materialStatus = geEdgeProduct.getMaterialStatus();
		}
		return materialStatus;
	}
	/**
	 * Returns MaterialStatus of the current sales area associated with the product
	 *
	 * @param geEdgeProduct
	 * @return
	 */
	public MaterialChannelStatus getMaterialStatusForCurrentSalesAreaForBulkUpload(final GEEdgeProductModel geEdgeProduct,SalesAreaData sessionSalesAreaData, UserService userService)
	{
		MaterialChannelStatus materialStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;

		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && sessionSalesAreaData != null
						&& sessionSalesAreaData.getSalesOrg() != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(sessionSalesAreaData.getSalesOrg()))
				{
					materialStatus = salesArea.getMaterialStatus();
					break;
				}
			}
		}
		else
		{
			materialStatus = geEdgeProduct.getMaterialStatus();
		}
		return materialStatus;
	}
	
	public MaterialChannelStatus getMaterialStatusForCurrentSalesArea(final GEEdgeProductModel geEdgeProduct, final UserService userService)
	{
		LOG.info("Get Material Status For Current Sales Area - START" );
		MaterialChannelStatus materialStatus = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;

		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{
			GEEdgeCustomerModel user = (GEEdgeCustomerModel) userService.getCurrentUser();
			String recentB2bUnit = null != user.getDefaultB2BUnit() ? user.getDefaultB2BUnit().getUid() : "";
			String salesOrg = null;
			String[] b2BUnitArray = null;
			if(null != recentB2bUnit)
			{
				b2BUnitArray = recentB2bUnit.split("_"); 
				if(b2BUnitArray.length >= 3)
				{
					salesOrg = b2BUnitArray[1];
				}
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas)
			{
				if (salesArea != null && salesOrg != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(salesOrg))
				{
					materialStatus = salesArea.getMaterialStatus();
					break;
				}
			}
		}
		else
		{
			materialStatus = geEdgeProduct.getMaterialStatus();
		}
		LOG.info("Get Material Status For Current Sales Area - END" );
		return materialStatus;
	}
	
	
	public String getPlantForCurrentSalesAreaData(final GEEdgeProductModel geEdgeProduct, final UserService userService){

		String deliveryPlant = null;
		final Collection<BHGESalesAreaDataModel> salesAreaDatas = geEdgeProduct != null && geEdgeProduct.getSalesAreaData() != null
				&& !geEdgeProduct.getSalesAreaData().isEmpty() ? geEdgeProduct.getSalesAreaData() : Collections.EMPTY_LIST;
		String distributionChannel = StringUtils.EMPTY;
		String division = StringUtils.EMPTY;
		String salesAreaUid = StringUtils.EMPTY;
		if (!userService.isAnonymousUser(userService.getCurrentUser())) {
			GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
			B2BUnitModel defaultB2BUnit = currentUser.getDefaultB2BUnit();
			if(defaultB2BUnit != null) {
				
				final String sessionSalesAreaArray[] = defaultB2BUnit.getUid().split("_");
				salesAreaUid = sessionSalesAreaArray[1];
				distributionChannel = sessionSalesAreaArray[2];
				division = sessionSalesAreaArray[3];
			}
			for (final BHGESalesAreaDataModel salesArea : salesAreaDatas) {
				if (salesArea != null && StringUtils.isNotBlank(salesArea.getSalesOrganization()) && salesAreaUid != null
						&& salesArea.getSalesOrganization().equalsIgnoreCase(salesAreaUid) 
						&& StringUtils.isNotBlank(salesArea.getDistributionChannel()) && salesArea.getDistributionChannel().equalsIgnoreCase(distributionChannel)
						&& StringUtils.isNotBlank(salesArea.getDivision()) && salesArea.getDivision().equalsIgnoreCase(division))
				{
					deliveryPlant = salesArea.getDeliveryPlant();
					LOG.info("BHGEProductUtil : deliveryPlant for current sales area is " + deliveryPlant);
					break;
				}
			}
		}
		
		return deliveryPlant;
	}
	
	
}
