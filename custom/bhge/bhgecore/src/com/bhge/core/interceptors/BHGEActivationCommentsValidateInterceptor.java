/**
 *
 */
package com.bhge.core.interceptors;

import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.ValidateInterceptor;
import de.hybris.platform.util.localization.Localization;


/**
 * @author 1692442
 *
 */
public class BHGEActivationCommentsValidateInterceptor implements ValidateInterceptor<GEEdgeCustomerModel>
{

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.servicelayer.interceptor.ValidateInterceptor#onValidate(java.lang.Object,
	 * de.hybris.platform.servicelayer.interceptor.InterceptorContext)
	 */
	public void onValidate(final GEEdgeCustomerModel gEEdgeCustomerModel, final InterceptorContext ctx) throws InterceptorException
	{
		// XXX Auto-generated method stub


		if (!(ctx.isNew(gEEdgeCustomerModel)) && (ctx.isModified(gEEdgeCustomerModel, gEEdgeCustomerModel.ACTIVE)
				&& !(ctx.isModified(gEEdgeCustomerModel, gEEdgeCustomerModel.CUSTOMERACTIVATIONCOMMENTS))))
		{
			throw new InterceptorException("Please updated the comments in CUSTOMERACTIVATIONCOMMENTS");

		}


	}

}
