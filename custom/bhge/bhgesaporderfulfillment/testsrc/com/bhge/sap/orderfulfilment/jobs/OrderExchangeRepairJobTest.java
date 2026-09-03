/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.bhge.sap.orderfulfilment.jobs;

import de.hybris.bootstrap.annotations.UnitTest;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.orderprocessing.model.OrderProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.sap.orderexchange.constants.SapOrderExchangeActionConstants;
import de.hybris.platform.sap.orderexchange.outbound.OrderExchangeRepair;
import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@SuppressWarnings("javadoc")
@UnitTest
public class OrderExchangeRepairJobTest {

    private List<OrderProcessModel> bpList;

    @Mock
    private OrderExchangeRepair orderExchangeRepair;

    @Mock
    private CronJobModel cronJobModel;

    @Mock
    private BusinessProcessService businessProcessService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        final OrderProcessModel bp = new OrderProcessModel();
        bpList = new ArrayList<>();
        bpList.add(bp);

    }

    @Test
    public void cronJobTest() {
        final OrderExchangeRepairJob repairJob = new OrderExchangeRepairJob();
        repairJob.setOrderExchangeRepair(orderExchangeRepair);
        repairJob.setBusinessProcessService(businessProcessService);
        when(orderExchangeRepair.findAllProcessModelsToRepair(BhgesaporderfulfillmentConstants.ORDER_PROCESS_NAME,
                SapOrderExchangeActionConstants.ERROR_END_MESSAGE)).thenReturn(bpList);

        repairJob.perform(cronJobModel);
        verify(orderExchangeRepair).findAllProcessModelsToRepair(BhgesaporderfulfillmentConstants.ORDER_PROCESS_NAME,
                SapOrderExchangeActionConstants.ERROR_END_MESSAGE);

    }

}
