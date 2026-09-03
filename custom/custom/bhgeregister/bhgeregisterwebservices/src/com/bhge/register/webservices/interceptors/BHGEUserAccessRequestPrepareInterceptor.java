/**
 *
 */
package com.bhge.register.webservices.interceptors;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.PrepareInterceptor;
import de.hybris.platform.servicelayer.user.daos.UserDao;

import jakarta.annotation.Resource;

import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.enums.BHGEAccessRequestStatus;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;


/**
 * @author 212695810
 *
 */
public class BHGEUserAccessRequestPrepareInterceptor implements PrepareInterceptor<BHGEUserAccessRequestModel>
{

	private static final Logger LOG = Logger.getLogger(BHGEUserAccessRequestPrepareInterceptor.class);

	@Resource(name = "businessProcessService")
	private BusinessProcessService businessProcessService;

	@Resource(name = "bhgeUserEmailService")
	private EmailService emailService;

	@Resource(name = "userDao")
	UserDao userDao;

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.servicelayer.interceptor.PrepareInterceptor#onPrepare(java.lang.Object,
	 * de.hybris.platform.servicelayer.interceptor.InterceptorContext)
	 */
	@Override
	public void onPrepare(final BHGEUserAccessRequestModel accessRequestModel, final InterceptorContext ctx)
			throws InterceptorException
	{
		LOG.info("Inside BHGEUserAccessRequestPrepareInterceptor onPrepare() method");
		if (accessRequestModel != null && ctx.isModified(accessRequestModel, BHGEUserAccessRequestModel.REQUESTSTATUS)
				&& accessRequestModel.getRequestStatus() == BHGEAccessRequestStatus.COMPLETED
				&& accessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1
				&& "OrderTracking"
						.equalsIgnoreCase(accessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
		{
			try
			{
				final BHGERegieterCustomerModel bhgeRegisterCustomer = accessRequestModel.getRequesterId();
				if (bhgeRegisterCustomer != null)
				{
					final UserModel customer = userDao.findUserByUID(bhgeRegisterCustomer.getSso());
					if (customer != null && customer instanceof GEEdgeCustomerModel)
					{
						final GEEdgeCustomerModel geEdgeCustomer = (GEEdgeCustomerModel) customer;
						emailService.registerMail("AccessGranted", geEdgeCustomer.getEmail(), geEdgeCustomer.getUid(),
								geEdgeCustomer.getName(), null, null);
					}
				}
			}
			catch (final CMSItemNotFoundException e)
			{
				LOG.error("CMSItemNotFound Exception occurred in BHGEUserAccessRequestPrepareInterceptor" + e);
			}
			catch (final EmailException e)
			{
				LOG.error("Email Exception occurred in BHGEUserAccessRequestPrepareInterceptor" + e);
			}
		}
		
		if (accessRequestModel != null && ctx.isModified(accessRequestModel, BHGEUserAccessRequestModel.REQUESTSTATUS)
				&& accessRequestModel.getRequestStatus() == BHGEAccessRequestStatus.COMPLETED
				&& accessRequestModel.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5
				&& "OFSOrderTracking"
						.equalsIgnoreCase(accessRequestModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
		{
			try
			{
				final BHGERegieterCustomerModel bhgeRegisterCustomer = accessRequestModel.getRequesterId();
				if (bhgeRegisterCustomer != null)
				{
					final UserModel customer = userDao.findUserByUID(bhgeRegisterCustomer.getUid());
					if (customer != null)
					{
						
						emailService.registerOFSMail("AccessGranted", bhgeRegisterCustomer.getEmail(), bhgeRegisterCustomer.getUid(),
								bhgeRegisterCustomer.getGivenName(), null, null);
					}
				}
			}
			catch (final CMSItemNotFoundException e)
			{
				LOG.error("CMSItemNotFound Exception occurred in BHGEUserAccessRequestPrepareInterceptor" + e);
			}
			catch (final EmailException e)
			{
				LOG.error("Email Exception occurred in BHGEUserAccessRequestPrepareInterceptor" + e);
			}
		}
	}

}
