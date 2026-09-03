/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bhge.sap.orderfulfilment.suites;


import com.bhge.sap.orderfulfilment.actions.SetCompletionStatusActionTest;
import com.bhge.sap.orderfulfilment.actions.SetConfirmationStatusActionTest;
import com.bhge.sap.orderfulfilment.actions.UpdateERPOrderStatusActionTest;
import com.bhge.sap.orderfulfilment.jobs.OrderCancelRepairJobTest;
import com.bhge.sap.orderfulfilment.jobs.OrderExchangeRepairJobTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;


@SuppressWarnings("javadoc")
@RunWith(Suite.class)
@SuiteClasses(
        {UpdateERPOrderStatusActionTest.class, SetConfirmationStatusActionTest.class, SetCompletionStatusActionTest.class, OrderExchangeRepairJobTest.class, OrderCancelRepairJobTest.class})
public class UnitTestSuite {
    // Intentionally left blank
}
