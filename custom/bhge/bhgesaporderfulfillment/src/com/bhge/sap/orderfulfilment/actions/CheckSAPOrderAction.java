/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bhge.sap.orderfulfilment.actions;


import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.action.AbstractAction;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.task.RetryLaterException;

import java.util.HashSet;
import java.util.Set;

import org.apache.log4j.Logger;

import com.bhge.core.enums.BHGERMACommerceType;




/**
 * This example action checks the order for required data in the business process. Skipping this action may result in
 * failure in one of the subsequent steps of the process. The relation between the order and the business process is
 * defined in basecommerce extension through item OrderProcess. Therefore if your business process has to access the
 * order (a typical case), it is recommended to use the OrderProcess as a parentClass instead of the plain
 * BusinessProcess.
 */
public class CheckSAPOrderAction extends AbstractAction<OrderProcessModel> {
	private static final Logger LOG = Logger.getLogger(CheckSAPOrderAction.class);
	
	public enum Transition {
		OK, NOK, RMA, RFQ;

		public static Set<String> getStringValues() {
			final Set<String> res = new HashSet<String>();
			for (final Transition transitions : Transition.values()) {
				res.add(transitions.toString());
			}
			return res;
		}
	}
	
	@Override
	public String execute(OrderProcessModel process) throws RetryLaterException, Exception {
		
		return executeAction(process).toString();
	}


	public Transition executeAction(final OrderProcessModel process) {
		final OrderModel order = process.getOrder();
		if (order == null) {
			LOG.error("Missing the order, exiting the process");
			return Transition.NOK;
		}
		final BHGERMACommerceType  cartCommerceType = order.getCommerceType() != null ? order.getCommerceType() : BHGERMACommerceType.BUY;
		LOG.info("BHGE order commerce type is " + cartCommerceType.getCode() + " for Order " + order.getCode());
		if (BHGERMACommerceType.RETURNS.getCode().equals(cartCommerceType.getCode())) {
			return Transition.RMA;
		} else if (BHGERMACommerceType.BUY.getCode().equals(cartCommerceType.getCode()) && order.getIsQuote()) {
			LOG.info("US530529: BHGE order is quote " + order.getCode());
			setOrderStatus(order, OrderStatus.PENDING_QUOTE);
			return Transition.RFQ;
		} else {
			setOrderStatus(order, OrderStatus.CHECKED_VALID);
			return Transition.OK;
		}

	}
	
	@Override
	public Set<String> getTransitions() {
		 return CheckSAPOrderAction.Transition.getStringValues();
	}
	
	
}
