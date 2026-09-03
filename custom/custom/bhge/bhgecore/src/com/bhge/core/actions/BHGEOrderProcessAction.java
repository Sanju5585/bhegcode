/**
 * 
 */
package com.bhge.core.actions;

/*
�* [y] hybris Platform
�*
�* Copyright (c) 2000-2011 hybris AG
�* All rights reserved.
�*
�* This software is the confidential and proprietary information of hybris
�* ("Confidential Information"). You shall not disclose such Confidential
�* Information and shall use it only in accordance with the terms of the
�* license agreement you entered into with hybris.
�*
�*
�*/


import de.hybris.platform.b2b.enums.PermissionStatus;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BPermissionResultModel;
import de.hybris.platform.b2b.process.approval.actions.AbstractB2BApproveOrderDecisionAction;
import de.hybris.platform.b2b.process.approval.actions.AbstractProceduralB2BOrderApproveAction;
import de.hybris.platform.b2b.process.approval.model.B2BApprovalProcessModel;
import de.hybris.platform.b2b.services.impl.DefaultB2BPermissionService;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction.Transition;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.task.RetryLaterException;

import java.util.Set;

import org.apache.log4j.Logger;


public class BHGEOrderProcessAction extends
		AbstractProceduralB2BOrderApproveAction {
	private static final Logger LOG = Logger
			.getLogger(BHGEOrderProcessAction.class);
	private BusinessProcessService businessProcessService;

	@Override
	public void executeAction(final B2BApprovalProcessModel process)
			throws RetryLaterException {
		LOG.info("in BHGEOrderProcessAction");
		final OrderModel orderModel = process.getOrder();
		LOG.info("in order" + orderModel.getCode());

		final OrderProcessModel orderProcessModel = (OrderProcessModel) getBusinessProcessService()
				.createProcess(
						"orderConfirmationEmailProcess" + "-"
								+ orderModel.getCode() + "-"
								+ System.currentTimeMillis(),
						"orderConfirmationEmailProcess");
		orderProcessModel.setOrder(orderModel);
		getModelService().save(orderProcessModel);
		getBusinessProcessService().startProcess(orderProcessModel);

	}

	protected BusinessProcessService getBusinessProcessService() {
		return businessProcessService;
	}

	
	public void setBusinessProcessService(
			final BusinessProcessService businessProcessService) {
		this.businessProcessService = businessProcessService;
	}

}