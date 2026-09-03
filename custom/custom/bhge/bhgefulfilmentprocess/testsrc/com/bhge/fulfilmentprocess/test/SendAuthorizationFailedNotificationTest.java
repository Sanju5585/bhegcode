/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.fulfilmentprocess.test;

import de.hybris.platform.orderprocessing.events.AuthorizationFailedEvent;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.servicelayer.event.EventService;
import com.bhge.fulfilmentprocess.actions.order.SendAuthorizationFailedNotificationAction;


import org.junit.Before;
import org.junit.Test;
import org.mockito.*;



/**
*
*/
public class SendAuthorizationFailedNotificationTest
{
	@InjectMocks
	private final SendAuthorizationFailedNotificationAction sendAuthorizationFailedNotification = new SendAuthorizationFailedNotificationAction();

	@Mock
	private EventService eventService;

	@Before
	public void setUp()
	{
		MockitoAnnotations.initMocks(this);
	}

	/**
	 * Test method for
	 * {@link com.bhge.fulfilmentprocess.actions.order.SendOrderPlacedNotificationAction#executeAction(OrderProcessModel)}
	 * .
	 */
	@Test
	public void testExecuteActionOrderProcessModel()
	{
		final OrderProcessModel process = new OrderProcessModel();
		sendAuthorizationFailedNotification.executeAction(process);

		Mockito.verify(eventService).publishEvent(Mockito.argThat(item -> {
			if (item instanceof AuthorizationFailedEvent) {
				final AuthorizationFailedEvent event = (AuthorizationFailedEvent) item;
				if (event.getProcess().equals(process)) {
					return true;
				}
			}
			return false;
		}));
	}
}
