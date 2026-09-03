/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.webservices.interceptors;

import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.core.model.BHGERegieterCustomer;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.PrepareInterceptor;
import de.hybris.platform.util.Config;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import java.lang.annotation.Retention;
import java.util.Arrays;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


public class CommerceCustomerInterceptor implements PrepareInterceptor<GEEdgeCustomerModel>
{
	private static final Logger LOGGER = Logger.getLogger(CommerceCustomerInterceptor.class);

	private B2BUnitService<B2BUnitModel, UserModel> b2bUnitService;

	private RegisterUserDao registerDao;

	@Override
	public void onPrepare(final GEEdgeCustomerModel customerModel, final InterceptorContext ctx) throws InterceptorException
	{
		LOGGER.info("Commerce Customer Modification Triggered.");
		try
		{
			if (ctx.isNew(customerModel) && "BHGERegister".equals(customerModel.getDefaultB2BUnit().getUid()))
			{
				boolean salesareaFound = false;
				final String customerId = customerModel.getCustomerID();
				String sso = StringUtils.trimToEmpty(customerModel.getSso());
				LOGGER.info("user SSO "+ sso);
				LOGGER.info("salesCustomerId = " + customerId);
				final B2BUnitModel soldtoValue = b2bUnitService.getUnitForUid(customerId);
				BHGERegieterCustomerModel bhgeRegieterCustomerModel =  registerDao.validateActivateAccount(sso);
				final String salesareaMapping = Config.getParameter("bhge.register.salesarea");

				Collection<String> accessRequestSoldTos = bhgeRegieterCustomerModel.getApproverCustomerDetails() != null ?
																	Optional.ofNullable(bhgeRegieterCustomerModel
																	.getApproverCustomerDetails())
																	.orElseGet(Collections::emptyList)
																	: Collections.emptyList();

				String firstsoldTo = accessRequestSoldTos.stream().findFirst().orElse("");
				String firstsoldToTranformed = transformSoldToFromRequest(firstsoldTo);
				LOGGER.info("access request soldtos : " + firstsoldTo);
				LOGGER.info("access request soldtos  transformed: " + transformSoldToFromRequest(firstsoldTo));

				if (soldtoValue != null && salesareaMapping != null)
				{
					LOGGER.info("salesareaMapping = " + salesareaMapping);
					int entryPoint = salesareaMapping.indexOf("&" + soldtoValue.getCountryCP() + "-");
					final String salesareaData;
					// first preference if accessrequset has sold
					if(StringUtils.isNotEmpty(firstsoldToTranformed)) {

						if (firstsoldToTranformed.equalsIgnoreCase("00000_"))
						{
							final PrincipalModel principalModel = soldtoValue.getMembers().size()>=0 ? soldtoValue.getMembers().stream()
									.filter(each -> (each instanceof B2BUnitModel)).findFirst().orElse((PrincipalModel) soldtoValue):null;
							salesareaData = principalModel!=null ? principalModel.getUid():"NoChildUnits";
							firstsoldToTranformed=salesareaData;
						}
						else
						{
							//0000138305_1800_GE_GE.
							salesareaData = firstsoldToTranformed;
						}

					} else if (entryPoint == -1) { // do a property lookup auto apporval flow
						entryPoint = salesareaMapping.indexOf("&&&-");
						salesareaData = salesareaMapping.substring(entryPoint + 4);
					} else {
						final int endpoint = salesareaMapping.indexOf("-&", entryPoint);
						salesareaData = salesareaMapping.substring(entryPoint + 4, endpoint);
					}
					final String[] salesListing = salesareaData.split("-");
					LOGGER.info("salesSearchList = " + Arrays.toString(salesListing));
					for (int ict = 0; ict < salesListing.length && !salesareaFound; ict++)
					{
						LOGGER.info("	salesSearch = " + salesListing[ict]);
						if (soldtoValue.getMembers() != null && soldtoValue.getMembers().size() > 0)
						{
							for (final PrincipalModel principalModel : soldtoValue.getMembers())
							{
								if (principalModel instanceof B2BUnitModel)
								{
									final String subunitVal = principalModel.getUid();
										LOGGER.info("		salesareaList = " + subunitVal);
										final int countSeparator = subunitVal.length() - subunitVal.replace("_", "").length();
										if (countSeparator == 3)
										{
											final String[] salesareaArray = subunitVal.split("_");
											LOGGER.info("		salesareaArray = " + Arrays.toString(salesareaArray));
										if (salesListing[ict].equals(salesareaArray[1]))
										{
											LOGGER.info("			soldtoSELECT = " + subunitVal);
											customerModel.setDefaultSoldTo(soldtoValue);
											customerModel.setDefaultB2BUnit((B2BUnitModel) principalModel);
											salesareaFound = true;
											break;
										}
									}
								}
							}
						}
					}
					if (!salesareaFound)
					{
						LOGGER.info("Default Sales Area Not Found for new GEEdgeCustomer. Please correct.");
					}

                    if (soldtoValue.getMembers() != null && soldtoValue.getMembers().size() > 0 && sso != null
                            && bhgeRegieterCustomerModel.getApproverCustomerDetails() != null
                            && bhgeRegieterCustomerModel.getApproverCustomerDetails().size() > 1 )
                    {
                        for (final PrincipalModel principalModel : soldtoValue.getMembers())
                        {
                            if (principalModel instanceof B2BUnitModel)
                            {
                                final String subunitVal = principalModel.getUid();
                                final int countSeparator = subunitVal.length() - subunitVal.replace("_", "").length();
                                if (countSeparator == 3)
                                {
                                    LOGGER.info("ChildB2Bunit " + subunitVal);
//                                    final String[] salesareaArray = subunitVal.split("_");
//                                    LOGGER.info("		salesareaArray = " + Arrays.toString(salesareaArray));
                                    String childSoldTo = this.transformSoldToFromRequest(bhgeRegieterCustomerModel.getApproverCustomerDetails().iterator().next());
                                    if (StringUtils.equals(principalModel.getUid(), childSoldTo))
                                    {
                                        LOGGER.info("Setting the child soldTO = " + childSoldTo);
                                        customerModel.setDefaultSoldTo(soldtoValue);
                                        customerModel.setDefaultB2BUnit((B2BUnitModel) principalModel);
                                        break;
                                    }
                                }
                            }
                        }
                    }
				}
			}
		}
		catch (final Exception exc)
		{
			LOGGER.error("Commerce Customer Modification ERROR: ",exc);
//			exc.printStackTrace();
		}
	}

	/**
	 * @return the b2bUnitService
	 */
	public B2BUnitService<B2BUnitModel, UserModel> getB2bUnitService()
	{
		return b2bUnitService;
	}

	/**
	 * @param b2bUnitService
	 *           the b2bUnitService to set
	 */
	public void setB2bUnitService(final B2BUnitService<B2BUnitModel, UserModel> b2bUnitService)
	{
		this.b2bUnitService = b2bUnitService;
	}

	/**
	 * @param approveCustomerDetails BHGERegieterCustomer: approverCustomerDetails()
	 * read the data from BHGERegieterCustomer  model approverCustomerDetails attribute and
	 * transform it to the child b2bunit format i.e from approverCustomerDetails
	 * 138305-1800_GE_GE to 0000138305_1800_GE_GE.
	 * @return childSoldTo
	 *
	 */
    public static String transformSoldToFromRequest(String approveCustomerDetails) {

        String parentSoldTo = StringUtils.contains(approveCustomerDetails, "-")
                                        ? StringUtils.split(approveCustomerDetails, "-")[0] : "";

		
		/*
		 * String parentSoldToMin10 = StringUtils.length(parentSoldTo) == 6 ?
		 * StringUtils.prependIfMissing(parentSoldTo,"0000") :
		 * StringUtils.prependIfMissing(parentSoldTo,"00000");
		 */
		 
		
		  String parentSoldToMin10 = null; 
		  if (parentSoldTo != null)
		  {
		     parentSoldToMin10 = ("0000000000" + parentSoldTo).substring(parentSoldTo.length()); 
		  }
		 
        String  salesArea = StringUtils.split(approveCustomerDetails, "-").length >= 2
                                        ? StringUtils.split(approveCustomerDetails, "-")[1] : "";

        String  childSoldTo = StringUtils.join(parentSoldToMin10,"_", salesArea);

        return  childSoldTo;
    }
	public RegisterUserDao getRegisterDao() {
		return registerDao;
	}

	public void setRegisterDao(RegisterUserDao registerDao) {
		this.registerDao = registerDao;
	}
}